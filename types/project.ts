export type ProjectCategory =
  | "Full Stack"
  | "Backend"
  | "Frontend"
  | "Mobile"
  | "Other";

export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectPhase {
  title: string;
  description: string;
  status?: "completed" | "in-progress" | "planned";
}

export interface Project {
  slug: string;

  title: string;
  description: string;
  longDescription?: string;

  category: ProjectCategory;

  featured: boolean;
  status: ProjectStatus;

  role?: string;

  techStack: string[];

  imageCount: number;

  images: ProjectImage[];

  githubUrl?: string;
  liveUrl?: string;

  highlights?: string[];

  features?: string[];

  challenges?: string[];

  learnings?: string[];

  phases?: ProjectPhase[];

  beyondSlug?: string;
}
