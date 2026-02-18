import { useState } from 'react';
import { Loader2, KeyRound, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import {
  InputOTP, InputOTPGroup, InputOTPSlot,
} from '@/components/ui/input-otp';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ADMIN_EMAIL = 'buddingentrepreneursforum@gmail.com';
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{7,}$/;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ForgotPasswordDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<'confirm' | 'otp' | 'reset' | 'done'>('confirm');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: ADMIN_EMAIL });
      if (error) throw error;
      toast.success('OTP sent to the registered admin email.');
      setStep('otp');
    } catch (err: any) {
      toast.error(err.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error('Please enter the full 6-digit OTP.');
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        email: ADMIN_EMAIL,
        token: otp,
        type: 'email',
      });
      if (error) throw error;
      toast.success('OTP verified successfully.');
      setStep('reset');
    } catch (err: any) {
      toast.error(err.message || 'Invalid or expired OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    if (!PASSWORD_REGEX.test(newPassword)) {
      toast.error('Password must be at least 7 characters with a number and special character.');
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      await supabase.auth.signOut();
      toast.success('Password reset successfully! Please log in with your new password.');
      setStep('done');
    } catch (err: any) {
      toast.error(err.message || 'Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStep('confirm');
    setOtp('');
    setNewPassword('');
    setConfirmPassword('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <KeyRound className="h-5 w-5 text-primary" />
            {step === 'confirm' && 'Reset Admin Password'}
            {step === 'otp' && 'Verify OTP'}
            {step === 'reset' && 'Set New Password'}
            {step === 'done' && 'Password Reset'}
          </DialogTitle>
          <DialogDescription>
            {step === 'confirm' && 'Send a one-time password to the registered admin email.'}
            {step === 'otp' && 'An OTP has been sent to the registered admin email.'}
            {step === 'reset' && 'Enter your new password below.'}
            {step === 'done' && 'Your password has been updated.'}
          </DialogDescription>
        </DialogHeader>

        {step === 'confirm' && (
          <div className="space-y-4 mt-2">
            <p className="text-sm text-muted-foreground">
              A 6-digit OTP will be sent to the registered admin email for verification.
            </p>
            <Button className="w-full" onClick={handleSendOtp} disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
              Send OTP
            </Button>
          </div>
        )}

        {step === 'otp' && (
          <div className="space-y-5 mt-2">
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button className="w-full" onClick={handleVerifyOtp} disabled={loading || otp.length !== 6}>
              {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
              Verify OTP
            </Button>
            <button
              type="button"
              onClick={() => { setStep('confirm'); setOtp(''); }}
              className="w-full text-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Resend OTP
            </button>
          </div>
        )}

        {step === 'reset' && (
          <form onSubmit={handleResetPassword} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="new-pw-forgot">New Password</Label>
              <Input id="new-pw-forgot" type="password" placeholder="••••••••" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
              <p className="text-xs text-muted-foreground">Min 7 characters, at least 1 number and 1 special character</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-pw-forgot">Confirm Password</Label>
              <Input id="confirm-pw-forgot" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
              Reset Password
            </Button>
          </form>
        )}

        {step === 'done' && (
          <div className="space-y-4 mt-2 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              Your password has been reset successfully. Please log in with your new password.
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
