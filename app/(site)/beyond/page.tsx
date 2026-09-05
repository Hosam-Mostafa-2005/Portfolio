// app/(site)/beyond/page.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Asterisk,
  ArrowRight,
  ArrowDownRight,
  MoveUpRight,
  Play,
  X,
} from "lucide-react";

// ==========================================
// MOCK DATA (Fallback for the storyboard)
// ==========================================
const beyondProjects = [
  {
    slug: "mutqn",
    title: "Mutqn",
    tagline: "3 DAYS. ONE TEAM. ONE IDEA.",
    description:
      "Translating a startup concept into a practical MVP to demonstrate real-world value.",
    category: "Ideation & Build",
    status: "completed",
  },
  {
    slug: "hult-prize",
    title: "Hult Prize",
    tagline: "PITCHING TO THE WORLD.",
    description:
      "Pitching a product vision and bringing the idea to life on a national stage.",
    category: "Competition",
    status: "completed",
  },
];

// ==========================================
// SKILLS DATA
// ==========================================
const beyondSkills = [
  {
    title: "Creative",
    skills: [
      "Content Creation",
      "Video Editing",
      "Visual Storytelling",
      "Script Writing",
      "Graphic Design",
      "Visual Research",
      "Creative Direction",
      "Personal Branding",
    ],
  },
  {
    title: "Communication",
    skills: [
      "Public Speaking",
      "Presentation",
      "Communication",
      "Leadership",
      "Teamwork",
      "Teaching & Knowledge Sharing",
      "Emotional Intelligence",
    ],
  },
  {
    title: "Entrepreneurship",
    skills: [
      "Ideation",
      "Pitching",
      "Problem Solving",
      "MVP Development",
      "Branding",
      "Product Thinking",
      "Business Thinking",
    ],
  },
  {
    title: "Research & Learning",
    skills: [
      "Research",
      "Information Curation",
      "Critical Thinking",
      "Self-Learning",
      "Creative Thinking",
    ],
  },
  {
    title: "Tools & Workflows",
    skills: [
      "Adobe Photoshop",
      "DaVinci Resolve",
      "CapCut",
      "Notion",
      "AI Tools",
    ],
  },
];

// ==========================================
// STORYBOARD UI COMPONENTS
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

const CharacterScene = ({
  label,
  action,
  className,
}: {
  label: string;
  action?: string;
  className?: string;
}) => (
  <div
    className={`relative flex flex-col items-center justify-center overflow-hidden border-[2px] border-dashed border-[#9CAF9A]/60 bg-[#9CAF9A]/5 backdrop-blur-sm ${className}`}
    style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
  >
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: "radial-gradient(#9CAF9A 1.5px, transparent 1.5px)",
        backgroundSize: "12px 12px",
      }}
    />
    <span className="relative text-[#9CAF9A] font-mono text-[10px] uppercase tracking-widest text-center px-4 mb-2">
      [HOSSO_{label}]
    </span>
    {action && (
      <span className="relative text-[#F3E2C5] font-serif italic text-sm text-center px-4 rotate-[-4deg]">
        {action}
      </span>
    )}
  </div>
);

