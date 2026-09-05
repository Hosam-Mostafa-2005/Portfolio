// types/certificate.ts

export type CertificateCategory = "experience" | "technical" | "creativa";

export interface Certificate {
  slug: string;
  title: string;
  organization: string;
  date?: string;
  duration?: string;
  category: CertificateCategory;
  image: string;
}
