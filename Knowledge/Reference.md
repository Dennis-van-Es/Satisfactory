# Satisfactory — Reference

Facts, rates and gating. Stable data: this only changes when the game patches.
For how the factory is designed and where the save currently stands, see
Project Knowledge.

**Costs are deliberately not in here.** Milestone costs, MAM node costs and AWESOME
Shop coupon prices are long numeric tables where a plausible-looking wrong number is
worse than no number. Get those from the sites below.

**The recipe table was checked row by row against satisfactory.wiki.gg on 2026-09-10**
and four rows were wrong at the time: Cable, Solid Steel Ingot, Encased Industrial
Beam and Automated Wiring. Anything outside that table — power draw, footprints, the
gating map — is still "verified in play or marked **[verify]**", and that claim has
already proved too generous once, so check the wiki before a number carries weight.

Version basis: Satisfactory 1.x. Re-check this doc after any major patch.

---

## Where to look things up

| Site | Use it for |
|---|---|
| **satisfactory.wiki.gg** | The official wiki, and the maintained one. Recipes, build costs, machine footprints, tier contents. First stop for anything marked [verify]. |
| **satisfactory.th.gl** | Hidden Gaming Lair. Milestones, MAM research, alternate recipes and AWESOME Shop with costs and unlocks, cross-linked — a building shows its cost and the milestone that unlocks it. This is the cost-table gap. Also an interactive map with node purity filters and crash-site requirements. |
| **satisfactory-calculator.com/en/interactive-map** | SCIM. 459 nodes, 118 wells, 31 geysers, 1,242 slugs, 118 hard drives. Best map for node hunting. Needs an ad-blocker exception. Save-editor features are PC-only and irrelevant here. |
| **satisfactorytools.com** | Production planner with alt recipe selection, overclocking and Somersloops. Good for sanity-checking machine counts independently. |

Note: **satisfactory.fandom.com is the old wiki and is stale** — its tools page still
presents Update 6 and 8 links as current. Prefer wiki.gg.

SCIM lists 118 hard drives, which matches the 118 crash sites in the field log —
same underlying dataset.

---

## Rates

### Miners, per node purity
| | impure | normal | pure |
|---|---|---|---|
| Miner Mk.1 | 30 | 60 | **120** |
| Miner Mk.2 | 60 | 120 | **240** |
| Miner Mk.3 | 120 | 240 | **480** |

**Portable miner: 80/min each**, regardless of how many share a node. Three on one
node is 240/min and fills three 100-ore stacks in about 75 seconds.

Oil extractor on a pure node: 240/min. Water extractor: 120 m³/min.

### Belts
Mk.1 60, Mk.2 120, Mk.3 270, Mk.4 480, Mk.5 780 items/min.

Consequence worth remembering: a smelting shed of one miner and four smelters is
exactly 120 ingot, exactly one Mk.2 lane. Two such lanes cannot merge until Mk.3.

### Power
- Constructor 4 MW, Assembler 15 MW, Smelter 4 MW, Foundry 16 MW, Manufacturer 55 MW,
  Refinery 30 MW, Miner Mk.1 5 MW, Water Extractor 20 MW, Oil Extractor 40 MW,
  Truck Station 20 MW. **[verify]** for the larger ones.
- Biomass Burner 30 MW, Coal Generator 75 MW, Fuel Generator 250 MW.
- AWESOME Sink 30 MW, **drawn only while actually sinking**, not continuously.
- Overclock power scales at roughly clock^1.3, so 133% costs about 10% more power per
  unit of output. Generators share load: fuel burn is proportional to draw, so 14
  connected burners consume the same as 12 for a given load, with more headroom.

### Footprints
Constructor 7.9 × 9.9 m, Assembler 9 × 16 m, Smelter 5 × 10 m, Foundry 10 × 9 m,
Biomass Burner 8 × 8 m, Storage Container 5 × 11 m, Dimensional Depot ~5 × 10 m
(sits on top of a container), AWESOME Sink 16 × 13 m, HUB 14 × 26 m,
Space Elevator 48 × 54 m. Mostly from a third-party check, so **[verify]** the ones
you're about to build a shell around.

