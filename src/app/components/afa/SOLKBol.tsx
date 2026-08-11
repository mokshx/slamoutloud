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
            Across Punjab, Maharashtra and Bihar, we build contextual
            curriculum rooted in the state&rsquo;s culture, stories and
            identities, train and coach government school teachers through
            the year, and strengthen state resources for arts-based learning.
            We also create platforms for children who want to go deeper into
            the arts, opening pathways for creative expression, confidence
            and future possibility.
          </h2>
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
