import React from 'react';
import logoImg from '../assets/images/logo.png';

export interface ReiStellaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'header' | 'footer';
  className?: string;
  alt?: string;
}

/**
 * Official ReiStella Brand Logo.
 * Displays the exact uploaded logo.png image file with original design, colors, and transparency.
 */
export const ReiStellaLogo: React.FC<ReiStellaLogoProps> = ({
  size = 'header',
  className = '',
  alt = 'ReiStella Jewellery',
}) => {
  const sizeClasses = {
    header: 'h-[44px] sm:h-[48px] md:h-[52px] lg:h-[58px] max-h-[60px] w-auto',
    sm: 'h-[40px] sm:h-[44px] md:h-[48px] lg:h-[50px] w-auto',
    footer: 'h-[48px] sm:h-[52px] md:h-[56px] lg:h-[60px] w-auto',
    md: 'h-[44px] sm:h-[48px] md:h-[52px] w-auto',
    lg: 'h-[52px] sm:h-[60px] md:h-[68px] w-auto',
    xl: 'h-[75px] sm:h-[90px] md:h-[105px] w-auto',
    hero: 'h-[110px] sm:h-[135px] md:h-[155px] lg:h-[175px] w-auto',
  }[size] || 'h-[44px] sm:h-[50px] md:h-[58px] w-auto';

  return (
    <img
      src={logoImg}
      alt={alt}
      className={`object-contain transition-opacity duration-300 hover:opacity-95 ${sizeClasses} ${className}`}
      style={{
        objectFit: 'contain',
        backgroundColor: 'transparent',
      }}
      loading="eager"
      decoding="async"
    />
  );
};

export default ReiStellaLogo;