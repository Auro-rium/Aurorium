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
  role: "Applied AI Engineer & Systems Architect",
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
  subheadline: "Building practical AI systems from first principles.",
  body: "I work across RAG, agents, fine-tuning, evaluation, and backend infrastructure, with a focus on systems that are reliable, inspectable, and useful beyond the demo.",
  aboutText: "I am a computer science student interested in applied AI engineering, game theory, incentives, long-term technology, and systems that compound over time. I care about building AI systems that can be inspected, tested, deployed, and improved. My current focus is backend AI infrastructure: RAG, agents, fine-tuning, evaluation, and model-serving systems.",
  operatingPrinciples: [
    { title: "Proof over claims", description: "Validated architectures and quantifiable benchmarks instead of vague descriptors." },
    { title: "Systems over vibes", description: "Relying on reproducible infrastructure, automated evaluations, and code-based observability." },
    { title: "Shipping over tutorial loops", description: "Writing non-trivial code that runs in real environments and solves structural bottlenecks." },
    { title: "Reality over hype", description: "Grounding developments in concrete technical tradeoffs, memory safety, and model limits." }
  ]
};
