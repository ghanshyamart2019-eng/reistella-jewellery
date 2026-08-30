/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  mood: string;
}

export interface CityPartner {
  id: string;
  cityName: string;
  partnerName: string;
  image: string;
  whatsappUrl: string;
  tagline: string;
}

export interface PartnerCity {
  city: string;
  displayName: string;
  region: string;
  description: string;
}

export const BRAND_CONFIG = {
  name: 'REISTELLA',
  fullName: 'REISTELLA JEWELLERY',
  tagline: 'LET YOUR BRILLIANCE REIGN',
  subTagline: 'THE STORY CONTINUES',
  positioning: 'PREMIUM FASHION JEWELLERY',
  
  // URLs & Official Social Connections
  urls: {
    instagram: 'https://www.instagram.com/reistella_official/',
    facebook: 'https://facebook.com/reistellajewellery',
    pinterest: 'https://pinterest.com/reistellajewellery',
    youtube: 'https://youtube.com/@reistella',
    threads: 'https://threads.net/@reistella_official',
    linkedin: 'https://linkedin.com/company/reistella',
    x: 'https://x.com/reistella',
    whatsapp: 'https://wa.me/?text=Hello%20ReiStella%20Concierge%2C%20I%20would%20like%20to%20connect%20with%20the%20maison%20and%20discover%20the%20collection.',
    contactEmail: 'concierge@reistella.com',
  },

  // Campaign & High-Editorial Imagery
  images: {
    // Official ReiStella Hero campaign piece provided by user (/public/3.jpg)
    heroReference: '/3.jpg',
    
    // High-fashion jewellery editorial imagery (cinematic dark atmosphere, crisp luxury lighting)
    editorial1: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1600&auto=format&fit=crop', // Luxury necklace on deep navy background
    editorial2: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop', // Fine jewellery earrings
    editorial3: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop', // High brilliance solitaire ring
    editorial4: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop', // Editorial jewellery model portrait
    editorial5: 'https://images.unsplash.com/photo-1611591475152-4735d387e917?q=80&w=1600&auto=format&fit=crop', // Luxury gold bracelet
    editorial6: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1600&auto=format&fit=crop', // Deep emerald and diamond setting
    editorial7: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600&auto=format&fit=crop', // High jewellery campaign shot
    editorial8: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1600&auto=format&fit=crop', // Atelier mood
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
    id: 'sovereign-solar-royal-necklace',
    title: 'The Sovereign Solar Royal Necklace',
    collection: 'Signature Pieces',
    subtitle: 'High-Jewellery Centerpiece & Motion Campaign Film',
    description: 'An architectural composition of canary yellow sapphires and pavé diamonds, featuring multi-tiered chandelier pendeloques and floral clusters.',
    imageUrl: BRAND_CONFIG.images.heroReference,
    aspectRatio: '16/9',
    tags: ['Hero Campaign', 'Signature', 'Royal Suite'],
    featured: true,
    editorialNote: 'Official ReiStella campaign centerpiece showcased in motion.'
  },
  {
    id: 'solaris-bloom-ring',
    title: 'Solaris Bloom Cocktail Ring',
    collection: 'Statement Jewellery',
    subtitle: 'Canary Yellow Sapphire & Diamond Halo Petals',
    description: 'A radiant floral blossom ring crowned with an intense canary yellow sapphire surrounded by eight diamond petals on a pavé-set band.',
    imageUrl: BRAND_CONFIG.images.editorial3,
    aspectRatio: '1/1',
    tags: ['Statement', 'Royal Suite'],
    editorialNote: 'Signature crown basket mount ensuring maximum fire and light refraction.'
  },
  {
    id: 'etoile-nocturne-earrings',
    title: 'Étoile Chandelier Drop Earrings',
    collection: 'Festive & Occasion',
    subtitle: 'Articulated Yellow Sapphire & Diamond Drops',
    description: 'Dual-tiered architectural chandelier earrings engineered with featherweight poise, mirroring the grand floral motifs of the centerpiece collar.',
    imageUrl: BRAND_CONFIG.images.editorial2,
    aspectRatio: '4/5',
    tags: ['Occasion', 'Royal Suite'],
    editorialNote: 'Sculpted for kinetic brilliance and 360-degree luminescence.'
  },
  {
    id: 'celestial-cuff',
    title: 'Aura Pavé Armature',
    collection: 'Everyday Luxury',
    subtitle: 'Ergonomic Gold & Seamless Pavé',
    description: 'A seamless ribbon of light contouring the wrist with refined discipline and understated power.',
    imageUrl: BRAND_CONFIG.images.editorial5,
    aspectRatio: '4/5',
    tags: ['Everyday Luxury', 'Signature'],
    editorialNote: 'Precision closure with seamless contouring.'
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
    editorialNote: 'Timeless chromatic depth and radiant halo.'
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
    mood: 'Sovereign • Regal • Unapologetic'
  },
  {
    id: 'everyday-luxury',
    title: 'Everyday Luxury',
    tagline: 'ELEVATED ESSENTIALS OF SUBLIME REFINEMENT',
    description: 'Pure lines and effortless brilliance that accompany your daily triumphs with subtle grandeur.',
    heroImage: BRAND_CONFIG.images.editorial5,
    secondaryImage: BRAND_CONFIG.images.editorial4,
    mood: 'Effortless • Tactile • Modern'
  },
  {
    id: 'festive-occasion',
    title: 'Festive & Occasion',
    tagline: 'CELEBRATING LIFE’S LUMINOUS MILESTONES',
    description: 'Dynamic light-play and dramatic proportions crafted to capture the enchantment of unforgettable evenings.',
    heroImage: BRAND_CONFIG.images.editorial2,
    secondaryImage: BRAND_CONFIG.images.editorial6,
    mood: 'Hypnotic • Dramatic • Celebratory'
  },
  {
    id: 'bridal-inspired',
    title: 'Bridal-Inspired',
    tagline: 'A SACRED SYMPHONY OF PURITY AND FIRE',
    description: 'Luminescent creations honoring devotion and personal elegance for the most profound celebrations of love.',
    heroImage: BRAND_CONFIG.images.editorial3,
    secondaryImage: BRAND_CONFIG.images.editorial9,
    mood: 'Poetic • Timeless • Reverent'
  },
  {
    id: 'signature-pieces',
    title: 'Signature Pieces',
    tagline: 'THE ICONIC ESSENCE OF REISTELLA',
    description: 'The crowning triumphs that define our visual vocabulary. Where modern poise meets eternal brilliance.',
    heroImage: BRAND_CONFIG.images.editorial1,
    secondaryImage: BRAND_CONFIG.images.editorial8,
    mood: 'Maison Icons • Architectural • Pure'
  }
];

