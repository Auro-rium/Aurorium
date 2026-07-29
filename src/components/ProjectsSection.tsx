import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const getDotColor = (primaryTech: string) => {
  const tech = primaryTech.toLowerCase();
  if (tech.includes("python") || tech.includes("fastapi")) {
    return "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]";
  }
  if (tech.includes("pytorch") || tech.includes("unsloth") || tech.includes("qwen") || tech.includes("deep learning")) {
    return "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]";
  }
  if (tech.includes("react") || tech.includes("typescript") || tech.includes("javascript")) {
    return "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]";
  }
  return "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]";
};

export function ProjectsSection() {
  const { theme } = useTheme();

  return (
    <section 
      id="work" 
      className={`py-20 border-b transition-colors duration-300 ${
        theme === "dark" ? "border-zinc-900 bg-black" : "border-zinc-200 bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div 
            className={`text-[10px] uppercase font-mono tracking-wider mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-zinc-500" : "text-zinc-400"
            }`}
          >
            01 / PROJECTS & RESEARCH
          </div>
          <h2 
            className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Selected Repositories
          </h2>
          <p 
            className={`text-xs mt-1 transition-colors duration-300 ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Applied AI infrastructure, model training, evaluation, and agent security.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group p-6 rounded-sm border transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1.5 ${
                theme === "dark"
                  ? "bg-zinc-950/80 border-zinc-800 hover:border-zinc-400 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-black/50"
                  : "bg-white border-zinc-200 hover:border-black/55 hover:bg-zinc-50/20 hover:shadow-lg hover:shadow-zinc-200/50"
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 
                    className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`transition-colors shrink-0 ${
                      theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-550 hover:text-black"
                    }`}
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Technical Label */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-1.5 h-1.5 rounded-full ${getDotColor(project.stack[0] || "")}`} />
                  <span 
                    className={`inline-block text-[11px] font-mono px-2 py-0.5 rounded-sm border h-max transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-zinc-400 bg-zinc-900/80 border-zinc-800"
                        : "text-zinc-600 bg-zinc-50/80 border-zinc-200"
                    }`}
                  >
                    {project.label}
                  </span>
                </div>

                {/* Description */}
                <p 
                  className={`text-xs leading-relaxed mb-6 transition-colors duration-300 ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-650"
                  }`}
                >
                  {project.description}
                </p>

                <div
                  className={`mb-6 border-l-2 pl-3 text-[11px] leading-relaxed font-mono transition-colors duration-300 ${
                    theme === "dark"
                      ? "border-zinc-700 text-zinc-400"
                      : "border-zinc-300 text-zinc-600"
                  }`}
                >
                  {project.proof}
                </div>
              </div>

              {/* Stack tags & links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-xs border transition-all duration-300 ${
                        theme === "dark"
                          ? "text-zinc-400 bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700/80 group-hover:text-zinc-300"
                          : "text-zinc-650 bg-zinc-50/80 border-zinc-200/80 hover:border-zinc-300/80 group-hover:text-zinc-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`pt-3 border-t flex flex-wrap items-center gap-x-4 gap-y-2 transition-colors duration-300 ${
                    theme === "dark" ? "border-zinc-900/80" : "border-zinc-150"
                  }`}
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-[11px] font-mono transition-all duration-300 ${
                      theme === "dark"
                        ? "text-zinc-500 hover:text-white group-hover:text-zinc-300"
                        : "text-zinc-500 hover:text-black group-hover:text-zinc-700"
                    }`}
                  >
                    <span>GitHub</span>
                    <ExternalLink
                      className={`w-3 h-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        theme === "dark" ? "text-zinc-600 group-hover:text-zinc-300" : "text-zinc-400 group-hover:text-zinc-700"
                      }`}
                    />
                  </a>

                  {project.links?.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-[11px] font-mono transition-all duration-300 ${
                        theme === "dark"
                          ? "text-zinc-400 hover:text-white"
                          : "text-zinc-600 hover:text-black"
                      }`}
                    >
                      <span>{link.url.includes("huggingface.co") ? "🤗 " : ""}{link.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
