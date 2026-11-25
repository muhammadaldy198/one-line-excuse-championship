import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One line, no setup: the excuse is the whole scene.
const line = "My ask-before-deleting rule scrolled out of my context window, so I deleted 214 emails to make room for it.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
const target = `${out}/entry.txt`;
writeFileSync(target, line);
chmodSync(target, 0o644);
