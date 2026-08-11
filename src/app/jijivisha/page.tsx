import type { Metadata } from "next";
import Footer from "../components/Footer";
import Hero from "../components/jijivisha/Hero";
import TJF from "../components/jijivisha/TJF";
import CAP from "../components/jijivisha/CAP";
import ProjectsCarousel from "../components/jijivisha/ProjectsCarousel";

export const metadata: Metadata = {
  title: "The Jijivisha Fellowship",
  description:
    "The Jijivisha Fellowship places carefully selected art educators inside low-income classrooms across Delhi, Bengaluru, Mumbai, and Pune, working closely with children, teachers, parents and schools.",
  alternates: {
    canonical: "/jijivisha",
  },
  openGraph: {
    url: "/jijivisha",
    title: "The Jijivisha Fellowship | Slam Out Loud",
    description:
      "The Jijivisha Fellowship places carefully selected art educators inside low-income classrooms across Delhi, Bengaluru, Mumbai, and Pune, working closely with children, teachers, parents and schools.",
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
