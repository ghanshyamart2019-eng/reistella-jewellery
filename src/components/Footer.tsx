import React from 'react';
import { BRAND_CONFIG, NAVIGATION_ITEMS } from '../data/brandConfig';
import { ReiStellaLogo } from './ReiStellaLogo';
import { Instagram, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: string) => void;
  onOpenLegal?: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
  };

  return (
    <footer id="reistella-site-footer" className="bg-[#020F16] border-t border-[#062B3A] text-neutral-300 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-14">
        {/* Brand Presence & Tagline Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#062B3A]">
          <div className="lg:col-span-6 space-y-4">
            {/* Official ReiStella Logo */}
            <div className="mb-3">
              <button
                id="footer-brand-logo-btn"
                onClick={() => handleNavClick('home')}
                className="group text-left focus:outline-none flex items-center gap-3.5 transition-all duration-300 hover:opacity-95"
                aria-label="ReiStella Jewellery — Home"
                title="ReiStella Jewellery — Home"
              >
                <ReiStellaLogo size="footer" alt="ReiStella Jewellery" />
                <div className="flex flex-col justify-center text-left">
                  <span 
                    className="text-[#D4AF37] text-xl sm:text-2xl font-normal tracking-[0.22em] uppercase leading-none"
                    style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                  >
                    ReiStella
                  </span>
                  <span className="text-white text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-light mt-1">
                    JEWELLERY
                  </span>
                </div>
              </button>
            </div>
            
            <p className="font-serif-luxury text-xl sm:text-2xl text-neutral-200 italic tracking-wider max-w-lg font-light pt-1">
              "{BRAND_CONFIG.tagline}"
            </p>
          </div>

          {/* Direct Private Concierge Box */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start lg:items-end space-y-6">
            <div className="space-y-2 text-left lg:text-right">
              <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-medium">
                Private Advisory & Concierge
              </span>
              <p className="text-xs text-neutral-300 font-light max-w-md">
                Connect directly with a dedicated ReiStella ambassador for collection discovery and personal styling.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                id="footer-whatsapp-btn"
                href={BRAND_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-white bg-[#062B3A] hover:bg-[#D4AF37] hover:text-[#031820] border border-[#D4AF37]/35 px-6 py-3 transition-all duration-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Concierge</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                id="footer-instagram-btn"
                href={BRAND_CONFIG.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-neutral-300 hover:text-white border border-neutral-700 hover:border-[#D4AF37]/60 px-5 py-3 transition-all duration-300"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram Archive</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation & Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-[#062B3A]">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase font-medium">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-xs tracking-[0.15em] text-neutral-400 hover:text-[#D4AF37] transition-colors duration-200 text-left font-light focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase font-medium">
              Social Channels
            </h4>
            <div className="space-y-3">
              <a
                href={BRAND_CONFIG.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-xs tracking-wider text-neutral-400 hover:text-white group transition-colors"
              >
                <div className="p-2 bg-[#031820] border border-[#062B3A] group-hover:border-[#D4AF37]/50 transition-colors">
                  <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span>Instagram @reistella_official</span>
              </a>

              <a
                href={BRAND_CONFIG.urls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-xs tracking-wider text-neutral-400 hover:text-white group transition-colors"
              >
                <div className="p-2 bg-[#031820] border border-[#062B3A] group-hover:border-[#D4AF37]/50 transition-colors">
                  <Facebook className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span>Facebook ReiStella Official</span>
              </a>

              <a
                href={BRAND_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-xs tracking-wider text-neutral-400 hover:text-white group transition-colors"
              >
                <div className="p-2 bg-[#031820] border border-[#062B3A] group-hover:border-[#D4AF37]/50 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Brand Philosophy */}
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase font-medium">
              The Brand
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              ReiStella is dedicated to the art of luminary jewellery—where architectural silhouettes meet perpetual elegance. Crafted to empower individuality and let your inner brilliance reign.
            </p>
            <div className="pt-1">
              <button
                onClick={() => handleNavClick('about')}
                className="text-[11px] tracking-[0.2em] text-[#D4AF37] hover:text-white uppercase transition-colors inline-flex items-center space-x-1"
              >
                <span>Discover About ReiStella</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Governance Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 font-light tracking-widest gap-4">
          <p>© 2026 {BRAND_CONFIG.fullName}. All Rights Reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] uppercase">
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="text-neutral-400 hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline tracking-wider"
            >
              Terms & Conditions
            </button>
            <span className="text-[#D4AF37]/50">•</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="text-neutral-400 hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline tracking-wider"
            >
              Privacy & Policy
            </button>
            <span className="text-[#D4AF37]/50">•</span>
            <span className="text-neutral-400">{BRAND_CONFIG.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
