import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowLeft, Trophy, Mic, Target, Users, Star, Calendar, MapPin } from 'lucide-react';

const eventsData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  icon: typeof Trophy;
  color: string;
  highlights: string[];
  details: string[];
  images?: string[];
}> = {
  'biznovation': {
    title: 'Biznovation',
    tagline: 'Where Innovation Meets Business',
    description: 'Biznovation is our flagship business innovation competition where students pitch their most innovative business ideas to a panel of industry experts and successful entrepreneurs. This premier event brings together the brightest minds from MIT-WPU to showcase their entrepreneurial vision.',
    icon: Trophy,
    color: 'from-cyan-500 to-blue-500',
    highlights: [
      'Live pitch presentations to industry experts',
      'Cash prizes and mentorship opportunities',
      'Networking with successful entrepreneurs',
      'Feedback from seasoned business professionals',
      'Media coverage and recognition',
    ],
    details: [
      'Teams of 2-4 members can participate',
      'Business ideas from any domain are welcome',
      'Multiple rounds of evaluation',
      'Professional pitch training sessions',
      'Opportunity to connect with investors',
    ],
  },
  'hustle-hawk': {
    title: 'Hustle & Hawk',
    tagline: 'Turning Ideas into Action',
    description: 'Hustle & Hawk is an intensive entrepreneurship bootcamp designed to transform raw ideas into actionable business plans. Participants go through rigorous training sessions, workshops, and mentoring to develop their entrepreneurial skills.',
    icon: Mic,
    color: 'from-blue-500 to-purple-500',
    highlights: [
      'Intensive entrepreneurship training',
      'Hands-on business development workshops',
      'One-on-one mentoring sessions',
      'Real-world business simulation exercises',
      'Certificate of completion',
    ],
    details: [
      'Open to all students of MIT-WPU',
      'Duration: Multi-day intensive program',
      'Industry expert sessions',
      'Team-building activities',
      'Final project presentation',
    ],
  },
};

const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? eventsData[slug] : null;

  if (!event) {
    return (
      <Layout>
        <section className="pt-32 pb-16 min-h-screen bg-background">
          <div className="container-wide mx-auto px-4 md:px-8 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 text-primary hover-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-br ${event.color} opacity-10 rounded-full blur-3xl`}
        />

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Activities
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-6`}>
              <event.icon className="w-10 h-10 text-white" />
            </div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Flagship Event
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {event.title}
            </h1>
            <p className="text-2xl text-primary font-medium mb-4">{event.tagline}</p>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {event.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Event Highlights
              </h2>
              <div className="space-y-4">
                {event.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center flex-shrink-0`}>
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Event Details
                </h3>
                <div className="space-y-4 mb-6">
                  {event.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <span className="text-xs text-muted-foreground block">Schedule</span>
                      <span className="text-sm text-foreground">Check announcements</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <span className="text-xs text-muted-foreground block">Venue</span>
                      <span className="text-sm text-foreground">MIT-WPU Campus</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Interested in Participating?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Stay updated on registration dates and event announcements by following our social media channels.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventPage;
