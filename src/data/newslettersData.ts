// Newsletter cover images
import companiesIndia from '@/assets/newsletters/companies-that-built-india.webp';
import mapOfMithai from '@/assets/newsletters/map-of-mithai.webp';
import modernDefense from '@/assets/newsletters/modern-defense-technologies.webp';
import beyondIT from '@/assets/newsletters/beyond-it-startups.webp';
import genZ from '@/assets/newsletters/gen-z-business-revolution.webp';
import synergyStories from '@/assets/newsletters/synergy-stories.webp';
import boxOffice from '@/assets/newsletters/business-at-box-office.webp';
import travel from '@/assets/newsletters/entrepreneurship-in-travel.webp';
import agriculture from '@/assets/newsletters/agriculture-sector.png';
import ideasToIncome from '@/assets/newsletters/success-ideas-to-income.png';
import businessModel from '@/assets/newsletters/business-model-and-business.png';
import passionHustles from '@/assets/newsletters/passion-side-hustles.png';
import nextgen from '@/assets/newsletters/nextgen-entrepreneurs.webp';
import nicheMarkets from '@/assets/newsletters/entrepreneurship-niche-markets.webp';
import talesOfPassion from '@/assets/newsletters/tales-of-passion.webp';
import carnival from '@/assets/newsletters/entrepreneurial-carnival.png';
import socialPlaybook from '@/assets/newsletters/social-media-playbook.png';
import budget2024 from '@/assets/newsletters/budget-2024.png';
import unlockingCapital from '@/assets/newsletters/unlocking-capital.png';
import gigEconomy from '@/assets/newsletters/gig-economy.png';
import behindTank from '@/assets/newsletters/behind-the-tank.png';
import womenEntrepreneurs from '@/assets/newsletters/women-entrepreneurs.png';
import bioRevolution from '@/assets/newsletters/bio-revolution.png';
import socialMarketing from '@/assets/newsletters/social-media-marketing.png';
import covidImpact from '@/assets/newsletters/impact-of-covid.png';
import newAge from '@/assets/newsletters/new-age-entrepreneurship.png';
import powerMoney from '@/assets/newsletters/power-money-politics.png';
import startupValuation from '@/assets/newsletters/startup-valuation.png';
import smartCity from '@/assets/newsletters/smart-city-innovation.png';
import blueOcean from '@/assets/newsletters/blue-ocean-strategies.png';
import evaluatingBusiness from '@/assets/newsletters/evaluating-business.png';
import metaverse from '@/assets/newsletters/metaverse-boundless.png';

export interface Newsletter {
  id: string;
  title: string;
  date: string;
  sortDate: string; // YYYY-MM for sorting
  coverImage: string;
  pdfUrl?: string; // To be added when PDFs are provided
  description: string;
}

