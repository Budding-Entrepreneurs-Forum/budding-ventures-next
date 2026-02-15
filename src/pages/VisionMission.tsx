import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Target, Lightbulb, Rocket, Users, Handshake, Building, Award, TrendingUp, Heart } from 'lucide-react';

const longTermGoals = [
  {
    icon: Users,
    title: 'Creating a Community',
    description: 'Building a community of like-minded individuals who are interested in entrepreneurship can help create a supportive environment that fosters innovation and creativity.',
  },
  {
    icon: TrendingUp,
    title: 'Developing Skills',
    description: 'The forum offers workshops and events that provide members with opportunities to develop essential entrepreneurial skills, such as marketing, finance, and business development.',
  },
  {
    icon: Handshake,
    title: 'Facilitating Networking',
    description: 'Connecting members with industry professionals, alumni, and other entrepreneurs to help them build relationships that could be useful in their future careers.',
  },
  {
    icon: Rocket,
    title: 'Supporting Start-ups',
    description: 'Helping members interested in starting their businesses by offering mentorship, providing exposure to real-world business practices and other resources.',
  },
  {
    icon: Building,
    title: 'Promoting Entrepreneurship',
    description: 'Collaborating with other student organizations and academic departments to promote entrepreneurship on campus and raise awareness of its benefits.',
  },
  {
    icon: Award,
    title: 'Building Reputation',
    description: 'Establishing a reputation as a hub of entrepreneurship to attract new members and create partnerships with local businesses.',
  },
];

const shortTermGoals = [
  {
    title: 'Recruit Members',
    description: 'Focus on recruiting diverse members interested in entrepreneurship who can bring different skills and perspectives to the group.',
  },
  {
    title: 'Establish Leadership',
    description: 'Form a leadership team every year responsible for organizing events, managing finances, and developing the overall strategy.',
  },
  {
    title: 'Regular Meetings',
    description: 'Schedule regular meetings to provide opportunities for members to connect, share ideas, and discuss their progress.',
  },
  {
    title: 'Mentorship Program',
    description: 'Conduct mentorship programs that pair experienced entrepreneurs with less experienced members for guidance and support.',
  },
  {
    title: 'Events & Competitions',
    description: 'Organize pitch competitions where members can pitch their business ideas to judges and receive feedback.',
  },
];

const values = [
  { icon: Heart, title: 'Passion', description: 'Driven by purpose and enthusiasm' },
  { icon: Lightbulb, title: 'Innovation', description: 'Embracing creative solutions' },
  { icon: Users, title: 'Collaboration', description: 'Working together for success' },
  { icon: Award, title: 'Excellence', description: 'Striving for the best outcomes' },
];

const VisionMission = () => {
  useEffect(() => {
    document.title = 'Vision & Mission | Budding Entrepreneurs Forum MIT-WPU Pune';
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Purpose
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Vision, Mission & <span className="gradient-text">Goals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover the guiding principles that drive our forum and shape the future of entrepreneurship at MIT-WPU.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Goal Cards */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-10 blur-2xl" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Goal</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  SOB's Budding Entrepreneurs Forum will create an eco-system that should uphold and support entrepreneurship development for all aspiring entrepreneurs.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-2xl" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To create an entrepreneurial and leadership mindset to develop entrepreneurs for the generation of wealth and employment.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 blur-2xl" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide an ecosystem for creating successful entrepreneurs and sustainable enterprises.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Core Values"
            title="What We Stand For"
            description="The fundamental beliefs that guide our actions and decisions."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-display font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Term Goals */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Long-Term Vision"
            title="Long Term Goals"
            description="These objectives enable the creation of a strong and long-lasting forum that supports its members and encourages entrepreneurship."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {longTermGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <goal.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-display text-lg font-bold text-foreground mb-3">{goal.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{goal.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Term Goals */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Immediate Focus"
            title="Short Term Goals"
            description="These goals help establish a strong foundation, attract new members, and create momentum."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {shortTermGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">{goal.title}</h4>
                    <p className="text-muted-foreground text-sm">{goal.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container-wide mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                The Road Ahead
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building a <span className="gradient-text">Brighter Future</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As we continue to grow, our vision expands beyond the campus walls. We aim to create a network of entrepreneurs who will not only build successful businesses but also contribute to India's economic growth and create employment opportunities for millions. Join us in this exciting journey of transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisionMission;
