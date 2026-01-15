import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
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
  Linkedin,
  Quote,
  ExternalLink,
  Sparkles,
  Zap
} from 'lucide-react';
import { useRef } from 'react';
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

// Team data
const teamMembers = [
  { name: 'Dr. Vinita Kale', role: 'Faculty Mentor', linkedin: 'https://www.linkedin.com/in/dr-vinita-ahire-kale/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/1712670155824-150x150.jpeg' },
  { name: 'Anish Kashyap', role: 'President', linkedin: 'https://www.linkedin.com/in/anish-kashyap-916048194/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Anish-150x150.png' },
  { name: 'Shivam Dewangan', role: 'Vice President', linkedin: 'https://www.linkedin.com/in/shivam-dewangan-03b988188/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Shivam-150x150.jpg' },
  { name: 'Charu Dutt Joshi', role: 'General Secretary', linkedin: 'https://www.linkedin.com/in/charu-dutt-joshi-71842b287/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Charu-scaled-e1721836184333-150x150.jpg' },
  { name: 'Vaishnavi Srivastava', role: 'Advisor & Treasurer', linkedin: 'https://www.linkedin.com/in/vaishnavisrivastava23/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Vaishnavi-S-150x150.jpg' },
  { name: 'Karan Nawal', role: 'Technical Head', linkedin: 'https://www.linkedin.com/in/karan-nawal-b33955156/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Karan-Pic-150x150.jpg' },
  { name: 'Deeksha Pal', role: 'Team Member', linkedin: 'https://linkedin.com/in/deeksha-pal-3ab60131a', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/IMG_3280-150x150.jpg' },
  { name: 'Ayush Ghosekar', role: 'Team Member', linkedin: null, image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0013-150x150.jpg' },
  { name: 'Jhanvi Odedra', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/jhanvi-odedra-b4837426b', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0003-150x150.jpg' },
  { name: 'Bhavik Modi', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/21bhavik', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0006-150x150.jpg' },
  { name: 'Manasi Sahare', role: 'Team Member', linkedin: 'https://linkedin.com/in/manasi-sahare-25ba62307', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0012-150x150.jpg' },
  { name: 'Ishit Yadav', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/ishit-yadav-4a3729326', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0005-150x150.jpg' },
  { name: 'Priyanka Nagar', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/priyanka-n-b9a466277', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0002-150x150.jpg' },
  { name: 'Nayan Pote', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/nayanpote', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0010-e1747684112530-150x150.jpg' },
  { name: 'Sanjana Kashyap', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/sanjana-kashyap-1ab802253', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-03-09-at-23.28.31_6cbebaf9-150x150.jpg' },
  { name: 'Sohira Kshemkalyani', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/sohira-kshemkalyani-2332b021b', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0015-150x150.jpg' },
  { name: 'Trupti Kulkarni', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/trupti-kulkarni-4a53321b8', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0007-150x150.jpg' },
  { name: 'Varad Mulgund', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/varad-mulgund-731aa632a/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0011-150x150.jpg' },
  { name: 'Urja Wadgaye', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/urja-wadgaye', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0009-150x150.jpg' },
  { name: 'Vishal Ishwale', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/vishal-ishwale-230663245', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0008-150x150.jpg' },
  { name: 'Vedashree Ghotkar', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/vedashree-ganesh-ghotkar-07b0b61bb', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_20_Image_0016-150x150.jpg' },
  { name: 'Dnyanesh Patil', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/dnyanesh-patil-j050602/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/06/DP-150x150.jpeg' },
  { name: 'Khushi Shethia', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/khushi-shethia-7792a6205/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/06/IMG_8038-Khushi-Shethia-150x150.jpeg' },
  { name: 'Vivek Gondil', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/vivek-gondil/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/06/VG-150x150.jpeg' },
  { name: 'Sushmita Poojari', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/sushmita-poojari-649a23261/', image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/06/WhatsApp-Image-2025-01-16-at-8.25.21-PM-Sushmita-Poojari-150x150.jpeg' },
];

// Testimonials data
const testimonials = [
  {
    quote: "The branding team's energy and strategy helped us break through the clutter. From creative reels to clear messaging—they elevated our social media game.",
    author: 'Creatoo Team',
    role: 'Brand Partner',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-09-at-07.58.34_6076cb32-300x300-1.webp',
  },
  {
    quote: "Our brand Riwayat received a fresh identity that felt rooted and modern. The team understood our tone perfectly.",
    author: 'Famiya Kashani',
    role: 'Founder, Riwayat',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/Budding_Branding_Team_Report1_Page_08_Image_0002.webp',
  },
];

// Portfolio samples
const portfolioItems = [
  { image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-09-at-07.58.34_6076cb32-300x300-1.webp', title: 'Creatoo', category: 'Social Media' },
  { image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-26-at-09.46.40_48d6119a-e1750912344633.jpg', title: 'Brand Identity', category: 'Visual Design' },
  { image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-15.40.11_935a07bf.jpg', title: 'Campaign Visual', category: 'Marketing' },
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
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Branding Studio</span>
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

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Meet The Crew
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              The creative minds behind every brand story
            </p>
          </motion.div>

          {/* Leadership Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {teamMembers.slice(0, 6).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="p-4 text-center group hover:border-primary/30 transition-all duration-300">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                    />
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1 -right-1 left-1/2 ml-4 w-7 h-7 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80"
                      >
                        <Linkedin className="w-4 h-4 text-primary-foreground" />
                      </a>
                    )}
                  </div>
                  <h4 className="font-display font-semibold text-sm text-foreground mb-1 line-clamp-1">{member.name}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-1">{member.role}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {teamMembers.slice(6).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group relative"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/30 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                    <p className="text-xs font-medium text-foreground line-clamp-1">{member.name}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary mt-1"
                      >
                        <Linkedin className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
