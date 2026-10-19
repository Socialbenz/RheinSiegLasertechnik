// Prepare an isolated deployment of the already-built static website.
// Never links or modifies the existing customer's Vercel project.
import fs from "node:fs/promises";
import path from "node:path";
const target = path.resolve(process.argv[2] || "artifacts/vercel-preview");
const output = path.join(target, ".vercel/output");
await fs.access("dist/index.html");
await fs.mkdir(path.join(output, "static"), { recursive: true });
await fs.cp("dist", path.join(output, "static"), { recursive: true });
await fs.writeFile(
  path.join(output, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        {
          src: "/(.*)",
          headers: { "X-Robots-Tag": "noindex, nofollow" },
          continue: true,
        },
        { handle: "filesystem" },
        { src: "/design-05/?", dest: "/original/index.html" },
        { src: "/design-0[1-4]/?", dest: "/index.html" },
      ],
    },
    null,
    2,
  ) + "\n",
);
console.log(`Statische Vercel-Vorschau vorbereitet: ${target}`);
console.log(
  `In einem separaten Projekt veröffentlichen: npx vercel@64.5.0 deploy '${target}' --temporary --prebuilt --yes`,
);
