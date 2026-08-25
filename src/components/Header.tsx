import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_CONFIG, NAVIGATION_ITEMS } from '../data/brandConfig';
import { Menu, X, MessageCircle, Instagram } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="reistella-main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#031820]/95 backdrop-blur-md border-b border-[#D4AF37]/15 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#020F16]/90 via-[#031820]/50 to-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <button
            id="header-brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-none"
            aria-label="ReiStella Jewellery Homepage"
          >
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.28em] text-white group-hover:text-[#D4AF37] transition-colors duration-500 font-light">
                {BRAND_CONFIG.name}
              </span>
              <span className="text-[9px] tracking-[0.45em] text-[#D4AF37] font-light uppercase opacity-90 -mt-0.5">
                JEWELLERY
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation-menu" className="hidden lg:flex items-center space-x-9" aria-label="Main Navigation">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[11px] tracking-[0.25em] uppercase transition-all duration-300 relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#D4AF37] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action / Social Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              id="header-instagram-link"
              href={BRAND_CONFIG.urls.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300 p-1.5"
              aria-label="ReiStella on Instagram"
            >
              <Instagram className="w-4 h-4 stroke-[1.5]" />
            </a>
            <a
              id="header-whatsapp-concierge-btn"
              href={BRAND_CONFIG.urls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 px-4 py-2 transition-all duration-300 rounded-none"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Concierge</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden space-x-4">
            <a
              href={BRAND_CONFIG.urls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] p-2"
              aria-label="Contact Concierge"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors p-2 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#031820] flex flex-col justify-between px-8 pt-32 pb-12 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light border-b border-[#D4AF37]/20 pb-3">
                Navigation
              </span>
              {NAVIGATION_ITEMS.map((item, idx) => {
                const isActive = activePage === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-2xl font-serif-luxury tracking-[0.15em] transition-colors ${
                      isActive ? 'text-[#D4AF37]' : 'text-neutral-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="pt-8 border-t border-[#062B3A] space-y-6">
              <p className="text-xs text-neutral-400 font-light tracking-wider">
                {BRAND_CONFIG.tagline}
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href={BRAND_CONFIG.urls.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs tracking-widest text-[#D4AF37] hover:text-white"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BRAND_CONFIG.urls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs tracking-widest text-[#D4AF37] hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
