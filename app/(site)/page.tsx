// app/(site)/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  Sparkles,
  MoveUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// ==========================================
// SHARED PLAYFUL UI COMPONENTS
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
    className={`absolute z-20 px-3 py-1 bg-[#F3E2C5] text-[#5A0F1B] font-bold text-[10px] md:text-xs uppercase tracking-widest rounded-sm shadow-md border border-[#5A0F1B]/20 cursor-pointer ${rotate} ${className}`}
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
  direction?: "right" | "left" | "down";
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
  </div>
);

// ==========================================
// PAGE SECTIONS
// ==========================================

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 md:col-span-7 relative z-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="text-[#9CAF9A] w-5 h-5" />
            <span className="font-mono text-xs text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-full">
              Welcome to the universe
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-[#F3E2C5] leading-[0.95] tracking-tight mb-8">
            <span className="block mb-4 text-[#F3E2C5]">Hosam.</span>
            <span className="block text-[#F3E2C5]/60 hover:text-[#F3E2C5] transition-colors duration-300">
              I Build.
            </span>
            <span className="block ml-0 md:ml-8 text-[#F3E2C5]/80 hover:text-[#F3E2C5] transition-colors duration-300">
              I Learn.
            </span>
            <span className="block ml-0 md:ml-16 flex items-center gap-4 hover:text-[#9CAF9A] transition-colors duration-300 cursor-default">
              I Explore.
            </span>
          </h1>

          <p className="max-w-md text-[#F3E2C5]/70 font-medium text-sm md:text-base leading-relaxed">
            I am a developer who likes understanding how things work, building
            useful systems, creating content, and exploring ideas beyond code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="col-span-1 md:col-span-5 relative mt-8 md:mt-0 h-[350px] md:h-[500px] flex items-center justify-center"
        >
          {/* Real Personal Image - Waving */}
          <div className="relative w-[85%] md:w-full flex justify-center z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me/waving.png"
              alt="Hosso Waving"
              className="w-full max-w-[350px] h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <Sticker
            text="Creator"
            className="top-4 right-4 md:right-8 rotate-[12deg]"
          />
          <Sticker
            text="Engineer"
            className="bottom-10 -left-2"
            rotate="rotate-[-8deg]"
          />

          <Annotation
            text="This is me!"
            arrow
            direction="right"
            className="absolute top-1/4 -left-4 md:-left-12 -rotate-6 z-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

const MapOfWorlds = () => {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold uppercase text-[#F3E2C5] mb-3">
              Choose Your Path
            </h2>
            <p className="text-[#F3E2C5]/60 font-mono text-xs md:text-sm max-w-md leading-relaxed">
              Two distinct sides of the same mind. Explore the systems I build
              or the ideas I study.
            </p>
          </div>
          <Annotation
            text="Pick a destination"
            className="relative md:-translate-y-4"
            direction="right"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* 01: TECH */}
          <motion.a
            href="/tech"
            whileHover={{ y: -8 }}
            className="group relative border border-[#F3E2C5]/20 p-8 md:p-10 transition-colors hover:bg-[#F3E2C5]/5 flex flex-col"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(#F3E2C5 1px, transparent 1px), linear-gradient(90deg, #F3E2C5 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="flex justify-between items-start mb-10">
              <span className="font-mono text-[#9CAF9A] text-lg">01</span>
              <span className="font-mono text-[#F3E2C5]/50 text-[10px] uppercase tracking-widest border border-[#F3E2C5]/20 px-2 py-1">
                Systems & Code
              </span>
            </div>

            {/* Real Personal Image - Tech */}
            <div className="w-full aspect-video md:aspect-[4/3] mb-8 relative overflow-hidden border border-[#F3E2C5]/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me/tech.png"
                alt="Tech World Visual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <h3 className="text-3xl font-black uppercase text-[#F3E2C5] tracking-tight mb-3 group-hover:text-[#9CAF9A] transition-colors">
              Tech
            </h3>
            <p className="text-[#F3E2C5]/70 text-sm mb-8 leading-relaxed max-w-sm flex-grow">
              Software engineering, architecture, frontend/backend logic, and
              precise technical builds.
            </p>

            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3E2C5]">
              Enter Tech{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* 02: BEYOND */}
          <motion.a
            href="/beyond"
            whileHover={{ y: -8 }}
            className="group relative border border-[#F3E2C5]/20 rounded-[2rem] p-8 md:p-10 transition-colors hover:bg-[#F3E2C5]/5 flex flex-col"
          >
            <div className="flex justify-between items-start mb-10">
              <span className="font-serif italic text-[#9CAF9A] text-xl">
                02
              </span>
              <span className="font-mono text-[#5A0F1B] bg-[#F3E2C5] text-[10px] uppercase tracking-widest rounded-full px-3 py-1 rotate-3">
                Curiosity & Ideas
              </span>
            </div>

            {/* Real Personal Image - Beyond Tech */}
            <div className="w-[90%] mx-auto aspect-square md:aspect-[4/3] mb-8 relative overflow-hidden rounded-2xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 shadow-xl border border-[#F3E2C5]/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me/beyond-tech.png"
                alt="Beyond Tech Visual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <h3 className="text-3xl font-black uppercase text-[#F3E2C5] tracking-tight mb-3 group-hover:text-[#9CAF9A] transition-colors">
              Beyond Tech
            </h3>
            <p className="text-[#F3E2C5]/70 text-sm mb-8 leading-relaxed max-w-sm flex-grow">
              Content creation, YouTube, research, storytelling, and visual
              experiments outside pure code.
            </p>

            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3E2C5]">
              Explore Beyond{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Manifesto = () => {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 relative bg-[#F3E2C5] text-[#5A0F1B] rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-12 my-12">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none rounded-[2rem] md:rounded-[4rem]"
        style={{
          backgroundImage: "radial-gradient(#5A0F1B 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
        <div className="mb-10 relative">
          {/* Real Personal Image - me2 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/me/me2.png"
            alt="Hosso Character"
            className="w-24 h-24 rounded-full border-2 border-[#5A0F1B]/30 object-cover shadow-lg bg-[#9CAF9A]/10"
          />
          <Annotation
            text="Always curious"
            className="-right-28 top-2 rotate-[12deg] text-[#5A0F1B]"
            arrow
            direction="left"
          />
        </div>

        <h2 className="text-2xl md:text-4xl font-black uppercase leading-[1.2] tracking-tight mb-8">
          I want to know how things work, why they break, and what happens when
          you build them differently.
        </h2>

        <p className="font-mono text-xs md:text-sm tracking-widest uppercase border-b border-[#5A0F1B]/30 pb-2">
          [ A constantly expanding universe ]
        </p>
      </div>
    </section>
  );
};

const ContactLinks = () => {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="relative mb-16 w-full">
          <Sticker
            text="Say Hi!"
            className="-top-6 left-0 md:left-12"
            rotate="rotate-[-10deg]"
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#F3E2C5] leading-[0.95] mb-6">
            Let's <span className="text-[#9CAF9A]">Connect.</span>
          </h2>
          <p className="text-[#F3E2C5]/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Whether it's a technical system, a creative collaboration, or just
            nerding out over a concept.
          </p>

          <div className="hidden md:block absolute -bottom-10 right-0 md:right-12 opacity-90 z-20">
            {/* Real Personal Image - me1 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me/me1.png"
              alt="Hosso"
              className="w-28 h-28 rounded-full border-4 border-[#5A0F1B] shadow-xl rotate-[5deg] hover:rotate-0 transition-transform duration-300 object-cover bg-[#F3E2C5]/5"
            />
          </div>
        </div>

        {/* Direct Connect Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 relative z-10 w-full">
          {/* <a
            href="https://wa.me/201552980635"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-[#F3E2C5] text-[#5A0F1B] hover:bg-[#9CAF9A] transition-colors rounded-sm shadow-[4px_4px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#9CAF9A]"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-widest">
              WhatsApp
            </span>
          </a> */}

          <a
            href="mailto:eldinhosam11@gmail.com"
            className="group flex items-center gap-3 px-6 py-4 bg-[#F3E2C5] text-[#5A0F1B] hover:bg-[#9CAF9A] transition-colors rounded-sm shadow-[4px_4px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#9CAF9A]"
          >
            <Mail className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-widest">
              Email
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/hosam-mostafa-81527b307"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-[#F3E2C5] text-[#5A0F1B] hover:bg-[#9CAF9A] transition-colors rounded-sm shadow-[4px_4px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#9CAF9A]"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-widest">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/Hosam-Mostafa-2005"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-[#F3E2C5] text-[#5A0F1B] hover:bg-[#9CAF9A] transition-colors rounded-sm shadow-[4px_4px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#9CAF9A]"
          >
            <FaGithub className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-widest">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default function HossoWorldHome() {
  return (
    <main className="bg-[#5A0F1B] min-h-screen font-sans selection:bg-[#9CAF9A] selection:text-[#5A0F1B]">
      <Hero />
      <MapOfWorlds />
      <Manifesto />
      <ContactLinks />
    </main>
  );
}
