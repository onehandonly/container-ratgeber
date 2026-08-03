/**
 * Zentrale Seitenkonfiguration.
 * Firmen-/Betreiberdaten, Navigation und Containertypen an einer Stelle,
 * damit Impressum, Footer, JSON-LD und Menüs konsistent bleiben.
 */

export const site = {
  name: 'Container-Ratgeber.de',
  domain: 'container-ratgeber.de',
  url: 'https://container-ratgeber.de',
  tagline: 'Unabhängig informieren & richtig entscheiden',
  description:
    'Der unabhängige Ratgeber rund um Container: Typen, Größen, Maße, Kosten, ' +
    'Kaufen oder Mieten, Baugenehmigung und Kaufkriterien – sachlich erklärt und übersichtlich aufbereitet.',
  // Betreiber / Impressum (vom Betreiber bestätigt).
  operator: {
    name: 'Thorsten Bammann',
    street: 'Auf dem Wümsch 4',
    zip: '27419',
    city: 'Sittensen',
    country: 'Deutschland',
    // E-Mail bewusst als Bausteine, um Adress-Harvesting zu erschweren.
    emailUser: 'kontakt',
    emailDomain: 'container-ratgeber.de',
    type: 'Privatperson',
  },
} as const;

export function operatorEmail(): string {
  return `${site.operator.emailUser}@${site.operator.emailDomain}`;
}

/** Container-Typen – Grundlage für Übersicht, Navigation und Verlinkung. */
export const containerTypes = [
  { slug: 'baucontainer', icon: 'bau',
    name: 'Baucontainer', name_en: 'Site containers',
    teaser: 'Robuste Container für die Baustelle – als Büro, Aufenthalts- oder Lagerraum.',
    teaser_en: 'Rugged containers for the construction site – as office, break room or storage.' },
  { slug: 'buerocontainer', icon: 'buero',
    name: 'Bürocontainer', name_en: 'Office containers',
    teaser: 'Vollwertige Arbeitsplätze mit Fenstern, Strom und Heizung – einzeln oder als Anlage.',
    teaser_en: 'Proper workplaces with windows, power and heating – single units or complexes.' },
  { slug: 'wohncontainer', icon: 'wohn',
    name: 'Wohncontainer', name_en: 'Living containers',
    teaser: 'Vom Wohnmodul bis zum Tiny House aus Container – Nutzung, Recht und Ausbau.',
    teaser_en: 'From housing modules to container tiny houses – use, law and fit-out.' },
  { slug: 'sanitaercontainer', icon: 'sanitaer',
    name: 'Sanitärcontainer', name_en: 'Sanitary containers',
    teaser: 'WC-, Dusch- und Waschräume für Baustellen, Events und temporäre Nutzung.',
    teaser_en: 'Toilet, shower and washroom units for sites, events and temporary use.' },
  { slug: 'lagercontainer', icon: 'lager',
    name: 'Lagercontainer', name_en: 'Storage containers',
    teaser: 'Abschließbarer, wetterfester Stauraum für Werkzeug, Material und Inventar.',
    teaser_en: 'Lockable, weatherproof storage for tools, materials and inventory.' },
  { slug: 'seecontainer', icon: 'see',
    name: 'Seecontainer', name_en: 'Shipping containers',
    teaser: '20- und 40-Fuß-ISO-Container: Maße, Typen und Einsatz an Land.',
    teaser_en: '20 ft and 40 ft ISO containers: dimensions, types and use on land.' },
  { slug: 'abrollcontainer', icon: 'abroll',
    name: 'Abroll- & Absetzcontainer', name_en: 'Roll-off & skip containers',
    teaser: 'Offene Mulden für Bauschutt, Sperrmüll und Grünabfall – Größen und Kosten.',
    teaser_en: 'Open skips for rubble, bulky waste and garden waste – sizes and costs.' },
  { slug: 'kuehlcontainer', icon: 'kuehl',
    name: 'Kühlcontainer', name_en: 'Refrigerated containers',
    teaser: 'Reefer-Container für temperaturgeführte Lagerung – Technik und Strombedarf.',
    teaser_en: 'Reefer containers for temperature-controlled storage – tech and power needs.' },
] as const;

export type ContainerType = (typeof containerTypes)[number];
export function typeName(t: ContainerType, lang: 'de' | 'en'): string {
  return lang === 'en' ? t.name_en : t.name;
}
export function typeTeaser(t: ContainerType, lang: 'de' | 'en'): string {
  return lang === 'en' ? t.teaser_en : t.teaser;
}

/** Hauptnavigation. */
export const mainNav = [
  { label: 'Container-Typen', href: '/container' },
  { label: 'Ratgeber', href: '/ratgeber' },
  { label: 'Größen & Maße', href: '/ratgeber/container-groessen-und-masse' },
  { label: 'Kosten', href: '/ratgeber/was-kostet-ein-container' },
  { label: 'Über uns', href: '/ueber-uns' },
] as const;

export const footerNav = {
  ratgeber: [
    { label: 'Alle Ratgeber', href: '/ratgeber' },
    { label: 'Kaufen oder mieten?', href: '/ratgeber/container-kaufen-oder-mieten' },
    { label: 'Größen & Maße', href: '/ratgeber/container-groessen-und-masse' },
    { label: 'Was kostet ein Container?', href: '/ratgeber/was-kostet-ein-container' },
    { label: 'Gebrauchtkauf-Checkliste', href: '/ratgeber/gebrauchten-container-kaufen' },
  ],
  typen: [
    { label: 'Baucontainer', href: '/container/baucontainer' },
    { label: 'Bürocontainer', href: '/container/buerocontainer' },
    { label: 'Wohncontainer', href: '/container/wohncontainer' },
    { label: 'Seecontainer', href: '/container/seecontainer' },
    { label: 'Alle Typen', href: '/container' },
  ],
  service: [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
} as const;
