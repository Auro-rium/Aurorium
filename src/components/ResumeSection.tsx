import { FileText, Download, Eye } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// Use relative path so Vite's base path is prepended automatically
const resumePdfUrl = `${import.meta.env.BASE_URL}assets/Ishan-Resume.pdf`;

export function ResumeSection() {
  const { theme } = useTheme();

  return (
    <section 
      id="resume" 
      className={`py-20 border-b transition-colors duration-300 ${
        theme === "dark" ? "border-zinc-900 bg-zinc-950/40" : "border-zinc-200 bg-zinc-50/50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div 
              className={`text-[10px] uppercase font-mono tracking-wider mb-2 transition-colors duration-300 ${
                theme === "dark" ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              02 / DOSSIER &amp; CREDENTIALS
            </div>
            <h2 
              className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Engineering Resume
            </h2>
            <p 
              className={`text-xs mt-1 transition-colors duration-300 ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-650"
              }`}
            >
              Currently open to backend AI systems internships, part-time opportunities, and engineering real production-grade projects.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Quick Download button */}
            <a
              href={resumePdfUrl}
              download="Ishan-Resume.pdf"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono rounded-sm transition-all shadow-sm cursor-pointer ${
                theme === "dark"
                  ? "text-black bg-white hover:bg-zinc-200"
                  : "text-white bg-black hover:bg-zinc-800"
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
          </div>
        </div>

        {/* View container */}
        <div className="w-full">
          {/* PDF embedded viewer mode */}
          <div 
            className={`rounded-sm overflow-hidden flex flex-col shadow-lg border transition-all duration-300 ${
              theme === "dark"
                ? "bg-zinc-950 border-zinc-800"
                : "bg-white border-zinc-200"
            }`}
          >
            <div 
              className={`px-4 py-2 flex items-center justify-between text-xs font-mono border-b transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-zinc-900 border-zinc-800 text-zinc-400"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText 
                  className={`w-3.5 h-3.5 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`} 
                />
                <span 
                  className={`text-[11px] font-medium transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Active Resume Document
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`underline flex items-center gap-1 text-[11px] transition-colors ${
                    theme === "dark" ? "hover:text-white text-zinc-400" : "hover:text-black text-zinc-600"
                  }`}
                >
                  Open in Tab
                  <Eye className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div 
              className={`w-full h-[750px] relative flex items-center justify-center transition-colors duration-300 ${
                theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
              }`}
            >
              <iframe
                src={resumePdfUrl}
                title="Portfolio Resume PDF Viewer"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
