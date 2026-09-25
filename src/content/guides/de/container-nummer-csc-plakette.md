---
title: "Container-Nummer und CSC-Plakette lesen: was ein Container über sich verrät"
description: "Wie Sie die Container-Nummer nach ISO 6346 entschlüsseln, die Prüfziffer selbst nachrechnen, den Größen- und Typcode lesen und die CSC-Plakette richtig deuten – mit Rechenbeispiel."
lang: "de"
category: "Grundlagen"
icon: "checklist"
readingTime: 10
published: 2026-09-25
updated: 2026-09-25
lead: "Jeder Seecontainer trägt eine Art Ausweis: Nummer, Typcode und Zulassungsplakette. Wer sie lesen kann, erkennt beim Gebrauchtkauf in zwei Minuten, ob Angebot und Container zusammenpassen."
order: 18
draft: false
---

## Warum sich der Blick auf die Kennzeichnung lohnt

Ein Seecontainer ist ein genormtes Transportmittel, und die Norm schreibt vor, dass er sich eindeutig ausweist. An jedem Container finden Sie deshalb drei Informationsblöcke: die **Container-Nummer**, den **Größen- und Typcode** und die **CSC-Plakette** an der Tür.

Für Käufer ist das mehr als Fachwissen. Mit diesen drei Angaben können Sie prüfen, ob der Container zum Angebot passt, ob die Nummer echt ist, wie alt er ist und ob er noch für den Seetransport zugelassen ist. Gerade beim Gebrauchtkauf aus der Ferne ist das eine der wenigen Angaben, die sich nicht schönfotografieren lässt.

## Die Container-Nummer nach ISO 6346

Die Container-Nummer steht in großen Zeichen an beiden Stirnseiten, an den Längsseiten und auf dem Dach. Sie besteht immer aus elf Zeichen und folgt der internationalen Norm **ISO 6346**.

| Stelle | Beispiel | Bedeutung |
| --- | --- | --- |
| 1–3 | CSQ | Eigentümercode, drei Buchstaben |
| 4 | U | Kategorie des Geräts |
| 5–10 | 305438 | Seriennummer, sechs Ziffern |
| 11 | 3 | Prüfziffer, meist umrahmt dargestellt |

**Eigentümercode.** Die ersten drei Buchstaben identifizieren den Eigentümer oder Betreiber – eine Reederei, einen Leasinggeber oder einen Händler. Die Codes werden zentral vom Bureau International des Containers (BIC) in Paris vergeben. Deshalb spricht man auch vom **BIC-Code**.

**Kategoriekennung.** Der vierte Buchstabe sagt, um welche Art Gerät es sich handelt:

| Buchstabe | Bedeutung |
| --- | --- |
| U | Frachtcontainer – der Normalfall |
| J | abnehmbares Zubehör, z. B. ein Aggregat |
| Z | Trailer oder Chassis |

Steht an Position vier etwas anderes als U, J oder Z, ist die Nummer nicht normgerecht.

**Seriennummer.** Sechs Ziffern, vom Eigentümer vergeben. Führende Nullen gehören dazu.

**Prüfziffer.** Die letzte Ziffer wird aus den zehn Zeichen davor berechnet. Sie dient dazu, Tippfehler und erfundene Nummern zu erkennen. Und genau das können Sie selbst nachrechnen.

## Die Prüfziffer selbst nachrechnen

Das Verfahren wirkt auf den ersten Blick umständlich, ist aber in fünf Minuten erledigt – mit einem Taschenrechner oder einer Tabellenkalkulation.

**Schritt 1: Buchstaben in Zahlen umwandeln.** Jeder Buchstabe erhält einen festen Wert. Die Werte beginnen bei 10 und lassen alle Vielfachen von 11 aus, also 11, 22 und 33:

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 23 | 24 |

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 34 | 35 | 36 | 37 | 38 |

Ziffern behalten ihren eigenen Wert.

**Schritt 2: Jede Stelle gewichten.** Die erste Stelle wird mit 1 multipliziert, die zweite mit 2, die dritte mit 4 – der Faktor verdoppelt sich also mit jeder Stelle bis 512.

**Schritt 3: Alles addieren, durch 11 teilen, den Rest nehmen.** Der Rest ist die Prüfziffer. Ergibt sich ein Rest von 10, lautet die Prüfziffer 0.

Durchgerechnet am Beispiel **CSQU 305438**:

