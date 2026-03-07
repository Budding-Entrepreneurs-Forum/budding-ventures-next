import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkeletonImage } from '@/components/ui/SkeletonImage';
import { Linkedin, Mail } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { facultyLeadership, coreCommitteeMembers, leadershipYears } from '@/data/departmentsData';

// Faculty images
import deependraSharma from '@/assets/faculty/deependra-sharma.jpg';
import vinitaAhireKale from '@/assets/faculty/vinita-ahire-kale.jpg';

// Member images - Batch 1 (first 10)
import nayanPote from '@/assets/members/nayan-pote.webp';
import ishitYadav from '@/assets/members/ishit-yadav.png';
import jhanviOdedra from '@/assets/members/jhanvi-odedra.png';
import sanjanaKashyap from '@/assets/members/sanjana-kashyap.png';
import deekshaPal from '@/assets/members/deeksha-pal.png';
import sohiraKshemkalyani from '@/assets/members/sohira-kshemkalyani.png';
import sushmitaPoojari from '@/assets/members/sushmita-poojari.png';
import dnyaneshPatil from '@/assets/members/dnyanesh-patil.jpeg';
import khushiSethia from '@/assets/members/khushi-sethia.png';
import devangKaslikar from '@/assets/members/devang-kaslikar.png';

// Member images - Batch 2 (new 10)
import varadMulgund from '@/assets/members/varad-mulgund.png';
import anshdhaChinchmalatpure from '@/assets/members/anshdha-chinchmalatpure.png';
import ayushGhosekar from '@/assets/members/ayush-ghosekar.png';
import pratikKadpe from '@/assets/members/pratik-kadpe.png';
import bhavikModi from '@/assets/members/bhavik-modi.jpeg';
import vedashreeGhotkar from '@/assets/members/vedashree-ghotkar.png';
import nishantInamdar from '@/assets/members/nishant-inamdar.png';
import manasiSahare from '@/assets/members/manasi-sahare.png';
import tanayKanitkar from '@/assets/members/tanay-kanitkar.jpeg';
import vivekGoondil from '@/assets/members/vivek-goondil.png';

// Member images - Batch 3 (new uploads)
import famiyaKashani from '@/assets/members/famiya-kashani.jpg';
import urjaWadgaye from '@/assets/members/urja-wadgaye.jpg';
import vishalIshwale from '@/assets/members/vishal-ishwale.png';
import atharvaShinkar from '@/assets/members/atharva-shinkar.jpg';
import gauravShinde from '@/assets/members/gaurav-shinde.png';

// Faculty image mapping
const facultyImages: Record<string, string> = {
  'deependra-sharma': deependraSharma,
  'vinita-ahire-kale': vinitaAhireKale,
};

// Member image mapping
const memberImages: Record<string, string> = {
  // Batch 1
  'nayan-pote': nayanPote,
  'ishit-yadav': ishitYadav,
  'jhanvi-odedra': jhanviOdedra,
  'sanjana-kashyap': sanjanaKashyap,
  'deeksha-pal': deekshaPal,
  'sohira-kshemkalyani': sohiraKshemkalyani,
  'sushmita-poojari': sushmitaPoojari,
  'dnyanesh-patil': dnyaneshPatil,
  'khushi-sethia': khushiSethia,
  'devang-kaslikar': devangKaslikar,
  // Batch 2
  'varad-mulgund': varadMulgund,
  'anshdha-chinchmalatpure': anshdhaChinchmalatpure,
  'ayush-ghosekar': ayushGhosekar,
  'pratik-kadpe': pratikKadpe,
  'bhavik-modi': bhavikModi,
  'vedashree-ghotkar': vedashreeGhotkar,
  'nishant-inamdar': nishantInamdar,
  'manasi-sahare': manasiSahare,
  'tanay-kanitkar': tanayKanitkar,
  'vivek-goondil': vivekGoondil,
  // Batch 3
  'famiya-kashani': famiyaKashani,
  'urja-wadgaye': urjaWadgaye,
  'vishal-ishwale': vishalIshwale,
  'atharva-shinkar': atharvaShinkar,
  'gaurav-shinde': gauravShinde,
};

