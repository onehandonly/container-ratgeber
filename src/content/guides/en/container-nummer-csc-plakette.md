---
title: "Reading the container number and CSC plate: what a container tells you about itself"
description: "How to decode a container number under ISO 6346, calculate the check digit yourself, read the size and type code, and interpret the CSC safety approval plate – with a worked example."
lang: "en"
category: "Basics"
icon: "checklist"
readingTime: 10
published: 2026-09-25
updated: 2026-09-25
lead: "Every shipping container carries a kind of ID card: number, type code and approval plate. If you can read them, you can tell within two minutes whether a used container matches its listing."
order: 18
draft: false
---

## Why the markings are worth a look

A shipping container is a standardised piece of transport equipment, and the standard requires it to identify itself unambiguously. Every container therefore carries three blocks of information: the **container number**, the **size and type code**, and the **CSC plate** on the door.

For buyers this is more than trivia. With these three items you can check whether the container matches the listing, whether the number is genuine, how old the unit is and whether it is still approved for sea transport. Particularly when buying used at a distance, it is one of the few details that cannot be flattered by good photography.

## The container number under ISO 6346

The container number appears in large characters on both ends, on the long sides and on the roof. It always has eleven characters and follows the international standard **ISO 6346**.

| Position | Example | Meaning |
| --- | --- | --- |
| 1–3 | CSQ | Owner code, three letters |
| 4 | U | Equipment category |
| 5–10 | 305438 | Serial number, six digits |
| 11 | 3 | Check digit, usually shown boxed |

**Owner code.** The first three letters identify the owner or operator – a shipping line, a leasing company or a dealer. Codes are allocated centrally by the Bureau International des Containers (BIC) in Paris, which is why it is also called the **BIC code**.

**Category identifier.** The fourth letter states what kind of equipment it is:

| Letter | Meaning |
| --- | --- |
| U | Freight container – the normal case |
| J | Detachable container-related equipment, e.g. a generator set |
| Z | Trailer or chassis |

If position four shows anything other than U, J or Z, the number does not conform to the standard.

**Serial number.** Six digits assigned by the owner. Leading zeros count.

**Check digit.** The final digit is calculated from the ten characters before it. Its purpose is to catch typing errors and invented numbers – and you can verify it yourself.

## Calculating the check digit yourself

The method looks cumbersome at first but takes five minutes with a calculator or spreadsheet.

**Step 1: convert letters to numbers.** Each letter has a fixed value. Values start at 10 and skip all multiples of 11, i.e. 11, 22 and 33:

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 23 | 24 |

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 34 | 35 | 36 | 37 | 38 |

Digits keep their own value.

**Step 2: weight each position.** The first position is multiplied by 1, the second by 2, the third by 4 – the factor doubles with each position up to 512.

**Step 3: add everything up, divide by 11, take the remainder.** The remainder is the check digit. If the remainder is 10, the check digit is 0.

Worked through for **CSQU 305438**:

| Character | Value | Factor | Product |
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
| 8 | 8 | 512 | 4,096 |
| **Total** | | | **6,185** |

6,185 divided by 11 is 562 remainder **3**. The complete number is therefore **CSQU 305438 3** – and that 3 must appear to the right of the serial number on the container.

**What this does for you when buying:** if the check digit does not match, either the number in the listing was mistyped or it does not exist in that form. Either way, ask before any money changes hands. When buying used, always request a photo in which the number of the specific container is legible, and check it. More on pre-purchase inspection in [Buying a used container](/en/ratgeber/gebrauchten-container-kaufen).

## The size and type code

Directly below or beside the container number is a four-character code such as **22G1** or **45G1**. It describes dimensions and construction.

**First character – length:**

| Character | Length |
| --- | --- |
| 1 | 10 ft |
| 2 | 20 ft |
| 3 | 30 ft |
| 4 | 40 ft |
| L | 45 ft |

**Second character – height:**

| Character | Height | Designation |
| --- | --- | --- |
| 0 | 8'0" (2,438 mm) | low version, rare today |
| 2 | 8'6" (2,591 mm) | standard height |
| 5 | 9'6" (2,896 mm) | high cube |

**Third and fourth characters – type:**

| Code | Type |
| --- | --- |
| G0, G1 | General purpose container, G1 with vents at the top |
| R1 | Refrigerated container with its own refrigeration unit |
| U1 | Open top with removable roof |
| P1 | Flat rack with fixed end walls |
| T… | Tank container |

