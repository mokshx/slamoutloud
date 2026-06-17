"use client";

import { useEffect, useState, useRef } from 'react';
import SkullAnimation from './SkullAnimation';

/**
 * Scroll phases (each phase = 1 extra viewport of scroll travel):
 *  Phase 0  (0–1):   skull draws itself (scroll-driven, isFirstLoad=true)
 *  Phase 1  (1–2):   "Every child needs these skills…"  – all labels normal
 *  Phase 2  (2–3):   "But for millions of children…"      – left 3 lit, right 4 grey
 *  Phase 3  (3–4):   "Over time, our children begin…"     – right 4 lit, left 3 grey
 */
const TOTAL_PHASES = 4; // number of viewports of scroll space

export default function Hero() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  // 0‒1 raw progress across ALL phases
  const [globalProgress, setGlobalProgress] = useState(0);
  // True once window 'load' fires – meaning all scripts/fonts/requests are done
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('skullAnimDone');
    if (hasPlayed) {
      setIsFirstLoad(false);
      setScrollProgress(1);
      setGlobalProgress(1);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      let progress = -rect.top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      setGlobalProgress(progress);

      // First phase (0‒1/TOTAL_PHASES) drives the skull drawing
      const drawingProgress = Math.min(1, progress * TOTAL_PHASES);
      setScrollProgress(drawingProgress);

      if (drawingProgress >= 1) {
        sessionStorage.setItem('skullAnimDone', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem('skullAnimDone', 'true');
    setIsFirstLoad(false);
    setScrollProgress(1);
    setGlobalProgress(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Which text phase are we in? (0 = drawing, 1 = phase1, 2 = phase2, 3 = phase3)
  const phase = isFirstLoad ? Math.min(TOTAL_PHASES - 1, Math.floor(globalProgress * TOTAL_PHASES)) : 3;

  // Progress within the current phase (0‒1)
  const phaseLocalProgress = isFirstLoad
    ? (globalProgress * TOTAL_PHASES) - Math.floor(globalProgress * TOTAL_PHASES)
    : 1;

  const drawingComplete = scrollProgress >= 1;

  // Highlight mode for labels:
  //   'all'   – every label at full opacity (phases 0 & 1)
  //   'left'  – Arithmetic, Writing, Reading lit; rest grey (phase 2)
  //   'right' – Curiosity…Agency lit; left 3 grey (phase 3)
  type HighlightMode = 'all' | 'left' | 'right';
  let highlightMode: HighlightMode = 'all';
  if (phase === 2) highlightMode = 'left';
  if (phase === 3) highlightMode = 'right';

  // --- Text visibility helpers ---
  const phase1In = drawingComplete && phase >= 1;
  const phase2In = drawingComplete && phase >= 2;
  const phase3In = drawingComplete && phase >= 3;

  return (
    <>
      {/* Full-screen loading overlay – shown until SVG path is measured */}
      {!isReady && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fffcf5]"
          aria-label="Loading"
        >
          {/* Animated skull-pen spinner */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Spinning ring */}
            <div
              className="w-16 h-16 rounded-full border-4 border-[#e8e0d0] border-t-[#e8a849]"
              style={{ animation: "spin 1s linear infinite" }}
            />
            {/* Dotted trail beneath */}
            <p
              className="text-sm tracking-widest uppercase text-[#9a9a9a] font-semibold"
              style={{ letterSpacing: "0.18em" }}
            >
              Connecting the dots…
            </p>
          </div>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      <section
        ref={containerRef}
        className={`relative w-full bg-[#fffcf5] ${isFirstLoad ? `h-[${TOTAL_PHASES * 100}vh]` : 'min-h-[calc(100vh-80px)]'} flex flex-col`}
        style={{ height: isFirstLoad ? `${TOTAL_PHASES * 100}vh` : undefined }}
      >
      <div className={`w-full flex flex-col items-center justify-center px-8 pt-2 pb-8 overflow-hidden ${isFirstLoad ? 'sticky top-0 h-screen' : 'min-h-[calc(100vh-80px)] relative'}`}>

        {/* Scroll Prompt – only while at very start */}
        {isFirstLoad && !drawingComplete && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none transition-opacity duration-500"
            style={{ opacity: scrollProgress < 0.05 ? 1 : 0 }}
          >
            <div className="flex flex-col items-center mb-8">
              <div className="mb-4">
                <svg width="30" height="45" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="32" rx="10" stroke="black" strokeWidth="2"/>
                  <rect x="11" y="8" width="2" height="6" rx="1" fill="black"/>
                  <path d="M8 22L12 26L16 22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 26L12 30L16 26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 italic">Scroll to connect the dots</h2>
              <button
                onClick={handleSkip}
                className="pointer-events-auto text-sm text-gray-500 hover:text-black transition-colors italic underline underline-offset-4"
              >
                Skip the experience
              </button>
            </div>
          </div>
        )}

        {/* Main Container */}
        <div className={`relative w-full max-w-4xl mx-auto flex flex-col items-center transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>

          {/* Phase 1 top text – hidden, new copy lives in the bottom slot */}
          <div
            className="text-center mb-2 transition-all duration-700 ease-out"
            style={{
              opacity: 0,
              pointerEvents: 'none',
              minHeight: '2.5rem',
            }}
          />

          {/* Central Image */}
          <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px]">
            <SkullAnimation
              isFirstLoad={isFirstLoad}
              scrollProgress={scrollProgress}
              highlightMode={highlightMode}
              onAnimationComplete={() => {}}
            />
          </div>

          {/* Text phases – all stacked absolutely inside a fixed-height slot so they don't push layout */}
          <div className="relative mt-3 w-full text-center" style={{ minHeight: '7rem' }}>

            {/* Phase 1 – "Every child needs these skills…" */}
            <div
              className="absolute inset-x-0 top-0 transition-all duration-700 ease-out"
              style={{
                opacity: phase1In && phase < 2 ? 1 : 0,
                transform: phase1In && phase < 2 ? 'translateY(0)' : 'translateY(12px)',
                pointerEvents: 'none',
              }}
            >
              <p className="text-2xl md:text-3xl italic text-black font-serif">
                Every child needs these skills to flourish at school
              </p>
              <p className="text-3xl md:text-4xl font-bold text-black mt-1 font-serif">
                and be future-ready.
              </p>
            </div>

            {/* Phase 2 – "But for millions of children…" */}
            <div
              className="absolute inset-x-0 top-0 transition-all duration-700 ease-out"
              style={{
                opacity: phase2In && phase < 3 ? 1 : 0,
                transform: phase2In && phase < 3 ? 'translateY(0)' : 'translateY(12px)',
                pointerEvents: 'none',
              }}
            >
              <p className="text-xl md:text-2xl italic text-black font-serif">
                But for millions of children, school is still a place of
              </p>
              <p className="text-xl md:text-2xl italic text-black font-serif">
                silence, fear, and rote learning —
              </p>
              <p className="text-xl md:text-2xl italic text-black font-serif">
                not expression, safety, and possibility.
              </p>
            </div>

            {/* Phase 3 – "Over time, our children begin to believe…" */}
            <div
              className="absolute inset-x-0 top-0 transition-all duration-700 ease-out"
              style={{
                opacity: phase3In ? 1 : 0,
                transform: phase3In ? 'translateY(0)' : 'translateY(12px)',
                pointerEvents: 'none',
              }}
            >
              <p className="text-2xl md:text-3xl italic text-black font-serif">Over time, our children begin to believe that</p>
              <p className="text-3xl md:text-4xl font-bold text-black mt-1 font-serif relative inline-block">
                success is not meant for them.
                <svg className="absolute bottom-[-10px] left-0 w-full h-[15px]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.00025 6.99997C48.3396 2.66666 142.102 -3.49991 198 4.49998" stroke="#fb747b" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" style={{filter: 'blur(0.5px)'}} />
                </svg>
              </p>
            </div>

          </div>

        </div>
      </div>
      </section>
    </>
  );
}
