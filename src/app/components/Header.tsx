"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About us", href: "/about-us" },
    { name: "Programmes", href: "/programmes" },
    { name: "Arts for All", href: "/afa" },
    { name: "Jijivisha", href: "/jijivisha" },
    { name: "Work with us", href: "/work-with-us" },
  ];

  const isHome = pathname === "/";

  return (
    <header
      className={`${
        isHome ? "fixed w-full top-0" : "sticky top-0"
      } z-50 py-4 px-6 md:px-12 bg-[#fffcf5]`}
    >
      <div className="bg-[#fb747b] w-full rounded-2xl md:rounded-3xl px-4 md:px-12">
        {/* Single bar – logo | nav (desktop) | donate + hamburger */}
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/sol_logo.png"
              alt="Slam Out Loud Logo"
              width={50}
              height={30}
              className="object-contain"
            />
          </Link>

          {/* Right side: Desktop nav + Donate + hamburger */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    pathname === link.href
                      ? "font-bold underline underline-offset-4"
                      : "hover:text-red-100"
                  } ${
                    link.name === "Work with us"
                      ? "border border-white/50 px-4 py-2 rounded-xl hover:bg-white/10"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              href="https://milaap.org/fundraisers/slam-out-loud"
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors shadow-sm font-medium text-sm"
            >
              Donate
            </Link>

            {/* Hamburger – mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-3 text-white text-sm font-medium pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors px-2 py-2 rounded-lg ${
                  pathname === link.href
                    ? "font-bold bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
