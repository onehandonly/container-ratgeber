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

  // --- Grundlagen ---
  'container-kaufen-oder-mieten': PHOTO('type-lagercontainer'),
  'container-anwendungsbeispiele': PHOTO('hero-home'),
  'container-mieten-ablauf': PHOTO('type-baucontainer'),
  'container-groessen-und-masse': '/img/container-sketch.webp',

  // --- Kaufberatung ---
  'gebrauchten-container-kaufen': PHOTO('type-seecontainer'),

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
  'container-transportieren': PHOTO('type-abrollcontainer'),
  'buerocontainer-einrichten': PHOTO('type-buerocontainer'),
  'lagercontainer-richtig-nutzen': PHOTO('type-lagercontainer'),
  'container-fuer-events-und-gastronomie': INSPO('gartenbuero'),

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
  'container-daemmen': INSPO('haus-gruendach'),

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
};

/** Foto zu einem Ratgeber-Slug (ohne Sprachpräfix). */
export function guideImage(slug: string): string {
  return MAP[slug] ?? FALLBACK;
}

/** Für Tests/Prüfskripte: welche Slugs sind hinterlegt? */
export const guideImageSlugs = Object.keys(MAP);
