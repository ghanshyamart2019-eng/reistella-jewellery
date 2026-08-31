import React from 'react';
import { motion } from 'motion/react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { Sparkles } from 'lucide-react';
import blueImage from '../assets/BLUE.jpg';
import pinkImage from '../assets/PINK.jpg';

interface AboutPageProps {
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] border-t border-[#062B3A]">
      
      {/* ========================================================================= */}
      {/* 1. PAGE INTRODUCTION / HERO                                               */}
      {/* ========================================================================= */}
      <section className="pt-20 sm:pt-28 pb-14 sm:pb-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center space-y-4 mb-8 sm:mb-12">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
            THE ATELIER HERITAGE
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <h1 
            className="text-4xl sm:text-6xl text-white font-light tracking-wide uppercase leading-tight"
            style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
          >
            About ReiStella
          </h1>
          
          <div className="pt-2">
            <span className="text-xs sm:text-sm tracking-[0.35em] text-neutral-300 uppercase font-light">
              {BRAND_CONFIG.tagline}
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6"
        />
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN BRAND STORY — WHERE DESIGN MEETS EXPRESSION (BLUE.jpg)            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] bg-[#020F16] border border-[#062B3A] overflow-hidden relative group shadow-2xl">
              <img
                src={blueImage}
                alt="ReiStella Brand Essence"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Positioning Floating Tag */}
            <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-[#031820] border border-[#D4AF37]/40 p-5 sm:p-6 max-w-xs shadow-2xl backdrop-blur-md">
              <span className="text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-light block mb-1">
                POSITIONING
              </span>
              <p 
                className="text-base sm:text-lg text-white font-light tracking-wide uppercase"
                style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
              >
                {BRAND_CONFIG.positioning}
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-8 lg:pl-4">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
                BORN OF A VISION
              </span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-snug tracking-wide"
                style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
              >
                Where Design Meets Expression
              </h2>
            </div>

            <div className="h-[1px] w-14 bg-[#D4AF37]/50" />

            <div className="space-y-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                ReiStella was created from a singular vision: to make jewellery more than an accessory. We believe that jewellery can become a natural expression of identity, confidence, and personal style.
              </p>
              <p>
                Every piece is thoughtfully designed to complement the woman wearing it rather than define her—honouring her presence, elevating her silhouette, and allowing her individuality to speak with effortless poise.
              </p>
              <p>
                From private milestones to everyday moments of self-mastery, ReiStella invites you to embrace your inner brilliance and celebrate the beauty of becoming your most confident self.
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <span className="h-[1px] w-8 bg-[#D4AF37]/40" />
              <span className="text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                {BRAND_CONFIG.subTagline}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MORE THAN JEWELLERY (EMOTIONAL BRIDGE)                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-[#020F16] border-y border-[#062B3A]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 border border-[#D4AF37]/30 bg-[#031820] px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              MAISON PHILOSOPHY
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide uppercase leading-tight"
            style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
          >
            More Than Jewellery
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            <p>
              Jewellery can effortlessly complete a look. But the right piece can also become part of how you see yourself.
            </p>
            <p className="text-[#F3E5AB] italic">
              ReiStella celebrates that connection — between design, emotion, and individuality.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. A MANIFESTO OF LIGHT (PINK.jpg)                                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-light">
                A MANIFESTO OF LIGHT
              </span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-snug tracking-wide"
                style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
              >
                Where Brilliance Meets Individuality
              </h2>
            </div>

            <div className="h-[1px] w-14 bg-[#D4AF37]/50" />

            <div className="space-y-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                At ReiStella, light is our perpetual inspiration. Our collections are shaped by the interplay of sculptural form, fluid movement, and timeless elegance.
              </p>
              <p>
                We seek harmony in every silhouette, ensuring that each piece rests naturally on the body, catching ambient light with quiet grace rather than ostentation.
              </p>
              <p>
                It is a refined balance of modern aesthetic and personal expression: jewellery designed to move with you, speak for you, and endure with effortless sophistication.
              </p>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="aspect-[4/5] bg-[#020F16] border border-[#062B3A] overflow-hidden relative group shadow-2xl">
              <img
                src={pinkImage}
                alt="ReiStella Manifesto of Light"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-50" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
