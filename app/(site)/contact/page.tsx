// app/(site)/contact/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Asterisk,
  ArrowRight,
  ArrowDownRight,
  MoveUpRight,
  Mail,
} from "lucide-react";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

// ==========================================
// SHARED UI COMPONENTS
// ==========================================

const Sticker = ({
  text,
  className,
  rotate = "rotate-[-4deg]",
}: {
  text: string;
  className?: string;
  rotate?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 0 }}
    className={`absolute z-20 px-3 py-1 bg-[#F3E2C5] text-[#5A0F1B] font-bold text-[10px] md:text-xs uppercase tracking-widest rounded-sm shadow-md border border-[#5A0F1B]/20 cursor-default ${rotate} ${className}`}
  >
    {text}
  </motion.div>
);

const Annotation = ({
  text,
  className,
  arrow = false,
  direction = "right",
}: {
  text: string;
  className?: string;
  arrow?: boolean;
  direction?: "right" | "left" | "down" | "up";
}) => (
  <div
    className={`absolute z-20 font-serif italic text-[#9CAF9A] text-sm md:text-base flex items-center gap-2 ${className}`}
  >
    {arrow && direction === "left" && (
      <ArrowRight className="w-4 h-4 rotate-180" />
    )}
    <span>{text}</span>
    {arrow && direction === "right" && <MoveUpRight className="w-4 h-4" />}
    {arrow && direction === "down" && <ArrowDownRight className="w-4 h-4" />}
    {arrow && direction === "up" && (
      <MoveUpRight className="w-4 h-4 -rotate-45" />
    )}
  </div>
);

// ==========================================
// DATA
// ==========================================

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:eldinhosam11@gmail.com",
    external: false,
    category: "Direct",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/hosam-mostafa-81527b307",
    external: true,
    category: "Professional",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Hosam-Mostafa-2005",
    external: true,
    category: "Code",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@Hosso-7",
    external: true,
    category: "Content",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/betw_eensets/",
    external: true,
    category: "Content",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@betweensetsyt?is_from_webapp=1&sender_device=pc",
    external: true,
    category: "Content",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#5A0F1B] min-h-screen font-sans selection:bg-[#9CAF9A] selection:text-[#5A0F1B] overflow-hidden pt-20 flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-12 pt-20 pb-16 border-b border-[#F3E2C5]/10">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#F3E2C5 1px, transparent 1px), linear-gradient(90deg, #F3E2C5 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="mb-6 flex items-center gap-3">
              <Asterisk className="text-[#9CAF9A] w-5 h-5 animate-[spin_8s_linear_infinite]" />
              <span className="font-mono text-[10px] text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-sm">
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-[#F3E2C5] tracking-tight mb-6 leading-[0.9]">
              Let's <br className="hidden md:block" />
              <span className="text-[#9CAF9A]">Talk.</span>
            </h1>

            <p className="text-lg md:text-xl font-serif italic text-[#F3E2C5]/80 leading-relaxed max-w-md">
              Have an idea, want to collaborate, or simply want to say hello?
              Pick a door and reach me.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative flex justify-center mt-8 md:mt-0"
          >
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me/waving.png"
                alt="Hosso Waving"
                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
              <Sticker
                text="Hello!"
                className="-top-4 -right-4 scale-110"
                rotate="rotate-[12deg]"
              />
              <Annotation
                text="pick a door →"
                className="absolute -bottom-8 -left-8 md:-left-16 rotate-[-5deg]"
                arrow
                direction="right"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT OPTIONS GRID ================= */}
      <section className="px-6 md:px-12 py-24 relative flex-grow">
        <div className="max-w-5xl mx-auto relative">
          {/* Subtle Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[#F3E2C5]/5 blur-3xl rounded-full -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-20">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? 1 : -1 }}
                className="group relative bg-[#F3E2C5]/5 border border-[#F3E2C5]/20 p-8 flex flex-col items-center text-center shadow-lg hover:bg-[#9CAF9A] transition-colors duration-300"
              >
                {/* Scrapbook Tape Detail */}
                <div className="absolute top-[-8px] w-10 h-4 bg-[#F3E2C5]/20 backdrop-blur-sm border border-[#F3E2C5]/10 rotate-[-3deg] z-10" />

                <div className="w-14 h-14 rounded-full border border-[#F3E2C5]/30 flex items-center justify-center mb-6 group-hover:border-[#5A0F1B] group-hover:bg-[#5A0F1B] transition-colors">
                  <link.icon className="w-6 h-6 text-[#F3E2C5] group-hover:text-[#9CAF9A] transition-colors" />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest text-[#9CAF9A] group-hover:text-[#5A0F1B]/70 mb-2 transition-colors">
                  {link.category}
                </span>

                <h3 className="text-xl font-bold uppercase tracking-wide text-[#F3E2C5] group-hover:text-[#5A0F1B] transition-colors flex items-center gap-2">
                  {link.name}
                </h3>

                {link.name === "Email" && (
                  <Annotation
                    text="yes, I actually read these."
                    className="absolute -bottom-10 left-4 scale-75 opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    arrow
                    direction="up"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPTIONAL CTA ================= */}
      <section className="px-6 md:px-12 py-20 border-t border-[#F3E2C5]/10 bg-[#F3E2C5]/5 mt-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-serif italic text-[#F3E2C5] mb-8">
            "See something you like? Let's build something interesting."
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tech"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#F3E2C5]/30 text-[#F3E2C5] font-bold uppercase tracking-widest text-xs hover:bg-[#F3E2C5]/10 hover:border-[#F3E2C5] transition-all"
            >
              Back to Tech <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/beyond"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#F3E2C5]/30 text-[#F3E2C5] font-bold uppercase tracking-widest text-xs hover:bg-[#F3E2C5]/10 hover:border-[#F3E2C5] transition-all"
            >
              Back to Beyond <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
