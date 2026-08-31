import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import {
  MessageCircle,
  Instagram,
  Facebook,
  Mail,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (pageId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Private VIP Consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#031820] text-neutral-100 selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] pt-20 sm:pt-28 pb-28 border-t border-[#062B3A]">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-14 max-w-4xl mx-auto text-center space-y-4 mb-8 sm:mb-12">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-light">
            THE CONCIERGE
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h1 
          className="text-4xl sm:text-6xl text-white font-light tracking-wide uppercase leading-tight"
          style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
        >
          Contact ReiStella
        </h1>

        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto tracking-wider leading-relaxed">
          Whether you desire a private viewing, styling advisory, or bespoke collection guidance, our ambassadors await your inquiry.
        </p>

        <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto pt-2" />
      </section>

      {/* Main Content: Info & Inquiry Form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Advisory Hours */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Priority Card */}
            <div className="bg-[#020F16] border border-[#062B3A] p-8 space-y-6 hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="flex items-center space-x-3 text-[#D4AF37]">
                <div className="p-3 bg-[#031820] border border-[#062B3A]">
                  <MessageCircle className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase font-medium">
                    IMMEDIATE ADVISORY
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-white font-light">
                    WhatsApp Concierge
                  </h3>
                </div>
              </div>

              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Receive direct video consultations, high-resolution closeups, and styling assistance directly via WhatsApp.
              </p>

              <a
                href={BRAND_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] py-3.5 transition-colors font-medium shadow-lg"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Other Channels List */}
            <div className="bg-[#020F16] border border-[#062B3A] p-8 space-y-6">
              <h3 className="font-serif-luxury text-xl text-white font-light border-b border-[#062B3A] pb-3">
                Official Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={BRAND_CONFIG.urls.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs text-neutral-300 hover:text-white group"
                >
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-4 h-4 text-[#D4AF37]" />
                    <span>Instagram @reistella_official</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={BRAND_CONFIG.urls.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs text-neutral-300 hover:text-white group"
                >
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-4 h-4 text-[#D4AF37]" />
                    <span>Facebook ReiStella Official</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center space-x-3 text-xs text-neutral-300 pt-2 border-t border-[#062B3A]/60">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>{BRAND_CONFIG.urls.contactEmail}</span>
                </div>
              </div>
            </div>

            {/* Advisory Schedule */}
            <div className="p-6 bg-[#031820] border border-[#062B3A] flex items-center space-x-4">
              <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <div className="text-xs text-neutral-400 font-light leading-relaxed">
                <span className="text-neutral-200 block font-normal">Maison Advisory Hours</span>
                Monday – Saturday • 09:00 – 21:00 GMT
              </div>
            </div>
          </div>

          {/* Right Column: Private Inquiry Form */}
          <div className="lg:col-span-7 bg-[#020F16] border border-[#062B3A] p-8 sm:p-12">
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-2 text-[#D4AF37]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-[0.35em] uppercase font-light">
                  PRIVATE INQUIRY
                </span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
                Send a Message to the Concierge
              </h3>
              <p className="text-xs text-neutral-400 font-light">
                Please provide your details below and a dedicated ReiStella specialist will connect with you within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-[#031820] border border-[#D4AF37]/50 p-8 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto stroke-[1.5]" />
                <h4 className="font-serif-luxury text-2xl text-white font-light">
                  Inquiry Dispatched
                </h4>
                <p className="text-xs text-neutral-300 font-light max-w-md mx-auto">
                  Thank you for reaching out to ReiStella. Your private concierge advisor will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Private VIP Consultation',
                      message: ''
                    });
                  }}
                  className="text-xs text-[#D4AF37] uppercase tracking-widest underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lady Vivienne Claire"
                    className="w-full bg-[#031820] border border-[#062B3A] px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vivienne@example.com"
                      className="w-full bg-[#031820] border border-[#062B3A] px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-2">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#031820] border border-[#062B3A] px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-2">
                    Inquiry Nature
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#031820] border border-[#062B3A] px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Private VIP Consultation">Private VIP Consultation</option>
                    <option value="Signature Piece Acquisition">Signature Piece Acquisition</option>
                    <option value="Regional Partner Showroom Appointment">Regional Partner Showroom Appointment</option>
                    <option value="Bespoke Styling Guidance">Bespoke Styling Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-neutral-400 mb-2">
                    Message or Piece References
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the pieces you admire or your preferred styling requirements..."
                    className="w-full bg-[#031820] border border-[#062B3A] px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-[#031820] text-xs uppercase tracking-[0.25em] font-medium transition-colors shadow-lg"
                >
                  Transmit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
