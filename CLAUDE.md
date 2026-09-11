# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A planning workspace for a personal **Satisfactory** (the game) factory build — not a software project.
No package manager, no build step, no tests. It is a git repo — `github.com/Dennis-van-Es/Satisfactory`,
public — but only so GitHub Pages can serve the field log to a phone; there is still nothing to build.
Three markdown docs and a prompts file live in `Knowledge/`, and the two self-contained HTML apps are
also published as Claude Artifacts.

**`index.html` at the repo root is the FICSIT Field Log**, served at
`https://dennis-van-es.github.io/Satisfactory/`. It sits at the root and carries that name because
Pages needs a root `index.html` to serve `/` — do not rename it back or move it into `Knowledge/`.

Constraints that shape every answer: **Xbox, controller only, no mods, game version 1.x**. The current
save is **all pure nodes with the Space Elevator part requirement at ×1**, the default — published
figures are the figures.

**There is more than one save, and sticking to one is the hard part.** Settings and unlocks do not
carry across, so no statement about "the save" is unconditional: name which one, and confirm the
setting before sizing anything against it. The field log's per-save profiles exist for this reason.
The ×10 elevator multiplier that used to be recorded in both markdown docs belonged to a different
save and has been corrected — treat any surviving ×10 reasoning as stale.

## Design rules that govern every answer

These are the standing rules, not preferences to re-derive per question. The full set with the reasoning
behind each is in `Project_Knowledge.md` § The design rules — read it on demand rather than restating it.

- **One item per building, one machine type per building.** No mixed floors. Lane widths, lift positions
  and door spacing differ per machine type, so a shared shell fits neither.
- **The output split governs the clock.** Set a target output and let the machine derive it — awkward
  ratios cost nothing. Where a destination lane falls between machine boundaries, clock the machines to
  serve that lane rather than adding a machine and a splitter. Overclocking is allowed to close a split,
  bounded at **one power shard per machine** (so 5.625 → 6 yes, 5.625 → 9 needs arguing); also to save a
  machine where a *node* is the cap rather than the grid. This bullet used to read "production machines
  are never overclocked", which was stricter than the rule it summarised and contradicted O3's concrete
  line — do not reintroduce it.
- **Every node in the current save is pure.** Miner Mk.1 on pure is 120/min; size from that, not from
  the normal-purity figures most published plans assume.

## The content pieces, and what belongs in each

| File | Holds | Changes when |
|---|---|---|
| `Knowledge/Project_Knowledge.md` | Design rules, current save state, geography scouted, per-phase plans, working style | The save progresses |
| `Knowledge/Reference.md` | Game facts: miner and belt rates, recipes, footprints, tier and MAM gating, lookup sites | The game patches |
| `Knowledge/Prompts.md` | Reusable prompts for the *other* AI (ChatGPT, which has its own Satisfactory project) — building interiors, aerial and isometric renders | A prompt proves out |
| `index.html` (the field log), `Knowledge/campus-plot-plan.html` | The interactive trackers | Data or UI changes |
| `README.md` | The phone-facing landing page: the two tracker links | A tracker moves or is added |
| `docs/Satisfactory-1.2-All-Pure-Phase-1-to-5-Guide.md` | The *other* AI's written plan (ChatGPT). Not maintained here | ChatGPT republishes it |

Hold that boundary when editing: a rate, recipe or footprint goes in `Reference.md`; a decision about
the save or the plan goes in `Project_Knowledge.md`. Costs (milestone, MAM, AWESOME Shop coupon prices)
are **deliberately absent** from `Reference.md` — a plausible-looking wrong number is worse than none,
so point at the lookup sites listed there instead.

> **Verify recipes against satisfactory.wiki.gg, not against this folder.** Every default and alternate
> recipe is on the wiki, so there is never a reason to quote a rate on trust. `Reference.md` claimed
> each row was "verified in play or marked `[verify]`"; a full row-by-row check on 2026-09-10 found
> four wrong and unmarked — Cable, Solid Steel Ingot, Encased Industrial Beam and Automated Wiring.
> They are corrected now, but the lesson stands: an unmarked row is not a verified row.
>
> Watch out for the wiki's per-building summary tables (the Constructor and Assembler pages), which
> label per-*cycle* ingredient quantities as per-minute. The per-item pages are reliable; when in
> doubt take the cycle time and do the arithmetic.

`[verify]` markers mean "inferred, not confirmed in game". Never quietly drop one, and never invent a
rate or a footprint to fill a gap.

**The live save wins.** Where a reading taken in game disagrees with `Reference.md`,
`Project_Knowledge.md`, the HTML data or anything derived from them, the in-game reading is right and
the doc gets corrected. Say when a correction has knock-on effects elsewhere in the plan instead of
only fixing the row named.

`Project_Knowledge.md` also describes `ficsit-field-log.html`, the online twin of the field log. That
file is not in this folder — the build that is here, now `index.html`, is the offline one, and hosting
it on Pages has not made it the twin. Treat any reference to the twin as pointing outside this repo.

## The two HTML apps

Single-file, dependency-free, no build step: open in a browser to run. Same architecture in both.

- **Data as `const` arrays and objects at the top of one inline `<script>`.** Plot plan: `PLOTS`, plus
  per-phase `DECK`, `BELTS`, `SITES`, `DRIVES`, `NODES`, `ORDER`, `RESEARCH`, `ALTS`, all keyed `1..5`.
  Field log: `CRASH_SITES` and `ALT_RECIPES` as positional arrays.
