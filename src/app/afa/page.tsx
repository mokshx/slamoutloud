import Footer from "../components/Footer";
import Hero from "../components/afa/Hero";
import SOLKBol from "../components/afa/SOLKBol";
import Diksha from "../components/afa/Diksha";
import AFAPunjab from "../components/afa/punjab/AFAPunjab";

export default function AFAPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Hero />
      <SOLKBol />
      <AFAPunjab />
      <Diksha />
      <Footer />
    </main>
  );
}
