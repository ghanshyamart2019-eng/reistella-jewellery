import React, { useState } from 'react';
import { BRAND_CONFIG, PARTNER_CITIES } from '../data/brandConfig';
import { ReiStellaLogo } from '../components/ReiStellaLogo';
import {
  MessageCircle,
  Instagram,
  Facebook,
  Compass,
  ArrowUpRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface FindReistellaPageProps {
  onNavigate?: (pageId: string) => void;
}

export const FindReistellaPage: React.FC<FindReistellaPageProps> = () => {
  const [selectedCity, setSelectedCity] = useState<string>(PARTNER_CITIES[0].city);
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>('');
  const [clientContact, setClientContact] = useState<string>('');
  const [clientNote, setClientNote] = useState<string>('');

  const activeCityData =
    PARTNER_CITIES.find((c) => c.city === selectedCity) || PARTNER_CITIES[0];

  const handlePartnerInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] py-20 sm:py-32 border-t border-[#062B3A]">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 max-w-5xl mx-auto text-center space-y-4">
        <div className="flex justify-center mb-2">
          <ReiStellaLogo size="md" alt="ReiStella Emblem" />
        </div>
        <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
          THE MAISON NETWORK
        </span>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-white font-light tracking-wide">
          Find Your ReiStella
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto tracking-wider">
          Connect directly with a dedicated ReiStella ambassador, discover official partner locations, or arrange a private viewing.
        </p>
      </section>

      {/* Main Connection Modes */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Channel 1: WhatsApp Concierge */}
          <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3.5 bg-[#031820] border border-[#062B3A] text-[#D4AF37] w-fit">
                <MessageCircle className="w-6 h-6 stroke-[1.5]" />
              </div>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light block">
                DIRECT ADVISORY
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                WhatsApp Concierge
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Connect one-on-one with a dedicated ReiStella specialist for real-time video discovery, piece recommendations, and bespoke requests.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={BRAND_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] py-3.5 transition-colors font-medium shadow-lg"
              >
                <span>Connect On WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Channel 2: Instagram Digital Salon */}
          <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3.5 bg-[#031820] border border-[#062B3A] text-[#D4AF37] w-fit">
                <Instagram className="w-6 h-6 stroke-[1.5]" />
              </div>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light block">
                EDITORIAL ARCHIVE
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                Instagram Salon
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Follow our official visual journal for campaign films, backstage atelier glimpses, and styling inspiration.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={BRAND_CONFIG.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 text-xs tracking-[0.2em] uppercase text-neutral-200 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/60 py-3.5 transition-colors"
              >
                <span>@reistella_official</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* Channel 3: Facebook Community */}
          <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3.5 bg-[#031820] border border-[#062B3A] text-[#D4AF37] w-fit">
                <Facebook className="w-6 h-6 stroke-[1.5]" />
              </div>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light block">
                OFFICIAL COMMUNITY
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                Facebook Page
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Stay informed on new season launches, partner showcases, and exclusive brand milestones.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={BRAND_CONFIG.urls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 text-xs tracking-[0.2em] uppercase text-neutral-200 hover:text-white border border-[#062B3A] hover:border-[#D4AF37]/60 py-3.5 transition-colors"
              >
                <span>ReiStella Jewellery</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>

        {/* Partner Cities Section (Official Brand Cities: Ahmedabad, Vadodara / Baroda, Rajkot) */}
        <div className="bg-[#020F16] border border-[#062B3A] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="flex items-center space-x-2 text-[#D4AF37]">
              <Compass className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.35em] uppercase font-light">
                REGIONAL CONNECTIONS
              </span>
            </div>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Connect With A ReiStella Partner
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              We collaborate with select fine jewellery retail partners and private advisors across key partner cities. Select a city below to coordinate a private presentation.
            </p>
          </div>

          {/* City Selection Tabs */}
          <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-[#062B3A]">
            {PARTNER_CITIES.map((item) => {
              const isActive = selectedCity === item.city;
              return (
                <button
                  key={item.city}
                  onClick={() => {
                    setSelectedCity(item.city);
                    setInquirySent(false);
                  }}
                  className={`text-xs tracking-[0.25em] uppercase px-6 py-3 transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#031820] border-[#D4AF37] font-medium shadow-xl'
                      : 'bg-[#031820] text-neutral-300 hover:text-white border-[#062B3A] hover:border-[#D4AF37]/40'
                  }`}
                >
                  {item.displayName}
                </button>
              );
            })}
          </div>

          {/* City Details & Presentation Coordinator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                  {activeCityData.region}
                </span>
                <h4 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                  {activeCityData.displayName} Network
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {activeCityData.description}
                </p>
              </div>

              <div className="p-6 bg-[#031820] border border-[#062B3A] space-y-3">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] tracking-widest uppercase">
                    Partner Advisory Benefits
                  </span>
                </div>
                <ul className="text-xs text-neutral-300 space-y-2 font-light list-disc list-inside">
                  <li>Private showcase of signature pieces & new seasonal drops</li>
                  <li>Direct coordination with certified ReiStella jewellery curators</li>
                  <li>Custom size, fit, and personalization consultations</li>
                </ul>
              </div>

              <div>
                <a
                  href={`${BRAND_CONFIG.urls.whatsapp}&text=${encodeURIComponent(
                    `Hello ReiStella Concierge, I would like to arrange a private collection discovery in ${activeCityData.displayName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] px-8 py-3.5 font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire For {activeCityData.displayName}</span>
                </a>
              </div>
            </div>

            {/* Quick Request Box */}
            <div className="lg:col-span-6 bg-[#031820] border border-[#062B3A] p-8">
              {inquirySent ? (
                <div className="text-center py-8 space-y-4">
                  <div className="inline-flex p-3 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl text-white">Inquiry Received</h4>
                  <p className="text-xs text-neutral-300 font-light max-w-sm mx-auto">
                    Thank you, {clientName || 'valued guest'}. A ReiStella concierge will reach out to coordinate your {activeCityData.displayName} appointment.
                  </p>
                  <button
                    onClick={() => setInquirySent(false)}
                    className="text-xs text-[#D4AF37] uppercase tracking-widest underline pt-2"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerInquirySubmit} className="space-y-4">
                  <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light block">
                    REQUEST PRIVATE VIEWING IN {activeCityData.displayName}
                  </span>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Elena Roy"
                      className="w-full bg-[#020F16] border border-[#062B3A] px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-1.5">
                      Contact Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      required
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#020F16] border border-[#062B3A] px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-1.5">
                      Preferred Date / Styling Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={clientNote}
                      onChange={(e) => setClientNote(e.target.value)}
                      placeholder="e.g. Looking for signature necklace pieces..."
                      className="w-full bg-[#020F16] border border-[#062B3A] px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-[#031820] text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                  >
                    Submit Viewing Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
