# Container-Ratgeber.de

Unabhängiges, werbefinanziertes Ratgeber-Portal rund um Container – zweisprachig
(Deutsch/Englisch), gebaut mit **Astro** und **Tailwind CSS** als statische Website.

- **Design:** „Pixel-Twin" (Indigo/Cyan), eigenes Voxel-Logo, alle Grafiken selbst
  erstellt (keine fremden Bildquellen → keine Copyright-Fragen).
- **Sprachen:** Deutsch unter `/`, Englisch unter `/en/` (Sprachumschalter + `hreflang`).
- **Monetarisierung:** Google-AdSense-Werbeplätze (Platzhalter bis zur Freigabe),
  Google Analytics 4 / GTM – alles per Umgebungsvariable aktivierbar und
  Consent-gesteuert (Google Consent Mode v2 + Cookie-Banner).

---

## Lokale Entwicklung

```sh
pnpm install
pnpm dev        # Dev-Server auf http://localhost:4321
pnpm build      # Produktions-Build nach ./dist
pnpm preview    # Build lokal ansehen
```

Node ≥ 20 erforderlich (empfohlen 22).

## Projektstruktur

```
src/
├── components/        UI-Komponenten (Header, Footer, Logo, AdSlot, Icons …)
│   └── pages/         Seiten-Bausteine (Home, GuideIndex, ContainerType …)
├── content/guides/    Ratgeber-Artikel als Markdown
│   ├── de/            deutsche Artikel
│   └── en/            englische Artikel
├── layouts/           BaseLayout & ArticleLayout
├── lib/               site.ts (Konfiguration), i18n.ts, guides.ts, typeDetails.ts
├── pages/             Routen (Deutsch = Wurzel, Englisch unter /en)
└── styles/            tokens.css (Design-Tokens) & global.css
```

## Neuen Ratgeber-Artikel anlegen

1. Markdown-Datei unter `src/content/guides/de/<slug>.md` (und `en/<slug>.md`) anlegen.
2. Frontmatter ausfüllen:

   ```yaml
   ---
   title: "Titel des Artikels"
   description: "Kurzbeschreibung für Teaser & Meta-Description"
   lang: "de"            # oder "en"
   category: "Grundlagen"
   icon: "container"     # container|bau|buero|wohn|sanitaer|lager|see|abroll|kuehl|ruler|euro|checklist|permit
   readingTime: 8
   published: 2026-08-01
   updated: 2026-08-01
   lead: "Einleitender Satz, der oben hervorgehoben wird."
   order: 100            # kleiner = weiter oben
   draft: false
   ---
   ```

3. Fließtext in reinem Markdown (Überschriften ab `##`). Der Artikel erscheint
   automatisch in der Ratgeber-Übersicht und bekommt eine eigene URL.

## Werbung & Analytics aktivieren

Alle Tracking-/Werbe-Skripte laden **nur**, wenn die passende Umgebungsvariable
gesetzt ist (siehe `.env.example`). Ohne Werte bleibt die Seite trackingfrei.

| Variable | Zweck | Format |
| --- | --- | --- |
| `PUBLIC_GA_ID` | Google Analytics 4 | `G-XXXXXXXXXX` |
| `PUBLIC_GTM_ID` | Google Tag Manager | `GTM-XXXXXXX` |
| `PUBLIC_ADSENSE_CLIENT` | Google AdSense | `ca-pub-XXXXXXXXXXXXXXXX` |

Für den Livebetrieb werden die Werte als **Repository-Secrets/Variables** hinterlegt
und im Deploy-Workflow als `env` an den Build übergeben, z. B.:

```yaml
      - name: Build
        run: pnpm build
        env:
          PUBLIC_GA_ID: ${{ vars.PUBLIC_GA_ID }}
          PUBLIC_ADSENSE_CLIENT: ${{ vars.PUBLIC_ADSENSE_CLIENT }}
```

Sobald `PUBLIC_ADSENSE_CLIENT` gesetzt ist, werden aus den Werbeplatz-Platzhaltern
echte Anzeigen (Slot-IDs in `AdSlot`-Komponenten ergänzen).

---

## Deployment über GitHub Pages

Der Workflow `.github/workflows/deploy.yml` baut das Projekt und veröffentlicht es
über GitHub Pages.

**Einmalige Einrichtung im Repository:**

1. **Settings → Pages → Build and deployment → Source:** „GitHub Actions".
2. **Settings → Pages → Custom domain:** `container-ratgeber.de` eintragen
   (nutzt `public/CNAME`). „Enforce HTTPS" aktivieren, sobald verfügbar.
3. Optional unter **Settings → Secrets and variables → Actions → Variables** die
   Werte `PUBLIC_GA_ID`, `PUBLIC_GTM_ID`, `PUBLIC_ADSENSE_CLIENT` hinterlegen.
4. Bei jedem Push auf `main` läuft der Workflow automatisch.

### DNS bei inwx.de einrichten

Die Domain `container-ratgeber.de` ist bei **inwx.de** registriert. Damit sie auf
GitHub Pages zeigt, im inwx-Kundenbereich unter **Domains → container-ratgeber.de →
DNS / Nameserver-Einstellungen** folgende Einträge anlegen:

**A-Records** (Apex/Root `@` → GitHub Pages):

| Typ | Host | Wert |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**AAAA-Records** (IPv6, optional aber empfohlen):

| Typ | Host | Wert |
| --- | --- | --- |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

**CNAME** (für `www`):

| Typ | Host | Wert |
| --- | --- | --- |
| CNAME | www | `onehandonly.github.io.` |

> Der CNAME-Wert ist `<GitHub-Benutzer/Org>.github.io.` – aktuell `onehandonly`.
> Bei einem eigenen Repo unter einem anderen Konto entsprechend anpassen.

Nach dem Setzen der Einträge kann die DNS-Verbreitung einige Stunden dauern.
Anschließend in den GitHub-Pages-Einstellungen die Domain verifizieren und
„Enforce HTTPS" aktivieren.

---

## Hinweise

- **Bilder/Assets:** Logo, Icons, OG-Bild und Container-Illustrationen sind eigene
  SVGs. Das OG-Vorschaubild liegt als SVG vor; für maximale Kompatibilität mit
  Social-Media-Crawlern kann optional eine PNG-Variante (1200×630) ergänzt werden.
- **Schriften:** „Inter" und „Sora" werden über Google Fonts geladen (in der
  Datenschutzerklärung genannt). Für eine strengere DSGVO-Auslegung können die
  Schriften selbst gehostet werden.
- **Rechtstexte:** Impressum und Datenschutz sind mit den Betreiberdaten befüllt,
  stellen aber keine Rechtsberatung dar und sollten vor dem Livegang geprüft werden.
