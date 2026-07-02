// ============================================================
// EDIT YOUR PORTFOLIO HERE
// This is the ONLY file you need to change to update the site.
// Save the file — the preview updates instantly.
// ============================================================

export const SITE = {
  // Shown in the browser tab + social previews
  title: "Shanjil Tizu — Developer Portfolio",
  description:
    "Portfolio of Shanjil Tizu — Computer Science Engineering student, frontend developer, and AI intern based in The Nilgiris, India.",
};

export const HERO = {
  firstName: "SHANJIL",
  lastName: "TIZU",
  location: "COIMBATORE, IN",
  tagline:
    "Computer Science Engineering student building responsive interfaces, exploring AI, and troubleshooting real-world product problems. Currently open to roles in product support, frontend, and SaaS.",
  stats: [
    { label: "ROLE", value: "Frontend + AI" },
    { label: "EDU", value: "B.E. CSE '27" },
    { label: "CGPA", value: "7.60 / 10" },
    { label: "BASE", value: "Nilgiris, IN" },
  ],
};

export const ABOUT = {
  bio: "Dynamic and enthusiastic Computer Science Engineering student with a strong foundation in web development, product support, and software troubleshooting. Proficient in Java, React, HTML, CSS, and Python. Known for clear communication, sharp requirement analysis, and calmly resolving technical issues.",
  bioSecondary:
    "Seeking challenging opportunities in Product Support, Business Analysis, Product Management, Software Development, or SaaS-based organizations.",
  education: {
    degree: "B.E. Computer Science & Engineering",
    school: "Dr. N.G.P Institute of Technology",
    detail: "2023 — 2027 · CGPA 7.60",
  },
  hsc: {
    school: "Alpha G K Matriculation",
    detail: "72% · 2023",
  },
  languages: "Tamil · English",
};

export const EXPERIENCE = [
  {
    year: "2025",
    role: "Frontend Developer",
    org: "R.K Creators Pvt. Ltd.",
    points: [
      "Developed and tested responsive web interfaces.",
      "Identified usability issues and recommended improvements.",
      "Collaborated with developers to enhance application performance.",
      "Participated in debugging and software testing activities.",
    ],
  },
  {
    year: "2024",
    role: "AI Intern",
    org: "Pantech Solutions",
    points: [
      "Applied machine learning algorithms for processing and analyzing complex datasets.",
      "Created project prototypes using AI with Python and core framework tools.",
      "Developed and tested responsive web interfaces.",
      "Identified usability issues and recommended improvements.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "01",
    name: "WebShare",
    tag: "Collaborative File Sharing",
    desc: "Secure file-sharing platform with easy link generation, sleek intuitive interface, and enhanced security measures to protect shared content. A seamless blend of usability and robust file protection.",
    stack: ["React", "Node", "Security"],
    link: "",
  },
  {
    id: "02",
    name: "FarmEquipConnect",
    tag: "Agri Equipment Rental",
    desc: "Platform connecting farmers with machinery owners. Workflows for booking and management, streamlining discovery and improving communication between farmers and providers.",
    stack: ["React", "Reflex", "Python"],
    link: "https://github.com/Shanjiltizu/FarmEquipConnect",
  },
];

export const SKILLS: Record<string, string[]> = {
  Languages: ["Java", "Python", "C"],
  Web: ["HTML", "CSS", "React", "Reflex", "NumPy"],
  Expertise: [
    "UI/UX",
    "Wireframes",
    "Visual Design",
    "Process Flows",
    "Machine Learning",
    "Troubleshooting",
  ],
  Tools: ["GitHub", "Ollama", "Opencode", "Adobe", "Canva", "CutOutPro"],
};

export const CERTS = [
  "NPTEL — Internet of Things (IoT)",
  "NPTEL — Cloud Computing",
  "HP LIFE — Critical Thinking in the AI Era",
  "Generative AI Workshop — Anthropic",
  "Data Science for Beginners — BOARD",
];

export const ACHIEVEMENTS = [
  { title: "Pixel Pursuit", place: "1st Prize", where: "PSG Institute of Technology" },
  { title: "Code Debugging", place: "1st Prize", where: "Bannari Amman Institute of Technology" },
  { title: "HACK QUEST", place: "1st Prize", where: "Suguna College of Engineering" },
  { title: "AI ASTRANOVA 2K25", place: "Participant", where: "Coimbatore Institute of Technology" },
];

export const CONTACT = {
  headline: "Let's build",
  headlineSecondary: "something useful.",
  blurb:
    "Open to internships and full-time roles across product support, frontend, and SaaS-based teams. Ping me — I reply fast.",
  location: "Cross Hill Tea Factory, Aravenu · The Nilgiris, TN",
  links: [
    { k: "EMAIL", v: "shanjiltizu@gmail.com", href: "mailto:shanjiltizu@gmail.com" },
    { k: "PHONE", v: "+91 93634 59773", href: "tel:+919363459773" },
    {
      k: "LINKEDIN",
      v: "shanjil-tizu",
      href: "https://www.linkedin.com/in/shanjil-tizu-b38614296/",
    },
    { k: "GITHUB", v: "Shanjiltizu", href: "https://github.com/Shanjiltizu" },
  ],
};

export const FOOTER = "© 2026 SHANJIL TIZU — ALL SYSTEMS OPERATIONAL";
