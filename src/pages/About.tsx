import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { SkeletonImage } from '@/components/ui/SkeletonImage';
import { Linkedin, Users, Lightbulb, Target, BookOpen } from 'lucide-react';

// Faculty images
import deependraSharma from '@/assets/faculty/deependra-sharma.jpg';
import swatiBankar from '@/assets/faculty/swati-bankar.jpg';
import vinitaAhireKale from '@/assets/faculty/vinita-ahire-kale.jpg';

const leadership = [
  {
    name: 'Dr. Deependra Sharma',
    role: 'Dean, MIT WPU SOB',
    position: 'Recommended By',
    linkedin: 'https://www.linkedin.com/in/dr-deependra-sharma-579771167/',
    image: deependraSharma,
  },
  {
    name: 'Dr. Swati Bankar',
    role: 'Associate Dean, MIT WPU SOB',
    position: 'Supported By',
    linkedin: 'https://www.linkedin.com/in/dr-swati-bankar-024111178/',
    image: swatiBankar,
  },
  {
    name: 'Dr. Vinita Ahire Kale',
    role: 'Forum Faculty Head, MIT WPU SOB',
    position: 'Proposed & Guided By',
    linkedin: 'https://www.linkedin.com/in/dr-vinita-ahire-kale-71619315/',
    image: vinitaAhireKale,
  },
];

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Budding Entrepreneurs Forum – MIT World Peace University Pune';
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Shaping Tomorrow's <span className="gradient-text">Business Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The Budding Entrepreneurs Forum at MIT-WPU is dedicated to nurturing the entrepreneurial spirit among students and creating future business leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                India is going through transition times. As citizens of India, we must think and change our old ways of living and making an earning for living. The outcome of Education is a job; we need to change this attitude. India doesn't need job seekers; this is the time for business owners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The people of India should think and grow in such a way that they can run their businesses and support themselves. For budding business owners, there are institutions, regulations, infrastructure, seed money, etc. available. The need is to bring the seeker and provider on one page so that the objective of development can be achieved.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Budding Entrepreneurs Forum focuses on developing an entrepreneurial mindset for students typically focusing on teaching business and leadership skills that will help them start and grow their own companies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                Why We Exist
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                School of Business (SOB), MIT WPU proposes to foster the BUDDING ENTREPRENEURS FORUM as it focuses on encouraging entrepreneurial spirit among the students.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The School of Business at MIT WPU encourages its students to develop overall skills outside the classroom, such as leadership, teamwork, and communication skills as it is these skills that will bring success to a student in their corporate career while contributing to their overall growth.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <GlassCard>
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-display font-semibold text-foreground">Community</h4>
                  <p className="text-sm text-muted-foreground mt-1">Like-minded individuals</p>
                </GlassCard>
                <GlassCard>
                  <Lightbulb className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-display font-semibold text-foreground">Innovation</h4>
                  <p className="text-sm text-muted-foreground mt-1">Creative thinking</p>
                </GlassCard>
                <GlassCard>
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-display font-semibold text-foreground">Focus</h4>
                  <p className="text-sm text-muted-foreground mt-1">Goal-oriented approach</p>
                </GlassCard>
                <GlassCard>
                  <BookOpen className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-display font-semibold text-foreground">Learning</h4>
                  <p className="text-sm text-muted-foreground mt-1">Continuous growth</p>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Leadership"
            title="Faculty Guidance"
            description="Our forum is guided by distinguished faculty members who bring years of experience in entrepreneurship."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                    {person.position}
                  </span>
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                    <SkeletonImage
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      wrapperClassName="w-full h-full"
                      skeletonClassName="rounded-full"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{person.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{person.role}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MIT-WPU Connection */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Foundation
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Powered by <span className="gradient-text">MIT-WPU</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a part of MIT World Peace University's School of Business, the Budding Entrepreneurs Forum benefits from world-class infrastructure, expert faculty guidance, and a legacy of academic excellence. Our connection to MIT-WPU provides students access to resources, networks, and opportunities that help transform their entrepreneurial dreams into reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
