"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    id: 1,
    question: "What we build",
    bgColor: "bg-[#FF7A7A]", // Coral
    image: "/faq1.png",
    content: (
      <div className="flex flex-col gap-6 text-black mt-4 lg:mt-0">
        <p className="text-base md:text-xl font-medium leading-relaxed text-black">
          Children, especially those from adversity, need the readiness to
          navigate uncertainty, recover from setbacks, build relationships, make
          decisions, and imagine larger futures for themselves.
        </p>
        <p className="text-base md:text-xl font-medium text-black">
          At Slam Out Loud, we focus on strengthening five interconnected
          foundations:
        </p>
        <div className="flex flex-col gap-3 text-base md:text-xl text-black">
          <p><span className="font-bold">Identity:</span> &ldquo;I believe in my own ability.&rdquo;</p>
          <p><span className="font-bold">Aspiration:</span> &ldquo;I belong in bigger rooms. My circumstances don&rsquo;t define my ceiling.&rdquo;</p>
          <p><span className="font-bold">Self-efficacy:</span> &ldquo;I can influence what happens to me.&rdquo;</p>
          <p><span className="font-bold">Resilience:</span> &ldquo;When life gets hard, I know how to come back.&rdquo;</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    question: "How the arts make it possible",
    bgColor: "bg-[#45A99E]", // Teal
    image: "/faq2.png",
    content: (
      <div className="flex flex-col gap-6 text-black mt-4 lg:mt-0">
        <p className="text-base md:text-xl font-medium leading-relaxed text-black">
          In SOL classrooms, children write, perform, draw, move, reflect and
          create together. It allows them to find spaces within the education
          system where they:
        </p>
        <div className="flex flex-col gap-3 text-base md:text-xl text-black">
          <p className="font-bold">Make sense of complexity</p>
          <p className="font-bold">Imagine new realities</p>
          <p className="font-bold">Understand their emotions</p>
          <p className="font-bold">Think critically, and</p>
          <p className="font-bold">Take initiative</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    question: "Our model: Learn Deeply, Scale Systemically",
    bgColor: "bg-[#F3BD69]", // Yellow
    image: "/faq3.png",
    content: (
      <div className="flex flex-col gap-6 text-black mt-4 lg:mt-0">
        <p className="text-base md:text-xl font-medium leading-relaxed text-black">
          We learn deeply before we scale widely. Working directly with children
          helps us build practices that are joyful, contextual, and effective.
          Partnering with governments ensures these practices become part of the
          system, not just a one-time intervention.
        </p>
        <p className="text-base md:text-xl font-medium leading-relaxed text-black">
          Here&rsquo;s what these two programs look like:
        </p>
      </div>
    ),
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 is open by default as in the screenshot

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="flex flex-col w-full">
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.id}
            className={`${faq.bgColor} flex flex-col w-full transition-colors duration-300 overflow-hidden border-b border-black/10`}
          >
            {/* Header (Question + Icon) */}
            <div 
              className="flex items-center justify-between px-6 py-6 md:px-16 lg:px-24 md:py-10 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base md:text-xl lg:text-2xl font-bold text-black">
                {faq.question}
              </h3>
              <div
                className={`flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                  isOpen ? "rotate-0" : "rotate-180"
                }`}
              >
                 {/* UP chevron base icon so that rotate-0 points UP (open) and rotate-180 points DOWN (closed) */}
                <svg
                  width="32"
                  height="32"
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
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-12 md:px-16 lg:px-24 md:pb-24 pt-4 md:pt-8 w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end justify-between">
                  {/* Left Content (Text) */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-end text-left">
                    {faq.content}
                  </div>
                  {/* Right Content (Image) */}
                  <div className="w-full lg:w-1/2 flex justify-end">
                    <div className="relative w-full max-h-[400px] overflow-hidden rounded-sm shadow-md">
                      <img 
                        src={faq.image} 
                        alt={faq.question} 
                        className="w-full h-auto object-cover object-center max-h-[400px]" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
