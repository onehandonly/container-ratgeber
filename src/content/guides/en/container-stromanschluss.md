---
title: "Power Connection for a Container: Site Supply, Fixed Connection & Protection"
description: "Connecting a container to the electricity supply: the difference between a temporary CEE distribution board and a fixed grid connection, calculating power demand, cable cross-section and voltage drop, RCD protection, and who may carry out the work."
lang: "en"
category: "Technical"
icon: "checklist"
readingTime: 10
published: 2026-09-27
updated: 2026-09-27
lead: "Without power, any container stays a steel box. How to get connected to the grid – from a temporary site distribution board to a permanent fixed connection."
order: 91
draft: false
---

A container only becomes a usable space once it has power: lighting, heating, sockets, and often tools or refrigeration in commercial use. What the connection looks like depends above all on how long the container will stay in place. This guide explains the two basic routes – temporary site supply and a fixed grid connection – works through a calculation example of how much power is actually needed, and makes clear where DIY work ends.

Note on scope: this article covers connecting a container to mains power, whether temporary or permanent. For a container run independently of the public grid, see [Off-grid living in a container](/en/ratgeber/autarkes-wohnen-im-container), which covers solar sizing and storage in detail.

## Two fundamentally different situations

**Temporary** – the container stands for weeks to a few years, for example as site infrastructure, interim storage, or a transitional office. A **site power connection** through a mobile CEE distribution board is normally sufficient here.

**Permanent** – the container stays put, is lived in, or used commercially. Here there is no way around a **fixed connection** to the local electricity grid, just as with any building.

The two routes differ considerably in effort, cost, and legal requirements. Choose the wrong one and you either pay needlessly for a makeshift setup or invest in a fixed connection you never recoup over a short stay.

| Criterion | Site power connection | Fixed connection |
| --- | --- | --- |
| Typical duration | weeks to roughly 2–3 years | permanent |
| Installation | mobile CEE distribution board, often rented | meter cabinet to the grid operator's specification |
| Who applies | usually the contractor or tenant directly | landowner or building owner, with the grid operator |
| Approval effort | low | application to the distribution network operator, allow lead time |
| Ongoing cost | board rental plus consumption, often via a site meter | normal domestic electricity tariff |
| Typical setup cost | roughly €200–800 for board/connection work | roughly €1,300–4,000 with an existing service connection, considerably more with a new underground cable (see cost table below) |

## The site power connection: setup and process

A site distribution board is a weatherproof cabinet with CEE sockets, circuit breakers, and its own RCD. It is either provided by the local grid operator for a connection fee, or set up on site as a standalone unit fed from an existing supply – for example, a neighbouring building's mains connection.

In Germany, the relevant standard for electrical installations on construction sites is **DIN VDE 0100-704** ("Erection of low-voltage installations – Construction and demolition site installations"). Among other things, it requires socket circuits to be protected by an **RCD with a rated residual current of no more than 30 mA** – noticeably stricter than in many older existing buildings.

CEE connectors are standardised by colour and current rating:

- **Blue, 230 V (single-phase):** 16 A corresponds to roughly 3.7 kW, 32 A to roughly 7.4 kW.
- **Red, 400 V (three-phase):** 16 A corresponds to roughly 11 kW, 32 A to roughly 22 kW.

For lighting, small appliances, and a single heater, a blue 16 A socket is usually enough. Once an instantaneous water heater, compressor, welding equipment, or several fan heaters running at once are added, a red three-phase socket becomes necessary.

## The fixed connection to the local grid

For a permanent container, the same procedure applies as for building a new house: the grid connection is applied for with the responsible **distribution network operator (DNO)**, not with the electricity supplier. The DNO sets out in its own **technical connection conditions** how the meter cabinet and meter position must be executed. The connection may only be carried out by an electrical contractor registered in the DNO's list of approved installers.

Key steps in practice:

1. Register the connection with the DNO as early as possible in the project – lead times of several weeks are common.
2. Clarify whether a mains connection already exists on the plot or needs to be newly laid. A new underground cable run over a longer distance is the biggest cost driver.
3. Install a compliant meter cabinet with meter position, main fuse, and distribution board – usually in or directly next to the container.
4. Have the installation signed off by the contracting electrician and register it with the electricity supplier.

Anyone using a site with an existing mains connection (for example, an already-serviced plot) typically comes off considerably cheaper than with a completely new connection on an undeveloped site.

## How much power does a container actually need? A calculation example

As orientation, a worked example for a fitted-out 20-foot residential or office container with typical household loads:

| Load | Connected power approx. |
| --- | --- |
| Lighting (LED, whole container) | 0.1 kW |
| General socket circuit | 2.0 kW |
| Electric heating or heat pump (peak) | 2.5 kW |
| Instantaneous water heater (if fitted) | 18–21 kW (brief peak load) |
| Kitchen appliances (cooker, microwave) | 3.0 kW |

