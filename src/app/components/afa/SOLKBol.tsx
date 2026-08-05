"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SOLKBol = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 px-4 md:px-8 lg:px-16 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-black">
            AFA upskills art teachers to integrate identity, aspiration, and inner readiness into existing art periods,{" "}
            <span className="font-bold italic">
              creating platforms where student voice becomes visible at scale.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-4 lg:gap-8">
            <div className="border-l-[1.5px] border-black pl-4 py-1 flex-1">
              <p className="text-sm md:text-base text-black font-medium leading-snug">
                Students learn to read their world
              </p>
            </div>
            <div className="border-l-[1.5px] border-black pl-4 py-1 flex-1">
              <p className="text-sm md:text-base text-black font-medium leading-snug">
                Locate themselves within it, and show up fully
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-[5/4] w-full overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src="/afa/sol_k_bol.png"
            alt="SOL KE BOL"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SOLKBol;
