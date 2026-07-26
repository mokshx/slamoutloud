'use client';

import { useRef, useEffect, useState } from 'react';

function LazyVideo({ src, poster }: { src?: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const val = Number(e.target.value);
    video.currentTime = (val / 100) * video.duration;
    setProgress(val);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  // Centre play button: only when paused
  const showCentre = !isPlaying;
  // Controls bar: only while playing AND hovering
  const showControls = isPlaying && isHovered;

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden bg-black cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlayPause}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={isVisible ? src : undefined}
        poster={poster}
        preload="none"
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={() => {
          const v = videoRef.current;
          if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
        }}
        onLoadedMetadata={() => {
          const v = videoRef.current;
          if (v) setDuration(v.duration);
        }}
        className="w-full h-full object-cover"
      />

      {/* Gradient scrim — only when controls are visible */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none transition-opacity duration-200 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Centre play button — only when paused */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
          showCentre ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="flex items-center justify-center rounded-full border border-white/50 bg-black/30 backdrop-blur-sm"
          style={{ width: 52, height: 52 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5 2.5L15.5 9L5 15.5V2.5Z" fill="white" />
          </svg>
        </div>
      </div>

{/*  
      {isVisible && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="rounded-full border-2 border-white/30 border-t-white animate-spin"
            style={{ width: 28, height: 28 }}
          />
        </div>
      )} */}

      {/* Bottom controls — only while playing + hovering */}
      <div
        className={`absolute bottom-0 left-0 right-0 px-3 pb-3 pt-6 transition-opacity duration-200 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="w-full mb-2 accent-white"
          style={{
            height: 3,
            cursor: 'pointer',
            appearance: 'none' as const,
            background: `linear-gradient(to right, white ${progress}%, rgba(255,255,255,0.3) ${progress}%)`,
            borderRadius: 2,
            outline: 'none',
            touchAction: 'none',
          }}
        />

        <div className="flex items-center gap-3">
          <button onClick={handlePlayPause} className="text-white hover:text-white/80 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="1" width="4" height="14" rx="1.5" fill="currentColor" />
              <rect x="10" y="1" width="4" height="14" rx="1.5" fill="currentColor" />
            </svg>
          </button>

          <button onClick={handleMute} className="text-white hover:text-white/80 transition-colors">
            {isMuted ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 5.5H4.5L8 2v12l-3.5-3.5H2V5.5Z" fill="currentColor" />
                <line x1="11" y1="5" x2="15" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="15" y1="5" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 5.5H4.5L8 2v12l-3.5-3.5H2V5.5Z" fill="currentColor" />
                <path d="M10.5 5.5C11.5 6.5 12 7.2 12 8s-.5 1.5-1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12.5 3.5C14.2 5.2 15 6.5 15 8s-.8 2.8-2.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {duration > 0 && (
            <span className="text-white/70 text-xs tabular-nums">
              {formatTime((progress / 100) * duration)} / {formatTime(duration)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const highlights = [
  {
    image: "/ch_numbers.png",
    videoUrl: "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/Numbers_Supriya.webm",
    name: "Supriya",
    description: "Worn down by comparison, Supriya describes her creativity and joy fading under the weight of expectations. Supriya was part of Slam Out Loud's programs from Grade 6. She went on to graduate from Ashoka University on a full scholarship, studying liberal arts and creative writing. She is now working as a creative writer at an education company."
  },
  {
    image: "/ch_abbas_tedx.png",
    videoUrl: "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/Abbas_Tedx.webm",
    name: "Abbas",
    description: "Questions the cost of hiding one's dreams and fatigue within the relentless pace of a judgmental society. Abbas joined Slam Out Loud when he was in Grade 8. He went on to study liberal arts at Azim Premji University on a full scholarship, and has now returned to Slam Out Loud as a teaching fellow."
  },
  {
    image: "/ch_mother_tongue.png",
    videoUrl: "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/Mother_Tongue_Muskan.webm",
    name: "Muskan",
    description: "Questions identity and dignity through the lens of language, privilege, and a mother's interrupted education. Muskan was part of Slam Out Loud's programs from Grade 6, completed liberal arts from Ashoka University on a full scholarship and is now working in marketing."
  },
  {
    image: "/ch_molbhav.png",
    videoUrl: "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/Mol_Bhav_Chanda_Jyoti.webm",
    name: "Chanda and Jyoti",
    description: "Challenge the commodification of feelings, where even love and tears are weighed and priced. Chanda and Jyoti have both finished college and are now building careers in education."
  }
];

export default function ChildrensHighlight() {
  return (
    <section className="w-full bg-[#FF807B] py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col gap-12 md:gap-16">
        
        {/* Header Section */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-black font-sans">
            The deepest impact of our work is often heard before it is measured.
          </h2>
          <p className="text-base md:text-lg italic text-black font-sans">
            Across our programs, we identify children with exceptional voice and artistic interest, bring mentors into their journeys, and open platforms where their stories can be heard.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Video Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/5">
                <LazyVideo 
                  src={item.videoUrl}
                  poster={item.image}
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-black font-sans">
                  {item.name}
                </h3>
                <p className="text-sm md:text-base text-black font-sans leading-relaxed pr-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
