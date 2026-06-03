import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const dist = new URL("dist/", root);

await rm(dist, { recursive: true, force: true });
await mkdir(new URL("src/", dist), { recursive: true });
await mkdir(new URL("public/", dist), { recursive: true });

await cp(new URL("index.html", root), new URL("index.html", dist));
await cp(new URL("src/app.js", root), new URL("src/app.js", dist));
await cp(new URL("src/site-data.js", root), new URL("src/site-data.js", dist));
await cp(new URL("src/theme-renderers.js", root), new URL("src/theme-renderers.js", dist));
await cp(new URL("src/styles.css", root), new URL("src/styles.css", dist));
await cp(new URL("public/", root), new URL("public/", dist), { recursive: true });

console.log(`Built static site at ${join(process.cwd(), "dist")}`);
