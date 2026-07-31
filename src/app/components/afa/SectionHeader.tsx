"use client";

import { Download, ChevronUp } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  linkLabel: string;
  isOpen: boolean;
  onToggle: () => void;
}

const SectionHeader = ({ title, linkLabel, isOpen, onToggle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-4 md:px-8 lg:px-16 py-6 md:py-8">
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-lg md:text-xl font-bold text-black">{title}</h2>

        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors duration-300 px-4 py-2 text-xs md:text-sm font-semibold text-black"
        >
          <Download size={14} strokeWidth={2} />
          {linkLabel}
        </a>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Collapse section" : "Expand section"}
        className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-black/60 text-black transition-colors duration-300 hover:bg-black/5"
      >
        <ChevronUp
          size={20}
          strokeWidth={1.75}
          className={`transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
    </div>
  );
};

export default SectionHeader;
