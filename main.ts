// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: the same bytes on every run. No network, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "Every night, the lighthouse keeper pours a second cup of tea. No one has come in three years. By morning the cup is empty, and the sugar bowl sits one spoon lighter. He stopped asking who drinks it. He only wonders what they dream about, past the light, waiting for the tide.";

// $MAKEFUN_BOT_DIR is where the bot lives; this entry needs nothing from it.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
void botDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
