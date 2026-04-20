// OperaMech Knowledge Base
// Compiled from 9 Engineering Blackbook source files — April 2026
// Sources:
//   1. API Rotating Equipment Standards (API 610–688, API 684)
//   2. API Other Standards (API 520, 521, 526, 527, 537, 560, 576, 577, 579, 936-981)
//   3. ASME BPVC (Section I, IV, VII, VIII Div.1, VIII Div.2, IX, X, XII)
//   4. ASME B31 Piping & Electrical (B31.1, B31.3, LANL Guide, Code Cases, Interpretations, Megger, GE RAE 17739)
//   5. ASME/ISO/NEMA Handbooks (ASME B31.3, PCC-1, ISO 10441, NEMA MG1, fluid condition, lubrication)
//   6. Turbomachinery Handbooks (Boyce, Logan & Roy, Elden Ray, Keating, GE manuals, DGS Handbook)
//   7. Vibration, Alignment & Bearings (SKF, Keefer, PRUFTECHNIK, Timken, Harnoy, ISO 1940/10816)
//   8. Process & Technical References (APCI LNG, ACHE, refrigeration, nitrogen, power generation)
//   9. Vendor Documents & SIC Bulletins (GE LNG proposals, Cameron LNG TPC/TPI, API 541/546/547, IEEE 112)
// Total: 136 documents covering API, ASME BPVC, ASME B31, ISO, NEMA, IEEE standards,
//        turbomachinery handbooks, vibration/alignment, vendor documents, and process references

export const KNOWLEDGE_BASE = `

================================================================================
MASTER INDEX — OPERAMECH.AI ENGINEERING BLACKBOOK
================================================================================
Total Documents: 136 | Compiled: April 2026

SECTION 1 — API ROTATING EQUIPMENT STANDARDS (24 documents)
  API 610, 611, 612, 613, 614, 616, 617, 618, 619, 670, 671, 672, 673, 674,
  675, 676, 677, 681, 682, 685, 686, 687, 688 + API 684

SECTION 2 — API OTHER STANDARDS (covers PRD, relief, refractory, static equip)
  API 520 (I & II), 521, 526, 527, 537, 560, 576, 577, 579-1/ASME FFS-1,
  936, 975, 976, TR 978-981; also API 541, 546, 547

SECTION 3 — ASME BPVC (8 sections)
  ASME BPVC Section I, IV, VII, VIII Div.1, VIII Div.2, IX, X, XII

SECTION 4 — ASME B31 PIPING & ELECTRICAL (7 documents)
  ASME B31.1-2020, ASME B31.3-2020, LANL B31.3 Guide, B31.3 Code Cases,
  B31.3 Interpretations Vols 7-24, Megger Insulation Guide, GE RAE 17739

SECTION 5 — ASME/ISO/NEMA HANDBOOKS (14 documents)
  ASME B31.3 (2021), ASME PCC-1-2013, GEK 111517 (ASME PTC 22),
  ISO 10441, NEMA MG1 (2024), MP Filtri Fluid Condition Handbook,
  Parker Oil Contamination Guide, Exxon Motor Lubrication Guide,
  SIC00006 NAS/Lube Oil Flushing, CRC Handbook, Industrial Engineering
  Equations Handbook, Standard Handbook of Machine Design,
  Atlas Steels Technical Handbook, Outokumpu Stainless Steel Handbook

SECTION 6 — TURBOMACHINERY HANDBOOKS (12 documents)
  Boyce Gas Turbine Engineering Handbook 4th Ed., Logan & Roy Handbook of
  Turbomachinery 2nd Ed., Elden Ray GT Handbook 3rd Ed., Keating Applied
  Combustion 2nd Ed., Alstom/Siemens GT Simple & Combined Cycles,
  Pakarab GT Basics, GE Introduction to Gas Turbines, GE Centrifugal
  Compressor O&M, Rotating Equipment Inspection & Maintenance,
  Stahley Dry Gas Seals Handbook, Mechzone Centrifugal Pump Fundamentals,
  Goulds Pumps Selection Guide

SECTION 7 — VIBRATION, ALIGNMENT & BEARINGS (11 documents)
  Gatti/Ferrari Applied Structural and Mechanical Vibration,
  Cengage Mechanical Vibrations Theory & Applications (SI Ed.),
  Keefer R&T 2008 Principles & Practices of Vibrational Analysis,
  SKF VibrationGuide CM5003, SKF CM5118 Spectrum Analysis,
  Pavelek 2016 TPS Tutorial Rotor Balancing (Texas A&M),
  Ghulam Mohiuddin Shaft Alignment, PRUFTECHNIK ROT Machinery Alignment,
  EXP-MN-SM060-EN Bearings Training Manual, Timken Classic Bearing Damage
  Modes, Harnoy Bearing Design in Machinery

SECTION 8 — PROCESS & TECHNICAL REFERENCES (16 documents)
  APCI Liquefaction SDM, APCI Refrigeration SDM, Process Design Basis,
  Hot Oil SDM, Nitrogen SDM, Power Generation SDM, Natural Gas Specs,
  ACHE Brochure, AvestaPolarit Pickling Handbook, KLM Fin Fan Guidelines,
  Motor Protective Settings, CO2 Technical Data Sheet, Fire-Tube Boiler Study,
  PERC Propane Technical Guide, Electrical Reference Directory,
  Fal-Avan Condensate Stabilization Study

SECTION 9 — VENDOR DOCUMENTS & SIC BULLETINS (16 documents)
  SIC00202 LV Motor Commissioning, SIC00277 DCP Panel Commissioning,
  SIC00066 OSM Functional Checklist, SIC00006 Lube Oil Flushing,
  SIC00115 Piping Erection Procedure, GE MS7001EA Technical Proposal,
  GE PR/MR Compressor Services Proposal, GE IPC&C Proposal,
  TPC Cameron LNG PR Trains, TPI Cameron LNG EC401 Turboexpander,
  Constructability Checklist, API 541, API 546, API 547,
  IEEE Std 112-2004, Flowserve Pumps Notes

================================================================================

================================================================================
SECTION 1: API ROTATING EQUIPMENT STANDARDS
Source: blackbook_api_standards.md
================================================================================

# API Standards Reference — Engineering Blackbook

**Compiled:** April 2026  
**Source:** OneDrive — 04. ENGINEERING BLACKBOOK / 02. Standards / 02. API / B. STANDARDS  
**Coverage:** 24 API Standards (610–688)

---

## Table of Contents

| Standard | Title | Edition |
|----------|-------|---------|
| [API 610](#api-610) | Centrifugal Pumps for Petroleum, Petrochemical, and Natural Gas Industries | 12th Ed., 2021 |
| [API 611](#api-611) | General-purpose Steam Turbines | 5th Ed., 2008 |
| [API 612](#api-612) | Steam Turbines—Special-purpose Applications | 8th Ed., 2020 |
| [API 613](#api-613) | Special Purpose Gear Units | 5th Ed., 2003 |
| [API 614](#api-614) | Lubrication, Shaft-sealing and Oil-control Systems | 5th Ed., 2008 |
| [API 616](#api-616) | Gas Turbines | 5th Ed., 2011 |
| [API 617](#api-617) | Axial and Centrifugal Compressors and Expander-compressors | 8th Ed., 2014 |
| [API 618](#api-618) | Reciprocating Compressors | 5th Ed., 2007 |
| [API 619](#api-619) | Rotary-type Positive Displacement Compressors | 5th Ed., 2010 |
| [API 670](#api-670) | Machinery Protection Systems | 5th Ed., 2014 |
| [API 671](#api-671) | Special-purpose Couplings | 5th Ed., 2020 |
| [API 672](#api-672) | Packaged, Integrally Geared Centrifugal Air Compressors | 5th Ed., 2019 |
| [API 673](#api-673) | Centrifugal Fans | 3rd Ed., 2014 |
| [API 674](#api-674) | Positive Displacement Pumps—Reciprocating | 3rd Ed., 2010 |
| [API 675](#api-675) | Positive Displacement Pumps—Controlled Volume | 3rd Ed., 2012 |
| [API 676](#api-676) | Positive Displacement Pumps—Rotary | 3rd Ed., 2009 |
| [API 677](#api-677) | General-Purpose Gear Units | 3rd Ed., 2006 |
| [API 681](#api-681) | Liquid Ring Vacuum Pumps and Compressors | 1st Ed., 1996 |
| [API 682](#api-682) | Pumps—Shaft Sealing Systems | 4th Ed., 2014 |
| [API 684 RP](#api-684-rp) | Rotordynamic Tutorial | 2nd Ed., 2005 |
| [API 685](#api-685) | Sealless Centrifugal Pumps | 2nd Ed., 2011 |
| [API 686 RP](#api-686-rp) | Machinery Installation and Installation Design | 2nd Ed., 2009 |
| [API 687 RP](#api-687-rp) | Rotor Repair | 1st Ed., 2001 |
| [API 688 RP](#api-688-rp) | Pulsation and Vibration Control in PD Machinery Systems | 1st Ed., 2012 |

---

## API 610

**Centrifugal Pumps for Petroleum, Petrochemical, and Natural Gas Industries**  
12th Edition, January 2021  
*(Equivalent to ISO 13709:2009)*

### Scope
Centrifugal pumps and hydraulic power recovery turbines (HPRTs) for petroleum, petrochemical, and natural gas industries. Applicable when any of these conditions exist: discharge pressure >275 psig, suction pressure >75 psig, pumping temperature >300 °F, speed >3600 rpm, rated head >400 ft, or impeller diameter >13 in.

### Pump Type Classification
| Type | Description |
|------|-------------|
| OH1–OH6 | Overhung impeller (horizontal and vertical) |
| BB1–BB5 | Between-bearings (single/multi-stage, axially/radially split) |
| VS1–VS7 | Vertical suspended (short/long set, lineshaft, submersible) |

### Key Sections / Topics
- **Section 6 – Basic Design:** Casing pressure ratings, MAWP, allowable nozzle loads, shaft deflection limits, dynamic analysis requirements
- **Section 7 – Specific Pump Types:** Individual requirements per OH/BB/VS type
- **Section 8 – Accessories:** Drivers, baseplate, coupling guards, piping
- **Section 9 – Testing:** Hydraulic performance tolerance (ISO 9906 Grade 1B), mechanical run, NPSH test, hydrostatic (1.5× MAWP)

### Technical Highlights
- Design life: 20 years minimum; 3 years uninterrupted operation
- Shaft sealing: cross-references API 682 (normative)
- Lubrication: cross-references API 614 for special-purpose oil systems
- Vibration limits: Table 2 (displacement/velocity by pump type and speed)
- Impeller: maximum hydraulic unbalance force criteria per Annex F

### Turbomachinery Relevance
Direct — pumps are primary driven equipment on turbomachinery trains. HPRTs overlap turbomachinery scope (expander-driven compressors/generators). Cross-referenced by API 682, 685, 687 RP.

---

## API 611

**General-purpose Steam Turbines for Petroleum, Chemical, and Gas Industry Services**  
5th Edition, March 2008 (Errata 2, June 2019)

### Scope
General-purpose steam turbines (usually spared, non-critical single-stage or small multi-stage): steam conditions limited to ≤48 bar (700 psig) and ≤400 °C (750 °F); maximum continuous speed ≤6,000 rpm. Excludes special-purpose applications (API 612).

### Key Sections / Topics
- **Section 2 – Basic Design:**
  - Casings: radially split preferred; hydrostatic 1.5× MAWP; allowable external forces/moments
  - Rotating Elements: shaft material (alloy steel), impeller/blade design requirements, disk stress limits, trip valve
  - Bearings: hydrodynamic journal and thrust; tilting pad optional; L10 for anti-friction bearings
  - Dynamics: lateral critical speed separation margins ≥15% above trip speed; mechanical run to 110% max continuous speed
  - Shaft Seals: carbon rings standard; labyrinth seals
  - Lubrication: API 614 referenced for special-purpose; integral bearing housing lube for general purpose
  - Materials: Table 1 (carbon/alloy steel standards)
- **Section 3 – Accessories:** Gears (API 677), couplings (API 671), speed controls, overspeed trip, inlet/exhaust valves, steam strainers, governing systems, starting equipment
- **Section 4 – Testing:** Mechanical run test (standard); performance test (optional, by agreement)

### Technical Highlights
- Design life: 20 years; 3 years uninterrupted operation
- Trip speed: 110% of maximum continuous speed (minimum)
- Governing: proportional speed governor; emergency overspeed trip device mandatory
- Hydrostatic: 1.5× MAWP (min 1.0 bar above steam supply pressure)
- Blade natural frequencies: avoid resonance with harmonics of running speed (±10% separation margin)

### Turbomachinery Relevance
Core standard for small/medium steam turbine drivers — compressor drives, pump drives, generator drives in petroleum/chemical plants. Companion to API 612 for the spared/utility turbine population.

---

## API 612

**Steam Turbines—Special-purpose Applications for Petroleum, Petrochemical, and Natural Gas Industries**  
8th Edition, November 2020

### Scope
Special-purpose steam turbines: critical, unspared service, large/high-powered machines not limited by steam conditions. Not for general-purpose applications (API 611). Applies to turbines driving compressors, large pumps, generators.

### Key Sections / Topics
- **Turbine Casings:** Pressure ratings, nozzle loads per Annex D, high-temperature material requirements (CrMoV alloys), horizontal and vertically split casing rules
- **Rotating Elements:** Disk integrity analysis (burst speed), blade design, Goodman diagram fatigue analysis, tip clearances, impulse vs. reaction staging
- **Dynamics:**
  - Lateral rotordynamic analysis: damped critical speeds, unbalance response (API 684 RP methodology)
  - Torsional analysis: full train including gear
  - Aerodynamic stability (steam whirl considerations)
  - Log decrement >0.1 at all operating conditions
  - Blade/disk resonance: avoid ±10% of all harmonics (Campbell diagram)
- **Bearings:** Tilting-pad journal bearings mandatory; tilting-pad thrust bearing; Babbitt-lined
- **Controls:** Speed governor, emergency overspeed trip (independent from governor, trip at 110% MCS), extraction/admission control valves, ESD system
- **Testing:** Mechanical run test (4h at MCS + overspeed to trip); optional performance test per ASME PTC 6; vibration acceptance per API 670 limits

### Technical Highlights
- Trip speed: 110% of maximum continuous speed
- Lateral criticals: ≥20% above trip speed (or ≥15% above MCS with amplification factor analysis)
- Log decrement: >0.1 required at all conditions
- Piping loads: Annex D Tables
- Materials: Creep-limiting alloy steels for high-temperature components; Charpy impact testing for low-temperature

### Turbomachinery Relevance
Primary standard for large/critical steam turbine-driven trains — the dominant driver standard in the 600-class API turbomachinery family. Directly interfaces with API 613 (gear), API 614 (lube oil), API 617 (compressor), API 670 (protection), API 671 (coupling), API 684 RP (rotordynamics).

---

## API 613

**Special Purpose Gear Units for Petroleum, Chemical and Gas Industry Services**  
5th Edition, February 2003 (Reaffirmed August 2007)

### Scope
Parallel-shaft, single and double helical enclosed gear units for continuous unspared (special-purpose) service in petroleum, chemical, and gas industries. Covers speed increasers and reducers. Not for epicyclic gears or integrally geared compressors.

### Key Sections / Topics
- **Rating:** AGMA 421 based; K-factor, Lewis bending stress, service factor (Table 3) by driver type; no time-limit on rated power
- **Gear Elements:** AGMA accuracy Grade 4 minimum; hunting tooth ratio; contact ratio requirements; case/through-hardened options; ground teeth standard
- **Dynamics:**
  - Lateral critical speed separation: ≥20% above maximum continuous speed (pinion and gear)
  - Torsional analysis: full train
  - No resonance at 1× or 2× running speed within ±5% margin
- **Bearings:** Hydrodynamic journal and thrust; tilting-pad preferred for high-speed applications; minimum bearing L/D ratio requirements
- **Lubrication:** Pressurized forced-feed per API 614 Part 2
- **Materials:** Heat-treated alloy steel forgings (ASTM A291/A293); case depth vs. face width criteria
- **Testing:** No-load mechanical run; optional back-to-back loaded torque test; tooth contact check at load

### Technical Highlights
- Design life: 20 years; 5 years uninterrupted operation
- Gear service factor: Table 3 (minimum 1.4 for motor drive; 1.6–2.0 for turbine drive)
- AGMA Grade 4 minimum quality (pitch, profile, lead, runout tolerances)
- Hunting tooth ratio mandatory (avoids repeating tooth contact pattern)
- Housing: split at centerline; doweled and bolted; vibration ≤13 µm rms

### Turbomachinery Relevance
Speed-increasing gears on gas turbine and steam turbine-driven compressor trains are among the most critical items covered. Directly cross-referenced by API 612, 616, 617. Gear failures are a primary root cause of train shutdowns.

---

## API 614

**Lubrication, Shaft-sealing and Oil-control Systems and Auxiliaries**  
5th Edition, April 2008  
*(Equivalent to ISO 10438:2007 — 4 Parts)*

### Scope
Lubrication, shaft sealing, and control oil systems for rotating equipment: compressors, turbines, gears, pumps, and their drivers in petroleum, petrochemical, and gas industries.

### Structure — Four Parts
| Part | Title | Scope |
|------|-------|-------|
| Part 1 | General | Common requirements for all lube/seal oil systems: design, materials, components, testing |
| Part 2 | Special-purpose oil systems | For unspared, critical rotating equipment (compressors, gears, turbines per API 613/617/612) |
| Part 3 | General-purpose oil systems | For spared or non-critical equipment (API 611/677 class) |
| Part 4 | Dry-gas seal support systems | Barrier/buffer gas supply, vent, monitoring systems for dry gas seals per API 617 |

### Key Sections / Topics
- **Part 1 General:** Reservoir sizing (minimum 5 min circulation time), pumps (main + standby), coolers (TEMA design), filters (duplex, 10 µm absolute), accumulators, pressure control valves, instrumentation, testing
- **Part 2 Special-purpose:** Dual 100% capacity pumps (main driven off main shaft + standby); dual coolers; dual filters; rundown tank/accumulator sizing; seal oil differential pressure control; console design; functional testing
- **Part 3 General-purpose:** Simplified systems; single pump or dual pumps; integral oil reservoir options
- **Part 4 Dry-gas seal:** Separation gas (N₂) supply; buffer/barrier gas panels; leakage detection; vent to flare requirements; coalescing filters (1 µm absolute)

### Technical Highlights
- Reservoir volume: minimum 5 minutes' supply at normal flow rate (Part 2)
- Rundown: gravity-fed rundown tank or accumulator to provide bearing lube oil for coastdown
- Cooler: TEMA R/C; water on tubeside; fouling factors per service
- Filter: duplex, 10 µm absolute; differential pressure indicator/switch on each element
- Instrumentation: temperature, pressure, level (high/low/high-high/low-low as appropriate), flow

### Turbomachinery Relevance
The lube oil system is a critical auxiliary system for every turbomachinery train. This standard is normatively cross-referenced by API 611, 612, 613, 616, 617. Part 4 is the companion to dry-gas mechanical seals used in virtually all modern centrifugal compressors.

---

## API 616

**Gas Turbines for the Petroleum, Chemical, and Gas Industry Services**  
5th Edition, January 2011

### Scope
Open-cycle (simple or regenerative) combustion gas turbines: industrial frame and aeroderivative; gas and liquid fuel capability; mechanical drive, generator drive, and process gas generation applications in petroleum, chemical, and gas industries. Both onshore and offshore applicable.

### Key Sections / Topics
- **Basic Design:** Casing design (hot section materials — IN 718, Hastelloy X, DS/SC superalloys), tip clearance control, thermal growth provisions, air filtration inlet system
- **Combustors & Fuel Nozzles:** Conventional (diffusion) and DLE/DLN (dry low emissions/NOx) options; fuel flexibility requirements; fuel flow control valves; startup fuel
- **Rotating Elements:** Compressor and turbine disk/blade design; creep life; low cycle fatigue (LCF); hot section inspection intervals; blade tip clearance
- **Dynamics:**
  - Lateral rotordynamic analysis per API 684 RP (required for critical speeds near operating range)
  - Torsional analysis: full train including driven equipment and gears
  - Trip speed overspeed protection: 110% of rated speed
- **Bearings:** Hydrodynamic journal and thrust (tilting pad standard for industrial frames); aeroderivatives may use rolling element
- **Lubrication:** API 614 Part 2 for lube and hydraulic oil; synthetic lubricants per OEM specification
- **Accessories:** Inlet air system (filters, silencers, anti-icing), exhaust system (silencers, WHR boiler connections), fuel gas skid (pressure regulation, conditioning, metering), starting system (electric, diesel, hydraulic, pneumatic), auxiliary power system, package enclosure
- **Controls:** NFPA 85 and NFPA 86 for fuel systems; electronic control system; emissions monitoring; ESD and fire/gas detection per API 505/505
- **Materials:** Section 7; hot section materials per OEM standards; piping per ASME B31.3

### Technical Highlights
- Design life: 20 years; 3 years uninterrupted operation (or defined hot-section inspection intervals for aeroderivatives)
- ISO-rated power and heat rate per ISO 2314 and ASME PTC 22 (site-corrected using inlet conditions: 15 °C, sea level, 60% RH)
- NO performance correction factors for 616 — performance test per ASME PTC 22
- Package acoustic limits: typically <85 dB(A) at 1 m from enclosure
- Emissions: DLE/DLN NOx <25 ppmvd @15% O₂ typical

### Turbomachinery Relevance
Central standard for gas turbine prime movers — the most common driver in modern LNG, gas compression, and pipeline services. Defines performance acceptance criteria for GTG and GTC trains. Interface standard with API 617 (driven compressor), API 613 (gear), API 614 (lube), API 670 (protection), API 671 (coupling).

---

## API 617

**Axial and Centrifugal Compressors and Expander-compressors for Petroleum, Chemical, and Gas Industry Services**  
8th Edition, September 2014  
*(4 Parts)*

### Scope
Axial and centrifugal compressors and expander-compressors (hot gas expanders driving compressors or generators) for petroleum, chemical, and gas industries. Critical/special-purpose service.

### Structure — Four Parts
| Part | Title | Coverage |
|------|-------|----------|
| Part 1 | General | Requirements common to all centrifugal/axial compressors |
| Part 2 | Non-integrally geared centrifugal/axial | Horizontally split, barrel (vertically split), axial compressors |
| Part 3 | Integrally geared centrifugal | Multiple impellers on a single gearbox; intercooled process air/gas |
| Part 4 | Expander-compressors | Hot gas expanders combined with compressor or generator |

### Key Sections / Topics (Part 1 General)
- **Casings:** Horizontally split ≤20 bar suction; barrel/vertically split >20 bar; hydrostatic 1.5× MAWP; cast iron prohibited for hazardous gases
- **Rotating Elements:** Impeller design (shrouded preferred; open for axial); impeller/shaft fit requirements; overspeed disc integrity test (1.2× MCS, 1 min minimum burst margin)
- **Dynamics (Section 6.8 — critical section):**
  - Damped lateral rotordynamic analysis (undamped analysis not acceptable)
  - Separation margin: ≥15% below/above MCS (if log decrement ≥0.1 throughout); or ≥10% with amplification factor analysis
  - Log decrement (stability) >0.1 at all conditions; if <0.1 Annex I screening required
  - Torsional analysis: full train, all excitations; no resonances within ±10% of train running speeds and their 1× harmonics
  - Stability analysis per Annex I (Alford force, Labyrinth, honeycomb seals)
- **Bearings:** Tilting-pad journal bearings (mandatory); tilting-pad thrust bearings; Babbitt-lined; API 670 eddy-current proximity probes standard
- **Shaft End Seals:** Dry gas mechanical seals standard; wet oil film seals optional; labyrinth (process gas) — detailed in Part 2/3
- **Lubrication:** API 614 Part 2 (special-purpose lube/seal oil system)
- **Instrumentation:** Per API 670 (protection system); performance instruments
- **Testing:** ASME PTC 10 Type 1 (full load, full pressure) or Type 2 (reduced pressure); surge test; mechanical run; vibration and noise limits

### Technical Highlights
- Design life: 20 years; 3 years uninterrupted operation
- Surge protection: capacity control and surge control valves; anti-surge controller per ISA-5.1
- Allowable nozzle loads: Table 2 (magnitudes and moments at suction/discharge)
- Impeller burst speed: minimum 1.2× MCS; critical speed map provides visual summary of separation margins
- Vibration limits (Part 1, Table 3): unfiltered peak-to-peak displacement limit as function of speed (e.g., 25 µm pp at 10,000 rpm)

### Turbomachinery Relevance
The primary compressor standard — defines requirements for virtually all process centrifugal and axial compressors driven by gas turbines and steam turbines. The dynamic analysis requirements (Section 6.8) are among the most technically demanding in the API 600-class series. Cross-referenced by API 612, 616, 684 RP, 687 RP.

---

## API 618

**Reciprocating Compressors for Petroleum, Chemical, and Gas Industry Services**  
5th Edition, December 2007 (Reaffirmed August 2016)

### Scope
Low-to-moderate speed, double-acting or single-acting reciprocating compressors — lubricated and non-lubricated cylinder types — for petroleum, chemical, and gas industry services. Includes intercoolers, knockout drums, and pulsation suppression devices (bottles/orifices).

### Key Sections / Topics
- **Cylinders:** Design pressure ratings; cooling (water-jacketed preferred); valve design (plate, ring, channel, poppet types); unloading (finger unloaders, clearance pockets, plug unloaders); suction valve unloaders; distance pieces (single or double — toxics/flammables)
- **Pistons and Rods:** Rod load limits per Table 4 (combined gas + inertia); piston rod diameter vs. cylinder bore; replaceable piston rods; packing (TFE compressor rings)
- **Crankcases, Crankshafts, Crossheads:** Forged or cast crankshaft; main bearing sizing; crosshead guide clearances; frame design stiffness requirements
- **Distance Pieces:** One-compartment (oilfield service) vs. two-compartment (toxic/flammable) per Table 1
- **Lubrication:** Forced-feed crankcase lube; cylinder/packing lubrication (injection or non-lube)
- **Pulsation Analysis:** Three design approaches (Approach 1: analog/model; Approach 2: digital simulation; Approach 3: full acoustic/mechanical analysis) — defines acceptance criteria for pulsation and mechanical vibration in piping and vessels. API 688 RP provides detailed commentary on Approach 3
- **Drivers:** Preference table by speed/application; torsional analysis required for full train; API 616/611/617 cross-referenced
- **Controls:** Capacity control system; interstage pressure control; ESD logic

### Technical Highlights
- Design life: 20 years; 3 years uninterrupted operation
- Rod loads: maximum combined rod load ≤Table 4 (function of stroke × cylinder bore)
- Pulsation limits: <±2% of line pressure at any compressor connection; mechanical vibration of pipe <in./s per approach
- Pressure relief valves: ASME Section VIII, on each cylinder
- Valve velocity: ≤Table 5 (function of molecular weight, duty)

### Turbomachinery Relevance
Reciprocating compressors are often driven by gas or steam turbines (via gear) or electric motors. The pulsation analysis requirements interact with turbomachinery torsional analysis (shared shaft). Cross-referenced by API 688 RP for Approach 3 commentary.

---

## API 619

**Rotary-type Positive Displacement Compressors for Petroleum, Chemical, and Gas Industry Services**  
5th Edition, December 2010  
*(Equivalent to ISO 10440-1:2007)*

### Scope
Dry and oil-flooded helical-lobe (screw) rotary positive displacement compressors for vacuum and positive pressure service; special-purpose (unspared, critical) applications in petroleum, chemical, and gas industries. Excludes vane, liquid-ring, and reciprocating compressors.

### Key Sections / Topics
- **Pressure Casing:** Design per ASME B16.5 flanges; hydrostatic 1.5× MAWP; cast iron prohibited for hazardous/flammable gas
- **Shaft Seals:** Dry mechanical seals or labyrinth per service; liquid-flooded: lip seals; dry: API 614 Part 4 buffer gas system
- **Dynamics:**
  - Lateral critical speed analysis: ≥20% separation margin above MCS
  - Torsional analysis: full train
  - Vibration limits: bearing housing ≤13 mm/s rms (seismic) or proximity probe per API 670
- **Bearings:** Rolling element or hydrodynamic; L10 ≥25,000h (rolling element)
- **Lube/Seal-oil Systems:** API 614 Part 2 (special-purpose); oil injection system for oil-flooded
- **Controls:** Capacity control (variable speed, slide valve, or inlet throttle); interstage cooling

### Technical Highlights
- Design life: 20 years; 3 years uninterrupted operation
- Male rotor is typically the driven rotor; female is driven by male through timing gears
- Oil-flooded screw: oil injection suppresses temperature rise; outlet oil separator integral to package
- Dry screw: synchronized timing gears prevent rotor contact; limited discharge temperature by gas properties

### Turbomachinery Relevance
Screw compressors compete with centrifugal (API 617) in medium-flow/moderate-pressure applications. Sometimes driven by gas turbines or electric motors. Utility gas compression and vapor recovery typical services.

---

## API 670

**Machinery Protection Systems**  
5th Edition, November 2014

### Scope
Requirements for machinery protection system (MPS) hardware and software for rotating and reciprocating machinery in petroleum, chemical, and gas industries. Covers sensors, monitors, and system architecture for all standard protection measurements.

### Protection Measurements Covered
| Measurement | Sensor Type | Typical Application |
|-------------|-------------|---------------------|
| Radial shaft vibration | Eddy-current proximity probe (8 mm, 5 mm, 3 mm standard) | Centrifugal/axial compressors, turbines |
| Casing vibration | Seismic (velocity/accelerometer) | Gear units, reciprocating machines |
| Axial shaft position | Eddy-current proximity probe | Thrust position monitoring |
| Phase reference (keyphasor) | Eddy-current proximity probe | Synchronous tracking, balancing |
| Speed | Eddy-current or magnetic pickup | Overspeed protection |
| Piston rod drop | Eddy-current proximity probe | Reciprocating compressor piston rod wear |
| Surge detection | Flow + pressure differential | Centrifugal compressor surge |
| Bearing temperatures | RTD (PT100) or thermocouple (Type K/J) | Journal/thrust bearing MAWT |
| Winding temperatures | RTD | Motor/generator stator |

### Key Sections / Topics
- **Section 5 – General Design Specifications:** System architecture, power supply redundancy (dual), SIL consideration, environmental ratings (Class I Div 2 / Zone 2), immunity to EMI/RFI, fail-safe philosophy
- **Section 6 – Sensors/Transducers:** 8 mm eddy-current probe standard (5 mm and 3 mm for smaller shafts); sensitivity 7.87 V/mm (200 mV/mil); measurement range 0–2 mm; signal cable (3-wire) and driver/oscillator specifications
- **Section 7 – Vibration Monitors:** Alert/danger setpoints; buffered output (direct, 1×, 2×, nX); overall, bandpass; power spectrum display; communication interfaces (4–20 mA, relay, serial/Ethernet)
- **Section 8 – Overspeed Detection:** Dedicated independent system (NOT shared with governor); redundant 2oo3 voting logic mandatory; response time <1 ms; self-test capability
- **Section 9 – Surge Detection:** Compressor map-based algorithm (dp/dt method or flow/head method); typical setpoints 10–15% above compressor surge line
- **Section 10 – ESD (Emergency Shutdown Device):** Hardwired relay logic; interface to plant DCS/SIS; solenoid valve requirements

### Technical Highlights
- Probe gap calibration: 1.0 mm ±0.05 mm (8 mm probe in AISI 4140 steel)
- Vibration limits: reference API standards (611/612/613/616/617) for setpoint guidance; typically alert at 75% and danger at 100% of maximum allowable vibration
- Overspeed trip: 2oo3 voting on 3 independent pickups mandatory
- Temperature measurement: PT100 RTD preferred; junction temperature compensation for TCs
- Surge detection: typical response to anti-surge valve opening <100 ms

### Turbomachinery Relevance
The universal instrumentation standard cross-referenced normatively by ALL major turbomachinery API standards (611, 612, 613, 616, 617, 619, etc.). Every turbomachinery train uses API 670-compliant proximity probes, vibration monitors, and overspeed protection. Critical chatbot knowledge for condition monitoring, alarm setpoints, and protection system architecture.

---

## API 671

**Special-purpose Couplings for Petroleum, Chemical, and Gas Industry Services**  
5th Edition, August 2020

### Scope
Power transmission couplings between rotating shafts for special-purpose (critical, unspared, large, high-speed) applications in petroleum, chemical, and gas industries. Covers gear couplings, metallic flexible element couplings (disc or diaphragm), quill-shaft couplings, and torsionally resilient (elastomeric) couplings. Accommodates parallel offset, angular misalignment, and axial displacement.

### Coupling Types Covered
| Type | Description | Typical Application |
|------|-------------|---------------------|
| Gear coupling | Involute teeth (hub/sleeve); lubricated | Legacy high-torque drives |
| Metallic flex element — disc | Multiple thin disc packs | Compressor trains |
| Metallic flex element — diaphragm | Single or multiple diaphragm | Gas turbine–compressor trains |
| Quill-shaft | Long flexible shaft for high-torque | Motor–compressor, high-inertia |
| Torsionally resilient | Elastomeric elements | Reciprocating machinery drives |

### Key Sections / Topics
- **Section 5 – Selection/Design Requirements:**
  - Coupling selection: torque capacity, speed rating, misalignment capacity, axial stiffness, torsional stiffness
  - Hub bores: shrink-fit (preferred for high-speed) or keyed; taper bore with hydraulic fit standard
  - Balance: G2.5 per ISO 1940 minimum; API-specific residual unbalance per Annex K (eccentricity method)
  - Coupling service factor: ≥1.5 × maximum transmitted torque
  - Axial natural frequency: >2× running speed (to avoid axial resonance)
  - Materials: coupling hubs — alloy steel (AISI 4140/4340); disc packs — 17-4PH or 15-5PH stainless steel
- **Section 6 – Metallic Flex Element Requirements:** Disc pack fatigue stress per Annex A; diaphragm stress analysis; element replacement intervals
- **Annex B – Torsionally Resilient (damping) Couplings:** Application to reciprocating machines; torsional spring rate and damping; thermal limits
- **Annex C – Gear Couplings:** Tooth profile, lubrication (grease or oil-flooded), seal design, AGMA 9000 rating
- **Annex D – Quill-shaft Couplings:** Shaft torsional/bending stress calculations; lateral natural frequency check
- **Annex H – Coupling Guards:** Design and clearance requirements; oil-flooded guard requirements for gear couplings
- **Annex K – Residual Unbalance Check:** Residual unbalance verification procedure per eccentricity tolerance
- **Annex L – Torque Measuring Systems:** Strain gauge telemetry; optical methods; for torsional verification

### Technical Highlights
- API balance grade: residual unbalance ≤4W/N (g·mm) per journal where W = journal static load (N) and N = speed (rpm)
- Disc pack element: minimum fatigue life ≥10⁸ cycles at maximum misalignment + torque
- Gear coupling lubrication: continuous oil or periodic grease; oil film thickness ≥0.025 mm under load
- Spacer length: typically 350–800 mm to permit mechanical seal removal without equipment repositioning
- Torsional stiffness: must be provided by vendor for torsional train analysis

### Turbomachinery Relevance
Direct — couplings connect turbines, compressors, and gears in every train. Coupling failure or misalignment is a leading cause of machinery downtime. Special-purpose diaphragm/disc couplings are standard on gas turbine–compressor trains. Cross-referenced normatively by API 612, 613, 616, 617.

---

## API 672

**Packaged, Integrally Geared Centrifugal Air Compressors for Petroleum, Chemical, and Gas Industry Services**  
5th Edition, August 2019

### Scope
Packaged, integrally geared, multi-stage centrifugal air compressors for non-critical, usually spared, general-purpose services (instrument air, plant air, nitrogen generation feed) in petroleum, chemical, and gas industries. Constant speed (motor driven). Two duty classifications: Basic Duty and Special Duty.

### Key Sections / Topics
- **Basic Design:**
  - Casings: horizontally split or radially split; aluminum alloy or cast iron (non-hazardous gas only)
  - Integral gear: helical, per AGMA 421/API 677 (general purpose); single bull gear with multiple pinion shafts
  - Impellers: open or semi-open; aluminum or steel
  - Bearings: tilting-pad journal and thrust standard; rolling element acceptable for smaller units
  - Dynamics: lateral critical speed ≥15% above max continuous speed; vibration limits per Table 1
  - Intercooling: fin-fan or shell-and-tube between stages; aftercooler included
- **Accessories:**
  - Drivers: NEMA/IEC motor; API 541/546 optional
  - Controls: inlet guide vanes (IGV) for capacity control; blow-off valve; surge avoidance
  - Inlet filter: dry type; ≤10 mbar ΔP at rated flow
  - Capacity measurement: orifice plate per ISO 5167 or venturi
- **Testing:**
  - Performance: flow tolerance 0% (no shortfall acceptable); power tolerance ≤+4%; ASME PTC 10 Type 2 or ISO 1217
  - Mechanical run: 4h at max continuous speed; vibration ≤Table 1 limits

### Technical Highlights
- Design life: 20 years; 3 years uninterrupted operation
- Typical range: 500–10,000 kW, 4–8 stages, discharge pressure 6–12 bar(g)
- Package mounted on a single baseplate (skid-mounted)
- Special Duty: tighter tolerance, higher quality per customer specification

### Turbomachinery Relevance
Utility-class air compressors for instrument/plant air. While not special-purpose turbomachinery, they use identical centrifugal compressor technology. Common in same facilities as large turbomachinery trains.

---

## API 673

**Centrifugal Fans for Petroleum, Chemical, and Gas Industry Services**  
3rd Edition, December 2014

### Scope
Centrifugal fans for petroleum, chemical, and gas industry services: static pressure rise ≤330 cm water gauge; single-stage; duct-mounted or plenum fan configurations. Two service classes: General Purpose and Special Purpose.

### Key Sections / Topics
- **Fan Housing:** Structural design; fabricated steel; drain connections; access doors; static pressure rating
- **Rotating Elements:** Welded steel impeller (backward-curved, forward-curved, or radial blade); shaft material and sizing; impeller-to-shaft fit (keyed or shrink)
- **Dynamics:**
  - First critical speed ≥120% of maximum operating speed (fan speed ≤1800 rpm typical)
  - No blade passing frequency resonance with structural components within ±10%
  - Vibration limits: rolling element bearing housing <12.5 mm/s pk velocity
- **Bearings:** Rolling element (L10 ≥55,000 hours) or hydrodynamic; bearing housings with positive lubrication
- **Lubrication:** Grease or oil-bath; auto-greasing optional; temperature monitoring
- **Controls/Instrumentation:** Variable inlet vanes (VIV) or variable speed drive (VSD) for capacity control; vibration monitors; temperature switches
- **Testing:** Performance test per AMCA 210 or ISO 5801; fan characteristic: continuously rising pressure curve to 70% rated flow (stall-free operating range)

### Technical Highlights
- Design life: 20 years
- Fan speed: typically ≤1800 rpm (direct drive with 4-pole motor) or higher with gear/belt drive
- Bearing L10 ≥55,000 hours (antifriction), minimum 3 years maintenance-free
- Vibration: alarm at 7.5 mm/s; trip at 12.5 mm/s peak velocity
- Fan curve: guarantee point at rated flow ± tolerance per AMCA 210

### Turbomachinery Relevance
Centrifugal fans share design principles with centrifugal compressors. Forced draft (FD) and induced draft (ID) fans in furnaces/boilers are driven by steam turbines or electric motors. API 673 provides the design basis for large industrial fans in rotating machinery-intensive plants.

---

## API 674

**Positive Displacement Pumps—Reciprocating**  
3rd Edition, December 2010 (Reaffirmed November 2016)

### Scope
Direct-acting (steam-driven) and power-frame (crankshaft-driven) reciprocating positive displacement pumps for petroleum, petrochemical, and gas industry services. Excludes controlled-volume (metering) pumps (API 675) and rotary pumps (API 676).

### Key Sections / Topics
- **Section 6 – Basic Design:**
  - Pump Type Selection: direct-acting (simplex/duplex steam driven) vs. power frame (simplex/duplex/triplex/quintuplex crankshaft)
  - Pressure Ratings: MAWP based on minimum wall thickness; hydrostatic test at 1.5× MAWP
  - Liquid End: cylinder materials (cast iron, ductile iron, carbon steel, alloy steel, stainless); valve types (ball, disc, wing-guided); packing configurations (soft packing, mechanical seal, packing + lantern ring)
  - Power End Running Gear: crankshaft, connecting rods, crossheads, wrist pins — material and fatigue design requirements
  - Direct-acting Pump: steam cylinder (single or double-acting), steam valve, steam supply/exhaust connections
  - Lubrication: forced-feed to power end; cylinder lubrication (optional for liquid end)
  - Materials: Table 1 (standard and NACE MR0103/MR0175 options for H₂S service)
- **Section 7 – Accessories:** Drivers (steam, electric motor, engine), couplings, pressure relief valves (mandatory on each pump), pulsation dampeners/suction stabilizers, pressure gauge, safety relief
- **Section 8 – Testing:** Hydrostatic test (1.5× MAWP, 30 min); volumetric efficiency test; mechanical run; noise level test optional

### Technical Highlights
- Design life: 20 years; 3 years uninterrupted operation
- Hydrostatic: 1.5× MAWP minimum
- Valve velocity: limits per Table 3 (function of fluid viscosity and density)
- Pulsation: suction/discharge dampeners per API 688 RP (for flow smoothing)
- Materials: NACE MR0103 compliance for sour service optional

### Turbomachinery Relevance
Reciprocating injection pumps and high-pressure transfer pumps are sometimes driven by steam turbines (direct-acting type) or motors/engines. Part of the broader rotating equipment population in turbomachinery-intensive facilities. Pulsation analysis (API 688 RP) interfaces with turbomachinery.

---

## API 675

**Positive Displacement Pumps—Controlled Volume for Petroleum, Chemical, and Gas Industry Services**  
3rd Edition, November 2012

### Scope
Reciprocating controlled-volume (metering, dosing, proportioning) pumps for petroleum, chemical, and gas industry services. Covers hydraulic diaphragm and packed plunger designs. Excludes direct mechanical actuation diaphragm pumps.

### Key Sections / Topics
- **Section 6 – Basic Design:**
  - Pressure Parts: cylinder/plunger materials; MAWP; hydrostatic test 1.5× MAWP
  - Check Valves: ball, disc, and poppet types; materials per service
  - Diaphragms: PTFE, PTFE/fabric-reinforced, metal; diaphragm failure detection (hydraulic pressure switch)
  - Packed Plungers: packing types (PTFE, UHMWPE, spring-loaded); plunger materials; flush/quench connections
  - Relief Valves: each pump head requires integral pressure relief valve (recirculation type)
  - Capacity Adjustment Mechanism: stroke length adjustment (manual or automatic positioner); micrometer calibration; position indication ±0.5%
  - Materials: Table 1/2; wetted parts per process fluid compatibility
- **Section 7 – Accessories:** Motor drive (inverter duty per NEMA MG1); stroke positioner (4–20 mA); flow indicator/totalizer; pulsation dampener
- **Section 8 – Testing:** Hydrostatic 1.5× MAWP; performance accuracy test (see below)

### Technical Highlights
- Rated capacity: ≥110% of maximum specified rate
- Steady-state accuracy: ±1% of rated capacity (at any fixed stroke setting from 10–100%)
- Flow repeatability: ±3% over 10:1 turndown
- Linearity: ±3% over 10:1 turndown
- Bearing L10 ≥25,000 hours

### Turbomachinery Relevance
Chemical injection/metering pumps (corrosion inhibitor, methanol, hydrate inhibitor, H₂S scavenger, scale inhibitor) are part of every turbomachinery-intensive gas processing and pipeline installation. These are often package items on turbomachinery skids.

---

## API 676

**Positive Displacement Pumps—Rotary**  
3rd Edition, November 2009 (Reaffirmed March 2015)

### Scope
Rotary positive displacement process pumps for petroleum, chemical, and gas industry services. Covers vane, lobe, gear (internal and external), screw, and progressive cavity types. Includes multiphase pumps (MPPs). Excludes controlled-volume, hydraulically driven, and reciprocating PD pumps.

### Pump Type Codes
| Code | Type |
|------|------|
| VR | Vane (rigid) |
| VS | Vane (sliding) |
| LS | Lobe (single) |
| LM | Lobe (multiple) |
| GET | External gear (timing) |
| GEU | External gear (untimed) |
| GI | Internal gear |
| SS | Single screw (progressive cavity) |
| SMT | Multiple screw (timed) |
| SMU | Multiple screw (untimed) |

### Key Sections / Topics
- **Section 6 – Basic Design:**
  - Selection and Rating: pressure/temperature/viscosity application limits; MAWP; suction pressure rating
  - Pressure Parts: casing materials (per fluid service); hydrostatic 1.5× MAWP; cast iron prohibited hazardous service
  - Connections: ASME B16.5 flanges standard
  - Rotating Elements: rotor material; timing gears (timed types); clearance maintenance
  - Mechanical Shaft Seals: per API 682/ISO 21049 (cross-reference normative)
  - Bearings: rolling element L10 ≥25,000h; hydrodynamic for special-purpose
  - Vibration: bearing housing <3.8 mm/s overall (liquid services); <7.1 mm/s (MPP test only)
  - Lubrication: self-lubricated (process liquid) or external lube; bearing lube system
  - Materials: Table 2 (material classes A–T)
- **Section 7 – Accessories:** Drivers, couplings, baseplates, relief valves (mandatory, integral or piped)
- **Section 8 – Testing:** Hydrostatic; volumetric efficiency; noise; mechanical run

### Technical Highlights
- Design life: 20 years
- Relief valve: mandatory (rotary PD pump must be protected against blocked outlet)
- Bearing L10 ≥25,000h
- Multiphase pumps (MPP): handle mixed gas/liquid up to 100% GVF at inlet; screw type most common
- Progressive cavity (SS): high-viscosity crude, polymer injection

### Turbomachinery Relevance
Gear-type rotary pumps serve as lube oil and seal oil auxiliary pumps in turbomachinery systems (startup/emergency lube oil pumps). Screw-type MPPs are increasingly used as booster pumps on offshore turbomachinery-driven production trains.

---

## API 677

**General-Purpose Gear Units for Petroleum, Chemical and Gas Industry Services**  
3rd Edition, April 2006 (Reaffirmed November 2016)

### Scope
General-purpose enclosed single and multi-stage gear units: parallel shaft helical and right-angle spiral bevel. Usually spared or non-critical service. Not for API 613 special-purpose, integrally geared, epicyclic, or non-involute gear designs.

### Key Sections / Topics
- **Section 2 – Basic Design:**
  - Shaft Assembly Designation: input/output shaft types (solid, hollow, flanged)
  - Rating: AGMA standard; service factor per Table 1 (minimum 1.25–1.50 depending on driver type)
  - Casings: cast iron or fabricated steel; split or solid; drain/vent/inspection ports
  - Gear Elements: helical (single or double); spiral bevel; AGMA Quality 10 minimum for 677; pitch line velocity ≤60 m/s (helical), ≤40 m/s (spiral bevel)
  - Dynamics: first lateral critical ≥15% above max speed
  - Bearings: rolling element (anti-friction) for lower power/speed; hydrodynamic for higher power
  - Lubrication: splash or forced-feed (per Tables 2/3 — speed/power boundary); API 614 Part 3 for forced-feed systems
  - Materials: AGMA Grade 1 minimum; alloy steel heat-treated gears for higher ratings
- **Section 3 – Accessories:** Mounting plate, coupling (API 671 optional; AGMA 9000 for general purpose), cooler/heater for oil
- **Section 4 – Testing:** No-load mechanical run; noise test optional

### Technical Highlights
- Not for unspared/critical service (use API 613 for those)
- Service factor: Table 1 — 1.25 (electric motor, uniform load) to 2.00 (reciprocating engine, high shock)
- Typical applications: cooling tower fans, forced draft fans, pump drives, mixer drives
- AGMA Grade 10 accuracy (pitch ≤0.008 mm per pitch error at 100 mm diameter)

### Turbomachinery Relevance
General-purpose gears drive fans and pumps associated with turbomachinery support systems (cooling towers, air coolers, seal oil pumps). Less critical than API 613 but ubiquitous in the same plant environment.

---

## API 681

**Liquid Ring Vacuum Pumps and Compressors for Petroleum, Chemical, and Gas Industry Services**  
1st Edition, February 1996 (Reaffirmed November 2010)

### Scope
Liquid ring vacuum pump and compressor systems for petroleum, chemical, and gas industry services. Covers both the machine and its ring liquid system. The liquid ring is a rotary positive displacement machine with a radially bladed impeller rotating eccentrically within an elliptical or eccentric casing; the rotating liquid ring forms the compressing element.

### Key Sections / Topics
- **Section 2 – Basic Design:**
  - Casings: concentric or eccentric, single or double-acting; materials (cast iron, ductile iron, stainless steel); MAWP and hydrostatic test (1.5× MAWP)
  - Connections: ASME B16.5 flanges; separate suction/discharge connections; liquid inlet/outlet
  - Rotating Elements: radially bladed impeller (cast or fabricated); shaft; hub; impeller-to-shaft fit
  - Mechanical Shaft Seals: per API 682; packing optional with approval
  - Dynamics: first dry critical ≥120% maximum continuous speed; proximity probes per API 670 (by agreement)
  - Bearings: rolling element (antifriction) L10 ≥50,000h; hydrodynamic optional for larger machines
  - Lubrication: grease or oil-bath for rolling element; forced-feed for hydrodynamic
  - Materials: standard and alternative material tables
- **Section 3 – System Design:**
  - Ring Liquid System: separator (gas/liquid), cooler (TEMA C shell-and-tube or plate), strainer (100 mesh stainless), makeup pump, recirculation piping
  - Controls and Instrumentation: pressure/temperature switches on separator; liquid level; vacuum gauge; optional API 670 vibration
  - Drivers: electric motor standard; steam turbine optional
  - Couplings: rigid or flexible; API 671 by agreement
  - Mounting: baseplate; common or separate mounting for machine and ring liquid system components
  - Piping: suction/discharge; ring liquid supply/return
- **Section 4 – Testing:** Factory acceptance test; performance tolerances: capacity 0/+4%, power ±10%

### Technical Highlights
- Design life: 20 years; 3 years uninterrupted operation
- First dry critical speed: ≥120% of maximum continuous speed
- Rolling element bearing L10: ≥50,000 hours
- Ring liquid: water most common; other liquids per service (e.g., process condensate for contaminated service)
- Performance: discharge pressure limited by ring liquid vapor pressure (single-stage vacuum to ~25 mbar abs with water at 15°C)

### Turbomachinery Relevance
Vacuum service in atmospheric/vacuum crude units (vacuum distillation), sulfuric acid plants, and other refinery/petrochemical operations. Sometimes driven by small steam turbines. Ring liquid system design parallels turbomachinery auxiliary systems.

---

## API 682

**Pumps—Shaft Sealing Systems for Centrifugal and Rotary Pumps**  
4th Edition, May 2014  
*(Equivalent to ISO 21049)*

### Scope
Specifies requirements for sealing systems for centrifugal and rotary pumps in petroleum, natural gas, and chemical industries. Primarily for hazardous, flammable, and/or toxic services requiring greater reliability, reduced emissions, and lower life-cycle sealing costs. Covers shaft diameters 20–110 mm (0.75–4.3 in.). Referenced normatively in API 610; also applies to ASME B73.1/B73.2 and API 676 pumps.

### Seal Classification System
#### Categories
| Category | Seal Chamber | Temp. Range | Max. Gauge Pressure | Testing |
|----------|-------------|-------------|---------------------|---------|
| 1 | ASME B73.1/B73.2 dimensions | –40 to 260 °C | 2 MPa (300 psi) | Basic factory test |
| 2 | API 610 dimensions | –40 to 400 °C | 4 MPa (600 psi) | Factory + qualification |
| 3 | API 610 dimensions | –40 to 400 °C | 4 MPa (600 psi) | Full qualification per Annex I |

#### Types
| Type | Design | Secondary Seal | Max. Temp. |
|------|--------|----------------|------------|
| A | Multi-spring pusher, cartridge | Elastomeric O-rings | 176 °C (350 °F) |
| B | Metal bellows, cartridge | Elastomeric O-rings | 400 °C (750 °F) |
| C | Metal bellows, cartridge | Flexible graphite | 400 °C (750 °F) |

#### Arrangements
| Arrangement | Description | Typical Service |
|-------------|-------------|-----------------|
| 1 | Single seal | General process service |
| 2 | Dual seal, buffer pressure < seal chamber | Slightly hazardous; emissions containment |
| 3 | Dual seal, barrier pressure > seal chamber | Highly hazardous/toxic; zero emissions |

### Key Sections / Topics
- **Section 4 – Sealing Systems:** Classification system (categories/types/arrangements); design objectives; purchaser specification procedure
- **Section 6 – Design Requirements:** Cartridge-mounted seals (mandatory); common design criteria; category-specific requirements; throttle bushing material (carbon); gland plate design; sleeve design; minimum clearances per Table 1
- **Section 7 – Specific Configurations:**
  - Arrangement 1: single seal + throttle bushing (floating carbon for Cat 2/3)
  - Arrangement 2: 2CW-CW (dual liquid buffer); 2CW-CS / 2NC-CS (gas buffer/containment)
  - Arrangement 3: 3CW-FB/BB/FF (liquid barrier); 3NC (gas barrier)
- **Section 8 – Accessories:** Gland connections; throat bushing; auxiliary piping plans (Annex G — normative); components (reservoir, cooler, filter, pump for Plans 52/53/54)
- **Section 9 – Instrumentation:** Temperature gauges, pressure indicators, level indicators, flow meters, relief valves, pressure control valves
- **Section 10 – Testing:** Hydrostatic 1.5× MAWP; air test 0.17 MPa (2 psi drop max); qualification test per Annex I
- **Annex G (normative) – Standard Piping Plans:**
  - Plans 01–14: Internal recirculation and flush from pump (no cooler)
  - Plans 21–23: Recirculation with cooler (Plan 23 preferred for hot services, impeller pumping ring)
  - Plans 31–41: Cyclone separator and external flush
  - Plans 51–55: Quench/buffer/barrier systems
  - Plans 52/53A/B/C: Unpressurized/pressurized liquid buffer reservoir/accumulator
  - Plans 61–66: Leakage detection and containment
  - Plans 71–76: Gas buffer/barrier and containment
  - Plan 99: Engineered special
- **Annex I (normative) – Qualification Test Protocol:** 100h dynamic test; static and cyclic pressure/temperature cycles; test fluids (water, propane, 15% NaOH, mineral oil); leakage limit <1000 ppmv or <5.6 g/h; face wear <1% (Cat 3)

### Technical Highlights
- Design objective: 25,000h MTBF between seal-related maintenance events
- Emissions objective: ≤1,000 ppmv at pump seal gland (EPA Method 21)
- All seals must be cartridge-mounted (no component seals)
- Seat materials: carbon-graphite vs. RBSiC/SSSiC (standard pair); hard-hard pairs (silicon carbide vs. silicon carbide) for abrasive/viscous/high-pressure
- Secondary seal materials: FKM (default); FFKM (high-T or chemical); flexible graphite (Type C only)
- Spring materials: Alloy C-276 (multi-spring) or Alloy 718 (bellows)

### Turbomachinery Relevance
Although primarily a pump seal standard, API 682 is normatively referenced by API 610 (the primary pump standard), API 676, and by extension any turbomachinery-driven pump train. Seal selection, flush plan specification, and qualification testing are critical knowledge areas for rotating equipment engineers. Dry-gas seal support systems for compressors are covered in API 614 Part 4, which follows closely analogous principles.

---

## API 684 RP

**Rotordynamic Tutorial: Lateral Critical Speeds, Unbalance Response, Stability, Train Torsionals, and Rotor Balancing**  
2nd Edition, August 2005 (Reaffirmed November 2010)  
*(Recommended Practice)*

### Scope
Tutorial and reference document supporting API Standard Paragraphs Section 6.8 (Dynamics) as applied in API 611, 612, 613, 616, 617, and 619. Directed at both machinery manufacturers and users to enable interpretation of rotordynamic analysis reports and judgment of acceptability of results. Not prescriptive requirements — the specific API equipment standards govern.

### Key Sections / Topics
- **Section 1 – Overview:** Purpose; relationship to API standards; overview of API Standard Paragraphs philosophy
- **Section 2 – Lateral Rotordynamics:**
  - Rotor-bearing modeling: shaft element stiffness/mass matrices; disk models; bearing models (stiffness/damping coefficients); support structure (pedestal) flexibility
  - Bearing models: tilting-pad journal bearing Kxx/Kyy/Cxx/Cyy vs. speed and load; synchronous vs. frequency-dependent coefficients
  - Seal models (annular seals): labyrinth, honeycomb, hole-pattern; Lomakin effect (stiffness of close-clearance annular seals)
  - Standard API analysis elements: undamped critical speed map; damped unbalance response; critical speed locations and amplification factors (AF)
  - Separation margins: ≥15% above/below operating speed range when AF ≤2.5; ≥10% when AF analyzed
  - Machinery-specific analysis: compressors (impeller seal models), turbines (blade-row excitation), gears
  - API testing correlation: shop test verification of predicted critical speeds
- **Section 3 – Stability Analysis:**
  - Linearized stability model; log decrement calculation
  - Destabilizing forces: Alford force (tip clearance aerodynamic), labyrinth seal cross-coupling stiffness, hydrodynamic instability (oil whirl/whip)
  - Level I screening: Annex I per API 617 — Alford force vs. effective damping
  - Level II analysis: full damped eigenvalue analysis with all cross-coupling inputs
  - Acceptance criterion: log decrement >0.1 at all conditions
- **Section 4 – Torsional Rotordynamics:**
  - Train torsional model: all masses (impellers, discs, coupling elements) and stiffnesses (shaft sections, coupling torsional stiffness)
  - Natural frequencies: calculated via transfer matrix or FEM; interference diagram (Campbell diagram equivalent)
  - Separation margins: ±10% of operating speed and harmonics (1×, 2× etc.)
  - Torsional stress: peak-to-peak torsional stress at couplings and shaft sections; compare to material endurance limit
  - Transient torsional: motor startup, short-circuit fault torques, VFD excitations
- **Section 5 – Rotor Balancing:**
  - Single-plane, two-plane, and multiplane balancing; influence coefficient method
  - Low-speed balancing: ISO 1940-1 residual unbalance limits (G2.5 for flexible rotors)
  - High-speed balancing in vacuum spin pit: residual unbalance verification per API 617 Annex A
  - Field balancing: four-run method (no phase measurement); vibration vector diagram
- **Section 6 – Train Torsionals:**
  - Full train torsional model including: driver (motor/turbine), gearbox, driven equipment, couplings
  - Excitation sources: electrical (2× line frequency, VFD harmonics, motor slip), mechanical (gear mesh, impeller passing frequency), reciprocating (harmonic torques)
  - Torsional natural frequency placement: avoid resonance with all train excitation orders

### Technical Highlights
- This RP is the analytical "how-to" companion to API 617/612/616 rotordynamic requirements
- Critical speed amplification factor (AF): ratio of peak response to baseline response; API uses AF to set variable separation margins
- Log decrement: δ = πC/ω (C = effective damping, ω = natural frequency); higher δ = more stable
- Oil whirl: subsynchronous vibration at ~0.45–0.48× running speed; caused by fluid film bearing instability; cured by switching to tilting-pad bearings
- Alford force: aerodynamic cross-coupling proportional to load and inversely proportional to blade-tip clearance; principal destabilizing force in compressors

### Turbomachinery Relevance
Essential foundational knowledge for all turbomachinery analysis. The rotordynamic concepts in API 684 RP govern acceptance criteria in every major turbomachinery API standard. Any turbomachinery chatbot must handle questions about lateral criticals, log decrement, stability, torsional analysis, and rotor balancing — all of which are derived from this RP.

---

## API 685

**Sealless Centrifugal Pumps for Petroleum, Petrochemical, and Gas Industry Process Service**  
2nd Edition, February 2011

### Scope
Minimum requirements for sealless centrifugal pumps in petroleum, heavy-duty petrochemical, and gas industry services. Applicable to single-stage overhung pumps: Magnetic Drive Pumps (MDP) and Canned Motor Pumps (CMP). Recommended when conditions exceed any of: discharge pressure >275 psig, suction pressure >75 psig, temperature >300 °F, speed >3600 rpm, head >400 ft, or impeller diameter >13 in. (mirrors API 610 applicability threshold — for the subset of services requiring zero shaft seal leakage).

### Pump Type Comparison
| Feature | Magnetic Drive Pump (MDP) | Canned Motor Pump (CMP) |
|---------|--------------------------|------------------------|
| Drive mechanism | Outer magnet ring → containment shell → inner magnet ring | Stator (in motor) → rotor liner → rotor |
| Power transmission | Magnetic coupling (no mechanical contact) | Direct electromagnetic (integrated motor) |
| Containment barrier | Containment shell (thin, non-magnetic, corrosion-resistant) | Stator liner + rotor liner |
| Shaft bearings | Product-lubricated sleeve bearings | Product-lubricated sleeve bearings |
| Decoupling on overload | Yes (magnets decouple at pull-out torque) | No (motor stalls) |
| Monitoring dry run | Harder (no direct rotor contact monitoring) | Motor current/temperature |
| Cooling/flushing | Recirculation from pump discharge through magnet/bearing cavity | Motor cavity recirculation |

### Key Sections / Topics
- **Section 6 – Basic Design:**
  - Service Life: 20 years minimum (excluding wear parts); 3 years uninterrupted
  - Pressure Casings: MAWP ≥ discharge pressure + 10% differential; minimum 4 MPa (600 psi) at 38°C; radially split only; tensile stress ≤25% UTS
  - Secondary Control/Containment: secondary casing ≥ primary MAWP rating (Annex B guidance on hazard-based selection)
  - Nozzle Loads: per Tables 4a/4b
  - Rotors: first dry bending critical ≥120% max continuous speed
  - Wear Rings: renewable; hardness differential ≥50 HB or both ≥400 HB
  - Dynamics: preferred operating region 70–120% BEP; ISO 1940-1 G2.5 balance
  - Bearings: product-lubricated hydrodynamic sleeve; L10 ≥25,000h
- **Section 9.1 – Magnetic Drive Pumps (MDP-specific):**
  - Magnetic coupling: synchronous or asynchronous (eddy-current); torque capacity ≥service factor × rated torque per Table 12
  - Containment shell: non-magnetic (Hastelloy C, PEEK, ceramic, or fiber-reinforced polymer); pressure rating ≥ MAWP; no failure on decoupling event
  - Recirculation circuit: internal; flow rate through bearing/magnet cavity calculated to maintain temperature and lubrication (Annex K — normative)
  - Magnet materials: NdFeB (high temperature limited, max ~120°C); SmCo (up to ~300°C); ferrite (low specific torque); selection per Annex I
- **Section 9.2 – Canned Motor Pumps (CMP-specific):**
  - Motor casing contains stator liner (non-magnetic); rotor core inside liner; motor cavity pressurized to pump suction
  - Motor current monitoring: primary protection against dry running
  - Terminal box: hermetically sealed; pressure-rated; external electrical connection
  - Thermal protection: motor winding thermocouple/RTD
- **Accessories:** Drivers (MDP: external motor per API 547; CMP: integral); couplings AGMA 9000 Class 9 (MDP only); baseplates per Annex M (normative)
- **Testing (Section 8):** Hydrostatic 1.5× MAWP; performance per ISO 9906 Grade 1 (Table 11 tolerances); optional: NPSH3, mechanical run (4h), complete unit, noise

### Technical Highlights
- MAWP: minimum 4 MPa (600 psi) — higher than equivalent API 610 pump at same conditions
- Containment shell/stator liner: rated to full system pressure + design margin
- Recirculation: must handle flash vaporization at low NPSH or high temperature; check Annex K
- Magnet temperature limits: NdFeB magnets demagnetize above ~150°C (varies by grade); must verify thermal design in recirculation circuit
- Secondary containment selection: Annex B — function of fluid toxicity/flammability; ERPG-2 threshold drives secondary containment requirement
- Vibration limits: Table 6/Figure 7

### Turbomachinery Relevance
Sealless pumps are used for lethal (HF alkylation, chlorine service), highly toxic, or extremely hazardous fluids where zero seal leakage is mandatory. While not turbomachinery per se, they are part of the rotating equipment package in refineries and petrochemical plants alongside turbomachinery drivers. The dynamic analysis requirements (lateral critical speed, rotor balancing) and MAWP requirements parallel API 610/617 philosophy.

---

## API 686 RP

**Process Industry Practices Recommended Practice for Machinery Installation and Installation Design**  
2nd Edition, December 2009  
*(Recommended Practice)*

### Scope
Recommended procedures, practices, and checklists for the installation and precommissioning of new, existing, and reapplied machinery for petroleum, chemical, and gas industry services. Intended to supplement vendor/OEM installation instructions. Covers rigging, foundations, baseplate grouting, piping, and shaft alignment.

### Structure
Each major chapter is divided into two subsections:
- **"Installation Design"** — engineering/design requirements to be met before equipment arrives
- **"Installation"** — field construction/erection procedures

### Key Chapters / Topics
| Chapter | Topic | Key Content |
|---------|-------|-------------|
| 1 | Introduction | Scope; responsibilities; coordination with API 610/611/612/616/617 and OEM |
| 2 | Rigging and Lifting | Load calculations; crane selection; sling angles; lift points; dynamic loads |
| 3 | Jobsite Receiving and Protection | Incoming inspection; shaft rotation check; bearing preservation; storage requirements (short/long-term); journal bearing and coupling protection |
| 4 | Foundations | Civil design basis; vibration isolation; anchor bolts (type, size, embedment); foundation resonance avoidance; pre-grouting checks; anchor bolt patterns |
| 5 | Mounting Plate / Baseplate Grouting | Epoxy vs. cementitious grout selection; surface preparation (cleanliness, roughness); grout pour (form design, vent placement, temperature limits); cure time and post-grout inspection; shimming for hot alignment correction |
| 6 | Piping | Pipe support design; nozzle load limits per API 610/611/612/616/617; pre-stress checks; final pipe spool installation sequence; spring hanger settings; flange bolt-up sequence and torque; hydrostatic test of piping before connection |
| 7 | Shaft Alignment | Alignment methods (dial indicator, laser); cold alignment targets; thermal growth prediction (OEM or API method); coupling spacer installation; offset/angularity tolerances; final hot alignment verification; reverse indicator method and rim-and-face method procedures |
| Additional | Electrical/Instrumentation (referenced) | API 670 (instrumentation), NEC/NFPA 70 (electrical area classification) |

### Technical Highlights
- **Shaft alignment tolerances:** cold alignment target = hot target − thermal growth correction; typical laser alignment tolerance: offset <0.05 mm, angularity <0.05 mm/100 mm
- **Baseplate leveling:** level to ±0.05 mm/m (0.05 mm per 1000 mm) before grouting
- **Grout type selection:** epoxy grout preferred for high-vibration machinery (turbomachinery); cementitious for low-vibration static equipment
- **Anchor bolt torque:** per structural specification; typically 70–80% of proof load
- **Nozzle loads:** must satisfy API equipment standard before pipe connection verified and flange bolted
- **Foundation resonance:** natural frequency of foundation + machine system to avoid machine operating range ±20%

### Turbomachinery Relevance
Directly applicable to all turbomachinery installation — every gas turbine, steam turbine, compressor, and gear installation follows these practices. Shaft alignment and baseplate grouting quality directly affects vibration performance and mechanical seal/bearing life. Cross-referenced by most API turbomachinery standards as a companion RP.

---

## API 687 RP

**Rotor Repair**  
1st Edition, September 2001 (Reaffirmed March 2015)  
*(Recommended Practice)*

### Scope
Minimum requirements for the inspection and repair of special-purpose rotating equipment rotors, bearings, and couplings. Applies to equipment built per API 612, 613, 617, 619, 671, and to hot gas expanders (fluid catalytic cracker power recovery, nitric acid plant turboexpanders). Basis: return all dimensions to latest design fits and clearances; produce a rotating element capable of ≥5 years uninterrupted operation.

### Structure — 7 Chapters (Each Chapter Used With Chapter 1)
| Chapter | Title | Coverage |
|---------|-------|----------|
| 1 | General | Common repair philosophy, documentation requirements, material certification, NDE methods, reports |
| 2 | Centrifugal Compressor Rotors | Impeller inspection (dimensional, crack detection), journal and thrust bearing surface, shaft NDE, balance check, impeller rerates |
| 3 | Steam Turbine Rotors | Blade inspection (crack detection, re-profiling), disc inspection (bore, rim, attachment area), blade replacement criteria, overspeed test |
| 4 | Gear Rotors | Gear tooth surface (spalling, pitting, scoring criteria), gear tooth profile/lead restoration, bearing journal resurfacing, case hardness measurement |
| 5 | Expander Rotors | Nozzle inspection, impeller inspection, erosion/corrosion repair criteria, tip seal clearance restoration |
| 6 | Bearings | Journal and thrust bearing inspection (Babbitt bond, clearance check, re-babitting), tilting pad dimensions, anti-friction bearing inspection (race condition, cage, rolling element) |
| 7 | Couplings | Gear coupling tooth inspection (wear, pitting, fretting); disc/diaphragm coupling element inspection (fatigue cracks, corrosion); hub bore inspection; balancing after repair |

### Key Technical Requirements
- **NDE Methods:** Magnetic particle testing (MT), liquid penetrant testing (PT), phased array ultrasonic (PA-UT) for disc bores and blade roots; dimensional inspection to ±0.005 mm
- **Surface finish:** Restored journal surfaces ≤0.4 µm Ra (bearing journals); impeller bore ≤1.6 µm Ra
- **Balance:** After any rotor repair, balance to original design specification or API 617/612/613 balance grade; high-speed balance in vacuum spin pit for compressor rotors
- **Material certification:** Original material verification (PMTO — Positive Material Identification); no substitutions without engineering approval
- **Welding repairs:** ASME IX qualified procedure; PWHT per material; NDE after weld (UT/MT/PT)
- **Documentation:** As-found and as-left dimensional record; NDE reports; balance reports; material certificates

### Turbomachinery Relevance
Core maintenance/overhaul standard for all special-purpose turbomachinery — compressors, steam turbines, gears, and couplings. Governs repair shop quality standards. Critical for turnaround planning, spare rotor management, and fitness-for-service assessments. Used alongside OEM repair manuals.

---

## API 688 RP

**Pulsation and Vibration Control in Positive Displacement Machinery Systems for Petroleum, Petrochemical, and Natural Gas Industry Services**  
1st Edition, April 2012  
*(Recommended Practice)*

### Scope
Guidance on pulsation and mechanical vibration control for positive displacement (PD) machinery systems. Two-part structure:
- **Part 1:** Fundamentals — applies to all PD machinery (reciprocating and rotary compressors and pumps)
- **Part 2:** Reciprocating compressor systems — commentary and guidance supplementing API 618 Clause 7.9 (pulsation analysis approaches)

### Structure and Key Sections

#### Part 1 — Fundamentals (All PD Machinery)
| Section | Title | Key Content |
|---------|-------|-------------|
| 1 | Scope | Applicability; relationship to API 618, 674, 676 |
| 2 | Terms and Definitions | Acoustic natural frequency, pulsation (dynamic pressure), mechanical resonance, structural resonance, damping |
| 3 | Fundamentals of Pulsation and Mechanical Vibration Theory | Acoustic wave propagation; acoustic resonance in pipes; quarter-wave and half-wave resonators; mechanical natural frequency calculations; pipe/vessel structural resonance; interaction between acoustic and mechanical systems |
| 4 | Fundamentals of Acoustic and Mechanical Modeling | Analog circuit (equivalent circuit) method; digital simulation; excitation sources (piston displacement profile, valve opening/closing); modeling boundary conditions (vessels, orifices, choke tubes) |
| 5 | Flow Measurement Effects of Pulsation | Error in orifice plate meters; ISO 5167 threshold for pulsation error; correction methods; meter selection to minimize pulsation error |
| 6 | Results Reporting | Format requirements for pulsation analysis reports; pressure pulsation plots; mechanical vibration plots; frequency spectra |
| 7 | Field Testing | Pulsation measurement instrumentation (dynamic pressure transducers, strain gauges); vibration measurement (accelerometers, velocity transducers); data acquisition; post-processing |
| 8 | Valve Dynamic Performance Analysis | Compressor valve pressure drop; valve plate dynamics (coefficient of restitution, valve motion modelling); impact velocity; valve life correlation |

#### Part 2 — Reciprocating Compressors (API 618 Approach Commentary)
| Approach | Description | When Applied |
|----------|-------------|--------------|
| 1 | Analog/model filtering | Low-power, low-pressure, well-characterized services |
| 2 | Digital acoustic simulation (no mechanical model) | Medium-risk services |
| 3 | Full acoustic + mechanical analog model (dynamic force → structural vibration) | High-risk, large machines, unspared, hazardous services |

### Technical Highlights
- **Pulsation limit (Approach 3):** Peak-to-peak pressure pulsation ≤±2% of absolute line pressure at any compressor cylinder flange; ≤±1% at flow measurement devices
- **Mechanical vibration limit:** Unrestrained pipe ≤12.5 mm/s rms; restrained/screwed pipe ≤25 mm/s rms
- **Acoustic resonance:** Avoid all acoustic natural frequencies within ±20% of excitation orders (1×, 2×, ... N× running speed)
- **Choke tubes:** Sized to provide acoustic low-pass filtering; L/D ratio and orifice sizing nomographs in Part 2 appendix
- **Scrubbers/separators:** Double as pulsation bottles; sizing per API 618 Volume/Bore ratio
- **Pulsation bottle sizing:** Annex to Part 2; function of cylinder bore, stroke, and desired pulsation attenuation

### Turbomachinery Relevance
Pulsation and vibration analysis is essential for reciprocating compressor trains, which are often driven by turbomachinery drivers (gas engines, steam turbines) through flexible couplings. Excitation from reciprocating machinery can propagate torsionally through the drivetrain to the prime mover. API 688 RP Part 2 directly supports API 618 Approach 3 compliance — mandatory for large unspared compressor trains. The valve dynamic performance analysis (Section 8) is critical for compressor valve selection and life prediction.

---

## Summary Cross-Reference Matrix

### Standards by Equipment Type

| Equipment | Primary Standard | Auxiliary Standards |
|-----------|-----------------|---------------------|
| Gas turbines | API 616 | API 614, 670, 671, 684 RP, 686 RP |
| Steam turbines (general purpose) | API 611 | API 614, 670, 671, 677, 686 RP |
| Steam turbines (special purpose) | API 612 | API 614, 670, 671, 613, 684 RP, 687 RP |
| Centrifugal/axial compressors | API 617 | API 614, 670, 671, 684 RP, 687 RP |
| Reciprocating compressors | API 618 | API 670, 688 RP |
| Rotary screw compressors | API 619 | API 614, 670 |
| Special-purpose gears | API 613 | API 614, 670, 687 RP |
| General-purpose gears | API 677 | API 614 |
| Special-purpose couplings | API 671 | API 687 RP |
| Centrifugal pumps | API 610 | API 682, 614 |
| Sealless pumps | API 685 | — |
| Pump shaft seals | API 682 | API 614 Pt 4 (dry gas) |
| Reciprocating pumps | API 674 | API 688 RP |
| Controlled-volume pumps | API 675 | — |
| Rotary pumps | API 676 | API 682 |
| Centrifugal fans | API 673 | API 670 |
| Air compressors (packaged) | API 672 | — |
| Liquid ring vacuum pumps | API 681 | API 682 |
| Machinery protection | API 670 | — (referenced by all) |
| Rotordynamics analysis | API 684 RP | — (referenced by 611/612/616/617) |
| Rotor repair | API 687 RP | — (companion to 612/613/617/619/671) |
| Installation | API 686 RP | — (companion to all) |
| Pulsation control | API 688 RP | API 618 (Part 2 commentary) |
| Lube/seal oil systems | API 614 | — (referenced by all turbomachinery) |

### Standards by Subject Area

| Subject | Relevant Standards |
|---------|--------------------|
| Rotordynamics / vibration analysis | 611, 612, 613, 616, 617, 619, 673, 681, 684 RP |
| Lube oil systems | 614 (all parts) |
| Shaft sealing (mechanical seals) | 682 (pumps), 614 Pt 4 (DGS for compressors), 685 (sealless) |
| Machinery protection / instrumentation | 670 (all machines) |
| Couplings | 671 (special purpose), 677 (general purpose gear units reference AGMA 9000) |
| Rotor repair / maintenance | 687 RP |
| Installation / alignment | 686 RP |
| Pulsation analysis | 688 RP, 618 |
| Performance testing | 611 (PTC 6), 612 (ASME PTC 6), 616 (ASME PTC 22), 617 (ASME PTC 10), 610 (ISO 9906) |
| Materials / NACE sour service | 610, 611, 612, 616, 617, 674, 682 (all reference NACE MR0103/MR0175) |

---

*End of API Standards Reference — Engineering Blackbook*

================================================================================
SECTION 2: API OTHER STANDARDS
Source: blackbook_api_other_standards.md
================================================================================

# API Other Standards — Comprehensive Summary
**Engineering Blackbook | 04. ENGINEERING BLACKBOOK > 02. Standards > 02. API > B. STANDARDS**
**Compiled**: April 19, 2026 | Licensee: Daniele Greco / CHIYODA CORP

---

## README / Package Index

### API Standards — PKG Package (Refractory Suite)
The README folder contains two Evernote-generated index files:

**API Standards — STATIC** (Equipment & Static Standards)
Lists: API 526, 560, 594, 599, 600, 602, 603, 605, 608, 609, 610, 611, 612, 616, 617, 618, 619, 620, 621, 650, 660, 661, 662 — covering flanged valves, fired heaters, check valves, gate/ball/butterfly valves, pumps, steam/gas turbines, compressors, storage tanks, heat exchangers.

**API Standards — PKG** (Refractory Package)
| Standard | Ed. | Title |
|----------|-----|-------|
| API 936 | 4 | Refractory Installation QC — Monolithic Linings |
| API 975 | 1 | Refractory Installation QC — Brick Systems |
| API 976 | 1 | Refractory Installation QC — AES/RCF Fiber Linings |
| API TR 978 | 1 | Monolithic Refractories: Manufacture, Properties, Selection |
| API TR 979 | 1 | Applications of Refractory Lining Materials |
| API TR 980 | 1 | Monolithic Refractories: Installation and Dryout |
| API TR 981 | 1 | Thermal Expansion Under Load and Creep — Testing Methods |

---

## Standards Covered in This Summary

| No. | Standard | Title | Edition |
|-----|----------|-------|---------|
| 1 | API 520 Part I | Sizing, Selection, and Installation of PRDs — Part I: Sizing and Selection | 10th Ed, Aug 2020 |
| 2 | API 520 Part II | Sizing, Selection, and Installation of PRDs — Part II: Installation | 7th Ed, Oct 2020 |
| 3 | API 521 | Pressure-relieving and Depressuring Systems | 7th Ed, Jun 2020 |
| 4 | API 526 | Flanged Steel Pressure-relief Valves | 7th Ed, Sep 2017 |
| 5 | API 541 | Form-wound Squirrel Cage Induction Motors ≥375 kW | 5th Ed, Dec 2014 |
| 6 | API 546 | Brushless Synchronous Machines ≥500 kVA | 3rd Ed, Sep 2008 |
| 7 | API 547 | General Purpose Form-wound Induction Motors 185–2240 kW | 2nd Ed, May 2017 |
| 8 | API 560 | Fired Heaters for General Refinery Service | 5th Ed, Feb 2016 |
| 9 | API 565 | Thermal Reactors for Sulfur Recovery Units | 1st Ed, Jun 2022 |
| 10 | API RP 572 | Inspection Practices for Pressure Vessels | 4th Ed, Dec 2016 |
| 11 | API 936 | Refractory Installation QC — Monolithic Refractories | 4th Ed, Jun 2014 |
| 12 | API 975 | Refractory Installation QC — Brick Systems | 1st Ed, Nov 2021 |
| 13 | API 976 | Refractory Installation QC — AES/RCF Fiber Linings | 1st Ed, Mar 2018 |
| 14 | API TR 978 | Monolithic Refractories: Manufacture, Properties, Selection | 1st Ed, Mar 2019 |
| 15 | API TR 979 | Applications of Refractory Lining Materials | 1st Ed, Oct 2018 |
| 16 | API TR 980 | Monolithic Refractories: Installation and Dryout | 1st Ed, Apr 2018 |
| 17 | API TR 981 | Thermal Expansion Under Load and Creep of Refractories | 1st Ed, Mar 2021 |

---

## SECTION 1: PRESSURE RELIEF & DEPRESSURING STANDARDS

---

### API 520 Part I — Sizing, Selection, and Installation of Pressure-Relieving Devices: Part I — Sizing and Selection
**Edition**: 10th Edition, August 2020 (Errata 1, May 2023)

#### Scope
Covers the sizing and selection of pressure-relieving devices (PRDs) protecting equipment with MAWP ≥15 psig in petroleum refineries and chemical processing facilities. Applicable to pressure vessels, heat exchangers, piping, and related equipment subject to overpressure from operating contingencies and fire exposure. Applies to steady-state Newtonian fluids. Does NOT cover steam boilers, nuclear pressure vessels, or non-Newtonian fluids.

#### Key Sections / Topics
- **PRD Types**: Spring-loaded pressure-relief valves (PRVs), pilot-operated PRVs, rupture disks, pin-actuated devices, buckling-pin devices.
- **Overpressure Scenarios**: Non-fire (single valve: 110% MAWP; multiple valves: 116% MAWP) and fire exposure (121% MAWP).
- **Orifice Discharge Coefficients**: Vapor/gas Kd = 0.975; Liquid (certified) Kd = 0.65; Rupture disk alone Kd = 0.62.
- **Sizing for Gas/Vapor (Critical Flow)**:
  - A = W√(TZ/M) / (C · Kd · P1 · Kb · Kc)
  - Where: W = flow (lb/hr), T = temperature (°R), Z = compressibility, M = molecular weight, C = gas constant (function of k), Kd = discharge coefficient, P1 = upstream relieving pressure (psia), Kb = backpressure correction, Kc = combination factor (rupture disk + PRV).
- **Sizing for Liquid (Certified)**:
  - A = Q√(Gl) / (38 · Kd · Kw · Kc · Kv · √(P1−P2))
- **Sizing for Two-Phase Flow**: Omega method (Annex C); homogeneous equilibrium model.
- **Rupture Disks**: Burst pressure at stamped temperature; combination factors; materials selection.
- **Inlet Pressure Drop**: ≤3% of set pressure (to prevent chatter/instability, see Part II).
- **Back Pressure**: Conventional PRVs limited to ~10% set pressure; balanced bellows to ~30–50%; pilot-operated PRVs may handle 100%.
- **Accumulation Limits**:
  - Single PRV (non-fire): 10% above MAWP
  - Multiple PRVs (non-fire): 16% above MAWP
  - Fire case: 21% above MAWP

#### Key Formulas
| Application | Formula | Key Parameters |
|-------------|---------|----------------|
| Gas critical flow | A = W√(TZ/M) / (C·Kd·P1·Kb·Kc) | Orifice area in² |
| Gas subcritical flow | Modified by Kf factor | For P2/P1 > critical |
| Steam (saturated) | A = W / (51.45·Kd·P1·Kn·Kb) | Kn = Napier correction |
| Liquid (certified) | A = Q√(Gl)/(38·Kd·Kw·Kc·Kv·√ΔP) | Q in gpm, Gl = specific gravity |
| Fire heat input Q | Q = 21,000·F·A^0.82 (wetted area) | F = environment factor |

#### Relevance to Turbomachinery Operations
- **Compressor suction/discharge vessels**: Sizing PRVs on knockout drums, scrubbers, interstage separators, and suction drums feeding centrifugal and reciprocating compressors.
- **Turbine inlet/exhaust headers**: Overpressure protection for steam headers, condensers, and process gas systems.
- **Fire case relief**: Sizing for fire exposure around turbomachinery skids, lube oil systems, and instrument gas vessels.
- **Two-phase flow**: Relevant for liquid-gas carryover in compressor inlet drums requiring two-phase PRD sizing.

---

### API 520 Part II — Sizing, Selection, and Installation of Pressure-Relieving Devices: Part II — Installation
**Edition**: 7th Edition, October 2020

#### Scope
Specifies installation requirements and recommendations for PRDs (PRVs, pilot-operated valves, rupture disks) on pressure-containing equipment with MAWP ≥15 psig. Covers inlet/discharge piping design, isolation arrangements, safe disposal, and maintenance access. Companion to API 520 Part I (sizing) and API 521 (disposal systems).

#### Key Sections / Topics
- **PRD Location**: On the protected vessel, not on connecting piping; minimum distance from flow disturbances.
- **Inlet Piping**: Non-reclosing and reclosing devices; inlet pressure drop ≤3% of set pressure to prevent instability (cycling, flutter, chatter); inlet line must be full-area.
- **Isolation (Stop) Valves**: Must be full-bore gate or ball valves (NOT butterfly or globe); car-sealed open (CSO) or locked open (LO); interlocked open/closed pairs for dual-PRV installations.
- **Discharge Piping**: Must be designed to withstand reaction forces at full rated flow; backpressure limits for valve type; drainage provisions to prevent liquid accumulation.
- **PRV Stability**: Cycling/flutter/chatter caused by excessive inlet pressure drop or oversized valve; correction: reduce inlet loss or use smaller orifice.
- **Rupture Disk Installations**: Installation orientation; combination factor when used with PRV (Kc = 0.9 certified, 0.8 uncertified).
- **Bonnet/Pilot Vent Piping**: Must be self-draining; vented to safe location or closed system.
- **Handling/Maintenance**: PRVs must be tested/maintained per API 576 (Inspection of PRDs).
- **Thermal/Hydraulic Considerations**: Thermal relief for blocked-in liquids; hydraulic considerations for liquid-filled systems.

#### Key Requirements
| Topic | Critical Requirement |
|-------|----------------------|
| Inlet pressure drop | ≤3% of set pressure (absolute limit for stability) |
| Isolation valves | Full-area gate or ball only; no butterfly/globe |
| Discharge reaction | Pipe supported to withstand full-flow reaction force |
| Backpressure limit | Conventional: ≤10% set; Balanced bellows: ≤30–50% set |
| Rupture disk + PRV | Kc = 0.9 (certified combination) or 0.8 (uncertified) |

#### Relevance to Turbomachinery Operations
- **Compressor cylinder PRV installation**: Inlet pressure drop constraint directly applies to PRVs on compressor gas cylinders and process vessels in compression trains.
- **Safe venting of compressor relief**: Discharge piping to flare/vent headers per API 521; reaction force analysis critical for skid piping.
- **Lube/seal oil system relief**: Thermal relief valve installation for blocked-in lube oil coolers and seal oil accumulators.
- **Maintenance access**: PRV testability requirements affect block valve arrangements on turbomachinery packages.

---

### API 521 — Pressure-relieving and Depressuring Systems
**Edition**: 7th Edition, June 2020 (Errata 1, November 2022)

#### Scope
Covers the design of pressure-relieving and vapor depressuring systems for petroleum refineries, petrochemical/gas processing plants, LNG facilities, and oil/gas production facilities. Addresses: causes of overpressure, methods for determining individual device relieving rates, design of disposal systems (relief headers, flares, vent stacks), and depressuring systems. Does NOT apply to direct-fired steam boilers.

#### Key Sections / Topics
**Overpressure Causes (17 Scenarios)**:
1. Blocked outlet / closed valve downstream
2. Utility failure (cooling water, electricity, steam, instrument air)
3. External fire exposure
4. Heat exchanger tube rupture (high-pressure into low-pressure side)
5. Thermal expansion of blocked-in liquid
6. Chemical reaction (exothermic runaway)
7. Loss of reflux in fractionation columns
8. Abnormal heat input
9. Vapor depressuring systems failure
10. Failure of control valves to open/close
11. Tower flooding, liquid surge
12. High-pressure piping communication (manifold/header)
13. Loss of steam in steam systems
14. Hydraulic shock
15. Startup/shutdown operations
16. Automatic start of pumps
17. Accumulation from multiple causes

**Fire Relief**:
- Wetted area heat absorption: Q = 21,000·F·A^0.82 (bare steel vessels)
- Environmental factor F (fireproofing, drainage): 0.01 to 1.0
- Latent heat at relieving conditions for vaporization rate

**Depressuring Systems**:
- Emergency depressuring to ≤50% of vessel MAWP (or 100 psig, whichever is lower) within 15 minutes
- Or: to ≤50% MAWP within 15 minutes for fire scenarios
- Gas flow controlled via manual or automatic depressuring valve to flare

**Disposal Systems**:
- Closed vs. open systems; flare system design (knockout drums, water seals, flare tips)
- Flare header pressure drop calculations; backpressure limits for PRVs
- Vent stacks for non-hazardous, non-flammable gases

**HIPS (High Integrity Protective Systems)**:
- Annex F: Alternative to PRD using SIS per IEC 61511; risk reduction factor calculation
- HIPS acceptable when PRD installation impractical or insufficient reliability

**Thermal Expansion**:
- Blocked-in liquid temperature rise: ΔT = Q / (m·Cp)
- Relief area for liquid thermal expansion often small (0.25-inch NPT orifice typical)

#### Key Formulas
| Topic | Formula |
|-------|---------|
| Fire heat input | Q = 21,000 · F · A^0.82 (A = wetted area ft²) |
| Vapor relief rate | W = Q / λ (latent heat at relieving conditions) |
| Thermal liquid relief | Q_relief = β·B·(heat input) / (α·ρ) |
| Depressuring target | ≤50% MAWP or 100 psig in ≤15 min |

#### Relevance to Turbomachinery Operations
- **Power failure scenario**: Loss of electrical power is a primary design case for compressor/turbine installations — blocked discharge, compressor shutdown, check valve failure scenarios all require PRD sizing per API 521.
- **Compressor train depressuring**: Emergency depressuring systems on high-pressure gas compression trains (designed to ≤50% MAWP in 15 min) to prevent vessel failure in fire.
- **Turbine/compressor casing relief**: Heat exchanger tube rupture scenario (e.g., lube oil cooler, inter/after-cooler tube failure) defines relief device sizing.
- **Flare header design**: All compressor and turbine PRD outlets route to flare header; backpressure in header constrains PRV selection (API 520 Part I).
- **Gas turbine fuel gas systems**: Fuel gas KO drums and scrubbers require overpressure protection; startup/shutdown scenarios explicitly addressed.

---

### API 526 — Flanged Steel Pressure-relief Valves
**Edition**: 7th Edition, September 2017 (Errata 1, September 2018)

#### Scope
Purchase specification for flanged steel direct spring-loaded and pilot-operated pressure-relief valves (PRVs) for petroleum and petrochemical service. Establishes standardized orifice designations, dimensions, pressure classes, material requirements, and acceptance tests. Provides interchangeable dimensions enabling cross-vendor replacement.

#### Key Sections / Topics
- **Standard Orifice Designations**: D through T
  | Orifice | Area (in²) | Inlet Size | Outlet Size |
  |---------|-----------|------------|-------------|
  | D | 0.110 | 1" | 2" |
  | E | 0.196 | 1.5" | 2" |
  | F | 0.307 | 1.5" | 2" |
  | G | 0.503 | 1.5" | 3" |
  | H | 0.785 | 2" | 3" |
  | J | 1.287 | 3" | 4" |
  | K | 1.838 | 3" | 4" |
  | L | 2.853 | 4" | 6" |
  | M | 3.600 | 4" | 6" |
  | N | 4.340 | 4" | 6" |
  | P | 6.380 | 6" | 8" |
  | Q | 11.05 | 6" | 10" |
  | R | 16.00 | 8" | 10" |
  | T | 26.00 | 8" | 10" |
- **Pressure Classes**: ASME 150, 300, 600, 900, 1500, 2500
- **Temperature Range**: -100°F to +800°F body material dependent
- **Materials**:
  - Carbon steel body: WCB (standard)
  - Chrome-moly body: WC6 (1.25Cr-0.5Mo), WC9 (2.25Cr-1Mo), C12A
  - Stainless steel body: CF8M (316 SS)
  - Trim: SS 316, Monel, Hastelloy (purchaser-specified)
- **Inlet Flanges**: ASME B16.5 RTJ or RF
- **Outlet Flanges**: ASME B16.5 150# RF for open discharge; higher per design for closed systems
- **Center-to-Face Dimensions**: Tables B.1–B.7; standardized for interchangeability
- **Set Pressure Test**: Hydrostatic seat tightness per API 527 (seat leakage test)
- **Seat Leakage**: Per API 527; metal-to-metal seats allow bubble leakage per Table
- **Pilot-Operated PRVs**: Section 4 (snap-acting vs. modulating, backpressure capabilities)

#### Key Requirements
| Parameter | Requirement |
|-----------|-------------|
| Orifice designations | D through T (0.110 to 26.00 in²) |
| Inlet/outlet sizing | 1"–8" inlet / 2"–10" outlet |
| Pressure classes | ASME 150 through 2500 |
| Standard body materials | WCB (CS), CF8M (SS), WC6/WC9 (Cr-Mo) |
| Seat leakage test | API 527 at 90% set pressure |
| Dimensional standard | ASME B16.34, B16.5 flanges |

#### Relevance to Turbomachinery Operations
- **Compressor package PRVs**: Provides standard catalog dimensions for selecting interchangeable PRVs on compressor suction/discharge vessels, gas coolers, inter/after-coolers, scrubbers.
- **Steam turbine steam traps/relief**: Steam line relief valves on turbine steam admission headers; standardized orifices simplify procurement.
- **Stocking philosophy**: Cross-vendor interchangeability enables stocking one spare per orifice size (D–T) covering entire compression train.
- **High-pressure gas service**: Orifices K–T with ASME 600–2500# flanges applicable to high-pressure gas compression and injection systems.

---

## SECTION 2: ELECTRIC MOTOR DRIVER STANDARDS

---

### API 541 — Form-wound Squirrel Cage Induction Motors — 375 kW (500 hp) and Larger
**Edition**: 5th Edition, December 2014

#### Scope
Specifies minimum requirements for special-purpose form-wound squirrel cage induction motors with power ratings ≥375 kW for petroleum, chemical, and industrial applications. A motor is "special purpose" if any ONE of the following applies:
- Critical service with no spare and >2250 kW @ ≤1800 rpm
- ≥600 kW two-pole TEFC
- Drives high-inertia load
- Used on adjustable speed drives (ASDs)
- Used as induction generator
- Vertical ≥375 kW
- Hostile/corrosive environment

Excludes: reversing duty, below 375 kW, motors covered by API 546 or API 547.

#### Key Sections / Topics
- **Design Life**: 25-year design life; ≥5-year continuous uninterrupted operation target
- **Insulation**: Class F (maximum winding temp 155°C); Class B temperature rise (limiting temp rise to 80°C by RTD at rated load) — provides 25°C insulation margin
- **Winding**: Epoxy vacuum pressure impregnation (VPI); multiturn coils form-wound
- **Bearings**: Hydrodynamic sleeve bearings (default for most ratings); antifriction bearings for smaller units or vertical; API 610-style bearing housings with RTDs
- **Vibration Limits**:
  - Shaft vibration: ≤1.5 mil peak-to-peak (unfiltered) at bearing housings
  - Housing vibration: ≤0.1 in/s rms
- **Balance**: ISO 1940-1 Grade G1.0 (rotor alone); assembled rotor with coupling half: G1.0
- **Starting**: LRC (locked rotor current) 450–650% of FLA; minimum 5000 full-voltage starts from cold over motor lifetime
- **Enclosures**: TEFC (Totally Enclosed Fan Cooled), TEAAC (Air-to-Air Cooled), TEWAC (Water-to-Air Cooled), WP-II (Weather Protected Type II)
- **Cooling**: Separate externally mounted cooling fans; temperature monitoring (RTDs in windings and bearings)
- **Mechanical Critical Speeds**: First lateral critical speed ≥125% of maximum operating speed (for flexible rotor); stiff-shaft designs run below first critical
- **Terminal Box**: Oversized for power cable connections; separate box for auxiliaries
- **Testing**: Factory (routine): resistance, insulation, no-load, locked rotor; optional complete tests: full load, efficiency, noise; surge test all coils; vibration test

#### Key Requirements Summary
| Parameter | Requirement |
|-----------|-------------|
| Design life | 25 years |
| Continuous operation | ≥5 years |
| Insulation class | F (155°C max) |
| Temperature rise | Class B (80°C by RTD) |
| Shaft vibration | ≤1.5 mil p-p unfiltered |
| Housing vibration | ≤0.1 in/s rms |
| Balance grade | ISO 1940-1 G1.0 |
| Locked rotor current | 450–650% FLA |
| Full voltage starts | 5000 minimum over life |

#### Relevance to Turbomachinery Operations
- **Primary application**: Large electric motor drivers for centrifugal compressors, high-horsepower pumps, and large fans in turbomachinery packages.
- **ASD (VFD) drives**: Requirements for motors driven by variable frequency drives (ASDs) — critical for compressor capacity control.
- **Critical compressor service**: No-spare motors on essential compression trains must meet special-purpose criteria; complete factory testing required.
- **Vibration monitoring interface**: Shaft vibration limit (1.5 mil p-p) and housing vibration (0.1 in/s) interface directly with API 670 monitoring systems.
- **Torsional analysis**: API 541 requires torsional analysis for motor-compressor trains; critical for avoiding torsional resonance at operating speeds and during starting.
- **Hydrodynamic bearings**: Consistent with API 610/617 bearing design philosophy; bearing temperature RTDs integrate with machinery protection systems.

---

### API 546 — Brushless Synchronous Machines — 500 kVA and Larger
**Edition**: 3rd Edition, September 2008

#### Scope
Specifies minimum requirements for form-wound and bar-wound brushless synchronous machines ≥500 kVA for petroleum, chemical, and general industrial service. Covers both synchronous motors and generators with salient-pole (solid or laminated) or cylindrical rotors. Applicable to machines driven by or driving adjustable speed drives (ASDs). Excludes synchronous condensers, permanent magnet machines, and reluctance motors.

#### Key Sections / Topics
- **Design Life**: 25-year design life; ≥5-year uninterrupted continuous operation
- **Insulation**: Class F (155°C max); Class B temperature rise by resistance (80°C rise); rotor Class F/B rise same requirement
- **Winding**: Multi-turn form-wound stator coils; bar-wound rotors for high-speed machines; epoxy VPI
- **Excitation Systems**: Brushless (rotating exciter + rectifier on shaft); includes field forcing capability; exciter protection
- **Power Factor**: Unity or leading (for voltage regulation benefit); lagging possible but specified
- **Mechanical Design**:
  - Enclosures: TEFC, TEAAC, TEWAC, WP-II
  - Bearings: Hydrodynamic (standard); antifriction where specified
  - Dynamic analysis: Lateral critical speeds ≥125% of maximum continuous speed; torsional critical speeds analyzed and plotted
- **Torsional Analysis** (Section 4.9.3.2):
  - Full torsional analysis required for synchronous motors driving reciprocating or centrifugal loads
  - Excitation torques at 2× line frequency (120 Hz at 60 Hz systems) must be evaluated
  - Torsional damping modeled; resonances avoided or damped
- **Starting**: Direct-on-line (DOL) or reduced voltage; starting current/torque curves required; pull-in torque ≥ load starting torque at 95% synchronous speed
- **Testing**: Routine: winding resistance, insulation resistance, HiPot, no-load current/losses; optional: full load efficiency, power factor, temperature rise, unbalance response, torsional natural frequency
- **Stability**: Transient and steady-state stability analysis (Annex); power system simulation compatibility
- **Documentation**: Complete design documentation including rotor dynamics, vibration analysis, torsional data

#### Key Requirements Summary
| Parameter | Requirement |
|-----------|-------------|
| Design life | 25 years |
| Continuous operation | ≥5 years |
| Stator insulation | Class F (155°C max) |
| Temperature rise | Class B (80°C rise by resistance) |
| Shaft vibration | ≤1.5 mil p-p (same as API 541) |
| Balance grade | ISO 1940-1 G1.0 |
| Lateral critical speed | ≥125% of max operating speed |
| Torsional analysis | Mandatory for motor-compressor/generator trains |

#### Relevance to Turbomachinery Operations
- **Synchronous motor-driven centrifugal compressors**: Primary application; torsional analysis requirements are critical for motor-compressor coupling design, especially for large LNG/gas injection compression trains.
- **Generator drives**: Gas turbine generators and steam turbine generators must meet API 546 if brushless synchronous construction applies.
- **Torsional torques at start-up**: Synchronous motors develop large transient torques during pull-in (up to 3–4× FLT); coupling and shaft train must be designed for these transient loads.
- **ASD synchronous motors**: Increasingly used for large compressor drives; requirements for harmonic torques from ASDs are addressed.
- **Excitation system**: Brushless excitation eliminates brush maintenance — important for critical continuous-service compressor drivers with 5-year turnaround intervals.

---

### API 547 — General Purpose Form-wound Squirrel Cage Induction Motors — 185 kW (250 hp) through 2240 kW (3000 hp)
**Edition**: 2nd Edition, May 2017

#### Scope
Specifies requirements for general-purpose, form-wound squirrel cage induction motors rated 185–2240 kW for petroleum, chemical, and industrial applications in severe-duty service. Applies specifically to:
- 2-pole TEFC motors <600 kW
- 2-pole WP-II motors <930 kW
- Vertical motors <375 kW
- Motors on centrifugal loads only (NOT high-inertia loads)
- Inertia within NEMA MG1 Part 20 limits

Excludes motors meeting API 541 (special purpose) criteria. API 547 is the "standard duty" tier below API 541.

#### Key Sections / Topics
- **Design Life**: 25-year design life; minimum 3-year uninterrupted operation (less stringent than API 541's 5 years)
- **Insulation/Rise**: Class F / Class B rise — same insulation margin as API 541; epoxy VPI
- **Bearings**: Hydrodynamic bearings (default for horizontal ≥375 kW); antifriction permissible for smaller sizes; grease lubrication for antifriction
- **Enclosures**: TEFC (standard); WP-II alternative; excludes TEAAC/TEWAC (cooling water not required)
- **Vibration**:
  - Velocity: ≤2.5 mm/s (0.1 in/s) rms overall — slightly less stringent than API 541
  - No shaft vibration requirement (shaft proximity probes not standard)
- **Balance**: ISO 1940-1 G2.5 (less stringent than API 541 G1.0)
- **Starting**: NEMA Design B torque/current characteristic; LRC per NEMA MG1
- **Mechanical Critical Speeds**: Stiff-shaft design operating below first critical speed
- **Terminal Box**: Standard oversized terminal box; separate aux terminal box
- **Testing**: All units surge-tested (stator winding quality); routine electrical tests; no requirement for vibration test of assembled motor

#### Comparison with API 541
| Parameter | API 547 | API 541 |
|-----------|---------|---------|
| Rating range | 185–2240 kW | ≥375 kW (special purpose) |
| Design life | 25 years | 25 years |
| Continuous operation | 3 years min | 5 years min |
| Balance grade | ISO G2.5 | ISO G1.0 |
| Shaft vibration | Not required | ≤1.5 mil p-p |
| Housing vibration | ≤2.5 mm/s | ≤0.1 in/s |
| Enclosures | TEFC/WP-II | TEFC/TEAAC/TEWAC/WP-II |
| Application | Centrifugal loads, standard service | Any special purpose criteria |

#### Relevance to Turbomachinery Operations
- **Auxiliary turbomachinery equipment**: Covers electric drivers for seal gas compressors, lube oil pumps, cooling fans, booster fans, and auxiliary compressors associated with main turbomachinery packages.
- **Smaller compression equipment**: Gas gathering compressors, instrument air compressors, and utility compressors in refinery/gas plant service where the simplified API 547 requirements are acceptable.
- **General purpose distinction**: API 547 motors are selected when the motor does NOT meet any API 541 special-purpose trigger — important for engineering economics on smaller/non-critical equipment.

---

## SECTION 3: FIRED EQUIPMENT STANDARDS

---

### API 560 — Fired Heaters for General Refinery Service
**Edition**: 5th Edition, February 2016

#### Scope
Specifies requirements and recommendations for the design, materials, fabrication, inspection, testing, preparation for shipment, and erection of fired heaters, air preheaters (APHs), fans, and burners for general refinery service. Covers box, cabin, and cylindrical (vertical/helical coil) configurations. Does NOT apply to steam reformers or pyrolysis furnaces.

#### Key Sections / Topics
- **Thermal/Process Design**:
  - Volumetric heat release limits: ≤165 kW/m³ (gas fuel), ≤125 kW/m³ (oil fuel)
  - Draft: Negative ≥25 Pa (0.10 in. H₂O) at arch at 120% design heat release
  - Flux density limits based on 2× nominal tube OD spacing
- **Tube Design** (API 530 base):
  - Tube materials: ASTM A192, A213, P5, P9, P11, P22 per temperature range
  - Carbon steel max design temp: 425°C (800°F)
  - 2.25Cr-1Mo max design temp: 650°C (1200°F)
  - Corrosion allowance: C steel / C-½Mo: 3 mm (0.125 in.); 9Cr+: 1 mm (0.040 in.)
  - Seamless tubes; OD range 60.3–273.1 mm
- **Tube Supports**: Stress ≤ lesser of (1/3 UTS, 2/3 YS, 50% creep/rupture at 10,000 h); casting factor 0.8; Annex D creep curves
- **Headers**: Plug headers, return bends; materials compatible with tube material
- **Refractory Linings**: Hot-face design temp = calculated + 165°C (300°F); casing temp ≤82°C (180°F); AES/RCF fiber and castable systems; API 936/975/976 QC applies
- **Stacks, Ducts, Breeching**: Self-supporting stacks; wind vibration Scruton number design; strakes/dampers if required
- **Burners**: NOx/CO limits; excess air control; sootblowers; atomizing steam
- **Air Preheaters (Annex F)**: Dew point control; excess air 10–20%; test-block flow 115–120%
- **Centrifugal Fans (Annex E)**: Arrangements 3 and 7 (AMCA); rated at 115% normal flow; trip speed Table E.1; vibration limits
- **Thermal Efficiency (Annex G)**:
  - e = [hL + Δha + Δhf + Δhm – (hr + hs)] / [hL + Δha + Δhf + Δhm] × 100

#### Key Requirements
| Topic | Requirement |
|-------|-------------|
| Volumetric heat release | ≤165 kW/m³ gas; ≤125 kW/m³ oil |
| Draft at arch | ≥25 Pa (0.10 in H₂O) at 120% heat release |
| Casing max temp | ≤82°C (180°F) |
| Hot-face refractory design | Calculated + 165°C (300°F) margin |
| Tube corrosion allowance | 3 mm (CS); 1 mm (9Cr+) |
| Fan test point | 115% of normal flow rate |

#### Relevance to Turbomachinery Operations
- **Fired heater fans (Annex E)**: Forced draft (FD) and induced draft (ID) centrifugal fans are turbomachinery equipment covered in Annex E; vibration/critical speed requirements similar to API compressor fans.
- **Process heaters in turbomachinery facilities**: Feed preheaters, reformer feed heaters, and reboiler furnaces support compression/turbine processes; API 560 governs their design.
- **Fuel gas system**: Burner design and fuel gas quality requirements interact with fuel gas compression and conditioning systems upstream of the heater.
- **Startup/dryout**: Refractory dryout schedules per API 936/980 apply to fired heaters; improper dryout causes forced outages affecting associated compression trains.

---

### API 565 — Thermal Reactors for Sulfur Recovery Units in General Refinery Services
**Edition**: 1st Edition, June 2022

#### Scope
Provides recognized industry requirements and guidance for the design, specification, fundamental operation, instrumentation, control, safeguarding, and maintenance of sulfur recovery unit (SRU) thermal reactors in general refinery services. Covers air-only and oxygen-enriched modified-Claus process operations. The thermal reactor consists of the burner, reaction chamber, and tubesheet protection system of the thermal reactor steam generator (TRSG).

#### Key Sections / Topics
- **Process**: Modified-Claus H₂S combustion: H₂S + 1.5 O₂ → SO₂ + H₂O; partial oxidation yields S₂; secondary Claus converters complete recovery. Operating temperature: up to 1565°C (2850°F) in reaction chamber.
- **Feeds**: Amine acid gas (AAG) — primarily H₂S from amine regeneration; Sour water acid gas (SWAG) — contains NH₃ + H₂S + water.
- **Design Requirements**:
  - MAWP per ASME VIII Div 1 UG-22/Appendix H + NFPA 69 Ch. 13 (deflagration containment)
  - Design minimum temperature (DMT) ≥343°C (650°F)
  - Shell temperature maintained 150–315°C (300–600°F) via refractory + ETPS (External Thermal Protection System)
  - Vacuum design: purchaser-specified percentage
- **Materials**: Carbon steel (killed/normalized SA-516 Gr60/65/70); bolting per Table 3 (B7M/2HM for sour service per NACE MR0175); corrosion allowance 3 mm (1/8 in.)
- **Refractory (Section 7 + Annex D)**: Hot-face high-alumina brick (Tables D.1–D.4); backup IFB/castable; ferrule protection at tubesheet; creep <0.5% at 1650°C
- **Burner (Section 6)**: Stable combustion; no soot/unburned O₂ at outlet; turndown per purchaser; noise/vibration limits; ignition control system (ICS)
- **Ignition Control System (ICS)**: Trial-for-ignition ≤10 seconds; dual shutoff valves (2XV + position feedback); pre/post-ignition purge (5 volumes in 20 min; port velocity ≥1 m/s)
- **Instrumentation/Control (Section 12)**: BPCS and SIFs per ANSI/ISA-61511 / IEC 61511-1; alarms per Table G.4; safety instrumented functions (SIFs) for burner management
- **Nozzle Loads (Table 2)**: e.g., DN50 150# flange: Fx=340 N, Mx=270 N·m; thermal: 70% load; sustained: 30% load

#### Key Requirements
| Category | Requirement |
|----------|-------------|
| Operating temperature | Up to 1565°C (2850°F) hot face |
| Shell temperature | 150–315°C (300–600°F) via refractory + ETPS |
| DMT | ≥343°C (650°F) |
| Refractory creep | <0.5% at 1650°C (API TR 981 method) |
| Purge volumes | ≥5 volumes in 20 min |
| Trial-for-ignition | ≤10 seconds |
| SIF standard | ANSI/ISA-61511 / IEC 61511-1 |

#### Relevance to Turbomachinery Operations
- **SRU air blowers**: Combustion air supply to the thermal reactor burner is provided by air blowers (centrifugal or axial); flow and pressure requirements affect blower selection and control.
- **Oxygen enrichment**: O₂-enriched operations use dedicated O₂ injection (compressed oxygen) requiring O₂ compressors and safety interlocks per API 565.
- **Combustion stability**: Vibration from unstable combustion can propagate through connected piping and vessels; relevant to piping design of blower discharge lines.
- **Burner ignition systems**: ICS design philosophy (SIS/SIF) is consistent with turbomachinery ESD systems, allowing common methodology across rotating and static fired equipment.

---

## SECTION 4: PRESSURE VESSEL INSPECTION STANDARD

---

### API RP 572 — Inspection Practices for Pressure Vessels
**Edition**: 4th Edition, December 2016 (Recommended Practice)

#### Scope
Supplements API 510 (Pressure Vessel Inspection Code) by providing pressure vessel inspectors with best-practice guidance and technical knowledge for inspecting all types of in-service pressure vessels (drums, heat exchangers, columns, reactors, air coolers, spheres) in petroleum refineries and chemical plants. Addresses inspection planning, damage mechanisms, NDE methods, condition assessment, repair, and records.

#### Key Sections / Topics
- **Vessel Types Covered** (Section 4): Drums (KO drums, flash drums, accumulators), heat exchangers (shell-and-tube, air-cooled), fractionation towers (trays/packing), reactors (fixed bed, moving bed), spheres, bullets.
- **Reasons for Inspection** (Section 5): Safety, regulatory compliance, reliability, insurance requirements.
- **Inspection Planning** (Section 6):
  - Based on damage mechanisms (API RP 571 — Damage Mechanisms Affecting Fixed Equipment)
  - RBI per API 580/581; risk matrix defines inspection frequency and method
  - IOWs (Integrity Operating Windows) per API 584
- **Damage Mechanisms** (Section 6.2): Corrosion (general, pitting, galvanic), HTHA (Nelson curves per API 941), hydrogen-induced cracking (HIC/SOHIC), stress corrosion cracking (SCC — amine, caustic, carbonate, polythionic acid), CUI/CUF, mechanical fatigue, creep, erosion
- **Inspection Intervals** (Section 7): Half the remaining life or maximum intervals per API 510; RBI may extend intervals with justification
- **NDE Methods** (Section 9):
  - UT (thickness, TOFD, phased array) — primary for wall thickness
  - WFMPT (wet fluorescent magnetic particle) — amine cracking, SCC
  - RT (radiography) — weld inspection
  - ET (eddy current) — heat exchanger tube inspection
  - AUT (automated UT) — in-service inspection
  - In-situ metallography / hardness — HTHA, creep assessment
- **Thickness Measurements (Section 9.2)**:
  - Corrosion rate = (Prior thickness – Current thickness) / Time interval
  - Remaining life = (t_actual – t_retirement) / corrosion rate
  - Short-term and long-term corrosion rates; use conservative (higher) rate
- **Heat Exchangers (Annex A)**: Shell-side corrosion, tube inspection (ET/UT for wall loss, pitting), baffle erosion, tube-to-tubesheet joint integrity, vibration damage at baffles
- **Towers (Annex B)**: Trays (downcomer fretting, weir corrosion, valve wear), packing (fouling, channeling), support rings, manholes
- **Repairs (Section 10)**: ASME PCC-2 repair methods; FFS per API 579-1/ASME FFS-1; weld repairs with NDE; metal stitching for CI; flush patches

#### Key Calculations
| Topic | Method |
|-------|--------|
| Corrosion rate | (t_prior – t_current) / time interval (mpy or mm/yr) |
| Remaining life | (t_actual – t_retirement) / corrosion rate |
| MAWP re-rating | ASME BPVC Section VIII formulas using t_minimum |
| FFS assessment | API 579-1 / ASME FFS-1 (Level 1, 2, or 3) |

#### Relevance to Turbomachinery Operations
- **Compressor auxiliary vessels**: Suction scrubbers, KO drums, interstage coolers, discharge vessels, and lube oil coolers associated with turbomachinery trains are all pressure vessels requiring API 572/510 inspection.
- **Heat exchangers in turbomachinery packages**: Lube oil coolers, seal gas conditioners, intercoolers, and aftercoolers — Annex A guidance on tube inspection (ET) critical for these.
- **Air-cooled fin-fan coolers**: Section 9 and Annex A cover API 661 air-cooled heat exchangers extensively used for compressor gas cooling.
- **Corrosion-related reliability**: Premature vessel failures (hydrogen blistering, SCC in amine service) lead to unplanned turbomachinery shutdowns; API 572 inspection programs prevent this.
- **RBI integration**: Risk-based inspection intervals align with turbomachinery turnaround scheduling; API 572 RBI planning integrates with compressor/turbine overhaul planning.

---

## SECTION 5: REFRACTORY STANDARDS SUITE

The following six standards (API 936, 975, 976, 978, 979, 980) plus API TR 981 form the complete API refractory standards package, covering monolithic refractories, brick systems, fiber linings, and associated technical reports. These are critical for petrochemical processing equipment (FCCU, SRU, fired heaters, reformers) in which turbomachinery operates as process equipment.

---

### API 936 — Refractory Installation Quality Control: Inspection and Testing Monolithic Refractory Linings and Materials
**Edition**: 4th Edition, June 2014 (Reaffirmed January 2022)

#### Scope
Provides installation quality control (QC) procedures for monolithic refractory linings (castables, plastics, gunning mixes) applied in petroleum refining and petrochemical equipment. Covers material qualification, personnel/crew qualification, installation monitoring, and acceptance testing. Used to supplement owner specifications. May also be used as the basis for API 936 refractory personnel certification.

#### Key Sections / Topics
- **QC Elements** (Table 1): Material preshipment qualification, installer qualification (test panels), installation monitoring, as-installed production testing, pre/post-dryout visual/hammer inspection
- **Material Requirements** (Section 7): Physical property tests per compliance datasheet; storage temperature 5–38°C; potable water (Cl ≤200 ppm; ≤50 ppm for stainless steel); shelf life per manufacturer
- **Testing**:
  - Abrasion resistance: ASTM C704 (erosion service); eroded volume loss (cm³)
  - Cold crushing strength (CCS): ASTM C133
  - Permanent linear change (PLC): ASTM C179/C210 to 815°C (1500°F)
  - Density: ASTM C134/ISO 5017
- **Acceptance Criteria** (Table 3):
  | Property | Minimum | Maximum |
  |----------|---------|---------|
  | Abrasion loss | None | 110% of datasheet |
  | CCS | 90% of datasheet | None |
  | Density | −5 lb/ft³ (−80 kg/m³) | +5 lb/ft³ (+80 kg/m³) |
  | PLC | 0% shrinkage | 110% of datasheet |
- **Test Specimens per Sample** (Table 4):
  - Erosion service: 2 abrasion + 1 PLC specimens
  - Other service: 3 CCS + 1 PLC specimens
- **Installation Requirements** (Section 9): Surface preparation; application temperature (air/shell 10–32°C); vibration for castables (12,000–14,000 cycles/min pencil vibrators); interruption procedures; curing (24 h wet burlap/plastic); repairs
- **Dryout Schedule** (Table 5 — Conventional Castables, ≤5 in. thick):
  | Density (lb/ft³) | Stage 1 (250–300°F) | Stage 2 (600–700°F) | Stage 3 (→1050°F) | Index (5 in.) |
  |-----------------|---------------------|---------------------|-------------------|---------------|
  | <75 | 100°F/h, hold 1h/in | 100°F/h, hold 1h/in | 75°F/h to operating | 23 h |
  | 75–100 | 75°F/h, hold 1h/in | 75°F/h, hold 1h/in | 75°F/h to operating | 31 h |
  | 101–140 | 50°F/h, hold 1h/in | 50°F/h, hold 1h/in | 50°F/h, hold, then 75°F/h | 40 h |
- **Water Quality**: Potable; Cl ≤200 ppm (≤50 ppm for SS contact); temperature 10–32°C
- **Inspector Independence**: No commercial ties to contractor/manufacturer

#### Relevance to Turbomachinery Operations
- **Fired heater linings**: Refractory in process heaters (API 560) feeding turbomachinery trains must meet API 936 QC requirements.
- **FCCU expanders**: Refractory-lined FCCU regenerator cyclones and transfer lines are upstream of power recovery expanders (wet gas expanders) — lining integrity directly affects expander performance and risk of debris ingestion.
- **Turnaround scheduling**: API 936 dryout schedules (23–40 h minimum for 5 in. thick linings) must be integrated into plant startup timelines affecting compressor/turbine commissioning windows.
- **SRU thermal reactors**: API 936 is referenced by API 565 for monolithic refractory QC in SRU thermal reactors.

---

### API 975 — Refractory Installation Quality Control: Inspection and Testing of Refractory Brick Systems and Materials
**Edition**: 1st Edition, November 2021

#### Scope
Provides installation QC procedures for aluminum silicate dense and insulating firebrick refractory systems, supplementing owner specifications. Covers material qualification, installer qualification, installation monitoring, and acceptance testing for firebrick (dense high-alumina, fireclay, and insulating firebrick [IFB]) and associated mortars.

#### Key Sections / Topics
- **Firebrick Types**:
  - Dense fireclay: Medium-duty (PCE Cone 29–31½), High-duty (31½–33), Super-duty (≥33) per ASTM C27
  - High-alumina dense: 45–99% Al₂O₃
  - Insulating firebrick (IFB): ASTM C155 Groups 16–33 (classified temperature 871–1815°C)
- **Physical Property Tests** (Section 6.2):
  - Density: ASTM C134 / ISO 5017
  - CCS: ASTM C133 / ISO 10059-2
  - Reheat change: ASTM C113 (brick), C210 (IFB)
  - Thermal expansion: ASTM E228 / E831
  - Thermal conductivity: ASTM C201
  - Creep: ASTM C832 / ISO 3187
- **Dimensional Tolerances** (Section 6.3.2):
  - Length: High-alumina ±1.5%; Fireclay ±2%
  - Thickness: ±1.5 mm (1/16 in.)
  - Taper: ±1 mm (<155 mm) / ±1.5 mm (>155 mm)
  - Warpage: ±1.5 mm diagonal
- **Defect Criteria** (Dense Firebrick): No internal laminations; fins ≤3 mm high; cracks ≤19 mm long / ≤2 mm deep / ≤0.25 mm wide; edge/corner damage ≤2 defects per brick (each ≤19 mm)
- **Lot Sampling** (Table 2 — AQL 4%):
  | Lot Size (pcs.) | Sample Size | Reject if ≥ defective |
  |-----------------|-------------|----------------------|
  | <50 | 8 | 2 |
  | 51–90 | 13 | 3 |
  | 501–1200 | 80 | 11 |
  | 1201–10,000 | 125 | 15 |
- **Anchor Temperature Limits** (Table 1):
  | Material | Max Temp (°C) | Max Temp (°F) |
  |----------|--------------|--------------|
  | Carbon steel | 455 | 850 |
  | SS 304/316 | 760 | 1400 |
  | SS 309 | 815 | 1500 |
  | SS 310 | 927 | 1700 |
  | Alloy 601 | 1093 | 2000 |
- **Installation Key Requirements** (Section 7): Saw-cut only (no breaking); key bricks full size; mortar: potable water ≤50 ppm Cl; gravity walls ≤7.3 m high, base ≥8% of height; tie-backs ≥15% for flat surfaces

#### Relevance to Turbomachinery Operations
- **SRU reaction furnaces (API 565)**: High-alumina brick QC per API 975 directly governs the reaction chamber lining integrity in SRUs, which is critical for sulfur production units supporting refineries with gas compression systems.
- **Fired heater arches/floors**: Dense firebrick arches and hearth floors per API 560 use API 975 QC; heater availability affects process heat supply to compression/distillation systems.
- **Creep testing interface**: API 975 references ASTM C832/ISO 3187 creep testing, the same methods evaluated in API TR 981.

---

### API 976 — Refractory Installation Quality Control: Inspection and Testing of AES/RCF Fiber Linings and Materials
**Edition**: 1st Edition, March 2018

#### Scope
Provides installation QC procedures and lining system design requirements for alkaline earth silicate (AES) and refractory ceramic fiber (RCF) internal linings on process equipment. Covers material qualification, installer qualification, installation monitoring, and acceptance testing. Applies only to internal process-side linings; external insulation is excluded.

#### Key Sections / Topics
- **Fiber Types**:
  - AES fiber: MMVF with ≥18% alkali earth oxides; low bio-persistence; classification temperature up to 1300°C (2374°F)
  - RCF fiber: Predominantly alumina-silica; classification temperature up to 1426°C (2600°F)
  - PCW (Polycrystalline Wool): >70 wt% Al₂O₃; sol-gel production; >1426°C (>2600°F)
- **Lining Design** (Section 7):
  - No ceramic fiber hot-face if T >704°C (1300°F) AND fuel Na+V >100 ppm (ash fouling/corrosion)
  - Hot-face needled blanket: 25 mm (1 in.) thick minimum; 128 kg/m³ (8 lb/ft³) minimum
  - Fiberboard: ≥38 mm (1.5 in.); ≥240 kg/m³ (15 lb/ft³)
  - Backup: ≥96 kg/m³ (6 lb/ft³)
  - Maximum fiberboard size: 610×610 mm sidewalls; 450×450 mm overhead or >1093°C
  - Hot-face overlap: 100 mm (4 in.) minimum
  - No blanket hot-face where gas velocity >12 m/s (40 ft/s)
  - Sulfur >200 ppm: coat casing and anchors; >500 ppm: add 2 mil SS vapor barrier ≥55°C above acid dew point
- **Anchor Temperature Limits** (Table 2): Same as API 975 Table 1 (see above)
- **Anchor Testing** (Table 3 — Hammer/Bend Tests):
  | Anchor Count | Test Frequency |
  |--------------|---------------|
  | <25 | 100% |
  | 25–50 | 50% |
  | 50–500 | 25% |
  | >500 | 5% |
- **Compliance Datasheet Properties** (Annex A — Table A.1):
  - Chemical composition (ASTM E1172)
  - Density (ASTM C892)
  - Linear shrinkage (ASTM C892 at continuous use temp)
  - Thermal conductivity (ASTM C177/C201)
  - Tensile strength (ASTM C892)
- **Inspector Competencies** (Annex B):
  | Education | General Refractory Exp | Inspection Exp | Min Total |
  |-----------|----------------------|----------------|-----------|
  | BS Engineering | 0 yr | 1 yr | 1 yr |
  | 2-yr degree | 1 yr | 1 yr | 2 yr |
  | High school | 2 yr | 3 yr | 5 yr |

#### Relevance to Turbomachinery Operations
- **Fired heater convection/radiation sections**: AES/RCF fiber linings in fired heaters (API 560) on radiant section walls and convection sections; API 976 governs installation QC for these linings.
- **Gas velocity limits**: The 12 m/s (40 ft/s) gas velocity limit for blanket hot-face is relevant to design of high-velocity areas near fired heater burners — areas that interact with combustion air supply from FD fans (turbomachinery).
- **Sulfur service**: Corrosion protection requirements for >200/500 ppm sulfur fuels interact with sulfur recovery units where air blowers operate.

---

### API TR 978 — Monolithic Refractories: Manufacture, Properties, and Selection
**Edition**: 1st Edition, March 2019 (Technical Report)

#### Scope
Covers the manufacture, properties, and selection criteria for monolithic refractory lining materials (castables, plastics, and ramming mixes) for hydrocarbon processing industry (HPI) applications. Consistent with API 936 (QC standard). Companion to API TR 979 (applications) and API TR 980 (installation/dryout). Informational/educational document — not a mandatory specification.

#### Key Sections / Topics
- **Constituent Ingredients**:
  - Binders: Calcium aluminate cement (CAC), phosphate bonds, colloidal silica; different setting/bonding mechanisms
  - Aggregates: Dense/insulating; graded for packing efficiency; max size 1.5 in. (3.81 cm) typical
  - Additives: Organic fibers (faster dryout), steel fibers (toughness), plasticizers
- **Castable Types**: Conventional (cement-bonded); ultra-low cement (ULC, <1% CaO); no-cement (colloidal silica/phosphate-bonded); pre-mixed vs. field mixes
- **Plastic Refractories**: Extruded moldable mixes; air-set or heat-set; workability index 15–40% (ASTM C181); ramming mixes <15% workability
- **Selection Criteria** (Section 7): Service temperature range; thermal cycling frequency; load bearing; corrosion (CO attack, slag, vanadium, sulfur); abrasion/erosion; installation method; dryout requirements
- **Engineering Properties** (Section 11):
  - Thermal conductivity (k): Steady state q = kA(ΔT/ΔX); diffusivity α = k/(ρCp)
  - Abrasion (ASTM C704): Target <5 cm³ for high-performance (SiC grit blast at 65 psi)
  - CCS/MOR (ASTM C133/C133M): Minimum per datasheet
  - PLC (ASTM C179): −3% to +5% total
  - CO resistance (ASTM C288): For reducing atmosphere service
  - Slag attack (ASTM C454): For gasification/FCC service
- **Key Formula (Thermal Conductivity)**:
  - q = kA(ΔT/Δx) [Equation 1]
  - α = k/(ρ·Cp) [Equation 2]
  - Volume resistivity: ρv = (Rv × A)/h [Equation 3]
- **Dryout**: Organic fibers (polyethylene, polypropylene) burn out at ~200°C, creating micro-channels for steam escape; reduces dryout time; phos-bonded castables can be dried faster

#### Relevance to Turbomachinery Operations
- **FCCU expanders**: Catalyst erosion-resistant castables in FCCU cyclones and transfer lines protect expander inlet conditions; ASTM C704 abrasion test is key selection criterion.
- **Combustion chambers/pre-heaters**: High-temperature castables and plastics used in combustion chambers and air preheaters associated with turbine/fired equipment trains.
- **CO resistance**: Reducing atmosphere service (reformers, gasifiers) relevant to syngas turbine trains where refractory protection is required upstream.

---

### API TR 979 — Applications of Refractory Lining Materials
**Edition**: 1st Edition, October 2018 (Technical Report)

#### Scope
Documents the specific applications of monolithic refractories (castables, plastics, ramming mixes) in the hydrocarbon processing industry (HPI), updating ACI 547.R-79 and 547.1R-89 for HPI relevance. Covers FCCU, CO furnaces, SRUs, fired heaters, reforming furnaces, fluid coking, delayed coking, coke calcining, and gasification. Companion to API TR 978 (manufacture/properties) and TR 980 (installation). Informational document.

#### Key Sections / Topics
- **Fluid Catalytic Cracking Units (FCCU)** (Section 4.1):
  - Reactor: 480–540°C (900–1000°F); regenerator: 705–760°C (1300–1400°F); 15–30 psig
  - Catalyst: 60 µm particles circulating at high velocity; primary erosion agent
  - Lining systems: Cold wall (3–6 in. thick): medium-weight castable (vessel) + erosion-resistant (transfer lines) + dense extreme-erosion (cyclones/slide valves); hot wall (0.75–1 in.)
  - Anchors: V-studs (cold wall), hexmetal 19–25 mm (hot wall)
  - ASTM C704 erosion loss: <2–8 cm³ depending on location severity
- **SRU Thermal Reactors**: Reaction furnace 980–1650°C (1800–3000°F); high-alumina brick/castables/ferrules (90% Al₂O₃); API 565 referenced
- **Fired Heaters (API 560 reference)**: ~815°C (1500°F); ceramic fiber on radiant walls; castable floors/convection/breaching
- **Reforming Furnaces**: ~980°C (1800°F); low-silica refractories to avoid SiO volatilization in H₂-rich environments
- **CO Furnaces**: 980–1427°C (1800–2600°F); dual-layer castable/plastic
- **Fluid Coking**: Similar to FCCU; fluid coke less erosive than FCC catalyst
- **Delayed Cokers**: Lower temperatures; bituminous residues; alkali attack possible
- **Gasification** (Table 1):
  | Process | Bed Type | Temp Range (°C) | Max Pressure (atm) |
  |---------|----------|-----------------|-------------------|
  | Fixed bed | Non-slag | 500–600 | ~20 |
  | Fixed bed | Slagging | 1000–1500 | ~20 |
  | Fluid bed | — | ~1000 | ~70 |
  | Entrained bed | — | 1400–1700 | ~100 |
- **Other Industries** (Section 5): Iron/steel, nonferrous, ceramic, glass, power generation, incineration, aerospace, nuclear

#### Key Requirements
| Service | Erosion/Density | Key Criterion |
|---------|-----------------|---------------|
| FCCU cyclone | Dense, extreme erosion | ASTM C704 <2 cm³ |
| FCCU vessel wall | Medium weight, 100–150 lb/ft³ | ASTM C704 <8 cm³ |
| FCCU transfer line | Erosion-resistant insulating | ASTM C704 |
| SRU | 90% Al₂O₃ brick/castable | API 975 + API 565 |
| Gasifier (entrained) | Slag-resistant, dense | ASTM C454 slag attack |

#### Relevance to Turbomachinery Operations
- **FCCU wet gas expanders**: The refractory linings in FCCU cyclones and regenerator directly protect the flue gas expander (power recovery turbine) downstream; debris from failed linings causes catastrophic expander damage. API TR 979 FCCU section is therefore directly critical to power recovery turbomachinery.
- **Gasification turbines**: Syngas produced by gasifiers (Table 1) drives gas turbines in IGCC plants; refractory integrity in gasifiers is prerequisite to turbine operability.
- **CO furnace energy recovery**: CO furnaces generate steam from combustion; steam turbines in the recovery loop are affected by CO furnace availability.

---

### API TR 980 — Monolithic Refractories: Installation and Dryout
**Edition**: 1st Edition, April 2018 (Technical Report)

#### Scope
Covers best-practice installation and dryout procedures for monolithic refractory lining materials (castables, plastics, ramming mixes) in HPI applications. Consistent with API 936 (mandatory QC standard). Serves as the body of knowledge document for the API 936 Refractory Personnel Certification program. Companion to API TR 978 (manufacture/properties) and API TR 979 (applications).

#### Key Sections / Topics
- **Installation Methods** (Section 4):
  - Refractory concrete: Casting (vibrated pour), gunning (pneumatic projection), shotcrete
  - Plastics: Hand ramming/pounding; extruded and tamped
  - Mixing water: Minimum amount for consolidation; excess water severely reduces strength (refer Figure 1: hot modulus vs. water content)
- **Construction Details** (Section 5):
  - Support structures: Anchors extend 2/3–3/4 of lining thickness; V-clips/studs 6–18 in. centers (closer for thinner linings)
  - Forms: Removed after initial set; no loading before design strength
  - Joints: Expansion joints spaced to accommodate thermal expansion; construction joints perpendicular to hot face
  - Rebar embedment: Only for structural purposes; not in high-temperature hot face
- **Curing** (Section 6):
  - Hydraulic-bonded castables: 24 hours minimum wet burlap + plastic sheeting; moist cure
  - Phosphate-bonded plastics: Heat cure at 260–370°C (500–700°F) to develop bond
  - Air-set materials: Air cure at ambient; no wetting
- **Dryout** (Table 1 — Conventional Castables, hot-face heating):
  | Density (lb/ft³) | Heat Rate Stage 1 → 250–300°F | Hold | Heat Rate Stage 2 → 600–700°F | Hold | Rate → Operating | Dryout Index (5 in.) |
  |------------------|-------------------------------|------|-------------------------------|------|-------------------|----------------------|
  | <75 | 100°F/h | 1 h/in. | 100°F/h | 1 h/in. | 100°F/h | 23 h |
  | 75–100 | 75°F/h | 1 h/in. | 75°F/h | 1 h/in. | 75°F/h | 31 h |
  | 101–140 | 50°F/h | 1 h/in. | 50°F/h | 1 h/in. | 50°F/h then 75°F/h | 40 h |
- **Explosive Spalling Prevention**: Controlled heating ramp prevents steam pressure buildup; organic fiber additives provide micro-pore network for steam escape → faster dryout
- **Repair** (Section 7):
  - Full-thickness preferred; square shoulders; no feathered edges
  - Bond to existing: roughen surface; anchor to hot face
  - Hot repairs by gunning at 815–927°C (1500–1700°F) possible
  - Failure mechanisms: Spalling (thermal shock), erosion (abrasion), cracking (thermal cycling), debonding (anchor failure)
- **Key Formula**:
  - Maximum plastic layer thickness for ramming: h = D / (2 tan θ) where D = rammer head diameter; θ = internal friction angle (~40°)
- **Shelf Life**: Air-set plastics 6 months; heat-set plastics 6–12 months

#### Relevance to Turbomachinery Operations
- **Plant startup timing**: Dryout schedules (23–40 h for 5 in. thick linings) directly affect commissioning timelines for fired heaters, FCCU, and SRU — all of which must be operational before associated compression trains can process gas.
- **Hot repair capability**: Annex techniques for hot gunning repairs reduce outage duration; relevant for minimizing compressor downtime during refractory maintenance.
- **Fired equipment availability**: Proper installation and dryout per API TR 980 prevents premature lining failure, which would force emergency shutdowns of associated turbomachinery.
- **Personnel certification**: API 936 certification (for which TR 980 is the body of knowledge) ensures qualified installation personnel are used on critical fired equipment projects supporting turbomachinery facilities.

---

### API TR 981 — Thermal Expansion Under Load and Creep of Refractories: An Evaluation and Comparison of Testing Methods
**Edition**: 1st Edition, March 2021 (Technical Report)

#### Scope
Documents results of a comparative study of ASTM C832 and DIN EN 993-9 (equivalent to ISO 3187) test methods for measuring thermal expansion under load (TEUL) and creep in compression of high-alumina refractory bricks under compressive load at 1650°C (3000°F) for 100 hours. Primary objective: evaluate replacement of ASTM C16 (hot load deformation test) for qualifying brick used in SRU reaction furnaces (API 565/API 975). Tests 15 brick products from 9 manufacturers.

#### Key Sections / Topics
- **Test Methods Compared**:
  | Parameter | ASTM C832 | DIN EN 993-9 |
  |-----------|-----------|-------------|
  | Specimen shape | Prism 114×38×38 mm | Hollow cylinder 50 mm dia × 50 mm, 12 mm hole |
  | Temperature measurement | External to specimen | Center of specimen |
  | Applied load | 25 psi (0.172 MPa) | 0.2 MPa (29 psi) |
  | Heating rate | 100°F/h (0.93°C/min) | 5°C/min |
  | Hold temperature | 1650°C (3000°F) | 1650°C (3000°F) |
  | Hold time | 100 hours | 100 hours |
  | Measurement | Laser non-contact extensometer | Laser non-contact extensometer |
- **Key Measured Parameters**:
  - Temperature at maximum dilation (T_max / T₀)
  - Maximum dilation (%)
  - Creep from data acquisition (%)
  - PLC from measurement / from data acquisition (%)
  - Maximum dilation to 50-hour creep (%)
  - **50–100 hour creep (%)** — primary screening metric
- **Conclusions and Recommendations** (Section 6–7):
  - ASTM C832 and DIN EN 993-9 produce comparable results when normalized; DIN cylinder preferred (temperature measurement closer to specimen center)
  - **Recommended specification limits**: 50–100 h creep ≤0.5%; Maximum dilation to 50-h creep ≤0.5%
  - ASTM C16 (modified to 100-h hold) less discriminating than C832/DIN 993-9 — does not distinguish creep from expansion
  - Stable products: Low net PLC expansion + low 50–100 h creep (Products 2A, 4B, 5A, 7A, 8A, 9A)
  - Unstable products: High max dilation + high sustained creep (risk of structural collapse in SRU ring-arch construction)
- **Application**: SRU thermal reactor operating up to 1540°C continuous (up to 1650°C intermittent during O₂-enriched excursions); self-supporting dense high-alumina brick rings; ring-arch construction requires low creep to prevent collapse

#### Sample Test Data (Table 2 — Company 2, Brand A)
| Test | T at Max Dil (°C) | Max Dil (%) | Creep (%) | PLC (%) | 50–100 h Creep (%) |
|------|--------------------|-------------|-----------|---------|-------------------|
| ASTM Brick 1 | 1628 | 1.135 | −0.410 | −0.332 | −0.131 |
| ASTM Brick 2 | 1649 | 1.187 | −0.517 | −0.383 | −0.122 |
| DIN Brick 1 | 1650 | 1.239 | −0.649 | −0.415 | −0.106 |
| DIN Brick 2 | 1651 | 1.244 | −0.645 | −0.504 | −0.131 |

#### Relevance to Turbomachinery Operations
- **SRU air blowers (indirect)**: Failure of SRU thermal reactor refractory (due to inadequate creep resistance) can cause catastrophic outage of the SRU, forcing refinery-wide shutdowns affecting all associated turbomachinery trains.
- **Refractory specification for critical equipment**: API TR 981 methodology supports development of better brick specifications for high-temperature oxygen-enriched reactors, improving reliability of process equipment in refinery/petrochemical complexes where turbomachinery operates.
- **Testing standard harmonization**: The ASTM C832/DIN comparison provides a basis for international project specifications (relevant for CHIYODA/Japanese EPC projects) where both ASTM and DIN methods may be specified.

---

## CROSS-REFERENCE SUMMARY: TURBOMACHINERY RELEVANCE

| Standard | Direct/Indirect Turbomachinery Link | Primary Interface |
|----------|-------------------------------------|-------------------|
| API 520 Pt I | **DIRECT** | Sizing PRVs on compressor suction/discharge vessels, KO drums |
| API 520 Pt II | **DIRECT** | Installing PRVs on compressor packages, inlet pressure drop ≤3% |
| API 521 | **DIRECT** | Power failure/blocked outlet scenarios for compressor trains; depressuring |
| API 526 | **DIRECT** | Standard PRV catalog for all turbomachinery auxiliary vessels |
| API 541 | **DIRECT** | Specification for large electric motor drivers of compressors/fans |
| API 546 | **DIRECT** | Synchronous motor drivers; torsional analysis for motor-compressor trains |
| API 547 | **DIRECT** | Mid-size motor drivers for auxiliary turbomachinery equipment |
| API 560 | **DIRECT (Annex E)** | FD/ID fans (centrifugal, API 560 Annex E); process heaters in turbomachinery facilities |
| API 565 | **INDIRECT** | SRU air blowers; combustion stability interaction with blower performance |
| API RP 572 | **INDIRECT** | Inspection of compressor suction drums, coolers, KO drums, lube oil coolers |
| API 936 | **INDIRECT** | Refractory QC for fired equipment supporting turbomachinery; FCCU expander protection |
| API 975 | **INDIRECT** | Brick QC for SRU/fired heaters supporting turbomachinery facilities |
| API 976 | **INDIRECT** | Fiber lining QC for fired heaters; interaction with FD/ID fans |
| API TR 978 | **INDIRECT** | Material selection reference for refractory in turbomachinery-related process equipment |
| API TR 979 | **INDIRECT** | FCCU wet gas expander protection (refractory debris risk) |
| API TR 980 | **INDIRECT** | Dryout scheduling affecting turbomachinery commissioning timelines |
| API TR 981 | **INDIRECT** | SRU reactor reliability affecting refinery-wide turbomachinery uptime |

---

## THEMATIC GROUPS

### Group 1: Pressure Protection Systems (API 520 Pt I, II; API 521; API 526)
These four standards together form the complete pressure relief framework. API 526 provides the physical valve catalog; API 520 Part I provides sizing methodology; API 520 Part II provides installation rules; API 521 provides the system-level disposal design. All four are essential references for every turbomachinery package and associated process vessel train.

### Group 2: Electric Motor Drivers (API 541, API 546, API 547)
These three standards cover the entire spectrum of special and general purpose electric motor drivers from 185 kW to unlimited power. API 547 covers general-purpose auxiliary equipment; API 541 covers special-purpose large drivers for compressors; API 546 covers synchronous machines for critical compressor and generator applications. The torsional analysis requirements in API 546 and API 541 are critical design tools for motor-compressor coupling systems.

### Group 3: Fired Equipment (API 560, API 565)
API 560 covers process fired heaters for refineries including centrifugal fans (Annex E); API 565 covers SRU thermal reactors. Both are static fired equipment standards with indirect turbomachinery interfaces via combustion air supply equipment (blowers, fans) and downstream process impacts.

### Group 4: Vessel Inspection (API RP 572)
API RP 572 is the inspection practice standard that governs all in-service pressure vessels in the turbomachinery package and supporting systems (scrubbers, coolers, separators, accumulators). Integrates with RBI per API 580/581 and FFS per API 579-1.

### Group 5: Refractory Suite (API 936, 975, 976, TR 978, TR 979, TR 980, TR 981)
Seven interrelated standards covering the complete lifecycle of refractory linings: material qualification (936, 975, 976), material science and selection (TR 978), application knowledge (TR 979), installation practice (TR 980), and creep/TEUL testing evaluation (TR 981). Critical for fired equipment integrity and — via FCCU expanders and gasification turbines — directly impacts turbomachinery in power recovery and syngas applications.

================================================================================
SECTION 3: ASME BPVC
Source: blackbook_asme_bpvc.md
================================================================================

# OperaMech.ai Engineering Blackbook — ASME BPVC & B31 Standards
**Compiled:** 2025 Edition documents  
**Source:** OneDrive Engineering Blackbook  
**Purpose:** Comprehensive technical reference for OperaMech.ai knowledge base

---

## Table of Contents
1. [ASME BPVC Section I — Power Boilers](#section-i)
2. [ASME BPVC Section IV — Heating Boilers](#section-iv)
3. [ASME BPVC Section VII — Care of Power Boilers](#section-vii)
4. [ASME BPVC Section VIII Division 1 — Pressure Vessels (Div. 1)](#section-viii-d1)
5. [ASME BPVC Section VIII Division 2 — Pressure Vessels (Div. 2)](#section-viii-d2)
6. [ASME BPVC Section IX — Welding, Brazing & Fusing Qualifications](#section-ix)
7. [ASME BPVC Section X — Fiber-Reinforced Plastic Pressure Vessels](#section-x)
8. [ASME BPVC Section XII — Transport Tanks](#section-xii)

---

## 1. ASME BPVC Section I — Power Boilers {#section-i}

**Document Title:** RULES FOR CONSTRUCTION OF POWER BOILERS  
**Designation:** ASME BPVC.I-2025  
**Edition/Year:** 2025 Edition, Date of Issuance: July 1, 2025  
**OneDrive File:** ASME BPVC Section I.pdf

### Scope and Applicability
Governs the construction (materials, design, fabrication, examination, inspection, testing, certification) of:
- Power boilers generating steam/vapor **> 15 psig (100 kPa)** for use external to the boiler
- High-temperature water boilers: **> 160 psig (1.1 MPa)** and/or **> 250°F (120°C)**
- Liquid-phase thermal fluid heaters (closed-loop, no vaporization)
- Locomotive, portable, and traction boilers
- Watertube, firetube, electric, and miniature boilers
- Heat Recovery Steam Generators (HRSGs) and organic fluid vaporizers

**Exclusions:**
- Heating boilers ≤ 15 psig (covered by Section IV)
- Coil-type hot water boilers meeting PG-2.3 exemption
- Unfired steam generators (evaporators, heat exchangers)
- Jurisdictional limit: boiler proper + boiler external piping (BEP) to first stop valve

### Key Technical Content

#### Part PG — General Requirements

**Service Limits (PG-2):**

| Service Type | Pressure Threshold | Temperature Threshold |
|---|---|---|
| Power Boiler (steam) | > 15 psig (100 kPa) | — |
| High-Temperature Water Boiler | > 160 psig (1.1 MPa) | > 250°F (120°C) |
| Miniature Boiler (PMB) | ≤ 100 psig | ≤ 20 ft² heating surface, ≤ 16 in. shell OD |

**Permitted Materials (PG-5 to PG-14):**
- Plates: SA-204, SA-240 (Type 405), SA-285 (PG-6)
- Forgings: SA-266, SA-336 (PG-7)
- Castings: Quality factor per PG-25 (80% or 100%) (PG-8)
- Pipes/Tubes: SA-53, SA-106, SA-178 (PG-9); bimetallic clad tubes per PG-9.4
- Stays: SA-36, SA-675 (PG-13)
- Rivets: SA-31 (PG-14)

#### Design Formulas

**Cylindrical Shells — Internal Pressure (PG-27):**
'''
t = PD / (2SE + yP) + C + f
'''
- P = MAWP (psig); D = OD (in.); S = allowable stress (psi); E = joint efficiency
- y = temperature coefficient (0.4–0.7 depending on material/temperature)
- C = threading/structural allowance; f = tube end thickness factor

**Dished Heads (PG-29.1):**
'''
t = PL / (5.8SE − 0.2P)
'''
- L = radius to which head is dished (in.)

**External Pressure (PG-28.3):** Use Section II, Part D, Subpart 3 charts

#### Critical Thresholds and Requirements

**Hydrostatic Test (PG-99):**
- Shop: **1.5 × MAWP**
- Field: **1.0 × MAWP**
- Test water temperature: 70–120°F (20–50°C)

**Cold Forming — Austenitic Materials (Table PG-19):**
- Example: Grade 304 — strain limit 20%; post-bend heat treat at 1,900°F (1040°C)

**Cold Forming — CSEF Grade 91 (Table PG-20):**
| Strain | Post-Bend Heat Treatment |
|---|---|
| > 25% | Normalize + Temper |
| > 5% to ≤ 25% | 1,350–1,445°F (730–785°C) hold |
| ≤ 5% | None required |

**Preheat (Table PW-38-1):**
| P-Number | Min. Preheat |
|---|---|
| P-No. 1 | 50°F (10°C) |
| P-No. 15E (Grade 91) | 300–400°F (150–205°C) |

**PWHT — P-No. 15E (Table PW-39-5):**
- Temperature: 1,300–1,445°F (705–785°C)
- Hold time: 1 hr/in. thickness (minimum 1 hr)

**Weld Joint Strength Reduction Factor (Table PG-26):**
- CSEF at 1,000°F: 0.77 (reduces weld allowable stress)

#### Part PW — Welding

**Volumetric Examination (Table PW-11):**
| Weld Type | When RT/UT Required |
|---|---|
| Longitudinal seam | All sizes/thicknesses |
| Circumferential (drums/shells) | OD > NPS 10 or thickness > 1⅛ in. |

#### Safety Valves (PG-67 to PG-73)
- Minimum capacity: ≥ maximum steaming rate (lbm/hr)
- Set pressure: ≤ MAWP; range ≤ 10% above MAWP
- Maximum accumulation: 6% over MAWP
- Testing: Per PG-69, certified on Form P-7

#### Part PB — Brazing Maximum Design Temperatures
| Filler Metal | Max. Design Temp |
|---|---|
| BCuP | 300°F (150°C) |
| BAg | 400°F (205°C) |

#### Special Boiler Parts
- **PMB (Miniature):** ≤ 16 in. shell dia., ≤ 20 ft² heating surface, ≤ 100 psig
- **PEB (Electric):** Electrode and immersion-element types
- **PVG (Organic Vaporizers):** Formulas per PVG-12.4
- **PTFH (Thermal Fluid Heaters):** Closed-loop, single-phase fluid
- **PHRSG:** Heat recovery steam generators

### Definitions and Terminology
- **MAWP:** Maximum Allowable Working Pressure — the maximum gauge pressure permitted at the top of the completed boiler in its operating position
- **BEP (Boiler External Piping):** Piping from boiler proper to first stop valve, governed by B31.1
- **P-Number:** Material grouping based on weldability/composition (Section IX)
- **CSEF:** Creep Strength-Enhanced Ferritic (e.g., Grade 91/92 steels)
- **PWHT:** Post-Weld Heat Treatment

### Cross-References
- ASME Section II, Part D: Allowable stress tables
- ASME Section IX: Welding qualification
- ASME B31.1: Power piping (BEP)
- ASME CSD-1: Controls and safety devices
- NFPA 85: Boiler and combustion systems hazards

### Practical Field Application Notes
- All new boilers require an ASME "S" Stamp from an authorized manufacturer
- Boiler external piping falls under B31.1, not Section I, after first stop valve
- CSEF materials (Grade 91/92) require strict preheat/PWHT controls to avoid Type IV cracking
- Hydrostatic tests must be witnessed by an Authorized Inspector (AI) before the boiler leaves the shop
- HRSG designs must address thermal cycling and multi-pressure operation

---

## 2. ASME BPVC Section IV — Heating Boilers {#section-iv}

**Document Title:** RULES FOR CONSTRUCTION OF HEATING BOILERS  
**Designation:** ASME BPVC.IV-2025  
**Edition/Year:** 2025 Edition, Date of Issuance: July 1, 2025  
**OneDrive File:** ASME BPVC Section IV.pdf

### Scope and Applicability
Governs construction (materials, design, fabrication, examination, inspection, testing, certification, overpressure protection) for:
- **Steam heating boilers:** ≤ 15 psi (100 kPa)
- **Hot water heating/supply boilers:** ≤ 160 psi (1,100 kPa) and ≤ 250°F (120°C) at boiler outlet
- **Potable water heaters (Part HLW):** Commercial/industrial, input > 200,000 Btu/hr (60 kW) OR capacity > 120 gal (450 L); ≤ 160 psi, ≤ 210°F (99°C)

**Parts:** HG (general wrought), HF (wrought ferrous/nonferrous), HC (cast iron), HA (cast aluminum), HLW (potable water heaters)

**Exceeding Limits:** If steam > 15 psi or hot water > 160 psi or > 250°F, use **Section I**

### Key Technical Content

#### Pressure and Temperature Limits Summary

| Boiler Type | Max Pressure | Max Temperature |
|---|---|---|
| Steam (HG-101) | 15 psi (100 kPa) | — |
| Hot Water Heating/Supply (HG-101) | 160 psi (1,100 kPa) | 250°F (120°C) |
| HLW Potable Water Heater | 160 psi (1,100 kPa) | 210°F (99°C) |
| Vacuum (Appendix 5) | 15 psi vacuum | 210°F (99°C) |
| Austenitic SS (HF-207) | — | ≤ 210°F (99°C) |

#### Design Formulas

**HG-301 — Cylindrical Shells:**
'''
t = PR / (SE − 0.6P)
P = SEt / (R + 0.6t)
'''
- E = joint/ligament efficiency (0.49–1.0)
- Minimum thickness: ferrous 3/32 in. (2.5 mm); nonferrous 3/32 in. (2.5 mm)

**HG-305 — Formed Heads:**
| Head Type | Formula |
|---|---|
| Ellipsoidal | t = PD / (2SE − 0.2P) |
| Torispherical | t = PL / (0.885SE − 0.1P) |
| Hemispherical | t = PL / (2SE − 0.2P) |

**HG-307 — Flat Heads:**
'''
t = d √(CP/S)
'''
- C = 0.10 to 0.75 depending on joint type and attachment method

**HG-340 — Stayed Surfaces:**
'''
t = p √(P/SC)    →    P = t²SC/p²
'''
- C = 2.7–4.0 (varies by stay type/configuration)

#### Material Requirements
- **Ferrous Plates (HG-200):** Min. 3/32 in. (2.5 mm); furnace-exposed surfaces ≥ 3/16 in. (5 mm)
- **Nonferrous Plates:** Min. 3/32 in. (2.5 mm); tubesheets ≥ 5/16 in. (8 mm)
- **Cast Iron (HC-200):** Classes 20–40 per ASTM; tensile 20–40 ksi; phosphorus ≤ 1%

**Cast Iron Allowable Stresses (Table HC-300):**
| Class | Tensile Strength (ksi) | Allowable Stress (ksi) |
|---|---|---|
| 20 | 20 | 4.0 |
| 25 | 25 | 5.0 |
| 30 | 30 | 6.0 |
| 40 | 40 | 8.0 |

**HLW Lining Materials (HLW-200):**
| Lining | Minimum Thickness |
|---|---|
| Glass | 0.005 in. |
| Galvanized | 1 oz/ft² |
| Cement | 3/16 in. |
| Copper | 0.005 in. |
| Fluorocarbon/Epoxy | 0.003 in. |

#### Hydrostatic Test Requirements

| Boiler Type | Section/Individual Test | Assembly Test |
|---|---|---|
| Cast Iron Steam (HC-410.1) | 60 psig | 45 psig |
| Cast Iron Hot Water ≤ 30 psi | 60 psig | 1.5 × MAWP |
| Cast Iron Hot Water > 30 psi | 2.5 × MAWP | 1.5 × MAWP |
| Cast Aluminum (HA-406) | 2.5 × MAWP | 1.5 × MAWP |
| HLW (non-lined) | 1.5 × MAWP | — |
| HLW (lined) | MAWP | — |

Pneumatic test alternative: 38 psi or 1.1 × MAWP minimum (HG-511/HLW-506)

#### Safety/Pressure Relief Valve Requirements

| Boiler Type | Valve Type | Set Pressure Limit | Capacity Basis |
|---|---|---|---|
| Steam (HG-402A.1) | Safety valve (HV stamp) | ≤ 15 psi (± 2 psi) | ≥ Btu/hr ÷ 1,000; max fuel rate at MAWP+5 psi |
| Hot Water (HG-402A.2) | Safety relief valve (HV stamp) | ≤ MAWP (± 3 psi or ± 5%) | ≥ Btu/hr ÷ 1,000; 10% over MAWP |
| HLW (HLW-800) | Temp/pressure relief | ≤ MAWP (10% over) | ≥ input rate; 10% over MAWP |

- Discharge piping: ≥ valve outlet area; no shutoff valves permitted
- Mounting: Top or side; vertical spindle required

#### Spherical Radius Factor K1 (Table HG-321) — Excerpt
| D/2d Ratio | K1 Factor |
|---|---|
| 3.0 | 1.36 |
| 2.8 | 1.27 |
| 1.0 | 0.50 |

#### Modular Boilers (HG-800–HG-803)
- Combination of individual boiler sections forming a single pressure system
- Each module meets Section IV; combined system certified as single unit

### Definitions and Terminology
- **Steam Heating Boiler:** Boiler generating steam ≤ 15 psi for space heating
- **Hot Water Supply Boiler:** Boiler providing hot water ≤ 160 psi for domestic/commercial use (not heating)
- **H Stamp:** ASME certification mark for heating boilers
- **HLW Stamp:** ASME certification mark for potable water heaters
- **PRT Stamp:** Certification for parts

### Cross-References
- ASME Section I: When limits are exceeded
- ASME Section II: Material specifications and allowable stresses
- ASME Section IX: Welding qualifications
- ASME QAI-1: Inspector qualification

### Practical Field Application Notes
- Section IV boilers are the most common in commercial buildings (steam heat, hot water heat)
- Cast iron boilers (Part HC) are sectional; individual sections tested separately before assembly
- HLW water heaters must have ASME-certified T&P (temperature and pressure) relief valves
- Modular boilers (HG-800) allow grouping smaller units to meet large capacity requirements
- Safety valve capacity based on Btu/hr input, not just set pressure

---

## 3. ASME BPVC Section VII — Care of Power Boilers {#section-vii}

**Document Title:** RECOMMENDED GUIDELINES FOR THE CARE OF POWER BOILERS  
**Designation:** ASME BPVC.VII-2025  
**Edition/Year:** 2025 Edition, Date of Issuance: July 1, 2025  
**OneDrive File:** ASME BPVC Section VII.pdf

### Scope and Applicability
**Nature of Document:** Non-mandatory recommended guidelines (not legally binding construction code, but widely referenced by owner/operators and insurers)

**Definition of Power Boiler (Section VII):**
- Pressure vessel built per Section I; steam ≥ 15 psig for external use
- Heat from combustion (solid/liquid/gas fuels), hot waste gases, or electrical energy
- Includes stationary, locomotive, portable, and traction boilers

**Exclusions from Section VII Guidelines:**
- High-temperature water boilers, miniature boilers (Section I)
- Nuclear power plant boilers (Section III)
- Heating boilers (Section IV)
- Marine boilers

**Organization:**
| Subsection | Coverage |
|---|---|
| Subsection 1 | Watertube drum-type industrial steam boilers (up to 600 psig/750°F or 4 MPa/400°C) |
| Subsection 2 | All steam boilers |
| Subsection 3 | Firetube, electric, utility boilers |
| Subsection 4 | Coal-fired and solid-fuel boilers |
| Subsection 5 | Glossary |
| Appendix A (Non-mandatory) | Maintenance examination checklists |
| Appendix B (Non-mandatory) | Unit conversion guidance |

### Key Operating Guidelines

#### Article 101 — Boiler Operation

**Pre-Start Checks:**
- All instruments calibrated and operational
- Water side: clear of debris, fittings secure, no corrosion/erosion
- Fire side: passages clear, combustibles removed, dampers tested, refractory intact
- Relief valves: verify free operation, no leaks, discharge paths clear

**Start-Up Procedure:**
1. Establish safe water level via feedwater lines
2. Purge furnace/generating bank/economizer/air heater/ducts before any ignition
3. Close drum vent at **25 psig (170 kPa)** during pressure rise
4. Regulate firing rate per manufacturer instructions
5. Vent non-drainable superheaters during warm-up
6. Hand-lift relief valves at ≥ **75% of set pressure** when pressure < 400 psig (3 MPa)
7. Test new/rebuilt relief valves before putting into service

**Furnace Pressure (101.1.4):**
| Furnace Type | Normal Pressure Range |
|---|---|
| Negative (balanced draft) | −0.1 to −0.5 in. WC (−3 to −13 mm WC) |
| Positive pressure | 5–25 in. WC (1.3–6.2 kPa); rarely > 28 in. WC (~1 psig) |

**Low Water Level Response (101.4.2.4):**
1. Blow down water column/gage glass to verify
2. If water is below lowest permissible level: immediately shut off fuel/air
3. Feed water slowly — do NOT feed rapidly into a hot, low-water boiler

**High Water Level Response (101.4.2.5):**
1. Shut off feed, fuel, and air
2. Blow down if needed to restore normal level
3. Inspect for causes before restarting

**Soot Blowing:** Only perform at loads > 50% of rated capacity; manual draft increase required on small balanced-draft units

**Online Operation — Routine Logs:** Record pressures, temperatures, flows, draft losses, motor currents, damper positions; logs identify deterioration trends

#### Article 103 — Appurtenances

**Pressure Relief Valve Set Pressure Tolerances:**
| Set Pressure Range | Tolerance |
|---|---|
| ≤ 70 psig (0.5 MPa) | ± 2 psi (15 kPa) |
| 70–300 psig (0.5–2.1 MPa) | ± 3% |
| 300–1,000 psig (2.1–7.0 MPa) | ± 10 psi (70 kPa) |
| > 1,000 psig (> 7.0 MPa) | ± 1% |

**Pressure Relief Valve Blowdown:** Minimum 2 psi (15 kPa) or 2% of set pressure

**Gage Glass Requirements:**
- Minimum 1 gage glass required
- Above 400 psi (3 MPa): 2 independent level indicators, minimum 1 gage glass

**Hydrostatic Test Conditions:** Test water temperature 70–120°F (20–50°C)

#### Article 104 — Instrumentation and Controls
- **Fail-safe design mandatory** for all interlocks
- Manual backup required for all automatic controls
- Annual testing of all interlocks
- Parameters to record: steam/feed/air flows, drum level, steam temps, flue gas temps, opacity, flue gas composition

#### Article 105 — Examinations
**Frequency:** Frequent examination by plant examiner; jurisdictional certificates as required  
**Inspection focus:**
- Internal: corrosion/grooving, deposits, stays, fusible plugs
- External: alignment, piping/supports, relief valves
- Pressure test: ≤ 1.5 × MAWP; 70–120°F (20–50°C) water

**Inspector Qualification:** NB-263 (National Board of Boiler and Pressure Vessel Inspectors)

#### Article 106 — Repairs, Alterations, Maintenance
- All repairs/alterations per **NBIC** (National Board Inspection Code)
- **"R" Stamp** required from NBIC-certified organization
- Authorized Inspector must authorize all repairs
- Document on National Board forms

### Water Treatment Guidelines (Article 200)

**Water Quality Limits:**
| Parameter | Target Limit |
|---|---|
| pH | 8.5–10.5 |
| Total Alkalinity | ≤ 400 ppm |
| Iron | ≤ 0.5 ppm |
| Hardness | 0 ppm |
| Dissolved Oxygen | ≤ 0.005 ppm |

**Deposit Thresholds:**
- Clean tube condition: 20–40 g/ft² (215–430 g/m²)
- Scale deposits reduce heat transfer and cause overheating failures

**Wet Layup Procedure:** Fill with treated water pH 10–11 + oxygen scavenger + nitrogen blanket  
**Dry Layup Procedure:** Fully dried + desiccant + nitrogen blanket; required when freeze risk exists

**Internal Corrosion Types:**
| Type | Mechanism | Visual Appearance |
|---|---|---|
| Oxygen pitting | Dissolved O₂ attack | Sharp-edged pits |
| Caustic gouging | Concentrated NaOH under deposits | Smooth-bottomed gouges |
| Chelate attack | Chelant over-treatment | Smooth surface loss |
| Hydrogen damage | > 1,200 psig (8 MPa); pH excursion | Microfissures, brittle failure |

### Safety Devices
- **Low-Water Fuel Cutoff (LWCO):** Trips at lowest permissible water level per Section I PG-60.1; two independent devices recommended; annual dismantle and test
- **Fusible Plugs:** Must be renewed every year; fire-actuated at lowest water level
- **Pressure Relief Valves:** Annual test; capacity ≥ maximum steaming rate

### Record Keeping Requirements
- Manufacturer's Data Reports (Section I Form A-350) permanently retained
- Operating logs: daily entries for data/events
- Inspection/examination/repair logs: permanent records
- Piping records per ASME B31.1 Appendix V

### Cross-References
- ASME Section I: Construction code for power boilers
- ASME B31.1: Power piping (boiler external piping)
- ASME CSD-1: Controls and safety devices (< 12.5 MBtu/hr)
- NFPA 85: Burner management (≥ 12.5 MBtu/hr)
- NBIC: Repair and alteration certification
- CRTD-Vol. 34, 35, 81: Feedwater treatment guidance

### Practical Field Application Notes
- Section VII is advisory but operationally essential; insurers and jurisdictions often mandate compliance
- Ignition purge interlocks must never be bypassed — furnace explosions typically result from failure to purge
- All operators should be trained to manually operate boilers during automatic system failures; drills required
- Oil contamination in boiler water requires immediate shutdown — oil + high heat causes severe foaming and overheating
- Electrode boiler conductivity target: 1,400–3,500 µS/cm

---

## 4. ASME BPVC Section VIII Division 1 — Pressure Vessels {#section-viii-d1}

**Document Title:** RULES FOR CONSTRUCTION OF PRESSURE VESSELS — DIVISION 1  
**Designation:** ASME BPVC.VIII.1 (2016/2025 Edition per file)  
**Edition/Year:** File dated 2016, current 2025 Edition available  
**OneDrive File:** ASME BPVC Section VIII D1.pdf

### Scope and Applicability (U-1)
Pressure vessels = containers for internal or external pressure from external sources or heat.

**Covered Equipment:**
- Stationary and mobile pressure vessels
- Unfired steam boilers (U-1(g))
- Shell-and-tube heat exchangers (Subsection C, UHX)
- Multi-chamber vessels (UG-19)

**Divisions and Subsections:**
| Subsection | Content |
|---|---|
| A (UG) | General requirements (materials, design, openings, inspection) |
| B | Fabrication methods: Welding (UW), Forging (UF), Brazing (UB) |
| C | Material classes: UCS (C/low alloy), UNF (nonferrous), UHA (high alloy), UCI/UCD (cast iron), UHT (enhanced ferritic), ULW (layered), ULT (low temp), UIG (impregnated graphite), UHX (S&T HX) |

**Exclusions (U-1):**
- Boilers per Section I (steam/vapor generation)
- Nuclear per Section III
- Heating boilers per Section IV
- Piping per B31 codes
- Fired process heaters
- Human-occupancy vessels (PVHO-1)

**Pressure Limits:**
- General: ≤ 3,000 psi (20 MPa); higher requires engineering deviations
- Cast iron (UCI): ≤ 160 psi (gas), ≤ 250 psi (liquids)
- Ductile iron (UCD): ≤ 1,000 psi (liquids only)
- Impregnated graphite (UIG): ± 350 psi

### Design Formulas

**Cylindrical Shells — Internal Pressure (UG-27):**
'''
Circumferential stress: t = PR / (SE − 0.6P)
Longitudinal stress: t = PR / (2SE + 0.4P)
'''

**Spherical Shells (UG-27(d)):**
'''
t = 0.885PL / SE
'''

**Head Formulas (UG-32/33):**
| Head Type | Formula |
|---|---|
| Ellipsoidal (2:1) | t = PDK / (2SE − 0.2P) |
| Torispherical | t = 0.885PLM / (SE − 0.1PM) |
| Hemispherical | t = 0.885PL / SE |
| Conical | t = PD / (2cosα(SE − 0.6P)) |

**Flat Heads (UG-34):**
'''
t = d √(CP/SE)
'''
- C = 0.10–0.75 depending on attachment and edge conditions

**External Pressure (UG-28):** Chart-based method using Section II, Part D, Subpart 3

### Allowable Stress (UG-23)
- Maximum from Section II, Part D, Tables 1A (ferrous), 1B (nonferrous), 3 (bolting)
- Castings: × UG-24 quality factor (80% or 100%)
- For impregnated graphite (UIG): 1/6 of tensile strength (design factor = 6.0; 7.0 for lethal service)

### Weld Joint Efficiency (UW-12)

| Examination Level | Type 1 Joint | Type 2 Joint |
|---|---|---|
| Full RT | E = 1.00 | E = 0.90 |
| Spot RT | E = 0.85 | E = 0.80 |
| No RT (E = 0.70 to 0.45) | Type 1: 0.70 | Type 6: 0.45 |
| Seamless | E = 1.00 | — |

### Hydrostatic Test Requirements (UG-99)

| Vessel Type | Test Pressure |
|---|---|
| Standard | 1.3 × MAWP × Lowest Stress Ratio (LSR) |
| Glass-lined | = MAWP |
| Impregnated Graphite | 1.5 × design P (1.75 × for lethal service) |
| ULT (low temperature) | 1.4 × design P at 150°F |
| Layered (ULW) | Per ULW-90 |

### Minimum Wall Thickness
- General (UG-16): 1/16 in. (1.5 mm), excluding corrosion allowance
- Exceptions: Heat transfer equipment, tubes, specific non-metallic

### Inspection Requirements
- **Materials:** UG-93 (inspection), UG-94 (markings required)
- **Fabrication:** UG-95–97; radiography per UW-51 (full) or UW-52 (spot)
- **NDE Personnel:** ASNT SNT-TC-1A or CP-189 qualification

### Nameplate and Stamping (UG-116)
- **"U" Mark:** Full code compliance
- **"UM" Mark:** Exempt (small pressure vessels)
- Additional designators: RT 1–4 (radiography extent), HT/PHT (PWHT), MDMT

### Special Material Classes

**UCS (Carbon/Low Alloy):** PWHT per Tables UCS-56-1 through UCS-56-11  
**UHT (Enhanced Ferritic):** Toughness requirements per UHT-6  
**ULT (Low Temperature):**
- 5%/8%/9% Ni steel; 304/316 SS; Al 5083
- Special cryogenic stress tables

**UCI (Cast Iron):**
- Gray iron
- Pressure test: ≤ 450°F maximum design temperature

**UCD (Cast Ductile Iron):**
- Maximum design temperature ≤ 650°F

**UIG (Impregnated Graphite):**
- Allowable stress = tensile strength / 6.0 (or 7.0 for lethal service)

**UHX (Shell-and-Tube Heat Exchangers):**
- Tubesheet design rules for U-tube, fixed, and floating configurations

### Key Definitions (Appendix 3)
- **Design Pressure (UG-21):** Pressure used in design calculations; ≥ maximum operating pressure
- **Design Temperature (UG-20):** Metal temperature at MAWP; ≥ maximum expected operating temperature
- **MDMT:** Minimum Design Metal Temperature (stamped on nameplate; coincident with MAWP)
- **Construction:** Includes materials, design, fabrication, examination, inspection, testing, certification

### Cross-References
- ASME Section II, Part D: Allowable stresses, physical properties
- ASME Section V: NDE methods
- ASME Section IX: Welding and brazing qualifications
- ASME B31.3: Process piping (connected to vessels)
- ASME PCC-1: Bolted flange joint assembly

### Practical Field Application Notes
- Div. 1 uses allowable stress at 25% of min. tensile (vs. Div. 2's 33%); more conservative, simpler rules
- Vessels must bear a valid U or UM stamp; field-fabricated vessels need Manufacturer's Data Report (Form U-1)
- Corrosion allowance is not specified by the code — it must be specified by the purchaser/engineer
- Impact testing (MDMT) is critical for low-temperature service; Charpy V-notch testing per UG-84
- Nozzle reinforcement must be checked per UG-36 through UG-43 whenever a hole is cut in a shell

---

## 5. ASME BPVC Section VIII Division 2 — Pressure Vessels (Alternative Rules) {#section-viii-d2}

**Document Title:** ALTERNATIVE RULES FOR CONSTRUCTION OF PRESSURE VESSELS — DIVISION 2  
**Designation:** ASME BPVC.VIII.2-2025  
**Edition/Year:** 2025 Edition, Date of Issuance: July 1, 2025  
**OneDrive File:** ASME BPVC Section VIII D2.pdf

### Scope and Applicability

**Overview (1.2.1):**
- Pressure vessels containing internal/external pressure ≥ 103 kPa (15 psi)
- Applies to: stationary vessels, ocean-going ships/barges, rail/motor vehicles, fired vessels, unfired steam boilers, steam generators
- No upper pressure limit; above 68.95 MPa (10,000 psi) may also consider Div. 3

**Geometric Scope (1.2.3):**
- Vessel and integral communicating chambers
- External piping to: first circumferential joint, threaded joint, flange face, sealing surface
- Non-pressure parts welded to pressure parts: designed per 4.2.5.6

**Exclusions (1.2.4):** Same general categories as Div. 1; additionally excludes combination units if each piece independently meets code

**Key Difference from Division 1:**
- Div. 2 uses a **higher allowable stress** (typically 1/3 of min. tensile vs. 1/4 for Div. 1)
- Requires formal **User's Design Specification** and **Manufacturer's Design Report**
- Mandatory **fatigue analysis** in many cases
- More rigorous **Design by Analysis (DBA)** methods available

### User and Manufacturer Responsibilities

**User's Design Specification (2.2.3) — Required content:**
- Installation site, vessel identification, configuration
- Design and operating conditions (pressure, temperature, cyclic loading)
- Fatigue life requirements
- Material selection
- Overpressure protection method
- **Must be certified by a Certifying Engineer when fatigue analysis is required (Annex 2-A)**

**Manufacturer's Design Report (2.3):**
- Certified by a Certifying Engineer if DBA or fatigue analysis is used (Annex 2-B)
- Must verify: code compliance, material traceability, QC system, construction records

### Materials Requirements (Part 3)

**Permitted (3.2.1):** Section II specifications listed in Annex 3-A tables

**Special Bar Stock Rules (3.2.5.2):**
- Bars used in tension/bending: standard design stress
- Machined from bar stock without transverse testing: **50% design stress penalty** applied
- Penalty can be avoided by providing transverse tensile + UT examination

**Supplemental Requirements:**
- **Ferrous (3.3):** UT for plates/forgings, chemistry requirements, clad rules
- **Cr-Mo steels (3.4):** Mandatory PWHT, test specimens, weld qualifications, toughness
- **Q&T Enhanced Tensile (3.5):** Rules for parts and attachments
- **Nonferrous (3.6):** UT for plates/forgings, clad
- **Castings (3.8):** NDE requirements, repair limits

**Toughness Requirements (3.11):**
| Material Category | Test Required | Basis |
|---|---|---|
| Carbon/Low Alloy (3.11.2) | Charpy V-notch | CVN requirements; MDMT exemptions available |
| Q&T Steels (3.11.3) | CVN + drop-weight | Both tests required |
| High Alloy (3.11.4) | CVN | Required for MDMT < −20°F |
| Nonferrous (3.11.5) | — | Temperature limits apply |
| Bolting (3.11.6) | CVN | Required for specific specifications |

**Annex 3-F:** Fatigue curves (S-N data for life assessment)

### Design by Rule (Part 4)

**Minimum Thickness (4.1.2):** 1.6 mm (0.0625 in.) excluding corrosion allowance

**Design Allowable Stress Basis (4.1.6):**
- **Pm** (primary membrane stress) ≤ **S** (allowable stress)
- **Pm + Pb** (primary membrane + bending) ≤ **SPS** (= 1.5S)
- Test factors βT and γSt/S per Table 4.1.3

**Shell Formulas — Internal Pressure (4.3):**
| Geometry | Formula |
|---|---|
| Cylinder | t = PR / (SE − 0.6P) |
| Sphere | t = PR / (2SE − 0.2P) |
| Cone | t = PD / (2cosα(SE − 0.6P)) |
| Torispherical | Procedure with buckling/rupture checks |
| Ellipsoidal | t = PDK / (2SE − 0.2P) |

**External Pressure (4.4):**
- Safety factor: FS = 2.0 (elastic buckling), FS = 1.667 (inelastic buckling)
- Imperfection tolerances specified for shells

**Weld Joint Categories:** Categories A through F; joint efficiency from Table 7.2

**Flanged Joints (4.16):** Integral/loose/reverse flange types; gasket factors; bolt loads and stresses per ASME PCC-1 methodology

### Design by Analysis (Part 5)

**Methods Available:**
- **Elastic stress analysis** (stress categorization — Tresca criterion)
- **Limit-load analysis** (plastic collapse prevention)
- **Elastic-plastic analysis** (advanced FEA)

**Failure Modes Addressed:**
| Mode | Method | Criteria |
|---|---|---|
| Plastic collapse (5.2) | Elastic: Pm ≤ S, PL ≤ 1.5S; Limit: load factors (Table 5.4) | Per stress categorization |
| Local failure (5.3) | Triaxial stress: σ₁+σ₂+σ₃ ≤ Sy | Strain limit: εpeq ≤ εL |
| Buckling (5.4) | Method A: elastic eigenvalue; Method B: elastic-plastic with imperfections | Per design factors |
| Cyclic/fatigue (5.5) | Methods A (elastic equiv. stress), B (elastic-plastic strain), C (structural stress) | Fatigue curves Annex 3-F |
| Ratcheting (5.5) | Elastic/elastic-plastic/Bree diagram | No progressive distortion |
| Creep damage (5.6) | Stress rupture, buckling, fatigue, ratcheting | Time-fraction damage |

**Fatigue Screening Methods (5.5.3):** Method A, B, or C — select based on complexity and operating cycles

### Fabrication (Part 6)

**Forming Strain Limits:** Tables 6.1–6.3  
**Weld Alignment Tolerances:** Table 6.4  
**Welding Processes Permitted:** Table 6.5  
**Preheat Requirements:** Table 6.7  
**PWHT — Mandatory Tables:** 6.8–6.15 (mandatory for most carbon/low-alloy applications)

### Inspection and Examination (Part 7)

**Weld Joint Groups (Table 7.1):**
| Group | Description | NDE Extent |
|---|---|---|
| 1a | Full penetration butt welds | 100% RT or UT |
| 1b | Full penetration butt welds (lower quality) | Reduced extent |
| 2a–3b | Fillet/partial penetration welds | Varies by Table 7.2 |

**NDE Methods and Acceptance Criteria:**
- RT: Tables 7.7–7.11
- UT: Tables 7.8–7.11 (phased array UT acceptable)
- MT/PT/ET: Per Tables 7.6 and applicable criteria

### Pressure Testing (Part 8)

**Hydrostatic Test (8.2):**
'''
PT = 1.43 × MAWP × (St/S)
'''
- St = allowable stress at test temperature
- S = allowable stress at design temperature
- Minimum water temperature per material MDMT requirements

**Alternative: Pneumatic Test (8.3):** Subject to special precautions (personnel hazard)

### Overpressure Protection (Part 9)

| Overpressure Scenario | Max Accumulation |
|---|---|
| Single PRV | +10% or +3 psi (whichever greater) |
| Multiple PRVs | +16% or +4 psi |
| Fire/external heat | +21% |

**PRV Set Pressure Tolerances (9.6):** ± 2 psi (below 70 psi) or ± 3% (above 70 psi)

### Definitions
- **Certifying Engineer:** Professional Engineer who certifies User's Design Specification and/or Manufacturer's Design Report
- **Design by Analysis (DBA):** Detailed stress analysis (Part 5 methods) for complex geometries or loading
- **Pm:** Primary membrane stress (general)
- **Pb:** Primary bending stress
- **SPS:** Maximum limit = 1.5 × S (for combined Pm + Pb)
- **MDMT:** Minimum Design Metal Temperature

### Cross-References
- ASME Section II, Part D: Material properties, S-N curves
- ASME Section V: NDE procedures
- ASME Section IX: Welding qualifications
- API 579/FFS-1: Fitness-for-service assessments (tolerance deviations)
- ASME PCC-1: Bolted flange joints

### Practical Field Application Notes
- Division 2 typically results in **thinner walls** than Div. 1 due to higher allowable stresses — justified by more rigorous design analysis
- Mandatory User's Design Specification formalizes owner requirements; critical for fatigue-loaded vessels (pressure cycles, thermal cycles)
- Design by Analysis with FEA is permitted/required for complex geometry; elastic stress classification remains the most common method
- PWHT requirements are more strictly enforced than Div. 1 — spot checking is not sufficient
- Consider Div. 3 (not in this batch) for pressures > 10,000 psi

---

## 6. ASME BPVC Section IX — Welding, Brazing, and Fusing Qualifications {#section-ix}

**Document Title:** QUALIFICATION STANDARD FOR WELDING, BRAZING, AND FUSING PROCEDURES; WELDERS; BRAZERS; AND WELDING, BRAZING, AND FUSING OPERATORS  
**Designation:** ASME BPVC.IX-2025  
**Edition/Year:** 2025 Edition, Date of Issuance: July 1, 2025  
**OneDrive File:** ASME BPVC Section IX.pdf

### Scope and Applicability (QG-100)
Section IX provides qualification requirements for:
- **Welding procedures (WPS/PQR)** and **welders/welding operators**
- **Brazing procedures (BPS/PQR)** and **brazers/brazing operators**
- **Plastic fusing procedures (FPS)** and **plastic fusing operators**

Used by: All other ASME BPVC sections and B31 piping codes (referencing Code takes precedence over Section IX in any conflict)

**New editions become mandatory 6 months after issuance**

**Parts:**
| Part | Coverage |
|---|---|
| QG | General requirements |
| QW | Welding (manual and machine) |
| QB | Brazing (manual and machine) |
| QF | Plastic fusing (PE pipe butt/sidewall/electrofusion) |

### Welding Procedure Specification (WPS) and Procedure Qualification Record (PQR)

**WPS (QW-200):**
- Written document providing direction for production welding
- Must list all: essential variables, supplementary essential variables (when toughness required), and nonessential variables
- Can be based on organization's own PQR **or** AWS Standard Welding Procedure Specifications (SWPS) per Appendix E

**PQR (QW-200):**
- Records actual variables used for qualification test coupon welding
- Documents all test results
- Must be certified by the organization (not the welder or individual inspector)
- Changes in any essential or supplementary essential variable invalidate the PQR and require requalification

**Variable Classifications:**
| Type | Impact | Requalification |
|---|---|---|
| Essential Variable | Affects mechanical properties (strength, ductility) | Required if changed |
| Supplementary Essential Variable | Affects notch toughness | Required if toughness testing is specified by referencing Code |
| Nonessential Variable | No effect on required properties | No requalification needed |

### Essential Variables — By Process (Tables QW-252 to QW-267)

**Typical essential variables across processes (QW-251):**
- Change in P-Number (base metal group) beyond qualified range
- Change in F-Number (filler metal usability group) beyond qualified range
- Change in A-Number (weld deposit analysis) beyond specified range
- Change in base metal thickness or diameter beyond qualified range
- Change in groove design beyond specified limits (for some processes)
- Change in preheat (reduction) or PWHT
- Change in heat input (if supplementary essential for toughness)
- Change in position when not qualified in that position

### Welder Performance Qualification (QW-300–QW-387)

**Qualification Methods:**
- Mechanical tests: bend tests and/or tensile tests on test coupons
- Volumetric NDE (RT or UT per QW-191) as alternative to mechanical tests

**Position Qualification (Table QW-461.9):**
| Groove Positions | Fillet Positions |
|---|---|
| 1G (flat plate), 2G (horizontal), 3G (vertical), 4G (overhead) | 1F, 2F, 3F, 4F (flat, horiz., vert., overhead) |
| 5G (pipe — fixed horizontal), 6G (pipe — inclined 45°), 6GR (restricted access) | 5F (pipe fixed) |

**Continuity of Qualification:**
- Welder must weld with a qualified process at least once every **6 months** (QW-322)
- If not, qualification lapses and must be re-established by retest

### Acceptance Criteria

**Tension Test (QW-153):**
- Failure stress ≥ minimum specified tensile strength of base metal
- If fracture in weld metal at stress ≥ minimum base metal UTS: acceptable

**Bend Test (QW-163):**
- No open discontinuity > 1/8 in. (3 mm) in any direction after bending
- Root/face/side bends distinguished; bend radius per Table QW-466.1

**Fillet Weld Test (QW-183/184):**
- No cracks, incomplete fusion
- Concavity/convexity ≤ 1/16 in. (1.5 mm)

**RT/UT for Welder Qualification (QW-191):**
- Linear indications: ≤ t/3 (t = thickness of thinner piece)
- Rounded indications: ≤ 20% of t

### Base Metal P-Numbers (QW-420–QW-424)

**P-Number System:** Groups metals by composition, weldability, and mechanical properties to minimize number of qualifications required

| P-Number | Metal Group |
|---|---|
| P-1 | Carbon steel |
| P-3 | Alloy steel (½Cr–½Mo etc.) |
| P-4 | Alloy steel (1¼Cr–½Mo) |
| P-5A | 2¼Cr–1Mo (Grade 22) |
| P-5B | 5Cr–½Mo |
| P-5C | 9Cr–1Mo (Grade 91) |
| P-6 | Martensitic stainless (410, 420) |
| P-7 | Ferritic stainless (405, 430) |
| P-8 | Austenitic stainless (304, 316, 347) |
| P-9A | 2½% Ni steel |
| P-10 | High-alloy steels |
| P-11A | Manganese-molybdenum |
| P-15E | CSEF (Grade 91, 92) |
| P-21 to P-26 | Aluminum and aluminum alloys |
| P-31 to P-38 | Copper and copper alloys |
| P-41 to P-47 | Nickel and nickel alloys |
| P-51 to P-54 | Titanium and titanium alloys |

### Filler Metal F-Numbers (QW-430–QW-433)

| F-Number Range | Filler Metal Type |
|---|---|
| F-1 to F-6 | Steel electrodes (usability groups; F-4 = EXX15/16/18) |
| F-21 to F-26 | Aluminum filler metals |
| F-31 to F-37 | Copper filler metals |
| F-41 to F-46 | Nickel filler metals |
| F-51 to F-56 | Titanium filler metals |
| F-71 to F-72 | Hard-facing filler metals |

### A-Numbers (QW-442) — Weld Metal Chemical Analysis

| A-Number | Composition |
|---|---|
| A-1 | Carbon steel (< 0.06% Mo, no Cr/Ni) |
| A-2 | Carbon-Molybdenum (0.4–0.65% Mo) |
| A-3 | Chrome-Molybdenum (0.4–2.0% Cr, 0.4–0.65% Mo) |
| A-4 | Chrome-Molybdenum (2.0–6.0% Cr) |
| A-5 | Chrome-Molybdenum (6.0–10.5% Cr) |
| A-8 | Chromium-Nickel (Cr 19.5–22%, Ni 7.5–10.5%) |
| A-9 | Chromium-Nickel (Cr 22–27%, Ni 11–15%) |
| A-10 | Nickel (> 6% Ni) |
| A-12 | NiCrMo (Cr 18–22%, Ni 30–40%, Mo 2.5–3.5%) |

### Brazing Qualifications (QB-100–QB-350)

**Essential Variables for Brazing (QB-251):**
- Joint design change
- Change in base metal P-Number
- Change in filler F-Number (Table QB-432: F101–F111; BCuP, BAg, BAlSi, BCu, BNi, BAu, etc.)
- Change in brazing temperature
- Change in flux composition
- Change in flow position
- Change in joint clearance
- Change in post-braze heat treatment (PBHT)

**Acceptance Criteria:**
- Tension: ≥ minimum base metal tensile strength (QB-153)
- Bend: No open discontinuity > 1/8 in. (3 mm) (QB-163)
- Peel test: ≤ 25% discontinuities (QB-172)
- Section test: ≤ 20% unbrazed area (QB-181)

**Continuity:** Brazer must braze at least once every 6 months

### Plastic Fusing Qualifications (QF-100–QF-201)
- Covers butt fusing, sidewall fusing, electrofusion of polyethylene (PE) pipe
- Standard FPS/SFPS/MEFPS: can be used without independent qualification if manufacturer's recommended procedure conditions met
- Acceptance: No cracks/incomplete fusion; ductile failure in High Strain Tensile Impact Test (HSTIT)

### Definitions
- **WPS:** Welding Procedure Specification — written document directing production welding
- **PQR:** Procedure Qualification Record — laboratory record supporting the WPS
- **SWPS:** Standard Welding Procedure Specification (AWS pre-qualified, per Appendix E)
- **Essential Variable:** A variable whose change adversely affects the mechanical properties
- **P-Number:** Base metal grouping for qualification purposes
- **F-Number:** Filler metal usability grouping
- **A-Number:** Weld deposit chemical composition grouping (ferrous)

### Cross-References
- All ASME BPVC Sections: Reference Section IX for welding/brazing qualification requirements
- ASME B31.1, B31.3, B31.4, B31.8: Piping codes requiring Section IX qualifications
- AWS D1.1: Structural welding (SWPS source)
- ASNT SNT-TC-1A/CP-189: NDE personnel qualification for examiners testing welds

### Practical Field Application Notes
- The **PQR must be kept by the manufacturer/fabricator** — not by the welder; it is an organizational document
- When a welder changes employer, their performance qualifications do **not** transfer — they must re-qualify with the new employer
- P-1 qualifies P-1; P-8 qualifies P-8 (generally, qualification does not transfer between P-Numbers)
- For CSEF (Grade 91/P-15E) welds: supplementary essential variables for toughness are almost always invoked; heat input and preheat must be controlled
- AWS Standard WPS (SWPS, Appendix E) can be used without a supporting PQR for specific application conditions

---

## 7. ASME BPVC Section X — Fiber-Reinforced Plastic Pressure Vessels {#section-x}

**Document Title:** FIBER-REINFORCED PLASTIC PRESSURE VESSELS  
**Designation:** ASME BPVC.X-2025  
**Edition/Year:** 2025 Edition, Date of Issuance: July 1, 2025  
**OneDrive File:** ASME BPVC Section X.pdf

### Scope and Applicability (RG-100 to RG-120)
Establishes requirements for fabrication of **fiber-reinforced thermosetting plastic (FRP) pressure vessels** for general service.

**Covered items:** FRP vessels with metallic components complying with Section VIII, Div. 1

**Application Limits:**

| Parameter | Class I | Class II | Class III |
|---|---|---|---|
| Max Design Pressure | 150 psi (bag/centrifugal/contact-molded) | P×D ≤ 14,400 lb/in. (2,522 kPa·m), P ≤ 250 psi, D ≤ 192 in. | 3,000–15,000 psi (filament-wound polar boss) |
| Max Design Pressure (filament-wound) | 2,000 psi (standard); 3,000 psi (polar boss) | Same as above | 15,000 psi max |
| Max Temperature | 250°F (121°C); ≥ 35°F below resin max use temp | 250°F | 185°F (85°C) |
| Min Temperature | −65°F (−54°C) | −65°F | — |

**Potable Water (RG-113):** ≤ 160 psig, ≤ 210°F  
**Lethal Service (RG-114):** PROHIBITED for FRP vessels

**Exempted Vessels (RG-121):**
- Rotating/reciprocating components
- Piping systems
- Pressure ≤ 15 psi
- ID ≤ 6 in.
- Human-occupancy vessels

### Vessel Classes

**Class I — Prototype Qualification:**
- Design qualified by prototype testing (RT-2)
- Production verified by quality control testing (RT-3) and production testing (RT-4)
- **Qualification requirements:** Burst pressure ≥ 6 × design P (5 × for polar boss); cyclic test: 100,000 cycles (atmospheric to design P)
- Fabrication methods: bag-molding, centrifugal-casting, contact-molding, filament-winding

**Class II — Mandatory Design Rules + Acoustic Emission Acceptance Test:**
- Design per Article RD-11 (Method A or B)
- Acceptance per RT-6 (acoustic emission monitoring during hydrostatic test)
- Limits: P × D ≤ 14,400 lb/in. (2,522 kPa·m); P ≤ 250 psi; D ≤ 192 in.
- Fabrication: contact-molding and filament-winding only

**Class III — High Pressure (Mandatory Appendix 8):**
- Filament-wound with polar boss openings only
- Range: 3,000–15,000 psi (20.7–103 MPa)
- Qualification burst: ≥ 2.25 × P (carbon fiber) or ≥ 3.5 × P (glass fiber)
- Fatigue qualification: per service life cycles

### Materials

**Fiber Systems (RM-110):**
| Fiber Type | Testing Standard | Certification Requirement |
|---|---|---|
| Glass (E, S, E-CR, C type) | ASTM D2343 | ≥ 90% of min. strength/modulus |
| Carbon/Graphite | ASTM D4018 | ≥ 90% of min. strength/modulus |
| Aramid | ASTM D2343 | ≥ 90% of min. strength/modulus |

- Type S and E-CR glass recommended for corrosion-resistant service

**Resin Systems (RM-120):** Epoxy, polyester, vinyl ester, phenolic, furan
- No interfering fillers or pigments permitted
- Fabricator tests: viscosity, gel time, specific gravity (Table RM-120.2)
- Maximum use temperature must be documented

**Cure Verification (RM-123):** Barcol hardness test per ASTM D2583; tolerances per resin manufacturer or Fabricator-established procedure

### Design Requirements (Part RD)

**Shell Formulas — Internal Pressure (RD-200, RD-1170):**
'''
Cylinder (hoop direction): t₁ = PR / (2 × 0.001E₁)
Cylinder (axial direction): t₂ = PR / (0.001E₂)
Sphere: t = PR / (2 × 0.001E)
'''
Where E₁, E₂ = effective moduli of laminate in respective directions

**External Pressure (RD-300):**
- Class I: Prototype testing
- Class II: Buckling equations per RD-1172 for cylinders and spheres

**Flat Heads (RD-700):**
'''
t = C √(Pd/S)
'''
- Consistent with ASME VIII Div. 1 format

**Class II Design Methods:**
- **Method A (RD-1170):** Strain-based; strain limits of laminate
- **Method B (RD-1180):** Quadratic failure criterion; requires laminate properties from RT-7

**Qualified Designer (RD-1111):** Must certify design report for Class II; equivalent to Certifying Engineer role

### Testing Requirements

**Class I Testing (RT-2 through RT-4):**
| Test Type | Requirements |
|---|---|
| Cyclic qualification | 100,000 cycles at full design pressure |
| Burst qualification | ≥ 6× design P (standard); ≥ 5× P (polar boss) |
| Hydrostatic leak (RT-4 production) | 1.1 × design P (no metal parts); 1.3 × P (with metal parts) |
| Quality control frequency | 1 per 1,000 vessels or once per year |

**Class II Testing (RT-6 through RT-8):**
| Test | Method | Acceptance |
|---|---|---|
| Acceptance (RT-6) | Acoustic emission during hydrostatic test per ASTM E1067 | Per Table RT-620.1 (amplitude, duration, emissions) |
| Lamina properties (RT-7) | ASTM tensile/compressive/shear tests | Used in Class II design calculations |
| Damage criterion (RT-8) | ASTM E2478 (AE-monitored bending/shear) | Established experimentally |

**Hydrostatic Test:**
- Class I: 1.1 × design P (no metal) or 1.3 × P (with metal)
- Class II: 1.1 × design P
- Pneumatic test permitted where hydrostatic is unsafe

### Acceptance Criteria — Visual (Mandatory Appendix 6)
- Porosity, cracks, delaminations: **none permitted on pressure-retaining surfaces**
- Detailed tables: Table 6-100.1 (Class I), Table 6-100.2 (Class II)

### Quality Assurance (RG-323, Appendix 1)
Written QC system must include: authority/organization, drawings, QC flow, nonconformance control, resin/fiber traceability, calibration records, forms, audit program

### Fabrication Methods (Part RF)
| Method | Applicable Class |
|---|---|
| Bag-molding (RF-2) | Class I only |
| Centrifugal-casting (RF-3) | Class I only |
| Contact/hand lay-up (RF-5) | Class I and II |
| Filament-winding (RF-4) | Class I and II (Class III: polar boss only) |

### Definitions (Appendix 4)
- **Laminate:** Assembly of laminae (layers) bonded together
- **Lamina:** Single layer of resin-impregnated fibers
- **Anisotropy:** Properties varying with direction
- **Orthotropy:** Special case of anisotropy with three orthogonal planes of symmetry

### Cross-References
- ASME Section VIII, Div. 1: Metallic components attached to FRP vessels
- ASTM D2343: Tensile properties of glass fiber strands/rovings
- ASTM D4018: Tensile properties of carbon fiber tows/rovings
- ASTM D2583: Barcol hardness of rigid plastics
- ASTM E1067: AE examination of FRP vessels
- ASTM E2478: Damage criterion testing

### Practical Field Application Notes
- FRP vessels are chosen for corrosion resistance (acids, alkalis, brine) where metallic vessels are impractical or uneconomical
- **Lethal service is prohibited** — this is an absolute exclusion in Section X
- Class II is the most commonly used class for industrial chemical processing FRP vessels
- Acoustic emission (AE) testing during the hydrostatic test is the critical acceptance test for Class II — requires calibrated sensors and trained evaluators
- Liner integrity (if used) must be verified separately — the liner does not contribute to structural design calculations
- Resin selection must account for chemical compatibility AND maximum service temperature

---

## 8. ASME BPVC Section XII — Transport Tanks {#section-xii}

**Document Title:** RULES FOR CONSTRUCTION AND CONTINUED SERVICE OF TRANSPORT TANKS  
**Designation:** ASME BPVC.XII-2025  
**Edition/Year:** 2025 Edition, Date of Issuance: July 1, 2025  
**OneDrive File:** ASME BPVC Section XII.pdf

### Scope and Applicability (TG-100 to TG-110)

**Coverage:** Pressure vessels used to transport dangerous goods by highway, rail, air, or water. Governs:
- **Construction:** Materials, design, fabrication, examination, inspection, testing, certification, overpressure protection
- **Continued service:** Inspection, testing, repair, alteration, re-certification

**Physical Scope (TG-110.1):**
- Pressure-containing parts from full vacuum to **138 bar (2,000 psig)**
- Temperature range: **−269°C to 343°C (−452°F to 650°F)**
- Shell/head thickness ≤ **38 mm (1.5 in.)**

**Geometric Scope:** From pressure boundary (shell, heads, openings) to first threaded joint, flange face, first sealing surface, or welding end

**Vessel Classes (TG-120):**
| Class | Basis |
|---|---|
| Class 1 | Higher hazard; higher pressure (typically > 2.41 bar/35 psig) |
| Class 2 | Intermediate |
| Class 3 | Lower hazard; lower pressure |

**Exclusions:** Items covered by other ASME Sections; rotating/reciprocating components; piping beyond geometric scope

### Vessel Types (Modal Appendices)

**Modal Appendix 1 — Cargo Tanks (Highway):**
| Category | Description | MAWP | Min. Design P | Class |
|---|---|---|---|---|
| 406 | Noncircular tanks (flammable liquids) | ≤ 0.276 bar (4 psi) | 0.183 bar (2.65 psi) | 3 |
| 407 | Circular tanks (non-flammable liquids) | ≤ 6.90 bar (100 psi) | 1.72 bar (25 psi) | 1 (> 35 psi), 3 (≤ 35 psi) |
| 412 | Circular/noncircular tanks | ≤ 6.90 bar (100 psi) | 0.345 bar (5 psi) | 1 (> 15 psi), 3 (≤ 15 psi) |
| 331 | Compressed gas tanks | ≤ 34.5 bar (500 psi) | 6.90 bar (100 psi) | 1 |
| 338 | Vacuum-insulated refrigerated fluid | ≤ 34.5 bar (500 psi) | 1.75 bar (25.3 psi) | 1 |

**Modal Appendix 3 — Portable Tanks:**
- Refrigerated fluids; capacity > 450 L (120 gal); Class 1

**Modal Appendix 4 — Ton Containers:**
- Cylindrical steel tanks; capacity 680–1,180 L (181–313 gal)
- Categories: 106A500-X, 106A800-X, 110A500-W, etc.
- Class 1

### Design Requirements (Part TD)

**Minimum Thickness:** 1.6 mm (1/16 in.) excluding corrosion allowance (TD-100)

**Design Basis:**
- Design temperature ≥ mean metal temp expected in service (TD-140)
- Design pressure ≥ most severe coincident pressure/temperature condition (TD-150)
- **MAWP** = maximum permissible pressure at top of vessel in its normal operating position (TD-160)

**Loadings to Consider (TD-200):** Internal/external pressure, weight, dynamic loads (transportation), surge, thermal expansion, supports

**Allowable Stresses (TD-210):** From Section II, Part D; compressive stress ≤ allowable tensile stress

**Internal Pressure Formulas (TD-3):** Same cylindrical/spherical head formulas as Section VIII Div. 1

**External Pressure (TD-4):** Cylindrical/spherical shells with stiffening rings

**Low Pressure Tanks (Appendix VIII):** Noncircular tanks < 15 psi, < 500°F

### Material Requirements (Part TM)

**Approved Material Specifications (Tables TM-130.2-1 to TM-130.2-7):**
| Category | Applicable Steels |
|---|---|
| Carbon/Low Alloy (TM-150) | SA-36, SA-105, SA-285, SA-516, etc. |
| High Alloy (TM-160) | 304, 316, 321, 347 SS, etc. |
| Aluminum (TM-170) | 5083, 5456, 6061, etc. |
| Copper (TM-170) | C10100, C12200, etc. |
| Nickel (TM-170) | Alloy 200, 201, 400, etc. |
| Ferritic Enhanced (TM-180) | F91, F92, etc. |
| Titanium (TM-130.2-7) | Grade 2, Grade 7, etc. |

**Notch Toughness (TM-200+):**
- Charpy V-notch requirements for carbon/low-alloy steels
- Exemptions for specific thickness/temperature combinations
- Nonferrous temperature limits (TM-270)

### Fabrication Requirements (Part TF)
- Welding processes, qualifications, and records (TF-200+)
- **PWHT (TF-700+):** Required per material and thickness
- Cutting, forming, tolerances (TF-100+)

### Testing Requirements (Part TT)

**Hydrostatic or Pneumatic Test:**
- Test pressure ≥ **1.3 × MAWP** (TT-200+)
- No flammable media as test fluid; compressed gas/air is hazardous — special precautions required
- Vents at high points to purge air during hydrostatic filling

**Proof Testing (TT-300+):** Alternative method to establish MAWP where calculation alone is insufficient

**Elastomeric Lining (TT-400):** Spark test required for lined tanks

### Examination and Inspection (Part TE)
- NDE procedures and personnel qualification (TE-100+)
- Weld examination: Visual, RT/UT, MT/PT (TE-200+)
- Spot RT or full RT depending on thickness and vessel class (TE-230)
- Acceptance criteria for linear and rounded indications (TE-250)

### Overpressure Protection (Part TOP)
- **Devices:** Pressure relief valves (ASME TV/TD/UV stamped), rupture disks, nonreclosing devices
- **Capacity:** Owner/user determines required relief capacity (TOP-120)
- **No stop valves** between tank and pressure relief device (TOP-170)
- Set pressure tolerances (TOP-160): per Modal Appendix
- Reference: CGA S-1.2 / ISO 21013 for PRV capacity calculations

### Stamping, Marking, and Certification (Part TS)
**Required Certification Mark Information:**
- T (cargo tank) or PRT XII (parts)
- Vessel class (1, 2, or 3)
- MAWP (pressure and temperature)
- MDMT (Minimum Design Metal Temperature)
- Serial number and year built
- Applied after successful pressure test

**Data Reports:**
- Forms T-1A/B/C (original construction)
- Forms T-2A/B/C (field assembly)
- Forms T-3A/B/C (parts)

### Repair, Alteration, and Continued Service (Part TP)
- Repairs and alterations by **NB "R" Stamp** holders only (TP-200+)
- **Continued service inspections (TP-300+):** Visual, thickness measurement, pressure test, leak test
- **Acceptance criteria (TP-500):**
  - Local Thin Areas (LTA): Remaining Strength Factor (RSF) ≥ 0.90
  - Dents: ≤ 13 mm (0.5 in.) depth
- **Records retention:** Minimum 5 years (TP-600)

### Cross-References to DOT/TC Regulations
- **49 CFR Title 49, Parts 100–185:** DOT hazardous materials transportation regulations (TG-100.3)
- **49 CFR 173.115:** Hazard class definitions
- **49 CFR 178.274:** Design specifications for portable tanks
- **49 CFR 180, Subpart E/G:** Inspection requirements for cargo/portable tanks
- **FMVSS 571.224:** Federal motor vehicle rear bumper standard
- **49 CFR 393.86:** Rear-end protection for cargo tanks
- **NB-23 (NBIC):** National Board Inspection Code for repairs (TG-130)

### Definitions
- **Transport Tank:** A pressure vessel used to transport dangerous goods, classified by hazard, pressure, and transport mode
- **Continued Service:** Ongoing inspection, testing, and recertification activities during the tank's operational life
- **MAWP (Transport):** Maximum permissible gauge pressure at the top of the tank in its normal transport orientation
- **Cargo Tank:** Tank permanently attached to or forming part of a motor vehicle/rail car
- **Portable Tank:** Tank designed to be filled and discharged without removing from transport frame
- **Ton Container:** Specific cylindrical steel tank for chlorine and similar liquefied toxic gases (680–1,180 L)

### Practical Field Application Notes
- Section XII is unique in addressing **continued service** (ongoing re-inspection) as well as original construction, reflecting the transportation environment
- Section XII tanks must also comply with **DOT 49 CFR** regulations — ASME marking alone is not sufficient for legal transport of hazardous materials
- The "T" Certification Mark must be **permanently attached and legible** throughout the service life; nameplate damage can trigger decertification
- Cargo tank (MC-331, now Category 331) construction for compressed gas (LPG, anhydrous ammonia) requires robust impact testing for the severe transport environment
- Continued service hydrostatic test frequency is specified in the applicable DOT Modal Appendix — typically every 5 or 10 years depending on service

---

*End of ASME BPVC & B31 Standards Batch 1 Summary*  
*Compiled for OperaMech.ai Knowledge Base*  
*Source documents: ASME BPVC 2025 Edition (Sections I, IV, VII, VIII D1, VIII D2, IX, X, XII)*

================================================================================
SECTION 4: ASME B31 PIPING & ELECTRICAL
Source: blackbook_piping_electrical.md
================================================================================

# OperaMech.ai Engineering Blackbook
## Batch 2: ASME B31 Piping & Electrical Summaries

*Compiled: 2026-04-19 | Source: OneDrive Engineering Library*

---

## Table of Contents

1. [ASME B31.1-2020 — Power Piping](#1-asme-b311-2020--power-piping)
2. [ASME B31.3-2020 — Process Piping](#2-asme-b313-2020--process-piping)
3. [ASME B31.3 Guide — LANL Companion Guide](#3-asme-b313-guide--lanl-companion-guide)
4. [ASME B31.3 Code Cases](#4-asme-b313-code-cases)
5. [ASME B31.3 Interpretations — Volumes 7–24](#5-asme-b313-interpretations--volumes-724)
6. [Megger Guide to Insulation Testing](#6-megger-guide-to-insulation-testing)
7. [RAE 17739 — GE Energy Site Work Report (Motor Preservation)](#7-rae-17739--ge-energy-site-work-report-motor-preservation)

---

## 1. ASME B31.1-2020 — Power Piping

### Document Information

| Field | Detail |
|---|---|
| **Full Title** | Power Piping, ASME Code for Pressure Piping, B31 |
| **Edition** | ASME B31.1-2020 (revision of B31.1-2018) |
| **Issued** | September 30, 2020 |
| **Effective** | March 31, 2021 |
| **Pages** | 368 |
| **Structure** | Chapters I–VII; Mandatory Appendices A–P; Nonmandatory Appendices II–VIII |

---

### Scope and Applicability (Para. 100.1)

**Covered systems:**
- Electric power generating stations (coal, nuclear, gas, steam, geothermal)
- Industrial and institutional plants
- Geothermal heating systems
- Central and district heating/cooling systems

**What is included:** Pipe, flanges, bolting, gaskets, valves, pressure-relieving devices, fittings, and pressure-containing portions of other piping components.

**Boiler External Piping (BEP):** Para. 100.1.2 defines BEP as piping from the first circumferential joint after the boiler drum/header to the first stop valve. BEP must comply with ASME BPVC Section I (stamping required). Jurisdictional limits are shown in Figures 100.1.2-1 through 100.1.2-8.

**Exclusions:**
- Economizers and pressure vessels (governed by BPVC)
- Building steam distribution ≤ 15 psig
- Marine and federal/military installations

---

### Design Conditions

**Design Pressure (Para. 101.2.2):**  
= Maximum Sustained Operating Pressure (MSOP) + static head of fluid

**Design Temperature (Para. 101.3.2):**  
= Maximum sustained metal temperature during normal operation

---

### Wall Thickness Formula (Para. 104.1.2)

$$t_m = \frac{PD}{2(SEW + Py)} + A$$

| Symbol | Definition |
|---|---|
| P | Design pressure (psi) |
| D | Outside diameter (in.) |
| S | Allowable stress from Appendix A at design temperature |
| E | Weld joint efficiency (Table 102.4.3-1) |
| W | Weld strength reduction factor (Table 102.4.7-1) |
| y | Temperature coefficient (Table 104.1.2-1) |
| A | Allowances: corrosion + erosion + threading/grooving |

**Weld Joint Efficiency E (Table 102.4.3-1) — Key Values:**

| Pipe Type | E Range |
|---|---|
| ERW (electric resistance welded) | 0.85 – 1.00 |
| SAW (submerged arc welded, API 5L) | 0.90 – 1.00 |
| Seamless | 1.00 |

**Weld Strength Reduction Factor W (Table 102.4.7-1):**  
Applied in the creep regime (high temperature). Reduces allowable stress for longitudinal welds in alloy steels (e.g., P91/Grade 91) at elevated temperatures where weld creep strength is lower than base metal.

---

### Allowable Stress

- Values per **ASME BPVC Section II Part D**, Appendix A of B31.1
- **Shear stress:** ≤ 80% of tensile allowable
- **Bearing stress:** ≤ 160% of tensile allowable
- Creep-regime values italicized in Appendix A tables

---

### Welding Requirements (Para. 127)

- All welding qualification per **ASME BPVC Section IX**
- Full-penetration butt welds required for pressure joints in most cases
- Alignment tolerance: ≤ 1/16 in. internal misalignment

**Preheat Requirements (Table 131.4.1-1):**

| P-Number | Material Type | Preheat Temp |
|---|---|---|
| P-1 | Carbon steel | 50°F (10°C) min for t > 1 in. |
| P-3 | Alloy steel (1-1/4 Cr, 1/2 Mo) | 250°F (121°C) |
| P-4 | Alloy steel (2-1/4 Cr, 1 Mo) | 300°F (149°C) |
| P-5 | Alloy steel (5 Cr, 1/2 Mo and up) | 400°F (204°C) |

**Post-Weld Heat Treatment (Table 132.1.1-1):**  
Required by P-Number and wall thickness. P-1 carbon steel: PWHT required at t > 3/4 in. (or > 1-1/4 in. for preheat alternative). P-4 and higher: PWHT always required above minimum thickness thresholds.

---

### Examination Requirements (Table 136.4.1-1)

| Temperature / Pressure Condition | NPS | Required Examination |
|---|---|---|
| > 750°F any pressure | > NPS 2 | RT or UT (volumetric) |
| > 750°F any pressure | ≤ NPS 2 | MT or PT (surface) |
| 350–750°F and > 1,025 psig | > NPS 2, t > 3/4 in. | RT or UT |
| All other BEP | All | Visual + surface (MT/PT) |

---

### Pressure Testing (Para. 137)

**Hydrostatic Test:**
- Minimum test pressure = **1.5 × design pressure**
- Hold time: minimum **10 minutes**
- Maximum test pressure: ≤ 90% of material yield strength

**Pneumatic / Leak Test Alternative:**
- Test pressure = **1.2–1.5 × design pressure**
- Relief device must be installed
- Used when hydrostatic test is impractical

**Non-BEP Piping:**  
Same 1.5× rule applies; owner may specify sensitive leak test (Para. 137.5) as supplemental.

---

### Flexibility and Stress Analysis (Para. 119)

**Displacement Stress Range:**
$$S_E \leq S_A = f_c(1.25S_h + 0.25S_L)$$

**Sustained Stress:**
$$S_L \leq S_h$$

**Occasional Stress:**
$$S_{occ} \leq k S_h$$

| Load Type | k Factor |
|---|---|
| Wind / Snow (less severe) | 1.15 |
| Wind / Seismic (more severe) | 1.20 |

Where: Sh = hot allowable stress, SL = sustained stress, fc = stress range reduction factor for cyclic service.

**Supporting references:**
- Appendix B: Thermal expansion coefficients
- Appendix C: Elastic moduli by material
- Appendix D: Stress Intensification Factors (SIFs) and flexibility factors

---

### Materials

- **Appendix A Tables A-1 through A-10:** Allowable stresses for carbon steel, alloy steel, austenitic SS, Ni alloys, copper, aluminum, titanium
- **Cast iron:** Limited to ≤ 450°F and ≤ 250 psig
- **Unlisted materials:** Must meet requirements of Para. 102.4.1; use with Owner's Inspector approval

---

### Cross-References

| Standard | Relationship |
|---|---|
| ASME BPVC Section I | BEP requirements and stamping |
| ASME BPVC Section II Part D | Allowable stress values |
| ASME BPVC Section VIII Div. 1, UG-28/29/30 | External pressure design |
| ASME BPVC Section IX | Welding procedure and performance qualification |
| ASME QAI-1 | Inspector qualification |
| ASME CA-1 | Certification requirements |

---

### Field Application Notes

1. **BEP jurisdiction:** Always check Figures 100.1.2-1 to -8 to confirm whether piping is BEP (requires Section I compliance) or non-BEP.
2. **WSRF for P91:** At temperatures above ~900°F, the weld strength reduction factor W can drop significantly. Check Table 102.4.7-1 before applying full allowable stress.
3. **Examination triggers:** At 750°F or above, NPS > 2 always requires volumetric examination (RT or UT). Field engineers must track operating conditions, not just design conditions.
4. **PWHT documentation:** PWHT records must be retained for the life of the piping system. Verify completion before pressure testing.

---

## 2. ASME B31.3-2020 — Process Piping

### Document Information

| Field | Detail |
|---|---|
| **Full Title** | Process Piping, ASME Code for Pressure Piping, B31 |
| **Edition** | ASME B31.3-2020 (revision of B31.3-2018) |
| **Issued** | June 18, 2021 |
| **ANSI Approved** | September 29, 2020 |
| **Pages** | 524 |

---

### Scope (Para. 300.1)

**Covered facilities:**
- Petroleum refineries and onshore/offshore oil & gas production
- Chemical, pharmaceutical, textile, paper, semiconductor plants
- Cryogenic, food & beverage processing facilities

**Covered fluids:** All fluids including raw/intermediate chemicals, petroleum products, gas, steam, air, water, fluidized solids, refrigerants, and cryogenics.

**Exclusions:**
- Internal gauge pressure < 105 kPa (15 psi) for benign, non-hazardous fluids
- Boilers and Boiler External Piping per ASME B31.1 / BPVC Section I
- Fired heater pressure coils and tubes
- Pressure vessels, pumps, compressors (other codes govern)

---

### Fluid Service Categories (Para. 300.2)

| Category | Definition | Key Thresholds |
|---|---|---|
| **Category D** | Nonflammable, nontoxic, benign service | P ≤ 1,035 kPa (150 psi); T ≤ 186°C (366°F); fluid T ≥ −29°C (−20°F) |
| **Normal** | Default when D/M/elevated/high pressure/high purity do not apply | — |
| **Category M** | Highly toxic fluid; single exposure can cause serious irreversible harm | Owner-specified; most stringent examination/testing requirements |
| **Elevated Temperature** | Metal temperature at or above creep regime threshold | Per Table 302.3.5 Gen Note (b) |
| **High Pressure** | Owner-specified; governed by Chapter IX rules | Generally > Class 2500 or owner-designated |
| **High Purity** | Alternative fabrication/inspection for controlled cleanliness | Owner-specified; semiconductor/pharmaceutical applications |

---

### Wall Thickness Design Equations (Para. 304.1.2)

**Equation 3a (OD-based):**
$$t = \frac{PD}{2(SE_W + PY)}$$

**Equation 3b (ID-based):**
$$t = \frac{Pd}{2(SE_W + P)(1-2c)}$$

**Minimum required thickness:**
$$t_m = t + c$$

| Symbol | Definition |
|---|---|
| P | Design pressure |
| D | Outside diameter |
| d | Inside diameter |
| S | Allowable stress (Appendix A Tables A-1/A-1M) |
| E | Quality factor (Ec for castings, Table A-1A; Ej for welds, Table A-1B) |
| W | Weld strength reduction factor (Table 302.3.5) |
| Y | Coefficient (Table 304.1.1); varies by material and temperature |
| c | Corrosion/erosion allowance + thread/groove allowance |

---

### Weld Joint Quality Factors — Table A-1B

| Pipe Specification | Default Ej | With Spot RT | With Full RT |
|---|---|---|---|
| Seamless (A53, A106, A312, API 5L seamless) | 1.00 | — | — |
| ERW (A53 Type E, API 5L) | 0.85 | 0.90 | 1.00 |
| Furnace butt weld (A53 Type F) | 0.60 | — | — |
| EFW, 100% radiographed | 1.00 | — | — |

Enhancement method per **Table 302.3.4:** spot RT (random 10%) upgrades Ej to 0.90; full RT upgrades to 1.00.

---

### Weld Strength Reduction Factor W (Table 302.3.5)

Applied in elevated-temperature (creep) regime for longitudinal welds. Critical example:
- **Grade 91 (P91) CrMoV at 950°F:** W = **0.5**

This factor is confirmed in Interpretation 24-12 (see Section 5).

---

### Allowable Stress

- Base values per **ASME BPVC Section II Part D** at rated temperature
- Impact testing (Charpy V-notch, Table 323.3.1) required for low-temperature service
- Unlisted materials per Para. 302.3.2 require engineering justification and Owner approval

---

### Examination Requirements by Fluid Service (Table 341.3.2)

| Examination Type | Normal | Category M | High Pressure | Severe Cyclic |
|---|---|---|---|---|
| Fab / erection welds | Random | 100% | 100% | 100% |
| Longitudinal welds | Random | 100% | 100% | 100% |
| Mechanical joints | Random | 100% | 100% | 100% |
| Volumetric (RT/UT) | 5% | 20% | 100% | 100% |

**Acceptance Criteria (Table 341.3.2):**
- Cracks: **Zero tolerance** — all fluid service categories
- Incomplete penetration: size-limited per table
- Rounded indications: evaluated against acceptance chart

---

### Pressure Testing (Para. 345)

**Hydrostatic Test (Para. 345.4):**
$$P_T \geq 1.5 \times P_{design}$$
- If design temperature > test temperature:
$$P_T \geq 1.5 \times \frac{S}{S_T} \times P_{design}$$
- Hold time: minimum **10 minutes**

**Pneumatic Test (Para. 345.5):**
$$P_T = 1.1 \text{ to } 1.33 \times P_{design}$$
- Pressure relief device required during test
- Requires Owner approval and risk assessment

**Sensitive Leak Test (Para. 345.8):**  
Leakage rate ≤ 10⁻³ standard mL/s.  
**Category M service:** Additional sensitive leak test required beyond standard test.

---

### Flexibility Analysis (Para. 319.4)

**Resultant stress:**
$$S_E = \sqrt{S_a^2 + 4(S_b^2 + S_t^2)} \leq S_A$$

**Allowable stress range:**
$$S_A = f(1.25S_c + 0.25S_h)$$

Or for cases where sustained stress is high:
$$S_A = f[1.25(S_h - S_L) + S_L]$$

Where f = cyclic service stress range reduction factor (1.0 for N < 7,000 cycles).

**Simplified criterion (Eq. 16):** Formal flexibility analysis not required if piping system is similar to previously analyzed system or meets the empirical equation in Para. 319.4.1.

---

### Cross-References

| Standard | Relationship |
|---|---|
| ASME BPVC Section II Part D | Allowable stress/yield values |
| ASME BPVC Section V | NDE methods and acceptance |
| ASME BPVC Section VIII Div. 1 | External pressure, closures, flanges |
| ASME BPVC Section VIII Div. 3 | High pressure (Chapter IX) |
| ASME BPVC Section IX | Welding qualification |

---

### Field Application Notes

1. **Category D vs. Normal:** Category D is the least demanding service and allows reduced examination, but ALL three criteria (pressure, temperature, fluid type) must be satisfied simultaneously.
2. **P91 weld factor:** When W = 0.5 applies, the effective allowable stress is halved. This frequently controls wall thickness calculations in high-temperature power piping converted to B31.3.
3. **5% volumetric = owner risk:** Normal fluid service allows as little as 5% volumetric examination. If defects are found in that 5%, examine an additional two random welds per defect found (progressive sampling).
4. **Sensitive leak test for Category M:** Never skip this step. A standard hydrostatic test does not substitute for the sensitive leak test requirement.

---

## 3. ASME B31.3 Guide — LANL Companion Guide

### Document Information

| Field | Detail |
|---|---|
| **Full Title** | ASME B31.3 Process Piping Guide |
| **Revision** | Rev. 2, dated 3/10/09 |
| **Authority** | LANL Engineering Standards Manual PD342, Chapter 17, Section D20-B31.3-G |
| **B31.3 Edition Referenced** | 2002 |
| **Publisher** | Los Alamos National Laboratory (LANL) |

---

### Scope and Purpose

This document is a companion guide to ASME B31.3, providing LANL-specific implementation requirements. It is **not** a standalone document — it must be used in conjunction with the current ASME B31.3 edition.

**Includes:**
- ASME B31.1 and AWWA-compliant Piping Specifications (P-Specs) — 50+ specs in Appendix A
- Guidance on examination, testing, installation, and flexibility requirements as applied at LANL facilities

**Scope limitations:**
- Vacuum systems: excluded (separate procedure)
- Fire protection piping: excluded (NFPA governs)
- Potable water and sewer: excluded
- Radioactive fluid piping: **not excluded** (see Appendix Q)
- Safety Class service: treated as Category M Fluid Service (see Appendix O)

---

### Responsibilities

| Role | LANL Assignment |
|---|---|
| Owner | Design Authority (LANL) |
| Designer | Design Agency |
| Owner's Inspector | Minimum experience per Para. 340.4(b) |
| Examiner | Certified by LANL Construction Engineering Group |

> Note: Interpretation 24-05 (see Section 5) confirms that an EPC contractor cannot serve as Owner's Inspector.

---

### Examination Extent (Table 3)

| Fluid Service | Fab / Longitudinal Welds | Mechanical Joints | Volumetric NDE |
|---|---|---|---|
| Category D | 10% | Random | None required |
| Normal | 5% | Random (100% if pneumatic test) | 5% |
| Category M | 100% | 100% | 20% |
| High Pressure | 100% | 100% | 100% RT |
| Safety Class | 100% | 100% | 100% RT |

---

### Leak Testing Matrix (Table 4)

| Service | Primary Test | Alternative | Supplemental |
|---|---|---|---|
| Category D | Hydrostatic | Pneumatic (Owner approval) | — |
| Normal | Hydrostatic | Pneumatic (Owner approval) | — |
| Category M | Hydrostatic | Pneumatic (Owner approval) | Sensitive leak test required |
| High Pressure | Hydrostatic | — | — |
| Safety Class | Hydrostatic | — | Sensitive leak test required |

---

### Bending Tolerances

| Radius | Max Wall Thinning | Max Ovality | Max Wrinkle Depth |
|---|---|---|---|
| R ≥ 5D | ≤ 10% of nominal wall | ≤ 8% of OD | ≤ 1.5% of NPS |
| R = 3D | ≤ 21% of nominal wall | ≤ 8% of OD | ≤ 1.5% of NPS |

---

### Erection Tolerances

**Pipe support alignment:** Larger of:
- Safety-class: 6″ or D/2 (whichever is greater)
- Non-safety: 12″ or D (whichever is greater)

---

### Piping Specifications Summary (Appendix A)

**Example: PS-101 — Carbon Steel, Class 150**

| Parameter | Value |
|---|---|
| Schedule Range | STD (CA=0 in.) to XXS/160 (CA=0.125 in.) |
| Design Pressure at 100°F | 285 psi |
| Design Pressure at 650°F | 125 psi |
| Base Fittings | ASTM A234 Gr. WPB |
| Flanges | ASTM A105, ASME B16.5 |

---

### Gasket Specifications (Appendix C, Table 1)

| Gasket Type | Max Allowable Stress | Temperature Range |
|---|---|---|
| Graphite (spiral wound or sheet) | 2,000 psi | −300°F to 850°F |
| PTFE (full face) | 200 psi | −300°F to 450°F |
| Ring joint (metal) | Per ASME B16.20 | Per material grade |

---

### Hanger Spacing (Table 2)

| NPS | Water Service | Steam/Gas Service |
|---|---|---|
| 1 | 7 ft | 9 ft |
| 6 | 17 ft | 22 ft |
| 12 | 23 ft | 30 ft |
| 24 | 32 ft | 42 ft |

---

### Flexibility Requirements

| Condition | Flexibility Analysis Required? |
|---|---|
| T ≤ 150°F | No (inherent flexibility assumed) |
| T ≤ 250°F | No (simplified methods adequate) |
| T > 250°F | Formal analysis or conservative layout required |

---

### Cross-References

- ASME B31.1 (referenced for steam piping P-Specs)
- AWWA C100, C200 (cast iron and steel water pipe)
- MSS-SP-58 (pipe hangers and supports)
- AISC N690 (nuclear structural steel)
- NFPA (fire protection — excluded from this guide)
- ASTM A53/A106, API 594/600 (material and valve references)

---

## 4. ASME B31.3 Code Cases

### Document Information

| Field | Detail |
|---|---|
| **Full Title** | ASME B31.3 Code Cases |
| **Publisher** | ASME International |
| **New Cases** | http://cstools.asme.org/csconnect/CommitteePages.cfm?CommitteepN10020400 |

Code Cases provide alternative rules or allowances not currently in the main Code. Once incorporated into the Code, the case is annulled.

---

### Case 180 — Leak Testing of Jacketed Piping Subassemblies

**Approved:** January 5, 2007  
**Applies to:** Para. 345.2.2(a), 345.3.1, 345.1, 345.8

**Rule:** Visual examination of joints is **not** required, provided:
1. The joints are on the **inner pipe** of jacketed piping, AND
2. A standard leak test per Para. 345.1 is performed, AND
3. A sensitive leak test per Para. 345.8 is performed to verify weld tightness

**Practical use:** Allows acceptance of inner pipe welds that are inaccessible for visual inspection once jacketing is installed, as long as leak tests confirm integrity.

---

### Case 181 — Alternative UT Acceptance Criteria (t ≥ 25 mm)

**Approved:** January 4, 2012  
**Applies to:** Para. 344.6.2, ASME BPV Section V Article 4

**Requirements:**
- Applies only to wall thickness ≥ **25 mm (1.0 in.)**
- Must use **automated or semi-automated computer-based data acquisition**
- Acceptable UT methods: **Phased Array (App. V)** or **Time-of-Flight Diffraction (TOFD, App. III)**
- Procedure approval by **Level III**; interpretation by **Level II or Level III**

**Investigation thresholds:**
- Amplitude-based: Investigate indications > 20% of reference level
- Non-amplitude (TOFD): Investigate indicated lengths > **4.0 mm**

**Maximum flaw length (regardless of aspect ratio):** ≤ 4t

**Acceptance Table Summary — Surface Flaws (h/t ratio by thickness):**

| Wall Thickness (mm) | Max h/t (aspect a/l = 0.1) | Max h/t (aspect a/l = 0.3) |
|---|---|---|
| 25 | 0.031 | 0.062 |
| 38 | 0.050 | 0.075 |
| 50 | 0.065 | 0.087 |
| 64+ | Per detailed table | Per detailed table |

**Acceptance Table Summary — Subsurface Flaws:**

| Wall Thickness (mm) | Max h/t (shallow) | Max h/t (deep) |
|---|---|---|
| 25 | 0.068 | 0.121 |
| 50 | 0.143 | 0.286 |
| 64+ | Per detailed table | Per detailed table |

---

### Case 185 — Helium Mass Spectrometer Leak Test Under Vacuum

**Approved:** December 22, 2009  
**Applies to:** Para. 345

**Rule:** Helium mass spectrometer leak test under vacuum may **substitute** for all Para. 345 pressure test requirements, provided:
1. System operates **only under vacuum** (no positive pressure service)
2. Test performed per ASME BPV Section V, Article 10, Appendices V and IX
3. Test pressure is **< 10 mbar absolute**

**Record retention:** Test reports must be retained for **≥ 5 years**.

---

### Case 188 — Minimum Hydrostatic Test Pressure for Chapter IX (Annulled)

**Approved:** June 9, 2014  
**Annulled:** February 27, 2015  
**Reason for annulment:** Rules incorporated directly into the main Code body.

---

### Case 191 — Cu–Zn–Ni–Si–Al Alloy UNS C69100

**Approved:** January 21, 2015  
**Material:** Copper alloy UNS C69100 (Cu–13Zn–1.1Ni–Si–Al), seamless pipe/tube per ASTM B706-00

**Limitations:**
- Maximum use temperature: **204°C (400°F)**
- **No welded or brazed construction** permitted

**Allowable Stress:**

| Temperature Range | Allowable Stress |
|---|---|
| 40–200°C (104–392°F) | 138 MPa (20.0 ksi) |

---

### Case 193 — Cu–Zn–Si Casting Alloy UNS C87600

**Approved:** October 9, 2014  
**Material:** Copper alloy UNS C87600 (Cu–5.5Zn–4Si) castings per ASTM B584

**Limitations:**
- Maximum use temperature: **177°C (350°F)**
- Casting quality factor Ec required per Appendix A
- Separate WPS/PQR per ASME Section IX required

**Allowable Stress:**

| Temperature Range | Allowable Stress |
|---|---|
| 40–175°C (104–347°F) | 138 MPa (20.0 ksi) |

---

## 5. ASME B31.3 Interpretations — Volumes 7–24

### Document Information

| Field | Detail |
|---|---|
| **Full Title** | ASME B31.3 Interpretations, Volumes 7–24 |
| **Editions Covered** | B31.3-1987 through B31.3-2012 |
| **File Size** | 5.86 MB |
| **Structure** | Committee replies to formal technical inquiries; numerical and subject indexes |

> **Disclaimer:** Interpretations reflect the Committee's views on specific code language. They are not Code revisions and do not have the force of a Code edition. They do not imply ASME approval or endorsement beyond the specific inquiry.

---

### Volume 24 Interpretations (B31.3-2010/2012)

| Interp. No. | Subject | Reply |
|---|---|---|
| 24-01 | Table 323.2.2 Note (3) exception: specimen size in Note (5) not required | **No** |
| 24-02 | Radiography required on fillet welds | **No** |
| 24-04 | Fig. 323.2.2B applicability to ASME BPV impact-tested materials / B31T | Not mandatory; not applicable to UNS S31803 duplex SS |
| 24-05 | EPC contractor as Owner's Inspector | **No** (confirmed twice) |
| 24-06 | Chapter IX: separate WPS required for each base material spec | **Yes** |
| 24-06 | Joint of two different specs qualifies each spec to itself | **No** |
| 24-07 | Visual exam personnel qualification for leak testing | All: **No** (standard exam requirements apply) |
| 24-10 | Instrument tap branches per UW-15(b)/UW-16 need not comply with 328.5.4 | See Para. 300(c)(3) |
| 24-11 | Pneumatic test at > 1.33 × design pressure permitted | **No** (not permitted) |
| 24-12 | W = 0.5 for Grade 91 (P91 CrMo) at 950°F | **Yes** |
| 24-13 | Chapter IX compliance required unless Owner-specified (K300(a)) | Not automatic for > Class 2500 |
| 24-16 | Relief devices meeting 322.6.3 but not API 526 are "unlisted" per 302.2.3 | **Yes** |
| 24-20 | Random examination prohibits examining before all lot welds complete | **No** (random exam may proceed incrementally) |
| 24-25 | Closure welds without leak test permitted | **No** (not permitted) |

---

### Selected Earlier Notable Interpretations

| Interp. No. | Volume | Subject | Key Ruling |
|---|---|---|---|
| 6-03R | 6 | Sustained stress SL limit (Para. 302.3.5) | Confirms SL must be evaluated against Sh alone |
| 9-02 | 9 | Category M definition and intent | Highly toxic; single exposure criterion |
| 16-12 | 16 | Intent of Para. 300(c)(3) | Owner retains responsibility when alternate methods used |
| 16-14 | 16 | Para. 304.1.1: D/6 limit for thin-wall formula | D/6 triggers alternative calculation method |
| 22-06 | 22 | Category D definition (Para. 300.2) | All three criteria must be met simultaneously |

---

### Field Application Notes

1. **24-05 (EPC as Owner's Inspector):** An EPC contractor cannot serve as Owner's Inspector. The Owner must appoint a qualified independent inspector. Critical for project contract structures.
2. **24-11 (pneumatic test limit):** Maximum pneumatic test pressure is 1.33 × design pressure per Para. 345.5. No exceptions.
3. **24-12 (P91 weld strength):** The W = 0.5 factor for Grade 91 at 950°F is code-confirmed. This is not a conservative interpretation — it is the minimum.
4. **24-25 (closure welds):** Closure welds must be included in leak test. There is no exception for piping that was otherwise previously tested.
5. **22-06 (Category D):** All three conditions (pressure, temperature, fluid type) must be met simultaneously. Failing any one criterion moves the service to Normal category.

---

## 6. Megger Guide to Insulation Testing

### Document Information

| Field | Detail |
|---|---|
| **Full Title** | A Stitch in Time — The Complete Guide to Electrical Insulation Testing |
| **Publisher** | Megger (www.megger.com) |
| **Copyright** | 2006 |
| **Scope** | Motors, generators, cables, switches, transformers; insulation theory, test methods, interpretation, maintenance programs |

---

### Insulation Deterioration Mechanisms

Primary failure modes addressed:
1. **Thermal aging** — breakdown of insulation binder at elevated temperatures
2. **Moisture absorption** — ionic conduction paths reduce resistance
3. **Physical damage** — vibration, impact, abrasion
4. **Chemical attack** — oil, process fluids, solvents
5. **Electrical stress** — partial discharge and corona over time
6. **Contamination** — conductive dust, carbon tracking

---

### Test Types and Methods

#### 1. Spot-Reading Test
- **Duration:** 60 seconds (standard)
- **Result:** Resistance in megohms
- **Use:** Quick go/no-go check; does not reveal moisture vs. contamination distinction

#### 2. Time-Resistance (Dielectric Absorption) Test
- **Duration:** Successive readings at 30s and 60s; or 1 min and 10 min
- **Principle:** Good insulation shows continuously rising resistance over time; moisture-contaminated insulation shows flat or declining curve
- **Output:** DAR or PI ratio (see below)

#### 3. Step-Voltage (Multi-Voltage) Test
- **Method:** Apply voltage in steps (e.g., 500V then 2,500V)
- **Interpretation:** If resistance drops > 25% at higher voltage step, indicates moisture or surface contamination
- **Preferred voltage ratio:** 1:5 (low step to high step)

---

### Polarization Index (PI) and Dielectric Absorption Ratio (DAR)

$$\text{PI} = \frac{R_{10\,\text{min}}}{R_{1\,\text{min}}}$$

$$\text{DAR} = \frac{R_{60\,\text{sec}}}{R_{30\,\text{sec}}}$$

**Acceptance Criteria:**

| Insulation Condition | DAR (60s / 30s) | PI (10 min / 1 min) |
|---|---|---|
| Dangerous | < 1.0 | — |
| Questionable | 1.0 – 1.25 | 1.0 – 2.0 |
| Good | 1.4 – 1.6 | 2.0 – 4.0 |
| Excellent | > 1.6 | > 4.0 |

> Note: PI criteria are used for rotating machinery and larger equipment. DAR is used for smaller equipment or quick-check applications.

---

### Test Voltage Selection

| Equipment Rated Voltage (AC) | Recommended DC Test Voltage |
|---|---|
| Up to 100V AC | 100V or 250V DC |
| 440–550V AC | 500V or 1,000V DC |
| 2,400V AC | 1,000–2,500V DC |
| 4,160V AC and above | 1,000–5,000V DC or higher |

---

### Minimum Acceptable Insulation Resistance

**One-Megohm Rule (general):**
$$R_{min} \approx 1\,\text{M}\Omega \text{ per 1,000V operating voltage, minimum 1 M}\Omega$$

**Rotating Machinery (IEEE standard):**
$$R_m = (kV + 1)\,\text{M}\Omega \quad \text{at 40°C}$$

Where kV = machine rated voltage in kilovolts.

**Bushings:**
> 10,000 MΩ at 20°C

**Transformers:**
$$R = C \times \frac{E}{\sqrt{kVA}}\,\text{M}\Omega$$

| Transformer Type | C (coefficient) |
|---|---|
| Tanked, oil-filled | 1.5 |
| Untanked (or dry-type, oil exposure) | 30 |
| Dry-type | 30 |

**Cables:**
$$R = K \times \log_{10}\!\left(\frac{D}{d}\right)\,\text{M}\Omega/1{,}000\,\text{ft}$$

Where D = insulation OD, d = conductor OD, K = material constant per ICEA.

---

### Temperature Correction

**Rule:** Resistance **halves** for every +10°C increase; **doubles** for every −10°C decrease above or below base temperature.

**Reference temperatures:**
- Rotating machinery and transformers: **20°C**
- Cables: **15.6°C**

**Conversion table (Table II — excerpt):**

| Temp (°C) | Multiplier to correct to 20°C |
|---|---|
| 0 | × 0.25 |
| 10 | × 0.50 |
| 20 | × 1.00 (base) |
| 30 | × 2.00 |
| 40 | × 4.00 |
| 50 | × 8.00 |
| 60 | × 16.0 |
| 70 | × 32.0 |

> Always correct measured values to the reference temperature before comparing to acceptance criteria or historical records.

---

### Proof Test Voltages — Rotating Equipment

| Test Stage | Formula |
|---|---|
| Factory AC proof test | 2 × Nameplate voltage + 1,000V |
| DC proof test on installation (new) | 0.8 × Factory AC × 1.6 |
| DC proof test after service | 0.6 × Factory AC × 1.6 |

---

### Megger Instrument Reference

| Model | Voltage Range | Max Range | Features |
|---|---|---|---|
| MIT510/520 | 50V – 5 kV | 15 TΩ | PI, DAR, Step Voltage (SV), auto |
| MIT1020 | 50V – 10 kV | 35 TΩ | PI, DAR, SV; IP65 rated |
| MIT400 series | 10V – 1,000V | 200 GΩ | General purpose |
| MIT300/MIT200 | 50V – 1,000V | Per model | Entry-level |

---

### Safety Procedures

1. **Never test live equipment.** Isolate and lock out/tag out before connecting.
2. **Discharge capacitance** after test: hold discharge for at least **4× the test duration** (e.g., 60-sec test → 4-min discharge minimum).
3. Use the **Guard terminal** to eliminate surface leakage currents from test measurements (especially on contaminated surfaces or at high humidity).
4. Verify test leads are in good condition; damaged leads introduce measurement error.

---

### Maintenance Testing Program

**Recommended intervals:**
- **Working motors/generators:** Test every **6–12 months**
- **Building wiring:** Test yearly
- **Critical service:** Before every major startup after outage

**Record-keeping requirements per test:**
- Equipment ID and rating
- Date and test duration
- Ambient temperature and relative humidity
- Corrected resistance value (to reference temperature)
- Trend against previous readings

> A single reading is only a snapshot. Trend analysis over multiple tests is the primary diagnostic tool.

---

### Referenced Standards

- **IEEE:** Recommended Practices for Testing Insulation Resistance of Rotating Machinery
- **ICEA:** Minimum insulation resistance specifications for cables
- **NEMA MG-1:** Motor and generator standards (referenced for rotating equipment proof voltage)

---

## 7. RAE 17739 — GE Energy Site Work Report (Motor Preservation)

### Document Information

| Field | Detail |
|---|---|
| **File Name** | RAE 17739.pdf |
| **Internal Report Numbers** | RAE 12670 / Site Work Report 17736 |
| **Author** | Thierry BOITEL, Field Service Engineer |
| **Organization** | GE Energy Power Conversion, Champigneulles, France |
| **Site Work Dates** | January 20–22, 2016 |
| **Report Date** | January 25, 2016 |
| **Client** | GE MASSY / GE Nuevo Pignone Massa, Italy |
| **Job Number** | 15D609 / AA4759 |
| **Proprietary Notice** | GE Energy Power Conversion property — cannot be used without GE ENERGY PC agreement |

---

### Scope

Supervision of preservation procedure for a large AC motor before packaging for shipment. Motor Item 14A042, type N12HXCP 900 LL/2.

---

### Motor Specifications

| Parameter | Value |
|---|---|
| Type | N12HXCP 900 LL/2 |
| Serial Number | 14A042 |
| Power | 15,000 kW |
| Voltage | 8,200 V |
| Current | 1,253 A |
| Power Factor | 0.87 |
| Speed | 3,600 RPM |
| Frequency | 60.2 Hz |
| Connection | STAR (Y), 3-phase |

---

### Findings on Arrival

1. **5 mm of standing water** on the bottom of the motor casing (Drive End side), discovered after removing the hydro-cooler assembly
2. **Superficial corrosion** on external stator lamination surfaces (visible rust)
3. **Water ingress source identified:** Rain water entered through cooler seal gaps during outdoor string testing — foam seals were not contacting all four corners of the cooler frame

---

### Remediation Actions

| Step | Action Performed |
|---|---|
| 1 | Removed standing water from motor interior |
| 2 | Dried motor with 40°C forced-air blower heater for 24 hours |
| 3 | Soft-polished external stator core lamination (removed surface corrosion) |
| 4 | Removed all damaged/deformed foam seals |
| 5 | Polished motor top mating surfaces |
| 6 | Performed stator insulation resistance test (Megger) |
| 7 | Cleaned shaft corrosion (mechanical polishing) |
| 8 | Boroscopic inspection of motor interior |
| 9 | Applied Tectyl Valvoline 506 to stator lamination and all machined surfaces |

---

### Insulation Test Results

**Instrument:** Megger BM11D  
**Test Voltage:** 5 kV DC  
**Configuration:** 3-phase (each phase tested to ground)

| Test Duration | Insulation Resistance |
|---|---|
| 1 minute | 15.3 GΩ |
| 5 minutes | 74 GΩ |
| 10 minutes | 178 GΩ |

$$\text{PI} = \frac{178\,\text{G}\Omega}{15.3\,\text{G}\Omega} = \mathbf{11.63}$$

**Assessment:** PI = 11.63 → **Stator dry and healthy; insulation within acceptance**

**PI Scale Applied:**

| PI Value | Condition |
|---|---|
| ≤ 1.5 | Very low (wet/severely contaminated) |
| 1.5 – 2.0 | Contaminated or wet |
| 2.0 – 4.0 | Clean and dry |
| > 4.0 | Very clean and dry |

PI = 11.63 is well above the "very clean and dry" threshold.

---

### Preservation Procedure (per IP 806 E)

| Component | Preservation Action |
|---|---|
| Bearing oil (DE and NDE) | Drained completely |
| Bearing surfaces | Sprayed with **Tectyl 511** rust preventive |
| Shaft | Protected with **Tectyl 506** + oil-impregnated protective paper |
| Shaft | **Locking beam** installed to prevent rotation during transport |
| HV connection box | Dismantled, dried, sealed |
| All openings (ventilation, piping connections) | Plugged with caps/covers |
| Cooler frame seals | Replaced with new seals ensuring full perimeter contact |
| Stator lamination | **Tectyl 506** applied uniformly |
| Machined surfaces | **Tectyl 506** applied |

---

### Conclusion

Motor Item 14A042 (N12HXCP 900 LL/2, 15,000 kW) was found with water ingress and surface corrosion due to inadequate sealing during outdoor string testing. All water was removed, corrosion treated, and insulation confirmed healthy (PI = 11.63). Full preservation per procedure IP 806 E was completed. **Motor declared ready for packaging and shipment.**

---

### Field Application Notes

1. **PI > 4 is the minimum "acceptable" threshold** for large high-voltage motors. PI = 11.63 provides high confidence; any value below 2.0 requires remediation before packaging.
2. **Tectyl 506 vs. Tectyl 511:** Tectyl 506 is a waxy film preservative for machined metal surfaces. Tectyl 511 is a spray-applied oil film for interior bearing surfaces and cavities.
3. **Shaft locking:** Mandatory for transport to prevent brinelling (false Brinell marks) on bearing races due to vibration during shipping.
4. **Water ingress prevention:** When performing outdoor string tests on large machines, verify all cooler and enclosure seals are fully seated — particularly at corners where foam seals tend to lift.
5. **Test before preservation:** Always complete insulation resistance testing *before* applying preservatives to avoid trapping moisture under coatings.

---

*End of Blackbook Batch 2 — ASME B31 Piping & Electrical Summaries*  
*Compiled for OperaMech.ai Engineering Knowledge Base*  
*Source files: LANL ASME B31.3 Guide Rev. 2 (2009), ASME B31.1-2020, ASME B31.3-2020, ASME B31.3 Code Cases, ASME B31.3 Interpretations Vols. 7–24, Megger "A Stitch in Time" (2006), GE Energy Site Work Report RAE 17739 (2016)*

================================================================================
SECTION 5: ASME/ISO/NEMA HANDBOOKS
Source: blackbook_asme_iso_handbooks.md
================================================================================

# Engineering Blackbook — ASME / ISO / Handbooks Comprehensive Summary

**Compiled:** 2026-04-19  
**Source collection:** OneDrive — '04. ENGINEERING BLACKBOOK'  
**Purpose:** Chatbot knowledge base covering turbomachinery, rotating equipment, materials, lubrication, contamination, and engineering reference data.

---

## Table of Contents

1. [ASME B31.3 — Process Piping (2021)](#1-asme-b313--process-piping-2021)
2. [ASME PCC-1-2013 — Bolted Flange Joint Assembly](#2-asme-pcc-1-2013--bolted-flange-joint-assembly)
3. [GEK 111517 — GT Performance Test Philosophy (ASME PTC 22 equivalent)](#3-gek-111517--gt-performance-test-philosophy-asme-ptc-22-equivalent)
4. [ISO 10441 — Flexible Couplings for Mechanical Power Transmission](#4-iso-10441--flexible-couplings-for-mechanical-power-transmission)
5. [NEMA MG1 — Motors and Generators (2024)](#5-nema-mg1--motors-and-generators-2024)
6. [Fluid Condition Handbook — MP Filtri UK](#6-fluid-condition-handbook--mp-filtri-uk)
7. [Guide to Oil Contamination Standards — Parker Hannifin](#7-guide-to-oil-contamination-standards--parker-hannifin)
8. [Guide to Electric Motor Lubrication — Exxon](#8-guide-to-electric-motor-lubrication--exxon)
9. [Classi Contaminazione NAS / Lube Oil Flushing — SIC00006 (Nuovo Pignone / BHGE)](#9-classi-contaminazione-nas--lube-oil-flushing--sic00006-nuovo-pignone--bhge)
10. [CRC Handbook for Engineering Tables](#10-crc-handbook-for-engineering-tables)
11. [Handbook of Industrial Engineering Equations, Calculations and Formulas](#11-handbook-of-industrial-engineering-equations-calculations-and-formulas)
12. [Standard Handbook of Machine Design](#12-standard-handbook-of-machine-design)
13. [Atlas Technical Handbook — Atlas Steels (Aug 2013)](#13-atlas-technical-handbook--atlas-steels-aug-2013)
14. [Outokumpu Stainless Steel Handbook](#14-outokumpu-stainless-steel-handbook)
15. [Technical Dictionary — Weidmüller](#15-technical-dictionary--weidmüller)
16. [Engineering Reference Handbook (NCEES FE) — Conversion Tables](#16-engineering-reference-handbook-ncees-fe--conversion-tables)
17. [Pressure Conversion Data (from CRC / NCEES reference)](#17-pressure-conversion-data-from-crc--ncees-reference)
18. [Table of Total Emissivity — Monarch Instrument / OMEGASCOPE](#18-table-of-total-emissivity--monarch-instrument--omegascope)
19. [Shaft Alignment Guide — PRUFTECHNIK (ROT Machinery Alignment)](#19-shaft-alignment-guide--pruftechnik-rot-machinery-alignment)
20. [Methods for Reconditioning Silica Gel — AIC / Steven Weintraub](#20-methods-for-reconditioning-silica-gel--aic--steven-weintraub)

---

## 1. ASME B31.3 — Process Piping (2021)

**File:** 'ASME B31.3.pdf' | 12.5 MB | ID: EE3702398775304E!558125  
**Edition:** 2021  
**Standard body:** ASME

### Scope
Governs piping in petroleum refineries, chemical/pharma/cryogenic/heat transfer plants, onshore and offshore hydrocarbon production, terminals and transfer. Covers design, materials, fabrication, inspection, examination, testing.

### Fluid Service Categories
| Category | Description |
|----------|-------------|
| Normal | General process service |
| D | P ≤ 1,035 kPa (150 psi); T ≤ 186°C (366°F); non-flammable, non-toxic |
| M | Highly toxic; single failure could cause irreversible harm |
| High Pressure (HP) | Chapter IX; exceeds ASME B16.5 Class 2500 |

### Key Design Formula — Pipe Wall Thickness
'''
t = P·D / (2·S·E·W − 2·Y·P)
'''
Where: P = design pressure; D = outside diameter; S = allowable stress (from Table A-1/A-1M); E = longitudinal weld quality factor; W = weld joint strength factor (Table 302.3.5); Y = coefficient (0.4 for T < 482°C ferrite, 0.3 for austenitics).

### Allowable Stress (S)
Lowest of:
- 1/3 of specified minimum tensile strength (ST)
- 2/3 of specified minimum yield strength
- 100,000-hr creep rupture strength ÷ 1.5

### Displacement Stress Range
'''
SA = f(1.25Sc + 0.25Sh)
'''
or, if Sh > SL:
'''
SA = f[1.25(Sc + Sh − SL)]
'''
Where: f = stress range factor; Sc = cold allowable; Sh = hot allowable; SL = sustained longitudinal stress.

### Key Tables
| Table | Content |
|-------|---------|
| A-1 / A-1M | Allowable stresses vs. temperature for all listed materials |
| C-1 / C-1M | Thermal expansion coefficients vs. temperature |
| C-6 / C-6M | Moduli of elasticity vs. temperature |
| 302.3.5 | Weld joint strength factors (W) |

### Turbomachinery Relevance
Directly governs all process piping connected to compressors, turbines, heat exchangers, and pressure vessels. Essential for nozzle load calculations, flexibility analysis, and branch reinforcement design. The displacement stress formula prevents fatigue at equipment nozzle connections.

---

## 2. ASME PCC-1-2013 — Bolted Flange Joint Assembly

**File:** 'ASME PCC-1-2013.pdf' | 2.05 MB | ID: EE3702398775304E!540325  
**Edition:** 2013

### Scope
Guidelines for assembly of pressure boundary bolted flange joints. Covers bolt-tightening sequences, target torque tables, gasket surface finish requirements, alignment tolerances, and documentation.

### Bolt Tightening Sequence (Single Tool, Table 2 Legacy Method)
| Pass | Target % | Pattern |
|------|----------|---------|
| Install | ≤ 20% | Snug only |
| Round 1 (R1) | 20–30% | Cross/star pattern |
| Round 2 (R2) | 50–70% | Cross/star pattern |
| Round 3 (R3) | 100% | Cross/star pattern |
| Round 4 (R4) | 100% | Circular, clockwise |
| Round 5 (optional, ≥4 hr after R4) | 100% | Circular, clockwise |

### Target Torque — SI (345 MPa bolt pre-stress)
| Bolt Size | Noncoated (N·m) | Coated (N·m) |
|-----------|-----------------|--------------|
| M16 | 160 | 130 |
| M20 | 350 | 250 |
| M24 | 550 | 450 |
| M100 | 48,500 | 36,700 |

### Target Torque — USC (50 ksi bolt pre-stress)
| Bolt Size | Noncoated (ft-lb) | Coated (ft-lb) |
|-----------|-------------------|----------------|
| ½" | 60 | 45 |
| ¾" | 210 | 160 |
| 4" | 38,000 | 28,800 |

### Gasket Surface Finish
| Gasket Type | Required Surface Finish |
|-------------|------------------------|
| Spiral-wound | 3.2–6.4 µm Ra (125–250 µin) |
| Grooved or flat metal | ≤ 1.6 µm Ra (63 µin) |

### Flange Alignment Tolerances
| Parameter | Maximum |
|-----------|---------|
| Centerline offset | ≤ 1.5 mm |
| Parallelism (gap difference) | ≤ 0.8 mm |

### Turbomachinery Relevance
Critical for lube oil system, seal gas, fuel gas, and process piping flanges on gas turbines, compressors, and steam turbines. Correct tightening sequence prevents leakage, gasket damage, and bolt overload.

---

## 3. GEK 111517 — GT Performance Test Philosophy (ASME PTC 22 equivalent)

**File:** 'GEK 111517_Performance Test.pdf' | 157 KB | ID: EE3702398775304E!530408  
**Document:** GEK 111517 | GE Energy | July 2006  
**Full title:** Standard Field Performance Testing Philosophy for Heavy Duty Gas Turbines in Mechanical Drive Applications

> **Note:** ASME PTC 22-1997 was not found as a standalone file in the blackbook. GEK 111517 is the GE equivalent standard for field performance testing of heavy-duty gas turbines in mechanical drive service, referencing ASME PTC 22 and PTC 19.7.

### Scope
Full-load (and partial-load) performance testing of GE heavy-duty gas turbines driving mechanical loads (compressors, pumps). A lower-cost alternative to full ASME PTC 22 compliance with defined, higher uncertainty bands.

### Performance Quantities of Interest
- Gas Turbine Shaft Power Output
- Gas Turbine Shaft Power Heat Rate
- GT Exhaust Gas Temperature
- GT Exhaust Gas Flow Rate
- GT Exhaust Gas Energy

### Power Measurement Methods
| Method | Technique |
|--------|-----------|
| Method 1 | Direct torque measurement (dynamometer or strain gauge on drive shaft) |
| Method 2 | Energy balance around driven load (measure P, T, flow across compressor/pump) |
| Method 3 | Energy balance around gas turbine (all energy flux in/out) |

### Measurement Uncertainties Table
| Parameter | Method 1 (Direct Torque) | Method 2 (Single-stage, low ΔT) | Method 2 (Multi-stage, high ΔT) | Method 3 (Gas fuel) | Method 3 (Oil fuel) |
|-----------|--------------------------|----------------------------------|----------------------------------|---------------------|---------------------|
| Power Output | ±2.2% | ±8.4% | ±2.5% | ±6.1% | ±5.6% |
| Heat Rate (gas) | ±2.0% | ±8.3% | ±2.3% | ±6.0% | ±5.5% |
| Heat Rate (oil) | ±1.8% | ±8.3% | ±2.1% | ±6.0% | ±5.4% |
| Exhaust Temperature | ±11°F | ±11°F | ±11°F | ±11°F | ±11°F |
| Exhaust Flow | ±3.0% | ±5.1% | ±3.1% | n/a | n/a |
| Exhaust Energy (gas) | ±3.1% | ±5.2% | ±3.2% | n/a | n/a |

### Key Test Conditions
- Gas turbine must be clean (compressor water wash completed) before test
- ≤ 24 fired hours after compressor cleaning before test commencement
- Unit considered "new" if < 100 fired hours; degradation correction applied beyond 100 fired hours
- Thermal stability verified via wheelspace temperature signals
- Test point: ½-hour averaging period
- Preparations (wash + instrumentation): 1–2 days
- Preliminary results: within 1 day of test completion

### Correction Factors Applied
- Inlet Air Temperature, Humidity, Barometric Pressure
- Water/Steam Injection Flow Rate
- Fired Hours (degradation)
- Rotational Speed, Fuel Temperature, Fuel Composition
- IGV Angle (partial load)
- Inlet/Exhaust system pressure differentials
- Inlet Bleed Heat (IBH) flow

### Precision Instruments Required
- Inlet air temperature (multiple sensors mandatory)
- Inlet air humidity, barometric pressure
- Compressor bellmouth differential pressure
- Compressor discharge pressure
- Exhaust system differential pressure
- Fuel gas: pressure + differential pressure at metering orifice
- Torque meters / dynamometers (Method 1)

### Turbomachinery Relevance
This is the foundational test protocol for commissioning performance acceptance tests of all GE Frame turbines (Frame 5, 6B, 7E, 9E, 7F, 9F, etc.) in mechanical drive service. Used to verify contractual performance guarantees for power output and heat rate.

---

## 4. ISO 10441 — Flexible Couplings for Mechanical Power Transmission

**File:** 'ISO 10441 Petroleum...pdf' | 2.26 MB | ID: EE3702398775304E!549751  
**Edition:** 2nd edition, 2007  
**Standard body:** ISO (TC 115)

### Scope
Special-purpose flexible couplings for petroleum, petrochemical, and natural gas industries. Covers design criteria, rating, misalignment, balancing, hub fit, and documentation.

### Service Factors (Minimum)
| Coupling Type | Minimum Service Factor |
|--------------|----------------------|
| Metallic flexible (disc, diaphragm) | ≥ 1.5 (reducible to 1.2 with detailed analysis) |
| Gear coupling | 1.75 |
| Quill shaft | 1.5 |

### Torque Calculation (SI)
'''
Tn = (9550 × Pnormal) / Nnormal
'''
Where: Tn = nominal torque (N·m); P = normal power (kW); N = speed (rpm).

### Misalignment Requirements
| Type | Minimum Capacity |
|------|-----------------|
| Angular | ≥ 0.2° per flexible plane |
| Axial (parallel/lateral offset) | ≥ ± shaft_diameter/125 |
| Min DBSE (Distance Between Shaft Ends) | 460 mm |

### Safety Factors
| Loading Condition | Minimum Safety Factor |
|-------------------|----------------------|
| Continuous operation (Goodman) | ≥ 1.25 (or 1.35 per Method B) |
| Peak torque vs. yield | ≥ 1.15 |

### Balancing
'''
Residual unbalance U = 6350 × m / N  (g·mm)
'''
Where: m = rotor mass (kg); N = operating speed (rpm).  
- Balance Methods 1/2/3 applied based on speed (Method 2/3 for > 1,800 rpm).

### Hub Fit Specifications
| Bore Type | Interference |
|-----------|-------------|
| Straight bore, keyed | 0.0005–0.00075 mm/mm (shaft diameter) |
| Hydraulic keyless fit (max) | 0.003 mm/mm |

### Turbomachinery Relevance
Mandatory reference for coupling selection, sizing, and acceptance criteria on all API 671-class turbomachinery trains (gas turbines, centrifugal compressors, steam turbines, pumps). Used alongside API 671 for procurement specifications.

---

## 5. NEMA MG1 — Motors and Generators (2024)

**File:** 'NEMA MG1.pdf' | 25.6 MB | ID: EE3702398775304E!s69bdbc21c7fc44e9910de810eb9bbd21  
**Edition:** ANSI/NEMA MG 00001-2024

### Scope
Covers requirements for AC and DC motors and generators: design, performance, construction, testing, rating. Applicable to motors from fractional to large (>500 HP).

### Insulation Thermal Classes
| Class | Max Winding Temperature (°C) |
|-------|------------------------------|
| A | 105 |
| B | 130 |
| F | 155 |
| H | 180 |
| N | 200 |

### Premium Efficiency Levels (≤ 600 V, Table 12-12)
Open enclosure, 6-pole motors:
| HP Range | Efficiency Range |
|----------|-----------------|
| Small to medium | 82.5–95.8% |

Enclosed enclosure, 6-pole motors:
| HP Range | Efficiency Range |
|----------|-----------------|
| Small to medium | 82.5–96.2% |

### Super Premium Efficiency (Table 12-23, 100–500 HP, ≤ 600 V)
6-pole motors: 95.0–96.8%

### Motor Design Letters
| Design | Characteristics |
|--------|----------------|
| A | General purpose |
| B | General purpose (most common) |
| C / CE | High starting torque |
| D | High slip (5–13%) |

### Medium Motor Boundary Definition
| Speed Range (rpm) | Max Power (HP) |
|-------------------|----------------|
| 1,201–3,600 | ≤ 500 HP |
| 901–1,200 | ≤ 350 HP |

### Turbomachinery Relevance
Used for specifying auxiliary motors (lube oil pumps, seal gas booster compressors, cooling fans, variable-speed drives). Insulation class selection is critical for ambient temperature and VFD applications.

---

## 6. Fluid Condition Handbook — MP Filtri UK

**File:** 'fluid_condition_handbook.pdf' | 5.2 MB | ID: EE3702398775304E!440208  
**Publisher:** MP Filtri UK Ltd

### Scope
Comprehensive guide to hydraulic and lubrication fluid cleanliness: ISO 4406 coding, NAS 1638, particle counting methods, flushing, water contamination, and viscosity.

### ISO 4406:1999 Cleanliness Scale
Each code number (N) represents a particle count range: 2^(N-1) to 2^N particles/mL.

| Scale Code | Particles/mL (more than) |
|------------|--------------------------|
| 14 | 80 |
| 15 | 160 |
| 16 | 320 |
| 17 | 640 |
| 18 | 1,300 |
| 19 | 2,500 |
| 20 | 5,000 |
| 21 | 10,000 |
| 22 | 20,000 |
| 23 | 40,000 |
| 24 | 80,000 |

Three-digit format: '>4µm(c) / >6µm(c) / >14µm(c)'  
Two-digit format: '>5µm / >15µm' (optical microscope)

### ISO 4406 to NAS 1638 Cross-Reference
| ISO Code | NAS Class |
|----------|-----------|
| 14/12/9 | 3 |
| 17/15/11 | 6 |
| 18/16/13 | 7 |
| 20/18/14 | 9 |

### NAS 1638 Particle Counts (particles per 100 mL, 5–15 µm channel)
| NAS Class | Count |
|-----------|-------|
| 00 | < 125 |
| 3 | 2,000 |
| 6 | 16,000 |
| 9 | 128,000 |
| 12 | 1,024,000 |

### Flushing Reynolds Number Formula
'''
Re = 21,220 × Q / (di × v)
'''
Where: Q = flow rate (L/min); di = pipe internal diameter (mm); v = kinematic viscosity (cSt).  
Turbulent flow requires Re > 4,000.

### Water Contamination Limits
| Condition | Water Content |
|-----------|--------------|
| Safe (mineral oil) | < 300 ppm |
| Hazy (saturation visible) | > 500 ppm |
| Target maximum | < 50% of saturation point |

### ISO Viscosity Grades
ISO 10, 15, 22, 32, 46, 68, 100, 150, 220, 320 (cSt @ 40°C, ±10% tolerance).

### Turbomachinery Relevance
Defines fluid cleanliness acceptance criteria for lube oil systems, hydraulic control systems, and seal oil systems. The ISO 4406 codes are directly referenced in GEK 110483b and API 614 for turbomachinery flushing acceptance.

---

## 7. Guide to Oil Contamination Standards — Parker Hannifin

**File:** 'Guide to Oil Contamination Standards.pdf' | 1.25 MB | ID: EE3702398775304E!440211  
**Publisher:** Parker Hannifin DD0000015 Rev-(05/2011)

### Scope
Full cross-reference tables for all major fluid cleanliness standards: ISO 4406:1999, NAS 1638, SAE AS4059 Rev E, GOST 17216-2001, NAV AIR 10-1A-17.

### NAS 1638 Complete Table (particles per 100 mL)
| Class | 5–15 µm | 15–25 µm | 25–50 µm | 50–100 µm | >100 µm |
|-------|---------|----------|----------|-----------|---------|
| 00 | 125 | 22 | 4 | 1 | 0 |
| 0 | 250 | 44 | 8 | 2 | 0 |
| 1 | 500 | 89 | 16 | 3 | 1 |
| 2 | 1,000 | 178 | 32 | 6 | 1 |
| 3 | 2,000 | 356 | 63 | 11 | 2 |
| 4 | 4,000 | 712 | 126 | 22 | 4 |
| 5 | 8,000 | 1,425 | 253 | 45 | 8 |
| 6 | 16,000 | 2,850 | 506 | 90 | 16 |
| 7 | 32,000 | 5,700 | 1,012 | 180 | 32 |
| 8 | 64,000 | 11,400 | 2,025 | 360 | 64 |
| 9 | 128,000 | 22,800 | 4,050 | 720 | 128 |
| 10 | 256,000 | 45,600 | 8,100 | 1,440 | 256 |
| 11 | 512,000 | 91,200 | 16,200 | 2,880 | 512 |
| 12 | 1,024,000 | 182,400 | 32,400 | 5,760 | 1,024 |

### Suggested Acceptable Cleanliness Levels
| System Type | ISO 4406 Code | NAS Class |
|-------------|---------------|-----------|
| Servovalves / critical systems | 16/14/11 | ≤ 5 |
| High quality hydraulic systems | 17/15/12 | ≤ 6 |
| Standard hydraulic systems | 18/16/13 | ≤ 7 |
| Large clearance systems | 21/19/16 | ≤ 10 |

### Key Contamination Facts
- Most damaging particles: **6–14 µm range** (near clearance dimensions of hydraulic components)
- Human eye resolution limit: ~40 µm (most contamination invisible)
- ISO cross-references also include BS 5540/4 and Defence Std. 05/42

### Turbomachinery Relevance
Complete reference for specifying, verifying, and reporting lube oil, hydraulic, and control oil cleanliness. NAS 6 (ISO 17/15/12) is the standard acceptance criterion for GE heavy-duty turbine lube oil systems (per SIC00006).

---

## 8. Guide to Electric Motor Lubrication — Exxon

**File:** 'Guide to Electric Motor Lubrication Exxon.pdf' | 949 KB | ID: EE3702398775304E!440201  
**Publisher:** ExxonMobil (Mobil product line)

### Scope
Guidelines for grease selection, relubrication intervals, and quantities for electric motor bearings.

### Grease Specification
| Property | Requirement |
|----------|-------------|
| NLGI Grade | 2 (standard); Grade 3 where dN > 250,000 |
| Base oil viscosity | 110–140 cSt @ 40°C |
| Dropping point | ≥ 204°C (400°F) |

**dN factor** = bore diameter (mm) × speed (rpm)

### Relubrication Frequency Formula
'''
Freq (hours) = [14,000,000 / (rpm × ID^0.5)] − 4·ID × F_bearing × F_temp × F_contam
'''
Where ID = bearing bore (mm); correction factors:

| Factor | Condition | Value |
|--------|-----------|-------|
| F_bearing | Ball bearing | 10.0 |
| F_bearing | Cylindrical roller | 5.0 |
| F_bearing | Spherical / thrust | 1.0 |
| F_temp | < 160°F (71°C) | 1.0 |
| F_temp | > 160°F, each 20°F increase | Divide by 2 |
| F_contam | Clean, dry | 1.0 |
| F_contam | Severe contamination | 0.1–0.5 |

### Grease Quantity Formula
'''
Grease (grams) = OD (mm) × Width (mm) × 0.005
'''

### EASA Bearing Grease Table (selected)
| Bearing No. | Grease per Relubrication (oz) |
|------------|-------------------------------|
| 203 | 0.08 |
| 210 | 0.40 |
| 216 | 0.80 |
| 222 | 1.66 |
| 316 | 1.24 |
| 319 | 1.66 |

### EPRI NP-7502 Relubrication Intervals (selected)
| Speed (rpm) | Power | Ambient | Interval |
|-------------|-------|---------|----------|
| 3,600 | > 100 HP | < 140°F | 6–9 months |
| 1,800 | Any | < 140°F | 12–18 months |
| 1,200 | < 100 HP | < 140°F | 36–54 months |

### Oxidation Rate
Grease oxidation doubles every **18°F (10°C)** above 120°F (49°C) — basis for temperature correction.

### Turbomachinery Relevance
Directly applicable to all auxiliary motor bearings (lube oil pumps, cooling fans, compressor inlet guide vane actuators, seal gas booster compressors). Prevents premature bearing failure from under- or over-lubrication.

---

## 9. Classi Contaminazione NAS / Lube Oil Flushing — SIC00006 (Nuovo Pignone / BHGE)

**File:** 'SIC00006_A_8.pdf' | 2.7 MB | ID: EE3702398775304E!545895  
**Publisher:** Nuovo Pignone Tecnologie S.r.l. (Baker Hughes, a GE company) | Revision 8, June 2018  
**Full Title:** General Notes for Lube Oil System Flushing

### Scope
Defines procedures and acceptance criteria for flushing lube oil (LO) systems on GE/BHGE turbomachinery: gas turbines (HD and aeroderivative), steam turbines, centrifugal compressors, electric generators, electric motors. Covers interconnecting piping fabricated at site.

### Cleanliness Acceptance Criteria (Table 3)
| Equipment Type | ISO 4406:1999 Code | NAS 1638 Class |
|----------------|-------------------|----------------|
| HD Gas Turbine, centrifugal compressor, electric generator/motor, steam turbine: LO systems | **17/15/12** (3-digit) or **15/12** (2-digit) | **NAS Class 6** |
| AD Gas Turbine synthetic LO | Per SIC00119 | — |
| Reciprocating compressors | Per SIC00045 | — |

### ISO 4406 Reading Examples
| Code | Meaning |
|------|---------|
| 15/12 (2-digit) | ≤ 320 particles ≥5 µm/mL; ≤ 40 particles ≥15 µm/mL |
| 17/15/12 (3-digit) | ≤ 1,300 particles >4µm(c)/mL; ≤ 320 >6µm(c)/mL; ≤ 40 >14µm(c)/mL |

### Flushing Minimum Flow Rates (Table 5, ISO VG32)
| Pipe Diameter | Flow @ 40°C [L/min (gpm)] | Flow @ 70°C [L/min (gpm)] |
|---------------|--------------------------|--------------------------|
| 6" / 152.4 mm | 924 (245) | 284 (75) |
| 4" / 101.6 mm | 616 (164) | 189 (50) |
| 3" / 76.2 mm | 462 (123) | 142 (37) |
| 2" / 50.8 mm | 308 (82) | 95 (25) |
| 1.5" / 38.1 mm | 231 (61) | 71 (19) |
| 1" / 25.4 mm | 154 (41) | 47 (12) |

### Flushing Temperature
- Recommended: **65–70°C minimum**; best practice: **70–80°C**
- Temperature cycling improves removal of adherent deposits

### Pump Discharge Pressure
- Centrifugal pumps: within rated operating range
- Positive displacement pumps: > 3–3.5 barg minimum

### Water Limit
- ≤ 0.05% wt (< 200 ppm); Vorecon: 100 ppm

### Verification
- Particle count sample: downstream of filters, near last bearing feed
- Tank sample (circulating oil)
- Intermediate check: 100-mesh screen (per API 614 para 4.3.3.7.1)
- Final acceptance: particle count + chemical/physical oil analysis certificate

### Reference Standard
GEK 110483b — Cleanliness Requirements for Power Plant Installation, Commissioning, and Maintenance

### Turbomachinery Relevance
This is the primary GE/BHGE field procedure for all turbomachinery lube oil system commissioning. It directly defines what must be achieved (NAS 6 / ISO 17/15/12) before equipment startup is permitted.

---

## 10. CRC Handbook for Engineering Tables

**File:** 'CRC Handbook for Engineering Tables.pdf' | 14.6 MB | ID: EE3702398775304E!440140

### Scope
Comprehensive engineering reference: physical constants, unit conversions, steam tables, thermodynamic data, material properties, fluid properties.

### Fundamental Physical Constants
| Constant | Value |
|----------|-------|
| Speed of light (c) | 2.998 × 10⁸ m/s |
| Universal gas constant (R₀) | 8.31434 J/(kmol·K) |
| Boltzmann constant (k) | 1.381 × 10⁻²³ J/K |

### Unit Conversions (Key Values)
| From | To | Factor |
|------|----|--------|
| 1 Btu | J | 1,055.056 |
| 1 lbf | N | 4.448 |
| 1 HP | W | 745.7 |
| 1 ft | m | 0.3048 |
| 1 BTU/h·ft·°F | W/m·K | 1.730735 |

### Thermal Conductivity of Materials (W/m·K)
| Material | k (W/m·K) |
|----------|-----------|
| Silver | 419 |
| Copper | 395 |
| Aluminum | 156 |
| Lead | 32 |
| Stainless steel (approx.) | 16 |

### Water Properties at 100°C
| Property | Value |
|----------|-------|
| Density (ρ) | 958.4 kg/m³ |
| Dynamic viscosity (µ) | 0.682 × 10⁻⁴ N·s/m² |
| Thermal conductivity (k) | 0.678 W/m·K |

### Steam Tables (Saturated Steam at 212°F / 100°C)
| Property | Value |
|----------|-------|
| Pressure | 14.696 psia |
| Specific volume | 26.80 ft³/lb |
| Enthalpy (hg) | 1,150.4 Btu/lb |
| Entropy (sg) | 1.7566 Btu/lb·°R |

### Turbomachinery Relevance
Essential reference for heat transfer calculations (lube oil coolers, surface temperatures), thermodynamic steam cycle analysis, and material selection (thermal conductivity). The steam tables support steam turbine engineering.

---

## 11. Handbook of Industrial Engineering Equations, Calculations and Formulas

**File:** 'Handbook of Industrial Engineering, Equation, Calculations and Formulas.pdf' | 4.5 MB | ID: EE3702398775304E!440146

### Scope
General industrial engineering formulas: mathematics, kinematics, simple machines, engineering economics, quality control, production formulas, queuing theory.

### Key Formulas

#### Kinematics
'''
s = v₀t + ½at²          (linear displacement)
v = rω                   (tangential velocity)
a_t = rα                 (tangential acceleration)
'''

#### Learning Curve
'''
Ax = C₁ × x^b
b = log(p) / log(2)
'''
Where: p = learning rate (e.g., 0.80 for 80% curve); x = unit number.

#### Engineering Economics
- Simple interest: 'I = Prt'
- Compound interest: 'F = P(1 + i)^n'
- Continuous compounding: 'F = Pe^(rn)'
- EOQ: 'Q* = √(2DS/H)'
- Straight-line depreciation: 'd = (C - Sv) / n'

#### Quality Control (Control Charts)
| Constant | D₂ | A₂ | D₃ | D₄ |
|----------|----|----|----|-----|
| n=2 | 1.128 | 1.88 | 0 | 3.267 |
| n=5 | 2.326 | 0.577 | 0 | 2.114 |

Process capability:  
'Cp = (USL − LSL) / (6σ)' and 'Cpk = min[(USL − x̄), (x̄ − LSL)] / (3σ)'

#### M/M/1 Queuing
'''
ρ = λ/µ
L = ρ/(1−ρ)
W = 1/(µ−λ)
'''

### Turbomachinery Relevance
Limited direct turbomachinery content. Useful for production planning, project economics, quality control of manufacturing/maintenance processes, and reliability analysis.

---

## 12. Standard Handbook of Machine Design

**File:** 'Standard Handbook of Machine Design.pdf' | 67.8 MB | ID: EE3702398775304E!440223  
**Publisher:** McGraw-Hill

### Scope
Comprehensive mechanical design reference: stress analysis, fatigue, bearing selection, gear design, fasteners, springs, couplings, lubrication.

### Stress Analysis Formulas

#### Von Mises Criterion (surface)
'''
σ' = √(σx² + 3τxy²)
'''

#### ASME-Elliptic Fatigue Criterion
'''
(σa/Se)² + (σm/Sy)² = 1
'''

#### Marin Endurance Limit
'''
Se = ka · kb · kc · kd · ke · Se'
'''
Where: ka = surface factor; kb = size factor; kc = load factor; kd = temperature factor; ke = reliability factor; Se' = material endurance limit.

### Critical Speed (Rayleigh Method)
'''
ω = √(g · ΣWiyi / ΣWiyi²)
'''
Where: Wi = weight at station i; yi = static deflection at i.

### Gear Stress Formulas
'''
Contact stress:  sc = Cp√(Wt·Ka·Kv·Ks·Km / (F·d))
Bending stress:  st = (Wt·Ka·Kv / (F·m·J)) · Ks·Km
'''

### Bearing Life (L10)
'''
C10 = f(F^a·L/R)^(1/a)
'''
Where: a = 3 (ball bearings), 10/3 (roller bearings).  
Equivalent radial load: 'Feq = X·Fr + Y·Fa'

### Fastener Torque and Bolt Load
'''
T = K·d·Fi     (K ≈ 0.20 dry; 0.15 lubricated)
Wm1 = πBGmP/4 + 2bmP    (minimum bolt load, operating)
Wm2 = πbGy               (minimum bolt load, seating)
'''
Use the larger of Wm1, Wm2 for design.

### Spring Rate (Helical Compression Spring)
'''
k = Gd⁴ / (8D³Na)
'''
Wahl factor: 'Kw = (4C−1)/(4C−4) + 0.615/C'

### Journal Bearing — Sommerfeld Number
'''
S = (µN/P)(R/C)²
'''
Where: µ = viscosity; N = speed (rev/s); P = bearing pressure; R = radius; C = clearance.

### Shaft Material Yield Strengths (selected)
| Material | Condition | Yield (kpsi) |
|----------|-----------|--------------|
| SAE 1020 | HR | 52 |
| SAE 1045 | HR | 75 |
| SAE 4140 | Annealed | 60 |
| SAE 4340 | Normalized | 125 |

### Turbomachinery Relevance
Comprehensive reference for shaft design (critical speed, fatigue), rolling element bearing selection and life prediction, gear design for accessory gearboxes, coupling bolt torque calculation, and seal spring design.

---

## 13. Atlas Technical Handbook — Atlas Steels (Aug 2013)

**File:** 'Atlas Technical Handbook rev Aug 2013.pdf' | 711 KB | ID: EE3702398775304E!558112  
**Publisher:** Atlas Steels Australia | Rev. August 2013

### Scope
Technical reference for stainless steel grades: chemical compositions, mechanical properties, physical properties, corrosion resistance, fabrication guidance.

### Pitting Resistance Equivalent (PRE) Formula
'''
PRE = %Cr + 3.3×%Mo + 16×%N
'''

### PRE Values by Grade
| Grade | PRE | Category |
|-------|-----|----------|
| 304 | 18 | Austenitic |
| 316 | 24 | Austenitic |
| 2205 | 34 | Duplex |
| 904L | 34 | Austenitic |
| S31254 (254 SMO) | 43 | Super austenitic |
| 2507 | 43 | Super duplex |
| 430 | 17 | Ferritic |
| 410 | ~12 | Martensitic |

### Physical Properties (Typical, at 20°C)
| Grade | Density (kg/m³) | E (GPa) | α (µm/m/°C) | k (W/m·K) |
|-------|-----------------|---------|--------------|------------|
| 304 | 7,900 | 193 | 17.2 | 16.3 |
| 316 | 7,980 | 193 | 16.0 | 16.3 |
| 2205 | 7,800 | 200 | 13.7 | 19.0 |
| 430 | 7,700 | 220 | 10.4 | 26.1 |
| 410 | 7,750 | 215 | 10.2 | 24.9 |

### Maximum Service Temperatures (Dry Air)
| Grade | Intermittent (°C) | Continuous (°C) |
|-------|-------------------|-----------------|
| 304, 316 | 870 | 925 |
| 309 | 980 | 1,040 |
| 310 | 1,035 | 1,150 |
| S30815 (253 MA) | 1,100 | 1,150 |

### Stress Corrosion Cracking (SCC) Guidelines
- Duplex and ferritic grades: superior resistance vs. austenitic
- Avoid 304/316 in **hot chloride environments > 50°C** (risk of SCC)
- Threshold: typically > 100 ppm Cl⁻ + > 50°C in austenitics

### Welding Filler Metal Recommendations
| Base Grade | Filler Metal |
|------------|-------------|
| 304 | 308L |
| 316 | 316L |
| 2205 | 2209 |

Solution anneal range: 1,010–1,150°C (followed by rapid quench).

### Turbomachinery Relevance
Stainless steel selection for compressor casings, impellers, shafts, seal components, piping, heat exchangers, and fasteners. PRE values critical for offshore/sour service material qualification.

---

## 14. Outokumpu Stainless Steel Handbook

**File:** 'outokumpu-stainless-steel-handbook.pdf' | 7.17 MB | ID: EE3702398775304E!558108  
**Publisher:** Outokumpu (Finland)

### Scope
Comprehensive reference for Outokumpu stainless steel grades: chemical composition, physical and mechanical properties, corrosion resistance, fabrication, with full EN/ASTM/UNS/JIS grade cross-references.

### Grade Families Covered
| Family | Examples |
|--------|---------|
| Austenitic (standard) | 304/304L, 316/316L, 321, 347, 309, 310 |
| Austenitic (high-performance) | 904L, 254 SMO (S31254) |
| Austenitic (high-temp) | 153 MA, 253 MA, 304H, 321H |
| Ferritic | 430, 441, 444; high-Cr grades 1.4713–1.4762 |
| Martensitic | 410, 420, 431, 440C |
| Precipitation Hardening | 630 (17-4 PH) |
| Duplex | LDX 2101, 2205, LDX 2404, 2507 |
| Hyper duplex | FDX 25, FDX 27 |

### Proprietary Outokumpu Grades
| Grade | Description |
|-------|-------------|
| LDX 2101 | Low-alloy lean duplex (reduced Ni cost) |
| LDX 2404 | Medium duplex, PRE ~36 |
| FDX 25 | High-strength duplex, PRE ~43 |
| FDX 27 | Ultra-high-strength duplex |
| 153 MA | 18Cr-9Ni + Ce, max 950°C |
| 253 MA | 21Cr-11Ni + Ce + N, max 1,150°C |

### High-Temperature Ferritic Grades
| Grade (EN) | Cr % | Max Temp (°C) |
|------------|------|---------------|
| 1.4713 | 6 | 850 |
| 1.4724 | 12 | 950 |
| 1.4742 | 18 | 1,000 |
| 1.4762 | 25 | 1,150 |

### Turbomachinery Relevance
Selection guide for high-temperature components (exhaust casings, recuperators), duplex grades for sour gas service, and martensitic/PH grades for rotating components (shafts, impellers, blades).

---

## 15. Technical Dictionary — Weidmüller

**File:** 'Technical-Dictionary.pdf' | 3.55 MB | ID: EE3702398775304E!440160  
**Publisher:** Weidmüller (Germany)

### Scope
German/English technical dictionary for electrical connection technology: terminal blocks, connectors, cable management, industrial automation. Covers IP codes, ATEX/Ex classification, insulation classes, wire sizing (AWG), clearance/creepage distances.

### IP Code Summary
| Code | Dust Protection | Water Protection |
|------|-----------------|-----------------|
| IP44 | Protected against ≥1 mm particles | Splash water |
| IP54 | Dust protected | Splash water |
| IP65 | Dust tight | Water jets (all directions) |
| IP67 | Dust tight | Immersion up to 1 m |

### ATEX Zone Classification
| Zone | Gas/Vapor Hazard |
|------|-----------------|
| Zone 0 | Continuous explosive atmosphere |
| Zone 1 | Occasional explosive atmosphere |
| Zone 2 | Rare explosive atmosphere |

### ATEX Gas Group
| Group | Gas | Ignition Energy |
|-------|-----|-----------------|
| IIA | Propane | Low sensitivity |
| IIB | Ethylene | Medium sensitivity |
| IIC | Hydrogen / Acetylene | High sensitivity |

### ATEX Temperature Classes
| Class | Max Surface Temperature |
|-------|------------------------|
| T1 | 450°C |
| T2 | 300°C |
| T3 | 200°C |
| T4 | 135°C |
| T5 | 100°C |
| T6 | 85°C |

### AWG to mm² Conversion (Selected)
| AWG | mm² (approx.) |
|-----|---------------|
| 18 | 0.82 |
| 16 | 1.31 |
| 14 | 2.08 |
| 12 | 3.31 |
| 10 | 5.26 |

### Turbomachinery Relevance
Used for electrical connection and junction box specifications at turbomachinery installations. ATEX zone/group classification is critical for hazardous area instrumentation, junction boxes, and motor terminal boxes on gas turbines and compressors.

---

## 16. Engineering Reference Handbook (NCEES FE) — Conversion Tables

**File:** 'Engineering Reference Handbook.pdf' | 3.3 MB | ID: EE3702398775304E!440149  
**Publisher:** National Council of Examiners for Engineering and Surveying (NCEES) — Fundamentals of Engineering Reference Handbook, 4th Edition  
**Note:** This document serves as the "Conversion Tables" reference in the blackbook.

### Fundamental Constants
| Constant | Value |
|----------|-------|
| g (standard gravity) | 9.807 m/s² = 32.174 ft/s² |
| gc | 32.174 lbm·ft/(lbf·s²) |
| R (gas constant) | 8,314 J/(kmol·K) = 8.314 kPa·m³/(kmol·K) |
| G (gravitation) | 6.673 × 10⁻¹¹ N·m²/kg² |
| Molar volume (STP) | Vm = 22,414 L/kmol |
| Speed of light | 299,792,000 m/s |

### Complete Unit Conversion Table (Key Factors)
| From | Multiply by | To Get |
|------|-------------|--------|
| acre | 43,560 | ft² |
| atm (std) | 76.0 | cm Hg |
| atm (std) | 29.92 | in Hg |
| atm (std) | 14.70 | psia |
| atm (std) | 33.90 | ft H₂O |
| atm (std) | 1.013 × 10⁵ | Pa |
| bar | 1 × 10⁵ | Pa |
| Btu | 1,055 | J |
| Btu | 778 | ft·lbf |
| Btu/hr | 0.293 | W |
| cal (g-cal) | 4.186 | J |
| cm | 0.394 | in |
| cP (centipoise) | 0.001 | Pa·s |
| cSt | 1 × 10⁻⁶ | m²/s |
| ft | 0.3048 | m |
| ft-lbf | 1.356 | J |
| ft-lbf | 1.285 × 10⁻³ | Btu |
| gal (US) | 3.785 | L |
| hp | 745.7 | W |
| hp | 550 | ft·lbf/sec |
| hp | 42.4 | Btu/min |
| in | 2.540 | cm |
| in Hg | 0.0334 | atm |
| in H₂O | 0.0361 | psi |
| in H₂O | 0.002458 | atm |
| kg | 2.205 | lbm |
| kgf | 9.8066 | N |
| km | 3,281 | ft |
| kPa | 0.145 | psi |
| kW | 1.341 | hp |
| kW | 3,413 | Btu/hr |
| kWh | 3.6 × 10⁶ | J |
| lbf | 4.448 | N |
| lbm | 0.454 | kg |
| L | 61.02 | in³ |
| L/s | 15.85 | gal/min (gpm) |
| m | 3.281 | ft |
| m/s | 196.8 | ft/min |
| mile | 1.609 | km |
| mm Hg | 1.316 × 10⁻³ | atm |
| N | 0.225 | lbf |
| Pa | 9.869 × 10⁻⁶ | atm |
| Pa | 1 | N/m² |
| psi | 0.068 | atm |
| psi | 6,895 | Pa |
| psi | 2.307 | ft H₂O |
| psi | 2.036 | in Hg |

### Temperature Conversions
'''
°F = 1.8(°C) + 32
°C = (°F − 32) / 1.8
°R = °F + 459.69
K  = °C + 273.15
'''

### Turbomachinery Relevance
Essential quick-reference conversion factors for daily engineering work: pressure, flow, power, energy, and temperature unit conversions used in turbomachinery performance analysis and equipment specifications.

---

## 17. Pressure Conversion Data (from CRC / NCEES reference)

> **Note:** No dedicated "Pressure Conversion Tables" file was found as a standalone document. The pressure conversion data below is extracted from the CRC Handbook for Engineering Tables and NCEES FE Handbook, which are the most relevant files in the blackbook.

### Pressure Unit Conversion Matrix
| Unit | Pa | kPa | bar | MPa | psi | atm | kgf/cm² | mmHg | inHg | ft H₂O |
|------|----|-----|-----|-----|-----|-----|---------|------|------|--------|
| 1 Pa | 1 | 0.001 | 10⁻⁵ | 10⁻⁶ | 1.450×10⁻⁴ | 9.869×10⁻⁶ | 1.020×10⁻⁵ | 7.501×10⁻³ | 2.953×10⁻⁴ | 3.346×10⁻⁴ |
| 1 kPa | 1,000 | 1 | 0.01 | 0.001 | 0.1450 | 9.869×10⁻³ | 0.01020 | 7.501 | 0.2953 | 0.3346 |
| 1 bar | 100,000 | 100 | 1 | 0.1 | 14.504 | 0.9869 | 1.0197 | 750.1 | 29.53 | 33.46 |
| 1 MPa | 10⁶ | 1,000 | 10 | 1 | 145.04 | 9.869 | 10.197 | 7,501 | 295.3 | 334.6 |
| 1 psi | 6,895 | 6.895 | 0.06895 | 6.895×10⁻³ | 1 | 0.06805 | 0.07031 | 51.71 | 2.036 | 2.307 |
| 1 atm | 101,325 | 101.3 | 1.01325 | 0.10133 | 14.696 | 1 | 1.0332 | 760 | 29.92 | 33.90 |
| 1 kgf/cm² | 98,066 | 98.07 | 0.9807 | 0.09807 | 14.22 | 0.9678 | 1 | 735.6 | 28.96 | 32.81 |

### Key Pressure Reference Values
- Standard atmosphere: 101,325 Pa = 1.01325 bar = 14.696 psia = 760 mmHg
- 1 bar ≈ 14.504 psi ≈ 0.1 MPa ≈ 10.197 mH₂O
- 1 MPa = 10 bar = 145 psi
- 1 kgf/cm² = 0.9807 bar ≈ 14.22 psi

---

## 18. Table of Total Emissivity — Monarch Instrument / OMEGASCOPE

**File:** 'Table of Emissivity.pdf' | 661 KB | ID: EE3702398775304E!440156  
**Source:** Monarch Instrument / OMEGASCOPE® infrared pyrometer documentation  
**Date:** 2003

### Scope
Total emissivity (ε) values for metals, non-metals, and building materials for use with infrared thermometers and pyrometers. Values are temperature- and surface-condition-dependent; to be used as guides for non-absolute measurements.

### Metals — Key Emissivity Values
| Material | Temp °F (°C) | ε |
|----------|--------------|---|
| Stainless 301, polished | 75°F (24°C) | 0.27 |
| Stainless 301, polished | 450°F (232°C) | 0.57 |
| Stainless 316, polished | 75°F (24°C) | 0.28 |
| Stainless 316, polished | 1,740°F (949°C) | 0.66 |
| Stainless 303, oxidized | 600–2,000°F (316–1,093°C) | 0.74–0.87 |
| Stainless 321, w/ black oxide | 200–800°F (93–427°C) | 0.66–0.76 |
| Steel, polished | 100°F (38°C) | 0.07 |
| Steel, polished | 1,000°F (538°C) | 0.14 |
| Steel, red rust | 77°F (25°C) | 0.70 |
| Steel, strongly oxidized | 104°F (40°C) | 0.95 |
| Cast iron, oxidized | 390°F (199°C) | 0.64 |
| Cast iron, unoxidized | 212°F (100°C) | 0.21 |
| Inconel sheet | 1,000°F (538°C) | 0.28 |
| Inconel sheet | 1,400°F (760°C) | 0.58 |
| Monel, Ni-Cu, oxidized | 68°F (20°C) | 0.43 |
| Haynes Alloy X, oxidized | 600–2,000°F (316–1,093°C) | 0.85–0.88 |
| Nickel, polished | 100°F (38°C) | 0.05 |
| Nickel, oxidized | 100–500°F (38–260°C) | 0.31–0.46 |
| Aluminum, polished | 100°F (38°C) | 0.04–0.06 |
| Aluminum, oxidized | 1,110°F (599°C) | 0.19 |
| Copper, bright polished | 100°F (38°C) | 0.07 |
| Copper, cuprous oxide | 100°F (38°C) | 0.87 |
| Chromium | 100°F (38°C) | 0.08 |
| Chromium | 1,000°F (538°C) | 0.26 |
| Gold, polished | 932°F (500°C) | 0.06 |
| Titanium, polished | 100°F (38°C) | 0.02 |
| Titanium, oxidized at 1,000°F | 200–800°F (93–427°C) | 0.51–0.61 |
| Tungsten, unoxidized | 77°F (25°C) | 0.02 |
| Tungsten, unoxidized | 1,832°F (1,000°C) | 0.15 |
| Platinum, polished | 100°F (38°C) | 0.05 |
| Platinum, black | 100°F (38°C) | 0.93 |
| Zinc, bright galvanized | 100°F (38°C) | 0.23 |

### Non-Metals — Key Emissivity Values
| Material | Temp °F (°C) | ε |
|----------|--------------|---|
| Asbestos board | 100°F (38°C) | 0.96 |
| Brick, red rough | 70°F (21°C) | 0.93 |
| Brick, fire brick | 1,832°F (1,000°C) | 0.75–0.80 |
| Concrete, rough | 32–2,000°F (0–1,093°C) | 0.94 |
| Glass, smooth | 32–200°F (0–93°C) | 0.92–0.94 |
| Ice, smooth | 32°F (0°C) | 0.97 |
| Ceramic, alumina on Inconel | 800–2,000°F | 0.69–0.45 |
| Ceramic, zirconia on Inconel | 800–2,000°F | 0.62–0.45 |
| Ceramic, white Al₂O₃ | 200°F (93°C) | 0.90 |
| Rubber, hard | 74°F (23°C) | 0.94 |
| Carbon, lampblack | 77°F (25°C) | 0.95 |
| Paint, oil (all colors) | 200°F (93°C) | 0.92–0.96 |
| Silicon carbide | 300–1,200°F (149–649°C) | 0.83–0.96 |
| Water | 100°F (38°C) | 0.67 |
| Wood (various) | — | 0.80–0.94 |

### Turbomachinery Relevance
Used for non-contact infrared temperature measurement of hot surfaces: turbine casings, exhaust ducts, heat exchangers, compressor casings, lube oil lines. Correct emissivity selection is essential for accurate IR pyrometry. Inconel/stainless values are particularly relevant for gas turbine hot section temperature monitoring.

---

## 19. Shaft Alignment Guide — PRUFTECHNIK (ROT Machinery Alignment)

**File:** 'ROT Machinery Alignment.pdf' | 4.44 MB | ID: EE3702398775304E!440229  
**Publisher:** PRUFTECHNIK LTD. | Edition 8.011, 2002  
**Full title:** An Engineer's Guide to Shaft Alignment, Vibration Analysis, Dynamic Balancing & Wear Debris Analysis

### Scope
Comprehensive field guide for shaft alignment procedures, alignment tolerances, soft foot correction, thermal growth calculations, reverse indicator calculations, and laser alignment systems.

### Shaft Alignment Tolerances
| Speed (rpm) | Offset — Excellent (mm) | Offset — Acceptable (mm) | Angular — Excellent (mm/100mm) | Angular — Acceptable (mm/100mm) |
|------------|------------------------|--------------------------|-------------------------------|--------------------------------|
| 600 | 0.10 | 0.20 | 0.10 | 0.20 |
| 1,800 | 0.05 | 0.10 | 0.07 | 0.12 |
| 3,000 | 0.05 | 0.08 | 0.05 | 0.08 |
| 6,000 | 0.03 | 0.05 | 0.03 | 0.05 |

### Alignment Methods
| Method | Notes |
|--------|-------|
| Straightedge / feeler gauge | Not recommended; low accuracy |
| Rim-Face | Calculates offset and angularity; requires sag correction |
| Reverse Indicator | API 686 recommended method; two dial gauges facing each other |
| Laser (OPTALIGN) | PRUFTECHNIK preferred system; highest accuracy |

### Soft Foot
- Correct if > **0.08 mm** at any foot
- Maximum 3 shims per foot
- Types: parallel soft foot, angular soft foot, induced soft foot (external strain)

### Thermal Growth Calculation
'''
ΔL = L × α × ΔT
'''
Where: L = initial dimension; α = thermal expansion coefficient;  
Cast iron: α = 0.0000059 in/in/°F (≈ 10.6 µm/m/°C)

### Reverse Indicator Method Formulas
'''
VO = (TDI₁ + BDI₁) / 2   (vertical offset, drive machine)
VA = (TDI₂ + BDI₂) / 2   (vertical offset, driven machine)
HO, HA = horizontal equivalents
'''
Sag correction (SS/MS) must be applied before calculations.

### Unit Equivalences
'''
1 mrad = 1 mm/m = 1 thou/inch (mil/inch)
'''

### Turbomachinery Relevance
This is the primary practical field guide for aligning gas turbines, steam turbines, centrifugal compressors, electric motors, and pumps. The tolerance table directly defines acceptance criteria for commissioning alignment checks.

---

## 20. Methods for Reconditioning Silica Gel — AIC / Steven Weintraub

**File:** 'Methods for Reconditioning Silica Gel.pdf' | 120 KB | ID: EE3702398775304E!440213  
**Source:** Object Specialty Group Postprints, Vol. 9, 2002. American Institute for Conservation.  
**Author:** Steven Weintraub, Art Preservation Services, NYC

### Scope
Methods for conditioning and reconditioning silica gel for humidity control in sealed enclosures (originally archival/museum use; equally applicable to instrument enclosures, transformer breathers, and equipment preservation).

### Types of Silica Gel
| Type | Description |
|------|-------------|
| Indicating silica gel | Contains organic dye (color change when saturated) |
| Regular density gel | Standard hygroscopic properties |
| Rhapid Gel | Fast moisture exchange; MH = 9 |

### Temperature Limits for Reactivation (Drying)
| Gel Type | Max Temperature |
|----------|----------------|
| Indicating silica gel | 120°C max (dye affected above 125–150°C) |
| Regular silica gel | 200°C max (loses hygroscopic properties above 300°C) |
| Silica gel melting point | 1,600°C |

### Drying Methods
- **Conventional oven:** Most reliable; time varies from minutes to hours depending on temperature and layer thickness
- **Microwave oven:** Possible but risky (temperature difficult to control; individual beads become very hot); use glass/ceramic containers only

### Adding Moisture (Pre-conditioning to target RH)
- Spread gel in thin layer in a room or chamber at target RH
- Use fan to circulate air; mix layers periodically for uniformity
- Confirm RH via hygrometer in sealed container with gel sample (allow 1 day for stabilization)
- Single layer: allow at least 4 days if starting from dry
- **Do NOT** spray with water or immerse (causes decrepitation — cracking)

### Calculation Formulas

**Water required to raise RH:**
'''
Water (g) = % RH increase × MH × Gel weight (kg)
'''
Example: Raise RH from 45% to 55% with 2 kg gel (MH = 9):  
→ 10% × 9 × 2 = **180 g water**

**Dry gel required to lower RH:**
'''
Step 1: Moisture to remove (g) = % RH decrease × MH × total gel weight (kg)
Step 2: Adsorption capacity = EMC at target RH (%) × 10   (g per kg dry gel)
Step 3: Dry gel required (kg) = Step 1 ÷ Step 2
'''
Example: Lower RH from 55% to 45% with 2 kg Rhapid Gel (MH=9); regular dry gel (EMC=25% at 45%):  
→ Step 1: 10% × 9 × 2 = 180 g  
→ Step 2: 25% × 10 = 250 g/kg  
→ Step 3: 180 ÷ 250 = **0.72 kg dry gel**

### Key Numerical Parameters
| Parameter | Value |
|-----------|-------|
| MH (Moisture Holding) — Rhapid Gel | 9 |
| EMC at 45% RH — regular density gel | 25% |
| RH stabilization time (hygrometer check) | 1 day |
| Conditioning time (single layer, starting dry) | ≥ 4 days |
| Equilibration after mixing different-moisture beads | 2–3 days |

### Turbomachinery Relevance
Silica gel breathers and desiccant cartridges are used in transformer conservator tanks, lube oil reservoir vent/breather systems, and instrument enclosures at turbomachinery installations. These reconditioning methods define when and how to regenerate or replace silica gel to prevent moisture ingress into lube oil systems or equipment enclosures.

---

## Summary Tables for Chatbot Knowledge Base

### Contamination Classification Cross-Reference
| Standard | Format | Measurement Base | Reference Channel |
|----------|--------|-----------------|-------------------|
| ISO 4406:1999 | XX/XX/XX | particles/mL | >4µm(c) / >6µm(c) / >14µm(c) |
| NAS 1638 | Class 0–12 | particles/100 mL | 5–15, 15–25, 25–50, 50–100, >100 µm |
| SAE AS4059 | Grade 000–12 | particles/mL | 6 size channels |
| GOST 17216-2001 | Class 00–17 | (Russian standard) | |

### ISO to NAS Quick Cross-Reference
| ISO 4406 | NAS 1638 | Application |
|----------|----------|-------------|
| 14/12/9 | ≤ 3 | Servo valves, critical systems |
| 16/14/11 | ≤ 5 | Servo valves |
| 17/15/12 | ≤ 6 | **GE HD turbomachinery (SIC00006)** |
| 18/16/13 | ≤ 7 | High quality hydraulic systems |
| 20/18/14 | ≤ 9 | General systems |

### Shaft Alignment — Quick Reference
| Speed | Excellent Offset | Acceptable Offset |
|-------|-----------------|-------------------|
| 600 rpm | 0.10 mm | 0.20 mm |
| 1,800 rpm | 0.05 mm | 0.10 mm |
| 3,000 rpm | 0.05 mm | 0.08 mm |
| 6,000 rpm | 0.03 mm | 0.05 mm |

### Material Emissivity — Quick Reference (for IR thermometry)
| Surface | ε (approx.) |
|---------|-------------|
| Stainless 316, polished | 0.28 |
| Stainless 316, oxidized/high-temp | 0.66–0.87 |
| Carbon steel, rusty | 0.65–0.80 |
| Carbon steel, oxidized/scale | 0.80–0.95 |
| Inconel, bare sheet | 0.28–0.58 (temp dependent) |
| Aluminum, polished | 0.04–0.06 |
| Copper, polished | 0.07 |
| Paint (all colors) | 0.92–0.96 |
| Concrete | 0.94 |

### Bolt Torque Quick Reference (ASME PCC-1, M-series, noncoated, 345 MPa pre-stress)
| Bolt | Torque (N·m) |
|------|-------------|
| M16 | 160 |
| M20 | 350 |
| M24 | 550 |
| M30 | ~1,100 (interpolated) |
| M36 | ~1,900 (interpolated) |

### Key Engineering Formulas — Quick Reference
| Formula | Application |
|---------|-------------|
| 't = PD/(2SEW−2YP)' | Pipe wall thickness (ASME B31.3) |
| 'SA = f(1.25Sc + 0.25Sh)' | Displacement stress range (B31.3) |
| 'Tn = 9550P/N' | Coupling nominal torque (ISO 10441) |
| 'U = 6350m/N' | Residual unbalance (ISO 10441) |
| 'Re = 21220×Q/(di×v)' | Flushing Reynolds number |
| 'ΔL = L×α×ΔT' | Thermal growth (alignment) |
| 'se = ka·kb·kc·kd·ke·Se'' | Endurance limit (machine design) |
| 'T = KdFi' | Fastener torque (K≈0.20 dry, 0.15 lubed) |
| 'k = Gd⁴/(8D³Na)' | Spring rate (helical compression) |
| 'PRE = %Cr + 3.3×%Mo + 16×%N' | Pitting resistance (stainless steel) |
| 'Freq = [14M/(rpm×ID^0.5)−4·ID]×F' | Motor grease relubrication interval |
| Water (g) = %RH × MH × mass(kg) | Silica gel moisture calculation |

---

*End of Engineering Blackbook Summary — 20 documents, compiled 2026-04-19*

================================================================================
SECTION 6: TURBOMACHINERY HANDBOOKS
Source: blackbook_turbomachinery_handbooks.md
================================================================================

# Turbomachinery Handbooks — Comprehensive Technical Summary (Blackbook)

*Compiled from 12 turbomachinery reference documents (OneDrive). Prepared for turbomachinery chatbot knowledge base.*

---

## TABLE OF DOCUMENTS

| # | Title | Author/Source | Year |
|---|-------|---------------|------|
| 1 | Gas Turbine Engineering Handbook, 4th Edition | Meherwan P. Boyce, Elsevier/Gulf Professional | 2012 |
| 2 | Handbook of Turbomachinery, 2nd Edition | Logan & Roy, Marcel Dekker | 2003 |
| 3 | Gas Turbine Handbook: Principles and Practices, 3rd Edition | Elden Ray | ~2006 |
| 4 | Applied Combustion, 2nd Edition | Eugene L. Keating, CRC Press/Taylor & Francis | 2007 |
| 5 | GT – Simple and Combined Cycles | Alstom/Siemens training document | ~2007 |
| 6 | Gas Turbine Basics (Pakarab Fertilizers GTG Training) | Moazzam Aslam | 2023 |
| 7 | Introduction to Gas Turbines (GE-focused) | GE/industrial training | 2023 |
| 8 | Centrifugal Compressor O&M Training Course | GE Oil & Gas | ~2023 |
| 9 | Rotating Equipment Inspection and Maintenance | Industry reference | 2023 |
| 10 | Dry Gas Seals Handbook | Stahley | ~2010 |
| 11 | Fundamentals of Centrifugal Pump (mechzone's Blog) | Mechzone | 2024 |
| 12 | Pumps Selection Guide | Goulds Pumps (ITT) | ~2016 |

---

## DOCUMENT 1: GAS TURBINE ENGINEERING HANDBOOK, 4TH EDITION
**Boyce, Meherwan P. | Elsevier/Gulf Professional Publishing, 2012**

### Chapters and Key Topics
1. Overview of Gas Turbines — types, applications, history, Brayton cycle
2. Theoretical and Actual Cycle Analyses — ideal/real Brayton, intercooling, reheat
3. Compressor and Turbine Performance — isentropic efficiency, polytropic efficiency
4. Performance and Mechanical Standards — ASME PTC standards, ISO conditions
5. Combustion — combustors, fuels, emissions, flame stability
6. Axial-Flow Compressors — stage design, diffusion factor, surge, stall
7. Centrifugal Compressors — impeller types, performance maps, surge
8. Axial-Flow Turbines — blade cooling, stage loading, degree of reaction
9. Radial-Inflow Turbines
10. Materials and Coatings — superalloys, TBCs, oxidation/hot corrosion
11. Bearings and Seals — journal, thrust, labyrinth, face seals
12. Vibration and Noise — critical speeds, balancing, vibration standards
13. Balancing
14. Instrumentation and Controls — sensors, control loops, protective systems
15. Maintenance and Troubleshooting — scheduled maintenance, failure analysis
16. Combined Cycle Power Plants — Brayton-Rankine integration, HRSGs

### Machine Types Covered
- Frame-type heavy-duty industrial gas turbines (GE 7E/9E/H-series, Siemens SGT, MHI M501/M701)
- Aero-derivative gas turbines (LM2500, LM6000, RB211, Trent)
- Industrial gas turbines (Solar Centaur, Titan)
- Small and microturbines (TA100, 100 kW class)
- Vehicular gas turbines

### Critical Technical Knowledge
**Cycle Efficiency (Brayton):**
\[ \eta_{Brayton} = 1 - \frac{1}{Pr^{(\gamma-1)/\gamma}} \]

**Optimum Pressure Ratio for Max Work:**
\[ (Pr)_{opt} = \left(\frac{T_3}{T_1}\right)^{\gamma/[2(\gamma-1)]} \]

**Isentropic Compressor Work:**
\[ W_c = \frac{c_p T_1}{\eta_c}\left[Pr^{(\gamma-1)/\gamma} - 1\right] \]

**ISO Reference Conditions:** 15°C, 1013 mbar, 60% RH

**Key Degradation:** Performance drops 2–6% over 24,000 operating hours.

**Power Augmentation Methods:**
- Inlet air cooling (chilling, evaporative, fogging): +5–15% output
- Steam/water injection: +10–20% output, NOx reduction
- Supplemental firing in HRSG

---

## DOCUMENT 2: HANDBOOK OF TURBOMACHINERY, 2ND EDITION
**Logan & Roy | Marcel Dekker, 2003**

### Chapters and Key Topics
1. Introduction to Turbomachinery
2. Fluid Dynamics — Euler turbomachine equation, velocity triangles
3. Turbine Gas-Path Heat Transfer
4. Gas Turbine Cooling System Selection — impingement, film, transpiration cooling
5. Unsteady Flow and Aeroelasticity — flutter, forced response
6. Fundamentals of Compressor Design — axial/centrifugal, performance maps
7. Fundamentals of Turbine Design — reaction/impulse stages
8. Steam Turbines — impulse/reaction, stage types, Rankine cycle
9. Multidisciplinary Design Optimization (MDO) for Turbomachinery
10. Rotordynamic Considerations — critical speeds, stability, damping
11. Rocket Propulsion Turbomachinery
12. Performance Testing — ASME PTC standards, test procedures
13. Automotive Superchargers and Turbochargers
14. Tesla Turbomachinery (bladeless turbines)
15. Hydraulic Turbines — Pelton, Francis, Kaplan

### Critical Formulas

**Brayton Cycle Efficiency:**
\[ \eta_B = 1 - \frac{1}{Pr^{(\gamma-1)/\gamma}} \]

**Optimum Pressure Ratio:**
\[ (Pr)_{opt} = \left(\frac{T_3}{T_1}\right)^{\gamma/[2(\gamma-1)]} \]

**Diffusion Factor (Axial Compressor):**
\[ D = \frac{V_2}{V_1} + \frac{\Delta(V_{\theta}r)}{2r_1 V_1} \]

**Euler Turbine Equation:**
\[ \Delta h_{actual} = U_1 V_{y1} - U_2 V_{y2} \]

**Stall Margin:**
\[ SM = 1 - \left(\frac{PR_I}{PR_O}\right)\left(\frac{PR_O}{PR_I}\right)^{0.5} \]

**Specific Speed:**
\[ N_s = \frac{N\sqrt{Q}}{(\Delta H)^{0.75}} \]

### Key Operating Parameters
| Parameter | Value |
|-----------|-------|
| TIT (advanced engines) | 2,200–2,500°F (1,200–1,370°C) |
| Pressure ratio (modern) | 10–40:1 |
| Cooling air (% core flow) | 8–22% |
| TRIT (GE H-class) | 1,650°C with PR 40:1 |
| Combined cycle efficiency | 52–60% |

---

## DOCUMENT 3: GAS TURBINE HANDBOOK: PRINCIPLES AND PRACTICES, 3RD EDITION
**Elden Ray | PennWell**

### Chapters and Key Topics
1. Evolution of Gas Turbines
2. Applications — power generation, mechanical drive, marine, oil & gas
3. Hardware — compressor, combustor, turbine, frames, casings
4. Gas Turbine Systems Theory — thermodynamics, cycle analysis
5. Controls — fuel control, governor, FADEC, Speedtronic
6. Accessories — lube oil system, cooling system, power accessories
7. Parameter Characteristics — performance curves, effect of ambient conditions
8. Inlet Treatment — filtration, anti-icing, silencing, fogging, chilling
9. Exhaust Treatment — HRSGs, silencers, catalytic reduction
10. Acoustics and Noise Control
11. Microturbines (TA100 class, 100 kW)
12. Detectable Problems — vibration analysis, performance degradation
13. Borescope Inspection procedures
14. Case Histories (4 detailed cases)
15. Future of Gas Turbines

### Critical Formulas

**Compressor Horsepower:**
\[ HP_c = \frac{J}{550} \cdot W_a \cdot c_p \cdot T_i \cdot \frac{R_c^\sigma - 1}{\eta_c}, \quad \sigma = \frac{k-1}{k} \]

**Turbine Horsepower:**
\[ HP_t = \frac{J}{550} \cdot W_g \cdot c_p \cdot T_i \cdot \eta_t \cdot \left(1 - \frac{P_o}{P_i}^\sigma\right) \]

**Combustor Efficiency:**
\[ \eta_B = \frac{W_a \cdot c_p \cdot (T_o - T_i)}{W_f \cdot Q_r} \]

### Vibration Alarm Levels
| Condition | Velocity (in/sec) |
|-----------|------------------|
| Smooth (ISO Zone A) | < 0.02 |
| Acceptable (ISO Zone B) | 0.02 – 0.08 |
| Rough (ISO Zone C) | 0.08 – 0.11 |
| Trip (ISO Zone D) | > 0.11 |

**Vibration Frequency Signatures:**
- 1× RPM = unbalance
- 2× RPM = misalignment, looseness
- 0.42–0.48× RPM = oil whirl (fluid instability)
- Sub-synchronous (<1×) = oil whip, rub, surge

### Lube Oil System Specifications
| Parameter | Specification |
|-----------|--------------|
| Oil temperature alarm (outlet) | 120–140°F |
| ΔP alarm across filter | 5 psig |
| Reservoir size (heavy frame) | 1,500–2,500 gallons |
| Oil viscosity (standard) | ISO VG 32 or 46 |

### Ignition System
- Discharge frequency: 1.5–2 Hz
- Energy per spark: 4–30 joules
- Igniter types: capacitive discharge, high-energy direct

### NOx Emission Targets
| Technology | NOx Level |
|------------|-----------|
| Conventional diffusion | 100–250 ppmvd |
| Water/steam injection | ~25 ppmvd |
| Dry Low NOx (DLN) burner | 9–25 ppmvd |
| Lab best case (steam inj.) | ~9 ppm |

### Notable Engine Models and Performance (ISO)
| Model | Output | Notes |
|-------|--------|-------|
| GE LM2500 | 23 MW | Aero-derivative, marine/industrial |
| GE LM6000 | 42 MW | Aero-derivative, 43% simple cycle |
| GE MS7001EA | 85 MW | Frame 7EA, heavy-duty |
| Siemens SGT-400 | ~12 MW | Industrial |
| Allison 501 | ~4 MW | Small industrial |
| Capstone TA100 | 100 kW | Microturbine |

### PR Evolution:
- WWII era: 5:1
- 1960s: 10–12:1
- 1990s: 20–25:1
- Modern aero-derivatives: 30–40:1
- TIT progression: ~1,800°F (1950s) → 2,640°F (advanced)

### Troubleshooting Table
| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| ↓CDP + ↓compressor efficiency | Blade fouling | Online/offline water wash |
| ↑EGT + ↑fuel flow, normal output | Turbine fouling | Borescope, wash |
| Distorted EGT profile | Combustor distress/fuel nozzle clog | Borescope combustor |
| ↑Vibration 1× | Rotor unbalance (FOD/DOD) | Balance check, blade inspect |
| ↓Lube oil level + smoke | Worn bearing or seal | Inspect seals/bearings |
| Hot start / hung start | Fuel control malfunction | Check fuel control valve |

### Maintenance Intervals
| Task | Interval |
|------|---------|
| Borescope inspection | 1 hr (full engine) |
| Combustion inspection | 8,000–16,000 hrs |
| Hot gas path inspection | 16,000–24,000 hrs |
| Major overhaul | 32,000–48,000 hrs |
| Aero-derivative modular overhaul | ~1 day (module swap) |
| Compressor water wash | When efficiency drops ≥2% |

---

## DOCUMENT 4: APPLIED COMBUSTION, 2ND EDITION
**Eugene L. Keating, Ph.D., P.E. | CRC Press / Taylor & Francis, 2007**
**ISBN:** 978-1-57444-640-1

### Chapters and Topics
1. Introduction — energy and combustion, fuel-engine interface
2. Combustion and Energy — conservation laws, heats of reaction
3. Combustion and Entropy — equilibrium, Gibbs function, fuel cells
4. Fluid Mechanics — Rayleigh line, detonation theory, Chapman-Jouguet
5. Chemical Kinetics — collision theory, Arrhenius rate, Zeldovich NOx
6. Solid Fuels — coal, biomass, boiler energy balance
7. Liquid Fuels — crude oil, gasoline, diesel, synfuels, alcohols
8. Gaseous Fuels — natural gas, hydrogen, syngas, biogas
9. Combustion Engine Testing — indicated/brake performance, CFR engine
10. Spark-Ignition Engine Combustion — Otto cycle, emissions, Wankel
11. Compression-Ignition Engine Combustion — Diesel cycle, emissions
12. Gas Turbine Engine Combustion — Brayton cycle, combustors, Stirling
13. Thermal Destruction — waste chemistry, incineration, DRE standards

### Critical Formulas

**Stoichiometry:**
\[ \sum \nu_i R_i \to \sum \nu_j P_j \]
\[ AF_{mass} = \frac{\text{mass air}}{\text{mass fuel}}, \quad \Phi = \frac{FA}{FA_{stoich}} \]

**Heat of Reaction:**
\[ \Delta H_r = Q_{STP} \]

**Gibbs Function:**
\[ \Delta G_r = RT \ln K_p \]

**Arrhenius Reaction Rate:**
\[ k = C \exp\left(\frac{-\Delta E}{RT}\right) \]

**Zeldovich NO Formation:**
\[ \frac{d[\text{NO}]}{dt} = k_1[\text{N}][\text{O}] - k_{-1}[\text{NO}][\text{N}] + k_2[\text{O}][\text{N}_2] - k_{-2}[\text{NO}][\text{O}] \]

**Brayton Cycle Efficiency:**
\[ \eta = 1 - (1/r_p)^{(\gamma-1)/\gamma} \]

**Otto Cycle Efficiency:**
\[ \eta = 1 - (1/r_v)^{\gamma-1} \]

**Diesel Cycle Efficiency:**
\[ \eta = 1 - \frac{1}{r_v^{\gamma-1}} \cdot \frac{r_L^\gamma - 1}{\gamma(r_L - 1)} \]

**Thermal Destruction Efficiency:**
\[ DRE = \frac{m_{in} - m_{out}}{m_{in}} \times 100\% \]

### Fuel Properties
| Fuel | Formula | AF (stoich) | LHV (MJ/kg) |
|------|---------|-------------|-------------|
| Methane | CH₄ | 17.19 | ~50 |
| Octane | C₈H₁₈ | 14.77 | ~44 |
| Hydrogen | H₂ | 34.3 | 120 |
| Coal (C basis) | C | 11.5 | ~32.8 |
| Diesel | C₁₆H₃₄ | ~14.5 | ~43 |

### Combustion Parameters
| Parameter | Range |
|-----------|-------|
| Adiabatic flame temperature | 2,000–3,000 K |
| Equivalence ratio Φ | < 1 lean, = 1 stoich, > 1 rich |
| Excess air (typical) | 10–200% (varies by application) |
| Flame speed (SI engines) | 20–40 m/s |
| Ignition delay (CI) | < 1 ms |
| Gas turbine TIT | 1,400–2,000°F / 760–1,090°C |
| Gas turbine pressure ratio | 10–30:1 |
| GT thermal efficiency (Brayton) | 23–40% |

### Emissions Standards
| Pollutant | Standard/Limit |
|-----------|----------------|
| DRE (hazardous waste) | ≥ 99.99% |
| Particulates | < 34 mg/dscm (MACT) |
| Dioxins/Furans | < 25 ng TEQ/dscm |

---

## DOCUMENT 5: GT – SIMPLE AND COMBINED CYCLES
**Alstom/Siemens Training Document**

### Topics Covered
- Simple Brayton cycle theory and efficiency limits
- Heat recovery (HRSG) fundamentals
- Combined Brayton-Rankine cycles
- Firing temperature effects on performance
- NOx control strategies
- Fuel quality effects on maintenance
- Specific gas turbine model performance tables

### Key Performance Rules of Thumb
| Rule | Value |
|------|-------|
| +55°C firing temperature | +10–13% power output |
| +55°C firing temperature | +2–4% efficiency |
| Simple cycle efficiency | 33–39% |
| Combined cycle efficiency | 52–60% |
| NOx target (DLE combustion) | < 25 vppm dry @ 15% O₂ |
| NOx achievable (lab/steam inj.) | single-digit ppm |
| Residual oil vs. NG maintenance | 3× more frequent on residual oil |
| Compressor water wash frequency | every 100–120 hrs on residual oil |

### Gas Turbine Performance Data (ISO Conditions)
| Model | Power (MW) | Simple Cycle η% | PR | Exhaust T (°C) | Notes |
|-------|-----------|-----------------|-----|----------------|-------|
| Alstom GT24 | 187.7 | 36.9 | 32:1 | 612 | 60 Hz |
| Alstom GT26 | 281 | 38.3 | 32:1 | 615 | 50 Hz |
| MHI M501G | — | — | — | — | CC 371 MW, 58.0% |
| MHI M501H | — | — | — | — | CC 403 MW, 60.0% |

---

## DOCUMENT 6: GAS TURBINE BASICS
**Pakarab Fertilizers Limited, Multan — Instrument Unit UTY-08**
**Prepared by: Moazzam Aslam**

### Topics Covered
1. Gas Turbine Working Principle — Brayton cycle, P-T variation diagram
2. Gas Turbine Parts (16 components detailed):
   - Fuel nozzle, combustion chamber, transition piece
   - Lower/upper turbine casing, exhaust casing/diffuser
   - Inlet casing + journal bearing #1, compressor discharge casing
   - IGV control ring, compressor rotor blades, HP rotor
   - 1st/2nd/3rd stage nozzles, inlet plenum
3. Operational Modes: OFF, CRANK, FIRE, AUTO, REMOTE
4. Load Control Modes: DROOP, Isochronous, Isochronous Load Sharing, Preselected Load, Base Load
5. GTG Control Architecture:
   - UCP1: RX3i PLC, Versamax I/O, HIMatrix F35 safety, Bentley Nevada 1701 vibration, Dataforth thermocouples, Braun overspeed
   - UCP2: OSM Historian, HMI, Generator Protection (G30), Synchronization
6. P&IDs: Fuel gas metering, DLN combustor, cooling/sealing air, lube oil, evaporative cooling, fire fighting, offline washing
7. Start/Stop Sequence: auxiliaries start → crank → ignition → warm-up → acceleration → synchronization → load control → shutdown → cooldown

### Key Operating Parameters
| Parameter | Value |
|-----------|-------|
| ISO ambient temperature | 15°C |
| ISO ambient pressure | 1013 mbar |
| ISO relative humidity | 60% |
| Crank speed | 19% of rated (~2,140 rpm) |
| Purge time | 60 s (normal) / 300 s (AUTO) |
| Warm-up time | 300 s (normal) |
| Target acceleration speed | ~11,000 rpm |
| Droop: 4% speed = | 100% power change |
| 1% frequency deviation = | 25% power change |
| Isochronous speed | 50 Hz |

### Control/Instrumentation Specifications
| Component | Details |
|-----------|---------|
| RX3i PLC | 300 MHz CPU, redundant PSU, Profibus/Ethernet |
| HIMatrix F35 | Safety I/O (fire alarms, smoke detection) |
| Bentley Nevada 1701 | Radial vibration (µm), seismic (mm/s) |
| Dataforth | 12 thermocouples to 4–20 mA |
| Braun speed module | Overspeed trip monitoring |
| G30 | Generator protection (automation, I/O, fault recording) |

### Offline Water Wash
- Performed in CRANK mode
- Purpose: remove dust and oil deposits from compressor blades
- Restores compressor efficiency

---

## DOCUMENT 7: INTRODUCTION TO GAS TURBINES (GE-Focused)
**GE / Industrial Training Reference**

### Topics Covered
- Axial compressor design: 15–18 stages, IGVs
- Combustor types: can-annular, annular, can
- Single/twin-shaft turbine configurations
- Bearing types: journal, thrust
- GE Speedtronic controls: Mark IV, V, VI

### GE Model Performance (ISO Conditions)
| Model | Power | Heat Rate (kJ/kWh) | Exhaust T (°C) | Notes |
|-------|-------|-------------------|----------------|-------|
| MS5002C | 38,000 HP | 12,470 | 517 | Mechanical drive |
| MS7001EA | 85,100 kW | 11,000 | 537 | Frame 7EA |
| MS9001E | 123,400 kW | 10,650 | 543 | Frame 9E |
| LM6000 | 43,076 kW | 8,707 | 449 | Aero-derivative |
| H-Series | 480 MW (CC) | — | — | TIT 1,430°C, PR 23:1, CC 60% |

### GE Maintenance Intervals (MS3002, Gas Fuel)
| Inspection Type | Interval (hours) |
|----------------|-----------------|
| Combustion liners | 16,000 |
| Transition pieces (fixed) | 16,000 |
| Transition pieces (floating) | 4,000 |
| Hot gas path | 16,000–24,000 |
| Major overhaul | 32,000–48,000 |
| Liquid fuel multiplier | 2× |
| Heavy/residual fuel multiplier | 2–3× |

---

## DOCUMENT 8: CENTRIFUGAL COMPRESSOR O&M TRAINING COURSE
**GE Oil & Gas**

### Topics Covered
1. Model description, tag numbers, design criteria
2. Gas path and axial thrust (generation and balancing)
3. Compressor components — statoric and rotating parts
4. Performance curves — operating point, operating range, system resistance
5. Regulation methods — speed variation, IGV, recycle
6. Abnormal conditions: choking, rotating stall, surge
7. Antisurge protection system
8. Lube oil system — tank, pumps, PCV, coolers, TCV, filters
9. Sealing system — labyrinth seals, dry gas seals
10. Maintenance philosophy — PM, log book, programmed maintenance
11. Assembly/disassembly — labyrinth clearance, bundle, DGS, bearings
12. Alignment — radial and axial procedures
13. Vibrations — synchronous, sub/super-synchronous, resonance, API 617

### GE Centrifugal Compressor Model Types
| Model | Type | Max Pressure | Application |
|-------|------|-------------|-------------|
| BCL (e.g., BCL 406) | Barrel, vertically split | Up to 1,000 bar (E-rating) | High-pressure service |
| PCL | Pipeline, barrel casing | Up to 1,000 bar | Gas boosting stations |
| MCL | Horizontally split, middle split | Up to 80 bar | LNG, ethylene, high flow |
| SRL | Single volute, single stage | Low | Air compression, low flow |
| 2BCL/2MCL | Back-to-back, 2 sections | — | Intercooled compression |
| 3BCL/3MCL | In-line, 3+ sections | — | Multistage with sidestreams |

**Pressure Rating Designations (Barrel Compressors):**
- N: < 150 bar
- A: < 200 bar
- B: < 300 bar
- C: < 400 bar
- D: < 550 bar
- E: ≤ 1,000 bar

### Performance Equations (Affinity Laws / Similarity Laws)
| Parameter | Relationship |
|-----------|-------------|
| Inlet flow | \( Q = k_1 N \) |
| Polytropic head | \( H_{pol} = k_2 N^2 \) |
| Absorbed power | \( P = k_3 N^3 \) |

### Operating Parameters
| Parameter | Value |
|-----------|-------|
| Maximum continuous speed (MCS) | 105% of rated speed |
| Operating speed range | 65%–105% (MOS to MCS) |
| Surge Control Line (SCL) margin | 10% flow right of Surge Limit Line |
| Axial thrust compensation — balance drum | 80–85% at rated point |
| Axial thrust — thrust bearing share | 15–20% |
| Max gas temperature | 250°C |
| Oil sampling: initial | Every 100 hours |
| Oil sampling: ongoing | Every 3 months (~2,000 hrs) |
| Lube oil standard | Mineral ISO VG 32 or 46 |
| Thrust collar shrink fit | 1.1–1.4‰ |

### Vibration Criteria (API 617)
| Amplification Factor (AF) | Interpretation |
|--------------------------|----------------|
| AF < 2.5 | Critically damped; no separation margin needed |
| AF 2.5–3.55 | Requires: 15% margin above MCS, 5% margin below MOS |
| AF > 3.55 | Requires more stringent separation margins |

### Vibration Types and Causes
| Frequency | Type | Cause |
|-----------|------|-------|
| 1× RPM | Synchronous | Unbalance |
| 2× RPM | Synchronous | Misalignment, looseness |
| 0.1–0.5× RPM | Sub-synchronous | Oil whip, rub, rotating stall |
| 1.5×+ RPM | Super-synchronous | Vane-passing, gear mesh |

### Surge — Critical Knowledge
- **Surge Line:** Left boundary of compressor operating range
- **Surge Control Line (SCL):** 10% flow margin to the right of Surge Limit Line
- **Surge symptoms:** Flow reversal every 20–50 ms, 0.3–3 second cycle; oscillating flow/pressure/temperature; mechanical noise; potential damage to seals, bearings, impellers
- **Causes:** High system resistance (startup/shutdown), speed reduction below minimum
- **Protection:** Antisurge valve recycles gas to maintain flow right of SCL

### Choking
- Maximum flow condition; Mach = 1 at impeller inlet
- Discharge pressure drops; shock wave develops; no protection needed (output limited automatically)

### Bearing Clearance Calculation
\[ D_c = D_{bearing} - D_{shaft} \]
\[ D_{bearing} = D_{bore} - 2 T_{pad} \]
Where: average values from 4-point shaft measurement, 5-point bore measurement, 5-point pad thickness measurement

### Alignment Formulas
| Measurement | Formula |
|------------|---------|
| Radial misalignment (vertical) | \( V = X/2 \) |
| Radial misalignment (horizontal) | \( V = (Y-Z)/2 \) |
| Axial misalignment (vertical) | \( A_0 = (A1_x - A2_g)/2 \) |

### Maintenance Program
| Type | Scope |
|------|-------|
| Minor maintenance | No casing open: coupling, bearings, DGS, alignment |
| Major maintenance | Casing open: + diaphragms, labyrinths, impellers, O-rings |

### Dry Gas Seal (DGS) Types on Centrifugal Compressors
- Tandem arrangement (standard): primary + secondary seals
- Double opposed: bidirectional, toxic/hazardous gas service
- Spiral groove design: creates gas film ~3–5 µm thick during rotation

---

## DOCUMENT 9: ROTATING EQUIPMENT INSPECTION AND MAINTENANCE

### Equipment Types Covered
- Reciprocating compressors
- Centrifugal compressors
- Gas turbines
- Centrifugal pumps
- Positive displacement pumps

### Maintenance Types
| Type | Description |
|------|-------------|
| Corrective/Breakdown | Repair after failure |
| Preventive (time-based) | Scheduled regardless of condition |
| Predictive (condition-based) | Based on measured parameters |

### Centrifugal Pump Scheduled Inspection
| Interval | Tasks |
|----------|-------|
| 1,000 hrs / 3 months | Bearing lubrication, seal leakage check, oil ring, instruments calibration |
| 4,000 hrs / 1 year | Flush/replace bearing lubricant, check foundation bolts, inspect packing, coupling condition |
| 8,000 hrs / 2 years | Bearing inspection/replacement, pump float adjustment, shaft alignment check |

### Critical Tolerances
| Parameter | Tolerance |
|-----------|-----------|
| Shaft misalignment | ≤ 0.05 mm |

### Equipment Reliability — Bathtub Curve
Three failure regions:
1. **Early life (infant mortality):** Elevated failure rate due to installation errors, manufacturing defects
2. **Useful life (constant failure rate):** Random failures; lowest overall rate
3. **Wear-out:** Increasing failure rate due to fatigue, corrosion, erosion

### Condition Monitoring Parameters
| Equipment | Key Parameters |
|-----------|---------------|
| Centrifugal compressor | Vibration (radial/axial µm), temperature, pressure, ΔP across seals |
| Gas turbine | EGT, CDP, fuel flow, vibration, lube oil temperature/pressure |
| Centrifugal pump | Flow, head, vibration, bearing temperature, seal leakage |
| Reciprocating compressor | Cylinder pressure/temperature, vibration, rod drop |

---

## DOCUMENT 10: DRY GAS SEALS HANDBOOK
**Stahley**

### Seal Types Covered
| Type | Description | Application |
|------|-------------|-------------|
| Single (unpressurized) | One set of mating rings | Low-pressure, non-toxic gas |
| Tandem | Two seals in series, same direction | Standard centrifugal compressor |
| Double opposed | Two seals facing each other | Toxic/hazardous gas, bidirectional |
| Triple | Three seals in series | High-pressure, hazardous service |
| Bidirectional | Grooves work in both rotation directions | Machines subject to reverse rotation |
| Unidirectional | Optimized for single rotation direction | Standard service |

### Key Technical Concepts
| Concept | Page Reference | Notes |
|---------|---------------|-------|
| Balance ratio | p.12 | Ratio of closing to opening force area |
| Gas film thickness | pp.9,14,32 | Typically 3–5 µm (operating); seal opens at standstill |
| Leakage rates | pp.13,20 | Influenced by pressure, gas MW, film thickness |
| Seal gas conditioning | p.45 | Filtering, pressure regulation, flow control |
| Contamination sources | pp.58,60,79,80 | Liquids, particles, process gas ingestion |
| Barrier seals | pp.26,35,95 | Prevent process gas migration to atmosphere |

### Safety — Critical Alarms and Shutdowns
| Event | Response |
|-------|---------|
| Primary seal failure detected | Alarm; secondary seal takes over |
| Secondary seal leakage high | Shutdown |
| Explosive mixture possible | pp.61; inert barrier gas mandatory |
| p.63 alarm list | Comprehensive alarm/shutdown matrix |

### Retrofit from Oil Film Seals
- Economics: p.67 — typically 2–3 year payback
- Feasibility: p.69 — mechanical space, shaft modifications
- Field experience: p.71 — common successes/challenges

### Case Studies
| Application | Page |
|-------------|------|
| Gas gathering | p.81 |
| Gas injection (high pressure) | p.88 |
| Gas processing | p.97 |
| Gas transmission pipeline | p.99 |

### Materials
| Component | Material Options |
|-----------|-----------------|
| Hard face (mating ring) | Silicon carbide (SiC), tungsten carbide (WC) |
| Soft face (primary ring) | Carbon-graphite, SiC |
| Face combination | Hard/hard (aggressive gas), hard/soft (standard) |
| O-rings | Viton (standard), PTFE-encapsulated (solvents), EPDM (steam) |
| Springs | Stainless steel, Inconel (high temp) |
| Housing | 316 SS, carbon steel |

### Operating Principles
1. At rest: faces closed (spring + closing pressure hold faces together)
2. At rotation: spiral grooves pump gas outward, creating a gas film 3–5 µm thick
3. In service: leakage rate typically 1–10 SCFM per seal (gas-specific)
4. Seal gas supply: clean, dry gas at 3–5 bar above process pressure (tandem primary)
5. Buffer gas: nitrogen or instrument air to secondary seal cavity
6. Vent: primary vent to flare; secondary vent to atmosphere (non-toxic) or flare

---

## DOCUMENT 11: FUNDAMENTALS OF CENTRIFUGAL PUMP
**Mechzone's Blog, 2024**

### Topics Covered
1. Definition — rotodynamic machine converting rotary motion to pressure
2. Components — impeller, casing, shaft, bearings, mechanical seal
3. Pump Curves — H-Q curve, efficiency curve, power curve, NPSH curve
4. The Pipe System — system resistance curve, operating point intersection
5. NPSH (Net Positive Suction Head) — NPSHa vs. NPSHr, cavitation
6. VFD Operation — affinity laws, energy savings

### Centrifugal Pump Types
| Type | Key Feature |
|------|------------|
| End-suction | Suction inline with shaft; overhung impeller |
| Split-case (double-suction) | Horizontal split casing; double-hung impeller; suction/discharge opposite sides |
| Inline | Suction/discharge in-line; compact installation |
| Vertical multistage | Multiple impellers stacked; high pressure |
| Submersible | Submerged motor + pump unit |
| Axial-flow | High flow, low head |
| Horizontal multistage | Multiple stages; boiler feed, high pressure |
| Self-priming | Handles entrained air; above-grade installation |
| Regenerative | Very low flow, moderate head |

### Limitations of Centrifugal Pumps
- Cannot handle significant entrained air/gas (degrades performance, leads to vapor locking)
- Cannot efficiently handle highly viscous liquids (positive displacement preferred)

### Key Centrifugal Pump Formulas
**Affinity Laws (speed change from N₁ to N₂):**
\[ \frac{Q_2}{Q_1} = \frac{N_2}{N_1}, \quad \frac{H_2}{H_1} = \left(\frac{N_2}{N_1}\right)^2, \quad \frac{P_2}{P_1} = \left(\frac{N_2}{N_1}\right)^3 \]

**NPSH Available:**
\[ NPSH_a = \frac{P_{atm} - P_{vapor}}{\rho g} + h_{s} - h_{L} \]

**Specific Speed:**
\[ N_s = \frac{N \sqrt{Q}}{H^{0.75}} \]

---

## DOCUMENT 12: PUMPS SELECTION GUIDE
**Goulds Pumps (ITT)**

### Purpose
Selection guide for Goulds Pumps across 8 industries (Chemical, Pulp & Paper, Mining & Minerals, Power Generation, Oil Refining & Gas Processing, Primary Metals, Water & Wastewater, Food & Beverage).

### Pump Selection Checklist
**System Requirements:**
- Service (fluid, temperature, solids, vapor pressure)
- Capacity (flow rate)
- Total Dynamic Head (TDH)
- NPSHa
- Suction pressure
- Minimum flow
- Total working pressure

**Liquid Properties:**
- Fluid name and formula
- Vapor pressure
- Specific heat
- Viscosity
- Solids size and content
- Specific gravity
- Temperature
- Fluid characteristics (corrosive, abrasive, toxic)

**Safety/Environmental:**
- UL label requirements
- Regulatory compliance (fugitive emissions, product purity)
- Temperature limits

**Economy/Reliability:**
- MTBF target
- Lubrication requirements
- Cooling/heating requirements
- Operator experience level

### Key Model Performance Ranges (Goulds)
| Model | Max Flow (m³/h) | Max Head (m) | Max Temp (°C) | Max Pressure (bar) | Application |
|-------|----------------|-------------|----------------|-------------------|-------------|
| 3180/3185 | 9,000 | 125 | 230 | 16 | Paper stock |
| 3196 (ANSI) | 1,364 | 223 | 371 | 26 | Chemical process |
| 3610 (API BB1) | 11,355 | 215 | 150 | 21 (opt 42) | Power gen boiler feed |
| 3620/3640 (API BB2) | 4,540 | 455 | 455 | 70 | Refinery high-pressure |
| 3600 (API BB3) | 1,930 | 2,740 | 205 | 275 | High-pressure multistage |
| 7200CB (API BB5) | 910 | 2,740 | 425 | 275 | Barrel multistage, ultra-high pressure |
| 3700/3710 (API OH2) | 1,930 | 360 | 425 | 60 | API single stage overhung |
| 3498 | 51,098 | 244 | 135 | 14 | Extremely high flow |
| AF (Axial Flow) | 68,000 | 9.2 | 176 | — | Circulation/flood control |
| VIC/VIT (Vertical Turbine) | 15,900 | 1,067 | 260 | 176 kg/cm² | Deep well, power plant cooling |
| SRL (Slurry) | 4,542 | 50 | 121 | 28 | Mining/minerals abrasive slurry |

### API 610 Pump Type Designations
| API Designation | Description | Goulds Model |
|----------------|-------------|-------------|
| OH2 | Overhung, radially split, single stage | 3700/3710 |
| OH3 | Vertical in-line | 3910 |
| BB1 | Axially split, single stage | 3610 |
| BB2 | Radially split, single/two stage | 3620/3640 |
| BB3 | Axially split, multistage | 3600 |
| BB5 | Barrel, multistage | 7200CB |

### Smart Monitoring Products
| Product | Technology | Capability |
|---------|-----------|-----------|
| ProSmart® | Wireless (155 channels) | Continuous monitoring every 5 sec |
| i-ALERT®2 | Bluetooth, IP67, intrinsically safe | 30-day hourly + 5-yr weekly data |
| PumpSmart® | LV/MV VFD | Smart flow (no flowmeter), protection (low flow, runout, cavitation), multi-pump |

---

## CROSS-DOCUMENT TECHNICAL SYNTHESIS

### Gas Turbine Performance Summary
| Engine Class | Power Range | Simple Cycle η | Combined Cycle η | TIT | PR |
|-------------|------------|----------------|-----------------|-----|-----|
| Microturbine | 30–500 kW | 25–30% | N/A | 870°C | 3–4:1 |
| Small industrial | 1–10 MW | 28–35% | N/A | 900–1,000°C | 10–18:1 |
| Aero-derivative | 20–50 MW | 38–44% | 50–55% | 1,100–1,300°C | 25–40:1 |
| Heavy-duty frame | 50–600 MW | 33–40% | 52–62% | 1,200–1,600°C | 15–23:1 |
| H/J-class | 300–600 MW | 40–43% | 60–64% | 1,430–1,650°C | 20–25:1 |

### Critical Pressure Ratio – Efficiency Relationship
For a simple Brayton cycle:
\[ \eta = 1 - \frac{1}{Pr^{(\gamma-1)/\gamma}} \]
- γ = 1.4 (air standard)
- Increasing PR beyond optimum reduces net work output even as efficiency increases
- Optimum PR for max net work: depends on T₃/T₁ ratio

### Compressor Stage Design Limits
| Parameter | Limit |
|-----------|-------|
| Diffusion factor D | < 0.45 (blade stall risk above this) |
| Stage loading (axial) | Δh/U² < 0.4 |
| Degree of reaction (axial) | 0.5 (50% reaction preferred) |
| Stage pressure ratio (centrifugal) | 2–4:1 per impeller (high-performance) |
| Tip Mach number (centrifugal) | < 1.2 (conventional), up to 1.5 (advanced) |

### Bearing Types and Applications
| Bearing Type | Application | Typical Clearance |
|-------------|-------------|------------------|
| Tilting pad journal | High-speed compressors/turbines | 0.1–0.2% of diameter |
| Fixed lemon-bore journal | Lower-speed machines | 0.15–0.3% |
| Tilting pad thrust | Thrust load from impellers/propeller | Per API 617 |
| Rolling element | Small machines, aero-derivatives | Per manufacturer |

### NOx Control Technology Comparison
| Technology | NOx Level | Penalty |
|------------|-----------|---------|
| Diffusion combustor (base) | 100–500 ppm | — |
| Water injection | 25–42 ppm | +1–2% heat rate |
| Steam injection | 9–25 ppm | +0.5–1% heat rate |
| Dry Low NOx (DLN/DLE) | 9–25 ppm | Combustion instability risk |
| Catalytic combustion | < 3 ppm | Cost, durability issues |
| SCR (post-combustion) | 2–10 ppm | Ammonia slip, cost |

### Seal Technology Comparison
| Seal Type | Service | Leakage | Maintenance |
|-----------|---------|---------|-------------|
| Labyrinth | Low-pressure, process gas | High | Minimal |
| Mechanical contact | Small machines, pumps | Low | Moderate |
| Dry gas seal (DGS) | High-speed compressors | Very low (~1–10 SCFM) | Low (no oil) |
| Oil film seal | Legacy compressors | Low | High (oil system) |
| Magnetic seal | Hermetic, no leakage | Zero | Electrical system |

### Troubleshooting Quick Reference
| Symptom | Most Likely Cause | Primary Action |
|---------|------------------|----------------|
| High EGT, normal CDP | Turbine fouling/hot section distress | Borescope hot section |
| High EGT, low CDP | Compressor fouling | Water wash compressor |
| Distorted EGT spread | Fuel nozzle plugging/combustor damage | Borescope combustor |
| 1× vibration increase | Rotor unbalance, FOD | Check blades, balance |
| 2× vibration increase | Coupling misalignment | Realign coupling |
| 0.42× vibration | Oil whirl / fluid instability | Adjust bearing clearance, oil viscosity |
| High bearing temperature | Insufficient lube oil, contamination | Check oil flow, quality |
| Compressor surge | Low flow, high system resistance | Open antisurge valve, reduce speed |
| Pump cavitation | NPSHa < NPSHr | Raise suction level, reduce speed, pre-cool fluid |
| Pump low flow/head | Worn impeller, recirculation | Inspect impeller, check seals |
| DGS high leakage | Seal face damage, contamination | Inspect/replace DGS cartridge |

### Preventive Maintenance Interval Summary
| Equipment | Minor PM | Major PM | Overhaul |
|-----------|---------|---------|---------|
| Centrifugal pump | 1,000 hrs | 4,000 hrs | 8,000 hrs |
| Centrifugal compressor (minor) | 3–6 months | 2–3 years | 4–6 years |
| Gas turbine (heavy frame, NG) | Combustion: 16,000 hrs | HGP: 24,000 hrs | Major: 48,000 hrs |
| Gas turbine (aero-derivative) | Module swap: ~1 day | 8,000–12,000 hrs | 20,000–25,000 hrs |
| DGS seal cartridge | Annual inspection | 3–5 years | Per manufacturer |

---

## KEY STANDARDS REFERENCED ACROSS DOCUMENTS

| Standard | Scope |
|---------|-------|
| API 617 | Centrifugal compressors for petroleum, chemical, and gas service |
| API 610 / ISO 13709 | Centrifugal pumps for petroleum, petrochemical, and natural gas industries |
| API 684 | Rotordynamic tutorial and API lateral/torsional stability analysis |
| API 686 | Recommended Practice for Machinery Installation |
| ASME PTC 10 | Compressor performance testing |
| ASME PTC 22 | Gas turbine performance testing |
| ISO 1940 | Balance quality requirements for rotating rigid bodies |
| ISO 10816 / ISO 20816 | Mechanical vibration of machines — evaluation criteria |
| NEMA MG1 | Motors and generators |
| NFPA 20 | Standard for installation of stationary pumps for fire protection |

---

## APPENDIX: UNIT CONVERSIONS FOR TURBOMACHINERY

| Quantity | Conversion |
|---------|-----------|
| 1 HP | = 0.7457 kW |
| 1 BTU/hr | = 0.2931 W |
| 1 psi | = 0.06895 bar = 6,895 Pa |
| 1 bar | = 14.504 psi |
| °F to °C | (°F − 32) × 5/9 |
| °C to °F | (°C × 9/5) + 32 |
| 1 SCFM | ≈ 1.699 Nm³/hr |
| 1 gal/min (GPM) | = 0.2271 m³/hr |
| 1 ft | = 0.3048 m |
| kJ/kWh (heat rate) | = 1 / (3.6 × η) where η is decimal efficiency |
| 10,000 kJ/kWh | ≈ 36% thermal efficiency |
| 8,707 kJ/kWh | ≈ 41.3% thermal efficiency |

---

*Summary compiled: April 19, 2026*
*Source: 12 OneDrive PDF documents — turbomachinery handbooks, training materials, and reference guides*
*For turbomachinery chatbot knowledge base use*

================================================================================
SECTION 7: VIBRATION, ALIGNMENT & BEARINGS
Source: blackbook_vibration_alignment.md
================================================================================

# Blackbook: Vibration Analysis, Shaft Alignment & Bearings
## Comprehensive Technical Summary — Turbomachinery Knowledge Base
*Compiled from 11 technical PDFs, OneDrive library — April 19, 2026*

---

## TABLE OF CONTENTS
1. [Vibration Fundamentals & Theory](#1-vibration-fundamentals--theory)
2. [Vibration Severity Criteria & Standards](#2-vibration-severity-criteria--standards)
3. [Fault Diagnosis — Spectrum Patterns](#3-fault-diagnosis--spectrum-patterns)
4. [Rotating Machinery Specific Faults](#4-rotating-machinery-specific-faults)
5. [Rotor Balancing](#5-rotor-balancing)
6. [Shaft Alignment](#6-shaft-alignment)
7. [Rolling Element Bearings — Types, Fits & Installation](#7-rolling-element-bearings--types-fits--installation)
8. [Bearing Damage Modes & Root Cause Analysis](#8-bearing-damage-modes--root-cause-analysis)
9. [Fluid Film & Hydrodynamic Bearings](#9-fluid-film--hydrodynamic-bearings)
10. [Measurement Instruments & Techniques](#10-measurement-instruments--techniques)
11. [Quick-Reference Diagnostic Table](#11-quick-reference-diagnostic-table)

---

## 1. VIBRATION FUNDAMENTALS & THEORY

### Sources
- *Applied Structural and Mechanical Vibration* — Gatti & Ferrari (textbook)
- *Mechanical Vibrations: Theory and Applications, SI Edition* — Cengage (mechVib PDF, 2011)

### 1.1 Single-Degree-of-Freedom (SDOF) System

**Equation of motion:**
'''
mẍ + cẋ + kx = F(t)
'''

**Natural frequency:**
'''
ωn = √(k/m)   [rad/s]
fn = ωn / (2π)  [Hz]
'''
From static deflection: 'ωn = √(g/δst)'  
Example: m=50 kg, k=2×10⁶ N/m → fn = 1006 Hz

**Damping ratio:**
'''
ζ = c / (2mωn) = c / ccr      where ccr = 2mωn = 2√(km)
'''

**Free vibration response types:**

| Condition | ζ | Response |
|-----------|---|----------|
| Undamped | 0 | x(t) = A sin(ωnt + φ) |
| Underdamped | 0 < ζ < 1 | x(t) = Ae^(−ζωnt) sin(ωdt + φ), ωd = ωn√(1−ζ²) |
| Critically damped | 1 | x(t) = e^(−ωnt)(x₀ + ωnt·x'₀) |
| Overdamped | >1 | exponential decay, no oscillation |

**Logarithmic decrement** (from free decay):
'''
δ = ln(xk/xk+1) ≈ 2πζ    (for ζ << 1)
ζ = δ / √[(2π)² + δ²]
'''
Example: δ = 0.1 → ζ ≈ 0.016

**Forced harmonic response (Magnification Factor):**
'''
X = F₀ / (k × |M(r,ζ)|)
M(r,ζ) = 1 / √[(1−r²)² + (2ζr)²]    r = ω/ωn
'''
Peak (resonance) occurs at r = √(1−2ζ²); for small ζ, |M|_max ≈ 1/(2ζ)

**Frequency Response Function (FRF):**
'''
H(ω) = 1 / [k(1 − β²) + i·2ζβ]    β = ω/ωn
'''
FRF peaks → natural frequencies; Nyquist circle diameter = 1/c (mobility FRF)

### 1.2 Multi-Degree-of-Freedom (MDOF) Systems

**Eigenvalue problem:** [K]{X} = ω²[M]{X}  
→ n natural frequencies, n mode shapes (orthogonal)

**Proportional (Rayleigh) damping:**
'''
[C] = α[M] + β[K]    Modal damping: ζᵢ = (α/ωᵢ + β·ωᵢ) / 2
'''

**Modal superposition:** x(t) = Σ pᵢ(t)Xᵢ (decouples equations of motion)

### 1.3 Continuous Systems

**Axial wave (bar/shaft):** c²∂²u/∂x² = ∂²u/∂t²  
**Euler-Bernoulli beam:** ∂²w/∂t² + (EI/ρA)∂⁴w/∂x⁴ = f(x,t)

**Fixed-free beam natural frequencies:**
| Mode | λk (rad) | Freq factor |
|------|----------|-------------|
| 1 | 3.516 | 0.56 fL |
| 2 | 22.03 | 3.51 fL |
| 3 | 61.70 | 9.83 fL |

where fL = (1/2π)√(EI/ρAL⁴)

**Simply-supported beam:** ωk = (kπ/L)²√(EI/ρA); k=1,2,...  
Example: L=6m, E=210 GPa, I=1.2×10⁻⁴ m⁴, ρA=438 kg/m → f₁=15.9 Hz

### 1.4 Frequency Domain & Signal Analysis

**PSD input-output relationship:** Sxx(ω) = |H(ω)|² × Sff(ω)

**Coherence function (quality of FRF measurement):**
'''
γ²(ω) = |Gxy(ω)|² / [Gxx(ω)·Gyy(ω)]    (1 = perfectly coherent)
'''

**Campbell Diagram:** Plot of ωk vs. rotor speed — intersections with engine orders = critical speeds to avoid.

### 1.5 Sensors (Gatti/Ferrari values)
| Sensor | Principle | Key Spec |
|--------|-----------|----------|
| Piezoelectric (quartz) | Charge generation | d = 2.3 pC/N |
| Piezoelectric (PZT) | Charge generation | d = 350 pC/N |
| Eddy-current | Displacement | ±0.1% FS, non-contact |
| Capacitive | Displacement | 0.01 µm resolution |
| Seismometer | Relative displacement | r >> 1 (low ωn; low-freq motion) |
| Accelerometer | Acceleration | r << 1 (high ωn; high-freq) |

Instrument error: E = 100|1 − M(r,ζ)| for accelerometer.

---

## 2. VIBRATION SEVERITY CRITERIA & STANDARDS

### Sources
- *Mechanical Vibrations: Theory and Applications* (ISO 10816)
- *SKF VibrationGuide CM5003* (ISO 2372 / ISO 10816)
- *SKF CM5118 Spectrum Analysis*
- *R&T 2008 Keefer — Principles and Practices of Vibrational Analysis*

### 2.1 ISO 10816 / ISO 2372 — Velocity RMS Severity

**In metric units (mm/s RMS):**

| Machine Class | Good | Satisfactory | Unsatisfactory | Unacceptable |
|---------------|------|--------------|----------------|--------------|
| Small (<15 kW) | <2.8 | 2.8–4.5 | 4.5–7.1 | >7.1 |
| Medium (15–75 kW) | <4.5 | 4.5–7.1 | 7.1–11.2 | >11.2 |
| Large, rigid (>300 kW) | <7.1 | 7.1–18 | 18–31.5 | >31.5 |
| Large, flexible | <11.2 | 11.2–28 | 28–45 | >45 |

**In Imperial units (in/s RMS) — ISO 2372 / SKF CM5003:**

| Class | Good | Satisfactory | Unsatisfactory | Unacceptable |
|-------|------|--------------|----------------|--------------|
| Class I (small, rigid) | ≤0.044 | ≤0.177 | ≤0.44 | >0.44 |
| Class II (medium, rigid) | ≤0.028 | ≤0.11 | ≤0.28 | >0.28 |
| Class III (large, rigid) | (similar scale up to 2.79 in/s RMS) |

Full SKF table spans 0.011–2.79 in/s RMS across 4 machine classes.  
**Practical target:** Stay below 50% of the Satisfactory limit for operational margin.

### 2.2 Keefer (R&T 2008) — Rotating Machinery Severity Thresholds

**Overall vibration alarm levels:**
- Compressors at 3600 RPM: Overall **>0.3 ips RMS** = cause for concern
- Piping/valves: **>1.0 ips RMS** = cause for concern

**Individual spectrum peak limits — Compressors:**
| Fault Component | Limit |
|-----------------|-------|
| 1X, 2X, 3X running speed | ≤0.25 ips RMS |
| Gas pulsation frequency | ≤0.27 ips RMS |
| Bearing fault frequencies (BPFO/BPFI/BSF/FTF) | ≤0.15 ips RMS |
| Roller bearing high-freq zone (2000–3000 Hz) | ≤2.5 g's |

**Individual spectrum peak limits — Motors:**
| Fault Component | Limit |
|-----------------|-------|
| 1X, 2X, 3X running speed | ≤0.25 ips RMS |
| Line frequency (60 Hz = 3600 CPM) | ≤0.13 ips RMS |
| Bearing fault frequencies | ≤0.15 ips RMS |

### 2.3 Zeller's Power / DIN 4150 (Gatti/Ferrari)

**DIN 4150 vibration severity (KB index):**
'''
KB = d × √v   [mm/s]    (d = displacement amplitude, v = RMS velocity)
'''
KB < 0.4 daytime (offices) = acceptable per DIN 4150

**Zeller's Power:** Z = a² / √v  
Scale: Z < 2 = very light; Z > 50 = heavy vibration

### 2.4 SKF SEE (Stress Wave Energy) & Enveloping Severity

**SEE severity scale (used for bearing condition monitoring):**
| SEE Level | Interpretation |
|-----------|----------------|
| 0–3 | No problem |
| 3–20 | Lubrication or light defect |
| 20–100 | Bearing defect or contamination |
| >100 | Severe bearing problem |

**Enveloping severity (Band I):**
| Level | mG |
|-------|----|
| Good | 0–2 |
| Satisfactory | 2–10 |
| Unsatisfactory | 10–50 |
| Unacceptable | >50 |

**Multi-parameter progression (earliest detection → latest):**
SEE → Enveloping → Acceleration/Velocity → Overall vibration

---

## 3. FAULT DIAGNOSIS — SPECTRUM PATTERNS

### Sources
- *SKF CM5118 Spectrum Analysis*
- *SKF VibrationGuide CM5003*
- *R&T 2008 Keefer*
- *Mechanical Vibrations: Theory and Applications*

### 3.1 Unbalance
- **Signature:** Single dominant 1X peak; radial direction dominant
- **Phase:** ~90° between horizontal and vertical (quadrature)
- **Harmonic content:** Harmonics <15% of 1X amplitude
- **Orbit:** Circular (pure unbalance)
- **Force:** F = m₀ × e × ω²   (m₀e = unbalance, ω = angular speed)

### 3.2 Misalignment
- **Signature:** High 2X relative to 1X; may also have 3X
- **Thresholds (SKF CM5003):**
  - 2X/1X < 50%: Acceptable
  - 50%–150%: Probable coupling damage
  - >150%: Severe misalignment — fix immediately
- **Phase:** 180° axial phase difference between ends (bent shaft or angular misalignment)
- **Orbit:** Figure-8 pattern
- **Rule (CM5118):** 2X amplitude 30–200% of 1X indicates misalignment

### 3.3 Mechanical Looseness
- **Signature:** 3 or more synchronous and/or half-synchronous harmonics
- **Threshold:** >20% of 1X amplitude in harmonics indicates looseness
- **Overall level:** ~2.5 mm/s typical when loose

### 3.4 Bent Shaft
- **Signature:** High 1X + 2X
- **Phase:** ~180° axial phase difference
- **Similar to misalignment** — distinguish using phase measurements

### 3.5 Gear Faults
- **Gear Mesh Frequency (GMF):** GMF = number of teeth × RPM
- **Analysis setup:** Fmax = 3.25 × GMF
- **Normal spectrum:** Clean GMF peak with sidebands spaced at mating gear RPM
- **Fault indication:** Sidebands increase in number and amplitude; GMF amplitude changes; ghost frequencies possible

### 3.6 Blade/Vane Pass Frequency
- **BPF = number of vanes × RPM**
- **Turbomachinery:** BPF = #blades × shaft RPM
- **Cavitation signature:** Broadband noise 20,000–120,000 CPM

### 3.7 Electrical Faults (Motors)
| Fault | Frequency Signature |
|-------|---------------------|
| Stator eccentricity | High 2×line freq = 7200 CPM (60 Hz) / 6000 CPM (50 Hz) |
| Eccentric rotor | 2FL ± pole pass freq (FP = slip × poles) |
| Broken rotor bars | High 1X + sidebands at FP; RBPF = #bars × RPM |
| General electrical | Peaks at multiples of line frequency |

### 3.8 Fluid Film Bearing Instabilities
| Symptom | Frequency | Orbit | Cause |
|---------|-----------|-------|-------|
| Oil whirl | ~0.43–0.48× RPM | Large ellipse | Hydrodynamic instability |
| Oil whip | Locked at 1st critical | Severe | Oil whirl → whip when fn = 0.47× |
| Blade rub | 0.47× RPM | Wide/irregular | Rotor-stator contact |

### 3.9 Bearing Failure Stages (Keefer — 4 Stages)
1. **Stage 1:** No vibration change; defect exists but undetected
2. **Stage 2:** Defect harmonics appear in high-frequency range (SEE/enveloping)
3. **Stage 3:** Defect fundamental frequencies appear (BPFO/BPFI) + sidebands
4. **Stage 4:** "Haystack" broadband noise + multiple sidebands; imminent failure

---

## 4. ROTATING MACHINERY SPECIFIC FAULTS

### Sources
- *R&T 2008 Keefer*
- *SKF CM5118 Spectrum Analysis*

### 4.1 Bearing Defect Frequencies (Standard Formulas)

Variables: n = number of rolling elements; RPM = shaft speed (RPM/60 = Hz); Bd = ball diameter; Pd = pitch diameter; Ø = contact angle

'''
BPFO = (n/2)(RPM/60)[1 − (Bd/Pd)cosØ]    Ball Pass Freq, Outer race
BPFI = (n/2)(RPM/60)[1 + (Bd/Pd)cosØ]    Ball Pass Freq, Inner race
BSF  = (Pd/2Bd)(RPM/60)[1 − (Bd/Pd)cosØ]²   Ball Spin Frequency
FTF  = (1/2)(RPM/60)[1 − (Bd/Pd)cosØ]    Fundamental Train Frequency
'''

**CPM-based shorthand (60 Hz):** All frequencies multiply by 60 for CPM.

### 4.2 Compressor-Specific
- **Gas pulsation frequency:** = number of lobes × RPM
- **Fluid pulsation frequency:** = number of vanes × RPM
- **Reciprocating compressors:** Firing frequency = #cylinders × RPM/2 (4-stroke)

### 4.3 Motor-Specific
- **Pole pass frequency:** FP = slip_freq × number_of_poles
- **Rotor bar pass frequency:** RBPF = number_of_rotor_bars × RPM
- **Broken bar indicator:** Sidebands at RBPF ± FP

---

## 5. ROTOR BALANCING

### Sources
- *2016 TPS Tutorial: Rotor Balancing* — Pavelek (Texas A&M TPS)

### 5.1 Fundamental Concepts

**Unbalance force:** F = m × e × ω²  
(m = residual mass, e = eccentricity, ω = angular velocity)  
Produces 1×RPM vibration.

**Types of unbalance:**
| Type | Description | Correction Planes |
|------|-------------|-------------------|
| Static | CG offset; no couple | Any single plane |
| Dynamic (Couple) | 180° out-of-phase between ends | Two planes required |
| Modal | Flexible rotor; mode-specific | Mode-matched planes |

### 5.2 Balancing Quality Grades (ISO 1940)

**Formula:** U = 6.015 × G × W / N  (oz-in)  
Where G = grade, W = rotor weight (lbs), N = operating RPM

| ISO Grade | eper (mm/s pk) | Typical Application |
|-----------|----------------|---------------------|
| G1 | 1 | Turbomachinery, gyroscopes |
| G2.5 | 2.5 | Turbines, compressors, pumps |
| G6.3 | 6.3 | General industrial fans, centrifuges |
| G16 | 16 | Drive shafts, agricultural machinery |

### 5.3 API Tolerance (API 684)

**Residual unbalance per bearing plane:**
'''
U = 4W / N   [oz-in]    (W = static journal load in lbs, N = RPM)
'''
- For N > 25,000 RPM: eccentricity e ≤ 250 µm

**API verification procedure:**  
Trial weight = 2 × (4W/N); apply at 6 angular positions per plane.  
Plot polar diagram — forms circle; center = residual unbalance.

### 5.4 Single-Plane Balancing (Influence Coefficient)

'''
IC = TW / T     (TW = trial weight, T = trial run vector)
Heavy spot = O × IC     (O = original vibration vector)
Correction weight = Heavy spot + 180°
'''

**Phase lag rules:**
- Below critical speed: ~0° lag
- At critical (resonance): ~90° lag
- Above critical: ~180° lag

### 5.5 Multi-Plane Influence Coefficient Method

'''
ΔV = Vi,j − Vi,k     (vibration change from trial weight)
ΔW = Wj − Wk
Influence coefficient C = ΔV / ΔW
'''
Least-squares minimization: minimizes Σ(residual)²

### 5.6 Shop Balancing (API/ISO Procedure)
1. Balance bare shaft first (half keys per ISO 8821)
2. Balance individual components to G1
3. Incremental assembly balancing
4. Maximum 3 shims per correction plane

**Turbomachinery examples (from Pavelek):**
- 7-stage compressor, 8610 RPM: 2-plane balance, 4 proximity probes
- 5 MW turbine-generator, 3600 RPM: Static/couple method, multi-trial runs

---

## 6. SHAFT ALIGNMENT

### Sources
- *ROT Machinery Alignment* — "An Engineer's Guide to Shaft Alignment, Vibration Analysis, Dynamic Balancing & Wear Debris Analysis" (PRUFTECHNIK)
- *Shaft Alignment* — Ghulam Mohiuddin (shaft_Alignment__1675770555.pdf)

### 6.1 Definition & Concepts

**Shaft alignment:** Positioning the rotational centers of two or more shafts so they are co-linear when the machines are under normal operating conditions.

**Misalignment types:**
| Type | Definition |
|------|------------|
| Offset (parallel) | Displacement of one shaft centerline from another at a given cross-section |
| Angular | Slope difference between two rotational centerlines; 1 mrad = 1 mm/m = 1 thou/inch |
| Combined | Both offset and angular present simultaneously |

**Planes:**
- **Horizontal:** Viewed from top; corrected by sliding machine laterally
- **Vertical:** Viewed from side; corrected by shimming

### 6.2 Alignment Tolerances

**Short flexible couplings — Offset at coupling center (PRUFTECHNIK):**

| RPM | Excellent (mm) | Acceptable (mm) |
|-----|---------------|-----------------|
| 600 | 0.10 | 0.20 |
| 1200 | 0.08 | 0.15 |
| 1800 | 0.06 | 0.12 |
| 3000 | 0.05 | 0.10 |
| 6000 | 0.03 | 0.05 |

**Spacer shaft tolerances (per 100 mm spacer length):**

| RPM | Excellent (mm) | Acceptable (mm) |
|-----|---------------|-----------------|
| 600 | 0.20 | 0.40 |
| 3000 | 0.10 | 0.20 |
| 6000 | 0.05 | 0.10 |

**Angular tolerances (Mohiuddin — in mils/inch):**

| RPM | Excellent (mils/in) | Acceptable (mils/in) |
|-----|---------------------|----------------------|
| 3600 | 0.3 | 0.5 |
| 1800 | 0.5 | 0.7 |
| 1200 | 0.7 | 1.0 |
| 900 | 1.0 | 1.5 |

**Offset tolerances (Mohiuddin — in mils = 0.001 inch):**

| RPM | Excellent (mils) | Acceptable (mils) |
|-----|-----------------|-------------------|
| 3600 | 1 | 2 |
| 1800 | 2 | 4 |
| 1200 | 3 | 6 |
| 900 | 4 | 8 |

### 6.3 Soft Foot

**Definition:** Condition where one or more machine feet do not make full contact with the base when hold-down bolts are loosened.

**Types:**
- **Parallel soft foot:** Gap is uniform → correct with parallel shims
- **Angular soft foot:** Gap is tapered → correct with tapered shims

**Correction threshold:** Correct if lift > 0.08 mm (PRUFTECHNIK standard)  
**Limit:** Maximum 3 shims per foot

**Check procedure:** Loosen each foot bolt individually; measure indicator deflection. >0.08 mm = soft foot requiring correction.

### 6.4 Alignment Methods

| Method | Accuracy | Description |
|--------|----------|-------------|
| Straightedge/feeler gauge | ~0.1 mm | Rough check; offset with straightedge, angular with feeler gauge |
| Rim-and-face (dial indicator) | 0.025 mm | Rim = offset, face = angularity; susceptible to sag |
| Reverse dial indicator | 0.01 mm | Two indicators on both shafts; preferred by API 686; compensates for sag |
| Laser alignment | 0.001–0.005 mm | Most accurate; no sag; real-time feedback; industry standard |

### 6.5 Thermal Growth Compensation

**Formula:**
'''
ΔL = L × α × ΔT
'''
α = 0.0000059 / °F (cast iron/steel ≈ 12×10⁻⁶ /°C)

**Example calculation (PRUFTECHNIK):**  
Machine height L = 26", temperature rise ΔT = 250°F  
ΔL = 26 × 0.0000059 × 250 = **0.038 inch** vertical growth

→ Must cold-align the machine LOW (below nominal) by this amount.

### 6.6 Step-by-Step Alignment Procedure (PRUFTECHNIK)

1. **Preparation:** Clean feet, remove rust/paint, inspect coupling
2. **Soft foot check & correction:** Verify all 4 feet before measuring
3. **Cold alignment measurement:** Rough align within 0.1 mm using straightedge
4. **Calculate corrections:** Determine shim changes and lateral moves at each foot
5. **Apply corrections:** Shim vertical; slide horizontal
6. **Verify:** Re-measure; repeat until within tolerance
7. **Document:** Record final cold-alignment readings and predicted hot-alignment

### 6.7 Vibration Indicators of Misalignment
- Axial vibrations ↑ = angular misalignment indicator
- High 2X peak in spectrum
- 2X/1X ratio >50% = probable coupling damage; >150% = severe
- Bearing temperatures elevated
- Coupling wear (flexible elements)

---

## 7. ROLLING ELEMENT BEARINGS — TYPES, FITS & INSTALLATION

### Sources
- *EXP-MN-SM060-EN: Mechanical Maintenance Training Manual — Bearings* (Bearings_1690583983.pdf)
- *Bearing Design in Machinery* — Harnoy

### 7.1 Bearing Types

| Type | Sub-types | Characteristics |
|------|-----------|-----------------|
| Ball | Rigid, angular contact, self-aligning | Low friction; radial + axial loads |
| Roller | Cylindrical, tapered, spherical, needle | Higher radial capacity; heavy loads |
| Thrust | Ball thrust, roller thrust | Axial loads only |
| Needle | Thin/lightweight | High radial load, limited axial |

**ABEC Quality Scale:** 1–9 (odd numbers); higher number = tighter tolerances.

### 7.2 Radial Clearance Classes (ABMA Standard)

C2 (tightest) → Normal → C3 → C4 → C5 (loosest)

**Example — Deep-groove ball bearing, d = 60 mm:**
| Clearance Class | Radial Clearance Range |
|-----------------|------------------------|
| C2 | 5–20 µm |
| Normal | 10–30 µm |
| C3 | 23–43 µm |
| C4 | 35–60 µm |
| C5 | 50–75 µm |

**High-speed guideline (Harnoy):**
'''
C/D = 0.0009 + N/83,000    (N in RPM)
'''

### 7.3 Interference Fits & Installation

**Fit selection principle:**
- Rotating ring → tight (interference) fit
- Stationary ring → free (clearance) fit

**Shaft fits (from EXP-MN-SM060 Table 4):**
| Installation | Shaft Fit | Bore Fit |
|-------------|-----------|----------|
| Press (light) | H6/H7 | p6 |
| Interference | H7 | s7, u7 |
| Rotating bushing | Tight | — |
| Fixed bushing | Free | — |

### 7.4 Heating for Installation (EXP-MN-SM060 Limits)

| Bearing Bore Diameter | Max Heating Temp |
|-----------------------|-----------------|
| ≤100 mm | 90°C |
| 100–150 mm | 120°C |
| ≥150 mm | 130°C |
| Standard maximum | 130°C |
| Sealed bearings | **80°C maximum** |

**Never exceed 130°C** (conventional bearings) to avoid metallurgical changes.

### 7.5 Lubrication

**Grease quantity formula (EXP-MN-SM060):**
'''
Gp = 0.005 × D × B   [grams]
'''
D = bearing outside diameter (mm), B = bearing width (mm)

Example: D = 90 mm, B = 15 mm → Gp = 6.75 g

**Key statistic:** 70% of bearing failures are due to lubrication problems.

### 7.6 Rolling Element Bearing Fatigue Life (Harnoy / ISO 281)

'''
L₁₀ = (C/P)^k × 10⁶   [revolutions]
'''
- k = 3 for ball bearings
- k = 10/3 for roller bearings
- C = basic dynamic load rating [N]
- P = equivalent dynamic load [N]
- L₁₀ = life at which 90% of bearings survive

**DN limit (turbomachinery):** DN < 2×10⁶ for conventional bearings; hybrid Si₃N₄ required for higher speeds in jet engines.

### 7.7 Case Hardening (EXP-MN-SM060)
- Temperature range: 870–1100°C
- Hardened depth: 0.1–3 mm
- Austenitizing: 850°C → quench to 40°C → temper at 180°C

---

## 8. BEARING DAMAGE MODES & ROOT CAUSE ANALYSIS

### Sources
- *Classic Bearings Damage Modes* — Timken
- *EXP-MN-SM060-EN: Mechanical Maintenance Training Manual — Bearings*

### 8.1 Damage Classification

**Two main categories:**
1. **Material Fatigue** (sub-surface or surface-initiated)
2. **Wear or Other Damage** (contamination, lubrication, misuse)

### 8.2 Fatigue Damage Modes

| Mode | Description | Root Cause |
|------|-------------|------------|
| Spalling (subsurface) | Material flaking from surface | Design life exceeded, material defects |
| Inclusion Origin Spalling | Spall initiates at inclusion visible at fracture | Dirty steel, poor quality control |
| Point Surface Origin (PSO) Spalling | Debris/raised metal causes localized stress concentration | Contaminated lubricant, debris |
| GSC (Geometric Stress Concentration) Spalling | Spall at edge/geometry stress riser | Misalignment, heavy loading, poor fit |

**L₁₀ definition:** Number of hours/revolutions exceeded by 90% of bearings under a given load (statistical basis for fatigue life).

### 8.3 Contamination Damage

| Mode | Visual ID | Cause |
|------|-----------|-------|
| Abrasive wear | Longitudinal scratches/grooves on rolling surfaces | Hard particles in lubricant |
| Bruising | Shallow indentations preserving original texture | Hard particle embedded |
| Denting | Larger indentations | Debris/impact |
| Etching / Corrosion | Pitting on raceway; moisture staining | Water contamination, acid |
| Fretting corrosion | Rust-like reddish-brown debris at fits | Micro-vibration in stationary bearing |

### 8.4 Lubrication-Related Damage

| Mode | Visual ID | Cause |
|------|-----------|-------|
| Peeling / Microspalling | Fine surface flaking; matte texture | Inadequate EHD film |
| Rib-roller end scoring | Heavy abrasion at roller ends | Starvation/thin film |
| Heat discoloration | Blue/brown tempering colors | Overheating from inadequate lube |
| Smearing | Surface "wiped" appearance | High sliding velocity under load reversal |
| False Brinelling | Indents with worn/matte texture (no original surface texture visible) | Vibration in stationary bearing with insufficient lube |

### 8.5 True Brinelling vs. False Brinelling

| | True Brinelling | False Brinelling |
|--|-----------------|------------------|
| Cause | Impact/shock load | Vibration; stationary bearing |
| Surface in indent | Original texture PRESERVED | Texture WORN AWAY (fretting) |
| Debris | None | Reddish-brown oxidized particles |
| Condition | Single event | Repetitive micro-motion |

### 8.6 Misuse/Improper Installation

| Mode | Description | Prevention |
|------|-------------|------------|
| True Brinelling | Deep indents from hammer blows | Use correct installation tools |
| Electric arc burns | Pitting/fluting from current leakage | Shaft grounding, insulated bearings |
| Overload spalling | Edge loading, fracture | Correct load calculation, alignment |

### 8.7 White Etch Areas (WEA) / Butterfly Wings

- **Origin:** Phase transformations under cyclic high-stress contact
- **Microhardness:** Matrix = 825 KHN; Butterfly (WEA) = 1780 KHN
- **WEC (White Etch Cracking):** WEA + crack network → premature brittle flaking
- **Significance:** Causes premature failure at fraction of L₁₀ life; common in wind turbine gearbox bearings

### 8.8 Smearing Test Data (Timken 4-S Rig)

**Test conditions:**
- Speed: 1800 RPM
- Load: 17.8 kN for 40 min + 7.0 kN for 60 min
- Lubricant: SAE 20 PAO oil

**Result:** Wear-Resistant surface treatment (ES322) survived 3 cycles without smearing.

---

## 9. FLUID FILM & HYDRODYNAMIC BEARINGS

### Sources
- *Bearing Design in Machinery: Engineering Tribology and Lubrication* — Harnoy

### 9.1 Hydrodynamic Journal Bearings

**Sommerfeld number:**
'''
S = (μN/P)(R/C)²
'''
μ = dynamic viscosity, N = shaft speed (rev/s), P = load per unit projected area, R = radius, C = radial clearance

**Long bearing load capacity:**
'''
W = [12π μ U R² L / C²] × [ε / ((2+ε²)(1−ε²)^½)]
'''
where ε = eccentricity ratio = e/C

**Short bearing (Ocvirk number):**
'''
W = (μUL³/4C²) × [ε/(1−ε²)²] × [π²(1−ε²) + 16ε²]^½
'''

**L/D ratio guide:** L/D < 0.5 = short bearing; L/D > 1.5 = long bearing.

### 9.2 EHD (Elastohydrodynamic) Film Thickness

**Line contact (Hamrock-Dowson formula):**
'''
h_min/Rx = 1.714 × Ur^0.694 × (αEeq)^−0.568 × W̄^−0.128
'''
Ur = speed parameter, α = pressure-viscosity coefficient, Eeq = equivalent elastic modulus, W̄ = load parameter

**Lambda ratio (film quality):**
'''
λ = h_min / Rs
'''
- λ > 3–5: Full EHD (no contact)
- λ 1–3: Partial EHD (some asperity contact)
- λ < 1: Boundary lubrication (high wear)

**Minimum film thickness:** h_min = 10–100× RMS surface roughness (Rs) for full film.

### 9.3 Radial Clearance Design (Harnoy)

**General guideline:**
'''
C/D = 0.0009 + N/83,000    (N in RPM)
'''
Example: N = 3600 RPM → C/D = 0.0009 + 0.0434 = 0.044 → for D = 100 mm: C = 4.4 mm  
*(N.B. this is for speed parameter, not actual clearance — use with journal bearing design charts)*

### 9.4 Hydrostatic Bearings

**Stiffness (constant pressure supply):**
'''
k = 3Ae(β − β²)Ps / h₀
'''
Ae = effective area, β = pocket area ratio, Ps = supply pressure, h₀ = film thickness

### 9.5 Bearing Materials

| Material | Key Properties | Application |
|----------|----------------|-------------|
| Babbitt (white metal) | Soft, conformable; 50–800 µm layer | Sleeve bearings, turbines |
| PTFE | f = 0.04–0.1; PV = 35,000 Pa·m/s; T_max = 260°C | Low-speed, dry/semi-dry |
| Sintered bronze | PV = 3.85×10⁶ Pa·m/s | Medium-speed, oil-impregnated |
| Nylon | PV = 105×10³ Pa·m/s; T_max = 93°C | Light loads, non-metallic |
| Silicon nitride (Si₃N₄) | ρ = 3200 kg/m³, E = 314 GPa | Hybrid rolling bearings, high speed |

### 9.6 Turbomachinery Bearing Technologies

| Technology | DN Limit | Application |
|------------|----------|-------------|
| Steel rolling element | ~1×10⁶ | General industrial |
| Hybrid Si₃N₄ rolling element | ~2×10⁶ | High-speed turbomachinery |
| Foil/air bearings | No contact | Micro-turbines, high-speed spindles |
| Magnetic bearings (AMB) | Unlimited | Compressors, cryogenic turbines |

**DN = bore diameter (mm) × speed (RPM)**  
DN < 2×10⁶ for jet engine conventional bearings.

---

## 10. MEASUREMENT INSTRUMENTS & TECHNIQUES

### Sources
- *R&T 2008 Keefer*
- *SKF CM5003 VibrationGuide*
- *Applied Structural and Mechanical Vibration* — Gatti/Ferrari
- *SKF CM5118 Spectrum Analysis*

### 10.1 Sensor Selection by Application

| Sensor Type | Frequency Range | Best For |
|-------------|----------------|----------|
| Accelerometer | 10 Hz – 40+ kHz | High-frequency faults, bearing defects, structural resonance |
| Velocity sensor | 10–1500 Hz (~10–90,000 CPM) | General machinery faults, ISO severity monitoring |
| Eddy-current probe (proximity) | DC – 10 kHz | Sleeve/fluid film bearings; orbit plots; shaft displacement |
| Capacitive sensor | DC – 10 kHz | High-precision displacement, non-contact |

**Proximity probes (eddy-current):** Used on turbomachinery with sleeve bearings.  
Units: mils (1 mil = 0.001 inch) peak-to-peak displacement.

### 10.2 Measurement Frequency Bands (SKF CM5118)

| Band | Technique | Application |
|------|-----------|-------------|
| Low freq (<10 Hz) | Velocity/displacement | Slow-speed machinery |
| 10–2000 Hz | Velocity spectrum | Standard fault detection (imbalance, misalignment, looseness) |
| 2–20 kHz | Acceleration | Gears, high-speed bearings |
| 20–500 kHz | Acceleration enveloping (SEE) | Early bearing/gear defect detection |

### 10.3 Measurement Directions & Mounting (SKF)

**3-axis measurements required:**
- **Axial (A):** Angular misalignment, thrust problems
- **Horizontal (H):** Unbalance, soft foot
- **Vertical (V):** Looseness, resonance

**Transducer mounting (decreasing reliability):**  
Permanent stud → Magnetic base → Hand-held probe

**Hand-held penalty:** +3 dB uncertainty; avoid for trending.

### 10.4 Spectrum Analysis Setup (SKF CM5118)

- **Fmax for general rotating machinery:** 10× running speed (captures 10 harmonics)
- **Fmax for gear analysis:** 3.25 × GMF
- **Resolution:** Minimum 800 lines; 1600+ for gear analysis
- **Averaging:** 4–8 linear averages for steady-state; synchronous time averaging for gears

### 10.5 Phase Measurement Techniques

- **Strobe light / tachometer:** Reference 1X phase
- **Phase relationship between bearings:** Differentiates unbalance (in-phase) from misalignment/looseness
- **90° H-V phase difference:** Normal for unbalance
- **180° axial phase difference:** Bent shaft or angular misalignment

---

## 11. QUICK-REFERENCE DIAGNOSTIC TABLE

| Symptom | Dominant Frequency | Phase | Typical Amplitude Ratio | Most Likely Cause | Priority |
|---------|-------------------|-------|-------------------------|-------------------|----------|
| High 1X (radial) | 1× RPM | 0–90° H-V lag | — | Unbalance | Medium |
| High 1X + 2X (radial) | 1X, 2X RPM | 180° axial | 2X/1X > 50% | Misalignment | High |
| High 2X (radial) | 2× RPM | 180° axial | 2X dominant | Coupling damage | High |
| Multiple harmonics (1X, 2X, 3X+) | Synchronous multiples | Variable | >20% in harmonics | Looseness | Medium |
| High 1X + 2X axial | 1X, 2X axial dominant | 180° axial | — | Bent shaft | High |
| Sub-synchronous (0.4–0.5×) | ~0.47× RPM | Non-repeating | Growing | Oil whirl/whip | Critical |
| High at GMF ± sidebands | GMF, sidebands at RPM | — | Sidebands growing | Gear wear | High |
| High at BPF | n_blades × RPM | — | — | Blade damage/flow | Medium |
| Broadband 20k–120k CPM | Random broadband | — | — | Cavitation | High |
| High 2×line freq (7200 CPM) | 7200 CPM (60 Hz) | — | — | Stator eccentricity | High |
| 1X + FP sidebands | 1X ± FP | — | FP sidebands growing | Broken rotor bar | High |
| SEE > 20 | High-freq enveloping | — | — | Bearing defect | High |
| SEE > 100 | High-freq enveloping | — | — | Bearing imminent failure | Critical |

---

## APPENDIX A: KEY FORMULAS SUMMARY

### Vibration
- Natural freq: ωn = √(k/m); fn = ωn/(2π)
- Damping ratio: ζ = c/(2mωn)
- Log decrement: δ = 2πζ; ζ = δ/(2π) for small ζ
- Mag factor: M = 1/√[(1−r²)² + (2ζr)²]
- Unbalance force: F = m·e·ω²

### Bearing Defect Frequencies
- BPFO = (n/2)(RPM/60)[1 − (Bd/Pd)cosØ]
- BPFI = (n/2)(RPM/60)[1 + (Bd/Pd)cosØ]
- BSF = (Pd/2Bd)(RPM/60)[1 − (Bd/Pd)cosØ]²
- FTF = (1/2)(RPM/60)[1 − (Bd/Pd)cosØ]

### Gear/Blade
- GMF = n_teeth × RPM
- BPF = n_blades × RPM
- RBPF = n_rotor_bars × RPM

### Balancing
- API tolerance: U = 4W/N oz-in per plane
- ISO grade: U = 6.015 × G × W / N oz-in

### Alignment
- Thermal growth: ΔL = L × α × ΔT (α ≈ 12×10⁻⁶/°C steel)
- Soft foot threshold: >0.08 mm = correct

### Lubrication
- Grease amount: Gp = 0.005 × D × B [grams]
- L₁₀ life: (C/P)^k × 10⁶ rev (k=3 ball, 10/3 roller)
- Lambda ratio: λ = h_min/Rs (>3 = full film)
- Sommerfeld: S = (μN/P)(R/C)²

---

## APPENDIX B: DOCUMENT INVENTORY

| # | Document | Source | OneDrive ID |
|---|----------|--------|-------------|
| 1 | Applied Structural and Mechanical Vibration — Gatti/Ferrari | Textbook | EE3702398775304E!440222 |
| 2 | Mechanical Vibrations: Theory & Applications (mechVib) — Cengage | Textbook | EE3702398775304E!540167 |
| 3 | Principles & Practices of Vibrational Analysis — Keefer (R&T 2008) | Course notes | EE3702398775304E!440215 |
| 4 | SKF VibrationGuide CM5003 | SKF manual | EE3702398775304E!540324 |
| 5 | SKF CM5118 Spectrum Analysis | SKF manual | EE3702398775304E!540323 |
| 6 | 2016 TPS Tutorial: Rotor Balancing — Pavelek (Texas A&M) | Conference paper | EE3702398775304E!562929 |
| 7 | Shaft Alignment — Ghulam Mohiuddin | Training doc | shaft_Alignment__1675770555 |
| 8 | ROT Machinery Alignment (PRUFTECHNIK) | Engineering guide | EE3702398775304E!440229 |
| 9 | Bearings Training Manual EXP-MN-SM060-EN | Training manual | EE3702398775304E!563234 |
| 10 | Classic Bearings Damage Modes — Timken | Application guide | EE3702398775304E!440200 |
| 11 | Bearing Design in Machinery — Harnoy | Textbook | EE3702398775304E!440138 |

---

*End of Blackbook — Vibration Analysis, Shaft Alignment & Bearings*  
*Compiled: April 19, 2026 | Total documents: 11 | Knowledge base ready for turbomachinery chatbot integration*

================================================================================
SECTION 8: PROCESS & TECHNICAL REFERENCES
Source: blackbook_process_technical.md
================================================================================

# Engineering Blackbook — Process & Technical Reference Summary

**Compiled:** April 19, 2026  
**Account:** danigreco@outlook.com (OneDrive: EE3702398775304E)  
**Purpose:** Comprehensive technical knowledge base for turbomachinery and process engineering chatbot training  
**Source:** Engineering Blackbook on iMac Greco (device_id: 3E58C98C-008F-5819-800B-B6DE60263EDA)

---

## Table of Contents

1. [Liquefaction System Description Manual (APCI)](#1-liquefaction-system-description-manual-apci)
2. [Refrigeration System Description Manual (APCI)](#2-refrigeration-system-description-manual-apci)
3. [Process Design Basis — Refrigeration System](#3-process-design-basis--refrigeration-system)
4. [Hot Oil System Description Manual](#4-hot-oil-system-description-manual)
5. [Nitrogen (N2) System Description Manual](#5-nitrogen-n2-system-description-manual)
6. [Power Generation System Description Manual](#6-power-generation-system-description-manual)
7. [Natural Gas Specifications Sheet](#7-natural-gas-specifications-sheet)
8. [Basics of Air Cooled Heat Exchangers (ACHE) Brochure](#8-basics-of-air-cooled-heat-exchangers-ache-brochure)
9. [Pickling Handbook (AvestaPolarit)](#9-pickling-handbook-avestapoalarit)
10. [Fin Fan Air Cooler Engineering Design Guidelines (KLM Technology Group)](#10-fin-fan-air-cooler-engineering-design-guidelines-klm-technology-group)
11. [Motor Protective Settings](#11-motor-protective-settings)
12. [Carbon Dioxide (CO2) Technical Data Sheet](#12-carbon-dioxide-co2-technical-data-sheet)
13. [American Journal of Chemical Engineering — Fire-Tube Boiler Study](#13-american-journal-of-chemical-engineering--fire-tube-boiler-study)
14. [Propane Technical Pocket Guide (PERC)](#14-propane-technical-pocket-guide-perc)
15. [ELECTRICAL Directory — Reference Files](#15-electrical-directory--reference-files)
16. [CORROSION Directory — Reference Files](#16-corrosion-directory--reference-files)
17. [COMBUSTION CONTROL Directory — Reference Files](#17-combustion-control-directory--reference-files)
18. [FASTENERS Directory — Reference Files](#18-fasteners-directory--reference-files)
19. [CRANE AND RIGGING Directory — Reference Files](#19-crane-and-rigging-directory--reference-files)
20. [SYSTEM UTILITIES / PDS REFERENCE Directory](#20-system-utilities--pds-reference-directory)
21. [Cross-Cutting Themes & Turbomachinery Relevance](#21-cross-cutting-themes--turbomachinery-relevance)

---

## 1. Liquefaction System Description Manual (APCI)

**Document No.:** PGLN-YK-OMSYS-910695, Rev 51, March 2014  
**Project:** PNG LNG Plant — C3-MR (Propane Pre-Cooled Mixed Refrigerant) Process  
**Scope:** Full description of the LNG liquefaction train from feed gas inlet through LNG storage loading

### Feed Gas Conditions
| Parameter | Value |
|-----------|-------|
| Pressure | 6,660 kPag |
| Temperature | 26°C |
| Flow rate (min trip) | 112 kSm³/h LL |

### Feed Gas Composition (mol%)
| Component | mol% |
|-----------|------|
| N₂ | 0.76 |
| CH₄ (C1) | 88.40 |
| C₂H₆ (C2) | 6.86 |
| C₃H₈ (C3) | 2.45 |
| iC₄ | 0.48 |
| nC₄ | 0.58 |

### Process Flow Summary
1. Feed gas enters at 6,660 kPag / 26°C
2. Propane pre-cooling to **-14.9°C**
3. Scrub Column (heavy component removal)
4. Main Cryogenic Heat Exchanger (MCHE) — cools feed to LNG temperature
5. LNG exits MCHE at **-155.6°C, 5,089 kPag**
6. Hydraulic Turbine (LNG HT) expands to **-156°C, 630 kPag**
7. LNG to storage tanks

### LNG Product Specification
| Parameter | Value |
|-----------|-------|
| Pressure | 629 kPag |
| Temperature | -156°C |
| Flow rate | 24,243 kgmol/hr |
| Molecular weight | 18.3 |
| GHV | 41.0–42.5 MJ/Sm³ |
| Min CH₄ content | ≥85 mol% |

### Key Equipment
| Equipment | Details |
|-----------|---------|
| MCHE | Aluminum brazed, 4,500 mm dia × 56 m height |
| LNG Hydraulic Turbine (LNG HT) | 3,050 rpm |
| Reflux Pumps | 316L stainless steel |

### Trip/Interlock Settings
| Trip | Setpoint |
|------|----------|
| Scrub Column Level Low-Low | 5% |
| LNG HT Inlet Temp High-High | -140°C |
| Feed Flow Low-Low | 112 kSm³/h |

### Pressure Safety Valves (PSVs)
| Location | Set Pressure |
|----------|-------------|
| MCHE | 7,500 kPag |
| Scrub Column | 7,500 kPag |
| LNG to Tank line | 2,700 kPag |

### Startup Procedures
- Cooldown rate: **<17°C/hr** initial rate limit
- N₂ purge: reduce O₂ to **<0.5%**
- Dew point requirement: **<-55°C @ 0 kPag** before hydrocarbon introduction

### Turbomachinery Relevance
This document is directly relevant to turbomachinery knowledge bases: the LNG Hydraulic Turbine (3,050 rpm), MCHE sizing/materials, and the C3-MR process are foundational to understanding LNG plant rotating equipment. Cooldown rate limits and purge procedures apply directly to startup/shutdown of cryogenic compressors and expanders.

---

## 2. Refrigeration System Description Manual (APCI)

**Document No.:** PGLN-YK-OMSYS-910666, Rev 51, March 2014  
**Scope:** Propane pre-cooling system and Mixed Refrigerant (MR) compression/cooling system for PNG LNG Plant

### Propane Refrigeration Levels
| Level | Pressure (kPag) | Temperature |
|-------|----------------|-------------|
| High Pressure (HP) | 782 | +22°C |
| Medium Pressure (MP) | 429 | +3.7°C |
| Low Pressure (LP) | 169 | -17.2°C |
| Low-Low Pressure (LLP) | 26 | -36.8°C |

**Drivers:** 2× GE PGT25+G4 gas turbines

### Mixed Refrigerant (MR) Composition (mol%)
| Component | mol% |
|-----------|------|
| N₂ | 7.44 |
| CH₄ (C1) | 43.23 |
| C₂H₆ (C2) | 29.56 |
| C₃H₈ (C3) | 19.77 |

### MR Compressor Train Data
- **Configuration:** 3 parallel compression strings
- **LP Suction:** 232 kPag / -36.5°C
- **LP Discharge:** 2,084 kPag / 83.8°C
- **HP Discharge:** 5,994 kPag / 79.7°C
- **MR Hydraulic Turbine Tag:** 91-TGT66670

### Trip/Interlock Settings — MR System
| Trip | Setpoint |
|------|----------|
| LP MR Suction Pressure Low-Low | -10 kPag |
| LP MR Discharge Temp High-High | 180°C |
| C3 Discharge Pressure High-High | 2,620 kPag |
| MR HT RPM High-High | 4,800 rpm (2-out-of-3 voting) |

### Flammability / Hazard Data
| Substance | LEL | UEL |
|-----------|-----|-----|
| Propane | 2.1% | 9.5% |
| Methane | 5.0% | 15.0% |

**MDMT (Minimum Design Metal Temperature):** -176°C (for cryogenic piping/vessels)

### Turbomachinery Relevance
The GE PGT25+G4 gas turbine drivers, 3-string MR compressor arrangement, hydraulic turbine tagging (91-TGT66670), and 2oo3 voting logic for overspeed trips are highly relevant to centrifugal compressor and gas turbine knowledge bases. LP suction pressure trip at vacuum (-10 kPag) is a critical anti-surge / anti-reversal protection.

---

## 3. Process Design Basis — Refrigeration System

**Document No.:** PGLN-YK-PBDES-911666, Rev C, December 2010  
**Scope:** Design basis establishing operating conditions, equipment ratings, and process criteria for the refrigeration system

### Propane System Design Parameters
| Parameter | Value |
|-----------|-------|
| Discharge pressure | 1,842 kPaa |
| Condenser temperature | 51°C |
| Subcooler temperature | 38°C |
| Ambient design temperature | 32°C |

### Mixed Refrigerant (MR) Design Parameters
| Parameter | Value |
|-----------|-------|
| HP discharge pressure | 6,095 kPaa |
| HP discharge temperature | 80°C |
| HP aftercooled temperature | 41°C |
| HP separator pressure | 5,870 kPaa |
| HP separator temperature | -34°C |
| LP suction pressure | 333 kPaa |
| LP suction temperature | -36°C |
| MR HT isentropic efficiency | >80% |
| MR HT back pressure | ~1,100 kPaa |

### MCHE Design Pressure (tube-side)
| Service | Max Allowable Working Pressure |
|---------|-------------------------------|
| MR tubes | 7,600 kPag |
| Feed gas tubes | 7,500 kPag |

### Turbomachinery Relevance
The isentropic efficiency target (>80%) for the MR Hydraulic Turbine and the aftercooler temperature targets (41°C) are standard design basis references for expander and centrifugal compressor performance specifications.

---

## 4. Hot Oil System Description Manual

**Document No.:** PGLN-YK-OMSYS-950941, Rev 51  
**Scope:** Indirect heating system using Dowtherm T as heat transfer fluid for process reboilers and heat users

### Heat Transfer Fluid
| Property | Value |
|----------|-------|
| Fluid | Dowtherm T |
| Flash point | 188°C |
| Maximum service temperature | 288°C |
| Viscosity @ 150°C | 1.27 mPa·s |

### Operating Temperatures
| Location | Temperature |
|----------|-------------|
| Main process supply | 210°C |
| Amine reboiler supply | 176°C |
| Return / pump suction | 150°C |
| Max WHRU outlet (trip) | 240°C |

### System Flow & Pumps
| Parameter | Value |
|-----------|-------|
| Max system flow | 5,340 m³/h |
| Pump configuration | 4× (3 operating + 1 spare) |
| Individual pump capacity | 2,000 m³/h |
| Pump motor rating | 1,500 kW each |

### Heat Sources
| Source | Count | Capacity |
|--------|-------|---------|
| Waste Heat Recovery Units (WHRU) on MR Compressor Gas Turbines | 6 | 19.2 MW each |
| Hot Oil Furnace (backup) | 1 | 4.757 MW |

### Trip Settings
| Trip | Setpoint |
|------|----------|
| WHRU Flow Low-Low | 255 m³/h |
| WHRU Outlet Temp High-High | 240°C |
| Furnace Outlet Temp High-High | 240°C |

### Turbomachinery Relevance
The 6× WHRU units each recover 19.2 MW from MR compressor gas turbine exhausts — total waste heat recovery up to 115 MW. This is a key energy integration feature in large LNG plants. Pump specifications (1,500 kW, 2,000 m³/h) represent large centrifugal pump territory.

---

## 5. Nitrogen (N2) System Description Manual

**Document No.:** PGLN-YK-OMSYS-960961, Rev 50, August 2013  
**Scope:** Nitrogen generation, storage, distribution, and uses across the LNG plant

### PSA Nitrogen (Plant Instrument/General)
| Parameter | Value |
|-----------|-------|
| Purity | ≥99.5% N₂ (≤5,000 ppm O₂) |
| Package count | 2× PSA packages |
| Capacity each | 350 Nm³/h |
| Auto-start pressure | 700 kPag |

### Pure Nitrogen (Cryogenic Air Separation)
| Parameter | Value |
|-----------|-------|
| Purity | ≥99.99% N₂ |
| Gaseous (GAN) production | 700 Nm³/h |
| Liquid (LIN) production | 99 Nm³/h |
| Refrigeration method | Expander-based |
| HP Column pressure | 860 kPag |
| HP Column temperature | -170°C |

### LN₂ Storage
| Parameter | Value |
|-----------|-------|
| Tank count | 2 |
| Tank volume each | 190 m³ |
| Operating pressure | 780 kPag |
| Operating temperature | -170°C |
| Vaporizer count | 4 (2× 1,990 Nm³/h each) |

### Nitrogen Uses
- Compressor shaft seal gas
- MR makeup gas
- Amine system blanketing
- LNG tank purging (startup/shutdown)
- General startup and shutdown inert purging

### Hazards
- No ESD (non-flammable)
- Low temperature hazard: **-170°C** (cryogenic burns)
- High pressure hazard: **900 kPag** (air supply)
- Noise hazard: vent stack operations

### Turbomachinery Relevance
Compressor shaft seals are a primary nitrogen consumer — dry gas seal buffer gas, seal gas purge, and inter-stage N₂ injection are all supplied from this system. Understanding PSA vs. cryogenic N₂ quality differences matters for seal system design.

---

## 6. Power Generation System Description Manual

**Document No.:** PGLN-YK-OMSYS-960833, Rev 50, August 2013  
**Scope:** Plant power generation using Solar Titan 130 gas turbine generators (GTGs) and emergency diesel backup

### Gas Turbine Generators (GTGs)
| Parameter | Value |
|-----------|-------|
| Type | Solar Titan 130 DLE |
| Count | 7 (6 operating + 1 standby) |
| ISO rating | 15 MW each |
| Site rating (derated) | 11.47 MW each |
| Derating basis | 32°C ambient, 3% aging, 3% fouling |
| Total site generation | ~68.8 MW available; 54.7 MW demanded |

### Essential Diesel Generators
| Parameter | Value |
|-----------|-------|
| Count | 3 |
| Rating each | 1.6 MW |
| Function | Black start, essential loads |
| Diesel storage | 12.2 m³ (24-hour capacity) |

### Electrical Distribution
| Level | Voltage |
|-------|---------|
| Generation | 11 kV |
| HV distribution | 33 / 11 / 6.6 kV |
| LV distribution | 400 V |
| Frequency | 50 Hz |
| UPS backup | 50 minutes (battery) |

### Plant Electrical Load Summary
| Area | Load (MW) |
|------|-----------|
| Train 1 | 6.8 |
| Train 2 | 6.8 |
| Common Process | 9.0 |
| Utility | 9.3 |
| Offsite | 22.8 |
| **Total** | **54.7** |

### Fuel Gas Requirements
| Parameter | Value |
|-----------|-------|
| Min supply pressure at skid inlet | 2,720 kPag |
| Heated supply temperature | ~64°C |

### Trip Settings (GTG)
| Trip | Setpoint |
|------|----------|
| GTG Bearing Temp High-High | 95°C |
| GTG Enclosure Temp High-High | 85°C |

### Turbomachinery Relevance
The Solar Titan 130 DLE is a widely referenced industrial gas turbine (~15 MW class). DLE (Dry Low Emissions) combustor technology, bearing temperature trips, and black start diesel procedures are directly relevant turbomachinery topics. The derating factors (ambient, aging, fouling) are standard performance engineering concepts.

---

## 7. Natural Gas Specifications Sheet

**Scope:** Multi-source reference for natural gas composition, heating values, and fuel specifications

### Union Gas Typical Composition
| Parameter | Value |
|-----------|-------|
| CH₄ (C1) | 94.9% |
| C₂H₆ (C2) | 2.5% |
| N₂ | 1.6% |
| CO₂ | 0.7% |
| Specific gravity | 0.585 |
| GHV | 37.8 MJ/m³ |
| Flammability limits | 4–16% |
| Auto-ignition temp | 593°C |
| Theoretical flame temp | 1,960°C |
| Wobbe Index | 1,328 Btu/scf |

### Brazilian ANP Gas Specification (Regulatory Limits)
| Parameter | Min | Max |
|-----------|-----|-----|
| HHV | 34,000 kJ/m³ | 52,500 kJ/m³ |
| Wobbe Index | 35,000 kJ/m³ | 42,000 kJ/m³ |
| H₂S content | — | 10–15 mg/m³ |

### FPL Fuel Oil #6 Specification
| Parameter | Limit |
|-----------|-------|
| Sulfur | ≤1.0 wt% |
| Heating value | ≥6.340 MMBTU/BBL |
| Flash point | ≥150°F |
| Vanadium | ≤200 ppm |

### Turbomachinery Relevance
Wobbe Index and heating values are fundamental to gas turbine combustion system design and fuel interchangeability analysis. Auto-ignition temperature (593°C) and flammability limits (4–16%) are used in gas turbine fuel system hazard analysis. Vanadium limits in fuel oil apply to hot corrosion risk in turbine hot section blades.

---

## 8. Basics of Air Cooled Heat Exchangers (ACHE) Brochure

**Scope:** General reference brochure covering ACHE (also called Fin Fan Coolers) design principles, applications, and performance

### Fan Specifications
| Parameter | Value |
|-----------|-------|
| Fan diameter range | 3–28 ft |
| Maximum tip speed | ≤12,000 ft/min |
| Minimum coverage ratio | >0.40 (fan area / bundle face area) |

### Fin Types by Temperature Limit
| Fin Type | Max Service Temperature |
|----------|------------------------|
| Extruded aluminum | ≤600°F (315°C) |
| Embedded | 600–750°F (315–399°C) |
| Wrap-on footed | ≤250°F (121°C) |

### Draft Configurations
- **Forced Draft:** Fan below bundle; easier maintenance; lower noise; less uniform air distribution
- **Induced Draft:** Fan above bundle; better air distribution; protects bundle from weather; harder fan maintenance; higher heat to fan blades

### Heat Transfer Equations
- **Basic equation:** Q = U · A · CMTD (Corrected Mean Temperature Difference)
- **Fan power:** HP = (actual ft³/min × total pressure) / (6,356 × fan efficiency × reducer efficiency)

### Typical Overall Heat Transfer Coefficients (U)
| Service | U (Btu/hr·ft²·°F) |
|---------|-------------------|
| Condensing hydrocarbons | 95–105 |
| Gas cooling | 70–90 |
| Liquid cooling | 120–145 |

### Noise
- Typical ACHE noise level: **~85 dB(A)**

### Turbomachinery Relevance
ACHEs are used extensively to cool gas turbine lube oil, intercoolers for centrifugal compressors, aftercoolers, and process gas coolers. U-value selection and fan power calculations are standard design tasks for auxiliary cooling systems on turbomachinery packages.

---

## 9. Pickling Handbook (AvestaPolarit)

**Scope:** Guide to pickling and passivation of stainless steel and high-alloy materials for corrosion protection

### Alloy Groups by Pickleability
| Group | Alloys | Difficulty |
|-------|--------|------------|
| 1 | 304, 316 | Easy |
| 4 | 254 SMO, 654 SMO | Very difficult |

### Chemical Pickling Process
| Parameter | Value |
|-----------|-------|
| Nitric acid (HNO₃) | 8–20 vol% |
| Hydrofluoric acid (HF) | 0.5–5 vol% |
| Temperature | 20–65°C |
| Prohibited agent | HCl (chloride attack risk) |

### Passivation (Post-Pickling)
- **Solution:** 18–30 wt% HNO₃ @ 20°C
- **Purpose:** Restore passive chromium oxide layer

### Safety / PPE Requirements
- Full face mask
- Rubber gloves and boots
- HF is extremely hazardous — requires calcium gluconate antidote on-site

### Quality Testing
- **Ferroxyl Test** (ASTM A-380): Detects free iron contamination on pickled surface

### Turbomachinery Relevance
316L SS is the standard material for LNG reflux pumps, cryogenic piping, and compressor seal components. Understanding pickling requirements for 316L and high-alloy grades (254 SMO used in offshore/sour service compressor casings) is relevant for fabrication and maintenance procedures.

---

## 10. Fin Fan Air Cooler Engineering Design Guidelines (KLM Technology Group)

**Publisher:** KLM Technology Group  
**Document:** Engineering Design Guidelines — Fin Fan Air Coolers  
**Revision:** 01, February 2015  
**Scope:** Detailed engineering design guidelines for air-cooled heat exchangers (ACHEs), extending the brochure content with specific design rules

### Fan Design Rules
| Parameter | Rule / Limit |
|-----------|-------------|
| Fan diameter range | 3–28 ft |
| Normal fan sizes | 14–16 ft dia preferred |
| Maximum tip speed | ≤12,000 ft/min (absolute never >16,000 ft/min) |
| Minimum coverage ratio | >0.40 |
| Individual driver limit | ≤50 hp typical |
| V-belt drive limit | ≤30 bhp |

### Radial Clearances (Fan Tip to Ring)
| Diameter | Clearance |
|----------|-----------|
| All diameters (minimum) | 6 mm |
| >3.5 m diameter (maximum) | 19 mm |

### Fin Materials
- **Normal:** Helical wound aluminum alloy 1100-00
- **Offshore/Marine:** Copper fins (corrosion resistance)

### Pitch Control
- Fans >1.5 m diameter: Manual adjustable pitch standard
- Pneumatic pitch actuators: 20 kPa gauge (3–15 psig) signal range

### References
- Table 3: Fin Efficiency (function of fin height, fin conductivity, base tube OD)
- Table 5: Typical Overall HTC values by service
- Table 6: Fin tube data for 1-inch OD tubes

### Turbomachinery Relevance
Preferred fan sizes (14–16 ft), driver limits (≤50 hp), and pitch actuator signal range (3–15 psig) are practical sizing constraints for turbomachinery package cooler design. The 6 mm minimum tip clearance is analogous to impeller-to-diffuser clearance philosophy in centrifugal machines.

---

## 11. Motor Protective Settings

**Source:** ABB / GE Relay Settings Reference — Motor Protective Settings 101308 (PowerPoint)  
**Scope:** Relay settings philosophy and specific settings for large industrial motors using GE 469 Motor Management Relay

### 3,400 HP Boiler Feed Pump (BFP) Motor
| Parameter | Value |
|-----------|-------|
| Power | 3,400 HP |
| Voltage | 4,000 V, 60 Hz |
| Speed | 3,581 rpm |
| Full Load Amps (FLA) | 413 A |
| Locked Rotor Amps (LRA) | 550% of FLA |
| Stall time (hot) | 6.0 seconds |
| Insulation class | Class F |
| Noise level | 85 dB(A) |

### 8,000 HP Motor
| Parameter | Value |
|-----------|-------|
| Power | 8,000 HP |
| Voltage | 13,200 V, 60 Hz |
| Speed | 1,780 rpm |
| Full Load Amps (FLA) | 297 A |
| Locked Rotor Amps (LRA) | 540% of FLA |
| Locked rotor withstand (hot) | 30 seconds |
| Locked rotor withstand (cold) | 35 seconds |
| Cold starts allowed | 2 consecutive |
| Hot starts allowed | 1 |
| Acceleration time | 15 seconds |

### GE 469 Relay Protection Settings Philosophy
| Function | Setting |
|----------|---------|
| Overload pickup | 1.15 × FLA |
| Current unbalance K-factor | K = 8 |
| Cooling time (running) | 15 minutes |
| Cooling time (stopped) | 30 minutes |
| Hot/Cold ratio | 0.86 |
| RTD alarm / trip temperatures | 40°C / 130°C / 155°C |
| Short circuit trip (instantaneous) | 6× FLA |
| Short circuit trip (max, DC offset) | 9.2× FLA |
| Ground fault trip level | <7.5–10 A |
| Phase differential (CT core balance) | 0.10 (during run) |
| Phase differential (CT summation, start) | 0.25 (during start) |
| Undervoltage trip | 80–90% of nameplate |
| Overvoltage trip | 110% of nameplate |

### K-Factor Formula
- Standard: **K = 175 / LRA²**
- Conservative: **K = 230 / LRA²**  
  *(Where LRA is expressed as a per-unit multiple of FLA)*

### Start Frequency
- Starts per hour: per motor datasheet (cold starts typically 2/hr)
- Typical time between starts: **20 minutes**

### Turbomachinery Relevance
Motor protection is fundamental for motor-driven compressors, pumps, and fans. The 469 relay settings (OL pickup, unbalance, RTD bias) are standard references for any motor-driven turbomachinery. Start frequency limits (2 cold / 1 hot) directly affect compressor startup planning and ESD restart procedures.

---

## 12. Carbon Dioxide (CO2) Technical Data Sheet

**File:** Carbon Dioxide - CO2.pdf (OneDrive ID: EE3702398775304E!440147)  
**Source:** Industrial gas supplier technical data sheet  
**Scope:** Physical, chemical, and safety properties of CO₂; transportation, storage, and materials compatibility

### Physical Properties
| Property | Value |
|----------|-------|
| Molecular weight | 44.01 g/mol |
| CAS number | 124-38-9 |
| Appearance | Colorless, odorless gas |
| Density relative to air | 1.53× (heavier than air) |
| Critical temperature | 31.1°C (87.9°F) |
| Critical pressure | 7,382 kPa (1,070.6 psia) |
| Triple point | -56.6°C @ 5.11 atm |
| Sublimation point | -78.4°C (-109°F) |
| Vapor pressure @ 21.1°C | 6,430 kPa |
| Liquid density | 762 kg/m³ |
| Thermal conductivity (gas, 26.85°C) | 0.166 W/(m·K) |
| Latent heat of vaporization @ 0°C | 234.5 kJ/kg |

### UN Transport Numbers
| Form | UN Number |
|------|-----------|
| Gas (compressed) | UN 1013 |
| Liquid (refrigerated) | UN 2187 |
| Solid (dry ice) | UN 1845 |

### Vapor Pressure vs. Temperature
| Temperature | Vapor Pressure |
|-------------|----------------|
| -40°F | ~3.6 atm |
| +70°F | 56.5 atm |

### Toxicity / Exposure Limits
| Standard | Limit |
|----------|-------|
| OSHA PEL (8-hour TWA) | 5,000 ppm |
| STEL (short-term exposure) | 30,000 ppm |
| IDLH | 40,000 ppm |
| 7% CO₂ in air | Death within 5 minutes |
| 30% CO₂ in air | Unconscious within 30 seconds |

### Materials Compatibility
| Service | Recommended Material |
|---------|---------------------|
| High pressure (≤2,000 psi / 13,800 kPa) | Schedule 80 carbon steel pipe |
| Low pressure | Stainless steel, copper, brass |

### Industrial Uses
- Carbonation (beverage industry)
- Fire suppression systems
- Welding shield gas (MIG/TIG)
- Refrigeration (sub-critical / supercritical)
- Chemical synthesis (urea, methanol)

### Turbomachinery Relevance
CO₂ is the working fluid in supercritical CO₂ (sCO₂) power cycles — a rapidly developing technology using compact turbomachinery. CO₂ also appears in gas turbine exhaust (EGR) analysis and in enhanced oil recovery (EOR) compressor applications. The density relative to air (1.53×) is critical for leak dispersion modeling in enclosed turbomachinery buildings.

---

## 13. American Journal of Chemical Engineering — Fire-Tube Boiler Study

**Article Title:** "Numerical Investigation of Heat Transfer in a 4-Pass Fire-Tube Boiler"  
**Journal:** American Journal of Chemical Engineering, 2014; 2(5): 65–70  
**DOI:** 10.11648/j.ajche.20140205.12  
**Authors:** Ahmed Rahmani (University of Oum El Bouaghi, Algeria); Soumia Trabelsi (University of Annaba, Algeria)

### Boiler Specifications (PFTA 500HP Reference Unit)
| Parameter | Value |
|-----------|-------|
| Type | 4-pass fire-tube boiler |
| Rating | 500 HP (PFTA classification) |
| Steam production | 7.6 ton/h |
| Maximum working pressure | 25 bar |
| Number of tubes | 232 |
| Total heating surface | 237.5 m² |
| Furnace (first pass) length | 5 m |

### Heat Transfer Results
| Parameter | Value |
|-----------|-------|
| Peak heat flux | 91.9 kW/m² |
| Maximum boiling HTC | 15.81 kW/m²·K |
| Furnace heat to water | 1.06 MW |
| Radiation fraction (furnace) | 82.65% |
| Convection fraction (furnace) | 17.34% |
| Total boiler heat transfer | 4.63 MW |

**Key Finding:** Convection dominates the total boiler heat transfer (>80%), though radiation dominates within the furnace pass only.

### Fuels Tested
| Fuel | Mass Flow Rate |
|------|---------------|
| Natural gas | 0.11 kg/s |
| Diesel / Fuel oil #2 | 0.114 kg/s |
| Heavy fuel oil #6 | 0.134 kg/s |

**Key Finding:** Operating pressure has minimal effect on flue gas temperatures but increases the boiling heat transfer coefficient.

### Heat Transfer Correlation Used
**McAdams correlation (forced convection in tubes):**

\[ h_g = 0.023 \cdot \frac{k_g}{d_i} \cdot Re^{0.8} \cdot Pr^{0.4} \]

**Model accuracy:** Error <9% vs. published experimental data

### Turbomachinery Relevance
Fire-tube boilers generate steam that may drive steam turbines or serve as process heat in combined cycle / cogeneration plants. The heat flux values (91.9 kW/m²) and boiling HTC (15.81 kW/m²·K) are reference data points for waste heat recovery boiler (HRSG) design downstream of gas turbines.

---

## 14. Propane Technical Pocket Guide (PERC)

**Publisher:** Propane Education and Research Council (PERC)  
**Scope:** Quick-reference technical data for liquid propane (LPG) — physical properties, combustion, safety, storage, and comparison to other fuels

### Physical Properties
| Property | Value |
|----------|-------|
| Boiling point | -42°C (-44°F) |
| Specific gravity (liquid @ 60°F) | 0.504 |
| Liquid density | 4.2 lb/gal (502 kg/m³) |
| Vapor volume @ boiling | 36.38 ft³/gal |

### Vapor Pressure
| Temperature | Vapor Pressure |
|-------------|----------------|
| -40°F | 3.6 psig |
| +70°F | 127 psig |
| +100°F | 196 psig |

### Combustion Properties
| Property | Value |
|----------|-------|
| LEL | 2.15% |
| UEL | 9.6% |
| Auto-ignition temperature | 493–604°C (920–1,120°F) |
| Maximum flame temperature | 1,980°C (3,595°F) |
| Latent heat of vaporization @ boiling | 428 kJ/kg (184 Btu/lb) |

### Heating Values
| Parameter | Value |
|-----------|-------|
| Volumetric (gas) | 2,488 Btu/ft³ |
| Per gallon (liquid) | 91,502 Btu/gal |
| Per unit mass | 21,548 Btu/lb (49,920 kJ/kg) |

### Air Requirements
- Stoichiometric air: **23.68 ft³ air/ft³ propane gas** (= 23.86 m³/m³)

### CO₂ Emissions by Fuel
| Fuel | CO₂ (lbs/MMBtu) |
|------|----------------|
| Propane | 139.2 |
| Natural gas | 115.3 |
| Fuel oil | 161.4 |
| Electricity (US grid avg) | 389.5 |

### Vaporization Rates (500-gallon tank)
| Tank Temperature | Max Intermittent Withdrawal |
|------------------|----------------------------|
| +40°F | 478,800 Btu/hr |
| -30°F | 238,600 Btu/hr |

### Storage Requirements
- Standard: **NFPA 58** (Liquefied Petroleum Gas Code)
- Tanks: ASME-rated on concrete pads
- Minimum separation from ignition sources: **10 ft**

### Propane vs. Natural Gas Comparison
| Parameter | Propane | Natural Gas |
|-----------|---------|-------------|
| Energy density (per ft³) | ~2.5× higher | Baseline |
| Specific gravity (gas) | 1.5 (heavier than air) | 0.6 (lighter than air) |
| LEL | 2.15% | 4–5% |
| Boiling point | -42°C | ~-161°C |

### Turbomachinery Relevance
Propane is the pre-cooling refrigerant in C3-MR LNG trains (see Documents 1–3). Its flammability limits, vapor pressure, and auto-ignition temperature are critical for gas turbine fuel flexibility studies and compressor train hazard analysis. The vaporization rate limits are relevant for propane refrigerant makeup system sizing.

---

## 15. ELECTRICAL Directory — Reference Files

**Location:** OneDrive Engineering Blackbook / ELECTRICAL  
**Scope:** Electrical engineering standards, motor standards, switchgear, wiring rules, and safety signage references

### Files Identified
| File | Publisher / Standard | Topic |
|------|---------------------|-------|
| 'PG3_Electrical.pdf' | — (2003) | General electrical engineering reference |
| 'PG4_Electronics.pdf' | — (2003) | Electronics engineering reference |
| 'IEEEstd_112.pdf' | IEEE Standard 112 | Motor efficiency test methods |
| 'IEEE_C37.20.2.pdf' | IEEE C37.20.2 | Metal-clad switchgear standard |
| 'IEEE_C37.20.7.pdf' | IEEE C37.20.7 | Guide for testing medium voltage MOS (Metal-Oxide Surge arresters) |
| 'IEEE 841-2009 Severe Duty TEFC Squirrel Cage Induction Motors.pdf' | IEEE 841-2009 | Severe duty motors ≤370 kW / 500 hp |
| 'pgln-yk-espds-000401_0_001 (Earthing and Over Voltage Protection).pdf' | PNG LNG Project | Earthing and overvoltage protection design standard |
| 'GEI100600.pdf' | GE | GE instrumentation / electrical reference |
| 'ASNZ 3000-2007.pdf' | Standards Australia / NZ | Australian/NZ Wiring Rules (AS/NZS 3000) |
| 'NEMA Z535 SERIES.pdf' | NEMA | Safety signs and colors standard |

### Key Standards Scope
- **IEEE 841-2009:** Specifies requirements for severe duty TEFC (Totally Enclosed Fan Cooled) squirrel cage induction motors for petroleum, chemical, and pulp/paper industries — directly applicable to compressor and pump drivers
- **IEEE C37.20.2:** Metal-clad switchgear assemblies — applicable to MV motor control centers (MCCs) for large motors
- **AS/NZS 3000:** Australian wiring rules — applicable to PNG LNG Plant electrical installations

### Turbomachinery Relevance
IEEE 841 severe duty motors are the standard specification for compressor drivers in HPI. IEEE 112 efficiency testing methods are used to verify motor-driven compressor driver efficiency guarantees. Metal-clad switchgear (C37.20.2) protects large motor loads including compressor drivers.

---

## 16. CORROSION Directory — Reference Files

**Location:** OneDrive Engineering Blackbook / CORROSION  
**Scope:** Corrosion theory, standards, biological corrosion, and gasket/sealing references

### Files Identified
| File | Publisher / Standard | Year | Topic |
|------|---------------------|------|-------|
| 'Corrosion.pdf' | — | 2006 | General corrosion theory and mechanisms |
| 'MicrobiologicallyInfluencedCorrosionofStainlessSteel.pdf' | — | 2001 | MIC of stainless steel |
| 'ISO_8044_2020(en).pdf' | ISO | 2020 | Corrosion of metals and alloys — vocabulary |
| 'White Rust.pdf' | — | 2007 | White rust on galvanized steel surfaces |
| 'Gasket Handbook Lamons 2012.pdf' | Lamons | 2012 | Gasket selection and sealing technology |

### Key Technical Content

**General Corrosion (Corrosion.pdf):** Covers electrochemical corrosion theory, galvanic series, pitting, crevice, stress corrosion cracking (SCC), hydrogen embrittlement, erosion-corrosion, and corrosion inhibitors.

**MIC of Stainless Steel:** Microbiologically Influenced Corrosion caused by sulfate-reducing bacteria (SRB) and other microorganisms. Affects 304/316 SS in water-containing systems (cooling water, firewater, ballast). Prevention: biocides, cathodic protection, proper drainage.

**ISO 8044:2020:** Standardizes corrosion terminology — important for consistent documentation in inspection and integrity management programs.

**White Rust:** Zinc carbonate / zinc hydroxide formation on galvanized surfaces in condensing or wet conditions. Not structurally critical but indicates galvanizing degradation.

**Lamons Gasket Handbook:** Covers spiral wound, ring joint (RTJ), PTFE envelope, and full-face gasket types; temperature/pressure limits; bolt load requirements; installation procedures.

### Turbomachinery Relevance
Corrosion affects compressor casings (SCC in stainless for sour service), turbine hot section (hot corrosion from vanadium/sodium in fuel), seal gas systems (pitting in SS components), and cooling water circuits (MIC). The Lamons Gasket Handbook is directly applicable to compressor flange joint integrity.

---

## 17. COMBUSTION CONTROL Directory — Reference Files

**Location:** OneDrive Engineering Blackbook / COMBUSTION CONTROL  
**Scope:** Combustion theory, applied combustion engineering, and boiler/combustion system safety codes

### Files Identified
| File | Publisher / Standard | Topic |
|------|---------------------|-------|
| 'Combustion-Booklet-2013.pdf' | — | General combustion reference (2013) |
| 'Applied Combustion 2nd Edition.pdf' | — | Comprehensive combustion textbook (66 MB) |
| '85-11-PDF.pdf' | NFPA | NFPA 85 — Boiler and Combustion Systems Hazards Code |
| '85-15-PDF.pdf' | NFPA | NFPA 85 related standard |
| 'BPVC VII 2010.pdf' / 'ASME BPVC Section VII.pdf' | ASME | ASME Boiler and Pressure Vessel Code, Section VII |

### Key Standards Scope

**NFPA 85 (Boiler and Combustion Systems Hazards Code):**  
Covers hazard prevention for single and multiple burner boilers, heat recovery steam generators (HRSGs), and pulverized fuel systems. Specifies burner management system (BMS) logic, purge requirements, interlock design, and combustion control system design for fire prevention.

**ASME BPVC Section VII:**  
Recommended guidelines for the care of power boilers — covers inspection intervals, water treatment, operating procedures, and maintenance best practices for boilers operating under Section I jurisdiction.

**Applied Combustion (textbook):**  
Comprehensive reference covering thermodynamic combustion calculations, stoichiometry, flame temperature, NOx formation, combustion efficiency, and burner design.

### Turbomachinery Relevance
NFPA 85 BMS requirements apply directly to HRSGs downstream of gas turbines in combined cycle plants. ASME BPVC Section VII guides operation of waste heat boilers and duct-fired HRSGs. Gas turbine DLE combustor control philosophy is built on principles covered in Applied Combustion.

---

## 18. FASTENERS Directory — Reference Files

**Location:** OneDrive Engineering Blackbook / FASTENERS  
**Scope:** Fastener specifications, structural connection standards, and assembly methods

### Files Identified
| File | Publisher / Standard | Year | Topic |
|------|---------------------|------|-------|
| 'kl_jack_fasteners-technical_data_and_charts.pdf' | KL Jack | 2012 | Fastener technical data and charts |
| 'Fast-Rite_TechnicalSpecsForFasteners_20181210.pdf' | Fast-Rite | 2018 | Technical specifications for fasteners (7.4 MB) |
| 'RCSC Specification.pdf' / '2009RCSCSpecification.pdf' | RCSC | 2009 | Specification for Structural Joints Using High-Strength Bolts |
| 'ASME B18.2.6M-2012.pdf' | ASME | 2012 | Fasteners for use in Structural Applications (metric) |
| 'mechanical-assembly-methods.pdf' | — | 2021 | Mechanical assembly methods reference |
| 'Broschuere_DIN-EN-ISO_Normung_DE.pdf' | — | — | DIN/EN/ISO fastener standards (German) |

### Key Standards Scope

**RCSC Specification (2009):** Governs design, installation, and inspection of high-strength structural bolted joints (A325/A490 bolts). Covers pretension requirements, turn-of-nut method, direct tension indicators, and torque control.

**ASME B18.2.6M:** Metric fastener dimensions for structural applications — hex bolts, screws, and nuts.

### Turbomachinery Relevance
Compressor flange bolting, turbine casing joint integrity, and equipment skid structural connections all fall under ASME B18 and RCSC bolt specifications. Proper bolt pretension is critical to maintaining flange seal integrity at operating temperatures and pressures.

---

## 19. CRANE AND RIGGING Directory — Reference Files

**Location:** OneDrive Engineering Blackbook / CRANE AND RIGGING  
**Scope:** ASME B30 standards series for cranes, hoists, hooks, and rigging hardware

### Files Identified
| File | Standard | Year | Topic |
|------|----------|------|-------|
| 'ASME B30.26 - Rigging Hardware.pdf' | ASME B30.26 | 2015 | Shackles, eyebolts, turnbuckles, rigging rings |
| 'ASME B30.16-2017.pdf' | ASME B30.16 | 2017 | Overhead Hoists (Underhung) |
| 'ASME B30.2.pdf' | ASME B30.2 | 2017 | Overhead and Gantry Cranes (top-running, single/multiple girder) |
| 'ASME B30.10 - Hook Standards.pdf' | ASME B30.10 | — | Hooks — design, installation, inspection, maintenance |
| 'Bridge Cranes.zip' | — | — | Bridge crane documentation package |

### Key Standards Scope

**ASME B30.2:** Covers construction, installation, inspection, testing, maintenance, and operation of overhead/gantry cranes. Specifies rated load markings, runway requirements, and safe operating procedures.

**ASME B30.26:** Rigging hardware load ratings and inspection criteria — shackles, eyebolts, swivel hoist rings, turnbuckles, links, and master links.

**ASME B30.16:** Underhung hoists — applicable to maintenance hoists inside turbomachinery buildings and compressor houses.

### Turbomachinery Relevance
Crane and rigging standards are essential for turbomachinery overhaul planning. Gas turbine rotor lifts, compressor casing removal, and MCHE/heat exchanger bundle pulls all require B30-compliant lifting procedures and rigging hardware rated to the equipment weights. The 4,500 mm × 56 m MCHE from Document 1 would require specialized heavy lift planning.

---

## 20. SYSTEM UTILITIES / PDS REFERENCE Directory

**Location:** OneDrive Engineering Blackbook / SYSTEM UTILITIES & PDS REFERENCE  
**Scope:** System utilities documents (cooling water, instrument air, firewater, etc.) and Piping Design Standard (PDS) reference files

### Findings
OneDrive searches for "system utilities" and "PDS reference" returned primarily project process manuals (LNG refrigeration, liquefaction, nitrogen, hot oil) rather than dedicated system utilities or piping design standard files. The directory likely contains proprietary plant-specific documents with non-descriptive filenames.

### Probable Content (Based on Standard Engineering Blackbook Organization)
| Expected Document Type | Typical Content |
|------------------------|----------------|
| Cooling Water System Manual | CW supply/return temperatures, treatment (biocides, corrosion inhibitors), pump specs |
| Instrument Air/Plant Air Manual | Dewpoint requirements (-40°C), supply pressure (700 kPag min), compressor specs |
| Firewater System Manual | Ring main pressure, pump start logic, deluge valve specs, foam system |
| Flare/Relief System Manual | Flare header pressure drop, KO drum sizing, flare tip velocity |
| PDS Reference | Pipe class specifications, P&ID symbology, line numbering conventions |

### Turbomachinery Relevance
Instrument air quality (dewpoint) directly affects pneumatic control valves and positioners on turbomachinery control systems. Cooling water supply temperatures are the boundary condition for lube oil cooler and intercooler design. Flare system capacity must accommodate compressor blowdown loads.

---

## 21. Cross-Cutting Themes & Turbomachinery Relevance

### A. Process Conditions Reference Matrix

| System | Key Pressures | Key Temperatures | Critical Limits |
|--------|--------------|-----------------|-----------------|
| LNG Feed | 6,660 kPag inlet | 26°C inlet / -156°C LNG | MCHE PSV 7,500 kPag |
| Propane Refrigerant | 26–782 kPag (4 levels) | -36.8 to +22°C | LEL 2.1%; C3 disch HH 2,620 kPag |
| MR Refrigerant | 232–5,994 kPag | -36.5 to +83.8°C | MR HT RPM HH 4,800 rpm |
| Hot Oil | Up to 5,340 m³/h | 150–210°C supply | Max 288°C (fluid limit) |
| N₂ System | 780–900 kPag | -170°C (LIN) | Purity ≥99.99% for seals |
| Power Generation | 2,720 kPag fuel gas | 11 kV generation | 54.7 MW total demand |

### B. Rotating Equipment Summary

| Machine | Type | Key Parameters |
|---------|------|---------------|
| Propane Compressor Driver | GE PGT25+G4 Gas Turbine | ~15 MW shaft output |
| MR Compressor Strings (×3) | Centrifugal | LP: 232→2,084 kPag; HP: →5,994 kPag |
| LNG Hydraulic Turbine | Expander-type | 3,050 rpm; -155.6 to -156°C |
| MR Hydraulic Turbine | Expander-type | 4,800 rpm HH trip; >80% isentropic efficiency |
| Hot Oil Pumps | Centrifugal (×4) | 2,000 m³/h each; 1,500 kW each |
| N₂ Air Separation Expander | Expander | HP Column 860 kPag/-170°C |
| GTGs | Solar Titan 130 DLE | 11.47 MW site-rated; 7 units |
| BFP Motor | TEFC Induction | 3,400 HP / 4,000 V / 3,581 rpm |
| Large Process Motor | TEFC Induction | 8,000 HP / 13,200 V / 1,780 rpm |

### C. Safety Data Consolidated

| Substance | LEL | UEL | Auto-ignition | IDLH / Toxic Limit |
|-----------|-----|-----|--------------|-------------------|
| Methane | 5% | 15% | 593°C | Asphyxiant |
| Propane | 2.1–2.15% | 9.5–9.6% | 493–604°C | Asphyxiant |
| CO₂ | Non-flammable | — | — | 40,000 ppm IDLH |
| Mixed Refrigerant | ~4.5% (est.) | ~14% (est.) | ~550°C (est.) | Asphyxiant + flammable |

### D. Materials of Construction Summary

| Application | Material |
|------------|---------|
| MCHE (cryogenic heat exchanger) | Aluminum brazed (4500 mm dia × 56 m) |
| LNG Reflux Pumps | 316L Stainless Steel |
| Cryogenic piping (to -176°C) | Low-temperature carbon steel / 304L / 316L SS |
| Hot Oil piping (to 288°C) | Carbon steel |
| ACHE fins (standard) | Aluminum alloy 1100-00 |
| ACHE fins (marine/offshore) | Copper |
| CO₂ high-pressure service | Schedule 80 carbon steel |

### E. Standards & Codes Referenced

| Standard | Topic | Applicability |
|----------|-------|---------------|
| ASME BPVC Section VII | Boiler care guidelines | HRSGs, waste heat boilers |
| NFPA 85 | Combustion systems hazards | HRSG BMS, duct burners |
| NFPA 58 | LP gas storage | Propane tank farms |
| IEEE 841-2009 | Severe duty motors | Compressor / pump drivers |
| IEEE 112 | Motor efficiency testing | Driver efficiency guarantees |
| IEEE C37.20.2 | Metal-clad switchgear | MV motor control |
| ASME B30.2 / B30.16 / B30.26 / B30.10 | Cranes, hoists, hooks, rigging | Turbomachinery maintenance lifts |
| ASME B18.2.6M | Metric fasteners (structural) | Casing bolting |
| RCSC 2009 | Structural high-strength bolts | Equipment skid connections |
| ISO 8044:2020 | Corrosion vocabulary | Integrity management documentation |
| AS/NZS 3000:2007 | Wiring rules | Electrical installations (Australasia) |
| ASTM A-380 | Ferroxyl test | SS pickling quality verification |

### F. Turbomachinery Chatbot Knowledge Base — Prioritized Topics

Based on all documents read, the following topics are most directly relevant for a turbomachinery-focused knowledge base:

1. **C3-MR LNG Process:** Feed conditions, propane 4-level refrigeration, MR composition and compression stages, hydraulic turbines, MCHE design — complete process flow from documents 1–3
2. **Gas Turbine Performance:** GE PGT25+G4 (LNG drivers), Solar Titan 130 (power generation), derating factors, bearing temperature trips, DLE combustors
3. **Centrifugal Compressor Protection:** MR compressor trip settings, LP suction vacuum trip (-10 kPag), discharge temp HH (180°C), 2oo3 voting logic
4. **Motor Protection:** GE 469 relay settings, K-factor calculation, start frequency limits, RTD bias temperatures — applicable to motor-driven compressors
5. **Rotating Equipment Startup:** Cooldown rates, purge requirements, N₂ seal gas quality, propane/MR trip hierarchy
6. **Heat Exchanger Design:** ACHE/Fin Fan sizing rules, U-values, fin materials, coverage ratio — applicable to lube oil and intercooler systems
7. **Combustion Engineering:** NFPA 85 BMS requirements, HRSG design, fire-tube boiler heat flux — applicable to gas turbine HRSG downstream equipment
8. **Corrosion & Materials:** SCC in SS, MIC, hot corrosion, gasket selection — applicable to compressor casing integrity and seal systems
9. **Hazardous Area Data:** Flammability limits, auto-ignition temperatures, CO₂ IDLH — applicable to turbomachinery enclosure ventilation and gas detection system design
10. **Cryogenic Service:** MDMT -176°C, LN₂ storage at -170°C, cool-down rate limits — applicable to cold-service compressor and expander design

---

*End of Engineering Blackbook — Process & Technical Reference Summary*  
*File path: /home/user/workspace/blackbook_process_technical.md*  
*Compiled from 14 fully-read documents + 6 directory inventories (21 blackbook items total)*

================================================================================
SECTION 9: VENDOR DOCUMENTS & SIC BULLETINS
Source: blackbook_vendor_misc.md
================================================================================

# Engineering Blackbook — Batch 3: Vendor Docs & SIC Bulletins
**OperaMech.ai Knowledge Base**
*Compiled: 2026-04-19 | Project: Cameron LNG Liquefaction Project, Hackberry, Louisiana*

---

## Table of Contents
1. [SIC00202 — LV Motor Installation, Pre-commissioning & Commissioning](#sic00202)
2. [SIC00277 — DCP Panel Installation & Commissioning](#sic00277)
3. [SIC00066 — OSM Functional Checklist](#sic00066)
4. [SIC00006 Rev.8 — General Notes for Lube Oil System Flushing](#sic00006)
5. [SIC00115 — Piping/Tubing Erection & Construction Procedure](#sic00115)
6. [GE Technical Proposal — MS7001EA Gas Turbine (ExxonMobil Golden Pass LNG)](#ge-technical-proposal)
7. [GE Technical Services Proposal — PR/MR Compressors (Cameron Sempra LNG)](#ge-services-proposal)
8. [GE Installation Pre-Commissioning & Commissioning Proposal w/ Comments R1](#ge-install-proposal)
9. [Technical Package for Commissioning (TPC) — Cameron LNG PR Trains](#tpc)
10. [Technical Package for Installation (TPI) — Cameron LNG EC401 Turboexpander](#tpi)
11. [OVERALL Constructability Checklist](#constructability)
12. [API Standard 541 — Form-wound Squirrel Cage Induction Motors (≥375 kW)](#api541)
13. [API Standard 546 — Brushless Synchronous Machines (≥500 kVA)](#api546)
14. [API Standard 547 — General Purpose Form-wound Induction Motors (185–2240 kW)](#api547)
15. [IEEE Std 112-2004 — Test Procedure for Polyphase Induction Motors and Generators](#ieee112)
16. [Flowserve Pumps — Notes on Collection](#flowserve)

---

## 1. SIC00202 — LV Motor Installation, Pre-commissioning & Commissioning {#sic00202}

| Field | Detail |
|-------|--------|
| **Document Code** | SIC00202 |
| **Full Title** | Verification of the Correct Installation, Precommissioning and Commissioning of LV Motors at Site |
| **Revision** | 0 |
| **Date** | 12-Apr-2016 |
| **Publisher** | Nuovo Pignone Tecnologie S.r.l. (GE Oil & Gas) |
| **Replaces** | RIC8952207 |
| **File ID** | EE3702398775304E!531150 |
| **Pages** | 10 |

### Scope & Applicability
General guideline for verifying correct installation, pre-commissioning, and commissioning of **LV (Low Voltage) motors** included in GE O&G / Nuovo Pignone scope of supply. Applies to all site LV motors regardless of application. Delivered as field guidance only; technically qualified personnel required.

### Required Instruments
| Instrument | Use |
|------------|-----|
| 500 V Megger | Insulation resistance measurement |
| Ohm Meter / Tester | Continuity, resistance checks |
| Clamp Ammeter | Phase current measurement |
| Thermometer | Temperature monitoring |
| Sequence Meter | Phase rotation verification |
| Vibration Portable Analyzer | Bearing vibration measurement |
| Dial Gauge Indicator | Shaft/coupling alignment |

### Key Technical Content

#### Preliminary (Installation Verification) Checks
- Confirm nameplate ratings match project design documents.
- Verify protective grounding at frame and main terminal box.
- Confirm rotation arrows on motor match driven machine.
- Check integrity and cleanliness of cooling fan protective grid.
- Rotate motor by hand: confirm free rotation, no crawling.
- Check shaft alignment (radial misalignment ≤ **0.03 mm**, unless OEM/coupling/driven machine manuals specify otherwise; dimensional tolerance reference: **RIC8952285**).

#### Insulation Tests (Pre-commissioning)
Instrument: **500 V Megger**

| Test | Measurement Points | Acceptance |
|------|-------------------|------------|
| Motor insulation | R→G, S→G, T→G, R→S, S→T, T→R | **> 10 MΩ** |
| Motor heater insulation | Ph,N→G; Ph→N | > 10 MΩ |
| Motor power supply cable | R→G, S→G, T→G, R→S, S→T, T→R | Per RIC8952255 |
| Motor heater supply cable | Ph,N→G; Ph→N | Per RIC8952255 |

*Note: Separate phases by removing link bars from terminal strip before measuring phase-to-phase.*

#### Bearing Lubrication Checks
- **Oil bath bearings**: Fill to level with manufacturer-specified oil.
- **Forced circulation bearings**: Start LO system; verify level and oil type.
- **Grease bearings (maintenance-free)**: No action required.
- **Greaser-fitted bearings**: Replace grease if last service > 6 months prior. Advisable to do with machine running.
- **Heaters** (if not previously energised): Verify continuity and insulation; connect power supply cable; energise to keep motor warm during storage.

#### MCC Cubicle Checks (Before Functional Test)
- Confirm cubicle has been inspected and tested.
- Thermal relay setting for motor: typically **110% of motor nominal current** (verify against MCC single-line diagram or protection relays calibration table).
- Confirm cables connected and properly secured.

#### Functional Test (Uncoupled Motor)
1. Disconnect wires from motor terminal box; connect sequence meter to three free wires.
2. Briefly energise breaker; identify phases R, S, T.
3. De-energise and LOTO; mark wires R, S, T.
4. Reconnect wires to motor terminal box.
5. Start motor, stop immediately after acceleration — verify:
   - Correct direction of rotation.
   - Even deceleration without rubbing.
   - Motor stops without locking.
6. If direction wrong: swap two phases at motor terminal board.

#### No-Load Test (Uncoupled)
- Run motor until warm.
- Measure radial vibration at both bearings, at 0° and 90°: acceptance **≤ 76 µm (pk-pk) filtered at rotational speed**.
- Measure absorbed current on all three phases; no significant differences allowed.
- Run ~1 hour; check every 15 min: current, vibration, noise, temperature.
- On completion: stop motor, couple to driven machine → **Ready for Commissioning**.

#### Load Test (Coupled)
- Same checks as no-load test but under load.
- Record current at load vs. rated current.
- Run ~1 hour with 15-min checkpoints.
- Note: If motor cannot be uncoupled (e.g., fan with impeller directly on shaft), no-load test is skipped; load test performed when process permits.

### Acceptance Criteria Summary
| Parameter | Criterion |
|-----------|-----------|
| Motor insulation resistance | > 10 MΩ |
| Radial shaft alignment | ≤ 0.03 mm (reference RIC8952285) |
| Vibration (no-load and load) | ≤ 76 µm pk-pk, filtered at rotational speed (both bearings, 0° and 90°) |
| Thermal relay setting | ~110% of rated current |
| Phase current balance | No significant differences between R, S, T |
| Rotation direction | Correct per arrows/driven machine |
| Dimensional tolerances | Per RIC8952285 |

### Certification Checklists
Three sign-off sheets (Contractor, Nuovo Pignone, Final Client signatures):
1. **Sheet 1**: Correct Installation (8 items — conformance with design, positioning, quality docs).
2. **Sheet 2**: Pre-commissioning (14 items — plate data, grounding, lubrication, fan guard, hand rotation, continuity, alignment, MCC settings, insulation test record table).
3. **Sheet 3**: Commissioning (8 items — direction of rotation, vibration readings at 4 points, temperature, heater current, no-load and load current, local switches, ready for operation).

### Safety Requirements
- **LOTO** (Lock Out / Tag Out) mandatory for all electrical work.
- Residual risks during initial energisation: implement safety plan, restrict area access to trained technicians only.
- Sequence meter activity: specific residual risk — manage via safety plan.

### Cross-References
| Document | Purpose |
|----------|---------|
| RIC8952285 | Physical position tolerances and dimensional checks |
| RIC8952255 | Supply cable insulation verification procedure |
| RIC8952207 | Document this replaces |
| IEC Standards | Electrical test requirements |
| OEM manuals | Additional motor-specific requirements |

### Field Application Notes
- Always verify whether heaters have ever been energised; if not, test continuity and insulation before first energisation.
- For motors that cannot be uncoupled, skip the no-load test and accept load test as the functional test.
- Record all insulation values numerically in the pre-commissioning checklist — do not just tick "OK".
- Bearing lubrication must be checked BEFORE the first energisation; a dry start will cause immediate bearing damage.

---

## 2. SIC00277 — DCP Panel Installation & Commissioning {#sic00277}

| Field | Detail |
|-------|--------|
| **Document Code** | SIC00277 |
| **Full Title** | Standard Installation & Field Service Procedure — Installation & Commissioning Procedure for DCP Panel |
| **Revision** | 0 |
| **Date** | 15-Dec-2016 |
| **Publisher** | Nuovo Pignone Tecnologie S.r.l. (GE Oil & Gas) |
| **Replaces** | RIC8952213 |
| **File ID** | EE3702398775304E!531170 |
| **Pages** | ~15 |

### Scope & Applicability
Defines tests and inspections to be performed on **battery/inverter panels (DCP — Direct Current Panels)** during and after assembly at site. Applies to GE Oil & Gas supplied DCP panels, which provide DC power to motor starters, control systems, and instrumentation. Supplements OEM supplier's Installation, Operation & Maintenance Manual.

### Definitions
- **DCP**: Direct Current Panel (battery/inverter panel)
- **LOTO**: Lock-Out Tag-Out
- **Soft Start**: Gradual ramp-up of rectifier output voltage

### Required Tooling
| Tool | Purpose |
|------|---------|
| Hand tools | General mechanical work |
| Multitester | Voltage, continuity, resistance measurements |
| 500 V Megger | Insulation resistance |
| Tester | Circuit verification |
| Torque wrench | Bolt/terminal tightening |

### Pre-Installation Storage Requirements
If DCP is not installed immediately upon delivery:
- Cover with transpiring cover (protection from weather/humidity).
- Ambient temperature: **0°C to +45°C**; avoid sudden temperature changes (condensation risk).
- Install internal heaters if needed (ensure no flammable material inside).
- Protect against rodents, dust, corrosive/atmospheric elements.
- Ideal storage: indoor, air-conditioned room.

### Installation Procedure

#### Receiving & Handling (Steps 3.1–3.9)
1. Inspect panel on delivery — report any damage immediately to GE O&G representative.
2. Remove packing on installation site in a safe, protected area.
3. Store with weather protection until installed; packing is not sufficient protection.
4. Fix panel to floor (direct bolt or floating floor metal supports supplied with panel, fastened to support beam).
5. Lift via hoisting bars at top of frame (max load per bars); if hoist not possible, use rollers with precautions against structural deformation.
6. Protect floor from damage during positioning.
7. Power centre room must be closed, clean, and free from foreign materials before work begins.
8. Check and clean panel internally and externally.
9. Verify nameplate data of internal components vs. design data/components list drawing.

#### Internal Inspection (Step 3.10)
*Before starting: Isolate from ALL power sources; open all input and utility circuit breakers (may be more than one source — CAUTION).*
- Check for damaged internal components.
- Verify no loose connections (cables, leads, relay anchorage, sub-rack internals).
- Verify grounding connections are tested and fastened.
- Confirm electronic cards are seated and fastened.
- Verify no grounds on signal leads.
- **Check DCP insulation resistance — if < 10 MΩ between power supplies and ground, DO NOT power the panel.**
- Check fuse amperage vs. specifications.
- Verify protection devices (input/output breakers) set to correct values per design documents.
- Check cableways clean and closed.
- Verify all cables properly fastened.

#### Wiring Inspection (Step 3.11)
- Confirm DCP input leads correctly connected per Wiring Diagram.
- Verify each power connection corresponds to correct supply.
- Confirm input leads comply with contract standards.
- Verify terminals tightly clamped.
- Inspect lead protection sheaths — replace if damaged.
- Confirm all power cables: connected, insulation tested, connection tested, numbered.
- Confirm control cables: connected, continuity tested, numbered.
- Confirm cable armours connected to specified earth bar.

#### Pre-Powering Actions (Step 3.12)
- Implement LOTO; train all personnel to follow strictly.
- Limit work area around DCP and connected utilities.
- Open all DC-side circuit breakers; LOTO all electrical loops.
- Post warning signs for energisation in progress.
- Station adequate fire-fighting equipment.

#### Commissioning Sequence (Steps 3.13–3.28)
| Step | Action |
|------|--------|
| 3.13 | Set RECTIFIERS STARTUP changeover switches to OFF |
| 3.14 | Verify AUTO/MAN changeover in AUTO position |
| 3.15 | Verify changeover switch in NORMAL position |
| 3.16 | Check correct phase sequencing of AC power supplies |
| 3.17 | Verify battery connection (observe polarity) |
| 3.18 | Check mains voltage with voltmeters and changeover switches |
| 3.19 | Close mains input switch 52 (service side) |
| 3.20 | Set ON/OFF changeover switch to ON (service side) |
| 3.21 | Service rectifier soft-starts; verify output = **EMERGENCY operation voltage** |
| 3.22 | Close rectifier output switch 72 |
| 3.23 | Close mains input switch 52 (battery side) |
| 3.24 | Set ON/OFF changeover switch to ON (battery side) |
| 3.25 | Battery rectifier soft-starts; verify output = **FLOATING voltage** |
| 3.26 | Close rectifier output switch 72 |
| 3.27 | Close battery circuit breaker 72 |
| 3.28 | Close distribution circuit breakers (motors, panels, etc.) |

### Acceptance Criteria
| Test | Criterion |
|------|-----------|
| Insulation resistance (panel) | **> 10 MΩ** at 500 VDC for more than **60 seconds** |
| All other parameters | No deviation from design |

### Electrical Tests Summary
| Test | Tool | Points |
|------|------|--------|
| Insulation resistance | 500 V Megger | R→T, S→T, T→T, N→T, R→S, S→T, T→R, N→(ground) |
| Continuity | Tester | All control cables |
| Power cable insulation | Megger | All power cables |
| Voltage verification | Multitester | Emergency voltage, floating voltage, mains voltage |
| Phase sequence | Phase meter | AC input |
| Ground signal leads | Tester | No grounds permitted |

### Certification Checklist (12-Item Sign-Off)
| Item | Activity |
|------|---------|
| 1 | Visual Inspection |
| 2 | Ground connection tested and tightened |
| 3 | Bolts clean and tightened |
| 4 | Power cables insulation check |
| 5 | Control cables connection check |
| 6 | Tagging check of cables and breakers |
| 7 | Control of protection setting |
| 8 | Verification of power supply and breakers |
| 9 | Verification of electric heaters loop |
| 10 | Power up and instruments check |
| 11 | Protection devices functional checks |
| 12 | DCP Ready For Operation |

Signed by Contractor, Nuovo Pignone, Final Client.

### Safety Requirements
- LOTO mandatory; train all site personnel before any electrical work.
- Multiple power sources may exist — identify and isolate ALL before internal inspection.
- **Critical rule**: If insulation resistance < 10 MΩ, do not power the panel.
- Post area warning signs during energisation.
- Provide fire-fighting equipment during commissioning.

### Cross-References
| Document | Purpose |
|----------|---------|
| DCP Supplier Installation, Operation & Maintenance Manual | Primary OEM reference |
| DCP Wiring Diagram | Connection verification |
| Design documents | Protection settings, components list |
| Contract standards | Input lead specifications |

### Field Application Notes
- The DCP commissioning sequence must follow the exact step order — particularly the soft-start sequence. Do not jump to closing downstream breakers before the rectifier output voltages are confirmed at correct setpoints.
- Emergency operation voltage ≠ Floating voltage: service rectifier runs at emergency setpoint during initial startup; battery rectifier runs at float setpoint for continuous battery charging.
- Battery polarity errors can destroy rectifier diodes instantly — always double-check polarity before closing battery circuit breaker (step 3.27).

---

## 3. SIC00066 — OSM Functional Checklist {#sic00066}

| Field | Detail |
|-------|--------|
| **Document Code** | SIC00066 |
| **Full Title** | OSM Functional Checklist |
| **Revision** | 1 (Added Russian Translation) |
| **Date** | 05-Mar-2014 (1st Execution: 04-Jul-2012) |
| **Publisher** | Nuovo Pignone S.r.l. / GE Oil & Gas |
| **File ID** | EE3702398775304E!531252 |
| **Pages** | 13 |

### Scope & Applicability
Functional verification checklist for the **OSM (Operations Support Manager)** system — GE's site-level data acquisition, historian, and HMI platform integrated into gas turbine control packages. Applicable to GE Oil & Gas products using ToolboxST/WorkstationST/Cimplicity architecture.

### OSM System Architecture
- **OSM**: Operations Support Manager hardware/software node installed in UCP rack.
- **WorkstationST**: Data collection and historian software (EGD protocol with Mark VIe, Bently Nevada 3500, PLC F&G).
- **Cimplicity**: HMI/SCADA display platform (process screen, trend, alarm viewer).
- **SQL Database**: Historian backend (database: "OSM"; table naming convention: L0XXX).
- **NTP**: Time synchronisation (configurable at master or device level).
- **WebView**: Remote monitoring via Internet Explorer (port 8090 typically).
- **System1 Display**: Bently Nevada machinery health monitoring integration.

### Verification Procedure (7 Steps)

#### Step 3.1 — OSM Physical Presence
- Confirm OSM installed in UCP rack and powered on.
- Verify cabling:
  - 2× Ethernet cables → UDH ports
  - 1× Ethernet cable → PDH port
  - 2× Ethernet cables → ADH ports (1 NIC + 1 DRAC on OSM)

#### Step 3.2 — WorkstationST Data Collection
- Open WorkstationST → Status of Features → all features = OK.
- Verify OSM collecting from Mark VIe: open ToolboxST project → OSM device → Tab 'EGD' → unit Gx → Go Online → all points green and showing changing values.
- Verify OSM collecting from BN 3500: same method, BN device in EGD tab.
- Verify F&G PLC collection (EGD or Modbus protocol → 'modbus' tab if applicable).
- Verify alarm/event collection: open Alarm Viewer → confirm live alarms/events shown.
- Verify historical alarm archiving: check folder 'C:\GEWorkstationST\HistoricalAlarmData' for recent files.
- Verify Triplog capture: ToolboxST → OSM → Tab 'Recorder' → Trip configuration. Check 'C:\GEWorkstationST\RecorderData\Gx\Trip' for files.
- Test: force L4T: 1→0→1 in Mark VIe software to generate test Triplog; confirm file created.

#### Step 3.3 — Cimplicity HMI
- Open L0XXX.gef file from 'C:\Site\L0XXX'.
- Click Play button if visible.
- Select all points in Points panel → right-click → Point Control Panel.
- Verify all points show values (not "\*\*\*").

#### Step 3.4 — SQL Database
- Open SQL Management Studio → connect to local DB (credentials: 'rmdadmin' / 'rmdadmin').
- Expand Databases → "OSM" → Tables.
- Confirm table "L0XXX" exists.
- Run: 'SELECT * FROM OSM.dbo.<table_name_L0XXX> ORDER BY timestamp DESC;'
- Verify: first row timestamp = current computer date/time; all columns contain non-NULL values.

#### Step 3.5 — WebView
- Open IE → 'http://<HMI/UCP_ip_address>:8090' (example port).
- Verify WebView feature loads.
- Click WebView → login to Cimplicity (credentials often: Administrator, no password).
- Verify HMI screens display correctly from browser.

#### Step 3.6 — NTP Time Synchronisation
- Open WorkstationST → Status of Features → Time Synchronisation System = OK.
- Right-click → View NTP Details.
- Open ToolboxST → check Time Sync settings at Master level and on OSM device.
- Verify NTP data source configured (e.g., HMIR1 as source for OSM).

#### Step 3.7 — System1 Display
- Confirm System1 Display software is installed on OSM.

### Certification Checklist (7 Sign-Off Items)
| Action | Check |
|--------|-------|
| OSM present in UCP rack | ☐ |
| WorkstationST running and collecting data | ☐ |
| Cimplicity acquiring from WorkstationST OPC Server | ☐ |
| Data stored in SQL database | ☐ |
| WebView feature working | ☐ |
| NTP synchronisation working | ☐ |
| System1 Display installed | ☐ |

Signatures: End User, Client, GE Oil & Gas, Third Party.

### Field Application Notes
- The SQL credentials 'rmdadmin/rmdadmin' are default GE factory credentials — verify that these have not been changed per site cybersecurity requirements before attempting to connect.
- WebView port 8090 is a common default; actual port may differ per UCP configuration — check UCP network settings if browser connection fails.
- Triplog test (L4T forced trip) should only be performed during commissioning when the turbine is not running, as it simulates a trip command.
- NTP misconfiguration causes timestamp issues in the historian and alarm records — always verify NTP before declaring OSM functional.

---

## 4. SIC00006 Rev.8 — General Notes for Lube Oil System Flushing {#sic00006}

| Field | Detail |
|-------|--------|
| **Document Code** | SIC00006_007_A_001 (Rev. 8) |
| **Full Title** | General Notes for Lube Oil System Flushing |
| **Revision** | 8 |
| **Revision Description** | Revised pages 4, 5, 8, 12, 20, 23–28, 31, 32, 43 |
| **Date** | 27-Jun-2018 |
| **Publisher** | Nuovo Pignone Tecnologie S.r.l. (Baker Hughes, a GE company — BHGE) |
| **1st Execution** | 06-Oct-2011 |
| **File ID** | EE3702398775304E!545895 |
| **Pages** | 52 |

### Scope & Applicability
Mandatory flushing procedure for lube oil (LO) systems on GE/BHGE rotating machinery — gas turbines (HD and Aeroderivative), centrifugal compressors, steam turbines, reciprocating compressors, and electric generators. Covers site interconnecting piping (shipped separately from skids). Flushing required to remove foreign matter from fabrication/installation before any machinery startup.

### LO System Components
| Component | Description |
|-----------|-------------|
| Lube oil tank | CS with electric heaters; epoxy lined |
| Lube oil pumps | ≥2 redundant (electric, steam-driven, or machine-driven) |
| Cooling system | Oil-to-air or oil-to-water HX + thermostatic valve |
| Filtering | Duplex filter (β > 1000, ISO 16889) with 3-way changeover valve |
| Instrumentation | Pressure control valves, pressure relief valves |
| Piping | Header, bearing feed lines, drain lines (sometimes coaxial) |
| Oil vapour separator | Centrifugal SS fans (1+1) |
| Optional | Rundown tank, hydraulic accumulators, LO purifier |

### Cleanliness Requirements

#### Acceptability Criteria (Table 3)
| Machine Type | Cleanliness Class | Reference |
|-------------|------------------|-----------|
| HD GT, CC, EG, EM, ST | **ISO 4406:1999 — 17/15/12** or NAS 1638 Class 6 | Chemical/physical per new oil (ITN52220.02/03) |
| Synthetic LO (Aeroderivative GT) | Per SIC00119 | — |
| Reciprocating Compressors | Per SIC00045 | — |
| Closed/Open Loop Hydraulic (AD GT) | Per SIC00124 | — |

#### ISO 4406 Reading Reference
- **17/15/12** = ≤640/mL (≥4 µm) / ≤160/mL (≥6 µm) / ≤40/mL (≥14 µm) — automated particle counter.
- API 614 test screens: 100 mesh (~0.15 mm); intermediate test only, not final cleanliness verification.
- Water content acceptance: **≤ 0.05% wt (< 200 ppm)**; Vorecon systems: **100 ppm** maximum.

### Flushing General Notes

#### Flow Parameters
- Flushing flow ≥ normal maximum operational flow.
- **Turbulent flow required**: Reynolds number ≥ 4000 (and ≥ 1.2× service flow).
- Minimum flushing flows by pipe size/temperature (example from Table 5–6):
  - 6" pipe at 40°C: **924 l/min** minimum.
- Temperature target: **50–70°C** recommended; thermal cycling improves cleaning.
- No external gas pressurisation (safety prohibition).

#### Oil Selection
- Same oil type as operational; no additives, no substitute oils.
- Verify oil against specifications: ITN52220.02/03.
- Reference: SIC00341 for lubricating oil selection at site.

#### Bypass/Screen Materials
| Item | Specification |
|------|--------------|
| Bypass hoses | Flex hose or SS tubing ≥ DN of line; ≤ specified length; spirometal gaskets |
| Mesh screens (primary) | 20 mesh then 100 mesh (staged) |
| Servovalve blocks | RVO07006 + adapters per SMP8316093 |

### Flushing Execution Summary

#### Preparation
- Red Flag Review (RFR): Request ≥ 7 days before flushing start (mandatory BHGE internal process for new units).
- Isolate instruments; verify system cleanliness.
- Install bypasses per marked P&ID/TPI; install 20-mesh + 100-mesh screens.
- Manually clean tanks (lint-free material only); confined space procedures.
- Fill with operational oil through filtered fill system.

#### Execution
- Circulate with pumps at maximum achievable flow (MCC/UCP manual control or provisional electrical supply).
- Circulate through cooler first (separate hot/cold lines per Figs 7–11).
- Main circulation per machine type (Figs 12–25, e.g., MS5001 Fig. 12).
- Monitor and change screens progressively from 20 mesh to 100 mesh.
- Take particle count samples per ISO 3722: flush sample line, fill and shake bottle.
- Sample location: downstream of filters / at final bearing feed line; tank sample for reference.

#### Final Bearing Flushing
- After main system acceptance, flush final bearing feeds: **minimum 2 hours** through 100-mesh screens.
- Issue Flushing Certificate (Annex 1) only after final bearing flush acceptance.

#### System Restoration
- Remove all bypasses; reconnect per P&ID using new gaskets.
- Clean tanks; restart system; check for leaks.
- Reference SIC00201 and SIC00270 for piping reconnection.

### Safety Plan
Key risks: oil leak (fire), electrocution, confined space entry.
Controls: identify electrical circuits (LOTO), maintain firefighting equipment, install signage, implement DPI (PPE), manage communications.

### Key Cross-References
| Document | Topic |
|----------|-------|
| ISO 4406 / API 614 | Cleanliness classification |
| GEK 110483b | Cleanliness requirements for power plant installation |
| ITN52220.00–.05 | Lube oil specifications (ISO VG 32 & 46; Shell/ExxonMobil brands) |
| SIC00341 | Lubricating oil selection at site |
| SIC00202 | LV motor installation/precommissioning (for pump motor checks) |
| SIC00277 | DC panel installation/commissioning |
| SIC00115 | Piping/tubing erection |
| SIC00045 | Reciprocating compressor oil flushing |
| SIC00124 | AD GT starting oil flushing |
| SIC00272 | Vorecon unit flushing |

### Field Application Notes
- Never use additives or flushing aids in the lube oil during flushing — use operational-grade oil only.
- Do not pressurise oil system with external gas during flushing (explosion risk).
- The 17/15/12 ISO cleanliness target is the minimum — many turbine OEMs require tighter targets at specific bearing inlets; check individual machine manuals.
- Thermal cycling (alternating hot ~70°C and cold ~40°C oil) is the most effective method to dislodge scale and debris without mechanical agitation.
- Final bearing feed flushing (2 hrs minimum at 100 mesh) is a separate step after main system acceptance — do not combine.

---

## 5. SIC00115 — Piping/Tubing Erection & Construction Procedure {#sic00115}

| Field | Detail |
|-------|--------|
| **Document Code** | SIC00115 |
| **Full Title** | Piping/Tubing Erection & Construction Procedure |
| **Revision** | 2 (Added Italian Translation) |
| **Date** | 19-Sep-2014 (1st Execution: 28-Nov-2013) |
| **Publisher** | Nuovo Pignone S.r.l. (GE Oil & Gas) |
| **Replaces** | RIC8952283 |
| **File ID** | EE3702398775304E!531459 |
| **Pages** | 56 |

### Scope & Applicability
Construction procedure for primary hook-up piping and tubing (including fittings, quick-connects, and supports). Covers fabrication, bending, fitting assembly, and testing of instrument tubing lines on GE Oil & Gas equipment skids.

### Tube Bending — Critical Rules
- **Measure from centerline** of tube for all bend calculations.
- **Compensate for springback**: over-bend by springback angle (typically 3° on 90° bends).
- **Tube stretch/pickup**: ~1 tube OD gain per 90° bend (Table 1 for precise values by tube size).
  - For 1/2" tube (8 size): **0.64" gain** per 90° bend.
  - For 3/4" tube (12 size): **0.97" gain** per 90°.
- **Never use sharp tools** to mark tube — scratches create stress concentrations and corrosion sites.
- Mark with sharp pencil; use ferrule as guide for circumferential mark.
- Bend direction: always away from starting end; if reversed, subtract gain per Table 1.

#### Tube Stretch/Pickup Table (Selected Values)
| Tube Size | OD (inch) | Radius (inch) | Gain 90° | Gain 45° |
|-----------|-----------|---------------|----------|----------|
| 4 | 1/4" | 9/16" | 0.24" | 0.02" |
| 6 | 3/8" | 15/16" | 0.40" | 0.04" |
| 8 | 1/2" | 1-1/2" | 0.64" | 0.06" |
| 12 | 3/4" | 2-1/4" | 0.97" | 0.10" |
| 16 | 1" | 3" | 1.29" | 0.13" |

### Tube Preparation
- **Cutting**: High-quality pipe cutter for all materials; tolerance **±1°** perpendicular; fine-tooth hacksaw with guide acceptable. No tube cutters for steel/SS (creates inner burr).
- **Deburring**: Remove OD and ID burrs; hacksaw blade ≥ 32 teeth/inch; do not over-deburr OD.
- **Cleaning**: Flush with solvent/water/oil per NP procedure; blow with low-pressure air; swab with lint-free cloth. Tube must be free of cutting residuals, burrs, occlusions.

### Fitting Assembly Procedures

#### Compression Fittings (Table 4)
Initial assembly tightening (turns from finger-tight):
- OD < 1/4": **3/4 turn**
- OD ≥ 1/4": **1-1/4 turns**
- For OD > 1": hydraulic swaging unit may be used.
- Verify with gap inspection gauge (GO/NO GO per manufacturer): if gauge enters gap, additional 1/8 turn + recheck; if still fails, disassemble and restart.
- **Mark each fitting** after confirmed tightening.
- Reassembly (subsequent): additional 1/4 turn (or 1/16 beyond old mark if repeatedly disassembled). Do NOT use gap gauge on reassembled fittings.

| OD (mm) | LA (mm) | LB (mm) | Torque (turns) |
|---------|---------|---------|---------------|
| 6.4 | 20.6 | 17.5 | 1-1/4 |
| 9.5 | 23.8 | 19.0 | 1-1/4 |
| 12.7 | 30.2 | 24.6 | 1-1/4 |
| 25.4 | 38.1 | 32.5 | 1-1/4 |
| 38.1 | 61.1 | 56.4 | 1-1/4 |

#### Fittings with Cutting Ring
- Pre-assembly: 1 full turn on pre-assembly tool.
- Accept if: metal ridge raised ≥ 50% of cutting edge ring thickness; front edge coined flat; back end snug to tube; slight indentation on tube end.
- Reassembly: 1/6 turn additional; 10–20° beyond old mark if repeatedly disassembled.

#### Flared Fittings (37° Parker) (Table 3)
| OD (mm) | Torque Min (kgm) | Torque Max (kgm) |
|---------|-----------------|-----------------|
| 6 | 1 | 1.5 |
| 10 | 2.3 | 3.5 |
| 16 | 5.2 | 8 |
| 25 | 11.9 | 18 |

#### Tapered Thread Ports (BSPT / NPTF) (Table 5)
| Thread Size | Turns from Finger-Tight (TFFT) |
|-------------|-------------------------------|
| 1/8–28 BSPT / 1/8–27 NPTF | 2–3 |
| 1/4–19 / 1/4–18 | 2–3 |
| 1–11 / 1–11.5 | 1.5–2.5 |
| 2–11 / 2–11.5 | 1.5–2.5 |
- Total thread engagement: **3.5 to 6 threads** (outside this range = incorrect).
- PTFE tape: 1.5–2 turns clockwise (viewed from thread end); no more than 2 turns.
- Leave first threads uncovered by sealant.

#### Parallel Thread Ports (SAE/ISO) (Table 6 — Selected)
| Thread | Non-adjustable Torque (Nm) | Adjustable Torque (Nm) |
|--------|--------------------------|----------------------|
| 7/16–20 | 35 | 20 |
| 9/16–18 | 46 | 46 |
| 1 1/16–12 | 185 | 185 |
| M12×1.5 | 35 | — |
| M22×1.5 | 100 | — |
| M42×2 | 330 | — |

### Support Spacing Requirements (Table 2)
| Tube OD | Spacing |
|---------|---------|
| 1/4"–1/2" (6–13 mm) | 3 ft (0.9 m) |
| 3/8"–7/8" (14–22 mm) | 4 ft (1.2 m) |
| 1" (23–30 mm) | 5 ft (1.5 m) |
| 1-1/4" and up | 7 ft (2.1 m) |

**Critical routing rules:**
- Maximum clamp spacing: **400 mm**.
- Minimum distance between parallel tube lines = largest tube OD.
- Crossing allowed only if clearance ≥ 30 mm.
- **No welding of tubing material.**
- No plastic or metallic stripes/ties as primary support.

### 24-Item Construction Checklist
Key acceptance items:
- Cut tolerance ±1°.
- No flattened, kinked, or wrinkled bends.
- Ferrules correctly penetrated/positioned.
- Each fitting pencil-marked after correct tightening.
- Gap inspection gauge passed on all compression fittings.
- Tubing supported by appropriate clamps per spacing table.
- Sealing test completed per Line Specification (ITN07022): test fluid, test pressure, test time, leak detectors all per spec.
- Calibrated gauges used for sealing test (precision class and calibration requirement per ITN07022).
- Final acceptance: no dents or scratches; open ends plugged.

### Key References
| Document | Purpose |
|----------|---------|
| ITN82109.00–.06 | Mechanical hook-up isometrics |
| ITN62646 | Piping/tubing support installation |
| ITN07022 | Line Specification (pressure test) |
| ITN07771 | Piping layout |
| ITN08010.25 | Instrument list |

---

## 6. GE Technical Proposal — MS7001EA Gas Turbine (ExxonMobil Golden Pass LNG) {#ge-technical-proposal}

| Field | Detail |
|-------|--------|
| **Proposal Number** | 14/UP/1541/L/F Rev. 0 |
| **Date** | 02-Sep-2014 |
| **Customer** | ExxonMobil Development Company |
| **Project** | Golden Pass LNG, Sabine Pass, TX (elevation –13.3 ft) |
| **Supplier** | GE Oil & Gas |
| **Contact** | Fabio Valle |
| **File ID** | EE3702398775304E!475145 |

### Equipment Proposed
| Equipment | Model | Qty |
|-----------|-------|-----|
| Gas Turbine | MS7001EA (Heavy Duty, single shaft, simple cycle, DLN) | 1 per train |
| Centrifugal Compressor | BCL/MCL type | 1 per train |
| Accessory Gearbox | Heavy duty, multi-shaft | 1 |
| Starting System | 935 kW AC motor + torque converter (Koenig) | 1 |
| Load Coupling | Dry flexible type | 1 |

### MS7001EA Performance Data

#### ISO Rated Performance
| Parameter | Value |
|-----------|-------|
| ISO rated output | **86,226 kW** |
| Site output (75°F, 80% RH, –13 ft elev., 6" H₂O inlet, 14" H₂O exhaust) | **82,575 kW** |
| Heat rate (LHV, site conditions) | **10,450 Btu/kWh** |
| Turbine speed | 3600 RPM |
| Exhaust flow | 2,215 × 10³ lb/hr |
| Exhaust temperature | 1,037°F |
| Exhaust molecular weight | 28.31 lb/lbmol |

#### Environmental Performance (Guaranteed)
| Condition | NOx @15% O₂ | CO |
|-----------|-------------|-----|
| 100–75% load, 0–40°C | **15 ppmvd** | **25 ppmvd** |

#### Site Performance Matrix
| Tamb (°F) | Output (kW) | Heat Rate (Btu/kWh) |
|-----------|-------------|---------------------|
| 23 (winter) | 98,353 | 10,039 |
| 75 (design) | 82,575 | 10,450 |
| 104 (summer) | 73,012 | 10,868 |

### Fuel Gas Supply Requirements
| Parameter | Value |
|-----------|-------|
| Mechanical design pressure | 500 psig |
| Maximum operating pressure | 375 psig |
| Minimum operating pressure | 300 psig |
| Temperature range | 60°F – 118°F |
| Modified Wobbe Index tolerance | ±5% |
| Rate of change | Max 1%/min |
| Superheat | Per GEI-41040 |

### Key Systems Included in Scope of Supply
| System | Description |
|--------|-------------|
| GT Package | DLN combustion (10 chambers, multi-nozzles, 2 spark plugs, 8 UV detectors); gas fuel system (Y-strainer, SSV, GCV, splitter, TVGCV); anti-surge; turning motor (AC+DC) |
| Starting System | 935 kW AC motor + torque converter (fully automatic) |
| Acoustical Enclosure | Off-base; ≤85 dBA @ 1 m; fire detection (8 heat rise, 1ooN); gas detectors; 2× centrifugal SS fans; manual crane |
| Air Inlet | Multi-stage: F6 prefilter + coalescer, E12 HEPA; AISI 316L SS; anti-icing; silencer (parallel baffle SS) |
| Lube/Hydraulic Oil | Closed per API 614; main (mech), auxiliary (AC), emergency (DC) pumps; duplex filters (β > 1000 per ISO 16889) |
| Control | Mark VIe TMR UCP; ACP with F&G rack; HMI, PC, printer; max cable run 300 m |
| DC Power | VRLA battery (100%); motors in Div. 2, Class 1, Group D, T3; DC motors flameproof |

### Key Exclusions
Foundations, civil works, fuel gas heater/booster/metering, process piping, power/control cables, first-fill oil, capital spares, site performance test (ASME PTC22/ISO 2314).

### Vendor Document Delivery Waves
| Wave | Issue (weeks from PO) | Key Documents |
|------|----------------------|--------------|
| 1 | 12 | GT Data Sheet (API 616), Performance Curves, Foundation Loads, P&ID |
| 2 | 24 | GA Drawings, I/O List, Wiring Diagrams, QCP, Painting/Piping Specs |
| 3 | 34 | Vendor Docs, Manuals Index |
| 4 | 48 | Final Docs, String Test Procedure |
| 5 | Delivery | O&M Manuals, TPI/TPC |

---

## 7. GE Technical Services Proposal — PR/MR Compressors (Cameron Sempra LNG) {#ge-services-proposal}

| Field | Detail |
|-------|--------|
| **Proposal Number** | 3064436613 Rev. 002 |
| **Date** | 24-Feb-2014 |
| **Project** | Cameron Sempra LNG Project, USA |
| **Buyer (CCJV)** | CB&I and Chiyoda Joint Venture |
| **Seller** | GE Oil & Gas Inc. |
| **File ID** | EE3702398775304E!526372 |

### Equipment Covered (6 Trains Total)
| Qty | Driver | Compressor | Other |
|-----|--------|-----------|-------|
| 3 | MS7001EA | 3MCL1405 + BCL804 | Helper Motor (VSDS) |
| 3 | MS7001EA | MCL1404 + BCL1003 | Helper Motor (VSDS) |

### Scope of Supervision Services
On-site supervision, inspection, and technical assistance for:
- Mechanical, E&I installation
- Pre-commissioning
- Commissioning
- Performance testing (per train)

### Organisation & Key Roles
| Role | Notes |
|------|-------|
| Site Manager | Full site authority; daily e-SMS reports; resource scheduling |
| Material Manager | 100% inventory; dispatch to areas; preservation support option |
| EHS Manager | Full duration |
| QA/QC Manager | Full duration |
| Field Project Engineer | Full duration |
| GT Mechanical Specialist | 3 specialists (staggered) |
| E&I Engineer | 3 specialists (staggered) |
| Control/Start-up Specialist | As required |
| DLE Tuning Specialist | Specialty service |
| VSDS Specialist | 2 resources |
| ASV System Vendor (CCC) | 6 × 5-day mobilisations |
| Fire Fighting Specialist | 6 × 5-day mobilisations |
| WHRU Specialist | 6 × 6-day mobilisations |

### Commercial Terms
| Item | Value |
|------|-------|
| Total supervision (56,580 man-hours) | **USD 23,650,440** |
| All-inclusive hourly rate | **USD 418/hour** (2016 basis) |
| Performance test (lump sum per string) | **USD 840,000** |
| DLN Tuning Kit rental | USD 700/day |
| Gas Analyser rental | USD 850/day |
| Escalation | 5%/year if delayed beyond 31-Dec-2016 |
| Payment terms | 30 days net from receipt of approved timesheets |
| Validity | Until 30-May-2014 |

### Schedule (Per Train Example — 1st Train)
| Activity | Duration |
|----------|----------|
| Total train (MS7001EA + 3MCL1405 + BCL804 + Helper Motor) | 262 days |
| Mechanical Erection | 121 days |
| E&I Assembly | 121 days |
| Pre-commissioning | 75 days |
| Commissioning | 85 days |
| Unit Skid Positioning | 15 days |
| Preliminary Alignment | 8 days |
| Mineral LO Console Interconnecting Piping | 20 days |
| WHRU Assembly | 20 days |
| Mechanical Completion Checks | 9 days |

**Total schedule:** 356 days (site manager/core team); total 6 trains.

### Buyer Responsibilities (Exclusions from GE Scope)
Tools/materials/instruments; site office facilities; work permits; lifting equipment/manpower; stand-by time; extra hours; taxes/duties/VAT.

### Notification Requirement
Buyer must notify GE in writing at least **120 days** before mobilisation.

### Warranty Terms
12 months from start-up OR 8,600 hours in service OR 18 months from delivery (whichever first).

---

## 8. GE Installation Pre-Commissioning & Commissioning Proposal w/ Comments R1 {#ge-install-proposal}

| Field | Detail |
|-------|--------|
| **Document** | GE Installation PreCommissioning Commissioning Proposal w Comments R1 |
| **Project** | Cameron LNG |
| **Buyer** | CCJV (CB&I + Chiyoda) |
| **Reference** | PO 18440-0-PO-110160-1; GE Proposal 3064436613/3065536613 Rev. 002 |
| **File ID** | EE3702398775304E!526374 |

### Scope Additions to GE Services Proposal
This document is CCJV's set of additional requirements appended to GE's on-site supervision proposal. Key additions:

#### Personnel Requirements
- GE to submit organisation chart for on-site staffing (US and/or Italy personnel per discussion).
- GE to provide resumes for all on-site Specialists; CCJV phone interview required; **no substitution** once CCJV accepts a candidate.
- CCJV 10-hour workday standard (overtime by CCJV approval only).
- CCJV provides 4-hour show-up pay when work conditions prevent working.

#### Discipline-Specific Requirements

**Mechanical:**
- Pre-commission and commission all blowers, guide vanes/louvers, air inlet system.
- Pre-commission and commission HVAC system.
- **John Crane specialist** for all dry gas seals and dry gas seal systems.
- Pre-commission and commission lube oil and associated oil systems.
- **Surge Test Engineer** for commissioning.

**Electrical:**
- Supervision for E-House installation, cable landing, instrumentation, loop checks, full commissioning to GE battery limits.
- VFD supervision.

**Instrument:**
- Full supervision for MR/PR Compressors and associated GE equipment: device installation, cable landing, calibration, loop checks, commissioning activities.

**Environmental:**
- DLE Tuning until **all FERC requirements and GE emissions guarantees** are met (NOx + CO at all loads).

**Safety:**
- CO2 and other firefighting systems commissioned per Federal, State, Parish, and local requirements.
- **All CO2 full discharge consumables for commissioning at GE expense.**
- GE HSE Engineer to monitor personnel full duration.

#### Equipment Inspection Requirements
- GE to inspect all equipment and provide CCJV OS&D report.
- Short/damaged items: replacement action required **90 days in advance** of scheduled installation date.
- GE to confirm all equipment "Ready for Duty" and verify preservation practices.

#### Equipment Covered
- PR/MR Compressors, E-House, VFDs, Blowers, Guide Vanes/Louvers with Air Inlet, HVAC, Dry Gas Seals, Lube Oil Systems, CO2 Firefighting Systems.

#### PPE Requirements (Site Entry Mandatory)
Hard hat, safety glasses, FRC clothing, steel-toe leather/rubber boots above ankle, high-visibility vest/shirt, harness for tie-off, gloves, face shields, goggles, dust/chemical respirators.

#### Training/Certification Required for Site Entry
- Safety training (offsite by Safety Council)
- Safety training (offsite by CCJV)
- **TWIC Certification Card** (Transportation Workers Identification Credential)

#### Test Instrument Calibration
- All test instruments: **independent calibration within previous 6 months** required if GE is performing the work.

---

## 9. Technical Package for Commissioning (TPC) — Cameron LNG PR Trains {#tpc}

| Field | Detail |
|-------|--------|
| **Title** | PR Technical Package for Commissioning (TPC) — Commissioning & Start-Up Manual |
| **Revision** | 01-17-E (Revision 03, Jan-2017) |
| **Project** | Cameron LNG Liquefaction Project, Hackberry, LA |
| **Customer** | Cameron LNG |
| **PO** | 184440-0-PO-110160-1 |
| **Supplier** | GE Oil & Gas / Nuovo Pignone Tecnologie S.r.l. |
| **File ID** | EE3702398775304E!530873 |

### Equipment Covered (3 Trains)
| GE Job # | Equipment | Driver Serial | Compressor Serials |
|----------|-----------|--------------|-------------------|
| 160.7087 / 110.3240 | MS7001EA + Ce/Co + Helper Motor | GO8908 | C14929 / C14930 |
| 160.7088 / 110.3241 | MS7001EA + Ce/Co + Helper Motor | GO8909 | C14931 / C14932 |
| 160.7089 / 110.3242 | MS7001EA + Ce/Co + Helper Motor | GO8910 | C14933 / C14934 |

**Tags:** G1-3001, C1-3001, C1-3004, M1-3001 (Train 1); same pattern for Trains 2 and 3.

### Key Definitions
| Term | Meaning |
|------|---------|
| Pre-commissioning | Non-operational checks: installation verification, flushing, alignment, calibration, static tests |
| Ready for Commissioning (RFC) | All pre-commissioning complete; Category A punch items resolved |
| Mechanical Completion | All systems RFC |
| Commissioning | Post-RFC activities to prepare for feed introduction |
| Ready for Start-up (RFSU) | All commissioning complete |
| Start-up | Introduction of feed; functional + performance tests |
| Punch Item Cat. A | Must resolve BEFORE commissioning |
| Punch Item Cat. B | Before start-up |
| Punch Item Cat. C | Before COD |
| Punch Item Cat. D | Within warranty period |
| COD | Commercial Operation Date |

### Commissioning Sequence Overview

**Phase 1 — Power-Up and Control Loops (Section 7.3)**

**Phase 2 — Panel Power-Up (Sections 7.4.1–7.4.23)**
All panels energised in controlled sequence with verification.

**Phase 3 — Systems Functional Testing (Section 7.5)**

| System | Key Checks | Reference Procedure |
|--------|-----------|---------------------|
| CO2 Fire Fighting | Simulate operation, alarms, chiller start/stop | SIC00143 |
| Compressor Sealing (DGS) | Gas regulators, vent flow, secondary/tertiary seal | SIC00063 |
| Mineral Lube Oil | Pumps, filters, thermostatic valve, flow sights | SIC00006 |
| Oil Vapour Separator | Fan operation, pressure drop, drainage | SIC00240 |
| Oil Clarifier/Purifier | Disk pack, gravity disk, separation | SIC00118 |
| Hydraulic Oil | N₂ charge accumulators, filters, pumps | SIC00110, SIC00054 |
| Inlet Guide Vanes (IGV) | Actuator travel, servo loop, control oil | — |
| Turning Gear | AC/DC motor confirmation | — |
| Filter House | Clean side gaps, cartridges, light test | SOM6664411 |
| Ventilation | Fans, dampers, enclosure pressure | SIC00261 |
| Gas Detection | Calibration, alignment, alarms | SIC00233 |
| Turbine Control Devices | Flame detectors, spark plug, axial probes | SIC00292, SIC00042 |
| Electric Motor Electrical | Insulation, CT/relay injection | SIC00276 |
| Motor Control/Jacking Oil | Heaters, vibration/temp, jacking pumps | SIC00054 |
| Step-Down Transformer | Wiring, oil, insulation, VT injection | SOS0437911 |
| Antisurge Protection | Valve positioner, simulation | SIC00065 |
| Compressor Process Valves | Open/close, feedback, sequences | SIC00108 |
| Compressor Leakage / Pressurisation | N₂/process gas leak test, DGS | SIC00262 |
| Fuel Gas Scrubber | Leak test, drain, changeover | SIC00007 |
| Starting Means | Motor no-load, clutch alignment | SIC00276 |
| Start on Crank | Auxiliaries, shaft parameters, servo calibration | — |
| Fuel Gas | Leak test, valves, VSR/VGC calibration | RIC8990422/23 |

### Start-Up Operational Limits
| Parameter | Alarm | Trip |
|-----------|-------|------|
| Turbine shaft vibration | 0.5 in/s | **1.0 in/s** |
| Compressor shaft vibration | 5.9 mil | **8.6 mil** |
| Lube oil header pressure (nominal 21.76 psig) | — | **16 psig** |

### Commissioning Quality Documents
| Document | Purpose |
|----------|---------|
| SOI0002635 | Site Quality Loop Check List |
| SOI0002633 | Site Quality Commissioning Check List |
| SOI0002634 | Site Quality Start-Up Check List |

### Completion Milestones & Certificates
| Certificate | Description |
|-------------|-------------|
| COM45-5 | Ready for Commissioning (per system) |
| COM45-1 | Mechanical Completion (all systems RFC) |
| COM45-6 | Ready for Start-up |
| COM45-2 | Start-up Certificate (post 72-hr reliability run) |
| COM45-3 | COD Certificate |

### Acceptance Criteria
- All commissioning systems functional per P&ID and Functional Description.
- Zero Category A and B punch items open.
- All vibration, temperature, and pressure parameters within limits.
- 72-hour reliability run successfully completed (COM45-2).
- All alarms and trips verified by simulation/injection.

---

## 10. Technical Package for Installation (TPI) — Cameron LNG EC401 Turboexpander {#tpi}

| Field | Detail |
|-------|--------|
| **Title** | Technical Package for Installation (TPI) — Installation and Pre-Commissioning Manual |
| **Revision** | 01-17-E (Revision 03, Jan-2017) |
| **Project** | Cameron Liquefaction Project, Hackberry, LA |
| **Customer** | CCJV for Cameron LNG, LLC |
| **PO** | 184440-0-PO-110170-1 |
| **Equipment** | Turboexpander-Compressor EC401 with Active Magnetic Bearings (AMB) |
| **Supplier** | Nuovo Pignone Tecnologie S.r.l. (GE Oil & Gas), Florence, Italy |
| **File ID** | EE3702398775304E!530420 |

### Equipment Covered (3 Units)
| GE Job # | Tag | Compressor Serial | Weight |
|----------|-----|-------------------|--------|
| 9000070 | C1-2501 | C15167 | Main machine: 19,700 kg |
| 9000071 | C2-2501 | C15168 | Baseplate: 8,000 kg |
| 9000072 | C3-2501 | C15169 | Total skid: 34,604 kg (76,289 lb) |

### Pre-Installation Requirements
- **Qualified personnel** with GE Oil & Gas training/certification.
- **Preservation checks**: SIC00010, SIC00031, SIC00033, SIC00073, SIC00074.
- **Storage**: Indoor; –10°C to +40°C; covered and dry.
- **Safety**: Job Safety Analyses (JSAs 000–094) per activity; LOTO per EHS-WI.005.

### Special Tools Required (SOH9721820)
| Tool | Part Number |
|------|------------|
| Lifting Brackets | RAO0694921, SHO0715457 |
| Push & Pull IGV | SHO0715464 |
| Bolt Tensioning | SHO0715453 |
| Shaft Lifting | SHO0715458 |
| Wheel/Impeller | SHO1290186 |

### Installation Sequence

#### 1. Receiving & Unloading
- Inventory vs. packing list.
- Lifting: max vertical speed **40 mm/s**, horizontal **200 mm/s**; lifting angle **< 120°**.
- Protect open ends; no stacking of boxes.

#### 2. Foundation Check
- Verify pocket positions, bolt positions, elevation, and rhomboidal errors (Pythagoras check).
- Harmonic wire alignment; shim packs prepared and lubricated.

#### 3. Skid Positioning & Grouting
- Lift per SOH9721361; center on anchor bolts.
- Level with screws/plates per foundation drawing.
- Grout sequence: bolt pockets first (anti-shrinkage or epoxy grout); final base grout after torque.

#### 4. Skid Completion — Critical Torques
| Connection | Torque |
|------------|--------|
| Expander discharge spool | **1,551 Nm** |
| Compressor spool | **2,325 Nm** |

#### 5. Process Piping Connection
- Clean flanges; preliminary centerline alignment; spot-weld mating flanges for position check.
- Final torque in cross-pattern per ITN31012.
- Spring supports released post-alignment.
- Dowel feet secured.
- Inlet screen sizes: 30" expander → **60 mesh**; 36" compressor → **80 mesh** (temporary).

#### 6. Seal Gas System Blowing
- Use dry compressed air, 1" flexible, **100-mesh screen**.
- 5 separate blows per sub-system.
- Acceptance: **screens visually clean (no debris)**.

#### 7. AMB Sensors
- Check speed, temperature, position, and current sensors for active magnetic bearing system.

### Mechanical Check Criteria
| Check | Tolerance |
|-------|-----------|
| Flange hole offset | ≤ 3 mm |
| Parallel pipe alignment | < 1/8" (per Figure 22) |
| Torque accuracy | ±5% of specified value |
| Lifting speed (vertical) | ≤ 40 mm/s |
| Lifting speed (horizontal) | ≤ 200 mm/s |
| Lifting sling vertex angle | < 120° |

### Quality & Completion Documents
| Certificate | Event |
|-------------|-------|
| SOI0002608 | Site Quality Checklist |
| COM45-1 | Mechanical Completion |
| COM45-2 | 72-hr Reliability Run |
| COM45-3 | COD |

---

## 11. OVERALL Constructability Checklist {#constructability}

| Field | Detail |
|-------|--------|
| **Title** | OVERALL — Constructability Checklist |
| **Format** | Microsoft Excel (.xls), multiple worksheets |
| **Modified** | 25-Mar-2015 |
| **Size** | 2.3 MB |
| **File ID** | EE3702398775304E!471684 |
| **Project Context** | Cameron LNG Liquefaction Project (2015, CCJV) |

### Summary
This is a multi-discipline construction quality and constructability review checklist spreadsheet used during the Cameron LNG project. The file is a structured Excel workbook covering all construction disciplines, serving as the primary field verification register to ensure that all installed equipment and systems are correctly erected prior to pre-commissioning handover.

### Typical Constructability Checklist Structure (LNG EPC Projects)
Based on standard industry practice for this document type at Cameron LNG scale, the workbook typically includes worksheets for:
- **Mechanical**: Equipment installation, skid positioning, alignment, grouting, bolting.
- **Structural/Civil**: Foundations, grout, baseplates, piles, civil works completion.
- **Piping**: Hook-up completion, hydrotesting, leak testing, supports, insulation.
- **Electrical**: Cable tray, cable pulling, terminations, grounding, area classification.
- **Instrumentation**: Calibration, installation, loop checks, tagging.
- **HVAC**: Ductwork, fans, dampers.
- **Fire & Gas**: Detector installation, functional checks.
- **Telecom/Communications**: Intercom, PA, CCTV.

Each row represents an inspection item; columns typically include:
- Item #, Description, Discipline, Document Reference, Contractor Signature, GE/NP Signature, Client Signature, Date, Status, Comments.

### Field Application Note
The Constructability Checklist is the formal construction-to-pre-commissioning handover document. All items must be signed off by the three-party matrix (Contractor / GE Oil & Gas / Final Client) before the equipment is considered "Ready for Pre-commissioning" and transferred to the commissioning team. Categories correspond to the punch list system (A/B/C/D) used in the TPC/TPI documents.

---

## 12. API Standard 541 — Form-wound Squirrel Cage Induction Motors (≥375 kW) {#api541}

| Field | Detail |
|-------|--------|
| **Standard** | API Standard 541, Fifth Edition |
| **Full Title** | Form-wound Squirrel Cage Induction Motors — 375 kW (500 hp) and Larger |
| **Date** | December 2014 |
| **Publisher** | American Petroleum Institute |
| **File ID** | EE3702398775304E!557543 |

### Scope & Applicability
Minimum requirements for **special purpose** form-wound squirrel cage induction motors ≥375 kW (500 hp) in petroleum, chemical, and industrial applications. Also applicable to induction generators.

Special purpose designation applies when one or more of:
- Continuous operation in critical service without installed spares
- > 2,250 kW (3,000 hp) at ≤ 1,800 RPM
- ≥ 600 kW (800 hp) for 2-pole TEFC; ≥ 930 kW (1,250 hp) for 2-pole open/guarded
- High-inertia load exceeding NEMA MG 1 Part 20 Wk²
- Adjustable speed drive (ASD) power source
- Induction generator
- Vertical machines ≥ 375 kW (500 hp)
- Abnormally hostile environments

### Key Design Requirements

#### General
| Parameter | Requirement |
|-----------|-------------|
| Design life | **25 years minimum** |
| Uninterrupted operating period | **5 years** |
| Sound pressure | **≤ 85 dBA @ 1 m** (no-load, full voltage, sinusoidal) |
| Ambient | Corrosive petroleum processing environment |

#### Voltage Ratings — 60 Hz (Table 1)
| HP Range | Motor Voltage | Bus Voltage |
|----------|--------------|------------|
| ≤ 4,000 hp | 2,300 V | 2,400 V |
| ≤ 7,000 hp | 4,000 V | 4,160 V |
| 1,000–12,000 hp | 6,600 V | 6,900 V |
| ≥ 3,500 hp | 13,200 V | 13,800 V |

#### Starting Capability (Table 4)
| Condition | Consecutive Starts Allowed |
|-----------|--------------------------|
| Cold (at ambient) | **3** |
| Hot (≤ rated temperature) | **2** |
| Total lifetime starts | **≥ 5,000** full voltage |

#### Torque & Current
| Parameter | Limit |
|-----------|-------|
| Locked-rotor current | **450–650% FLA** |
| Torques (LRT, PUT, BDT) | Per NEMA MG 1 Part 20 / IEC 60034-1 |

#### Winding & Insulation (Section 4.3)
| Parameter | Requirement |
|-----------|-------------|
| System | Epoxy VPI, nonhygroscopic |
| Insulation Class | Class F |
| Temperature Rise Limit | **Class B** (40°C ambient) |
| Rise limit ≤ 1,500 hp | RES: 80°C; RTD: 90°C |
| Rise limit > 1,500 hp, ≤ 7,000 V | RES: 80°C; RTD: 85°C |
| Rise limit > 1,500 hp, > 7,000 V | RES: 80°C; RTD: 80°C |

#### Vibration Limits (Figures 2–5)
| Configuration | Limit |
|---------------|-------|
| Unfiltered shaft, ≤ 5,300 RPM | **37.5 µm (1.5 mil) pk-pk** |
| Unfiltered shaft, > 5,300 RPM | **25.4 × (12,000/N) µm pk-pk** |
| Filtered 1× (shaft) | 80% of unfiltered limit |
| Bearing housing | **2.5 mm/s (0-pk)** |

#### Residual Unbalance (Section 4.4.6.3.3)
\[ U_B = \frac{6350 \cdot W_r}{N_{mc}} \text{ g·mm} \quad \text{(SI)} \]
\[ U_B = \frac{4 \cdot W_r}{N_{mc}} \text{ oz·in} \quad \text{(USC)} \]

### Testing Requirements

#### Routine Tests (All Motors — Section 6.3.2)
1. No-load current (each phase)
2. Locked-rotor current (calculated)
3. AC high-potential test
4. Insulation resistance + polarisation index
5. Stator resistance
6. Vibration measurement
7. Bearing insulation test
8. Bearing temperature rise test
9. Surge comparison test

#### DC Test Voltages for Insulation Resistance (Table 7)
| Motor Rated Voltage | DC Test Voltage |
|--------------------|----------------|
| < 1,000 V | 500 V |
| 1,000–2,500 V | 1,000 V |
| 2,501–5,000 V | 2,500 V |
| > 5,000 V | 5,000 V |

#### DC Hi-Pot Levels (Table 8)
| Rated Voltage (kV) | DC Hi-Pot (kV) |
|-------------------|----------------|
| 2.3 | 7.4 |
| 4.0 | 11.8 |
| 6.6 | 18.6 |
| 13.2 | 36.0 |

#### Complete Performance Tests (Section 6.3.5.1.1)
- Efficiency and PF at 100%, 75%, 50% load
- Locked-rotor current, PF, and torque
- Full-load current and slip
- Breakdown torque
- Heat run (≥ 4 hours)
- Speed-torque curve
- Noise test

#### Vibration Acceptance (Section 6.3.3.12)
| Parameter | Limit |
|-----------|-------|
| Shaft unfiltered, ≤ 5,300 RPM | 37.5 µm pk-pk |
| Shaft filtered 1× | 80% of unfiltered |
| Bearing housing | 2.5 mm/s (0-pk) |
| Vector change (cold-to-hot, shaft) | **≤ 15 µm (0.60 mil) pk-pk** |
| Vector change (cold-to-hot, housing) | **≤ 1.25 mm/s (0.05 in/s) 0-pk** |

### Cross-References
| Standard | Application |
|----------|-------------|
| API 614 | Lube oil systems for motors |
| API 670 | Vibration probe systems |
| API 671 | Couplings |
| IEEE 112 | Efficiency testing method |
| IEEE 620 | Thermal limit curves |
| NEMA MG 1 | Motors and generators |
| IEC 60034 | Rotating electrical machines |

---

## 13. API Standard 546 — Brushless Synchronous Machines (≥500 kVA) {#api546}

| Field | Detail |
|-------|--------|
| **Standard** | API Standard 546, Third Edition |
| **Full Title** | Brushless Synchronous Machines — 500 kVA and Larger |
| **Date** | September 2008 |
| **Publisher** | American Petroleum Institute |
| **Licensed to** | Chiyoda Corp / User: Greco, Daniele |
| **File ID** | EE3702398775304E!557546 |

### Scope & Applicability
Minimum requirements for **form-wound and bar-wound brushless synchronous machines** (motors and generators) rated **≥ 500 kVA** in petroleum, chemical, and industrial applications.

Rotor types:
- Salient-pole (solid or laminated poles)
- Cylindrical (solid or laminated construction)

### Key Definitions
| Term | Definition |
|------|------------|
| Pull-in torque | Maximum constant torque to pull load inertia into synchronism |
| Pull-out torque | Maximum sustained torque at synchronous speed |
| Pulsating torque | Oscillatory torque at 2× slip frequency superimposed on starting torque |
| Stator shift | Axial relocation of stator without removing outboard bearing |
| Torsional critical speeds | Resonant frequencies of mass-elastic drive train |

### Key Technical Requirements

#### General Design
| Parameter | Requirement |
|-----------|-------------|
| Design life | **25 years minimum** |
| Uninterrupted operation | **5 years** |
| Sound pressure | **≤ 85 dBA @ 1 m** |
| Oil reservoir / housing IP rating | **IP55 minimum** |

#### Voltage Ratings — 60 Hz (Table 1)
| kVA Range | Voltage |
|-----------|---------|
| 500–4,000 | 2,400 V |
| 500–7,000 | 4,160 V |
| 1,000–12,000 | 6,900 V |
| ≥ 3,500 | 13,800 V |

#### Electrical Limits
- Voltage variation: **±10%**; frequency: **±5%**; combined: **±10%**
- Locked-rotor current: **≤ 500% FLC**

#### Insulation
- Class F insulation, Class B rise (40°C ambient)
- Epoxy VPI, nonhygroscopic; corona protection for ≥ 6 kV

#### Vibration Limits (Critical Thresholds)
| Parameter | Limit |
|-----------|-------|
| Unfiltered shaft, ≤ 3,000 RPM | **50 µm (2.0 mil) pp** |
| Unfiltered shaft, > 3,000 RPM | **12,000/N mils pp** |
| Filtered 1× shaft | 80% unfiltered limit |
| Filtered shaft < 1× | ≤ 2.5 µm (0.1 mil) OR 20% unfiltered |
| Filtered shaft > 1× | ≤ 12.5 µm (0.5 mil) pp |
| Bearing housing | ≤ 0.1 × RPM in/s (mm/s) 0-p |

#### Mechanical Tolerances
| Parameter | Limit |
|-----------|-------|
| Residual unbalance | 6,350 W/N g·mm (4 W/N oz·in) per plane |
| Vector change (shaft) | **≤ 0.8 mil (20 µm)** pk-pk cold-to-hot |
| Vector change (housing) | **≤ 0.05 in/s (1.25 mm/s)** 0-pk cold-to-hot |
| Air gap deviation | **≤ 10%** |
| End float (hydrodynamic) | **0.5 in (12 mm)** total |
| Alignment change | **≤ 0.002 in (0.05 mm)** |
| Frame resonance | Free from 85–115% and 185–215% line frequency |

### Testing
#### Routine Tests (Section 4.3.2)
- Insulation resistance (Table 7), high-potential (Table 8), vibration, bearing insulation.

#### DC Test Voltages (Table 7)
| Rated Voltage | Test Voltage |
|--------------|-------------|
| < 2,300 V | 1,000 V |
| 2,300–3,999 V | 2,500 V |
| ≥ 4,000 V | 5,000 V |

#### DC Hi-Pot Formula
\[ V_{hipot} = (2E + 1) \times 0.75 \times 1.75 \text{ kV} \quad (E = \text{rated kV}) \]

#### Complete Tests (Section 4.3.5.1)
Efficiency at 50%/75%/100% load, locked rotor, saturation curves, heat run, V-curve, noise, unbalance response.

### Cross-References
| Standard | Purpose |
|----------|---------|
| API 614 | Lube oil systems |
| API 670 | Vibration protection systems |
| API 671 | Couplings |
| IEEE 43/115/841 | Insulation/testing |
| NEMA MG1 | Motors/generators |
| IEC 60034 | Rotating machines |
| NFPA 70 | National Electrical Code |

---

## 14. API Standard 547 — General Purpose Form-wound Induction Motors (185–2,240 kW) {#api547}

| Field | Detail |
|-------|--------|
| **Standard** | API Standard 547, Second Edition |
| **Full Title** | General Purpose Form-wound Squirrel Cage Induction Motors — 185 kW (250 hp) through 2,240 kW (3,000 hp) |
| **Effective Date** | November 1, 2017 |
| **Publisher** | American Petroleum Institute |
| **File ID** | EE3702398775304E!557561 |

### Scope & Applicability
Covers **general purpose** (vs. API 541 "special purpose") form-wound induction motors:
- **4-, 6-, 8-pole**: 185–2,240 kW (250–3,000 hp)
- **2-pole TEFC**: < 600 kW (800 hp)
- **2-pole WP-II**: < 930 kW (1,250 hp)
- **Vertical**: < 375 kW (500 hp)
- **For motors larger/special purpose**: Use API 541 instead.

**Service Conditions:**
- Ambient: –18°C to 40°C (0–104°F)
- Altitude: ≤ 1,000 m (3,300 ft)
- Hazardous location: Class I Zone 2 / Division 2
- Direct coupled (no gears/fluid couplings)
- Constant frequency sinusoidal power

### Key Design Requirements

#### Electrical Design
| Parameter | Requirement |
|-----------|-------------|
| Design | NEMA Design B / IEC Design N |
| Locked-rotor current | **450–650% FLC** |
| Accelerate at | **80% rated voltage** |
| Total lifetime starts | **≥ 5,000** full voltage |

#### Winding & Insulation
| Parameter | Requirement |
|-----------|-------------|
| System | Epoxy VPI, nonhygroscopic, Class F minimum |
| Temperature rise | **Class B** (Class F insulation) at 40°C ambient |
| Short circuit withstand | **110% rated voltage** |

#### Mechanical Design — Critical Tolerances
| Parameter | Specification |
|-----------|--------------|
| Enclosure minimum (TEFC) | IP44 |
| Frame wall minimum | 3.0 mm (1/8 in) steel |
| Jackscrew size minimum | M16 (5/8 in) |
| Mounting flatness | **40 µm/m (0.0005 in/ft)** |
| Mounting surfaces parallel | **170 µm/m (0.002 in/ft)** |

#### Bearing Requirements
| Type | Key Requirement |
|------|----------------|
| Hydrodynamic (default) | Split, identical ends; temp ≤ **93°C (200°F)**; zero clearance fit |
| Antifriction (horizontal) | dN ≤ **300,000**; L₁₀ ≥ **100,000 hours**; ABEC 1 / ISO Normal; C/3 or C/4 clearance |
| Antifriction (vertical) | dN ≤ **300,000**; L₁₀ ≥ **50,000 hours**; thrust ≥ **5,000 hours @ 200% max thrust** |
| Bearing insulation resistance | **≥ 10 MΩ @ 50 VDC** |
| End play minimum | **13 mm (0.50 in)** |
| Magnetic center tolerance | Within **20%** of total end play |

#### Shaft Stiffness
Stiff-shaft design: operates below first lateral critical speed.
Required separation margin: **≥ 15%** from lateral critical speeds.

#### Rotor Bar Material
- ≤ 750 kW (1,000 hp): Aluminum acceptable
- > 750 kW (1,000 hp): **Copper required**

### Accessories
| Item | Specification |
|------|--------------|
| Terminal box | IP55 min; Type II; copper bus bars (silver-plated) |
| RTDs | Pt-100, 3-wire; **2 per phase** (stator); 1 per bearing (hydrodynamic) |
| Space heaters | ≤ 160°C surface (unlabelled); T3 labelled; 120 V single-phase standard |
| Ground pads | 1/2-inch UNC thread |

### Vibration Limit
| Condition | Limit |
|-----------|-------|
| Bearing housing (no load, filtered or unfiltered) | **≤ 2.5 mm/s (0.10 ips) zero-to-peak** |

### Testing

#### Routine Tests (All Motors)
- No-load current, locked-rotor current (calculated)
- Hi-pot, insulation resistance and polarisation index (**PI ≥ 2.0** at 2,500 V or 5,000 V)
- Vibration: **≤ 2.5 mm/s (0.10 ips) 0-pk**
- Bearing insulation resistance: **≥ 10 MΩ**
- Temperature rise (1-hr no-load)
- Stator surge (per IEEE 522 / IEC 60034-15)

### Key Standard Power Ratings (Table C.1)
| IEC (kW) | NEMA (hp) |
|---------|----------|
| 185 | 250 |
| 220 | 300 |
| 375 | 500 |
| 750 | 1,000 |
| 1,500 | 2,000 |
| 2,240 | 3,000 |

### Critical Thresholds Summary
| Parameter | Threshold |
|-----------|-----------|
| Power range | 185–2,240 kW (250–3,000 hp) |
| Vibration | ≤ 2.5 mm/s (0.10 ips) |
| Sound | ≤ 85 dBA @ 1 m |
| Temperature rise | Class B (Class F insulation) |
| Bearing dN | ≤ 300,000 |
| Bearing L₁₀ | ≥ 100,000 hrs (horizontal) |
| Insulation PI | ≥ 2.0 |
| Starts | ≥ 5,000 full voltage |

### Normative References
API 541, API 670; IEEE 43, IEEE 112, IEEE 522, IEEE 620, IEEE 1776; IEC 60034 (all parts); NEMA MG 1; NFPA 70; ABMA 20; ISO 15, ISO 492, ISO 5753-1.

---

## 15. IEEE Std 112-2004 — Test Procedure for Polyphase Induction Motors and Generators {#ieee112}

| Field | Detail |
|-------|--------|
| **Standard** | IEEE Std 112™-2004 |
| **Full Title** | IEEE Standard Test Procedure for Polyphase Induction Motors and Generators |
| **Revision of** | IEEE Std 112-1996 |
| **Approved** | 9-Feb-2004 (IEEE-SA); 12-May-2004 (ANSI) |
| **Publisher** | IEEE (Electric Machinery Committee, Power Engineering Society) |
| **Also recognised as** | American National Standard (ANSI) |
| **File ID** | EE3702398775304E!440304 |

### Scope & Purpose
Instructions for conducting and reporting **performance and characteristic tests** of polyphase induction motors and generators. The standard defines accepted test methods for efficiency determination as referenced by API 541, API 546, API 547, and NEMA MG 1.

### Power Supply Requirements (Section 3.1)
| Parameter | Requirement |
|-----------|-------------|
| Total Harmonic Distortion | **THD ≤ 0.05** where \( \text{THD} = \sqrt{E^2 - E_1^2}/E_1 \) |
| Voltage unbalance | **≤ 0.5%** |
| Frequency tolerance (general) | **±0.5%** |
| Frequency tolerance (Methods A/B/B1) | **±0.1%**; variations ≤ 0.33% |

### Reference Temperature (Section 3.3)
Standard reference ambient: **25°C**. Correct performance if different.

**Specified temperatures for efficiency calculation when rated-load temperature not measured (Table 1):**
| Insulation Class | Specified Temperature (°C) |
|-----------------|--------------------------|
| A | 75 |
| B | **95** |
| F | **115** |
| H | 130 |

### Key Formulas

#### Resistance Correction for Temperature (Eq. 3)
\[ R_b = R_a \times \frac{t_b + k_1}{t_a + k_1} \]
where \( k_1 = 234.5 \) (copper), \( k_1 = 225 \) (aluminium).

#### Shaft Power Output (Eq. 10)
\[ P = \frac{n_t \times T}{9.549} \quad \text{(N·m → kW)} \]

#### Slip (Eq. 6–8)
\[ n_s = \frac{120f}{p}, \quad s = \frac{n_s - n_t}{n_s} \]

#### Temperature Correction for Slip (Eq. 9)
\[ s_s = s_t \times \frac{t_s + k_1}{t_t + k_1} \]

### Measurement Accuracy Requirements

#### Instruments (Section 4.1)
| Instrument Type | Accuracy — General | Accuracy — Method B |
|----------------|-------------------|---------------------|
| Electrical instruments | ±0.5% FS | **±0.2% FS** |
| Transformers | ±0.5% | ±0.3% (system ±0.2%) |
| Torque dynamometer | — | **±0.2% FS** |
| Speed | — | **±1.0 r/min** |
| Resistance measurement | ±0.2% FS | ±0.2% FS |

Instruments must be calibrated within **12 months**.

### Shutdown Time Delay for Resistance Measurement (Table 3)
| Rating | Delay |
|--------|-------|
| ≤ 50 kVA / 38 kW | 30 seconds |
| 50–200 kVA / 38–150 kW | 90 seconds |
| > 200 kVA / > 150 kW | **120 seconds** |

### Machine Losses (Section 5)
| Loss Type | Symbol | Method |
|-----------|--------|--------|
| Stator I²R | P_SIR = 1.5 I² R (3-phase) | Eq. 2 |
| Rotor I²R | s × (Air-gap power) | Eq. 6–8 |
| Friction & Windage | Measured at no-load | |
| Core loss | No-load test | |
| Stray-load loss | Indirect (total – conventional) or assumed | |

### Stray-Load Loss — Assumed Values (Table 2)
| Rated Power | Assumed % Rated Load |
|-------------|---------------------|
| 1–90 kW | **1.8%** |
| 91–375 kW | **1.5%** |
| 376–1,850 kW | **1.2%** |
| ≥ 1,851 kW | **0.9%** |

### Efficiency Test Methods
| Method | Best Used For | Notes |
|--------|--------------|-------|
| A | < 1 kW | Input-output |
| **B** | 1–300 kW horizontal | Preferred; uses stray-load by segregation |
| **B1** | Same as B | Simplified stray-load assumed |
| C | Duplicate machine | Back-to-back |
| E, E1 | > 300 kW | Direct stray-load measurement |
| F, F1 | > 300 kW | Equivalent circuit method |

**Method B** is the primary method cited by API 541, API 547, and NEMA MG 1 for motors in this size range.

### Test Load Points (Section 5.6)
Efficiency curve uses: **25%, 50%, 75%, 100%** load + two additional points > 100% (up to 150%).

### Miscellaneous Tests (Section 8)
| Test | Reference |
|------|-----------|
| Insulation resistance | IEEE 43 |
| High-potential | IEEE 4; **V = 1,000 V + 2 × rated voltage** |
| Shaft current / voltage | Section 8.3 |
| Bearing insulation | Section 8.4 |
| Noise | NEMA MG 1 / IEC 60034-9 |
| Balance / Vibration | NEMA MG 1 / IEC 60034-14 / API 541 |
| Overspeed | Section 8.7 |

### Cross-References
| Standard | Role |
|----------|------|
| IEEE 43 | Insulation resistance testing |
| IEEE 118 | Resistance measurement |
| IEEE 120 | Master test guide for electrical measurements |
| NEMA MG 1 | Routine test requirements (Parts 12 & 20) |
| API 541 | References IEEE 112 Method B for efficiency |
| API 547 | References IEEE 112 for vendor efficiency data |

### Field Application Notes
- Always use **Method B** for efficiency testing of motors in the API 541/547 scope — it is the only method that separates stray-load losses properly and is acceptable to API.
- The shutdown time delay before resistance measurement is critical: at 150 kW and above, wait **at least 120 seconds** after shutdown before measuring stator resistance to avoid errors from residual thermal gradients.
- THD ≤ 0.05 on the power supply is mandatory for valid efficiency tests — using a non-sinusoidal supply will invalidate results.
- Reference ambient is 25°C: always record and correct for actual ambient to maintain comparability between tests.

---

## 16. Flowserve Pumps — Notes on Collection {#flowserve}

| Field | Detail |
|-------|--------|
| **File** | Flowserve Pumps.zip |
| **File ID** | EE3702398775304E!512935 |
| **Size** | 10.7 MB |
| **Modified** | 2018 |
| **Format** | ZIP archive |
| **Status** | Binary file — direct text extraction not possible |

### Summary
The Flowserve Pumps archive (10.7 MB zip, 2018) is present in the OneDrive Engineering Blackbook collection. Its binary format prevents text extraction via standard fetch methods. The file likely contains a collection of Flowserve pump operation and maintenance manuals, data sheets, and/or performance curves relevant to the Cameron LNG project scope.

**To access content**: Download the zip file from OneDrive, extract locally, and open individual PDF/document files within.

### Context on Flowserve in Cameron LNG Context
Flowserve Corporation is a major supplier of centrifugal, vertical, and positive displacement pumps for LNG projects. Their pumps appear in Cameron LNG-type projects as:
- **Lube oil service pumps** (for GT/compressor lube oil consoles)
- **Cooling water circulation pumps**
- **Booster/charge pumps** in refrigerant circuits
- **Fire water pumps**
- **Seal support system pumps**

Standard Flowserve documentation for such applications typically includes:
- Data sheets (flow, head, NPSH, efficiency curves)
- Dimensional drawings and installation requirements
- Assembly/disassembly procedures
- Bearing lubrication specifications
- Seal flush arrangements (API Plan designations)
- Vibration and alignment acceptance criteria

---

## Document Index Summary

| # | Document | Type | Publisher | Date | File ID |
|---|---------|------|-----------|------|---------|
| 1 | SIC00202 | Field Procedure | Nuovo Pignone / GE | Apr-2016 | EE3702398775304E!531150 |
| 2 | SIC00277 | Field Procedure | Nuovo Pignone / GE | Dec-2016 | EE3702398775304E!531170 |
| 3 | SIC00066 | Checklist | Nuovo Pignone / GE | Mar-2014 | EE3702398775304E!531252 |
| 4 | SIC00006 Rev.8 | Procedure | BHGE / Nuovo Pignone | Jun-2018 | EE3702398775304E!545895 |
| 5 | SIC00115 | Procedure | Nuovo Pignone / GE | Sep-2014 | EE3702398775304E!531459 |
| 6 | GE Technical Proposal (GT) | Proposal | GE Oil & Gas | Sep-2014 | EE3702398775304E!475145 |
| 7 | GE Technical Services Proposal | Proposal | GE Oil & Gas | Feb-2014 | EE3702398775304E!526372 |
| 8 | GE Install/Comm Proposal w/Comments | Proposal + Markup | GE / CCJV | 2014 | EE3702398775304E!526374 |
| 9 | TPC — Cameron LNG PR Trains | Manual | Nuovo Pignone | Jan-2017 | EE3702398775304E!530873 |
| 10 | TPI — EC401 Turboexpander | Manual | Nuovo Pignone | Jan-2017 | EE3702398775304E!530420 |
| 11 | Constructability Checklist | Checklist (XLS) | CCJV / Cameron LNG | Mar-2015 | EE3702398775304E!471684 |
| 12 | API 541 (5th Ed.) | Standard | API | Dec-2014 | EE3702398775304E!557543 |
| 13 | API 546 (3rd Ed.) | Standard | API | Sep-2008 | EE3702398775304E!557546 |
| 14 | API 547 (2nd Ed.) | Standard | API | May-2017 | EE3702398775304E!557561 |
| 15 | IEEE Std 112-2004 | Standard | IEEE / ANSI | Nov-2004 | EE3702398775304E!440304 |
| 16 | Flowserve Pumps.zip | Archive | Flowserve | 2018 | EE3702398775304E!512935 |

---

*End of Batch 3 — Vendor Docs & SIC Bulletins*
*Generated by OperaMech.ai Knowledge Base Agent | 2026-04-19*

`;
