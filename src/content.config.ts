import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Ratgeber-Artikel liegen als Markdown unter src/content/guides/.
// So lassen sich neue Artikel anlegen, ohne Code anzufassen.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    // Kurzbeschreibung für Teaser, Meta-Description und Kategorieseiten.
    description: z.string(),
    // Sprache des Artikels.
    lang: z.enum(['de', 'en']).default('de'),
    // Thematische Einordnung (z. B. "Grundlagen", "Kaufberatung", "Containertypen").
    category: z.string(),
    // Optionales Icon-Kürzel für die Illustration (siehe src/lib/icons).
    icon: z.string().default('container'),
    // Lesezeit in Minuten (grobe Schätzung, redaktionell gepflegt).
    readingTime: z.number().default(6),
    // Veröffentlichungs- und Aktualisierungsdatum.
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // Redaktionelles Fazit / Kernaussage (wird oben hervorgehoben).
    lead: z.string().optional(),
    // Reihenfolge auf Übersichtsseiten (kleiner = weiter oben).
    order: z.number().default(100),
    // Aus der Sitemap/Navigation ausblenden, aber weiterhin erreichbar.
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
