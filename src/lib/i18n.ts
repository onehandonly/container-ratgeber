/**
 * Internationalisierung (Deutsch / Englisch).
 * Deutsch ist Standard und liegt unter „/", Englisch unter „/en".
 * Die URL-Segmente sind in beiden Sprachen identisch, damit der
 * Sprachumschalter zuverlässig auf die passende Seite zeigt.
 */
export const languages = { de: 'Deutsch', en: 'English' } as const;
export const defaultLang: Lang = 'de';
export type Lang = 'de' | 'en';

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : 'de';
}

/** Wandelt einen deutschen Wurzelpfad in den Pfad der Zielsprache um. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : '/' + path;
  if (lang === 'de') return clean;
  return '/en' + (clean === '/' ? '' : clean);
}

/** Gegenstück-Pfad für den Sprachumschalter (behält die aktuelle Seite bei). */
export function switchLangPath(url: URL, to: Lang): string {
  const p = url.pathname;
  const base = p.startsWith('/en') ? (p.replace(/^\/en/, '') || '/') : p;
  return to === 'de' ? base : '/en' + (base === '/' ? '' : base);
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui['de']): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui.de[key] ?? (key as string);
  };
}

export const ui = {
  de: {
    'lang.switch': 'English',
    'nav.types': 'Container-Typen',
    'nav.guide': 'Ratgeber',
    'nav.tiny': 'Tiny House',
    'nav.sizes': 'Größen & Maße',
    'nav.costs': 'Kosten',
    'nav.about': 'Über uns',
    'nav.cta': 'Ratgeber lesen',

    'hero.badge': 'Unabhängiger Container-Ratgeber',
    'hero.title.1': 'Container verstehen.',
    'hero.title.2': 'Sicher entscheiden.',
    'hero.lead': 'Typen, Größen, Maße und Preise – unabhängig erklärt und übersichtlich verglichen. Damit Sie den richtigen Container finden, ob kaufen oder mieten.',
    'hero.cta.primary': 'Ratgeber starten',
    'hero.cta.secondary': 'Container-Typen ansehen',
    'hero.stat.types': 'Container-Typen',
    'hero.stat.guides': 'Ratgeber-Artikel',
    'hero.stat.free': 'Kostenlos & werbefinanziert',

    'types.eyebrow': 'Überblick',
    'types.title': 'Alle Container-Typen auf einen Blick',
    'types.lead': 'Vom Baucontainer bis zum Seecontainer – welcher Typ passt zu Ihrem Vorhaben?',
    'types.all': 'Alle Typen ansehen',
    'type.more': 'Mehr erfahren',

    'topics.eyebrow': 'Beliebte Ratgeber',
    'topics.title': 'Die wichtigsten Fragen – klar beantwortet',
    'topics.all': 'Alle Ratgeber',

    'why.eyebrow': 'Warum Container-Ratgeber.de',
    'why.title': 'Orientierung statt Verkaufsdruck',
    'why.1.t': 'Unabhängig & sachlich',
    'why.1.d': 'Wir erklären Vor- und Nachteile neutral – ohne an einen einzelnen Anbieter gebunden zu sein.',
    'why.2.t': 'Übersichtlich aufbereitet',
    'why.2.d': 'Tabellen, Checklisten und Vergleiche bringen die entscheidenden Fakten schnell auf den Punkt.',
    'why.3.t': 'Praxisnah',
    'why.3.d': 'Von Maßen über Genehmigungen bis Kosten: Wissen, das bei der echten Entscheidung hilft.',

    'cta.title': 'Bereit für die richtige Wahl?',
    'cta.lead': 'Starten Sie mit den Grundlagen oder springen Sie direkt zu Ihrem Container-Typ.',
    'cta.button': 'Zum Ratgeber',

    'footer.about': 'Container-Ratgeber.de ist ein unabhängiges Informationsangebot rund um Container. Wir erklären Typen, Größen, Kosten und Kaufkriterien verständlich – damit Sie die passende Lösung finden.',
    'footer.disclaimer': 'Redaktionelle Inhalte, keine Rechts- oder Kaufberatung im Einzelfall. Angaben ohne Gewähr.',
    'footer.col.guide': 'Ratgeber',
    'footer.col.types': 'Container-Typen',
    'footer.col.service': 'Service',
    'footer.cookie': 'Cookie-Einstellungen',

    'meta.readingTime': 'Min. Lesezeit',
    'meta.updated': 'Aktualisiert',
    'toc.title': 'Inhalt',
    'article.back': 'Alle Ratgeber',
    'breadcrumb.home': 'Start',
  },
  en: {
    'lang.switch': 'Deutsch',
    'nav.types': 'Container types',
    'nav.guide': 'Guides',
    'nav.tiny': 'Tiny house',
    'nav.sizes': 'Sizes & dimensions',
    'nav.costs': 'Costs',
    'nav.about': 'About',
    'nav.cta': 'Read the guide',

    'hero.badge': 'The independent container guide',
    'hero.title.1': 'Understand containers.',
    'hero.title.2': 'Decide with confidence.',
    'hero.lead': 'Types, sizes, dimensions and prices – explained independently and compared clearly. So you find the right container, whether buying or renting.',
    'hero.cta.primary': 'Start the guide',
    'hero.cta.secondary': 'Browse container types',
    'hero.stat.types': 'Container types',
    'hero.stat.guides': 'Guide articles',
    'hero.stat.free': 'Free & ad-supported',

    'types.eyebrow': 'Overview',
    'types.title': 'Every container type at a glance',
    'types.lead': 'From site containers to shipping containers – which type fits your project?',
    'types.all': 'View all types',
    'type.more': 'Learn more',

    'topics.eyebrow': 'Popular guides',
    'topics.title': 'The key questions – answered clearly',
    'topics.all': 'All guides',

    'why.eyebrow': 'Why Container-Ratgeber.de',
    'why.title': 'Guidance, not sales pressure',
    'why.1.t': 'Independent & factual',
    'why.1.d': 'We explain pros and cons neutrally – without being tied to any single supplier.',
    'why.2.t': 'Clearly structured',
    'why.2.d': 'Tables, checklists and comparisons get the decisive facts across fast.',
    'why.3.t': 'Practical',
    'why.3.d': 'From dimensions to permits to costs: knowledge that helps with the real decision.',

    'cta.title': 'Ready to make the right choice?',
    'cta.lead': 'Start with the basics or jump straight to your container type.',
    'cta.button': 'Go to the guide',

    'footer.about': 'Container-Ratgeber.de is an independent information resource about containers. We explain types, sizes, costs and buying criteria clearly – so you find the right solution.',
    'footer.disclaimer': 'Editorial content, not individual legal or purchasing advice. All information without guarantee.',
    'footer.col.guide': 'Guides',
    'footer.col.types': 'Container types',
    'footer.col.service': 'Service',
    'footer.cookie': 'Cookie settings',

    'meta.readingTime': 'min read',
    'meta.updated': 'Updated',
    'toc.title': 'Contents',
    'article.back': 'All guides',
    'breadcrumb.home': 'Home',
  },
} as const;
