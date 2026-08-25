import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JewelleryPiece, BRAND_CONFIG } from '../data/brandConfig';
import { X, MessageCircle, Instagram, Sparkles, ArrowRight } from 'lucide-react';

interface EditorialModalProps {
  piece: JewelleryPiece | null;
  onClose: () => void;
  onNavigateToFind?: () => void;
}

export const EditorialModal: React.FC<EditorialModalProps> = ({
  piece,
  onClose,
  onNavigateToFind
}) => {
  if (!piece) return null;

  const whatsappInquiryUrl = `${BRAND_CONFIG.urls.whatsapp}&text=${encodeURIComponent(
    `Hello ReiStella Concierge, I would love to discover more details regarding "${piece.title}" from the ${piece.collection} collection.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020F16]/90 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#031820] border border-[#062B3A] shadow-2xl overflow-hidden my-auto"
        >
          {/* Subtle Top Gold Hairline */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 text-neutral-400 hover:text-white bg-[#020F16]/80 p-2.5 border border-[#062B3A] hover:border-[#D4AF37]/50 transition-all duration-300 focus:outline-none"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Image Showcase Column */}
            <div className="lg:col-span-7 bg-[#020F16] relative flex items-center justify-center p-6 sm:p-10 overflow-hidden group">
              <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[550px] flex items-center justify-center">
                <img
                  src={piece.imageUrl}
                  alt={piece.title}
                  className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Tag / Collection Badge */}
              <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-[#031820]/90 border border-[#D4AF37]/30 px-3.5 py-1.5 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span className="text-[10px] tracking-[0.25em] text-neutral-200 uppercase font-light">
                  {piece.collection}
                </span>
              </div>
            </div>

            {/* Editorial Narrative Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#062B3A]">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
                    REISTELLA EDITORIAL ARCHIVE
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light tracking-wide leading-tight">
                    {piece.title}
                  </h3>
                  <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase font-light">
                    {piece.subtitle}
                  </p>
                </div>

                <div className="h-[1px] w-12 bg-[#D4AF37]/50" />

                <div className="space-y-4">
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {piece.description}
                  </p>

                  {piece.editorialNote && (
                    <div className="p-4 bg-[#062B3A]/40 border-l-2 border-[#D4AF37] space-y-1">
                      <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase block font-medium">
                        Curation Note
                      </span>
                      <p className="text-xs text-neutral-300 italic font-light">
                        "{piece.editorialNote}"
                      </p>
                    </div>
                  )}
                </div>

                {piece.tags && piece.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {piece.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-widest uppercase text-neutral-400 bg-[#020F16] border border-[#062B3A] px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Concierge & Discovery Actions */}
              <div className="pt-8 space-y-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 text-[11px] tracking-[0.25em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] py-3.5 transition-all duration-300 font-medium shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire with Concierge</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={BRAND_CONFIG.urls.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 text-[10px] tracking-[0.2em] uppercase text-neutral-300 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/40 py-2.5 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Instagram</span>
                  </a>

                  {onNavigateToFind && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToFind();
                      }}
                      className="flex items-center justify-center space-x-1 text-[10px] tracking-[0.2em] uppercase text-neutral-300 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/40 py-2.5 transition-colors"
                    >
                      <span>Find Partner</span>
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
