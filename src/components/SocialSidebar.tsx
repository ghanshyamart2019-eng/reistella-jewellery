```tsx
import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { Instagram, Facebook, Youtube, Share2 } from 'lucide-react';
import ReiStellaLogo from './ReiStellaLogo';

export interface SocialSidebarProps {
  className?: string;
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({
  className = '',
}) => {
  return (
    <aside
      aria-label="Social Media Links"
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-4 bg-[#020F16]/90 backdrop-blur-md border border-[#D4AF37]/25 p-3.5 shadow-2xl ${className}`}
    >
      {/* Connect Label */}
      <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] [writing-mode:vertical-lr] rotate-180 py-2 font-light">
        Connect
      </span>

      <div className="w-5 h-[1px] bg-[#D4AF37]/35 mb-1" />

      {/* Instagram */}
      <a
        href={BRAND_CONFIG.urls.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 p-2"
        title="Instagram"
        aria-label="Follow ReiStella on Instagram"
      >
        <Instagram className="w-5 h-5 stroke-[1.5]" />
      </a>

      {/* Facebook */}
      <a
        href={BRAND_CONFIG.urls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 p-2"
        title="Facebook"
        aria-label="Follow ReiStella on Facebook"
      >
        <Facebook className="w-5 h-5 stroke-[1.5]" />
      </a>

      {/* Pinterest / Lookbook */}
      <a
        href={BRAND_CONFIG.urls.pinterest}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 p-2"
        title="Pinterest"
        aria-label="Follow ReiStella on Pinterest"
      >
        <Share2 className="w-5 h-5 stroke-[1.5]" />
      </a>

      {/* YouTube */}
      <a
        href={BRAND_CONFIG.urls.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 p-2"
        title="YouTube"
        aria-label="Follow ReiStella on YouTube"
      >
        <Youtube className="w-5 h-5 stroke-[1.5]" />
      </a>

      {/* Threads */}
      <a
        href={BRAND_CONFIG.urls.threads}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 p-2"
        title="Threads"
        aria-label="Follow ReiStella on Threads"
      >
        <span className="text-[17px] font-semibold font-serif leading-none">
          @
        </span>
      </a>

      {/* ReiStella Original Logo */}
      <div className="w-5 h-[1px] bg-[#D4AF37]/35 mt-1 mb-1" />

      <div
        className="relative flex items-center justify-center w-[54px] h-[54px] p-1.5 border border-[#D4AF37]/55 bg-[#031820]/90 shadow-[0_0_18px_rgba(212,175,55,0.10)]"
        title="ReiStella"
        aria-label="ReiStella Jewellery"
      >
        <div className="absolute inset-1 border border-[#D4AF37]/20 pointer-events-none" />

        <ReiStellaLogo className="w-full h-full object-contain" />
      </div>
    </aside>
  );
};

export default SocialSidebar;
```
