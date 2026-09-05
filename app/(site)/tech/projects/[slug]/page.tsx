"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MoveUpRight,
  Asterisk,
  X,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

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
  <div
    className={`absolute z-20 px-3 py-1 bg-[#F3E2C5] text-[#5A0F1B] font-bold text-[10px] md:text-xs uppercase tracking-widest rounded-sm shadow-md border border-[#5A0F1B]/20 cursor-default ${rotate} ${className}`}
  >
    {text}
  </div>
);

const Annotation = ({
  text,
  className,
  arrow = false,
  direction = "right",
  rotate,
}: {
  text: string;
  className?: string;
  arrow?: boolean;
  direction?: "right" | "left" | "down";
  rotate?: string;
}) => (
  <div
    className={`absolute z-20 font-serif italic text-[#9CAF9A] text-sm md:text-base flex items-center gap-2 ${className}`}
  >
    {arrow && direction === "left" && (
      <ArrowRight className="w-4 h-4 rotate-180" />
    )}
    <span>{text}</span>
    {arrow && direction === "right" && <MoveUpRight className="w-4 h-4" />}
  </div>
);

// ==========================================
// MODULAR PAGE SECTIONS
// ==========================================

const ProjectHero = ({ project }: { project: any }) => {
  const mainImage =
    project.images?.[0]?.src || `/images/projects/${project.slug}/main.png`;

  return (
    <section className="px-6 md:px-12 pt-32 pb-16 max-w-6xl mx-auto border-b border-[#F3E2C5]/10">
      <Link
        href="/tech"
        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9CAF9A] hover:text-[#F3E2C5] transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-[10px] text-[#5A0F1B] bg-[#9CAF9A] uppercase tracking-widest px-3 py-1 rounded-sm font-bold">
              {project.category}
            </span>
            {project.status && (
              <span className="font-mono text-[10px] text-[#F3E2C5] uppercase tracking-widest border border-[#F3E2C5]/30 px-3 py-1 rounded-sm">
                {project.status.replace("-", " ")}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase text-[#F3E2C5] tracking-tight mb-6 leading-[0.95]">
            {project.title}
          </h1>

          <p className="text-[#F3E2C5]/80 text-base md:text-lg font-serif italic mb-8 leading-relaxed">
            {project.description}
          </p>

          {project.role && (
            <div className="mb-10">
              <p className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest mb-1">
                Role
              </p>
              <p className="font-bold text-[#F3E2C5] uppercase tracking-wide text-sm">
                {project.role}
              </p>
            </div>
          )}

          {/* Project Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#5A0F1B] bg-[#F3E2C5] px-6 py-3 shadow-[3px_3px_0px_0px_#9CAF9A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#9CAF9A] transition-all"
                >
                  View Live <MoveUpRight className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#F3E2C5] border border-[#F3E2C5]/30 px-6 py-3 hover:bg-[#F3E2C5]/10 transition-colors"
                >
                  <FaGithub className="w-4 h-4" /> View Code
                </a>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-[#F3E2C5]/5 border border-[#F3E2C5]/20 p-2 shadow-2xl relative group">
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-16 h-4 bg-[#F3E2C5]/20 backdrop-blur-md border border-[#F3E2C5]/10 rotate-1 z-20" />
            <div className="w-full h-full relative overflow-hidden bg-black/40 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mainImage}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <Sticker
              text="Cover"
              className="-bottom-3 -right-3"
              rotate="rotate-[8deg]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectOverview = ({ project }: { project: any }) => {
  const content = project.longDescription || project.description;
  if (!content) return null;

  return (
    <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Asterisk className="w-5 h-5 text-[#9CAF9A]" />
        <h2 className="font-mono text-xs text-[#9CAF9A] uppercase tracking-widest">
          The Project
        </h2>
        <Asterisk className="w-5 h-5 text-[#9CAF9A]" />
      </div>
      <p className="text-xl md:text-3xl font-serif text-[#F3E2C5] leading-relaxed opacity-90">
        {content}
      </p>
    </section>
  );
};

const ProjectFeatures = ({ project }: { project: any }) => {
  if (
    (!project.highlights || project.highlights.length === 0) &&
    (!project.features || project.features.length === 0)
  )
    return null;

  return (
    <section className="px-6 md:px-12 py-24 bg-[#F3E2C5]/5 border-y border-dashed border-[#F3E2C5]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-[#F3E2C5] tracking-tight mb-8">
              What I Built
            </h3>
            <ul className="space-y-6">
              {project.highlights.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#9CAF9A] shrink-0 mt-0.5" />
                  <span className="text-[#F3E2C5]/80 font-serif md:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-[#F3E2C5] tracking-tight mb-8">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature: string, i: number) => (
                <div
                  key={i}
                  className="bg-[#5A0F1B] border border-[#F3E2C5]/20 p-4 shadow-md hover:bg-[#F3E2C5]/10 transition-colors"
                >
                  <Asterisk className="w-4 h-4 text-[#9CAF9A] mb-3" />
                  <p className="font-bold text-sm text-[#F3E2C5] uppercase tracking-wide">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <Annotation
              text="Core modules"
              className="-right-12 top-10 hidden lg:flex"
              rotate="-rotate-6"
            />
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectTechStack = ({ project }: { project: any }) => {
  if (!project.techStack || project.techStack.length === 0) return null;

  return (
    <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto text-center border-b border-[#F3E2C5]/10">
      <h3 className="font-mono text-xs text-[#9CAF9A] uppercase tracking-widest mb-10">
        The Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {project.techStack.map((tech: string, i: number) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.05 }}
            className={`font-bold uppercase tracking-widest text-xs md:text-sm px-5 py-3 cursor-default transition-all ${
              i % 3 === 0
                ? "bg-[#9CAF9A] text-[#5A0F1B] shadow-[3px_3px_0px_0px_#F3E2C5]"
                : "bg-[#F3E2C5]/5 text-[#F3E2C5] border border-[#F3E2C5]/20 shadow-[3px_3px_0px_0px_#9CAF9A]"
            }`}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectGallery = ({
  project,
  onImageClick,
}: {
  project: any;
  onImageClick: (img: string) => void;
}) => {
  // 1. توليد مصفوفة الصور تلقائياً بناءً على الـ imageCount
  let galleryImages: { src: string; alt: string }[] = [];

  if (project.imageCount && project.imageCount > 0) {
    const ext = project.imageExtension || "png"; // الافتراضي هو png

    // إنشاء مصفوفة بها مسارات الصور المرقمة من 1 إلى imageCount
    galleryImages = Array.from({ length: project.imageCount }).map((_, i) => ({
      src: `/images/projects/${project.slug}/${i + 1}.${ext}`,
      alt: `${project.title} Interface ${i + 1}`,
    }));
  } else if (project.images && project.images.length > 0) {
    // كـ fallback، استخدم الصور الموجودة فعلاً في المصفوفة القديمة، لكن احذف الـ main عشان متتكررش
    galleryImages = project.images.filter(
      (img: any) => !img.src.includes("main"),
    );
  }

  // إذا لم توجد أي صور (لا عن طريق imageCount ولا عن طريق المصفوفة)، لا تظهر القسم
  if (galleryImages.length === 0) return null;

  return (
    <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <h3 className="text-3xl md:text-5xl font-black uppercase text-[#F3E2C5] tracking-tight">
          The Interface
        </h3>
        <p className="font-serif italic text-[#F3E2C5]/60 mt-4">
          Inside the project.
        </p>
        <Annotation
          text="Click to expand"
          className="absolute right-[10%] md:right-[25%] top-8 hidden md:flex"
          arrow
          direction="down"
        />
      </div>

      {/* عرض الصور على شكل أعمدة */}
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {galleryImages.map((img: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="break-inside-avoid relative group cursor-pointer bg-[#F3E2C5]/5 border border-[#F3E2C5]/10 p-2 shadow-lg"
            onClick={() => onImageClick(img.src)}
          >
            <div className="w-full relative overflow-hidden bg-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                onError={(e) => {
                  // إخفاء الصورة بهدوء في حالة عدم وجود الملف لكي لا تنهار الصفحة
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            {img.alt && (
              <div className="absolute bottom-4 left-4 bg-[#5A0F1B]/90 border border-[#F3E2C5]/20 backdrop-blur-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-[10px] text-[#F3E2C5] uppercase tracking-widest">
                  {img.alt}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectInsights = ({ project }: { project: any }) => {
  const hasChallenges = project.challenges && project.challenges.length > 0;
  const hasLearnings = project.learnings && project.learnings.length > 0;

  if (!hasChallenges && !hasLearnings) return null;

  return (
    <section className="px-6 md:px-12 py-24 bg-[#F3E2C5] text-[#5A0F1B] rounded-[3rem] mx-2 md:mx-6 mb-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#5A0F1B 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {hasChallenges && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="w-6 h-6 text-[#5A0F1B]" />
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Challenges
              </h3>
            </div>
            <ul className="space-y-6">
              {project.challenges.map((item: string, i: number) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-mono text-[#9CAF9A] text-sm mt-1">
                    0{i + 1}
                  </span>
                  <p className="font-serif italic text-lg leading-relaxed opacity-90">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasLearnings && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-6 h-6 text-[#5A0F1B]" />
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                What I Learned
              </h3>
            </div>
            <ul className="space-y-6">
              {project.learnings.map((item: string, i: number) => (
                <li
                  key={i}
                  className="flex gap-4 items-start border-b border-[#5A0F1B]/10 pb-4"
                >
                  <Asterisk className="w-4 h-4 text-[#9CAF9A] shrink-0 mt-1" />
                  <p className="font-bold text-sm uppercase tracking-wide leading-relaxed opacity-90">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectNavigation = ({
  prevProject,
  nextProject,
}: {
  prevProject: any;
  nextProject: any;
}) => {
  return (
    <section className="px-6 md:px-12 py-16 border-t border-[#F3E2C5]/10 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
      {prevProject ? (
        <Link
          href={`/tech/projects/${prevProject.slug}`}
          className="group flex flex-col items-start w-full sm:w-1/2 text-left"
        >
          <span className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest flex items-center gap-2 mb-2">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />{" "}
            Previous Project
          </span>
          <h4 className="text-xl md:text-2xl font-black uppercase text-[#F3E2C5] group-hover:text-[#9CAF9A] transition-colors line-clamp-1">
            {prevProject.title}
          </h4>
        </Link>
      ) : (
        <div className="w-full sm:w-1/2" />
      )}

      {nextProject ? (
        <Link
          href={`/tech/projects/${nextProject.slug}`}
          className="group flex flex-col items-end w-full sm:w-1/2 text-right"
        >
          <span className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest flex items-center gap-2 mb-2">
            Next Project{" "}
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
          <h4 className="text-xl md:text-2xl font-black uppercase text-[#F3E2C5] group-hover:text-[#9CAF9A] transition-colors line-clamp-1">
            {nextProject.title}
          </h4>
        </Link>
      ) : (
        <div className="w-full sm:w-1/2" />
      )}
    </section>
  );
};

// ==========================================
// MAIN PAGE COMPONENT (DYNAMIC ROUTE)
// ==========================================

export default function ProjectCaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Esc key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [lightboxImg]);

  // Find Project Data
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="bg-[#5A0F1B] min-h-screen font-sans selection:bg-[#9CAF9A] selection:text-[#5A0F1B]">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectFeatures project={project} />
      <ProjectTechStack project={project} />
      <ProjectGallery project={project} onImageClick={setLightboxImg} />
      <ProjectInsights project={project} />
      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#5A0F1B]/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-[#F3E2C5] hover:text-[#9CAF9A] transition-colors p-2 z-50 bg-[#5A0F1B] border border-[#F3E2C5]/20 rounded-full shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImg(null);
              }}
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxImg}
                alt="Enlarged project view"
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain shadow-2xl border border-[#F3E2C5]/20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
