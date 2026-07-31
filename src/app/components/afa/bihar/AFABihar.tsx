"use client";

import { motion } from "framer-motion";
import BiharHeader from "./BiharHeader";
import BiharIllustration from "./BiharIllustration";
import BiharCurriculum from "./BiharCurriculum";
import BiharPartnership from "./BiharPartnership";

const AFABihar = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.15 }}
      className="w-full bg-[#F9B969] py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto">
        <BiharHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16 px-4 md:px-8 lg:px-16 pt-2">
          <BiharIllustration />
          <BiharCurriculum />
          <BiharPartnership />
        </div>
      </div>
    </motion.section>
  );
};

export default AFABihar;
