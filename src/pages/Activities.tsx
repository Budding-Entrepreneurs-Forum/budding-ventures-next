import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Calendar, Users, Trophy, Mic, BookOpen, Handshake, Heart, GraduationCap, Leaf, Lightbulb } from 'lucide-react';

const flagshipEvents = [
  {
    slug: 'biznovation',
    title: 'Biznovation',
    description: 'Our flagship business innovation competition where students pitch their most innovative business ideas to industry experts.',
    icon: Trophy,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'hustle-hawk',
    title: 'Hustle & Hawk',
    description: 'An intensive entrepreneurship bootcamp designed to transform ideas into actionable business plans.',
    icon: Mic,
    color: 'from-blue-500 to-purple-500',
  },
];

const regularActivities = [
  {
    title: 'Entrepreneurship Awareness Camp',
    description: 'Workshops designed to introduce students to the fundamentals of entrepreneurship and startup culture.',
    icon: Users,
  },
  {
    title: 'Entrepreneurship Development Meet',
    description: 'Networking events bringing together aspiring entrepreneurs, mentors, and industry professionals.',
    icon: Handshake,
  },
  {
    title: 'Guest Lectures',
    description: 'Sessions featuring successful entrepreneurs and alumni sharing their journey and insights.',
    icon: Mic,
  },
  {
    title: 'B-Plan Competition',
    description: 'Business plan competitions where students present their ideas and receive expert feedback.',
    icon: Trophy,
  },
  {
    title: "Venturer's Voyage Newsletter",
    description: 'Our monthly digital newsletter covering topics related to innovation and entrepreneurship.',
    icon: BookOpen,
  },
  {
    title: 'Cross-Forum Collaborations',
    description: 'Joint events with other forums and clubs bringing diverse expertise together.',
    icon: Users,
  },
];

const processSteps = [
  'All upcoming events are proposed by the core committee members',
  'Events are approved by Associate Dean and Dean',
  'Students from BUDDING ENTREPRENEURS FORUM and MBA IEM Programme coordinate all events',
  'Events are planned and scheduled semester-wise under faculty guidance',
  'Approval for budget and program details is taken three months before execution',
];

const Activities = () => {
  useEffect(() => {
    document.title = 'Events | Budding Entrepreneurs Forum MIT-WPU | Startup & Business Events Pune';
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
              What We Do
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Activities & <span className="gradient-text">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The BUDDING ENTREPRENEURS FORUM has conducted more than 30 events since its inception in 2017. Explore our flagship programs and regular activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Events */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Flagship Events"
            title="Our Signature Programs"
            description="Experience our most impactful events designed to ignite your entrepreneurial spirit."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {flagshipEvents.map((event, index) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${event.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-6`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Activities */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Regular Activities"
            title="Ongoing Programs"
            description="Our continuous initiatives that keep the entrepreneurial spirit alive throughout the year."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <activity.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">{activity.title}</h4>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Activities */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="CSR Activities"
            title="CSR Activities"
            description="Giving back to society through responsible action and student-led initiatives."
          />

          <div className="max-w-3xl mx-auto mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-center leading-relaxed"
            >
              The Budding Entrepreneurs Forum believes that entrepreneurship goes beyond business and profit. Through our Corporate Social Responsibility (CSR) initiatives, we aim to create meaningful social impact by encouraging students to contribute to society with empathy, responsibility and purpose.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-center leading-relaxed mt-4"
            >
              Our CSR activities focus on awareness, education, sustainability and community engagement. By participating in these initiatives, students develop leadership qualities, social sensitivity and a deeper understanding of challenges in the real world.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Community Outreach',
                description: 'Supporting local communities through awareness drives, volunteering, and social campaigns.',
                icon: Heart,
              },
              {
                title: 'Education & Awareness',
                description: 'Conducting workshops, mentorship sessions and knowledge sharing programs for underprivileged groups.',
                icon: GraduationCap,
              },
              {
                title: 'Sustainability Initiatives',
                description: 'Promoting eco friendly practices, cleanliness drives and environmental responsibility.',
                icon: Leaf,
              },
              {
                title: 'Social Impact Led by Students',
                description: 'Encouraging students to ideate and lead CSR projects that create lasting positive change.',
                icon: Lightbulb,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Process */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Process"
            title="How We Organize Events"
            description="A structured approach to planning and executing impactful events."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 md:pl-16 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 md:left-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                  </div>
                  <GlassCard>
                    <p className="text-foreground">{step}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Code of Conduct */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Rules & Code of Conduct
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Under BUDDING ENTREPRENEURS FORUM every in-house, inter-college, and collaboration event will be approved by the Dean, SOB, MITWPU.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      The events are to be planned and further scheduled semester-wise under the guidance of the faculty coordinator.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Approval for the budget and details of the program will be taken three months before the date of execution.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Collaborating with different forums and clubs to organize various events bringing different expertise to the table.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-secondary/50 rounded-xl border border-border">
                  <h4 className="font-display font-bold text-foreground mb-2">Funding Details</h4>
                  <p className="text-muted-foreground text-sm">
                    The Budding Entrepreneurs Forum raises funding for events through sponsorship from different businesses. Internal budget is proposed to the college three months before conducting any event.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container-wide mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Don't Miss Our Next Event
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Stay updated with our upcoming events and activities. Follow us on social media for the latest announcements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
