// Ergänzende Inhalte (Maße, Ausstattung, Kosten, Tipps, FAQ) für die ursprünglichen acht Typen.
import type { TypeDetail } from '../typeDetails';

export const typeExtras: Record<string, { de: Partial<TypeDetail>; en: Partial<TypeDetail> }> = {
  "baucontainer": {
    "de": {
      "sizes": {
        "head": [
          "Modul",
          "Außen ca. L × B",
          "Nutzfläche ca.",
          "Typische Belegung"
        ],
        "rows": [
          [
            "10 Fuß",
            "3,00 × 2,44 m",
            "6,2 m²",
            "Einzelbüro, Magazin"
          ],
          [
            "16 Fuß",
            "4,88 × 2,44 m",
            "10,4 m²",
            "Aufenthalt für kleine Kolonne"
          ],
          [
            "20 Fuß",
            "6,06 × 2,44 m",
            "13,0 m²",
            "Mannschaftsraum, Bauleitung"
          ],
          [
            "20 Fuß XL",
            "6,06 × 3,00 m",
            "16,3 m²",
            "Besprechung, Großraumbüro"
          ]
        ],
        "note": "ca.-Werte, herstellerabhängig. Innenhöhe meist rund 2,30–2,40 m."
      },
      "equipment": [
        "Gedämmte Sandwichwände und Dach",
        "Fenster mit Rollladen oder Gitter",
        "Elektroverteilung mit CEE-Einspeisung und FI-Schutzschalter",
        "Elektroheizung oder Klimagerät",
        "Strapazierfähiger PVC-Boden",
        "Kranösen an den Ecken, Staplertaschen",
        "Optional: Teeküche, WC-Abteil, Trennwand, Alarmanlage"
      ],
      "costs": [
        {
          "label": "Miete 20 Fuß Mannschaftsraum",
          "value": "ca. 130 – 260 € / Monat"
        },
        {
          "label": "Kauf gebraucht 20 Fuß",
          "value": "ca. 3.500 – 8.000 €"
        },
        {
          "label": "Transport",
          "value": "meist separat, je Fahrt ca. 200 – 800 € je nach Kran"
        }
      ],
      "tips": [
        "Für Winterbaustellen auf Dämmstandard und Heizleistung achten – einfache Ausführungen werden schnell kalt.",
        "Übergabeprotokoll mit Fotos machen; Schäden am Boden und an Fenstern werden bei Rückgabe sonst Ihnen angerechnet.",
        "Stellfläche vorbereiten: eben, tragfähig, frei von Leitungen, mit Zufahrt für den Lkw.",
        "Bei mehreren Modulen gleich eine Kopplung planen, statt Einzelcontainer nebeneinander zu stellen.",
        "Für die Dauer der Baumaßnahme sind Baustellencontainer in vielen Bundesländern verfahrensfrei – danach nicht mehr."
      ],
      "faq": [
        {
          "q": "Wie schnell ist ein Baucontainer einsatzbereit?",
          "a": "Meist am Tag der Anlieferung. Nach dem Absetzen wird er ausgerichtet und an den Baustrom angeschlossen; bei gekoppelten Anlagen dauert die Montage etwas länger."
        },
        {
          "q": "Brauche ich für einen Baucontainer eine Genehmigung?",
          "a": "Solange er der Baustelleneinrichtung dient, ist er in vielen Bundesländern verfahrensfrei. Steht er danach weiter oder auf öffentlichem Grund, gelten andere Regeln."
        }
      ]
    },
    "en": {
      "sizes": {
        "head": [
          "Module",
          "External approx. L × W",
          "Floor area approx.",
          "Typical use"
        ],
        "rows": [
          [
            "10 ft",
            "3.00 × 2.44 m",
            "6.2 m²",
            "single office, store"
          ],
          [
            "16 ft",
            "4.88 × 2.44 m",
            "10.4 m²",
            "break room for a small crew"
          ],
          [
            "20 ft",
            "6.06 × 2.44 m",
            "13.0 m²",
            "crew room, site management"
          ],
          [
            "20 ft XL",
            "6.06 × 3.00 m",
            "16.3 m²",
            "meetings, open-plan office"
          ]
        ],
        "note": "Approximate values, manufacturer-dependent. Internal height usually around 2.30–2.40 m."
      },
      "equipment": [
        "Insulated sandwich walls and roof",
        "Windows with shutters or grilles",
        "Electrical distribution with CEE inlet and RCD",
        "Electric heater or air conditioner",
        "Hard-wearing PVC floor",
        "Lifting eyes at the corners, forklift pockets",
        "Optional: kitchenette, WC cubicle, partition, alarm system"
      ],
      "costs": [
        {
          "label": "Hire 20 ft crew room",
          "value": "approx. €130 – 260 / month"
        },
        {
          "label": "Purchase used 20 ft",
          "value": "approx. €3,500 – 8,000"
        },
        {
          "label": "Transport",
          "value": "usually separate, per trip approx. €200 – 800 depending on crane"
        }
      ],
      "tips": [
        "For winter sites, check insulation standard and heating output – basic versions get cold quickly.",
        "Make a handover record with photos; otherwise damage to floor and windows will be charged to you on return.",
        "Prepare the site: level, load-bearing, free of buried services, with lorry access.",
        "For several modules, plan a coupled complex rather than placing single containers side by side.",
        "For the duration of the works, site containers are procedure-free in many German states – afterwards they are not."
      ],
      "faq": [
        {
          "q": "How quickly is a site container ready?",
          "a": "Usually on the day of delivery. Once set down it is levelled and connected to site power; coupled complexes take a little longer to assemble."
        },
        {
          "q": "Do I need a permit for a site container?",
          "a": "While it serves the site set-up, it is procedure-free in many German states. If it stays afterwards or stands on public land, different rules apply."
        }
      ]
    }
  },
  "buerocontainer": {
    "de": {
      "sizes": {
        "head": [
          "Größe",
          "Außen ca. L × B × H",
          "Nutzfläche ca.",
          "Arbeitsplätze ca."
        ],
        "rows": [
          [
            "10 Fuß",
            "3,00 × 2,44 × 2,60 m",
            "6,2 m²",
            "1"
          ],
          [
            "15/16 Fuß",
            "4,55–4,88 × 2,44 × 2,60 m",
            "9,7–10,4 m²",
            "1–2"
          ],
          [
            "20 Fuß",
            "6,06 × 2,44 × 2,60 m",
            "13,0 m²",
            "2"
          ],
          [
            "25 Fuß",
            "7,60 × 2,44 × 2,60 m",
            "16,5 m²",
            "2–3"
          ],
          [
            "30 Fuß",
            "9,15 × 2,44 × 2,60 m",
            "20,0 m²",
            "3"
          ],
          [
            "20 Fuß XL",
            "6,06 × 3,00 × 2,60 m",
            "16,3 m²",
            "2–4, gegenüber"
          ]
        ],
        "note": "ca.-Werte. Die Zahl der Arbeitsplätze ist ein Praxiswert bei einreihiger Möblierung; die Arbeitsstättenregeln verlangen ausreichende Bewegungsflächen je Arbeitsplatz."
      },
      "equipment": [
        "Fenster mit Rollladen, Gitter oder Sonnenschutz",
        "Elektroinstallation mit ausreichend Steckdosen und Netzwerkdosen",
        "Klimagerät mit Heizfunktion statt reiner Elektroheizung",
        "Beleuchtung mit ausreichender Beleuchtungsstärke für Bildschirmarbeit",
        "Teppich- oder Vinylboden",
        "Optional: Teeküche, WC, Besprechungsbereich, Alarmanlage"
      ],
      "costs": [
        {
          "label": "Kauf gebraucht (Einzelmodul)",
          "value": "ca. 3.500 – 8.000 €"
        },
        {
          "label": "Kauf neu (Einzelmodul)",
          "value": "ca. 8.000 – 12.000 €"
        },
        {
          "label": "Miete",
          "value": "ca. 80 – 250 € / Monat je nach Ausstattung"
        }
      ],
      "tips": [
        "Für Daueraufstellung ein Klimagerät mit Heizfunktion wählen – im Sommer ist die Hitze das größere Problem als der Winter.",
        "Fenster nicht nur nach Süden ausrichten; außenliegender Sonnenschutz wirkt deutlich besser als Innenjalousien.",
        "Mehr Steckdosen und Netzwerk einplanen, als Sie heute brauchen – nachträglich wird es teuer.",
        "Bei mehr als zwei Personen dauerhaft über ein XL-Modul nachdenken.",
        "Steht der Container dauerhaft, sind Baugenehmigung und energetische Anforderungen zu prüfen."
      ],
      "faq": [
        {
          "q": "Wie viele Arbeitsplätze passen in einen 20-Fuß-Bürocontainer?",
          "a": "Bei einreihiger Möblierung entlang einer Wand praktisch zwei. Wer mehr Plätze oder Schreibtische gegenüber braucht, fährt mit einem XL-Container mit drei Metern Breite besser."
        },
        {
          "q": "Ist ein Bürocontainer im Sommer zu heiß?",
          "a": "Ohne Sonnenschutz und Klimagerät häufig ja. Mit guter Dämmung, außenliegendem Sonnenschutz und Klimagerät lässt sich ein angenehmes Raumklima erreichen."
        }
      ]
    },
    "en": {
      "sizes": {
        "head": [
          "Size",
          "External approx. L × W × H",
          "Floor area approx.",
          "Workplaces approx."
        ],
        "rows": [
          [
            "10 ft",
            "3.00 × 2.44 × 2.60 m",
            "6.2 m²",
            "1"
          ],
          [
            "15/16 ft",
            "4.55–4.88 × 2.44 × 2.60 m",
            "9.7–10.4 m²",
            "1–2"
          ],
          [
            "20 ft",
            "6.06 × 2.44 × 2.60 m",
            "13.0 m²",
            "2"
          ],
          [
            "25 ft",
            "7.60 × 2.44 × 2.60 m",
            "16.5 m²",
            "2–3"
          ],
          [
            "30 ft",
            "9.15 × 2.44 × 2.60 m",
            "20.0 m²",
            "3"
          ],
          [
            "20 ft XL",
            "6.06 × 3.00 × 2.60 m",
            "16.3 m²",
            "2–4, facing"
          ]
        ],
        "note": "Approximate values. Workplace numbers are practical values with single-row furniture; German workplace rules require adequate circulation space per workplace."
      },
      "equipment": [
        "Windows with shutters, grilles or sun shading",
        "Electrical installation with enough power and network sockets",
        "Air conditioner with heating mode rather than electric heating only",
        "Lighting with adequate illuminance for screen work",
        "Carpet or vinyl floor",
        "Optional: kitchenette, WC, meeting area, alarm system"
      ],
      "costs": [
        {
          "label": "Purchase used (single module)",
          "value": "approx. €3,500 – 8,000"
        },
        {
          "label": "Purchase new (single module)",
          "value": "approx. €8,000 – 12,000"
        },
        {
          "label": "Hire",
          "value": "approx. €80 – 250 / month depending on spec"
        }
      ],
      "tips": [
        "For permanent use choose an air conditioner with heating mode – in summer the heat is a bigger problem than winter.",
        "Do not orient all windows south; external shading works far better than internal blinds.",
        "Plan more sockets and network points than you need today – retrofitting is expensive.",
        "For more than two people permanently, consider an XL module.",
        "If the container stays permanently, check planning permission and energy requirements."
      ],
      "faq": [
        {
          "q": "How many workplaces fit in a 20 ft office container?",
          "a": "With single-row furniture along one wall, practically two. If you need more seats or facing desks, an XL container three metres wide is the better choice."
        },
        {
          "q": "Does an office container get too hot in summer?",
          "a": "Often yes without shading and air conditioning. With good insulation, external shading and an air conditioner a comfortable indoor climate is achievable."
        }
      ]
    }
  },
  "wohncontainer": {
    "de": {
      "sizes": {
        "head": [
          "Grundlage",
          "Nutzfläche ca.",
          "Typische Aufteilung",
          "Eignung"
        ],
        "rows": [
          [
            "20 Fuß Raumcontainer",
            "13 m²",
            "Wohn-/Schlafraum, Nasszelle",
            "Monteurzimmer, Gästezimmer"
          ],
          [
            "40 Fuß High Cube (Ausbau)",
            "ca. 25–26 m²",
            "Wohnküche, Bad, Schlafnische",
            "Tiny House für 1–2 Personen"
          ],
          [
            "2 × 40 Fuß HC gekoppelt",
            "ca. 50–55 m²",
            "Wohnen, Küche, Bad, 1–2 Schlafräume",
            "Wohnhaus für kleine Familie"
          ],
          [
            "Modulanlage",
            "beliebig",
            "Zimmer mit Flur und Gemeinschaftsräumen",
            "Wohnanlage für Beschäftigte"
          ]
        ],
        "note": "Nutzflächen nach Ausbau als grobe Orientierung; die tatsächliche Fläche hängt von Dämmstärke und Grundriss ab."
      },
      "equipment": [
        "Winterfeste Dämmung von Boden, Wänden und Dach",
        "Fenster mit guter Wärmedämmung, Sonnenschutz",
        "Heizung, bevorzugt Wärmepumpe oder Klimagerät mit Heizfunktion",
        "Lüftungskonzept gegen Kondensat und Schimmel",
        "Nasszelle mit WC, Dusche, Waschbecken",
        "Küchenzeile, Rauchwarnmelder"
      ],
      "costs": [
        {
          "label": "Miete Wohnmodul",
          "value": "ca. 250 – 600 € / Monat"
        },
        {
          "label": "Ausbau 40 Fuß zum Tiny House",
          "value": "siehe Ratgeber Tiny-House-Kosten"
        },
        {
          "label": "Erschließung",
          "value": "Wasser, Abwasser, Strom oft der größte Einzelposten"
        }
      ],
      "tips": [
        "Genehmigung vor dem Kauf klären: Dauerhaftes Wohnen ist fast immer genehmigungspflichtig.",
        "Mit einem High Cube planen, sonst fehlt nach der Dämmung die Stehhöhe.",
        "Wärmebrücken und Lüftung ernst nehmen – sie entscheiden über Schimmel oder gesundes Raumklima.",
        "Erschließungskosten vorab beziffern lassen; sie übersteigen oft den Containerpreis.",
        "Für Monteurunterkünfte Mietmodule mit Sanitär vergleichen, statt selbst auszubauen."
      ],
      "faq": [
        {
          "q": "Darf man dauerhaft in einem Container wohnen?",
          "a": "Ja, wenn der Container als Wohngebäude genehmigt ist und die Anforderungen an Brandschutz, Wärmeschutz, Belichtung und Erschließung erfüllt. Ohne Genehmigung ist dauerhaftes Wohnen nicht zulässig."
        },
        {
          "q": "Ist ein Wohncontainer im Winter warm genug?",
          "a": "Mit ausreichender Dämmung, guter Heizung und einem Konzept gegen Wärmebrücken ja. Ein einfacher Baucontainer ist dafür nicht ausgelegt."
        }
      ]
    },
    "en": {
      "sizes": {
        "head": [
          "Basis",
          "Floor area approx.",
          "Typical layout",
          "Suitable for"
        ],
        "rows": [
          [
            "20 ft room container",
            "13 m²",
            "living/sleeping room, wet cell",
            "worker room, guest room"
          ],
          [
            "40 ft high cube (conversion)",
            "approx. 25–26 m²",
            "kitchen-living, bathroom, sleeping nook",
            "tiny house for 1–2 people"
          ],
          [
            "2 × 40 ft HC coupled",
            "approx. 50–55 m²",
            "living, kitchen, bathroom, 1–2 bedrooms",
            "home for a small family"
          ],
          [
            "Modular complex",
            "any",
            "rooms with corridor and shared spaces",
            "staff accommodation"
          ]
        ],
        "note": "Floor areas after fit-out as rough orientation; actual area depends on insulation thickness and layout."
      },
      "equipment": [
        "Winter-proof insulation of floor, walls and roof",
        "Well-insulated windows, sun shading",
        "Heating, preferably heat pump or air conditioner with heating mode",
        "Ventilation concept against condensation and mould",
        "Wet cell with WC, shower, basin",
        "Kitchenette, smoke alarms"
      ],
      "costs": [
        {
          "label": "Hire living module",
          "value": "approx. €250 – 600 / month"
        },
        {
          "label": "Converting a 40 ft into a tiny house",
          "value": "see the tiny house costs guide"
        },
        {
          "label": "Servicing",
          "value": "water, sewage, power often the largest single item"
        }
      ],
      "tips": [
        "Clarify permission before buying: permanent living almost always requires a permit.",
        "Plan with a high cube, otherwise headroom is missing after insulation.",
        "Take thermal bridges and ventilation seriously – they decide between mould and a healthy indoor climate.",
        "Get servicing costs quantified in advance; they often exceed the container price.",
        "For worker accommodation, compare hire modules with sanitary fittings rather than converting yourself."
      ],
      "faq": [
        {
          "q": "Can you live in a container permanently?",
          "a": "Yes, if the container is approved as a residential building and meets the requirements for fire safety, thermal insulation, daylight and servicing. Without approval permanent living is not permitted."
        },
        {
          "q": "Is a living container warm enough in winter?",
          "a": "With adequate insulation, good heating and a strategy against thermal bridges, yes. A basic site container is not designed for it."
        }
      ]
    }
  },
  "sanitaercontainer": {
    "de": {
      "sizes": {
        "head": [
          "Variante",
          "Größe (Beispiel)",
          "Ausstattung (Beispiel)",
          "Einsatz"
        ],
        "rows": [
          [
            "WC-Container klein",
            "8–10 Fuß",
            "1–2 WC, Waschbecken",
            "kleine Baustelle, Verein"
          ],
          [
            "WC-Container getrennt",
            "20 Fuß",
            "Damen/Herren, 2–3 WC plus Urinale",
            "Baustelle, Event"
          ],
          [
            "Duschcontainer",
            "10–20 Fuß",
            "2–4 Duschen, Umkleidebereich",
            "Camping, Unterkunft, Sport"
          ],
          [
            "Kombicontainer",
            "20 Fuß",
            "WC, Dusche, Waschrinne",
            "Mannschaftsunterkunft"
          ],
          [
            "Barrierefrei",
            "10–20 Fuß",
            "rollstuhlgerechtes WC, Rampe",
            "Veranstaltungen, öffentliche Nutzung"
          ]
        ],
        "note": "Beispiele; Belegungen und Maße sind herstellerabhängig."
      },
      "equipment": [
        "WC, Urinale, Waschbecken oder Waschrinne",
        "Warmwasserbereiter",
        "Frostschutzheizung für Leitungen",
        "Abluftventilator",
        "Rutschhemmender Boden mit Bodenablauf",
        "Anschlüsse für Frischwasser, Abwasser und Strom",
        "Optional: Duschen, Wickeltisch, Seifen- und Papierspender, Tankanlage"
      ],
      "costs": [
        {
          "label": "Miete",
          "value": "ca. 150 – 500 € / Monat plus Service"
        },
        {
          "label": "Kauf gebraucht",
          "value": "ca. 6.000 – 14.000 €"
        },
        {
          "label": "Kauf neu",
          "value": "ca. 12.000 – 20.000 €"
        }
      ],
      "tips": [
        "Anschlüsse vorab klären: Gibt es Kanal und Wasser am Stellplatz, oder braucht es Tanks mit Entleerungsservice?",
        "Für den Winter Frostschutzheizung und Entleerungsmöglichkeit einplanen.",
        "Die Zahl der WCs nach Personen und Nutzungsspitzen planen – Pausenzeiten sind der Engpass.",
        "Reinigungs- und Entsorgungsservice im Mietvertrag festlegen.",
        "Bei öffentlichen Veranstaltungen ein barrierefreies Modul einplanen."
      ],
      "faq": [
        {
          "q": "Braucht ein Sanitärcontainer einen Kanalanschluss?",
          "a": "Nicht zwingend. Ohne Kanal werden Frisch- und Abwassertanks eingesetzt, die regelmäßig befüllt und entleert werden. Das ist bei längerer Nutzung teurer als ein Anschluss."
        },
        {
          "q": "Kann ein Sanitärcontainer im Winter genutzt werden?",
          "a": "Ja, mit Frostschutzheizung und gedämmten Leitungen. Bei längeren Stillstandszeiten sollten Leitungen entleert werden."
        }
      ]
    },
    "en": {
      "sizes": {
        "head": [
          "Variant",
          "Size (example)",
          "Fit-out (example)",
          "Use"
        ],
        "rows": [
          [
            "Small WC container",
            "8–10 ft",
            "1–2 WCs, basin",
            "small site, club"
          ],
          [
            "Separate WC container",
            "20 ft",
            "ladies/gents, 2–3 WCs plus urinals",
            "site, event"
          ],
          [
            "Shower container",
            "10–20 ft",
            "2–4 showers, changing area",
            "camping, accommodation, sport"
          ],
          [
            "Combination container",
            "20 ft",
            "WC, shower, wash trough",
            "crew accommodation"
          ],
          [
            "Accessible",
            "10–20 ft",
            "wheelchair-accessible WC, ramp",
            "events, public use"
          ]
        ],
        "note": "Examples; configurations and dimensions depend on the manufacturer."
      },
      "equipment": [
        "WCs, urinals, basins or wash trough",
        "Water heater",
        "Frost protection heating for pipes",
        "Extract fan",
        "Slip-resistant floor with floor drain",
        "Connections for fresh water, waste water and power",
        "Optional: showers, baby changing table, dispensers, tank system"
      ],
      "costs": [
        {
          "label": "Hire",
          "value": "approx. €150 – 500 / month plus service"
        },
        {
          "label": "Purchase used",
          "value": "approx. €6,000 – 14,000"
        },
        {
          "label": "Purchase new",
          "value": "approx. €12,000 – 20,000"
        }
      ],
      "tips": [
        "Clarify connections in advance: is there a sewer and water at the site, or are tanks with an emptying service needed?",
        "For winter, plan frost protection heating and a way to drain the system.",
        "Plan the number of WCs by headcount and peak usage – break times are the bottleneck.",
        "Fix cleaning and disposal service in the hire contract.",
        "For public events include an accessible module."
      ],
      "faq": [
        {
          "q": "Does a sanitary container need a sewer connection?",
          "a": "Not necessarily. Without a sewer, fresh and waste water tanks are used and regularly filled and emptied. Over longer periods that costs more than a connection."
        },
        {
          "q": "Can a sanitary container be used in winter?",
          "a": "Yes, with frost protection heating and insulated pipes. During longer idle periods the pipes should be drained."
        }
      ]
    }
  },
  "lagercontainer": {
    "de": {
      "sizes": {
        "head": [
          "Größe",
          "Außen L × B × H",
          "Innen ca. L × B × H",
          "Tür ca. B × H",
          "Volumen ca."
        ],
        "rows": [
          [
            "10 Fuß",
            "2,991 × 2,438 × 2,591 m",
            "2,83 × 2,35 × 2,39 m",
            "2,34 × 2,28 m",
            "16 m³"
          ],
          [
            "20 Fuß",
            "6,058 × 2,438 × 2,591 m",
            "5,90 × 2,35 × 2,39 m",
            "2,34 × 2,28 m",
            "33 m³"
          ],
          [
            "40 Fuß",
            "12,192 × 2,438 × 2,591 m",
            "12,03 × 2,35 × 2,39 m",
            "2,34 × 2,28 m",
            "67 m³"
          ],
          [
            "40 Fuß HC",
            "12,192 × 2,438 × 2,896 m",
            "12,03 × 2,35 × 2,70 m",
            "2,34 × 2,58 m",
            "76 m³"
          ]
        ],
        "note": "Außenmaße nach ISO; übrige Werte ca. Kleinere Größen siehe Mini-Container."
      },
      "equipment": [
        "Doppelflügeltür mit Verschlussstangen",
        "Schlosskasten für Vorhängeschloss",
        "Holzboden auf Stahlquerträgern",
        "Lüftungsgitter",
        "Optional: Regale, Beleuchtung, Rolltor, Personentür, Rampe, Antikondensbeschichtung"
      ],
      "costs": [
        {
          "label": "20 Fuß gebraucht",
          "value": "ca. 1.500 – 3.000 €"
        },
        {
          "label": "20 Fuß One-Way",
          "value": "ca. 3.000 – 5.000 €"
        },
        {
          "label": "40 Fuß gebraucht",
          "value": "ca. 2.500 – 4.500 €"
        },
        {
          "label": "Miete 20 Fuß",
          "value": "ca. 50 – 150 € / Monat"
        }
      ],
      "tips": [
        "Für reine Lagerung ist wind- und wasserdicht gebraucht fast immer die wirtschaftlich richtige Wahl.",
        "Auf Punktfundamente oder Kanthölzer stellen, damit Luft unter den Boden kommt.",
        "Gegen Kondensat lüften und bei empfindlichen Gütern Luftentfeuchter oder Antikondensbeschichtung einsetzen.",
        "Schlosskasten und ein hochwertiges Vorhängeschloss sind der wichtigste Einbruchschutz.",
        "Wer oft an hintere Regale muss, sollte einen Open-Side- oder Double-Door-Container prüfen."
      ],
      "faq": [
        {
          "q": "Rostet ein Lagercontainer?",
          "a": "Cortenstahl ist korrosionsträge, aber nicht rostfrei. Wer beschädigten Lack ausbessert und dafür sorgt, dass kein Wasser stehen bleibt, hat jahrzehntelang Ruhe."
        },
        {
          "q": "Wie verhindere ich Kondenswasser im Lagercontainer?",
          "a": "Durch Lüftung, Abstand zum Boden, trockene Einlagerung und bei Bedarf Luftentfeuchter oder eine Antikondensbeschichtung unter dem Dach."
        }
      ]
    },
    "en": {
      "sizes": {
        "head": [
          "Size",
          "External L × W × H",
          "Internal approx. L × W × H",
          "Door approx. W × H",
          "Volume approx."
        ],
        "rows": [
          [
            "10 ft",
            "2.991 × 2.438 × 2.591 m",
            "2.83 × 2.35 × 2.39 m",
            "2.34 × 2.28 m",
            "16 m³"
          ],
          [
            "20 ft",
            "6.058 × 2.438 × 2.591 m",
            "5.90 × 2.35 × 2.39 m",
            "2.34 × 2.28 m",
            "33 m³"
          ],
          [
            "40 ft",
            "12.192 × 2.438 × 2.591 m",
            "12.03 × 2.35 × 2.39 m",
            "2.34 × 2.28 m",
            "67 m³"
          ],
          [
            "40 ft HC",
            "12.192 × 2.438 × 2.896 m",
            "12.03 × 2.35 × 2.70 m",
            "2.34 × 2.58 m",
            "76 m³"
          ]
        ],
        "note": "External dimensions per ISO; other values approximate. For smaller sizes see mini containers."
      },
      "equipment": [
        "Double door with locking bars",
        "Lockbox for a padlock",
        "Timber floor on steel cross members",
        "Ventilation grilles",
        "Optional: shelving, lighting, roller shutter, personnel door, ramp, anti-condensation coating"
      ],
      "costs": [
        {
          "label": "20 ft used",
          "value": "approx. €1,500 – 3,000"
        },
        {
          "label": "20 ft one-way",
          "value": "approx. €3,000 – 5,000"
        },
        {
          "label": "40 ft used",
          "value": "approx. €2,500 – 4,500"
        },
        {
          "label": "Hire 20 ft",
          "value": "approx. €50 – 150 / month"
        }
      ],
      "tips": [
        "For plain storage, used wind and watertight is almost always the economically right choice.",
        "Place it on point footings or timber bearers so air can circulate under the floor.",
        "Ventilate against condensation and use a dehumidifier or anti-condensation coating for sensitive goods.",
        "A lockbox and a high-quality padlock are the most important protection against break-ins.",
        "If you often need the back shelves, consider an open side or double door container."
      ],
      "faq": [
        {
          "q": "Does a storage container rust?",
          "a": "Corten steel is slow to corrode but not rust-free. If damaged paint is touched up and water never stands, it will last for decades."
        },
        {
          "q": "How do I prevent condensation in a storage container?",
          "a": "Through ventilation, clearance from the ground, storing only dry goods and, where needed, a dehumidifier or anti-condensation coating under the roof."
        }
      ]
    }
  },
  "seecontainer": {
    "de": {
      "sizes": {
        "head": [
          "Größe",
          "Außen L × B × H",
          "Innen ca. L × B × H",
          "Volumen ca.",
          "Typcode"
        ],
        "rows": [
          [
            "20 Fuß",
            "6,058 × 2,438 × 2,591 m",
            "5,90 × 2,35 × 2,39 m",
            "33 m³",
            "22G1"
          ],
          [
            "40 Fuß",
            "12,192 × 2,438 × 2,591 m",
            "12,03 × 2,35 × 2,39 m",
            "67 m³",
            "42G1"
          ],
          [
            "40 Fuß High Cube",
            "12,192 × 2,438 × 2,896 m",
            "12,03 × 2,35 × 2,70 m",
            "76 m³",
            "45G1"
          ],
          [
            "45 Fuß High Cube",
            "13,716 × 2,438 × 2,896 m",
            "13,56 × 2,35 × 2,70 m",
            "86 m³",
            "L5G1"
          ]
        ],
        "note": "Außenmaße nach ISO-Norm, übrige Werte ca. Die Bauformen – High Cube, Open Side, Double Door, Open Top, Flat Rack – haben eigene Unterseiten."
      },
      "equipment": [
        "Wellblechwände aus Cortenstahl",
        "Holzboden auf Stahlquerträgern",
        "Doppelflügeltür mit vier Verschlussstangen",
        "Eckbeschläge an allen acht Ecken",
        "Container-Nummer, Typcode und CSC-Plakette"
      ],
      "costs": [
        {
          "label": "20 Fuß gebraucht",
          "value": "ca. 1.500 – 3.000 €"
        },
        {
          "label": "20 Fuß One-Way",
          "value": "ca. 3.000 – 5.000 €"
        },
        {
          "label": "40 Fuß gebraucht",
          "value": "ca. 2.500 – 4.500 €"
        },
        {
          "label": "40 Fuß One-Way",
          "value": "ca. 4.500 – 7.000 €"
        }
      ],
      "tips": [
        "Zustandsklasse passend zum Zweck wählen: Für die Nutzung an Land genügt wind- und wasserdicht.",
        "Container-Nummer und Typcode prüfen, bevor Sie zahlen.",
        "Für einen Ausbau zum Aufenthaltsraum einen High Cube wählen.",
        "Transport und Stellplatz vorab planen – der Kran ist oft teurer als die Entfernung.",
        "Beim Gebrauchtkauf Fotos des konkreten Containers mit Nummer anfordern."
      ],
      "faq": [
        {
          "q": "Was bedeutet One-Way?",
          "a": "Ein neuer Container, der einmal mit Fracht aus Asien nach Europa verschifft wurde. Er ist praktisch neuwertig und oft günstiger als ein in Europa gebauter Neucontainer."
        },
        {
          "q": "Welche Seecontainer-Bauformen gibt es?",
          "a": "Neben dem Standardcontainer vor allem High Cube, Open Side, Double Door, Open Top, Flat Rack und Kühlcontainer. Jede Bauform hat hier eine eigene Unterseite."
        }
      ]
    },
    "en": {
      "sizes": {
        "head": [
          "Size",
          "External L × W × H",
          "Internal approx. L × W × H",
          "Volume approx.",
          "Type code"
        ],
        "rows": [
          [
            "20 ft",
            "6.058 × 2.438 × 2.591 m",
            "5.90 × 2.35 × 2.39 m",
            "33 m³",
            "22G1"
          ],
          [
            "40 ft",
            "12.192 × 2.438 × 2.591 m",
            "12.03 × 2.35 × 2.39 m",
            "67 m³",
            "42G1"
          ],
          [
            "40 ft high cube",
            "12.192 × 2.438 × 2.896 m",
            "12.03 × 2.35 × 2.70 m",
            "76 m³",
            "45G1"
          ],
          [
            "45 ft high cube",
            "13.716 × 2.438 × 2.896 m",
            "13.56 × 2.35 × 2.70 m",
            "86 m³",
            "L5G1"
          ]
        ],
        "note": "External dimensions per ISO standard, other values approximate. The variants – high cube, open side, double door, open top, flat rack – have their own sub-pages."
      },
      "equipment": [
        "Corrugated Corten steel walls",
        "Timber floor on steel cross members",
        "Double door with four locking bars",
        "Corner castings at all eight corners",
        "Container number, type code and CSC plate"
      ],
      "costs": [
        {
          "label": "20 ft used",
          "value": "approx. €1,500 – 3,000"
        },
        {
          "label": "20 ft one-way",
          "value": "approx. €3,000 – 5,000"
        },
        {
          "label": "40 ft used",
          "value": "approx. €2,500 – 4,500"
        },
        {
          "label": "40 ft one-way",
          "value": "approx. €4,500 – 7,000"
        }
      ],
      "tips": [
        "Choose the condition grade to match the purpose: for use on land, wind and watertight is enough.",
        "Check the container number and type code before paying.",
        "For conversion into a habitable room, choose a high cube.",
        "Plan transport and site in advance – the crane often costs more than the distance.",
        "When buying used, request photos of the specific container with its number."
      ],
      "faq": [
        {
          "q": "What does one-way mean?",
          "a": "A new container shipped once with cargo from Asia to Europe. It is practically as new and often cheaper than a new container built in Europe."
        },
        {
          "q": "Which shipping container variants exist?",
          "a": "Besides the standard container mainly high cube, open side, double door, open top, flat rack and refrigerated containers. Each variant has its own sub-page here."
        }
      ]
    }
  },
  "abrollcontainer": {
    "de": {
      "sizes": {
        "head": [
          "Bauart",
          "Übliche Größen",
          "Fahrzeug",
          "Geeignet für"
        ],
        "rows": [
          [
            "Absetzcontainer (Mulde)",
            "ca. 3 – 10 m³",
            "Absetzkipper",
            "Entrümpelung, Bauschutt in kleinen Mengen, Grünschnitt"
          ],
          [
            "Absetzcontainer mit Deckel",
            "ca. 5 – 10 m³",
            "Absetzkipper",
            "Sperrmüll, Schutz vor Fremdbefüllung"
          ],
          [
            "Abrollcontainer",
            "ca. 10 – 40 m³",
            "Abrollkipper (Hakenlift)",
            "Großbaustelle, Abbruch, Gewerbe"
          ],
          [
            "Abrollcontainer mit Klappe",
            "ca. 20 – 40 m³",
            "Abrollkipper",
            "Befüllen mit Schubkarre über Rampe"
          ]
        ],
        "note": "Größen und Bezeichnungen variieren je Entsorger. Bei schweren Stoffen begrenzt das Gewicht, nicht das Volumen."
      },
      "equipment": [
        "Offene Mulde aus Stahl",
        "Optional Deckel oder Plane",
        "Klappe oder Tür an der Stirnseite bei vielen Abrollcontainern",
        "Anschlagpunkte für Absetzkipper bzw. Haken für Abrollkipper"
      ],
      "costs": [
        {
          "label": "Grünschnitt 7 m³",
          "value": "ca. 250 – 450 €"
        },
        {
          "label": "Bauschutt sauber 7 m³",
          "value": "ca. 300 – 550 €"
        },
        {
          "label": "Baumischabfall 7 m³",
          "value": "ca. 500 – 1.000 €"
        },
        {
          "label": "Stellgenehmigung öffentlicher Grund",
          "value": "je nach Kommune zusätzlich"
        }
      ],
      "tips": [
        "Abfall sauber trennen – gemischte Bauabfälle kosten ein Vielfaches von sortenreinem Bauschutt.",
        "Bauschutt nur in kleine Mulden: Ein Kubikmeter wiegt grob 1,5 bis 1,8 Tonnen, große Mulden werden zu schwer.",
        "Nicht über die Kante befüllen – überladene Container werden nicht mitgenommen oder nachberechnet.",
        "Schadstoffe wie Asbest, Mineralwolle alter Bauart oder teerhaltige Stoffe nie in normale Container geben.",
        "Steht die Mulde auf der Straße, eine Sondernutzungserlaubnis einholen."
      ],
      "faq": [
        {
          "q": "Welche Containergröße brauche ich?",
          "a": "Für eine Wohnungsentrümpelung reichen oft 5 bis 7 m³, für ein ganzes Haus eher 10 m³ oder mehrere Stellungen. Bei Bauschutt entscheidet das Gewicht: lieber zwei kleine Mulden als eine große."
        },
        {
          "q": "Was darf nicht in den Container?",
          "a": "Gefährliche Abfälle wie Asbest, Farben und Lacke, Batterien, Elektrogeräte, Altöl oder Chemikalien. Sie müssen getrennt entsorgt werden."
        }
      ]
    },
    "en": {
      "sizes": {
        "head": [
          "Type",
          "Usual sizes",
          "Vehicle",
          "Suitable for"
        ],
        "rows": [
          [
            "Skip",
            "approx. 3 – 10 m³",
            "skip loader",
            "clearances, small amounts of rubble, green waste"
          ],
          [
            "Skip with lid",
            "approx. 5 – 10 m³",
            "skip loader",
            "bulky waste, protection against fly-tipping"
          ],
          [
            "Roll-off container",
            "approx. 10 – 40 m³",
            "hook-lift truck",
            "large sites, demolition, commercial"
          ],
          [
            "Roll-off with door",
            "approx. 20 – 40 m³",
            "hook-lift truck",
            "filling by wheelbarrow over a ramp"
          ]
        ],
        "note": "Sizes and names vary by waste contractor. With heavy materials weight is the limit, not volume."
      },
      "equipment": [
        "Open steel body",
        "Optional lid or tarpaulin",
        "Door or flap at the end on many roll-off containers",
        "Lifting points for skip loaders or hook for hook-lift trucks"
      ],
      "costs": [
        {
          "label": "Green waste 7 m³",
          "value": "approx. €250 – 450"
        },
        {
          "label": "Clean rubble 7 m³",
          "value": "approx. €300 – 550"
        },
        {
          "label": "Mixed construction waste 7 m³",
          "value": "approx. €500 – 1,000"
        },
        {
          "label": "Permit for public land",
          "value": "additional, depending on municipality"
        }
      ],
      "tips": [
        "Separate waste properly – mixed construction waste costs several times as much as clean rubble.",
        "Put rubble only in small skips: one cubic metre weighs roughly 1.5 to 1.8 tonnes, large skips get too heavy.",
        "Do not fill above the rim – overloaded skips are not collected or are charged extra.",
        "Never put hazardous materials such as asbestos, old mineral wool or tar-containing materials into normal skips.",
        "If the skip stands on the road, obtain a special use permit."
      ],
      "faq": [
        {
          "q": "Which skip size do I need?",
          "a": "For clearing a flat 5 to 7 m³ is often enough, for a whole house rather 10 m³ or several placements. With rubble, weight decides: two small skips rather than one large one."
        },
        {
          "q": "What must not go into the skip?",
          "a": "Hazardous waste such as asbestos, paints and varnishes, batteries, electrical appliances, used oil or chemicals. They must be disposed of separately."
        }
      ]
    }
  },
  "kuehlcontainer": {
    "de": {
      "sizes": {
        "head": [
          "Größe",
          "Innen ca. L × B × H",
          "Volumen ca.",
          "Hinweis"
        ],
        "rows": [
          [
            "10 Fuß",
            "ca. 2,4 × 2,1 × 2,1 m",
            "ca. 10 m³",
            "für Gastronomie und Events"
          ],
          [
            "20 Fuß",
            "ca. 5,45 × 2,29 × 2,27 m",
            "ca. 28 m³",
            "der häufigste Mietcontainer"
          ],
          [
            "40 Fuß High Cube",
            "ca. 11,58 × 2,29 × 2,55 m",
            "ca. 67 m³",
            "für große Mengen und Palettenware"
          ]
        ],
        "note": "ca.-Werte; die dicke Isolierung und das Aggregat kosten gegenüber dem Standardcontainer deutlich Innenraum."
      },
      "equipment": [
        "Kälteaggregat an einer Stirnseite",
        "Isolierte Wände, Boden mit T-Profilen für die Luftführung",
        "Temperaturregelung und Datenlogger",
        "Starkstromanschluss (CEE)",
        "Optional: Regale, Innenbeleuchtung, Fernüberwachung, Streifenvorhang"
      ],
      "costs": [
        {
          "label": "Miete 20 Fuß",
          "value": "meist höher als ein Bürocontainer, plus Strom"
        },
        {
          "label": "Kauf gebraucht 20 Fuß",
          "value": "stark vom Zustand des Aggregats abhängig"
        },
        {
          "label": "Strom",
          "value": "bei Dauerbetrieb ein erheblicher laufender Posten"
        }
      ],
      "tips": [
        "Stromanschluss vorab klären: Kühlcontainer brauchen einen Starkstromanschluss mit ausreichender Absicherung.",
        "Aggregat bei Gebrauchtkauf von einem Kältefachbetrieb prüfen lassen.",
        "Schattig aufstellen und für Luftzirkulation am Aggregat sorgen.",
        "Für Lebensmittel Temperaturaufzeichnung und Alarm einplanen.",
        "Bei kurzer Nutzung ist Miete fast immer günstiger als Kauf."
      ],
      "faq": [
        {
          "q": "Wie viel Strom braucht ein Kühlcontainer?",
          "a": "Das hängt stark von Solltemperatur, Außentemperatur, Befüllung und Türöffnungen ab. Bei Dauerbetrieb eines 20-Fuß-Containers kommen über ein Jahr schnell mehrere tausend Kilowattstunden zusammen."
        },
        {
          "q": "Kann ein Kühlcontainer auch tiefkühlen?",
          "a": "Viele Aggregate decken einen Bereich von grob minus 25 bis plus 25 Grad ab, manche einen deutlich größeren. Die genauen Werte stehen im Datenblatt."
        }
      ]
    },
    "en": {
      "sizes": {
        "head": [
          "Size",
          "Internal approx. L × W × H",
          "Volume approx.",
          "Note"
        ],
        "rows": [
          [
            "10 ft",
            "approx. 2.4 × 2.1 × 2.1 m",
            "approx. 10 m³",
            "for catering and events"
          ],
          [
            "20 ft",
            "approx. 5.45 × 2.29 × 2.27 m",
            "approx. 28 m³",
            "the most common hire unit"
          ],
          [
            "40 ft high cube",
            "approx. 11.58 × 2.29 × 2.55 m",
            "approx. 67 m³",
            "for large quantities and palletised goods"
          ]
        ],
        "note": "Approximate values; the thick insulation and the unit take noticeable interior space compared with a standard container."
      },
      "equipment": [
        "Refrigeration unit at one end",
        "Insulated walls, T-bar floor for airflow",
        "Temperature control and data logger",
        "Three-phase power inlet (CEE)",
        "Optional: shelving, interior lighting, remote monitoring, strip curtain"
      ],
      "costs": [
        {
          "label": "Hire 20 ft",
          "value": "usually more than an office container, plus power"
        },
        {
          "label": "Purchase used 20 ft",
          "value": "heavily dependent on the condition of the unit"
        },
        {
          "label": "Electricity",
          "value": "a significant running cost in continuous operation"
        }
      ],
      "tips": [
        "Clarify the power supply beforehand: refrigerated containers need a three-phase supply with adequate protection.",
        "When buying used, have the unit checked by a refrigeration specialist.",
        "Site it in the shade and ensure air circulation around the unit.",
        "For food, plan temperature recording and an alarm.",
        "For short use, hire is almost always cheaper than buying."
      ],
      "faq": [
        {
          "q": "How much power does a refrigerated container use?",
          "a": "That depends heavily on set temperature, ambient temperature, load and door openings. Running a 20 ft unit continuously quickly adds up to several thousand kilowatt hours over a year."
        },
        {
          "q": "Can a refrigerated container also freeze?",
          "a": "Many units cover roughly minus 25 to plus 25 degrees, some a considerably wider range. The exact values are in the data sheet."
        }
      ]
    }
  }
};
