import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_CONFIG, JewelleryPiece } from '../data/brandConfig';
import { Sparkles, X, MessageCircle, ArrowUpRight, BookOpen, Compass, ChevronRight } from 'lucide-react';

interface NewTrendingPageProps {
  onNavigate: (pageId: string) => void;
  onSelectPiece?: (piece: JewelleryPiece) => void;
}

export interface TrendingItem extends JewelleryPiece {
  story: string;
  craftDetails: string;
  inspiration: string;
  metal: string;
  gemstones: string;
  editionBadge: string;
}

// 5 Distinct, High-Editorial New & Trending Pieces
export const TRENDING_PIECES: TrendingItem[] = [
  {
    id: 'sovereign-solar-royal-necklace',
    title: 'The Sovereign Solar Royal Necklace',
    collection: 'Signature Couture Suite',
    subtitle: 'Canary Crystal Simulants & Pavé CZ Chandelier Collar',
    description: 'An architectural composition of canary yellow crystal simulants and pavé cubic zirconia, featuring multi-tiered chandelier pendeloques and handcrafted floral clusters.',
    story: 'Born from a study of morning celestial geometry, this piece captures the sovereign warmth of the sun breaking across high palaces. Conceived to command attention with effortless poise, the cascading drops are articulated with micro-precision so they sway naturally with the heartbeat and movement of the wearer.',
    inspiration: 'The sacred geometry of dawn sunlight and royal archives.',
    craftDetails: 'Over 300 hours of artisan hand-setting, multi-tier articulation, hypoallergenic micron coating, and custom prong basket mounts.',
    metal: 'Premium Brass Alloy with 18K Yellow & Rhodium Gold-Tone Finish',
    gemstones: 'Luminescent Canary Yellow Crystal Simulants & Hand-Selected High-Grade CZ',
    imageUrl: BRAND_CONFIG.images.heroReference,
    tags: ['Signature', 'Royal Suite', 'Centerpiece'],
    featured: true,
    editionBadge: '01 / MAISON CENTERPIECE',
    editorialNote: 'The crowning masterpiece of ReiStella’s couture imitation jewellery repertoire.'
  },
  {
    id: 'solaris-bloom-cocktail-ring',
    title: 'Solaris Bloom Cocktail Ring',
    collection: 'Statement Couture Collection',
    subtitle: 'Vivid Canary Crystal Simulant & Pavé Starlight Petals',
    description: 'A radiant floral blossom ring crowned with an intense canary yellow crystal simulant surrounded by eight cubic zirconia petals on a triple-split pavé band.',
    story: 'Inspired by rare desert flora that awakens under starlight, the Solaris Bloom ring embodies self-mastery, radiant authority, and timeless botanical symmetry.',
    inspiration: 'Nocturnal desert blooms and royal coronation signets.',
    craftDetails: 'Hand-sculpted 8-petal halo with graduated micro-pavé band and elevated 18K gold-tone crown mount.',
    metal: 'High-Grade Brass with 18K Gold-Tone & Rhodium Finish',
    gemstones: 'Canary Yellow Crystal Simulant & Ultra-Brilliant Cubic Zirconia',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=85&w=1200&auto=format&fit=crop',
    tags: ['Statement', 'Royal Suite'],
    featured: false,
    editionBadge: '02 / COCKTAIL RING',
    editorialNote: 'Engineered for hypnotic fire and multi-angle light refraction.'
  },
  {
    id: 'etoile-chandelier-drop-earrings',
    title: 'Étoile Chandelier Drop Earrings',
    collection: 'Festive & Occasion Suite',
    subtitle: 'Articulated Yellow Crystal & CZ Cascades',
    description: 'Dual-tiered architectural chandelier earrings engineered with featherweight poise, mirroring the grand floral motifs of the centerpiece royal collar.',
    story: 'Conceived for gala evenings and monumental celebrations, each cascade link is hand-articulated with micro-ball hinges that catch ambient illumination with every step.',
    inspiration: 'Cathedral chandeliers and cascading celestial meteor showers.',
    craftDetails: 'Over 140 individual micro-claw settings with dual-tone titanium-reinforced hypoallergenic ear posts.',
    metal: 'Rhodium & 18K Gold-Tone Brass Alloy',
    gemstones: 'Teardrop Canary Crystal Simulants & Brilliant-Cut Cubic Zirconia',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=85&w=1200&auto=format&fit=crop',
    tags: ['Occasion', 'Royal Suite'],
    featured: false,
    editionBadge: '03 / CHANDELIER EARRINGS',
    editorialNote: 'Sculpted for kinetic brilliance and 360-degree luminescence.'
  },
  {
    id: 'aura-pave-armature-bracelet',
    title: 'Aura Pavé Armature Bracelet',
    collection: 'Everyday Luxury Suite',
    subtitle: 'Ergonomic 18K Gold-Tone Arc & Seamless Pavé Contour',
    description: 'A seamless ribbon of light contouring the wrist with refined discipline, hidden integrated clasp, and velvet-smooth articulation.',
    story: 'Designed to transition effortlessly from boardrooms to twilight galas, the Aura Armature wraps the wrist with reassuring comfort and magnetic presence.',
    inspiration: 'Modernist Parisian architecture and ergonomic kinetic sculpture.',
    craftDetails: 'Double-locking invisible pressure clasp with hand-filed comfort interior bevels and anti-tarnish protective e-coating.',
    metal: 'Solid Brass Alloy with 18K Gold-Tone Micron Plating',
    gemstones: 'Seamless Channel & Pavé High-Grade Cubic Zirconia',
    imageUrl: 'https://images.unsplash.com/photo-1611591475152-4735d387e917?q=85&w=1200&auto=format&fit=crop',
    tags: ['Everyday Luxury', 'Signature'],
    featured: false,
    editionBadge: '04 / ARMATURE BRACELET',
    editorialNote: 'Precision closure with seamless contouring.'
  },
  {
    id: 'verdant-empress-pendant',
    title: 'Verdant Empress Pendant Suite',
    collection: 'Couture Archives',
    subtitle: 'Deep Emerald Crystal Simulant & Dual CZ Halo',
    description: 'Rich chromatic intensity framed by precision-cut brilliance, celebrating timeless feminine composure and sovereign poise.',
    story: 'Honoring historical regal talisman jewels, the Verdant Empress pendant centers a deep-toned emerald-cut crystal simulant surrounded by two tiers of starlight cubic zirconia.',
    inspiration: 'Imperial crown archives and botanical winter gardens.',
    craftDetails: 'Custom four-claw heavy-gauge basket with articulated hidden runner bail and high-polish gold finish.',
    metal: 'Rhodium & 18K Gold-Tone Premium Alloy',
    gemstones: 'Intense Emerald-Tone Crystal Simulant & Brilliant Cubic Zirconia Halo',
    imageUrl: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=85&w=1200&auto=format&fit=crop',
    tags: ['Festive', 'Occasion', 'Archives'],
    featured: false,
    editionBadge: '05 / EMPRESS PENDANT',
    editorialNote: 'Timeless chromatic depth and radiant halo.'
  }
];

