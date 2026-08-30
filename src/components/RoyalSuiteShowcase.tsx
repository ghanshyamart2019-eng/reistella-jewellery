import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Maximize2, 
  MessageCircle, 
  ArrowUpRight, 
  Eye, 
  Layers,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { BRAND_CONFIG, JewelleryPiece } from '../data/brandConfig';

interface RoyalSuiteShowcaseProps {
  onSelectPiece?: (piece: JewelleryPiece) => void;
  onNavigateToFind?: () => void;
}

export const RoyalSuiteShowcase: React.FC<RoyalSuiteShowcaseProps> = ({ 
  onSelectPiece,
  onNavigateToFind 
}) => {
  const [activeView, setActiveView] = useState<'video' | 'still'>('video');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>('necklace');
  const [ambientSoundActive, setAmbientSoundActive] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Simulated video playback timer & loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && activeView === 'video') {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1.2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeView]);

  // Gentle ambient chime sound synthesizer for luxury atmosphere
  const toggleAmbientSound = () => {
    if (ambientSoundActive) {
      setAmbientSoundActive(false);
      setIsMuted(true);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioCtx();
        }
        if (audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }

        // Play gentle luxury resonant glass/crystal chime
        const ctx = audioContextRef.current;
        const now = ctx.currentTime;
        
        [587.33, 880.0, 1174.66, 1760.0].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.15);
          gain.gain.setValueAtTime(0.04, now + i * 0.15);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.15 + 2.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.15);
          osc.stop(now + i * 0.15 + 2.6);
        });

        setAmbientSoundActive(true);
        setIsMuted(false);
      }
    } catch {
      setAmbientSoundActive(false);
    }
  };

  const suiteDetails = [
    {
      id: 'necklace',
      name: 'The Sovereign Solar Royal Necklace',
      type: 'High-Jewellery Centerpiece',
      gemstones: 'Canary Yellow Sapphires & Brilliant-cut Pavé Diamonds',
      description: 'An articulated cascading grand collar set with oval and pear-cut canary yellow sapphires, encircled by dual halos of marquise and brilliant diamonds with suspended chandelier droplets.',
      craftsmanship: '280+ hand-set gemstones, 18K white and yellow gold armature, articulated kinetic drape.'
    },
    {
      id: 'earrings',
      name: 'Étoile Chandelier Drop Earrings',
      type: 'Matching Chandelier Suite',
      gemstones: 'Faceted Yellow Sapphires & Cascading Diamond Drops',
      description: 'Dual-tiered architectural chandelier earrings engineered with featherweight poise, mirroring the grand floral motifs of the centerpiece collar.',
      craftsmanship: 'Articulated links allowing 360-degree luminescence under evening lights.'
    },
    {
      id: 'ring',
      name: 'Solaris Bloom Statement Ring',
      type: 'Cocktail Statement Ring',
      gemstones: 'Canary Yellow Sapphire Center & Diamond Petals',
      description: 'A radiant floral blossom ring crowned with an intense oval yellow sapphire surrounded by eight pear-cut diamond petals on a diamond-set band.',
      craftsmanship: 'Signature crown basket mount ensuring maximum light dispersion and fire.'
    }
  ];

  const selectedPieceData = suiteDetails.find(p => p.id === activeHotspot) || suiteDetails[0];

  const whatsappInquiryUrl = `${BRAND_CONFIG.urls.whatsapp}&text=${encodeURIComponent(
    `Hello ReiStella Concierge, I would love to enquire about the Royal Yellow Sapphire & Diamond Suite (Necklace, Chandelier Earrings, and Ring) seen in the Campaign Film.`
  )}`;

  return (
    <section id="royal-suite-spotlight" className="py-20 sm:py-28 bg-[#020F16] text-white border-y border-[#062B3A] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#062B3A]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 bg-[#031820] border border-[#D4AF37]/40 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              HIGH JEWELLERY CAMPAIGN & CINEMATIC FILM
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide leading-tight">
            The Sovereign Solar Suite
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto tracking-wider">
            Experience our crowning high-jewellery creation in motion and still life. A symphony of fiery canary yellow sapphires and cascading brilliant-cut diamonds.
          </p>

          {/* Mode Switcher Buttons */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveView('video')}
              className={`inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase px-6 py-3 transition-all duration-300 border ${
                activeView === 'video'
                  ? 'bg-[#D4AF37] text-[#031820] border-[#D4AF37] font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                  : 'bg-[#031820] text-neutral-300 hover:text-white border-[#062B3A] hover:border-[#D4AF37]/50'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Motion Campaign Film</span>
            </button>

            <button
              onClick={() => setActiveView('still')}
              className={`inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase px-6 py-3 transition-all duration-300 border ${
                activeView === 'still'
                  ? 'bg-[#D4AF37] text-[#031820] border-[#D4AF37] font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                  : 'bg-[#031820] text-neutral-300 hover:text-white border-[#062B3A] hover:border-[#D4AF37]/50'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>High-Jewellery Suite Still</span>
            </button>
          </div>
        </div>

        {/* Master Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Top: Interactive Player & Showcase Stage */}
          <div className="lg:col-span-8 bg-[#031820] border border-[#062B3A] shadow-2xl relative overflow-hidden group">
            
            {/* View 1: Motion Campaign Film Player */}
            {activeView === 'video' ? (
              <div className="relative aspect-[16/9] w-full bg-[#010B10] flex items-center justify-center overflow-hidden">
                {/* Simulated Campaign Video Scene with Muse in Royal Red Sari and Yellow Sapphire Suite */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 1280 720" 
                    className="w-full h-full object-cover select-none"
                  >
                    <defs>
                      {/* Deep Navy Velvet Drape Background */}
                      <linearGradient id="bgVelvet" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#021018" />
                        <stop offset="40%" stopColor="#0B2332" />
                        <stop offset="70%" stopColor="#041520" />
                        <stop offset="100%" stopColor="#01080D" />
                      </linearGradient>

                      {/* Velvet Fabric Folds */}
                      <linearGradient id="foldLight" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#071E2C" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#123B52" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#04111A" stopOpacity="0.9" />
                      </linearGradient>

                      {/* Red Sari Silk & Zari */}
                      <linearGradient id="sariRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#871A24" />
                        <stop offset="50%" stopColor="#680E18" />
                        <stop offset="100%" stopColor="#46060D" />
                      </linearGradient>

                      <linearGradient id="goldZari" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="50%" stopColor="#FFF2B2" />
                        <stop offset="100%" stopColor="#AA820A" />
                      </linearGradient>

                      {/* Yellow Sapphire Luminescence */}
                      <radialGradient id="sapphireCanary" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFF4A3" />
                        <stop offset="40%" stopColor="#FFD700" />
                        <stop offset="85%" stopColor="#E6A800" />
                        <stop offset="100%" stopColor="#9E6E00" />
                      </radialGradient>

                      {/* Diamond Shimmer */}
                      <radialGradient id="diamondWhite" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="50%" stopColor="#E2F1FF" />
                        <stop offset="100%" stopColor="#A8C8E6" />
                      </radialGradient>
                    </defs>

                    {/* Background Backdrop */}
                    <rect width="1280" height="720" fill="url(#bgVelvet)" />
                    
                    {/* Draped Curtains / Fabric texture */}
                    <path d="M 0 0 Q 300 200 150 720 L 0 720 Z" fill="url(#foldLight)" />
                    <path d="M 1280 0 Q 980 250 1150 720 L 1280 720 Z" fill="url(#foldLight)" />
                    
                    {/* Model Portrait Silhouette */}
                    {/* Shoulders & Sari Drape */}
                    <path d="M 380 720 C 420 540, 520 480, 640 480 C 760 480, 860 540, 900 720 Z" fill="url(#sariRed)" />
                    {/* Golden Zari Border on Saree */}
                    <path d="M 390 720 Q 560 540 680 720" stroke="url(#goldZari)" strokeWidth="32" fill="none" strokeDasharray="6 3" />
                    <path d="M 380 720 Q 560 540 680 720" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.6" />

                    {/* Neck and Décolletage */}
                    <path d="M 570 330 C 570 420, 590 470, 640 470 C 690 470, 710 420, 710 330 Z" fill="#C99478" />
                    {/* Collarbone shadows */}
                    <path d="M 590 440 Q 640 460 690 440" stroke="#9C6B52" strokeWidth="3" fill="none" opacity="0.4" />

                    {/* Head & Facial Profile */}
                    <ellipse cx="640" cy="270" rx="90" ry="115" fill="#D49E82" />
                    {/* Hair Updo */}
                    <path d="M 540 250 C 530 160, 750 160, 740 250 C 750 200, 730 130, 640 130 C 550 130, 530 200, 540 250 Z" fill="#1A110E" />
                    <ellipse cx="640" cy="160" rx="60" ry="40" fill="#140D0B" />

                    {/* Facial Features */}
                    {/* Eyebrows */}
                    <path d="M 585 240 Q 610 232 625 242" stroke="#2B1810" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                    <path d="M 655 242 Q 670 232 695 240" stroke="#2B1810" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                    {/* Almond Eyes with Eyeliner */}
                    <path d="M 590 255 Q 610 248 625 257" fill="#1A0D08" />
                    <path d="M 655 257 Q 670 248 690 255" fill="#1A0D08" />
                    <circle cx="610" cy="254" r="3" fill="#FFF" opacity="0.9" />
                    <circle cx="670" cy="254" r="3" fill="#FFF" opacity="0.9" />
                    {/* Sculpted Nose */}
                    <path d="M 640 248 L 637 285 Q 640 292 645 288" stroke="#AA765C" strokeWidth="2.5" fill="none" />
                    {/* Lips */}
                    <path d="M 622 315 Q 640 310 658 315 Q 640 330 622 315" fill="#B85252" />

                    {/* ======================================================== */}
                    {/* THE ROYAL JEWELLERY SUITE ON MODEL                      */}
                    {/* ======================================================== */}

                    {/* 1. Grand Yellow Sapphire & Diamond Chandelier Earrings */}
                    {/* Left Earring */}
                    <g transform="translate(535, 275) scale(0.65)">
                      <circle cx="0" cy="0" r="10" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                      <ellipse cx="0" cy="24" rx="14" ry="18" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="2" />
                      {/* Chandelier dangles */}
                      <path d="M -15 45 L 0 65 L 15 45" stroke="#FFF" strokeWidth="2" fill="none" />
                      <circle cx="-15" cy="48" r="4" fill="url(#sapphireCanary)" />
                      <circle cx="0" cy="68" r="6" fill="url(#sapphireCanary)" />
                      <circle cx="15" cy="48" r="4" fill="url(#sapphireCanary)" />
                    </g>

                    {/* Right Earring */}
                    <g transform="translate(745, 275) scale(0.65)">
                      <circle cx="0" cy="0" r="10" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                      <ellipse cx="0" cy="24" rx="14" ry="18" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="2" />
                      {/* Chandelier dangles */}
                      <path d="M -15 45 L 0 65 L 15 45" stroke="#FFF" strokeWidth="2" fill="none" />
                      <circle cx="-15" cy="48" r="4" fill="url(#sapphireCanary)" />
                      <circle cx="0" cy="68" r="6" fill="url(#sapphireCanary)" />
                      <circle cx="15" cy="48" r="4" fill="url(#sapphireCanary)" />
                    </g>

                    {/* 2. THE GRAND SOVEREIGN ROYAL NECKLACE */}
                    <g id="svg-grand-necklace">
                      {/* Base Collar Arc with Diamonds */}
                      <path d="M 565 410 C 585 475, 695 475, 715 410" stroke="url(#goldZari)" strokeWidth="12" fill="none" strokeLinecap="round" />
                      <path d="M 565 410 C 585 475, 695 475, 715 410" stroke="#FFF" strokeWidth="4" strokeDasharray="3 4" fill="none" />

                      {/* Cascading Chandelier Drops on Neckline */}
                      {/* Centerpiece Rosette Cluster */}
                      <g transform="translate(640, 470)">
                        {/* Center Yellow Sapphire Blossom */}
                        <circle cx="0" cy="0" r="12" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="2" />
                        {/* 8 Surrounding Diamond Petals */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                          const rad = (angle * Math.PI) / 180;
                          return (
                            <ellipse 
                              key={i}
                              cx={Math.cos(rad) * 18} 
                              cy={Math.sin(rad) * 18} 
                              rx="5" 
                              ry="8" 
                              transform={`rotate(${angle} ${Math.cos(rad) * 18} ${Math.sin(rad) * 18})`}
                              fill="url(#diamondWhite)" 
                              stroke="#D4AF37" 
                              strokeWidth="1"
                            />
                          );
                        })}

                        {/* Hanging Grand Pear Chandelier */}
                        <path d="M 0 25 L 0 55" stroke="url(#goldZari)" strokeWidth="3" />
                        <ellipse cx="0" cy="65" rx="10" ry="16" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="2" />
                        <circle cx="-16" cy="50" r="5" fill="url(#diamondWhite)" />
                        <circle cx="16" cy="50" r="5" fill="url(#diamondWhite)" />
                      </g>

                      {/* Left Lateral Clusters */}
                      <g transform="translate(605, 458) scale(0.85)">
                        <circle cx="0" cy="0" r="9" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                        <path d="M 0 15 L 0 35" stroke="url(#goldZari)" strokeWidth="2.5" />
                        <ellipse cx="0" cy="42" rx="7" ry="11" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                      </g>
                      <g transform="translate(575, 435) scale(0.7)">
                        <circle cx="0" cy="0" r="8" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                        <ellipse cx="0" cy="28" rx="6" ry="9" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                      </g>

                      {/* Right Lateral Clusters */}
                      <g transform="translate(675, 458) scale(0.85)">
                        <circle cx="0" cy="0" r="9" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                        <path d="M 0 15 L 0 35" stroke="url(#goldZari)" strokeWidth="2.5" />
                        <ellipse cx="0" cy="42" rx="7" ry="11" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                      </g>
                      <g transform="translate(705, 435) scale(0.7)">
                        <circle cx="0" cy="0" r="8" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                        <ellipse cx="0" cy="28" rx="6" ry="9" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="1.5" />
                      </g>
                    </g>

                    {/* 3. Hand with Solaris Bloom Cocktail Ring */}
                    <g transform="translate(780, 520)">
                      {/* Gracefully posed hand touching saree */}
                      <path d="M 0 40 Q 20 0 50 10 Q 70 30 60 70 Q 30 90 0 80 Z" fill="#D49E82" opacity="0.95" />
                      {/* Cocktail Ring on Index Finger */}
                      <circle cx="35" cy="25" r="10" fill="url(#sapphireCanary)" stroke="#FFF" strokeWidth="2" />
                      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        return (
                          <circle 
                            key={i}
                            cx={35 + Math.cos(rad) * 14} 
                            cy={25 + Math.sin(rad) * 14} 
                            r="3.5" 
                            fill="url(#diamondWhite)" 
                            stroke="#D4AF37" 
                            strokeWidth="0.8" 
                          />
                        );
                      })}
                    </g>

                    {/* Animated Light Shimmer Flare moving across necklace */}
                    {isPlaying && (
                      <g transform={`translate(${550 + (videoProgress * 2.2)}, 440)`}>
                        <circle cx="0" cy="0" r="8" fill="#FFF" opacity="0.8" />
                        <path d="M -25 0 L 25 0 M 0 -25 L 0 25" stroke="#FFF" strokeWidth="2" opacity="0.9" />
                        <path d="M -15 -15 L 15 15 M -15 15 L 15 -15" stroke="#FFF2A3" strokeWidth="1.5" opacity="0.7" />
                      </g>
                    )}
                  </svg>
                </div>

                {/* Film Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F16] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Film Stamp */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-[#020F16]/85 border border-[#D4AF37]/40 px-3 py-1.5 backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                    REISTELLA CINEMATIC CAMPAIGN • 4K
                  </span>
                </div>

                {/* Center Big Play/Pause Button when paused */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-18 h-18 rounded-full bg-[#D4AF37] text-[#031820] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.8)] transition-transform duration-300 hover:scale-110 focus:outline-none"
                    aria-label="Play Film"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                )}

                {/* Video Playback Bar Controls */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#020F16]/90 border border-[#062B3A] p-3 backdrop-blur-md flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-[#D4AF37] hover:text-white p-1.5 focus:outline-none transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={() => setVideoProgress(0)}
                      className="text-neutral-400 hover:text-white p-1.5 focus:outline-none transition-colors"
                      title="Replay"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <button
                      onClick={toggleAmbientSound}
                      className={`p-1.5 focus:outline-none transition-colors ${
                        ambientSoundActive ? 'text-[#D4AF37]' : 'text-neutral-400 hover:text-white'
                      }`}
                      title="Atmospheric Luxury Chime Sound"
                    >
                      {ambientSoundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Scrubber Bar */}
                  <div className="flex-1 max-w-md mx-2 h-1.5 bg-neutral-800 rounded-full overflow-hidden cursor-pointer">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FFF2B2] transition-all duration-100"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>

                  <div className="text-[11px] tracking-widest text-[#D4AF37] font-mono">
                    00:{Math.floor(videoProgress * 0.1).toString().padStart(2, '0')} / 00:10
                  </div>
                </div>
              </div>
            ) : (
              /* View 2: High-Jewellery Still Photo View with Interactive Inspection */
              <div className="relative aspect-[16/9] w-full bg-[#020F16] flex items-center justify-center overflow-hidden select-none group">
                <img
                  src={BRAND_CONFIG.images.heroReference}
                  alt="The Sovereign Solar Royal High-Jewellery Suite"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Luxury Gradient Frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F16]/80 via-transparent to-[#020F16]/40 pointer-events-none" />

                {/* Hotspot Indicators on the Real Jewellery Image */}
                <button
                  onClick={() => setActiveHotspot('necklace')}
                  className={`absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    activeHotspot === 'necklace' 
                      ? 'bg-[#D4AF37] text-[#031820] border-white scale-125 shadow-[0_0_25px_rgba(212,175,55,1)] ring-4 ring-[#D4AF37]/30' 
                      : 'bg-[#020F16]/85 text-[#D4AF37] border-[#D4AF37]/80 hover:scale-115 hover:bg-[#D4AF37] hover:text-[#031820]'
                  }`}
                  title="Inspect Royal Necklace"
                >
                  <span className="text-xs font-bold">1</span>
                </button>

                <button
                  onClick={() => setActiveHotspot('ring')}
                  className={`absolute top-[72%] left-[34%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    activeHotspot === 'ring' 
                      ? 'bg-[#D4AF37] text-[#031820] border-white scale-125 shadow-[0_0_25px_rgba(212,175,55,1)] ring-4 ring-[#D4AF37]/30' 
                      : 'bg-[#020F16]/85 text-[#D4AF37] border-[#D4AF37]/80 hover:scale-115 hover:bg-[#D4AF37] hover:text-[#031820]'
                  }`}
                  title="Inspect Solaris Ring"
                >
                  <span className="text-xs font-bold">2</span>
                </button>

                <button
                  onClick={() => setActiveHotspot('earrings')}
                  className={`absolute top-[40%] left-[72%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    activeHotspot === 'earrings' 
                      ? 'bg-[#D4AF37] text-[#031820] border-white scale-125 shadow-[0_0_25px_rgba(212,175,55,1)] ring-4 ring-[#D4AF37]/30' 
                      : 'bg-[#020F16]/85 text-[#D4AF37] border-[#D4AF37]/80 hover:scale-115 hover:bg-[#D4AF37] hover:text-[#031820]'
                  }`}
                  title="Inspect Chandelier Earrings"
                >
                  <span className="text-xs font-bold">3</span>
                </button>

                {/* Zoom Helper Tag */}
                <div className="absolute top-4 right-4 bg-[#020F16]/85 border border-[#D4AF37]/40 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] backdrop-blur-md">
                  High-Jewellery Still Photo
                </div>
              </div>
            )}
          </div>

          {/* Right / Bottom: Editorial Haute Joaillerie Specifications */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Interactive Piece Selector Tabs */}
            <div className="flex items-center space-x-2 border-b border-[#062B3A] pb-3">
              {suiteDetails.map((piece, index) => (
                <button
                  key={piece.id}
                  onClick={() => setActiveHotspot(piece.id)}
                  className={`text-[11px] tracking-[0.2em] uppercase py-1.5 px-3 transition-all duration-300 ${
                    activeHotspot === piece.id
                      ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  0{index + 1}. {piece.id.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Selected Piece Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPieceData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 bg-[#031820] border border-[#062B3A] p-6 sm:p-7"
              >
                <div className="space-y-1">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-light">
                    {selectedPieceData.type}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                    {selectedPieceData.name}
                  </h3>
                </div>

                <div className="p-3 bg-[#020F16] border border-[#062B3A] space-y-1">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Gemstone Specification</div>
                  <div className="text-xs text-[#D4AF37] font-medium">{selectedPieceData.gemstones}</div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed tracking-wide">
                  {selectedPieceData.description}
                </p>

                <div className="pt-2 border-t border-[#062B3A] space-y-1">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Craftsmanship Signature</div>
                  <div className="text-xs text-neutral-200 font-light leading-relaxed">{selectedPieceData.craftsmanship}</div>
                </div>

                {/* Direct WhatsApp Concierge CTA */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-[#031820] font-semibold text-xs tracking-[0.25em] uppercase py-3.5 px-6 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>ENQUIRE ON WHATSAPP</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Guaranteed Authenticity & Private Viewing */}
            <div className="bg-[#020F16] border border-[#062B3A] p-4 flex items-center space-x-3 text-xs text-neutral-300 font-light">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <span>Available for private viewings & bridal consultations via ReiStella Flagship Partners in Ahmedabad, Vadodara, and Rajkot.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
