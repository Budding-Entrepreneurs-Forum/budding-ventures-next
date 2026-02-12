import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Upload, FileText, Image, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import logo from '@/assets/logo.png';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const YEARS = Array.from({ length: 5 }, (_, i) => String(2024 + i));

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState('');

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setThumbnailPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPdfName(e.target.files?.[0]?.name || '');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Login Section */}
      {!isLoggedIn ? (
        <div className="min-h-screen flex flex-col lg:flex-row">
          {/* Left Branding Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full flex items-center justify-center p-8 md:p-16"
            style={{
              background: 'linear-gradient(135deg, hsl(218 36% 89% / 0.6), hsl(0 14% 97%))',
            }}
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

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsLoggedIn(true);
                  }}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* Dashboard / Upload Form */
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
            <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
              Logout
            </Button>
          </div>

          <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-lg space-y-6">
            {/* Newsletter Name */}
            <div className="space-y-2">
              <Label htmlFor="newsletter-name" className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Newsletter Name
              </Label>
              <Input id="newsletter-name" placeholder="e.g. The Startup Digest – March 2025" />
            </div>

            {/* Thumbnail Upload */}
            <div className="space-y-2">
              <Label htmlFor="thumbnail" className="flex items-center gap-2">
                <Image className="h-4 w-4 text-primary" /> Upload Thumbnail
              </Label>
              <Input id="thumbnail" type="file" accept="image/*" onChange={handleThumbnailChange} />
              {thumbnailPreview && (
                <div className="mt-3 rounded-xl overflow-hidden border border-border w-40 h-40">
                  <img src={thumbnailPreview} alt="Thumbnail preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Month & Year */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" /> Month
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    {MONTHS.map((m) => (
                      <SelectItem key={m} value={m}>{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Year</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {YEARS.map((y) => (
                      <SelectItem key={y} value={y}>{y}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* PDF Upload */}
            <div className="space-y-2">
              <Label htmlFor="pdf" className="flex items-center gap-2">
                <Upload className="h-4 w-4 text-primary" /> Upload PDF
              </Label>
              <Input id="pdf" type="file" accept=".pdf" onChange={handlePdfChange} />
              {pdfName && (
                <p className="text-sm text-muted-foreground mt-1">Selected: {pdfName}</p>
              )}
            </div>

            <Button className="w-full" size="lg">
              Publish Newsletter
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Admin;
