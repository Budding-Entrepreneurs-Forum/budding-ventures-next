
-- Table to store admin password reset OTPs
CREATE TABLE public.admin_otps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  otp_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false,
  used BOOLEAN NOT NULL DEFAULT false
);

-- Enable RLS
ALTER TABLE public.admin_otps ENABLE ROW LEVEL SECURITY;

-- No public access at all - only edge functions with service role can access
CREATE POLICY "No public select on admin_otps"
  ON public.admin_otps FOR SELECT
  USING (false);

CREATE POLICY "No public insert on admin_otps"
  ON public.admin_otps FOR INSERT
  WITH CHECK (false);

CREATE POLICY "No public update on admin_otps"
  ON public.admin_otps FOR UPDATE
  USING (false);

CREATE POLICY "No public delete on admin_otps"
  ON public.admin_otps FOR DELETE
  USING (false);
