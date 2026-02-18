
-- 1. Create role enum and user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 2. Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 3. Assign admin role to existing admin user
INSERT INTO public.user_roles (user_id, role)
VALUES ('764bec21-5621-4255-a457-d304c9b77b18', 'admin');

-- 4. Drop old permissive newsletter policies
DROP POLICY IF EXISTS "Authenticated users can insert newsletters" ON public.newsletters;
DROP POLICY IF EXISTS "Authenticated users can update newsletters" ON public.newsletters;
DROP POLICY IF EXISTS "Authenticated users can delete newsletters" ON public.newsletters;

-- 5. Create admin-only newsletter policies
CREATE POLICY "Admins can insert newsletters"
  ON public.newsletters FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update newsletters"
  ON public.newsletters FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete newsletters"
  ON public.newsletters FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 6. Drop old permissive storage policies
DROP POLICY IF EXISTS "Authenticated users can upload newsletter files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update newsletter files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete newsletter files" ON storage.objects;

-- 7. Create admin-only storage policies
CREATE POLICY "Admin can upload newsletter files"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'newsletters' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin can update newsletter files"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'newsletters' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin can delete newsletter files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'newsletters' AND public.has_role(auth.uid(), 'admin'));

-- 8. RLS policy on user_roles (admin read-only, no public write)
CREATE POLICY "Users can read own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());
