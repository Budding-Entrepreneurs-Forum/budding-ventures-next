import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Loader2, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import logo from '@/assets/logo.png';
import { NewsletterUploadForm } from '@/components/admin/NewsletterUploadForm';
import { ManageNewsletters } from '@/components/admin/ManageNewsletters';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoginLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      setIsLoggedIn(true);
      toast.success('Logged in successfully');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {!isLoggedIn ? (
        <div className="min-h-screen flex flex-col lg:flex-row">
          {/* Left Branding Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full flex items-center justify-center p-8 md:p-16"
            style={{ background: 'linear-gradient(135deg, hsl(218 36% 89% / 0.6), hsl(0 14% 97%))' }}
          >
            <div className="text-center max-w-md">
              <div className="mb-8 inline-block rounded-2xl p-6 bg-background/60 backdrop-blur-sm shadow-lg border border-border/50">
                <img src={logo} alt="Budding Entrepreneurs Forum" className="h-24 w-auto mx-auto" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Budding Entrepreneurs Forum
              </h1>
              <p className="text-muted-foreground text-base">Admin Portal</p>
            </div>
          </motion.div>

          {/* Right Login Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:w-1/2 w-full flex items-center justify-center p-8 md:p-16 bg-background"
          >
            <div className="w-full max-w-sm">
              <div className="bg-background rounded-2xl border border-border p-8 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <Lock className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Admin Login</h2>
                </div>
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={loginLoading}>
                    {loginLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* Dashboard */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4 py-16 md:py-24"
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Newsletter Upload</h1>
              <p className="text-muted-foreground text-sm mt-1">Publish a new newsletter edition</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>

          {/* Section A: Upload */}
          <NewsletterUploadForm />

          {/* Section B: Manage */}
          <ManageNewsletters />
        </motion.div>
      )}
    </div>
  );
};

export default Admin;
