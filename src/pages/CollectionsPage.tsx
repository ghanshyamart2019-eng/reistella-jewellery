import React, { useState } from 'react';
import {
  CAMPAIGN_COLLECTIONS,
  EDITORIAL_PIECES,
  BRAND_CONFIG,
  JewelleryPiece
} from '../data/brandConfig';
import { EditorialModal } from '../components/EditorialModal';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

interface CollectionsPageProps {
  onNavigate: (pageId: string) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onNavigate }) => {
  const [selectedPiece, setSelectedPiece] = useState<JewelleryPiece | null>(null);
  const [activeCollectionTab, setActiveCollectionTab] = useState<string>(
    CAMPAIGN_COLLECTIONS[0].id
  );

  const activeCollection =
    CAMPAIGN_COLLECTIONS.find((c) => c.id === activeCollectionTab) ||
    CAMPAIGN_COLLECTIONS[0];

  const relatedPieces = EDITORIAL_PIECES.filter(
    (p) => p.collection === activeCollection.title
  );

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] pt-28 sm:pt-36 min-h-screen">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-12 max-w-5xl mx-auto text-center space-y-4">
        <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
          HIGH JEWELLERY CAMPAIGNS
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-white font-light tracking-wide">
          The Collections
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-2xl mx-auto tracking-wider">
          Each ReiStella collection represents a distinctive chapter in the architecture of brilliance, celebrating empowered elegance and timeless poise.
        </p>

        {/* Collection Selector Tabs */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CAMPAIGN_COLLECTIONS.map((col) => {
            const isActive = activeCollectionTab === col.id;
            return (
              <button
                key={col.id}
                onClick={() => setActiveCollectionTab(col.id)}
                className={`text-[10px] sm:text-[11px] tracking-[0.25em] uppercase px-5 py-3 transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#031820] border-[#D4AF37] font-medium shadow-xl'
                    : 'bg-[#020F16] text-neutral-300 hover:text-white border-[#062B3A] hover:border-[#D4AF37]/40 font-light'
                }`}
              >
                {col.title}
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Collection Master Showcase */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="bg-[#020F16] border border-[#062B3A] overflow-hidden">
          {/* Main Campaign Hero Banner */}
          <div className="relative min-h-[450px] sm:min-h-[550px] lg:min-h-[620px] flex items-end">
            <img
              src={activeCollection.heroImage}
              alt={activeCollection.title}
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-105"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-[#020F16]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020F16]/80 via-transparent to-transparent" />

            {/* Floating Editorial Narrative Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
                  {activeCollection.piecesCount} • {activeCollection.mood}
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide leading-tight">
                {activeCollection.title}
              </h2>

              <p className="text-xs sm:text-sm tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                {activeCollection.tagline}
              </p>

              <div className="h-[1px] w-16 bg-[#D4AF37]/50" />

              <p className="text-sm text-neutral-200 font-light leading-relaxed">
                {activeCollection.description}
              </p>

              <div className="pt-4 flex items-center space-x-4">
                <a
                  href={`${BRAND_CONFIG.urls.whatsapp}&text=${encodeURIComponent(
                    `Hello ReiStella Concierge, I would like to discover pieces from the "${activeCollection.title}" collection.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] px-6 py-3 font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire Collection</span>
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Highlights & Supporting Imagery */}
          {activeCollection.secondaryImage && (
            <div className="p-8 sm:p-12 border-t border-[#062B3A] grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#031820]/60">
              <div className="md:col-span-5 aspect-[4/3] relative overflow-hidden bg-[#020F16] border border-[#062B3A]">
                <img
                  src={activeCollection.secondaryImage}
                  alt={`${activeCollection.title} detail`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-7 space-y-4">
                <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                  ATELIER NOTES
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                  Form, Fluidity & Sovereign Light
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Sculpted with rigorous attention to proportion and movement, pieces in the {activeCollection.title} collection are engineered to catch light from every angle, delivering hypnotic radiance without unnecessary bulk.
                </p>
                <div className="pt-2">
                  <a
                    href={BRAND_CONFIG.urls.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-[#D4AF37] hover:text-white transition-colors"
                  >
                    <span>View Campaign On Instagram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Pieces From This Collection */}
      {relatedPieces.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-28">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#062B3A]">
            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                CURATED HIGHLIGHTS
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                Pieces in {activeCollection.title}
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-light">
              Click to view details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPieces.map((piece) => (
              <div
                key={piece.id}
                onClick={() => setSelectedPiece(piece)}
                className="group cursor-pointer bg-[#020F16] border border-[#062B3A] hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-[#031820]">
                  <img
                    src={piece.imageUrl}
                    alt={piece.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-serif-luxury text-xl text-white font-light group-hover:text-[#D4AF37] transition-colors">
                    {piece.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light uppercase tracking-wider">
                    {piece.subtitle}
                  </p>
                  <p className="text-xs text-neutral-300 font-light line-clamp-2 pt-1">
                    {piece.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Collections Overview List */}
      <section className="bg-[#020F16] py-24 border-t border-[#062B3A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
              MAISON COMPENDIUM
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              All ReiStella Chapters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPAIGN_COLLECTIONS.map((col) => (
              <div
                key={col.id}
                onClick={() => {
                  setActiveCollectionTab(col.id);
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }}
                className="p-6 bg-[#031820] border border-[#062B3A] hover:border-[#D4AF37]/60 transition-all duration-300 cursor-pointer space-y-3 group"
              >
                <div className="flex items-center justify-between text-[10px] text-[#D4AF37] tracking-widest uppercase">
                  <span>{col.piecesCount}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-white font-light group-hover:text-[#D4AF37] transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                  {col.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piece Modal */}
      <EditorialModal
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onNavigateToFind={() => onNavigate('find')}
      />
    </div>
  );
};