// Upgraded ScrapbookPhoto with Smart Image Fallback mechanism and Lightbox Click
const ScrapbookPhoto = ({
  label,
  src,
  className,
  rotate = "rotate-0",
  onImageClick,
}: {
  label: string;
  src?: string;
  className?: string;
  rotate?: string;
  onImageClick?: (src: string) => void;
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const isClickable = onImageClick && imgSrc && !hasError;

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-[#F3E2C5]/5 border border-[#F3E2C5]/20 p-2 pb-8 md:pb-10 shadow-xl ${rotate} ${className} ${
        isClickable ? "cursor-pointer" : ""
      }`}
      onClick={() => {
        if (isClickable) {
          onImageClick(imgSrc);
        }
      }}
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
            className={`w-full h-full object-cover relative z-10 opacity-90 transition-all duration-300 ${
              isClickable
                ? "group-hover:opacity-100 group-hover:scale-[1.02]"
                : ""
            }`}
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

// ==========================================
// SCENES
// ==========================================

export default function BeyondStoryPage() {
  const containerRef = useRef(null);

  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
    file: string;
  } | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (selectedVideo || selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo, selectedImage]);

  return (
    <main
      ref={containerRef}
      className="bg-[#5A0F1B] min-h-screen font-sans selection:bg-[#9CAF9A] selection:text-[#5A0F1B] overflow-hidden pt-20"
    >
      {/* CHAPTER 01: UNIVERSITY + TECH */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 py-24 border-b border-[#F3E2C5]/10">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-7"
          >
            <div className="mb-8 flex items-center gap-3">
              <Asterisk className="text-[#9CAF9A] w-5 h-5 animate-[spin_6s_linear_infinite]" />
              <span className="font-mono text-[10px] text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-sm">
                Chapter 01
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black uppercase text-[#F3E2C5] leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F3E2C5]/50 text-xl md:text-2xl mb-2">
                Tanta University / 4th Year
              </span>
              Business Information
              <br />
              Systems.
            </h1>

            <p className="max-w-md text-[#F3E2C5]/70 font-serif italic text-base md:text-lg leading-relaxed">
              My journey outside tech actually started while I was studying
              tech. I was exploring software engineering alongside my university
              studies, looking for ways to build things.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 md:col-span-5 relative h-[300px] flex items-center justify-center"
          >
            <ScrapbookPhoto
              src="/images/me/portfolio.png"
              label="STUDENT_PORTRAIT"
              rotate="rotate-2"
              className="w-[70%] max-w-xs aspect-[4/5] z-10"
              onImageClick={setSelectedImage}
            />
            <Annotation
              text="The starting point"
              className="-bottom-6 -left-4 md:-left-12 rotate-[-8deg]"
              arrow
              direction="right"
            />
          </motion.div>
        </div>
      </section>

      {/* SKILLS ACQUIRED ALONG THE WAY */}
      <section className="px-6 md:px-12 py-20 bg-[#F3E2C5]/5 border-b border-[#F3E2C5]/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-sm font-mono text-[#9CAF9A] uppercase tracking-widest mb-3">
                The Toolset
              </h2>
              <h3 className="text-2xl md:text-4xl font-black uppercase text-[#F3E2C5] tracking-tight">
                Skills developed beyond code.
              </h3>
            </div>
            <Annotation
              text="Acquired through the journey"
              arrow
              direction="left"
              className="hidden md:flex relative -translate-y-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {beyondSkills.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-[#5A0F1B] border border-[#F3E2C5]/20 p-6 shadow-lg group hover:border-[#9CAF9A]/50 transition-colors"
              >
                {/* Subtle corner accent */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#9CAF9A] group-hover:border-[#F3E2C5] transition-colors" />

                <h4 className="font-bold text-[#F3E2C5] uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Asterisk className="w-4 h-4 text-[#9CAF9A]" />{" "}
                  {category.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] md:text-[11px] text-[#F3E2C5]/80 uppercase tracking-widest bg-[#F3E2C5]/5 border border-[#F3E2C5]/10 px-3 py-1.5 cursor-default hover:bg-[#9CAF9A] hover:text-[#5A0F1B] hover:border-[#9CAF9A] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 02: STUDENT ACTIVITIES */}
      <section className="px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-24">
            <h2 className="text-sm font-mono text-[#9CAF9A] uppercase tracking-widest mb-4">
              Chapter 02
            </h2>
            <p className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#F3E2C5] leading-tight">
              Student Activities.
            </p>
            <p className="font-serif italic text-xl md:text-2xl opacity-80 mt-4 text-[#F3E2C5]">
              YLY + Hult Prize Tanta
            </p>
          </div>

          <div className="flex flex-col items-center mb-24">
            {/* Hult Prize Progression */}
            <h3 className="text-xl md:text-2xl font-black uppercase text-[#F3E2C5] tracking-widest mb-12">
              Hult Prize
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-24 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ScrapbookPhoto
                  src="/images/certificates/Hult.jpg"
                  label="HULT_MEMBER"
                  rotate="-rotate-2"
                  className="w-64 md:w-80 aspect-[4/3]"
                  onImageClick={setSelectedImage}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3"
              >
                <ArrowRight className="w-10 h-10 text-[#9CAF9A] hidden md:block drop-shadow-md" />
                <ArrowDownRight className="w-10 h-10 text-[#9CAF9A] block md:hidden drop-shadow-md" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#9CAF9A] bg-[#9CAF9A]/10 px-3 py-1 rounded-sm border border-[#9CAF9A]/20">
                  Promotion
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ScrapbookPhoto
                  src="/images/certificates/hult-vice.png"
                  label="HULT_VICE_HEAD"
                  rotate="rotate-3"
                  className="w-64 md:w-80 aspect-[4/3]"
                  onImageClick={setSelectedImage}
                />
              </motion.div>
            </div>

            {/* YLY Completely Separate */}
            <div className="w-full max-w-3xl border-t border-dashed border-[#F3E2C5]/20 pt-20 flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-black uppercase text-[#F3E2C5] tracking-widest mb-12">
                YLY Program
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ScrapbookPhoto
                  src="/images/certificates/YLY.jpg"
                  label="YLY_CERTIFICATE"
                  rotate="-rotate-1"
                  className="w-64 md:w-80 aspect-[4/3]"
                  onImageClick={setSelectedImage}
                />
              </motion.div>
            </div>
          </div>

          {/* Context Section */}
          <div className="text-center mb-16 space-y-4 relative z-20">
            <p className="text-2xl md:text-4xl font-serif italic text-[#F3E2C5]">
              "This is where I started learning how to create visually."
            </p>
            <p className="font-mono text-xs md:text-sm text-[#9CAF9A] uppercase tracking-widest">
              Photoshop • Visual Research • Media Design
            </p>
          </div>

          {/* Fully Populated Photoshop Design Archive */}
          <div className="relative w-full max-w-6xl mx-auto bg-[#F3E2C5]/5 border-2 border-dashed border-[#F3E2C5]/10 rounded-[3rem] p-6 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (num % 4) * 0.1 }}
                >
                  <ScrapbookPhoto
                    src={`/images/Designs/${num}.png`}
                    label={`DESIGN_${num}`}
                    rotate={num % 2 === 0 ? "rotate-2" : "-rotate-2"}
                    className="w-full h-auto aspect-square object-cover shadow-lg hover:z-30 hover:scale-105 transition-transform duration-300"
                    onImageClick={setSelectedImage}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 03: HULT PRIZE STARTUP (ETSALAH) */}
      <section className="px-6 md:px-12 py-24 bg-[#F3E2C5] text-[#5A0F1B] rounded-t-[3rem] relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8 sticky top-32">
              <h2 className="text-sm font-mono text-[#9CAF9A] uppercase tracking-widest bg-[#5A0F1B] px-3 py-1 inline-block text-[#F3E2C5] rounded-sm">
                Chapter 03
              </h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                The Startup
                <br />
                Competition.
              </h3>
              <p className="font-serif italic text-lg opacity-80 leading-relaxed">
                During my Hult Prize Tanta season, my friend and I unexpectedly
                entered the startup competition. We developed{" "}
                <strong>Etsalah</strong>.
              </p>
              <p className="text-sm font-mono opacity-70 leading-relaxed">
                Idea → Pressure → Teamwork → MVP → Pitch → Competition → 3rd
                Place.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <CharacterScene
                  label="PITCHING"
                  action="*explaining the MVP*"
                  className="w-20 h-20 border-[#5A0F1B] text-[#5A0F1B]"
                />
                <Annotation
                  text="We had very little time."
                  arrow
                  direction="left"
                />
              </div>
            </div>

            <div className="flex-1 w-full space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ScrapbookPhoto
                  src="/images/certificates/creativa-2025.jpg"
                  label="CREATIVA_IDEATION_2025_CERT"
                  rotate="rotate-1"
                  className="w-full aspect-[4/3] border-[#5A0F1B]/20 bg-[#5A0F1B]/5"
                  onImageClick={setSelectedImage}
                />
                <p className="text-xs font-mono mt-4 opacity-60 text-center uppercase">
                  Creativa Ideation Program (8 AM to 5 PM daily)
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ScrapbookPhoto
                  src="/images/certificates/mvp.png"
                  label="ETSALAH_MVP_SCREENSHOTS"
                  rotate="-rotate-2"
                  className="w-full aspect-video border-[#5A0F1B]/20 bg-[#5A0F1B]/5"
                  onImageClick={setSelectedImage}
                />
                <p className="text-xs font-mono mt-4 opacity-60 text-center uppercase">
                  Branding & MVP Development
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <ScrapbookPhoto
                  src="/images/certificates/hultprize-3rd.jpg"
                  label="HULT_PRIZE_3RD_PLACE_PHOTO"
                  rotate="rotate-1"
                  className="w-full aspect-[4/3] border-[#5A0F1B]/20 bg-[#5A0F1B]/5"
                  onImageClick={setSelectedImage}
                />
                <Sticker
                  text="3rd Place!"
                  className="-top-4 -right-4 scale-125"
                  rotate="rotate-[12deg]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 04: HULT PRIZE SEASON 2 & VERTICAL VIDEO ARCHIVE */}
      <section className="pt-32 pb-16 relative bg-[#5A0F1B] text-[#F3E2C5] -mt-10 rounded-t-[3rem] z-30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
          <h2 className="text-sm font-mono text-[#9CAF9A] uppercase tracking-widest mb-4">
            Chapter 04
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Vice Head of <br />
                <span className="text-[#9CAF9A]">Video Editing.</span>
              </h3>
              <p className="font-serif italic text-base md:text-xl opacity-80 text-[#F3E2C5]">
                Hult Prize Tanta — Season 2
              </p>
            </div>
            <p className="font-serif italic text-base md:text-lg opacity-80 max-w-sm">
              I wasn't just given the title. This is the actual creative video
              work produced throughout the season.
            </p>
          </div>
        </div>

        {/* The Vertical Film Strip (Video Archive) */}
        <div className="w-full relative py-12 bg-[#F3E2C5]/5 my-12">
          <div className="absolute top-0 left-0 w-full h-4 border-y border-[#F3E2C5]/10 flex gap-2 px-2 items-center overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <div
                key={`top-${i}`}
                className="w-2 h-2 bg-[#5A0F1B] rounded-sm shrink-0"
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-4 border-y border-[#F3E2C5]/10 flex gap-2 px-2 items-center overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <div
                key={`bottom-${i}`}
                className="w-2 h-2 bg-[#5A0F1B] rounded-sm shrink-0"
              />
            ))}
          </div>

          {/* Horizontally scrollable container with touch swipe support */}
          <div className="flex gap-6 md:gap-8 overflow-x-auto flex-nowrap px-6 md:px-12 py-12 snap-x snap-mandatory hide-scrollbar items-center w-full">
            {[
              { id: "01", title: "Opening Day Recap", file: "opening.png" },
              {
                id: "02",
                title: "Mysterious Motivational Video",
                file: "Mysterious Motivational Video.png",
              },
              {
                id: "03",
                title: "Hult Prize Competition Explainer",
                file: "Hult Prize Competition Explainer.png",
              },
              {
                id: "04",
                title: "Submission Deadline Countdown",
                file: "Submission Deadline Countdown.png",
              },
              {
                id: "05",
                title: "Competition Day Interviews",
                file: "Competition Day Interviews.png",
              },
              {
                id: "06",
                title: "Fayroza Sponsor Marketing",
                file: "Screenshot 2026-09-04 224838.png",
              },
            ].map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // w-[80vw] on mobile ensures part of the next item is visible guiding the user to scroll
                className="w-[80vw] max-w-[280px] shrink-0 snap-center group cursor-pointer relative"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="w-full aspect-[9/16] bg-[#F3E2C5]/10 border border-[#F3E2C5]/20 flex flex-col items-center justify-center relative overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#9CAF9A]/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/hult/${video.file}`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith(".png")) {
                        target.src = target.src.replace(".png", ".jpg");
                      } else if (target.src.endsWith(".jpg")) {
                        target.src = target.src.replace(".jpg", ".jpeg");
                      } else {
                        target.style.display = "none";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-[#5A0F1B]/20 group-hover:bg-[#5A0F1B]/10 transition-colors z-10" />
                  <Play className="w-12 h-12 text-[#F3E2C5] opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:text-[#9CAF9A] transition-all z-20 drop-shadow-lg" />
                </div>

                <div className="flex items-start gap-4 px-2">
                  <span className="font-mono text-[#9CAF9A] text-sm font-bold">
                    {video.id}
                  </span>
                  <h4 className="font-bold text-xs uppercase tracking-wide text-[#F3E2C5] leading-snug mt-0.5">
                    {video.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Editing & Prompt Sessions with CTAs */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 mt-24 pt-12 relative border-t border-dashed border-[#F3E2C5]/20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#F3E2C5] mb-4">
              Teaching the Craft.
            </h3>
            <p className="font-serif italic text-lg opacity-80 text-[#F3E2C5]/80 leading-relaxed max-w-2xl mx-auto">
              I didn't just edit videos. I participated in giving dedicated
              sessions to members, breaking down DaVinci Resolve, CapCut, and
              the creative process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
            {/* Session 1 */}
            <div className="flex flex-col items-center text-center">
              <ScrapbookPhoto
                src="/images/hult/video.png"
                label="VIDEO_EDITING_SESSION"
                rotate="-rotate-1"
                className="w-full max-w-md aspect-[16/9]"
                onImageClick={setSelectedImage}
              />
              <p className="mt-8 mb-6 font-serif italic text-xl text-[#F3E2C5]/90">
                Want to see the full session?
              </p>
              <a
                href="https://drive.google.com/file/d/1NNHaagX4y5mbVQc7fJUo2STJ6ydlWtN_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-[#5A0F1B] bg-[#F3E2C5] px-8 py-4 shadow-[4px_4px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#9CAF9A] transition-all"
              >
                Watch Full Session{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Session 2 */}
            <div className="flex flex-col items-center text-center">
              <ScrapbookPhoto
                src="/images/hult/prompt.png"
                label="PROMPT_ENGINEERING_SESSION"
                rotate="rotate-1"
                className="w-full max-w-md aspect-[16/9]"
                onImageClick={setSelectedImage}
              />
              <p className="mt-8 mb-6 font-serif italic text-xl text-[#F3E2C5]/90">
                Want to see the full session?
              </p>
              <a
                href="https://drive.google.com/file/d/18DFlfBWvM_J_nuSSpu11WHh40AS0cmW1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-[#5A0F1B] bg-[#F3E2C5] px-8 py-4 shadow-[4px_4px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#9CAF9A] transition-all"
              >
                Watch Full Session{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 05: OWN CONTENT (BETWEEN SETS) */}
      <section className="px-6 md:px-12 py-32 border-t border-[#F3E2C5]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full relative min-h-[400px] md:min-h-[500px]">
            {/* The Content Collage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-[85%] md:w-[75%] z-20"
            >
              <ScrapbookPhoto
                src="/images/content/between-sets.png"
                label="BETWEEN_SETS_YOUTUBE"
                rotate="rotate-2"
                className="w-full aspect-[16/9]"
                onImageClick={setSelectedImage}
              />
              <Sticker
                text="My Own Thing"
                className="-top-4 -right-4 scale-110"
                rotate="rotate-[12deg]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute top-24 left-0 w-[60%] md:w-[50%] z-10 hidden md:block"
            >
              <ScrapbookPhoto
                src="/images/content/bet-video.png"
                label="BET_VIDEO"
                rotate="-rotate-3"
                className="w-full aspect-video"
                onImageClick={setSelectedImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-4 md:left-10 w-[45%] md:w-[35%] z-30"
            >
              <ScrapbookPhoto
                src="/images/content/tiktok.png"
                label="TIKTOK"
                rotate="-rotate-6"
                className="w-full aspect-[9/16]"
                onImageClick={setSelectedImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-12 right-4 md:right-10 w-[50%] md:w-[40%] z-20"
            >
              <ScrapbookPhoto
                src="/images/content/insta.png"
                label="INSTAGRAM"
                rotate="rotate-4"
                className="w-full aspect-[4/5]"
                onImageClick={setSelectedImage}
              />
            </motion.div>
          </div>

          <div className="flex-1 space-y-8 z-40">
            <h2 className="text-sm font-mono text-[#9CAF9A] uppercase tracking-widest">
              Chapter 05
            </h2>
            <p className="text-2xl md:text-4xl font-serif leading-tight">
              "Why don't I use the skills I learned to create content myself?"
            </p>
            <div className="space-y-4 text-[#F3E2C5]/70 text-sm md:text-base leading-relaxed">
              <p>
                Through student activities, I learned how to write scripts,
                present in front of people, and edit videos.
              </p>
              <p>
                At the same time, I naturally enjoyed collecting information,
                listening to history, discovering interesting facts, and working
                out at the gym.
              </p>
              <p className="text-[#F3E2C5] font-bold uppercase tracking-wide mt-6 block">
                This led to the creation of BETWEEN SETS.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <CharacterScene
                label="CREATOR"
                action="*recording*"
                className="w-16 h-16"
              />
              <Annotation text="Putting the pieces together." />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 06: CREATIVA INNOVATION HUB */}
      <section className="px-6 md:px-12 py-32 bg-[#F3E2C5] text-[#5A0F1B] rounded-[3rem] mx-2 md:mx-6 mb-12 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-sm font-mono text-[#5A0F1B]/50 uppercase tracking-widest mb-4">
              Chapter 06
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Creativa
            </h3>
            <p className="font-serif italic text-lg opacity-80 max-w-xl mx-auto">
              Tanta Innovation Hub — A recurring place in my journey where ideas
              turned into execution.
            </p>
          </div>

          {/* 5 Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-20">
            {[
              {
                title: "Ideation 2025",
                desc: "Connected to Etsalah & Hult Prize. The first major challenge.",
              },
              {
                title: "Ideation Bootcamp 2026",
                desc: "Connected to Mutqn. Leading a team and building an MVP in 3 days.",
              },
              {
                title: "Freelancing Kickstart",
                desc: "Learning communication, emotional intelligence, and personal branding.",
              },
              {
                title: "AI Empire Protocol",
                desc: "Using AI inside a real business and how entrepreneurs can benefit from it.",
              },
              {
                title: "Business OS in Notion",
                desc: "Structuring workflows and mapping business needs into Notion systems.",
              },
            ].map((exp, i) => (
              <div key={i} className="relative group">
                <div className="w-10 h-10 border-2 border-[#5A0F1B] rounded-full flex items-center justify-center font-bold text-sm mb-6 bg-[#F3E2C5] relative z-10">
                  {i + 1}
                </div>
                {i !== 4 && (
                  <div className="hidden lg:block absolute top-5 left-10 w-[calc(100%+2rem)] h-px border-t-2 border-dashed border-[#5A0F1B]/20" />
                )}
                <h4 className="font-bold uppercase tracking-wide mb-3">
                  {exp.title}
                </h4>
                <p className="text-sm opacity-80 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>

          {/* Memories From Creativa Gallery */}
          <div className="mt-40 pt-20 border-t-2 border-dashed border-[#5A0F1B]/10">
            <div className="text-center mb-20">
              <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                Memories from Creativa
              </h4>
              <p className="font-serif italic opacity-70 text-lg">
                These are the moments I collected along the way.
              </p>
            </div>

            <div className="relative h-[650px] md:h-[600px] w-full max-w-5xl mx-auto flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                viewport={{ once: true }}
                className="absolute top-0 left-4 md:left-[10%] z-10"
              >
                <ScrapbookPhoto
                  src="/images/certificates/creativa-2025ph.jpg"
                  label="CREATIVA_HUB_PLACE"
                  className="w-56 md:w-80 aspect-[4/3] border-[#5A0F1B]/20 bg-white"
                  onImageClick={setSelectedImage}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -15 }}
                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="absolute top-40 right-4 md:top-20 md:right-[10%] z-20"
              >
                <ScrapbookPhoto
                  src="/images/certificates/creativa-2026ph.jpg"
                  label="PERSONAL_EXPERIENCE_PHOTO"
                  className="w-48 md:w-72 aspect-[3/4] border-[#5A0F1B]/20 bg-white"
                  onImageClick={setSelectedImage}
                />
                <Sticker
                  text="The Hub"
                  className="-top-3 -right-3 scale-110"
                  rotate="rotate-[8deg]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-10 left-12 md:left-[30%] z-30"
              >
                <ScrapbookPhoto
                  src="/images/certificates/creativa-2026ph2.jpg"
                  label="MEMORABLE_MOMENT_GROUP"
                  className="w-64 md:w-96 aspect-video border-[#5A0F1B]/20 bg-white"
                  onImageClick={setSelectedImage}
                />
                <Annotation
                  text="Good times"
                  className="-bottom-8 right-10 text-[#5A0F1B]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 07: HOSSO (THE EVOLUTION) */}
      <section className="px-6 md:px-12 py-32 flex flex-col items-center justify-center text-center min-h-[80vh] relative overflow-hidden">
        <Asterisk className="absolute top-1/4 left-[10%] w-12 h-12 text-[#F3E2C5]/5 animate-[spin_10s_linear_infinite]" />
        <Asterisk className="absolute bottom-1/3 right-[15%] w-20 h-20 text-[#F3E2C5]/5 animate-[spin_14s_linear_infinite]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl space-y-12 z-20 flex flex-col items-center"
        >
          <h2 className="text-sm font-mono text-[#9CAF9A] uppercase tracking-widest">
            Chapter 07
          </h2>

          <ScrapbookPhoto
            src="/images/content/hosso.png"
            label="HOSSO_IDENTITY"
            rotate="rotate-[-1deg]"
            className="w-full max-w-2xl mx-auto aspect-video shadow-2xl mb-8"
            onImageClick={setSelectedImage}
          />

          <div className="space-y-4 font-serif text-xl md:text-3xl leading-relaxed text-[#F3E2C5]/70">
            <p>
              Learning{" "}
              <ArrowRight className="inline w-5 h-5 mx-2 text-[#9CAF9A]" />{" "}
              Student Activities
            </p>
            <p>
              Creating{" "}
              <ArrowRight className="inline w-5 h-5 mx-2 text-[#9CAF9A]" />{" "}
              Video{" "}
              <ArrowRight className="inline w-5 h-5 mx-2 text-[#9CAF9A]" />{" "}
              Content
            </p>
            <p>
              Between Sets{" "}
              <ArrowRight className="inline w-5 h-5 mx-2 text-[#9CAF9A]" />{" "}
              <span className="font-black font-sans uppercase text-[#F3E2C5] tracking-tight">
                Hosso
              </span>
            </p>
          </div>

          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#F3E2C5] pt-8">
            This is <br /> Hosso World.
          </h3>

          <p className="text-sm md:text-base font-mono opacity-60 max-w-md mx-auto leading-relaxed">
            Not a random rebrand. Just the current evolution of a journey that
            started with balancing university, writing code, and discovering how
            to create.
          </p>

          <div className="pt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-[#5A0F1B] bg-[#9CAF9A] px-8 py-4 shadow-[4px_4px_0px_0px_#F3E2C5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#F3E2C5] transition-all"
            >
              Return to the Map
              <MoveUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= LIGHTBOX / MODAL FOR VERTICAL VIDEOS ================= */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#5A0F1B]/95 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-[400px] bg-[#F3E2C5] rounded-sm p-4 shadow-2xl flex flex-col items-center border border-[#5A0F1B]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -right-4 md:-top-5 md:-right-5 bg-[#9CAF9A] text-[#5A0F1B] p-2 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full aspect-[9/16] bg-[#5A0F1B]/10 border border-[#5A0F1B]/20 flex flex-col items-center justify-center relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/hult/${selectedVideo.file}`}
                  alt={selectedVideo.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith(".png"))
                      target.src = target.src.replace(".png", ".jpg");
                    else target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-[#5A0F1B]/10" />
                <Play className="w-16 h-16 text-[#F3E2C5] opacity-90 drop-shadow-xl z-10" />
              </div>

              <div className="pt-6 pb-2 text-center w-full">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A0F1B]/50 block mb-1">
                  Video Archive
                </span>
                <h3 className="text-lg font-black uppercase text-[#5A0F1B] leading-tight">
                  {selectedVideo.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= GLOBAL LIGHTBOX FOR IMAGES ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#5A0F1B]/95 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-[#F3E2C5] hover:text-[#9CAF9A] transition-colors p-2 z-50 bg-[#5A0F1B] border border-[#F3E2C5]/20 rounded-full shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain shadow-2xl border border-[#F3E2C5]/20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </main>
  );
}
