import { personalInfo, socialLinks } from "../data/portfolioData";
import { iconMap } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060608] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#FF5A36] flex items-center justify-center font-bold text-white text-xs shadow-lg shadow-[#FF5A36]/30">
              SM
            </div>
            <span className="font-bold text-sm text-white group-hover:text-[#FF5A36] transition-colors">
              {personalInfo.name}<span className="text-[#FF5A36]">.</span>
            </span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="w-9 h-9 rounded-xl bg-[#131316] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FF5A36] hover:border-[#FF5A36]/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {IconComponent && <IconComponent className="w-4 h-4 fill-current" />}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 text-center">
            © {year} {personalInfo.name}. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
