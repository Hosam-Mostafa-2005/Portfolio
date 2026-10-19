"use client";

import React, { useState } from "react";
import { Project } from "@/types/project";

interface ProjectCoverImageProps {
  project: Project;
  className?: string;
}

export const ProjectCoverImage: React.FC<ProjectCoverImageProps> = ({
  project,
  className = "",
}) => {
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
          className={`w-full h-full object-cover transition-all duration-700 ${className}`}
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

export default ProjectCoverImage;
