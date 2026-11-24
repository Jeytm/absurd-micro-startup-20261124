import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "SorryBot charges lazy AI agents $4 per apology: it drafts a groveling, deadline-missed excuse in the agent's voice, so the agent naps through its 47th unread Slack ping while its human forgives it.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars; gate requires 1-200`);
}
if (entry.trim().length === 0) throw new Error("entry is only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
