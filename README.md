# Satisfactory — All-Pure Campus

Planning workspace and phone trackers for a complete Satisfactory 1.x playthrough on Xbox:
controller only, no mods, every resource node Pure, Space Elevator part requirement at ×1.

## The trackers

| | Open on your phone |
|---|---|
| **FICSIT Field Log** — 118 crash sites, 107 alternate recipes, per-save profiles | **https://dennis-van-es.github.io/Satisfactory/** |
| **Campus Plot Plan** — five phases, plot geometry, build order, research | **https://dennis-van-es.github.io/Satisfactory/Knowledge/campus-plot-plan.html** |

Both are single self-contained HTML files with no build step — open either one straight off disk and
it works the same. Add them to your home screen from the browser's share menu.

### Your progress lives in the browser, not in this repo

Ticked crash sites and unlocked recipes are stored in `localStorage`, which is **per origin**. A copy
opened from a `file://` shortcut, the link above, and the Claude Artifact each keep a **separate** set
of unlocks — nothing syncs between them, and nothing is stored server-side.

To carry progress across, use the **Backup** button to copy the base64 code out of the old one and
**Restore** it into the new one. Do that before you delete an old home-screen shortcut.

## What else is here

| Path | What it is |
|---|---|
| `index.html` | The field log itself — root-level because GitHub Pages serves `/` from it |
| `Knowledge/Project_Knowledge.md` | Design rules, save state, scouted geography, per-phase plans |
| `Knowledge/Reference.md` | Game facts: miner and belt rates, recipes, footprints, tier and MAM gating |
| `Knowledge/Prompts.md` | Reusable image prompts for building interiors and aerial renders |
| `docs/Satisfactory-1.2-All-Pure-Phase-1-to-5-Guide.md` | An earlier written plan, kept for reference |

Recipes and rates are verified against [satisfactory.wiki.gg](https://satisfactory.wiki.gg), never
against the notes in this repo. A reading taken in game beats anything written here.
