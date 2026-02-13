import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface DbNewsletter {
  id: string;
  title: string;
  month: string;
  year: string;
  thumbnail_url: string;
  pdf_url: string;
  created_at: string;
}

export function useNewsletters(limit?: number) {
  const [newsletters, setNewsletters] = useState<DbNewsletter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNewsletters = async () => {
    let query = supabase
      .from('newsletters')
      .select('*')
      .order('created_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;
    if (error) {
      console.error('Error fetching newsletters:', error);
    } else {
      setNewsletters((data as DbNewsletter[]) || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNewsletters();

    const channel = supabase
      .channel('newsletters-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'newsletters' },
        () => {
          fetchNewsletters();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [limit]);

  return { newsletters, isLoading, refetch: fetchNewsletters };
}
