"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { slug: "kalangana", name: "Project Kalangana", author: "Nandita V. Shastri" },
  { slug: "chak-de", name: "Project Chak De!", author: "Gauri Konanoor" },
  { slug: "poornanna", name: "Poornanna", author: "Saket Dekhane" },
  { slug: "her-stori-ka-jashn", name: "Her Stori Ka Jashn", author: "Yashita Ahuja" },
  { slug: "chaaya", name: "Project Chaaya", author: "Ishita Maheswari" },
  { slug: "ruler", name: "Ruler!", author: "Ayush Sharma" },
  { slug: "leher", name: "Leher", author: "Sanhita Choudhury" },
  { slug: "panchapatra", name: "Panchapatra", author: "Tanvi Kulkarni" },
  { slug: "whisper-of-wonders", name: "Whisper of Wonders", author: "Shilpa Tripathy" },
  { slug: "naata", name: "Project Naata", author: "Khushi Shah" },
];

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.clientWidth ?? 320) + 24;
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="bg-[#FAF7F2] py-8 md:py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6"
        >
          Community Art Projects
        </motion.h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 items-center justify-center w-11 h-11 rounded-full bg-[#1A1A1A] text-white hover:bg-black transition-colors cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <div
                key={project.slug}
                data-card
                className="group snap-start shrink-0 w-[240px] sm:w-[280px] md:w-[320px] [perspective:1500px]"
              >
                <div className="relative w-full aspect-[4/5] transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden shadow-md [backface-visibility:hidden]">
                    <Image
                      src={`/jijivisha/projects/${project.slug}-front.png`}
                      alt={`${project.name} by ${project.author}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 70vw, 320px"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl overflow-hidden shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Image
                      src={`/jijivisha/projects/${project.slug}-back.png`}
                      alt={`${project.name} — project details`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 70vw, 320px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 items-center justify-center w-11 h-11 rounded-full bg-[#1A1A1A] text-white hover:bg-black transition-colors cursor-pointer"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
