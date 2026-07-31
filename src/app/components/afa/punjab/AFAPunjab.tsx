"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PunjabHeader from "./PunjabHeader";
import PunjabOverview from "./PunjabOverview";
import PunjabClassroomImpact from "./PunjabClassroomImpact";
import PunjabTeacherQuote from "./PunjabTeacherQuote";

const AFAPunjab = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.15 }}
      className="w-full bg-[#F2707E] py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto">
        <PunjabHeader isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      </div>

      <div
        className={`grid transition-all duration-700 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20 px-4 md:px-8 lg:px-16 pb-12 md:pb-16 pt-2">
            <PunjabOverview />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <PunjabClassroomImpact />
              <PunjabTeacherQuote />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AFAPunjab;
