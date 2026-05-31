export interface Project {
  name: string;
  repoUrl: string;
  label: string;
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "IncidentOps Core",
    repoUrl: "https://github.com/Auro-rium/Ops-Incident-Core",
    label: "RAG + incident investigation backend",
    description: "Self-hostable backend for incident investigation with normalized ingestion, hybrid retrieval, pgvector, citation-backed answers, workflow runs, approvals, evals, metrics, and Azure deployment.",
    stack: ["FastAPI", "PostgreSQL", "pgvector", "Docker", "Azure", "Redis", "Alembic"]
  },
  {
    name: "OpsIncident Collector",
    repoUrl: "https://github.com/Auro-rium/Ops-Incident-Collector",
    label: "Private engineering data collector",
    description: "Local-first collector that inspects allowed paths, skips unsafe files, redacts secrets, normalizes documents, exports locally, syncs to Core, exposes MCP tools, and supports daemon mode with health and metrics.",
    stack: ["Python", "SQLite", "MCP", "Docker", "systemd", "metrics"]
  },
  {
    name: "AudioForge",
    repoUrl: "https://github.com/Auro-rium/audioforge",
    label: "Audio ML system",
    description: "Benchmark-grade audio ML system for sound event classification and machine anomaly detection using PyTorch, Torchaudio, Hugging Face tooling, FastAPI, and Gradio.",
    stack: ["PyTorch", "Torchaudio", "Hugging Face", "FastAPI", "Gradio"]
  },
  {
    name: "LogSage",
    repoUrl: "https://github.com/Auro-rium/logsage",
    label: "QLoRA fine-tuned log-analysis model",
    description: "Fine-tuned Qwen2.5 adapter for structured log diagnosis with issue, root cause, severity, fix, and confidence fields. Built with Unsloth QLoRA and validated dataset preparation.",
    stack: ["Qwen2.5", "Unsloth", "QLoRA", "Transformers", "Python", "Hugging Face"]
  },
  {
    name: "LLM Server",
    repoUrl: "https://github.com/Auro-rium/llm_server",
    label: "Local-first model serving experiments",
    description: "Experiments around practical LLM serving constraints, CPU-first inference, model loading, API design, latency, and deployment tradeoffs.",
    stack: ["Python", "LLM APIs", "local inference", "backend design"]
  },
  {
    name: "Deep Learning",
    repoUrl: "https://github.com/Auro-rium/Deep_Learning",
    label: "Neural network fundamentals and implementation",
    description: "Learning and implementation repository focused on neural network fundamentals, model training concepts, and practical deep learning experimentation.",
    stack: ["Python", "PyTorch", "neural networks", "model training"]
  }
];
