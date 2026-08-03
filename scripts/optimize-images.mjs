/**
 * Komprimiert die Bilder unter public/img zu schlanken WebP-Dateien.
 *
 * Hintergrund: Direkt exportierte PNG-Fotos sind mehrere Megabyte groß und
 * bremsen die Seite spürbar. WebP liefert bei gleicher Optik einen Bruchteil
 * der Dateigröße.
 *
 *   node scripts/optimize-images.mjs
 *
 * Die Original-PNGs bleiben erhalten; erzeugt werden zusätzliche .webp-Dateien.
 */
import { readdir, stat } from 'node:fs/promises';
import { globSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
// sharp ist eine transitive Abhängigkeit von Astro und liegt daher nur im
// pnpm-Store, nicht direkt unter node_modules/. Beide Wege versuchen.
function loadSharp() {
  try {
    return require('sharp');
  } catch {
    const [hit] = globSync('node_modules/.pnpm/sharp@*/node_modules/sharp');
    if (!hit) throw new Error('sharp nicht gefunden – bitte "pnpm add -D sharp" ausführen.');
    return require(path.resolve(hit));
  }
}
const sharp = loadSharp();

const ROOT = path.resolve(process.cwd(), 'public/img');

/** Zielbreiten: Fotos werden als Hintergrundbilder nie größer als ~1600px gebraucht. */
const TARGETS = [
  { dir: path.join(ROOT, 'photos'), width: 1600, quality: 72 },
  { dir: ROOT, width: 512, quality: 82, only: ['logo.png'] },
];

const kb = (n) => `${Math.round(n / 1024)} KB`;

for (const target of TARGETS) {
  let entries;
  try {
    entries = await readdir(target.dir);
  } catch {
    continue;
  }

  const files = entries.filter(
    (f) => /\.(png|jpe?g)$/i.test(f) && (!target.only || target.only.includes(f)),
  );

  for (const file of files) {
    const src = path.join(target.dir, file);
    const out = src.replace(/\.(png|jpe?g)$/i, '.webp');
    const before = (await stat(src)).size;

    await sharp(src)
      .resize({ width: target.width, withoutEnlargement: true })
      .webp({ quality: target.quality })
      .toFile(out);

    const after = (await stat(out)).size;
    const saved = Math.round((1 - after / before) * 100);
    console.log(`${file} → ${path.basename(out)}  ${kb(before)} → ${kb(after)}  (−${saved}%)`);
  }
}
