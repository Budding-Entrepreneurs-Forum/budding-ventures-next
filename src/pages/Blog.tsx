import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { BookOpen, Calendar } from 'lucide-react';
import { newsletters } from '@/data/newslettersData';
import { FlipbookViewer } from '@/components/FlipbookViewer';

const Blog = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<string | null>(null);

  const activeNewsletter = newsletters.find((n) => n.id === selectedNewsletter);

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

      {/* Stats */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{newsletters.length} Editions</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">June 2023 – December 2025</span>
            </div>
            <span className="text-xs text-muted-foreground">Sorted latest → oldest</span>
          </div>
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
                    onClick={() => setSelectedNewsletter(item.id)}
                  >
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
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
                    onClick={() => setSelectedNewsletter(item.id)}
                  >
                    <span className="text-xs text-primary font-medium">{item.date}</span>
                    <h4 className="font-display text-sm md:text-base font-bold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flipbook Viewer Modal */}
      {activeNewsletter && (
        <FlipbookViewer
          newsletter={activeNewsletter}
          onClose={() => setSelectedNewsletter(null)}
        />
      )}
    </Layout>
  );
};

export default Blog;
