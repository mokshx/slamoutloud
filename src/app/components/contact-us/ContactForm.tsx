"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const formContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fieldUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="send-message"
      className="relative bg-[#fb747b] py-16 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Decorative floating blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-black/5 blur-3xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center"
            >
              <div className="max-w-3xl mx-auto bg-white/10 p-12 rounded-3xl backdrop-blur-sm">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="text-4xl font-bold mb-6 text-white"
                >
                  Message sent!
                </motion.h2>
                <p className="text-2xl text-white/90 mb-8">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStatus("idle")}
                  className="bg-[#FBB059] text-white text-xl font-bold py-3 px-10 rounded-xl hover:bg-[#fa9d2e] transition-colors"
                >
                  Send another message
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                Send us a message
              </h2>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-8"
                variants={formContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <motion.div variants={fieldUp} className="space-y-3">
                    <label htmlFor="name" className="block text-xl font-bold text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#ff9a9f] border-none rounded-full py-4 px-6 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fieldUp} className="space-y-3">
                    <label htmlFor="email" className="block text-xl font-bold text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="We'll reply here"
                      className="w-full bg-[#ff9a9f] border-none rounded-full py-4 px-6 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div variants={fieldUp} className="space-y-3">
                  <label htmlFor="subject" className="block text-xl font-bold text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-[#ff9a9f] border-none rounded-full py-4 px-6 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={fieldUp} className="space-y-3">
                  <label htmlFor="message" className="block text-xl font-bold text-white">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind"
                    className="w-full bg-[#ff9a9f] border-none rounded-3xl py-4 px-6 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all resize-none"
                  />
                </motion.div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-900 font-bold text-center bg-red-100/80 py-3 rounded-xl border border-red-200"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div variants={fieldUp} className="flex justify-center pt-8">
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status === "loading" ? {} : { scale: 1.05 }}
                    whileTap={status === "loading" ? {} : { scale: 0.95 }}
                    className={`${
                      status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-[#fa9d2e] shadow-lg"
                    } bg-[#FBB059] text-white text-3xl font-bold py-4 px-20 rounded-2xl transition-colors flex items-center gap-4`}
                  >
                    {status === "loading" ? (
                      <>
                        <span className="animate-spin h-6 w-6 border-4 border-white border-t-transparent rounded-full"></span>
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
