export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  summary: string;
  skills: SkillCategory[];
  education: {
    degree: string;
    institution: string;
    period: string;
  };
  bullets: string[];
}

export const resumeData: ResumeData = {
  summary: "Second-year Computer Science undergraduate focused on applied AI engineering, LLM systems, RAG pipelines, agentic workflows, fine-tuning, and backend infrastructure. Built production-shaped systems including IncidentOps Core, OpsIncident Collector, and LogSage.",
  skills: [
    {
      category: "AI Systems",
      items: ["RAG", "hybrid retrieval", "chunking", "metadata extraction", "evaluation", "structured outputs"]
    },
    {
      category: "Models",
      items: ["Transformers", "QLoRA", "Unsloth", "Qwen", "fine-tuning", "PyTorch"]
    },
    {
      category: "Backend",
      items: ["Python", "FastAPI", "PostgreSQL", "pgvector", "SQLite", "Docker", "REST APIs"]
    },
    {
      category: "Infrastructure",
      items: ["Azure Container Apps", "GitHub Actions", "Docker Compose", "metrics", "smoke tests"]
    },
    {
      category: "Agents",
      items: ["MCP", "tool boundaries", "workflow orchestration", "approval gates", "audit trails"]
    }
  ],
  education: {
    degree: "Second-year Computer Science undergraduate",
    institution: "Sir M. Visvesvaraya Institute of Technology",
    period: "Bengaluru, India"
  },
  bullets: [
    "Built IncidentOps Core, a self-hostable RAG + incident investigation backend using FastAPI, PostgreSQL/pgvector, hybrid retrieval, workflow runs, approvals, evals, and Azure deployment.",
    "Built OpsIncident Collector, a local/private engineering data collector with path allowlists, deny rules, secret redaction, normalized document export, daemon mode, retry queue, health checks, and Core sync.",
    "Fine-tuned Qwen2.5 with Unsloth QLoRA for structured log diagnosis using validated dataset preparation and schema-based outputs.",
    "Built and studied LLM serving, backend AI systems, retrieval pipelines, and deep learning fundamentals through public repositories."
  ]
};