// Official brand-supplied partner cities ONLY
export const PARTNER_CITIES: PartnerCity[] = [
  {
    city: 'Ahmedabad',
    displayName: 'Ahmedabad',
    region: 'Gujarat, India',
    description: 'Connect with a ReiStella partner in Ahmedabad for private collection discovery and consultation.'
  },
  {
    city: 'Vadodara',
    displayName: 'Vadodara / Baroda',
    region: 'Gujarat, India',
    description: 'Connect with a ReiStella partner in Vadodara for curated showcase viewings and advisory.'
  },
  {
    city: 'Rajkot',
    displayName: 'Rajkot',
    region: 'Gujarat, India',
    description: 'Connect with a ReiStella partner in Rajkot for styling guidance and campaign pieces.'
  }
];

// Partner Cities Data with direct WhatsApp Business catalog links
export const CITY_PARTNERS: CityPartner[] = [
  {
    id: 'ahmedabad',
    cityName: 'Ahmedabad',
    partnerName: 'ReiStella Flagship Partner',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1c0c22425?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://wa.me/910000000000?text=Hi%20ReiStella%20Ahmedabad,%20I%20saw%20your%20designs%20on%20the%20website%20and%20want%20to%20explore%20the%20catalog.',
    tagline: 'Exclusive Flagship Showroom'
  },
  {
    id: 'mumbai',
    cityName: 'Mumbai',
    partnerName: 'ReiStella Studio Partner',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://wa.me/910000000000?text=Hi%20ReiStella%20Mumbai,%20I%20want%20to%20view%20your%20WhatsApp%20catalog.',
    tagline: 'Boutique Collection Partner'
  },
  {
    id: 'surat',
    cityName: 'Surat',
    partnerName: 'ReiStella Gallery Partner',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://wa.me/910000000000?text=Hi%20ReiStella%20Surat,%20I%20would%20like%20to%20buy%20from%20your%20catalog.',
    tagline: 'Diamond District Partner'
  }
];

