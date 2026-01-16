import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

// Core Committee - Current Leadership Team (2025-2026)
const coreCommittee = [
  {
    name: 'Nayan Pote',
    role: 'President',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0002.jpg',
    linkedin: 'http://linkedin.com/in/nayanpote',
  },
  {
    name: 'Ishit Yadav',
    role: 'Vice President – External',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0003.jpg',
    linkedin: 'https://www.linkedin.com/in/ishit-yadav-4a3729326',
  },
  {
    name: 'Jhanvi Odedra',
    role: 'Vice President – Internal',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0004.jpg',
    linkedin: 'https://www.linkedin.com/in/jhanvi-odedra-b4837426b/',
  },
  {
    name: 'Sanjana Kashyap',
    role: 'General Secretary',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0005.jpg',
    linkedin: 'https://www.linkedin.com/in/sanjana-kashyap-1ab802253',
  },
  {
    name: 'Deeksha Pal',
    role: 'General Advisor & Treasurer',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0006.jpg',
    linkedin: 'http://linkedin.com/in/deeksha-pal-3ab60131a',
  },
];

// Department Heads (2025-2026)
const departmentHeads = [
  {
    name: 'Sohira Kshemkalyani',
    role: 'Branding Team & Strategic Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0010.jpg',
    linkedin: 'https://www.linkedin.com/in/sohira-kshemkalyani-2332b021b/',
  },
  {
    name: 'Sushmita Poojari',
    role: 'Social Media Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0007-768x1322.jpg',
    linkedin: 'https://www.linkedin.com/in/sushmita-poojari-649a23261',
  },
  {
    name: 'Dnyanesh Patil',
    role: 'Creative Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0008-768x490.jpg',
    linkedin: 'https://www.linkedin.com/in/dnyanesh-patil-j050602',
  },
  {
    name: 'Khushi Sethia',
    role: 'Creative Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0009.jpg',
    linkedin: 'https://www.linkedin.com/in/khushi-shethia-7792a6205',
  },
  {
    name: 'Devang Kaslikar',
    role: 'Sponsorship Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0012.jpg',
    linkedin: 'https://www.linkedin.com/in/devang-kaslikar-1448b7206',
  },
  {
    name: 'Famiya Kashani',
    role: 'Sponsorship Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0013-768x679.jpg',
    linkedin: 'https://www.linkedin.com/in/famiya-kashani-2422a3273',
  },
  {
    name: 'Urja Wadgaye',
    role: 'Podcast Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0014.jpg',
    linkedin: 'https://www.linkedin.com/in/urja-wadgaye',
  },
  {
    name: 'Varad Mulgund',
    role: 'Podcast Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0015.jpg',
    linkedin: 'https://www.linkedin.com/in/varad-mulgund-731aa632a/',
  },
  {
    name: 'Anshdha Chinchmalatpure',
    role: 'Promotions Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0017-768x1041.jpg',
    linkedin: 'https://www.linkedin.com/in/anshdha-chinchmalatpure/',
  },
  {
    name: 'Ayush Ghosekar',
    role: 'Event Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0020.jpg',
    linkedin: 'https://www.linkedin.com/in/ayush-ghosekar-8a5948289/',
  },
  {
    name: 'Pratik Kadpe',
    role: 'Event Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0028-768x1151.jpg',
    linkedin: 'https://www.linkedin.com/in/pratik-kadpe-pk7172/',
  },
  {
    name: 'Bhavik Modi',
    role: 'Governance & Compliance Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0018.jpg',
    linkedin: 'https://www.linkedin.com/in/21bhavik',
  },
  {
    name: 'Vedashree Ghotkar',
    role: 'Editorial Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0021.jpg',
    linkedin: 'https://www.linkedin.com/in/vedashree-ganesh-ghotkar-07b0b61bb',
  },
  {
    name: 'Nishant Inamdar',
    role: 'Editorial Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0022.jpg',
    linkedin: 'https://www.linkedin.com/in/nishant-inamdar-bb6444246',
  },
  {
    name: 'Manasi Sahare',
    role: 'IT Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0023.jpg',
    linkedin: 'https://www.linkedin.com/in/manasi-sahare-25ba62307/',
  },
  {
    name: 'Tanay Kanitkar',
    role: 'IT Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0024-768x1024.jpg',
    linkedin: 'https://www.linkedin.com/in/tanay-kanitkar/',
  },
  {
    name: 'Vivek Goondil',
    role: 'Photography Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0025.jpg',
    linkedin: 'https://www.linkedin.com/in/vivek-gondil/',
  },
  {
    name: 'Vishal Ishwale',
    role: 'Photography Department Lead',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0026.jpg',
    linkedin: 'https://www.linkedin.com/in/vishal-ishwale-230663245',
  },
  {
    name: 'Atharv Shinkar',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0029-298x300.jpg',
    linkedin: 'https://www.linkedin.com/in/atharva-shinkar-wani-390002325',
  },
  {
    name: 'Gaurav Shinde',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0030-768x890.jpg',
    linkedin: 'https://www.linkedin.com/in/gauravshinde7999/',
  },
];

