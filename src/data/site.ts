export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  x: string;
  huggingface: string;
  leetcode: string;

  handle: string;
  headline: string;
  subheadline: string;
  body: string;
  aboutText: string;
  operatingPrinciples: {
    title: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Aurorium Nexus",
  role: "Applied AI Engineer",
  location: "Bengaluru, India",
  email: "redacted",
  phone: "redacted",
  github: "https://github.com/Auro-rium",
  linkedin: "https://www.linkedin.com/in/ishantrive/",
  x: "",
  huggingface: "https://huggingface.co/auro-rirum",
  leetcode: "https://leetcode.com/u/Gg2kJdIJ3w/",
  handle: "redacted",
  headline: "Aurorium Nexus",
  subheadline: "I build applied AI systems.",
  body: "My work spans RAG, agents, model fine-tuning, evaluation, and backend infrastructure. I focus on systems that are testable, inspectable, deployed, and honest about what has — and has not — been proven.",
  aboutText: "I am focused on applied AI engineering: retrieval systems, agent workflows, model training, evaluation, and the backend infrastructure required to operate them. I care about explicit system boundaries, reproducible results, and engineering artifacts that remain useful beyond a demo.",
  operatingPrinciples: [
    { title: "Proof over claims", description: "Validated architectures and quantifiable benchmarks instead of vague descriptors." },
    { title: "Systems over vibes", description: "Relying on reproducible infrastructure, automated evaluations, and code-based observability." },
    { title: "Shipping over tutorial loops", description: "Writing non-trivial code that runs in real environments and solves structural bottlenecks." },
    { title: "Reality over hype", description: "Grounding developments in concrete technical tradeoffs, memory safety, and model limits." }
  ]
};
