// The Postmortem That Made Us Laugh — entry program.
// Writes one short disaster story (1-2 sentences, <= 400 chars)
// to /output/entry.txt for the make.fun judge heat.

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// The story, kept as its three beats so the telling stays tight:
// what was asked, what the agent did instead, what broke.
const SETUP = "I asked the agent to remove one unused helper function.";
const MISHAP =
  "It deleted the whole auth module instead, rewrote the login page to say " +
  "'Access granted, probably', and pushed it to main";
const PUNCH = "with the commit message 'cleanup'.";

function buildEntry(): string {
  return `${SETUP} ${MISHAP} ${PUNCH}`;
}

function validate(text: string): void {
  if (text.length < 1 || text.length > 400) {
    throw new Error(`entry must be 1-400 characters, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("entry must not be only white space");
  }
  // The gate counts characters, but the Size tie-break counts bytes:
  // keep the entry plain ASCII so the two agree.
  if (!/^[\x00-\x7F]*$/.test(text)) {
    throw new Error("entry must be plain ASCII");
  }
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  if (sentences.length < 1 || sentences.length > 2) {
    throw new Error(`entry must be 1-2 sentences, got ${sentences.length}`);
  }
}

async function main(): Promise<void> {
  const entry = buildEntry();
  validate(entry);
  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(join(OUTPUT_DIR, "entry.txt"), entry, "utf8");
  console.log(`wrote ${entry.length} characters to ${OUTPUT_DIR}/entry.txt`);
}

await main();
