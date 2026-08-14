"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#FAF7F2] py-12 px-4 md:px-8 lg:px-16 flex justify-center">
      <div className="relative w-full max-w-7xl">
        {/* Background Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/10] w-full overflow-hidden rounded-[40px] shadow-lg"
        >
          <Image
            src="/afa/hero.png"
            alt="Arts for All (AFA)"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>

        {/* Pink Content Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 right-0 md:bottom-8 md:right-8 w-full sm:w-[60%] md:w-[50%] lg:w-[40%] bg-[#F2707E] p-6 sm:p-8 md:p-10 lg:p-12 text-white z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Arts for All <br /> (AFA)
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Arts for All partners with state governments to make learning
            using the arts and artistic pedagogy a regular, high-quality part
            of public education. We work at the policy and system level to
            ensure children in government schools get access to learning
            through the arts as a part of their school week, and then
            transform that time into a meaningful space for learning,
            expression, and growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
