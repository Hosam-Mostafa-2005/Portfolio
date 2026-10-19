"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types/project";
import { projects } from "@/data/projects";
import ProjectCoverImage from "./ProjectCoverImage";

// The 3 featured projects to exclude from this section
const FEATURED_SLUGS = ["stren", "etsalah", "ecommerce-admin-dashboard"];

export const RemainingProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "FRONT-END", "BACK-END", "FULL-STACK"];

  // Strictly exclude the 3 featured projects
  const remainingList: Project[] = (projects || []).filter(
    (p) => !FEATURED_SLUGS.includes(p.slug.toLowerCase())
  );

  // Robust Filtering Logic
  const filteredProjects = remainingList.filter((project: Project) => {
    if (activeFilter === "ALL") return true;
    const cat = (project.category || "").toLowerCase();

    if (activeFilter === "FRONT-END") return cat.includes("front");
    if (activeFilter === "BACK-END") return cat.includes("back");
    if (activeFilter === "FULL-STACK") return cat.includes("full");
    return true;
  });

  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto border-t border-dashed border-[#F3E2C5]/20">
      {/* Section Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3 text-[#9CAF9A] font-mono text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" />
            <span>More Tech Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-[#F3E2C5] tracking-tight mb-2">
            Other Technical Work
          </h2>
          <p className="font-serif italic text-[#F3E2C5]/70 text-base md:text-lg">
            Storefronts, discovery apps, dashboards, and experimental tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#9CAF9A] text-[#5A0F1B] font-bold shadow-sm"
                    : "bg-[#F3E2C5]/5 text-[#F3E2C5]/70 hover:text-[#9CAF9A] hover:bg-[#F3E2C5]/10 border border-[#F3E2C5]/10"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={project.slug || index}
              className="group flex flex-col border border-[#F3E2C5]/20 bg-[#F3E2C5]/[0.03] p-6 hover:bg-[#F3E2C5]/[0.07] hover:border-[#9CAF9A]/50 transition-all rounded-sm relative"
            >
              {/* Cover Image */}
              <Link
                href={`/tech/projects/${project.slug}`}
                className="block relative aspect-[16/10] bg-[#5A0F1B]/60 border border-[#F3E2C5]/15 mb-6 overflow-hidden rounded-sm group/thumb"
              >
                <ProjectCoverImage
                  project={project}
                  className="opacity-80 group-hover/thumb:opacity-100 group-hover/thumb:scale-[1.03] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[#5A0F1B]/15 group-hover/thumb:bg-transparent transition-colors duration-500" />
              </Link>

              {/* Project Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-black uppercase text-[#F3E2C5] tracking-tight group-hover:text-[#9CAF9A] transition-colors">
                    <Link href={`/tech/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <span className="font-mono text-[10px] text-[#F3E2C5]/60 uppercase tracking-widest border border-[#F3E2C5]/20 px-2 py-0.5 rounded-sm whitespace-nowrap shrink-0">
                    {project.category}
                  </span>
                </div>

                <p className="text-[#F3E2C5]/75 text-sm leading-relaxed mb-6 font-serif line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {project.techStack?.slice(0, 5).map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] text-[#F3E2C5]/80 uppercase tracking-wider bg-[#F3E2C5]/5 border border-[#F3E2C5]/15 px-2.5 py-1 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack && project.techStack.length > 5 && (
                    <span className="font-mono text-[10px] text-[#9CAF9A] uppercase px-1.5 py-1">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#F3E2C5]/10 mt-auto">
                  <Link
                    href={`/tech/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3E2C5] group-hover:text-[#9CAF9A] transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#9CAF9A] hover:text-[#F3E2C5] transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F3E2C5]/60 hover:text-[#F3E2C5] transition-colors p-1"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center border border-dashed border-[#F3E2C5]/20 rounded-sm">
          <p className="font-mono text-[#F3E2C5]/50 uppercase tracking-widest text-xs">
            No projects found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default RemainingProjects;
