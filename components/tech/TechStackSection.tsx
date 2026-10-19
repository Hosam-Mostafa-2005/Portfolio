"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Asterisk,
  LayoutTemplate,
  Layers,
  Sparkles,
  Code2,
  Cpu,
  Terminal,
  Database,
  Wrench,
} from "lucide-react";

export const CORE_SKILLS = [
  "React.js",
  "Next.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
];

export const SKILL_CATEGORIES = [
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

interface TechStackSectionProps {
  compact?: boolean;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  compact = false,
}) => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3 text-[#9CAF9A] font-mono text-xs uppercase tracking-widest">
          <Terminal className="w-4 h-4" />
          <span>Technical Toolkit</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase text-[#F3E2C5] tracking-tight mb-2">
          Tech Stack & Capabilities
        </h2>
        <p className="font-serif italic text-[#F3E2C5]/70 text-base md:text-lg">
          The languages, frameworks, and system tools I build with.
        </p>
      </div>

      {/* CORE SKILLS (Foundation) */}
      <div className="relative border-2 border-[#9CAF9A] bg-[#9CAF9A]/5 p-6 md:p-10 mb-12 rounded-sm shadow-xl">
        <div className="flex items-center gap-3 mb-6 border-b border-[#9CAF9A]/30 pb-4">
          <Asterisk className="w-5 h-5 text-[#9CAF9A]" />
          <h3 className="font-black text-xl md:text-2xl uppercase text-[#9CAF9A] tracking-wide">
            Core Foundation
          </h3>
        </div>
        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {CORE_SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, scale: 1.04 }}
              className="bg-[#9CAF9A] text-[#5A0F1B] font-bold uppercase tracking-widest text-xs md:text-sm px-4 py-2 border border-[#5A0F1B]/20 shadow-[3px_3px_0px_0px_#F3E2C5] hover:shadow-[1px_1px_0px_0px_#F3E2C5] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CATEGORIZED SKILLS (Grid) */}
      {!compact && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="border border-[#F3E2C5]/20 bg-[#F3E2C5]/5 p-5 rounded-sm hover:bg-[#F3E2C5]/10 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4 border-b border-[#F3E2C5]/10 pb-2.5">
                {cat.icon}
                <h4 className="font-bold text-xs text-[#F3E2C5] uppercase tracking-wider">
                  {cat.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] text-[#F3E2C5]/80 uppercase tracking-widest border border-[#F3E2C5]/15 bg-[#5A0F1B] px-2 py-0.5 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TechStackSection;
