import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";
import { MenuIcon, CloseIcon } from "./Icons";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Active section tracking
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/50"
          : "bg-[#09090b]/80 backdrop-blur-md border-b border-white/5"
      }`}
    >
      {/* Scroll Progress Bar (Solid Orange, Bidirectional Retract/Expand) */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FF5A36] origin-left z-50 shadow-[0_0_8px_rgba(255,90,54,0.6)]"
        style={{ scaleX }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="group py-1"
        >
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#FF5A36] transition-colors">
            {personalInfo.name}<span className="text-[#FF5A36]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 text-[14px] font-semibold text-slate-300">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-[#FF5A36] bg-[#FF5A36]/10"
                    : "hover:text-[#FF5A36] hover:bg-white/5"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF5A36]"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* CTA */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm bg-[#FF5A36]/15 text-[#FF5A36] hover:bg-[#FF5A36] hover:text-white transition-all duration-200 border border-[#FF5A36]/40 hover:shadow-lg hover:shadow-[#FF5A36]/25"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-[#FF5A36] hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-1 bg-[#09090b]/98 border-t border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                  isActive
                    ? "text-[#FF5A36] bg-[#FF5A36]/10"
                    : "text-slate-300 hover:text-[#FF5A36] hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="mt-2 px-4 py-3 rounded-xl font-semibold text-sm bg-[#FF5A36] text-white text-center hover:bg-[#e44a27] transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
