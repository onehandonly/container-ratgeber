/**
 * Strukturierte Inhalte je Container-Typ (Deutsch/Englisch).
 * Wird von den Typ-Detailseiten unter /container/<slug> gerendert.
 */
export interface TypeDetail {
  intro: string;
  useCases: string[];
  pros: string[];
  cons: string[];
  facts: { label: string; value: string }[];
  /** Slugs verwandter Ratgeber-Artikel. */
  related: string[];
}

type Bilingual = { de: TypeDetail; en: TypeDetail };

export const typeDetails: Record<string, Bilingual> = {
  baucontainer: {
    de: {
      intro:
        'Baucontainer sind das Rückgrat jeder Baustelle: robuste, stapel- und koppelbare Raummodule aus verzinktem Stahlrahmen, die als Büro, Aufenthalts-, Umkleide- oder Lagerraum dienen. Sie werden per Lkw angeliefert, mit Kran oder Ladekran abgesetzt und sind nach dem Anschluss von Strom meist innerhalb weniger Stunden nutzbar. Weil die Module ein einheitliches Rastermaß haben, lassen sie sich zu Riegeln, Innenhöfen oder mehrgeschossigen Anlagen kombinieren und beim nächsten Projekt erneut einsetzen.',
      useCases: [
        'Bauleiterbüro mit Planablage und Besprechungsplatz auf der Hochbaustelle',
        'Aufenthalts- und Pausenraum mit Küchenzeile für die Kolonne',
        'Umkleide mit Schwarz-Weiß-Trennung und Trocknungsheizung im Tiefbau',
        'Abschließbares Werkzeug- und Materiallager direkt neben dem Gewerk',
        'Sanitätsraum und Erste-Hilfe-Station auf Großbaustellen',
        'Aufenthaltsräume für Erntehelfer und Saisonkräfte in der Landwirtschaft',
        'Interimsräume für Werkstatt oder Technik während einer Hallensanierung',
        'Basislager für Katastrophenschutz, THW-Übungen und Großschadenslagen',
      ],
      pros: [
        'Sofort einsatzbereit, wetterfest und abschließbar',
        'Koppel- und stapelbar zu größeren Containeranlagen',
        'Wahlweise mieten für die Projektlaufzeit oder kaufen',
        'Mit Gabelstaplertaschen und Kranösen leicht zu versetzen',
        'Standardisierte Maße erleichtern Planung und Wiederverwendung',
      ],
      cons: [
        'Für längere oder ortsfeste Aufstellung ist meist eine Genehmigung nötig',
        'Einfache Ausführungen sind schlecht gedämmt und im Winter schnell kühl',
        'Transport, Kran und Rangierfläche verursachen spürbare Zusatzkosten',
        'Der Standplatz muss eben, tragfähig und frei von Leitungen sein',
      ],
      facts: [
        { label: 'Typische Modullänge', value: '3–7 m' },
        { label: 'Breite', value: 'ca. 2,44 m' },
        { label: 'Nutzung', value: 'Büro · Aufenthalt · Lager' },
        { label: 'Kombination', value: 'Reihe, Block, mehrgeschossig' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['container-groessen-und-masse', 'was-kostet-ein-container', 'container-baugenehmigung'],
    },
    en: {
      intro:
        'Site containers are the backbone of every construction site: rugged, stackable and connectable room modules on a galvanised steel frame, used as office, break room, changing room or storage. They arrive by truck, are set down with a crane or lorry loader and are usually ready to use within hours once power is connected. Because the modules share a common grid, they can be combined into rows, courtyards or multi-storey complexes and redeployed on the next project.',
      useCases: [
        'Site manager office with drawing storage and a meeting corner',
        'Break room with kitchenette for the crew',
        'Changing room with clean/dirty separation and drying heater for civil works',
        'Lockable tool and material store right next to the trade area',
        'First-aid room and medical station on large sites',
        'Break and rest rooms for seasonal workers in agriculture',
        'Interim workshop or plant room while a hall is being refurbished',
        'Base camp for civil protection, drills and major incident response',
      ],
      pros: [
        'Ready to use, weatherproof and lockable',
        'Connectable and stackable into larger complexes',
        'Rent for the project duration or buy outright',
        'Forklift pockets and lifting eyes make relocation easy',
        'Standardised dimensions simplify planning and reuse',
      ],
      cons: [
        'Longer-term or fixed siting usually requires a permit',
        'Basic versions are poorly insulated and get cold in winter',
        'Transport, crane and manoeuvring space add noticeable cost',
        'The site must be level, load-bearing and free of buried services',
      ],
      facts: [
        { label: 'Typical module length', value: '3–7 m' },
        { label: 'Width', value: 'approx. 2.44 m' },
        { label: 'Use', value: 'Office · break · storage' },
        { label: 'Combination', value: 'Row, block, multi-storey' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['container-groessen-und-masse', 'was-kostet-ein-container', 'container-baugenehmigung'],
    },
  },
  buerocontainer: {
    de: {
      intro:
        'Bürocontainer bieten vollwertige Arbeitsplätze mit isolierverglasten Fenstern, Elektroinstallation, Heizung und häufig einer Klimaanlage oder einem Split-Gerät. Als Einzelmodul entsteht ein Raum für zwei bis vier Personen, als gekoppelte Anlage lassen sich Großraumbüros, Flure und Sanitärbereiche abbilden. Damit eignen sie sich sowohl für die befristete Nutzung auf der Baustelle als auch für dauerhafte Bürofläche am Firmensitz.',
      useCases: [
        'Baustellen- und Projektbüro mit Bauleitung, Planauslage und Besprechungstisch',
        'Planungsbüro und Koordinationszentrale auf Großbaustellen und Infrastrukturprojekten',
        'Verkaufs- und Ausstellungsraum im Handel, etwa bei Autohäusern oder Baustoffhändlern',
        'Pförtner- und Wachcontainer am Werkstor mit Sicht auf Zufahrt und Schranke',
        'Schul-, Kita- oder Verwaltungsersatzraum während einer Sanierung',
        'Erweiterung des Stammbetriebs bei Personalzuwachs ohne Anbau',
        'Schulungs-, Seminar- und Prüfungsraum für Weiterbildung und Ausbildung',
        'Kassen-, Info- und Akkreditierungsbüro bei Messen, Festivals und Sportveranstaltungen',
      ],
      pros: [
        'Fertig ausgestattet mit Strom, Beleuchtung, Heizung und Fenstern',
        'Schnell verfügbar und modular erweiterbar',
        'Gute Dämmung ermöglicht ganzjährige Nutzung',
        'Bis zu mehrgeschossigen Anlagen mit Treppen und Laubengang kombinierbar',
        'Innenausbau von Bodenbelag bis Netzwerkverkabelung frei wählbar',
      ],
      cons: [
        'Höherer Miet- und Kaufpreis als reine Lagercontainer',
        'Dauerhafte Aufstellung ist in der Regel genehmigungspflichtig',
        'Fundament, Strom- und Datenanschlüsse müssen vorbereitet sein',
        'Schallschutz zwischen gekoppelten Modulen ist begrenzt',
      ],
      facts: [
        { label: 'Typische Größe', value: '10, 15 oder 20 Fuß' },
        { label: 'Ausstattung', value: 'Fenster · Strom · Heizung' },
        { label: 'Kombination', value: 'Bis mehrgeschossig' },
        { label: 'Genehmigung', value: 'Bei Daueraufstellung nötig' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-baugenehmigung'],
    },
    en: {
      intro:
        'Office containers provide proper workplaces with double-glazed windows, full electrical installation, heating and often air conditioning or a split unit. A single module houses two to four people, while connected units can form open-plan offices, corridors and washroom areas. That makes them suitable both for temporary use on site and for permanent office space at company premises.',
      useCases: [
        'Site and project office with site management, plan table and meeting area',
        'Planning office and coordination hub on major construction and infrastructure projects',
        'Sales and showroom space in retail, for example at car or builders merchants',
        'Gatehouse and security cabin at the works entrance overlooking the barrier',
        'Replacement classroom, nursery or administration space during refurbishment',
        'Extra capacity at head office when headcount grows without building an extension',
        'Training, seminar and examination room for apprenticeships and further education',
        'Ticket, information and accreditation office at trade fairs, festivals and sports events',
      ],
      pros: [
        'Fully fitted with power, lighting, heating and windows',
        'Quickly available and modular to expand',
        'Good insulation allows year-round use',
        'Combinable up to multi-storey complexes with stairs and walkways',
        'Interior fit-out from flooring to network cabling is freely specified',
      ],
      cons: [
        'Higher rental and purchase price than plain storage units',
        'Permanent siting normally requires a building permit',
        'Foundation, power and data connections must be prepared beforehand',
        'Sound insulation between connected modules is limited',
      ],
      facts: [
        { label: 'Typical size', value: '10, 15 or 20 ft' },
        { label: 'Fit-out', value: 'Windows · power · heating' },
        { label: 'Combination', value: 'Up to multi-storey' },
        { label: 'Permit', value: 'Needed for permanent siting' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-baugenehmigung'],
    },
  },
  wohncontainer: {
    de: {
      intro:
        'Wohncontainer reichen vom schlichten Wohnmodul für die Unterbringung von Monteuren bis zum durchdachten Tiny House mit Küche, Bad und Wohnraum. Entscheidend für die Qualität sind Dämmstärke, eine wärmebrückenarme Konstruktion, Lüftungskonzept und die Haustechnik. Wer dauerhaft wohnen will, braucht eine Baugenehmigung und muss die energetischen Anforderungen des Gebäudeenergiegesetzes erfüllen.',
      useCases: [
        'Tiny House als dauerhafter Erstwohnsitz auf eigenem Grundstück',
        'Wochenend- und Ferienhaus am See oder auf dem Campingplatz',
        'Gartenbüro oder Homeoffice mit eigenem Zugang abseits der Wohnung',
        'Monteur- und Personalunterkunft bei Montageeinsätzen und Großprojekten',
        'Übergangswohnung während Umbau, Sanierung oder Neubau des Wohnhauses',
        'Einliegerwohnung oder Gästehaus für Besuch und mehrere Generationen',
        'Ferienvermietung als Glamping-Einheit oder Feriendomizil im Tourismus',
        'Wohnraum für Auszubildende, Studierende und Saisonkräfte auf dem Betriebsgelände',
      ],
      pros: [
        'Schneller Rohbau, da die Module vorgefertigt geliefert werden',
        'Individuell ausbaubar von Grundriss bis Oberfläche',
        'Versetzbar und später um weitere Module erweiterbar',
        'Kalkulierbare Kosten durch weitgehende Vorfertigung',
        'Kleine Grundfläche senkt Bau-, Heiz- und Unterhaltskosten',
      ],
      cons: [
        'Wohnnutzung ist grundsätzlich genehmigungspflichtig und braucht Bauland',
        'Dämmung und Dampfbremse sind entscheidend gegen Kondensat und Schimmel',
        'Energiestandard nach GEG und Nachweise erhöhen den Aufwand',
        'Erschließung mit Wasser, Abwasser und Strom kann teuer werden',
      ],
      facts: [
        { label: 'Nutzung', value: 'Wohnen · Büro · Ferien' },
        { label: 'Kernthema', value: 'Dämmung & Haustechnik' },
        { label: 'Genehmigung', value: 'Erforderlich' },
        { label: 'Erschließung', value: 'Wasser · Abwasser · Strom' },
        { label: 'Bezug', value: 'Meist Kauf/Ausbau' },
      ],
      related: ['wohncontainer-ausbauen', 'container-baugenehmigung', 'was-kostet-ein-container'],
    },
    en: {
      intro:
        'Living containers range from a simple housing module for accommodating fitters to a well-designed tiny house with kitchen, bathroom and living area. Quality depends on insulation thickness, a construction with few thermal bridges, a ventilation concept and the building services. Anyone planning to live in one permanently needs a building permit and must meet the requirements of the German building energy act.',
      useCases: [
        'Tiny house as a permanent main residence on your own plot',
        'Weekend and holiday home by the lake or on a campsite',
        'Garden studio or home office with its own entrance away from the house',
        'Accommodation for fitters and staff on assignments and major projects',
        'Interim home during conversion, refurbishment or new build',
        'Annexe or guest house for visitors and multi-generation living',
        'Holiday letting as a glamping unit or tourist accommodation',
        'Housing for apprentices, students and seasonal workers on company grounds',
      ],
      pros: [
        'Fast shell construction because modules arrive prefabricated',
        'Fully customisable from floor plan to finishes',
        'Relocatable and later expandable with further modules',
        'Predictable costs thanks to extensive prefabrication',
        'Small footprint keeps building, heating and upkeep costs down',
      ],
      cons: [
        'Residential use always requires a permit and suitable building land',
        'Insulation and vapour control are critical against condensation and mould',
        'Energy standard requirements and certificates add effort',
        'Connecting water, waste water and electricity can be expensive',
      ],
      facts: [
        { label: 'Use', value: 'Living · office · holiday' },
        { label: 'Key topic', value: 'Insulation & services' },
        { label: 'Permit', value: 'Required' },
        { label: 'Utilities', value: 'Water · waste · power' },
        { label: 'Availability', value: 'Mostly buy/fit-out' },
      ],
      related: ['wohncontainer-ausbauen', 'container-baugenehmigung', 'was-kostet-ein-container'],
    },
  },
  sanitaercontainer: {
    de: {
      intro:
        'Sanitärcontainer bringen WC, Dusche und Waschräume dorthin, wo keine feste Installation vorhanden ist. Sie kommen anschlussfertig mit Vorwandinstallation, Boiler, Bodenablauf und Fliesen oder GFK-Auskleidung und werden nur noch an Wasser, Abwasser und Strom angeschlossen. Verfügbar sind sie von der einfachen WC-Einheit bis zum Kombimodul mit Umkleide, Duschzeile und getrennten Bereichen für Damen und Herren.',
      useCases: [
        'WC- und Duschräume für die Belegschaft auf der Hochbaustelle',
        'Sanitäranlagen für Festivals, Stadtfeste und Sportveranstaltungen',
        'Ersatzsanitär während der Sanierung von Schulen, Kitas und Turnhallen',
        'Personalwaschraum mit Schwarz-Weiß-Trennung in Industrie und Tiefbau',
        'Duschcontainer für Erntehelfer und Saisonkräfte in der Landwirtschaft',
        'Sanitärversorgung in Unterkünften, Camps und Erstaufnahmeeinrichtungen',
        'Gäste-WC auf Campingplätzen, an Badeseen und in Freizeitanlagen',
        'Dekontaminations- und Waschbereich bei Rückbau- und Sanierungsarbeiten',
      ],
      pros: [
        'Komplett vorinstalliert und in kurzer Zeit betriebsbereit',
        'Frostsichere Ausführung mit Begleitheizung möglich',
        'Für kurze Zeiträume günstig zu mieten',
        'Verschiedene Ausstattungsgrade vom Einzel-WC bis zur Duschzeile',
        'Robuste, leicht zu reinigende Oberflächen',
      ],
      cons: [
        'Wasser- und Abwasseranschluss oder Tanklösung erforderlich',
        'Höherer Miet- und Kaufpreis als einfache Raumcontainer',
        'Regelmäßige Reinigung, Wartung und Legionellenprophylaxe nötig',
        'Bei Frost drohen ohne Beheizung Schäden an der Installation',
      ],
      facts: [
        { label: 'Ausstattung', value: 'WC · Dusche · Waschbecken' },
        { label: 'Anschluss', value: 'Wasser & Abwasser' },
        { label: 'Einsatz', value: 'Baustelle · Event' },
        { label: 'Winterbetrieb', value: 'Frostsicher mit Beheizung' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
    en: {
      intro:
        'Sanitary containers bring toilets, showers and washrooms to places without fixed plumbing. They arrive ready to connect, complete with pre-wall installation, water heater, floor drain and tiled or GRP linings, and only need hooking up to water, waste and power. Versions range from a simple WC unit to a combined module with changing area, shower row and separate sections for men and women.',
      useCases: [
        'Toilet and shower rooms for the workforce on building sites',
        'Sanitary facilities for festivals, town fairs and sports events',
        'Replacement washrooms while schools, nurseries or sports halls are refurbished',
        'Staff washroom with clean/dirty separation in industry and civil engineering',
        'Shower units for harvest helpers and seasonal workers in agriculture',
        'Sanitary provision in camps, shelters and reception facilities',
        'Visitor toilets at campsites, lakes and leisure facilities',
        'Decontamination and washing area during demolition and remediation work',
      ],
      pros: [
        'Completely pre-installed and operational within a short time',
        'Frost-proof versions with trace heating available',
        'Cost-effective to rent for short periods',
        'Various equipment levels from a single WC to a full shower row',
        'Rugged, easy-to-clean surfaces',
      ],
      cons: [
        'Requires water and waste connections or a tank solution',
        'Higher rental and purchase price than plain room containers',
        'Needs regular cleaning, servicing and legionella prevention',
        'Without heating, frost can damage the plumbing',
      ],
      facts: [
        { label: 'Equipment', value: 'WC · shower · basins' },
        { label: 'Connection', value: 'Water & waste' },
        { label: 'Use', value: 'Site · event' },
        { label: 'Winter use', value: 'Frost-proof when heated' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
  },
  lagercontainer: {
    de: {
      intro:
        'Lagercontainer sind abschließbarer, wetterfester Stauraum aus Stahl mit Holz- oder Siebdruckboden und Doppelflügeltür an der Stirnseite. Ob Werkzeug, Maschinen, Akten oder Saisonware – sie schützen zuverlässig vor Witterung und Diebstahl und stehen von der 8-Fuß-Box bis zum 40-Fuß-Container bereit. Mit Belüftungsgittern, Regalsystemen, Zusatzbeleuchtung und einem Schlosskasten lassen sie sich auf den Inhalt abstimmen.',
      useCases: [
        'Werkzeug- und Maschinenlager für Handwerksbetriebe und Bauunternehmen',
        'Zwischenlager für Möbel und Hausrat bei Umzug oder Kernsanierung',
        'Aktenarchiv für Kanzleien, Praxen und Verwaltungen mit Aufbewahrungspflicht',
        'Saison- und Vereinslager für Zelte, Bühnenteile, Tore und Sportgeräte',
        'Reifen- und Ersatzteillager an Werkstätten und Autohäusern',
        'Erweiterung der Lagerfläche im Einzelhandel während des Weihnachtsgeschäfts',
        'Lager für Streugut, Gartengeräte und Maschinen in Kommunen und Bauhöfen',
        'Sicheres Depot für Filmproduktionen, Messebau und Veranstaltungstechnik',
      ],
      pros: [
        'Robust, wetterfest und mit Schlosskasten gut gegen Aufbruch geschützt',
        'Günstig in Kauf und Miete im Vergleich zu festem Lagerraum',
        'Sofort nutzbar, ohne Bauzeit und mit minimaler Vorbereitung',
        'Mit Regalen, Belüftung und Licht nachrüstbar',
        'Bei Bedarf jederzeit umsetzbar oder wieder verkäuflich',
      ],
      cons: [
        'Ohne Belüftung droht Kondensat an der Stahldecke',
        'Ebener, tragfähiger Standplatz mit Zufahrt für den Lkw nötig',
        'Ungedämmt starke Temperaturschwankungen im Innenraum',
        'Schlichte Optik, in Wohngebieten oft unerwünscht',
      ],
      facts: [
        { label: 'Typische Größe', value: '8, 10, 20, 40 Fuß' },
        { label: 'Schutz', value: 'Wetter & Diebstahl' },
        { label: 'Zubehör', value: 'Regale · Belüftung · Licht' },
        { label: 'Standplatz', value: 'Eben & tragfähig' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['container-groessen-und-masse', 'gebrauchten-container-kaufen', 'was-kostet-ein-container'],
    },
    en: {
      intro:
        'Storage containers are lockable, weatherproof steel space with a plywood floor and double doors at one end. Whether tools, machinery, files or seasonal stock – they reliably protect against weather and theft and come in sizes from an 8 ft box up to a 40 ft container. With ventilation grilles, shelving systems, extra lighting and a lock box they can be tailored to what goes inside.',
      useCases: [
        'Tool and machinery store for trades and construction firms',
        'Interim storage for furniture and belongings during a move or full refurbishment',
        'File archive for law firms, practices and authorities with retention duties',
        'Seasonal and club storage for tents, stage parts, goals and sports equipment',
        'Tyre and spare parts store at garages and dealerships',
        'Extra retail stockroom capacity during the Christmas trading season',
        'Store for grit, garden tools and machinery at municipal depots',
        'Secure depot for film productions, exhibition builders and event technology',
      ],
      pros: [
        'Rugged, weatherproof and well protected by a lock box',
        'Cheap to buy and rent compared with fixed storage space',
        'Usable immediately, with no build time and minimal preparation',
        'Retrofittable with shelving, ventilation and lighting',
        'Can be relocated or resold whenever needs change',
      ],
      cons: [
        'Condensation forms on the steel roof without ventilation',
        'Needs a level, load-bearing spot with truck access',
        'Strong internal temperature swings when uninsulated',
        'Plain appearance, often unwelcome in residential areas',
      ],
      facts: [
        { label: 'Typical size', value: '8, 10, 20, 40 ft' },
        { label: 'Protection', value: 'Weather & theft' },
        { label: 'Accessories', value: 'Shelving · ventilation · light' },
        { label: 'Standing area', value: 'Level & load-bearing' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['container-groessen-und-masse', 'gebrauchten-container-kaufen', 'was-kostet-ein-container'],
    },
  },
  seecontainer: {
    de: {
      intro:
        'Seecontainer (ISO-Container) sind weltweit genormte Stahlboxen für den intermodalen Warenverkehr, meist als 20- oder 40-Fuß-Version und zusätzlich als High Cube mit rund 30 cm mehr Innenhöhe. Ihre Eckbeschläge, das Rastermaß und der CSC-Prüfnachweis erlauben Umschlag zwischen Schiff, Bahn und Lkw ohne Umpacken. An Land dienen sie als stationäres Lager, als Rohbau für Umbauten oder als günstige Raumreserve.',
      useCases: [
        'Überseeversand von Stückgut, Maschinen und Palettenware',
        'Kombinierter Verkehr per Bahn und Binnenschiff im Hinterlandverkehr',
        'Stationäres Lager auf Betriebshof, Bauhof oder Landwirtschaftsbetrieb',
        'Umbau zur Werkstatt, Fahrradgarage oder Technikraum',
        'Gastronomie- und Barcontainer für Foodtrucks, Kioske und Festivalstände',
        'Pop-up-Store, Messestand oder Markenpavillon im Einzelhandel',
        'Rohbau für Ateliers, Proberäume und Coworking-Module',
        'Sicheres Depot für Baumaschinen, Solarmodule und Ersatzteile',
      ],
      pros: [
        'Weltweit genormte Maße und Beschläge, dadurch überall handhabbar',
        'Extrem stabil, stapelbar und für Seetransport ausgelegt',
        'Gut verfügbar, auch gebraucht zu günstigen Preisen',
        'Vielseitig umbaubar durch Ausschnitte für Fenster und Türen',
        'Hoher Wiederverkaufswert bei gepflegtem Zustand',
      ],
      cons: [
        'Hohes Eigengewicht, Transport nur mit passendem Gerät',
        'Unbehandelt drohen Kondensat und Rost, vor allem am Dach',
        'Ungedämmt im Sommer heiß und im Winter kalt',
        'Ausschnitte schwächen die Struktur und erfordern Verstärkungen',
      ],
      facts: [
        { label: 'Standard', value: '20 & 40 Fuß (+ High Cube)' },
        { label: 'Volumen', value: 'ca. 33 / 67 m³' },
        { label: 'Norm', value: 'ISO / CSC' },
        { label: 'Zustand', value: 'Neuwertig bis wind- und wasserdicht' },
        { label: 'Bezug', value: 'Kauf (neu/gebraucht)' },
      ],
      related: ['container-groessen-und-masse', 'gebrauchten-container-kaufen', 'was-kostet-ein-container'],
    },
    en: {
      intro:
        'Shipping containers (ISO containers) are globally standardised steel boxes for intermodal freight, usually 20 ft or 40 ft and also available as high cubes with around 30 cm more internal height. Their corner castings, common grid and CSC plate allow transfer between ship, rail and truck without repacking. On land they serve as stationary storage, as a shell for conversions or as cheap extra space.',
      useCases: [
        'Overseas shipping of general cargo, machinery and palletised goods',
        'Combined rail and inland waterway transport in hinterland traffic',
        'Stationary storage at depots, municipal yards and farms',
        'Conversion into a workshop, bike garage or plant room',
        'Food and bar containers for street food, kiosks and festival stands',
        'Pop-up store, exhibition stand or brand pavilion in retail',
        'Shell for studios, rehearsal rooms and coworking modules',
        'Secure depot for construction plant, solar modules and spare parts',
      ],
      pros: [
        'Globally standardised dimensions and fittings, handleable anywhere',
        'Extremely strong, stackable and built for sea transport',
        'Widely available, including used units at low prices',
        'Highly convertible via cut-outs for windows and doors',
        'Good resale value when kept in decent condition',
      ],
      cons: [
        'Heavy tare weight, transport needs the right equipment',
        'Condensation and rust if untreated, especially on the roof',
        'Hot in summer and cold in winter when uninsulated',
        'Cut-outs weaken the structure and require reinforcement',
      ],
      facts: [
        { label: 'Standard', value: '20 & 40 ft (+ high cube)' },
        { label: 'Volume', value: 'approx. 33 / 67 m³' },
        { label: 'Norm', value: 'ISO / CSC' },
        { label: 'Condition', value: 'As new to wind and watertight' },
        { label: 'Availability', value: 'Buy (new/used)' },
      ],
      related: ['container-groessen-und-masse', 'gebrauchten-container-kaufen', 'was-kostet-ein-container'],
    },
  },
  abrollcontainer: {
    de: {
      intro:
        'Abroll- und Absetzcontainer sind offene oder abgedeckte Mulden für Abfall und Schüttgut. Absetzmulden werden mit dem Absetzkipper seitlich abgesetzt und fassen meist 3 bis 10 m³, Abrollcontainer kommen per Hakenlift und reichen bis rund 40 m³. Abgerechnet wird üblicherweise als Paket aus Anfahrt, Standzeit und Entsorgung, wobei der Preis stark von der Abfallart abhängt.',
      useCases: [
        'Bauschutt, Beton und Ziegel beim Abbruch von Wänden und Estrich',
        'Erdaushub und Bodenmaterial bei Baugrube, Pool und Leitungsbau',
        'Sperrmüll und Entrümpelung von Haushalten, Kellern und Dachböden',
        'Grün- und Gartenabfall bei Rodung, Heckenschnitt und Gartenumbau',
        'Baumischabfall bei Innenausbau, Trockenbau und Fenstertausch',
        'Gewerbe- und Verpackungsabfall in Handel, Logistik und Produktion',
        'Altholz und Möbel bei Betriebsauflösung oder Geschäftsumbau',
        'Transport von Schüttgut wie Kies, Sand oder Rindenmulch zur Baustelle',
      ],
      pros: [
        'Für große Abfallmengen deutlich günstiger als Einzelfahrten',
        'Bequeme Anlieferung und Abholung nach Terminabsprache',
        'Viele Größen von der kleinen Mulde bis zur 40-m³-Rolle',
        'Auch mit Deckel, Klappe oder Tür für leichtes Beladen erhältlich',
        'Entsorgung inklusive Nachweis und ordnungsgemäßer Verwertung',
      ],
      cons: [
        'Meist nur Miete inklusive Entsorgung, kein Kauf sinnvoll',
        'Im öffentlichen Raum ist eine Stellgenehmigung erforderlich',
        'Preis je Abfallart sehr unterschiedlich, Fehlwürfe verteuern stark',
        'Standzeiten über die Freizeit hinaus kosten Tagesmiete',
      ],
      facts: [
        { label: 'Bauart', value: 'Absetz- & Abrollmulde' },
        { label: 'Größen', value: 'ca. 3–40 m³' },
        { label: 'Abrechnung', value: 'Miete + Entsorgung' },
        { label: 'Genehmigung', value: 'Bei Aufstellung auf Straße' },
        { label: 'Einsatz', value: 'Bau · Entrümpelung' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
    en: {
      intro:
        'Roll-off and skip containers are open or covered bins for waste and bulk material. Skips are set down sideways by a skip loader and typically hold 3 to 10 m³, while roll-off containers arrive on a hook-lift truck and reach around 40 m³. Billing is usually a package of delivery, standing time and disposal, with the price depending heavily on the type of waste.',
      useCases: [
        'Rubble, concrete and brick from demolishing walls and screed',
        'Excavated soil from foundations, pools and utility trenches',
        'Bulky waste and clearances from homes, cellars and lofts',
        'Green and garden waste from clearing, hedge cutting and landscaping',
        'Mixed construction waste from interior fit-out, drylining and window replacement',
        'Commercial and packaging waste in retail, logistics and production',
        'Waste wood and furniture during a business closure or shop refit',
        'Delivering bulk material such as gravel, sand or bark mulch to site',
      ],
      pros: [
        'Far cheaper than individual trips for large waste volumes',
        'Convenient delivery and collection by appointment',
        'Many sizes from a small skip up to a 40 m³ roll-off bin',
        'Also available with lid, flap or door for easy loading',
        'Disposal included, with documentation and proper recovery',
      ],
      cons: [
        'Usually rental including disposal only, buying rarely makes sense',
        'A permit is required when placed on public land',
        'Prices vary widely by waste type and wrong items get expensive',
        'Standing time beyond the free period incurs daily rental',
      ],
      facts: [
        { label: 'Type', value: 'Skip & roll-off bin' },
        { label: 'Sizes', value: 'approx. 3–40 m³' },
        { label: 'Billing', value: 'Rental + disposal' },
        { label: 'Permit', value: 'Needed for street placement' },
        { label: 'Use', value: 'Construction · clearance' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
  },
  kuehlcontainer: {
    de: {
      intro:
        'Kühlcontainer (Reefer) sind rundum isolierte Container mit eigenem Kälteaggregat für temperaturgeführte Lagerung und Transport. Sie halten je nach Modell konstante Temperaturen von Tiefkühlbereich bis in den Plusbereich und protokollieren den Verlauf über einen Datenlogger. Voraussetzung ist ein belastbarer Stromanschluss, in der Regel Drehstrom über eine CEE-Steckdose.',
      useCases: [
        'Kühllager für Lebensmittel bei Erzeugern, Metzgereien und Bäckereien',
        'Zusätzliche Kühlkapazität für Gastronomie und Catering in der Saison',
        'Getränke- und Speisenkühlung bei Festivals, Stadtfesten und Weihnachtsmärkten',
        'Temperaturgeführte Lagerung von Pharmaprodukten, Impfstoffen und Laborproben',
        'Zwischenlager für Obst und Gemüse während Ernte und Vermarktung',
        'Ersatzkühlung bei Ausfall oder Umbau der festen Kühlzelle im Betrieb',
        'Blumen- und Pflanzenkühlung im Gartenbau und Floristikgroßhandel',
        'Kühlkette für Fisch und Fleisch beim Transport zwischen Hafen und Betrieb',
      ],
      pros: [
        'Präzise Temperatursteuerung mit Sollwertvorgabe und Protokollierung',
        'Nutzbar von Tiefkühl bis in den Plusbereich',
        'Mobil, kurzfristig mietbar und schnell einsatzbereit',
        'Gut isoliert und robust genug für den Außenbereich',
        'Hygienegerechte Innenauskleidung aus Edelstahl oder Aluminium',
      ],
      cons: [
        'Dauerhafter, ausreichend dimensionierter Stromanschluss nötig',
        'Höhere Betriebskosten durch Stromverbrauch des Aggregats',
        'Regelmäßige Wartung von Aggregat, Dichtungen und Abtauung',
        'Geräusch- und Abwärmeentwicklung, in Wohnnähe problematisch',
      ],
      facts: [
        { label: 'Temperaturbereich', value: 'ca. −25 bis +25 °C' },
        { label: 'Größe', value: '20 & 40 Fuß' },
        { label: 'Bedarf', value: 'Starkstrom (CEE)' },
        { label: 'Ausstattung', value: 'Aggregat · Datenlogger' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
    en: {
      intro:
        'Refrigerated containers (reefers) are fully insulated containers with their own cooling unit for temperature-controlled storage and transport. Depending on the model they hold constant temperatures from deep freeze to above zero and record the profile via a data logger. They require a suitably rated power supply, normally three-phase via a CEE socket.',
      useCases: [
        'Cold storage for food at producers, butchers and bakeries',
        'Extra chilling capacity for restaurants and caterers in peak season',
        'Chilling drinks and food at festivals, town fairs and Christmas markets',
        'Temperature-controlled storage of pharmaceuticals, vaccines and lab samples',
        'Interim storage of fruit and vegetables during harvest and marketing',
        'Backup cooling when a fixed cold room fails or is being rebuilt',
        'Chilling flowers and plants in horticulture and floristry wholesale',
        'Maintaining the cold chain for fish and meat between port and premises',
      ],
      pros: [
        'Precise temperature control with setpoints and data logging',
        'Usable from deep freeze through to above-zero ranges',
        'Mobile, rentable at short notice and quick to commission',
        'Well insulated and rugged enough for outdoor siting',
        'Hygienic stainless steel or aluminium interior lining',
      ],
      cons: [
        'Needs a permanent, adequately rated power supply',
        'Higher running costs due to the unit’s electricity consumption',
        'Regular servicing of the unit, seals and defrost system',
        'Noise and waste heat can be a problem close to housing',
      ],
      facts: [
        { label: 'Temperature range', value: 'approx. −25 to +25 °C' },
        { label: 'Size', value: '20 & 40 ft' },
        { label: 'Requirement', value: 'Three-phase power (CEE)' },
        { label: 'Equipment', value: 'Cooling unit · data logger' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
  },
};
