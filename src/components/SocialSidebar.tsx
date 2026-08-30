import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { Instagram } from 'lucide-react';

export const SocialSidebar: React.FC = () => {
  const buttonStyle = "flex items-center justify-center w-11 h-11 bg-transparent border border-[#D4AF37]/40 text-[#D4AF37] transition-all duration-300 ease-out hover:scale-125 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 z-50";

  return (
    <aside
      aria-label="Social Media Links"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Instagram */}
        <a href={BRAND_CONFIG.urls.instagram} target="_blank" rel="noopener noreferrer" className={buttonStyle} title="Instagram">
          <Instagram className="w-5 h-5 stroke-[1.5]" />
        </a>

        {/* Facebook */}
        <a href={BRAND_CONFIG.urls.facebook} target="_blank" rel="noopener noreferrer" className={buttonStyle} title="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>

        {/* Pinterest */}
        <a href={BRAND_CONFIG.urls.pinterest} target="_blank" rel="noopener noreferrer" className={buttonStyle} title="Pinterest">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.026-.653 2.561-.992 3.985-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a href={BRAND_CONFIG.urls.youtube} target="_blank" rel="noopener noreferrer" className={buttonStyle} title="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 7.1C2.5 7.1 2.4 5.3 3.2 4.5 4 3.7 4.9 3.7 5.4 3.6 8.3 3.4 12 3.4 12 3.4s3.7 0 6.6.2c.5.1 1.4.1 2.2.9.8.8.9 2.6.9 2.6s.2 2.1.2 4.2v1.8c0 2.1-.2 4.2-.2 4.2s-.1 1.8-.9 2.6c-.8.8-1.8.8-2.3.9-3.2.3-6.4.3-6.4.3s-3.7 0-6.6-.2c-.5-.1-1.4-.1-2.2-.9C2.4 19.3 2.5 17.5 2.5 17.5s-.2-2.1-.2-4.2v-1.8c0-2.1.2-4.2.2-4.2z"/>
            <path d="M9.7 15.5l6.3-3.8-6.3-3.8v7.6z"/>
          </svg>
        </a>

        {/* Threads */}
        <a href={BRAND_CONFIG.urls.threads} target="_blank" rel="noopener noreferrer" className={buttonStyle} title="Threads">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.186 24C5.463 24 0 18.537 0 11.814 0 5.091 5.463 0 12.186 0 18.91 0 24 5.091 24 11.814c0 2.164-.567 4.256-1.638 6.096l-1.748-1.018c.875-1.503 1.386-3.212 1.386-4.978 0-5.522-4.478-10-10-10-5.522 0-10 4.478-10 10 0 5.522 4.478 10 10 10 2.548 0 4.908-.95 6.721-2.529l1.328 1.517C17.77 22.844 15.086 24 12.186 24zm-1.042-5.45c-2.738 0-4.876-1.84-4.876-4.453 0-2.85 2.457-4.664 5.344-4.664 1.74 0 3.19.645 4.093 1.758-.168-2.617-2.072-4.498-4.524-4.498-2.227 0-4.043 1.488-4.43 3.633l-2.015-.453C5.297 6.941 7.773 4.67 11.18 4.67c3.67 0 6.453 2.68 6.453 6.64 0 .438-.035.89-.105 1.348 1.137.98 1.797 2.297 1.797 3.863 0 2.898-2.262 5.027-5.578 5.027-1.023 0-1.957-.234-2.605-.672v.012c-.004-.004.004-.008 0-.012l.002-.426zm.426-1.94c1.867 0 3.328-1.121 3.328-2.684 0-1.055-.664-1.988-1.746-2.457-.695-.3-1.465-.457-2.277-.457-1.977 0-3.328 1.184-3.328 2.766 0 1.637 1.465 2.832 4.023 2.832z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href={BRAND_CONFIG.urls.linkedin} target="_blank" rel="noopener noreferrer" className={buttonStyle} title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        </a>

        {/* X (Twitter) */}
        <a href={BRAND_CONFIG.urls.x} target="_blank" rel="noopener noreferrer" className={buttonStyle} title="X (Twitter)">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default SocialSidebar;