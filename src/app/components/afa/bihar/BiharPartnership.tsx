"use client";

import { motion } from "framer-motion";

const BiharPartnership = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-6 text-black"
    >
      <p className="text-sm md:text-base leading-relaxed">
        In partnership with{" "}
        <span className="font-bold">
          Girl Rising and the District Education Office.
        </span>
      </p>

      <p className="text-sm md:text-base leading-relaxed">
        Teacher were trained to implement the curriculum through interactive,
        arts-based methods that make digital education engaging and
        human-centered.
      </p>

      <p className="text-sm md:text-base leading-relaxed">
        By connecting digital literacy with SEL, Digital Saathi ensures that
        as internet access spreads through Bihar.
      </p>
    </motion.div>
  );
};

export default BiharPartnership;
