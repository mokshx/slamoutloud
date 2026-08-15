"use client";

import React, { useState } from "react";

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    affiliation: "",
    type: "",
    more: "",
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
      const response = await fetch("/api/partner-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          org: "",
          affiliation: "",
          type: "",
          more: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <section id="partner-with-us" className="bg-[#4AB097] py-16 px-6 md:px-16 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto bg-white/10 p-12 rounded-3xl backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-6 text-black">Thank you!</h2>
          <p className="text-2xl text-black/80 mb-8">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="bg-[#FBB059] text-white text-xl font-bold py-3 px-10 rounded-xl hover:bg-[#fa9d2e] transition-all"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="partner-with-us" className="bg-[#4AB097] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Partner with us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-3">
              <label htmlFor="name" className="block text-xl font-bold text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-[#75C4B2] border-none rounded-full py-4 px-6 text-black placeholder-gray-700/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label htmlFor="email" className="block text-xl font-bold text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="We'll reach out here"
                className="w-full bg-[#75C4B2] border-none rounded-full py-4 px-6 text-black placeholder-gray-700/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            {/* Organisation / Company */}
            <div className="space-y-3">
              <label htmlFor="org" className="block text-xl font-bold text-black">
                Organisation / Company
              </label>
              <input
                type="text"
                id="org"
                required
                value={formData.org}
                onChange={handleChange}
                placeholder="Where you work or represent"
                className="w-full bg-[#75C4B2] border-none rounded-full py-4 px-6 text-black placeholder-gray-700/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            {/* Your Affiliation */}
            <div className="space-y-3">
              <label htmlFor="affiliation" className="block text-xl font-bold text-black">
                Your Affiliation
              </label>
              <input
                type="text"
                id="affiliation"
                required
                value={formData.affiliation}
                onChange={handleChange}
                placeholder="e.g., government, school, nonprofit, CSR, research, individual support"
                className="w-full bg-[#75C4B2] border-none rounded-full py-4 px-6 text-black placeholder-gray-700/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>
          </div>

          {/* Partnership Type */}
          <div className="space-y-3">
            <label htmlFor="type" className="block text-xl font-bold text-black">
              What kind of partnership are you exploring?
            </label>
            <input
              type="text"
              id="type"
              required
              value={formData.type}
              onChange={handleChange}
              placeholder="Program collaboration, Government partnership, Research, Funding support, Others"
              className="w-full bg-[#75C4B2] border-none rounded-full py-4 px-6 text-black placeholder-gray-700/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Tell us more */}
          <div className="space-y-3">
            <label htmlFor="more" className="block text-xl font-bold text-black">
              Tell us more about what you're looking for.
            </label>
            <textarea
              id="more"
              rows={1}
              required
              value={formData.more}
              onChange={handleChange}
              placeholder="A short description helps us reach the right team member"
              className="w-full bg-[#75C4B2] border-none rounded-full py-4 px-6 text-black placeholder-gray-700/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none min-h-[60px]"
            />
          </div>

          {status === "error" && (
            <div className="text-red-900 font-bold text-center bg-red-100/50 py-3 rounded-xl border border-red-200">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={status === "loading"}
              className={`${
                status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-[#fa9d2e] transform hover:scale-105 active:scale-95 shadow-lg"
              } bg-[#FBB059] text-white text-3xl font-bold py-4 px-20 rounded-2xl transition-all flex items-center gap-4`}
            >
              {status === "loading" ? (
                <>
                  <span className="animate-spin h-6 w-6 border-4 border-white border-t-transparent rounded-full"></span>
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
