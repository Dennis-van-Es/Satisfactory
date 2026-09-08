# Satisfactory All-Pure Field Guide

A mobile-first build companion for a complete Satisfactory 1.2 playthrough on Xbox, using standard node counts with every resource node set to Pure.

## Live guide

[Open the private phone guide](https://satisfactory-all-pure-field-guide.dpvanes67.chatgpt.site)

The interactive guide contains Phase 0 through Phase 5 checklists for prerequisites, alternate recipes, MAM research, factories, utilities and acceptance gates. Checklist progress is stored locally in the browser.

## Written plan

The complete source plan is in [`docs/Satisfactory-1.2-All-Pure-Phase-1-to-5-Guide.md`](docs/Satisfactory-1.2-All-Pure-Phase-1-to-5-Guide.md).

## Local development

```bash
npm install
npm run dev
```

The application is a Sites/vinext project. Its structured game plan lives in `lib/guide-data.ts`; the responsive interface and campus plan are in `app/page.tsx` and `app/globals.css`.
