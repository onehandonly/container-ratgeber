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

/** Gruppen, nach denen die Typ-Übersicht gegliedert ist. */
export type TypeGroup = 'see' | 'raum' | 'spezial' | 'entsorgung';
export const typeGroups: { id: TypeGroup; de: string; en: string; lead_de: string; lead_en: string }[] = [
  { id: 'see', de: 'See- und Lagercontainer', en: 'Shipping and storage containers',
    lead_de: 'Stahlcontainer nach ISO-Norm und ihre Bauformen – ungedämmt, extrem robust, stapelbar. Die erste Wahl für Lager, Transport und viele Umbauten.',
    lead_en: 'Steel containers to ISO standard and their variants – uninsulated, extremely robust, stackable. The first choice for storage, transport and many conversions.' },
  { id: 'raum', de: 'Raum- und Modulcontainer', en: 'Room and modular containers',
    lead_de: 'Gedämmte Container mit Fenstern, Elektrik und Heizung, gebaut für den Aufenthalt von Menschen – einzeln oder zu Anlagen gekoppelt.',
    lead_en: 'Insulated containers with windows, electrics and heating, built for people to spend time in – as single units or coupled into complexes.' },
  { id: 'spezial', de: 'Sonder- und Spezialcontainer', en: 'Special-purpose containers',
    lead_de: 'Container, die für eine bestimmte Aufgabe umgebaut sind: Verkauf und Events, Technik und Maschinen, Gefahrstoffe.',
    lead_en: 'Containers converted for one particular job: retail and events, technical equipment and machinery, hazardous substances.' },
  { id: 'entsorgung', de: 'Entsorgungscontainer', en: 'Waste containers',
    lead_de: 'Offene Mulden und Abrollbehälter für Bauschutt, Sperrmüll und Grünschnitt.',
    lead_en: 'Open skips and roll-off bins for rubble, bulky waste and green waste.' },
];

export interface ContainerTypeDef {
  slug: string;
  icon: string;
  name: string;
  name_en: string;
  teaser: string;
  teaser_en: string;
  group: TypeGroup;
  /** Übergeordneter Typ – macht die Seite zur Unterseite (Breadcrumb, Varianten-Liste). */
  parent?: string;
  /** Kopf- und Kartenbild. */
  photo: string;
  /** Auf der Startseite zeigen. */
  featured?: boolean;
}

const P = (n: string) => `/img/photos/${n}.webp`;
const I = (n: string) => `/img/inspiration/${n}.webp`;

