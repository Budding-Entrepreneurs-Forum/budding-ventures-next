import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { SkeletonImage } from '@/components/ui/SkeletonImage';
import { BookOpen, Loader2 } from 'lucide-react';
import { useNewsletters, type DbNewsletter } from '@/hooks/useNewsletters';
import { FlipbookViewer } from '@/components/FlipbookViewer';

const Blog = () => {
  const { newsletters, isLoading } = useNewsletters();
  const [selectedNewsletter, setSelectedNewsletter] = useState<DbNewsletter | null>(null);

  useEffect(() => {
    document.title = 'Blog | Budding Entrepreneurs Forum – Entrepreneurship & Startup Insights';
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Digital Magazine Library
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Venturer's <span className="gradient-text">Voyage</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Our monthly digital newsletter exploring innovation, entrepreneurship, and the future of business. Browse all editions in our interactive flipbook reader.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="All Editions"
            title={<>Newsletter <span className="gradient-text">Archive</span></>}
            description="Click on any edition to open the interactive flipbook reader."
          />

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : newsletters.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No newsletters published yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {newsletters.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.05, 0.4) }}
                >
                  <GlassCard className="overflow-hidden p-0 h-full flex flex-col group cursor-pointer">
                    <div
                      className="aspect-[3/4] overflow-hidden relative"
                      onClick={() => setSelectedNewsletter(item)}
                    >
                      <SkeletonImage
                        src={item.thumbnail_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        wrapperClassName="w-full h-full"
                        skeletonClassName="rounded-none"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                          <div className="p-3 rounded-full bg-primary text-primary-foreground">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <span className="text-sm font-medium text-primary-foreground">Read Now</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-3 md:p-4 flex-1 flex flex-col"
                      onClick={() => setSelectedNewsletter(item)}
                    >
                      <span className="text-xs text-primary font-medium">{item.month} {item.year}</span>
                      <h4 className="font-display text-sm md:text-base font-bold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Flipbook Viewer Modal */}
      {selectedNewsletter && (
        <FlipbookViewer
          newsletter={{
            id: selectedNewsletter.id,
            title: selectedNewsletter.title,
            date: `${selectedNewsletter.month} ${selectedNewsletter.year}`,
            sortDate: '',
            coverImage: selectedNewsletter.thumbnail_url,
            pdfUrl: selectedNewsletter.pdf_url,
            description: '',
          }}
          onClose={() => setSelectedNewsletter(null)}
        />
      )}
    </Layout>
  );
};

export default Blog;
