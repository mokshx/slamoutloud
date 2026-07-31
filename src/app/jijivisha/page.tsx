import type { Metadata } from "next";
import Footer from "../components/Footer";
import Hero from "../components/jijivisha/Hero";
import TJF from "../components/jijivisha/TJF";
import CAP from "../components/jijivisha/CAP";
import ProjectsCarousel from "../components/jijivisha/ProjectsCarousel";

export const metadata: Metadata = {
  title: "The Jijivisha Fellowship",
  description:
    "The Jijivisha Fellowship places trained art educators in classrooms and communities across Delhi, Bengaluru, Mumbai, and Pune, using art periods to build children's core social-emotional skills, identity, and resilience.",
  alternates: {
    canonical: "/jijivisha",
  },
  openGraph: {
    url: "/jijivisha",
    title: "The Jijivisha Fellowship | Slam Out Loud",
    description:
      "We place trained fellows in classrooms and communities across Delhi, Bengaluru, Mumbai, and Pune to use art periods to build core social-emotional skills.",
    images: [
      {
        url: "/jijivisha/jijivisha_header.png",
        width: 1200,
        height: 630,
        alt: "The Jijivisha Fellowship - Slam Out Loud",
      },
    ],
  },
  twitter: {
    images: ["/jijivisha/jijivisha_header.png"],
  },
};

export default function JijivishaPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <Hero />
      <TJF />
      <CAP />
      <ProjectsCarousel />
      <Footer />
    </main>
  );
}
