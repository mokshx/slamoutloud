"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/*
  The SVG path REVERSED so it starts from bottom-left (Arithmetic side)
  and draws rightward: up the face → over the crown → down the back of head → neck.
*/
const HEAD_PATH =
  "M133.427 286.326C133.427 245.83 115.743 241.516 93.7422 242.073C43.6142 236.645 37.766 216.189 26.4872 170.684C24.5159 162.73 23.563 170.684 3.51185 160.247C-1.50098 149.392 26.3133 132.663 33.1709 93.0321C42.7787 37.5072 87.4762 -5.49326 158.491 4.94376C229.505 15.3808 257.911 57.9638 257.911 122.256C257.911 165.571 229.463 188.986 222.404 209.092C208.04 250.005 220.733 293.005 228.252 311.374";

/*
  Labeled dots – fractions are along the REVERSED path.
  Left side = academic skills (Arithmetic, Writing, Reading)
  Right side = essential/soft skills (Curiosity, Imagination, Emotional intelligence, Agency)
*/
const LABELS = [
  { fraction: 0.09, label: "Arithmetic",         side: "left",  offsetX: -16, offsetY:  22, color: "#9a9a9a", group: "left"  },
  { fraction: 0.27, label: "Writing",             side: "left",  offsetX: -16, offsetY:   6, color: "#9a9a9a", group: "left"  },
  { fraction: 0.50, label: "Reading",             side: "left",  offsetX: -16, offsetY: -14, color: "#9a9a9a", group: "left"  },
  { fraction: 0.61, label: "Curiosity",           side: "right", offsetX:  16, offsetY: -16, color: "#4a9a8a", group: "right" },
  { fraction: 0.75, label: "Imagination",         side: "right", offsetX:  16, offsetY:   8, color: "#4a9a8a", group: "right" },
  { fraction: 0.86, label: "Emotional intelligence", side: "right", offsetX:  16, offsetY:   8, color: "#4a9a8a", group: "right" },
  { fraction: 0.97, label: "Agency",              side: "right", offsetX:  16, offsetY:  22, color: "#4a9a8a", group: "right" },
];

const ANIM_DURATION = 4000;

type HighlightMode = "all" | "left" | "right";

