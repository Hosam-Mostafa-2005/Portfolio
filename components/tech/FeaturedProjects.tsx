"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types/project";
import { projects } from "@/data/projects";
import ProjectCoverImage from "./ProjectCoverImage";

// Explicit order requested: 1. STREN, 2. Etsalah, 3. Ecommerce Admin Dashboard
const FEATURED_SLUGS = ["STREN", "etsalah", "ecommerce-admin-dashboard"];

const FEATURED_BADGES: Record<string, string> = {
  STREN: "Flagship SaaS",
  etsalah: "Live Platform",
  "ecommerce-admin-dashboard": "Product System",
};

export const FeaturedProjects: React.FC = () => {
  // Retrieve the 3 projects in the exact specified order
  const featuredList: Project[] = FEATURED_SLUGS.map((slug) =>
    projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase())
  ).filter((p): p is Project => Boolean(p));

  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-[#9CAF9A] w-5 h-5" />
          <span className="font-mono text-xs text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-sm">
            Top Flagship Work
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F3E2C5]/10 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#F3E2C5] tracking-tight mb-3">
              Featured Projects
            </h2>
            <p className="font-serif italic text-[#F3E2C5]/70 text-base md:text-lg max-w-2xl leading-relaxed">
              My three primary engineering projects — showcasing full-stack SaaS
              architecture, modern React platforms, and complex admin dashboards.
            </p>
          </div>

          <div className="font-mono text-xs text-[#9CAF9A] uppercase tracking-widest hidden md:block">
            [ 01 — 03 Selected Builds ]
          </div>
        </div>
      </div>

      {/* Featured Projects List */}
      <div className="space-y-16 md:space-y-24">
        {featuredList.map((project, index) => {
          const numberFormatted = `0${index + 1}`;
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative border-2 border-[#F3E2C5]/20 bg-[#F3E2C5]/[0.03] hover:border-[#9CAF9A]/60 transition-all duration-500 rounded-sm p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(156,175,154,0.15)] hover:shadow-[6px_6px_0px_0px_#9CAF9A]"
            >
              {/* Subtle blueprint grid background */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#F3E2C5 1px, transparent 1px), linear-gradient(90deg, #F3E2C5 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#F3E2C5]/10 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-2xl md:text-3xl font-black text-[#9CAF9A]">
                    {numberFormatted}
                  </span>
                  <div className="h-4 w-px bg-[#F3E2C5]/20" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#5A0F1B] bg-[#9CAF9A] font-bold px-3 py-1 rounded-sm shadow-sm">
                    {project.category}
                  </span>
                  {project.role && (
                    <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider text-[#F3E2C5]/60 border border-[#F3E2C5]/15 px-2.5 py-0.5 rounded-sm">
                      {project.role}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {FEATURED_BADGES[project.slug] && (
                    <span className="font-mono text-[10px] text-[#F3E2C5] bg-[#F3E2C5]/10 border border-[#F3E2C5]/20 uppercase tracking-widest px-2.5 py-1 rounded-sm">
                      {FEATURED_BADGES[project.slug]}
                    </span>
                  )}
                  {project.status && (
                    <span className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#9CAF9A] animate-pulse" />
                      {project.status.replace("-", " ")}
                    </span>
                  )}
                </div>
              </div>

              {/* Main Card Content Grid */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual / Screenshot Column */}
                <div
                  className={`lg:col-span-7 relative ${
                    isEven ? "lg:col-start-6" : ""
                  }`}
                >
                  <Link
                    href={`/tech/projects/${project.slug}`}
                    className="block relative aspect-[16/10] bg-[#5A0F1B]/60 border border-[#F3E2C5]/20 overflow-hidden group/image rounded-sm shadow-xl"
                  >
                    <ProjectCoverImage
                      project={project}
                      className="group-hover/image:scale-[1.03] opacity-85 group-hover/image:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5A0F1B]/60 via-transparent to-transparent pointer-events-none" />

                    {/* View Overlay on Hover */}
                    <div className="absolute bottom-4 right-4 bg-[#5A0F1B]/90 border border-[#F3E2C5]/20 backdrop-blur-sm px-3 py-1.5 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#F3E2C5]">
                        View Case Study
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9CAF9A]" />
                    </div>
                  </Link>
                </div>

                {/* Details & Specs Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between ${
                    isEven ? "lg:col-start-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-2xl md:text-4xl font-black uppercase text-[#F3E2C5] tracking-tight mb-4 group-hover:text-[#9CAF9A] transition-colors leading-tight">
                      <Link href={`/tech/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-[#F3E2C5]/80 text-sm md:text-base leading-relaxed font-serif mb-6">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-2.5 mb-6 pt-2 border-t border-[#F3E2C5]/10">
                        {project.highlights.slice(0, 3).map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-[#F3E2C5]/75 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#9CAF9A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.techStack.slice(0, 8).map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="font-mono text-[10px] text-[#F3E2C5]/90 uppercase tracking-wider bg-[#F3E2C5]/5 border border-[#F3E2C5]/20 px-2.5 py-1 rounded-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 8 && (
                        <span className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-wider px-2 py-1">
                          +{project.techStack.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions / CTA Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#F3E2C5]/10">
                    <Link
                      href={`/tech/projects/${project.slug}`}
                      className="group/btn inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-[#5A0F1B] bg-[#9CAF9A] px-5 py-3 shadow-[3px_3px_0px_0px_#F3E2C5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#F3E2C5] transition-all"
                    >
                      Case Study
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3E2C5] border border-[#F3E2C5]/30 hover:border-[#9CAF9A] hover:text-[#9CAF9A] px-4 py-2.5 transition-colors"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3E2C5]/70 hover:text-[#F3E2C5] transition-colors px-2 py-2"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <FaGithub className="w-4 h-4" />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
