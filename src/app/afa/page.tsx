import type { Metadata } from "next";
import Footer from "../components/Footer";
import Hero from "../components/afa/Hero";
import SOLKBol from "../components/afa/SOLKBol";
import Diksha from "../components/afa/Diksha";
import AFAPunjab from "../components/afa/punjab/AFAPunjab";
import AFAMaharashtra from "../components/afa/maharashtra/AFAMaharashtra";
import AFABihar from "../components/afa/bihar/AFABihar";

export const metadata: Metadata = {
  title: "Arts for All (AFA)",
  description:
    "Arts for All partners with state governments in Punjab, Maharashtra, and Bihar to make learning through the arts and artistic pedagogy a regular, high-quality part of public education, transforming school time into a space for learning, expression, and growth.",
  alternates: {
    canonical: "/afa",
  },
  openGraph: {
    url: "/afa",
    title: "Arts for All (AFA) | Slam Out Loud",
    description:
      "Arts for All works with state governments in Punjab, Maharashtra, and Bihar at the policy and system level to bring meaningful, arts-based learning into government schools.",
    images: [
      {
        url: "/afa/hero.png",
        width: 1200,
        height: 630,
        alt: "Arts for All (AFA) - Slam Out Loud",
      },
    ],
  },
  twitter: {
    images: ["/afa/hero.png"],
  },
};

export default function AFAPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Hero />
      <SOLKBol />
      <AFAPunjab />
      <AFAMaharashtra />
      <AFABihar />
      <Diksha />
      <Footer />
    </main>
  );
}