// Former Forum Leaders (2024-2025)
const formerLeaders2024 = [
  {
    name: 'Anish Kashyap',
    role: 'President',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Anish-259x300.png',
    linkedin: 'https://www.linkedin.com/in/anish-kashyap-916048194/',
  },
  {
    name: 'Shivam Dewangan',
    role: 'Vice President',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Shivam-300x271.jpg',
    linkedin: 'https://www.linkedin.com/in/shivam-dewangan-03b988188/',
  },
  {
    name: 'Charu Dutt Joshi',
    role: 'General Secretary & Promotion Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Charu-scaled-e1721836184333-300x298.jpg',
    linkedin: 'https://www.linkedin.com/in/charu-dutt-joshi-71842b287/',
  },
  {
    name: 'Vaishnavi Srivastava',
    role: 'General Advisor & Treasurer',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Vaishnavi-S-e1721837242300-263x300.jpg',
    linkedin: 'https://www.linkedin.com/in/vaishnavisrivastava23/',
  },
  {
    name: 'Shivani Puri',
    role: 'Editorial Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Shivani-Puri-e1721836382440-278x300.jpeg',
    linkedin: 'https://www.linkedin.com/in/shivani-puri-8b63512ba/',
  },
  {
    name: 'Madhura Shukla',
    role: 'Editorial Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Madhura-Shukla-e1721836498995-300x228.jpg',
    linkedin: 'https://www.linkedin.com/in/madhura-shukla-7a8011250/',
  },
  {
    name: 'Prachi Punjabi',
    role: 'Sponsorship Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Prachi-e1721836579388-282x300.jpg',
    linkedin: 'https://www.linkedin.com/in/prachi-punjabi-761336264/',
  },
  {
    name: 'Rohan Kashid',
    role: 'Sponsorship Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Rohan-Kashid-scaled-e1721836810742-252x300.jpg',
    linkedin: 'https://www.linkedin.com/in/rohan-kashid-541a90223/',
  },
  {
    name: 'ShambhuRaje Borade',
    role: 'Podcast Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Shambhu-scaled-e1721836956437-254x300.jpeg',
    linkedin: 'https://www.linkedin.com/in/shambhuraje-borade-2227a3188/',
  },
  {
    name: 'Karan Nawal',
    role: 'Technical Head & Podcast Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Karan-Pic-250x300.jpg',
    linkedin: 'https://www.linkedin.com/in/karan-nawal-b33955156/',
  },
  {
    name: 'Nareshsing Pardeshi',
    role: 'Event Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Naresh-scaled-e1721837462550-254x300.jpg',
    linkedin: 'https://www.linkedin.com/in/naresh-pardeshi-a59978209/',
  },
  {
    name: 'Vishal Parashar',
    role: 'Event Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Vishal-Parashar-scaled-e1721837570814-272x300.jpg',
    linkedin: 'https://www.linkedin.com/in/vishal-parashar-44013422b/',
  },
  {
    name: 'Rohit Jasud',
    role: 'Technical Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Rohit-jasude-e1721837667855-283x300.jpg',
    linkedin: 'https://www.linkedin.com/in/rohit-jasud-4aa722286/',
  },
  {
    name: 'Muskan Shaikh',
    role: 'Promotions Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/MUSKAN-SHAIKH-300x300.jpeg',
    linkedin: 'https://www.linkedin.com/in/muskan-shaikh-/',
  },
  {
    name: 'Tejal Satija',
    role: 'Documentation Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Tejal-e1721837804937-283x300.jpg',
    linkedin: 'https://www.linkedin.com/in/tejal-satija-023879261/',
  },
  {
    name: 'Rohit Ugale',
    role: 'Creative Head & Social Media Co Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-06-at-18.02.50_d47fddbd-300x297.jpg',
    linkedin: 'https://www.linkedin.com/in/rohit-ugale-903b7a237/',
  },
  {
    name: 'Raviraj Ghadge',
    role: 'Creative Co Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Raviraj-300x300.jpg',
    linkedin: 'https://www.linkedin.com/in/raviraj-ghadge-99b391201/',
  },
  {
    name: 'Hemanth Singirikonda',
    role: 'Photography Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Hemanth-Singirikonda--e1721838068308-198x300.png',
    linkedin: 'https://www.linkedin.com/in/singirikonda-hemanth-2b9b57238/',
  },
  {
    name: 'Nalamothu Subhash',
    role: 'Photography Co-head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/N-subhash-scaled-e1721838179792-274x300.jpg',
    linkedin: 'https://www.linkedin.com/in/subhashnalamothu/',
  },
  {
    name: 'Vishal Jadhav',
    role: 'Website Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Vishal-Jadhav_-300x300.jpg',
    linkedin: 'https://www.linkedin.com/in/vishal-jadhav-857823202/',
  },
  {
    name: 'Rishikesh Mandaniyan',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Rishikesh-mandaniyan-coremember-scaled-e1721839502563-192x300.jpg',
    linkedin: 'https://www.linkedin.com/in/rishikesh-mandaniyan-87b87b257/',
  },
  {
    name: 'Kanishka Sharma',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Kanishka-scaled-e1721838646486-300x300.jpg',
    linkedin: 'https://www.linkedin.com/in/kanishka-sharma-95421a300/',
  },
  {
    name: 'Vaishnavi Kamlu',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Vaishnavi-Kamlu_Core-Member-e1721838733340-251x300.jpg',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-kamlu-8bb805152/',
  },
  {
    name: 'Pinkesh Tawade',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Pinkesh-e1721839589221-162x300.jpg',
    linkedin: 'https://www.linkedin.com/in/pinkesh-tawade-/',
  },
  {
    name: 'Harish Sahu',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/2024/07/Harish-Sahu-e1721839271101-236x300.png',
    linkedin: 'https://www.linkedin.com/in/harishsahu3902/',
  },
];

