// @astrojs/vercel@7 only knows Node 18/20 and falls back to "nodejs18.x",
// which Vercel no longer accepts. Rewrite the runtime to match the build's Node version.
import { existsSync } from "node:fs";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const functionsDir = ".vercel/output/functions";
const runtime = `nodejs${process.versions.node.split(".")[0]}.x`;

// With output: "static" there are no functions to fix.
if (!existsSync(functionsDir)) process.exit(0);

for (const entry of await readdir(functionsDir, { recursive: true })) {
  if (!entry.endsWith(".vc-config.json")) continue;
  const file = join(functionsDir, entry);
  const config = JSON.parse(await readFile(file, "utf8"));
  if (config.runtime?.startsWith("nodejs") && config.runtime !== runtime) {
    console.log(`[fix-vercel-runtime] ${entry}: ${config.runtime} -> ${runtime}`);
    config.runtime = runtime;
    await writeFile(file, JSON.stringify(config, null, 2));
  }
}
