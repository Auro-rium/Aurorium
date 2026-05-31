import { siteConfig } from "../data/site";
import { ArrowUp, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Footer() {
  const { theme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className={`py-12 border-t transition-colors duration-300 ${
        theme === "dark" ? "border-zinc-900 bg-zinc-950/40" : "border-zinc-200 bg-zinc-50/50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left info */}
        <div className="flex items-center gap-2">
          <MapPin 
            className={`w-3.5 h-3.5 transition-colors duration-300 ${
              theme === "dark" ? "text-zinc-550" : "text-zinc-400"
            }`} 
          />
          <span 
            className={`text-[11px] font-mono transition-colors duration-300 ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Bengaluru, India • {siteConfig.handle}
          </span>
        </div>

        {/* Mid actions */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 text-[11px] font-mono">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className={`transition-colors ${
              theme === "dark" ? "text-zinc-500 hover:text-white" : "text-zinc-600 hover:text-black"
            }`}
          >
            GitHub
          </a>
          <a
            href={siteConfig.x}
            target="_blank"
            rel="noreferrer"
            className={`transition-colors ${
              theme === "dark" ? "text-zinc-500 hover:text-white" : "text-zinc-600 hover:text-black"
            }`}
          >
            X
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className={`transition-colors ${
              theme === "dark" ? "text-zinc-500 hover:text-white" : "text-zinc-600 hover:text-black"
            }`}
          >
            Email
          </a>
          <span 
            className={`hidden sm:inline transition-colors duration-300 ${
              theme === "dark" ? "text-zinc-800" : "text-zinc-300"
            }`}
          >
            |
          </span>
          <button
            onClick={scrollToTop}
            className={`transition-colors inline-flex items-center gap-1 cursor-pointer ${
              theme === "dark" ? "text-zinc-500 hover:text-white" : "text-zinc-650 hover:text-black"
            }`}
          >
            Back to Top
            <ArrowUp className="w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
