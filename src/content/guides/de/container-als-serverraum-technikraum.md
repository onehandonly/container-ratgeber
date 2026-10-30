---
title: "Container als Server- oder Technikraum: Wärmelast, Kühlung, Strom & Zugang"
description: "Wann sich ein Container als Server- oder Technikraum eignet: Wärmelast berechnen, Klimatisierung und Stromkosten am Rechenbeispiel, USV und Absicherung, Brandschutz, Zugang und typische Planungsfehler."
lang: "de"
category: "Technik"
icon: "container"
readingTime: 10
published: 2026-10-30
updated: 2026-10-30
lead: "Ein Container ist schnell aufgestellt, aber ein Technikraum steht und fällt mit der Wärmelast: Jedes Watt, das Ihre Geräte aufnehmen, muss als Wärme wieder hinaus. Im Rechenbeispiel (2 kW IT-Last, Dauerbetrieb) liegen die Stromkosten bei ca. 6.600–7.400 € pro Jahr – davon rund ein Fünftel bis knapp ein Drittel allein für die Kühlung."
order: 97
draft: false
---

## Für wen sich ein Technikcontainer eignet

Ein Container als Server- oder Technikraum kommt vor allem dann in Betracht, wenn im Gebäude kein geeigneter Raum frei ist oder die Technik bewusst abgesetzt stehen soll: etwa bei einem Gewerbebetrieb mit wachsender IT, bei Netz- und Funktechnik, Steuerungen, Messtechnik, Batteriespeichern im kleinen Maßstab oder als temporäre Lösung während eines Umbaus. Der Stahlkörper ist robust, lässt sich versetzen und bietet eine abschließbare, klar abgegrenzte Hülle.

Er ist aber **kein fertiger Rechenzentrumsraum**. Ein unausgebauter Container heizt sich in der Sonne auf, kühlt im Winter stark aus, kondensiert und hat weder Kühlung noch Brandmeldung noch eine belastbare Stromversorgung. Das alles muss geplant und bezahlt werden. Wer nur einen kleinen Server betreibt, fährt oft mit einem klimatisierten Raum im vorhandenen Gebäude oder mit externem Hosting günstiger. Ein Container lohnt sich, wenn Sie eigene Hardware vor Ort brauchen und der Platz fehlt oder die Technik räumlich getrennt sein soll.

Eine Übersicht zum Typ finden Sie auf der Seite [Technikcontainer](/container/technikcontainer). Für den allgemeinen Elektro-Innenausbau lesen Sie ergänzend [Elektroplanung im Container](/ratgeber/container-elektroplanung-innenausbau).

## Schritt 1: Wärmelast ermitteln

Die Grundregel ist einfach: **Fast die gesamte elektrische Leistung, die IT-Geräte aufnehmen, wird zu Wärme.** Ein Server mit 400 W Aufnahme gibt rund 400 W Wärme ab. Dazu kommen die Verluste von USV, Netzteilen und Beleuchtung sowie Wärmeeintrag von außen.

| Wärmequelle | Wie Sie sie ansetzen |
| --- | --- |
| Server, Switches, Router | tatsächliche Leistungsaufnahme (nicht nur Typenschild-Maximum), als Dauerlast |
| USV und Stromverteilung | Verluste je nach Gerät und Auslastung, grob einige Prozent der Last |
| Beleuchtung, Steckdosen, Nebengeräte | meist gering, aber mitzählen |
| Sonneneinstrahlung auf Dach und Wände | hängt von Ausrichtung, Anstrich, Dämmung und Beschattung ab |
| Personen bei Wartungsarbeiten | kurzzeitig, in der Regel vernachlässigbar |

Messen Sie die Leistung der Geräte, wenn möglich, mit einem Messgerät oder dem Zähler der Steckdosenleiste. Planen Sie dann Reserve ein: Technik wächst fast immer.

