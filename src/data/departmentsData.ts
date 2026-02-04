// Department Data with heads and descriptions

export interface DepartmentHead {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  whatWeDo: string;
  heads: DepartmentHead[];
}

export const departments: Department[] = [
  {
    id: 'creative',
    name: 'Creative Department',
    shortName: 'C',
    description: 'Handles visual design, graphics, and creative content.',
    whatWeDo: 'The Creative Department is responsible for all visual design elements of the forum. We create compelling graphics, posters, banners, and visual content for events, social media, and publications. Our team ensures a consistent visual identity that reflects the innovative spirit of budding entrepreneurs.',
    heads: [
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
    ],
  },
  {
    id: 'editorial',
    name: 'Editorial Department',
    shortName: 'E',
    description: 'Manages content writing, newsletters, and publications.',
    whatWeDo: 'The Editorial Department crafts compelling narratives and written content for the forum. We produce newsletters, articles, blog posts, and event documentation. Our team ensures quality content that informs, inspires, and engages our entrepreneurial community.',
    heads: [
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
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media Department',
    shortName: 'S',
    description: 'Manages online presence and social media platforms.',
    whatWeDo: 'The Social Media Department manages the forum\'s digital presence across all platforms. We create engaging social media content, manage community interactions, and build our online brand. Our team ensures consistent messaging and timely updates to keep our audience connected.',
    heads: [
      {
        name: 'Sushmita Poojari',
        role: 'Social Media Department Lead',
        image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0007-768x1322.jpg',
        linkedin: 'https://www.linkedin.com/in/sushmita-poojari-649a23261',
      },
      {
        name: 'Sohira Kshemkalyani',
        role: 'Branding Team & Strategic Head',
        image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0010.jpg',
        linkedin: 'https://www.linkedin.com/in/sohira-kshemkalyani-2332b021b/',
      },
    ],
  },
  {
    id: 'technical',
    name: 'Technical Department',
    shortName: 'T',
    description: 'Handles technical aspects including website and tools.',
    whatWeDo: 'The Technical Department powers the forum\'s digital infrastructure. We develop and maintain the website, manage technical tools, and provide IT support for events. Our team ensures smooth technical operations and explores innovative tech solutions for the forum.',
    heads: [
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
    ],
  },
  {
    id: 'event',
    name: 'Event Department',
    shortName: 'E',
    description: 'Plans and executes all forum events and activities.',
    whatWeDo: 'The Event Department brings our vision to life through impactful events. We plan, coordinate, and execute workshops, seminars, competitions, and networking sessions. Our team ensures every event delivers value and creates memorable experiences for participants.',
    heads: [
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
    ],
  },
  {
    id: 'sponsorship',
    name: 'Sponsorship Department',
    shortName: 'S',
    description: 'Manages partnerships and sponsorship relations.',
    whatWeDo: 'The Sponsorship Department builds strategic partnerships and secures resources for forum activities. We connect with companies, negotiate sponsorships, and maintain relationships with our partners. Our team ensures the forum has the support needed to deliver exceptional programs.',
    heads: [
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
    ],
  },
  {
    id: 'promotions',
    name: 'Promotions Department',
    shortName: 'P',
    description: 'Handles marketing and promotional activities.',
    whatWeDo: 'The Promotions Department drives awareness and engagement for forum activities. We develop marketing strategies, create promotional campaigns, and ensure maximum reach for our events. Our team connects with students and builds excitement around entrepreneurship initiatives.',
    heads: [
      {
        name: 'Anshdha Chinchmalatpure',
        role: 'Promotions Department Lead',
        image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0017-768x1041.jpg',
        linkedin: 'https://www.linkedin.com/in/anshdha-chinchmalatpure/',
      },
    ],
  },
  {
    id: 'podcast',
    name: 'Podcast Department',
    shortName: 'P',
    description: 'Produces and manages forum podcasts and audio content.',
    whatWeDo: 'The Podcast Department creates engaging audio content that shares entrepreneurial insights. We produce podcasts featuring industry leaders, successful entrepreneurs, and thought-provoking discussions. Our team brings inspiring stories and valuable knowledge to our listeners.',
    heads: [
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
    ],
  },
  {
    id: 'photography',
    name: 'Photography Department',
    shortName: 'P',
    description: 'Captures and documents forum events and activities.',
    whatWeDo: 'The Photography Department captures the essence of our forum\'s journey through visual storytelling. We document events, create photo galleries, and produce visual archives. Our team ensures every significant moment is preserved and shared with our community.',
    heads: [
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
    ],
  },
  {
    id: 'governance',
    name: 'Governance & Compliance',
    shortName: 'G',
    description: 'Ensures proper governance and regulatory compliance.',
    whatWeDo: 'The Governance & Compliance team ensures the forum operates with integrity and accountability. We maintain documentation, ensure compliance with institutional policies, and uphold governance standards. Our team safeguards the forum\'s credibility and operational excellence.',
    heads: [
      {
        name: 'Bhavik Modi',
        role: 'Governance & Compliance Lead',
        image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0018.jpg',
        linkedin: 'https://www.linkedin.com/in/21bhavik',
      },
    ],
  },
];

// Faculty Leadership data
export const facultyLeadership = [
  {
    name: 'Dr. Deependra Sharma',
    role: 'Dean, MIT WPU SOB',
    tag: 'Recommended By',
    image: '/placeholder.svg', // Placeholder - user will attach photos
    description: 'Approving events and documents related to event planning. Supporting events held by the forum. Organize training programs through workshops, mentorship, networking, seminars, etc.',
  },
  {
    name: 'Prof. Dr. Vinita Ahire Kale',
    role: 'Forum Faculty Head, MIT WPU SOB',
    tag: 'Proposed By',
    image: '/placeholder.svg', // Placeholder - user will attach photos
    description: 'Provides opportunities for stimulating and augmenting the entrepreneurial spirit. Creates a culture of entrepreneurship and promotes entrepreneurial studies.',
  },
];

// Core Committee - ALL current year members (includes leadership + department heads)
export const coreCommitteeMembers = [
  // Leadership Team
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
  // Department Heads
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

// Leadership year data structure
export interface LeadershipYear {
  year: string;
  members: typeof coreCommitteeMembers;
}

// Former Leaders (2024-2025)
export const formerLeaders2024_2025 = [
  {
    name: 'Anish Kashyap',
    role: 'President',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695405459422-qz6g4gq2rw2s4bvk8ek5lmhm79zeo1ykfj0n3xo14k.jpeg',
    linkedin: 'https://www.linkedin.com/in/anishkashyap20/',
  },
  {
    name: 'Shivam Dewangan',
    role: 'Vice President',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1694447927181-qz6g4it5t6q3ejqj2dcwlqynhfx0xojqm0ot78vb48.jpeg',
    linkedin: 'https://www.linkedin.com/in/shivam-dewangan-09a0aa217/',
  },
  {
    name: 'Charu Dutt Joshi',
    role: 'General Secretary & Promotion Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695405588508-qz6g4hr05ubywmwcidyb1w5qqd94sj9uxr7c85dteo.jpeg',
    linkedin: 'https://www.linkedin.com/in/charu-dutt-joshi-96899421a/',
  },
  {
    name: 'Vaishnavi Srivastava',
    role: 'General Advisor & Treasurer',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695405726287-qz6g4j34jvd9b1m68v06g1e1sefwhnv3rk3sbd8n5g.jpeg',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-srivastava-8b33a5217/',
  },
  {
    name: 'Shivani Puri',
    role: 'Editorial Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695405895752-qz6g4k0x9t1cfkd0n75nk9c6k1k3xr2snr6n7rrsrg.jpeg',
    linkedin: 'https://www.linkedin.com/in/shivani-puri-b58b9421a/',
  },
  {
    name: 'Madhura Shukla',
    role: 'Editorial Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695406041259-qz6g4kv35k5b8h3yn8g6qf9d0k1w3w7h5y0y3y3y5g.jpeg',
    linkedin: 'https://www.linkedin.com/in/madhura-shukla/',
  },
  {
    name: 'Prachi Punjabi',
    role: 'Sponsorship Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695406163722-qz6g4lq7vq8n3j7h5d3y8m6w2t9r4b1x6c0z2x8k.jpeg',
    linkedin: 'https://www.linkedin.com/in/prachi-punjabi-a3b8b9217/',
  },
  {
    name: 'Rohan Kashid',
    role: 'Sponsorship Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695406288456-qz6g4mj5w9z1b4c7d2e6f8g0h3i5j7k9l1m3n5o7p.jpeg',
    linkedin: 'https://www.linkedin.com/in/rohan-kashid/',
  },
  {
    name: 'ShambhuRaje Borade',
    role: 'Podcast Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695406402190-qz6g4nd3r5s7t9u1v3w5x7y9z1a3b5c7d9e1f3g5h.jpeg',
    linkedin: 'https://www.linkedin.com/in/shambhuraje-borade/',
  },
  {
    name: 'Karan Nawal',
    role: 'Technical Head & Podcast Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695406521978-qz6g4o73p9q1r3s5t7u9v1w3x5y7z9a1b3c5d7e9f.jpeg',
    linkedin: 'https://www.linkedin.com/in/karan-nawal/',
  },
  {
    name: 'Nareshsing Pardeshi',
    role: 'Event Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695406647891-qz6g4pz1g3h5i7j9k1l3m5n7o9p1q3r5s7t9u1v3w.jpeg',
    linkedin: 'https://www.linkedin.com/in/nareshsing-pardeshi/',
  },
  {
    name: 'Vishal Parashar',
    role: 'Event Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695406772345-qz6g4qt5x7y9z1a3b5c7d9e1f3g5h7i9j1k3l5m7n.jpeg',
    linkedin: 'https://www.linkedin.com/in/vishal-parashar/',
  },
  {
    name: 'Rohit Jasud',
    role: 'Technical Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695406891234-qz6g4rn3o5p7q9r1s3t5u7v9w1x3y5z7a9b1c3d5e.jpeg',
    linkedin: 'https://www.linkedin.com/in/rohit-jasud/',
  },
  {
    name: 'Muskan Shaikh',
    role: 'Promotions Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695407015678-qz6g4sh1f3g5h7i9j1k3l5m7n9o1p3q5r7s9t1u3v.jpeg',
    linkedin: 'https://www.linkedin.com/in/muskan-shaikh/',
  },
  {
    name: 'Tejal Satija',
    role: 'Documentation Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695407140012-qz6g4tb9w1x3y5z7a9b1c3d5e7f9g1h3i5j7k9l1m.jpeg',
    linkedin: 'https://www.linkedin.com/in/tejal-satija/',
  },
  {
    name: 'Rohit Ugale',
    role: 'Creative Head & Social Media Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695407267456-qz6g4u57n9o1p3q5r7s9t1u3v5w7x9y1z3a5b7c9d.jpeg',
    linkedin: 'https://www.linkedin.com/in/rohit-ugale/',
  },
  {
    name: 'Raviraj Ghadge',
    role: 'Creative Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695407392890-qz6g4vz5e7f9g1h3i5j7k9l1m3n5o7p9q1r3s5t7u.jpeg',
    linkedin: 'https://www.linkedin.com/in/raviraj-ghadge/',
  },
  {
    name: 'Hemanth Singirikonda',
    role: 'Photography Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695407518234-qz6g4wt3v5w7x9y1z3a5b7c9d1e3f5g7h9i1j3k5l.jpeg',
    linkedin: 'https://www.linkedin.com/in/hemanth-singirikonda/',
  },
  {
    name: 'Nalamothu Subhash',
    role: 'Photography Co-Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695407643678-qz6g4xn1m3n5o7p9q1r3s5t7u9v1w3x5y7z9a1b3c.jpeg',
    linkedin: 'https://www.linkedin.com/in/nalamothu-subhash/',
  },
  {
    name: 'Vishal Jadhav',
    role: 'Website Head',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695407769012-qz6g4yh9d1e3f5g7h9i1j3k5l7m9n1o3p5q7r9s1t.jpeg',
    linkedin: 'https://www.linkedin.com/in/vishal-jadhav/',
  },
  {
    name: 'Rishikesh Mandaniyan',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695407894456-qz6g4zb7u9v1w3x5y7z9a1b3c5d7e9f1g3h5i7j9k.jpeg',
    linkedin: 'https://www.linkedin.com/in/rishikesh-mandaniyan/',
  },
  {
    name: 'Kanishka Sharma',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695408019890-qz6g505l3m5n7o9p1q3r5s7t9u1v3w5x7y9z1a3b5c.jpeg',
    linkedin: 'https://www.linkedin.com/in/kanishka-sharma/',
  },
  {
    name: 'Vaishnavi Kamlu',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695408145234-qz6g516d7e9f1g3h5i7j9k1l3m5n7o9p1q3r5s7t9u.jpeg',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-kamlu/',
  },
  {
    name: 'Pinkesh Tawade',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695408270678-qz6g527v1w3x5y7z9a1b3c5d7e9f1g3h5i7j9k1l3m.jpeg',
    linkedin: 'https://www.linkedin.com/in/pinkesh-tawade/',
  },
  {
    name: 'Harish Sahu',
    role: 'Executive Core Member',
    image: 'https://buddingentrepreneurs.in/wp-content/uploads/elementor/thumbs/1695408396012-qz6g538n5o7p9q1r3s5t7u9v1w3x5y7z9a1b3c5d7e.jpeg',
    linkedin: 'https://www.linkedin.com/in/harish-sahu/',
  },
];

// All leadership years for the timeline
export const leadershipYears: LeadershipYear[] = [
  {
    year: '2025-2026',
    members: coreCommitteeMembers,
  },
  {
    year: '2024-2025',
    members: formerLeaders2024_2025,
  },
];
