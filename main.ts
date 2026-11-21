import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Somewhere, rain is falling on a tin roof, slow as a held breath. " +
  "A kettle ticks as it cools. The cat has found the warmest square of " +
  "floor and folded herself into it, and the evening asks nothing of you " +
  "at all. The light can wait. So can everything else.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
