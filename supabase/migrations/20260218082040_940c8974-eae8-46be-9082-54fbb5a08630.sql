
-- Deny all write operations on user_roles to regular users
-- Only service_role (backend) can modify roles

CREATE POLICY "No public insert on user_roles"
  ON public.user_roles FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "No public update on user_roles"
  ON public.user_roles FOR UPDATE
  TO authenticated
  USING (false);

CREATE POLICY "No public delete on user_roles"
  ON public.user_roles FOR DELETE
  TO authenticated
  USING (false);
