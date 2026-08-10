import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const required = ["Ishan Trivedi", "Selected work", "ishan-trivedi-portrait.jpg"];

for (const phrase of required) {
  if (!html.includes(phrase)) throw new Error(`Missing required content: ${phrase}`);
}

if (/assistant|openrouter|langchain/i.test(html)) {
  throw new Error("The static page must not contain an AI assistant integration.");
}