export default function SkullAnimation({
  isFirstLoad = false,
  scrollProgress = 0,
  highlightMode = "all",
  onAnimationComplete,
}: {
  isFirstLoad?: boolean;
  scrollProgress?: number;
  highlightMode?: HighlightMode;
  onAnimationComplete?: () => void;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [dotPositions, setDotPositions] = useState<any[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const animRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    setPathLength(len);
    const positions = LABELS.map((l) => {
      const pt = pathRef.current!.getPointAtLength(len * l.fraction);
      return { x: pt.x, y: pt.y, ...l };
    });
    setDotPositions(positions);
  }, []);

  const startAnimation = useCallback(() => {
    if (pathLength === 0) return;
    setTimeProgress(0);
    setIsDrawing(true);
    setHasStarted(true);
    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      if (startTimeRef.current === null) return;
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / ANIM_DURATION, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setTimeProgress(eased);
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setIsDrawing(false);
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
    };
    animRef.current = requestAnimationFrame(tick);
  }, [pathLength, onAnimationComplete]);

  useEffect(() => {
    if (pathLength > 0 && !hasStarted && !isFirstLoad) {
      const t = setTimeout(() => startAnimation(), 400);
      return () => clearTimeout(t);
    }
  }, [pathLength, hasStarted, isFirstLoad, startAnimation]);

  const activeProgress = isFirstLoad ? scrollProgress : timeProgress;
  const dashOffset = pathLength * (1 - activeProgress);

  // Calculate Zoom and Pan
  const VIEWBOX_CX = 130;
  const VIEWBOX_CY = 165;
  const INITIAL_SCALE = 6.0;

  let currentScale = 1;
  let translateX = 0;
  let translateY = 0;

  if (isFirstLoad && pathRef.current && pathLength > 0) {
    const safeProgress = Math.min(0.999, activeProgress);
    const pt = pathRef.current.getPointAtLength(pathLength * safeProgress);

    if (activeProgress <= 0.8) {
      currentScale = INITIAL_SCALE;
      translateX = VIEWBOX_CX - pt.x * currentScale;
      translateY = VIEWBOX_CY - pt.y * currentScale;
    } else {
      const zoomProgress = (activeProgress - 0.8) / 0.2;
      const easedZoom = Math.sin((zoomProgress * Math.PI) / 2);
      currentScale = INITIAL_SCALE + (1 - INITIAL_SCALE) * easedZoom;
      const targetX = VIEWBOX_CX - pt.x * currentScale;
      const targetY = VIEWBOX_CY - pt.y * currentScale;
      translateX = targetX + (0 - targetX) * easedZoom;
      translateY = targetY + (0 - targetY) * easedZoom;
    }
  }

  // Resolve label colour & opacity given the current highlightMode
  const getLabelStyle = (d: (typeof dotPositions)[0]) => {
    if (highlightMode === "all") {
      return { color: d.color, opacity: activeProgress >= d.fraction ? 1 : 0 };
    }
    if (highlightMode === "left") {
      const lit = d.group === "left";
      return {
        color: lit ? d.color : "#c8c8c8",
        opacity: activeProgress >= d.fraction ? 1 : 0,
      };
    }
    // highlightMode === "right"
    const lit = d.group === "right";
    return {
      color: lit ? d.color : "#c8c8c8",
      opacity: activeProgress >= d.fraction ? 1 : 0,
    };
  };

  const getDotOpacity = (d: (typeof dotPositions)[0]) => {
    const baseOpacity = activeProgress >= d.fraction ? 1 : 0.3;
    if (highlightMode === "all") return baseOpacity;
    const lit = highlightMode === "left" ? d.group === "left" : d.group === "right";
    return lit ? baseOpacity : 0.25;
  };

  const getDotColor = (d: (typeof dotPositions)[0]) => {
    if (highlightMode === "all") return "#e8a849";
    const lit = highlightMode === "left" ? d.group === "left" : d.group === "right";
    return lit ? "#e8a849" : "#d0d0d0";
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <svg
        viewBox="-80 -25 420 380"
        className="w-full h-full max-w-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <g
          style={{
            transform: `translate(${translateX}px, ${translateY}px) scale(${currentScale})`,
            transformOrigin: "0 0",
          }}
        >
          {/* Labeled dots */}
          {dotPositions.map((d, i) => (
            <circle
              key={`dot-${i}`}
              cx={d.x}
              cy={d.y}
              r={4.5}
              fill={getDotColor(d)}
              stroke={getDotColor(d) === "#e8a849" ? "#d4913a" : "#b0b0b0"}
              strokeWidth={0.6}
              style={{
                opacity: getDotOpacity(d),
                transition: "opacity 0.5s ease, fill 0.5s ease",
              }}
            />
          ))}

          {/* Main stroke */}
          <path
            ref={pathRef}
            d={HEAD_PATH}
            fill="none"
            stroke="#2a2a2a"
            strokeWidth={5.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: pathLength || 3000,
              strokeDashoffset: pathLength === 0 ? 3000 : dashOffset,
              filter: "url(#pencil)",
            }}
          />

          {/* Labels */}
          {dotPositions.map((d, i) => {
            const { color, opacity } = getLabelStyle(d);
            const revealed = activeProgress >= d.fraction;
            const anchor = d.side === "right" ? "start" : "end";
            return (
              <text
                key={`label-${i}`}
                x={d.x + d.offsetX}
                y={d.y + d.offsetY}
                textAnchor={anchor}
                fill={color}
                fontSize={18}
                fontFamily="var(--font-caveat), cursive"
                fontWeight={600}
                style={{
                  opacity: revealed ? opacity : 0,
                  transform: revealed ? "translateY(0)" : "translateY(5px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease, fill 0.5s ease",
                }}
              >
                {d.label}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
