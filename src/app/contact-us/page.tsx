"use client";

import { motion } from "framer-motion";
import Hero from "../components/contact-us/Hero";
import ContactTabs from "../components/contact-us/ContactTabs";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <main className="min-h-screen pt-5 bg-[#fffcf5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ContactTabs />
      </motion.div>

      <Footer />
    </main>
  );
}