**Luftmenge als Plausibilitätsprüfung:** Für den Abtransport von 2 kW Wärme mit einem Temperaturunterschied von 10 K zwischen Zu- und Abluft sind grob 600 m³ Luft pro Stunde nötig (Näherung: Leistung in W geteilt durch 0,34 mal Temperaturdifferenz in K). Bei 5 K Differenz sind es schon rund 1.200 m³/h. Der Innenraum eines 20-Fuß-Containers fasst bei Standardhöhe ca. 33 m³ – die Luft wird also gut 18-mal pro Stunde (bei 5 K Differenz rund 36-mal) komplett umgewälzt. Das zeigt, warum Luftführung und Kühlgerätewahl wichtig sind.

## Schritt 2: Kühlkonzept wählen

| Konzept | Stärken | Schwächen |
| --- | --- | --- |
| Split-Klimagerät (Komfortklima) | günstig, verbreitet, schnell installiert | nicht für Dauerbetrieb im Winter und bei niedrigen Außentemperaturen ausgelegt, wenig Redundanz, begrenzte Entfeuchtungssteuerung |
| Präzisionsklimagerät | für Dauerbetrieb, Feuchtesteuerung, Alarmierung ausgelegt | deutlich teurer, höherer Planungsaufwand |
| Freie Kühlung mit Außenluft | spart Strom in kühlen Monaten | Staub, Feuchte und Schadgase müssen gefiltert werden; im Sommer reicht sie meist nicht |
| Zwei Geräte (Redundanz) | Ausfall eines Geräts führt nicht sofort zum Hitzestau | höhere Anschaffungskosten und Stromverteilung |

Wichtig ist die **Luftführung**: Kalte Luft gehört vor die Geräte, warme Abluft wird abgesaugt. Racks werden deshalb meist in einer Reihe entlang einer Längswand gestellt, damit Zu- und Abluftseite getrennt bleiben. Bei einer Innenbreite von ca. 2,35 m bleiben bei einer Rack-Tiefe von ca. 1 m noch rund 1,3 m Gang – eine zweite Reihe gegenüber ist in einem 20-Fuß-Container kaum sinnvoll möglich. Kältemittelkreisläufe und Verrohrung gehören in die Hände eines Fachbetriebs.

Wichtig ist auch der **Winter**: Ein Gerät, das nur kühlen kann, hilft nicht, wenn die Technik bei Frost Mindesttemperaturen braucht. Prüfen Sie die Herstellerangaben der Geräte zu Betriebstemperatur und Luftfeuchte und planen Sie gegebenenfalls Heizung oder ein geeignetes Klimagerät.

## Schritt 3: Hülle verbessern

Die Stahlhülle leitet Wärme und Kälte sehr gut. Drei Maßnahmen senken Kühl- und Heizlast:

- **Dämmung** innen oder außen; Hinweise zu Aufbau und Wärmebrücken stehen in [Container dämmen](/ratgeber/container-daemmen) und [Wärmebrücken am Container](/ratgeber/waermebruecken-container). Dämmung und Dampfsperre müssen zusammenpassen, sonst kondensiert es hinter der Verkleidung.
- **Beschattung:** Ein Überdach oder Sonnenschutz über dem Container senkt den Wärmeeintrag spürbar; die Statik der Konstruktion ist zu beachten, siehe [Containerdach und Dachlast](/ratgeber/container-dach-abdichten-dachlast).
- **Heller Anstrich** außen; Details unter [Container streichen](/ratgeber/container-streichen-beschichtungssystem).

Kondensat ist auch in Technikräumen ein Thema: Temperaturschwankungen zwischen kalter Hülle und warmer Technik begünstigen Tauwasser. Lesen Sie dazu [Container belüften](/ratgeber/container-belueftung).

## Rechenbeispiel: Stromkosten bei 2 kW IT-Last

Annahmen: 2 kW dauerhafte IT-Last (z. B. mehrere Server, Speicher und Netzwerktechnik), 8.760 Betriebsstunden pro Jahr, Strompreis 0,30 €/kWh. Das Kühlgerät erreicht eine Leistungszahl (EER) von 2,5 bis 4 – das heißt, es benötigt pro kWh abzuführender Wärme 0,25 bis 0,4 kWh Strom. Die Zahlen sind Annahmen zur Orientierung; reale Werte hängen von Gerät, Außentemperatur und Hülle ab.

