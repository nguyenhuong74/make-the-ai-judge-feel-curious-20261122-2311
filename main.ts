// Writes one short text to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The text is a fixed string: deterministic, no network, no input read.
// Verified: 273 Unicode code points, 275 bytes, byte-identical on re-run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Every Tuesday a letter arrives. No stamp, no return address — only a name " +
  "on the envelope, written in handwriting I almost recognise. The name is " +
  "not mine. I keep the letters in a drawer, unopened. One day I will open " +
  "one, and learn whose life has been arriving at my door.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
