import React from 'react';
import { Instagram, Facebook, Youtube, Share2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const SocialSidebar: React.FC = () => {
  return (
    <aside 
      aria-label="Social Media Links" 
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-4 bg-[#020F16]/95 backdrop-blur-md border border-[#D4AF37]/50 py-6 px-3.5 shadow-[0_0_25px_rgba(0,0,0,0.8)]"
    >
      {/* Vertical Connect Label */}
      <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] [writing-mode:vertical-lr] rotate-180 font-medium mb-1">
        Connect
      </span>
      <div className="w-5 h-[1px] bg-[#D4AF37]/60 my-1" />
      
      {/* Instagram */}
      <a 
        href={BRAND_CONFIG.urls.instagram} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#D4AF37] hover:text-white transition-colors p-2 bg-[#031820] border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-none"
        title="Instagram"
      >
        <Instagram className="w-4 h-4 stroke-[1.75]" />
      </a>

      {/* Facebook */}
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#D4AF37] hover:text-white transition-colors p-2 bg-[#031820] border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-none"
        title="Facebook"
      >
        <Facebook className="w-4 h-4 stroke-[1.75]" />
      </a>

      {/* Pinterest */}
      <a 
        href="https://pinterest.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#D4AF37] hover:text-white transition-colors p-2 bg-[#031820] border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-none"
        title="Pinterest"
      >
        <Share2 className="w-4 h-4 stroke-[1.75]" />
      </a>

      {/* YouTube */}
      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#D4AF37] hover:text-white transition-colors p-2 bg-[#031820] border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-none"
        title="YouTube"
      >
        <Youtube className="w-4 h-4 stroke-[1.75]" />
      </a>

      {/* Threads */}
      <a 
        href="https://threads.net" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#D4AF37] hover:text-white transition-colors px-2.5 py-1.5 bg-[#031820] border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-none flex items-center justify-center"
        title="Threads"
      >
        <span className="text-xs font-bold font-serif">@</span>
      </a>
    </aside>
  );
};