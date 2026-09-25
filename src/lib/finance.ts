import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type FinancePage = CollectionEntry<'finance'>;

/** Slug ohne Sprachpräfix, z. B. "leasing". Die Übersicht heißt "index". */
// index.md bekommt vom Glob-Loader die Ordner-ID ("de"/"en") – das ist die Übersicht.
export const financeSlug = (e: FinancePage) => e.id.replace(/^(de|en)\/?/, '') || 'index';

export async function getFinancePages(lang: Lang): Promise<FinancePage[]> {
  const all = await getCollection('finance', ({ data }) => data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** URL-Pfad ohne Sprachpräfix: /kaufen-mieten, /kaufen-mieten/kauf, /kaufen-mieten/kauf/leasing. */
export function financePath(e: FinancePage, all: FinancePage[]): string {
  const slug = financeSlug(e);
  if (slug === 'index') return '/kaufen-mieten';
  const parts: string[] = [slug];
  let parent = e.data.parent;
  while (parent) {
    parts.unshift(parent);
    parent = all.find((p) => financeSlug(p) === parent)?.data.parent;
  }
  return `/kaufen-mieten/${parts.join('/')}`;
}

/** Kette von der Übersicht bis zur Seite (ohne die Seite selbst). */
export function financeAncestors(e: FinancePage, all: FinancePage[]): FinancePage[] {
  const chain: FinancePage[] = [];
  let parent = e.data.parent;
  while (parent) {
    const p = all.find((x) => financeSlug(x) === parent);
    if (!p) break;
    chain.unshift(p);
    parent = p.data.parent;
  }
  return chain;
}

/** Direkte Unterseiten. Seiten ohne parent hängen unter der Übersicht ("index"). */
export const financeChildren = (slug: string, all: FinancePage[]) =>
  all.filter((p) => financeSlug(p) !== 'index' && (p.data.parent ?? 'index') === slug);
