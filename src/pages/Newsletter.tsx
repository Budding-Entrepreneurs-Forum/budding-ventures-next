import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { FileText, Download, Send } from 'lucide-react';
import { useState } from 'react';

const newsletters = [
  { title: 'Companies That Built INDIA', date: 'December 2025', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-10-26-at-16.30.16_66393760_Page_01-724x1024.jpg' },
  { title: 'The Map of Mithai', date: 'November 2025', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/11/Ventures-Voyage-November-2025-1_Page_01-724x1024.jpg' },
  { title: 'Modern Defense Technologies', date: 'October 2025', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/10/Ventures-Voyage-October-2025_20251002_084546_0000_Page_01.jpg' },
];

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Newsletter</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Venturer's <span className="gradient-text">Voyage</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl">Our monthly digital newsletter focusing on topics related to innovation and entrepreneurship.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="max-w-xl mx-auto mb-16">
            <GlassCard className="text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Subscribe Now</h3>
              <p className="text-muted-foreground mb-6">Get the latest edition delivered to your inbox every month.</p>
              <form onSubmit={(e) => { e.preventDefault(); setEmail(''); }} className="flex gap-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg text-sm" required />
                <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2"><Send className="w-4 h-4" /></button>
              </form>
            </GlassCard>
          </div>

          <SectionHeading badge="Past Issues" title="Newsletter Archive" description="Browse through our previous editions." />
          <div className="grid md:grid-cols-3 gap-6">
            {newsletters.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <GlassCard className="p-0 overflow-hidden group">
                  <div className="aspect-[3/4] overflow-hidden"><img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-6">
                    <span className="text-sm text-primary">{item.date}</span>
                    <h4 className="font-display font-bold text-foreground mt-2 mb-4">{item.title}</h4>
                    <button className="inline-flex items-center gap-2 text-sm text-primary"><Download className="w-4 h-4" />Download PDF</button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
