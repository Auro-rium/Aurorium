import { siteConfig } from "../data/site";
import { ArrowDown, Github, FileText, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Hero() {
  const { theme } = useTheme();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="hero" 
      className={`py-20 md:py-28 border-b transition-colors duration-300 ${
        theme === "dark" ? "border-zinc-900 bg-black" : "border-zinc-200 bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 
            className={`text-4xl md:text-5xl font-semibold tracking-tight mb-4 font-sans transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {siteConfig.name}
          </h1>

          {/* Subheading */}
          <h2 
            className={`text-xl md:text-2xl font-normal mb-6 font-sans tracking-tight transition-colors duration-300 ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-650"
            }`}
          >
            {siteConfig.subheadline}
          </h2>

          {/* Core Body */}
          <p 
            className={`text-base leading-relaxed max-w-xl mb-10 font-sans transition-colors duration-300 ${
              theme === "dark" ? "text-zinc-300" : "text-zinc-700"
            }`}
          >
            {siteConfig.body}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <button
              onClick={() => handleScroll("work")}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-sm shadow-sm cursor-pointer transition-colors duration-300 ${
                theme === "dark"
                  ? "text-black bg-white hover:bg-zinc-200"
                  : "text-white bg-black hover:bg-zinc-800"
              }`}
            >
              View Work
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
            
            <button
              onClick={() => handleScroll("resume")}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-sm border transition-colors duration-300 cursor-pointer ${
                theme === "dark"
                  ? "text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border-zinc-800"
                  : "text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border-zinc-200"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-sm border transition-colors duration-300 ${
                theme === "dark"
                  ? "text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border-zinc-800"
                  : "text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border-zinc-200"
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>

            <a
              href={siteConfig.huggingface}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-sm border transition-colors duration-300 ${
                theme === "dark"
                  ? "text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border-zinc-800"
                  : "text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border-zinc-200"
              }`}
            >
              <span aria-hidden="true">🤗</span>
              Hugging Face
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
