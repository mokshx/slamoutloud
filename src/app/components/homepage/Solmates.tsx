"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const solmates = [
  {
    name: "Jigyasa Labroo",
    designation: "Co-Founder and CEO",
    linkedin: "https://www.linkedin.com/in/jigyasa-labroo/",
    image: "jigyasa_labroo.png"
  },
  {
    name: "Sanea Mahajan",
    designation: "Senior Manager – People and Culture",
    linkedin: "https://www.linkedin.com/in/saneamahajan/",
    image: "sanea_mahajan.png"
  },
  {
    name: "Nida Anwar",
    designation: "Senior Associate – Talent Management and Operations",
    linkedin: "https://www.linkedin.com/in/nida-anwar-81557b213/",
    image: "nida_anwar.png"
  },
  {
    name: "Jade Fernandez",
    designation: "Program Manager, Pune – The Jijivisha Fellowship",
    linkedin: "https://www.linkedin.com/in/jade-fernandez-79ba0613b/",
    image: "jade_fernandez.png"
  },
  {
    name: "Aditi Ganguly",
    designation: "Program Manager, Mumbai – The Jijivisha Fellowship",
    linkedin: "https://www.linkedin.com/in/aditi-ganguly-395b82125/",
    image: "aditi_ganguly.png"
  },
  {
    name: "Pragnya Nagarhalli",
    designation: "Program Manager, Bangalore – The Jijivisha Fellowship",
    linkedin: "https://www.linkedin.com/in/pragnyamurthynagarhalli/",
    image: "praganya_nagarhali.png"
  },
  {
    name: "Rakishma",
    designation: "Associate Director – Impact Evaluation and Program Design",
    linkedin: "https://www.linkedin.com/in/rakishma-m-a02476233/",
    image: "rakishma.png"
  },
  {
    name: "Veer Rathi",
    designation: "Director – Learning Excellence",
    linkedin: "http://www.linkedin.com/in/neha-rathi-a4522018",
    image: "veer_r.jpg"
  },
  {
    name: "Ashvini Sawant",
    designation: "Associate Director – Government Partnerships",
    linkedin: "https://www.linkedin.com/in/ashvini-sawant-5a016055/",
    image: "ashwani_sawant.png"
  },
  {
    name: "Nishant",
    designation: "Senior Associate – Government Partnerships",
    linkedin: "https://www.linkedin.com/in/nishant-43692343/",
    image: "nishant.png"
  },
  {
    name: "Khayal Sharma",
    designation: "Program Manager, Punjab – Arts for All",
    linkedin: "http://www.linkedin.com/in/khayal-sharma-8561a2167",
    image: "khayal_sharma.png"
  },
  {
    name: "Kalyani Dadmal",
    designation: "Associate Consultant – Learning Excellence",
    linkedin: "https://www.linkedin.com/in/kalyani-dadmal-0a8b92255/",
    image: "kalyani_damal.png"
  },
  {
    name: "Shriya Vaidya",
    designation: "Senior Manager – Curriculum",
    linkedin: "https://www.linkedin.com/in/shriya-vaidya-0869661a3/",
    image: "shriya_vaidya.png"
  },
  {
    name: "Vaishali Das",
    designation: "Consultant – Curriculum",
    linkedin: "https://www.linkedin.com/in/vaishali-das-86112a295/",
    image: "vaishali_das.png"
  },
  {
    name: "Nandita V. Shastri",
    designation: "Senior Associate – Communications and Platforming",
    linkedin: "https://www.linkedin.com/in/arttheoretica/",
    image: "nandita_shastri.png"
  },
  {
    name: "Angela Peter",
    designation: "Program Associate, Delhi – The Jijivisha Fellowship",
    linkedin: "https://www.linkedin.com/in/angela-peter-2a9179197/",
    image: "angela_peter.png"
  },
  {
    name: "Deeksha Maharani",
    designation: "Program Associate, Punjab – Arts for All",
    linkedin: "https://www.linkedin.com/in/deeksha-maharani-984a34210/",
    image: "deeksha_maharani.png"
  },
  {
    name: "Damini Nimburkar",
    designation: "Associate Consultant – Learning Excellence",
    linkedin: "https://www.linkedin.com/in/damini-nimburkar-017634198/",
    image: "damini_nimburker.png"
  },
  {
    name: "Gauri Konanoor",
    designation: "Senior Associate – Platforming",
    linkedin: "https://www.linkedin.com/in/gauri-konanoor/",
    image: "gauri_konanoor.png"
  },
  {
    name: "Noor Bali",
    designation: "Consultant, Life Skills, Punjab.",
    linkedin: "https://www.linkedin.com/in/noorbali02/",
    image: "noor_bali.png"
  },
  {
    name: "Shriram K",
    designation: "Senior Manager – Partnerships and Fundraising",
    linkedin: "https://www.linkedin.com/in/shriram-k-33b858126/",
    image: "shriram_k.png"
  },
  {
    name: "Tanvi Verma",
    designation: "Associate – Monitoring, Evaluation & Learning",
    linkedin: "https://www.linkedin.com/in/tanvi-verma-8a0532223/",
    image: "tanvi_verma.png"
  },
  {
    name: "Arushi Bhardwaj",
    designation: "Senior Associate – Finance and Admin",
    linkedin: "https://www.linkedin.com/in/arushi-bhardwaj-83883317a6",
    image: "arushi_bhardwaj.png"
  },
  {
    name: "Mridula Reddy",
    designation: "Associate Director – Programs, The Jijivisha Fellowship",
    linkedin: "https://www.linkedin.com/in/mridula-reddy/",
    image: "mridula_reddy.png"
  },
  {
    name: "Varun Pawar",
    designation: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/varun-pawar-bab21657/",
    image: "varun_pawar.png"
  },
  {
    name: "Sneha Gala",
    designation: "Program Associate, Mumbai – The Jijivisha Fellowship",
    linkedin: "https://www.linkedin.com/in/sneha-gala-a382281a8/",
    image: "sneha_gala.png"
  },
  {
    name: "Sakshi Chandak",
    designation: "Associate, Graphic Designs and Copywriting",
    linkedin: "https://www.linkedin.com/in/sakshi-chandak-318732238/",
    image: "sakshi_chandak.png"
  },
  {
    name: "Naman Goel",
    designation: "Program Manager, Delhi – The Jijivisha Fellowship",
    linkedin: "https://www.linkedin.com/in/kahaaniwaladost/",
    image: "naman_goel.png"
  },
  {
    name: "Rahul Rai",
    designation: "Associate Consultant – Learning Excellence",
    linkedin: "https://www.linkedin.com/in/rahulrai173/",
    image: "rahul_rai.png"
  },
  {
    name: "Vishal Jadhav",
    designation: "Associate Consultant – Learning Excellence",
    linkedin: "https://www.linkedin.com/in/vishal-jadhav-410439210/",
    image: "vishal_jadhav.png"
  },
  {
    name: "Amandeep Singh",
    designation: "Community Leader - Nabha, Punjab",
    linkedin: "https://www.linkedin.com/in/amandeep-singh-19635b289/",
    image: "amandeep_singh.png"
  }
];

const BASE_URL = "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/images/";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Solmates = () => {
  // Inject the "Meet Our SOLmates" block at Row 3, Column 7 (index 22)
  const displayItems = [
    ...solmates.slice(0, 22),
    { isText: true, name: "", designation: "", linkedin: "", image: "" },
    ...solmates.slice(22),
  ];

  return (
    <section className="bg-[#FDF9F3] py-20 px-4 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2"
        >
          {displayItems.map((item: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="aspect-square relative overflow-hidden group rounded-sm"
            >
              {item?.isText ? (
                <div className="flex flex-col justify-center h-full p-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-[1.1] tracking-tight">
                    Meet<br />Our<br />SOLmates
                  </h2>
                </div>
              ) : (
                <div className="relative w-full h-full cursor-pointer">
                  {/* Image with blur transition */}
                  <Image
                    src={`${BASE_URL}${item.image}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                    className="object-cover transition-all duration-500 group-hover:blur-md group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-4 z-10">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.name}
                    </h3>
                    <p className="text-white/90 text-[10px] md:text-xs font-medium mb-3 max-w-[90%] leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.designation}
                    </p>
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-white text-xs md:text-sm italic underline font-semibold hover:text-white/80 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solmates;
