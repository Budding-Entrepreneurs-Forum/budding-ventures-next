CREATE TYPE public.application_status AS ENUM ('Pending', 'Under Review', 'Shortlisted', 'Selected', 'Rejected');

CREATE TABLE public.recruitment_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  prn TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  linkedin_url TEXT,
  school TEXT NOT NULL,
  course TEXT NOT NULL,
  specialization TEXT,
  current_year TEXT NOT NULL,
  division TEXT NOT NULL,
  departments TEXT[] NOT NULL DEFAULT '{}',
  why_join TEXT NOT NULL,
  status public.application_status NOT NULL DEFAULT 'Pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.recruitment_applications TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.recruitment_applications TO authenticated;
GRANT ALL ON public.recruitment_applications TO service_role;

ALTER TABLE public.recruitment_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
ON public.recruitment_applications FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view applications"
ON public.recruitment_applications FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update applications"
ON public.recruitment_applications FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete applications"
ON public.recruitment_applications FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_recruitment_applications_updated_at
BEFORE UPDATE ON public.recruitment_applications
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();