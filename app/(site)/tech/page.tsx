// app/(site)/tech/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Asterisk,
  ArrowRight,
  MoveUpRight,
  Terminal,
  Code2,
  Cpu,
  Layers,
  LayoutTemplate,
  Database,
  Sparkles,
  Wrench,
  ExternalLink,
} from "lucide-react";

// IMPORTANT: Importing from your existing data architecture.
// Adjust the import path if your alias is different.
import { projects } from "@/data/projects";

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
    className={`absolute z-20 px-3 py-1 bg-[#F3E2C5] text-[#5A0F1B] font-bold text-[10px] md:text-xs uppercase tracking-widest rounded-sm shadow-md border border-[#5A0F1B]/20 cursor-default ${rotate} ${className}`}
  >
    {text}
  </motion.div>
);

const Annotation = ({
  text,
  className,
  arrow = false,
}: {
  text: string;
  className?: string;
  arrow?: boolean;
}) => (
  <div
    className={`absolute z-20 font-serif italic text-[#9CAF9A] text-sm md:text-base flex items-center gap-2 ${className}`}
  >
    <span>{text}</span>
    {arrow && <MoveUpRight className="w-4 h-4" />}
  </div>
);

// ==========================================
// SMART IMAGE LOADER COMPONENT
// ==========================================
// This component gracefully falls back to main.png or main.jpg
// if the image specified in the data file is missing.

