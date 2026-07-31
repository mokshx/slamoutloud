import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "./components/homepage/Hero";
import DidYouKnow from "./components/homepage/DidYouKnow";

export const metadata: Metadata = {
  title: {
    absolute: "Slam Out Loud | Reimagining Education Through the Arts",
  },
  description:
    "We reimagine learning through the arts, so children in government schools across India can flourish today and be ready for tomorrow. Discover Slam Out Loud's mission, programmes, and impact.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Slam Out Loud | Reimagining Education Through the Arts",
    description:
      "We reimagine learning through the arts, so children in government schools across India can flourish today and be ready for tomorrow.",
  },
};

const WeareSOL = dynamic(() => import("./components/homepage/WeareSOL"));
const VisionMission = dynamic(
  () => import("./components/homepage/VisionMission"),
);
const FAQs = dynamic(() => import("./components/homepage/FAQs"));
const OurImpact = dynamic(() => import("./components/homepage/OurImpact"));
const ChildrensHighlight = dynamic(
  () => import("./components/homepage/ChildrensHighlight"),
);
const Programmes = dynamic(() => import("./components/homepage/Programmes"));
const PartnersAndFeature = dynamic(
  () => import("./components/homepage/PartnersAndFeature"),
);
const DonateAndJoin = dynamic(
  () => import("./components/homepage/DonateAndJoin"),
);
const Media = dynamic(() => import("./components/homepage/Media"));
const Newsletter = dynamic(() => import("./components/homepage/Newsletter"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <DidYouKnow />
      <WeareSOL />
      <VisionMission />
      <OurImpact />
      <FAQs />
      <Programmes />
      <ChildrensHighlight />
      <DonateAndJoin />
      <PartnersAndFeature />
      <Media />
      <Newsletter />
      <Footer />
    </main>
  );
}
