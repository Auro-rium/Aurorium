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

## Deployment

Pushes to `main` deploy the static Vite build to GitHub Pages through `.github/workflows/deploy.yml`. The Vite base path switches to `/Aurorium/` when the `GITHUB_PAGES` environment variable is enabled by the workflow.
