// app/(site)/about/page.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Asterisk,
  ArrowRight,
  ArrowDownRight,
  MoveUpRight,
  Mail,
  Terminal,
  Lightbulb,
  MapPin,
} from "lucide-react";

import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
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

// ScrapbookPhoto component for displaying images with a polaroid/taped style
const ScrapbookPhoto = ({
  label,
  src,
  className,
  rotate = "rotate-0",
}: {
  label: string;
  src?: string;
  className?: string;
  rotate?: string;
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-[#F3E2C5]/5 border border-[#F3E2C5]/20 p-2 pb-8 md:pb-10 shadow-xl ${rotate} ${className}`}
    >
      <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-12 h-6 bg-[#F3E2C5]/20 border border-[#F3E2C5]/10 rotate-2 z-20 backdrop-blur-md" />
      <div className="w-full h-full bg-[#5A0F1B]/50 border border-[#F3E2C5]/10 flex items-center justify-center relative group overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F3E2C5 0, #F3E2C5 1px, transparent 0, transparent 50%)",
            backgroundSize: "15px 15px",
          }}
        />

        {imgSrc && !hasError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={label}
            className="w-full h-full object-cover relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            onError={() => {
              if (imgSrc.endsWith(".png")) {
                setImgSrc(imgSrc.replace(".png", ".jpg"));
              } else if (imgSrc.endsWith(".jpg")) {
                setImgSrc(imgSrc.replace(".jpg", ".jpeg"));
              } else {
                setHasError(true);
              }
            }}
          />
        ) : (
          <span className="text-[#F3E2C5] font-mono text-[10px] uppercase tracking-widest text-center px-2 opacity-50 transition-opacity relative z-10">
            [{label}]
          </span>
        )}
      </div>
    </div>
  );
};

