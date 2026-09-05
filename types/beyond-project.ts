export type BeyondProjectCategory =
  | "Entrepreneurship"
  | "Competition"
  | "Content"
  | "Community"
  | "Research"
  | "Learning"
  | "Other";

export type BeyondProjectStatus = "completed" | "in-progress" | "archived";

export interface BeyondProjectImage {
  src: string;
  alt: string;
}

export interface BeyondProject {
  slug: string;

  title: string;
  description: string;
  longDescription?: string;

  organization?: string;
  date?: string;

  category: BeyondProjectCategory;
  featured: boolean;
  status: BeyondProjectStatus;

  role?: string;

  images: BeyondProjectImage[];

  links?: {
    website?: string;
    github?: string;
    linkedin?: string;
    other?: string;
  };

  achievements?: string[];
  skills?: string[];
  learnings?: string[];

  keyInsights?: string[];
  turningPoint?: string;
  inspiration?: string;
  outcome?: string;
  gratitude?: string[];

  relatedTechProjectSlug?: string;
  relatedCreativa?: boolean;
}
