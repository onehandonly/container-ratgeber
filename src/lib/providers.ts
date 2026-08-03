/**
 * Anbieter-Verzeichnis.
 *
 * Hier werden Container-Anbieter gepflegt. Die Liste ist bewusst als einfache
 * Datenstruktur angelegt, damit Einträge ohne Code-Kenntnisse ergänzt werden
 * können – siehe README, Abschnitt „Anbieter-Verzeichnis pflegen".
 *
 * WICHTIG (Google-Richtlinien):
 * Bezahlte Einträge müssen als solche gekennzeichnet werden und ihre Links
 * `rel="sponsored"` tragen. Das erledigt die Komponente automatisch, sobald
 * `sponsored: true` gesetzt ist. Ohne diese Kennzeichnung wertet Google eine
 * bezahlte Verlinkung als Linkkauf – das kann die gesamte Domain abwerten.
 */

export type ProviderService =
  | 'kauf'        // Verkauf von Containern
  | 'miete'       // Vermietung
  | 'modulbau'    // Raum-/Modulbau, Containeranlagen
  | 'entsorgung'  // Abroll-/Absetzcontainer, Entsorgung
  | 'transport';  // Transport / Anlieferung

export interface Provider {
  /** Firmenname, wie er angezeigt wird. */
  name: string;
  /** Vollständige URL inkl. https:// */
  url: string;
  /** Kurzbeschreibung in einem Satz (eigene Formulierung, keine Werbetexte). */
  description: string;
  /** Bundesland oder „bundesweit“. */
  region: string;
  /** Ort des Hauptsitzes (optional). */
  city?: string;
  /** Angebotene Leistungen. */
  services: ProviderService[];
  /** Angebotene Containertypen (Slugs aus containerTypes). */
  types?: string[];
  /** true = bezahlter Eintrag → wird gekennzeichnet und mit rel="sponsored" verlinkt. */
  sponsored?: boolean;
}

export const serviceLabels: Record<ProviderService, { de: string; en: string }> = {
  kauf: { de: 'Verkauf', en: 'Sales' },
  miete: { de: 'Vermietung', en: 'Rental' },
  modulbau: { de: 'Modulbau', en: 'Modular construction' },
  entsorgung: { de: 'Entsorgung', en: 'Waste disposal' },
  transport: { de: 'Transport', en: 'Transport' },
};

/**
 * Anbieterliste.
 *
 * Noch leer – Einträge werden redaktionell geprüft ergänzt. Jeder Eintrag
 * sollte vor der Aufnahme auf Existenz, Anschrift und Leistungsumfang geprüft
 * werden; ungeprüfte oder veraltete Angaben schaden der Glaubwürdigkeit.
 *
 * Beispiel für einen Eintrag:
 *
 *   {
 *     name: 'Musterfirma Container GmbH',
 *     url: 'https://www.beispiel.de',
 *     description: 'Verkauf und Vermietung von Lager- und Bürocontainern in Norddeutschland.',
 *     region: 'Niedersachsen',
 *     city: 'Hannover',
 *     services: ['kauf', 'miete'],
 *     types: ['lagercontainer', 'buerocontainer'],
 *   },
 */
export const providers: Provider[] = [];

/** Alle vorkommenden Regionen, alphabetisch – für den Filter. */
export function providerRegions(list: Provider[] = providers): string[] {
  return [...new Set(list.map((p) => p.region))].sort((a, b) => a.localeCompare(b, 'de'));
}

/** Sortierung: bezahlte Einträge zuerst, danach alphabetisch. */
export function sortProviders(list: Provider[] = providers): Provider[] {
  return [...list].sort((a, b) => {
    if (Boolean(a.sponsored) !== Boolean(b.sponsored)) return a.sponsored ? -1 : 1;
    return a.name.localeCompare(b.name, 'de');
  });
}