| Zeichen | Wert | Faktor | Produkt |
| --- | --- | --- | --- |
| C | 13 | 1 | 13 |
| S | 30 | 2 | 60 |
| Q | 28 | 4 | 112 |
| U | 32 | 8 | 256 |
| 3 | 3 | 16 | 48 |
| 0 | 0 | 32 | 0 |
| 5 | 5 | 64 | 320 |
| 4 | 4 | 128 | 512 |
| 3 | 3 | 256 | 768 |
| 8 | 8 | 512 | 4.096 |
| **Summe** | | | **6.185** |

6.185 geteilt durch 11 ergibt 562 Rest **3**. Die vollständige Nummer lautet also **CSQU 305438 3** – und genau diese 3 muss rechts neben der Seriennummer am Container stehen.

**Was Ihnen das beim Kauf bringt:** Stimmt die Prüfziffer nicht, ist entweder die Nummer im Angebot falsch abgetippt oder sie existiert so nicht. Beides ist ein Grund, nachzufragen, bevor Geld fließt. Fordern Sie beim Gebrauchtkauf immer ein Foto, auf dem die Nummer des konkreten Containers lesbar ist, und rechnen Sie sie nach. Mehr zur Prüfung vor dem Kauf im Beitrag [Gebrauchten Container kaufen](/ratgeber/gebrauchten-container-kaufen).

## Der Größen- und Typcode

Direkt unter oder neben der Container-Nummer steht ein vierstelliger Code, etwa **22G1** oder **45G1**. Er beschreibt Abmessungen und Bauart.

**Erste Stelle – Länge:**

| Zeichen | Länge |
| --- | --- |
| 1 | 10 Fuß |
| 2 | 20 Fuß |
| 3 | 30 Fuß |
| 4 | 40 Fuß |
| L | 45 Fuß |

**Zweite Stelle – Höhe:**

| Zeichen | Höhe | Bezeichnung |
| --- | --- | --- |
| 0 | 8'0" (2.438 mm) | niedrige Bauform, heute selten |
| 2 | 8'6" (2.591 mm) | Standardhöhe |
| 5 | 9'6" (2.896 mm) | High Cube |

**Dritte und vierte Stelle – Bauart:**

| Code | Bauart |
| --- | --- |
| G0, G1 | Standardcontainer (General Purpose), G1 mit Lüftungsöffnungen oben |
| R1 | Kühlcontainer mit eigenem Kälteaggregat |
| U1 | Open Top mit abnehmbarem Dach |
| P1 | Flat Rack mit festen Stirnwänden |
| T… | Tankcontainer |

Die häufigsten Kombinationen, die Ihnen im Handel begegnen:

| Code | Bedeutung |
| --- | --- |
| 22G1 | 20 Fuß, Standardhöhe, Standardcontainer |
| 42G1 | 40 Fuß, Standardhöhe, Standardcontainer |
| 45G1 | 40 Fuß, High Cube, Standardcontainer |
| L5G1 | 45 Fuß, High Cube, Standardcontainer |
| 45R1 | 40 Fuß, High Cube, Kühlcontainer |
| 22U1 | 20 Fuß, Open Top |

Achtung bei der zweiten Stelle: Die **4** in 45G1 steht für die Länge (40 Fuß), die **5** für die Höhe (High Cube). Ein 45G1 ist also kein 45-Fuß-Container – der hätte ein L vorne.

Praktischer Nutzen: Wird Ihnen ein „40 Fuß High Cube" angeboten und am Container steht 42G1, handelt es sich um einen Container mit Standardhöhe. Der Unterschied beträgt rund 30 Zentimeter Innenhöhe – bei einem Ausbau zum Aufenthaltsraum ein erheblicher Unterschied. Die Maße im Detail finden Sie unter [Container-Größen und Maße](/ratgeber/container-groessen-und-masse).

## Die CSC-Plakette an der Tür

An der linken Tür, meist auf einer Metallplatte gemeinsam mit weiteren Schildern, sitzt die **CSC-Plakette**. CSC steht für das Internationale Übereinkommen über sichere Container von 1972. Die Plakette bestätigt, dass der Container für den Transport zugelassen ist.

Die wichtigsten Angaben darauf:

| Angabe | Bedeutung |
| --- | --- |
| Zulassungsland und -nummer | Wer den Bautyp zugelassen hat |
| Herstellungsdatum | Monat und Jahr der Fertigung – das tatsächliche Alter |
| Identifikationsnummer | entspricht der Container-Nummer |
| Maximales Bruttogewicht | Container plus Ladung, typisch ca. 30.480 kg bei 20 Fuß |
| Zulässige Stapellast | Gewicht, das auf dem Container gestapelt werden darf |
| Querstabilität (Racking) | Prüflast für seitliche Verformung |
| Nächste Prüfung oder ACEP | Hinweis auf den Prüfstatus |

