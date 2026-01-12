import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useState } from 'react';

const galleryImages = [
  'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/filters_formatjpeg-qiz8vlcn2ygaoi0kdexxlgu7r6bt8o66l09zc8vps4.jpg',
  'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/92-qiz8vo65ngk5nbwgwy5tay4ljbxwvrhdle8fs2rj9g.webp',
  'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-28-at-20.51.22_6a46a486-qz6gbrgreb6s5ht309a5bccl681x3mdg2pih0h22x0.jpg',
  'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-28-at-20.46.30_2aa7aa6e-qz6g375p4ngqde8x0k0ili5ebu9iywdhkbj7lpr7lw.jpg',
  'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-28-at-20.57.47_433dea9a-qz6u5xxdl95phe69zljutmnfe0l8ok40kgutnyeh50.jpg',
  'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/AdobeStock_228601843-scaled-1-qz6fj4bu06wp32akpsip2uagktbje0ublqm12xbyf8.jpeg',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Gallery</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Moments <span className="gradient-text">Captured</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl">Explore photos from our events, workshops, and campus activities.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <SectionHeading badge="Photo Gallery" title="Event Highlights" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="aspect-square overflow-hidden rounded-xl cursor-pointer group" onClick={() => setSelectedImage(img)}>
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src={selectedImage} alt="Selected" className="max-w-full max-h-[90vh] rounded-xl" />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
