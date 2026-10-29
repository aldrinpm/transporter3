---
tags: [architecture]
---

# Architecture — Transporter 3 landing page

*Hand-written summary of the Graphify knowledge graph (`graphify-out/`), built 2026-10-29 from commit `efe48ef2`. Full machine report: [[graphify-out/GRAPH_REPORT]].*

## Shape of the app

Single-page marketing site. `index.html` → `src/main.tsx` → **`App()`** (`src/App.tsx`) which composes, in order:

`Nav()` → `Hero()` (+ BookingCard demo) → `Ticker()` → `HowItWorks()` → `Drivers()` → `Pricing()` → `Standards()` → `Faq()` → `CtaBand()` → `Footer()`

WebGL decoration (`TopologyField`, `PerformanceGauges`, `HalftoneFlow`) comes from **`@designcodeio/threeui`** and is mounted lazily by `Field()` in `src/components/ui.tsx`; the CTA beam/slide components are vendored re-authorings.

## God nodes (most-connected abstractions)

| Node | Edges | Role |
| --- | --- | --- |
| `compilerOptions` | 18 | tsconfig hub (config entropy: 31 flags, all upstream of nothing) |
| `SectionKicker()` | 16 | shared section-heading component (used by every section) |
| `App()` | 12 | page root; calls all 10 sections |
| `BeamCta()` | 10 | amber beam CTA inside a glass pill |
| `Glyph()` / `Reveal()` | 9 | shared UI primitives (icons + scroll reveal) |
| `Hero()` | 9 | headline + interactive booking card |
| `react` | 9 | dependency hub bridging 6 communities (centrality 0.163) |

## Communities (machine-detected, hand-named)

| # | Name | Cohesion | Size | What it is |
| --- | --- | --- | --- | --- |
| 0 | Tooling (devDependencies) | 0.09 | 31 | `package.json` devDependencies + most `@…/packages` nodes |
| 1 | Page sections & content | 0.18 | 20 | `App()`, HowItWorks/Drivers/Faq, `FAQS`, `CHECKS`, `STEPS`, `StepVisual()` |
| 2 | CI/CD workflow | 0.08 | 23 | `deploy.yml` keys, Cloudflare secrets, Actions knobs |
| 3 | CTA beam system + ThreeUI | 0.16 | 19 | `BeamCta()`, `BeamButton`, `BeamDecor()`, design tokens, threeui |
| 4 | Screenshot tooling | 0.10 | 16 | `scripts/*.mjs` + `playwright-core` (shooting the live site) |
| 5 | TypeScript config | 0.10 | 19 | `compilerOptions` + its 30 flags |
| 6 | Runtime dependencies | 0.16 | 19 | react, three, fonts, threeui (package.json deps block) |
| 7 | Chrome: nav/footer brand | 0.29 | 8 | `Nav()`, `Footer()`, `Brand()`, `BrandMark()`, `LINKS`, `COLS`, `motion` |
| 8 | Text decode effect | 0.33 | 7 | `useDecodeOnView()`, `startArticleHeadingDecode()`, `clamp()`, `easeOut()` — tightest community |

Per-community detail notes: [[_COMMUNITY_Community 0|0]] · [[_COMMUNITY_Community 1|1]] · [[_COMMUNITY_Community 2|2]] · [[_COMMUNITY_Community 3|3]] · [[_COMMUNITY_Community 4|4]] · [[_COMMUNITY_Community 5|5]] · [[_COMMUNITY_Community 6|6]] · [[_COMMUNITY_Community 7|7]] · [[_COMMUNITY_Community 8|8]]

## Cross-community bridges (deliberate coupling)

- **`react`** bridges communities 6→(0,1,3,7,8) — every layer imports React; expected for a React app.
- **`@designcodeio/threeui`** bridges 3→(0,1,6) — decoration library consumed by sections and both dependency blocks.
- **`playwright-core`** bridges 4→0 — screenshot scripts vs devDependencies only; clean separation.
- No import cycles detected. 100% `EXTRACTED` edges (nothing inferred).

## Sample traversals (from the real graph)

```
$ graphify path "App()" "useDecodeOnView()"
Shortest path (3 hops):
  App() --calls [EXTRACTED]--> CtaBand() --calls [EXTRACTED]-->
  SectionKicker() --calls [EXTRACTED]--> useDecodeOnView()
```

```
$ graphify explain "App()"
Node: App()          ID: src_app_app        Source: src/App.tsx L12
Community: Community 1               Degree: 12
  --> Hero() [calls] / HowItWorks() / Pricing() / ... (10 section calls)
  <-- main.tsx [imports]  src/main.tsx:L15
```

## Named-community drift watchlist

- Re-run `graphify cluster-only . --no-label` after refactors; community numbering reshuffles on big moves — re-derive the names in this note from the regenerated `_COMMUNITY_*` notes.
- If a refactor pushes cohesion of C0/C2 upward, that's a sign structure is shifting — compare against this snapshot.
