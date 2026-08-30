import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Sparkles, 
  ArrowUpRight, 
  Film,
  RotateCcw,
  Compass
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface ReiStellaMovieSectionProps {
  onNavigate: (pageId: string) => void;
}

export const ReiStellaMovieSection: React.FC<ReiStellaMovieSectionProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [durationTime, setDurationTime] = useState<string>('0:00');
  const [showControls, setShowControls] = useState<boolean>(true);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 0;
    setProgress(duration > 0 ? (current / duration) * 100 : 0);
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDurationTime(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout) clearTimeout(controlsTimeout);
    const timeout = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
    setControlsTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeout) clearTimeout(controlsTimeout);
    };
  }, [controlsTimeout]);

  return (
    <section 
      id="reistella-movie-section" 
      className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#020F16] border-b border-[#062B3A] relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2.5 bg-[#031820] border border-[#D4AF37]/40 px-4 py-1.5 backdrop-blur-md">
            <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
              MAISON CINEMA • EXCLUSIVE PREMIERE
            </span>
          </div>

          <h3 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide leading-tight">
            THE REISTELLA MOVIE
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 font-light tracking-[0.18em] uppercase max-w-xl mx-auto">
            A Sovereign Tale of Brilliance, Identity & Modern Grace
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Step into the cinematic universe of ReiStella. Experience the delicate harmony of light, architectural precision, and the sovereign spirit of those who dare to shine.
          </p>
        </div>

        {/* Cinematic Film Player Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          className="relative max-w-5xl mx-auto bg-[#031820] border border-[#062B3A] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group"
        >
          {/* Main Video Frame */}
          <div className="relative aspect-[16/9] w-full bg-[#01080D] flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              src="/THE FINAL.mp4"
              poster={BRAND_CONFIG.images.heroReference}
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
              <source src="/THE%20FINAL.MP4" type="video/mp4" />
              <source src="/the-final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020F16]/90 via-transparent to-[#020F16]/40 pointer-events-none" />

            {/* Top Bar Badges */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none z-10">
              <div className="flex items-center space-x-2 bg-[#020F16]/85 border border-[#D4AF37]/40 px-3 py-1.5 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                  REISTELLA CINEMA • 4K ULTRA HD
                </span>
              </div>

              <div className="hidden sm:flex items-center space-x-2 bg-[#020F16]/85 border border-[#062B3A] px-3 py-1.5 backdrop-blur-md text-[9px] tracking-[0.2em] text-neutral-300 uppercase">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>OFFICIAL MAISON FILM</span>
              </div>
            </div>

            {/* Center Big Play/Pause Overlay */}
            <div 
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
                !isPlaying || showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#031820]/80 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] backdrop-blur-md transition-transform transform hover:scale-110">
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
                )}
              </div>
            </div>

            {/* Bottom Luxury Custom Control Bar */}
            <div 
              className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#020F16] via-[#020F16]/90 to-transparent transition-opacity duration-300 z-20 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Progress Timeline Scrubber */}
              <div 
                onClick={handleSeek}
                className="relative h-1.5 sm:h-2 bg-neutral-800/80 hover:bg-neutral-700/80 cursor-pointer rounded-none mb-4 group/seek"
              >
                <div 
                  className="absolute top-0 left-0 bottom-0 bg-[#D4AF37] transition-all relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/seek:opacity-100 shadow-md transition-opacity" />
                </div>
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-neutral-300">
                {/* Left Controls: Play, Restart, Time */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <button
                    onClick={togglePlay}
                    className="p-2 text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
                    aria-label={isPlaying ? 'Pause Movie' : 'Play Movie'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    className="p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none hidden sm:inline-flex"
                    aria-label="Restart Movie"
                    title="Restart"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] sm:text-xs font-mono tracking-wider text-neutral-400">
                    <span className="text-white">{currentTime}</span> / <span>{durationTime}</span>
                  </div>
                </div>

                {/* Right Controls: Audio Mute, Fullscreen */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={toggleMute}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-[#031820]/80 border border-[#062B3A] hover:border-[#D4AF37]/50 text-xs text-neutral-200 hover:text-[#D4AF37] transition-colors"
                    aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-red-400" />
                        <span className="text-[10px] tracking-widest uppercase hidden sm:inline">UNMUTE SOUND</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-[10px] tracking-widest uppercase hidden sm:inline">SOUND ON</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={toggleFullscreen}
                    className="p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none"
                    aria-label="Toggle Fullscreen"
                    title="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Film Description Card & Direct Navigation Underneath */}
          <div className="p-6 sm:p-8 bg-[#031820] border-t border-[#062B3A] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
                MAISON CINEMATIC VISION
              </span>
              <p className="font-serif-luxury text-lg sm:text-xl text-white font-light italic">
                "Born of a vision. Created for those who dare to shine."
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
              <button
                onClick={() => onNavigate('collections')}
                className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#031820] bg-[#D4AF37] hover:bg-[#E5C158] px-6 py-3 font-semibold transition-colors shadow-md"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('find')}
                className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-white hover:text-[#D4AF37] border border-[#062B3A] hover:border-[#D4AF37] px-6 py-3 bg-[#020F16] transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>FIND A PARTNER</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
