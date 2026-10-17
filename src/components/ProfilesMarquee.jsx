import { socialLinks } from "../data/portfolioData";
import { iconMap } from "./Icons";

export default function ProfilesMarquee() {
  const doubled = [...socialLinks, ...socialLinks]; // duplicate for seamless loop

  return (
    <section id="profiles" className="py-12 bg-transparent">

      {/* Marquee strip */}
      <div className="w-full bg-[#FF5A36] py-5 overflow-hidden shadow-lg shadow-[#FF5A36]/20 group">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] space-x-6">
          {doubled.map((link, i) => {
            const IconComponent = iconMap[link.icon];
            return (
              <div key={`${link.id}-${i}`} className="flex items-center space-x-6">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/20 hover:bg-black/35 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
                >
                  {IconComponent && <IconComponent className="w-5 h-5 fill-current text-white" />}
                  <span>{link.name}</span>
                </a>
                <span className="w-2.5 h-2.5 rounded-full bg-[#3DD68C] shadow-sm flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