// Member Card Component
const MemberCard = ({ member, index }: { member: typeof coreCommitteeMembers[0]; index: number }) => {
  // Use local image if available, otherwise fall back to external URL
  const memberImage = memberImages[member.image] || member.image;
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.03, duration: 0.4 }}
    className="group"
  >
    <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-secondary">
        <SkeletonImage
          src={memberImage}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          wrapperClassName="w-full h-full"
          skeletonClassName="rounded-none"
          loading="lazy"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent p-4 pt-12">
        <h3 className="font-display text-lg font-bold text-white mb-1 line-clamp-1">
          {member.name}
        </h3>
        <p className="text-white/80 text-sm mb-3 line-clamp-2">
          {member.role}
        </p>
        
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>Connect</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
  );
};

// Faculty Card Component
const FacultyCard = ({ faculty, index }: { faculty: typeof facultyLeadership[0]; index: number }) => {
  const facultyImage = facultyImages[faculty.image] || faculty.image;
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="flex flex-col md:flex-row gap-6">
      {/* Tag and Image */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
          {faculty.tag}
        </span>
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-secondary border-2 border-border">
          <SkeletonImage
            src={facultyImage}
            alt={faculty.name}
            className="w-full h-full object-cover object-top"
            wrapperClassName="w-full h-full"
            skeletonClassName="rounded-xl"
            loading="lazy"
          />
        </div>
        {faculty.linkedin && (
          <a
            href={faculty.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Linkedin className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
          {faculty.name}
        </h3>
        <p className="text-primary font-medium mb-4">
          {faculty.role}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {faculty.description}
        </p>
      </div>
    </div>
  </motion.div>
  );
};

// Members temporarily hidden from display (can be restored by removing from this list)
const hiddenMembers = [
  'Sohira Kshemkalyani',
  'Famiya Kashani',
  'Urja Wadgaye',
];

const Members = () => {
  const [selectedYear, setSelectedYear] = useState('2025-2026');
  const visibleMembers = coreCommitteeMembers.filter(m => !hiddenMembers.includes(m.name));

  useEffect(() => {
    document.title = 'Forum Members | Budding Entrepreneurs Forum MIT-WPU School of Business';
  }, []);

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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Forum <span className="gradient-text">Members</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Meet the dedicated team of faculty advisors, student leaders and department heads driving the Budding Entrepreneurs Forum forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Leadership */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Faculty Guidance"
            title="Faculty Leadership"
            description="Distinguished faculty members guiding our forum with their expertise and vision."
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {facultyLeadership.map((faculty, index) => (
              <FacultyCard key={faculty.name} faculty={faculty} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Leadership Team"
            title="Core Committee"
            description="The complete leadership body of the current year, including all student leaders and department heads."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {visibleMembers.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Legacy / Former Leaders Timeline - TEMPORARILY HIDDEN (set to true to re-enable) */}
      {false && (
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Legacy"
            title="Our Former Forum Leaders"
            description="Honoring the leaders who built the foundation of our entrepreneurship community."
          />

          <Tabs defaultValue="2025-2026" value={selectedYear} onValueChange={setSelectedYear} className="w-full">
            <div className="flex justify-center mb-8 md:mb-12">
              <TabsList className="bg-secondary/50 p-1 rounded-full">
                {leadershipYears.map((yearData) => (
                  <TabsTrigger
                    key={yearData.year}
                    value={yearData.year}
                    className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    {yearData.year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {leadershipYears.map((yearData) => (
              <TabsContent key={yearData.year} value={yearData.year} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
                >
                  {yearData.members.map((member, index) => (
                    <MemberCard key={`${yearData.year}-${member.name}`} member={member} index={index} />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      )}

      {/* Contact Block */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm"
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Members;
