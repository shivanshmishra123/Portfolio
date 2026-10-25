// ============================================================
//  PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const personalInfo = {
  name: "Shivansh Mishra",
  title: "B.Tech – IT, 3rd Year",
  college: "SGSITS Indore",
  bio: "Passionate builder, CS enthusiast driven by building robust full-stack applications and solving algorithmic challenges. Experienced in modern web frameworks, system design fundamentals, and scalable cloud architectures. Focused on building things that really matter, making life easier.  ",
  email: "13shivanshmishra@gmail.com",
  phone: "+91 70247 21150",
  location: "Indore, Madhya Pradesh, India",
  resumeUrl: "#",
  profilePhoto: "/profile.png",
};

export const stats = [
  { value: "Knight & 600+", label: "LeetCode Solved" },
  { value: "3★", label: "CodeChef Rated" },
  { value: "8.3+", label: "Current CGPA" },
];

export const socialLinks = [
  { id: "github", name: "GitHub", url: "https://github.com/shivanshmishra123", icon: "github" },
  { id: "leetcode", name: "LeetCode", url: "https://leetcode.com/shivanshm2006", icon: "leetcode" },
  { id: "codechef", name: "CodeChef", url: "https://www.codechef.com/users/shivansh_m1312", icon: "codechef" },
  { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com/in/shivansh-mishra-sgsits", icon: "linkedin" },
  { id: "codeforces", name: "Codeforces", url: "https://codeforces.com/profile/shivanshm13", icon: "codeforces" },
];

export const projects = [
  {
    id: 1,
    title: "AlgoClash - 1v1 Competitive Coding Platform",
    description:
      "AlgoClash is a real-time, head-to-head competitive coding platform designed to facilitate single-elimination tournaments with automated code execution. Unlike generic coding platforms, AlgoClash focuses on the Low Latency Match experience, utilizing a distributed judging architecture to provide instant feedback to competitors..",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Judge0", "WebSockets"],
    badge: "Featured",
    badgeColor: "slate",
    githubUrl: "https://github.com/shivanshmishra123/AlgoClash",
    liveUrl: "https://algo-clash-zeta.netlify.app",
    image: "/Algoclash.png",
  },
  {
    id: 2,
    title: "Meeting Debrief - Unlock Intelligence in Every Meeting",
    description:
      "Production AI SaaS that turns meeting recordings into structured intelligence. Upload audio → Gemini AI transcribes, extracts decisions, action items & open questions → RAG chatbot lets you query any meeting in natural language. Features a Drift Detection engine that auto-marks superseded decisions across chained meetings.",
    techStack: ["React", "FastAPI", "Pinecone", "Google Gemini 2.5 Flash", "PostgreSQL"],
    badge: "AI",
    badgeColor: "slate",
    githubUrl: "https://github.com/shivanshmishra123/MeetingDebrief",
    liveUrl: "https://debrief-io.netlify.app",
    image: "/Debrief.png",
  },
  {
    id: 3,
    title: "Aarogya MP",
    description:
      "Built for the Ministry of Ayush, MP Goverment, AarogyaMP is a symptom-assessment + doctor-discovery + doctor-chat platform, built as a single mobile app with two roles (Patient, Doctor) sharing one backend and one AI engine.",
    techStack: ["Flutter", "FastAPI", "PostgreSQL", "Whisper API"],
    badge: "GovTech on Scale",
    badgeColor: "slate",
    githubUrl: "https://github.com/shivanshmishra123/AarogyaMP_Chatbot",
    liveUrl: "https://debrief-io.netlify.app",
    image: null,
    placeholderIcon: "🏥",
    placeholderSubtitle: "GovTech Healthcare Platform",
  },

  {
    id: 4,
    title: "PrepLC - Company Wise DSA Question Repository",
    description:
      "PrepLC is a curated DSA question repository that organizes LeetCode problems by company tags and recency of interview frequency (e.g., last 30 days, 3 months, 6 months). It helps you focus on the most relevant and recently asked questions to prepare smarter for technical interviews.",
    techStack: ["Spring Boot", "PostgreSQL", "Redis", "React"],
    badge: "System",
    badgeColor: "slate",
    githubUrl: "https://github.com/shivanshmishra123/PrepLC-backend",
    liveUrl: "https://prep-lc.netlify.app",
    image: "/PrepLC.png",
  },
  {
    id: 5,
    title: "Kontent Company",
    description:
      "KOCO is a full-service content production company specializing in end-to-end video production, cinematic filmmaking, high-retention video editing, VFX, motion graphics, and organic content marketing.",
    techStack: ["React", "Google AppScript"],
    badge: "Freelance",
    badgeColor: "slate",
    githubUrl: "https://github.com/shivanshmishra123/KontentCompanyNewRepo",
    liveUrl: "https://kontentcompany.in",
    image: "/Kontent Company.png",
  },
  {
    id: 6,
    title: "PRD Document Renamer - SGSITS",
    description:
      "Developed a web-based utility tool for GSITS students to automate document renaming for the Placement Registration Documentation (PRD) process, reducing manual effort and naming errors while ensuring documents comply with Training & Placement (TnP) guidelines for seamless placement registration. ",
    techStack: ["HTML", "CSS", "JS", "JSZip"],
    badge: "Utility",
    badgeColor: "slate",
    githubUrl: "https://github.com/shivanshmishra123/KontentCompanyNewRepo",
    liveUrl: "https://document-renamer-prd-sgsits.netlify.app",
    image: "/PRD.png",
  },
];

export const experience = [
  {
    id: 1,
    role: "Tech Intern",
    company: "Beiyo Technven Pvt Ltd, Indore",
    period: "Dec 2024 - Feb 2025",
    isCurrent: false,
    highlights: [
      "Standardized API integration and communication using Node.js and React.js by authoring clear, structured documentation and well - defined endpoints, improving codebase readability and reducing developer onboarding time by ˜ 30 %.",
      " Optimized server-side routing architecture by refactoring and deprecating 15+ redundant routes, enhancing scalability, improving request throughput, and reducing API latency under load",
    ],
  },
];

export const skills = [
  { category: "Languages", items: ["C", "Python", "JavaScript", "Java"] },
  { category: "Frontend", items: ["React", "TailwindCSS", "Redux", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Spring Boot", "FastAPI", "REST APIs"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "Redis"] },
  { category: "DevOps & Cloud", items: ["Docker", "AWS EC2", "CI/CD"] },
  { category: "Tools", items: ["Git", "Linux", "Postman", "Figma", "VS Code"] },
];

export const contactInfo = {
  email: "13shivanshmishra@gmail.com",
  phone: "+91 7024721150",
  location: "Indore, Madhya Pradesh, India",
  linkedin: "https://linkedin.com/in/shivansh-mishra-sgsits",
  github: "https://github.com/shivanshmishra123",
  googleScriptUrl:
    "https://script.google.com/macros/s/AKfycbyF_WjluXdIVx8mYaED828TECCfi-VB2YMwpglS3etytnrM80lPjyV6jbBSVITK063JRQ/exec",
  googleSheetUrl:
    "https://docs.google.com/spreadsheets/d/1Mc5XBzXWTdvhODXei5qNzJFSrLibLzUd3kFbi-pNOug/edit?gid=0#gid=0",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Profiles", href: "#profiles" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