Blueprint Designer volumes: **Mk.1 4 × 4, Mk.2 5 × 5, Mk.3 6 × 6** foundations.
A 4 × 6 shed only becomes stampable at Mk.3.

Conveyor lifts need 4 m of vertical separation. Foundations are 8 × 8 m with 1 m,
2 m and 4 m heights.

---

## Recipes established in play

Per minute, at 100% clock, one machine.

| Recipe | In | Out |
|---|---|---|
| Iron Ingot | 30 ore | 30 |
| Copper Ingot | 30 ore | 30 |
| Caterium Ingot | 3 ore per ingot | — |
| Iron Plate | 30 ingot | 20 |
| Iron Rod | 15 ingot | 15 |
| Screw | 10 rod | 40 |
| **Cast Screw** (alt) | 12.5 ingot | 50 |
| Wire | 15 copper ingot | 30 |
| **Iron Wire** (alt) | 12.5 iron ingot | 22.5 |
| Cable | 60 wire | 30 |
| Copper Sheet | 20 ingot | 10 |
| Concrete | 45 limestone | 15 |
| Reinforced Iron Plate | 30 plate + 60 screw | 5 |
| **Stitched Iron Plate** (alt) | 18.75 plate + 37.5 wire | 5.625 |
| Rotor | 20 rod + 100 screw | 4 |
| Modular Frame | 3 RIP + 12 rod | 2 |
| **Steeled Frame** (alt) | 2 RIP + 10 steel pipe | 3 |
| Smart Plating | 2 RIP + 2 rotor | 2 |
| Steel Ingot | 45 ore + 45 coal | 45 |
| **Solid Steel Ingot** (alt) | 40 iron ingot + 40 coal | 60 |
| Steel Beam | 60 steel | 15 |
| Steel Pipe | 30 steel | 20 |
| Encased Industrial Beam | 18 beam + 36 concrete | 6 |
| **Encased Industrial Pipe** (alt) | 24 pipe + 20 concrete | 4 |
| Stator | 15 pipe + 40 wire | 5 |
| Motor | 10 rotor + 10 stator | 5 |
| Automated Wiring | 2.5 stator + 50 cable | 2.5 |
| Versatile Framework | 2.5 frame + 30 beam | 5 |
| Biomass (Wood) | 60 wood | 300 |
| Biomass (Leaves) | 120 leaves | 60 |
| Solid Biofuel | 120 biomass | 60 |
| Coal Generator | 15 coal + 45 water | 75 MW |
| Fuel Generator | 20 fuel | 250 MW |
| Black Powder | 15 coal + 15 sulfur | 30 |
| Nobelisk | 20 black powder + 20 steel pipe | 10 |
| **Steel Rotor** (alt) | 10 steel pipe + 30 wire | 5 |

**Useful invariant:** concrete out is always limestone in ÷ 3. Machine count only
changes floor space and the shard bill, never the output.

---

## Gating map — what unlocks what

Confidence varies; the later tiers are inference from chain requirements rather than
observation. **[verify]** any of it that a build decision rests on.

