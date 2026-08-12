"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "1,400+", label: "Schools" },
  { value: "2,00,000", label: "Children" },
  { value: "37,000", label: "Students Performed" },
  { value: "5,000+", label: "Performances" },
];

const PunjabOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
      {/* Left: Performance image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full min-h-[320px] overflow-hidden rounded-lg shadow-md"
      >
        <Image
          src="/afa/punjab/afa_hero.png"
          alt="Student performing at a Kala Sath showcase"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Right: Copy, stats, SCERT highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-4 text-black">
          <p className="text-base md:text-lg font-medium leading-relaxed">
            We scaled arts-integrated SEL across all 23 Punjab districts in
            partnership with SCERT, reimagining education.
          </p>
          <p className="text-base md:text-lg font-medium leading-relaxed">
            Students&rsquo; voices came alive at Kala Sath showcases in
            collective arts-based expression.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-1"
            >
              <span className="text-lg md:text-xl font-bold text-black">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-black/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-between gap-4 bg-black/5 rounded-xl p-5 md:p-6"
        >
          <div className="flex flex-col gap-3 text-black">
            <p className="text-sm md:text-base font-semibold leading-snug">
              After nearly four decades, Punjab&rsquo;s art education is being
              reformed.
            </p>
            <p className="text-sm md:text-base leading-snug">
              Through a state-wide redesign of art textbooks across all 23
              districts, in <span className="font-bold">partnership with SCERT</span>.
            </p>
          </div>
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
            <Image
              src="/afa/punjab/afa_illustration.png"
              alt="Children reading a redesigned art textbook"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PunjabOverview;
