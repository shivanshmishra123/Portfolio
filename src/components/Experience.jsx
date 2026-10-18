import { useState, useEffect, useRef } from "react";
import { experience } from "../data/portfolioData";
import { motion } from "framer-motion";

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

export default function Experience() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const lineRef = useRef(null);
  const tracerRef = useRef(null);
  const dotRefs = useRef([]);

  const dot0YRef = useRef(0);
  const totalDistanceRef = useRef(0);
  const dotOffsetsRef = useRef([]);
  const targetHeightRef = useRef(0);
  const currentHeightRef = useRef(0);
  const reachedRef = useRef(new Array(experience.length).fill(false));

  const [reachedItems, setReachedItems] = useState(() =>
    new Array(experience.length).fill(false)
  );

  useEffect(() => {
    let rafId = null;

    const updateMetrics = () => {
      const dot0 = dotRefs.current[0];
      const dotLast = dotRefs.current[experience.length - 1];
      if (!dot0 || !dotLast) return;

      const d0 = dot0.getBoundingClientRect().top + window.scrollY;
      const dLast = dotLast.getBoundingClientRect().top + window.scrollY;
      dot0YRef.current = d0;
      const totalDist = Math.max(0, dLast - d0);
      totalDistanceRef.current = totalDist;

      if (trackRef.current) {
        trackRef.current.style.height = `${totalDist}px`;
      }

      dotOffsetsRef.current = dotRefs.current.map((dotEl) => {
        if (!dotEl) return 0;
        const dy = dotEl.getBoundingClientRect().top + window.scrollY;
        return Math.max(0, dy - d0);
      });
    };

    const handleScroll = () => {
      if (totalDistanceRef.current === 0) updateMetrics();
      // Focal point at 55% of viewport height (natural reading eye level)
      const focalY = window.scrollY + window.innerHeight * 0.55;
      const scrollOffset = focalY - dot0YRef.current;
      targetHeightRef.current = Math.max(
        0,
        Math.min(scrollOffset, totalDistanceRef.current)
      );
    };

    // Smooth 60/120fps RAF lerp loop (linear interpolation for liquid motion)
    const loop = () => {
      const target = targetHeightRef.current;
      const diff = target - currentHeightRef.current;

      // Spring dampening factor: 0.12 delivers ultra-fluid, non-glitchy lag-free glide
      currentHeightRef.current += diff * 0.12;

      if (Math.abs(diff) < 0.2) {
        currentHeightRef.current = target;
      }

      const h = currentHeightRef.current;

      // Direct GPU-accelerated DOM update: bypasses React render cycle
      if (lineRef.current) {
        lineRef.current.style.height = `${h}px`;
      }

      if (tracerRef.current) {
        tracerRef.current.style.transform = `translate3d(-50%, ${h}px, 0)`;
        tracerRef.current.style.opacity = h > 6 ? "1" : "0";
      }

      // Bidirectional unlock/retract: reveal when line reaches, retract when scrolling up
      let changed = false;
      dotOffsetsRef.current.forEach((offset, idx) => {
        const isReached = h >= offset - 6;
        if (reachedRef.current[idx] !== isReached) {
          reachedRef.current[idx] = isReached;
          changed = true;
        }
      });
      if (changed) {
        setReachedItems([...reachedRef.current]);
      }

      rafId = requestAnimationFrame(loop);
    };

    // Initialize layout measurements
    updateMetrics();
    handleScroll();
    rafId = requestAnimationFrame(loop);

    const handleResize = () => {
      updateMetrics();
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Backup timer in case external fonts/images adjust vertical layout
    const timer = setTimeout(() => {
      updateMetrics();
      handleScroll();
    }, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-24 bg-transparent border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FF5A36] tracking-tight inline-block relative">
            Experience
            <span className="block w-12 h-1 bg-[#3DD68C] rounded-full mx-auto mt-2 shadow-sm shadow-[#3DD68C]/50" />
          </h2>
          <p className="mt-4 text-base text-slate-300">
            My professional milestones, internships, and technical leadership roles.
          </p>
        </motion.div>

        {/* Scroll-Interactive Vertical Timeline */}
        <div ref={containerRef} className="relative">
          {/* Base Inactive Track (connects exactly between first and last dot) */}
          <div
            ref={trackRef}
            className="absolute left-4 sm:left-6 md:left-1/2 top-7 w-[2px] bg-slate-800/80 -translate-x-1/2 rounded-full pointer-events-none"
            style={{ height: "100%" }}
          />

          {/* Liquid Glowing Active Line (drawn smoothly with 1:1 scroll tracking) */}
          <div
            ref={lineRef}
            className="absolute left-4 sm:left-6 md:left-1/2 top-7 w-[2px] bg-gradient-to-b from-[#FF5A36] via-[#FF5A36] to-[#3DD68C] -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              height: "0px",
              boxShadow:
                "0 0 10px rgba(255, 90, 54, 0.6), 0 0 18px rgba(61, 214, 140, 0.4)",
              willChange: "height",
            }}
          />

          {/* Tracer Head at line tip */}
          <div
            ref={tracerRef}
            className="absolute left-4 sm:left-6 md:left-1/2 top-7 w-2.5 h-2.5 rounded-full bg-[#3DD68C] shadow-[0_0_12px_#3DD68C] pointer-events-none opacity-0"
            style={{
              transform: "translate3d(-50%, 0, 0)",
              willChange: "transform, opacity",
            }}
          />

          <div className="space-y-16">
            {experience.map((entry, index) => {
              const isLeft = index % 2 === 0;
              const isReached = reachedItems[index];
              const dotColor = entry.isCurrent ? "#FF5A36" : "#3DD68C";
              const dotShadow = entry.isCurrent
                ? "shadow-[0_0_16px_rgba(255,90,54,0.6)]"
                : "shadow-[0_0_16px_rgba(61,214,140,0.5)]";

              const cardBorder = isReached
                ? entry.isCurrent
                  ? "border-[#FF5A36]/50 shadow-[0_12px_35px_-5px_rgba(255,90,54,0.2)]"
                  : "border-[#3DD68C]/40 shadow-[0_12px_35px_-5px_rgba(61,214,140,0.15)]"
                : "border-white/10 shadow-none";

              return (
                <div
                  key={entry.id}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline Dot */}
                  <div
                    ref={(el) => (dotRefs.current[index] = el)}
                    className={`absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-7 z-10 flex items-center justify-center transition-all duration-500 ${
                      isReached
                        ? "w-7 h-7 scale-110"
                        : "w-5 h-5 scale-90 opacity-40"
                    }`}
                  >
                    {/* Ripple Ping on Unlock */}
                    {isReached && (
                      <span
                        className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping"
                        style={{ backgroundColor: dotColor }}
                      />
                    )}

                    {/* Dot Core */}
                    <div
                      className={`w-full h-full rounded-full border-4 border-[#0e0e11] flex items-center justify-center transition-all duration-500 ${
                        isReached ? `${dotShadow} scale-100` : "shadow-none"
                      }`}
                      style={{
                        backgroundColor: isReached ? dotColor : "#1f1f23",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
                        style={{
                          backgroundColor: isReached
                            ? entry.isCurrent
                              ? "white"
                              : "#101014"
                            : "#64748b",
                        }}
                      />
                    </div>
                  </div>

                  {/* Left spacer (for right-aligned cards on desktop) */}
                  {!isLeft && <div className="hidden md:block md:w-1/2" />}

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-16 md:ml-0 ${
                      isLeft ? "md:w-1/2 md:pr-12" : "md:w-1/2 md:pl-12"
                    } w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isReached
                        ? "opacity-100 translate-y-0 translate-x-0 scale-100 pointer-events-auto"
                        : isLeft
                        ? "opacity-0 md:-translate-x-12 translate-y-8 scale-95 pointer-events-none"
                        : "opacity-0 md:translate-x-12 translate-y-8 scale-95 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`bg-[#131316] rounded-2xl p-6 sm:p-7 border ${cardBorder} transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(255,90,54,0.2)] hover:border-[#FF5A36]/60 hover:-translate-y-1`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#FF5A36] transition-colors">
                          {entry.role}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            entry.isCurrent
                              ? "bg-[#FF5A36]/15 text-[#FF5A36] border-[#FF5A36]/30"
                              : "bg-slate-800 text-slate-300 border-slate-700"
                          }`}
                        >
                          {entry.period}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#3DD68C] mb-4">
                        {entry.company}
                      </p>
                      <ul className="space-y-2.5 text-sm text-slate-300 list-none">
                        {entry.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF5A36]/70 flex-shrink-0" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right spacer (for left-aligned cards on desktop) */}
                  {isLeft && <div className="hidden md:block md:w-1/2" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
