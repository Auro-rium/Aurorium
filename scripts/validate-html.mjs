import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const required = ["Ishan Trivedi", "Applied AI", "classic.html", "ishan-trivedi-portrait.jpg"];

for (const phrase of required) {
  if (!html.includes(phrase)) throw new Error(`Missing required content: ${phrase}`);
}

if (/assistant|openrouter|langchain/i.test(html)) {
  throw new Error("The static page must not contain an AI assistant integration.");
}

for (const page of ["index.html", "classic.html"]) {
  for (const m of readFileSync(page, "utf8").matchAll(/<script>([\s\S]*?)<\/script>/g)) new Function(m[1]);
}
