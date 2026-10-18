import { projects } from "../data/portfolioData";
import { GithubIcon, ExternalLinkIcon } from "./Icons";
import { motion } from "framer-motion";

const badgeStyles = {
  orange: "text-[#FF5A36] bg-[#FF5A36]/10 border-[#FF5A36]/30",
  green: "text-[#3DD68C] bg-[#3DD68C]/10 border-[#3DD68C]/30",
  slate: "text-slate-300 bg-slate-800 border-slate-700",
};

const sectionHeaderVariants = {
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      delay: (i % 2) * 0.12,
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0e0e11]/80 backdrop-blur-[2px] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FF5A36] tracking-tight inline-block relative">
            Projects
            <span className="block w-12 h-1 bg-[#3DD68C] rounded-full mx-auto mt-2 shadow-sm shadow-[#3DD68C]/50" />
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A collection of featured engineering projects, full-stack systems, and open-source contributions.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              className="group bg-[#131316] rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_35px_-10px_rgba(255,90,54,0.25)] hover:border-[#FF5A36]/60 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full overflow-hidden bg-slate-950 relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#121215] to-[#18181c] flex items-center justify-center relative p-6">
                    <div className="w-full h-full border border-dashed border-[#FF5A36]/30 rounded-xl flex flex-col items-center justify-center text-center p-4 bg-black/40 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-[#FF5A36]/15 flex items-center justify-center text-2xl mb-2">
                        {project.placeholderIcon}
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{project.title}</span>
                      {project.placeholderSubtitle && (
                        <span className="text-[11px] text-slate-400 mt-1">{project.placeholderSubtitle}</span>
                      )}
                    </div>
                  </div>
                )}
                {/* Badge */}
                <div className={`absolute top-3 right-3 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-md border shadow-md bg-[#09090b]/90 ${badgeStyles[project.badgeColor] || badgeStyles.slate}`}>
                  {project.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF5A36] transition-colors">
                  {project.title}
                </h3>

                {/* Tech stack chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-300 line-clamp-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 border border-slate-700 hover:border-[#FF5A36] hover:text-[#FF5A36] bg-slate-900/40 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#FF5A36] hover:bg-[#e44a27] shadow-sm hover:shadow-[#FF5A36]/30 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
