"use client";

import { motion } from "framer-motion";

const teacherStats = [
  { value: "80%+", label: "grown ability in SEL and arts integration." },
  { value: "83.8%", label: "create safe spaces for sharing through art." },
  { value: "81.2%", label: "helping peers integrate SEL into their practice." },
];

const studentStats = [
  { value: "79%", label: "ask meaningful questions to deepen learning." },
  { value: "80.2%", label: "confidently share classroom learnings." },
  { value: "75%", label: "of students engage actively in analytical activities." },
];

const StatGroup = ({
  title,
  items,
}: {
  title: string;
  items: { value: string; label: string }[];
}) => (
  <div className="flex flex-col gap-6">
    <h4 className="text-sm md:text-base font-semibold text-black/80">
      {title}
    </h4>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-2"
        >
          <span className="text-2xl md:text-3xl font-bold text-black">
            {item.value}
          </span>
          <p className="text-sm md:text-base italic text-black/80 leading-snug">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

const PunjabClassroomImpact = () => {
  return (
    <div className="flex flex-col gap-10">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-xl md:text-2xl font-bold text-black"
      >
        What changed in classrooms?
      </motion.h3>

      <StatGroup title="For Teachers" items={teacherStats} />
      <StatGroup title="For Students" items={studentStats} />
    </div>
  );
};

export default PunjabClassroomImpact;
