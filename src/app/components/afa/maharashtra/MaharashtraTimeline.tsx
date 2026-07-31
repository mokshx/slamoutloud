"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2022–23",
    description:
      "Began working in Maharashtra with SCERT in Chandrapur and Bhiwandi, reaching 80 Grade 6 classes.",
  },
  {
    year: "2024",
    description:
      "Launched Project Abhivyakti with the Tribal Development Department, piloting arts-based SEL.",
  },
  {
    year: "2025",
    description:
      "Project Abhivyakti became a government-supported initiative through a 3-year partnership with the Tribal Development Department.",
  },
];

const MaharashtraTimeline = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
      {/* Left: Classroom image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full min-h-[320px] overflow-hidden rounded-lg shadow-md"
      >
        <Image
          src="/afa/maharashtra/afa_hero.png"
          alt="Teacher leading a classroom discussion in Maharashtra"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Right: Timeline */}
      <div className="flex flex-col">
        {milestones.map((milestone, index) => {
          const isFirst = index === 0;
          const isLast = index === milestones.length - 1;

          return (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex gap-4 md:gap-6"
            >
              <div className="w-20 md:w-24 flex-shrink-0 text-right">
                <span className="text-lg md:text-2xl font-bold text-black">
                  {milestone.year}
                </span>
              </div>

              <div className="flex flex-col items-center flex-shrink-0 self-stretch">
                <div className={`w-px flex-1 ${isFirst ? "bg-transparent" : "bg-black/60"}`} />
                <div className="w-3 h-3 rounded-full bg-black flex-shrink-0 my-1" />
                <div className={`w-px flex-1 ${isLast ? "bg-transparent" : "bg-black/60"}`} />
              </div>

              <div className={`flex-1 ${isLast ? "" : "pb-12 md:pb-14"}`}>
                <p className="text-sm md:text-base text-black leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MaharashtraTimeline;
