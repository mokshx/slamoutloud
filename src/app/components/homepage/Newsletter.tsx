"use client";

import Image from "next/image";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting newsletter:", error);
      setStatus("error");
      setMessage("Failed to subscribe. Please check your connection.");
    }
  };

  return (
    <section className="w-full bg-[#FFF9F1] py-12 md:py-20 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Left Section: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-[500px] aspect-[1.5/1]">
            <Image
              src="/newsletter.png"
              alt="Newsletter Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Section: Content & Form */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-tight">
              Subscribe to SOL&apos;s newsletter
            </h2>
            <p className="text-lg md:text-xl text-black font-medium max-w-md">
              Receive updates on what SOL is up to, mindfulness activities and art in your inbox!
            </p>
          </div>

          {/* Subscription Form */}
          <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="relative flex w-full max-w-xl group">
              <div className="relative flex w-full border-2 border-black rounded-xl overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email"
                  className="flex-grow min-w-0 py-4 px-4 md:px-6 text-lg outline-none text-black placeholder:text-gray-400"
                  required
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="shrink-0 bg-[#FF7B7B] text-black px-6 md:px-12 py-4 text-xl font-bold border-l-2 border-black hover:bg-[#ff6b6b] transition-colors active:translate-y-0.5 disabled:opacity-50"
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
            
            {status === "success" && (
              <p className="text-green-600 font-bold text-lg">{message}</p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-bold text-lg">{message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
