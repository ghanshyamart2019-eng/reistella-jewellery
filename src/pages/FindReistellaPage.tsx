import React from 'react';
import { CITY_PARTNERS } from '../data/brandConfig';
import {
  MessageCircle,
  MapPin,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface FindReistellaPageProps {
  onNavigate?: (pageId: string) => void;
}

export const FindReistellaPage: React.FC<FindReistellaPageProps> = () => {
  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] pt-20 sm:pt-28 pb-28 border-t border-[#062B3A]">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
            THE MAISON NETWORK
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h1 
          className="text-4xl sm:text-6xl text-white font-light tracking-wide uppercase leading-tight"
          style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
        >
          Find Your ReiStella
        </h1>

        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto tracking-wider leading-relaxed">
          Connect directly with a dedicated ReiStella ambassador, discover official partner locations, or arrange a private viewing.
        </p>

        <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto pt-2" />
      </section>

      {/* ========================================================================= */}
      {/* LOCAL CONCIERGE NETWORK (Direct WhatsApp Catalog Routing)                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              Local Concierge Network
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light tracking-wide">
              Find Your ReiStella City Partner
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm tracking-wider max-w-xl mx-auto font-light">
              Select your city below to connect directly with our authorized partner via WhatsApp and explore their local business catalog.
            </p>
          </div>

          {/* City Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CITY_PARTNERS.map((partner) => (
              <a
                key={partner.id}
                href={partner.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#020F16] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-4 transition-all duration-500 flex flex-col justify-between shadow-2xl overflow-hidden cursor-pointer"
              >
                {/* City Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-5 bg-[#031820]">
                  <img
                    src={partner.image}
                    alt={partner.cityName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-80" />
                  
                  {/* City Badge */}
                  <div className="absolute top-3 left-3 bg-[#031820]/90 backdrop-blur-sm border border-[#D4AF37]/40 px-3 py-1 text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase flex items-center space-x-1.5">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{partner.cityName}</span>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="space-y-2 mb-6 px-2">
                  <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-light">
                    {partner.partnerName}
                  </span>
                  <h4 className="font-serif-luxury text-xl sm:text-2xl text-white font-light group-hover:text-[#D4AF37] transition-colors">
                    {partner.cityName} Boutique
                  </h4>
                  <p className="text-xs text-neutral-300 font-light tracking-wide">
                    {partner.tagline}
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <div className="px-2 pt-4 border-t border-[#062B3A] flex items-center justify-between text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-medium">
                  <span className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Open WhatsApp Catalog</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
