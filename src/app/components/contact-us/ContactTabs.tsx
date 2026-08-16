"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, Rss, LucideIcon } from "lucide-react";
import ContactForm from "./ContactForm";
import PartnerForm from "../about/PartnerForm";
import Newsletter from "../homepage/Newsletter";

type TabId = "email" | "partner" | "newsletter";

const TABS: {
  id: TabId;
  label: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  Component: React.ComponentType;
}[] = [
  {
    id: "email",
    label: "Email us",
    icon: Mail,
    color: "#fb747b",
    textColor: "#ffffff",
    Component: ContactForm,
  },
  {
    id: "partner",
    label: "Partner with us",
    icon: MessageCircle,
    color: "#4AB097",
    textColor: "#000000",
    Component: PartnerForm,
  },
  {
    id: "newsletter",
    label: "Newsletter",
    icon: Rss,
    color: "#FBB059",
    textColor: "#000000",
    Component: Newsletter,
  },
];

export default function ContactTabs() {
  const [active, setActive] = useState<TabId>("email");
  const activeTab = TABS.find((tab) => tab.id === active)!;

  return (
    <section className="relative bg-[#fffcf5]">
      <div className="flex items-end gap-2 px-6 md:px-16 lg:px-24 pt-6">
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              aria-selected={isActive}
              className={`relative flex items-center gap-2 rounded-t-2xl font-bold transition-all duration-300 ease-out ${
                isActive
                  ? "py-4 px-5 sm:px-7 md:px-8 z-20 -mb-px shadow-[0_-6px_16px_rgba(0,0,0,0.06)]"
                  : "py-3 px-4 sm:px-6 md:px-7 z-10 bg-white border border-black/5 shadow-sm hover:shadow-md text-black/45 hover:text-black/70"
              }`}
              style={isActive ? { backgroundColor: tab.color, color: tab.textColor } : undefined}
            >
              <tab.icon
                className="w-5 h-5 shrink-0"
                strokeWidth={2.5}
                style={!isActive ? { color: tab.color } : undefined}
              />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="relative z-0" style={{ backgroundColor: activeTab.color }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <activeTab.Component />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
