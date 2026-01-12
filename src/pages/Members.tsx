import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Linkedin, Mail } from 'lucide-react';

const coreTeam = [
  {
    role: 'President',
    purpose: 'To set the course of action for the forum and bring about synergy with various entrepreneurs, organizations, institutes, etc.',
    responsibilities: [
      'Organizing events or talks',
      'Providing a platform to students interested in entrepreneurship',
      'Breaking an entire concept into activities to be performed by each department',
    ],
  },
  {
    role: 'Vice-President',
    purpose: 'To take follow up on the status of activities and manage the administration of the forum.',
    responsibilities: [
      'Conducting creative & innovative activities',
      'Notifying authorities and students regarding events',
      'Maintaining records of the forum',
    ],
  },
  {
    role: 'Secretary',
    purpose: 'To introduce the BUDDING ENTREPRENEURS FORUM to students of MITWPU and other institutes.',
    responsibilities: [
      'Identifying and selecting appropriate candidates for various roles',
      'Distribution of work amongst Volunteers',
    ],
  },
  {
    role: 'General Advisor & Treasurer',
    purpose: 'To provide solutions for the optimum working of the forum and manage funds.',
    responsibilities: [
      'Suggest ways to help entrepreneurs and improve forum activities',
      'Keep track of receipts, expenses, sponsorships, and income',
      'Preparing budgets and making funds available',
    ],
  },
];

const facultyLeadership = [
  {
    name: 'Dr. Deependra Sharma',
    role: 'Dean, MIT WPU SOB',
    position: 'Recommended By',
    linkedin: 'https://www.linkedin.com/in/dr-deependra-sharma-579771167/',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1680952760378-qz6g1h4cll3t34r12t750xsz4erauvj7bsh5xgb70k.jpeg',
    description: 'Approving events and documents related to event planning. Supporting events held by the forum. Organize training programs through workshops, mentorship, networking, seminars, etc.',
  },
  {
    name: 'Prof. Dr. Vinita Ahire Kale',
    role: 'Forum Faculty Head, MIT WPU SOB',
    position: 'Proposed By',
    linkedin: 'https://www.linkedin.com/in/dr-vinita-ahire-kale-71619315/',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1712670155824-qz6g49p2wuxhleoxrio7xqfaomzkqhmhdma4a262is.jpeg',
    description: 'Provides opportunities for stimulating and augmenting the entrepreneurial spirit. Creates a culture of entrepreneurship and promotes entrepreneurial studies.',
  },
];

const departments = [
  { name: 'Creative Department', description: 'Handles visual design, graphics, and creative content.' },
  { name: 'Editorial Department', description: 'Manages content writing, newsletters, and publications.' },
  { name: 'Social Media Department', description: 'Manages online presence and social media platforms.' },
  { name: 'Technical Department', description: 'Handles technical aspects including website and tools.' },
  { name: 'Event Department', description: 'Plans and executes all forum events and activities.' },
  { name: 'Podcast Department', description: 'Creates and manages podcast content.' },
  { name: 'Sponsorship Department', description: 'Manages partnerships and sponsorship relations.' },
  { name: 'Promotion Department', description: 'Handles marketing and promotional activities.' },
  { name: 'Governance & Compliance', description: 'Ensures adherence to rules and regulations.' },
  { name: 'Photography Department', description: 'Captures and manages visual documentation.' },
];

const Members = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Forum <span className="gradient-text">Members</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Meet the dedicated team of faculty members, student leaders, and department heads driving the Budding Entrepreneurs Forum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Leadership */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Faculty Guidance"
            title="Faculty Leadership"
            description="Distinguished faculty members guiding our forum with their expertise and vision."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {facultyLeadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                        {person.position}
                      </span>
                      <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-primary/20">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground">{person.name}</h3>
                      <p className="text-primary text-sm mb-3">{person.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{person.description}</p>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Student Leaders"
            title="Core Committee"
            description="The student leadership team responsible for organizing and managing forum activities."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary-foreground">
                      {member.role.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{member.role}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{member.purpose}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {member.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Structure"
            title="Department Heads"
            description="Various departments manage different aspects of the forum's operations."
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
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">{dept.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-display text-sm font-semibold text-foreground mb-2">{dept.name}</h4>
                  <p className="text-xs text-muted-foreground">{dept.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Want to Join Our Team?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for passionate individuals to join our forum and contribute to the entrepreneurship ecosystem at MIT-WPU.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:buddingentrepreneursforum@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </a>
                  <a
                    href="https://www.linkedin.com/in/be-mitwpu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border"
                  >
                    <Linkedin className="w-4 h-4" />
                    Follow on LinkedIn
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Members;
