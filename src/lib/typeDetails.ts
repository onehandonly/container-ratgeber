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
        'Baucontainer sind das Rückgrat jeder Baustelle: robuste, stapel- und koppelbare Raummodule, die als Büro, Aufenthalts-, Umkleide- oder Lagerraum dienen. Sie lassen sich schnell aufstellen, versetzen und bei Bedarf zu größeren Anlagen kombinieren.',
      useCases: ['Baustellenbüro und Baubesprechung', 'Aufenthalts- und Pausenraum für das Team', 'Umkleide mit Spinden und Trocknung', 'Sicherer Werkzeug- und Materiallager'],
      pros: ['Sofort einsatzbereit und wetterfest', 'Koppelbar zu größeren Einheiten', 'Mieten oder kaufen möglich', 'Einfach zu versetzen'],
      cons: ['Für Daueraufstellung oft Genehmigung nötig', 'Ohne Dämmung im Winter kühl', 'Transport/Kran verursacht Zusatzkosten'],
      facts: [
        { label: 'Typische Modullänge', value: '3–7 m' },
        { label: 'Breite', value: 'ca. 2,44 m' },
        { label: 'Nutzung', value: 'Büro · Aufenthalt · Lager' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['container-groessen-und-masse', 'was-kostet-ein-container', 'container-baugenehmigung'],
    },
    en: {
      intro:
        'Site containers are the backbone of every construction site: rugged, stackable and connectable room modules used as office, break room, changing room or storage. They are quick to set up, easy to relocate and can be combined into larger complexes.',
      useCases: ['Site office and project meetings', 'Break and rest room for the crew', 'Changing room with lockers and drying', 'Secure tool and material storage'],
      pros: ['Ready to use and weatherproof', 'Connectable into larger units', 'Available to buy or rent', 'Easy to relocate'],
      cons: ['Permanent siting often needs a permit', 'Cold in winter without insulation', 'Transport/crane adds cost'],
      facts: [
        { label: 'Typical module length', value: '3–7 m' },
        { label: 'Width', value: 'approx. 2.44 m' },
        { label: 'Use', value: 'Office · break · storage' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['container-groessen-und-masse', 'was-kostet-ein-container', 'container-baugenehmigung'],
    },
  },
  buerocontainer: {
    de: {
      intro:
        'Bürocontainer bieten vollwertige Arbeitsplätze mit Fenstern, Elektrik, Heizung und oft Klimatisierung. Als Einzelmodul oder mehrgeschossige Containeranlage schaffen sie flexibel Bürofläche – temporär auf der Baustelle oder dauerhaft am Firmensitz.',
      useCases: ['Baustellen- und Projektbüro', 'Erweiterung bei Platzmangel im Betrieb', 'Empfang, Verkaufs- oder Ausstellungsraum', 'Schulungs- und Besprechungsraum'],
      pros: ['Fertig ausgestattet: Strom, Licht, Heizung', 'Schnell verfügbar und erweiterbar', 'Gut dämmbar für ganzjährige Nutzung', 'Mehrgeschossig kombinierbar'],
      cons: ['Höherer Preis als reine Lagercontainer', 'Für Daueraufstellung genehmigungspflichtig', 'Fundament/Anschlüsse müssen vorbereitet sein'],
      facts: [
        { label: 'Typische Größe', value: '10, 15 oder 20 Fuß' },
        { label: 'Ausstattung', value: 'Fenster · Strom · Heizung' },
        { label: 'Kombination', value: 'Bis mehrgeschossig' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-baugenehmigung'],
    },
    en: {
      intro:
        'Office containers provide proper workplaces with windows, electrics, heating and often air conditioning. As a single module or a multi-storey complex they create flexible office space – temporarily on site or permanently at your premises.',
      useCases: ['Site and project office', 'Extra space when the office is full', 'Reception, sales or showroom', 'Training and meeting room'],
      pros: ['Fully fitted: power, light, heating', 'Quickly available and expandable', 'Easy to insulate for year-round use', 'Stackable into several storeys'],
      cons: ['Costs more than plain storage units', 'Permanent siting needs a permit', 'Foundation/connections must be prepared'],
      facts: [
        { label: 'Typical size', value: '10, 15 or 20 ft' },
        { label: 'Fit-out', value: 'Windows · power · heating' },
        { label: 'Combination', value: 'Up to multi-storey' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-baugenehmigung'],
    },
  },
  wohncontainer: {
    de: {
      intro:
        'Wohncontainer reichen vom schlichten Wohnmodul bis zum durchdachten Tiny House. Mit guter Dämmung, Heizung und Sanitär entsteht dauerhaft nutzbarer Wohnraum – vorausgesetzt, Genehmigung und Energiestandard stimmen.',
      useCases: ['Tiny House oder Wochenendhaus', 'Homeoffice oder Gartenbüro', 'Temporäre Unterbringung', 'Ferien- und Gästehaus'],
      pros: ['Schneller Rohbau als Modul', 'Individuell ausbaubar', 'Versetzbar und erweiterbar', 'Kalkulierbare Kosten'],
      cons: ['Wohnnutzung ist genehmigungspflichtig', 'Dämmung entscheidend gegen Kondensat', 'Energiestandard (GEG) beachten'],
      facts: [
        { label: 'Nutzung', value: 'Wohnen · Büro · Ferien' },
        { label: 'Kernthema', value: 'Dämmung & Haustechnik' },
        { label: 'Genehmigung', value: 'Erforderlich' },
        { label: 'Bezug', value: 'Meist Kauf/Ausbau' },
      ],
      related: ['wohncontainer-ausbauen', 'container-baugenehmigung', 'was-kostet-ein-container'],
    },
    en: {
      intro:
        'Living containers range from a simple housing module to a well-designed tiny house. With good insulation, heating and plumbing they become permanent living space – provided the permit and energy standard are in order.',
      useCases: ['Tiny house or weekend home', 'Home office or garden studio', 'Temporary accommodation', 'Holiday and guest house'],
      pros: ['Fast modular shell', 'Fully customisable fit-out', 'Relocatable and expandable', 'Predictable costs'],
      cons: ['Residential use requires a permit', 'Insulation is critical against condensation', 'Mind the energy standard (GEG)'],
      facts: [
        { label: 'Use', value: 'Living · office · holiday' },
        { label: 'Key topic', value: 'Insulation & services' },
        { label: 'Permit', value: 'Required' },
        { label: 'Availability', value: 'Mostly buy/fit-out' },
      ],
      related: ['wohncontainer-ausbauen', 'container-baugenehmigung', 'was-kostet-ein-container'],
    },
  },
  sanitaercontainer: {
    de: {
      intro:
        'Sanitärcontainer bringen WC, Dusche und Waschräume dorthin, wo es keine feste Installation gibt. Sie sind anschlussfertig vorbereitet und ideal für Baustellen, Veranstaltungen und die temporäre Nutzung.',
      useCases: ['WC- und Duschräume auf der Baustelle', 'Sanitär für Events und Festivals', 'Ergänzung bei Umbau/Sanierung', 'Personal- und Umkleidebereich'],
      pros: ['Komplett vorinstalliert', 'Frost­sicher ausführbar', 'Miete für kurze Zeiträume ideal', 'Verschiedene Ausstattungsgrade'],
      cons: ['Wasser-/Abwasseranschluss nötig', 'Höherer Miet-/Kaufpreis', 'Regelmäßige Reinigung/Wartung'],
      facts: [
        { label: 'Ausstattung', value: 'WC · Dusche · Waschbecken' },
        { label: 'Anschluss', value: 'Wasser & Abwasser' },
        { label: 'Einsatz', value: 'Baustelle · Event' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
    en: {
      intro:
        'Sanitary containers bring toilets, showers and washrooms to places without fixed plumbing. They come pre-installed and ready to connect – ideal for construction sites, events and temporary use.',
      useCases: ['Toilet and shower rooms on site', 'Sanitary facilities for events', 'Backup during renovation', 'Staff and changing areas'],
      pros: ['Completely pre-installed', 'Frost-proof versions available', 'Ideal to rent short-term', 'Various equipment levels'],
      cons: ['Needs water/waste connections', 'Higher rental/purchase price', 'Regular cleaning and servicing'],
      facts: [
        { label: 'Equipment', value: 'WC · shower · basins' },
        { label: 'Connection', value: 'Water & waste' },
        { label: 'Use', value: 'Site · event' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
  },
  lagercontainer: {
    de: {
      intro:
        'Lagercontainer sind abschließbarer, wetterfester Stauraum aus Stahl. Ob Werkzeug, Maschinen, Akten oder Inventar – sie schützen zuverlässig vor Witterung und Diebstahl und stehen in verschiedenen Längen bereit.',
      useCases: ['Werkzeug- und Maschinenlager', 'Zwischenlager bei Umzug/Umbau', 'Archiv und Inventar', 'Saison- und Vereinslager'],
      pros: ['Robust, wetterfest, abschließbar', 'Günstig in Kauf und Miete', 'Sofort nutzbar', 'Mit Regalen/Belüftung nachrüstbar'],
      cons: ['Unbelüftet Kondensat­gefahr', 'Ebener, tragfähiger Standplatz nötig', 'Optik eher schlicht'],
      facts: [
        { label: 'Typische Größe', value: '8, 10, 20, 40 Fuß' },
        { label: 'Schutz', value: 'Wetter & Diebstahl' },
        { label: 'Zubehör', value: 'Regale · Belüftung' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['container-groessen-und-masse', 'gebrauchten-container-kaufen', 'was-kostet-ein-container'],
    },
    en: {
      intro:
        'Storage containers are lockable, weatherproof steel space. Whether tools, machinery, files or inventory – they reliably protect against weather and theft and come in various lengths.',
      useCases: ['Tool and machinery storage', 'Interim storage when moving', 'Archive and inventory', 'Seasonal and club storage'],
      pros: ['Rugged, weatherproof, lockable', 'Cheap to buy and rent', 'Usable immediately', 'Shelving/ventilation retrofittable'],
      cons: ['Condensation risk without ventilation', 'Needs a level, load-bearing spot', 'Plain appearance'],
      facts: [
        { label: 'Typical size', value: '8, 10, 20, 40 ft' },
        { label: 'Protection', value: 'Weather & theft' },
        { label: 'Accessories', value: 'Shelving · ventilation' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['container-groessen-und-masse', 'gebrauchten-container-kaufen', 'was-kostet-ein-container'],
    },
  },
  seecontainer: {
    de: {
      intro:
        'Seecontainer (ISO-Container) sind genormte Stahlboxen für den weltweiten Warenverkehr – meist als 20- oder 40-Fuß-Version. An Land dienen sie als Lager, Basis für Umbauten oder als günstige Raumreserve.',
      useCases: ['Überseeversand und Transport', 'Stationäres Lager', 'Basis für Umbauten (Werkstatt, Bar)', 'Günstige Raumreserve'],
      pros: ['Weltweit genormte Maße', 'Extrem stabil und stapelbar', 'Gut verfügbar, auch gebraucht', 'Vielseitig umbaubar'],
      cons: ['Hohes Eigengewicht', 'Unbehandelt Kondensat/Rost möglich', 'High Cube nur ~30 cm höher'],
      facts: [
        { label: 'Standard', value: '20 & 40 Fuß (+ High Cube)' },
        { label: 'Volumen', value: 'ca. 33 / 67 m³' },
        { label: 'Norm', value: 'ISO / CSC' },
        { label: 'Bezug', value: 'Kauf (neu/gebraucht)' },
      ],
      related: ['container-groessen-und-masse', 'gebrauchten-container-kaufen', 'was-kostet-ein-container'],
    },
    en: {
      intro:
        'Shipping containers (ISO containers) are standardised steel boxes for global trade – usually 20 ft or 40 ft. On land they serve as storage, a base for conversions or cheap extra space.',
      useCases: ['Overseas shipping and transport', 'Stationary storage', 'Base for conversions (workshop, bar)', 'Cheap extra space'],
      pros: ['Globally standardised dimensions', 'Extremely strong and stackable', 'Widely available, also used', 'Highly convertible'],
      cons: ['Heavy tare weight', 'Condensation/rust if untreated', 'High cube only ~30 cm taller'],
      facts: [
        { label: 'Standard', value: '20 & 40 ft (+ high cube)' },
        { label: 'Volume', value: 'approx. 33 / 67 m³' },
        { label: 'Norm', value: 'ISO / CSC' },
        { label: 'Availability', value: 'Buy (new/used)' },
      ],
      related: ['container-groessen-und-masse', 'gebrauchten-container-kaufen', 'was-kostet-ein-container'],
    },
  },
  abrollcontainer: {
    de: {
      intro:
        'Abroll- und Absetzcontainer sind offene Mulden für Abfall und Schüttgut. Sie werden per Hakenlift oder Absetzkipper geliefert und abgeholt – die klassische Lösung für Bauschutt, Sperrmüll und Grünabfall.',
      useCases: ['Bauschutt und Erdaushub', 'Sperrmüll und Entrümpelung', 'Grün- und Gartenabfall', 'Gewerbeabfall'],
      pros: ['Für große Abfallmengen', 'Bequeme Anlieferung/Abholung', 'Viele Größen (Kubikmeter)', 'Auch mit Deckel/Klappe'],
      cons: ['Meist Miete inkl. Entsorgung', 'Stellgenehmigung im öffentl. Raum', 'Preis je Abfallart verschieden'],
      facts: [
        { label: 'Bauart', value: 'Absetz- & Abrollmulde' },
        { label: 'Größen', value: 'ca. 3–40 m³' },
        { label: 'Abrechnung', value: 'Miete + Entsorgung' },
        { label: 'Einsatz', value: 'Bau · Entrümpelung' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
    en: {
      intro:
        'Roll-off and skip containers are open bins for waste and bulk material. They are delivered and collected by hook-lift or skip loader – the classic solution for rubble, bulky waste and garden waste.',
      useCases: ['Rubble and excavated soil', 'Bulky waste and clearances', 'Green and garden waste', 'Commercial waste'],
      pros: ['For large waste volumes', 'Convenient delivery/collection', 'Many sizes (cubic metres)', 'Also with lid/door'],
      cons: ['Usually rented incl. disposal', 'Permit needed on public land', 'Price varies by waste type'],
      facts: [
        { label: 'Type', value: 'Skip & roll-off bin' },
        { label: 'Sizes', value: 'approx. 3–40 m³' },
        { label: 'Billing', value: 'Rental + disposal' },
        { label: 'Use', value: 'Construction · clearance' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
  },
  kuehlcontainer: {
    de: {
      intro:
        'Kühlcontainer (Reefer) sind isolierte Container mit eigenem Kälteaggregat für temperaturgeführte Lagerung und Transport. Sie halten von Tiefkühl bis Plusgrade konstante Temperaturen – benötigen dafür aber Strom.',
      useCases: ['Lebensmittel-Kühllager', 'Gastronomie und Events', 'Pharma und Labor', 'Temporäre Kühlkapazität'],
      pros: ['Präzise Temperatursteuerung', 'Tiefkühl bis Plusgrade', 'Mobil und mietbar', 'Isoliert und robust'],
      cons: ['Dauerhafter Stromanschluss nötig', 'Höhere Betriebskosten', 'Regelmäßige Wartung'],
      facts: [
        { label: 'Temperaturbereich', value: 'ca. −25 bis +25 °C' },
        { label: 'Größe', value: '20 & 40 Fuß' },
        { label: 'Bedarf', value: 'Starkstrom' },
        { label: 'Bezug', value: 'Kauf oder Miete' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
    en: {
      intro:
        'Refrigerated containers (reefers) are insulated containers with their own cooling unit for temperature-controlled storage and transport. They hold constant temperatures from frozen to above zero – but need power to do so.',
      useCases: ['Food cold storage', 'Catering and events', 'Pharma and labs', 'Temporary cooling capacity'],
      pros: ['Precise temperature control', 'Frozen to above-zero range', 'Mobile and rentable', 'Insulated and rugged'],
      cons: ['Needs a permanent power supply', 'Higher running costs', 'Regular maintenance'],
      facts: [
        { label: 'Temperature range', value: 'approx. −25 to +25 °C' },
        { label: 'Size', value: '20 & 40 ft' },
        { label: 'Requirement', value: 'Three-phase power' },
        { label: 'Availability', value: 'Buy or rent' },
      ],
      related: ['was-kostet-ein-container', 'container-groessen-und-masse', 'container-kaufen-oder-mieten'],
    },
  },
};