export default function AboutPage() {
  const containerRef = useRef(null);

  const personalLinks = [
    // {
    //   name: "WhatsApp",
    //   icon: FaWhatsapp,
    //   url: "https://wa.me/201552980635",
    //   external: true,
    // },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:eldinhosam11@gmail.com",
      external: false,
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Hosam-Mostafa-2005",
      external: true,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/hosam-mostafa-81527b307",
      external: true,
    },
  ];

  const contentLinks = [
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@Hosso-7",
      external: true,
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/betw_eensets/",
      external: true,
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@betweensetsyt?is_from_webapp=1&sender_device=pc",
      external: true,
    },
  ];

  return (
    <main
      ref={containerRef}
      className="bg-[#5A0F1B] min-h-screen font-sans selection:bg-[#9CAF9A] selection:text-[#5A0F1B] overflow-hidden pt-20"
    >
      {/* ================= SECTION 01: COMPACT HERO + LINKS ================= */}
      <section className="relative flex flex-col justify-center px-6 md:px-12 pt-12 pb-16 border-b border-[#F3E2C5]/10">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center w-full"
          >
            <div className="mb-6 flex items-center gap-3">
              <Asterisk className="text-[#9CAF9A] w-4 h-4 animate-[spin_8s_linear_infinite]" />
              <span className="font-mono text-[10px] text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-sm">
                About Hosso
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-[#F3E2C5] tracking-tight mb-6">
              More than a <span className="text-[#9CAF9A]">Developer.</span>
            </h1>

            {/* Real Personal Image - Waving */}
            <div className="relative mt-2 mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me/waving.png"
                alt="Hosso Waving"
                className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain drop-shadow-xl hover:scale-105 transition-transform"
              />
              <Sticker
                text="Creator"
                className="-top-3 -right-6 scale-90"
                rotate="rotate-[12deg]"
              />
            </div>

            {/* DIRECT LINKS SECTION (TWO GROUPS) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8 w-full max-w-2xl mx-auto mt-2 relative z-20"
            >
              {/* Group 1: Personal Links */}
              <div className="flex flex-col items-center gap-4">
                <span className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest border-b border-[#9CAF9A]/30 pb-1 px-2">
                  Personal Links
                </span>
                <div className="flex flex-wrap justify-center gap-3">
                  {personalLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-2 px-4 py-2 border border-[#F3E2C5]/20 bg-[#F3E2C5]/5 hover:bg-[#9CAF9A] hover:text-[#5A0F1B] hover:border-[#9CAF9A] transition-all rounded-full text-[#F3E2C5]"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Group 2: Content Links */}
              <div className="flex flex-col items-center gap-4">
                <span className="font-mono text-[10px] text-[#F3E2C5]/50 uppercase tracking-widest border-b border-[#F3E2C5]/20 pb-1 px-2">
                  Content
                </span>
                <div className="flex flex-wrap justify-center gap-3">
                  {contentLinks.map((link, i) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`group flex items-center gap-2 px-4 py-2 bg-[#F3E2C5] text-[#5A0F1B] hover:bg-[#9CAF9A] transition-all rounded-sm border border-[#5A0F1B]/20 shadow-[2px_2px_0px_0px_#9CAF9A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#9CAF9A] ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0`}
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 02: WHO I AM ================= */}
      <section className="px-6 md:px-12 py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-7 space-y-8"
          >
            <h2 className="text-sm font-mono text-[#9CAF9A] uppercase tracking-widest mb-4">
              01 / The Person
            </h2>

            <p className="text-2xl md:text-4xl font-serif text-[#F3E2C5] leading-relaxed">
              I am a{" "}
              <span className="font-sans font-bold uppercase tracking-tight text-[#9CAF9A]">
                Business Information Systems
              </span>{" "}
              student at Tanta University, currently in my 4th year.
            </p>

            <p className="text-lg md:text-xl font-serif italic text-[#F3E2C5]/80 leading-relaxed">
              I started exploring technology and software development alongside
              my university studies from my very first year. But as I kept
              building, my interests expanded far beyond just writing code.
            </p>

            <p className="text-sm md:text-base font-mono text-[#F3E2C5]/60 leading-relaxed max-w-2xl pt-4">
              Today, I am just as interested in content creation, research,
              learning, entrepreneurship, and the creative work that brings
              ideas to life. This space is a collection of all those pieces.
            </p>

            <div className="flex items-center gap-2 pt-4 opacity-50">
              <MapPin className="w-4 h-4 text-[#F3E2C5]" />
              <span className="font-mono text-[10px] text-[#F3E2C5] uppercase tracking-widest">
                Tanta, Egypt
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-5 relative flex justify-center mt-8 md:mt-0"
          >
            {/* Real Personal Image - Portfolio */}
            <ScrapbookPhoto
              src="/images/me/portfolio.png"
              label="PORTFOLIO_PHOTO"
              rotate="rotate-2"
              className="w-[80%] max-w-xs aspect-[4/5] z-10"
            />
            <Annotation
              text="This is me."
              className="-bottom-6 -left-4 md:-left-8 rotate-[-8deg]"
              arrow
              direction="right"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 03 & 04: TECH + BEYOND ================= */}
      <section className="px-6 md:px-12 py-20 border-y border-dashed border-[#F3E2C5]/20 bg-[#F3E2C5]/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* TECH */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 border border-[#F3E2C5]/20 bg-[#5A0F1B] shadow-xl group flex flex-col h-full"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#9CAF9A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            {/* Real Personal Image - Tech */}
            <div className="w-full aspect-video mb-6 relative overflow-hidden border border-[#F3E2C5]/20 rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me/tech.png"
                alt="Tech Visual"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-black uppercase text-[#F3E2C5] tracking-tight mb-3 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-[#9CAF9A]" /> Tech
            </h3>
            <p className="font-mono text-xs text-[#F3E2C5]/60 mb-8 leading-relaxed flex-grow">
              Software Development • Frontend • Backend. I focus on learning and
              building real applications that solve actual problems.
            </p>
            <Link
              href="/tech"
              className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#9CAF9A] hover:text-[#F3E2C5] transition-colors mt-auto"
            >
              Explore Tech <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* BEYOND */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 border border-[#F3E2C5]/20 bg-[#5A0F1B] shadow-xl group flex flex-col h-full"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F3E2C5] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            {/* Real Personal Image - Beyond Tech */}
            <div className="w-full aspect-video mb-6 relative overflow-hidden border border-[#F3E2C5]/20 rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me/beyond-tech.png"
                alt="Beyond Tech Visual"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-black uppercase text-[#F3E2C5] tracking-tight mb-3 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-[#F3E2C5]" /> Beyond Tech
            </h3>
            <p className="font-mono text-xs text-[#F3E2C5]/60 mb-8 leading-relaxed flex-grow">
              Content • Research • Student Activities. Everything else that
              shaped me. Competitions, creative work, and experiences outside
              pure code.
            </p>
            <Link
              href="/beyond"
              className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#F3E2C5] hover:text-[#9CAF9A] transition-colors mt-auto"
            >
              Explore Beyond <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 05: CONTENT CREATION ================= */}
      <section className="px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8 z-10">
            <h2 className="text-sm font-mono text-[#9CAF9A] uppercase tracking-widest">
              02 / The Creator
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F3E2C5] leading-tight">
              Creating <br /> My Own Space.
            </h3>

            <div className="space-y-4 text-[#F3E2C5]/80 font-serif text-lg leading-relaxed">
              <p>
                My content creation journey started naturally. Through student
                activities, I learned the mechanics: scripting, presenting in
                front of people, and editing videos.
              </p>
              <p>
                Eventually, I thought:{" "}
                <span className="italic text-[#9CAF9A]">
                  "Why not create something of my own?"
                </span>
              </p>
              <p>
                That led to <strong>Between Sets</strong>—a space built around
                information and the gym. As I grew, the content identity
                evolved. Today, it is simply becoming <strong>Hosso</strong>.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full relative h-[300px] md:h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#F3E2C5]/5 rounded-full blur-3xl -z-10" />

            {/* Real Personal Image - Editing */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me/editing.png"
              alt="Editing Content"
              className="w-48 h-48 md:w-64 md:h-64 object-contain z-20 drop-shadow-2xl hover:scale-105 transition-transform"
            />

            <Sticker
              text="Between Sets"
              className="top-[10%] right-[10%] md:right-[20%] z-30"
              rotate="rotate-[12deg]"
            />
            <Annotation
              text="Building the channel"
              className="bottom-[10%] left-[5%] md:left-[15%]"
              arrow
              direction="right"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 06: WHAT I'M INTO ================= */}
      <section className="px-6 md:px-12 py-24 bg-[#F3E2C5] text-[#5A0F1B] rounded-[3rem] mx-2 md:mx-6 mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-16">
            Things I naturally <br /> enjoy exploring.
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "Software Architecture",
              "Content Creation",
              "Historical Deep Dives",
              "Entrepreneurship",
              "Learning New Systems",
              "Interesting Information",
              "Building Ideas",
              "Visual Storytelling",
            ].map((interest, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`px-6 py-3 border-2 border-[#5A0F1B] font-bold text-sm md:text-base uppercase tracking-wider bg-transparent cursor-default shadow-[4px_4px_0px_0px_#9CAF9A] ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} transition-transform`}
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING MESSAGE ================= */}
      <section className="px-6 md:px-12 py-32 flex flex-col items-center justify-center text-center relative overflow-hidden border-t border-[#F3E2C5]/10 mt-12">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F3E2C5]/5 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-[#F3E2C5] tracking-tight mb-8 leading-tight">
            Thanks for exploring <br />
            <span className="text-[#9CAF9A]">My World.</span>
          </h2>

          <p className="font-serif italic text-lg md:text-xl opacity-80 text-[#F3E2C5] max-w-lg mb-12">
            Thanks for taking the time to explore my journey.
          </p>

          <div className="relative mt-4">
            {/* Real Personal Image - Me2 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me/me1.png"
              alt="Sign Off"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain drop-shadow-xl hover:scale-105 transition-transform"
            />
            <Annotation
              text="See you around."
              className="-bottom-4 -right-20 md:-right-24 rotate-[-10deg]"
              arrow
              direction="left"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
