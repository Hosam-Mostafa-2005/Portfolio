"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Asterisk,
  ArrowRight,
  MoveUpRight,
  Tv,
  Award,
  Compass,
} from "lucide-react";

export const BeyondSection: React.FC = () => {
  const highlights = [
    {
      icon: <Tv className="w-5 h-5 text-[#9CAF9A]" />,
      number: "01",
      title: "Content & Visual Storytelling",
      subtitle: "Between Sets & YouTube",
      description:
        "Writing scripts, video editing in DaVinci Resolve, visual design, and producing content around knowledge, curiosity, and fitness.",
      tag: "Creator",
    },
    {
      icon: <Award className="w-5 h-5 text-[#9CAF9A]" />,
      number: "02",
      title: "Leadership & Competitions",
      subtitle: "Hult Prize & Creativa Hub",
      description:
        "Promoted to Vice Head of Video Editing for Hult Prize Tanta, won 3rd place in the startup competition with Etsalah, and completed intensive ideation bootcamps.",
      tag: "Leadership",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#9CAF9A]" />,
      number: "03",
      title: "Ideas, Philosophy & Movement",
      subtitle: "The Holistic Mindset",
      description:
        "Studying Business Information Systems at Tanta University, exploring psychology, philosophy, and understanding what happens when you build differently.",
      tag: "Curiosity",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 relative z-20 border-t border-[#F3E2C5]/10 bg-[#F3E2C5]/[0.02]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Asterisk className="text-[#9CAF9A] w-5 h-5 animate-[spin_8s_linear_infinite]" />
              <span className="font-mono text-xs text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-sm">
                Beyond Technology
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#F3E2C5] tracking-tight mb-3">
              Who I Am Outside Code
            </h2>
            <p className="font-serif italic text-[#F3E2C5]/70 text-base md:text-lg max-w-xl leading-relaxed">
              Software engineering is my craft, but curiosity doesn&apos;t stop at the
              terminal. These are the pursuits that shape how I think, communicate,
              and create.
            </p>
          </div>

          <Link
            href="/beyond"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3E2C5] hover:text-[#9CAF9A] transition-colors border-b border-[#F3E2C5]/30 hover:border-[#9CAF9A] pb-1 w-max"
          >
            <span>Read The Full Storyboard</span>
            <MoveUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Feature Banner: Visual Preview & Story Teaser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 p-8 md:p-12 border border-[#F3E2C5]/20 bg-[#F3E2C5]/[0.03] rounded-2xl relative overflow-hidden">
          {/* Subtle radial texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#F3E2C5 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Left Text Teaser */}
          <div className="lg:col-span-6 space-y-6 relative z-10">
            <span className="font-mono text-[10px] text-[#5A0F1B] bg-[#F3E2C5] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Curiosity & Ideas
            </span>

            <h3 className="text-2xl md:text-4xl font-black uppercase text-[#F3E2C5] tracking-tight leading-tight">
              A Constantly <br />
              <span className="text-[#9CAF9A]">Expanding Universe.</span>
            </h3>

            <p className="text-[#F3E2C5]/80 text-sm md:text-base font-serif italic leading-relaxed">
              &ldquo;My journey outside tech actually started while I was studying
              tech. Through student activities, video editing, and public speaking,
              I discovered how to connect software logic with visual storytelling.&rdquo;
            </p>

            <div className="pt-2">
              <Link
                href="/beyond"
                className="group inline-flex items-center gap-3 font-bold uppercase tracking-widest text-xs text-[#5A0F1B] bg-[#F3E2C5] px-6 py-3.5 shadow-[3px_3px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#9CAF9A] transition-all"
              >
                <span>Enter Beyond Tech</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image Visual */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden border border-[#F3E2C5]/30 shadow-2xl rotate-[-2deg] transition-all duration-500"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me/beyond-tech.png"
                alt="Hosso Beyond Tech Visual"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#5A0F1B]/15 hover:bg-transparent transition-colors duration-300" />
            </motion.div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-[#F3E2C5]/20 bg-[#5A0F1B] p-6 md:p-8 rounded-sm hover:border-[#9CAF9A]/60 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-[#9CAF9A]/10 border border-[#9CAF9A]/30 rounded-sm">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-[#9CAF9A]">
                    {item.number}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-[#F3E2C5]/60 uppercase tracking-widest block mb-2">
                  {item.subtitle}
                </span>

                <h4 className="text-xl font-black uppercase text-[#F3E2C5] tracking-tight mb-3 group-hover:text-[#9CAF9A] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs md:text-sm text-[#F3E2C5]/75 leading-relaxed font-serif">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F3E2C5]/10 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CAF9A]">
                  {item.tag}
                </span>
                <Link
                  href="/beyond"
                  className="font-mono text-xs text-[#F3E2C5]/60 hover:text-[#9CAF9A] transition-colors flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondSection;
