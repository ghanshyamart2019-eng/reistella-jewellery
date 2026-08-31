import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_CONFIG, JewelleryPiece } from '../data/brandConfig';
import { DEPARTMENTS, ALL_COLLECTIONS_PIECES, DepartmentItem } from '../data/collectionsData';
import { Sparkles, X, MessageCircle, BookOpen, Compass, ChevronRight } from 'lucide-react';

interface CollectionsPageProps {
  onNavigate: (pageId: string) => void;
  onSelectPiece?: (piece: JewelleryPiece) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onNavigate }) => {
  // Default to first department ('ring')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('ring');
  const [selectedStoryPiece, setSelectedStoryPiece] = useState<DepartmentItem | null>(null);

  // Filter 10 pieces for currently selected department
  const departmentPieces = ALL_COLLECTIONS_PIECES.filter(
    (p) => p.departmentId === selectedDepartment
  );

  const handleOpenStory = (piece: DepartmentItem) => {
    // Open dedicated Collections story modal without duplicate global trigger
    setSelectedStoryPiece(piece);
  };

  const handleCloseStory = () => {
    setSelectedStoryPiece(null);
  };

  const currentDepartment = DEPARTMENTS.find((d) => d.id === selectedDepartment);
  const currentDepartmentName = currentDepartment?.label || 'Collections';

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] pt-20 sm:pt-28 pb-28 border-t border-[#062B3A]">
      
      {/* ========================================================================= */}
      {/* 1. PAGE HEADER                                                            */}
      {/* ========================================================================= */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
            MAISON DEPARTMENTS
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h1 
          className="text-4xl sm:text-6xl text-white font-light tracking-wide uppercase leading-tight"
          style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
        >
          The Collections
        </h1>

        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-2xl mx-auto tracking-wider leading-relaxed">
          Discover ten bespoke creations per department, handcrafted in high-definition brilliance. Click any design to explore its artisan finish, crystals, inspiration, and story.
        </p>

        <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto pt-2" />

        {/* ========================================================================= */}
        {/* 2. CATEGORY TABS (7 DEPARTMENTS)                                          */}
        {/* ========================================================================= */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {DEPARTMENTS.map((dept) => {
            const isActive = selectedDepartment === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`text-[10px] sm:text-[11px] tracking-[0.25em] uppercase px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#031820] border-[#D4AF37] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                    : 'bg-[#020F16] text-neutral-300 hover:text-white border-[#062B3A] hover:border-[#D4AF37]/40 font-light'
                }`}
              >
                {dept.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 10 ITEMS HIGH DEFINITION GRID                                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Category Subheader */}
        <div className="flex items-center justify-between pb-6 border-b border-[#062B3A] mb-8 text-xs text-neutral-400">
          <div className="flex items-center space-x-2">
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] font-medium">
              {currentDepartmentName}
            </span>
            <span>•</span>
            <span className="tracking-wider">10 Landmark Designs</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            Showing all 10 creations • Full HD Gallery
          </div>
        </div>

        {/* 10 Items Grid (Responsive 2-col on mobile, 3-col on desktop, clean layout) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDepartment}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
          >
            {departmentPieces.map((piece, idx) => (
              <motion.div
                key={piece.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                onClick={() => handleOpenStory(piece)}
                className="group cursor-pointer bg-[#020F16] border border-[#062B3A] hover:border-[#D4AF37]/80 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-[0_4px_25px_rgba(212,175,55,0.15)] rounded-sm"
              >
                {/* Full HD Photo Area */}
                <div className="relative aspect-square bg-[#020F16] overflow-hidden flex items-center justify-center">
                  <img
                    src={piece.imageUrl}
                    alt={piece.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading={idx < 5 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-50 group-hover:opacity-10 transition-opacity duration-300" />

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#031820]/90 border border-[#D4AF37]/40 px-2 py-0.5 backdrop-blur-sm">
                    <span className="text-[8px] tracking-[0.2em] text-[#D4AF37] uppercase font-light">
                      #{String(piece.itemNumber).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Hover Read Story Pill */}
                  <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#031820]/95 border border-[#D4AF37]/60 px-2.5 py-1 text-[8px] tracking-[0.2em] text-[#D4AF37] uppercase font-medium flex items-center space-x-1 backdrop-blur-sm">
                    <BookOpen className="w-2.5 h-2.5" />
                    <span>Story</span>
                  </div>
                </div>

                {/* Bottom Bar: ONLY Name */}
                <div className="py-3 px-3 bg-[#020F16] border-t border-[#062B3A] text-center">
                  <h3 
                    className="text-xs sm:text-[13px] text-neutral-100 font-light tracking-wide group-hover:text-[#D4AF37] transition-colors truncate"
                    style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                    title={piece.title}
                  >
                    {piece.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </section>

      {/* ========================================================================= */}
      {/* 4. STORY POPUP MODAL (ON PHOTO CLICK)                                     */}
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

            {/* Modal Box */}
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
                        {selectedStoryPiece.departmentName} #{String(selectedStoryPiece.itemNumber).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Story & Details Column */}
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

                      {/* Narrative Inspiration */}
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

                        {/* Craftsmanship Details */}
                        <div className="p-4 bg-[#020F16] border border-[#062B3A] space-y-2">
                          <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium flex items-center space-x-1.5">
                            <Compass className="w-3 h-3 text-[#D4AF37]" />
                            <span>Artisan Craft & Materials</span>
                          </span>
                          <div className="space-y-1.5 text-xs text-neutral-300 font-light">
                            <p><span className="text-neutral-400">Metal:</span> {selectedStoryPiece.metal}</p>
                            <p><span className="text-neutral-400">Gemstones:</span> {selectedStoryPiece.gemstones}</p>
                            <p><span className="text-neutral-400">Technique:</span> {selectedStoryPiece.craftDetails}</p>
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

                    {/* Action Buttons */}
                    <div className="pt-6 border-t border-[#062B3A] space-y-3">
                      <a
                        href={`${BRAND_CONFIG.urls.whatsapp}&text=${encodeURIComponent(
                          `Hello ReiStella Concierge, I would love to discover more regarding "${selectedStoryPiece.title}" (${selectedStoryPiece.departmentName}) from Collections.`
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

export default CollectionsPage;
