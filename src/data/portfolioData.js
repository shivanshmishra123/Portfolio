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
    title: "Nexus SaaS Analytics Engine",
    description:
      "A high-throughput telemetry analytics dashboard designed for SaaS platforms, providing real-time data visualization, user acquisition tracking, and customizable widget metrics.",
    techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    badge: "Featured",
    badgeColor: "orange",
    githubUrl: "https://github.com",
    liveUrl: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACt5nMoM98BhTVq5gNRSwM7qjXmlzdVZ7iKzK8bYh0IKQjadk1XwmgmDKMiPfgv-BpcYrYwfUFYaBmRYvmJ3zhpVsQoM2Jfxv22NgvyqveTRAuUPjm2Xo_z-od1kaWh1ivQmk2fBGSAmpnUonffsPTESpts5iElXGVt-oE5eDcJJ8ce2YnzgulxkIU2fCZ-hhgfUFKJHLv-v6FoproAj1m0sOd-5Ti6Wjnm474ghy1UZjQJJneuiJcZg",
  },
  {
    id: 2,
    title: "Aura Developer Code Companion",
    description:
      "Context-aware programming assistant integrating IDE web extensions with mobile companion alerts to refactor functions, run test coverage, and catch syntax exceptions in real-time.",
    techStack: ["Python", "FastAPI", "TypeScript", "OpenAI API"],
    badge: "Mobile & Web",
    badgeColor: "green",
    githubUrl: "https://github.com",
    liveUrl: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIxcmRNnJ7lvwZg5DLXOvHeE_xMEsynD2dk_rcdj1K0F3fRgAafrOc_cd7aYsEjrNM2YJPUJS1mVsxXMwDk7rJqOu_9q8GKRDPoGRnvozzmBlq-tAJhpoUISpya9_N9f9ILJvbDdxxhUWUGXEO3FsoWstQSZt0rn9PGW4wF830U_WohMo-aWkhxdOBd86ljdQtiEvjRUoseUuSgaJ6Blj-PnU5pU4BiLJVT6BFylLA",
  },
  {
    id: 3,
    title: "FlashKV Distributed Memory Store",
    description:
      "Low-latency key-value memory store implementation supporting Raft consensus for leader election, consistent hashing replication, and sub-millisecond query responses.",
    techStack: ["Go", "gRPC", "Docker", "Redis Protocol"],
    badge: "Systems",
    badgeColor: "slate",
    githubUrl: "https://github.com",
    liveUrl: "#",
    image: null,
    placeholderIcon: "⚡",
    placeholderSubtitle: "Go & Redis In-Memory Cluster",
  },
  {
    id: 4,
    title: "AarogyaMP Healthcare App",
    description:
      "Public health delivery mobile app for Madhya Pradesh providing symptom intake, AYUSH appointment booking, AI triage chatbot, and doctor discovery for diverse populations.",
    techStack: ["React Native", "Node.js", "Firebase", "TensorFlow"],
    badge: "Mobile",
    badgeColor: "green",
    githubUrl: "https://github.com",
    liveUrl: "#",
    image: null,
    placeholderIcon: "🏥",
    placeholderSubtitle: "Public Health Platform",
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
