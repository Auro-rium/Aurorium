import { siteConfig } from "../data/site";
import { Github, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      id="nav-header" 
      className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 ${
        theme === "dark" 
          ? "bg-black/90 border-zinc-900" 
          : "bg-white/95 border-zinc-200"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`text-sm font-medium tracking-tight hover:opacity-75 transition-all cursor-pointer font-sans flex items-center gap-2.5 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <span className="font-semibold">{siteConfig.name}</span>
          <span className={`hidden md:inline w-[1px] h-3 transition-colors ${
            theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"
          }`}></span>
          <span className={`hidden md:inline text-[10px] uppercase font-mono tracking-wider transition-colors ${
            theme === "dark" ? "text-zinc-500" : "text-zinc-400"
          }`}>
            {siteConfig.role}
          </span>
        </button>

        {/* Navigation Actions */}
        <nav className="flex items-center gap-6">
          <button
            onClick={() => handleScroll("work")}
            className={`text-xs transition-colors font-sans cursor-pointer h-16 flex items-center justify-center relative ${
              theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => handleScroll("resume")}
            className={`text-xs transition-colors font-sans cursor-pointer h-16 flex items-center justify-center ${
              theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={`text-xs transition-colors font-sans cursor-pointer h-16 flex items-center justify-center ${
              theme === "dark" ? "text-zinc-500 hover:text-white" : "text-zinc-500 hover:text-black"
            }`}
          >
            Contact
          </button>

          <span className={`w-[1px] h-3 transition-colors ${
            theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"
          }`}></span>

          {/* Social icons & theme toggle */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${
                theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-black"
              }`}
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.x}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors flex items-center justify-center ${
                theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-black"
              }`}
              title="X"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className={`transition-colors ${
                theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-black"
              }`}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <span className={`w-[1px] h-3 transition-colors ${
              theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"
            }`}></span>

            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-sm transition-all cursor-pointer ${
                theme === "dark"
                  ? "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  : "text-zinc-500 hover:text-black hover:bg-zinc-100"
              }`}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
