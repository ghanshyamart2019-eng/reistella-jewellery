import React from 'react';
import { motion } from 'motion/react';
import { 
  BRAND_CONFIG, 
  JewelleryPiece 
} from '../data/brandConfig';
import { ReiStellaLogo } from '../components/ReiStellaLogo';
import { ReiStellaMovieSection } from '../components/ReiStellaMovieSection';
import { 
  ArrowUpRight, 
  Sparkles,
  ChevronDown, 
  Play,
  Compass,
  Crown,
  Layers
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onSelectPiece?: (piece: JewelleryPiece) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToMovie = () => {
    const element = document.getElementById('reistella-movie-section');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      onNavigate('trending');
    }
  };

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] relative">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC CAMPAIGN HERO                                                */}
      {/* ========================================================================= */}
      <section
        id="hero-campaign-section"
        className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-[#020F16]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={BRAND_CONFIG.images.heroReference}
            alt="ReiStella Jewellery Campaign - The Sovereign Reign"
            className="w-full h-full object-cover object-[70%_35%] sm:object-[75%_35%] md:object-[80%_35%] scale-105 transition-transform duration-[3s] ease-out hover:scale-100"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Subtle directional gradient to make left text ultra legible while keeping background jewellery unobstructed */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020F16]/90 via-[#020F16]/60 md:via-[#020F16]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031820] via-transparent to-[#020F16]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-24 pb-16 flex flex-col items-start justify-center min-h-[85vh] w-full">
          <div className="max-w-xl lg:max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mb-6 sm:mb-8 text-left"
            >
              <ReiStellaLogo size="hero" alt="ReiStella Jewellery" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-100 tracking-[0.16em] font-light uppercase leading-tight"
            >
              {BRAND_CONFIG.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="text-xs sm:text-sm md:text-base text-neutral-300 font-light tracking-[0.22em] sm:tracking-[0.25em] uppercase mt-4 max-w-lg leading-relaxed"
            >
              Born of a vision. Created for those who dare to shine.
            </motion.p>

            {/* Dual CTAs: DISCOVER REISTELLA & WATCH THE STORY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4"
            >
              <button
                id="hero-discover-reistella-cta"
                onClick={() => onNavigate('about')}
                className="group relative inline-flex items-center justify-center space-x-3 text-xs tracking-[0.32em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] transition-all duration-300 py-3.5 px-8 font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                <span>DISCOVER REISTELLA</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#031820] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                id="hero-watch-movie-cta"
                onClick={scrollToMovie}
                className="group relative inline-flex items-center justify-center space-x-3 text-xs tracking-[0.32em] uppercase text-white hover:text-[#D4AF37] transition-all duration-300 py-3.5 px-8 border border-white/30 hover:border-[#D4AF37] bg-[#031820]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <Play className="w-3 h-3 fill-current text-[#D4AF37]" />
                <span>WATCH THE MOVIE</span>
              </button>
            </motion.div>
          </div>
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
      {/* 2. BRAND INTRODUCTION & BORN OF REISTELLA                                 */}
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
            ReiStella is more than jewellery. It is an expression of identity, emotion and brilliance.
          </h2>

          <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto tracking-wider">
            ReiStella celebrates the interplay of architectural purity and mesmerizing brilliance. Each creation is curated to elevate personal confidence, framing timeless beauty for those who command their own destiny.
          </p>

          <div className="pt-4 max-w-2xl mx-auto border-t border-[#D4AF37]/20">
            <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light block mb-2">
              BORN OF REISTELLA
            </span>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed italic">
              "Every brilliance has a beginning. ReiStella was born from a vision to transform jewellery from ornament into an expression of identity, emotion and dreams."
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE REISTELLA MOVIE (CINEMATIC BRAND FILM)                             */}
      {/* ========================================================================= */}
      <ReiStellaMovieSection onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* 4. WHY REISTELLA (Pillars of Maison Philosophy)                           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#020F16] border-b border-[#062B3A]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              MAISON PILLARS
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light tracking-wide">
              Why ReiStella
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm tracking-wider max-w-xl mx-auto font-light">
              A synthesis of sovereign design, sculptural harmony, and personal expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#031820] border border-[#062B3A] p-7 space-y-4">
              <div className="p-3 bg-[#020F16] border border-[#062B3A] text-[#D4AF37] w-fit">
                <Crown className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl text-white font-light">Sovereign Brilliance</h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Jewellery engineered to command attention with poise, framing your sovereign presence effortlessly.
              </p>
            </div>

            <div className="bg-[#031820] border border-[#062B3A] p-7 space-y-4">
              <div className="p-3 bg-[#020F16] border border-[#062B3A] text-[#D4AF37] w-fit">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl text-white font-light">Sculptural Balance</h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Precision articulation and ergonomic weight balance allow our pieces to move naturally with every gesture.
              </p>
            </div>

            <div className="bg-[#031820] border border-[#062B3A] p-7 space-y-4">
              <div className="p-3 bg-[#020F16] border border-[#062B3A] text-[#D4AF37] w-fit">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl text-white font-light">Personal Expression</h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Created for individuals who dare to shine on their own terms, turning every occasion into a milestone.
              </p>
            </div>

            <div className="bg-[#031820] border border-[#062B3A] p-7 space-y-4">
              <div className="p-3 bg-[#020F16] border border-[#062B3A] text-[#D4AF37] w-fit">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl text-white font-light">A Story Beyond</h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                More than adornment, each piece is a Chapter in an evolving dialogue of beauty, art, and modern luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FINAL CINEMATIC STATEMENT                                              */}
      {/* ========================================================================= */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 text-center bg-[#020F16] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={BRAND_CONFIG.images.heroReference}
            alt="ReiStella Finale"
            className="w-full h-full object-cover object-center scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-[#020F16]/90 to-[#020F16]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#031820] border border-[#D4AF37]/40 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              THE STORY CONTINUES
            </span>
          </div>

          <h3 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-wider leading-tight">
            LET YOUR BRILLIANCE REIGN.
          </h3>

          <p className="text-neutral-300 text-xs sm:text-sm tracking-[0.2em] uppercase font-light max-w-xl mx-auto leading-relaxed">
            Experience the full collection or connect with our private concierge for bespoke styling and viewing.
          </p>

          <div className="pt-6 flex items-center justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] px-9 py-4 font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <span>CONNECT WITH CONCIERGE</span>
              <ArrowUpRight className="w-4 h-4 text-[#031820]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
