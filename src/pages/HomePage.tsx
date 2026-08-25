import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BRAND_CONFIG,
  EDITORIAL_PIECES,
  CAMPAIGN_COLLECTIONS,
  JewelleryPiece
} from '../data/brandConfig';
import { EditorialModal } from '../components/EditorialModal';
import {
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Facebook,
  Compass,
  Sparkles,
  ChevronDown
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedPiece, setSelectedPiece] = useState<JewelleryPiece | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION                                                */}
      {/* ========================================================================= */}
      <section
        id="hero-campaign-section"
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#020F16]"
      >
        {/* Full-Bleed Campaign Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={BRAND_CONFIG.images.heroReference}
            alt="ReiStella Jewellery Campaign - The Sovereign Reign"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2.5s] ease-out hover:scale-100"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Refined Optical Vignette & Cinematic Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#031820] via-[#031820]/40 to-[#020F16]/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#031820]/30 to-[#020F16]/80" />
        </div>

        {/* Hero Editorial Typography & Restrained Luxury CTA */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-16 flex flex-col items-center justify-center min-h-[85vh]">
          {/* Maison Monogram & Heritage Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[10px] sm:text-[12px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
              HIGH JEWELLERY MAISON
            </span>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </motion.div>

          {/* Primary Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.25em] text-white font-light uppercase leading-none drop-shadow-2xl"
          >
            {BRAND_CONFIG.name}
          </motion.h1>

          {/* Brand Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-neutral-200 tracking-[0.18em] italic font-light mt-4 sm:mt-6 max-w-2xl text-shadow-sm"
          >
            {BRAND_CONFIG.tagline}
          </motion.p>

          {/* Secondary Brand Phrase */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-3 text-[11px] sm:text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-light opacity-95"
          >
            {BRAND_CONFIG.subTagline}
          </motion.div>

          {/* Subtle Editorial CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-5"
          >
            <button
              id="hero-discover-collection-btn"
              onClick={() => onNavigate('collections')}
              className="group relative inline-flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-white hover:text-[#D4AF37] transition-colors py-3.5 px-8 border border-white/20 hover:border-[#D4AF37] bg-[#031820]/40 backdrop-blur-sm"
            >
              <span>Discover The Collection</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onNavigate('trending')}
              className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 hover:text-white py-3 px-4 transition-colors font-light"
            >
              View New & Trending
            </button>
          </motion.div>
        </div>

        {/* Scroll Cue Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 opacity-75 hover:opacity-100 transition-opacity">
          <button
            onClick={() => scrollToSection('brand-introduction-section')}
            className="text-neutral-400 hover:text-[#D4AF37] focus:outline-none transition-colors p-2"
            aria-label="Scroll to Brand Introduction"
          >
            <ChevronDown className="w-5 h-5 animate-bounce stroke-[1.5]" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND INTRODUCTION SECTION ("THE STORY CONTINUES")                     */}
      {/* ========================================================================= */}
      <section
        id="brand-introduction-section"
        className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#031820] relative border-b border-[#062B3A]/80"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Section Marker */}
          <div className="flex items-center justify-center space-x-4">
            <span className="h-[1px] w-10 bg-[#D4AF37]/50" />
            <span className="text-[11px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
              THE STORY CONTINUES
            </span>
            <span className="h-[1px] w-10 bg-[#D4AF37]/50" />
          </div>

          {/* Core Philosophy Statement */}
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide leading-tight sm:leading-snug">
            Jewellery is not mere ornamentation—it is the luminous embodiment of your sovereign individuality and modern grace.
          </h2>

          {/* Refined Supporting Narrative */}
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto tracking-wider">
            ReiStella celebrates the interplay of architectural purity and mesmerizing brilliance. Each creation is curated to elevate personal confidence, framing timeless beauty for those who command their own destiny.
          </p>

          {/* Quiet Gold Emblem Detail */}
          <div className="pt-4 flex justify-center">
            <div className="flex items-center space-x-3 text-[#D4AF37]/60">
              <span className="text-[10px] tracking-[0.3em] uppercase">Elegance</span>
              <span>•</span>
              <span className="text-[10px] tracking-[0.3em] uppercase">Brilliance</span>
              <span>•</span>
              <span className="text-[10px] tracking-[0.3em] uppercase">Authority</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. NEW & TRENDING (EDITORIAL ASYMMETRICAL SPREAD)                          */}
      {/* ========================================================================= */}
      <section
        id="trending-preview-section"
        className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#020F16] relative"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#062B3A]">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
                CURATED SELECTION
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light tracking-wide">
                New & Trending
              </h2>
            </div>
            <button
              onClick={() => onNavigate('trending')}
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-xs tracking-[0.25em] text-[#D4AF37] hover:text-white uppercase transition-colors"
            >
              <span>Explore Editorial Edit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Asymmetrical High-Fashion Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Feature Piece 1 (Large Leading Visual) */}
            <div className="md:col-span-7 group cursor-pointer" onClick={() => setSelectedPiece(EDITORIAL_PIECES[0])}>
              <div className="relative overflow-hidden bg-[#031820] aspect-[16/10] border border-[#062B3A]/60">
                <img
                  src={EDITORIAL_PIECES[0].imageUrl}
                  alt={EDITORIAL_PIECES[0].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                      {EDITORIAL_PIECES[0].collection}
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                      {EDITORIAL_PIECES[0].title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light mt-1">
                      {EDITORIAL_PIECES[0].subtitle}
                    </p>
                  </div>
                  <div className="p-3 bg-[#031820]/90 border border-[#D4AF37]/40 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Piece 2 & 3 (Stacked Asymmetric Column) */}
            <div className="md:col-span-5 space-y-8">
              {/* Piece 2 */}
              <div className="group cursor-pointer" onClick={() => setSelectedPiece(EDITORIAL_PIECES[1])}>
                <div className="relative overflow-hidden bg-[#031820] aspect-[4/3] border border-[#062B3A]/60">
                  <img
                    src={EDITORIAL_PIECES[1].imageUrl}
                    alt={EDITORIAL_PIECES[1].title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                      {EDITORIAL_PIECES[1].collection}
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-light">
                      {EDITORIAL_PIECES[1].title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light">
                      {EDITORIAL_PIECES[1].subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Piece 3 */}
              <div className="group cursor-pointer" onClick={() => setSelectedPiece(EDITORIAL_PIECES[2])}>
                <div className="relative overflow-hidden bg-[#031820] aspect-[4/3] border border-[#062B3A]/60">
                  <img
                    src={EDITORIAL_PIECES[2].imageUrl}
                    alt={EDITORIAL_PIECES[2].title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                      {EDITORIAL_PIECES[2].collection}
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-light">
                      {EDITORIAL_PIECES[2].title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light">
                      {EDITORIAL_PIECES[2].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. IMMERSIVE COLLECTIONS SHOWCASE                                          */}
      {/* ========================================================================= */}
      <section
        id="collections-campaign-section"
        className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#031820] border-t border-[#062B3A]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
              MAISON CAMPAIGNS
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl text-white font-light tracking-wide">
              Collections
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light tracking-wider">
              Explore timeless chapters in modern jewellery design, sculpted with mathematical harmony and radiant poise.
            </p>
          </div>

          {/* Major Campaign Panels */}
          <div className="space-y-16">
            {CAMPAIGN_COLLECTIONS.slice(0, 3).map((collection, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={collection.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-[#020F16] border border-[#062B3A]/80 p-6 sm:p-10 lg:p-12 hover:border-[#D4AF37]/40 transition-all duration-500 group"
                >
                  {/* Image Showcase */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#031820]">
                      <img
                        src={collection.heroImage}
                        alt={collection.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[#020F16]/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Narrative Text */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                        {collection.piecesCount}
                      </span>
                      <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light tracking-wide">
                        {collection.title}
                      </h3>
                      <p className="text-[11px] tracking-[0.25em] text-neutral-400 uppercase font-light">
                        {collection.tagline}
                      </p>
                    </div>

                    <div className="h-[1px] w-12 bg-[#D4AF37]/50" />

                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      {collection.description}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate('collections')}
                        className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] uppercase text-white group-hover:text-[#D4AF37] transition-colors"
                      >
                        <span>View Collection Story</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('collections')}
              className="inline-flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#031820] px-10 py-4 transition-all duration-300 font-medium"
            >
              <span>View All 5 Collections</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT REISTELLA EDITORIAL SPOTLIGHT                                    */}
      {/* ========================================================================= */}
      <section
        id="about-spotlight-section"
        className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#020F16] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Portrait / Atmospheric Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-[#031820] border border-[#062B3A] overflow-hidden">
              <img
                src={BRAND_CONFIG.images.editorial4}
                alt="ReiStella Jewellery Editorial"
                className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-70" />
            </div>

            {/* Subtle floating quote badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-[#031820]/95 border border-[#D4AF37]/40 p-6 max-w-xs shadow-2xl backdrop-blur-md hidden sm:block">
              <p className="font-serif-luxury text-base text-neutral-200 italic">
                "{BRAND_CONFIG.tagline}"
              </p>
              <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light block mt-2">
                ReiStella Maison
              </span>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
                THE MAISON PHILOSOPHY
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light tracking-wide leading-tight">
                Sculpting Modern Poise & Luminary Brilliance
              </h2>
            </div>

            <div className="h-[1px] w-16 bg-[#D4AF37]/50" />

            <div className="space-y-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                ReiStella was conceived to redefine the relationship between jewellery and wearer. We believe true luxury resides in the quiet confidence of striking geometry, pure light, and unyielding refinement.
              </p>
              <p>
                From dramatic high-jewellery collars to delicate ribbons of micro-pavé, our pieces are tailored for the modern woman who embraces her radiance with sovereign composure.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center space-x-2 text-xs tracking-[0.25em] uppercase text-white bg-[#062B3A] hover:bg-[#D4AF37] hover:text-[#031820] border border-[#D4AF37]/30 px-8 py-3.5 transition-all duration-300"
              >
                <span>Read Full Maison Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('find')}
                className="inline-flex items-center justify-center space-x-2 text-xs tracking-[0.25em] uppercase text-neutral-300 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/50 px-6 py-3.5 transition-all duration-300"
              >
                <span>Find Your ReiStella</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FIND YOUR REISTELLA (CONCIERGE & SOCIAL GATEWAYS)                      */}
      {/* ========================================================================= */}
      <section
        id="find-reistella-conversion-section"
        className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#031820] relative border-t border-[#062B3A]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
              PRIVATE DISCOVERY & PARTNERS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light tracking-wide">
              Find Your ReiStella
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light">
              Connect with our dedicated ambassadors, discover verified partner showcases, or join our global collector community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp Private Concierge */}
            <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="p-3 bg-[#031820] border border-[#062B3A] w-fit text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors">
                  <MessageCircle className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-white font-light">
                  WhatsApp Concierge
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Direct personal advisory with a ReiStella jewellery curator for styling inquiries and piece discovery.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href={BRAND_CONFIG.urls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-white bg-[#062B3A] hover:bg-[#D4AF37] hover:text-[#031820] py-3 transition-colors border border-[#D4AF37]/30"
                >
                  <span>Connect On WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Instagram Private Gallery */}
            <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="p-3 bg-[#031820] border border-[#062B3A] w-fit text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors">
                  <Instagram className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-white font-light">
                  Instagram Archive
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Immerse yourself in our daily editorial releases, celebrity moments, and behind-the-scenes styling reels.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href={BRAND_CONFIG.urls.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-neutral-200 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/60 py-3 transition-colors"
                >
                  <span>@reistella_official</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </a>
              </div>
            </div>

            {/* Global Partner & Stockist Network */}
            <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="p-3 bg-[#031820] border border-[#062B3A] w-fit text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors">
                  <Compass className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-white font-light">
                  Partner Salons
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Discover authorized ReiStella partner boutiques and private VIP salon showcases globally.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('find')}
                  className="w-full inline-flex items-center justify-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-neutral-200 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/60 py-3 transition-colors"
                >
                  <span>View Partner Locations</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CINEMATIC CAMPAIGN ENDING FRAME                                  */}
      {/* ========================================================================= */}
      <section
        id="final-campaign-frame"
        className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#020F16] border-t border-[#062B3A]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={BRAND_CONFIG.images.editorial1}
            alt="ReiStella Jewellery Final Campaign Frame"
            className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-[#031820]/60 to-[#020F16]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 space-y-6">
          <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
            THE MAISON INVITATION
          </span>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-white font-light tracking-[0.2em] uppercase leading-tight">
            {BRAND_CONFIG.tagline}
          </h2>

          <p className="text-xs sm:text-sm text-[#D4AF37] tracking-[0.4em] uppercase font-light">
            {BRAND_CONFIG.subTagline}
          </p>

          <div className="pt-8">
            <a
              href={BRAND_CONFIG.urls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] px-10 py-4 font-medium transition-all duration-300 shadow-2xl"
            >
              <span>Begin Your Discovery</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Editorial Detail Modal */}
      <EditorialModal
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onNavigateToFind={() => onNavigate('find')}
      />
    </div>
  );
};