| Posten | kWh pro Jahr | Kosten bei 0,30 €/kWh |
| --- | --- | --- |
| IT-Last (2 kW × 8.760 h) | 17.520 | ca. 5.256 € |
| Kühlung bei EER 4 | 4.380 | ca. 1.314 € |
| Kühlung bei EER 3 | 5.840 | ca. 1.752 € |
| Kühlung bei EER 2,5 | 7.008 | ca. 2.102 € |
| **Gesamt (EER 4 bis EER 2,5)** | **21.900 bis 24.528** | **ca. 6.570 bis 7.358 €** |

Das Verhältnis von Gesamtverbrauch zu IT-Verbrauch liegt hier zwischen 1,25 und 1,4. Nicht enthalten sind Verluste der USV, Heizung im Winter, Beleuchtung, Wartung und Abschreibung der Anlage. Der Strompreis wirkt linear: Bei 0,40 €/kWh steigen die Gesamtkosten im Beispiel auf ca. 8.760 bis 9.811 €. Vergleichen Sie diese Summe mit den Kosten für Hosting oder Colocation, bevor Sie den Container bestellen – die Hardware ist in dieser Rechnung noch gar nicht enthalten.

Ob sich Photovoltaik lohnt, hängt vom Lastprofil ab: Ein Rechner läuft nachts genauso wie tagsüber, ein Teil der Erzeugung wäre also nur mit Speicher nutzbar. Grundlagen finden Sie unter [Photovoltaik auf dem Container](/ratgeber/photovoltaik-auf-dem-container).

## Schritt 4: Stromversorgung und Absicherung

- **Anschluss:** Für Dauerlasten ist ein ausreichend dimensionierter, fachgerecht abgesicherter Anschluss nötig. Netzanschluss, Zähler und Absicherung klären Sie mit Netzbetreiber und Elektrofachkraft; siehe [Stromanschluss für Container](/ratgeber/container-stromanschluss).
- **Getrennte Stromkreise:** Technik, Klimatisierung und Beleuchtung sollten auf eigenen Kreisen liegen, damit ein Defekt nicht alles abschaltet.
- **Überspannungs- und Blitzschutz:** Zuleitungen von außen (Strom, Daten, Antennen) sind Einfallstore für Überspannungen. Das Schutzkonzept gehört in die Hände einer Elektrofachkraft; der Container selbst muss geerdet und in den Potentialausgleich einbezogen werden.
- **USV (unterbrechungsfreie Stromversorgung):** Sie überbrückt Netzausfälle für eine begrenzte Zeit und ermöglicht ein geordnetes Herunterfahren. Als grobe Faustformel gilt Laufzeit = nutzbare Batteriekapazität ÷ Last (ohne Wirkungsgradverluste). Bei 2 kW Last und 1 kWh nutzbarer Kapazität sind das nur rund 30 Minuten, in der Praxis weniger. Die Klimatisierung hängt meist nicht an der USV – prüfen Sie, wie schnell die Technik ohne Kühlung kritisch warm wird.
- **Notstrom:** Bei längeren Ausfällen kommt ein Aggregat in Betracht. Das braucht Platz, Abgasführung, Lagerung von Kraftstoff und Lärmschutz, siehe [Lärmschutz und Akustik](/ratgeber/container-laermschutz-akustik).
- **Überwachung:** Temperatur-, Feuchte- und Stromsensoren mit Alarmierung aufs Handy sind keine Luxuskomponente, sondern der Ersatz für die Person, die in einem Gebäude zufällig am Raum vorbeikommt.

## Schritt 5: Brandschutz

In einem kleinen Stahlraum mit viel Elektrik muss ein Brand früh erkannt werden. Üblich sind eine Brandfrüherkennung bzw. -meldung, Brandlast gering halten (kein Lagern von Kartons und Verpackung im Raum), Kabel sauber verlegen und geeignete Löschmittel bereithalten. Ob eine automatische Löschanlage sinnvoll oder gefordert ist, hängt von der Nutzung, vom Standort, von Anforderungen der Behörde und der Versicherung ab. Die Planung gehört zu Fachbetrieben. Allgemeines zum Thema steht in [Brandschutz im Container](/ratgeber/container-brandschutz-vorschriften). Bei Akkus und Speichersystemen gelten zusätzliche Anforderungen.

