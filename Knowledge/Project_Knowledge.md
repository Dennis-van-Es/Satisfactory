# Satisfactory — Project Knowledge

Reference doc for the Satisfactory project. Replaces the previous version, which
described two older saves and a design approach that has since been superseded.

Platform: **Xbox, controller only, no mods.** Version 1.x.
Items marked **[verify]** are things I have inferred and Dennis should confirm in game.

---

## The design rules

These replace the old "vertical towers, extend don't duplicate" approach, which
produced 200 m square towers that were unpleasant to look at and no fun to build.

1. **One item per building, one machine type per building.** No mixed floors. A
   constructor floor and an assembler floor don't want the same lane widths, lift
   positions or door spacing, and refineries want none of it.
2. **Commodities are made at their source and arrive on a bus:** iron, copper and
   steel ingot, plastic, rubber, concrete, silica. Fluids never leave their site.
3. **No "pull from next door" exception.** Reinforced plate comes from the
   reinforced plate building whether that's one plot away or four.
4. **Belt bandwidth sets the column order.** A building sits directly above the one
   it feeds heaviest, so the heavy lanes drop straight across the roadway and never
   enter the bus. Anything over one lane goes point to point; only the remainder
   joins the bus.
5. **Every site gets its own terminal, container row and sink**, sized to what that
   site makes. The Depot is global central storage, so an item needs exactly one
   depot anywhere in the world, at the place it's made.
6. **Buildings store nothing.** No input buffers, no output containers. Belts run to
   the terminal; the row is the only storage.
7. **Set target output, not clock percent — and the output split sets the target.**
   The machine derives the exact clock, so awkward numbers cost nothing. Where a
   destination lane's demand falls between machine boundaries, clock the machines to
   serve the lane rather than adding a machine and a splitter to make up the
   difference. Overclocking is allowed for this, bounded by **one power shard per
   machine**: a reinforced plate assembler at 5.625 pushed to 6 costs one shard and
   is fine, pushed to 9 it needs two and has to be argued — past one shard you are
   using overclocking to avoid building machines rather than to close a split. Also
   overclock to save a machine where a *node* is the cap rather than the grid. Prefer
   integers, and prefer two clean ones to three repeating decimals.
8. **Deck the town sites, pad the node sites.** 1 m foundations on 4 m pillars, about
   3 m of service void underneath for belts and pipes. Reserve two foundations more
   than the plan in each direction. Lifting a plant on stilts beats terracing.
9. **Machines in a single row along the long axis**, not opposed banks — a 4-wide
   shed can't fit three machines across with belt lanes either side.
10. Roads are the 2-foundation gaps between plots. Don't hand-place them; blueprint
    road tiles after Tier 4.

### Look

**The concrete deck and pillars stay natural grey — unpainted.** Concrete does not take
paint the way steel does, and the deck is the largest surface on the site, so the safe
move is not to fight it. Everything built on top follows a three-colour rule: two shell
colours and one accent, so no building ever wears more than three.

| Shell | Hex | On |
|---|---|---|
| Light | `#B4BAC0` | walls, roofs |
| Dark | `#14171B` | frames, pillars, trim, roads |

That one pair costs **two** swatches — `Shell A` light/dark and `Shell B` dark/light —
because some buildables take the primary on the main panel and others on the trim.

The accent goes on machine bodies and door frames and says what a building *does*.
Phase is deliberately not painted: each site already is a phase, so colouring it
encodes nothing you could be confused about, while leaving every building on a site
identical.

| Accent | Hex | |
|---|---|---|
| Extraction & smelting | `#D14F4F` | miners, extractors, smelters, foundries |
| Fabrication | `#4A9BD1` | constructors |
| Assembly | `#8E6FC7` | assemblers, manufacturers, exotic machines |
| Power | `#E8C44A` | burners and generators |
| Logistics | `#3FA88A` | terminal, container row, Depots, sink, freight |
| Landmark | `#E8EDF2` | HUB, MAM, Space Elevator |

Pipes are painted by contents from Phase 2 onward — water `#2E7FB8`, crude oil
`#3A2E22`, Heavy Oil Residue `#7B4FA8` (the colour it already is in game), fuel
`#D9A441`, alumina solution `#C8D6DE`, nitrogen `#6FD0C0`. Site A has no fluids at all.

That is **14 of the 20 swatch slots** — 2 shell, 6 accent, 6 pipe — leaving six spare.
If the accent pieces turn out to need mirrored pairs as well, the total is exactly 20
with nothing left over: cut Landmark first, then fold Power into Extraction. **No FICSIT
orange anywhere.** This supersedes the earlier scheme of orange doors and per-ore
identity panels, which needed a colour per chain and would have read as a patchwork.

The Colours tab in the plot plan carries the same swatches, and every plot card shows
the accent it should wear.

Decisions taken from the concept renders:
- **Polished concrete inside the sheds, metal plate as the threshold and apron
  outside.** Marks the doorway with no extra parts, and reads the same at every door.