| Tier | Unlocks that matter |
|---|---|
| 0 (HUB) | Craft bench, Miner Mk.1, Smelter, Conveyor Mk.1, Storage Container, Biomass Burner, Constructor |
| 1 | Base Building (foundations, walls). Logistics (splitter, merger). Field Research → **the MAM** [verify] |
| 2 | Part Assembly → **Assembler**, reinforced iron plate, rotor, modular frame, smart plating. Obstacle Clearing → chainsaw, solid biofuel. Resource Sink Bonus → **AWESOME Sink and Shop**. Conveyor Mk.2 [verify]. Jump pads |
| 3 | Coal Power → **Coal Generator, Water Extractor**, pipes. Vehicular Transport → tractor, truck station. Copper Sheet [verify] |
| 4 | Advanced Steel Production → **Foundry**, steel ingot, beam, pipe, encased industrial beam. Hyper Tubes. **FICSIT Blueprints** → Designer Mk.1. Conveyor Mk.3 and Miner Mk.2 [verify] |
| 5 | Oil Processing → **Refinery**, plastic, rubber, fuel. Industrial Manufacturing → **Manufacturer**, computer, heavy modular frame. Alternative Fluid Transport → packager. Conveyor Mk.4 [verify] |
| 6 | Expanded Power Infrastructure → **Fuel Generator**. Monorail Train Technology → **trains**. Pipeline Mk.2. Gas mask / filters [verify] |
| 7 | Bauxite Refinement → the **aluminium** chain. Hoverpack. Aeronautical Engineering [verify] |
| 8 | Nuclear Power. Advanced Aluminum Production. Particle Enrichment → **Particle Accelerator**. **Blender** [verify]. Leading-Edge Production → turbo motor |
| 9 | Matter Conversion → **Converter**, ficsite. Quantum Encoding → **Quantum Encoder**. Peak Efficiency → Alien Power Augmenter |

### MAM trees
| Tree | Needs | Gives (selection) |
|---|---|---|
| Hard Drives | crash-site drives | **all alternate recipes** |
| Alien Organisms | mycelia, flower petals, remains | fabric, parachute, inhalers, expanded toolbelt |
| Power Slugs | slugs | power shards → **overclocking** |
| Caterium | caterium ore, then quickwire | **Smart Splitter**, Programmable Splitter, Mk.2 and Mk.3 power poles, zipline, daisy chaining |
| Quartz | raw quartz | silica, quartz crystal, blade runners, crystal oscillator |
| Sulfur | sulfur | black powder, **nobelisks**, rebar variants, compacted coal, turbofuel |
| Alien Technology | **Mercer Spheres** → Dimensional Depot; **Somersloops** → production amplifier, power augmenter |

**Two gating facts that keep biting:**
1. The hard drive pool only offers recipes whose items your unlocked tiers can
   already make. Scan right after a tier flip, when the pool is small and contains
   what you want. Steel alts do not appear before Tier 4.
2. Smart Splitter is behind the Caterium tree, not a tier. Any overflow-to-sink
   design depends on caterium being reachable.

---

## Space Elevator

Phase 1: **50 Smart Plating** (verified).
Phases 2 to 5: **[verify on the elevator screen]** — I have not confirmed these and
would not size a production line on my recall of them.

The current save runs at **×1**, the default — published figures are the figures, and
Phase 1 is 50 Smart Plating, about 25 minutes at 2/min. The ×10 multiplier described
here previously belonged to an earlier save; see Project Knowledge on which save is
which. A multiplier is per-save, so confirm it on the elevator screen before sizing
anything against it.

Consequence at ×1: the elevator is a trickle, not the pacing constraint. Nothing in
Phase 1 or 2 needs a widened smart plating or versatile framework line, and the
sheds sized for the ×10 numbers are oversized for this save.

---

## Other mechanics worth not relearning

- **Dimensional Depot feeds your inventory, not machines.** It solves construction at
  a distance, not production feed. Upload slots unlock gradually.
- **Depot central storage is global**, so an item needs exactly one Depot anywhere in
  the world, at the place it's made.
- **Never feed mixed items into one Depot** — head-of-line blocks the moment one
  item's central storage fills, and the whole belt stalls.
- **Crash sites cost parts, but the surrounding wreckage dismantles into parts** —
  including things you can't yet manufacture, such as copper sheets, rotors, stators
  and circuit boards.
- **Dismantling refunds in full**, so relocating a building costs time, not materials.
- **Machine status indicators are built in** — green for running, other states for
  idle, unpowered and no recipe. No need to add lights for that.
- **Target output can be set directly on the machine**, and it derives the exact
  clock. Awkward ratios cost nothing.
- **Coal generator water manifolds should not be run at exact balance** — three
  extractors against eight generators starves the middle ones while the far
  extractors sit full. Fluid buffers or a small extractor overclock.
- **A caterium node blocked by rock needs a Nobelisk**, which needs black powder,
  which needs sulfur. There is no earlier route.
