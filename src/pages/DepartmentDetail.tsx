import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkeletonImage } from '@/components/ui/SkeletonImage';
import { departments } from '@/data/departmentsData';
import { Linkedin, ArrowLeft, Users } from 'lucide-react';

const DepartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const department = departments.find((d) => d.id === id);

  if (!department) {
    return (
      <Layout>
        <section className="pt-32 pb-16 min-h-screen bg-background">
          <div className="container-wide mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Department Not Found</h1>
            <Link to="/members" className="text-primary hover:underline">
              ← Back to Members
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
          className="absolute top-20 right-[15%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link 
            to="/members" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Members
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Structure
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {department.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {department.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Role"
            title="What We Do"
            description=""
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {department.whatWeDo}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Leadership"
            title="Department Heads"
            description="The leaders driving this department's success."
          />

          {/* Centered, Highlighted Heads */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {department.heads.map((head, index) => (
              <motion.div
                key={head.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-64 md:w-72"
              >
                <div className="relative bg-card rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Large Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-secondary">
                    <SkeletonImage
                      src={head.image}
                      alt={head.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      wrapperClassName="w-full h-full"
                      skeletonClassName="rounded-none"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent p-6 pt-16">
                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      {head.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {head.role}
                    </p>
                    
                    {head.linkedin && (
                      <a
                        href={head.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Members Section (Placeholder) */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Team"
            title="Department Members"
            description="Our dedicated team members working behind the scenes."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
              <Users className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Department member profiles will be added soon. Stay tuned!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DepartmentDetail;
