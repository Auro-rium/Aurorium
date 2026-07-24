import { useState } from "react";
import { siteConfig } from "../data/site";
import { Mail, Copy, Check, ExternalLink, Github, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ContactSection() {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const hasPublicEmail = siteConfig.email.includes("@");

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 transition-colors duration-305 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
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
            03 / INQUIRY & COLLABORATION
          </div>
          <h2 
            className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Get in Touch
          </h2>
          <p 
            className={`text-xs mt-1 transition-colors duration-300 ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-650"
            }`}
          >
            Let&apos;s work together on difficult applied AI systems.
          </p>
        </div>

        {/* Minimalist Contact Card */}
        <div 
          className={`p-8 rounded-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center border transition-all duration-300 ${
            theme === "dark" ? "border-zinc-800 bg-zinc-950" : "border-zinc-200 bg-zinc-50/50"
          }`}
        >
          <div className={hasPublicEmail ? "md:col-span-8" : "md:col-span-12"}>
            <h3 
              className={`text-sm font-semibold tracking-tight mb-3 font-sans transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Open to Opportunities
            </h3>
            <p 
              className={`text-xs leading-relaxed font-sans transition-colors duration-300 ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-650"
              }`}
            >
              I am open to applied AI engineering internships, backend AI systems work, and serious collaborations. Reach out if you are building agents, retrieval systems, model-training pipelines, or the infrastructure around them.
            </p>
          </div>
          
          {hasPublicEmail && (
          <div className="md:col-span-4 flex flex-col gap-2.5">
            {/* Direct Send button */}
            <a
              href={`mailto:${siteConfig.email}`}
              className={`inline-flex items-center justify-center gap-2 w-full py-2 px-4 text-xs font-semibold rounded-xs shadow-sm transition-colors duration-300 ${
                theme === "dark"
                  ? "text-black bg-white hover:bg-zinc-200"
                  : "text-white bg-black hover:bg-zinc-805"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              Write Email
            </a>
            
            {/* Copy button */}
            <button
              onClick={copyEmail}
              className={`inline-flex items-center justify-center gap-2 w-full py-2 px-4 text-xs font-semibold rounded-xs border cursor-pointer transition-colors duration-300 ${
                theme === "dark"
                  ? "text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border-zinc-800"
                  : "text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border-zinc-200"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  Copied address
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Email
                </>
              )}
            </button>
          </div>
          )}
        </div>

        {/* Directories Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className={`p-4 border rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group ${
              theme === "dark"
                ? "border-zinc-800 hover:border-white bg-zinc-950/40 hover:bg-zinc-900 hover:shadow-black/10"
                : "border-zinc-200 hover:border-black bg-zinc-50/20 hover:bg-zinc-50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Github 
                className={`w-4 h-4 transition-colors duration-300 ${
                  theme === "dark" ? "text-zinc-500 group-hover:text-white" : "text-zinc-650 group-hover:text-black"
                }`} 
              />
              <ExternalLink 
                className={`w-3 h-3 transition-colors duration-300 ${
                  theme === "dark" ? "text-zinc-650 group-hover:text-zinc-400" : "text-zinc-400 group-hover:text-zinc-600"
                }`} 
              />
            </div>
            <div 
              className={`text-[9px] font-mono tracking-wider transition-colors duration-300 ${
                theme === "dark" ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              GITHUB
            </div>
            <div 
              className={`text-xs font-medium truncate mt-0.5 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Auro-rium
            </div>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`p-4 border rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group ${
              theme === "dark"
                ? "border-zinc-800 hover:border-white bg-zinc-950/40 hover:bg-zinc-900 hover:shadow-black/10"
                : "border-zinc-200 hover:border-black bg-zinc-50/20 hover:bg-zinc-50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Linkedin 
                className={`w-4 h-4 transition-colors duration-300 ${
                  theme === "dark" ? "text-zinc-500 group-hover:text-[#0a66c2]" : "text-zinc-650 group-hover:text-[#0077b5]"
                }`} 
              />
              <ExternalLink 
                className={`w-3 h-3 transition-colors duration-300 ${
                  theme === "dark" ? "text-zinc-650 group-hover:text-zinc-400" : "text-zinc-400 group-hover:text-zinc-600"
                }`} 
              />
            </div>
            <div 
              className={`text-[9px] font-mono tracking-wider transition-colors duration-300 ${
                theme === "dark" ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              LINKEDIN
            </div>
            <div 
              className={`text-xs font-medium truncate mt-0.5 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              ishantrive
            </div>
          </a>

          <a
            href={siteConfig.huggingface}
            target="_blank"
            rel="noreferrer"
            className={`p-4 border rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group ${
              theme === "dark"
                ? "border-zinc-800 hover:border-white bg-zinc-950/40 hover:bg-zinc-900 hover:shadow-black/10"
                : "border-zinc-200 hover:border-black bg-zinc-50/20 hover:bg-zinc-50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg leading-none opacity-60 group-hover:opacity-100 transition-opacity">🤗</span>
              <ExternalLink 
                className={`w-3 h-3 transition-colors duration-300 ${
                  theme === "dark" ? "text-zinc-650 group-hover:text-zinc-400" : "text-zinc-400 group-hover:text-zinc-600"
                }`} 
              />
            </div>
            <div 
              className={`text-[9px] font-mono tracking-wider transition-colors duration-300 ${
                theme === "dark" ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              HUGGING FACE
            </div>
            <div 
              className={`text-xs font-medium truncate mt-0.5 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Auro-rium
            </div>
          </a>

          <a
            href={siteConfig.leetcode}
            target="_blank"
            rel="noreferrer"
            className={`p-4 border rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group ${
              theme === "dark"
                ? "border-zinc-800 hover:border-white bg-zinc-950/40 hover:bg-zinc-900 hover:shadow-black/10"
                : "border-zinc-200 hover:border-black bg-zinc-50/20 hover:bg-zinc-50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-500 font-bold font-mono text-sm leading-none opacity-80 group-hover:text-yellow-400 transition-colors">⬢</span>
              <ExternalLink 
                className={`w-3 h-3 transition-colors duration-300 ${
                  theme === "dark" ? "text-zinc-650 group-hover:text-zinc-400" : "text-zinc-400 group-hover:text-zinc-600"
                }`} 
              />
            </div>
            <div 
              className={`text-[9px] font-mono tracking-wider transition-colors duration-300 ${
                theme === "dark" ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              LEETCODE
            </div>
            <div 
              className={`text-xs font-medium truncate mt-0.5 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Auro-rium
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
