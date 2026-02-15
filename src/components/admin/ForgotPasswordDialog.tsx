import { useState } from 'react';
import { Loader2, Mail, KeyRound, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ADMIN_EMAIL = 'buddingentrepreneursforum@gmail.com';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ForgotPasswordDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<'email' | 'sent'>('email');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Only actually send reset if it matches admin email
    if (email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/admin`,
      });
    }

    // Always show generic success message
    setLoading(false);
    setStep('sent');
  };

  const handleClose = () => {
    setStep('email');
    setEmail('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <KeyRound className="h-5 w-5 text-primary" />
            Reset Admin Password
          </DialogTitle>
          <DialogDescription>
            Reset password for admin account
          </DialogDescription>
        </DialogHeader>

        {step === 'email' && (
          <form onSubmit={handleSendReset} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="reset-email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" /> Email Address
              </Label>
              <Input
                id="reset-email"
                type="email"
                placeholder="buddingentrepreneursforum@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
              Send Reset Link
            </Button>
          </form>
        )}

        {step === 'sent' && (
          <div className="space-y-4 mt-2 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              If this email is registered, a password reset link has been sent. Please check your inbox and follow the instructions.
            </p>
            <Button variant="outline" className="w-full" onClick={handleClose}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
