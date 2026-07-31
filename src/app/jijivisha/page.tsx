import Footer from "../components/Footer";
import Hero from "../components/jijivisha/Hero";
import TJF from "../components/jijivisha/TJF";
import CAP from "../components/jijivisha/CAP";
import ProjectsCarousel from "../components/jijivisha/ProjectsCarousel";

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
