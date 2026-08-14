import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#fffcf5] pb-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Illustration */}
        <div className="relative w-full max-w-3xl aspect-[16/10] mb-8 md:mb-12 scale-110 md:scale-100">
          <Image
            src="/weare_sol.png"
            alt="Slam Out Loud Community Illustration"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Text Overlay/Content */}
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl leading-relaxed text-gray-800 tracking-tight">
            <span className="font-bold relative inline-block">
              Slam Out Loud
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#49a09d] rounded-full opacity-60"></div>
            </span>{" "}
            <span className="font-handwriting italic text-gray-600">
              is led by a team of artists, psychologists, educators,
              and system-builders working to make the inner foundations of a
              transformational life available to every child in India.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
