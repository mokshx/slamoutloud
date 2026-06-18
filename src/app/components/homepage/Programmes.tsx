"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Programmes() {
  return (
    <section id="programmes" className="w-full bg-[#fdfaf4] py-16 md:py-32 px-6 md:px-12 flex justify-center font-sans overflow-hidden">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 lg:gap-16 pl-0 md:pl-8">
        
        {/* Title Section */}
        <div className="w-full lg:w-48 shrink-0 pb-4 lg:pb-0 pt-0 lg:pt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide">
            Our Programs
          </h2>
        </div>

        {/* Cards Section */}
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-24 lg:gap-0 pt-8 lg:pt-12">
          
          {/* Card 1: Art For All */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[420px] bg-[#4ba39c] p-8 md:p-10 shadow-sm top-0 lg:top-4 z-20 flex-1 lg:max-h-[460px]"
          >
            {/* Pencil Illustration */}
            <div className="absolute -left-12 md:-left-[140px] lg:-left-[180px] -bottom-8 md:-bottom-12 w-44 md:w-[240px] lg:w-[280px] aspect-[1/3] z-30 pointer-events-none text-red-500">
              <Image 
                src="/programmes_pencil.png" 
                alt="Pencil character" 
                fill 
                className="object-contain object-bottom"
              />
            </div>

            <div className="relative z-10 text-black flex flex-col h-full pl-12 md:pl-16 lg:pl-0">
              <h3 className="text-xl md:text-[26px] font-bold mb-4 leading-tight">
                Art For All <br className="hidden md:block" /> (AFA)
              </h3>
              <p className="text-[10px] md:text-[11px] leading-relaxed mb-3 font-medium">
                Through state partnerships in <strong>Punjab, Maharashtra and Bihar</strong>, Arts for All works with public education systems to make the art class a regular part of a child&rsquo;s school week. We partner with departments to strengthen policy, curriculum, teacher training and system resources, so arts learning is not optional or occasional, but delivered by government school teachers at scale.
              </p>
              <p className="text-[10px] md:text-[11px] leading-relaxed mb-6 font-medium">
                Our curriculum is deeply contextual, bringing the state&rsquo;s culture, stories and identities into the classroom through the arts. In Punjab, we are co-creating the state&rsquo;s new art textbook, the first major update in over 40 years.
              </p>
              <div className="mt-auto">
                <a href="/afa" className="inline-flex items-center text-[15px] font-medium hover:underline transition-all">
                  Know More <span className="ml-2 text-lg">⟶</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Jijivisha Fellowship */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-[420px] bg-[#fcb060] p-8 md:p-10 shadow-sm z-10 flex-1 lg:mt-12 lg:ml-4 lg:max-h-[460px]"
          >
            {/* Sun Illustration */}
            <div className="absolute -top-24 md:-top-[160px] lg:-top-[200px] -right-16 md:-right-[180px] lg:-right-[220px] w-56 md:w-[320px] lg:w-[400px] aspect-[4/3] z-30 pointer-events-none">
              <Image 
                src="/programmes_sun.png" 
                alt="Sun character" 
                fill 
                className="object-contain object-top"
              />
            </div>

            <div className="relative z-10 text-black flex flex-col h-full pr-8 md:pr-0">
              <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight">
                The Jijivisha <br className="hidden md:block" /> Fellowship
              </h3>
              <p className="text-[11px] md:text-[12px] leading-relaxed mb-3 font-medium">
                Across Delhi, Bengaluru, Mumbai, and Pune, the Jijivisha Fellowship places trained art educators inside schools and communities. Fellows work closely with children, teachers, parents, and local contexts to design powerful art experiences that build identity, aspiration, resilience, and agency.
              </p>
              <p className="text-[11px] md:text-[12px] leading-relaxed mb-6 font-medium">
                These classrooms and community spaces serve as deep learning labs, helping us understand what children need and what high-quality arts-based learning looks like in practice.
              </p>
              <div className="mt-auto">
                <a href="/jijivisha" className="inline-flex items-center text-[15px] font-medium hover:underline transition-all">
                  Know More <span className="ml-2 text-lg">⟶</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
