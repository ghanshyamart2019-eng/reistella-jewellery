import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Scale, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-[#031820] border border-[#062B3A] shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col"
        >
          {/* Top Gold Hairline */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shrink-0" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-[#062B3A] flex items-center justify-between bg-[#020F16]/60 shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#031820] border border-[#D4AF37]/40 text-[#D4AF37]">
                {isTerms ? <Scale className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                    MAISON REISTELLA LEGAL GOVERNANCE
                  </span>
                </div>
                <h2 
                  className="text-xl sm:text-2xl text-white font-light tracking-wide uppercase mt-0.5"
                  style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                >
                  {isTerms ? 'Terms & Conditions' : 'Privacy & Policy'}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white bg-[#020F16] p-2 border border-[#062B3A] hover:border-[#D4AF37]/50 transition-all duration-300 focus:outline-none"
              aria-label="Close legal modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-neutral-300 font-light space-y-6 leading-relaxed">
            
            {isTerms ? (
              <>
                <div className="p-4 bg-[#020F16] border border-[#062B3A]">
                  <p className="text-neutral-200">
                    Welcome to <span className="text-[#D4AF37] font-medium">{BRAND_CONFIG.fullName}</span>. By browsing our digital showcase, engaging with our private concierge ambassadors, or inquiring regarding our designer collections, you agree to comply with and be bound by the following Terms & Conditions.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    1. Product Nature: Haute Imitation & Fashion Jewellery
                  </h3>
                  <p>
                    All creations designed and presented by ReiStella are <strong className="text-[#D4AF37] font-medium">Premium Imitation & Couture Fashion Jewellery</strong>. Our pieces do <strong className="text-neutral-100">not</strong> contain mined natural diamonds, solid natural gold, or sterling silver. Instead, every piece is sculpted utilizing master-level imitation craftsmanship: premium hypoallergenic brass and copper base alloys, rich 18K/24K gold-tone micron plating, high-luster rhodium finishes, ultra-brilliant Cubic Zirconia (CZ), synthetic gemstone crystals, and luminescent simulated pearls.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    2. Private Concierge & City Showcase Inquiries
                  </h3>
                  <p>
                    Inquiries initiated through our WhatsApp Concierge, consultation forms, or verified partner city showcases in Ahmedabad, Rajkot, and Vadodara serve as design advisory dialogues. Product availability, custom quantity bookings, and delivery timelines are confirmed directly through our concierge team.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    3. Care & Maintenance Guidelines for Imitation Jewellery
                  </h3>
                  <p>
                    To preserve the brilliant luster and gold-tone micron plating of your ReiStella jewellery:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-neutral-300 text-xs sm:text-sm">
                    <li>Avoid direct contact with perfumes, hairsprays, body lotions, sanitizers, and harsh chemicals.</li>
                    <li>Remove jewellery before showering, swimming, working out, or sleeping.</li>
                    <li>Wipe gently after wear with a soft, clean cotton or microfiber cloth to remove skin oils and perspiration.</li>
                    <li>Store each piece individually in an airtight zip pouch or soft velvet box away from moisture and direct sunlight.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    4. Intellectual Property & Design Rights
                  </h3>
                  <p>
                    All brand identifiers, campaign photography, video content, visual layouts, and jewellery silhouettes displayed on this website are the exclusive intellectual property of {BRAND_CONFIG.fullName}. Unauthorized commercial duplication, scraping, or misrepresentation is strictly prohibited.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    5. Governing Jurisdiction
                  </h3>
                  <p>
                    These terms are governed by and construed in accordance with applicable consumer and trade regulations. For any customer support or inquiries, reach out to our team at <span className="text-[#D4AF37]">{BRAND_CONFIG.urls.contactEmail}</span>.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 bg-[#020F16] border border-[#062B3A]">
                  <p className="text-neutral-200">
                    At <span className="text-[#D4AF37] font-medium">{BRAND_CONFIG.fullName}</span>, we uphold the highest standard of client discretion and privacy. This Privacy Policy outlines how your personal information is collected, safeguarded, and respected when you interact with our Maison.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    1. Information We Collect
                  </h3>
                  <p>
                    We collect personal details that you voluntarily provide when requesting VIP concierge appointments, inquiring regarding specific collection pieces, or subscribing to Maison lookbooks. This includes your name, contact telephone/WhatsApp number, city of residence, and aesthetic jewellery preferences.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    2. Dedicated Purpose of Data Utilization
                  </h3>
                  <p>
                    Client information is utilized solely to deliver customized personal styling, schedule boutique or private salon appointments in Ahmedabad, Rajkot, or Vadodara, coordinate bespoke jewelry commissions, and share private exhibition invitations. We never sell, rent, or trade client dossiers to third parties.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    3. Security & Discreet Data Vaulting
                  </h3>
                  <p>
                    All digital communications, appointment submissions, and inquiry archives are encrypted and managed under strict confidentiality protocols. Access is restricted exclusively to authorized ReiStella concierge directors and brand custodians.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    4. Cookies & Digital Experience
                  </h3>
                  <p>
                    Our website utilizes essential session cookies and performance telemetry to guarantee smooth high-definition visual rendering, video playback, and responsive interface navigation across mobile and desktop displays.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base text-white tracking-wider uppercase font-normal border-b border-[#062B3A] pb-1">
                    5. Client Rights & Data Inquiries
                  </h3>
                  <p>
                    You retain the right to inspect, update, or request the immediate deletion of your personal contact records at any time by contacting our Privacy Concierge at <span className="text-[#D4AF37]">{BRAND_CONFIG.urls.contactEmail}</span> or directly via our WhatsApp Concierge.
                  </p>
                </div>
              </>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-[#020F16] border-t border-[#062B3A] flex items-center justify-between shrink-0">
            <span className="text-[10px] sm:text-[11px] text-neutral-400 font-light tracking-wider">
              Last Updated: 2026 Edition • ReiStella Legal Council
            </span>
            <button
              onClick={onClose}
              className="text-[10px] sm:text-xs tracking-[0.2em] uppercase px-5 py-2 bg-[#D4AF37] text-[#031820] font-semibold hover:bg-[#E5C158] transition-colors"
            >
              Acknowledge & Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
