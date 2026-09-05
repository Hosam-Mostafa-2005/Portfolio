import type { BeyondProject } from "@/types/beyond-project";

export const beyondProjects: BeyondProject[] = [
  {
    slug: "etsalah",
    title: "Hult Prize Tanta — اتصلح",

    description:
      "A startup project developed under a tight deadline during Hult Prize Tanta, where my teammate and I turned an idea into an MVP and pitch and achieved 3rd place.",

    longDescription:
      "I joined Hult Prize Tanta unexpectedly after my friend was randomly selected to participate. We were then introduced to the Ideation Program at Creativa, where we learned how to develop ideas, solve problems, and shape them into startup concepts. Over three days, we attended the program from 8 AM to 5 PM, then continued working outside the program to prepare our project for the competition. My teammate and I handled the actual project development, including the idea, branding, MVP website, pitch, and presentation. Despite having very little experience with this type of challenge and a very limited amount of time, we completed the project and presented Etsalah at Hult Prize Tanta, where we achieved 3rd place.",

    category: "Competition",

    featured: true,

    status: "completed",

    role: "Project Developer & Pitch Team",

    images: [
      {
        src: "/images/projects/etsalah/hult-prize.jpg",
        alt: "Hult Prize Tanta — Third Place",
      },
      {
        src: "/images/projects/etsalah/ideation-2025.jpg",
        alt: "Creativa Ideation Program Certificate 2025",
      },
    ],

    links: {
      github: "YOUR_GITHUB_URL",
    },

    achievements: [
      "Completed the Creativa Ideation Program.",
      "Developed Etsalah under a very tight competition deadline.",
      "Built an MVP website for the project.",
      "Prepared the project's pitch and presentation.",
      "Achieved 3rd Place at Hult Prize Tanta.",
    ],

    skills: [
      "Ideation",
      "Entrepreneurship",
      "Product Thinking",
      "Problem Solving",
      "MVP Development",
      "Pitching",
      "Presentation",
      "Teamwork",
      "Time Management",
    ],

    relatedTechProjectSlug: "etsalah",
  },

  {
    slug: "mutqn",
    title: "Mutqn",

    description:
      "A startup MVP developed during the Creative Ideation Bootcamp to explore a platform connecting Quran teachers with parents for children's Quran learning and memorization.",

    longDescription:
      "Mutqn was a startup concept developed during the Creative Ideation Bootcamp. Over three days, I worked with a team to develop the idea, shape its core features, and turn the concept into a practical MVP that demonstrated how the product could work in the real world. The experience combined creative ideation, product thinking, teamwork, and rapid execution.",

    category: "Entrepreneurship",

    featured: true,

    status: "completed",

    role: "Team Leader — Product & MVP Development",

    images: [
      {
        src: "/images/projects/mutqn/cover.png",
        alt: "Mutqn startup MVP",
      },
    ],

    links: {
      other: "https://lnkd.in/dBKr_4YC",
    },

    achievements: [
      "Completed the Creative Ideation Bootcamp.",
      "Worked with a team to develop the Mutqn startup concept.",
      "Helped lead part of the project development throughout the bootcamp.",
      "Developed the idea, defined product features, and translated the concept into a practical MVP.",
    ],

    skills: [
      "Creative Ideation",
      "Product Thinking",
      "Teamwork",
      "MVP Development",
      "Problem Solving",
      "Entrepreneurship",
    ],

    relatedTechProjectSlug: "mutqn",
  },
  {
    slug: "freelancing-kickstart",

    title: "Freelancing Kickstart",

    organization: "Creativa Tanta Innovation Hub",

    category: "Learning",

    status: "completed",

    featured: true,

    date: "March 16, 2026",

    description:
      "A freelancing bootcamp that changed how I think about freelancing — from simply selling a technical skill to understanding people, communicating effectively, and solving real problems.",

    longDescription:
      "I joined the Freelancing Kickstart program expecting to learn more about how to work as a freelancer. Instead, the experience pushed me to look at freelancing from a much broader perspective. I learned that technical skill alone is not enough; successful freelancing also depends on communication, emotional intelligence, understanding clients, personal branding, and authenticity.",

    role: "Participant",

    images: [
      {
        src: "/images/experiences/creativa/freelancing-kickstart-certificate.png",
        alt: "Freelancing Kickstart certificate",
      },
    ],

    learnings: [
      "Soft skills are an essential part of freelancing success.",
      "Emotional intelligence helps in understanding what clients actually need, not just what they say.",
      "A client is a person with a problem, not simply someone paying for a service.",
      "Personal branding and authenticity matter when building trust.",
      "Being clear, honest, and genuine can be more valuable than trying to appear perfect.",
    ],

    keyInsights: [
      "Skill + Communication + Understanding People",
      "People work with people, not templates.",
      "Technical ability alone does not make someone a successful freelancer.",
    ],

    turningPoint:
      "The bootcamp acted as a push to start taking practical steps toward freelancing instead of continuing to postpone things I already knew I should be doing.",

    inspiration:
      "One example that stayed with me was the experience of Ahmed El-Sebai, who submitted a proposal five days late but was still selected because he was honest about the situation and put genuine effort into his proposal.",

    outcome:
      "The experience pushed me to start sharing my own journey, including what I learn, my experiences in the field, and the steps I take along the way.",

    gratitude: [
      "Special thanks to Salma Alhasan Alhakim for the valuable session and insights.",
    ],

    skills: [
      "Freelancing",
      "Communication",
      "Emotional Intelligence",
      "Personal Branding",
      "Client Understanding",
      "Soft Skills",
      "Authenticity",
    ],

    relatedCreativa: true,
  },
  {
    slug: "ai-empire-protocol",

    title: "AI Empire Protocol for Startups",

    organization: "Creativa Tanta Innovation Hub",

    category: "Learning",

    status: "completed",

    featured: false,

    date: "June 29, 2026",

    description:
      "A one-day experience focused on exploring how AI can be used to build and operate businesses, and how entrepreneurs can take advantage of AI in their work.",

    longDescription:
      "This was a one-day experience where I learned from a company founder who had built and operated his business heavily around AI. The session focused on how AI can be integrated into real business workflows, how such systems can be built, and how entrepreneurs can make practical use of AI to improve the way they work.",

    role: "Participant",

    images: [
      {
        src: "/images/experiences/creativa/ai-empire-protocol-certificate.png",
        alt: "AI Empire Protocol for Startups certificate",
      },
    ],

    learnings: [
      "Explored practical ways AI can be used in business.",
      "Learned how AI can be integrated into real business workflows.",
      "Saw how a business can be built and operated with AI at its core.",
      "Explored different ways entrepreneurs can take advantage of AI.",
    ],

    skills: [
      "Artificial Intelligence",
      "AI for Business",
      "Entrepreneurship",
      "Business Automation",
      "Product Thinking",
    ],

    relatedCreativa: true,
  },
  {
    slug: "building-business-operating-system-in-notion",

    title: "Building a Business Operating System in Notion",

    organization: "Creativa Tanta Innovation Hub",

    category: "Learning",

    status: "completed",

    featured: false,

    date: "July 20, 2026",

    description:
      "A one-day learning experience focused on using Notion as an operating system inside a company and structuring it around the way a business actually works.",

    longDescription:
      "This was a one-day experience focused on understanding how Notion can be used inside a company beyond simple note-taking. We explored how to structure Notion around a company's workflows, organize information, and make the tool serve the needs of the business.",

    role: "Participant",

    images: [
      {
        src: "/images/experiences/creativa/building-business-operating-system-notion-certificate.png",
        alt: "Building a Business Operating System in Notion certificate",
      },
    ],

    learnings: [
      "Using Notion inside a company as more than a note-taking tool.",
      "Structuring Notion around the needs and workflows of a business.",
      "Designing a company workspace that serves the way the organization operates.",
      "Organizing company information and processes inside Notion.",
    ],

    skills: [
      "Notion",
      "Business Operations",
      "Organization",
      "Workflow Design",
      "Productivity Systems",
    ],

    relatedCreativa: true,
  },
  {
    slug: "hult-prize-tanta-season-2",
    title: "Hult Prize Tanta — Season 2",

    description:
      "A leadership and content experience where I served as Vice Head of Video Editing at Hult Prize Tanta University.",

    longDescription:
      "During the second season of Hult Prize Tanta University, I took on the role of Vice Head of Video Editing. The experience gave me the opportunity to work as part of a team responsible for documenting and creating video content throughout the season, while contributing to the media side of a larger student entrepreneurship community.",

    category: "Community",

    featured: true,

    status: "completed",

    role: "Vice Head of Video Editing",

    organization: "Hult Prize Tanta University",

    date: "August 8, 2026",

    images: [
      {
        src: "/images/beyond/hult-prize-season-2/role.jpg",
        alt: "Hult Prize Tanta University — Vice Head of Video Editing",
      },
      {
        src: "/images/beyond/hult-prize-season-2/certificate.png",
        alt: "Hult Prize Tanta University certificate",
      },
      {
        src: "/images/beyond/hult-prize-season-2/team-1.jpg",
        alt: "Hult Prize Tanta University team",
      },
      {
        src: "/images/beyond/hult-prize-season-2/team-2.jpg",
        alt: "Hult Prize Tanta University team",
      },
      // باقي الصور اللي هنختارها بعدين
    ],

    links: {
      // هنا نحط لينك الـ Drive بتاع الفيديوهات
      other: "YOUR_GOOGLE_DRIVE_URL",
    },

    achievements: [
      "Served as Vice Head of Video Editing at Hult Prize Tanta University.",
      "Contributed to the video content produced throughout the season.",
      "Worked as part of a team responsible for documenting and presenting the season through video.",
      "Completed the Hult Prize Tanta University Season 2 experience.",
    ],

    skills: [
      "Video Editing",
      "Content Creation",
      "Teamwork",
      "Leadership",
      "Communication",
      "Creative Direction",
      "Time Management",
    ],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    description:
      "A journey from being curious about information to creating and sharing it through video content.",
    longDescription:
      "I have always enjoyed collecting information, listening to history, and discovering interesting ideas. Through my experience with Hult Prize, I learned how to write scripts and communicate ideas in front of an audience. That made me wonder why I shouldn't use those skills to create content about something I already love — the gym. This led me to start Between Sets, where I began creating, filming, editing, and presenting my own videos. The journey later evolved into the Hosso identity.",
    category: "Content",
    featured: true,
    status: "in-progress",
    role: "Content Creator",
    images: [
      // هنحط الصور اللي بعتها هنا
    ],
    links: {
      // YouTube
      // Instagram
      // TikTok
    },
    achievements: [
      "Started creating video content independently.",
      "Applied scripting and communication skills learned through Hult Prize.",
      "Created and published content around topics related to fitness and information.",
      "Built the Between Sets content identity.",
      "Started evolving the content journey into the Hosso identity.",
    ],
    skills: [
      "Content Creation",
      "Script Writing",
      "Video Editing",
      "Communication",
      "Storytelling",
      "Research",
      "Presentation",
    ],
  },
];
