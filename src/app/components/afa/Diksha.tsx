"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const statesData = [
  {
    name: "Punjab (2022)",
    content: "Gender Equity",
    reach: "5.8 million students | 2.57 lakh teachers",
  },
  {
    name: "Maharashtra (2023)",
    content: "Gender Equity + Gen Earth",
    reach: "5.7 million students | 2.42 lakh teachers",
  },
  {
    name: "Haryana (2024)",
    content: "Gender Equity + Gen Earth",
    reach: "5 million students | 94,000 teachers",
  },
  {
    name: "Andhra Pradesh (2025)",
    content: "Digital Literacy Awareness",
    reach: "2.5 million students | 2.1 lakh teachers",
  },
];

const Diksha = () => {
  return (
    <section className="bg-[#FAF7F2] py-20 px-4 md:px-8 lg:px-16 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Column 1: Title & Image (Takes 2/5 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight">
              Digital Reach via DIKSHA
            </h2>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-gray-100">
              <Image
                src="/afa/diksha.png"
                alt="Digital Reach via Diksha"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Column 2: States Grid (Takes 3/5 columns) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:pt-2">
            {statesData.map((state, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <h3 className="text-lg md:text-xl font-bold text-black mb-6">{state.name}</h3>
                <div className="flex flex-col gap-3 text-base md:text-lg text-gray-800">
                  <p className="leading-relaxed">
                    <span className="font-semibold">Content:</span> {state.content}
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold">Reach:</span> {state.reach}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diksha;