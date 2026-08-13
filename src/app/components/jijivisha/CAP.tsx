"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CAP() {
  return (
    <section className="bg-[#FAF7F2] py-12 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* Peach Box - Community Art Projects (CAPs) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] bg-[#F9C784] p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-4">
              Community Art Projects (CAPs)
            </h2>
            <p className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-8">
              Showcase platform for<br />The Jijivisha Fellowship
            </p>

            <div className="space-y-6 text-[#1A1A1A] text-lg leading-relaxed">
              <p>
                Through Community Art Projects, fellows work with children to respond to their own realities. These projects either address a challenge in the community or celebrate its culture, stories, and abundance. Children document family histories, create films on social issues, design murals, publish books, and build theatre performances.
              </p>
              <p>
                In the process, children move from passive observers to active co-creators. Parents become collaborators. Communities begin to see young people as leaders, storytellers, and changemakers.
              </p>
            </div>

            {/* Pretzel Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-12 -left-12 w-48 h-48 pointer-events-none hidden lg:block"
            >
              <Image
                src="/jijivisha/pretzel.png"
                alt="Decorative pretzel"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Teal Box - Impact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] bg-[#4E9F8F] p-8 md:p-12 lg:p-16 relative lg:mt-12 lg:ml-[-2rem] z-20 flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
              Impact
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 mb-16">
              <div className="text-white">
                <span className="text-4xl md:text-5xl font-bold block mb-2">332+</span>
                <p className="text-sm md:text-base opacity-90 leading-snug">
                  Hours of training and support for fellows
                </p>
              </div>
              <div className="text-white">
                <span className="text-4xl md:text-5xl font-bold block mb-2">26.4%</span>
                <p className="text-sm md:text-base opacity-90 leading-snug">
                  Improvement in curiosity
                </p>
              </div>
              <div className="text-white">
                <span className="text-4xl md:text-5xl font-bold block mb-2">9.1%</span>
                <p className="text-sm md:text-base opacity-90 leading-snug">
                  Improvement in emotional regulation
                </p>
              </div>
              <div className="text-white">
                <span className="text-4xl md:text-5xl font-bold block mb-2">22.1%</span>
                <p className="text-sm md:text-base opacity-90 leading-snug">
                  Improvement in imagination
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="text-white border-t border-white/20 pt-8 mt-auto">
              <p className="text-base md:text-lg italic leading-relaxed mb-6">
                “Since 2022, Slam Out Loud's impact at Ashoka Shishu Vihara has been transformative. Their creative classroom sessions, house visits and emotional parent workshops has built unprecedented bonds within our community.
              </p>
              <p className="text-base md:text-lg italic leading-relaxed mb-6">
                The fellows bring incredible energy, and our teachers have shown remarkable growth in confidence. SOL has brought a renewed sense of possibility to our school, and we are deeply grateful for this partnership.”
              </p>
              <p className="font-bold text-lg">
                Sudhir Kiran, Educational Leader
              </p>
            </div>

            {/* Star Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-16 -right-16 md:-top-24 md:-right-24 w-64 h-64 md:w-80 md:h-80 pointer-events-none hidden lg:block"
            >
              <Image
                src="/jijivisha/star.png"
                alt="Decorative star character"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
