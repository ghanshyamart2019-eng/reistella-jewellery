import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_CONFIG, NAVIGATION_ITEMS } from '../data/brandConfig';
import { ReiStellaLogo } from './ReiStellaLogo';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';

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
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  return (
    <>
      <header
        id="reistella-main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${
          isScrolled
            ? 'bg-[#031820]/95 backdrop-blur-md border-b border-[#D4AF37]/15 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#020F16]/95 via-[#031820]/50 to-transparent py-6 sm:py-8'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-center relative">
          
          {/* Mobile Menu Toggle (Locked to the far left edge on mobile) */}
          <div className="absolute left-6 sm:left-10 lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#D4AF37] hover:text-white transition-all duration-300 transform hover:scale-125 p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* THE SINGLE LINE GROUP: Logo + Brand Name + Navigation Menu */}
          <div className="flex items-center">
            
            {/* Logo and Brand Name */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-3 sm:gap-4 focus:outline-none transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.45)]"
              aria-label="ReiStella Jewellery — Home"
            >
              <div className="flex items-center transition-all duration-500 transform group-hover:scale-110">
                <ReiStellaLogo 
                  className={`transition-all duration-500 ${
                    isScrolled 
                      ? 'h-11 sm:h-12 md:h-13' 
                      : 'h-13 sm:h-15 md:h-17 lg:h-18'
                  }`} 
                  alt="ReiStella Jewellery" 
                />
              </div>
              
              <span 
                className={`text-[#D4AF37] font-normal sm:font-medium tracking-[0.22em] uppercase transition-all duration-500 group-hover:text-[#F3E5AB] ${
                  isScrolled 
                    ? 'text-base sm:text-lg md:text-xl' 
                    : 'text-lg sm:text-xl md:text-2xl lg:text-[24px]'
                }`} 
                style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
              >
                ReiStella
              </span>
            </button>

            {/* Desktop Navigation Links (Added margin-left to create perfect spacing from the brand name) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10 ml-8 xl:ml-12">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-[13px] xl:text-[14px] tracking-[0.2em] uppercase transition-all duration-300 ease-out transform hover:scale-120 hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] relative py-2 px-1 focus:outline-none whitespace-nowrap ${
                      isActive
                        ? 'text-[#D4AF37] font-medium scale-105'
                        : 'text-neutral-300 hover:text-[#D4AF37] font-normal'
                    }`}
                    style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

          </div>

        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-0 z-40 bg-[#031820] flex flex-col justify-between px-8 pt-28 pb-10 lg:hidden overflow-y-auto"
          >
             <div className="flex flex-col space-y-6 text-center">
                <div className="flex justify-center pb-4 border-b border-[#062B3A]">
                   <ReiStellaLogo size="md" />
                </div>
                {NAVIGATION_ITEMS.map((item) => (
                  <button 
                    key={item.id} 
                    onClick={() => handleNavClick(item.id)} 
                    className="text-2xl text-neutral-200 hover:text-[#D4AF37] font-medium tracking-[0.15em] uppercase transition-all duration-300 transform hover:scale-115"
                    style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                  >
                    {item.label}
                  </button>
                ))}
             </div>
             
             <div className="pt-6 border-t border-[#062B3A] space-y-4">
              <p className="text-xs text-neutral-400 font-light tracking-wider text-center uppercase" style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}>
                "{BRAND_CONFIG.tagline}"
              </p>
              <div className="flex items-center justify-center space-x-8">
                <a
                  href={BRAND_CONFIG.urls.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[12px] font-medium tracking-[0.2em] text-[#D4AF37] hover:text-white uppercase"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BRAND_CONFIG.urls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[12px] font-medium tracking-[0.2em] text-[#D4AF37] hover:text-white uppercase"
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