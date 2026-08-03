import Image from 'next/image';

export default function DonateAndJoin() {
  return (
    <section className="w-full bg-[#fffcf5] py-12 md:py-16 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-black font-sans text-center">
          Be a part of the <span className="text-[#ff7477]">S.O.L.ution</span>
        </h2>

        {/* Illustration */}
        <div className="relative w-full max-w-lg md:max-w-2xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[2/1] lg:aspect-[16/9]">
          <Image
            src="/donate.png"
            alt="Children engaging in various arts and activities in a book"
            fill
            className="object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full mt-2">
          <a
            href="/work-with-us"
            className="w-full sm:w-auto min-w-[200px] h-[52px] flex items-center justify-center px-6 rounded-lg border-2 border-black text-black font-semibold text-base hover:bg-black/5 transition-colors text-center leading-tight"
          >
            Join our team
          </a>
          <a 
            href="https://milaap.org/fundraisers/slam-out-loud"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[200px] h-[52px] flex items-center justify-center px-6 rounded-lg bg-black text-white font-semibold text-base hover:bg-black/90 transition-colors text-center"
          >
            Donate
          </a>
        </div>

      </div>
    </section>
  );
}
