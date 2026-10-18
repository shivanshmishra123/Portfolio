import { useState, useMemo } from "react";
import { skills } from "../data/portfolioData";
import { techMeta, defaultTechIcon } from "./TechIcons";
import { motion } from "framer-motion";

const categoryConfig = {
  Languages: {
    accent: "#FF5A36",
    badge: "Foundations & DSA",
    subtitle: "High-performance systems, competitive programming & algorithms",
    stats: "500+ LeetCode • 3★ CodeChef",
    span: "lg:col-span-2",
  },
  Frontend: {
    accent: "#3DD68C",
    badge: "UI Architecture",
    subtitle: "Component-driven, responsive & reactive user experiences",
    span: "lg:col-span-1",
  },
  Backend: {
    accent: "#3B82F6",
    badge: "APIs & Services",
    subtitle: "High-throughput asynchronous servers, middleware & schemas",
    span: "lg:col-span-1",
  },
  Database: {
    accent: "#A855F7",
    badge: "Persistence & Cache",
    subtitle: "Relational integrity, document stores & sub-millisecond caching",
    span: "lg:col-span-1",
  },
  "DevOps & Cloud": {
    accent: "#F59E0B",
    badge: "Infra & CI/CD",
    subtitle: "Containerization, cloud workloads & automated delivery pipelines",
    span: "lg:col-span-1",
  },
  Tools: {
    accent: "#F43F5E",
    badge: "Toolchain & OS",
    subtitle: "Daily developer ergonomics, terminal scripting & interface design",
    span: "lg:col-span-2",
  },
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
    scale: 0.95,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: (i % 3) * 0.08,
    },
  }),
};

const tileVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.08 + (i % 6) * 0.03,
    },
  }),
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => ["All", ...skills.map((s) => s.category)], []);

  // Filter skills based on selected category and search input
  const filteredSkills = useMemo(() => {
    return skills
      .map((group) => {
        if (selectedCategory !== "All" && group.category !== selectedCategory) {
          return null;
        }

        const matchingItems = group.items.filter((item) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          const meta = techMeta[item];
          return (
            item.toLowerCase().includes(query) ||
            group.category.toLowerCase().includes(query) ||
            meta?.level.toLowerCase().includes(query) ||
            meta?.desc.toLowerCase().includes(query)
          );
        });

        if (matchingItems.length === 0) return null;

        return {
          ...group,
          items: matchingItems,
        };
      })
      .filter(Boolean);
  }, [selectedCategory, searchQuery]);

  const totalMatchingCount = useMemo(() => {
    return filteredSkills.reduce((acc, curr) => acc + curr.items.length, 0);
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-24 bg-transparent border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FF5A36] tracking-tight inline-block relative">
            Tech Stack
            <span className="block w-12 h-1 bg-[#3DD68C] rounded-full mx-auto mt-2 shadow-sm shadow-[#3DD68C]/50" />
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A comprehensive overview of programming languages, modern frameworks, data systems, and DevOps infrastructure I work with.
          </p>
        </motion.div>

        {/* Interactive Controls Bar: Category Filter Pills + Quick Search */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${isActive
                      ? "bg-[#FF5A36] text-white shadow-md shadow-[#FF5A36]/30 font-bold scale-[1.02]"
                      : "bg-[#131316] text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
                    }`}
                >
                  {cat === "All" ? "⚡ All Tech" : cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. React, Docker)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-[#131316] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#3DD68C] focus:ring-1 focus:ring-[#3DD68C] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* No Results Fallback */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-[#131316]/50 rounded-2xl border border-dashed border-white/10">
            <p className="text-slate-400 text-sm">No technologies found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-3 text-xs text-[#FF5A36] font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Dynamic Architectural Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group, groupIdx) => {
            const config = categoryConfig[group.category] || {
              accent: "#FF5A36",
              badge: "Technology",
              subtitle: "Core domain tools",
              span: "col-span-1",
            };

            const isHeroCard = config.span.includes("lg:col-span-2") && selectedCategory === "All" && !searchQuery;

            return (
              <motion.div
                key={group.category}
                custom={groupIdx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                className={`relative group bg-[#131316] rounded-2xl border border-white/10 p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden ${isHeroCard ? "lg:col-span-2" : "lg:col-span-1"
                  }`}
              >
                {/* Subtle Top Ambient Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, ${config.accent}, transparent)`,
                  }}
                />

                {/* Card Header */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full shadow-sm"
                        style={{ backgroundColor: config.accent }}
                      />
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                        {group.category}
                      </h3>
                    </div>

                    <span
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold border backdrop-blur-sm"
                      style={{
                        color: config.accent,
                        backgroundColor: `${config.accent}15`,
                        borderColor: `${config.accent}30`,
                      }}
                    >
                      {config.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {config.subtitle}
                  </p>

                  {/* Optional Highlights Pill for Languages */}
                  {config.stats && isHeroCard && (
                    <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                      <span className="text-[#3DD68C]">★</span>
                      <span>{config.stats}</span>
                    </div>
                  )}

                  {/* Rich Tech Tiles Matrix */}
                  <div
                    className={`grid gap-3 ${isHeroCard
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2"
                      }`}
                  >
                    {group.items.map((skillName, tileIdx) => {
                      const meta = techMeta[skillName] || {
                        color: config.accent,
                        level: "Proficient",
                        desc: "Technical framework",
                        icon: defaultTechIcon,
                      };
                      const IconComponent = meta.icon || defaultTechIcon;

                      return (
                        <motion.div
                          key={skillName}
                          custom={tileIdx}
                          variants={tileVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, margin: "-20px" }}
                          className="group/tile relative p-3 rounded-xl bg-[#09090b]/80 border border-white/5 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-start gap-3 cursor-default"
                        >
                          {/* Tech Brand Icon */}
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/tile:scale-110"
                            style={{
                              backgroundColor: `${meta.color}15`,
                              color: meta.color,
                            }}
                          >
                            <IconComponent className="w-5 h-5 fill-current" />
                          </div>

                          {/* Tech Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <span className="text-xs font-bold text-white truncate group-hover/tile:text-[#FF5A36] transition-colors">
                                {skillName}
                              </span>
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: meta.color }}
                                title={meta.level}
                              />
                            </div>
                            <p className="text-[11px] text-slate-400 truncate leading-snug">
                              {meta.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer Counter */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{group.items.length} Technologies</span>
                  <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                    Production Stack
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Stack Summary Pill */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#131316] border border-white/10 text-xs text-slate-400 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3DD68C] animate-pulse" />
            <span>
              Showing <strong className="text-white">{totalMatchingCount}</strong> verified technologies in daily engineering workflow
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
