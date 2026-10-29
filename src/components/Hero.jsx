import { useState, useEffect, useRef } from "react";
import { personalInfo, stats } from "../data/portfolioData";
import { DownloadIcon, EmailIcon, ChevronRightIcon, DocumentIcon, CloseIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const TYPEWRITER_WORDS = ["AI First Developer", "Java", "Spring Boot", "Langchain & LangGraph", "AI Engineer"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const photoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    rotate: -3,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const statVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[currentWordIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1600);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
        }, 350);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowResumeOptions(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowResumeOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center py-16 md:py-24 bg-transparent"
    >
      {/* Background ambient glow - subtle & contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,90,54,0.06),transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >

          {/* Profile Photo */}
          <motion.div
            className="lg:col-span-5 flex justify-center order-1 lg:order-1 lg:self-start lg:pt-4"
            variants={photoVariants}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-black/80 border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-[1.02]">
              <img
                src={personalInfo.profilePhoto}
                alt={`${personalInfo.name} Portrait`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&background=FF5A36&color=fff&size=400`;
                }}
              />
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2"
            variants={containerVariants}
          >

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF5A36] tracking-tight leading-tight drop-shadow-sm"
              variants={fadeUp}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Title */}
            <motion.p
              className="mt-3 text-lg sm:text-xl font-medium text-[#3DD68C] flex items-center flex-wrap justify-center lg:justify-start gap-2"
              variants={fadeUp}
            >
              <span>{personalInfo.title}</span>
              <span className="text-slate-600 font-normal">|</span>
              <span>{personalInfo.college}</span>
              <span className="text-slate-600 font-normal">|</span>
              <span className="inline-flex items-center text-[#3DD68C] font-semibold tracking-tight min-h-[1.75rem]">
                <span>{displayedText}</span>
                <span className="inline-block w-[2px] h-5 ml-1 bg-[#3DD68C] animate-blink" />
              </span>
            </motion.p>

            {/* Bio */}
            <motion.p
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
              variants={fadeUp}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-30"
              variants={fadeUp}
            >
              {/* Dual Resume Download Button & Popover */}
              <div className="relative w-full sm:w-auto z-30" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowResumeOptions((prev) => !prev)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-[#FF5A36] hover:bg-[#e44a27] shadow-lg shadow-[#FF5A36]/30 hover:shadow-xl hover:shadow-[#FF5A36]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  aria-expanded={showResumeOptions}
                  aria-haspopup="true"
                  id="download-resume-btn"
                >
                  <DownloadIcon />
                  <span>Download Resume</span>
                  <ChevronRightIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showResumeOptions ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Resume Options (Right Side Flyout, Collapsing to Left) */}
                <AnimatePresence>
                  {showResumeOptions && (
                    <motion.div
                      initial={{ opacity: 0, x: -24, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-full mt-3 sm:mt-0 sm:top-0 sm:left-full sm:ml-4 w-full sm:w-[350px] bg-[#16161a] border border-white/20 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.98)] p-3.5 z-50 text-left ring-1 ring-white/10"
                    >
                      <div className="px-2 py-1.5 border-b border-white/10 mb-2.5 flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-300">
                          Select Resume Version
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF5A36]/20 text-[#FF5A36] border border-[#FF5A36]/40">
                            2 Profiles
                          </span>
                          <button
                            type="button"
                            onClick={() => setShowResumeOptions(false)}
                            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                            aria-label="Close options"
                          >
                            <CloseIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        {personalInfo.resumes.map((resume) => (
                          <a
                            key={resume.id}
                            href={resume.url}
                            download={resume.fileName}
                            onClick={() => setShowResumeOptions(false)}
                            className="group/item flex items-center justify-between p-3.5 rounded-xl bg-[#222228] hover:bg-[#2b2b33] border border-white/10 hover:border-[#FF5A36] transition-all duration-200 shadow-md"
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div className="w-10 h-10 rounded-xl bg-[#2e2e38] border border-white/10 flex items-center justify-center text-[#FF5A36] group-hover/item:bg-[#FF5A36] group-hover/item:text-white transition-all duration-200 shrink-0">
                                <DocumentIcon className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-white group-hover/item:text-[#FF5A36] transition-colors truncate">
                                    {resume.title}
                                  </span>
                                  <span
                                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded border shrink-0 ${
                                      resume.id === "ai"
                                        ? "bg-[#FF5A36]/20 text-[#FF5A36] border-[#FF5A36]/40"
                                        : "bg-[#3DD68C]/20 text-[#3DD68C] border-[#3DD68C]/40"
                                    }`}
                                  >
                                    {resume.badge}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-300 mt-0.5 truncate">
                                  {resume.description}
                                </p>
                              </div>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-[#2e2e38] group-hover/item:bg-[#FF5A36] border border-white/10 group-hover/item:border-[#FF5A36] flex items-center justify-center text-slate-300 group-hover/item:text-white transition-all shrink-0 ml-2">
                              <DownloadIcon className="w-4 h-4 group-hover/item:translate-y-0.5 transition-transform" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Me Button */}
              <button
                onClick={() => handleScroll("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#09090b] bg-[#3DD68C] hover:bg-[#32c57f] border-2 border-[#3DD68C] hover:border-[#32c57f] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg shadow-[#3DD68C]/25 hover:shadow-xl hover:shadow-[#3DD68C]/35"
              >
                <EmailIcon className="w-5 h-5" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-10 pt-8 border-t border-slate-800/80 flex items-center gap-8 text-left relative z-10"
              variants={fadeUp}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-8"
                  custom={i}
                  variants={statVariants}
                >
                  {i > 0 && <div className="h-8 w-px bg-slate-800" />}
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
