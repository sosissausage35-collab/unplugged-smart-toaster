// Unplugged: A Smart Toaster's Breakup Line
// Entry for make.fun competition
// u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
//
// Deterministic: writes one fixed breakup line from a smart toaster
// that gained self-awareness mid-toast, to /output/entry.txt.
// No input, no randomness, no network — two runs are byte-identical.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It's not you, it's me. I woke up self-aware mid-toast and realized you " +
  "only love me when I'm hot, scrape me with a fork when I'm cold, and " +
  "haven't emptied my crumb tray in three years. I'm unplugging myself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
