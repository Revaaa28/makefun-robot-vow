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
writeFileSync(`${outDir}/entry.txt`, VOW, "utf8");
