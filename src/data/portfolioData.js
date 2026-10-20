// ============================================================
//  PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const personalInfo = {
  name: "Shivansh Mishra",
  title: "B.Tech – IT, 3rd Year",
  college: "SGSITS Indore",
  bio: "Passionate builder, CS enthusiast driven by building robust full-stack applications and solving algorithmic challenges. Experienced in modern web frameworks, system design fundamentals, and scalable cloud architectures. Focused on building things that really matter, make life easier.  ",
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
    badgeColor: "orange",
    githubUrl: "https://github.com/shivanshmishra123/AlgoClash",
    liveUrl: "algoclash.netlify.app",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACt5nMoM98BhTVq5gNRSwM7qjXmlzdVZ7iKzK8bYh0IKQjadk1XwmgmDKMiPfgv-BpcYrYwfUFYaBmRYvmJ3zhpVsQoM2Jfxv22NgvyqveTRAuUPjm2Xo_z-od1kaWh1ivQmk2fBGSAmpnUonffsPTESpts5iElXGVt-oE5eDcJJ8ce2YnzgulxkIU2fCZ-hhgfUFKJHLv-v6FoproAj1m0sOd-5Ti6Wjnm474ghy1UZjQJJneuiJcZg",
  },
  {
    id: 2,
    title: "Meeting Debrief - Unlock Intelligence in Every Meeting",
    description:
      "Production AI SaaS that turns meeting recordings into structured intelligence. Upload audio → Gemini AI transcribes, extracts decisions, action items & open questions → RAG chatbot lets you query any meeting in natural language. Features a Drift Detection engine that auto-marks superseded decisions across chained meetings.",
    techStack: ["React", "FastAPI", "Pinecone", "Google Gemini 2.5 Flash", "PostgreSQL"],
    badge: "AI",
    badgeColor: "green",
    githubUrl: "https://github.com/shivanshmishra123/MeetingDebrief",
    liveUrl: "debrief-io.netlify.app",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIxcmRNnJ7lvwZg5DLXOvHeE_xMEsynD2dk_rcdj1K0F3fRgAafrOc_cd7aYsEjrNM2YJPUJS1mVsxXMwDk7rJqOu_9q8GKRDPoGRnvozzmBlq-tAJhpoUISpya9_N9f9ILJvbDdxxhUWUGXEO3FsoWstQSZt0rn9PGW4wF830U_WohMo-aWkhxdOBd86ljdQtiEvjRUoseUuSgaJ6Blj-PnU5pU4BiLJVT6BFylLA",
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
    liveUrl: "debrief-io.netlify.app",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIxcmRNnJ7lvwZg5DLXOvHeE_xMEsynD2dk_rcdj1K0F3fRgAafrOc_cd7aYsEjrNM2YJPUJS1mVsxXMwDk7rJqOu_9q8GKRDPoGRnvozzmBlq-tAJhpoUISpya9_N9f9ILJvbDdxxhUWUGXEO3FsoWstQSZt0rn9PGW4wF830U_WohMo-aWkhxdOBd86ljdQtiEvjRUoseUuSgaJ6Blj-PnU5pU4BiLJVT6BFylLA",
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
    liveUrl: "prep-lc.netlify.app",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIxcmRNnJ7lvwZg5DLXOvHeE_xMEsynD2dk_rcdj1K0F3fRgAafrOc_cd7aYsEjrNM2YJPUJS1mVsxXMwDk7rJqOu_9q8GKRDPoGRnvozzmBlq-tAJhpoUISpya9_N9f9ILJvbDdxxhUWUGXEO3FsoWstQSZt0rn9PGW4wF830U_WohMo-aWkhxdOBd86ljdQtiEvjRUoseUuSgaJ6Blj-PnU5pU4BiLJVT6BFylLA",
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
    liveUrl: "kontentcompany.in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIxcmRNnJ7lvwZg5DLXOvHeE_xMEsynD2dk_rcdj1K0F3fRgAafrOc_cd7aYsEjrNM2YJPUJS1mVsxXMwDk7rJqOu_9q8GKRDPoGRnvozzmBlq-tAJhpoUISpya9_N9f9ILJvbDdxxhUWUGXEO3FsoWstQSZt0rn9PGW4wF830U_WohMo-aWkhxdOBd86ljdQtiEvjRUoseUuSgaJ6Blj-PnU5pU4BiLJVT6BFylLA",
  },
  {
    id: 6,
    title: "PRD Document Renamer - SGSITS",
    description:
      "Developed a web-based utility tool for GSITS students to automate document renaming for the Placement Registration Documentation (PRD) process, reducing manual effort and naming errors while ensuring documents comply with Training & Placement (TnP) guidelines for seamless placement registration. ",
    techStack: ["HTML", "CSS","JS","JSZip"],
    badge: "Utility",
    badgeColor: "slate",
    githubUrl: "https://github.com/shivanshmishra123/KontentCompanyNewRepo",
    liveUrl: "kontentcompany.in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIxcmRNnJ7lvwZg5DLXOvHeE_xMEsynD2dk_rcdj1K0F3fRgAafrOc_cd7aYsEjrNM2YJPUJS1mVsxXMwDk7rJqOu_9q8GKRDPoGRnvozzmBlq-tAJhpoUISpya9_N9f9ILJvbDdxxhUWUGXEO3FsoWstQSZt0rn9PGW4wF830U_WohMo-aWkhxdOBd86ljdQtiEvjRUoseUuSgaJ6Blj-PnU5pU4BiLJVT6BFylLA",
  },


];

export const experience = [
  {
    id: 1,
    role: "Full Stack Engineering Intern",
    company: "TechVanguard Solutions, Bangalore (Remote)",
    period: "Jan 2025 – Present",
    isCurrent: true,
    highlights: [
      "Architected REST APIs in Node.js and Express processing over 50,000 requests daily with sub-80ms latencies.",
      "Migrated state management to Redux Toolkit, decreasing client-side re-render bottlenecks by 32%.",
      "Engineered automated CI/CD pipelines with GitHub Actions to containerize deployment workloads on AWS EC2.",
    ],
  },
  {
    id: 2,
    role: "Undergraduate Research Fellow",
    company: "Center for Advanced Computing, SGSITS Indore",
    period: "Jun 2024 – Nov 2024",
    isCurrent: false,
    highlights: [
      "Conducted benchmarking on distributed consensus algorithms under intermittent network partitioning.",
      "Drafted technical documentation and test cases for departmental distributed database testbeds.",
      "Presented research outcomes on gossip protocols at the national student computing colloquium.",
    ],
  },
  {
    id: 3,
    role: "Technical Lead & Open Source Mentor",
    company: "Computer Club & Developer Student Circle, SGSITS",
    period: "Aug 2023 – May 2024",
    isCurrent: false,
    highlights: [
      "Organized 12+ hands-on coding bootcamps on Data Structures, Algorithms, and Git workflow for 200+ students.",
      "Mentored junior engineering batches for Hackathons and Google Summer of Code orientation.",
      "Coordinated annual inter-college competitive programming contest with 400+ participants.",
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