- **The burner house is open-topped**, walls with the stacks venting above the wall
  line, rather than the sealed shed originally specced. More legible and it looks
  deliberate.
- **Railings along every deck edge.** Nearly free, they stop a 4 m fall, and they
  draw the town's outline from a distance.
- **Keep the aisle in front of the container row generous.** It is the one place you
  stand still and interact with things, and every metre makes it read as a street
  rather than a corridor.
- **The underdeck void earns its keep visually**, not just functionally — pillars
  with belts running through the shadow is what makes the raised deck look intended.
- **One large sign on the terminal's blank wall** rather than a narrow identity
  panel. Twelve foundations of grey needs breaking up.

---

## Current save — all pure nodes, ×1, new game

**HUB: X −560, Y 2369, Grass Fields.** [verify the third X digit]
Coordinates in game are read in **metres**.

> There is more than one save on the go and sticking to one is the hard part. Every
> figure below describes *this* save — all pure nodes, elevator parts at ×1. Settings
> and unlocks do not carry across, so before acting on a number here, confirm which
> save is loaded. The field log keeps a profile per save for exactly this reason.

### Geography scouted
- **3 iron nodes** north of the HUB, **copper** east on a plateau, **2 limestone**
  east and west. This is a complete Phase 1 with a node to spare.
- **West lake:** rejected. Gas pillars, no usable nodes.
- **North-east lake, Grass Fields / Northern Forest border:** 4 coal nodes plus
  water. This is Site B, coal power.
- **South of the map:** coal, plentiful iron, copper, and a **caterium node blocked
  by rock** needing a Nobelisk to clear. This is Site C, the steel town.
- **Sulfur: not found.** The one input the plan has never placed. It gates the
  nobelisk line and, through it, the blocked caterium.

### Progress
- Tier 1 complete; working through Tier 2. Jump pads deliberately skipped.
- **Alt recipes unlocked: Cast Screw, Stitched Iron Plate.** Both are Phase 1
  prerequisites and every floor count assumes them.
- **Smart Splitter unlocked** via Caterium MAM, earlier than planned — the depot
  overflow topology can be built day one rather than retrofitted.
- Caterium tapped with portable miners; further caterium research blocked on copper
  sheets, which currently come only from crash-site wreckage.
- Drives banked. Crash sites in reach: several within a kilometre.

---

## Phase 1 — Site A, Grass Fields

Deck **33 × 32 foundations**, 19 plots, 115 machines. Draw ~345 MW against 420.

Bands north to south, in metres from the site's north-west corner:

| band | depth | contents |
|---|---|---|
| 0–48 | 48 m | HUB, biomass, Space Elevator (208–264 east) |
| 64–88 | **24 m** | depot terminal (0–96) + sink and shop (96–128) |
| 88–104 | 16 m | container row (0–96) |
| 104–128 | **24 m** | west road branch, truck stops |
| 128–192 | **64 m** | iron plate, rod, screws, wire, smart plating |
| 208–256 | 48 m | reinforced plate, frame, rotor, cable, copper sheet |

A **three-foundation road runs north–south at 176–200 m east**, clear through all
256 m, with the west branch meeting it at the terminal. Columns pair supplier over
consumer: plate→reinforced plate, rod→frame, **screws→rotor on two lanes of 100**,
wire→cable. Smart plating sits at 208–240 to line up under the elevator rather than
on the regular pitch, and copper sheet was moved to match it — which is what opens
the road corridor.

The production row is **64 m deep rather than 48** because A4 runs seven wire
constructors, 55.3 m of machine. No 4 × 6 plot anywhere in the plan holds more than
five.

Counts: plate 4 constructors at 17.5 each (70/min), rod 5 (75), screws 4 Cast Screw
(200), wire 7 at 28.57 each (200), cable 1 (30), copper sheet 1 (10), reinforced
plate **3 assemblers** Stitched on three dedicated lanes — 6 to frames at 106.7%,
4 to plating, 5.625 banked (15.625) — rotor 2 (8), frame 2 (4), smart plating 2 (4),
biomass 14 burners all connected + 3 constructors.

Node bill: **one iron shed on two nodes** (230 of 240), **1 copper** (120 of 120,
fully spent), 1 limestone. The shed is eight smelters sending three
destination-rated lanes — 105 plate, 75 rod, 50 screws — so no belt ever carries
undifferentiated ingot and nothing needs merging. Concrete outpost is 2 constructors
set to 20 each and holds its own Dimensional Depot, keeping 40/min of overflow out
of the town sushi belt.

Banked per minute: plate 17.9, wire 35.8, cable 30, RIP 5.6, rotor 4, frame 4,
sheet 10, concrete 40.

Depot row: 8 items — plate, rod, wire, cable, copper sheet, reinforced plate, rotor,
frame. Screws and smart plating never go in. Steady overflow ~93/min, which is why
one Mk.2 sushi belt and one sink suffice.

---

## Phase 2 — Sites B and C

**Site B, the lake:** coal power only. 4 pure coal nodes = 480 coal = four 600 MW
modules; build two, pad four. Fluid buffers in from the start — 3 extractors against
8 generators at exact balance starves the middle ones. Check the shoreline supports
12 extractors before planning four modules.

