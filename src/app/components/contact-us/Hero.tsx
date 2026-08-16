"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative bg-[#fffcf5] pt-8 pb-16 md:pt-16 md:pb-20 px-6 md:px-8 overflow-hidden">
      {/* Decorative floating blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-10 -left-16 w-64 h-64 rounded-full bg-[#fb747b]/15 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-16 -right-20 w-72 h-72 rounded-full bg-[#4AB097]/15 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-[#FBB059]/15 blur-3xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black"
        >
          Let&apos;s talk
          <span className="block text-[#fb747b]">we&apos;d love to hear from you.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg md:text-xl font-medium text-black/70"
        >
          Whether you want to partner with SOL, support our work, or just say
          hello &mdash; drop us a message and we&apos;ll get back to you soon.
        </motion.p>
      </motion.div>
    </section>
  );
}
