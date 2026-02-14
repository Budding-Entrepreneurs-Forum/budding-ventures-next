import { useState } from 'react';
import { FileText, Image, Calendar, Upload, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const YEARS = Array.from({ length: 11 }, (_, i) => String(2020 + i));

export const NewsletterUploadForm = () => {
  const [title, setTitle] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfName, setPdfName] = useState('');
  const [publishing, setPublishing] = useState(false);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setThumbnailPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPdfFile(file || null);
    setPdfName(file?.name || '');
  };

  const handlePublish = async () => {
    if (!title || !month || !year || !thumbnailFile || !pdfFile) {
      toast.error('Please fill all fields and upload both files.');
      return;
    }
    setPublishing(true);
    try {
      const timestamp = Date.now();
      const thumbExt = thumbnailFile.name.split('.').pop();
      const thumbPath = `thumbnails/${timestamp}.${thumbExt}`;
      const { error: thumbErr } = await supabase.storage.from('newsletters').upload(thumbPath, thumbnailFile);
      if (thumbErr) throw thumbErr;
      const { data: thumbUrl } = supabase.storage.from('newsletters').getPublicUrl(thumbPath);

      const pdfPath = `pdfs/${timestamp}.pdf`;
      const { error: pdfErr } = await supabase.storage.from('newsletters').upload(pdfPath, pdfFile);
      if (pdfErr) throw pdfErr;
      const { data: pdfUrlData } = supabase.storage.from('newsletters').getPublicUrl(pdfPath);

      const { error: insertErr } = await supabase.from('newsletters').insert({
        title, month, year,
        thumbnail_url: thumbUrl.publicUrl,
        pdf_url: pdfUrlData.publicUrl,
      } as any);
      if (insertErr) throw insertErr;

      toast.success('Newsletter published successfully!');
      setTitle(''); setMonth(''); setYear('');
      setThumbnailFile(null); setThumbnailPreview(null);
      setPdfFile(null); setPdfName('');
    } catch (err: any) {
      toast.error(err.message || 'Failed to publish newsletter');
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-lg space-y-6">
      <div className="space-y-2">
        <Label htmlFor="newsletter-name" className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" /> Newsletter Name
        </Label>
        <Input id="newsletter-name" placeholder="e.g. The Startup Digest – March 2025" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

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

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" /> Month
          </Label>
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger><SelectValue placeholder="Select month" /></SelectTrigger>
            <SelectContent>
              {MONTHS.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Year</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger><SelectValue placeholder="Select year" /></SelectTrigger>
            <SelectContent>
              {YEARS.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pdf" className="flex items-center gap-2">
          <Upload className="h-4 w-4 text-primary" /> Upload PDF
        </Label>
        <Input id="pdf" type="file" accept=".pdf" onChange={handlePdfChange} />
        {pdfName && <p className="text-sm text-muted-foreground mt-1">Selected: {pdfName}</p>}
      </div>

      <Button className="w-full" size="lg" onClick={handlePublish} disabled={publishing}>
        {publishing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
        {publishing ? 'Publishing...' : 'Publish Newsletter'}
      </Button>
    </div>
  );
};
