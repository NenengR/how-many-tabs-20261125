// How Many Tabs Do You Have Open? - one number in digits only, 1-5 chars, UTF-8.
// Chosen number: 47 (2 chars) - a plausible, funny count of open browser tabs.
// Revision: re-verified the entry stays exactly "47" with no extra whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = "47";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