**Site C, south:** 36 × 52 foundations, 19 buildings plus 5 outposts, 173 machines,
~729 MW. Self-sufficient in ore.

Vertical pairs: steel ingot→pipe (180/min), screws→rotor (250/min),
wire→cable (100/min), nobelisk→black powder.

Key counts: steel ingot 4 Foundries set to 75 each on Solid Steel Ingot (300/min);
pipe 6 constructors (120); beam 2 (30); wire 7 (210 — stators 100, cable 100,
reinforced plate 11); screws 5 (250, purely for 10 rotors/min); framework 1
assembler (5/min); wiring 1 (7.5); motor 1 (5); encased beam 2 on Encased Industrial
Pipe (8/min).

Node bill: 3 iron, 1 copper, 2 coal, 1 sulfur. **Concrete is the only freighted
input** — 40/min from Site A. Worth looking for limestone at Site C.

Required drives: **Solid Steel Ingot, Steeled Frame, Encased Industrial Pipe.**
None appear in the pool before the Tier 4 flip, so bank drives through Phase 1.
Steel Rotor is strongly recommended but its rates are **[verify]**.

---

## Phases 3–5 — structural only

Not re-cut against the current rules. They still show plants making their own
intermediates, refineries sharing shells with constructors, and no terminal or
container row at any site. Phase 4 and 5 machine counts are marked provisional in
the tracker: sizing aluminium before the drives are scanned is work that gets thrown
away, and Phase 5 can't be costed without knowing the Somersloop count.

Shape as it stands: Phase 3 is an oil site (polymers, fuel power, boards, computers,
modular engines) plus heavy frames and control units. Phase 4 is bauxite, aluminium
products, supercomputers, assembly directors, and more power. Phase 5 is the
accelerator, converter and quantum halls plus final assembly.

---

## Facts, rates and gating

Moved to **Reference.md** — recipes, miner and belt rates, machine footprints, the
tier and MAM gating map, Space Elevator requirements, and the lookup sites. That doc
only changes when the game patches; this one changes as the save progresses.

Two things from it that shape the current plan: the elevator requirement is at
**×1**, the default, so the elevator is a trickle and neither smart plating nor
versatile framework needs a widened shed — that instruction came from a ×10 save and
does not apply here. And the hard drive pool
only offers recipes your unlocked tiers can already make, so scan right after a tier
flip rather than banking indefinitely. The exception is worth knowing: **the +6
inventory slots unlock has no prerequisites at all**, so it is in the pool from the
first drive and is always worth taking the moment it appears. The MAM trees carry
their own +6 inventory and +1 toolbelt unlocks, but those want a lot of one item and
land much later.

---

## Assets

- **`campus-plot-plan.html`** — the plan. Five phases, 67 plots, tabs for Plots,
  Build order, Research and Alt recipes. Per-site anchors in metres, collision
  checking, belt lane notes, siting tolerance per building, required-drive gates,
  node bill per phase. Phases 1 and 2 are current; 3–5 are structural.
- **`ficsit-field-log.html`** — 118 crash sites and 107 alt recipes, per-save
  profiles. Coordinates display in metres. Layered storage (account → browser →
  manual code) with a backup button. New profiles start empty; alt recipes are
  per-save and seeding one save's unlocks into another is how you plan a factory you
  can't build.
- **`ficsit-field-log-offline.html`** — identical, fonts embedded, zero external
  requests. This is the one on the phone home screen, reached via a file shortcut
  made with Shortcut Maker (Chrome won't shortcut `file://`, and claude.ai's web
  manifest hijacks "Add to Home screen" on published links).
- Artifacts on a Team/Enterprise account can only be shared inside the
  organisation and can't be published publicly. Unpublishing is permanent.

## Working with other tools

Building design and visualisation go to Dennis's personal ChatGPT account, which has
its own Satisfactory project and knows the game — so prompts should use FICSIT part
names and let it fill in what a Constructor bank looks like, rather than describing
generic industrial buildings. It is good at interior layouts, wall-hole positions and
parts lists, and it checks its own arithmetic.

There is always a review step. It has been right about real geometry problems (the
Space Elevator footprint, the 4 × 6 shed not fitting a Mk.1 blueprint, container
pitch breaking foundation snap) and wrong about at least one thing that mattered
(advising against connecting all fourteen burners, which is what gives the grid its
headroom). Reusable prompts are in **Prompts.md**.

Image models do not respect counts — expect roughly the right arrangement and the
wrong number of sheds. Isometric technical illustration holds a grid layout far
better than photorealism, which dissolves into generic refinery sprawl.

## Working style

Dennis is an expert player: skip basics, use precise terminology. Concise on mobile,
depth on request. He reviews everything and has caught real errors repeatedly —
defer to his live in-game readings over my recipe assumptions. Flag uncertainty
rather than bluffing, and say when a correction has knock-on effects elsewhere in
the plan rather than just fixing the item named.
