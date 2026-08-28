import React from 'react';
import { motion } from 'motion/react';
import { 
  BRAND_CONFIG, 
  EDITORIAL_PIECES, 
  JewelleryPiece 
} from '../data/brandConfig';
import { ReiStellaLogo } from '../components/ReiStellaLogo';
import { 
  ArrowUpRight, 
  Sparkles, 
  ChevronDown, 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageCircle, 
  Share2,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onSelectPiece?: (piece: JewelleryPiece) => void;
}

// Partner Cities Data with direct WhatsApp Business links
const CITY_PARTNERS = [
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

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectPiece }) => {
  const signaturePiece = EDITORIAL_PIECES[0];

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] relative">
      
      {/* ========================================================================= */}
      {/* 1. FLOATING LEFT SOCIAL DOCK (Steady & Fixed on scroll) */}
      {/* ========================================================================= */}
      <aside aria-label="Social Media Links" className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-5 bg-[#020F16]/80 backdrop-blur-md border border-[#D4AF37]/20 p-3 shadow-2xl">
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] [writing-mode:vertical-lr] rotate-180 py-2">
          Connect
        </span>
        <div className="w-4 h-[1px] bg-[#D4AF37]/30" />
        
        {/* Instagram */}
        <a 
          href={BRAND_CONFIG.urls.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
          title="Instagram"
        >
          <Instagram className="w-4 h-4 stroke-[1.5]" />
        </a>

        {/* Facebook */}
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
          title="Facebook"
        >
          <Facebook className="w-4 h-4 stroke-[1.5]" />
        </a>

        {/* Pinterest */}
        <a 
          href="https://pinterest.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
          title="Pinterest"
        >
          <Share2 className="w-4 h-4 stroke-[1.5]" />
        </a>

        {/* YouTube */}
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
          title="YouTube"
        >
          <Youtube className="w-4 h-4 stroke-[1.5]" />
        </a>

        {/* Threads */}
        <a 
          href="https://threads.net" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
          title="Threads"
        >
          <span className="text-xs font-bold">@</span>
        </a>
      </aside>

      {/* ========================================================================= */}
      {/* 2. CINEMATIC CAMPAIGN HERO                                                */}
      {/* ========================================================================= */}
      <section
        id="hero-campaign-section"
        className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#020F16]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={BRAND_CONFIG.images.heroReference}
            alt="ReiStella Jewellery Campaign - The Sovereign Reign"
            className="w-full h-full object-cover object-[center_35%] scale-105 transition-transform duration-[3s] ease-out hover:scale-100"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031820] via-[#031820]/35 to-[#020F16]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020F16]/75 via-transparent to-[#031820]/95" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-16 flex flex-col items-center justify-center min-h-[85vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mb-8"
          >
            <ReiStellaLogo size="hero" alt="ReiStella Jewellery" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="font-serif-luxury text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-100 tracking-[0.16em] italic font-light max-w-3xl"
          >
            {BRAND_CONFIG.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-4 text-[11px] sm:text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-light"
          >
            {BRAND_CONFIG.subTagline}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              id="hero-discover-reistella-cta"
              onClick={() => onNavigate('about')}
              className="group relative inline-flex items-center space-x-3 text-xs tracking-[0.32em] uppercase text-white hover:text-[#D4AF37] transition-all duration-300 py-3.5 px-8 border border-white/25 hover:border-[#D4AF37] bg-[#031820]/40 backdrop-blur-sm"
            >
              <span>DISCOVER REISTELLA</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button
              onClick={() => onNavigate('partners')}
              className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-neutral-300 hover:text-white transition-colors py-3.5 px-6"
            >
              <span>FIND YOUR PARTNER CITY</span>
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1.5 opacity-75 hover:opacity-100 transition-opacity">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-light">Scroll To Discover</span>
          <button
            onClick={() => onNavigate('about')}
            className="text-neutral-400 hover:text-[#D4AF37] focus:outline-none transition-colors p-1"
            aria-label="Scroll to Maison Story"
          >
            <ChevronDown className="w-5 h-5 animate-bounce stroke-[1.5]" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOME STATEMENT & SIGNATURE CAMPAIGN SPOTLIGHT                          */}
      {/* ========================================================================= */}
      <section
        id="home-introduction-section"
        className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#062B3A] relative border-b border-[#031820]"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="flex items-center justify-center space-x-4">
            <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
            <span className="text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
              {BRAND_CONFIG.subTagline}
            </span>
            <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide leading-tight sm:leading-snug">
            Jewellery is not mere ornamentation—it is the luminous embodiment of your sovereign individuality and modern grace.
          </h2>

          <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed max-w-2xl mx-auto tracking-wider">
            ReiStella celebrates the interplay of architectural purity and mesmerizing brilliance. Each creation is curated to elevate personal confidence, framing timeless beauty for those who command their own destiny.
          </p>

          {signaturePiece && (
            <div className="pt-6 max-w-4xl mx-auto">
              <div
                onClick={() => onSelectPiece && onSelectPiece(signaturePiece)}
                className="bg-[#020F16] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-6 sm:p-8 transition-all duration-500 text-left grid grid-cols-1 md:grid-cols-12 gap-6 items-center cursor-pointer group shadow-2xl"
              >
                <div className="md:col-span-5 relative aspect-[4/3] bg-[#031820] overflow-hidden">
                  <img
                    src={signaturePiece.imageUrl}
                    alt={signaturePiece.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#031820]/90 border border-[#D4AF37]/50 px-2.5 py-1 text-[9px] tracking-widest text-[#D4AF37] uppercase">
                    Signature Centerpiece
                  </div>
                </div>
                <div className="md:col-span-7 space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                    CAMPAIGN HIGHLIGHT
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                    {signaturePiece.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {signaturePiece.description}
                  </p>
                  <div className="pt-2 flex items-center space-x-2 text-xs tracking-[0.2em] text-[#D4AF37] uppercase group-hover:text-white transition-colors">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>View Piece Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CITY PARTNERS SECTION (Direct WhatsApp Catalog Routing)               */}
      {/* ========================================================================= */}
      <section 
        id="home-city-partners"
        className="py-24 px-6 sm:px-8 lg:px-12 bg-[#020F16] border-b border-[#062B3A]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              Local Concierge Network
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light tracking-wide">
              Find Your ReiStella City Partner
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm tracking-wider max-w-xl mx-auto font-light">
              Select your city below to connect directly with our authorized partner via WhatsApp and explore their local business catalog.
            </p>
          </div>

          {/* City Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CITY_PARTNERS.map((partner) => (
              <a
                key={partner.id}
                href={partner.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#031820] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-4 transition-all duration-500 flex flex-col justify-between shadow-2xl overflow-hidden cursor-pointer"
              >
                {/* City Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-5 bg-[#020F16]">
                  <img
                    src={partner.image}
                    alt={partner.cityName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031820] via-transparent to-transparent opacity-80" />
                  
                  {/* City Badge */}
                  <div className="absolute top-3 left-3 bg-[#031820]/90 backdrop-blur-sm border border-[#D4AF37]/40 px-3 py-1 text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase flex items-center space-x-1.5">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{partner.cityName}</span>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="space-y-2 mb-6 px-2">
                  <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-light">
                    {partner.partnerName}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-light group-hover:text-[#D4AF37] transition-colors">
                    {partner.cityName} Boutique
                  </h3>
                  <p className="text-xs text-neutral-300 font-light tracking-wide">
                    {partner.tagline}
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <div className="px-2 pt-4 border-t border-[#062B3A] flex items-center justify-between text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-medium">
                  <span className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Open WhatsApp Catalog</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};