**Das Herstellungsdatum** ist für Käufer die wertvollste Angabe auf der Plakette. Es verrät das echte Alter des Containers, unabhängig davon, was im Angebot steht.

**Der Prüfstatus** ist nur relevant, wenn der Container tatsächlich noch auf See oder im internationalen Verkehr eingesetzt werden soll. Nach dem Übereinkommen muss ein Container regelmäßig untersucht werden: die erste Prüfung spätestens fünf Jahre nach Herstellung, danach in Abständen von höchstens 30 Monaten. Alternativ kann der Eigentümer an einem genehmigten fortlaufenden Prüfprogramm teilnehmen, erkennbar am Vermerk **ACEP** auf der Plakette.

## Was das für Ihre Kaufentscheidung bedeutet

Für die allermeisten Käufer in Deutschland ist die CSC-Zulassung ohne Bedeutung. Ein Container, der als Lager, Werkstatt oder Gartenhaus stationär auf einem Grundstück steht, braucht keine gültige Plakette. Das ist der Grund, warum die Zustandsklasse „wind- und wasserdicht" günstiger ist als „Cargo Worthy": Der Container ist dicht, aber nicht mehr für den Seetransport zertifiziert.

Anders sieht es aus, wenn Sie den Container selbst verschiffen wollen – etwa für einen Umzug ins Ausland. Dann brauchen Sie einen Container mit gültiger Plakette oder ACEP-Vermerk, und es lohnt der Aufpreis für einen „Cargo Worthy"-Container.

| Verwendung | CSC-Plakette nötig? | Worauf Sie achten sollten |
| --- | --- | --- |
| Lager auf eigenem Grundstück | nein | Dichtheit, Boden, Türen |
| Ausbau zu Büro oder Wohnraum | nein | Alter, Rost, Innenhöhe laut Typcode |
| Transport per Lkw im Inland | in der Regel nein | Gewicht, Eckbeschläge intakt |
| Eigener Seetransport | ja | gültige Prüfung oder ACEP |
| Weiterverkauf an Seefracht-Kunden | ja | Plakette erhöht den Wiederverkaufswert |

## Checkliste: zwei Minuten am Container

Wenn Sie einen Container besichtigen oder Fotos anfordern, prüfen Sie diese fünf Punkte:

1. **Nummer vollständig und lesbar?** Elf Zeichen, Position vier ist U, J oder Z.
2. **Prüfziffer nachgerechnet?** Stimmt sie, ist die Nummer zumindest formal korrekt.
3. **Nummer überall gleich?** Stirnseite, Längsseite und Plakette sollten dieselbe Nummer zeigen. Abweichungen deuten auf einen umlackierten oder aus Teilen zusammengesetzten Container hin.
4. **Typcode passt zum Angebot?** Insbesondere High Cube (5 an zweiter Stelle) gegen Standardhöhe (2).
5. **Herstellungsdatum auf der Plakette?** Das ist das tatsächliche Alter – vergleichen Sie es mit der Angabe im Angebot.

Fehlen Nummer oder Plakette ganz, ist das nicht automatisch ein Ausschlusskriterium. Ältere Container werden oft umlackiert, wobei Kennzeichnungen verloren gehen. Sie verlieren damit aber die einfachste Möglichkeit, Alter und Herkunft zu prüfen, und sollten den Zustand umso genauer ansehen.

## Wichtiger Hinweis

> Dieser Beitrag beschreibt die Kennzeichnung nach ISO 6346 und dem CSC-Übereinkommen in allgemeiner Form. Einzelheiten der Normen, Codelisten und Prüffristen können sich ändern; maßgeblich sind die jeweils gültigen Fassungen. Die angegebenen Gewichte sind typische Werte und können je nach Bautyp abweichen – verbindlich sind die Angaben auf der Plakette des konkreten Containers.

## Fazit

Container-Nummer, Typcode und CSC-Plakette sind der Ausweis eines Seecontainers, und sie lassen sich ohne Fachkenntnis lesen. Mit der Prüfziffer erkennen Sie falsche oder erfundene Nummern, mit dem Typcode prüfen Sie, ob wirklich ein High Cube vor Ihnen steht, und mit dem Herstellungsdatum auf der Plakette erfahren Sie das echte Alter. Die CSC-Zulassung selbst brauchen Sie nur, wenn der Container wieder auf See gehen soll – für die stationäre Nutzung ist sie verzichtbar.

Weiterführend: [Gebrauchten Container kaufen](/ratgeber/gebrauchten-container-kaufen), [Seecontainer-Typen](/ratgeber/seecontainer-typen) und [Angebote vergleichen und Preise verhandeln](/ratgeber/container-angebote-vergleichen).
