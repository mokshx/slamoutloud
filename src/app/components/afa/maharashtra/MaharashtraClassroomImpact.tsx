"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const numericStats = [
  { value: "43", label: "SEL Champions" },
  { value: "534", label: "Schools" },
  { value: "60,000+", label: "Students" },
  { value: "534", label: "Teachers" },
];

const percentageStats = [
  {
    value: "75%+",
    label: "students actively participated and completed learning activities.",
  },
  {
    value: "50%+",
    label: "classrooms showed 2 out of 3 students mastering lesson objectives.",
  },
  {
    value: "50%",
    label: "students advanced at least 1 level in curiosity, imagination, & emotional awareness.",
  },
];

const MaharashtraClassroomImpact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
      {/* Left: Heading + copy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-6"
      >
        <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
          What changed
          <br />
          in classrooms?
        </h3>
        <p className="text-sm md:text-base text-black leading-relaxed">
          Teachers reported fewer disruptions and greater confidence in
          managing classrooms.
        </p>
        <p className="text-sm md:text-base text-black leading-relaxed">
          Students began linking their creativity to real issues, developing
          climate-conscious behaviors.
        </p>
      </motion.div>

      {/* Middle: Numeric stats + illustration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {numericStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-1"
            >
              <span className="text-2xl md:text-3xl font-bold text-black">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-black/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="relative w-40 h-32 md:w-48 md:h-36">
          <Image
            src="/afa/maharashtra/afa_illustration.png"
            alt="Child reaching out to a butterfly"
            fill
            className="object-contain object-left"
          />
        </div>
      </motion.div>

      {/* Right: Percentage stats */}
      <div className="flex flex-col gap-8">
        {percentageStats.map((stat, index) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-2"
          >
            <span className="text-2xl md:text-3xl font-bold text-black">
              {stat.value}
            </span>
            <p className="text-sm md:text-base italic text-black/80 leading-snug">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MaharashtraClassroomImpact;
