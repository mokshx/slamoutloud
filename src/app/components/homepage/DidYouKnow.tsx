"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DidYouKnow() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="w-full bg-[#fffcf5] py-10 md:py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2 
          {...fadeInUp}
          className="text-2xl md:text-3xl font-normal mb-8 md:mb-12"
        >
          Our reality
        </motion.h2>

        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Intro Text */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed">
              The capacities children need most are built when they create, perform, question, and discover.
            </p>
            <p className="text-base leading-relaxed">
              Global research shows that the visual and performing arts are among the most natural ways to nurture these skills. Yet, in our schools, the arts remain deeply deprioritized.
            </p>
          </motion.div>

          {/* Middle Column - Stat 1 with Illustration */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="border-l-2 border-black pl-6 mb-6">
              <p className="text-lg italic mb-1">Children get</p>
              <p className="text-3xl font-bold mb-1">less than 20 hours</p>
              <p className="text-lg italic">of arts learning a year.</p>
            </div>
            <div className="relative w-48 h-48">
              <Image
                src="/section2_illustration1.png"
                alt="Melting clock illustration"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column - Stat 2 with Illustration */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="border-l-2 border-black pl-6 mb-6">
              <p className="text-lg italic mb-1">An average</p>
              <p className="text-lg italic mb-1">art teacher–student</p>
              <p className="text-lg italic">ratio is <span className="font-bold text-2xl">1:1400.</span></p>
            </div>
            <div className="relative w-48 h-48">
              <Image
                src="/section2_illustration2.png"
                alt="Hand with pencil illustration"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Tablet Layout - 2 Column Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-8">
          {/* Top Left - Intro Text */}
          <motion.div 
            {...fadeInUp}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed">
              The capacities children need most are built when they create, perform, question, and discover.
            </p>
            <p className="text-base leading-relaxed">
              Global research shows that the visual and performing arts are among the most natural ways to nurture these skills. Yet, in our schools, the arts remain deeply deprioritized.
            </p>
          </motion.div>

          {/* Top Right - Empty for spacing */}
          <div></div>

          {/* Bottom Left - Stat 1 */}
          <motion.div 
            {...fadeInUp}
            className="flex flex-col"
          >
            <div className="border-l-2 border-black pl-6 mb-4">
              <p className="text-lg italic mb-1">Children get</p>
              <p className="text-2xl font-bold mb-1">less than 20 hours</p>
              <p className="text-lg italic">of arts learning a year.</p>
            </div>
            <div className="flex justify-center mt-4">
              <div className="relative w-40 h-40">
                <Image
                  src="/section2_illustration1.png"
                  alt="Melting clock illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Right - Stat 2 */}
          <motion.div 
            {...fadeInUp}
            className="flex flex-col"
          >
            <div className="border-l-2 border-black pl-6 mb-4">
              <p className="text-lg italic mb-1">An average</p>
              <p className="text-lg italic mb-1">art teacher–student</p>
              <p className="text-lg italic">ratio is <span className="font-bold text-xl">1:1400.</span></p>
            </div>
            <div className="flex justify-center mt-4">
              <div className="relative w-40 h-40">
                <Image
                  src="/section2_illustration2.png"
                  alt="Hand with pencil illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden space-y-6">
          {/* Intro Text */}
          <motion.div 
            {...fadeInUp}
            className="space-y-4"
          >
            <p className="text-sm leading-relaxed">
              The capacities children need most are built when they create, perform, question, and discover.
            </p>
            <p className="text-sm leading-relaxed">
              Global research shows that the visual and performing arts are among the most natural ways to nurture these skills. Yet, in our schools, the arts remain deeply deprioritized.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {/* Stat 1 */}
            <motion.div 
              {...fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="border-l-2 border-black pl-6 mb-4 self-start">
                <p className="text-base italic mb-1">Children get</p>
                <p className="text-xl font-bold mb-1">less than 20 hours</p>
                <p className="text-base italic">of arts learning a year.</p>
              </div>
              <div className="relative w-36 h-36">
                <Image
                  src="/section2_illustration1.png"
                  alt="Melting clock illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              {...fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="border-l-2 border-black pl-6 mb-4 self-start">
                <p className="text-base italic mb-1">An average</p>
                <p className="text-base italic mb-1">art teacher–student</p>
                <p className="text-base italic">ratio is <span className="font-bold text-lg">1:1400.</span></p>
              </div>
              <div className="relative w-36 h-36">
                <Image
                  src="/section2_illustration2.png"
                  alt="Hand with pencil illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
