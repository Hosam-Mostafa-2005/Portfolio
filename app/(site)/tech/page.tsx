// app/(site)/tech/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Asterisk, Terminal, MoveUpRight } from "lucide-react";

import FeaturedProjects from "@/components/tech/FeaturedProjects";
import RemainingProjects from "@/components/tech/RemainingProjects";
import TechStackSection from "@/components/tech/TechStackSection";

export default function TechWorldPage() {
  return (
    <main className="bg-[#5A0F1B] min-h-screen font-sans selection:bg-[#9CAF9A] selection:text-[#5A0F1B] pt-24 pb-20 overflow-hidden">
      {/* ================= 1. TECH HERO ================= */}
      <section className="px-6 md:px-12 pt-12 pb-16 max-w-7xl mx-auto border-b border-[#F3E2C5]/10 relative">
        <div className="absolute top-0 right-10 opacity-[0.02] pointer-events-none">
          <Terminal className="w-64 h-64" />
        </div>

        <div className="flex items-center gap-3 mb-6">
          <Asterisk className="text-[#9CAF9A] w-5 h-5 animate-[spin_6s_linear_infinite]" />
          <span className="font-mono text-xs text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-sm">
            01 / Tech World
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase text-[#F3E2C5] tracking-tight mb-6">
          Systems & Code.
        </h1>

        <p className="max-w-xl text-[#F3E2C5]/70 text-sm md:text-base leading-relaxed font-mono">
          A collection of software engineering projects, system architectures,
          and precise technical builds. Focused on how things work under the
          hood.
        </p>
      </section>

      {/* ================= 2. TECH STACK / CAPABILITIES ================= */}
      <TechStackSection />

      {/* ================= 3. FEATURED PROJECTS (TOP 3 IN EXACT ORDER) ================= */}
      <FeaturedProjects />

      {/* ================= 4. REMAINING TECH PROJECTS (WITH FILTERS) ================= */}
      <RemainingProjects />

      {/* ================= 5. FINAL CTA TO BEYOND ================= */}
      <section className="px-6 md:px-12 py-24 flex flex-col items-center justify-center text-center relative overflow-hidden border-t border-[#F3E2C5]/10 mt-12">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F3E2C5]/5 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#F3E2C5] tracking-tight mb-6 leading-tight">
            See the rest of <br />
            <span className="text-[#9CAF9A]">The Universe.</span>
          </h2>

          <p className="font-serif italic text-lg opacity-80 text-[#F3E2C5] max-w-md mb-12">
            The code is only half the story. Discover the ideas, content, and
            experiences behind the builds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/beyond"
              className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-[#5A0F1B] bg-[#F3E2C5] px-8 py-4 shadow-[4px_4px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#9CAF9A] transition-all"
            >
              Explore Beyond
              <MoveUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm text-[#F3E2C5] bg-transparent border border-[#F3E2C5]/30 px-8 py-4 hover:bg-[#F3E2C5]/10 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
