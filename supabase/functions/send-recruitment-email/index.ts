import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Payload {
  name: string;
  email: string;
  departments: string[];
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const { name, email, departments }: Payload = await req.json();
    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const deptList = (departments || []).map((d) => `<li>${d}</li>`).join("");

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;color:#112D4E;line-height:1.6;max-width:560px;margin:0 auto;">
        <h2 style="color:#112D4E;margin-bottom:8px;">Your BEF Application Has Been Received</h2>
        <p>Dear ${name},</p>
        <p>Thank you for applying to the <strong>Budding Entrepreneurs Forum</strong>, MIT-WPU. We have successfully received your recruitment application.</p>
        ${deptList ? `<p style="margin-bottom:4px;"><strong>Preferred departments:</strong></p><ul style="margin-top:0;">${deptList}</ul>` : ""}
        <p>Our team will review every application carefully. Shortlisted candidates will be contacted regarding the next steps of the selection process.</p>
        <p>Taking initiative and stepping forward is an important part of every entrepreneurial journey, and you have already made that decision. We appreciate the effort you have put into applying.</p>
        <p style="margin-top:24px;">Warm regards,<br /><strong>Budding Entrepreneurs Forum</strong><br />MIT World Peace University, Pune</p>
        <p style="font-size:12px;color:#3F72AF;margin-top:24px;">This is an automated message. Please do not reply to this email.</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Budding Entrepreneurs Forum <no-reply@buddingentrepreneursforum.in>",
        to: [email],
        subject: "Your BEF Recruitment Application Has Been Received",
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      // Do not fail the application submission when the email provider rejects
      // the send (e.g. sender domain not yet verified). Log and report softly.
      console.error(`Resend API error [${res.status}]:`, JSON.stringify(data));
      return new Response(
        JSON.stringify({ success: false, emailSent: false, reason: data?.message || "Email provider rejected the send" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true, emailSent: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("send-recruitment-email error:", message);
    return new Response(JSON.stringify({ success: false, emailSent: false, error: message }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