/** Container-Typen – Grundlage für Übersicht, Navigation und Verlinkung. */
export const containerTypes: ContainerTypeDef[] = [
  // ---------------- See- und Lagercontainer ----------------
  { slug: 'seecontainer', icon: 'see', group: 'see', featured: true, photo: P('type-seecontainer'),
    name: 'Seecontainer', name_en: 'Shipping containers',
    teaser: '20- und 40-Fuß-ISO-Container: Maße, Typen und Einsatz an Land.',
    teaser_en: '20 ft and 40 ft ISO containers: dimensions, types and use on land.' },
  { slug: 'high-cube-container', icon: 'see', group: 'see', parent: 'seecontainer', photo: P('type-seecontainer'),
    name: 'High-Cube-Container', name_en: 'High cube containers',
    teaser: '30 Zentimeter mehr Höhe: die Standardbasis für Ausbau, Werkstatt und sperrige Güter.',
    teaser_en: '30 centimetres more height: the standard base for conversions, workshops and bulky goods.' },
  { slug: 'open-side-container', icon: 'lager', group: 'see', parent: 'seecontainer', photo: P('type-lagercontainer'),
    name: 'Open-Side-Container', name_en: 'Open side containers',
    teaser: 'Eine ganze Längsseite zum Öffnen – Zugriff auf jedes Regal ohne Umräumen.',
    teaser_en: 'A whole long side that opens – access to every shelf without shuffling stock.' },
  { slug: 'double-door-container', icon: 'lager', group: 'see', parent: 'seecontainer', photo: P('type-lagercontainer'),
    name: 'Double-Door-Container', name_en: 'Double door containers',
    teaser: 'Türen an beiden Stirnseiten: durchladen, Lager in zwei Hälften teilen, Tunnel bauen.',
    teaser_en: 'Doors at both ends: load through, split the store in two, build a tunnel.' },
  { slug: 'open-top-container', icon: 'see', group: 'see', parent: 'seecontainer', photo: P('type-seecontainer'),
    name: 'Open-Top-Container', name_en: 'Open top containers',
    teaser: 'Plane statt Stahldach: Beladung von oben per Kran für hohe und schwere Güter.',
    teaser_en: 'Tarpaulin instead of a steel roof: crane loading from above for tall and heavy goods.' },
  { slug: 'flat-rack-container', icon: 'see', group: 'see', parent: 'seecontainer', photo: P('type-seecontainer'),
    name: 'Flat-Rack-Container', name_en: 'Flat rack containers',
    teaser: 'Boden und Stirnwände, sonst nichts: für Maschinen, Fahrzeuge und Überbreiten.',
    teaser_en: 'Floor and end walls, nothing else: for machinery, vehicles and oversized loads.' },
  { slug: 'lagercontainer', icon: 'lager', group: 'see', featured: true, photo: P('type-lagercontainer'),
    name: 'Lagercontainer', name_en: 'Storage containers',
    teaser: 'Abschließbarer, wetterfester Stauraum für Werkzeug, Material und Inventar.',
    teaser_en: 'Lockable, weatherproof storage for tools, materials and inventory.' },
  { slug: 'mini-container', icon: 'lager', group: 'see', parent: 'lagercontainer', photo: I('gartenbuero'),
    name: 'Mini-Container (6–10 Fuß)', name_en: 'Mini containers (6–10 ft)',
    teaser: 'Kleine Stahlcontainer für Garten, Hof, Verein und enge Grundstücke.',
    teaser_en: 'Small steel containers for gardens, yards, clubs and tight plots.' },
  { slug: 'kuehlcontainer', icon: 'kuehl', group: 'see', featured: true, photo: P('type-kuehlcontainer'),
    name: 'Kühlcontainer', name_en: 'Refrigerated containers',
    teaser: 'Reefer-Container für temperaturgeführte Lagerung – Technik und Strombedarf.',
    teaser_en: 'Reefer containers for temperature-controlled storage – tech and power needs.' },

  // ---------------- Raum- und Modulcontainer ----------------
  { slug: 'baucontainer', icon: 'bau', group: 'raum', featured: true, photo: P('type-baucontainer'),
    name: 'Baucontainer', name_en: 'Site containers',
    teaser: 'Robuste Container für die Baustelle – als Büro, Aufenthalts- oder Lagerraum.',
    teaser_en: 'Rugged containers for the construction site – as office, break room or storage.' },
  { slug: 'buerocontainer', icon: 'buero', group: 'raum', featured: true, photo: P('type-buerocontainer'),
    name: 'Bürocontainer', name_en: 'Office containers',
    teaser: 'Vollwertige Arbeitsplätze mit Fenstern, Strom und Heizung – einzeln oder als Anlage.',
    teaser_en: 'Proper workplaces with windows, power and heating – single units or complexes.' },
  { slug: 'xl-container', icon: 'buero', group: 'raum', parent: 'buerocontainer', photo: P('type-buerocontainer'),
    name: 'XL-Container (3 m breit)', name_en: 'XL containers (3 m wide)',
    teaser: 'Gut 50 Zentimeter mehr Breite: Schreibtische gegenüber, Besprechungstisch, echte Räume.',
    teaser_en: 'Over half a metre more width: facing desks, a meeting table, real rooms.' },
  { slug: 'wohncontainer', icon: 'wohn', group: 'raum', featured: true, photo: P('type-wohncontainer'),
    name: 'Wohncontainer', name_en: 'Living containers',
    teaser: 'Vom Wohnmodul bis zum Tiny House aus Container – Nutzung, Recht und Ausbau.',
    teaser_en: 'From housing modules to container tiny houses – use, law and fit-out.' },
  { slug: 'sanitaercontainer', icon: 'sanitaer', group: 'raum', featured: true, photo: P('type-sanitaercontainer'),
    name: 'Sanitärcontainer', name_en: 'Sanitary containers',
    teaser: 'WC-, Dusch- und Waschräume für Baustellen, Events und temporäre Nutzung.',
    teaser_en: 'Toilet, shower and washroom units for sites, events and temporary use.' },
  { slug: 'umkleidecontainer', icon: 'sanitaer', group: 'raum', photo: P('type-sanitaercontainer'),
    name: 'Umkleidecontainer', name_en: 'Changing room containers',
    teaser: 'Spinde, Bänke, Trocknung und – wo nötig – Schwarz-Weiß-Trennung für Betrieb und Verein.',
    teaser_en: 'Lockers, benches, drying and – where needed – clean/dirty separation for firms and clubs.' },
  { slug: 'kantinencontainer', icon: 'bau', group: 'raum', photo: P('type-baucontainer'),
    name: 'Kantinen- und Pausencontainer', name_en: 'Canteen and break containers',
    teaser: 'Pausenräume und Interimskantinen aus Modulen – Fläche, Küche, Lüftung, Hygiene.',
    teaser_en: 'Break rooms and interim canteens made of modules – space, kitchen, ventilation, hygiene.' },
  { slug: 'schul-und-kitacontainer', icon: 'buero', group: 'raum', photo: I('haus-zwei-etagen'),
    name: 'Schul- und Kitacontainer', name_en: 'School and nursery containers',
    teaser: 'Klassenräume, Gruppenräume und Mensen auf Zeit – mit den Anforderungen an Brandschutz und Aufsicht.',
    teaser_en: 'Temporary classrooms, group rooms and canteens – with the fire safety and supervision requirements.' },
  { slug: 'pfoertnercontainer', icon: 'buero', group: 'raum', photo: P('type-buerocontainer'),
    name: 'Pförtner- und Wachcontainer', name_en: 'Gatehouse and security containers',
    teaser: 'Kleine Rundum-Sicht-Container für Werkstor, Parkplatz, Event-Einlass und Kasse.',
    teaser_en: 'Small all-round-view containers for factory gates, car parks, event entrances and ticket booths.' },

  // ---------------- Sonder- und Spezialcontainer ----------------
  { slug: 'eventcontainer', icon: 'container', group: 'spezial', photo: I('gartenbuero'),
    name: 'Verkaufs- und Eventcontainer', name_en: 'Retail and event containers',
    teaser: 'Container mit Verkaufsklappe, Theke oder Dachterrasse – für Gastronomie, Messe und Pop-up.',
    teaser_en: 'Containers with serving hatch, counter or roof terrace – for catering, trade fairs and pop-ups.' },
  { slug: 'technikcontainer', icon: 'container', group: 'spezial', photo: P('type-kuehlcontainer'),
    name: 'Technik- und Maschinencontainer', name_en: 'Technical and machinery containers',
    teaser: 'Einhausungen für Aggregate, Kompressoren, Server und Batteriespeicher – Lüftung, Schall, Brandschutz.',
    teaser_en: 'Enclosures for generators, compressors, servers and battery storage – ventilation, noise, fire safety.' },
  { slug: 'gefahrstoffcontainer', icon: 'permit', group: 'spezial', photo: P('type-lagercontainer'),
    name: 'Gefahrstoffcontainer', name_en: 'Hazardous materials containers',
    teaser: 'Lagerung von Chemikalien, Ölen und Lacken mit Auffangwanne, Lüftung und – je nach Stoff – Brandschutz.',
    teaser_en: 'Storage of chemicals, oils and paints with spill sump, ventilation and – depending on the substance – fire protection.' },

  // ---------------- Entsorgung ----------------
  { slug: 'abrollcontainer', icon: 'abroll', group: 'entsorgung', featured: true, photo: P('type-abrollcontainer'),
    name: 'Abroll- & Absetzcontainer', name_en: 'Roll-off & skip containers',
    teaser: 'Offene Mulden für Bauschutt, Sperrmüll und Grünabfall – Größen und Kosten.',
    teaser_en: 'Open skips for rubble, bulky waste and garden waste – sizes and costs.' },
];

export type ContainerType = ContainerTypeDef;
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