Without an instantaneous water heater, the realistic **diversity load** – what actually runs at the same time, not the sum of every appliance – usually comes to roughly 4 to 6 kW. A single-phase CEE 32 A socket at around 7.4 kW typically covers that. An electric instantaneous water heater changes the calculation fundamentally: its brief peak load of roughly 18 to 21 kW almost always requires a three-phase connection with correspondingly sized supply cable – it is nearly always worth comparing this against a hot water cylinder, which spreads the load over time instead.

## Cable cross-section and voltage drop: a calculation example

The longer the cable run from the distribution board to the container, the more voltage is lost along the way. As a rule of thumb, a maximum voltage drop of around 3 percent is used for lighting circuits and around 5 percent for other loads – a common planning guideline, not a binding figure for every case.

Voltage drop can be estimated with U = 2 · L · I · ρ / A (copper, ρ ≈ 0.0178 Ω·mm²/m, accounting for both the outgoing and return conductor). For a single-phase 16 A circuit, this gives:

| Cable length | 1.5 mm² | 2.5 mm² | 4 mm² |
| --- | --- | --- | --- |
| 25 m | approx. 9.5 V (4.1%) | approx. 5.7 V (2.5%) | approx. 3.6 V (1.5%) |
| 50 m | approx. 19.0 V (8.3%) | approx. 11.4 V (5.0%) | approx. 7.1 V (3.1%) |

The table shows that from roughly 25 to 50 metres of cable length, a thin 1.5 mm² cross-section at 16 A is often no longer sufficient to stay within the acceptable range – a switch to 2.5 or 4 mm² becomes necessary. This is an approximate calculation for orientation; binding sizing, including installation method, ambient temperature, and protective devices, belongs in the hands of a qualified electrician.

## Protection and earthing

Regardless of whether it is a site supply or a fixed connection, a container needs its own compliant protection.

- **RCD (residual current device):** protects people from dangerous fault currents, for example from a damaged cable or moisture. In new installations, socket circuits up to 32 A require a maximum rated residual current of 30 mA – on construction sites and in damp areas in any case.
- **Circuit breakers:** protect the cable itself against overload and short circuit, sized to match the cable cross-section.
- **Earthing/equipotential bonding:** the container's steel shell must be tied into the equipotential bonding system so that it cannot become live in a fault condition.
- **Recurring inspection:** portable equipment and the electrical installation on construction sites are subject to recurring inspection requirements under the relevant occupational safety regulations.

## Who may carry out the work

Connecting to the public grid, installing a meter cabinet, and any work on the fixed electrical installation may only be carried out by a **qualified electrician** – DIY is not an option here, however simple the job looks. Insurers, too, regularly require proof of professional workmanship in the event of a claim. It is permitted to plug an existing CEE cable into an approved socket – but not to wire a distribution board yourself or replace fuses.

## No grid connection available: the off-grid solar alternative

Where no grid connection is available, or the container is meant to run entirely independently of the public grid, an **off-grid photovoltaic system with battery storage** is the alternative. Sizing, storage capacity, and typical loads for such a setup are covered in detail in [Off-grid living in a container](/en/ratgeber/autarkes-wohnen-im-container). A middle path is **grid connection with solar support**: the container stays connected to the grid, while a roof-mounted system covers part of the consumption.

## Cost overview

The following figures are **rough indicative ranges without guarantee** – actual costs depend heavily on region, distance to the nearest connection point, and provider.

| Item | Cost range approx. |
| --- | --- |
| Renting a site distribution board (per month) | €20–60 |
| Buying a site distribution board (own unit) | €300–900 |
| CEE extension cable, depending on length/cross-section | €50–300 |
| Fixed connection via DNO (existing mains connection on the plot) | €500–1,500 |
| Fixed connection with new underground cable run | €2,000–8,000 and more |
| Meter cabinet including installation | €800–2,500 |

## Common mistakes

- **Running a site supply as a permanent solution for years.** Temporary distribution boards are neither designed for, nor economical in, permanent operation – beyond a few years, a fixed connection is almost always worthwhile.
- **Extension cable too thin over long distances.** Leads to voltage drop, hot cables, and in extreme cases fire risk.
- **Applying for the grid connection too late.** Lead times of several weeks with the distribution network operator are regularly underestimated and delay moving in.
- **Retrofitting an instantaneous water heater without consulting an electrician.** The peak load frequently exceeds the existing protection.
- **DIY work on the fixed installation.** Not legally permitted, invalidates insurance cover, and potentially life-threatening in the event of a fault.

## Important note

This is general information under German law and practice (relevant standards, grid operator procedures) and does not replace electrical design or legal advice. Which connection, protection, and cable cross-section are permissible and appropriate in a specific case is determined by a qualified electrician taking the actual situation into account. Standards and cost figures are indicative only.

## Conclusion

For a temporary container, a site power connection via a compliant CEE distribution board is the right and economical solution. If the container stays permanently, there is no way around a fixed connection to the local grid – with sufficient lead time for registering with the grid operator. In both cases: estimate power demand realistically, choose a cable cross-section that matches the distance, and leave the execution to a qualified electrician.
