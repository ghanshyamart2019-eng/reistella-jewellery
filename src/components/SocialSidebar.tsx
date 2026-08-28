import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { Instagram, Facebook, Youtube, Share2 } from 'lucide-react';

export interface SocialSidebarProps {
  className?: string;
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({ className = '' }) => {
  return (
    <aside
      aria-label="Social Media Links"
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-5 bg-[#020F16]/80 backdrop-blur-md border border-[#D4AF37]/20 p-3 shadow-2xl ${className}`}
    >
      <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] [writing-mode:vertical-lr] rotate-180 py-2 font-light">
        Connect
      </span>
      <div className="w-4 h-[1px] bg-[#D4AF37]/30" />

      {/* Instagram */}
      <a
        href={BRAND_CONFIG.urls.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
        title="Instagram"
        aria-label="Follow ReiStella on Instagram"
      >
        <Instagram className="w-4 h-4 stroke-[1.5]" />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
        title="Facebook"
        aria-label="Follow ReiStella on Facebook"
      >
        <Facebook className="w-4 h-4 stroke-[1.5]" />
      </a>

      {/* Pinterest / Lookbook */}
      <a
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
        title="Pinterest"
        aria-label="Follow ReiStella on Pinterest"
      >
        <Share2 className="w-4 h-4 stroke-[1.5]" />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
        title="YouTube"
        aria-label="Follow ReiStella on YouTube"
      >
        <Youtube className="w-4 h-4 stroke-[1.5]" />
      </a>

      {/* Threads */}
      <a
        href="https://threads.net"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-[#D4AF37] transition-colors p-1.5"
        title="Threads"
        aria-label="Follow ReiStella on Threads"
      >
        <span className="text-xs font-bold font-serif leading-none">@</span>
      </a>
    </aside>
  );
};

export default SocialSidebar;
