// One Emoji, One Dream Vacation — entry program.
//
// Writes exactly one emoji to entry.txt: DESERT ISLAND (U+1F3DD + U+FE0F).
// No network, no dependencies, no arguments, exit 0.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🏝️"; // desert island — a faraway place, the dream vacation itself
// Picked over the runners-up against the judge's criteria, most important
// first: 🏖️ beach-with-umbrella plainly names a beach but is any generic
// holiday (loses on specific), and 🌅 sunrise names a moment, not a place
// (loses criterion 1 outright to any emoji that plainly names a dream
// vacation). The island is one whole postcard: palm, sand and sea.

// Gate: exactly one emoji — a base emoji plus an optional variation
// selector, no spaces, no newlines, nothing else in the file.
if ([...ENTRY].length < 1 || [...ENTRY].length > 2) {
  throw new Error(`entry must be exactly one emoji, got ${[...ENTRY].length} code points`);
}
if (/\s/.test(ENTRY)) {
  throw new Error("entry must not contain whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
