export interface Project {
  name: string;
  repoUrl: string;
  label: string;
  description: string;
  proof: string;
  stack: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    name: "IncidentOps Core",
    repoUrl: "https://github.com/Auro-rium/Ops-Incident-Core",
    label: "Azure-first incident investigation backend",
    description: "Indexes normalized engineering evidence and exposes cited search, investigation, readiness, workflow, evaluation, metrics, and MCP interfaces. Production paths require Azure OpenAI, PostgreSQL/pgvector, and Redis-backed workers.",
    proof: "Azure deployment + end-to-end Core/Collector smoke path",
    stack: ["FastAPI", "PostgreSQL", "pgvector", "Azure OpenAI", "Redis", "MCP"]
  },
  {
    name: "Agent Canary",
    repoUrl: "https://github.com/Auro-rium/canary",
    label: "Autonomous AI agent red-team platform",
    description: "A LangGraph pipeline that targets HTTP-based AI agents, runs adversarial campaigns, evaluates findings with deterministic detectors and LLM judges, proposes defenses, retests them, and streams results to a React dashboard.",
    proof: "5-agent pipeline · 12 attack strategies · auditable finding lifecycle",
    stack: ["LangGraph", "AWS Bedrock", "FastAPI", "React", "SQLite", "Docker"],
    links: [
      {
        label: "Live explainer",
        url: "https://agent-canary-explainer.vercel.app/"
      }
    ]
  },
  {
    name: "AudioForge",
    repoUrl: "https://github.com/Auro-rium/audioforge",
    label: "Reproducible environmental audio training",
    description: "A single data, feature, training, evaluation, and artifact pipeline for FSD50K multilabel classification. Compares a scratch CNN with LoRA adaptation of an Audio Spectrogram Transformer and publishes both checkpoints.",
    proof: "AST LoRA mAP 0.5567 · scratch CNN mAP 0.3020 on FSD50K",
    stack: ["PyTorch", "Torchaudio", "AST", "LoRA", "Accelerate", "Hugging Face"],
    links: [
      {
        label: "AST model",
        url: "https://huggingface.co/auro-rirum/audioforge-ast-fsd50k"
      },
      {
        label: "CNN model",
        url: "https://huggingface.co/auro-rirum/audioforge-scratch-cnn-fsd50k"
      }
    ]
  },
  {
    name: "AgentForge",
    repoUrl: "https://github.com/Auro-rium/agentforge",
    label: "Multi-turn tool-calling fine-tuning pipeline",
    description: "A LoRA/QLoRA training and evaluation pipeline targeting Gemma 4 12B's multi-turn tool-context reliability. It normalizes five public datasets into one schema and focuses evaluation on BFCL v4 multi-turn subsets.",
    proof: "5-source data pipeline · BFCL multi-turn evaluation target",
    stack: ["Gemma 4", "TRL", "QLoRA", "BFCL", "AWS GPU", "Hugging Face"],
    links: [
      {
        label: "Live explainer",
        url: "https://agentforge-explainer.vercel.app/"
      }
    ]
  },
  {
    name: "OpsIncident Collector",
    repoUrl: "https://github.com/Auro-rium/Ops-Incident-Collector",
    label: "Deterministic engineering evidence pipeline",
    description: "Discovers repository files under explicit policy, rejects unsafe inputs, redacts secrets, extracts bounded metadata, normalizes evidence, and syncs sanitized batches to IncidentOps Core. It remains deliberately separate from investigation and MCP.",
    proof: "Policy-first collection · pre-sync redaction · versioned batch contract",
    stack: ["Python", "Pydantic", "SQLite", "Docker", "systemd", "Prometheus"]
  },
  {
    name: "LogSage",
    repoUrl: "https://github.com/Auro-rium/logsage",
    label: "QLoRA fine-tuned log-analysis model",
    description: "A learning-grade Qwen2.5 7B adapter that turns application logs into validated JSON covering the issue, root cause, severity, fix, and confidence. Includes dataset validation, AWS training artifacts, inference, and model publishing.",
    proof: "1,116 examples · best eval loss 0.789 · published adapter",
    stack: ["Qwen2.5", "Unsloth", "QLoRA", "Transformers", "AWS EC2", "Hugging Face"],
    links: [
      {
        label: "Hugging Face model",
        url: "https://huggingface.co/auro-rirum/LogSage-Qwen2.5-7B-QLoRA-v0"
      }
    ]
  }
];
