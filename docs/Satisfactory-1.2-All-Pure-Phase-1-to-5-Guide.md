# Satisfactory 1.2 — All-Pure, Phase 1–5 World Plan

This is a fresh-world plan for vanilla Satisfactory 1.2 on Xbox. It assumes:

- Resource Node Randomization: **Default**.
- Resource Node Purity: **All Pure**.
- Every other game-mode multiplier: **1× / default**.
- A comfortable completion factory, not a speedrun and not a megafactory.
- Every factory is architecturally complete before the next Space Elevator phase is sent.

The official game-mode description confirms that Default randomization preserves the normal node locations and All Pure changes all resource nodes and resource-well satellites to Pure. The coordinate browser used below reports coordinates in metres and warns that its node dataset is “presumed 1.2.3.1”, although its resource counts match 1.2.4.0. Treat the coordinates as accurate navigation targets but scout the final foundation edge before committing a large shell.

Useful live references:

- [Interactive resource map](https://ficsitflow.com/map)
- [Exact node-coordinate browser](https://pioneeralmanac.com/tools/nodes/)
- [Official game-mode settings](https://satisfactory.wiki.gg/wiki/Game_Modes)
- [Official Space Elevator requirements](https://satisfactory.wiki.gg/wiki/Space_Elevator)
- [Official recipe catalogue](https://satisfactory.wiki.gg/wiki/Recipes)

## 1. The house rules, translated into a build standard

### A building means one item and one machine type

A site is a campus. A campus may contain many buildings, but each production building has one item on its sign and one machine type inside it. Examples:

- `A-IRON-PLATE-C01` contains Constructors making only Iron Plates.
- `A-ROTOR-A01` contains Assemblers making only Rotors.
- `D-RUBBER-R01` contains Refineries making only Rubber.
- `G-COOLING-B01` contains Blenders making only Cooling Systems.

Do not put Constructors and Assemblers on different floors of the same shell. They get separate buildings even when they are adjacent.

Vertical expansion is allowed when **every floor in that shell makes the same item with the same machine type**. Repeat the same lane widths, lift datum and door rhythm on each production floor, and keep the destination-bank output risers separate. “No mixed floors” forbids stacking different production types together; it does not force every campus to remain single-storey.

### The campus datum

Build each site as a raised, world-grid-aligned campus rather than placing finished halls directly on the terrain.

- Establish a **4 m service plinth** for each terrace. The accessible space below or beside the halls carries belts, pipes and power; do not seal services inside an inaccessible slab.
- Leave **8 m, one clear foundation**, between neighboring shells for walking, lifts, wall outlets and facade access.
- Reserve a **24 m, three-foundation terminal boulevard** along the freight edge. Production halls face this boulevard; the terminal, container row and Sink sit on its outer side.
- Reserve a **10×8 foundation truck court** beside each permanent terminal. Keep it empty until Tier 3 and build Truck Stations only for routes you actually use. The reservation fits two stations plus a three-foundation turning/through lane.
- On steep sites, make separate level terraces and join them with straight ramps or bridges instead of forcing one enormous floating slab.
- Miners, extractors and well pressurizers remain terrain-responsive. When the extracted resource becomes a bus commodity at source, put that first processing step on a small, finished, one-foundation-high source pad beside the extractor: Smelters beside ore Miners, source Foundries beside the relevant paired nodes, and wet processing beside fluid extraction. The finished commodity—not the raw input—then leaves through a labeled, storage-free dispatch throat. These source satellites are separate from the raised component campus and never receive a terminal, container or Depot for Ingots.

Roads are optional access infrastructure. A reserved truck court preserves that option without making vehicles the default freight system.

### The target-output rule

Every table gives a **building output target**, an installed machine count, and a per-machine target. Enter the item/min target in each machine and let the game derive the clock speed. Do not round clock percentages.

Symmetry is the default. Every machine whose output joins the **same belt or pipe** receives the same output target: four machines at 80% are preferable to three at 100% plus one at 20%. Divide the destination-bank target evenly across the machines in that bank, even when the result is awkward; the game derives the exact clock. Machines may differ only when they belong to different destination banks. The displayed `Each/min` value in later tables is therefore the normal setting for a one-bank row; the building total remains authoritative. Where `Each/min` is rounded for readability, enter `bank target ÷ machines in that bank` rather than the printed rounded decimal.

Only overclock extraction when the resource node is the constraint. Examples in this plan are the two final SAM miners and selected high-throughput commodity miners. Production machines are installed as whole machines and normally underclocked to the exact output.

### The terminal standard

Every stored solid component must have a route to its home terminal, but it does **not** have to pass through that terminal before being used by another building.

For permanent halls, divide the machines making one item into **destination banks**. If Iron Rods supply Rotors, Modular Frames and the terminal, the Rod hall has three banks and three outbound belts:

`Rod bank R — target x/min → dedicated Rotor belt`

`Rod bank F — target y/min → dedicated Frame belt`

`Rod bank T — target z/min → Rod terminal → Depot / remote dispatch / sink`

Within each bank, divide its target evenly across every installed machine. Do not create a high-clock/low-clock pair merely to obtain the right bank total. Different banks may have different per-machine targets because their belts serve different destinations.

The hall target is `x + y + z`. All three banks still contain the same machine type making the same item, so this does not violate the one-item/one-machine-type rule. Give each bank its own merger manifold, wall penetration and sign; do not merge the three outputs merely to split them again outside.

Choose the lowest unlocked belt tier whose capacity is at least that destination's target rate. Exact belt capacity is valid, although one tier of headroom makes later expansion easier. If one destination exceeds the fastest belt, give that destination multiple lanes. Size the hall's inbound ingredient belts for the sum of all banks, and reserve the final number of wall openings when constructing the shell.

A Smart Splitter with the consumer route set to the item and the terminal route set to `Overflow` remains acceptable for a small starter line or an uncertain demand. It is a priority/backpressure arrangement, not an exact `x/y/z` rate controller. Permanent halls with known targets use dedicated machine banks instead.

For each item, build one terminal cell:

1. The source hall's terminal branch enters a Smart Splitter on a labeled belt.
2. The normal output enters the item’s Industrial Storage Container row; the Overflow output goes to the site’s AWESOME Sink. This row is the only storage.
3. One container output supplies the site dispatch bus.
4. The other output supplies the item’s single Dimensional Depot uploader.
5. When dispatch and depot are both blocked and the row fills, production automatically overflows to the sink.

The exact belt arrangement may be mirrored, but the depot uploader must never be duplicated elsewhere. Put a sign above every cell with item, design target, current target, destination, and belt mark. Direct belts may cross from one hall to the next, but never bypass a hall boundary through an internal machine manifold: leave a labeled, accessible connection between buildings.

During commissioning, leave the local consumers switched off until the terminal bank has placed a useful starter stock in its row and Depot uploader. Then start the consumers. Set `z` to the deliberate reserve/replenishment rate for that item; do not rely on accidental overproduction.

**Ingots are the exception. No ingot is stored and no ingot receives a Dimensional Depot uploader.** Iron, Copper and Steel Ingots go from destination-sized production banks directly to local consumers or their commodity bus. Caterium, Aluminum and Ficsite Ingots go directly to their local consumers. Each ingot lane passes through a labeled dispatch throat with a Smart Splitter overflow route to the site Sink, but has no container row. Set ingot production to the exact sum of its consumer lanes; do not create an ingot `z` reserve.

Storage-row sizing:

| Item class | Physical row |
|---|---:|
| Plastic, rubber, concrete, silica | 2 Industrial Containers |
| High-volume construction part | 2 Industrial Containers |
| Normal component | 1 Industrial Container |
| Project or quantum part | 1 Industrial Container |

Ingot dispatch lanes are sized only by throughput: final Copper uses three Mk.6 lanes, Iron uses two Mk.6 lanes, and Steel uses one Mk.5/Mk.6 lane in Phase 5. None contains storage.

### Commodity ownership

These seven commodities are made at their resource site and arrive on a bus:

| Commodity | Owning site | Final design target |
|---|---|---:|
| Iron Ingot | A — Rocky Foundry Campus | 1,440/min |
| Copper Ingot | H — Dune Copper Works | 3,600/min |
| Steel Ingot | B — Northwest Steel & Power | 600/min |
| Plastic | D — Gold Coast Petrochem | 60/min |
| Rubber | D — Gold Coast Petrochem | 240/min |
| Concrete | B2 — Northwest Limestone Works | 240/min |
| Silica | C — Northern Quartz Cave | 240/min |

Plastic, Rubber, Concrete and Silica each have their sole Depot at the owning site. Iron, Copper and Steel Ingots have no Depot. All other component Depots live at the site that owns that item’s permanent production building.

### Fluid boundary

No fluid crosses a site boundary. Oil becomes plastic, rubber, fuel or rocket fuel at the oil site. Nitrogen becomes Cooling Systems, Fused Modular Frames or Nitric Acid at the well site. Alumina and water recycling remain inside the aluminum site. Dark Matter Residue and Excited Photonic Matter are generated and consumed inside the quantum campus.

## 2. World layout

Coordinates are `X, Y` in metres. They are navigation anchors, not promises that the exact square metre is level.

| Code | Site and map anchor | Resource pins to mark | Permanent responsibility | Palette |
|---|---|---|---|---|
| A | Rocky Desert western basin, **(-2633, -267)** | Six nearby iron, three copper, three limestone nodes | HUB, Elevator, iron ingot and conventional assembly campus | Warm white `#D7D2C7`, dark steel `#32363B`, FICSIT orange `#D96B27` |
| B | Northwest coal basin, **(-2760, -1630)** | Coal around (-2755,-1659), (-2657,-1626), (-2810,-1427), (-2718,-1462) | Coal power and steel ingot | Charcoal `#25282B`, safety yellow `#C9A227`, steel grey `#666D73` |
| B2 | Northwest limestone spur, **(-2615, -1165)** | Limestone at (-2615,-1165) | Concrete | Charcoal `#25282B`, pale stone `#D8D1C4`, yellow stripe `#C9A227` |
| C | Northern Rocky cave, **(-1880, -1415)** | Quartz (-1942,-1404), (-1720,-1441), (-1674,-1457); reserve SAM (-1822,-1424); Caterium (-1785,-798) | Silica, Quartz Crystal and caterium ingot | Quartz white `#E5E7EB`, graphite `#34373C`, violet `#6D4BB8` |
| D | Gold Coast oil field, **(-2525, 698)** | Oil (-2654,725), (-2525,698), (-2450,906), (-2325,628) | Plastic, rubber and fuel | Navy `#1E3A5F`, cyan `#23B5D3`, clean white `#F4F7FA` |
| E | Gold Coast/Red Jungle aluminum wharf, **(-1960, 720)** | Bauxite (-2171,112), (-1774,450); ocean water below | Alumina, scrap, aluminum ingot, casing and Alclad sheet | Silver `#C7CED6`, ice blue `#4B83A6`, dark grey `#34383D` |
| F | Western nitrogen mesa, **(-1440, 1220)** | Well core (-1439,1222), satellites around it | Cooling Systems and Fused Modular Frames | Teal `#0F766E`, white `#E8F0F2`, black `#16191C` |
| G | Blue Crater power basin, **(1450, 2200)** | Oil around (1821,1884); N₂ well (1283,2568); sulfur (913,2202), (964,2204), (948,2245); coal toward (172,2808); crater water | Nitro Rocket Fuel and grid-scale generation | Black `#17191C`, deep red `#8B1E1E`, amber light `#FFB000` |
| H | Dune Desert copper field, **(3300, -1450)** | Copper (3428,-1147), (3555,-1498), (2977,-1080), (3489,-1856); iron (3195,-1581), (3048,-1729); coal (3626,-1358) | Copper ingot, Copper Powder, Pink Diamonds | Oxidized copper `#A95A36`, sand `#E6C89C`, cream `#F4E7D0` |
| Q | Red Jungle/Crater Lakes quantum campus, **(-1436, 207)** | SAM at the anchor; local lake water; C’s SAM kept only as reserve | Tier 9 conversion, encoding and final assembly | Near-black `#17131F`, violet `#9B5DE5`, cool white `#E8F4FF` |

The site network is deliberately west-heavy until Phase 4:

```text
 C Quartz/SAM ───── B Steel/Concrete ───── A Rocky HQ & Assembly
       │                      │                     │
       └────────────── Q Quantum ──────────────────┤
                              │                     │
 D Gold Coast Oil ───── E Aluminum Wharf ───── F Nitrogen
                                                    │
 H Dune Copper/Diamond ─────────── G Blue Crater Power
```

## 3. Xbox-friendly logistics policy

Use belts as the default inter-site freight system and roads as access infrastructure. Enclose long belts in a two-storey “utility viaduct”: freight below, hypertube/power/walkway above. It is slower to build than a naked belt, but straight blueprint segments are easy to place with a controller and remain visually consistent.

Use natural ground for tractor/truck routes where it is smooth. Build only bridges, ramps, station yards and dangerous corners. Do not pave kilometres of winding road by hand.

Trains are optional until Phase 4. If you want them, use only two simple push-pull lines at first:

- West Line: D/E ↔ A, one train, one track, a locomotive facing each direction.
- East Line: H/G ↔ A/Q, one train, one track, a locomotive facing each direction.

With one train per isolated line, there is no signalling puzzle. Railways can be included in 1.2 blueprints and Blueprint Auto-Connect can join rail, belt, pipe and vehicle-path endpoints. Make straight deck, pier and gentle-ramp modules; place freehand rail only for the transition curves.

## 4. Blueprint book

Blueprint Designer build volumes are 32 m, 40 m and 48 m cubes: exactly 4×4, 5×5 and 6×6 foundations. Mk.1 unlocks in Tier 4, Mk.2 in Tier 6 and Mk.3 in Tier 9.

This section is a construction specification, not merely a list of ideas. Build the modules in the order shown. Name them with zero-padded numbers so the Xbox blueprint menu sorts them correctly.

### Shared coordinate convention

Stand at the side that will become the blueprint’s **front** before saving it.

- Columns run left to right: `A–D`, `A–E` or `A–F`.
- Rows run front to back: `1–4`, `1–5` or `1–6`.
- `C3` means the foundation in column C, row 3.
- Production machines face toward the back unless the card explicitly says otherwise: inputs face row 1, outputs face the highest-numbered row.
- A connection “stub” ends on the outer edge of the blueprint. Do not leave a belt or pipe hanging outside the Designer.
- Blue belts/signs mean inbound, orange means outbound, yellow means overflow or maintenance, and violet means Project/quantum.
- `L1–L4` are the four snap levels of a stackable conveyor support, from lowest to highest. They remain 2 m apart even if their displayed centre height varies with the support used.

Before making machinery modules, save `01-GRID-4X4` and place two copies beside each other in Blueprint build mode. If the foundations do not meet cleanly, correct the grid blueprint before continuing.

### What must remain hand-built

Two things cannot be made into a reliable universal blueprint, and one is phase-gated:

- Miners and Water Extractors, because the resource node/water surface determines placement.
- Recipe-specific final belt/pipe connections when the machine’s port combination changes with the recipe.
- The **first** Quantum Encoder must be hand-placed: Blueprint Designer Mk.3 itself requires Neural-Quantum Processors, so it cannot help bootstrap the Encoder that makes them. After Mk.3 is unlocked, an Encoder can fit diagonally in its 6×6 design area.

The book therefore provides alignment pads and connection stubs for these cases, then tells you what to connect after placement.

### Mk.1 module index

| Blueprint | Repeat direction | Used for |
|---|---|---|
| `01-GRID-4X4` | Any | World-grid starting pad |
| `02A-TERM-ITEM` | Left/right | First terminal lane for an item; includes its sole depot |
| `02B-TERM-BULK` | Left/right | Additional lanes for the same high-volume item; no depot |
| `02C-TERM-SINK-END` | At row end | One shared sink at the end of a site terminal |
| `02D-INGOT-DISPATCH` | Left/right | One storage-free ingot dispatch lane with overflow |
| `03-BUS-STRAIGHT-4` | Front/back | Four-belt utility viaduct |
| `04L/04R-BUS-CORNER-4` | 90° | Left and right viaduct corners |
| `05-BUS-T-EMPTY` | Junction | Empty branch shell; route each item manually |
| `10-CTOR-4` | Left/right | Four Constructors for one item |
| `11-ASM-2` | Left/right | Two Assemblers for one item |
| `12-FOUNDRY-2` | Left/right | Two Foundries for one item |
| `20-COAL-GEN-1` | Left/right | One Coal Generator and its local services |
| `30-SHELL-4M-BAY` | Left/right | Repeating facade bay |
| `31L/31R-SHELL-END` | Hall ends | Mirrored end caps |

### `01-GRID-4X4`

1. Fill all 16 cells with 1 m concrete foundations.
2. Put a short painted beam along the front edges of `B1–C1` in the site accent color.
3. Put a small sign reading `FRONT` on the front face of `B1` and a north-arrow symbol on `C1`.
4. Put one double wall outlet on the rear face of `D4`; do not run a cable in the blueprint.
5. Place 1 m pillars beneath the four outside corners only.
6. Save while standing at row 1. Test one copy against the world grid and a second copy against the first.

This blueprint is the datum for every campus. Remove the FRONT sign after the first row of foundations is established.

### `02A-TERM-ITEM` — first lane and sole depot

The blueprint is 4×4. Flow is front to back.

1. Lay the full foundation pad. Paint the front edge blue and rear edge orange.
2. Centre a Smart Splitter in `B1`, with its input facing the front.
3. Place one Industrial Storage Container lengthwise through `B2–B3`, inputs toward row 1 and outputs toward row 4.
4. Connect the Smart Splitter’s centre output to the lower container input. Set centre to the item or `Any`; set the right output to `Overflow`; leave the left output unused.
5. Run the yellow overflow belt across `C1–D1` and end it on the right boundary. Every adjacent terminal cell must put its overflow stub at this same position.
6. Put the dispatch belt from the lower container output straight through `B4` to the rear boundary.
7. Place the Dimensional Depot Uploader in `C3–C4`, with its input facing the container aisle. Connect the upper container output to it with a lift and short belt.
8. Put a 2 m sign above `B1`: first line item, second line design rate, third line destination. Enter item text only after the blueprint is placed.
9. Put a power outlet on the rear wall/pillar and connect only the Depot uploader. Terminal lighting connects after placement.

Never place this blueprint twice for the same item. High-volume items use one `02A` followed by one or more `02B` lanes.

### `02B-TERM-BULK` — extra lane without a depot

1. Copy the `02A` foundations, Smart Splitter, container and matching blue/orange/yellow markings.
2. Remove the Dimensional Depot Uploader and its lift.
3. Use both container outputs as dispatch belts, ending side-by-side at the rear boundary.
4. Preserve the yellow overflow stub at the right boundary so it joins the next terminal cell.
5. Mark the sign `BULK LANE 2`, `3`, etc. after placement.

Use this only for additional storage lanes of a high-volume **non-ingot** component. It does not create another depot.

### `02C-TERM-SINK-END` — one sink per site

1. Use a 4×4 pad and place the AWESOME Sink centrally over `B2–C3`, input facing row 1.
2. Build a merger chain across row 1. The yellow overflow gutter enters at the left boundary and terminates in the Sink.
3. Add one spare merger input at the front boundary for isolated by-products.
4. Put a yellow/black wall and the site code behind the Sink.
5. Connect the Sink to the site’s protected utility circuit after placement.

Place one at each site, at the downstream end of the terminal row.

### `02D-INGOT-DISPATCH` — storage-free lane

The blueprint is 4×4 and carries one ingot lane front to back.

1. Use the same floor datum and facade band as the terminal cells, but paint the central floor stripe orange from front to back.
2. Put a Smart Splitter in `B2`, input facing row 1. Connect its centre output directly to the rear boundary through `B4`; there is no container and no Depot uploader.
3. After placement, set the centre output to the named ingot and the right output to `Overflow`.
4. Route the yellow overflow output across `C2–D2` to the shared site Sink gutter.
5. Sign the lane with ingot name, exact rate, belt mark and destination. Add `NO STORAGE` on the fourth line.
6. Repeat one independent `02D` per required throughput lane; never merge lanes merely to pass through the dispatch building.

### `03-BUS-STRAIGHT-4`

1. Build a 4×4 pad. The module runs from row 1 to row 4.
2. Along the centreline of column B, place stackable conveyor supports on the front and rear boundaries.
3. Join four belts on `L1–L4`, keeping each belt perfectly straight. Use the cheapest belt in the blueprint and upgrade individual lines in the world as required.
4. Use column C as a full-width catwalk with railings. Leave columns A and D as structure/access clearance.
5. Put double wall outlets on the front and rear supports at the same height. They do not auto-connect; join the power cable after placement.
6. Add a roof at 8 m and pillars at `A1`, `D1`, `A4`, `D4`.
7. Put belt-number signs `1–4` at both ends. Item names are assigned after placement.

Place a second parallel viaduct when more than four freight lanes are needed. Do not stack eight belts in one inaccessible tower.

### `04L/04R-BUS-CORNER-4`

1. Start from the `03` shell and delete its straight belts.
2. Put one stackable support at the centre of the entering edge and one at the centre of the chosen exiting edge.
3. Build the `L4` curve first, then `L3`, `L2`, `L1`. Confirm that every curve remains inside the 4×4 boundary.
4. Keep belt numbers in the same vertical order through the turn.
5. Move the catwalk to the outside of the curve and keep a railing between the player and the belts.
6. Save left and right versions separately. Do not rotate one repeatedly on Xbox; the two saved versions are quicker and less error-prone.

### `05-BUS-T-EMPTY`

1. Build the same 4×4 shell and roof datum as `03`.
2. Put empty stackable supports at the centres of the front, rear and right edges.
3. Add the catwalk and power outlets, but place **no belts, splitters or mergers**.
4. After placing the junction, route only the items that actually branch. Straight-through items use direct belts; branching items get dedicated splitters.

A pre-belted universal T-junction would silently mix or split the wrong commodities, so the empty connection jig is intentional.

### `10-CTOR-4`

```text
Back / output:   [merger chain and orange output stub]
Rows 2–3:        [CTOR-A] [CTOR-B] [CTOR-C] [CTOR-D]  four Constructors →
Front / input:   [splitter chain and blue input stub]
```

1. Use a 4×4 pad. Place four Constructors side-by-side, one centred in each column, straddling rows 2–3. All outputs face row 4.
2. Put four Splitters in row 1, one aligned with each machine input. Connect them left-to-right as a manifold; blue input stubs touch both side boundaries.
3. Connect each Splitter to its Constructor with the shortest straight belt.
4. Put four Mergers in row 4, aligned with the outputs. Chain them left-to-right; the orange output exits the right boundary.
5. Run power on the rear wall and connect all four machines to one local Power Pole Mk.2.
6. Leave a 2 m walking strip between the machines and both logistics rows. Do not include storage.

Repeat this blueprint left-to-right inside one item’s Constructor hall. The continuous input and output manifold stubs should touch or Auto-Connect **within one destination bank**. Start a new, unconnected output manifold for the next destination bank. For a bank that needs fewer than four Constructors, place the blueprint, remove the unused end machines and their splitter/merger branches, and close that bay with the normal shell module.

### `11-ASM-2`

1. Use a 4×4 pad. Place two Assemblers side-by-side through `B2–B3` and `C2–C3`, outputs toward row 4.
2. Across row 1, build two parallel input manifolds: ingredient 1 at `L1`, ingredient 2 at `L2`.
3. At each Assembler, use stacked Splitters and lifts to reach the two input ports without crossing belts.
4. Put two Mergers in row 4 and send one orange output belt to the right boundary.
5. Put a blue sign at the front showing `IN-1` and `IN-2`; put the recipe name only after placement.
6. Connect both machines to one local pole on the rear service edge.

If an alternate recipe changes ingredients, change the signs and external feeds—not the two-lane geometry.

### `12-FOUNDRY-2`

1. Use a 4×4 pad. Place two Foundries side-by-side in the centre, outputs toward row 4.
2. Put ingredient 1 on the row-1 manifold at `L1` and ingredient 2 at `L2`.
3. Drop both lanes to the Foundry inputs with lifts. Keep ore/ingot on `L1` and coal/second ore on `L2` everywhere.
4. Merge both outputs across row 4 and exit right.
5. Add a rear roof vent/skylight above each machine, but do not close the roof lower than 12 m.
6. Use one local power pole and no container.

This single geometry supports Solid Steel Ingot and Copper Alloy Ingot in different buildings.

### `20-COAL-GEN-1`

One generator per blueprint is intentional; the machine is roughly 10×26×36 m and a two-machine Mk.1 module leaves poor pipe access.

1. Use the full 4×4 pad and place one Coal Generator centrally, length running front-to-back.
2. Put the coal belt on the left edge with a Splitter aligned to the generator’s conveyor input.
3. Put the water header along the right edge and a Pipeline Junction Cross aligned to the water input.
4. End coal and pipe stubs on both front and rear boundaries so adjacent modules extend both manifolds.
5. Put a Power Pole Mk.2 at the front-right corner, but connect the generator to the plant switchgear after placement.
6. Use open steel framing rather than a low roof; preserve at least 40 m vertical clearance.

Repeat left-to-right or front-to-back, but keep each eight-generator water block isolated as specified in Phase 2.

### `30-SHELL-4M-BAY` and `31L/31R-SHELL-END`

1. `30` uses a 4-foundation-long facade with columns at both ends, a 4 m plinth, a window band and a roof-edge beam. It contains no machines or logistics.
2. Put the site’s neutral color on the plinth, site color on the upper panels and universal yellow only on doors/maintenance markings.
3. `31L` and `31R` are mirrored end walls with one personnel door, one freight door and an item/building sign position.
4. Place shell modules after the machine line works. Nudge the shell, never the machine blueprint.

### Mk.2 module index

| Blueprint | Repeat direction | Used for |
|---|---|---|
| `40-MANUF-1` | Left/right | One Manufacturer and a four-lane input gallery |
| `41-REFINERY-2` | Left/right | Two Refineries with dry and wet service sides |
| `42-BLENDER-1` | Left/right | One Blender with uncluttered pipes and solid inputs |
| `43-FUELGEN-2` | Left/right | Two Fuel Generators and rear pipe gallery |
| `44-ROAD-STRAIGHT` | Front/back | Five-foundation-wide road deck |
| `45-ROAD-RAMP-5M` | Front/back | Five-row ramp rising 5 m over 40 m |
| `46-RAIL-DECK-STRAIGHT` | Front/back | Straight single-track deck |
| `47-RAIL-PIER-8M` | Vertical | Stackable 8 m rail/road pier segment |
| `48-PACKAGER-1` | Left/right | One Packager with separated dry/wet service sides |

### `40-MANUF-1`

One Manufacturer per module keeps its four inputs readable.

1. Build a 5×5 pad. Place the Manufacturer centrally through columns `B–D`, rows `2–4`, output toward row 5.
2. Build four input manifolds across row 1 at `L1–L4`. Number them from bottom to top to match the recipe screen from first ingredient to fourth.
3. Use one vertical lift column per Manufacturer input. Do not weave belts across the machine floor.
4. Run the output through row 5 to the right boundary.
5. Put the power pole and recipe sign in `E5`; leave column A as the pedestrian aisle.
6. After placement, confirm each belt by sending one stack through at a time before enabling continuous input.

### `41-REFINERY-2`

1. Build a 5×5 pad. Place two Refineries side-by-side, centred approximately on columns B and D, length running front-to-back.
2. Reserve row 1 for solid logistics and row 5 for the pipe header. Reserve column E as the continuous wet-service aisle.
3. Put solid Splitters/Mergers only on row 1. Put Pipeline Junction Crosses only on row 5.
4. Add floor/wall pipe supports aligned to every refinery fluid port, but leave the final short pipe segment disconnected.
5. Add solid belt stubs aligned to every conveyor port, again leaving the final recipe-dependent segment disconnected.
6. Add a flush connection with a normally closed valve at the right boundary. Do not add a Fluid Buffer.
7. Connect ports after the blueprint is placed and the recipe is selected; color each pipe before opening its valve.

This avoids accidentally connecting a Heavy Oil Residue output to a crude input when the same physical module is used for another recipe.

### `42-BLENDER-1`

1. Build a 5×5 pad and place one Blender centrally in rows 2–4.
2. Use row 1 for stacked solid-input belts and row 5 for the two fluid headers.
3. Put the solid output belt on the left rear and the fluid output header on the right rear, matching the machine’s actual ports.
4. Place floor holes/supports and connection stubs, but leave final recipe-dependent links disconnected.
5. Put dry-service access on column A and wet-service access on column E.
6. Add a flush junction to each fluid header and no storage tank.

One Blender per module is slower to stamp down than a two-Blender block, but it preserves the service space needed for Cooling Device, Diluted Fuel, Nitro Rocket Fuel and Biochemical Sculptor layouts.

### `43-FUELGEN-2`

1. Build a 5×5 pad. Place two Fuel Generators side-by-side across the front three rows, both pipe inputs facing the rear gallery.
2. Keep rows 4–5 as a 16 m-deep pipe and maintenance zone.
3. Run one fuel pipe across row 5 with one junction per generator. Leave front and rear continuation stubs.
4. Put a valve before the first junction only; do not valve each generator.
5. Put the electrical connection on a rear Power Pole Mk.3 and connect the pole to switchgear after placement.
6. Use an open roof or roof height above 32 m.

At G, place 36 of these Mk.2 modules for the Phase 4 plant. Mk.3 later halves the number of placements.

### `44-ROAD-STRAIGHT`

1. Fill the 5×5 Designer with foundations.
2. Columns B–D are the three-foundation road surface. Columns A and E are sidewalks/service strips.
3. Use lane arrows on B and D; use C as the safety median and lighting line.
4. Put barriers only on the two outside edges. End them one metre before the front/rear boundary so adjacent blueprints do not double up.
5. Put streetlights at `A2` and `E4`, with power outlets at both ends.
6. If the road also carries belts, hang them beneath columns A/E; never reduce vehicle clearance over B–D.

### `45-ROAD-RAMP-5M`

1. Copy the `44` width and markings.
2. Replace each row with 1 m ramp foundations facing toward row 5. Five rows produce a 5 m rise over 40 m.
3. Use ramp barriers/painted beams rather than flat guardrails.
4. Put power outlets only at the low and high ends.
5. Save a rising and falling version if rotating/nudging the same ramp is uncomfortable on Xbox.

Do not call this a 1 m ramp: its end-to-end elevation change is 5 m.

### `46-RAIL-DECK-STRAIGHT`

1. Build a 5×5 foundation deck.
2. Place one perfectly straight Railway from the centre of `C1` to the centre of `C5` using Straight build mode.
3. Columns B and D are maintenance walks with railings on their outer edges. A and E provide future clearance for a second independent track or utilities.
4. Put power outlets and track-centre signs at both ends.
5. Use Blueprint Auto-Connect when placing consecutive modules. Inspect the hologram connection before confirming.

For the recommended push-pull line, keep one train on one isolated track. Do not add signals.

### `47-RAIL-PIER-8M`

1. Build a 5×5 upper frame with four pillars at `B2`, `D2`, `B4`, `D4`.
2. Extend each pillar down exactly 8 m and connect them with painted beams at the bottom.
3. Leave the centre open for terrain and inspection access.
4. Save the support without track. Stack vertical copies until the top is one foundation below the rail deck.
5. Finish the terrain foot by hand; do not force the lowest segment underground.

### `48-PACKAGER-1`

1. Build a 5×5 pad and place one Packager centrally in rows 2–4, conveyor ports toward row 1 and the pipe port toward row 5.
2. Reserve row 1 for the Empty Canister input and packaged-product output. Keep them on opposite sides and paint the input blue and output orange.
3. Reserve row 5 as the wet-service aisle. Add one pipe support, one valve before the machine and one normally closed flush connection; add no Fluid Buffer.
4. Leave the final conveyor and pipe segments disconnected in the saved blueprint so the same geometry cannot accidentally reverse packaging/unpackaging flow.
5. Put a recipe sign and an `AUTO / REFILL` power-switch position in column E. The Jetpack-fuel line runs only while replenishing its terminal.
6. Every packaged item produced concurrently needs its own placed module. Retargeting `D-JETPACK-P01` from Packaged Fuel to Packaged Turbofuel is the documented one-time phase upgrade, not simultaneous mixed production.

### Mk.3 module index

| Blueprint | Repeat direction | Used for |
|---|---|---|
| `60-CONVERTER-2` | Left/right | Two Converters for one item/fluid |
| `61A-QE-PAD-6X6` | Left/right | Bootstrap pad; first Encoder is hand-placed |
| `61B-QE-DIAG-6X6` | Left/right | Optional post-unlock diagonal Encoder module |
| `62-PA-1` | Left/right | One Particle Accelerator bay |
| `63-QUANTUM-SHELL` | Left/right | Black/violet facade and light fins |
| `64-FUELGEN-4` | Left/right | Four Fuel Generators around a service cross |

### `60-CONVERTER-2`

1. Build a 6×6 pad. Place two Converters side-by-side in the centre, one through `B3–C4` and one through `D3–E4`, both outputs toward row 6.
2. Reserve rows 1–2 for input belts/pipes and rows 5–6 for outputs.
3. Provide one isolated power switch position per Converter; actual switches are connected after placement.
4. For solid output recipes, merge across row 6. For fluid outputs, remove that belt and use the matching pipe header instead.
5. Never operate two different output recipes inside one building even though the blueprint contains two machines.

### `61A-QE-PAD-6X6` — bootstrap Encoder pad

This blueprint contains no Quantum Encoder because it is used before Mk.3 is unlocked.

1. Fill the 6×6 pad and mark its centreline from `C1/D1` to `C6/D6` with violet floor markings.
2. Reserve rows 1–2 as the four-solid-input gallery. Place four labeled belt stubs at `L1–L4` but no machine lifts.
3. Reserve row 6 as the wet/output service edge. Place two color-coded pipe supports and one orange output-belt marker, but no final connection.
4. After placing the pad in Q, add one loose 6-foundation row behind row 6. The completed world pad is 6×7 foundations, or 48×56 m.
5. Stand on the centreline at the front and place one Quantum Encoder facing the rear, centred left-to-right. Nudge it until it has at least 3 m clearance at both ends.
6. Connect the four solid inputs one at a time in recipe order. Connect EPM input and DMR output only after checking pipe color and flow direction.
7. Run the DMR by-product line to the priority-recycle junction before the fresh DMR Converter header.

Repeat the pad/building for Superposition Oscillator, Neural-Quantum Processor and AI Expansion Server. They are three separate buildings.

### `61B-QE-DIAG-6X6` — optional after Mk.3 unlock

1. Start from a bare 6×6 pad and remove the axial belt/pipe stubs from `61A`.
2. Place one Quantum Encoder near the pad centre and rotate it diagonally, approximately 45 degrees. Nudge it until the hologram is valid and all machine clearance remains inside the Designer; the mesh may look close to the frame.
3. Put three solid-input stubs along the two nearest front edges, the solid output on a rear edge, and the EPM/DMR pipe stubs on opposite service corners. Label every stub before saving.
4. Add only low corner lights and floor markings. Do not add close walls: the moving arms need visual clearance and the diagonal service connections must remain reachable.
5. Test-place the blueprint once, connect all ports, run one production cycle and verify DMR exits before using it for later Encoders.

This is an optional convenience blueprint, not part of the Tier 9 bootstrap. The hand-placed Neural-Quantum Processor Encoder must first make the processors required by the Mk.3 milestone.

### `62-PA-1`

1. Build a 6×6 pad. Centre one Particle Accelerator lengthwise, input toward row 1 and output toward row 6.
2. Reserve the front row for inputs, rear row for output and both outside columns for catwalks.
3. Put a dedicated Power Switch and wall outlet on the right-rear service corner.
4. Add no ceiling below 40 m. Use open trusses or a removable roof cap.
5. Place one machine per blueprint and one item recipe per completed building.

### `63-QUANTUM-SHELL`

1. Use a 6-foundation facade: two black plinth walls, three violet vertical fins and cool-white light strips between them.
2. Put one personnel door in the second bay and one 4 m freight door in the fifth.
3. Leave the centre four bays windowed so the machine animation remains visible.
4. The shell has no foundation, machine, belt, pipe or power connection. Place and nudge it around the working machine pad.

### `64-FUELGEN-4`

1. Build a 6×6 pad. Place Fuel Generators centred at approximately `B2`, `E2`, `B5`, `E5`, with pipe inputs toward the central cross.
2. Keep the 4 m-wide cross between the four machine footprints unobstructed.
3. Run the fuel header through the front/back arm of the cross and branch left/right to each generator.
4. Put electrical poles in the side arm of the cross; keep cables away from pipe interaction points.
5. End the pipe on both front and rear boundaries for Auto-Connect.
6. Preserve open vertical clearance above 32 m.

Use this only after Mk.3 is unlocked. Existing Mk.2 generator modules remain valid; do not rebuild them for cosmetic uniformity.

### Blueprint commissioning checklist

Every new blueprint gets one test placement on an isolated foundation apron:

1. Place two copies in the intended repeat direction.
2. Verify foundations meet without a 1 m offset.
3. Verify every intended belt/pipe Auto-Connects; manually join power.
4. Send one stack through each input separately and confirm it reaches only the intended port.
5. Send output to a temporary Sink and run all machines for two minutes.
6. Walk every maintenance aisle and operate every valve, power switch and machine panel.
7. Only then place the module inside a permanent colored shell.

Blueprints are placement aids, not permission to mix items. If a four-Constructor blueprint is required for two recipes, place it in two separately named and separately colored/signposted buildings.

## 5. Phase 0 — establish the permanent grid

1. Select **Rocky Desert** as the starting biome.
2. Walk to the western flat basin around `(-2633,-267)` before committing the HUB.
3. Complete the **Tier 1 Base Building milestone**. Foundations are a Phase 0 prerequisite, not something to postpone until production begins.
4. Place the HUB, MAM and eventual Space Elevator plaza on the world grid. Finish a 15×15 foundation plaza for the Elevator and landscaped setback.
5. Reserve a north–south utility spine. Put machine halls on one side and the 24 m terminal boulevard on the other.
6. Mark an empty 10×8 foundation truck court beside the future terminal. It is expansion space for two stations and a turning lane; do not build stations before Vehicular Transport or unless a useful route exists.
7. Build a finished 12×8 foundation biomass power house with 16 Biomass Burners. Automate Solid Biofuel delivery but retain manual fuel loading. Treat this as the permanent black-start building.
8. After Base Building, prioritize Logistics, Part Assembly, Obstacle Clearing, Resource Sink Bonus Program and Logistics Mk.2.
9. Buy concrete foundations, wall power outlets, modern railings, signs, lights, conveyor floor holes and wall/roof pieces before decorative statues.
10. Place map markers for A, B, B2, C and D before building the first remote route.

### Research, Shop and artifact ledger

Every Elevator phase has three parallel completion tracks: production, research and utility. A phase is not complete merely because its Project Parts are ready.

1. At the gate, open every discovered MAM tree and complete every node whose ingredients are available from the current or earlier tiers. Put each genuinely future-locked node on a sign beside the MAM with its missing item; it becomes the first research task in the phase that unlocks that item.
2. Visit the AWESOME Shop at every gate. Buy functional architecture before statues: structural materials, foundations/ramps, wall and floor conveyor holes, wall outlets, beams, pillars, catwalks, railings, signs, lights and the transport cosmetics used by the next phase.
3. Give the utility yard the same architectural standard as production. Each automated utility item still gets one item and one machine type per finished building, plus a component terminal cell where useful.
4. Track artifacts on two signs beside the MAM. Core production arithmetic assumes **no Somersloops**. Sloops may temporarily accelerate a terminal or Project Part only after the unslooped line passes commissioning; remove them before validating the documented rates.

Research completion and permanent production are separate decisions. Clear Rifle, Rebar Gun and every ammunition branch in the MAM, but do not automate a weapon or ammunition that you do not carry. Handcraft the few research prerequisites at the Equipment Workshop, or run only the specifically named research-batch machine below. A MAM node saying “researched” does not justify an unused permanent factory.

Mercer Sphere planning is formula-based rather than a vague collection target:

`required spheres = research spheres + one per non-ingot Depot uploader + chosen capacity/upload upgrades`

Each uploader also needs 10 SAM Fluctuators. The two upgrade tracks cost 3, 7, 13 and 23 spheres per level. Never spend the spheres reserved on the sign for already-planned component uploaders. Ingots consume none because they have neither storage nor uploaders.

The Phase 1 terminal shell may contain an empty, labeled uploader bay until the Alien Technology research and its Steel Pipe/SAM Fluctuator costs are obtainable. This is the only technology exception to “finish the building”: foundation, walls, signs, storage row, sink route, power outlet and uploader belt stub must already be complete. Retrofit the uploader during Phase 2 without altering the shell.

Do not build a giant all-in-one starter box. Every Phase 1 hall is permanent and already aligned to the future bus.

## 6. Phase 1 — Distribution Platform

### Alternate expedition 1

After Tier 2 Part Assembly is unlocked, scan Hard Drives until these are selected:

1. **Iron Wire** — mandatory for this world plan.
2. **Stitched Iron Plate** — mandatory.
3. **Cast Screws** — optional convenience only. It saves one early Constructor and one Rod-to-Screw belt but does not save Iron Ore. The base plan below uses the default Screw recipe so Phase 1 is not blocked by a third Hard Drive.

Do not wait for Steel Rotor; it is not eligible until Basic Steel Production after Phase 1.

### Build order at A

1. `A-IRON-INGOT-S01`: beside the two western-basin Iron nodes at approximately `(-2601,-277)` and `(-2639,-308)`, build a low **10×6-foundation source shed** between the terrain Miners. Install six Smelters for **170.556 Iron Ingot/min**, supplied by two Pure Miner Mk.1s at 85.278 ore/min each. Use destination banks: 60/min to Iron Plates (two Smelters at 30), 55/min to Iron Rods (two at 27.5), and 55.556/min to Iron Wire (two at 27.778). Send those three storage-free belts to the component quarter; no Iron Ingot container or Depot is built.
2. `A-COPPER-INGOT-S01`: beside the south Copper node at approximately `(-2667,-513)`, build a low **6×6-foundation source shed** for two Smelters making **60 Copper Ingot/min**, 30 each. Run one Pure Miner Mk.1 at 60 ore/min and belt the Ingots directly to the Copper Sheet hall at the main component quarter. Give the lane a `02D-INGOT-DISPATCH` throat but no container or Depot.
3. `A-COPPER-SHEET-C01`: three Constructors, **30 Copper Sheet/min**, 10 each, consuming the Sheet bank's full 60 Copper Ingot/min. Send the output to the Copper Sheet terminal and Depot; these sheets are the permanent stock for pipes, fluid buildings, MAM work and later electronics. The same three-machine hall is retargeted rather than rebuilt in Phase 3.
4. `A-CONCRETE-C01`: three Constructors, **40 Concrete/min**, 13.333 each, consuming 120 Limestone/min.
5. `A-IRON-PLATE-C01`: three Constructors, **40 Iron Plate/min**. The RIP bank is one Constructor at 16.667/min; the two-machine terminal bank makes the remaining 23.333/min at 11.667/min each. The machines differ only because they feed separate destination belts.
6. `A-IRON-ROD-C01`: four Constructors, **55 Iron Rod/min**. One makes 15/min for Rotors, two make 12.5/min each for the default Screw hall, and one makes 15/min for the Rod terminal.
7. `A-SCREW-C01`: three Constructors using the default recipe, **100 Screws/min**. Two make 37.5/min each for the Rotor hall; one makes 25/min for the Screw terminal. If Cast Screws happens to be unlocked, the documented optional conversion is four Constructors at 25/min using 25 Iron Ingots/min directly; it changes no other Phase 1 total.
8. `A-IRON-WIRE-C01`: six Constructors, **100 Wire/min**. Three at 20/min supply 60/min to Cable, two at 16.667/min supply 33.333/min to Reinforced Iron Plates, and one at 6.667/min supplies the Wire terminal. Each bank is internally symmetrical; their rates differ because they leave on three different belts. Iron Wire replaces copper only in Wire production; it does not remove the need for Copper Sheets.
9. `A-CABLE-C01`: one Constructor, **30 Cable/min**.
10. `A-RIP-A01`: two Assemblers using Stitched Iron Plate, **5 Reinforced Iron Plate/min**. The Smart Plating bank makes 2/min; the terminal bank makes 3/min.
11. `A-ROTOR-A00`: two Assemblers using the default recipe, **3 Rotor/min**. The Smart Plating bank makes 2/min; the terminal bank makes 1/min. This is a deliberately small legacy hall that is switched off after Steel Rotor is commissioned.
12. `A-SMART-PLATING-A01`: one Assembler, **2 Smart Plating/min**.
13. Build the Phase 1 component terminal row, reserved/installed unique Depot bays, one sink and the Elevator belt. Give Iron and Copper Ingots `02D` storage-free dispatch throats. Do not use machine-adjacent containers.

Phase 1 delivery is 50 Smart Plating, so 2/min finishes in **25 minutes** after warm-up.

The Phase 1 iron balance is continuous rather than batch-dependent: 40 Plates consume 60 Ingots/min; 55 Rods consume 55; and 100 Iron Wire consumes 55.556. No ingot surplus is made. Cable consumes 60 Wire/min, the 5 RIP/min consumes 33.333 Wire/min and 16.667 Plates/min, and the Wire terminal receives the remaining 6.667/min. The Screw hall consumes 25 Rods/min; the 3 Rotors/min consume another 15 Rods/min and 75 Screws/min. Smart Plating receives exactly 2 RIP/min and 2 Rotor/min while the component terminals continue filling.

### Phase 1 research, Shop and utility gate

- Finish every Tier 0–2 milestone, including Resource Sink Bonus Program and Logistics Mk.2; both are available before the Phase 1 delivery.
- Start all MAM trees by bringing back SAM, Caterium, Raw Quartz, Sulfur, Mycelia, all four creature-remains types, one of each Power Slug, Beryl Nuts, Paleberries and Bacon Agaric.
- Clear Caterium through AI Limiter and Smart Splitter so the terminal overflow standard is actually buildable. For this one-time bootstrap, collect/handcraft enough Caterium Ingot and Quickwire for the first 10 AI Limiters; do not erect a temporary ingot factory or store the ingots. Clear Quartz through Silica and Blade Runners, and clear the currently affordable Nutrients, Alien Megafauna, Mycelia and Power Slug nodes.
- Analyze one Mercer Sphere and one Somersloop. Research as far into Alien Technology as current materials allow; reserve uploader bays if Steel Pipes prevent early Depot commissioning.
- Buy the concrete/metal foundations, basic wall set, wall outlets, conveyor floor/wall holes, signs, lights and railings used by the Phase 1 architecture.
- Complete `A-SOLID-BIOFUEL-C01`, one finished Constructor building at 60 Solid Biofuel/min. Add small finished Fabric, Alien Protein and Alien DNA Capsule utility buildings once their MAM recipes are unlocked; these are terminal-supply utilities, not mixed into the production halls.

### Phase 1 acceptance gate

Do not send the delivery until:

- every hall has walls, roof, lighting, doors, signs and a finished service entrance;
- the terminal is the only storage;
- every stored component has either its sole Depot uploader or its completed, labeled technology-locked uploader bay; ingots have neither;
- every terminal item can overflow to the site sink;
- the biomass house can restart the campus without relying on remote power;
- the northbound corridor toward B is marked and unobstructed.

## 7. Phase 2 — Construction Dock

### Unlock and alternate order

Complete milestones in this practical order:

1. Coal Power.
2. Basic Steel Production.
3. Logistics Mk.3.
4. Advanced Steel Production.
5. FICSIT Blueprints.

Then hunt:

- **Solid Steel Ingot** — mandatory.
- **Steel Rotor** — mandatory.
- **Steeled Frame** — mandatory.
- **Encased Industrial Pipe** — mandatory after Advanced Steel Production.
- **Copper Alloy Ingot** — mandatory for the later Dune Copper Works; bank it now.

### Build B — Northwest Steel & Power

1. Run the utility viaduct north from A to B. Keep it straight and use one bridge over difficult terrain.
2. Build two finished coal-generator halls, eight generators per hall: **16 generators / 1,200 MW gross**.
3. Supply **240 Coal/min** from one Pure Miner Mk.2.
4. Give each eight-generator block four Water Extractors at **90 m³/min each**. Each Extractor gets an independent 90 m³/min branch feeding exactly two adjacent generators at 45 each. Do not merge all four branches into one header and do not add a Fluid Buffer. This uses eight Extractors for the full sixteen-generator plant and avoids the end-of-manifold starvation of the compact three-extractor layout.
5. Build `B-STEEL-INGOT-F01`: five Foundries using Solid Steel Ingot, **300 Steel Ingot/min**, 60 each. Import 200 Iron Ingot/min and mine 200 Coal/min.
6. Build the Steel Ingot dispatch throat with `02D-INGOT-DISPATCH`, no containers and no Depot. Its overflow joins B's Sink gutter.
7. Keep coal power and steel on separate priority circuits. Biomass is priority group 1, water/miners group 2, generators group 3, factories group 4.

### Build B2 — Concrete

Build four Constructors at the limestone node near `(-2615,-1165)` for **60 Concrete/min**, 15 each. This becomes the sole global Concrete depot. Expand the shell now to sixteen-Constructor capacity.

### Expand A — phase-specific running targets

The following is the complete Phase 2 production target. Installed count is the number physically placed; set every machine to the per-machine output shown.

| Item | Recipe | Building | Total/min | Installed | Each/min |
|---|---|---|---:|---:|---:|
| Iron Plate | Iron Plate | Constructor | 27.778 | 3 | 9.259 |
| Wire | Iron Wire | Constructor | 205.556 | 10 | 20.556 |
| Cable | Cable | Constructor | 50 | 2 | 25 |
| Reinforced Iron Plate | Stitched Iron Plate | Assembler | 8.333 | 2 | 4.167 |
| Steel Pipe | Steel Pipe | Constructor | 34.167 | 2 | 17.083 |
| Steel Beam | Steel Beam | Constructor | 60 | 4 | 15 |
| Rotor | Steel Rotor | Assembler | 5 | 1 | 5 |
| Modular Frame | Steeled Frame | Assembler | 5 | 2 | 2.5 |
| Stator | Stator | Assembler | 2.5 | 1 | 2.5 |
| Smart Plating | Smart Plating | Assembler | 5 | 3 | 1.667 |
| Versatile Framework | Versatile Framework | Assembler | 10 | 2 | 5 |
| Automated Wiring | Automated Wiring | Assembler | 2.5 | 1 | 2.5 |

Support this with approximately **360 Iron Ingot/min**, **300 Steel Ingot/min** and **200 Coal/min** for steel. Keep A's Copper Ingot bank at 60/min and its Copper Sheet hall at 30/min for construction stock. No ingot storage is added.

At these rates the Phase 2 delivery takes at most **200 minutes**: Smart Plating is the pacing item.

### Phase 2 research, Shop and utility gate

- Clear Sulfur through Black Powder, Compacted Coal, Expanded Toolbelt and the Nobelisk Detonator. Turbofuel/Smokeless Powder nodes that require oil products remain signed for Phase 3.
- Clear Mycelia through the Gas Mask and the currently affordable inhalers. Craft the Gas Mask now; reserve its Gas Filter Manufacturer hall because Manufacturers unlock in Phase 3.
- Advance Caterium through AI Limiter, Smart Splitter and Power Switch. Advance Quartz through Blade Runners, Crystal Oscillator and Inflated Pocket Dimension as supplies permit.
- With automated Steel Pipe available, handcraft the required SAM Fluctuators and install every reserved Phase 1 component uploader. Update the Mercer ledger before building each one; install none on ingot lanes.
- Complete two small, finished utility buildings: `A-BLACK-POWDER-A01` and `A-NOBELISK-A01`. Run one machine in each and give Nobelisks their own terminal cell and Depot. At B, complete `B-COMPACTED-COAL-A01` with two Assemblers: a D-destination bank at 12/min and a terminal bank at 5/min that runs only until its cell/Depot is stocked. Bring Sulfur to B on a dedicated solid belt; the D bank remains switched off until Phase 3. Complete the Rebar Gun branch in the MAM, but do **not** build `A-IRON-REBAR-C01`; handcraft only a research-required quantity of rebar if a later node asks for it.
- Buy the beams, pillars, catwalks, modern railings, road barriers and remaining conveyor-wall pieces needed by the Mk.1 blueprint library and the B/B2 architecture.

### Phase 2 acceptance gate

- Mk.1 blueprint library tested with two adjacent placements and one corner.
- Coal plant stable for 30 minutes with no water cycling.
- Steel Ingots pass storage-free through B's dispatch throat; the Concrete Depot exists only at B2.
- A has separate completed Constructor and Assembler buildings for every row above.
- The Gold Coast route is marked.
- Capacity minus observed peak load is at least 25%.

## 8. Phase 3 — Main Body

### Unlock and alternate order

Prioritize Oil Processing, Logistics Mk.4, Industrial Manufacturing, Expanded Power Infrastructure and Blueprint Designer Mk.2. Advance the Quartz and Caterium MAM trees before scanning the electronics recipes.

Mandatory recipes for the permanent Phase 3 buildings:

- **Silicon Circuit Board**.
- **Caterium Computer**.
- **Heavy Encased Frame**.

Also bank these now for Phase 4:

- **Silicon High-Speed Connector**.
- **Insulated Crystal Oscillator**.

### Build C — Quartz source and separate Caterium satellite

The northern Rocky cave around `(-1880,-1415)` contains the quartz pin at `(-1942,-1404)` and SAM at `(-1822,-1424)`. Expect spiders and blocked approaches; bring Blade Runners, Gas Filters, Nobelisks, healing supplies and lighting.

1. Build a white/graphite/violet cave portal instead of walling over the entire cave.
2. Build an eight-Constructor Silica hall sized for the Phase 4 peak; run it at **60 Silica/min** initially.
3. Build a separate Quartz Crystal hall and start at **30/min** for oscillators and exploration supplies.
4. At caterium `(-1785,-798)`, well south of the Quartz cave, build a separate **10×6-foundation node-side source shed** for eight Smelters but initially run only **15 Caterium Ingot/min**. Send its storage-free Caterium Ingot belt onward; do not place the Smelters in the Quartz campus.
5. Give Silica its only global depot here. Raw Quartz may leave on a labeled solid freight belt; it is not a fluid.
6. Mark the SAM node as a future reserve, but do not build the Tier 9 factory here.

### Build D — Gold Coast petrochem

All oil nodes are Pure under this save setting. Use the oil field around `(-2525,698)`.

1. `D-PLASTIC-R01`: six Refineries, **120 Plastic/min**, 20 each.
2. `D-RUBBER-R01`: six Refineries, **120 Rubber/min**, 20 each.
3. Route the combined **180 Heavy Oil Residue/min** to `D-EMERGENCY-FUEL-R01`.
4. Three Refineries use Residual Fuel to produce **120 Fuel/min**, 40 each.
5. Install six Fuel Generators, but put the sixth behind its own switch. During Jetpack-fuel replenishment, five generators consume 100 Fuel/min and produce **1,250 MW** while 20 Fuel/min goes to the Packager. When the Packager line is isolated, the sixth generator may run and restore the full **1,500 MW** emergency rating.
6. Plastic and Rubber each get two containers, one unique depot and an overflow sink branch.
7. Every crude/HOR/fuel pipe stays within D. Do not package fluid for export.

The Residual Fuel hall remains as a permanent black-start/emergency plant after diluted fuel is unlocked; it is not demolished.

### Expand A — phase-specific running targets

| Item | Recipe | Building | Total/min | Installed | Each/min |
|---|---|---|---:|---:|---:|
| Iron Plate | Iron Plate | Constructor | 30.370 | 3 | 10.123 |
| Wire | Iron Wire | Constructor | 436.741 | 20 | 21.837 |
| Cable | Cable | Constructor | 100 | 4 | 25 |
| Reinforced Iron Plate | Stitched Iron Plate | Assembler | 9.111 | 2 | 4.556 |
| Steel Pipe | Steel Pipe | Constructor | 120.556 | 7 | 17.222 |
| Steel Beam | Steel Beam | Constructor | 60 | 4 | 15 |
| Modular Frame | Steeled Frame | Assembler | 7.667 | 3 | 2.556 |
| Encased Industrial Beam | Encased Industrial Pipe | Assembler | 3.333 | 1 | 3.333 |
| Rotor | Steel Rotor | Assembler | 12 | 3 | 4 |
| Stator | Stator | Assembler | 13 | 3 | 4.333 |
| Motor | Motor | Assembler | 4 | 1 | 4 |
| Smart Plating | Smart Plating | Assembler | 4 | 2 | 2 |
| Versatile Framework | Versatile Framework | Assembler | 10 | 2 | 5 |
| Automated Wiring | Automated Wiring | Assembler | 5 | 2 | 2.5 |
| Copper Sheet | Copper Sheet | Constructor | 28.6 | 3 | 9.533 |
| Circuit Board | Silicon Circuit Board | Assembler | 13 | 2 | 6.5 |
| Quickwire | Quickwire | Constructor | 28 | 1 | 28 |
| Computer | Caterium Computer | Manufacturer | 2 | 1 | 2 |
| Heavy Modular Frame | Heavy Encased Frame | Manufacturer | 1 | 1 | 1 |
| Modular Engine | Modular Engine | Manufacturer | 2 | 2 | 1 |
| Adaptive Control Unit | Adaptive Control Unit | Manufacturer | 1 | 1 | 1 |

The Copper Sheet row is the existing `A-COPPER-SHEET-C01` hall: set all three Constructors to 9.533 sheets/min. They consume 57.2 of the 60 Copper Ingots/min from A; the Smelters cycle harmlessly against backpressure instead of sending the 2.8/min difference into storage.

Expand B to **480 Steel Ingot/min** with eight Solid Steel Foundries. Expand A’s Iron Ingot source to approximately **630/min**. Phase 3 project-part completion time is **250 minutes**.

### Phase 3 research, Shop and utility gate

- Clear the Mycelia tree through Gas Filter and all currently reachable inhalers. Clear Sulfur through Turbofuel, Smokeless Powder, Rifle and Cluster Nobelisk; research the Rebar and ammunition branches as their prerequisites become available, but leave Rocket Fuel and Nuclear Deterrent nodes signed for their later prerequisites.
- Advance Caterium through Programmable Splitter whenever its computer/HMF costs are ready. Advance Quartz through Explorer, Pulse Nobelisk and Radar Technology as their Crystal Oscillator costs are produced.
- Build `A-GAS-FILTER-M01`: one Manufacturer at **7.5 Gas Filters/min** with its own terminal cell and Depot. Build `D-SMOKELESS-R01` as a finished one-Refinery **research-batch** building at 20 Smokeless Powder/min using local HOR; run only enough for MAM completion and any Nobelisk variant you actually choose, then switch it off. Do not build Rifle Ammo, Iron Rebar or specialty-rebar production halls.
- Build the staged Jetpack-fuel utility at D exactly as specified below. Cluster/Pulse Nobelisk halls are optional but, if built, remain separate from the basic Nobelisk hall.
- Buy the oil/pipe cosmetics, coated-concrete/metal architecture, windows, large doors and signs used by C, D and the Mk.2 blueprints.

#### D Jetpack-fuel utility — Fuel first, Turbofuel final

Build this immediately after Fluid Packaging so the Jetpack is useful while D is still under construction:

1. `D-EMPTY-CANISTER-C01`: two Constructors making only Empty Canisters. The Packager bank makes **20/min** initially; the terminal bank makes **5/min** only until the Empty Canister cell and its sole Depot are stocked. While both run, they consume 12.5 Plastic/min; stock the canister terminal before starting the Phase 3 Project Part timer, then switch its 5/min bank off.
2. `D-JETPACK-P01`: one `48-PACKAGER-1` module making **20 Packaged Fuel/min** from 20 Fuel/min and 20 Empty Canisters/min. Its output goes to the Packaged Fuel terminal cell and sole Depot. Keep the sixth emergency Fuel Generator off while this line can accept input.
3. Give the whole chain one `JETPACK REFILL` switch. When the Packaged Fuel row is full, backpressure stops it; do not sink packaged fuel merely to keep the machines animated.

After the Sulfur MAM branch unlocks Turbofuel, perform the permanent upgrade:

4. Start the 12/min destination bank in `B-COMPACTED-COAL-A01` and belt it to D.
5. Build `D-TURBOFUEL-R01`, one separate Refinery using the default Turbofuel recipe at **15 m³/min**. It consumes 18 Fuel/min and 12 Compacted Coal/min. This fluid never leaves D.
6. Retarget `D-JETPACK-P01` to **15 Packaged Turbofuel/min** and retarget its canister bank to **15 Empty Canisters/min**. Move the output stub to a new Packaged Turbofuel terminal cell with that item’s sole Depot; retain the old Packaged Fuel cell as a finite legacy stock and never build a second uploader for it.
7. Leave five emergency generators active: 100 Fuel/min for generation plus 18/min for Turbofuel stays within the 120/min Residual Fuel supply. The spare 2/min is harmless pipe backpressure. The sixth generator remains the manual black-start boost and runs only when the Jetpack line is isolated.

Packaged Turbofuel is the final exploration fuel for this plan. At 15/min it makes a full 100-item inventory stack in 6 minutes 40 seconds, so continuous overflow production is unnecessary.

### Phase 3 acceptance gate

- Oil, HOR and fuel pipes are labeled and have flush points; no fluid leaves D.
- Plastic, rubber and silica depots exist only at their source sites.
- Every Manufacturer item has its own finished Manufacturer building.
- Packaged Turbofuel is available from D's terminal/Depot; no Rifle Ammo or Rebar factory exists merely to satisfy a researched node.
- Mk.2 refinery, blender, manufacturer and two-generator blueprints have been test-placed.
- Grid has at least 25% spare power and the emergency fuel plant can start independently.
- Routes to E, F and G are surveyed before Phase 3 is sent.

## 9. Phase 4 — Propulsion

Phase 4 is the point where the world becomes a network rather than a large starter base. Finish the source campuses first, then build the four Project Part halls.

### Alternate expedition 3

Do not commit the permanent aluminum, cooling or power shells until these are selected:

- **Sloppy Alumina** — mandatory.
- **Pure Aluminum Ingot** — mandatory.
- **Heat Exchanger** — mandatory.
- **Cooling Device** — mandatory.
- **Heavy Oil Residue** — mandatory for G.
- **Diluted Fuel** — mandatory for the permanent fuel plant.
- **Nitro Rocket Fuel** — mandatory for G.
- **Silicon High-Speed Connector** — mandatory.
- **Insulated Crystal Oscillator** — mandatory.

Finish the Sulfur MAM chain through Rocket Fuel before scanning for Nitro Rocket Fuel; otherwise the alternate is not eligible for that scan.

### Upgrade D — permanent fuel loop

Retarget the six installed Plastic Refineries to 60 Plastic/min total and expand Rubber to twelve Refineries at 240/min. Send the resulting 270 Heavy Oil Residue/min to a new Blender building using Diluted Fuel:

1. `D-DILUTED-FUEL-B01`: six Blenders installed, **540 Fuel/min total**, 90 each, consuming 270 HOR/min and 540 Water/min.
2. `D-FUEL-GEN-P02`: twenty-seven Fuel Generators, **6,750 MW gross** when the Jetpack line is full and stopped. During a Turbofuel refill, switch one generator off: twenty-six consume 520 Fuel/min, `D-TURBOFUEL-R01` consumes 18/min and the remaining 2/min becomes harmless backpressure.
3. Retain the Residual Fuel refinery hall behind a shut valve as independent emergency generation. Its normal job ends here; `D-JETPACK-P01` now refills from the Diluted Fuel header.
4. No fluid buffer tanks. The pipe network itself is the only transient fluid volume.

### Build E — aluminum wharf

Bring bauxite down by conveyor from `(-2171,112)` and `(-1774,450)`. Pump ocean water into the wharf; the water, alumina solution and recycled water never leave E.

Build one separate shell for each row:

| Item | Recipe | Machine | Phase 4 target/min | Installed | Each/min |
|---|---|---|---:|---:|---:|
| Alumina Solution | Sloppy Alumina | Refinery | 330 | 2 | 165 |
| Aluminum Scrap | Aluminum Scrap | Refinery | 495 | 2 | 247.5 |
| Aluminum Ingot | Pure Aluminum Ingot | Smelter | 247.5 | 9 | 27.5 |
| Aluminum Casing | Aluminum Casing | Constructor | 165 | 3 | 55 |
| Alclad Aluminum Sheet | Alclad Aluminum Sheet | Assembler | 30 construction reserve | 1 | 30 |

Feed the Aluminum Scrap refinery’s water output back toward the Sloppy Alumina inlet through a priority junction. Fresh water enters only after the recycled-water branch. Put a valve on fresh make-up water, not on recycled discharge. Coal is a solid import and may arrive from B or a nearby node.

### Build F — nitrogen fabrication

The resource-well core is around `(-1439,1222)`. Under All Pure, every satellite is Pure. Keep Nitrogen Gas within the F boundary.

1. `F-FUSED-FRAME-B01`: one Blender, **1.5 Fused Modular Frame/min**.
2. `F-COOLING-B01`: two Blenders using Cooling Device, **7 Cooling Systems/min**, 3.5 each.
3. Import Heavy Modular Frames, Aluminum Casings, Heat Sinks and Motors as solids.
4. Put the Fused Frame and Cooling System depots at F. Do not create duplicates at A.

### Build G — Blue Crater grid plant

G is built for power, not for exporting fuel. Start with two identical Nitro Rocket Fuel lines. Each line is:

- 50 Heavy Oil Residue/min from the Heavy Oil Residue alternate;
- 100 Diluted Fuel/min from one Blender;
- 150 Nitro Rocket Fuel/min from one Blender;
- 75 Nitrogen Gas/min, 100 Sulfur/min and 50 Coal/min;
- 36 Fuel Generators consuming 150 Rocket Fuel/min.

Two lines feed **72 Fuel Generators / 18,000 MW gross**. Build them as two separately switched mirrored districts. Compacted Coal and Polymer Resin by-products each receive their own terminal cell, single depot and overflow sink. At two lines the by-products are 50 Compacted Coal/min and 50 Polymer Resin/min; the four-line Phase 5 plant doubles both. Oil, water, nitrogen, fuel and rocket fuel remain inside G.

Place at least 50 Power Storages on an adjacent finished terrace. Connect G to the world through a Priority Power Switch and keep its extractors/blenders on a protected restart circuit.

### Build H stage 1 — Phase 4 copper

Before Tier 9, build the first third of the Dune Copper Works:

1. Twelve Copper Alloy Foundries for **1,200 Copper Ingot/min**, 100 each.
2. Mine 600 Copper Ore/min and 300 Iron Ore/min from the marked Dune cluster.
3. Build one Copper Powder Constructor building with two Constructors, **100 Copper Powder/min**, 50 each.
4. Provide two Mk.5 storage-free dispatch lanes for Copper Ingot. Switch off A's two Copper Smelters when H starts dispatching. H now supplies `A-COPPER-SHEET-C01` over the commodity bus. Keep the finished A smelter hall as a powered-off black-start reserve; do not demolish it.
5. Finish the full-width terminal shell now, leaving two dark expansion bays for Phase 5.

### Expand A, B, B2 and C for the Phase 4 run

Source targets:

| Source output | Running target |
|---|---:|
| Iron Ingot at A | 1,544.795/min |
| Steel Ingot at B | 820.833/min |
| Concrete at B2 | 180/min |
| Silica at C | 300/min |
| Caterium Ingot at C annex | 120/min |
| Copper Ingot at H | 1,200/min before the final phase |
| Plastic at D | 60/min required; retain the 120/min building |
| Rubber at D | 240/min |

The 820.833 Steel Ingot/min target uses fourteen Solid Steel Foundries at **58.631/min each**, consuming 547.222 Iron Ingot/min and the same Coal rate. Use two Mk.5 Steel dispatch lanes because one cannot carry more than 780/min; divide the Foundries into two equal-rate lane banks. A's 1,544.795 Iron Ingot/min target uses 52 Smelters at **29.708/min each**. Expand into finished node-edge Smelter sheds beside the three active Pure Mk.3 iron miners, which run at 514.932, 514.932 and 514.931/min. Keep their feeds and storage-free Ingot dispatch lanes separate until the component-campus arrival throats.

These raised source targets fund explicit Phase 4 construction reserves while the Elevator chain runs: **20 Iron Plate/min, 60 Wire/min, 30 Cable/min, 20 Steel Pipe/min, 15 Steel Beam/min and 30 Concrete/min** to their terminal rows. The extra Cable bank consumes another 60 Wire/min, so the Wire hall target rises by 120/min in total. Switch a reserve bank off only when its terminal and Depot are full; never divert ingots into storage.

### Phase 4 production schedule

These are phase-specific running targets. Existing buildings remain; add machines to reach the installed count and set the exact per-machine output.

#### Constructor buildings

| Item | Recipe | Total/min | Installed | Each/min |
|---|---|---:|---:|---:|
| Iron Plate | Iron Plate | 74.815 | 4 | 18.704 |
| Wire | Iron Wire | 1,593.630 | 71 | 22.446 |
| Cable | Cable | 430 | 15 | 28.667 |
| Steel Pipe | Steel Pipe | 457.222 | 23 | 19.879 |
| Steel Beam | Steel Beam | 45 | 3 | 15 |
| Copper Sheet | Copper Sheet | 261.9 | 27 | 9.7 |
| Quickwire | Quickwire | 596 | 10 | 59.6 |
| Aluminum Casing | Aluminum Casing | 165 | 3 | 55 |
| Quartz Crystal | Quartz Crystal | 15 | 1 | 15 |
| Copper Powder | Copper Powder | 100 | 2 | 50 |

#### Assembler buildings

| Item | Recipe | Total/min | Installed | Each/min |
|---|---|---:|---:|---:|
| Reinforced Iron Plate | Stitched Iron Plate | 16.444 | 3 | 5.481 |
| Modular Frame | Steeled Frame | 17.167 | 6 | 2.861 |
| Encased Industrial Beam | Encased Industrial Pipe | 18.333 | 5 | 3.667 |
| Rotor | Steel Rotor | 30 | 6 | 5 |
| Stator | Stator | 48 | 10 | 4.8 |
| Motor | Motor | 12.5 | 3 | 4.167 |
| Smart Plating | Smart Plating | 5 | 3 | 1.667 |
| Versatile Framework | Versatile Framework | 5 | 1 | 5 |
| Automated Wiring | Automated Wiring | 20 | 8 | 2.5 |
| Circuit Board | Silicon Circuit Board | 102 | 9 | 11.333 |
| AI Limiter | AI Limiter | 7.5 | 2 | 3.75 |
| Heat Sink | Heat Exchanger | 14 | 2 | 7 |
| Electromagnetic Control Rod | Default | 2 | 1 | 2 |
| Pressure Conversion Cube | Default | 0.5 | 1 | 0.5 |

#### Manufacturer and specialist buildings

| Item | Recipe | Machine | Total/min | Installed | Each/min |
|---|---|---|---:|---:|---:|
| Computer | Caterium Computer | Manufacturer | 19 | 6 | 3.167 |
| Heavy Modular Frame | Heavy Encased Frame | Manufacturer | 5.5 | 2 | 2.75 |
| Supercomputer | Default | Manufacturer | 2 | 2 | 1 |
| High-Speed Connector | Silicon High-Speed Connector | Manufacturer | 6 | 2 | 3 |
| Crystal Oscillator | Insulated Crystal Oscillator | Manufacturer | 1.5 | 1 | 1.5 |
| Radio Control Unit | Default | Manufacturer | 3 | 2 | 1.5 |
| Modular Engine | Default | Manufacturer | 2.5 | 3 | 0.833 |
| Adaptive Control Unit | Default | Manufacturer | 4 | 4 | 1 |
| Turbo Motor | Default | Manufacturer | 1 | 1 | 1 |
| Cooling System | Cooling Device | Blender | 7 | 2 | 3.5 |
| Fused Modular Frame | Default | Blender | 1.5 | 1 | 1.5 |

### The four Phase 4 halls

Build these last, close to the Elevator-side project terminal at A:

| Project item | Machine | Total/min | Installed | Each/min | Delivery time |
|---|---|---:|---:|---:|---:|
| Assembly Director System | Assembler | 2 | 3 | 0.667 | 250 min |
| Magnetic Field Generator | Assembler | 2 | 2 | 1 | 250 min |
| Thermal Propulsion Rocket | Manufacturer | 1 | 1 | 1 | 250 min |
| Nuclear Pasta | Particle Accelerator | 0.5 | 1 | 0.5 | 200 min |

Each gets one container, its sole depot, overflow sink path and a dedicated Elevator belt. The Phase 4 delivery completes in **250 minutes**.

### Phase 4 research, Shop and utility gate

- Finish the Sulfur chain through Rocket Fuel before scanning for Nitro Rocket Fuel. Complete Caterium through Priority Power Switch/Programmable Splitter and Quartz through Radar Technology and Priority Merger when their prerequisites are available.
- Clear every remaining non-Tier-9 Nutrients, Mycelia, Alien Megafauna and Power Slug node. Buy Depot capacity/upload upgrades only after reserving one Mercer Sphere for every planned non-ingot uploader.
- Complete the otherwise-unused weapon research without permanent weapon factories. Make the exact 1,000 Rifle Ammo needed by the Turbo Rifle Ammo MAM node at the Equipment Workshop from the research-batch Smokeless Powder, then submit it; do not build an ammo hall. Submit 50 Packaged Turbofuel from D and 100 Aluminum Casing from E with it.
- Clear Nuclear Deterrent Development after Nuclear Power unlocks. At E, build a finished `E-SULFURIC-ACID-R01` one-Refinery research annex and `E-ENC-URANIUM-B01` one-Blender annex. Bring in only 20 Uranium, run the standard Encased Uranium Cell recipe long enough to make the required 10 cells, and send them through their terminal cell and sole Depot; all Sulfuric Acid remains inside E and no nuclear waste is created. Submit those cells with 500 Nobelisks and 100 AI Limiters, then mothball the two annexes.
- Add one Iodine-Infused Filter Manufacturer after Nuclear Power unlocks. Do not add Turbo Rifle Ammo, packaged Rocket Fuel or specialty-rebar halls: your permanent exploration loadout remains Nobelisks, filters and Packaged Turbofuel.
- Buy the rail station/platform set, road markings, frame foundations, lights and the final facade pieces used at E/F/G/H. Clear remaining functional Shop unlocks before cosmetic statues.

### Phase 4 acceptance gate

- E’s recycled-water loop survives a cold restart without backing up.
- F exports solids only; no nitrogen pipe crosses the site boundary.
- G runs both 9 GW districts independently and has at least 50 charged Power Storages.
- H’s Copper Ingot dispatch has no storage or Depot, and A’s backup Copper Smelters are off.
- Mk.5 belts are split so no lane exceeds 780/min.
- Particle Accelerator power variation cannot trip the grid.
- All four project buildings and the full terminal are architecturally complete.
- Every non-Tier-9 MAM node is complete, including the weapon nodes and Nuclear Deterrent Development, even though no permanent Rifle/Rebar production was built.

## 10. Phase 5 — Assembly

Unlock Tier 9 in this order:

1. Matter Conversion.
2. Quantum Encoding.
3. Peak Efficiency for Mk.6 belts.
4. Blueprint Designer Mk.3.
5. Spatial Energy Regulation only when convenient; portals are not required for the factory plan.

### Alternate expedition 4

Select **Pink Diamonds** before building the permanent Diamonds hall. It uses Coal and Quartz Crystal and avoids moving oil to H or building a much larger default-Coal accelerator line.

At this point all required alternates are:

| Stage | Plan-critical recipes |
|---|---|
| Phase 1 | Iron Wire, Stitched Iron Plate |
| Phase 2 | Solid Steel Ingot, Steel Rotor, Steeled Frame, Encased Industrial Pipe, Copper Alloy Ingot |
| Phase 3 | Silicon Circuit Board, Caterium Computer, Heavy Encased Frame |
| Phase 4 | Silicon High-Speed Connector, Insulated Crystal Oscillator, Sloppy Alumina, Pure Aluminum Ingot, Heat Exchanger, Cooling Device, Heavy Oil Residue, Diluted Fuel, Nitro Rocket Fuel |
| Phase 5 | Pink Diamonds |

That is 20 plan-critical selections. Cast Screws is optional and is not counted. The hunt is intentionally split across four expeditions: search only after each recipe’s milestone/MAM prerequisite is complete, and keep building source shells, utility halls and routes while scans run. Do not hold an entire phase open for an optional recipe.

### Expand H — final Copper and Diamonds works

Build the Phase 5 expansion as finished parallel wings:

1. Expand Copper Alloy Ingot to **36 Foundries / 3,600 Copper Ingot/min**, 100 each.
2. Mine four Pure copper nodes at **450 ore/min each** and two Pure iron nodes at **450 ore/min each**.
3. Upgrade the terminal to three Mk.6 output lanes at 1,200/min each.
4. Expand Copper Powder to **10 Constructors / 500/min**, 50 each.
5. Expand C's single Quartz Crystal building to fourteen Constructors at **299 Quartz Crystal/min**. The H bank uses eleven Constructors at 21.273/min each for 234/min; the Q bank uses three at 21.667/min each for 65/min. It consumes 498.333 Raw Quartz/min, and each destination gets its own belt.
6. `H-PINK-DIAMOND-V01`: six Converters, **78 Diamonds/min**. The Dark Matter Crystal bank uses five at 13.6/min each for 68/min; the Time Crystal bank uses one at 10/min. Keep the two destination belts separate.
7. Supply the Diamond hall with 624 Coal/min and 234 Quartz Crystal/min.

Because Pink Diamonds consumes 8 Coal per Diamond, one Pure Mk.3 coal miner at a target of 624/min is sufficient and stays within a Mk.5/Mk.6 belt. The 78/min is fully used: 68 Diamonds/min becomes 68 Dark Matter Crystals/min at Q and 10 Diamonds/min becomes 5 Time Crystals/min.

### Expand commodity sources to final targets

| Commodity site | Final operation |
|---|---|
| A Iron | 48 Smelters, 1,440 Iron Ingot/min, two lanes |
| B Steel | 10 Solid Steel Foundries, 600 Steel Ingot/min; 400 Iron Ingot + 400 Coal/min |
| B2 Concrete | 16 Constructors, 240 Concrete/min; 720 Limestone/min |
| C Silica/Crystal | 8 Constructors, 240 Silica/min at 30 each from 144 Raw Quartz/min; separate 14-Constructor hall, 299 Quartz Crystal/min from 498.333 Raw Quartz/min |
| D Plastic/Rubber | 6 installed Plastic Refineries at 10 each for 60/min; 12 Rubber Refineries at 20 each for 240/min |
| E Aluminum | 3 Sloppy Alumina Refineries at 231.333 each for 694 solution/min; 3 Scrap Refineries at 347 each for 1,041 scrap/min; 18 Smelters at 28.917 each for 520.5 ingot/min; 6 Casing Constructors at 54.833 each for 329/min |
| H Copper | 36 Copper Alloy Foundries, 3,600 Copper Ingot/min, three Mk.6 lanes |

The final D plastic/rubber rates create 270 Heavy Oil Residue/min. Six Diluted Fuel Blenders turn it into 540 Fuel/min using 540 Water/min, enough for 27 ordinary Fuel Generators. Keep this as useful west-grid generation.

### Final extraction ledger

This is the steady-state extraction needed by the completion factory and its power system. It separates ore used to make bus commodities from raw ore consumed locally by a source recipe.

| Site | Resource target | Extraction plan |
|---|---:|---|
| A | 1,440 Iron Ore/min | Three Pure Mk.3 miners at 480 each; smelt to 1,440 Iron Ingot/min |
| B | 400 Coal/min | One Pure Mk.3 miner at 400; combine with 400 imported Iron Ingot/min for 600 Steel Ingot/min |
| B2 | 720 Limestone/min | One Pure Mk.3 miner at 720; this is a deliberate node overclock and fits one Mk.5 belt |
| C | 642.333 Raw Quartz/min | Two cave miners at 321.167 each; 144 becomes Silica and 498.333 becomes Quartz Crystal |
| C annex | 333 Caterium Ore/min | One Pure Mk.3 miner at 333; smelt to 111 Caterium Ingot/min |
| D | 450 Crude Oil/min | Two Pure Oil Extractors at 225 each; direct Plastic/Rubber recipes |
| D | 540 Water/min | Five Water Extractors installed at 108 each for Diluted Fuel |
| E | 578.333 Bauxite/min | One Pure Mk.3 miner at 578.333; belt remains below 780/min |
| E | 347 Coal/min | One local/import belt for Aluminum Scrap |
| E | 231.333 fresh Water/min | Net make-up after recycling 347 Water/min from scrap production |
| F | 171.5 Nitrogen Gas/min | Set well extractors to a combined 171.5; no gas leaves F |
| G | 150 Crude, 400 Water, 300 N₂, 400 Sulfur, 200 Coal/min | Four Nitro lines producing 600 Rocket Fuel/min for 144 generators |
| H | 1,800 Copper Ore/min | Four Pure Mk.3 miners at 450 each |
| H | 900 Iron Ore/min | Two Pure Mk.3 miners at 450 each for Copper Alloy Ingot |
| H | 624 Coal/min | One Pure Mk.3 miner at 624 for Pink Diamonds |
| Q | 723.333 SAM/min | One Pure Mk.3 miner at the Q node; this is the deliberate Tier 9 node overclock |
| Q | 10 Water/min | One local extractor feeding only Biochemical Sculptor production |

No production target in the specialist plan requires a production-machine overclock. Three commonly misread values are all under 100%: a Pure Oil node produces 240 m³/min before overclocking, so 225 is 93.75%; one EPM Converter produces 200/min, so 125 is 62.5%; and one standard Dark Matter Crystal accelerator produces 30/min, while the highest target in the destination-bank layout is 20/min. Extraction overclocks remain limited to the explicitly named node-capped miners.

Final long-distance commodity lanes:

| Commodity | Rate | Belt allocation |
|---|---:|---|
| Iron Ingot | 1,440/min | Two Mk.6 lanes at 720 each |
| Copper Ingot | 3,600/min | Three Mk.6 lanes at 1,200 each |
| Steel Ingot | 600/min | One Mk.5 or Mk.6 lane |
| Plastic | 60/min | One lane |
| Rubber | 240/min | One lane |
| Concrete | 240/min | One lane |
| Silica | 240/min | One lane |

At the Phase 4 peak, Wire needs two Mk.5 terminal lanes because its target is 1,473.63/min. Do not merge those lanes into one belt before their consumers branch away.

### Extract SAM

Final net SAM demand is **723.333/min** after the 125 Dark Matter Residue/min returned by the three Quantum Encoders is recycled. Use the all-Pure Mk.3 SAM node at Q, `(-1436,207)`, and set the miner’s output target to **723.333/min**.

This is the deliberate extraction overclock: one node and one Mk.5 belt can carry the target, so overclocking avoids opening a second 1.6 km SAM route. Leave C’s cave node at `(-1822,-1424)` marked as reserve. Reanimated SAM exists only at Q and therefore has one terminal and one depot.

### Build Q — quantum campus

Q should be a set of low black/violet halls around a central white-lit courtyard, not one tower. Put the fluid buildings on the lake side and dry production on the bus side.

Build in this order:

1. `Q-REANIMATED-SAM-C01`: seven Constructors, **180.833 Reanimated SAM/min**. The Ficsite bank uses three at 24.444/min each for 73.333/min; the fresh DMR bank uses four at 26.875/min each for 107.5/min. Keep their output belts separate.
2. `Q-FICSITE-INGOT-V01`: two Converters using Ficsite Ingot (Iron), **18.333/min**, 9.167/min each. Ficsite Ingots go directly to the Trigon hall; they are never stored.
3. `Q-FICSITE-TRIGON-C01`: three Constructors, **55/min**. One supplies 15/min to Neural-Quantum Processors; two supply 20/min each to Biochemical Sculptors. These are separate destination banks.
4. `Q-EPM-V01`: one Converter, **125 Excited Photonic Matter/min**.
5. `Q-DMR-V01`: three Converters, **215 Dark Matter Residue/min**, 71.667/min each into one common fluid header. The encoders return the remaining 125/min needed by that header.
6. `Q-TIME-CRYSTAL-V01`: one Converter, **5 Time Crystal/min**.
7. `Q-DARK-MATTER-PA01`: four Particle Accelerators, **68 Dark Matter Crystal/min**, divided by destination: one at 18/min for Superposition Oscillators, one at 10/min for Singularity Cells, and two at 20/min each for Ballistic Warp Drives. The 40/min bank merges only its equal-rate pair; the other two outputs leave on their own belts.
8. `Q-SUPERPOSITION-QE01`: one Quantum Encoder, **3 Superposition Oscillator/min**.
9. `Q-NEURAL-QE01`: one Quantum Encoder, **1 Neural-Quantum Processor/min**.
10. `Q-AI-SERVER-QE01`: one Quantum Encoder, **1 AI Expansion Server/min**.
11. `Q-BIOCHEM-B01`: one Blender, **2 Biochemical Sculptor/min**. Its 10 m³/min water comes from the local lake and goes nowhere else.
12. `Q-SAM-FLUCT-M01`: one Manufacturer, **5 SAM Fluctuator/min while infrastructure stock is needed**. It consumes 30 Reanimated SAM, 25 Wire and 15 Steel Pipe/min. This is a utility hall, not a Ballistic Warp Drive input. Normally switch it off once its terminal and Depot are stocked. If it must run concurrently with the launch factory, raise the SAM miner temporarily from 723.333 to 843.333/min and use a Mk.6 belt, or pause part of the DMR bank while replenishing.

Quantum reconciliation:

| Balance | Exact use |
|---|---|
| 180.833 Reanimated SAM/min | 73.333 for 18.333 Ficsite Ingot + 107.5 for 215 DMR |
| 55 Ficsite Trigon/min | 15 for 1 Neural-Quantum Processor + 40 for 2 Biochemical Sculptor |
| 125 EPM/min | 75 for Superposition Oscillator + 25 for NQP + 25 for AI Server |
| 340 DMR/min into Dark Matter Crystals | 215 fresh Converter output + 125 returned by the three Encoders |
| 68 Dark Matter Crystal/min | 18 for Superposition Oscillator + 10 for Singularity Cells + 40 for Ballistic Warp Drive |
| 78 Diamonds/min from H | 68 for Dark Matter Crystal + 10 for 5 Time Crystal |

The steady-state SAM figure is therefore deliberate: `180.833 × 4 = 723.333 SAM/min`. The separate SAM Fluctuator utility mode is excluded from the 500-minute launch run unless the miner is temporarily raised as described above.

Dark Matter Residue and Excited Photonic Matter are site-local fluids. Give each pipe network a flush junction but no Fluid Buffer. Dark Matter Residue by-product from Quantum Encoders must rejoin the local DMR header with priority over converter output; it never reaches a freight terminal.

### Final conventional-component running targets

Do not demolish the larger Phase 4 halls. Keep the installed machines and retarget them to the Phase 5 totals below; unused capacity is deliberate future margin.

#### Constructors and Smelters

| Item | Recipe | Total/min | Installed | Each/min |
|---|---|---:|---:|---:|
| Iron Plate | Iron Plate | 96.111 | 5 | 19.222 |
| Wire | Iron Wire | 724.222 | 33 of the existing hall | 21.946 |
| Cable | Cable | 100 | 4 | 25 |
| Steel Pipe | Steel Pipe | 342.667 | 18 | 19.037 |
| Steel Beam | Steel Beam | 15 | 1 | 15 |
| Copper Sheet | Copper Sheet | 205.4 | 21 | 9.781 |
| Quickwire | Quickwire | 555 | 10 | 55.5 |
| Caterium Ingot | Default | 111 | 8 Smelters | 13.875 |
| Quartz Crystal at C | Default | 299 | 14 | 21.357 |
| Aluminum Casing | Default | 329 | 6 | 54.833 |
| Copper Powder | Default | 500 | 10 | 50 |

#### Assemblers

| Item | Recipe | Total/min | Installed | Each/min |
|---|---|---:|---:|---:|
| Reinforced Iron Plate | Stitched Iron Plate | 13.833 | 3 | 4.611 |
| Modular Frame | Steeled Frame | 13.25 | 5 | 2.65 |
| Encased Industrial Beam | Encased Industrial Pipe | 15 | 4 | 3.75 |
| Rotor | Steel Rotor | 30 | 6 | 5 |
| Stator | Default | 31.5 | 7 | 4.5 |
| Motor | Default | 12.5 | 3 | 4.167 |
| Smart Plating | Default | 5 | 3 | 1.667 |
| Versatile Framework | Default | 2.5 | 1 | 2.5 |
| Automated Wiring | Default | 5 | 2 | 2.5 |
| Circuit Board | Silicon Circuit Board | 69.5 | 6 | 11.583 |
| AI Limiter | Default | 10.5 | 3 | 3.5 |
| Heat Sink | Heat Exchanger | 14 | 2 | 7 |
| Electromagnetic Control Rod | Default | 1 | 1 | 1 |
| Alclad Aluminum Sheet | Default | 27 | 1 | 27 |
| Pressure Conversion Cube | Default | 2.5 | 3 | 0.833 |

#### Manufacturers and Blenders

| Item | Recipe | Total/min | Installed | Each/min |
|---|---|---:|---:|---:|
| Computer | Caterium Computer | 15 | 4 | 3.75 |
| Heavy Modular Frame | Heavy Encased Frame | 4.5 | 2 | 2.25 |
| Supercomputer | Default | 1.5 | 1 | 1.5 |
| High-Speed Connector | Silicon HSC | 4.5 | 2 | 2.25 |
| Crystal Oscillator | Insulated Crystal Oscillator | 6.5 | 4 | 1.625 |
| Radio Control Unit | Default | 7 | 3 | 2.333 |
| Fused Modular Frame | Default | 3.5 | 3 Blenders | 1.167 |
| Modular Engine | Default | 2.5 | 3 | 0.833 |
| Adaptive Control Unit | Default | 1 | 1 | 1 |
| Turbo Motor | Default | 1 | 1 | 1 |
| Cooling System | Cooling Device | 7 | 2 Blenders | 3.5 |
| Singularity Cell | Default | 5 | 1 | 5 |

Reuse the completed Phase 4 Project buildings as precursor halls during Phase 5:

| Precursor | Final running target | Active machines | Used by |
|---|---:|---:|---|
| Assembly Director System | 0.5/min | 1 Assembler | Biochemical Sculptor |
| Magnetic Field Generator | 1/min | 1 Assembler | AI Expansion Server |
| Thermal Propulsion Rocket | 1/min | 1 Manufacturer | Ballistic Warp Drive |

Leave the other installed Phase 4 machines in those finished halls powered off. Their depots and terminal cells remain the only ones for these items.

### Final Project Assembly halls

| Delivery item | Total/min delivered | Installed | Each/min | Required | Completion |
|---|---:|---:|---:|---:|---:|
| Nuclear Pasta | 2 delivered + 0.5 for Singularity Cells | 5 Particle Accelerators | 0.5 | 1,000 + 100 internal | 500 min |
| Biochemical Sculptor | 2 | 1 Blender | 2 | 1,000 | 500 min |
| AI Expansion Server | 1 | 1 Quantum Encoder | 1 | 256 | 256 min |
| Ballistic Warp Drive | 1 | 1 Manufacturer | 1 | 200 | 200 min |

The Phase 5 pacing items are Nuclear Pasta and Biochemical Sculptor. Both complete after **500 minutes (8 h 20 m)** of stable production.

### Phase 5 power expansion

Before enabling the full quantum campus:

1. Duplicate G’s two-line district to reach **144 Fuel Generators / 36 GW** at G.
2. Keep D’s approximately 6.75 GW of west-grid fuel generation and B’s 1.2 GW coal station.
3. Expand to at least 100 charged Power Storages.
4. Put Particle Accelerators, Quantum Encoders, Converters and portals on separate priority groups.
5. Commission one specialist hall at a time while watching maximum consumption, not only current consumption.

The resulting gross grid is roughly 44 GW before geothermal or Alien Power Augmenters. This is intentionally conservative for fluctuating Particle Accelerator and Quantum Encoder loads.

Xbox performance checkpoint: commission G in 36-generator blocks and walk the busiest A/Q areas after each block. If entity/render load becomes uncomfortable, the approved console exception is **18 Fuel Generators per Nitro line at a 500 MW output target each** instead of 36 at 250 MW. Four lines then use 72 generators for the same 36 GW and the same 600 Rocket Fuel/min, but require two Power Shards per generator. Use this only after Synthetic Power Shards are available or if you already own enough shards; the default unsharded layout remains correct when performance is smooth.

### Phase 5 research, Shop and utility gate

- Finish Matter Conversion, Quantum Encoding, Peak Efficiency and FICSIT Blueprints Mk.3, then clear every newly reachable Alien Technology and Power Slug node. Synthetic Power Shards may use their own Quantum Encoder building; never share one of the three production Encoder halls.
- `Q-SAM-FLUCT-M01` is the permanent utility source for uploader, Converter and portal construction. Refill its terminal before the 500-minute launch run, then switch it off so the documented SAM balance remains exact.
- Audit the MAM for zero unfinished nonseasonal nodes, including Nuclear Deterrent Development and every weapon branch. Nuclear **power production** remains optional; its research does not. The small E research annex supplies the only Encased Uranium Cells this plan requires, so no uranium fuel or waste-processing campus is needed.
- Spend surplus coupons to clear all remaining nonseasonal AWESOME Shop functional unlocks. Statues are now allowed.
- Audit the artifact signs: every non-ingot item produced for building has one uploader at its production site; every ingot has none; all installed Somersloops are recorded. The core launch must run once at the documented unslooped rates before optional amplification.

### Final acceptance and launch

Do not press the Phase 5 launch button until:

- all seven commodities arrive through their named dispatch/bus lanes; Iron, Copper and Steel Ingots pass storage-free while Plastic, Rubber, Concrete and Silica use terminal rows;
- no fluid crosses D, E, F, G or Q site boundaries;
- every stored component has exactly one Dimensional Depot uploader in the world and no ingot has one;
- every stored component has a destination-sized terminal bank and working route to its home terminal, every ingot has a destination-sized consumer/bus lane, and neighbouring consumers use their own destination-sized belts;
- every hall contains one recipe item and one machine type;
- all overflow routes reach a powered sink;
- the grid survives disabling and restarting each remote site;
- every site has its assigned color identity, finished shell, lighting, signage, pedestrian access and a safe route;
- all four Phase 5 delivery containers are full or connected to the Elevator;
- you have taken one last walk through the completed campus before saving the day.

## 11. Architecture rules that keep the world coherent

Use a 70/20/10 visual rule at every site: 70% neutral structural material, 20% site color, 10% safety/lighting accent. The site color changes; the construction grammar does not.

Common grammar:

- 4 m structural bay rhythm.
- Dark concrete plinth one wall high.
- Vertical column every four foundations.
- Windows only on machine/service sides, not the belt-basement side.
- One continuous roof datum per machine type.
- Terminal facades use the same white sign band everywhere.
- Yellow means danger/maintenance at every site, never site identity.
- Blue floor stripe means inbound, orange means outbound, violet means Project/quantum.

Suggested custom colors are references, not promises about which mesh region a machine paints:

| Site | Primary reference | Secondary reference |
|---|---|---|
| A Rocky | warm white `#D7D2C7` | orange `#D96B27` |
| B Steel | charcoal `#25282B` | safety yellow `#C9A227` |
| C Quartz | white `#E5E7EB` | violet `#6D4BB8` |
| D Oil | navy `#1E3A5F` | cyan `#23B5D3` |
| E Aluminum | silver `#C7CED6` | ice blue `#4B83A6` |
| F Nitrogen | teal `#0F766E` | white `#E8F0F2` |
| G Power | black `#17191C` | deep red `#8B1E1E` |
| H Copper | oxidized copper `#A95A36` | sand `#E6C89C` |
| Q Quantum | black `#17131F` | violet `#9B5DE5` |

On Xbox, choose the nearest saved swatch by eye if hexadecimal entry is awkward. Test a magenta/cyan custom swatch on one wall and one machine first: paint masks differ by asset, so “primary” and “secondary” do not reliably mean body and frame.

## 12. Wrong-direction warnings

Stop and correct course if any of these happen:

- You are about to put a second item recipe in an existing production building.
- A stored component has no branch to its assigned terminal, Depot and overflow sink.
- An ingot enters a container, storage row or Dimensional Depot uploader instead of flowing directly to a consumer/bus lane.
- A terminal is unnecessarily placed in series between two neighbouring production halls, adding a storage dependency to a local process.
- A normal or Smart Splitter is expected to hold arbitrary exact `x/y/z` destination rates; use target-clocked machine banks when the rates matter.
- Machines merging onto one belt or pipe have unequal output targets even though dividing the bank target evenly would work.
- You place a container beside a machine “just for startup”.
- You place a second depot uploader for an item because another site also uses it.
- A pipe crosses a site boundary, even if packaging the fluid feels inconvenient.
- You start a Hard Drive scan before the target recipe’s milestone or MAM prerequisite is unlocked.
- A Mk.5 belt is asked to carry more than 780/min or a Mk.6 more than 1,200/min.
- You overclock production machinery to hide a missing hall rather than because extraction is node-capped.
- You send a Space Elevator phase while a required factory is still an open platform or temporary manifold.
- You build a permanent Rifle Ammo or Rebar hall solely because its MAM node was researched, or sink Packaged Turbofuel continuously after its refill row is full.
- You begin hand-building a long curving highway on Xbox when a straight viaduct, natural route or simple push-pull rail line would do.
- You build Copper Powder anywhere except H; the Phase 5 copper volume makes that an expensive logistics mistake.
- You build Reanimated SAM anywhere except Q; one overclocked Pure node already supplies the final net target.

## 13. Phase gate card

Print or copy this short checklist to signs beside the Elevator:

| Gate | Required before delivery |
|---|---|
| P1 | A permanent, terminal/dispatch/sink standard proven, Tier 0–2 and reachable MAM nodes cleared, Phase 1 utility yard, biomass black start |
| P2 | B/B2 complete, 1.2 GW coal, Mk.1 blueprints, ingot dispatch/Concrete ownership fixed, Phase 2 MAM/Shop/utility gate cleared |
| P3 | C/D complete, oil emergency power, Mk.2 blueprints, electronics/manufacturer district and filter/Jetpack-fuel utilities finished, research gate cleared |
| P4 | E/F/G/H-stage-1 complete, 18 GW rocket-fuel plant, 50 storage units, all four project halls, construction reserves and research gate complete |
| P5 | H/Q complete, G at 36 GW, 100 storage units, all Depot/ingot/artifact ownership audited, MAM/Shop gate cleared, launch walk-through |

## Sources and version notes

- [Game Modes — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Game_Modes)
- [Resource Nodes — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Resource_Node)
- [Space Elevator — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Space_Elevator)
- [Recipes — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Recipes)
- [Blueprints — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Blueprints)
- [Conveyor Belts — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Conveyor_Belts)
- [MAM — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/MAM)
- [Jetpack — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Jetpack)
- [Packager — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Packager)
- [Packaged Fuel — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Packaged_Fuel)
- [Packaged Turbofuel — Official Satisfactory Wiki](https://satisfactory.wiki.gg/wiki/Packaged_Turbofuel)
- [Pioneer Almanac Resource Node Browser](https://pioneeralmanac.com/tools/nodes/)

The recipe calculations in this guide were derived from the current official wiki recipe data checked for the 1.2 branch. Any game patch that changes recipes, belt capacity, generator fuel use or Project Assembly costs should trigger a recalculation before altering a built site.