export const NewTrendingPage: React.FC<NewTrendingPageProps> = ({ onNavigate }) => {
  const [selectedStoryPiece, setSelectedStoryPiece] = useState<TrendingItem | null>(null);

  const handleOpenStory = (piece: TrendingItem) => {
    // Open dedicated New & Trending story modal (avoid duplicate global modal)
    setSelectedStoryPiece(piece);
  };

  const handleCloseStory = () => {
    setSelectedStoryPiece(null);
  };

  const leadPiece = TRENDING_PIECES[0];
  const gridPieces = TRENDING_PIECES.slice(1);

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] pt-20 sm:pt-28 pb-28 border-t border-[#062B3A]">
      
      {/* ========================================================================= */}
      {/* 1. MINIMALIST PAGE HEADER                                                 */}
      {/* ========================================================================= */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
            CURATED SPOTLIGHT
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
        
        <h1 
          className="text-4xl sm:text-6xl text-white font-light tracking-wide uppercase leading-tight"
          style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
        >
          New & Trending
        </h1>
        
        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto tracking-wider leading-relaxed">
          Five landmark creations representing the pinnacle of the ReiStella Maison. Click any creation to discover its inspiration, metallurgy, and craft.
        </p>

        <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto pt-2" />
      </section>

      {/* ========================================================================= */}
      {/* 2. ITEM 1: HERO SPOTLIGHT (THE SOVEREIGN SOLAR ROYAL NECKLACE)             */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div
          onClick={() => handleOpenStory(leadPiece)}
          className="group cursor-pointer bg-[#020F16] border border-[#062B3A] hover:border-[#D4AF37]/80 transition-all duration-500 overflow-hidden shadow-2xl rounded-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Photo Column */}
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto min-h-[380px] sm:min-h-[480px] bg-[#020F16] overflow-hidden">
              <img
                src={leadPiece.imageUrl}
                alt={leadPiece.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Badge */}
              <div className="absolute top-5 left-5 bg-[#031820]/90 border border-[#D4AF37]/40 px-3.5 py-1.5 backdrop-blur-sm">
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                  {leadPiece.editionBadge}
                </span>
              </div>

              {/* Click to view story pill */}
              <div className="absolute bottom-5 right-5 bg-[#031820]/90 border border-[#D4AF37]/60 px-4 py-2 backdrop-blur-sm flex items-center space-x-2 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#031820] transition-colors duration-300">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                  Read Full Story
                </span>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#020F16] border-t lg:border-t-0 lg:border-l border-[#062B3A]">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                  <span>MAISON CENTERPIECE</span>
                  <span className="flex items-center space-x-1 text-neutral-400 group-hover:text-[#D4AF37] transition-colors">
                    <span>Discover</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                <h2 
                  className="text-2xl sm:text-3xl lg:text-4xl text-white font-light tracking-wide group-hover:text-[#F3E5AB] transition-colors leading-tight"
                  style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                >
                  {leadPiece.title}
                </h2>

                <p className="text-xs text-neutral-400 uppercase tracking-widest font-light">
                  {leadPiece.subtitle}
                </p>

                <div className="w-10 h-[1px] bg-[#D4AF37]/50" />

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {leadPiece.description}
                </p>

                <div className="p-4 bg-[#031820] border border-[#062B3A] space-y-1.5 text-xs text-neutral-300 font-light">
                  <p><span className="text-neutral-400">Metal:</span> {leadPiece.metal}</p>
                  <p><span className="text-neutral-400">Gemstones:</span> {leadPiece.gemstones}</p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#062B3A]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenStory(leadPiece);
                  }}
                  className="w-full flex items-center justify-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] py-3.5 transition-all duration-300 font-semibold shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Story & Inspiration</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ITEMS 2, 3, 4, 5: REFINED 4-ITEM HIGH-DEFINITION GRID                   */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between pb-4 border-b border-[#062B3A] mb-8 text-xs text-neutral-400">
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] font-medium">
            Signature Couture Selection
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            Items 02 – 05 of 05
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridPieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => handleOpenStory(piece)}
              className="group cursor-pointer bg-[#020F16] border border-[#062B3A] hover:border-[#D4AF37]/70 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl rounded-sm"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/11] bg-[#020F16] overflow-hidden">
                <img
                  src={piece.imageUrl}
                  alt={piece.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 bg-[#031820]/90 border border-[#D4AF37]/40 px-3 py-1 backdrop-blur-sm">
                  <span className="text-[8px] tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                    {piece.editionBadge}
                  </span>
                </div>

                <div className="absolute bottom-3.5 right-3.5 bg-[#031820]/90 border border-[#D4AF37]/50 px-3 py-1.5 backdrop-blur-sm flex items-center space-x-1.5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#031820] transition-colors">
                  <BookOpen className="w-3 h-3" />
                  <span className="text-[9px] tracking-[0.2em] uppercase font-medium">
                    View Details
                  </span>
                </div>
              </div>

              {/* Information Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-4 bg-[#020F16]">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                    <span>{piece.collection}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-neutral-400 group-hover:text-[#D4AF37] transition-all" />
                  </div>

                  <h3 
                    className="text-xl sm:text-2xl text-white font-light tracking-wide group-hover:text-[#F3E5AB] transition-colors"
                    style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                  >
                    {piece.title}
                  </h3>

                  <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-light">
                    {piece.subtitle}
                  </p>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                    {piece.description}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="pt-4 border-t border-[#062B3A] flex items-center justify-between text-[11px] text-neutral-300 font-light">
                  <span className="text-neutral-400">{piece.metal}</span>
                  <span className="text-[#D4AF37] flex items-center space-x-1">
                    <span>Explore Story</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DEDICATED STORY & CRAFT MODAL (FOR ALL 5 PIECES)                       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedStoryPiece && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseStory}
              className="fixed inset-0 bg-[#020F16]/90 backdrop-blur-xl"
            />

            {/* Story Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl bg-[#031820] border border-[#062B3A] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            >
              {/* Gold Top Hairline */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shrink-0" />

              {/* Close Button */}
              <button
                onClick={handleCloseStory}
                className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-white bg-[#020F16]/80 p-2.5 border border-[#062B3A] hover:border-[#D4AF37]/50 transition-all duration-300 focus:outline-none"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Photo Column */}
                  <div className="lg:col-span-6 bg-[#020F16] relative flex items-center justify-center p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#062B3A]">
                    <div className="relative w-full aspect-square max-h-[460px] flex items-center justify-center">
                      <img
                        src={selectedStoryPiece.imageUrl}
                        alt={selectedStoryPiece.title}
                        className="w-full h-full object-contain object-center"
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-[#031820]/90 border border-[#D4AF37]/30 px-3 py-1 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                        {selectedStoryPiece.collection}
                      </span>
                    </div>
                  </div>

                  {/* Story & Narrative Column */}
                  <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-6">
                      
                      {/* Header */}
                      <div className="space-y-2">
                        <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light block">
                          THE STORY BEHIND THIS CREATION
                        </span>
                        <h2 
                          className="text-2xl sm:text-4xl text-white font-light tracking-wide leading-tight"
                          style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                        >
                          {selectedStoryPiece.title}
                        </h2>
                        <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase font-light">
                          {selectedStoryPiece.subtitle}
                        </p>
                      </div>

                      <div className="h-[1px] w-12 bg-[#D4AF37]/50" />

                      {/* The Story Narrative */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium flex items-center space-x-1.5">
                            <BookOpen className="w-3 h-3 text-[#D4AF37]" />
                            <span>Inspiration & Concept</span>
                          </span>
                          <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                            {selectedStoryPiece.story}
                          </p>
                        </div>

                        {/* Craft & Artisan Details */}
                        <div className="p-4 bg-[#020F16] border border-[#062B3A] space-y-2">
                          <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium flex items-center space-x-1.5">
                            <Compass className="w-3 h-3 text-[#D4AF37]" />
                            <span>Craftsmanship Details</span>
                          </span>
                          <div className="space-y-1 text-xs text-neutral-300 font-light">
                            <p><span className="text-neutral-400">Artisan Setting:</span> {selectedStoryPiece.craftDetails}</p>
                            <p><span className="text-neutral-400">Metal:</span> {selectedStoryPiece.metal}</p>
                            <p><span className="text-neutral-400">Gemstones:</span> {selectedStoryPiece.gemstones}</p>
                          </div>
                        </div>

                        {/* Curatorial Note */}
                        {selectedStoryPiece.editorialNote && (
                          <div className="p-3.5 bg-[#062B3A]/30 border-l-2 border-[#D4AF37]">
                            <p className="text-xs text-neutral-300 italic font-light">
                              "{selectedStoryPiece.editorialNote}"
                            </p>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-[#062B3A] space-y-3">
                      <a
                        href={`${BRAND_CONFIG.urls.whatsapp}&text=${encodeURIComponent(
                          `Hello ReiStella Concierge, I would love to discover more regarding "${selectedStoryPiece.title}" from New & Trending.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] py-3.5 transition-all duration-300 font-semibold shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Inquire on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          handleCloseStory();
                          onNavigate('find');
                        }}
                        className="w-full text-center text-[10px] tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors py-2"
                      >
                        Find Partner Showcases →
                      </button>
                    </div>

                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default NewTrendingPage;
