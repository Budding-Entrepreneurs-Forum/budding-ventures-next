import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ADMIN_EMAIL = "buddingentrepreneursforum@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { otp_id, new_password } = await req.json();

    if (!otp_id || !new_password) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (new_password.length < 7) {
      return new Response(
        JSON.stringify({ error: "Password must be at least 7 characters." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Verify the OTP record is verified and not used
    const { data: otpRows, error: fetchError } = await supabaseAdmin
      .from("admin_otps")
      .select("*")
      .eq("id", otp_id)
      .eq("verified", true)
      .eq("used", false)
      .gt("expires_at", new Date().toISOString())
      .limit(1);

    if (fetchError) throw fetchError;

    if (!otpRows || otpRows.length === 0) {
      return new Response(
        JSON.stringify({ error: "OTP session expired or invalid. Please request a new OTP." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Find admin user by email
    const { data: userList, error: listError } = await supabaseAdmin.auth.admin.listUsers();
    if (listError) throw listError;

    const adminUser = userList.users.find((u) => u.email === ADMIN_EMAIL);
    if (!adminUser) {
      return new Response(
        JSON.stringify({ error: "Admin account not found." }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Update password
    const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
      adminUser.id,
      { password: new_password }
    );

    if (updateError) throw updateError;

    // Mark OTP as used
    await supabaseAdmin
      .from("admin_otps")
      .update({ used: true })
      .eq("id", otp_id);

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
