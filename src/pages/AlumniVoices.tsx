import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkeletonImage } from '@/components/ui/SkeletonImage';
import { motion } from 'framer-motion';
import { Linkedin, Quote } from 'lucide-react';
import namanImg from '@/assets/alumni/naman-jain.jpg';
import anishImg from '@/assets/alumni/anish-kashyap.jpg';
import nayanImg from '@/assets/alumni/nayan-pote.jpg';

const presidents = [
  {
    name: 'Naman Jain',
    year: '2023–2024',
    photo: namanImg,
    linkedin: 'https://www.linkedin.com/in/naman-jain-2154b01b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    testimonial: `As a former President, I've seen firsthand that the best of the best lead this forum. We have built a legacy of excellence that never fades, a continuous cycle of leading the new generation toward unmatched success.\n\nThis is the premier arena for networking and building your own name. To the visionaries joining us: you aren't just joining a forum; you are stepping into a powerhouse of innovation. Lead from the front and make your mark`,
  },
  {
    name: 'Anish Kashyap',
    year: '2024–2025',
    photo: anishImg,
    linkedin: 'https://www.linkedin.com/in/anish-kashyap-916048194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    testimonial: `I never wanted to join Budding my friends pushed me into it. But the best things in life find you when you need them most, not when you want them.\n\nBudding is where I learned to fight my own battles, step beyond my comfort zone, and face the raw realities of the world. It did not hand me answers, it prepared me to find them. It gave me the canvas to bring ideas to life, to lead 19 events in 11 months, and to build something truly meaningful.\n\nOne thing I have come to believe deeply is that a President is only as good as his team. And in my journey, it was the team I worked with that truly made the difference. Together, we sailed the ship through high and low tides, turning challenges into milestones and efforts into achievements.\n\nBudding does not just build professionals, it builds people. It teaches you that struggles are not setbacks, but opportunities. It shapes you into someone who does not just chase results, but stands firm on values.\n\nWhat makes Budding truly one of a kind is its soul. It empowers individuals to learn, fail, grow, and create. It holds values that even large institutions often struggle to embody. Its alumni remain deeply committed to its purpose, always ready to contribute with full spirit whenever called upon.\n\nBudding is the reason I have my career today and I mean that with every word.`,
  },
  {
    name: 'Nayan Pote',
    year: '2025 – Present',
    photo: nayanImg,
    linkedin: 'https://www.linkedin.com/in/nayanpote/',
    testimonial: `Budding, for me, has always represented a journey of purposeful progress.\n\nIt is not defined by positions or visibility, but by the work carried out consistently behind the scenes, the responsibilities we take, the pressure we handle, and the small yet meaningful improvements we strive for each day.\n\nMy vision is clear Budding tomorrow should stand slightly ahead of Budding today. Not through force or superficial change, but through steady, organic growth driven by genuine effort and intent.\n\nWhat truly defines this forum is its people, individuals who take ownership, support one another, and contribute without seeking recognition.\n\nAs the serving President, I consider myself a part of this ongoing journey, learning, contributing, and growing alongside the forum.\n\nBudding, in essence, is about progress that may not always be immediately visible, but is always being built.`,
  },
];

const AlumniVoices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <SectionHeading
            badge="Leadership"
            title="Voices of Our Leaders"
            description="Hear from the presidents who shaped Budding Entrepreneurs Forum and carried its legacy forward."
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {presidents.map((president, index) => (
              <motion.div
                key={president.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-8 z-10 ring-4 ring-background" />

                {/* Year badge on timeline */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 -top-3 hidden md:block`}>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
                    {president.year}
                  </span>
                </div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                }`}>
                  <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />

                    {/* Photo placeholder + Name */}
                    <div className="flex items-center gap-4 mb-5">
                      <SkeletonImage
                        src={president.photo}
                        alt={president.name}
                        wrapperClassName="w-16 h-16 rounded-full shrink-0 ring-2 ring-primary/10"
                        className="w-full h-full object-cover rounded-full"
                      />
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {president.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          President · {president.year}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="space-y-3 mb-6">
                      {president.testimonial.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-muted-foreground text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* LinkedIn CTA */}
                    <a
                      href={president.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5]/10 text-[#0077B5] rounded-lg text-sm font-medium hover:bg-[#0077B5]/20 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlumniVoices;
