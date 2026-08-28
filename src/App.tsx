import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SocialSidebar } from './components/SocialSidebar';
import { CityPartners } from './components/CityPartners';
import { BRAND_CONFIG } from './data/brandConfig';
import { Sparkles, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track scroll position to update header menu highlight automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'trending', 'collections', 'partners', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#031820] text-neutral-100 flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] relative">
      
      {/* 1. Global Header */}
      <Header activePage={activeSection} onNavigate={handleNavigate} />

      {/* 2. Global Floating Social Dock (Hidden only when viewing the Contact section) */}
      {activeSection !== 'contact' && <SocialSidebar />}

      {/* 3. Continuous Scroll Sections */}
      <main className="flex-1">
        
        {/* HOME SECTION */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020F16] pt-28">
          <div className="absolute inset-0 z-0">
            <img
              src={BRAND_CONFIG.images.heroReference}
              alt="ReiStella Jewellery Campaign"
              className="w-full h-full object-cover object-[center_35%] scale-105 opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031820] via-[#031820]/40 to-[#020F16]/60" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
            <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-light">{BRAND_CONFIG.subTagline}</span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl text-white font-light tracking-wide italic">
              {BRAND_CONFIG.tagline}
            </h1>
            <p className="text-neutral-300 font-light max-w-xl mx-auto text-sm sm:text-base">
              Explore the pinnacle of high-premium CZ imitation jewelry, designed for those who command their own destiny.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleNavigate('collections')}
                className="bg-transparent text-[#D4AF37] border border-[#D4AF37]/50 hover:border-[#D4AF37] px-8 py-3.5 text-xs tracking-[0.25em] uppercase transition-all"
              >
                View Collections
              </button>
              <button
                onClick={() => handleNavigate('partners')}
                className="bg-[#D4AF37] text-[#020F16] hover:bg-[#e6c158] px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-all"
              >
                Find Partner City
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-28 px-6 sm:px-12 bg-[#062B3A] border-b border-[#031820]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-light">The ReiStella Maison</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">About ReiStella</h2>
              <p className="text-neutral-200 font-light text-sm sm:text-base leading-relaxed">
                ReiStella was born from a singular vision: to craft premium CZ imitation jewelry that possesses the weight, sparkle, and emotional presence of genuine diamond heritage. We bypass traditional multi-tiered retail markups to bring you direct access to masterpieces designed for the modern sovereign individual.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-[#020F16] border border-[#D4AF37]/30 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800"
                alt="ReiStella Craftsmanship"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </section>

        {/* NEW & TRENDING SECTION */}
        <section id="trending" className="py-28 px-6 sm:px-12 bg-[#031820] border-b border-[#062B3A]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-light">Freshly Unveiled</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">New & Trending</h2>
              <p className="text-neutral-400 text-sm">Latest design ideas premiered across our social status updates.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-[#020F16] border border-[#D4AF37]/30 p-5 space-y-4 group">
                  <div className="relative aspect-square overflow-hidden bg-[#031820]">
                    <img
                      src={`https://images.unsplash.com/photo-${1515562141207 + item * 1000}-7a88fb7ce338?auto=format&fit=crop&q=80&w=800`}
                      alt="Trending piece"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif-luxury text-xl text-white font-light">The Sovereign Solitaire #{item}</h3>
                  <div className="pt-2 border-t border-[#062B3A] flex justify-between items-center text-xs">
                    <span className="text-[#D4AF37] uppercase tracking-wider">Inquire via WhatsApp</span>
                    <button onClick={() => handleNavigate('partners')} className="text-white hover:text-[#D4AF37] flex items-center space-x-1">
                      <span>Select City</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLLECTIONS SECTION */}
        <section id="collections" className="py-28 px-6 sm:px-12 bg-[#020F16] border-b border-[#062B3A]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-light">Curated Lookbooks</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">Collections</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Bridal & Wedding Sets', desc: 'High-carat equivalent center stones framed by micro-pave halos.' },
                { title: 'Everyday Elegance', desc: 'Subtle pendants and classic solitaire studs for daily sophistication.' },
                { title: 'Statement Cocktail Rings', desc: 'Bold, architectural pieces created to command attention.' },
                { title: 'Chandelier Earrings', desc: 'Cascading brilliance that catches every flicker of light.' }
              ].map((col, idx) => (
                <div key={idx} className="bg-[#031820] border border-[#D4AF37]/30 p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">Lookbook 0{idx + 1}</span>
                    <h3 className="font-serif-luxury text-2xl text-white font-light">{col.title}</h3>
                    <p className="text-sm text-neutral-300 font-light leading-relaxed">{col.desc}</p>
                  </div>
                  <button onClick={() => handleNavigate('partners')} className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase hover:text-white flex items-center space-x-1 pt-4 border-t border-[#062B3A]">
                    <span>Find Partner Catalog</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FIND YOUR REISTELLA SECTION (CITY PARTNERS) */}
        <section id="partners">
          <CityPartners />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-28 px-6 sm:px-12 bg-[#020F16]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-light">Get in Touch</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">Contact & Headquarters</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#031820] border border-[#D4AF37]/30 p-8 sm:p-10">
              <div className="space-y-6">
                <h3 className="font-serif-luxury text-2xl text-white font-light">ReiStella Headquarters</h3>
                <div className="space-y-4 text-xs text-neutral-300">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <span>concierge@reistella.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>+91 00000 00000</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#020F16] border border-[#D4AF37]/20 p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">Direct Purchasing</span>
                  <h4 className="font-serif-luxury text-xl text-white font-light">Looking to buy pieces?</h4>
                  <p className="text-xs text-neutral-300 font-light">Orders are managed exclusively through our authorized city partners via WhatsApp chats.</p>
                </div>
                <button
                  onClick={() => handleNavigate('partners')}
                  className="w-full bg-[#D4AF37] text-[#020F16] hover:bg-[#e6c158] py-3 text-xs tracking-[0.25em] uppercase font-medium transition-all text-center"
                >
                  Select City Partner
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#020F16] border-t border-[#062B3A] py-12 px-6 text-center text-xs text-neutral-400 tracking-widest uppercase">
        <p>© {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;