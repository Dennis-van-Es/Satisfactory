# Prompts

Reusable prompts for the other AI (ChatGPT, which has its own Satisfactory project
and knows the game's parts). Fill in the bracketed parts per site.

Always review what comes back. It has caught real geometry errors and it has also
given confidently wrong advice. Check anything that changes a machine count or a
footprint.

---

## 1. Building design brief

Use this to get buildable interiors: machine layout, belt routing, wall openings,
parts lists. This is the version that worked; swap the site block for whichever site
you're building.

```
I'm building a Satisfactory factory town and I want you to design the actual
buildings — interior machine layout, belt routing, wall openings, and the build
parts to use. Vanilla 1.0, Xbox, controller only, no mods.

TECH AVAILABLE
[Tier reached]. [Best belt mark and rate]. [Any blueprint designer available].
Alt recipes unlocked: [list].

DESIGN RULES I'M WORKING TO
- One item per building, one machine type per building. No mixed floors.
- Buildings store nothing. No input buffers, no output containers. Belts run to a
  central depot terminal; a row of containers with Dimensional Depots on top is the
  only storage.
- Everything sits on a thin concrete deck: 1 m foundations on 4 m pillars, leaving
  about 3 m of service void underneath for belts and pipes.
- 16 m (2 foundation) roadways between rows carry the parts bus.
- Where a flow exceeds one belt lane, it goes point-to-point to its consumer instead
  of onto the bus. Buildings that feed each other heavily sit in the same column so
  the link drops straight across the roadway.
- Machines are set by target output, not clock percent.
- Machines in a single row along the long axis, not opposed banks — a 4-foundation
  wide shed cannot fit three machines across with belt lanes either side.

SITE LAYOUT (foundations, 8 m each; +X east, +Y south from the deck's NW corner)
[paste the rows and plot positions]

BUILDING CONTENTS
[per building: machine type, count, recipe, target output each, total]

BELT CONNECTIONS
[vertical links with rates, then along-the-row links, then what runs the bus]

FEEDS FROM OFF-DECK
[ingot lanes and their rates, and which buildings tap which lane]

WHAT I WANT FROM YOU
For each building: interior machine arrangement with spacing, whether to manifold or
load-balance the inputs, exactly where belts pierce which wall and at what height,
where lifts go, and how the output leaves. Then the shell — foundations, walls, roof,
doors — as an actual parts list I can place, and a colour and material scheme that
reads consistently across all of them. Flag anything that won't physically fit in the
footprint I've given, and tell me the footprint it does need instead.
```

**Push back on:** load-balancing suggestions (manifolds are far less fiddly on a
controller and every line runs at full rate once primed), and anything that reduces
generator count for "load sharing" reasons.

---

## 2. Town aerial render

```
Render an in-game screenshot of [site name] from my plan. Satisfactory visual
language: UE5, FICSIT palette, corrugated steel and concrete Walls, Foundations
8m x 1m on 4m Pillars, exposed Conveyor Belts on standard supports, FICSIT orange
accents. Late afternoon in [biome], long shadows, no HUD.

Deck: [X x Y] Foundations, thin slab on Pillars with about 3m clearance underneath.
Underdeck Conveyor Belts and Lifts visible in the shadow. Hazard-striped edges,
railings along every edge.

[Row by row: what stands in each, with foundation positions]

Depot Terminal: [N] x 2 Foundations, two Wall courses, fully enclosed except the
west end, no windows. Bus Belts entering the north Wall through Wall Conveyor Holes,
one Belt per item leaving the south Wall directly into the Storage Containers, a
Sushi Belt exiting the east end at roof height. One large FICSIT sign on the long
blank wall.

Container row: Storage Containers outdoors at 8m pitch, Dimensional Depot Uploader
snapped on each, no shell, generous aisle in front.

Biomass house: open-topped, Burners venting above the wall line.

Belt runs: parts bus along the roadways; vertical drops between sheds in the same
column; [name the double-lane link]; [name any single dedicated run].

Shell language: natural grey concrete deck and pillars, charcoal lower wall course,
warm light grey above, charcoal roofs, orange doors and wall-hole collars, one
narrow identity panel beside each door — muted red iron, oxidised teal copper,
safety yellow assembly, dark green biomass, white civic.
```

## 3. Shed interior render

```
Interior render of one of my [W] x [D] Foundation production sheds, Satisfactory
in-game look, UE5, no HUD. Cutaway or open Door Wall view along the long axis.

[N] Constructors in a single row along one long wall, pulled about 3 m off it for the
output Merger Belt, input manifold in front of them at belt height with ordinary
Splitters, and the rest of the floor clear. Every Belt enters and leaves through Wall
Conveyor Holes with orange collars, never through the door opening or a floor hole.

Shell: three Wall courses, 12 m clear interior, corrugated steel with a charcoal
lower course and warm light grey above, charcoal Foundation roof, polished concrete
floor inside and metal plate at the threshold, Power Pole in the service porch at
each end, ceiling Lights in a line down the roof beams. Machines running.
```

## 4. Isometric plan

Better than photorealism when you want the layout to survive.

```
Isometric technical illustration of [site name], flat colour with thin dark outlines,
architectural blueprint feel, white background outside the deck.

[rows and contents]

Conveyor belts as thin lines along the roadways and dropping vertically between
opposing buildings. Grey, charcoal and orange palette with small coloured accent
panels. Clean, legible, no people, no clutter, no text labels.
```