const timelineYears = [
  { year: '2025–2026', members: coreCommittee },
  { year: '2024–2025', members: formerLeaders2024 },
];

// Member Card Component
const MemberCard = ({ member, index }: { member: typeof coreCommittee[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="group"
  >
    <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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

const Members = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const handlePrevYear = () => {
    setActiveYearIndex((prev) => (prev === 0 ? timelineYears.length - 1 : prev - 1));
  };

  const handleNextYear = () => {
    setActiveYearIndex((prev) => (prev === timelineYears.length - 1 ? 0 : prev + 1));
  };

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
              Meet the dedicated team of student leaders and department heads driving the Budding Entrepreneurs Forum forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Leadership Team"
            title="Core Committee"
            description="The student leadership team responsible for steering the forum's vision and operations."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {coreCommittee.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Team Leads"
            title="Department Heads"
            description="Dedicated leaders managing various aspects of the forum's operations."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {departmentHeads.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Former Forum Leaders - Timeline Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Legacy"
            title="Our Former Forum Leaders"
            description="Honoring the leaders who built the foundation of our entrepreneurship community."
          />

          {/* Timeline Navigation */}
          <div className="relative mb-12">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            {/* Timeline Years */}
            <div className="relative flex items-center justify-center gap-4 md:gap-8">
              <button
                onClick={handlePrevYear}
                className="z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors shadow-sm"
                aria-label="Previous year"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 md:gap-4 overflow-x-auto py-4 px-2 no-scrollbar">
                {timelineYears.map((item, index) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYearIndex(index)}
                    className={`relative z-10 px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                      activeYearIndex === index
                        ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                        : 'bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary'
                    }`}
                  >
                    {item.year}
                    {activeYearIndex === index && (
                      <motion.div
                        layoutId="activeYear"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextYear}
                className="z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors shadow-sm"
                aria-label="Next year"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Members Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYearIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
            >
              {timelineYears[activeYearIndex].members.map((member, index) => (
                <MemberCard key={member.name} member={member} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
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
