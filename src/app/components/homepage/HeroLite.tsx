"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import SkullAnimation from './SkullAnimation';

/* Same copy as Hero's three scroll phases, replayed as carousel slides */
const SLIDES = [
  {
    top: 'Every child needs these skills to flourish at school',
    bottom: 'and be future-ready.',
    topClass: 'text-2xl md:text-3xl italic text-black font-serif',
    bottomClass: 'text-3xl md:text-4xl font-bold text-black mt-1 font-serif',
    underline: false,
  },
  {
    top: 'But for millions of children, school is still a place of',
    bottom: 'silence, fear, and rote learning.',
    topClass: 'text-xl md:text-2xl italic text-black font-serif',
    bottomClass: 'text-xl md:text-2xl italic text-black font-serif mt-1',
    underline: false,
  },
  {
    top: 'Over time, our children begin to believe that',
    bottom: 'success is not meant for them.',
    topClass: 'text-2xl md:text-3xl italic text-black font-serif',
    bottomClass: 'text-3xl md:text-4xl font-bold text-black mt-1 font-serif',
    underline: true,
  },
];

const AUTOPLAY_MS = 4500;
const RESUME_DELAY_MS = 6000;

export default function HeroLite() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    isProgrammaticScroll.current = true;
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  const pauseThenResume = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), RESUME_DELAY_MS);
  }, []);

  const goTo = useCallback((index: number) => {
    pauseThenResume();
    scrollToIndex(index);
  }, [pauseThenResume, scrollToIndex]);

  // Autoplay – advances one slide at a time while not paused
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      scrollToIndex((activeIndex + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [activeIndex, isPaused, scrollToIndex]);

  // Track manual (touch/trackpad) scrolling so dots stay in sync and autoplay pauses
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let settleTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (!isProgrammaticScroll.current) {
        pauseThenResume();
      }
      clearTimeout(settleTimeout);
      settleTimeout = setTimeout(() => {
        setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
        isProgrammaticScroll.current = false;
      }, 100);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      clearTimeout(settleTimeout);
    };
  }, [pauseThenResume]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#fffcf5] min-h-[calc(100vh-80px)] flex flex-col pt-32 pb-12">
      <div className="w-full flex flex-col items-center justify-center px-8">

        {/* Main Container */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">

          {/* Central Image - draws itself in on every mount */}
          <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px]">
            <SkullAnimation
              isFirstLoad={false}
              highlightMode="right"
              onAnimationComplete={() => {}}
            />
          </div>

          {/* Text Carousel – same copy as Hero's scroll phases */}
          <div className="mt-8 w-full max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => goTo((activeIndex - 1 + SLIDES.length) % SLIDES.length)}
                className="hidden sm:flex shrink-0 items-center justify-center w-8 h-8 rounded-full text-black/40 hover:text-black hover:bg-black/5 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                ref={trackRef}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
              >
                {SLIDES.map((slide, i) => (
                  <div
                    key={i}
                    className="w-full shrink-0 snap-center flex flex-col items-center justify-center text-center px-2"
                    style={{ minHeight: '7rem' }}
                  >
                    <p className={slide.topClass}>{slide.top}</p>
                    <p className={`${slide.bottomClass} relative inline-block`}>
                      {slide.bottom}
                      {slide.underline && (
                        <svg className="absolute bottom-[-10px] left-0 w-full h-[15px]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                          <path d="M2.00025 6.99997C48.3396 2.66666 142.102 -3.49991 198 4.49998" stroke="#fb747b" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" style={{filter: 'blur(0.5px)'}} />
                        </svg>
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                aria-label="Next slide"
                onClick={() => goTo((activeIndex + 1) % SLIDES.length)}
                className="hidden sm:flex shrink-0 items-center justify-center w-8 h-8 rounded-full text-black/40 hover:text-black hover:bg-black/5 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-black' : 'w-2 bg-black/25 hover:bg-black/40'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
