"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TJF() {
  return (
    <section className="bg-[#FAF7F2] py-8 md:py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
        {/* Left Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[55%] flex flex-col gap-8 order-1"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[42px] leading-[1.2] tracking-tight font-medium text-[#1A1A1A]">
            In Jijivisha classrooms, art periods become{" "}
            <span className="font-extrabold italic">
              structured experiences that build a child&apos;s sense of who they are, what they are capable of, and where they are going.
            </span>
          </h2>

          <p className="text-lg md:text-[20px] leading-relaxed text-[#333333] max-w-[90%] font-light">
            From climate awareness to gender equity, children use poetry, theatre,
            storytelling, movement, and visual art to explore the world around them
            and carry their voice into daily life.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
            <div className="flex flex-col border-l-2 border-black pl-4 h-full">
              <span className="text-sm md:text-[15px] font-semibold leading-snug">
                Community home visits
              </span>
            </div>
            <div className="flex flex-col border-l-2 border-black pl-4 h-full">
              <span className="text-sm md:text-[15px] font-semibold leading-snug">
                Parent and teacher circles
              </span>
            </div>
            <div className="flex flex-col border-l-2 border-black pl-4 h-full">
              <span className="text-sm md:text-[15px] font-semibold leading-snug">
                Community art projects and showcases
              </span>
            </div>
          </div>

          {/* Learn More */}
          <div className="pt-2">
            <a 
              href="#" 
              className="inline-flex items-center gap-3 font-bold text-lg group"
            >
              Learn More
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ArrowRight size={20} strokeWidth={2.5} />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[45%] flex justify-center items-center order-2"
        >
          <div className="relative w-full aspect-[4/3] md:aspect-[5/6] lg:aspect-[4/4] overflow-hidden rounded-lg shadow-sm">
            <Image
              src="/jijivisha/tjf.png"
              alt="The Jijivisha Fellowship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
