"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const mediaData = [
  {
    id: 1,
    title: "How Slam Out Loud is transforming arts-in-education in India and beyond",
    image: "/media/media1.png",
    link: "https://hundred.org/en/articles/how-slam-out-loud-is-transforming-arts-in-education-in-india-and-beyond",
    content: "Slam Out Loud (SOL) is a non-profit organisation based in India that uses the transformative power of performance and visual arts to help build Creative Confidence (life) skills in children from disadvantaged communities. So far they have reached 4.7 million children through their low-tech arts programme...",
  },
  {
    id: 2,
    title: "India: Arts for All — Slam Out Loud",
    image: "/media/media2.png",
    link: "https://documents1.worldbank.org/curated/en/482071606815115912/pdf/India-Arts-for-All-Slam-Out-Loud.pdf",
    content: "A comprehensive case study by the World Bank detailing Slam Out Loud's 'Arts for All' initiative, exploring its impact and the possibilities of scaling art-based socio-emotional learning across the country.",
  },
  {
    id: 3,
    title: "What Happens when Children Engage with Art?",
    image: "/media/media3.png",
    link: "https://www.wise-qatar.org/what-happens-when-children-engage-with-art/",
    content: "5 years ago, while facilitating a poetry workshop, I met Supriya Kumari, a 16-year-old student poet who is now an active member of Slam Out Loud's 'Bol Poetry Crew.' Not only was she frugal with her words and cautious of everyone around her, she lacked confidence...",
  },
  {
    id: 4,
    title: "The Possibilities of Art in Socio-Emotional Learning",
    image: "/media/media4.png",
    link: "https://medium.com/social-emotional-learning/the-possibilities-of-art-in-socio-emotional-learning-curating-young-learners-well-being-2d17c7a985f2",
    content: "An exploration of how art-based socio-emotional learning can curate and support the well-being of young learners, offering them a space for creative expression and emotional growth.",
  },
  {
    id: 5,
    title: "Case study: Slam Out Loud - Arts for All | UNGEI",
    image: "/media/media5.png",
    link: "https://www.ungei.org/publication/case-study-slam-out-loud-arts-all",
    content: "Slam Out Loud (SOL) uses the transformative power of performance and visual arts to help build creative confidence and skills like communication, critical thinking and empathy in children from disadvantaged communities. This case study looks at the Arts for All programme response to the gender-related impacts of COVID-19 on education.",
  }
];

export default function Media() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F9B969] flex flex-col w-full py-8 md:py-14 font-sans">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-black font-bold text-sm md:text-base lg:text-lg mb-4 md:mb-8">
          Media
        </h2>
        <div className="flex flex-col border-t-2 border-black/80">
          {mediaData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="flex flex-col w-full border-b-2 border-black/80 transition-all duration-300 overflow-hidden"
              >
                {/* Header (Question + Icon) */}
                <div 
                  className="flex items-center justify-between py-3 md:py-6 lg:py-8 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-base md:text-xl lg:text-2xl leading-tight font-medium text-black max-w-[85%]">
                    {item.title}
                  </h3>
                  <div
                    className={`flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                      isOpen ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-black"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 14 4-4 4 4" />
                    </svg>
                  </div>
                </div>

                {/* Answer Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center justify-between">
                      {/* Left Content (Image) */}
                      <div className="w-full lg:w-1/2 flex justify-start">
                        <div className="relative w-full max-w-[300px] aspect-[4/3] overflow-hidden rounded-sm">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 300px"
                          />
                        </div>
                      </div>
                      
                      {/* Right Content (Text) */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                        <p className="text-[12px] md:text-sm lg:text-sm font-medium text-black leading-relaxed mb-4">
                          {item.content}
                        </p>
                        <Link 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 text-black font-bold text-[12px] md:text-sm hover:underline w-fit"
                        >
                          Read More
                          <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.5303 6.53033C31.8232 6.23744 31.8232 5.76256 31.5303 5.46967L26.7574 0.696699C26.4645 0.403806 25.9896 0.403806 25.6967 0.696699C25.4038 0.989593 25.4038 1.46447 25.6967 1.75736L29.9393 6L25.6967 10.2426C25.4038 10.5355 25.4038 11.0104 25.6967 11.3033C25.9896 11.5962 26.4645 11.5962 26.7574 11.3033L31.5303 6.53033ZM0 6.75H31V5.25H0V6.75Z" fill="currentColor"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
