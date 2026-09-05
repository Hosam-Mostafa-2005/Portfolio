// components/layout/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Tech", path: "/tech" },
  { name: "Beyond", path: "/beyond" },
  { name: "Certifications", path: "/certifications" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#5A0F1B] border-b-2 border-dashed border-[#F3E2C5]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* LEFT: Brand Mark */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] rounded-sm p-1 -ml-1"
          aria-label="Hosso World Home"
        >
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Asterisk className="w-6 h-6 text-[#9CAF9A]" />
          </motion.div>
          <span className="font-black text-2xl tracking-tighter text-[#F3E2C5] uppercase">
            Hosso
          </span>
          <span className="hidden lg:inline-block font-mono text-[10px] uppercase tracking-widest text-[#F3E2C5]/50 ml-2 border border-[#F3E2C5]/20 px-2 py-0.5 rounded-sm">
            World
          </span>
        </Link>

        {/* CENTER: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className="relative group py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] rounded-sm"
              >
                <span
                  className={`font-mono text-sm uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-[#9CAF9A] font-bold"
                      : "text-[#F3E2C5] group-hover:text-[#9CAF9A]"
                  }`}
                >
                  {link.name}
                </span>

                {/* Playful hover underline / doodle */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9CAF9A] rounded-full origin-left"
                  initial={{ scaleX: isActive ? 1 : 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Tiny active indicator star */}
                {isActive && (
                  <motion.div
                    layoutId="active-desktop-star"
                    className="absolute -top-3 -right-4 text-[#9CAF9A]"
                  >
                    <Asterisk className="w-3 h-3 animate-[spin_6s_linear_infinite]" />
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Desktop CTA */}
        <div className="hidden md:block z-50">
          <Link
            href="/contact"
            className="group relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5A0F1B] rounded-sm"
          >
            <motion.div whileHover={{ rotate: -2, scale: 1.05 }}>
              <span className="flex items-center justify-center border-2 border-[#F3E2C5] px-6 py-2.5 text-[#F3E2C5] text-xs font-bold uppercase tracking-widest bg-[#5A0F1B] shadow-[3px_3px_0px_0px_#9CAF9A] group-hover:shadow-[0px_0px_0px_0px_#9CAF9A] group-hover:translate-x-[3px] group-hover:translate-y-[3px] transition-all">
                Let's Work
              </span>
            </motion.div>
          </Link>
        </div>

        {/* MOBILE NAVIGATION COMPONENT */}
        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
