import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    document.title = 'Contact Us | Budding Entrepreneurs Forum MIT-WPU Pune';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Contact</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Get in <span className="gradient-text">Touch</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl">Have questions or want to join? We'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <GlassCard>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm" required />
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm" required />
                  <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm" required />
                  <textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm resize-none" required />
                  <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2">Send Message <Send className="w-4 h-4" /></button>
                </form>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <GlassCard>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-4"><MapPin className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-muted-foreground">MIT-WPU, Kothrud, Pune, Maharashtra, India</span></div>
                  <div className="flex gap-4"><Mail className="w-5 h-5 text-primary flex-shrink-0" /><a href="mailto:buddingentrepreneursforum@gmail.com" className="text-muted-foreground hover:text-primary">buddingentrepreneursforum@gmail.com</a></div>
                  <div className="flex gap-4"><Phone className="w-5 h-5 text-primary flex-shrink-0" /><a href="tel:+918379943345" className="text-muted-foreground hover:text-primary">+91 83799 43345</a></div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[{ icon: Linkedin, href: 'https://www.linkedin.com/in/be-mitwpu/' }, { icon: Instagram, href: 'https://www.instagram.com/budding_entrepreneur.mitwpu' }, { icon: Youtube, href: 'https://www.youtube.com/@budding_entrepreneur.mitwpu' }, { icon: Twitter, href: 'https://x.com/BuddingForumMIT' }].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"><s.icon className="w-4 h-4" /></a>
                  ))}
                </div>
              </GlassCard>

              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.9056112956792!2d73.81498533714024!3d18.517832442364977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9e53a05f9%3A0x2be5e8da02be693e!2sMIT%20World%20Peace%20University%20(MIT-WPU)!5e0!3m2!1sen!2sin!4v1770808812648!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
