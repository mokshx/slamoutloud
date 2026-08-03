"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"), { ssr: false });
const HeroLite = dynamic(() => import("./HeroLite"), { ssr: false });

export default function HeroResponsive() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  if (isMobile === null) {
    return <div className="min-h-screen bg-[#fffcf5]" />;
  }

  return isMobile ? <HeroLite /> : <Hero />;
}
