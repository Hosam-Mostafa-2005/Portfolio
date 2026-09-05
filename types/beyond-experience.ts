export interface BeyondExperienceImage {
  src: string;
  alt: string;
}

export interface BeyondExperience {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;

  role: string;

  organizations: string[];

  responsibilities?: string[];

  skills?: string[];

  images: BeyondExperienceImage[];
}
