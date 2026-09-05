// components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Asterisk, ArrowUpRight, Icon } from "lucide-react";
const EXPLORE_LINKS = [
  { name: "Home", path: "/" },
  { name: "Tech", path: "/tech" },
  { name: "Beyond", path: "/beyond" },
  { name: "Certifications", path: "/certifications" },
  { name: "About", path: "/about" },
];

const CONNECT_LINKS = [
  { name: "GitHub", path: "#" },
  { name: "LinkedIn", path: "#" },
  { name: "Email", path: "mailto:#" },
];
export default function Footer() {
  return (
    <footer className="relative bg-[#5A0F1B] pt-24 pb-8 border-t-2 border-dashed border-[#F3E2C5]/20 overflow-hidden">
      {/* Subtle Playful Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#F3E2C5 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          {/* Brand & Tagline (Left) */}
          <div className="md:col-span-6 flex flex-col items-start relative">
            <Link
              href="/"
              className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] rounded-sm p-1 -ml-1 mb-6"
              aria-label="Hosso World Home"
            >
              <Asterisk className="w-8 h-8 text-[#9CAF9A] group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-black text-4xl tracking-tighter text-[#F3E2C5] uppercase">
                Hosso
              </span>
            </Link>

            <p className="max-w-xs text-[#F3E2C5]/80 text-sm md:text-base leading-relaxed font-medium">
              Building systems, creating content, and exploring the spaces in
              between.
            </p>

            {/* Playful Sticker Element */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="absolute -right-4 top-0 md:top-8 md:right-16 px-3 py-1 bg-[#F3E2C5] text-[#5A0F1B] font-bold text-[10px] uppercase tracking-widest rounded-sm shadow-md border border-[#5A0F1B]/20 rotate-[6deg] cursor-default hidden sm:block"
            >
              See you around!
            </motion.div>
          </div>

          {/* Navigation Links (Right) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:gap-4">
            {/* EXPLORE Column */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest border-b border-[#9CAF9A]/30 pb-2 w-max">
                Explore
              </span>
              <ul className="flex flex-col gap-4">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="group inline-flex items-center gap-2 text-[#F3E2C5] hover:text-[#9CAF9A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] rounded-sm"
                    >
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="font-bold text-sm uppercase tracking-wide"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT Column */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest border-b border-[#9CAF9A]/30 pb-2 w-max">
                Connect
              </span>
              <ul className="flex flex-col gap-4">
                {CONNECT_LINKS.map((link) => {
                  return (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[#F3E2C5] hover:text-[#9CAF9A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] rounded-sm"
                        aria-label={`Connect on ${link.name}`}
                      >
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="font-bold text-sm uppercase tracking-wide flex items-center gap-1"
                        >
                          {link.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        </motion.span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#F3E2C5]/10 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#F3E2C5]/40 font-mono text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Hosso World</p>
          <p className="flex items-center gap-1.5">
            Built with curiosity{" "}
            <Asterisk className="w-3 h-3 text-[#9CAF9A] animate-pulse" /> & code
          </p>
        </div>
      </div>
    </footer>
  );
}