// Sorted from latest to oldest
export const newsletters: Newsletter[] = [
  {
    id: 'companies-that-built-india',
    title: 'Companies That Built INDIA – Across 7 Sectors',
    date: 'December 2025',
    sortDate: '2025-12',
    coverImage: companiesIndia,
    pdfUrl: '/pdfs/companies-that-built-india.pdf',
    description: 'Exploring the companies that have shaped India across seven major sectors and their impact on the economy.',
  },
  {
    id: 'map-of-mithai',
    title: 'Where Tradition Meets Innovation – The Map of Mithai',
    date: 'November 2025',
    sortDate: '2025-11',
    coverImage: mapOfMithai,
    pdfUrl: '/pdfs/map-of-mithai.pdf',
    description: 'Discovering how the traditional Indian sweets industry is embracing innovation while preserving cultural heritage.',
  },
  {
    id: 'modern-defense-technologies',
    title: 'Modern Defense Technologies and Global Security',
    date: 'October 2025',
    sortDate: '2025-10',
    coverImage: modernDefense,
    pdfUrl: '/pdfs/modern-defense-technologies.pdf',
    description: 'An in-depth look at how modern defense technologies are shaping the global security landscape.',
  },
  {
    id: 'beyond-it-startups',
    title: "Beyond IT & Startups – India's Overlooked Sectors",
    date: 'September 2025',
    sortDate: '2025-09',
    coverImage: beyondIT,
    pdfUrl: '/pdfs/beyond-it-startups.pdf',
    description: "Uncovering India's overlooked sectors beyond IT and startups that hold immense potential.",
  },
  {
    id: 'gen-z-business-revolution',
    title: 'The Gen-Z Business Revolution',
    date: 'August 2025',
    sortDate: '2025-08',
    coverImage: genZ,
    pdfUrl: '/pdfs/gen-z-business-revolution.pdf',
    description: 'How Generation Z is reshaping the business world with fresh ideas and digital-first approaches.',
  },
  {
    id: 'synergy-stories',
    title: 'Synergy Stories – Winning Brand Collaborations',
    date: 'July 2025',
    sortDate: '2025-07',
    coverImage: synergyStories,
    pdfUrl: '/pdfs/synergy-stories.pdf',
    description: 'Stories of successful brand collaborations and partnerships that created remarkable synergies.',
  },
  {
    id: 'business-at-box-office',
    title: 'Business At The Box Office',
    date: 'June 2025',
    sortDate: '2025-06',
    coverImage: boxOffice,
    pdfUrl: '/pdfs/business-at-box-office.pdf',
    description: 'The intersection of business and entertainment — exploring the economics behind the box office.',
  },
  {
    id: 'entrepreneurship-in-travel',
    title: 'Entrepreneurship In Travel',
    date: 'May 2025',
    sortDate: '2025-05',
    coverImage: travel,
    pdfUrl: '/pdfs/entrepreneurship-in-travel.pdf',
    description: 'How entrepreneurship is transforming the travel and tourism industry worldwide.',
  },
  {
    id: 'agriculture-sector',
    title: "Venturer's Voyage: Agriculture Sector",
    date: 'April 2025',
    sortDate: '2025-04',
    coverImage: agriculture,
    pdfUrl: '/pdfs/agriculture-sector.pdf',
    description: 'Exploring entrepreneurial opportunities and innovations in the agriculture sector.',
  },
  {
    id: 'success-ideas-to-income',
    title: 'Success from Ideas to Income',
    date: 'March 2025',
    sortDate: '2025-03',
    coverImage: ideasToIncome,
    pdfUrl: '/pdfs/success-ideas-to-income.pdf',
    description: 'The journey of turning innovative ideas into successful income-generating ventures.',
  },
  {
    id: 'business-model-and-business',
    title: 'Business Model and Business',
    date: 'February 2025',
    sortDate: '2025-02',
    coverImage: businessModel,
    pdfUrl: '/pdfs/business-model-and-business.pdf',
    description: 'Understanding different business models and how they drive sustainable growth.',
  },
  {
    id: 'passion-side-hustles',
    title: 'Passion Turns Side Hustles into Legacies',
    date: 'January 2025',
    sortDate: '2025-01',
    coverImage: passionHustles,
    pdfUrl: '/pdfs/passion-side-hustles.pdf',
    description: 'How passion-driven side projects have evolved into lasting business legacies.',
  },
  {
    id: 'nextgen-entrepreneurs',
    title: 'NextGen Entrepreneurs',
    date: 'January 2025',
    sortDate: '2025-01',
    coverImage: nextgen,
    pdfUrl: '/pdfs/nextgen-entrepreneurs.pdf',
    description: 'Spotlight on the next generation of entrepreneurs shaping the future of business.',
  },
  {
    id: 'entrepreneurship-niche-markets',
    title: 'Entrepreneurship In Niche Markets – Unveiling Hidden Opportunities',
    date: 'December 2024',
    sortDate: '2024-12',
    coverImage: nicheMarkets,
    pdfUrl: '/pdfs/entrepreneurship-niche-markets.pdf',
    description: 'Discovering hidden opportunities in niche markets for aspiring entrepreneurs.',
  },
  {
    id: 'tales-of-passion',
    title: 'Tales of Passion, Persistence and Purpose',
    date: 'November 2024',
    sortDate: '2024-11',
    coverImage: talesOfPassion,
    pdfUrl: '/pdfs/tales-of-passion.pdf',
    description: 'Inspiring stories of entrepreneurs driven by passion, persistence and a clear sense of purpose.',
  },
  {
    id: 'entrepreneurial-carnival',
    title: 'Entrepreneurial Carnival – Where Ideas Meet Opportunity',
    date: 'October 2024',
    sortDate: '2024-10',
    coverImage: carnival,
    pdfUrl: '/pdfs/entrepreneurial-carnival.pdf',
    description: 'A celebration of ideas meeting opportunity in the entrepreneurial ecosystem.',
  },
  {
    id: 'social-media-playbook',
    title: 'Social Media Playbook for Startups',
    date: 'September 2024',
    sortDate: '2024-09',
    coverImage: socialPlaybook,
    pdfUrl: '/pdfs/social-media-playbook.pdf',
    description: 'Essential social media strategies and playbooks for startup success.',
  },
  {
    id: 'budget-2024',
    title: 'Budget 2024: A New Dawn',
    date: 'August 2024',
    sortDate: '2024-08',
    coverImage: budget2024,
    pdfUrl: '/pdfs/budget-2024.pdf',
    description: 'Analysis of Budget 2024 and its impact on the entrepreneurial landscape.',
  },
  {
    id: 'unlocking-capital',
    title: "Venturer's Voyage: Unlocking Capital",
    date: 'July 2024',
    sortDate: '2024-07',
    coverImage: unlockingCapital,
    pdfUrl: '/pdfs/unlocking-capital.pdf',
    description: 'Strategies and insights for unlocking capital for your business ventures.',
  },
  {
    id: 'gig-economy',
    title: "Venturer's Voyage: GIG Economy",
    date: 'June 2024',
    sortDate: '2024-06',
    coverImage: gigEconomy,
    pdfUrl: '/pdfs/gig-economy.pdf',
    description: 'Exploring the rapidly growing gig economy and its implications for entrepreneurs.',
  },
  {
    id: 'behind-the-tank',
    title: "Venturer's Voyage: Behind The Tank",
    date: 'May 2024',
    sortDate: '2024-05',
    coverImage: behindTank,
    pdfUrl: '/pdfs/behind-the-tank.pdf',
    description: 'A behind-the-scenes look at the world of venture capital and startup pitching.',
  },
  {
    id: 'women-entrepreneurs',
    title: "Venturer's Voyage: Women Entrepreneurs",
    date: 'April 2024',
    sortDate: '2024-04',
    coverImage: womenEntrepreneurs,
    description: 'Celebrating women entrepreneurs and their contributions to the business world.',
  },
  {
    id: 'bio-revolution',
    title: "Venturer's Voyage: Bio Revolution",
    date: 'March 2024',
    sortDate: '2024-03',
    coverImage: bioRevolution,
    description: 'The bio revolution and its impact on business, health, and sustainability.',
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    date: 'February 2024',
    sortDate: '2024-02',
    coverImage: socialMarketing,
    description: 'Mastering social media marketing for business growth and brand building.',
  },
  {
    id: 'impact-of-covid',
    title: 'Impact of COVID-19 on Start-Ups',
    date: 'January 2024',
    sortDate: '2024-01',
    coverImage: covidImpact,
    description: 'Understanding the lasting impact of COVID-19 on the startup ecosystem.',
  },
  {
    id: 'new-age-entrepreneurship',
    title: 'New Age Entrepreneurship',
    date: 'December 2023',
    sortDate: '2023-12',
    coverImage: newAge,
    pdfUrl: '/pdfs/new-age-entrepreneurship.pdf',
    description: 'Exploring the new age of entrepreneurship driven by technology and innovation.',
  },
  {
    id: 'power-money-politics',
    title: 'Power, Money, Politics',
    date: 'November 2023',
    sortDate: '2023-11',
    coverImage: powerMoney,
    pdfUrl: '/pdfs/power-money-politics.pdf',
    description: 'The intricate relationship between power, money, and politics in business.',
  },
  {
    id: 'startup-valuation',
    title: 'Start-Up Valuation: A Way To...',
    date: 'October 2023',
    sortDate: '2023-10',
    coverImage: startupValuation,
    pdfUrl: '/pdfs/startup-valuation.pdf',
    description: 'Understanding startup valuation methodologies and what drives company worth.',
  },
  {
    id: 'smart-city-innovation',
    title: 'Smart City Innovation',
    date: 'September 2023',
    sortDate: '2023-09',
    coverImage: smartCity,
    description: 'How smart city innovations are creating new entrepreneurial opportunities.',
  },
  {
    id: 'blue-ocean-strategies',
    title: 'Blue Ocean Strategies',
    date: 'August 2023',
    sortDate: '2023-08',
    coverImage: blueOcean,
    description: 'Applying blue ocean strategies to create uncontested market spaces.',
  },
  {
    id: 'evaluating-business',
    title: 'Evaluating Business Opportunities',
    date: 'July 2023',
    sortDate: '2023-07',
    coverImage: evaluatingBusiness,
    description: 'Frameworks and methods for evaluating business opportunities effectively.',
  },
  {
    id: 'metaverse-boundless',
    title: 'Metaverse: The Boundless Frontier',
    date: 'June 2023',
    sortDate: '2023-06',
    coverImage: metaverse,
    description: 'Exploring the boundless possibilities of the metaverse for entrepreneurs.',
  },
];
