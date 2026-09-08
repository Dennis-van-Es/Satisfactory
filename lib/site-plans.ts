export type PlanBlock = {
  label: string;
  size: string;
  note: string;
  kind: 'production' | 'power' | 'fluid' | 'terminal' | 'utility' | 'reserve';
  wide?: boolean;
};

export type SitePlan = {
  id: string;
  site: string;
  title: string;
  anchor: string;
  reserve: string;
  flow: string;
  note: string;
  blocks: PlanBlock[];
};

export const siteLocations: Record<string, { name: string; x: number; y: number }> = {
  A: { name: 'Rocky Desert western basin', x: -2633, y: -267 },
  B: { name: 'Northwest coal basin', x: -2760, y: -1630 },
  B2: { name: 'Northwest limestone spur', x: -2615, y: -1165 },
  C: { name: 'Northern Rocky cave', x: -1880, y: -1415 },
  D: { name: 'Gold Coast oil field', x: -2525, y: 698 },
  E: { name: 'Gold Coast / Red Jungle aluminum wharf', x: -1960, y: 720 },
  F: { name: 'Western nitrogen mesa', x: -1440, y: 1220 },
  G: { name: 'Blue Crater power basin', x: 1450, y: 2200 },
  H: { name: 'Dune Desert copper field', x: 3300, y: -1450 },
  Q: { name: 'Red Jungle / Crater Lakes quantum campus', x: -1436, y: 207 },
};

