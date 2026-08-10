import { existsSync, readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const required = ["Ishan Trivedi", "Proof of Work", "GitHub timeline", "LeetCode grind", "Backend systems", "Applied AI", "blog/applied-ai.html", "ishan-trivedi-portrait.jpg"];

for (const phrase of required) {
  if (!html.includes(phrase)) throw new Error(`Missing required content: ${phrase}`);
}

if (!existsSync("blog/applied-ai.html")) {
  throw new Error("Missing Applied AI blog page.");
}

if (/assistant|openrouter|langchain/i.test(html)) {
  throw new Error("The static page must not contain an AI assistant integration.");
}