## Schritt 6: Zugang, Sicherheit und Anlieferung

- **Schloss und Tür:** Der Standardverschluss mit Stangen und Vorhängeschloss ist für Technik nur eine Mindestlösung. Sinnvoll sind Zylinderschlösser mit Schutz gegen Aufbohren, ggf. eine zusätzliche Tür innen oder Zutrittskontrolle mit Protokoll. Mehr dazu unter [Diebstahlschutz](/ratgeber/container-sichern-diebstahlschutz).
- **Einbruchmeldung und Kameras:** Wenn Kameras erfasste Personen aufzeichnen, gelten datenschutzrechtliche Vorgaben; klären Sie das vorher.
- **Kabeleintritt:** Durchführungen für Strom, Daten und Klima dichten Sie fachgerecht ab (Nagetiere, Feuchte, Brandübertragung). Neue Öffnungen schwächen die Stahlwand; siehe [Fenster und Türen nachrüsten](/ratgeber/container-fenster-tueren-nachruesten) für den Umgang mit Ausschnitten.
- **Standort und Boden:** Stellen Sie den Container erhöht und eben auf ein tragfähiges Fundament ([Fundament](/ratgeber/container-fundament)). Der Boden besteht aus Sperrholz auf Stahlquerträgern; schwere Racks sollten ihre Last über Grundrahmen oder Platten verteilen. Klären Sie die zulässige Last mit dem Hersteller. Vermeiden Sie Senken mit Hochwasserrisiko.
- **Wartungszugang:** Planen Sie Platz vor und hinter den Racks, Zugang für Gerätewechsel und einen freien Weg zur Tür.

## Genehmigung, Versicherung und Betrieb

Ob für den Technikcontainer eine Baugenehmigung nötig ist, hängt von Standort, Dauer und Nutzung ab; Hinweise finden Sie unter [Container und Baugenehmigung](/ratgeber/container-baugenehmigung). Bei Funk- und Netztechnik können weitere Vorgaben (z. B. zum Standort von Antennen) hinzukommen.

Klären Sie mit dem Versicherer, ob Elektronik, Inhalt und Betriebsunterbrechung abgedeckt sind und welche Auflagen (Brandmeldung, Zutrittsschutz) gelten – siehe [Container versichern](/ratgeber/container-versichern). Die laufenden Kosten ergeben sich aus Strom, Wartung der Klimatechnik, Filtertausch und Prüfungen der elektrischen Anlage.

## Typische Planungsfehler

- **Kühlung nach Typenschild statt nach Messung ausgelegt** – ein zu großes Gerät taktet, ein zu kleines läuft ständig am Limit.
- **Nur ein Klimagerät, keine Überwachung:** Fällt es im Sommer aus, steigt die Temperatur schneller, als jemand reagieren kann.
- **Winter vergessen:** Kondensat und Frost schaden Technik, die nur für Sommerbetrieb gedacht war.
- **Zugang unterschätzt:** Schwere Geräte müssen durch die Tür und an den Platz.
- **Strom nicht eingerechnet:** Die Betriebskosten übersteigen oft die Anschaffung des Containers.

## Fazit

Ein Container kann ein brauchbarer Server- oder Technikraum sein, wenn Sie die Wärmelast messen, Kühlung samt Redundanz planen, Strom und Brandschutz fachgerecht umsetzen und den Zugang absichern. Im Rechenbeispiel mit 2 kW kostet der Dauerbetrieb ca. 6.570–7.358 € Strom im Jahr, bevor Anschaffung, Ausbau und Wartung hinzukommen. Rechnen Sie daher vorab gegen Hosting oder einen Raum im Gebäude.

## Wichtiger Hinweis

Die Angaben sind allgemeine Orientierung ohne Gewähr. Elektroinstallation, Blitz- und Überspannungsschutz, Kältetechnik und Brandschutz sind Aufgaben für Fachbetriebe und Elektrofachkräfte. Anforderungen aus Baurecht (Landesbauordnungen), Versicherungsbedingungen und Datenschutz hängen vom Einzelfall ab. Klären Sie sie mit der zuständigen Behörde und Ihrem Versicherer.
