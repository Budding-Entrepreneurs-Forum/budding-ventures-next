import { useState } from 'react';
import { Pencil, Trash2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNewsletters, type DbNewsletter } from '@/hooks/useNewsletters';
import { EditNewsletterDialog } from './EditNewsletterDialog';

function extractStoragePath(publicUrl: string): string | null {
  const match = publicUrl.match(/\/storage\/v1\/object\/public\/newsletters\/(.+)$/);
  return match ? match[1] : null;
}

export const ManageNewsletters = () => {
  const { newsletters, isLoading } = useNewsletters();
  const [editItem, setEditItem] = useState<DbNewsletter | null>(null);
  const [deleteItem, setDeleteItem] = useState<DbNewsletter | null>(null);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDeleting(true);
    try {
      const thumbPath = extractStoragePath(deleteItem.thumbnail_url);
      const pdfPath = extractStoragePath(deleteItem.pdf_url);
      const toRemove = [thumbPath, pdfPath].filter(Boolean) as string[];
      if (toRemove.length) await supabase.storage.from('newsletters').remove(toRemove);

      const { error } = await supabase.from('newsletters').delete().eq('id', deleteItem.id);
      if (error) throw error;
      toast.success('Newsletter deleted successfully.');
    } catch (err: any) {
      toast.error(err.message || 'Failed to delete newsletter');
    } finally {
      setDeleting(false);
      setDeleteItem(null);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Manage Existing Newsletters</h2>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      ) : newsletters.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">No newsletters published yet.</p>
      ) : (
        <div className="space-y-4">
          {newsletters.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-background rounded-xl border border-border p-4 shadow-sm"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                <img src={item.thumbnail_url} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.month} {item.year}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" onClick={() => setEditItem(item)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive" onClick={() => setDeleteItem(item)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      {editItem && (
        <EditNewsletterDialog
          key={editItem.id}
          newsletter={editItem}
          open={!!editItem}
          onOpenChange={(open) => { if (!open) setEditItem(null); }}
        />
      )}

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteItem} onOpenChange={(open) => { if (!open) setDeleteItem(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this newsletter?</AlertDialogTitle>
            <AlertDialogDescription>
              "{deleteItem?.title}" will be permanently removed along with its files. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={deleting} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {deleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {deleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
