/**
 * Rechner und Werkzeuge der Seite. Wird für die Übersicht /rechner,
 * die Werkzeug-Karten in der Ratgeber-Übersicht und Querverweise genutzt.
 */
import type { Lang } from './i18n';

export interface ToolDef {
  slug: string;
  /** Ratgeber-Kategorien (DE), in denen die Werkzeug-Karte erscheint. */
  categories: string[];
  icon: 'calc' | 'box' | 'truck' | 'check' | 'scale';
  de: { name: string; badge: string; teaser: string };
  en: { name: string; badge: string; teaser: string };
}

export const tools: ToolDef[] = [
  {
    slug: 'kaufen-oder-mieten',
    categories: ['Kosten'],
    icon: 'scale',
    de: { name: 'Kaufen oder mieten?', badge: 'Rechner', teaser: 'Ab wie vielen Monaten sich der Kauf lohnt – mit Lieferung, Rückgabe, Wartung und Wiederverkauf.' },
    en: { name: 'Buy or rent?', badge: 'Calculator', teaser: 'After how many months buying pays off – including delivery, return, upkeep and resale.' },
  },
  {
    slug: 'leasing',
    categories: ['Kosten'],
    icon: 'calc',
    de: { name: 'Leasingrechner', badge: 'Rechner', teaser: 'Monatsrate aus Kaufpreis, Laufzeit, effektivem Jahreszins und Restwert – im Vergleich zu Mietkauf, Barkauf und Miete.' },
    en: { name: 'Leasing calculator', badge: 'Calculator', teaser: 'Monthly instalment from price, term, effective annual rate and residual value – compared with hire purchase, cash purchase and rental.' },
  },
  {
    slug: 'transportkosten',
    categories: ['Kosten'],
    icon: 'truck',
    de: { name: 'Transportkosten-Schätzer', badge: 'Rechner', teaser: 'Kostenspanne für Anlieferung und Abholung nach Containergröße, Entfernung und Fahrzeug.' },
    en: { name: 'Transport cost estimator', badge: 'Calculator', teaser: 'Cost range for delivery and collection by container size, distance and vehicle.' },
  },
  {
    slug: 'container-volumen',
    categories: ['Grundlagen'],
    icon: 'box',
    de: { name: 'Was passt in den Container?', badge: 'Rechner', teaser: 'Paletten, Kartons oder Fahrräder je Containergröße – mit Stapelhöhe, Türmaß und Zuladung.' },
    en: { name: 'What fits in the container?', badge: 'Calculator', teaser: 'Pallets, boxes or bicycles per container size – with stacking height, door size and payload.' },
  },
  {
    slug: 'besichtigung-checkliste',
    categories: ['Kaufberatung'],
    icon: 'check',
    de: { name: 'Besichtigungs-Checkliste', badge: 'Checkliste', teaser: 'Ampel-Protokoll zum Abhaken vor Ort – mit Auswertung, Notizen und Druckansicht.' },
    en: { name: 'Inspection checklist', badge: 'Checklist', teaser: 'Traffic-light record to tick off on site – with assessment, notes and print view.' },
  },
];

export const toolText = (tool: ToolDef, lang: Lang) => (lang === 'en' ? tool.en : tool.de);
export const toolsForCategory = (category: string) =>
  tools.filter((t) => t.categories.includes(category) || t.categories.includes(categoryDe(category)));

/** EN-Kategorienamen auf die DE-Schlüssel abbilden. */
const categoryMap: Record<string, string> = {
  Costs: 'Kosten', Basics: 'Grundlagen', 'Buying advice': 'Kaufberatung',
};
const categoryDe = (c: string) => categoryMap[c] ?? c;
