export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface JewelleryPiece {
  id: string;
  title: string;
  collection: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  aspectRatio?: string;
  tags?: string[];
  featured?: boolean;
  editorialNote?: string;
}

export interface CollectionCampaign {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  secondaryImage?: string;
  piecesCount: string;
  mood: string;
}

export interface PartnerLocation {
  city: string;
  country: string;
  district: string;
  status: 'Flagship Partner' | 'Authorized Stockist' | 'Private Salon';
  contactType: string;
}

export const BRAND_CONFIG = {
  name: 'REISTELLA',
  fullName: 'REISTELLA JEWELLERY',
  tagline: 'LET YOUR BRILLIANCE REIGN',
  subTagline: 'THE STORY CONTINUES',
  positioning: 'PREMIUM FASHION JEWELLERY',
  
  // URLs & Socials
  urls: {
    instagram: 'https://www.instagram.com/reistella_official/',
    facebook: 'https://facebook.com/reistellajewellery', // Placeholder configurable
    whatsapp: 'https://wa.me/?text=Hello%20ReiStella%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20discovering%20the%20collection.',
    contactEmail: 'concierge@reistella.com',
    logoUrl: null, // [LOGO_URL_WILL_BE_ADDED]
  },

  // Primary Campaign Images
  images: {
    // Official ReiStella Hero campaign piece provided by user
    heroReference: 'https://reistella.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-25-2026-10_36_30-PM-1024x576.png',
    
    // Supporting high-editorial jewellery photography (luxury dark atmosphere, cinematic lighting)
    editorial1: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1600&auto=format&fit=crop', // Luxury necklace on dark background
    editorial2: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop', // Fine jewellery earrings
    editorial3: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop', // High brilliance diamond ring
    editorial4: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop', // Editorial jewellery model portrait
    editorial5: 'https://images.unsplash.com/photo-1611591475152-4735d387e917?q=80&w=1600&auto=format&fit=crop', // Luxury gold bracelet
    editorial6: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1600&auto=format&fit=crop', // Dark emerald and diamond setting
    editorial7: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600&auto=format&fit=crop', // High jewellery editorial
    editorial8: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1600&auto=format&fit=crop', // Atelier craftsmanship mood
    editorial9: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1600&auto=format&fit=crop', // Fine necklace closeup
    editorial10: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1600&auto=format&fit=crop', // Editorial portrait in dark tone
  }
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Reistella', href: '#about' },
  { id: 'trending', label: 'New & Trending', href: '#trending' },
  { id: 'collections', label: 'Collections', href: '#collections' },
  { id: 'find', label: 'Find Your Reistella', href: '#find' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const EDITORIAL_PIECES: JewelleryPiece[] = [
  {
    id: 'sovereign-reign-necklace',
    title: 'The Sovereign Reign Necklace',
    collection: 'Signature Pieces',
    subtitle: 'High-Jewellery Luminary Collar',
    description: 'An architectural composition of light and geometry designed to crown the neckline with sovereign radiance.',
    imageUrl: BRAND_CONFIG.images.heroReference,
    aspectRatio: '16/9',
    tags: ['Hero Campaign', 'Signature', 'Evening'],
    featured: true,
    editorialNote: 'As featured in the 2026 Reign Campaign.'
  },
  {
    id: 'etoile-nocturne-earrings',
    title: 'Étoile Nocturne Drops',
    collection: 'Festive & Occasion',
    subtitle: 'Cascading Radiance In Motion',
    description: 'Fluid movement captured in faceted brilliance, evoking starlight against the midnight sky.',
    imageUrl: BRAND_CONFIG.images.editorial2,
    aspectRatio: '4/5',
    tags: ['Evening', 'Occasion'],
    editorialNote: 'Sculpted for effortless kinetic brilliance.'
  },
  {
    id: 'solaris-crown-ring',
    title: 'Solaris Crown Solitaire',
    collection: 'Statement Jewellery',
    subtitle: 'Sculpted Silhouette & Luminary Fire',
    description: 'A contemporary emblem of personal authority and modern luxury, set in commanding proportions.',
    imageUrl: BRAND_CONFIG.images.editorial3,
    aspectRatio: '1/1',
    tags: ['Statement', 'Bridal-Inspired'],
    editorialNote: 'Maximum light refraction with architectural claw mounts.'
  },
  {
    id: 'celestial-cuff',
    title: 'Aura Pavé Armature',
    collection: 'Everyday Luxury',
    subtitle: 'Ergonomic Gold & Endless Micro-Pavé',
    description: 'Designed to be lived in. A seamless ribbon of light contouring the wrist with refined discipline.',
    imageUrl: BRAND_CONFIG.images.editorial5,
    aspectRatio: '4/5',
    tags: ['Everyday Luxury', 'Signature'],
    editorialNote: 'Precision hinged clasp with seamless closure.'
  },
  {
    id: 'velvet-emerald-pendant',
    title: 'Verdant Empress Pendant',
    collection: 'Festive & Occasion',
    subtitle: 'Deep Tonal Contrast & Diamond Halo',
    description: 'Rich chromatic intensity framed by precision-cut brilliance, celebrating timeless feminine composure.',
    imageUrl: BRAND_CONFIG.images.editorial6,
    aspectRatio: '4/5',
    tags: ['Festive', 'Occasion'],
    editorialNote: 'Inspired by royal jewel archives reimagined for the modern era.'
  },
  {
    id: 'astra-choker',
    title: 'Astra Luminary Choker',
    collection: 'Signature Pieces',
    subtitle: 'Linear Brilliance & Fluid Drape',
    description: 'Delicate articulation creates a shimmering contour that mirrors every graceful movement.',
    imageUrl: BRAND_CONFIG.images.editorial9,
    aspectRatio: '16/9',
    tags: ['Signature', 'Statement'],
    editorialNote: 'Artisan hand-assembled links with velvet-soft articulation.'
  }
];

export const CAMPAIGN_COLLECTIONS: CollectionCampaign[] = [
  {
    id: 'statement-jewellery',
    title: 'Statement Jewellery',
    tagline: 'COMMANDING GRACE & RADIANT PRESENCE',
    description: 'Bespoke silhouettes conceived to turn any room into an intimate stage. Sculptural, luminous, unforgettable.',
    heroImage: BRAND_CONFIG.images.heroReference,
    secondaryImage: BRAND_CONFIG.images.editorial7,
    piecesCount: '12 Masterpieces',
    mood: 'Sovereign • Regal • Unapologetic'
  },
  {
    id: 'everyday-luxury',
    title: 'Everyday Luxury',
    tagline: 'ELEVATED ESSENTIALS OF SUBLIME REFINEMENT',
    description: 'Pure lines and effortless brilliance that accompany your daily triumphs with subtle grandeur.',
    heroImage: BRAND_CONFIG.images.editorial5,
    secondaryImage: BRAND_CONFIG.images.editorial4,
    piecesCount: '16 Editions',
    mood: 'Effortless • Tactile • Modern'
  },
  {
    id: 'festive-occasion',
    title: 'Festive & Occasion',
    tagline: 'CELEBRATING LIFE’S LUMINOUS MILESTONES',
    description: 'Dynamic light-play and dramatic proportions crafted to capture the enchantment of unforgettable evenings.',
    heroImage: BRAND_CONFIG.images.editorial2,
    secondaryImage: BRAND_CONFIG.images.editorial6,
    piecesCount: '14 Editions',
    mood: 'Hypnotic • Dramatic • Celebratory'
  },
  {
    id: 'bridal-inspired',
    title: 'Bridal-Inspired',
    tagline: 'A SACRED SYMPHONY OF PURITY AND FIRE',
    description: 'Luminescent creations honoring devotion and personal elegance for the most profound celebrations of love.',
    heroImage: BRAND_CONFIG.images.editorial3,
    secondaryImage: BRAND_CONFIG.images.editorial9,
    piecesCount: '10 Editions',
    mood: 'Poetic • Timeless • Reverent'
  },
  {
    id: 'signature-pieces',
    title: 'Signature Pieces',
    tagline: 'THE ICONIC ESSENCE OF REISTELLA',
    description: 'The crowning triumphs that define our visual vocabulary. Where modern poise meets eternal brilliance.',
    heroImage: BRAND_CONFIG.images.editorial1,
    secondaryImage: BRAND_CONFIG.images.editorial8,
    piecesCount: '8 Editions',
    mood: 'Maison Icons • Architectural • Pure'
  }
];

export const PARTNER_LOCATIONS: PartnerLocation[] = [
  {
    city: 'London',
    country: 'United Kingdom',
    district: 'Mayfair & Bond Street District',
    status: 'Private Salon',
    contactType: 'By VIP Concierge Appointment'
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    district: 'Downtown & DIFC Luxury Arcades',
    status: 'Flagship Partner',
    contactType: 'Partner Boutique Showroom'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    district: 'Orchard & Marina Bay Concierge',
    status: 'Authorized Stockist',
    contactType: 'Curated Luxury Partner'
  },
  {
    city: 'Mumbai',
    country: 'India',
    district: 'Colaba & Bandra Luxury Quarter',
    status: 'Flagship Partner',
    contactType: 'Official Partner Showcase'
  },
  {
    city: 'New York',
    country: 'United States',
    district: 'Madison Avenue & Upper East Side',
    status: 'Private Salon',
    contactType: 'VIP Trunk Show & Private Advisory'
  }
];
