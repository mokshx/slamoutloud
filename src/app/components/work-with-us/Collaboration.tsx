"use client";

import Image from "next/image";
import Link from "next/link";

export default function Collaboration() {
  const buttons = [
    {
      label: "Become a fellow",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSejGGVHBq1VYJ8qNSFFp1EPdWt3XdKhEdzB2qbGI1d44WsXwA/viewform",
    },
    {
      label: "Volunteer at SOL",
      link: "https://forms.gle/fPFP1RqJH2xaDfGk7",
    },
    {
      label: "Open roles",
      link: "#", // No link for now
    },
  ];

  return (
    <section className="bg-[#fffcf5] py-5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Buttons Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.link}
              target={button.link !== "#" ? "_blank" : undefined}
              rel={button.link !== "#" ? "noopener noreferrer" : undefined}
              className={`
                px-8 py-4 rounded-xl text-white font-bold text-center text-lg md:text-xl
                transition-all duration-300 transform hover:scale-105 shadow-md
                ${button.link === "#" ? "bg-gray-400 cursor-not-allowed" : "bg-[#49a09d] hover:bg-[#3a8280] active:scale-95"}
              `}
              onClick={(e) => button.link === "#" && e.preventDefault()}
            >
              {button.label}
            </Link>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-3/5 aspect-[4/3]">
          <Image
            src="/work-with-us/collaboration2.png"
            alt="Collaboration Illustration"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      </div>
    </section>
  );
}
