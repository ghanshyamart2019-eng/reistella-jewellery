import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 max-w-5xl mx-auto text-center space-y-4">
        <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
          THE MAISON & PHILOSOPHY
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-white font-light tracking-wide">
          About ReiStella
        </h1>
        <p className="font-serif-luxury text-xl sm:text-2xl text-neutral-300 italic font-light max-w-2xl mx-auto">
          "{BRAND_CONFIG.tagline}"
        </p>
      </section>

      {/* Hero Editorial Panorama */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#020F16] border border-[#062B3A] overflow-hidden group">
          <img
            src={BRAND_CONFIG.images.editorial4}
            alt="ReiStella Jewellery Maison Atmosphere"
            className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-102 transition-transform duration-1000"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031820] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
            <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              THE VISION
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl text-white font-light mt-1">
              Where Brilliance Meets Authority
            </h2>
          </div>
        </div>
      </section>

      {/* Editorial Narrative Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pb-28 space-y-20">
        {/* Pillar 1: The Essence of Modern Luxury */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-4">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light block mb-2">
              PILLAR I
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Jewellery As Sovereign Expression
            </h3>
          </div>
          <div className="md:col-span-8 space-y-5 text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
            <p>
              At ReiStella, jewellery is conceived as an extension of one’s inner presence. It does not overpower; it illuminates. It does not conform; it declares.
            </p>
            <p>
              Each design embodies clean architectural silhouettes paired with mesmerizing facets of light—crafted to accompany life’s most decisive moments with effortless elegance.
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#062B3A]" />

        {/* Pillar 2: Confidence & Brilliance */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-4">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light block mb-2">
              PILLAR II
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Let Your Brilliance Reign
            </h3>
          </div>
          <div className="md:col-span-8 space-y-5 text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
            <p>
              Our guiding mantra, <em>"Let Your Brilliance Reign"</em>, speaks to the quiet strength and luminous poise inherent in every individual. We craft pieces that serve as emblems of personal triumph, timeless beauty, and modern luxury.
            </p>
            <p>
              Whether it is a dramatic statement collar for an unforgettable evening or a delicate contour of light for daily grandeur, ReiStella reflects the spirit of those who embrace their brilliance without compromise.
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#062B3A]" />

        {/* Pillar 3: The Story Continues */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-4">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light block mb-2">
              PILLAR III
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              The Story Continues
            </h3>
          </div>
          <div className="md:col-span-8 space-y-5 text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
            <p>
              ReiStella is an ongoing narrative of aesthetic evolution. Every new campaign and seasonal release expands our artistic lexicon, introducing evocative silhouettes that transcend fleeting trends.
            </p>
            <p>
              We invite you to discover our universe, explore the collections, and write your own luminous chapter.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Dual Imagery Spotlight */}
      <section className="bg-[#020F16] py-24 sm:py-32 border-t border-b border-[#062B3A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image 1 */}
            <div className="relative aspect-[4/5] bg-[#031820] border border-[#062B3A] overflow-hidden">
              <img
                src={BRAND_CONFIG.images.editorial7}
                alt="ReiStella High Jewellery Atelier"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                  ATELIER HARMONY
                </span>
                <p className="font-serif-luxury text-xl text-white font-light">
                  Architectural Precision & Fluid Light
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative aspect-[4/5] bg-[#031820] border border-[#062B3A] overflow-hidden">
              <img
                src={BRAND_CONFIG.images.heroReference}
                alt="ReiStella Sovereign Reign Campaign"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                  SIGNATURE CAMPAIGN
                </span>
                <p className="font-serif-luxury text-xl text-white font-light">
                  The Sovereign Reign
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery CTA Banner */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
            YOUR BESPOKE JOURNEY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light">
            Connect With The ReiStella Maison
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto">
            Discover our curated collections or connect directly with our VIP concierge team.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('collections')}
            className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-white bg-[#062B3A] hover:bg-[#D4AF37] hover:text-[#031820] border border-[#D4AF37]/40 px-8 py-3.5 transition-all duration-300 font-medium"
          >
            <span>Explore Collections</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={BRAND_CONFIG.urls.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] px-8 py-3.5 transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consult Concierge</span>
          </a>
        </div>
      </section>
    </div>
  );
};
