import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type Guide = CollectionEntry<'guides'>;

/** Entfernt das Sprach-Präfix aus der Collection-ID (z. B. "de/foo" -> "foo"). */
export function guideSlug(entry: Guide): string {
  return entry.id.replace(/^(de|en)\//, '');
}

/** Alle veröffentlichten Ratgeber einer Sprache, sortiert nach order. */
export async function getGuides(lang: Lang): Promise<Guide[]> {
  const all = await getCollection('guides', ({ data }) => !data.draft && data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Gruppiert Ratgeber nach Kategorie (Reihenfolge der ersten Vorkommen bleibt erhalten). */
export function groupByCategory(guides: Guide[]): { category: string; items: Guide[] }[] {
  const map = new Map<string, Guide[]>();
  for (const g of guides) {
    const c = g.data.category;
    if (!map.has(c)) map.set(c, []);
    map.get(c)!.push(g);
  }
  return [...map.entries()].map(([category, items]) => ({ category, items }));
}
