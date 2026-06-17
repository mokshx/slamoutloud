"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="w-full bg-[#fffcf5] pt-20 pb-15 lg:pt-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:flex flex-row px-8 lg:px-20 gap-16 lg:gap-32 w-full justify-center text-[#1a1a1a]">
          
          {/* Left Column (Vision) */}
          <motion.div 
            {...fadeInLeft}
            className="flex-1 flex flex-col relative max-w-[500px]"
          >
            {/* The line for Vision - standard length */}
            <div className="w-[1.5px] h-[100px] lg:h-[130px] bg-[#1a1a1a] mb-6" />
            
            <p className="text-[12px] lg:text-[14px] font-bold mb-4 tracking-wide uppercase text-[#1a1a1a]">
              What we do
            </p>
            <h2 className="text-[12px] lg:text-[16px] leading-[1.4] max-w-[420px] text-[#1a1a1a]">
              We ensure children in government schools get access to the arts and transform the art class into a space for growth and learning. Through poetry, theatre, storytelling, movement, and visual art, children find their voice and see themselves as capable.
            </h2>
          </motion.div>

          {/* Right Column (Mission) */}
          <motion.div 
            {...fadeInRight}
            className="flex-1 flex flex-col relative max-w-[500px]"
          >
            {/* The line for Mission - longer to push it down */}
            <div className="w-[1.5px] h-[260px] lg:h-[320px] bg-[#1a1a1a] mb-6" />
            
            <p className="text-[12px] lg:text-[14px] font-bold mb-4 tracking-wide uppercase text-[#1a1a1a]">
              How we do it
            </p>
            <h2 className="text-[12px] lg:text-[16px] leading-[1.4] pr-4 text-[#1a1a1a]">
              We build and test arts-based learning in classrooms with trained art educators, learning directly from children, teachers and schools. We then partner with state governments to embed what works into curriculum, training, pedagogy and measurement, and enable government school teachers to deliver it at scale.
            </h2>
          </motion.div>

        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="flex flex-col md:hidden px-[30px] pt-12 pb-20 w-full text-[#1a1a1a]">
          
          {/* Top section with lines */}
          <div className="flex w-full">
            {/* The gap for the Left Long Line */}
            <div className="w-[32px] shrink-0 relative">
               {/* This line goes all the way down, passing the Vision block, into the margin before Mission */}
               <div className="absolute top-0 left-0 w-[1.5px] bg-[#1a1a1a]" style={{ height: 'calc(100% + 40px)' }} />
            </div>

            {/* Vision Info */}
            <motion.div 
              {...fadeInLeft}
              className="flex-1 flex flex-col relative"
            >
               {/* The shorter line for Vision */}
               <div className="absolute top-0 left-0 w-[1.5px] h-[80px] bg-[#1a1a1a]" />
               
               <div className="pt-[100px]">
                 <p className="text-[12px] font-bold mb-3 tracking-wide text-[#1a1a1a] uppercase">
                    What we do
                 </p>
                 <h2 className="text-[12px] leading-[1.4] pr-2 text-[#1a1a1a]">
                    We ensure children in government schools get access to the arts and transform the art class into a space for growth and learning. Through poetry, theatre, storytelling, movement, and visual art, children find their voice and see themselves as capable.
                 </h2>
               </div>
            </motion.div>
          </div>

          {/* Mission Info */}
           <motion.div 
             {...fadeInRight}
             className="flex flex-col w-full mt-[60px] relative"
           >
             <p className="text-[12px] font-bold mb-3 tracking-wide text-[#1a1a1a] uppercase">
               How we do it
             </p>
             <h2 className="text-[12px] leading-[1.4] pr-2 text-[#1a1a1a]">
               We build and test arts-based learning in classrooms with trained art educators, learning directly from children, teachers and schools. We then partner with state governments to embed what works into curriculum, training, pedagogy and measurement, and enable government school teachers to deliver it at scale.
             </h2>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
