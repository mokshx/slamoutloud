import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#fffcf5] py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto relative group">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-lg">
          <Image
            src="/work-with-us/team_sol.png"
            alt="Join Team SOL"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          
          {/* Pink Overlay Box */}
          <div className="absolute bottom-0 right-0 bg-[#fb747b] px-8 py-6 md:px-16 md:py-12 rounded-tl-[2rem] md:rounded-tl-[3rem] flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              Join team SOL
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
