import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Target, Lightbulb, Rocket, Award, Trophy, Handshake, BookOpen, Camera, Mic, Monitor, Megaphone, FileCheck } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Layout } from '@/components/layout/Layout';
import heroCampus from '@/assets/hero-campus.jpg';
import logo from '@/assets/logo.png';
import { newsletters } from '@/data/newslettersData';
import { ChatbaseWidget } from '@/components/ChatbaseWidget';

const stats = [
  { value: '50+', label: 'Forum Members' },
  { value: '30+', label: 'Events Conducted' },
  { value: '10+', label: 'Departments' },
  { value: '2017', label: 'Established' },
];

const pillars = [
  {
    icon: Target,
    title: 'Goal',
    description: "SOB's Budding Entrepreneurs Forum creates an ecosystem that upholds and supports entrepreneurship development for all aspiring entrepreneurs.",
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Lightbulb,
    title: 'Vision',
    description: 'To create an entrepreneurial and leadership mindset to develop entrepreneurs for the generation of wealth and employment.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Rocket,
    title: 'Mission',
    description: 'To provide an ecosystem for creating successful entrepreneurs and sustainable enterprises.',
    color: 'from-purple-500 to-pink-500',
  },
];

const departments = [
  { name: 'Creative Department', icon: Sparkles },
  { name: 'Editorial Department', icon: BookOpen },
  { name: 'Social Media Department', icon: Users },
  { name: 'Technical Department', icon: Monitor },
  { name: 'Event Department', icon: Award },
  { name: 'Podcast Department', icon: Mic },
  { name: 'Sponsorship Department', icon: Handshake },
  { name: 'Promotion Department', icon: Megaphone },
  { name: 'Governance & Compliance', icon: FileCheck },
  { name: 'Photography Department', icon: Camera },
];

const activities = [
  'Entrepreneurship Awareness Camp',
  'Entrepreneurship Development Meet',
  'Guest Lectures from Successful Entrepreneurs',
  'B-Plan Competition',
  "Venturer's Voyage Newsletter",
  'Ice Breaking Activities',
  'Cross-Forum Collaborations',
];


const Index = () => {
  return (
    <Layout>
      <ChatbaseWidget />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroCampus}
            alt="MIT-WPU Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[10%] w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-[15%] w-48 h-48 bg-accent/20 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 container-wide mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img src={logo} alt="Budding Entrepreneurs Forum" className="h-24 md:h-32 mx-auto mb-6" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Where Ideas Become{' '}
            <span className="gradient-text">Ventures</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Embark on an entrepreneurial journey with the School of Business, MIT WPU. 
            Connect with a vibrant community of innovators, dreamers, and future business leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/about"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all glow"
            >
              Explore the Forum
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/activities"
              className="px-8 py-4 bg-secondary text-foreground rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors border border-border"
            >
              View Events
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="About Us"
            title={<>Fostering the Next Generation of <span className="gradient-text">Entrepreneurs</span></>}
            description="The Budding Entrepreneurs Forum focuses on developing an entrepreneurial mindset among students, teaching business and leadership skills."
          />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                India is going through transition times. As citizens of India, we must think and change our old ways of living and making an earning for living. The outcome of Education is a job; we need to change this attitude. India doesn't need job seekers; this is the time for business owners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The School of Business at MIT WPU encourages its students to develop overall skills outside the classroom, such as leadership, teamwork, and communication skills — skills that will bring success in their corporate career while contributing to their overall growth.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover-underline"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Trophy, title: 'Excellence', subtitle: 'Striving for greatness' },
                { icon: Users, title: 'Community', subtitle: 'Stronger together' },
                { icon: Lightbulb, title: 'Innovation', subtitle: 'Creative solutions' },
                { icon: Rocket, title: 'Growth', subtitle: 'Continuous learning' },
              ].map((item, index) => (
                <GlassCard 
                  key={item.title}
                  className="text-center h-[140px] flex flex-col items-center justify-center"
                >
                  <item.icon className="w-10 h-10 text-primary mb-3" />
                  <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal Section */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Purpose"
            title="Vision, Mission & Goal"
            description="The guiding principles that drive our forum forward."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/vision-mission"
              className="inline-flex items-center gap-2 text-primary font-medium hover-underline"
            >
              Explore our complete vision
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Structure"
            title="Forum Departments"
            description="Under the student core committee, several departments manage the forum's activities."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="text-center h-full">
                  <dept.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-display text-sm font-semibold text-foreground">{dept.name}</h4>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="What We Do"
            title="Our Activities"
            description="The BUDDING ENTREPRENEURS FORUM has conducted more than 30 events since its inception in 2017."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {activities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{activity}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Join Our Community
                </h3>
                <p className="text-muted-foreground mb-6">
                  Participating in the vibrant activities organized by the Budding Entrepreneurs Forum opens doors to a world of opportunities. Engage in enriching workshops, network with industry experts, and showcase your innovative ideas.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    Practical business skills
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    Industry networking
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    Mentorship opportunities
                  </li>
                </ul>
                <Link
                  to="/activities"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View All Events
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Blog & News"
            title="Latest Posts"
            description="Stay updated with our latest insights and news from the entrepreneurship world."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {newsletters.slice(0, 3).map((newsletter, index) => (
              <motion.article
                key={newsletter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to="/blog" className="group block">
                  <GlassCard className="overflow-hidden p-0">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={newsletter.coverImage}
                        alt={newsletter.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-primary">{newsletter.date}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                        {newsletter.title}
                      </h3>
                    </div>
                  </GlassCard>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
