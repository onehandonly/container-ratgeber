// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Produktions-Domain der Ratgeber-Seite. Wird u. a. für kanonische URLs,
// Open-Graph-Tags und die Sitemap verwendet.
export default defineConfig({
  site: 'https://container-ratgeber.de',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  // Zweisprachig: Deutsch (Standard, ohne Präfix) unter "/", Englisch unter "/en".
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Rechtsseiten und die 404 gehören nicht in die Sitemap.
      filter: (page) =>
        !/\/(impressum|datenschutz|404)\/?$/.test(page),
      // hreflang-Verknüpfung der deutschen und englischen Fassungen.
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
