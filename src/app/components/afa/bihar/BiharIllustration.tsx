"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BiharIllustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full max-w-[260px] aspect-square mx-auto md:mx-0"
    >
      <Image
        src="/afa/bihar_illustration.png"
        alt="Digital Saathi character"
        fill
        className="object-contain"
        sizes="260px"
      />
    </motion.div>
  );
};

export default BiharIllustration;
