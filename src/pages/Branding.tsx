import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Sparkles, Target, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Brand Strategy',
    description: 'Craft a compelling brand identity that resonates with your target audience and sets you apart.',
  },
  {
    icon: Target,
    title: 'Market Positioning',
    description: 'Strategic positioning to capture market share and establish thought leadership in your industry.',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Build and nurture an engaged community around your brand through authentic connections.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Data-driven marketing strategies to accelerate growth and maximize your brand reach.',
  },
];

const Branding = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Branding Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Build a Brand That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Stands Out
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We help entrepreneurs and startups create impactful brands that connect with their audience and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeading
            badge="What We Offer"
            title="Our Branding Services"
            description="Comprehensive branding solutions tailored for ambitious entrepreneurs"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <GlassCard className="h-full p-8 group hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-wide mx-auto px-4 md:px-8">
          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's work together to create a brand that captures your vision and connects with your audience.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </motion.a>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Branding;
