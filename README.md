# Aurorium Portfolio

The source for [auro-rium.github.io/Aurorium](https://auro-rium.github.io/Aurorium/), the applied AI engineering portfolio of Ishan Trivedi (Aurorium Nexus).

## What it highlights

- IncidentOps Core and its deterministic evidence Collector
- Agent Canary, an autonomous AI-agent red-team platform
- AudioForge environmental audio training and published FSD50K benchmarks
- AgentForge multi-turn tool-calling fine-tuning
- LogSage QLoRA training and model publishing

Project claims and proof points are sourced from the corresponding public repository documentation.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Portfolio assistant

The site includes a portfolio-grounded chat assistant. The React widget calls the
server-side `api/chat.ts` Vercel Function, which uses LangChain's OpenRouter
integration. The OpenRouter key must never be exposed through a `VITE_` variable.

Required Vercel environment variables:

```bash
OPENROUTER_API_KEY=
OPENROUTER_MODEL=google/gemini-2.5-flash-lite
ALLOWED_ORIGINS=https://auro-rium.github.io
```

The GitHub Pages build needs the public Function URL:

```bash
VITE_PORTFOLIO_AGENT_API_URL=https://aurorium-portfolio-agent.vercel.app/api/chat
```

## Deployment

Pushes to `main` deploy the static Vite build to GitHub Pages through `.github/workflows/deploy.yml`. The Vite base path switches to `/Aurorium/` when the `GITHUB_PAGES` environment variable is enabled by the workflow.
