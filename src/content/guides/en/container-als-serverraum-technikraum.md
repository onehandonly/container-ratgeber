---
title: "Container as a Server or Equipment Room: Heat Load, Cooling, Power & Access"
description: "When a container works as a server or equipment room: calculating heat load, cooling and electricity costs in a worked example, UPS and protection, fire safety, access and typical planning mistakes."
lang: "en"
category: "Technical"
icon: "container"
readingTime: 10
published: 2026-10-30
updated: 2026-10-30
lead: "A container is quickly in place, but an equipment room stands or falls with its heat load: every watt your devices draw must leave again as heat. In the worked example (2 kW IT load, continuous operation) electricity costs about €6,600–7,400 a year – roughly a fifth to just under a third of it for cooling alone."
order: 97
draft: false
---

*Note: This article reflects the German situation (state building codes, German electrical and insurance practice). Prices are in euros.*

## Who a technical container suits

A container as a server or equipment room is worth considering when no suitable room is free in the building or the equipment should deliberately stand apart: a business with growing IT, network and radio equipment, control systems, measuring technology, small battery storage, or a temporary solution during a refurbishment. The steel shell is robust, can be moved and offers a lockable, clearly separated enclosure.

It is **not a ready-made data-centre room**, however. A bare container heats up in the sun, cools down strongly in winter, produces condensation and has no cooling, no fire detection and no dependable power supply. All of that has to be planned and paid for. If you only run a small server, an air-conditioned room in an existing building or external hosting is often cheaper. A container pays off when you need your own hardware on site and either lack space or want the equipment physically separated.

For an overview of the type, see the [technical container](/en/container/technikcontainer) page. For general electrical fit-out, also read [electrical planning in a container](/en/ratgeber/container-elektroplanung-innenausbau).

## Step 1: determine the heat load

The basic rule is simple: **almost all the electrical power IT equipment draws becomes heat.** A server drawing 400 W gives off about 400 W of heat. Add losses from the UPS, power supplies and lighting, plus heat gain from outside.

| Heat source | How to account for it |
| --- | --- |
| Servers, switches, routers | actual power draw (not just the nameplate maximum), as a continuous load |
| UPS and power distribution | losses depending on device and load, roughly a few per cent of the load |
| Lighting, sockets, ancillary devices | usually small, but count them |
| Solar gain on roof and walls | depends on orientation, paint, insulation and shading |
| People during maintenance | short-term, usually negligible |

If possible, measure the devices' draw with a meter or the metering of the power strip. Then add a reserve: equipment almost always grows.

**Airflow as a plausibility check:** removing 2 kW of heat with a 10 K temperature difference between supply and exhaust air takes roughly 600 m³ of air per hour (approximation: power in W divided by 0.34 times the temperature difference in K). At 5 K the figure is already about 1,200 m³/h. The interior of a standard-height 20-foot container holds about 33 m³ – so the air is completely turned over a good 18 times an hour (about 36 times at 5 K). That is why air routing and the choice of cooling unit matter.

## Step 2: choose a cooling concept

| Concept | Strengths | Weaknesses |
| --- | --- | --- |
| Split air conditioner (comfort cooling) | cheap, widespread, quick to install | not designed for continuous operation at low outside temperatures, little redundancy, limited humidity control |
| Precision air conditioner | built for continuous operation, humidity control, alarms | much more expensive, more planning effort |
| Free cooling with outside air | saves electricity in cool months | dust, humidity and corrosive gases must be filtered; usually not enough in summer |
| Two units (redundancy) | one failure does not lead straight to heat build-up | higher purchase cost and power distribution |

**Air routing** is important: cold air belongs in front of the devices, warm exhaust air is drawn off. Racks are therefore usually placed in one row along a long wall so that supply and exhaust sides stay separate. With an internal width of about 2.35 m and a rack depth of about 1 m, roughly 1.3 m of aisle remains – a second opposite row is hardly practical in a 20-foot container. Refrigerant circuits and piping are a job for a specialist firm.

**Winter** matters too: a unit that can only cool does not help if the equipment needs a minimum temperature in frost. Check the manufacturers' data on operating temperature and humidity and, where needed, plan heating or a suitable air conditioner.

## Step 3: improve the shell

Steel conducts heat and cold very well. Three measures reduce the cooling and heating load:

- **Insulation**, inside or outside; see [insulating a container](/en/ratgeber/container-daemmen) and [thermal bridges in containers](/en/ratgeber/waermebruecken-container). Insulation and vapour barrier must match, otherwise condensation forms behind the lining.
- **Shading:** a canopy or sun shield over the container noticeably reduces heat gain; mind the structural loads, see [container roof and roof load](/en/ratgeber/container-dach-abdichten-dachlast).
- **Light exterior paint**; details under [painting a container](/en/ratgeber/container-streichen-beschichtungssystem).

Condensation is an issue in equipment rooms as well: temperature swings between the cold shell and warm equipment favour dew. Read [ventilating a container](/en/ratgeber/container-belueftung).

## Worked example: electricity costs at 2 kW IT load

Assumptions: 2 kW continuous IT load (for example several servers, storage and network equipment), 8,760 operating hours a year, electricity at €0.30/kWh. The cooling unit achieves an energy efficiency ratio (EER) of 2.5 to 4 – meaning it needs 0.25 to 0.4 kWh of electricity per kWh of heat removed. These are illustrative assumptions; real values depend on unit, outside temperature and shell.

