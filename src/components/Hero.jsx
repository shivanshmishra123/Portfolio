import { personalInfo, stats } from "../data/portfolioData";
import { DownloadIcon, EmailIcon } from "./Icons";
import { motion } from "framer-motion";

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
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center py-16 md:py-24 bg-transparent overflow-hidden"
    >
      {/* Background ambient glow - subtle & elegant */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,90,54,0.06),transparent_70%)] blur-3xl pointer-events-none" />

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
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              variants={fadeUp}
            >
              <a
                href={personalInfo.resumeUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-[#FF5A36] hover:bg-[#e44a27] shadow-lg shadow-[#FF5A36]/30 hover:shadow-xl hover:shadow-[#FF5A36]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadIcon />
                <span>Download Resume</span>
              </a>
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
              className="mt-10 pt-8 border-t border-slate-800/80 flex items-center gap-8 text-left"
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
