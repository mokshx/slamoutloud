"use client";

import { motion } from "framer-motion";

const focusAreas = ["Bochcha", "Kanti", "Marwan", "Mushahri"];

const BiharCurriculum = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-6 text-black"
    >
      <p className="text-sm md:text-base leading-relaxed">
        Digital Saathi is a{" "}
        <span className="font-bold">SEL-integrated digital literacy curriculum</span>{" "}
        for government schools.
      </p>

      <div className="flex flex-col gap-1">
        <span className="text-2xl md:text-3xl font-bold">49,338</span>
        <p className="text-sm md:text-base italic leading-snug">
          students reached across grades 6–12 by the end of the year
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm md:text-base">Focusing on areas:</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          {focusAreas.map((area, index) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-sm md:text-base font-bold"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BiharCurriculum;