| Item | kWh per year | Cost at €0.30/kWh |
| --- | --- | --- |
| IT load (2 kW × 8,760 h) | 17,520 | approx. €5,256 |
| Cooling at EER 4 | 4,380 | approx. €1,314 |
| Cooling at EER 3 | 5,840 | approx. €1,752 |
| Cooling at EER 2.5 | 7,008 | approx. €2,102 |
| **Total (EER 4 to EER 2.5)** | **21,900 to 24,528** | **approx. €6,570 to €7,358** |

The ratio of total to IT consumption here lies between 1.25 and 1.4. Not included are UPS losses, winter heating, lighting, maintenance and depreciation of the installation. Electricity price scales linearly: at €0.40/kWh the total in the example rises to about €8,760–9,811. Compare this sum with the cost of hosting or colocation before ordering the container – the hardware is not yet part of the calculation.

Whether photovoltaics pays off depends on the load profile: a server runs at night as it does by day, so part of the generation would only be usable with storage. Basics are in [photovoltaics on a container](/en/ratgeber/photovoltaik-auf-dem-container).

## Step 4: power supply and protection

- **Connection:** continuous loads need a properly sized, professionally protected supply. Clarify the grid connection, meter and fusing with the network operator and a qualified electrician; see [power supply for containers](/en/ratgeber/container-stromanschluss).
- **Separate circuits:** equipment, air conditioning and lighting should be on their own circuits so that one fault does not switch everything off.
- **Surge and lightning protection:** incoming lines (power, data, antennas) are entry points for surges. The protection concept is a job for a qualified electrician; the container itself must be earthed and included in equipotential bonding.
- **UPS (uninterruptible power supply):** it bridges mains failures for a limited time and allows an orderly shutdown. A rough rule: runtime = usable battery capacity ÷ load (ignoring efficiency losses). At 2 kW load and 1 kWh usable capacity that is only about 30 minutes, in practice less. Air conditioning is usually not on the UPS – check how quickly the equipment becomes critically warm without cooling.
- **Backup power:** for longer outages a generator comes into question. It needs space, exhaust routing, fuel storage and noise control, see [noise control and acoustics](/en/ratgeber/container-laermschutz-akustik).
- **Monitoring:** temperature, humidity and power sensors with phone alerts are not a luxury but the replacement for the person who happens to walk past a room in a building.

## Step 5: fire safety

In a small steel room full of electrics a fire must be detected early. Typical measures are early fire detection or alarm, keeping the fire load low (no storing of cardboard and packaging in the room), tidy cabling and suitable extinguishing agents at hand. Whether an automatic extinguishing system is sensible or required depends on use, location, authority requirements and the insurer. Planning belongs with specialist firms. General background is in [fire safety in containers](/en/ratgeber/container-brandschutz-vorschriften). Batteries and storage systems bring additional requirements.

## Step 6: access, security and delivery

- **Lock and door:** the standard locking bars with a padlock are only a minimum solution for equipment. Cylinder locks resistant to drilling, possibly an additional inner door or access control with logging make sense. More under [theft protection](/en/ratgeber/container-sichern-diebstahlschutz).
- **Intruder alarm and cameras:** if cameras record people, German data-protection rules apply; clarify this beforehand.
- **Cable entry:** seal penetrations for power, data and air conditioning properly (rodents, moisture, fire transfer). New openings weaken the steel wall; see [retrofitting windows and doors](/en/ratgeber/container-fenster-tueren-nachruesten) for handling cut-outs.
- **Site and floor:** place the container level and raised on a load-bearing foundation ([foundations](/en/ratgeber/container-fundament)). The floor is plywood on steel cross-members; heavy racks should spread their load via base frames or plates. Clarify the permitted load with the manufacturer. Avoid hollows with flood risk.
- **Maintenance access:** plan space in front of and behind the racks, access for swapping devices and a clear route to the door.

## Permits, insurance and operation

Whether the equipment container needs a building permit depends on location, duration and use; see [containers and building permits](/en/ratgeber/container-baugenehmigung). For radio and network equipment, further rules (for example on antenna sites) may apply.

Ask the insurer whether electronics, contents and business interruption are covered and which conditions (fire alarm, access protection) apply – see [insuring a container](/en/ratgeber/container-versichern). Running costs consist of electricity, servicing of the cooling equipment, filter changes and inspections of the electrical installation.

## Typical planning mistakes

- **Cooling sized from the nameplate instead of measurement** – an oversized unit short-cycles, an undersized one runs permanently at its limit.
- **Only one air conditioner and no monitoring:** if it fails in summer, the temperature rises faster than anyone can react.
- **Forgetting winter:** condensation and frost damage equipment intended only for summer operation.
- **Underestimating access:** heavy devices must get through the door and to their place.
- **Leaving electricity out:** running costs often exceed the purchase price of the container.

## Conclusion

A container can make a workable server or equipment room if you measure the heat load, plan cooling with redundancy, carry out power and fire protection professionally and secure access. In the 2 kW example, continuous operation costs about €6,570–7,358 of electricity a year before purchase, fit-out and maintenance. Calculate against hosting or a room in the building first.

## Important note

The information is general guidance without warranty. Electrical installation, lightning and surge protection, refrigeration technology and fire protection are tasks for specialist firms and qualified electricians. Requirements from building law (state building codes), insurance terms and data protection depend on the individual case. Clarify them with the competent authority and your insurer.
