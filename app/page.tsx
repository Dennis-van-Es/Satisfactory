'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Factory, Route } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allTaskIds, phases, type FactoryPlan, type Task } from '@/lib/guide-data';
import { sitePlansByPhase, type SitePlan } from '@/lib/site-plans';

type CheckedState = Record<string, boolean>;
type ModelContext = {
  registerTool: (
    tool: {
      name: string;
      description: string;
      inputSchema: Record<string, unknown>;
      execute: (input: Record<string, unknown>) => unknown | Promise<unknown>;
    },
    options?: { signal?: AbortSignal },
  ) => void | Promise<void>;
};

declare global {
  interface Document {
    readonly modelContext?: ModelContext;
  }
}

const storageKey = 'satisfactory-field-guide-progress';
const phaseStorageKey = 'satisfactory-field-guide-phase';
const validTaskIds = new Set(allTaskIds);

export default function Home() {
  const [checked, setChecked] = useState<CheckedState>({});
  const [selectedPhase, setSelectedPhase] = useState(0);
  const checkedRef = useRef(checked);
  const selectedPhaseRef = useRef(selectedPhase);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      const savedPhase = Number(window.localStorage.getItem(phaseStorageKey));
      if (saved) setChecked(JSON.parse(saved));
      if (Number.isInteger(savedPhase) && savedPhase >= 0 && savedPhase <= 5) setSelectedPhase(savedPhase);
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => { checkedRef.current = checked; }, [checked]);
  useEffect(() => {
    selectedPhaseRef.current = selectedPhase;
    window.localStorage.setItem(phaseStorageKey, String(selectedPhase));
  }, [selectedPhase]);

  useEffect(() => {
    const modelContext = document.modelContext;
    if (!modelContext) return;
    const controller = new AbortController();

    void modelContext.registerTool({
      name: 'get_field_guide_progress',
      description: 'Read checklist completion for the Satisfactory All-Pure field guide.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      execute: () => {
        const perPhase = phases.map((phase) => {
          const ids = taskIdsForPhase(phase.number);
          const complete = ids.filter((id) => checkedRef.current[id]).length;
          return { phase: phase.number, complete, total: ids.length, percent: percent(complete, ids.length) };
        });
        const complete = allTaskIds.filter((id) => checkedRef.current[id]).length;
        return { selectedPhase: selectedPhaseRef.current, complete, total: allTaskIds.length, perPhase };
      },
    }, { signal: controller.signal });

    void modelContext.registerTool({
      name: 'set_checklist_items',
      description: 'Check or uncheck one or more known checklist items in the Satisfactory field guide.',
      inputSchema: {
        type: 'object',
        properties: {
          ids: { type: 'array', minItems: 1, items: { type: 'string' } },
          checked: { type: 'boolean' },
        },
        required: ['ids', 'checked'],
        additionalProperties: false,
      },
      execute: (input) => {
        const ids = Array.isArray(input.ids) ? input.ids.filter((id): id is string => typeof id === 'string') : [];
        const unknown = ids.filter((id) => !validTaskIds.has(id));
        if (unknown.length || typeof input.checked !== 'boolean') {
          return { ok: false, error: unknown.length ? `Unknown checklist IDs: ${unknown.join(', ')}` : 'checked must be a boolean' };
        }
        const next = { ...checkedRef.current };
        ids.forEach((id) => { next[id] = input.checked as boolean; });
        checkedRef.current = next;
        setChecked(next);
        window.localStorage.setItem(storageKey, JSON.stringify(next));
        return { ok: true, changed: ids.length, complete: allTaskIds.filter((id) => next[id]).length, total: allTaskIds.length };
      },
    }, { signal: controller.signal });

    return () => controller.abort();
  }, []);

  const phase = phases[selectedPhase];
  const phaseIds = useMemo(() => taskIdsForPhase(selectedPhase), [selectedPhase]);
  const completed = phaseIds.filter((id) => checked[id]).length;
  const progress = percent(completed, phaseIds.length);

  function toggle(id: string, value: boolean) {
    const next = { ...checked, [id]: value };
    checkedRef.current = next;
    setChecked(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#17191c]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <div className="grid size-10 shrink-0 place-items-center border border-[#f6c945]/55 bg-[#f6c945] text-[#17191c] shadow-[3px_3px_0_#8b1e1e]"><Factory className="size-5" /></div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[0.68rem] font-bold tracking-[0.18em] text-[#f6c945]">FICSIT FIELD MANUAL</p>
            <h1 className="truncate text-base font-bold tracking-tight sm:text-lg">All-Pure World Plan</h1>
          </div>
          <div className="text-right font-mono text-xs text-zinc-300"><span className="block font-bold text-[#f6c945]">{completed}/{phaseIds.length}</span>phase tasks</div>
        </div>
      </header>

      <div className="border-b border-border bg-card">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6" aria-label="Project phases">
          {phases.map((item) => {
            const ids = taskIdsForPhase(item.number);
            const done = ids.filter((id) => checked[id]).length;
            return (
              <button key={item.number} type="button" className={`phase-chip ${item.number === selectedPhase ? 'phase-chip-active' : ''}`} aria-current={item.number === selectedPhase ? 'page' : undefined} onClick={() => setSelectedPhase(item.number)}>
                <span className="flex w-full items-center justify-between gap-3 font-mono text-xs">0{item.number}<span>{done}/{ids.length}</span></span>
                <span className="whitespace-nowrap text-sm font-bold">Phase {item.number}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-8">
        <section className="mb-5 grid gap-4 border-l-4 border-[#f6c945] bg-[#22262a] p-4 text-white shadow-lg sm:grid-cols-[1fr_280px] sm:p-6">
          <div>
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f6c945]">Phase 0{phase.number} · {phase.code}</p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{phase.title}</h2>
            <p className="mt-2 max-w-3xl text-[0.95rem] leading-6 text-zinc-300">{phase.summary}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-zinc-400"><span>{phase.duration}</span><span>{phase.sites}</span></div>
          </div>
          <Progress value={progress} className="self-end text-white"><ProgressLabel>Phase progress</ProgressLabel><ProgressValue>{progress}%</ProgressValue></Progress>
        </section>

        <Tabs defaultValue="start" key={selectedPhase} className="gap-4">
          <TabsList variant="line" className="w-full justify-start overflow-x-auto border-b border-border pb-2">
            <TabsTrigger value="start">Start</TabsTrigger><TabsTrigger value="site">Site plan</TabsTrigger><TabsTrigger value="recipes">Recipes</TabsTrigger><TabsTrigger value="mam">MAM</TabsTrigger><TabsTrigger value="factories">Factories</TabsTrigger><TabsTrigger value="utilities">Utilities</TabsTrigger><TabsTrigger value="gate">Gate</TabsTrigger>
          </TabsList>

          <TabsContent value="start" className="space-y-3"><SectionHeading eyebrow="Do this first" title={`Phase ${phase.number} prerequisites`} /><Checklist tasks={phase.doFirst} checked={checked} onToggle={toggle} /></TabsContent>
          <TabsContent value="site" className="space-y-4">
            <SectionHeading eyebrow="Campus standard" title="Raised, readable and controller-friendly" />
            <div className="grid gap-3 sm:grid-cols-3"><Metric label="Service plinth" value="1 × 4 m" note="One full foundation high" /><Metric label="Building alley" value="1 foundation" note="Clear between shells" /><Metric label="Terminal boulevard" value="3 foundations" note="Clear along the freight edge" /></div>
            {phase.number === 0 ? <CampusPlan /> : <PhaseSitePlans phase={phase.number} sites={phase.sites} />}
          </TabsContent>
          <TabsContent value="recipes" className="space-y-3"><SectionHeading eyebrow="Hard Drive ledger" title="Alternate recipes to unlock" /><RecipeChecklist tasks={phase.recipes} checked={checked} onToggle={toggle} /></TabsContent>
          <TabsContent value="mam" className="space-y-3"><SectionHeading eyebrow="Research route" title="MAM branches to clear" /><Checklist tasks={phase.mam} checked={checked} onToggle={toggle} /></TabsContent>
          <TabsContent value="factories" className="space-y-3"><SectionHeading eyebrow={`${phase.factories.length} build cards`} title="Factories to complete" /><p className="intro-note">The footprint is the recommended finished shell, including internal logistics margins. Each machine tile is its own checkbox; machines on the same output belt or pipe share one target.</p><FactoryList factories={phase.factories} checked={checked} onToggle={toggle} /></TabsContent>
          <TabsContent value="utilities" className="space-y-3"><SectionHeading eyebrow="Support work" title="Unlocks and utilitarian production" /><Checklist tasks={phase.utilities} checked={checked} onToggle={toggle} /></TabsContent>
          <TabsContent value="gate" className="space-y-3"><SectionHeading eyebrow="Do not advance early" title={`Phase ${phase.number} acceptance gate`} /><Checklist tasks={phase.gate} checked={checked} onToggle={toggle} /></TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

function taskIdsForPhase(phaseNumber: number) {
  const phase = phases[phaseNumber];
  return [...phase.doFirst.map((x) => x.id), ...phase.recipes.map((x) => x.id), ...phase.mam.map((x) => x.id), ...phase.utilities.map((x) => x.id), ...phase.gate.map((x) => x.id), ...phase.factories.flatMap((factory) => [`${factory.id}-shell`, `${factory.id}-terminal`, ...factory.groups.flatMap((group, groupIndex) => Array.from({ length: group.count }, (_, machineIndex) => `${factory.id}-g${groupIndex}-m${machineIndex}`))])];
}

function percent(done: number, total: number) { return total ? Math.round((done / total) * 100) : 0; }

function Checklist({ tasks, checked, onToggle }: { tasks: Task[]; checked: CheckedState; onToggle: (id: string, value: boolean) => void }) {
  return <div className="checklist-panel">{tasks.map((task) => <label key={task.id} className="check-row"><Checkbox checked={Boolean(checked[task.id])} onCheckedChange={(value) => onToggle(task.id, value === true)} /><span className="min-w-0"><span className={checked[task.id] ? 'line-through opacity-55' : ''}>{task.title}</span>{task.detail && <span className="task-detail">{task.detail}</span>}</span></label>)}</div>;
}

function RecipeChecklist({ tasks, checked, onToggle }: { tasks: Array<Task & { required: boolean }>; checked: CheckedState; onToggle: (id: string, value: boolean) => void }) {
  return <div className="checklist-panel">{tasks.map((task) => <label key={task.id} className="check-row"><Checkbox checked={Boolean(checked[task.id])} onCheckedChange={(value) => onToggle(task.id, value === true)} /><span className="min-w-0 flex-1"><span className={checked[task.id] ? 'line-through opacity-55' : ''}>{task.title}</span>{task.detail && <span className="task-detail">{task.detail}</span>}</span><span className={`status-badge ${task.required ? 'status-required' : ''}`}>{task.required ? 'Required' : 'Optional'}</span></label>)}</div>;
}

function FactoryList({ factories, checked, onToggle }: { factories: FactoryPlan[]; checked: CheckedState; onToggle: (id: string, value: boolean) => void }) {
  const siteTotals = Array.from(factories.reduce((totals, factory) => {
    const count = factory.groups.reduce((sum, group) => sum + group.count, 0);
    const layout = factoryLayout(factory, count);
    const current = totals.get(factory.site) ?? { ground: 0, floors: 0 };
    current.ground += layout.width * layout.depth;
    current.floors += layout.width * layout.depth * layout.floors;
    totals.set(factory.site, current);
    return totals;
  }, new Map<string, { ground: number; floors: number }>()).entries());
  const grandGround = siteTotals.reduce((sum, [, total]) => sum + total.ground, 0);
  const grandFloors = siteTotals.reduce((sum, [, total]) => sum + total.floors, 0);

  return <><div className="footprint-summary"><div><span>Phase ground footprint</span><strong>{grandGround.toLocaleString()} foundations</strong></div><div><span>Total production floors</span><strong>{grandFloors.toLocaleString()} foundations</strong></div><div className="site-footprints"><span>By site</span><strong>{siteTotals.map(([site, total]) => `${site}: ${total.ground.toLocaleString()}`).join(' · ')} foundations</strong></div></div><p className="footprint-caveat">Shells only. Add the 8 m alleys, 24 m terminal boulevard, plazas, truck courts and terrain setbacks around these footprints.</p><Accordion className="factory-list">{factories.map((factory) => {
    const machineCount = factory.groups.reduce((sum, group) => sum + group.count, 0);
    const machineIds = factory.groups.flatMap((group, groupIndex) => Array.from({ length: group.count }, (_, machineIndex) => `${factory.id}-g${groupIndex}-m${machineIndex}`));
    const done = machineIds.filter((id) => checked[id]).length;
    const layout = factoryLayout(factory, machineCount);
    return <AccordionItem key={factory.id} value={factory.id} className="factory-card">
      <AccordionTrigger className="factory-trigger"><div className="min-w-0 pr-3"><div className="mb-1 flex flex-wrap items-center gap-2"><span className="site-code">SITE {factory.site}</span><span className="font-mono text-xs text-muted-foreground">{factory.name}</span></div><h3 className="text-base font-black no-underline sm:text-lg">{factory.item}</h3><p className="mt-1 text-sm font-normal text-muted-foreground no-underline">{factory.total} · {machineCount} {plural(factory.machine, machineCount)} · {done}/{machineCount} placed</p><p className="factory-footprint">{layout.width} × {layout.depth} foundations · {layout.floors} {layout.floors === 1 ? 'floor' : 'floors'}</p></div></AccordionTrigger>
      <AccordionContent className="factory-content">
        <div className="factory-spec-grid"><Spec label="Recipe" value={factory.recipe} /><Spec label="Recommended shell" value={`${layout.width} × ${layout.depth} foundations · ${layout.floors} ${layout.floors === 1 ? 'floor' : 'floors'}`} /></div>
        {factory.note && <p className={`factory-note ${/no storage|storage-free/i.test(factory.note) ? 'factory-warning' : ''}`}>{factory.note}</p>}
        <div className="commission-grid"><CompactCheck id={`${factory.id}-shell`} label="Finished shell" checked={checked} onToggle={onToggle} /><CompactCheck id={`${factory.id}-terminal`} label="Terminal / dispatch commissioned" checked={checked} onToggle={onToggle} /></div>
        <div className="space-y-4">{factory.groups.map((group, groupIndex) => <section key={`${factory.id}-${group.label}`} className="machine-bank"><div className="machine-bank-head"><div><h4>{group.label}</h4>{group.route && <p>{group.route}</p>}</div><span>{group.count} × {group.output}</span></div><div className="machine-grid">{Array.from({ length: group.count }, (_, machineIndex) => { const id = `${factory.id}-g${groupIndex}-m${machineIndex}`; return <label key={id} className={`machine-tile ${checked[id] ? 'machine-tile-checked' : ''}`} title={`${factory.machine} ${machineIndex + 1}: ${group.output}`}><Checkbox checked={Boolean(checked[id])} onCheckedChange={(value) => onToggle(id, value === true)} /><span>{machineIndex + 1}</span></label>; })}</div></section>)}</div>
      </AccordionContent>
    </AccordionItem>;
  })}</Accordion></>;
}

function CompactCheck({ id, label, checked, onToggle }: { id: string; label: string; checked: CheckedState; onToggle: (id: string, value: boolean) => void }) {
  return <label className="compact-check"><Checkbox checked={Boolean(checked[id])} onCheckedChange={(value) => onToggle(id, value === true)} /><span className={checked[id] ? 'line-through opacity-55' : ''}>{label}</span></label>;
}

function recommendLayout(factory: FactoryPlan, count: number) {
  const rules: Record<string, { perFloor: number; perRow: number; bay: number; depth: number }> = {
    Constructor: { perFloor: 24, perRow: 4, bay: 4, depth: 6 }, Smelter: { perFloor: 24, perRow: 4, bay: 4, depth: 6 }, Assembler: { perFloor: 8, perRow: 2, bay: 4, depth: 6 }, Foundry: { perFloor: 8, perRow: 2, bay: 4, depth: 6 }, Manufacturer: { perFloor: 4, perRow: 1, bay: 5, depth: 7 }, Refinery: { perFloor: 6, perRow: 2, bay: 5, depth: 7 }, Blender: { perFloor: 4, perRow: 1, bay: 5, depth: 7 }, Converter: { perFloor: 6, perRow: 2, bay: 6, depth: 8 }, Packager: { perFloor: 4, perRow: 2, bay: 4, depth: 7 }, 'Quantum Encoder': { perFloor: 1, perRow: 1, bay: 6, depth: 9 }, 'Particle Accelerator': { perFloor: 4, perRow: 1, bay: 6, depth: 8 },
  };
  const rule = rules[factory.machine] ?? { perFloor: 8, perRow: 2, bay: 4, depth: 7 };
  const floors = factory.machine === 'Particle Accelerator' ? 1 : Math.max(1, Math.ceil(count / rule.perFloor));
  const onFloor = factory.machine === 'Particle Accelerator' ? count : Math.min(count, rule.perFloor);
  return { width: rule.bay * Math.max(1, Math.ceil(onFloor / rule.perRow)) + 2, depth: rule.depth, floors };
}

function factoryLayout(factory: FactoryPlan, count: number) {
  const explicit = factory.size?.match(/(\d+)\s*×\s*(\d+)\s*foundations\s*·\s*(\d+)\s*floor/i);
  if (explicit) return { width: Number(explicit[1]), depth: Number(explicit[2]), floors: Number(explicit[3]) };
  return recommendLayout(factory, count);
}

function plural(machine: string, count: number) { return count === 1 ? machine : `${machine}s`; }
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div><p className="section-eyebrow">{eyebrow}</p><h3 className="text-xl font-black tracking-tight sm:text-2xl">{title}</h3></div>; }
function Metric({ label, value, note }: { label: string; value: string; note: string }) { return <div className="metric-card"><p className="text-sm text-muted-foreground">{label}</p><p className="mt-1 font-mono text-2xl font-black text-[#8b1e1e]">{value}</p><p className="mt-1 text-sm text-muted-foreground">{note}</p></div>; }
function Spec({ label, value }: { label: string; value: string }) { return <div><span>{label}</span><strong>{value}</strong></div>; }

function SiteStandard({ phase, sites }: { phase: number; sites: string }) {
  return <div className="site-standard"><div className="flex gap-3"><Route className="mt-1 size-6 shrink-0 text-[#8b1e1e]" /><div><h3>Apply the same campus grammar at {sites}</h3><p>Build each hall on a one-foundation-high local datum. Put terminals on the three-foundation freight edge, leave one full foundation between shells, and keep service galleries open beneath or beside production.</p></div></div><div className="site-rule-grid"><span><strong>01</strong> Terrain-responsive extraction</span><span><strong>02</strong> Lift to the raised production datum</span><span><strong>03</strong> Direct belts between neighboring consumers</span><span><strong>04</strong> Reserve a 10 × 8 truck court at the terminal edge</span></div><p className="font-mono text-xs text-muted-foreground">PHASE 0{phase} STANDARD · roads are optional access; belts and pipes remain the logistics system.</p></div>;
}

function PhaseSitePlans({ phase, sites }: { phase: number; sites: string }) {
  const plans = sitePlansByPhase[phase] ?? [];
  return <div className="space-y-4"><SiteStandard phase={phase} sites={sites} /><div className="map-count"><span>{plans.length} district {plans.length === 1 ? 'map' : 'maps'}</span><strong>All dimensions in foundations</strong></div>{plans.map((plan) => <DistrictMap key={plan.id} plan={plan} />)}</div>;
}

function DistrictMap({ plan }: { plan: SitePlan }) {
  return <article className="district-map">
    <header className="district-map-head"><div><span className="site-code">SITE {plan.site}</span><p>{plan.anchor}</p><h3>{plan.title}</h3></div><strong>{plan.reserve}</strong></header>
    <div className="district-flow"><span>FLOW</span>{plan.flow}</div>
    <div className="district-grid" role="img" aria-label={`${plan.title} schematic. ${plan.blocks.map((block) => `${block.label}, ${block.size} foundations`).join('. ')}`}>
      <div className="north-mark" aria-hidden="true">N ↑</div>
      {plan.blocks.map((block) => <div key={`${plan.id}-${block.label}`} className={`district-block district-${block.kind} ${block.wide ? 'district-wide' : ''}`}><span>{block.label}</span><strong>{block.size} foundations</strong><small>{block.note}</small></div>)}
      <div className="district-boulevard"><span>TERMINAL / FREIGHT EDGE</span><strong>3 foundations clear</strong></div>
    </div>
    <p className="district-note">{plan.note}</p>
  </article>;
}

function CampusPlan() {
  return <figure className="campus-plan"><div className="campus-plan-title"><div><p className="section-eyebrow">Top-down schematic · not terrain scale</p><h3>Phase 0 home campus</h3><p>Required in Phase 0: 411 foundations</p></div><span>54 × 38 foundation reserve</span></div>
    <svg viewBox="0 0 900 650" role="img" aria-labelledby="campus-title campus-desc">
      <title id="campus-title">Top-down plan for the Rocky Desert home campus</title><desc id="campus-desc">A raised campus with a fifteen by fifteen foundation Space Elevator plaza, HUB and MAM, a twelve by eight foundation black-start power building, production halls, a reserved truck court, service alleys and terminal boulevard.</desc>
      <defs><pattern id="foundation-grid" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M 16 0 L 0 0 0 16" fill="none" stroke="#7c786f" strokeWidth="0.7" opacity="0.42" /></pattern><pattern id="hazard" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="12" fill="#f6c945" /><rect x="6" width="6" height="12" fill="#26292d" /></pattern></defs>
      <rect x="18" y="18" width="864" height="614" rx="4" fill="#e5e0d4" stroke="#272a2e" strokeWidth="3" /><rect x="34" y="34" width="832" height="582" fill="url(#foundation-grid)" />
      <path d="M82 60v44M60 82h44" stroke="#8b1e1e" strokeWidth="4" /><path d="M82 47l-8 14h16z" fill="#8b1e1e" /><text x="82" y="125" textAnchor="middle" className="svg-label">N</text>
      <rect x="242" y="72" width="240" height="240" className="plan-plaza" /><text x="362" y="172" textAnchor="middle" className="svg-title">SPACE ELEVATOR</text><text x="362" y="195" textAnchor="middle" className="svg-label">15 × 15 FOUNDATION PLAZA</text><text x="362" y="220" textAnchor="middle" className="svg-note">225 foundations · Phase 0</text><path d="M242 52h240M242 46v12M482 46v12" className="dimension-line" /><text x="362" y="44" textAnchor="middle" className="svg-dimension">15 foundations</text>
      <rect x="64" y="100" width="136" height="80" className="plan-hub" /><text x="132" y="132" textAnchor="middle" className="svg-title">HUB + MAM</text><text x="132" y="155" textAnchor="middle" className="svg-note">9 × 5 foundations</text><rect x="64" y="212" width="136" height="72" className="plan-utility" /><text x="132" y="242" textAnchor="middle" className="svg-title">WORKSHOP</text><text x="132" y="264" textAnchor="middle" className="svg-note">9 × 5 foundations</text>
      <rect x="546" y="88" width="192" height="128" className="plan-power" /><text x="642" y="137" textAnchor="middle" className="svg-title">BLACK-START</text><text x="642" y="160" textAnchor="middle" className="svg-label svg-on-dark">16 BIOMASS BURNERS</text><text x="642" y="182" textAnchor="middle" className="svg-note svg-on-dark">12 × 8 foundations · 1 floor</text><rect x="754" y="88" width="64" height="128" fill="url(#hazard)" stroke="#26292d" strokeWidth="2" /><text x="786" y="232" textAnchor="middle" className="svg-dimension">power edge</text>
      <rect x="64" y="354" width="216" height="96" className="plan-hall" /><text x="172" y="390" textAnchor="middle" className="svg-title">PRODUCTION HALL</text><text x="172" y="413" textAnchor="middle" className="svg-note">14 × 6 foundations · future</text><text x="172" y="433" textAnchor="middle" className="svg-note">one item · one machine type</text><rect x="296" y="354" width="216" height="96" className="plan-hall" /><text x="404" y="390" textAnchor="middle" className="svg-title">PRODUCTION HALL</text><text x="404" y="413" textAnchor="middle" className="svg-note">14 × 6 foundations · future</text><text x="404" y="433" textAnchor="middle" className="svg-note">direct consumer belts</text><path d="M280 354v96" className="alley-line" /><text x="288" y="346" textAnchor="middle" className="svg-dimension">1 foundation alley</text>
      <rect x="64" y="482" width="754" height="48" className="plan-boulevard" /><text x="441" y="512" textAnchor="middle" className="svg-title">TERMINAL BOULEVARD · 3 FOUNDATIONS CLEAR</text>
      <rect x="548" y="354" width="270" height="96" className="plan-terminal" /><text x="683" y="386" textAnchor="middle" className="svg-title">TERMINAL + CONTAINER ROW</text><text x="683" y="409" textAnchor="middle" className="svg-note">17 × 6 foundations · future</text><text x="683" y="430" textAnchor="middle" className="svg-note">one Depot per stored item · ingots bypass</text>
      <rect x="548" y="548" width="270" height="56" className="plan-truck" /><text x="683" y="572" textAnchor="middle" className="svg-title">RESERVED TRUCK COURT · 10 × 8</text><text x="683" y="592" textAnchor="middle" className="svg-note">two stations + turning lane; build in Tier 3 only if used</text>
      <path d="M518 56v410" className="utility-spine" /><text x="532" y="302" transform="rotate(-90 532 302)" textAnchor="middle" className="svg-dimension">1 FOUNDATION UTILITY SPINE</text><path d="M172 450v32M404 450v32M683 450v32M683 530v18" className="belt-link" />
    </svg>
  </figure>;
}
