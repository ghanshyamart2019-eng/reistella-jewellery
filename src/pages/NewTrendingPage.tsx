import React, { useState } from 'react';
import { EDITORIAL_PIECES, JewelleryPiece, BRAND_CONFIG } from '../data/brandConfig';
import { EditorialModal } from '../components/EditorialModal';
import { Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NewTrendingPageProps {
  onNavigate: (pageId: string) => void;
}

export const NewTrendingPage: React.FC<NewTrendingPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPiece, setSelectedPiece] = useState<JewelleryPiece | null>(null);

  const categories = ['All', 'Signature Pieces', 'Statement Jewellery', 'Festive & Occasion', 'Everyday Luxury'];

  const filteredPieces = selectedCategory === 'All'
    ? EDITORIAL_PIECES
    : EDITORIAL_PIECES.filter((p) => p.collection === selectedCategory);

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] pt-28 sm:pt-36 min-h-screen">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-12 max-w-5xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
            SEASONAL EDITORIAL EDIT
          </span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-white font-light tracking-wide">
          New & Trending
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto tracking-wider">
          An editorial curation of our most coveted silhouettes, celebrated for their sculptural magnetism and luminous brilliance.
        </p>

        {/* Filter Pills */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] sm:text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#031820] font-medium shadow-lg'
                    : 'bg-[#020F16] text-neutral-400 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Editorial Lookbook Layout (Asymmetric, dynamic sizing) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredPieces.map((piece, index) => {
            const isHeroCard = index === 0 && selectedCategory === 'All';
            return (
              <div
                key={piece.id}
                onClick={() => setSelectedPiece(piece)}
                className={`group cursor-pointer bg-[#020F16] border border-[#062B3A] hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                  isHeroCard ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden bg-[#031820] w-full ${
                    isHeroCard ? 'aspect-[16/9]' : 'aspect-[4/5]'
                  }`}
                >
                  <img
                    src={piece.imageUrl}
                    alt={piece.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Subtle Collection Badge */}
                  <div className="absolute top-4 left-4 bg-[#031820]/90 border border-[#D4AF37]/30 px-3 py-1 backdrop-blur-sm">
                    <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                      {piece.collection}
                    </span>
                  </div>

                  {/* Hover Quick Cue */}
                  <div className="absolute top-4 right-4 bg-[#031820]/90 border border-[#D4AF37]/30 p-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Caption / Minimal Editorial Info */}
                <div className="p-6 sm:p-8 space-y-3 bg-[#020F16]">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                      EDITORIAL SELECTION
                    </span>
                    {piece.featured && (
                      <span className="text-[9px] tracking-[0.2em] text-neutral-400 uppercase">
                        CAMPAIGN PIECE
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light group-hover:text-[#D4AF37] transition-colors">
                    {piece.title}
                  </h3>

                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-light">
                    {piece.subtitle}
                  </p>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed pt-1 line-clamp-2">
                    {piece.description}
                  </p>

                  <div className="pt-4 border-t border-[#062B3A] flex items-center justify-between text-[11px] text-[#D4AF37] tracking-[0.2em] uppercase font-light">
                    <span>Discover Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lookbook Concierge Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-[#020F16] border border-[#062B3A] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              BESPOKE STYLING ADVISORY
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
              Looking for a tailored curation?
            </h3>
            <p className="text-xs text-neutral-300 font-light max-w-lg">
              Our private jewellery consultants are on hand to guide your selection for your next special event or everyday signature look.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.urls.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] px-8 py-3.5 transition-colors font-medium whitespace-nowrap shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult Concierge</span>
          </a>
        </div>
      </section>

      {/* Piece Lightbox Modal */}
      <EditorialModal
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onNavigateToFind={() => onNavigate('find')}
      />
    </div>
  );
};
