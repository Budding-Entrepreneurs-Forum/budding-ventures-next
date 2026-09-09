import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2, Search, Download, Eye, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import { recruitmentDepartments } from '@/data/mitwpuAcademics';

const STATUSES = ['Pending', 'Under Review', 'Shortlisted', 'Selected', 'Rejected'] as const;
type Status = (typeof STATUSES)[number];

interface Application {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  prn: string;
  contact_number: string;
  linkedin_url: string | null;
  school: string;
  course: string;
  specialization: string | null;
  current_year: string;
  division: string;
  departments: string[];
  why_join: string;
  status: Status;
}

const statusStyles: Record<Status, string> = {
  'Pending': 'bg-muted text-muted-foreground',
  'Under Review': 'bg-primary/15 text-primary',
  'Shortlisted': 'bg-amber-100 text-amber-800',
  'Selected': 'bg-emerald-100 text-emerald-800',
  'Rejected': 'bg-destructive/10 text-destructive',
};

export const ManageApplications = () => {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selected, setSelected] = useState<Application | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('recruitment_applications')
      .select('*')
      .order('created_at', { ascending: false });
    setLoading(false);
    if (error) {
      toast.error('Could not load applications.');
      return;
    }
    setApps((data || []) as Application[]);
  };

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return apps.filter((a) => {
      const matchesSearch = !q ||
        [a.full_name, a.email, a.prn, a.contact_number].some((v) => (v || '').toLowerCase().includes(q));
      const matchesDept = !deptFilter || (a.departments || []).includes(deptFilter);
      const matchesStatus = !statusFilter || a.status === statusFilter;
      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [apps, search, deptFilter, statusFilter]);

  const updateStatus = async (id: string, status: Status) => {
    const prev = apps;
    setApps((list) => list.map((a) => (a.id === id ? { ...a, status } : a)));
    const { error } = await supabase.from('recruitment_applications').update({ status }).eq('id', id);
    if (error) {
      setApps(prev);
      toast.error('Could not update status.');
    } else {
      toast.success(`Status set to ${status}`);
    }
  };

  const exportCsv = () => {
    const headers = [
      'Submission Date and Time', 'Full Name', 'MIT-WPU Email Address', 'PRN Number', 'Contact Number',
      'LinkedIn Profile', 'School', 'Course', 'Specialization', 'Current Year', 'Division',
      'Preferred Department 1', 'Preferred Department 2', 'Preferred Department 3',
      'Why do you want to join BEF?', 'Application Status',
    ];
    const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const rows = filtered.map((a) => [
      new Date(a.created_at).toLocaleString(), a.full_name, a.email, a.prn, a.contact_number,
      a.linkedin_url || '', a.school, a.course, a.specialization || '', a.current_year, a.division,
      a.departments?.[0] || '', a.departments?.[1] || '', a.departments?.[2] || '',
      a.why_join, a.status,
    ].map(esc).join(','));
    const csv = [headers.map(esc).join(','), ...rows].join('\n');
    const url = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `bef-applications-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="text-xl font-semibold">Recruitment Applications</h2>
          <p className="text-sm text-muted-foreground">{filtered.length} of {apps.length} applications</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={load} disabled={loading}>
            <RefreshCw className="w-4 h-4 mr-1.5" /> Refresh
          </Button>
          <Button size="sm" onClick={exportCsv} disabled={!filtered.length}>
            <Download className="w-4 h-4 mr-1.5" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 mb-5">
        <div className="relative sm:col-span-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search name, email, PRN" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)} className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm">
          <option value="">All departments</option>
          {recruitmentDepartments.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm">
          <option value="">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12 text-muted-foreground">
          <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading applications...
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground py-10 text-center border border-dashed border-border rounded-xl">
          No applications found.
        </p>
      ) : (
        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-sm min-w-[720px]">
            <thead className="bg-muted/50 text-left">
              <tr>
                <th className="px-3 py-2.5 font-medium">Name</th>
                <th className="px-3 py-2.5 font-medium">Course</th>
                <th className="px-3 py-2.5 font-medium">Departments</th>
                <th className="px-3 py-2.5 font-medium">Submitted</th>
                <th className="px-3 py-2.5 font-medium">Status</th>
                <th className="px-3 py-2.5 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr key={a.id} className="border-t border-border align-top">
                  <td className="px-3 py-3">
                    <div className="font-medium">{a.full_name}</div>
                    <div className="text-xs text-muted-foreground break-all">{a.email}</div>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{a.course}<div className="text-xs">{a.current_year}</div></td>
                  <td className="px-3 py-3 text-xs text-muted-foreground">{(a.departments || []).join(', ')}</td>
                  <td className="px-3 py-3 text-xs text-muted-foreground whitespace-nowrap">{new Date(a.created_at).toLocaleDateString()}</td>
                  <td className="px-3 py-3">
                    <select
                      value={a.status}
                      onChange={(e) => updateStatus(a.id, e.target.value as Status)}
                      className={`px-2 py-1 rounded-md text-xs font-medium border-0 ${statusStyles[a.status]}`}
                    >
                      {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-3 py-3">
                    <Button variant="ghost" size="sm" onClick={() => setSelected(a)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{selected?.full_name}</DialogTitle></DialogHeader>
          {selected && (
            <div className="space-y-3 text-sm">
              {[
                ['Email', selected.email],
                ['PRN', selected.prn],
                ['Contact', selected.contact_number],
                ['LinkedIn', selected.linkedin_url || 'Not provided'],
                ['School', selected.school],
                ['Course', selected.course],
                ['Specialization', selected.specialization || 'Not Applicable'],
                ['Current Year', selected.current_year],
                ['Division', selected.division],
                ['Preferred Departments', (selected.departments || []).join(', ')],
                ['Status', selected.status],
                ['Submitted', new Date(selected.created_at).toLocaleString()],
              ].map(([label, value]) => (
                <div key={label as string} className="grid grid-cols-3 gap-3">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="col-span-2 break-words">{value}</span>
                </div>
              ))}
              <div>
                <p className="text-muted-foreground mb-1">Why they want to join</p>
                <p className="whitespace-pre-wrap bg-muted/40 p-3 rounded-lg">{selected.why_join}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
