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
  Eye, 
  CheckCircle2
} from 'lucide-react';
import { BRAND_CONFIG, JewelleryPiece } from '../data/brandConfig';

interface RoyalSuiteShowcaseProps {
  onSelectPiece?: (piece: JewelleryPiece) => void;
  onNavigateToFind?: () => void;
}

export const RoyalSuiteShowcase: React.FC<RoyalSuiteShowcaseProps> = ({ 
  onSelectPiece: _onSelectPiece,
  onNavigateToFind: _onNavigateToFind 
}) => {
  const [activeView, setActiveView] = useState<'video' | 'still'>('video');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>('necklace');
  const [ambientSoundActive, setAmbientSoundActive] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Synchronize video element play/pause state
  useEffect(() => {
    if (activeView === 'video' && videoRef.current) {
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay with sound might be blocked; fallback to muted autoplay
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch(() => setIsPlaying(false));
            }
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeView]);

  // Handle time update from real video
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 1;
      setCurrentTime(current);
      setDuration(dur);
      setVideoProgress((current / dur) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setVideoProgress((newTime / duration) * 100);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setVideoProgress(0);
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Gentle ambient chime sound synthesizer for luxury atmosphere
  const toggleAmbientSound = () => {
    if (ambientSoundActive) {
      setAmbientSoundActive(false);
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
      }
    } catch {
      setAmbientSoundActive(false);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '00:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
              THE CREATION IN MOTION & HIGH JEWELLERY SUITE
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide leading-tight">
            The Sovereign Solar Suite
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto tracking-wider">
            A statement of brilliance, movement and modern regal elegance. Experience our crowning high-jewellery creation in motion and still life.
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
          <div 
            ref={containerRef}
            className="lg:col-span-8 bg-[#031820] border border-[#062B3A] shadow-2xl relative overflow-hidden group"
          >
            
            {/* View 1: Real Motion Campaign Film Player */}
            {activeView === 'video' ? (
              <div className="relative aspect-[16/9] w-full bg-[#010B10] flex items-center justify-center overflow-hidden">
                {/* Official ReiStella Product Wearing Video */}
                <video
                  ref={videoRef}
                  src="/THE FINAL.mp4"
                  poster="/3.jpg"
                  playsInline
                  autoPlay
                  loop
                  muted={isMuted}
                  preload="metadata"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover object-center select-none"
                >
                  <source src="/THE FINAL.mp4" type="video/mp4" />
                  <source src="/THE FINAL.MP4" type="video/mp4" />
                  <source src="/THE%20FINAL.mp4" type="video/mp4" />
                  <source src="/the-final.mp4" type="video/mp4" />
                </video>

                {/* Film Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F16]/90 via-transparent to-[#020F16]/30 pointer-events-none" />

                {/* Film Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-[#020F16]/85 border border-[#D4AF37]/40 px-3 py-1.5 backdrop-blur-md z-10 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                    REISTELLA CAMPAIGN FILM • 4K
                  </span>
                </div>

                {/* Center Big Play/Pause Button overlay */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-18 h-18 rounded-full bg-[#D4AF37] text-[#031820] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.8)] transition-transform duration-300 hover:scale-110 focus:outline-none z-20 cursor-pointer"
                    aria-label="Play Campaign Film"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                )}

                {/* Video Playback Bar Controls */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#020F16]/95 border border-[#062B3A] p-3 backdrop-blur-md flex items-center justify-between gap-3 sm:gap-4 z-20">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-[#D4AF37] hover:text-white p-1.5 focus:outline-none transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={handleRestart}
                      className="text-neutral-400 hover:text-white p-1.5 focus:outline-none transition-colors"
                      title="Restart Video"
                      aria-label="Restart Video"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <button
                      onClick={toggleMute}
                      className={`p-1.5 focus:outline-none transition-colors ${
                        !isMuted ? 'text-[#D4AF37]' : 'text-neutral-400 hover:text-white'
                      }`}
                      title={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
                      aria-label={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
                    >
                      {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={toggleAmbientSound}
                      className={`hidden sm:inline-flex p-1.5 focus:outline-none transition-colors ${
                        ambientSoundActive ? 'text-[#D4AF37]' : 'text-neutral-400 hover:text-white'
                      }`}
                      title="Ambient Chime Atmosphere"
                      aria-label="Ambient Chime Atmosphere"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Scrubber Bar */}
                  <div 
                    onClick={handleSeek}
                    className="flex-1 max-w-md mx-2 h-2 bg-neutral-800 rounded-full overflow-hidden cursor-pointer relative"
                  >
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FFF2B2] transition-all duration-100"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] tracking-widest text-[#D4AF37] font-mono whitespace-nowrap">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>

                    <button
                      onClick={toggleFullscreen}
                      className="text-neutral-400 hover:text-white p-1.5 focus:outline-none transition-colors"
                      title="Fullscreen"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
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
                  aria-label="Inspect Royal Necklace"
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
                  aria-label="Inspect Solaris Ring"
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
                  aria-label="Inspect Chandelier Earrings"
                >
                  <span className="text-xs font-bold">3</span>
                </button>

                {/* Zoom Helper Tag */}
                <div className="absolute top-4 right-4 bg-[#020F16]/85 border border-[#D4AF37]/40 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] backdrop-blur-md pointer-events-none">
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
              <span>Available for private viewings & bridal consultations via ReiStella partners in Ahmedabad, Vadodara, and Rajkot.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

