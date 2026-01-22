export interface Certificate {
  id: string
  title: string
  issuer: string
  issued: string
  image: string
  skills: string[]
  category:
    | "ALX"
    | "Coursera"
    | "LinkedIn"
    | "3MTT"
    | "McKinsey"
    | "ProgrammingHub"
}

export const certificates: Certificate[] = [
  {
    id: "alx-frontend",
    title: "Frontend Development",
    issuer: "ALX SE",
    issued: "December 2024",
    image: "/certificates/alx/Adesina_Frontend_Specializations.png",
    skills: ["HTML", "CSS", "JavaScript", "Jinja"],
    category: "ALX",
  },
  {
    id: "alx-backend",
    title: "Backend Development",
    issuer: "ALX SE",
    issued: "November 2024",
    image: "/certificates/alx/Adesina_Backend_Specializations.png",
    skills: ["Python", "Flask", "SQLAlchemy", "SQLite", "MySQL"],
    category: "ALX",
  },
  {
    id: "3mtt-ai-ml",
    title: "AI / Machine Learning",
    issuer: "3MTT",
    issued: "December 2024",
    image: "/certificates/3mtt/Adesina_3MTT_AI_ML.png",
    skills: ["Artificial Intelligence", "Machine Learning"],
    category: "3MTT",
  },
  {
    id: "linkedin-software-dev",
    title: "Software Development",
    issuer: "Microsoft",
    issued: "June 2024",
    image: "/certificates/linkedin_learning/Adesina_Microsoft_Software_Development.png",
    skills: ["Career Essentials in Software Development"],
    category: "LinkedIn",
  },
  
  {
    id: "linkedin-github",
    title: "Career Essentials in GitHub",
    issuer: "GitHub",
    issued: "September 2024",
    image: "/certificates/linkedin_learning/Adesina_GitHub.png",
    skills: ["GitHub", "Copilot"],
    category: "LinkedIn",
  },
  {
    id: "coursera-c-programming",
    title: "Programming in C",
    issuer: "University of Michigan",
    issued: "February 2025",
    image: "/certificates/coursera/Adesina_C_programming.png",
    skills: ["C Programming"],
    category: "Coursera",
  },
  {
    id: "programming-hub-php",
    title: "PHP Programming",
    issuer: "Programming Hub",
    issued: "January 2025",
    image: "/certificates/programming_hub/Adesina_PHP.png",
    skills: ["PHP"],
    category: "ProgrammingHub",
  },

  {
    id: "alx-gig-startup",
    title: "Gig at a Startup",
    issuer: "ALX Ventures",
    issued: "November 2024",
    image: "/certificates/alx/Adesina_Gig_at_a_Startup.png",
    skills: ["Next.js", "Tailwind CSS"],
    category: "ALX",
  },
  {
    id: "coursera-cloud",
    title: "Cloud Computing",
    issuer: "IBM",
    issued: "September 2024",
    image: "/certificates/coursera/Adesina_IBM_Cloud.png",
    skills: ["Cloud Computing Fundamentals"],
    category: "Coursera",
  },

  {
    id: "alx-ai-career",
    title: "AI Career Essentials",
    issuer: "ALX Africa",
    issued: "August 2024",
    image: "/certificates/alx/Adesina_AI_Career_Essentials_Certificate.png",
    skills: ["ChatGPT", "Canva", "Infogram"],
    category: "ALX",
  },

  {
    id: "alx-founder-academy",
    title: "Founder Academy",
    issuer: "ALX Ventures",
    issued: "November 2024",
    image: "/certificates/alx/Adesina_Founder_Academy.png",
    skills: ["Leadership", "Time Management"],
    category: "ALX",
  },
  {
    id: "alx-professional-foundation",
    title: "Professional Foundation",
    issuer: "ALX Africa",
    issued: "October 2024",
    image: "/certificates/alx/Adesina_Professional_Foundations.png",
    skills: ["Teamwork", "Problem Solving"],
    category: "ALX",
  },
  {
    id: "mckinsey-forward",
    title: "Forward Program",
    issuer: "McKinsey",
    issued: "December 2024",
    image: "/certificates/mckinsey/Adesina_McKinsey_Forward.png",
    skills: ["Problem Solving", "Leadership"],
    category: "McKinsey",
  },
  {
    id: "alx-virtual-assistant",
    title: "Virtual Assistant",
    issuer: "ALX Africa",
    issued: "September 2024",
    image: "/certificates/alx/Adesina_Virtual_Assistant.png",
    skills: ["Google Workspace"],
    category: "ALX",
  },
]