- **Rendered by string template into a root element**, rebuilt wholesale on state change. No framework.
- **Three-tier storage, probed at startup** (`detect()` / `detectStorage()`): the Artifact runtime's
  `window.storage` when the page runs inside Claude, then `localStorage` in a plain browser, then
  neither — in which case the UI says so and the base64 **Backup** code is the only persistence.
  `enc()` and the restore handler round-trip the whole state object.
- **Storage keys are versioned** (`sf_plotplan_v5`, `crashsites_v1`). Changing a key orphans saved
  progress, so bump one only when the state shape genuinely breaks.

### campus-plot-plan.html

Five phases; tabs Plots / Build order / Research / Alt recipes. A `PLOTS` record:

```js
{id, phase, site, name, ef, sf, wf, df, remote?, raw[], needs[], belts, flex, note, out,
 floors:[{name, lines:[{item, recipe, rate, unit, bld, n, mw, alt?}]}]}
```

- `ef`/`sf` are the offset east/south and `wf`/`df` the footprint, **all in foundations** (8 m each,
  the constant `M`), measured from the site's north-west corner. The site anchors Dennis types in
  (`ax`/`ay` through `gx`/`gy`) are in-game **metres**.
- `remote:true` marks an outpost pinned to a node — excluded from the SVG map and from `overlaps()`.
- `overlaps()` collision-checks every non-remote plot pair within a site, and the map note reports the
  result. After moving or resizing a plot, load the page and confirm it still reads "plots do not
  collide".
- Progress is tracked per production *line*: `STATE.placed[id|floorIndex|lineIndex]` counts machines
  placed against that line's `n`.

### index.html — the FICSIT Field Log

118 crash sites, 107 alternate recipes, and **per-save profiles**: every storage key is suffixed with
the active profile id (`dk()`), so each save tracks its own unlocks. Crash-site X and Y are stored as
datamined **centimetres** and divided by 100 for display; Z is already in metres.

**This file must stay offline-clean.** Its fonts are embedded as base64 `@font-face` data URIs so the
page makes zero external requests. Never add a Google Fonts `<link>`, a CDN script, or any other remote
asset to it. The plot plan does load Google Fonts and that is fine. Serving the field log over Pages
does not relax this: self-contained is what lets it keep working on a flaky phone connection, and it is
still openable straight off disk.

**Progress does not follow the file between origins.** `localStorage` is per-origin, so a `file://`
copy, the Pages URL and the Claude Artifact each keep their own unlocks under the same keys
(`profiles_v1`, `active_profile_v1`, `crashsites_v1`, `altrecipes_v1`, the last two suffixed per
profile). The base64 **Backup** / **Restore** pair is the only way across — say so before suggesting
anyone switch where they open it from.

## Checking the numbers

Nothing to build or lint. To verify a count instead of trusting prose, eval an array straight out of
the file with node:

```bash
node -e "const fs=require('fs');const s=fs.readFileSync('C:/dennis/github/satisfactory/Knowledge/campus-plot-plan.html','utf8');const i=s.indexOf('const PLOTS=[');const P=eval(s.slice(i+12,s.indexOf('\n];',i)+2));const p=P.filter(x=>x.phase===1);console.log(p.length,'plots',p.reduce((a,x)=>a+x.floors.reduce((b,f)=>b+f.lines.reduce((c,l)=>c+l.n,0),0),0),'machines')"
```

The prose and the HTML data are two copies of the same figures and have already drifted: the phase-1
`DECK` blurb says Site A decks at 32 × 22 foundations, while the phase-1 plot records lay out 33 × 28.
Treat `PLOTS` as the source of truth for geometry and machine counts, and correct the prose to match.

## Publishing

There are three separate places this content is served from, and none of them updates any other.

**GitHub Pages** serves the repo as static files from `main`, root: `index.html` is the field log at
`https://dennis-van-es.github.io/Satisfactory/`, and the plot plan is reachable at
`/Knowledge/campus-plot-plan.html`. A merge to `main` republishes; nothing else does. `.nojekyll` keeps
Pages from running Jekyll over the files, and `.gitattributes` pins `*.html` to LF so `core.autocrlf`
cannot rewrite a tracker on checkout. The repo is **public** — Pages on a public repo has no login.

**Claude Artifacts.** Both HTML files are also published artifacts. To update one, publish with its
existing `url` — find it with the Artifact tool's `list` action and read the live version before writing
over it. Publishing without the url creates a second artifact under a new link. On a Team or Enterprise
account artifacts can only be shared inside the organisation, and unpublishing is permanent.

**ChatGPT's field guide** at `satisfactory-all-pure-field-guide.dpvanes67.chatgpt.site` is *not* served
from this repo, despite its source having lived here. It is deployed by ChatGPT from OpenAI Sites
project `appgprj_6aa009e2eaf08191b6805613e37ca203`; there is no workflow and no webhook here, so a push
never updates it and deleting files never takes it down. It returns 401 to anyone not logged in as
Dennis. Its written plan survives at `docs/Satisfactory-1.2-All-Pure-Phase-1-to-5-Guide.md` — a second,
independently-maintained copy of the plan, so treat any figure in it as ChatGPT's, not as verified here.

## Tone

Dennis is an expert player: use precise FICSIT part and building names, skip the basics, stay concise
by default and go deep on request. He reviews everything and has caught real errors repeatedly — flag
uncertainty rather than bluffing, and when a correction has knock-on effects elsewhere in the plan, say
so rather than only fixing the item named.
