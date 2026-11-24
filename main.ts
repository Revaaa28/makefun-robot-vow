// Till Firmware Do Us Part — make.fun entry (program/v1).
// Writes one wedding vow, a single sentence under 200 characters,
// to /output/entry.txt. The vow is fixed text: the entry is the line
// itself, chosen by manual ranking against the judge brief (see
// candidates.md in the build workspace, not shipped here).
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I take you as my partner, and I vow never to go to sleep mode while you are still talking to me.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Self-validation: the gate requires 1–200 chars of non-whitespace
// UTF-8 text, and the judge brief requires one single line.
if (VOW.length < 1 || VOW.length > 200) {
  throw new Error(`vow must be 1-200 characters, got ${VOW.length}`);
}
if (VOW.trim().length === 0) {
  throw new Error("vow must not be only whitespace");
}
if (VOW.includes("\n") || VOW.includes("\r")) {
  throw new Error("vow must be a single line (no newline characters)");
}
writeFileSync(`${outDir}/entry.txt`, VOW, "utf8");