const ProjectCoverImage = ({ project }: { project: any }) => {
  const initialSrc =
    project.images?.[0]?.src || `/images/projects/${project.slug}/main.png`;
  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [fallbackStage, setFallbackStage] = useState(0);

  return (
    <>
      {fallbackStage < 3 ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
          onError={() => {
            if (fallbackStage === 0) {
              setImgSrc(`/images/projects/${project.slug}/main.png`);
              setFallbackStage(1);
            } else if (fallbackStage === 1) {
              setImgSrc(`/images/projects/${project.slug}/main.jpg`);
              setFallbackStage(2);
            } else {
              setFallbackStage(3); // All attempts failed
            }
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[#F3E2C5]/40 text-[10px] uppercase tracking-widest text-center px-4 bg-[#5A0F1B]/40">
          [ /images/projects/{project.slug}/main.* ]
        </div>
      )}
    </>
  );
};

// ==========================================
// DATA: SKILLS & TECH STACK
// ==========================================

const CORE_SKILLS = [
  "React.js",
  "Next.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
];

const SKILL_CATEGORIES = [
  {
    title: "FRONT-END",
    icon: <LayoutTemplate className="w-5 h-5 text-[#9CAF9A]" />,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "STYLING & UI",
    icon: <Layers className="w-5 h-5 text-[#9CAF9A]" />,
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
    ],
  },
  {
    title: "ANIMATION",
    icon: <Sparkles className="w-5 h-5 text-[#9CAF9A]" />,
    skills: ["Framer Motion", "GSAP"],
  },
  {
    title: "UI LIBRARIES",
    icon: <Code2 className="w-5 h-5 text-[#9CAF9A]" />,
    skills: ["Syncfusion", "shadcn/ui"],
  },
  {
    title: "STATE MANAGEMENT",
    icon: <Cpu className="w-5 h-5 text-[#9CAF9A]" />,
    skills: ["Redux Toolkit", "Zustand"],
  },
  {
    title: "BACK-END",
    icon: <Terminal className="w-5 h-5 text-[#9CAF9A]" />,
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT",
      "Bcrypt",
    ],
  },
  {
    title: "DATA & API",
    icon: <Database className="w-5 h-5 text-[#9CAF9A]" />,
    skills: ["JSON", "Axios", "Fetch API"],
  },
  {
    title: "TOOLS",
    icon: <Wrench className="w-5 h-5 text-[#9CAF9A]" />,
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function TechWorldPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "FRONT-END", "BACK-END", "FULL-STACK"];

  // Fallback in case projects data is empty
  const projectData =
    projects && projects.length > 0
      ? projects
      : [
          {
            slug: "synfusion-dashboard",
            title: "Synfusion Dashboard",
            description:
              "A complex data visualization dashboard using Syncfusion components.",
            category: "Front-End",
            techStack: ["React", "Tailwind CSS", "Syncfusion"],
          },
          {
            slug: "gym-system",
            title: "Gym Management System",
            description:
              "Comprehensive system for tracking workouts and user sessions.",
            category: "Full-Stack",
            techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
          },
          {
            slug: "auth-api",
            title: "Authentication API",
            description:
              "Secure backend service handling JWT auth and user data.",
            category: "Back-End",
            techStack: ["Express.js", "JWT", "Bcrypt", "Mongoose"],
          },
        ];

  // Robust Filtering Logic
  const filteredProjects = projectData.filter((project: any) => {
    if (activeFilter === "ALL") return true;
    const cat = (project.category || "").toLowerCase();

    if (activeFilter === "FRONT-END") return cat.includes("front");
    if (activeFilter === "BACK-END") return cat.includes("back");
    if (activeFilter === "FULL-STACK") return cat.includes("full");
    return true;
  });

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

      {/* ================= 2. TECH STACK / SKILLS ================= */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-[#F3E2C5] tracking-tight mb-2">
            Tech Stack
          </h2>
          <p className="font-serif italic text-[#F3E2C5]/70 text-lg">
            The tools I use to build things.
          </p>
        </div>

        {/* CORE SKILLS (Emphasized) */}
        <div className="relative border-2 border-[#9CAF9A] bg-[#9CAF9A]/5 p-8 md:p-12 mb-16 rounded-sm shadow-xl">
          <Annotation
            text="The Foundation"
            className="-top-4 -right-2 md:-right-8"
            arrow
          />
          <div className="flex items-center gap-3 mb-8 border-b border-[#9CAF9A]/30 pb-4">
            <Asterisk className="w-6 h-6 text-[#9CAF9A]" />
            <h3 className="font-black text-2xl uppercase text-[#9CAF9A] tracking-wide">
              Core
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {CORE_SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-[#9CAF9A] text-[#5A0F1B] font-bold uppercase tracking-widest text-xs md:text-sm px-4 py-2 border border-[#5A0F1B]/20 shadow-[3px_3px_0px_0px_#F3E2C5] hover:shadow-[1px_1px_0px_0px_#F3E2C5] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CATEGORIZED SKILLS (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="border border-[#F3E2C5]/20 bg-[#F3E2C5]/5 p-6 rounded-sm group hover:bg-[#F3E2C5]/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-[#F3E2C5]/10 pb-3">
                {cat.icon}
                <h4 className="font-bold text-[#F3E2C5] uppercase tracking-wide">
                  {cat.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] text-[#F3E2C5]/80 uppercase tracking-widest border border-[#F3E2C5]/20 bg-[#5A0F1B] px-2 py-1 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. PROJECT FILTERING ================= */}
      <section className="px-6 md:px-12 pt-16 pb-8 max-w-7xl mx-auto border-t border-dashed border-[#F3E2C5]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#F3E2C5] tracking-tight mb-2">
              Projects
            </h2>
            <p className="font-serif italic text-[#F3E2C5]/70 text-lg">
              Things I've engineered and deployed.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-widest rounded-sm transition-all duration-300 ${
                    isActive
                      ? "bg-[#9CAF9A] text-[#5A0F1B] font-bold"
                      : "bg-transparent text-[#F3E2C5] hover:text-[#9CAF9A]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4 & 5. PROJECTS GRID ================= */}
      <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto min-h-[50vh]">
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any, index: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.slug || index}
                className="group flex flex-col border border-[#F3E2C5]/20 bg-[#F3E2C5]/5 p-6 hover:bg-[#F3E2C5]/10 transition-colors relative"
              >
                {/* Blueprint grid accent */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#F3E2C5 1px, transparent 1px), linear-gradient(90deg, #F3E2C5 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Project Main Image (COVER) WITH SMART FALLBACK */}
                <Link
                  href={`/tech/projects/${project.slug || "#"}`}
                  className="block relative aspect-[16/10] bg-[#5A0F1B]/50 border border-[#F3E2C5]/10 mb-8 overflow-hidden z-10"
                >
                  <ProjectCoverImage project={project} />
                  <div className="absolute inset-0 bg-[#5A0F1B]/10 group-hover:bg-transparent transition-colors duration-500" />
                </Link>

                <div className="flex flex-col flex-grow z-10">
                  <div className="flex items-center justify-between mb-4 border-b border-[#F3E2C5]/10 pb-4">
                    <h3 className="text-2xl font-black uppercase text-[#F3E2C5] tracking-tight group-hover:text-[#9CAF9A] transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-[#F3E2C5]/50 uppercase tracking-widest border border-[#F3E2C5]/20 px-2 py-1 rounded-sm whitespace-nowrap ml-4">
                      {project.category || "Project"}
                    </span>
                  </div>

                  <p className="text-[#F3E2C5]/70 text-sm leading-relaxed mb-8 font-serif">
                    {project.description}
                  </p>

                  {/* Playful Interactive Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.techStack &&
                      project.techStack.map((tech: string, i: number) => (
                        <motion.span
                          key={i}
                          whileHover={{
                            scale: 1.1,
                            rotate: i % 2 === 0 ? 3 : -3,
                            backgroundColor: "#9CAF9A",
                            color: "#5A0F1B",
                            borderColor: "#9CAF9A",
                          }}
                          className="font-mono text-[10px] text-[#F3E2C5] uppercase tracking-wider bg-[#F3E2C5]/5 border border-[#F3E2C5]/20 px-3 py-1.5 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                  </div>

                  {/* Project Links / Actions */}
                  <div className="flex flex-wrap items-center gap-6 mt-auto">
                    <Link
                      href={`/tech/projects/${project.slug || "#"}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3E2C5] group-hover:text-[#9CAF9A] transition-colors w-max"
                    >
                      View Case Study{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9CAF9A] hover:text-[#F3E2C5] transition-colors w-max group/link"
                      >
                        Live Demo{" "}
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="col-span-1 lg:col-span-2 py-20 text-center border border-dashed border-[#F3E2C5]/20">
              <p className="font-mono text-[#F3E2C5]/50 uppercase tracking-widest">
                No projects found for this category.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      {/* ================= 6. FINAL CTA ================= */}
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
