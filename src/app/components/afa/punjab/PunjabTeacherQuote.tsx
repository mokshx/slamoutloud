"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PunjabTeacherQuote = () => {
  return (
    <div className="flex flex-col gap-10">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-xl md:text-2xl font-bold text-black"
      >
        As one teacher shared:
      </motion.h3>

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col gap-4 text-base md:text-lg font-medium leading-relaxed text-black"
      >
        <p>
          &ldquo;These days, many students are going through different
          emotional and psychological challenges.
        </p>
        <p>
          When we address these through art-based activities, I see them open
          up and participate more in class.&rdquo;
        </p>
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center gap-4"
      >
        <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/afa/punjab/afa_teacher.png"
            alt="Ishu Parmar, Art Mentor, Government High School Darauli"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm md:text-base font-semibold text-black leading-snug">
          -Ishu Parmar, Art Mentor,
          <br />
          Government High School Darauli
        </p>
      </motion.div>
    </div>
  );
};

export default PunjabTeacherQuote;
