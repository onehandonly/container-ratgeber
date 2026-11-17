---
title: "Thermal Bridges in Shipping Containers: Where the Heat Really Escapes"
description: "Steel conducts heat around a thousand times better than insulation. Where thermal bridges form on a container, how cold the critical spots get (worked example with fRsi and dew point), why interior insulation barely solves them, and how to avoid condensation and mould."
lang: "en"
category: "Technical"
icon: "wohn"
readingTime: 13
published: 2026-08-01
updated: 2026-11-17
lead: "A perfectly insulated container can still have cold, damp corners. The culprit is the continuous steel frame – and it can only be properly neutralised from the outside."
order: 86
draft: false
---

## Why steel is the real problem

A shipping container is a self-supporting structure made of Corten steel. Exactly what makes it stackable, transportable and durable is its biggest drawback in building physics terms: steel conducts heat extremely well. The thermal conductivity of structural steel is in the order of roughly 50 W/(m·K), while common insulation materials such as mineral wool, EPS or PUR sit around 0.035 W/(m·K). That is a difference of roughly a factor of 1,000 to 1,500.

Put visually: every continuous steel component is a motorway for heat, while the insulation next to it is a dirt track. If you fit a container with 80 millimetres of interior insulation but heat can still travel unhindered through a few centimetres of steel in the corner post, even the best insulation layer helps only so much. This deliberate bypass route for heat is called a thermal bridge.

It helps to distinguish two types. **Geometric thermal bridges** occur where a small internal surface meets a large external surface – the classic building corner. **Structural or material-related thermal bridges** occur when a highly conductive component penetrates the insulation layer. In a container, both types coincide at the same locations: the corners and the perimeter frame. That is why the effects are far more pronounced here than in a masonry building.

## Where thermal bridges sit on a container

The critical points are practically identical on every container because the form is standardised. The overview below links component, cause and typical consequence.

| Component | Why it is critical | Typical consequence |
| --- | --- | --- |
| Corner posts and corner castings | Solid steel volume, continuous inside to outside, no separation possible | Coldest points in the room, mould in room corners |
| Upper and lower rails | Perimeter steel beam running the full container length | Cold strips at wall-to-ceiling and wall-to-floor junctions |
| Door frame and door sill | Heavy frame with sealing plane, hard to over-insulate | Condensation at the sill, corrosion, draughts |
| Floor cross members under the timber floor | Steel profiles spaced a few decimetres apart, directly beneath the floor build-up | Cold floors, streak-shaped damp marks |
| Corrugated side wall profile | Corrugations enlarge the surface, cavities hinder gap-free insulation | Uneven surface temperature, ventilation gap errors |
| Window and door reveals after cutting | Welded-in frames create new continuous steel profiles | Condensation on the reveal, mould at the window corner |
| Bearing points on the foundation | Direct steel-to-concrete contact at pads or strip footings | Heat drain into the ground, moisture from below |
| Penetrations for services and ventilation | Every opening interrupts insulation and airtightness | Localised condensation, draughts |

Walk this list around a real container and the picture is clear: thermal bridges are not the exception, they are the rule, running around the entire structure.

## What happens: from heat loss to mould

Energy loss is the less dramatic consequence. How large it is depends on the build-up and can only be calculated for the specific project; higher heating demand is annoying but manageable. The real risk lies in the **surface temperature** on the inside.

At a thermal bridge, the internal surface cools more than the surrounding area. Warm room air touching that cold surface can hold less water vapour. If the surface temperature drops below the dew point of the room air, moisture condenses out. And well before the dew point, relative humidity directly at the surface rises far enough for mould to find growth conditions. As a rough orientation: if relative humidity at a surface stays above roughly 70 to 80 per cent for extended periods, mould growth becomes likely.

Building physics uses the **temperature factor fRsi** to assess this. It describes how close the internal surface temperature is to the room air temperature: 1 would mean "as warm as the room air", 0 "as cold as outside". The German standard DIN 4108-2 requires a minimum of fRsi ≥ 0.70 at thermal bridges to avoid mould – based on standard boundary conditions of 20 °C and 50 per cent relative humidity inside and −5 °C outside. Whether a specific container detail achieves this can only be judged by a thermal bridge calculation or a measurement on site.

## Worked example: how cold does the critical spot get?

The internal surface temperature follows from the temperature factor:

θsi = θe + fRsi × (θi − θe)

