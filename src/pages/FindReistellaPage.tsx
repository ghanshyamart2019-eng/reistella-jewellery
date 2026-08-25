import React, { useState } from 'react';
import { BRAND_CONFIG, PARTNER_LOCATIONS } from '../data/brandConfig';
import {
  MessageCircle,
  Instagram,
  Facebook,
  Compass,
  MapPin,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface FindReistellaPageProps {
  onNavigate: (pageId: string) => void;
}

export const FindReistellaPage: React.FC<FindReistellaPageProps> = ({ onNavigate: _onNavigate }) => {
  const [partnerApplicationSubmitted, setPartnerApplicationSubmitted] = useState(false);
  const [cityFilter, setCityFilter] = useState<string>('All');
  const [inquiryFormData, setInquiryFormData] = useState({
    name: '',
    email: '',
    boutiqueName: '',
    cityCountry: '',
    message: ''
  });

  const cities = ['All', 'London', 'Dubai', 'Singapore', 'Mumbai', 'New York'];

  const filteredLocations = cityFilter === 'All'
    ? PARTNER_LOCATIONS
    : PARTNER_LOCATIONS.filter((l) => l.city === cityFilter);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerApplicationSubmitted(true);
  };

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] pt-28 sm:pt-36 min-h-screen">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-14 max-w-5xl mx-auto text-center space-y-4">
        <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
          EXCLUSIVE ACCESS & ADVISORY
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-white font-light tracking-wide">
          Find Your ReiStella
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto tracking-wider">
          Experience personal consultation with our master curators, discover verified partner boutiques, or connect with our global community.
        </p>
      </section>

      {/* Primary Gateway Cards (WhatsApp, Instagram, Facebook) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp Direct Line */}
          <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#031820] border border-[#062B3A] text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors">
                  <MessageCircle className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                  RECOMMENDED
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                Private WhatsApp Concierge
              </h2>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Connect directly with a ReiStella jewellery specialist. Receive video previews, personalized styling recommendations, and immediate assistance.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-[10px] text-neutral-400 font-light">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Responsive Global Advisory Hours</span>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={BRAND_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] py-3.5 transition-colors font-medium"
              >
                <span>Message Concierge</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Instagram Official Archive */}
          <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="p-3 bg-[#031820] border border-[#062B3A] text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors w-fit">
                <Instagram className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                Instagram Official
              </h2>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Explore our main social channel for newly debuted pieces, campaign films, editorial spreads, and collector features.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-[10px] text-neutral-400 font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Verified Channel @reistella_official</span>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={BRAND_CONFIG.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-white bg-[#062B3A] hover:bg-[#083a4f] border border-[#D4AF37]/30 py-3.5 transition-colors font-light"
              >
                <span>View On Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* Facebook Official Community */}
          <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="p-3 bg-[#031820] border border-[#062B3A] text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors w-fit">
                <Facebook className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                Facebook Maison
              </h2>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Stay updated with official brand releases, regional campaign announcements, and partner gallery events worldwide.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-[10px] text-neutral-400 font-light">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Official Announcements & Updates</span>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={BRAND_CONFIG.urls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-neutral-200 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/60 py-3.5 transition-colors font-light"
              >
                <span>Visit Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Salons & Stockists Directory */}
      <section className="bg-[#020F16] py-24 border-t border-[#062B3A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#062B3A] gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#D4AF37]">
                <Compass className="w-4 h-4" />
                <span className="text-[10px] tracking-[0.4em] uppercase font-light">
                  AUTHORIZED SALONS & STOCKISTS
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light">
                Partner Locations
              </h2>
            </div>

            {/* City Tabs */}
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <button
                  key={c}
                  onClick={() => setCityFilter(c)}
                  className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-colors ${
                    cityFilter === c
                      ? 'bg-[#D4AF37] text-[#031820] font-medium'
                      : 'bg-[#031820] text-neutral-400 hover:text-white border border-[#062B3A]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc, index) => (
              <div
                key={index}
                className="bg-[#031820] border border-[#062B3A] p-6 sm:p-8 space-y-4 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium bg-[#062B3A] px-2.5 py-1">
                    {loc.status}
                  </span>
                  <MapPin className="w-4 h-4 text-neutral-400" />
                </div>

                <div>
                  <h3 className="font-serif-luxury text-2xl text-white font-light">
                    {loc.city}, {loc.country}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    {loc.district}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#062B3A] text-xs text-neutral-300 font-light flex items-center justify-between">
                  <span>{loc.contactType}</span>
                  <a
                    href={`${BRAND_CONFIG.urls.whatsapp}&text=${encodeURIComponent(
                      `Hello ReiStella Concierge, I would like to book a private viewing or locate stock in ${loc.city}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application / Stockist Inquiry Form */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-12 space-y-8">
          <div className="space-y-2 text-center">
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
              REPRESENTATION & PARTNERSHIPS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Become an Authorized ReiStella Partner
            </h2>
            <p className="text-xs text-neutral-400 font-light max-w-lg mx-auto">
              Luxury boutique curators and fine fashion houses interested in presenting ReiStella collections are invited to submit a partnership inquiry.
            </p>
          </div>

          {partnerApplicationSubmitted ? (
            <div className="bg-[#031820] border border-[#D4AF37]/50 p-8 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto stroke-[1.5]" />
              <h3 className="font-serif-luxury text-2xl text-white font-light">
                Inquiry Received
              </h3>
              <p className="text-xs text-neutral-300 font-light max-w-md mx-auto">
                Thank you for your interest in representing ReiStella. Our global partnerships director will review your salon profile and respond promptly.
              </p>
              <button
                onClick={() => setPartnerApplicationSubmitted(false)}
                className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] hover:underline pt-2 inline-block"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-light block">
                    Full Name / Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryFormData.name}
                    onChange={(e) =>
                      setInquiryFormData({ ...inquiryFormData, name: e.target.value })
                    }
                    placeholder="e.g. Victoria Sterling, Managing Director"
                    className="w-full bg-[#031820] border border-[#062B3A] focus:border-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-light block">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryFormData.email}
                    onChange={(e) =>
                      setInquiryFormData({ ...inquiryFormData, email: e.target.value })
                    }
                    placeholder="director@luxuryboutique.com"
                    className="w-full bg-[#031820] border border-[#062B3A] focus:border-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-light block">
                    Boutique / Salon Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryFormData.boutiqueName}
                    onChange={(e) =>
                      setInquiryFormData({ ...inquiryFormData, boutiqueName: e.target.value })
                    }
                    placeholder="e.g. Maison de Haute Joaillerie"
                    className="w-full bg-[#031820] border border-[#062B3A] focus:border-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-light block">
                    City & Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryFormData.cityCountry}
                    onChange={(e) =>
                      setInquiryFormData({ ...inquiryFormData, cityCountry: e.target.value })
                    }
                    placeholder="e.g. Zurich, Switzerland"
                    className="w-full bg-[#031820] border border-[#062B3A] focus:border-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-light block">
                  Boutique Profile & Partnership Interest *
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryFormData.message}
                  onChange={(e) =>
                    setInquiryFormData({ ...inquiryFormData, message: e.target.value })
                  }
                  placeholder="Tell us about your salon location, curated brands, and desired ReiStella collections..."
                  className="w-full bg-[#031820] border border-[#062B3A] focus:border-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors font-light resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-xs tracking-[0.3em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] py-4 transition-colors font-medium shadow-xl"
              >
                Submit Partnership Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