export const sitePlansByPhase: Record<number, SitePlan[]> = {
  1: [
    {
      id: 'p1-a-components', site: 'A', title: 'Permanent component quarter', anchor: 'east of the Phase 0 Elevator plaza', reserve: '64 × 48 foundations', flow: 'Ore edge → ingot sheds → constructor street → assembler court → terminal boulevard', note: 'Build east from the Phase 0 plaza. Every named block is a separate finished shell; the street labels describe adjacency, not mixed buildings.',
      blocks: [
        { label: 'Iron Ingot', size: '10 × 6', note: '6 Smelters · no storage', kind: 'production' },
        { label: 'Copper Ingot', size: '6 × 6', note: '2 Smelters · direct to sheets', kind: 'production' },
        { label: 'Plate + Rod street', size: '2 × 6 × 6', note: 'Two separate Constructor halls', kind: 'production', wide: true },
        { label: 'Wire hall', size: '10 × 6', note: '6 Constructors · three destination banks', kind: 'production' },
        { label: 'Cable + Sheets', size: '2 × 6 × 6', note: 'Two separate Constructor halls', kind: 'production' },
        { label: 'Assembler court', size: '18 × 6', note: 'RIP, Rotor and Smart Plating shells', kind: 'production', wide: true },
        { label: 'Component terminal', size: '20 × 6', note: 'Container row · unique Depots · Sink', kind: 'terminal', wide: true },
        { label: 'Truck court reserve', size: '10 × 8', note: 'Leave empty until Tier 3', kind: 'reserve' },
      ],
    },
  ],
  2: [
    {
      id: 'p2-b-coal', site: 'B', title: 'Coal power district', anchor: 'lower basin terrace beside the water', reserve: '32 × 26 foundations', flow: 'Coal ridge → split feed spine → two generator halls; water rises from the basin edge', note: 'Keep water and coal on opposite service faces. The two eight-generator halls have independent switches so one half can be commissioned at a time.',
      blocks: [
        { label: 'Generator Hall 1', size: '11 × 16', note: '8 Coal Generators', kind: 'power' },
        { label: 'Generator Hall 2', size: '11 × 16', note: '8 Coal Generators', kind: 'power' },
        { label: 'Water gallery', size: '22 × 5', note: '8 Extractors · two pipe banks', kind: 'fluid', wide: true },
        { label: 'Coal distribution', size: '10 × 5', note: 'Dual belt manifold', kind: 'utility' },
        { label: 'Power control', size: '8 × 5', note: 'Pumps · generators · export circuits', kind: 'utility' },
      ],
    },
    {
      id: 'p2-b-steel', site: 'B', title: 'Steel works', anchor: 'Coal campus upper terrace · west of power', reserve: '30 × 20 foundations', flow: 'Iron + coal → Foundry hall → storage-free steel dispatch → A utility viaduct', note: 'Use a separate terrace from Coal Power. The power plant must remain restartable while the Steel Works is isolated.',
      blocks: [
        { label: 'Steel Ingot hall', size: '14 × 6', note: '5 Foundries · Solid Steel', kind: 'production', wide: true },
        { label: 'Compacted Coal', size: '6 × 6', note: '2 Assemblers · destination banks', kind: 'production' },
        { label: 'Ingot dispatch throat', size: '8 × 4', note: 'No container · no Depot', kind: 'terminal' },
        { label: 'Foundry expansion', size: '14 × 6', note: 'Reserved for later phases', kind: 'reserve', wide: true },
        { label: 'Truck court reserve', size: '10 × 8', note: 'Optional steel road route', kind: 'reserve' },
      ],
    },
    {
      id: 'p2-b2-concrete', site: 'B2', title: 'Limestone and Concrete works', anchor: 'raised pad beside the Pure Limestone node', reserve: '28 × 18 foundations', flow: 'Pure limestone → raised Constructor hall → terminal row → A freight route', note: 'Finish the full sixteen-machine shell now, but energize only the four Phase 2 Constructors.',
      blocks: [
        { label: 'Concrete hall', size: '18 × 6', note: '16-Constructor shell · 4 active', kind: 'production', wide: true },
        { label: 'Concrete terminal', size: '10 × 6', note: 'Two containers · sole Depot · Sink', kind: 'terminal' },
        { label: 'Truck court reserve', size: '10 × 8', note: 'Good first vehicle route candidate', kind: 'reserve' },
      ],
    },
    {
      id: 'p2-a-assembly', site: 'A', title: 'Project Assembly extension', anchor: 'Rocky Desert · north of Phase 1 quarter', reserve: '46 × 30 foundations', flow: 'Commodity edge → component halls → Project Part row → Space Elevator belt', note: 'Extend the same terminal boulevard; do not rebuild the Phase 1 quarter.',
      blocks: [
        { label: 'Steel parts street', size: '18 × 6', note: 'Pipe and Beam shells', kind: 'production', wide: true },
        { label: 'Frame court', size: '18 × 6', note: 'RIP and Modular Frame shells', kind: 'production' },
        { label: 'Electromechanical court', size: '18 × 6', note: 'Rotor and Stator shells', kind: 'production' },
        { label: 'Project Part row', size: '22 × 6', note: 'Smart Plating, Framework, Wiring', kind: 'production', wide: true },
        { label: 'Terminal extension', size: '18 × 6', note: 'New component cells only', kind: 'terminal', wide: true },
      ],
    },
  ],
  3: [
    {
      id: 'p3-c-quartz', site: 'C', title: 'Quartz and Caterium campus', anchor: 'open shelf outside the northern cave portal', reserve: '38 × 28 foundations', flow: 'Cave portals → ore lifts → dry Constructor sheds → terminal on the open northern face', note: 'Keep the cave mouth and exploration path unobstructed; the reserve SAM spur stays isolated until Phase 5.',
      blocks: [
        { label: 'Silica hall', size: '10 × 6', note: '8 Constructors · room for peak', kind: 'production' },
        { label: 'Quartz Crystal', size: '6 × 6', note: '2 Constructors', kind: 'production' },
        { label: 'Caterium Ingot', size: '10 × 6', note: '8 Smelters · no storage', kind: 'production' },
        { label: 'Quartz terminal', size: '14 × 6', note: 'Silica + Crystal cells · Sink', kind: 'terminal', wide: true },
        { label: 'SAM reserve spur', size: '8 × 5', note: 'Marked; not connected', kind: 'reserve' },
      ],
    },
    {
      id: 'p3-d-petrochem', site: 'D', title: 'Gold Coast petrochemical works', anchor: 'shoreline terrace running east–west through the Pure Oil field', reserve: '56 × 38 foundations', flow: 'Oil pads → refinery pipe street → products terminal; every fluid loop closes inside D', note: 'Build the wet process parallel to the shoreline. Put packaged Jetpack fuel at the dry terminal end, never across a site boundary as liquid.',
      blocks: [
        { label: 'Plastic refinery hall', size: '17 × 7', note: '6 Refineries', kind: 'fluid' },
        { label: 'Rubber refinery hall', size: '17 × 7', note: '6 Refineries', kind: 'fluid' },
        { label: 'Emergency Fuel', size: '12 × 7', note: '3 Refineries', kind: 'fluid' },
        { label: 'Fuel power', size: '17 × 7', note: '6 Generators · one reserve', kind: 'power' },
        { label: 'Jetpack fuel annex', size: '14 × 7', note: 'Canisters · Turbofuel · Packager', kind: 'production', wide: true },
        { label: 'Dry products terminal', size: '18 × 6', note: 'Plastic, Rubber, Packaged Turbofuel', kind: 'terminal', wide: true },
      ],
    },
    {
      id: 'p3-a-manufacturing', site: 'A', title: 'Manufacturer quarter', anchor: 'Rocky Desert · north terminal extension', reserve: '44 × 32 foundations', flow: 'Component streets → manufacturers → Project Part court → Elevator', note: 'Manufacturers get their own wider-door district; do not place them above the Assembler halls.',
      blocks: [
        { label: 'Computer hall', size: '7 × 7', note: '1 Manufacturer', kind: 'production' },
        { label: 'Heavy Frame hall', size: '7 × 7', note: '1 Manufacturer', kind: 'production' },
        { label: 'Modular Engine hall', size: '12 × 7', note: '2 Manufacturers', kind: 'production' },
        { label: 'Control Unit hall', size: '7 × 7', note: '1 Manufacturer', kind: 'production' },
        { label: 'Manufacturer terminal', size: '18 × 6', note: 'Components + utility cells', kind: 'terminal', wide: true },
      ],
    },
  ],
  4: [
    {
      id: 'p4-d-fuel', site: 'D', title: 'Diluted Fuel power expansion', anchor: 'Gold Coast · inland power terrace', reserve: '44 × 28 foundations', flow: 'Existing oil works → Blender hall → switched generator field', note: 'Keep the Jetpack-fuel annex independent so its Depot refills while a generator line is disabled.',
      blocks: [
        { label: 'Diluted Fuel', size: '32 × 7', note: '6 Blenders', kind: 'fluid', wide: true },
        { label: 'Fuel Generator field', size: '37 × 12', note: '27 Generators · one switched off', kind: 'power', wide: true },
        { label: 'Priority switch house', size: '8 × 5', note: 'Power and Jetpack circuits', kind: 'utility' },
      ],
    },
    {
      id: 'p4-e-aluminum', site: 'E', title: 'Aluminum wharf', anchor: 'coastal terrace below the bauxite approach', reserve: '42 × 34 foundations', flow: 'Bauxite edge → wet refinery loop → ingot shed → dry aluminum terminal', note: 'Put the recycled-water junction in an exposed gallery with a labeled cold-start valve.',
      blocks: [
        { label: 'Alumina Solution', size: '7 × 7', note: '2 Refineries · Sloppy Alumina', kind: 'fluid' },
        { label: 'Aluminum Scrap', size: '7 × 7', note: '2 Refineries · water return', kind: 'fluid' },
        { label: 'Aluminum Ingot', size: '14 × 6', note: '9 Smelters · no storage', kind: 'production', wide: true },
        { label: 'Casing hall', size: '6 × 6', note: '3 Constructors', kind: 'production' },
        { label: 'Alclad reserve', size: '6 × 6', note: '1 Assembler', kind: 'production' },
        { label: 'Aluminum terminal', size: '14 × 6', note: 'Casing + sheet · Sink', kind: 'terminal', wide: true },
      ],
    },
    {
      id: 'p4-f-nitrogen', site: 'F', title: 'Nitrogen finishing campus', anchor: 'mesa-top terrace south of the well pad', reserve: '30 × 24 foundations', flow: 'Well pad → local gas header → Blender sheds → dry parts dispatch', note: 'No Nitrogen pipe leaves F. The well and buffer sit lower than the raised production terrace.',
      blocks: [
        { label: 'Well and buffer', size: '10 × 6', note: 'Pressurizer + local header', kind: 'fluid', wide: true },
        { label: 'Fused Frames', size: '7 × 7', note: '1 Blender', kind: 'production' },
        { label: 'Cooling Systems', size: '12 × 7', note: '2 Blenders', kind: 'production' },
        { label: 'Parts dispatch', size: '12 × 6', note: 'No fluid terminal', kind: 'terminal', wide: true },
      ],
    },
    {
      id: 'p4-g-rocket-power', site: 'G', title: 'Nitro Rocket Fuel power campus', anchor: 'western crater shelf above the water', reserve: '54 × 50 foundations', flow: 'Crater resources → Nitro process terrace → two independent 36-generator districts', note: 'Commission one 9 GW district at a time. Preserve the outer two district pads for the Phase 5 doubling.',
      blocks: [
        { label: 'Nitro process terrace', size: '24 × 12', note: 'Oil, water, sulfur, coal and Nitrogen', kind: 'fluid', wide: true },
        { label: 'Generator District 1', size: '47 × 10', note: '36 Fuel Generators · 9 GW', kind: 'power', wide: true },
        { label: 'Generator District 2', size: '47 × 10', note: '36 Fuel Generators · 9 GW', kind: 'power', wide: true },
        { label: 'Storage and switchyard', size: '20 × 8', note: '50 Power Storages', kind: 'utility' },
        { label: 'Phase 5 expansion edge', size: '47 × 20', note: 'Keep completely clear', kind: 'reserve' },
      ],
    },
    {
      id: 'p4-h-copper', site: 'H', title: 'Dune Copper Works', anchor: 'central flat shelf between the marked Copper nodes', reserve: '48 × 34 foundations', flow: 'Copper + iron edge → alloy Foundries → two ingot dispatch lanes → Powder hall', note: 'Copper Ingots use storage-free lanes. The terminal serves Copper Powder only.',
      blocks: [
        { label: 'Copper Alloy Hall 1', size: '18 × 6', note: '6 Foundries', kind: 'production' },
        { label: 'Copper Alloy Hall 2', size: '18 × 6', note: '6 Foundries', kind: 'production' },
        { label: 'Ingot dispatch', size: '18 × 5', note: 'Two Mk.5 lanes · no storage', kind: 'terminal', wide: true },
        { label: 'Copper Powder', size: '6 × 6', note: '2 Constructors', kind: 'production' },
        { label: 'Phase 5 Foundry pads', size: '36 × 12', note: 'Reserve for 24 more Foundries', kind: 'reserve', wide: true },
      ],
    },
    {
      id: 'p4-a-assembly', site: 'A', title: 'Phase 4 assembly campus', anchor: 'Rocky Desert · northern build front', reserve: '60 × 46 foundations', flow: 'Expanded component streets → Project Part halls → Pasta accelerator court → Elevator', note: 'This is a district plan: every labeled product remains in its own shell even where blocks share a street.',
      blocks: [
        { label: 'Electronics street', size: '34 × 14', note: 'Boards, Computers, HSC, Oscillators, RCU', kind: 'production', wide: true },
        { label: 'Heavy parts street', size: '34 × 14', note: 'Frames, EIB, Motors, Turbo Motors', kind: 'production', wide: true },
        { label: 'Project Part row', size: '36 × 14', note: 'Engines, ACU, ADS, MFG, TPR', kind: 'production', wide: true },
        { label: 'Nuclear Pasta court', size: '8 × 8', note: '1 Particle Accelerator', kind: 'production' },
        { label: 'Phase terminal extension', size: '22 × 6', note: 'New stored products only', kind: 'terminal' },
      ],
    },
  ],
  5: [
    {
      id: 'p5-q-quantum', site: 'Q', title: 'Quantum campus', anchor: 'ridge shelf beside the SAM anchor and local lake', reserve: '54 × 42 foundations', flow: 'SAM + imported solids → Converter street → Accelerator court → Encoder courtyard → dry final dispatch', note: 'Use low black/violet halls around the white-lit courtyard. Dark Matter fluids remain entirely inside Q.',
      blocks: [
        { label: 'SAM Constructor hall', size: '10 × 6', note: '7 Constructors · two banks', kind: 'production' },
        { label: 'Converter street', size: '26 × 8', note: 'Ficsite, EPM, DMR and Time Crystal shells', kind: 'fluid', wide: true },
        { label: 'Dark Matter court', size: '26 × 8', note: '4 Particle Accelerators', kind: 'production', wide: true },
        { label: 'Encoder courtyard', size: '26 × 9', note: 'Three separate Quantum Encoder halls', kind: 'production', wide: true },
        { label: 'Biochemical hall', size: '7 × 7', note: '1 Blender', kind: 'production' },
        { label: 'Quantum terminal', size: '18 × 6', note: 'Stored solids only · Sink', kind: 'terminal' },
      ],
    },
    {
      id: 'p5-g-power', site: 'G', title: 'Rocket Fuel final expansion', anchor: 'Blue Crater · east and west reserve pads', reserve: '54 × 88 foundations', flow: 'Existing Nitro terrace → four independently switched 36-generator districts', note: 'Mirror the Phase 4 districts into the reserved pads. Test Xbox performance after each block of 36.',
      blocks: [
        { label: 'Generator District 1', size: '47 × 10', note: '36 generators · existing', kind: 'power', wide: true },
        { label: 'Generator District 2', size: '47 × 10', note: '36 generators · existing', kind: 'power', wide: true },
        { label: 'Generator District 3', size: '47 × 10', note: '36 generators · new', kind: 'power', wide: true },
        { label: 'Generator District 4', size: '47 × 10', note: '36 generators · new', kind: 'power', wide: true },
        { label: 'Final switchyard', size: '24 × 10', note: '100 Power Storages minimum', kind: 'utility', wide: true },
      ],
    },
    {
      id: 'p5-h-copper', site: 'H', title: 'Copper and Diamond final works', anchor: 'Dune Desert · full eastern terrace', reserve: '60 × 46 foundations', flow: 'Expanded alloy rows → three ingot lanes → Powder and Diamond conversion → Q dispatch', note: 'Keep Diamonds and Copper Powder in separate shells. The three Copper Ingot lanes remain storage-free.',
      blocks: [
        { label: 'Copper Alloy rows', size: '54 × 12', note: '36 Foundries · three lanes', kind: 'production', wide: true },
        { label: 'Copper Powder', size: '14 × 6', note: '10 Constructors', kind: 'production' },
        { label: 'Pink Diamonds', size: '20 × 8', note: '6 Converters · two banks', kind: 'production' },
        { label: 'Q dispatch edge', size: '20 × 6', note: 'Powder and Diamond outbound belts', kind: 'terminal', wide: true },
      ],
    },
    {
      id: 'p5-a-final', site: 'A', title: 'Final assembly and launch court', anchor: 'Rocky Desert · Elevator-facing frontage', reserve: '62 × 50 foundations', flow: 'Retargeted component halls → final part shells → four dedicated Elevator belts', note: 'Leave the central launch court open. Final-part buildings face the Elevator and remain individually switchable.',
      blocks: [
        { label: 'Singularity Cell', size: '7 × 7', note: '1 Manufacturer', kind: 'production' },
        { label: 'Nuclear Pasta', size: '32 × 8', note: '5 Particle Accelerators', kind: 'production' },
        { label: 'Biochemical Sculptor', size: '7 × 7', note: '1 Blender', kind: 'production' },
        { label: 'AI Expansion Server', size: '8 × 9', note: '1 Quantum Encoder', kind: 'production' },
        { label: 'Ballistic Warp Drive', size: '7 × 7', note: '1 Manufacturer', kind: 'production' },
        { label: 'Elevator dispatch', size: '24 × 6', note: 'Four labeled final-delivery belts', kind: 'terminal', wide: true },
      ],
    },
  ],
};
