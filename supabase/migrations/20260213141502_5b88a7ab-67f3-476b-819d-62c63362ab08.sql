
-- Create newsletters table
CREATE TABLE public.newsletters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  month TEXT NOT NULL,
  year TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  pdf_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can view newsletters)
CREATE POLICY "Newsletters are publicly readable"
  ON public.newsletters
  FOR SELECT
  USING (true);

-- Only authenticated users can insert (admin)
CREATE POLICY "Authenticated users can insert newsletters"
  ON public.newsletters
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update newsletters"
  ON public.newsletters
  FOR UPDATE
  TO authenticated
  USING (true);

-- Only authenticated users can delete
CREATE POLICY "Authenticated users can delete newsletters"
  ON public.newsletters
  FOR DELETE
  TO authenticated
  USING (true);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.newsletters;

-- Create storage bucket for newsletters
INSERT INTO storage.buckets (id, name, public) VALUES ('newsletters', 'newsletters', true);

-- Storage policies: public read
CREATE POLICY "Newsletter files are publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'newsletters');

-- Authenticated users can upload
CREATE POLICY "Authenticated users can upload newsletter files"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'newsletters');

-- Authenticated users can update
CREATE POLICY "Authenticated users can update newsletter files"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'newsletters');

-- Authenticated users can delete
CREATE POLICY "Authenticated users can delete newsletter files"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'newsletters');
