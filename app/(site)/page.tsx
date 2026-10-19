// app/(site)/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  Sparkles,
  MoveUpRight,
  Mail,
  Asterisk,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import FeaturedProjects from "@/components/tech/FeaturedProjects";
import RemainingProjects from "@/components/tech/RemainingProjects";
import BeyondSection from "@/components/beyond/BeyondSection";

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
// 1. HERO SECTION
// ==========================================

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
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
              Software Developer Portfolio
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

          <p className="max-w-xl text-[#F3E2C5]/80 font-medium text-sm md:text-base leading-relaxed mb-8">
            Full-stack developer focused on modern web applications, scalable
            front-end architectures, and responsive digital products with React,
            Next.js, TypeScript, and Node.js.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#tech-section"
              className="inline-flex items-center gap-2.5 font-bold uppercase tracking-widest text-xs text-[#5A0F1B] bg-[#F3E2C5] px-6 py-3.5 shadow-[3px_3px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#9CAF9A] transition-all"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tech"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3E2C5] border border-[#F3E2C5]/30 hover:bg-[#F3E2C5]/10 px-5 py-3 transition-colors"
            >
              <span>Tech Overview</span>
            </Link>
          </div>
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
            text="Engineer"
            className="top-4 right-4 md:right-8 rotate-[12deg]"
          />
          <Sticker
            text="Creator"
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

// ==========================================
// 2. TECH SECTION INTRO / HIGHLIGHT
// ==========================================

const TechIntro = () => {
  const quickSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
  ];

  return (
    <section
      id="tech-section"
      className="px-6 md:px-12 pt-20 pb-12 max-w-7xl mx-auto border-t border-[#F3E2C5]/15 relative"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Asterisk className="text-[#9CAF9A] w-5 h-5 animate-[spin_6s_linear_infinite]" />
            <span className="font-mono text-xs text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-sm">
              01 / Engineering & Architecture
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-[#F3E2C5] tracking-tight mb-4">
            Systems & Code.
          </h2>

          <p className="max-w-2xl text-[#F3E2C5]/80 text-sm md:text-base leading-relaxed font-mono">
            Full-stack engineering projects, robust frontend systems, and
            practical software builds. Focused on clean architecture, performance,
            and real-world user value.
          </p>
        </div>

        {/* Quick Skills Pills */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest">
            Core Technical Stack
          </span>
          <div className="flex flex-wrap gap-2 max-w-md">
            {quickSkills.map((skill, i) => (
              <span
                key={i}
                className="font-mono text-[11px] text-[#F3E2C5] uppercase tracking-wider bg-[#F3E2C5]/5 border border-[#F3E2C5]/20 px-3 py-1 rounded-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. MANIFESTO
// ==========================================

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

// ==========================================
// 6. CONTACT LINKS
// ==========================================

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
            Let&apos;s <span className="text-[#9CAF9A]">Connect.</span>
          </h2>
          <p className="text-[#F3E2C5]/70 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Whether it&apos;s a technical role, full-stack software system, a creative
            collaboration, or discussing ideas.
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

// ==========================================
// MAIN HOMEPAGE COMPONENT
// ==========================================

export default function HossoWorldHome() {
  return (
    <main className="bg-[#5A0F1B] min-h-screen font-sans selection:bg-[#9CAF9A] selection:text-[#5A0F1B]">
      {/* 1. Existing Hero / Introduction Section */}
      <Hero />

      {/* 2. Tech Section Introduction */}
      <TechIntro />

      {/* 3. Featured Projects (STREN, Etsalah, Ecommerce Admin Dashboard) */}
      <FeaturedProjects />

      {/* 4. Remaining Tech Projects */}
      <RemainingProjects />

      {/* 5. Beyond Tech (Positioned strictly below all tech projects) */}
      <BeyondSection />

      {/* 6. Closing Manifesto & Contact */}
      <Manifesto />
      <ContactLinks />
    </main>
  );
}
