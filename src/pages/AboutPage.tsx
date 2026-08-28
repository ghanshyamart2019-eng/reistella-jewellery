import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { ReiStellaLogo } from '../components/ReiStellaLogo';
import { Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] py-20 sm:py-32 border-t border-[#062B3A]">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 max-w-5xl mx-auto text-center space-y-4">
        <div className="flex justify-center mb-2">
          <ReiStellaLogo size="md" alt="ReiStella Emblem" />
        </div>
        <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
          THE MAISON PHILOSOPHY
        </span>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-white font-light tracking-wide">
          About ReiStella
        </h2>
        <p className="font-serif-luxury text-lg sm:text-2xl text-neutral-200 italic tracking-wider max-w-xl mx-auto font-light">
          "{BRAND_CONFIG.tagline}"
        </p>
      </section>

      {/* Main Narrative Spread */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] bg-[#020F16] border border-[#062B3A] overflow-hidden relative group">
              <img
                src={BRAND_CONFIG.images.editorial4}
                alt="ReiStella Brand Essence"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Subtle Overlay Box */}
            <div className="absolute -bottom-6 -left-6 bg-[#031820] border border-[#D4AF37]/40 p-6 max-w-xs shadow-2xl hidden sm:block">
              <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light block mb-1">
                POSITIONING
              </span>
              <p className="font-serif-luxury text-lg text-white font-light">
                {BRAND_CONFIG.positioning}
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
                A MANIFESTO OF LIGHT
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light leading-snug">
                Where Architectural Precision Meets Luminous Poise
              </h3>
            </div>

            <div className="h-[1px] w-14 bg-[#D4AF37]/50" />

            <div className="space-y-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                ReiStella was conceived around a singular, enduring philosophy: that fine jewellery should serve as an intimate crown of self-expression, elevating the natural magnetism and poise of those who wear it.
              </p>
              <p>
                Rooted in the timeless romance of celestial light and executed with sculptural modern discipline, every ReiStella creation balances commanding presence with effortless grace.
              </p>
              <p>
                From celebratory milestones to everyday expressions of self-mastery, our collections invite you to step into the fullness of your personal power.
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <span className="h-[1px] w-8 bg-[#D4AF37]/40" />
              <span className="text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                {BRAND_CONFIG.subTagline}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars Spread */}
      <section className="bg-[#020F16] py-20 sm:py-24 border-y border-[#062B3A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
              MAISON CODE
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              The Tenets of ReiStella
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 bg-[#031820] border border-[#062B3A] space-y-4 hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center justify-between text-[#D4AF37]">
                <Sparkles className="w-5 h-5 stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase">01</span>
              </div>
              <h4 className="font-serif-luxury text-2xl text-white font-light">
                Sovereign Brilliance
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Light is our primary medium. Every facet, proportion, and curve is calculated to capture and refract ambient illumination with hypnotic purity.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 bg-[#031820] border border-[#062B3A] space-y-4 hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center justify-between text-[#D4AF37]">
                <Sparkles className="w-5 h-5 stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase">02</span>
              </div>
              <h4 className="font-serif-luxury text-2xl text-white font-light">
                Sculptural Balance
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                We believe in silhouettes that command attention through proportional harmony rather than ostentation—modern, bold, and refined.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 bg-[#031820] border border-[#062B3A] space-y-4 hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center justify-between text-[#D4AF37]">
                <Sparkles className="w-5 h-5 stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase">03</span>
              </div>
              <h4 className="font-serif-luxury text-2xl text-white font-light">
                Personal Empowerment
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Jewellery is an intimate armor. It reflects the resilience, dreams, and quiet nobility of the contemporary woman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Mood Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-24">
        <div className="relative aspect-[21/9] bg-[#020F16] border border-[#062B3A] overflow-hidden flex items-center justify-center text-center p-8">
          <img
            src={BRAND_CONFIG.images.editorial8}
            alt="ReiStella Atelier Details"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.4]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
              CURATED WITH DEVOTION
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light">
              Let Your Brilliance Reign
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 font-light max-w-lg mx-auto">
              Connect with our private jewellery advisors to discover your signature pieces.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href={BRAND_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] px-8 py-3.5 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Concierge</span>
              </a>
              <button
                onClick={() => onNavigate('trending')}
                className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-white border border-white/30 hover:border-[#D4AF37] px-6 py-3.5 transition-colors"
              >
                <span>Explore Trending</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
