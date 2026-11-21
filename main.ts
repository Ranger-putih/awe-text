import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Somewhere, rain is falling on a tin roof, slow as a held breath. " +
  "A kettle ticks as it cools. The cat has found the warmest square of " +
  "floor and folded herself into it, and the evening asks nothing of you " +
  "at all. The light can wait. So can everything else.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The judge only accepts a single relaxing text of at most 280 characters:
// validate the entry before writing so a bad build fails loudly instead
// of silently submitting an invalid file.
const length = [...TEXT].length;
if (length < 1 || length > 280 || TEXT.trim().length === 0) {
  throw new Error(
    `entry text must be 1-280 Unicode code points and not only whitespace, got ${length} code points`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