With θi = 20 °C inside and θe = −5 °C outside, the temperature difference is 25 K. At 20 °C and 50 per cent relative humidity the dew point of the room air is around 9.3 °C; the 80 per cent surface humidity threshold is reached at around 12.6 °C. That is exactly where the minimum value comes from: (12.6 + 5) ÷ 25 ≈ 0.70.

| Assumed fRsi | Surface temperature | Relative humidity at the surface (approx.) | Assessment |
| --- | --- | --- | --- |
| 0.90 (well-insulated area) | 17.5 °C | 58 % | not critical |
| 0.70 (DIN 4108-2 minimum) | 12.5 °C | 81 % | borderline |
| 0.60 | 10.0 °C | 95 % | mould likely, no condensation yet |
| 0.50 | 7.5 °C | above 100 % | condensation forms |

The fRsi values in the table are **assumed example values**, not measurements of particular container details. They do show the principle: a corner post or reveal whose surface drops to 10 °C in winter is enough for mould – visible condensation is not required.

## The second lever: indoor humidity

The calculation has a second adjustment screw that is often underestimated. The same cold spot behaves very differently depending on the humidity of the room air (room temperature 20 °C in each case):

| Room air | Dew point (approx.) | Surface humidity at 12.5 °C (fRsi 0.70) | at 10.0 °C (fRsi 0.60) |
| --- | --- | --- | --- |
| 40 % RH | 6.0 °C | approx. 64 % | approx. 76 % |
| 50 % RH | 9.3 °C | approx. 81 % | approx. 95 % |
| 60 % RH | 12.0 °C | approx. 97 % | condensation |

At 60 per cent indoor humidity, even a detail that just meets the standard becomes almost wet. A small container with little air volume reaches such levels quickly when cooking, showering or drying laundry and ventilation cannot keep up. That does not mean poor details can be "ventilated away" – but without controlled moisture removal even good insulation helps only so far. Concepts are described in [Container ventilation](/en/ratgeber/container-belueftung), seasonal advice in [Containers in winter](/en/ratgeber/container-im-winter).

> The decisive question is not "how much insulation is in the wall" but "how warm does the coldest spot in the room stay".

## Why interior insulation only partly solves it

Interior insulation is the usual container solution because it is cheap, preserves the external dimensions and keeps the container look. In building physics terms, however, it is the most difficult option.

The reason is simple: with interior insulation the entire steel frame sits **outside** the insulation layer. It takes on the outside temperature and stays cold in winter. Wherever that cold steel meets the interior – at every corner, every frame junction, every reveal – the cold travels past the insulation into the room. The result is cold strips along posts and rails that are often noticeable by hand in winter and show up as dark lines in wallpaper or paint.

On top of that, interior insulation reduces the already tight internal dimensions and shifts the dew point into the construction. Both are manageable but demand care. You will find the build-up basics in [Insulating a container](/en/ratgeber/container-daemmen), and the seamless variant in [Spray foam insulation](/en/ratgeber/spruehschaum-daemmung-container).

## Solutions in order of effectiveness

Not every measure works equally well. The order below reflects thermal effectiveness, not price.

| Measure | Effect | Effort and cost (rough orientation) |
| --- | --- | --- |
| External insulation of the whole envelope | Best solution: steel frame sits in the warm zone, thermal bridges largely neutralised | High; additional cladding and substructure needed, external dimensions grow |
| Combination of external and internal | Very good; even a thin external layer significantly de-risks the frame | Medium to high, two trades |
| Interior insulation with thermally separated studwork | Clearly better than metal studs; carry insulation over the frames with an overlap | Medium; timber battens instead of metal profiles, small extra cost |
| Reveal insulation at windows and doors | Reduces the most common mould pattern at the window corner | Low; thin insulation boards, high effect per euro |
| Insulation beneath the floor | Neutralises cross members and cold floors | Medium; requires a raised container or build-up from inside |
| Thermal separation at bearing points | Reduces heat drain into the foundation, protects against moisture from below | Low to medium; load-bearing insulation elements or elastomer pads |

The message of this table is uncomfortable but clear: anyone intending permanent living or working is safest with a closed external insulation layer. Everything else is damage limitation. For residential projects it is worth reading [Living in a container](/en/ratgeber/wohncontainer-ausbauen) before the first batten goes up.

### What to consider with external insulation

External insulation is thermally superior, but it changes the container as a component:

