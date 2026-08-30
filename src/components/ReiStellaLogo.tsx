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
    header: 'h-12 sm:h-14 md:h-16 w-auto',
    sm: 'h-8 sm:h-10 w-auto',
    footer: 'h-12 sm:h-14 md:h-16 w-auto',
    md: 'h-10 sm:h-12 md:h-14 w-auto',
    lg: 'h-14 sm:h-16 md:h-20 w-auto',
    xl: 'h-20 sm:h-24 md:h-28 w-auto',
    hero: 'h-28 sm:h-36 md:h-44 w-auto',
  }[size] || 'h-12 sm:h-14 md:h-16 w-auto';

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