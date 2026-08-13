"use client";
import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jigyasa Labroo",
    image: "/about/core_team/jigyasa.png",
    designation: "Co-Founder and CEO"
  },
  {
    name: "Gaurav Singh",
    image: "/about/core_team/gaurav.png",
    designation: "Co-Founder"
  },
  {
    name: "Sanea Mahajan",
    image: "/about/core_team/sanea.png",
    designation: "Senior Manager – People and Culture"
  },
  {
    name: "Rakishma",
    image: "/about/core_team/rakishma.png",
    designation: "Associate Director – Impact Evaluation and Program Design"
  },
  {
    name: "Veer Rathi",
    image: "/about/core_team/veer.jpg",
    designation: "Director – Learning Excellence"
  },
];

export default function CoreTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by approximately half the container width for a smooth slider feel
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#faa743] py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-black">Our Core team</h2>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-10 p-3 bg-transparent border-2 border-black rounded-full hover:bg-black/10 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-10 p-3 bg-transparent border-2 border-black rounded-full hover:bg-black/10 transition-colors"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Slider Container */}
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 hide-scrollbar justify-start"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-none w-[183px] snap-start"
              >
                <div className="relative w-full h-[292px] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="183px"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-black leading-tight mb-1">{member.name}</h3>
                  <p className="text-sm text-black/80 leading-snug">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
