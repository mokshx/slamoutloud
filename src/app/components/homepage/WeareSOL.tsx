"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WeareSOL() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="relative w-full bg-[#fffcf5] flex flex-col items-center pt-6 md:pt-24 overflow-hidden">
      
      {/* Text Content */}
      <div className="flex flex-col items-center px-4 w-full max-w-[95%] md:max-w-4xl mx-auto z-10">
        <motion.h1 
          {...fadeInUp}
          className="text-5xl sm:text-6xl md:text-[90px] font-bold text-[#f56f7b] leading-none tracking-tight text-center"
        >
          <span className="hidden md:inline">Slam Out Loud</span>
          <span className="inline md:hidden">S.O.L</span>
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-2 md:mt-3 leading-none tracking-tight text-center"
        >
          changes that.
        </motion.p>
        
        <motion.div 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mt-6 md:mt-10 text-center w-full max-w-[500px] md:max-w-[700px]"
        >
          <p className="text-sm sm:text-base md:text-xl italic text-black font-sans leading-relaxed">
            We reimagine learning through the arts, so children in government schools across India can flourish today and be ready for tomorrow.
          </p>
        </motion.div>
      </div>

      {/* Illustration */}
      <motion.div 
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.3 }}
        className="w-full max-w-4xl mx-auto mt-10 md:mt-14 px-6 md:px-12"
      >
        <Image 
          src="/weare_sol.png" 
          alt="We are Slam Out Loud illustration with characters playing instruments" 
          width={1200}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}
