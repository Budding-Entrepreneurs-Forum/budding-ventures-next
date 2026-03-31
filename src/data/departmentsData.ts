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
        image: 'famiya-kashani',
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
        image: 'urja-wadgaye',
        linkedin: 'https://www.linkedin.com/in/urja-wadgaye',
      },
      {
        name: 'Varad Mulgund',
        role: 'Podcast Department Lead',
        image: 'varad-mulgund',
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
        role: 'Visual Production Department Lead',
        image: 'https://buddingentrepreneurs.in/wp-content/uploads/2025/07/Ventures-Voyage-July-2025-By-Budding-Entrepreneurs-Forum-_20250720_142332_0000_Page_19_Image_0025.jpg',
        linkedin: 'https://www.linkedin.com/in/vivek-gondil/',
      },
      {
        name: 'Vishal Ishwale',
        role: 'Visual Production Department Lead',
        image: 'vishal-ishwale',
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
    image: 'deependra-sharma',
    description: 'Approving events and documents related to event planning. Supporting events held by the forum. Organize training programs through workshops, mentorship, networking, seminars, etc.',
    linkedin: 'https://www.linkedin.com/in/dr-deependra-sharma-579771167/',
  },
  {
    name: 'Dr. Swati Bankar',
    role: 'Associate Dean, MIT WPU SOB',
    tag: 'Supported By',
    image: 'swati-bankar',
    description: 'Supporting student development initiatives and fostering entrepreneurial growth among students.',
    linkedin: 'https://www.linkedin.com/in/dr-swati-bankar-024111178/',
  },
  {
    name: 'Dr. Vinita Ahire Kale',
    role: 'Forum Faculty Head, MIT WPU SOB',
    tag: 'Proposed & Guided By',
    image: 'vinita-ahire-kale',
    description: 'Provides opportunities for stimulating and augmenting the entrepreneurial spirit. Creates a culture of entrepreneurship and promotes entrepreneurial studies.',
    linkedin: 'https://www.linkedin.com/in/dr-vinita-ahire-kale/',
  },
];

// Core Committee - ALL current year members (includes leadership + department heads)
export const coreCommitteeMembers = [
  // Leadership Team
  {
    name: 'Nayan Pote',
    role: 'President',
    image: 'nayan-pote', // Key for mapping to imported image
    linkedin: 'http://linkedin.com/in/nayanpote',
  },
  {
    name: 'Ishit Yadav',
    role: 'Vice President – External',
    image: 'ishit-yadav', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/ishit-yadav-4a3729326',
  },
  {
    name: 'Jhanvi Odedra',
    role: 'Vice President – Internal',
    image: 'jhanvi-odedra', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/jhanvi-odedra-b4837426b/',
  },
  {
    name: 'Sanjana Kashyap',
    role: 'General Secretary',
    image: 'sanjana-kashyap', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/sanjana-kashyap-1ab802253',
  },
  {
    name: 'Deeksha Pal',
    role: 'General Advisor & Treasurer',
    image: 'deeksha-pal', // Key for mapping to imported image
    linkedin: 'http://linkedin.com/in/deeksha-pal-3ab60131a',
  },
  // Department Heads
  {
    name: 'Sohira Kshemkalyani',
    role: 'Branding Team & Strategic Head',
    image: 'sohira-kshemkalyani', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/sohira-kshemkalyani-2332b021b/',
  },
  {
    name: 'Sushmita Poojari',
    role: 'Social Media Department Lead',
    image: 'sushmita-poojari', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/sushmita-poojari-649a23261',
  },
  {
    name: 'Dnyanesh Patil',
    role: 'Creative Department Lead',
    image: 'dnyanesh-patil', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/dnyanesh-patil-j050602',
  },
  {
    name: 'Khushi Sethia',
    role: 'Creative Department Lead',
    image: 'khushi-sethia', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/khushi-shethia-7792a6205',
  },
  {
    name: 'Devang Kaslikar',
    role: 'Sponsorship Department Lead',
    image: 'devang-kaslikar', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/devang-kaslikar-1448b7206',
  },
  {
    name: 'Famiya Kashani',
    role: 'Sponsorship Department Lead',
    image: 'famiya-kashani',
    linkedin: 'https://www.linkedin.com/in/famiya-kashani-2422a3273',
  },
  {
    name: 'Urja Wadgaye',
    role: 'Podcast Department Lead',
    image: 'urja-wadgaye',
    linkedin: 'https://www.linkedin.com/in/urja-wadgaye',
  },
  {
    name: 'Varad Mulgund',
    role: 'Podcast Department Lead',
    image: 'varad-mulgund', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/varad-mulgund-731aa632a/',
  },
  {
    name: 'Anshdha Chinchmalatpure',
    role: 'Promotions Department Lead',
    image: 'anshdha-chinchmalatpure', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/anshdha-chinchmalatpure/',
  },
  {
    name: 'Ayush Ghosekar',
    role: 'Event Department Lead',
    image: 'ayush-ghosekar', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/ayush-ghosekar-8a5948289/',
  },
  {
    name: 'Pratik Kadpe',
    role: 'Event Department Lead',
    image: 'pratik-kadpe', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/pratik-kadpe-pk7172/',
  },
  {
    name: 'Bhavik Modi',
    role: 'Governance & Compliance Lead',
    image: 'bhavik-modi', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/21bhavik',
  },
  {
    name: 'Vedashree Ghotkar',
    role: 'Editorial Department Lead',
    image: 'vedashree-ghotkar', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/vedashree-ganesh-ghotkar-07b0b61bb',
  },
  {
    name: 'Nishant Inamdar',
    role: 'Editorial Department Lead',
    image: 'nishant-inamdar', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/nishant-inamdar-bb6444246',
  },
  {
    name: 'Manasi Sahare',
    role: 'IT Department Lead',
    image: 'manasi-sahare', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/manasi-sahare-25ba62307/',
  },
  {
    name: 'Tanay Kanitkar',
    role: 'IT Department Lead',
    image: 'tanay-kanitkar', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/tanay-kanitkar/',
  },
  {
    name: 'Vivek Goondil',
    role: 'Visual Production Department Lead',
    image: 'vivek-goondil', // Key for mapping to imported image
    linkedin: 'https://www.linkedin.com/in/vivek-gondil/',
  },
  {
    name: 'Vishal Ishwale',
    role: 'Visual Production Department Lead',
    image: 'vishal-ishwale',
    linkedin: 'https://www.linkedin.com/in/vishal-ishwale-230663245',
  },
  {
    name: 'Atharv Shinkar',
    role: 'Executive Core Member',
    image: 'atharva-shinkar',
    linkedin: 'https://www.linkedin.com/in/atharva-shinkar-wani-390002325',
  },
  {
    name: 'Gaurav Shinde',
    role: 'Executive Core Member',
    image: 'gaurav-shinde',
    linkedin: 'https://www.linkedin.com/in/gauravshinde7999/',
  },
];

// Leadership year data structure
export interface LeadershipYear {
  year: string;
  members: typeof coreCommitteeMembers;
}

// All leadership years for the timeline
export const leadershipYears: LeadershipYear[] = [
  {
    year: '2025-2026',
    members: coreCommitteeMembers,
  },
];