- **External dimensions grow.** With insulation and cladding, the container becomes wider and longer by the build-up thickness on every side. That can affect setback areas, boundary distances and permission – whether and which procedure is needed depends on location, duration and use, see [Container building permit](/en/ratgeber/container-baugenehmigung).
- **Keep the corner castings free or consciously give them up.** If you want to lift, stack or transport the container later, the corner castings must remain accessible. A closed façade over the castings effectively turns it into a fixed building.
- **Fixing the substructure.** Every fixing through the insulation is another small thermal bridge; thermally broken brackets or timber substructures reduce this.
- **The steel skin stays warm.** With purely external insulation the steel wall lies on the warm side and stays above the dew point – provided the external insulation is continuous.

## Details that decide the outcome in practice

- **No continuous metal profiles in the interior fit-out.** Metal studwork connecting the internal lining to the steel wall creates additional small thermal bridges every few decimetres. Timber battens conduct far less and are the better choice here.
- **Run insulation without interruption.** Otherwise gaps form at joints, corners and behind service voids. Insulation should run past the frame profiles with an overlap rather than stopping at them.
- **Make junctions airtight.** Convection through gaps carries far more moisture into the construction than diffusion does. One leaky corner can devalue an otherwise correct insulation layer.
- **Seal the vapour control layer properly.** Overlaps, junctions to floor and ceiling and all penetrations for sockets, cables and ventilation need suitable tapes and grommets.
- **Bundle penetrations.** Fewer holes mean fewer weak points. One central service entry beats ten scattered ones.
- **Set windows into the insulation layer.** A window fitted flush with the steel skin sits on the cold side when insulating internally. Moving it into the insulation layer and over-insulating the reveal raises the surface temperature at the window corner considerably. For fitting see [Retrofitting windows and doors](/en/ratgeber/container-fenster-tueren-nachruesten).

## Detecting and checking thermal bridges

Verification is part of the fit-out and is easier than many assume.

| Method | What it shows | Effort |
| --- | --- | --- |
| Thermal imaging in winter | Area-wide view of cold zones, ideal for handover | Medium; specialist or rented camera, temperature difference required |
| Infrared surface thermometer | Spot temperatures at corners, frames, reveals | Low; simple devices from approx. €30 |
| Temperature and humidity data logger | Shows trends over days and weeks instead of snapshots | Low to medium |
| Placing a hand on surfaces during frost | Quick first diagnosis at corners and door frames | Very low |
| Visual check after the first winter | Dark strips, damp stains, rust at the sill | None |

### Evaluating your own measurement

With a surface thermometer you can reverse the worked example. On a cold day, measure the room air, outdoor and surface temperature at the suspect spot and calculate:

fRsi ≈ (θsi − θe) ÷ (θi − θe)

Example: room 20 °C, outside 0 °C, corner post inside 11 °C → (11 − 0) ÷ (20 − 0) = 0.55. The value is well below 0.70 – this corner is a mould candidate. The measurement is only a snapshot: it is more meaningful when the outdoor temperature has been stable for hours, no sun is shining on the wall and the temperature difference is at least 15 K. Infrared thermometers read bare metal unreliably; a piece of tape as a measuring surface improves the result.

> If you insulate from the inside, treat the frame zones with particular care – or better, insulate from the outside in the first place.

## Important note

All figures in this article are guide values without guarantee; the worked examples use simplified, assumed values. They do not replace a project-specific thermal bridge calculation or professional design. For permanent living or working, German energy law requirements may also apply, see [GEG and containers](/en/ratgeber/container-geg-energierecht). Standards are cited for context; the current edition is decisive.

## Conclusion

Thermal bridges are not a side issue in containers, they are the central building physics challenge. The continuous steel frame is structurally necessary and thermally fatal. Ignoring it with pure interior insulation produces cold corners, condensation and, in the medium term, mould – regardless of how thick the insulation layer is across the surface.

The clear recommendation: for permanent occupied use, insulate externally or at least add a thin external layer. Where that is not possible, apply consistent care at frames, reveals, floor and bearing points, combined with thermally separated studwork and a genuinely sealed vapour control layer. Indoor humidity matters too: the worked example shows that a detail which just meets the standard at 50 per cent humidity becomes almost wet at 60 per cent. Without controlled moisture removal, even the best insulation helps only so far. Pure storage use without heating follows different rules, where ventilation takes priority – see [Using storage containers properly](/en/ratgeber/lagercontainer-richtig-nutzen).
