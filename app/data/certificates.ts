export type CertificateCategory =
  | "ALX"
  | "Coursera"
  | "LinkedIn"
  | "3MTT"
  | "McKinsey"
  | "ProgrammingHub";



export interface Certificate {
  id: string;                 // unique id for routing & keys
  title: string;              // certificate title
  issuer: string;             // organization that issued it

  issuedAt: string;           // ISO date → used for sorting (YYYY-MM-DD)
  displayDate: string;        // formatted date → used in UI

  image: string;              // certificate image path or URL
  skills: string[];           // skills gained

  category: CertificateCategory;

  featured?: boolean;         // optional → show in featured section
  credentialUrl?: string;     // optional → verify certificate link
  description?: string;       // optional → short summary
}



export const certificates: Certificate[] = [
  // ========================
  // 🔥 FEATURED / LATEST
  // ========================

  {
    id: "alx-backend",
    title: "Backend Development",
    issuer: "ALX SE",
    issuedAt: "2024-11-01",
    displayDate: "November 2024",
    image: "/certificates/alx/Adesina_Backend_Specializations.png",
    skills: ["Python", "Flask", "Django", "Express JS"],
    category: "ALX",
    featured: true,
  },

  {
    id: "alx-frontend-web-development",
    title: "Frontend Web Development",
    issuer: "ALX SE",
    issuedAt: "2025-09-01",
    displayDate: "September 2025",
    image: "/certificates/alx/Adesina_Frontend_web_development.png",
    skills: ["React", "Next.js", "Tailwind", "Zustand"],
    category: "ALX",
    featured: true,
  },

  {
    id: "3mtt-cybersecurity",
    title: "Cybersecurity",
    issuer: "3MTT",
    issuedAt: "2025-12-01",
    displayDate: "December 2025",
    image: "/certificates/3mtt/Adesina_3MTT_Cybersecurity.png",
    skills: [
      "Network Security",
      "Threat Analysis",
      "Malware Awareness",
      "Data Protection",
    ],
    category: "3MTT",
    featured: true,
  },

  // ========================
  // 💻 SOFTWARE / DEV
  // ========================
  {
    id: "alx-frontend",
    title: "Frontend Development",
    issuer: "ALX SE",
    issuedAt: "2024-12-01",
    displayDate: "December 2024",
    image: "/certificates/alx/Adesina_Frontend_Specializations.png",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    category: "ALX",
  },

  {
    id: "alx-cybersecurity",
    title: "Cybersecurity",
    issuer: "ALX SE",
    issuedAt: "2026-01-01",
    displayDate: "January 2026",
    image: "/certificates/alx/Adesina_Cybersecurity.png",
    skills: ["Cybersecurity Fundamentals", "Threats", "Security Tools"],
    category: "ALX",
  },

  {
    id: "alx-freelancer-academy",
    title: "Freelancer Academy",
    issuer: "ALX SE",
    issuedAt: "2025-08-01",
    displayDate: "August 2025",
    image: "/certificates/alx/Adesina_Freelancer_academy.png",
    skills: ["LinkedIn", "Upwork", "Fiverr"],
    category: "ALX",
  },


  {
    id: "linkedin-software-dev",
    title: "Software Development",
    issuer: "Microsoft",
    issuedAt: "2024-06-01",
    displayDate: "June 2024",
    image: "/certificates/linkedin_learning/Adesina_Microsoft_Software_Development.png",
    skills: ["Software Development Essentials"],
    category: "LinkedIn",
  },

  {
    id: "linkedin-github",
    title: "Career Essentials in GitHub",
    issuer: "GitHub",
    issuedAt: "2024-09-01",
    displayDate: "September 2024",
    image: "/certificates/linkedin_learning/Adesina_GitHub.png",
    skills: ["GitHub", "Copilot"],
    category: "LinkedIn",
  },

  {
    id: "coursera-c-programming",
    title: "Programming in C",
    issuer: "University of Michigan",
    issuedAt: "2025-02-01",
    displayDate: "February 2025",
    image: "/certificates/coursera/Adesina_C_programming.png",
    skills: ["C Programming"],
    category: "Coursera",
  },

  {
    id: "programming-hub-php",
    title: "PHP Programming",
    issuer: "Programming Hub",
    issuedAt: "2025-01-01",
    displayDate: "January 2025",
    image: "/certificates/programming_hub/Adesina_PHP.png",
    skills: ["PHP"],
    category: "ProgrammingHub",
  },

  // ========================
  // 🤖 AI / CLOUD
  // ========================
  {
    id: "alx-starter-kit",
    title: "AI Starter Kit",
    issuer: "ALX SE",
    issuedAt: "2025-03-01",
    displayDate: "March 2025",
    image: "/certificates/alx/Adesina_Ai_starter_kit.png",
    skills: ["GenAI", "Prompting", "AI Ethics"],
    category: "ALX",
  },

  {
    id: "3mtt-ai-ml",
    title: "AI / Machine Learning",
    issuer: "3MTT",
    issuedAt: "2024-12-01",
    displayDate: "December 2024",
    image: "/certificates/3mtt/Adesina_3MTT_AI_ML.png",
    skills: ["AI", "Machine Learning"],
    category: "3MTT",
  },


  {
    id: "coursera-cloud",
    title: "Cloud Computing",
    issuer: "IBM",
    issuedAt: "2024-09-01",
    displayDate: "September 2024",
    image: "/certificates/coursera/Adesina_IBM_Cloud.png",
    skills: ["Cloud Fundamentals"],
    category: "Coursera",
  },

  {
    id: "alx-ai-career",
    title: "AI Career Essentials",
    issuer: "ALX Africa",
    issuedAt: "2024-08-01",
    displayDate: "August 2024",
    image: "/certificates/alx/Adesina_AI_Career_Essentials_Certificate.png",
    skills: ["ChatGPT", "Canva"],
    category: "ALX",
  },

  // ========================
  // 🧠 BUSINESS / LEADERSHIP
  // ========================
  {
    id: "mckinsey-forward",
    title: "Forward Program",
    issuer: "McKinsey",
    issuedAt: "2024-12-01",
    displayDate: "December 2024",
    image: "/certificates/mckinsey/Adesina_McKinsey_Forward.png",
    skills: ["Problem Solving", "Leadership"],
    category: "McKinsey",
  },

  {
    id: "alx-founder-academy",
    title: "Founder Academy",
    issuer: "ALX Ventures",
    issuedAt: "2024-11-01",
    displayDate: "November 2024",
    image: "/certificates/alx/Adesina_Founder_Academy.png",
    skills: ["Leadership", "Time Management"],
    category: "ALX",
  },

  {
    id: "alx-professional-foundation",
    title: "Professional Foundation",
    issuer: "ALX Africa",
    issuedAt: "2024-10-01",
    displayDate: "October 2024",
    image: "/certificates/alx/Adesina_Professional_Foundations.png",
    skills: ["Teamwork", "Problem Solving"],
    category: "ALX",
  },

  {
    id: "alx-virtual-assistant",
    title: "Virtual Assistant",
    issuer: "ALX Africa",
    issuedAt: "2024-09-01",
    displayDate: "September 2024",
    image: "/certificates/alx/Adesina_Virtual_Assistant.png",
    skills: ["Google Workspace"],
    category: "ALX",
  },

  {
    id: "alx-gig-startup",
    title: "Gig at a Startup",
    issuer: "ALX Ventures",
    issuedAt: "2024-11-01",
    displayDate: "November 2024",
    image: "/certificates/alx/Adesina_Gig_at_a_Startup.png",
    skills: ["Next.js", "Tailwind"],
    category: "ALX",
  },
];

