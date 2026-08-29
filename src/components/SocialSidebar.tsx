import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { Instagram, Share2 } from 'lucide-react';
import ReiStellaLogo from './ReiStellaLogo';

export interface SocialSidebarProps {
  className?: string;
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({
  className = '',
}) => {
  // Styles for individual, bright, floating buttons with no shared "hood"
  const buttonStyle = "flex items-center justify-center w-12 h-12 bg-[#020F16] border-2 border-[#D4AF37] text-[#D4AF37] shadow-[0_4px_15px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out hover:scale-125 hover:bg-[#D4AF37] hover:text-[#020F16] hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] z-50";

  return (
    <aside
      aria-label="Social Media Links"
      // The parent container now has NO background and NO border
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center space-y-4 ${className}`}
    >
      {/* Freestanding Connect Label */}
      <div className="flex flex-col items-center space-y-2 mb-2">
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] [writing-mode:vertical-lr] rotate-180 font-bold drop-shadow-md">
          Connect
        </span>
        <div className="w-[2px] h-6 bg-[#D4AF37]" />
      </div>

      {/* Freestanding Instagram Button */}
      <a
        href={BRAND_CONFIG.urls.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
        title="Instagram"
      >
        <Instagram className="w-6 h-6 stroke-[2.5]" />
      </a>

      {/* Freestanding Facebook Button (Raw SVG to bypass import error) */}
      <a
        href={BRAND_CONFIG.urls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
        title="Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>

      {/* Freestanding Pinterest Button */}
      <a
        href={BRAND_CONFIG.urls.pinterest}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
        title="Pinterest"
      >
        <Share2 className="w-6 h-6 stroke-[2.5]" />
      </a>

      {/* Freestanding YouTube Button (Raw SVG to bypass import error) */}
      <a
        href={BRAND_CONFIG.urls.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
        title="YouTube"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M2.5 7.1C2.5 7.1 2.4 5.3 3.2 4.5 4 3.7 4.9 3.7 5.4 3.6 8.3 3.4 12 3.4 12 3.4s3.7 0 6.6.2c.5.1 1.4.1 2.2.9.8.8.9 2.6.9 2.6s.2 2.1.2 4.2v1.8c0 2.1-.2 4.2-.2 4.2s-.1 1.8-.9 2.6c-.8.8-1.8.8-2.3.9-3.2.3-6.4.3-6.4.3s-3.7 0-6.6-.2c-.5-.1-1.4-.1-2.2-.9C2.4 19.3 2.5 17.5 2.5 17.5s-.2-2.1-.2-4.2v-1.8c0-2.1.2-4.2.2-4.2z"/>
          <path d="M9.7 15.5l6.3-3.8-6.3-3.8v7.6z"/>
        </svg>
      </a>

      {/* Freestanding Threads Button */}
      <a
        href={BRAND_CONFIG.urls.threads}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
        title="Threads"
      >
        <span className="text-[20px] font-bold font-serif leading-none mt-0.5">
          @
        </span>
      </a>

      {/* Freestanding Logo Box */}
      <div className="w-[2px] h-6 bg-[#D4AF37] mt-2 mb-2" />

      <div
        className="relative flex items-center justify-center w-14 h-14 p-2 bg-[#020F16] border-2 border-[#D4AF37] shadow-[0_4px_15px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out hover:scale-[1.25] hover:shadow-[0_0_25px_rgba(212,175,55,0.7)]"
        title="ReiStella"
      >
        <div className="absolute inset-1 border border-[#D4AF37]/30 pointer-events-none" />
        <ReiStellaLogo className="w-full h-full object-contain" />
      </div>
    </aside>
  );
};

export default SocialSidebar;