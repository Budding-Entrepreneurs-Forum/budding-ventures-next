import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { PdfFlipbook } from '@/components/PdfFlipbook';
import brandingLogo from '@/assets/branding-logo.png';
import brandingReportCover from '@/assets/branding-report-cover.png';
import encaveLogo from '@/assets/brands/encave.jpg';
import creatooLogo from '@/assets/brands/creatoo.jpg';
import riwayatLogo from '@/assets/brands/riwayat.jpg';
import { 
  Palette, 
  Megaphone, 
  Globe, 
  TrendingUp, 
  Newspaper,
  Target,
  Star,
  Lightbulb,
  ArrowRight,
  Quote,
  ExternalLink,
  Sparkles,
  Zap,
  BookOpen,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Services data
const services = [
  {
    icon: Palette,
    title: 'Brand Identity & Visual Design',
    description: 'Logos, colors, typography, and tone that speak your truth.',
    gradient: 'from-primary to-cyan-400',
  },
  {
    icon: Megaphone,
    title: 'Social Media & Content Strategy',
    description: 'From memes to meaningful stories—we make every post count.',
    gradient: 'from-purple-500 to-accent',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Sleek, responsive websites built to perform and convert.',
    gradient: 'from-blue-500 to-primary',
  },
  {
    icon: TrendingUp,
    title: 'Campaigns & Ads',
    description: 'Targeted content to move your audience from awareness to action.',
    gradient: 'from-accent to-pink-500',
  },
  {
    icon: Newspaper,
    title: 'PR & Research',
    description: 'Understand your market. Tell your story. Own your space.',
    gradient: 'from-emerald-500 to-primary',
  },
];

// Mission/Vision/Values data
const missionVisionValues = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To redefine identities, amplify digital footprints, and craft campaigns that convert.',
    color: 'primary',
  },
  {
    icon: Star,
    title: 'Vision',
    description: "To be the region's most trusted catalyst for brand elevation.",
    color: 'accent',
  },
  {
    icon: Lightbulb,
    title: 'Values',
    description: 'Insight-led Strategy · Creativity with Purpose · Data Discipline · Transparent Partnership',
    color: 'primary',
  },
];


// Testimonials data
const testimonials = [
  {
    quote: "The branding team's energy and strategy helped us break through the clutter. From creative reels to clear messaging—they elevated our social media game.",
    author: 'Creatoo Team',
    role: 'Brand Partner',
    image: creatooLogo,
  },
  {
    quote: "Our brand Riwayat received a fresh identity that felt rooted and modern. The team understood our tone perfectly.",
    author: 'Famiya Kashani',
    role: 'Founder, Riwayat',
    image: riwayatLogo,
  },
];

// Portfolio samples
const portfolioItems = [
  { image: creatooLogo, title: 'Creatoo', category: 'Social Media' },
  { image: riwayatLogo, title: 'Riwayat', category: 'Brand Identity' },
  { image: encaveLogo, title: 'Encave Café', category: 'Visual Design' },
];

const Branding = () => {
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container-wide mx-auto px-4 md:px-8 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Branding Studio</span>
            </motion.div>

            {/* Branding Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <img 
                src={brandingLogo} 
                alt="Branding Studio Logo" 
                className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain"
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight"
            >
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Brand Stories
              </span>
              <br />
              That Stick
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              The creative arm of Budding Entrepreneurs Forum. End-to-end brand-building for student startups and emerging ventures.
            </motion.p>

            {/* Tagline Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-10"
            >
              {['Strategy', 'Design', 'Engagement', 'Growth'].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-card/50 border border-border text-sm font-medium text-foreground"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px hsl(var(--primary) / 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold text-lg transition-all"
                >
                  Build Your Brand With Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* What is Branding Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                The Creative Arm of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Budding Entrepreneurs
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are the creative arm of the Budding Entrepreneurs Forum, offering end-to-end brand-building services for student startups and emerging ventures. More than just making things look good, we focus on what makes a brand <strong className="text-foreground">resonate</strong>, <strong className="text-foreground">connect</strong>, and <strong className="text-foreground">convert</strong>.
              </p>
              <p className="text-xl font-display font-semibold text-foreground">
                Our goal? To help you become more than just a business—to become a{' '}
                <span className="text-primary">brand people remember</span>.
              </p>
            </motion.div>

            {/* Right: Visual Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '25+', label: 'Team Members' },
                { number: '10+', label: 'Brands Served' },
                { number: '50+', label: 'Projects Delivered' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center group hover:border-primary/30">
                    <span className="block text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                      {stat.number}
                    </span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container-wide mx-auto px-4 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack branding solutions tailored for ambitious entrepreneurs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <GlassCard className="h-full p-8 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Why We Do What We Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <GlassCard className="h-full p-8 text-center group hover:border-primary/30 relative overflow-hidden">
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${item.color} to-accent`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 text-${item.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              What Brands Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real brands. Real results. Real impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="p-8 h-full relative">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  
                  {/* Quote */}
                  <p className="text-lg text-foreground mb-6 leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Branding Collaborations
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into our creative impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs uppercase tracking-wider text-primary mb-1">{item.category}</span>
                  <h3 className="text-xl font-display font-bold text-foreground">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Report Flipbook Section */}
      <section className="py-24 relative">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Annual Report
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Branding Team Report
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our official branding report in an interactive flipbook format
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <PdfFlipbook
              pdfUrl="/pdfs/branding-report.pdf"
              title="Budding Branding Team Report"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-8"
            >
              <Zap className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Build Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Brand
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Let's work together to create a brand identity that captures your vision and connects with your audience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px hsl(var(--primary) / 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold text-lg"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <a
                href="mailto:buddingentrepreneursforum@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-xl font-semibold text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Branding;