The combinations you are most likely to meet in the trade:

| Code | Meaning |
| --- | --- |
| 22G1 | 20 ft, standard height, general purpose |
| 42G1 | 40 ft, standard height, general purpose |
| 45G1 | 40 ft, high cube, general purpose |
| L5G1 | 45 ft, high cube, general purpose |
| 45R1 | 40 ft, high cube, refrigerated |
| 22U1 | 20 ft, open top |

Watch the second character: the **4** in 45G1 stands for the length (40 ft), the **5** for the height (high cube). A 45G1 is therefore not a 45-foot container – that would start with an L.

Practical use: if you are offered a "40 ft high cube" and the container says 42G1, it is a standard-height unit. The difference is roughly 30 centimetres of internal height – considerable when fitting out a habitable room. Full dimensions are in [Container sizes and dimensions](/en/ratgeber/container-groessen-und-masse).

## The CSC plate on the door

On the left-hand door, usually on a metal panel together with other plates, is the **CSC plate**. CSC stands for the International Convention for Safe Containers of 1972. The plate confirms that the container is approved for transport.

The most important details on it:

| Item | Meaning |
| --- | --- |
| Approval country and reference | Who approved the design type |
| Date of manufacture | Month and year of manufacture – the actual age |
| Identification number | matches the container number |
| Maximum gross mass | container plus cargo, typically approx. 30,480 kg for 20 ft |
| Allowable stacking load | weight that may be stacked on top of the container |
| Racking test load | test load for lateral deformation |
| Next examination or ACEP | indication of inspection status |

**The date of manufacture** is the most valuable item on the plate for buyers. It reveals the container's true age, regardless of what the listing says.

**Inspection status** only matters if the container is actually going to be used at sea or in international traffic again. Under the convention a container must be examined periodically: the first examination no later than five years after manufacture, then at intervals of no more than 30 months. Alternatively the owner can participate in an approved continuous examination programme, indicated by **ACEP** on the plate.

## What this means for your buying decision

For most buyers the CSC approval is irrelevant. A container standing on a plot as a store, workshop or garden room does not need a valid plate. That is why the "wind and watertight" grade is cheaper than "cargo worthy": the container is tight, but no longer certified for sea transport.

It is different if you want to ship the container yourself – for a move abroad, say. Then you need a container with a valid plate or ACEP marking, and the premium for a cargo-worthy unit is worth paying.

| Use | CSC plate required? | What to look for |
| --- | --- | --- |
| Storage on your own plot | no | tightness, floor, doors |
| Conversion to office or living space | no | age, rust, internal height per type code |
| Road transport within the country | generally no | weight, corner castings intact |
| Shipping it yourself | yes | valid examination or ACEP |
| Resale to sea freight customers | yes | plate increases resale value |

## Checklist: two minutes at the container

When inspecting a container or requesting photos, check these five points:

1. **Number complete and legible?** Eleven characters, position four is U, J or Z.
2. **Check digit verified?** If it matches, the number is at least formally correct.
3. **Same number everywhere?** End wall, side wall and plate should show the same number. Discrepancies point to a repainted container or one assembled from parts.
4. **Type code matches the listing?** Especially high cube (5 in second position) versus standard height (2).
5. **Date of manufacture on the plate?** That is the actual age – compare it with the listing.

A missing number or plate is not automatically a deal-breaker. Older containers are often repainted and markings are lost in the process. But you lose the simplest way to verify age and origin, and should examine the condition all the more closely.

## Important note

> This article describes markings under ISO 6346 and the CSC convention in general terms. Details of the standards, code lists and inspection intervals may change; the versions in force at the time are authoritative. The weights given are typical values and may differ by design type – the figures on the plate of the specific container are binding.

## Conclusion

Container number, type code and CSC plate are a shipping container's ID card, and they can be read without specialist knowledge. The check digit exposes wrong or invented numbers, the type code tells you whether you are really looking at a high cube, and the date of manufacture on the plate gives the true age. You only need the CSC approval itself if the container is going back to sea – for stationary use it is dispensable.

Further reading: [Buying a used container](/en/ratgeber/gebrauchten-container-kaufen), [Shipping container types](/en/ratgeber/seecontainer-typen) and [Comparing quotes and negotiating prices](/en/ratgeber/container-angebote-vergleichen).
