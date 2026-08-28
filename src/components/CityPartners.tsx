import React from 'react';
import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const CITY_PARTNERS = [
  {
    id: 'ahmedabad',
    cityName: 'Ahmedabad',
    partnerName: 'ReiStella Flagship Partner',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1c0c22425?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://wa.me/910000000000?text=Hi%20ReiStella%20Ahmedabad,%20I%20saw%20your%20designs%20on%20the%20website%20and%20want%20to%20explore%20the%20catalog.',
    tagline: 'Exclusive Flagship Showroom'
  },
  {
    id: 'mumbai',
    cityName: 'Mumbai',
    partnerName: 'ReiStella Studio Partner',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://wa.me/910000000000?text=Hi%20ReiStella%20Mumbai,%20I%20want%20to%20view%20your%20WhatsApp%20catalog.',
    tagline: 'Boutique Collection Partner'
  },
  {
    id: 'surat',
    cityName: 'Surat',
    partnerName: 'ReiStella Gallery Partner',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://wa.me/910000000000?text=Hi%20ReiStella%20Surat,%20I%20would%20like%20to%20buy%20from%20your%20catalog.',
    tagline: 'Diamond District Partner'
  }
];

export const CityPartners: React.FC = () => {
  return (
    <section 
      id="home-city-partners"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-[#020F16] border-b border-[#062B3A]"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-light">
            Local Concierge Network
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light tracking-wide">
            Find Your ReiStella City Partner
          </h2>
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
              className="group relative bg-[#031820] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-4 transition-all duration-500 flex flex-col justify-between shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* City Image */}
              <div className="relative aspect-[16/10] overflow-hidden mb-5 bg-[#020F16]">
                <img
                  src={partner.image}
                  alt={partner.cityName}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031820] via-transparent to-transparent opacity-80" />
                
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
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-light group-hover:text-[#D4AF37] transition-colors">
                  {partner.cityName} Boutique
                </h3>
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
  );
};