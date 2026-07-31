import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: ./scripts/site new "Draft title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

if (!slug) {
  console.error("The title must contain at least one letter or number.");
  process.exit(1);
}

const draftsDirectory = resolve("drafts");
const filename = resolve(draftsDirectory, `${slug}.md`);
const today = new Date().toISOString().slice(0, 10);
const content = `---
title: "${title.replaceAll('"', '\\"')}"
description: "One sentence describing this note."
published: ${today}
tags: []
---

Start writing here.
`;

await mkdir(draftsDirectory, { recursive: true });

try {
  await writeFile(filename, content, { flag: "wx" });
  console.log(`Created private draft: drafts/${slug}.md`);
} catch (error) {
  if (error && error.code === "EEXIST") {
    console.error(`Draft already exists: drafts/${slug}.md`);
    process.exit(1);
  }
  throw error;
}
