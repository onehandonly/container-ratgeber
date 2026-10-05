/**
 * Zuordnung Ratgeber-Artikel -> Foto.
 *
 * Wir haben deutlich mehr Artikel als eigene Fotos, deshalb werden Motive
 * mehrfach verwendet. Die Zuordnung ist bewusst per Hand gepflegt: Innerhalb
 * einer Kategorie wechseln die Motive, damit die Übersicht nicht monoton wirkt.
 *
 * Neues Bild aufnehmen: Datei nach public/img/photos/ oder public/img/inspiration/
 * legen, hier eintragen – Karten und Artikelkopf ziehen es automatisch.
 */

const PHOTO = (name: string) => `/img/photos/${name}.webp`;
const INSPO = (name: string) => `/img/inspiration/${name}.webp`;

/** Fällt nur, wenn ein Slug hier fehlt (dann greift zusätzlich der Alt-Fallback). */
const FALLBACK = PHOTO('hero-home');

const MAP: Record<string, string> = {
  // --- Containertypen: jeweils das eigene Typfoto ---
  'baucontainer-ratgeber': PHOTO('type-baucontainer'),
  'buerocontainer-ratgeber': PHOTO('type-buerocontainer'),
  'lagercontainer-ratgeber': PHOTO('type-lagercontainer'),
  'sanitaercontainer-ratgeber': PHOTO('type-sanitaercontainer'),
  'wohncontainer-ratgeber': PHOTO('type-wohncontainer'),
  'seecontainer-typen': PHOTO('type-seecontainer'),
  'kuehlcontainer-ratgeber': PHOTO('type-kuehlcontainer'),
  'abrollcontainer-ratgeber': PHOTO('type-abrollcontainer'),
  'kuehlcontainer-betrieb-stromkosten': PHOTO('type-kuehlcontainer'),

  // --- Grundlagen ---
  'container-kaufen-oder-mieten': PHOTO('type-lagercontainer'),
  'container-anwendungsbeispiele': PHOTO('hero-home'),
  'container-mieten-ablauf': PHOTO('type-baucontainer'),
  'container-groessen-und-masse': '/img/container-sketch.webp',
  'container-nummer-csc-plakette': PHOTO('type-seecontainer'),
  'geschichte-des-containers': PHOTO('hero-home'),
  'container-glossar-fachbegriffe': PHOTO('type-buerocontainer'),
  'container-stapeln-und-koppeln': PHOTO('type-high-cube-container'),
  'modulbau-fertighaus-massivbau-vergleich': INSPO('haus-zwei-etagen'),

  // --- Kaufberatung ---
  'gebrauchten-container-kaufen': PHOTO('type-seecontainer'),
  'container-neu-oder-gebraucht': PHOTO('type-lagercontainer'),
  'fake-containerhaendler-vorkasse-betrug': PHOTO('type-high-cube-container'),
  'buerocontainer-qualitaet-bausatz': PHOTO('type-xl-container'),
  'container-kaufberatung-haeufige-fehler': PHOTO('hero-home'),
  'container-gebraucht-verkaufen': PHOTO('type-double-door-container'),
  'container-besichtigung-pruefprotokoll': PHOTO('type-open-side-container'),
  'container-sonderanfertigung': PHOTO('type-xl-container'),

  // --- Kosten ---
  'was-kostet-ein-container': PHOTO('hero-home'),
  'container-mietpreise-kalkulation': PHOTO('type-baucontainer'),
  'container-transport-lieferkosten': PHOTO('type-abrollcontainer'),
  'container-ausbaukosten-gewerke': INSPO('innen-hell'),
  'container-betriebskosten-wertverlust': PHOTO('type-seecontainer'),
  'container-angebote-vergleichen': PHOTO('type-lagercontainer'),

  // --- Praxis ---
  'container-pflege-und-rostschutz': PHOTO('type-seecontainer'),
  'container-sichern-diebstahlschutz': PHOTO('type-lagercontainer'),
  'container-im-winter': INSPO('haus-wald'),
  'container-transportieren': PHOTO('type-abrollcontainer'),
  'container-richtig-beladen': PHOTO('type-open-side-container'),
  'container-richtig-anheben': PHOTO('type-open-top-container'),
  'buerocontainer-einrichten': PHOTO('type-buerocontainer'),
  'lagercontainer-richtig-nutzen': PHOTO('type-lagercontainer'),
  'container-fuer-events-und-gastronomie': INSPO('gartenbuero'),
  'container-werkstatt-garage': PHOTO('type-high-cube-container'),
  'container-firmengelaende-planen': PHOTO('type-kantinencontainer'),
  'container-als-fahrradgarage': PHOTO('type-double-door-container'),
  'container-landwirtschaft': PHOTO('type-open-top-container'),

  // --- Recht ---
  'container-baugenehmigung': INSPO('haus-wald'),
  'container-nachbarrecht-grenzabstand': PHOTO('type-wohncontainer'),
  'container-bebauungsplan-aussenbereich': INSPO('haus-see'),
  'container-kaufvertrag-gewaehrleistung': PHOTO('type-seecontainer'),
  'container-mietvertrag-recht': PHOTO('type-baucontainer'),
  'container-versichern': PHOTO('type-lagercontainer'),
  'container-arbeitsschutz-baustelle': PHOTO('type-sanitaercontainer'),
  'container-oeffentlicher-grund-sondernutzung': PHOTO('type-abrollcontainer'),
  'container-bauantrag-nutzungsaenderung': PHOTO('type-buerocontainer'),
  'container-brandschutz-vorschriften': PHOTO('type-baucontainer'),
  'container-geg-energierecht': INSPO('haus-gruendach'),
  'container-steuer-abschreibung': PHOTO('hero-home'),

  // --- Technik ---
  'container-fundament': INSPO('haus-zwei-etagen'),
  'spruehschaum-daemmung-container': INSPO('innen-hell'),
  'waermebruecken-container': PHOTO('type-wohncontainer'),
  'container-belueftung': PHOTO('type-lagercontainer'),
  'photovoltaik-auf-dem-container': INSPO('haus-gruendach'),
  'container-daemmen': INSPO('haus-gruendach'),
  'container-stromanschluss': PHOTO('type-baucontainer'),
  'container-wasseranschluss-abwasser': PHOTO('type-sanitaercontainer'),
  'container-elektroplanung-innenausbau': PHOTO('type-technikcontainer'),
  'container-boden-sanieren-austauschen': PHOTO('type-open-side-container'),
  'container-dach-abdichten-dachlast': PHOTO('type-seecontainer'),

  // --- Tiny House ---
  'containerhaus-bauen-oder-kaufen': INSPO('haus-zwei-etagen'),
  'containerhaus-beispiele-inspiration': INSPO('haus-see'),
  'tiny-house-aus-container': INSPO('haus-wald'),
  'container-tiny-house-kosten': INSPO('haus-gruendach'),
  'container-tiny-house-grundrisse': INSPO('innen-hell'),
  'tiny-house-stellplatz-und-recht': INSPO('gartenbuero'),
  'autarkes-wohnen-im-container': PHOTO('type-wohncontainer'),

  // --- Wohnen ---
  'wohncontainer-ausbauen': INSPO('innen-hell'),
  'container-als-gartenhaus': INSPO('gartenbuero'),
  'container-fenster-tueren-nachruesten': PHOTO('type-wohncontainer'),
  'container-laermschutz-akustik': PHOTO('type-buerocontainer'),
  'container-ferienunterkunft-vermieten': INSPO('haus-see'),
};

/** Foto zu einem Ratgeber-Slug (ohne Sprachpräfix). */
export function guideImage(slug: string): string {
  return MAP[slug] ?? FALLBACK;
}

/** Für Tests/Prüfskripte: welche Slugs sind hinterlegt? */
export const guideImageSlugs = Object.keys(MAP);
