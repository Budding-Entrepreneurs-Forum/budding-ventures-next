import { useState } from 'react';
import { Loader2, FileText, Image, Calendar, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { DbNewsletter } from '@/hooks/useNewsletters';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const YEARS = Array.from({ length: 11 }, (_, i) => String(2020 + i));

function extractStoragePath(publicUrl: string): string | null {
  const match = publicUrl.match(/\/storage\/v1\/object\/public\/newsletters\/(.+)$/);
  return match ? match[1] : null;
}

interface Props {
  newsletter: DbNewsletter;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EditNewsletterDialog = ({ newsletter, open, onOpenChange }: Props) => {
  const [title, setTitle] = useState(newsletter.title);
  const [month, setMonth] = useState(newsletter.month);
  const [year, setYear] = useState(newsletter.year);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfName, setPdfName] = useState('');
  const [saving, setSaving] = useState(false);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setThumbnailPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!title || !month || !year) {
      toast.error('Title, month, and year are required.');
      return;
    }
    setSaving(true);
    try {
      const updates: Record<string, string> = { title, month, year };
      const timestamp = Date.now();

      if (thumbnailFile) {
        const oldPath = extractStoragePath(newsletter.thumbnail_url);
        if (oldPath) await supabase.storage.from('newsletters').remove([oldPath]);
        const ext = thumbnailFile.name.split('.').pop();
        const newPath = `thumbnails/${timestamp}.${ext}`;
        const { error } = await supabase.storage.from('newsletters').upload(newPath, thumbnailFile);
        if (error) throw error;
        const { data } = supabase.storage.from('newsletters').getPublicUrl(newPath);
        updates.thumbnail_url = data.publicUrl;
      }

      if (pdfFile) {
        const oldPath = extractStoragePath(newsletter.pdf_url);
        if (oldPath) await supabase.storage.from('newsletters').remove([oldPath]);
        const newPath = `pdfs/${timestamp}.pdf`;
        const { error } = await supabase.storage.from('newsletters').upload(newPath, pdfFile);
        if (error) throw error;
        const { data } = supabase.storage.from('newsletters').getPublicUrl(newPath);
        updates.pdf_url = data.publicUrl;
      }

      const { error: updateErr } = await supabase
        .from('newsletters')
        .update(updates as any)
        .eq('id', newsletter.id);
      if (updateErr) throw updateErr;

      toast.success('Newsletter updated successfully!');
      onOpenChange(false);
    } catch (err: any) {
      toast.error(err.message || 'Failed to update newsletter');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Newsletter</DialogTitle>
          <DialogDescription>Update newsletter details. Leave file fields empty to keep existing files.</DialogDescription>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          <div className="space-y-2">
            <Label className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> Newsletter Name</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Month</Label>
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {MONTHS.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {YEARS.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2"><Image className="h-4 w-4 text-primary" /> Replace Thumbnail (optional)</Label>
            <Input type="file" accept="image/*" onChange={handleThumbnailChange} />
            {thumbnailPreview ? (
              <div className="mt-2 rounded-xl overflow-hidden border border-border w-32 h-32">
                <img src={thumbnailPreview} alt="New thumbnail" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="mt-2 rounded-xl overflow-hidden border border-border w-32 h-32">
                <img src={newsletter.thumbnail_url} alt="Current thumbnail" className="w-full h-full object-cover opacity-60" />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2"><Upload className="h-4 w-4 text-primary" /> Replace PDF (optional)</Label>
            <Input type="file" accept=".pdf" onChange={(e) => { setPdfFile(e.target.files?.[0] || null); setPdfName(e.target.files?.[0]?.name || ''); }} />
            {pdfName && <p className="text-sm text-muted-foreground">New: {pdfName}</p>}
          </div>

          <div className="flex gap-3 pt-2">
            <Button className="flex-1" onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)} disabled={saving}>Cancel</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
