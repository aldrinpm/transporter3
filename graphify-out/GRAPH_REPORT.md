# Graph Report - transporter3  (2026-10-29)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 186 nodes · 324 edges · 9 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `efe48ef2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `SectionKicker()` - 16 edges
3. `App()` - 12 edges
4. `BeamCta()` - 10 edges
5. `Glyph()` - 9 edges
6. `Reveal()` - 9 edges
7. `Hero()` - 9 edges
8. `react` - 9 edges
9. `Drivers()` - 7 edges
10. `Standards()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `CtaBand()`  [EXTRACTED]
  src/App.tsx → src/components/CtaBand.tsx
- `App()` --calls--> `Footer()`  [EXTRACTED]
  src/App.tsx → src/components/Footer.tsx
- `App()` --calls--> `Hero()`  [EXTRACTED]
  src/App.tsx → src/components/Hero.tsx
- `App()` --calls--> `Nav()`  [EXTRACTED]
  src/App.tsx → src/components/Nav.tsx
- `Standards()` --calls--> `Field()`  [EXTRACTED]
  src/components/Standards.tsx → src/components/ui.tsx

## Import Cycles
- None detected.

## Communities (9 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (31): description, devDependencies, @cloudflare/vite-plugin@^1.65.0, tailwindcss@^4.1.17, @tailwindcss/vite@^4.1.17, @types/react@^19.2.7, @types/react-dom@^19.2.3, @types/three@^0.149.0 (+23 more)

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (20): App(), CHECKS, Drivers(), Faq(), FAQS, HowItWorks(), STEPS, StepVisual() (+12 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (23): concurrency, cancel-in-progress, group, runs-on, steps, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN, jobs (+15 more)

### Community 3 - "Community 3"
Cohesion: 0.16
Nodes (19): @designcodeio/threeui, BeamButton, BeamCta(), BeamDecor(), BeamLink, BeamProps, Common, BASE (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.10
Nodes (16): playwright-core@^1.64.1, playwright-core, paths, candidates, errors, executablePath, candidates, el (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.16
Nodes (14): dependencies, @designcodeio/threeui@^1.2.0, @fontsource/fragment-mono@^5.2.8, @fontsource-variable/inter@^5.2.8, @fontsource-variable/onest@^5.2.8, react@^19.2.0, react-dom@^19.2.0, three@^0.149.0 (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.29
Nodes (8): motion@^12.23.26, motion, COLS, Footer(), Brand(), BrandMark(), LINKS, Nav()

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (7): ARTICLE_HEADING_DECODE_POOL, ArticleHeadingDecodeOptions, clamp(), easeOut(), startArticleHeadingDecode(), DECODE_OPTIONS, useDecodeOnView()

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Community 6` to `Community 0`, `Community 1`, `Community 3`, `Community 7`, `Community 8`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08522727272727272 - nodes in this community are weakly interconnected._
- **Why does `playwright-core` connect `Community 4` to `Community 0`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Why does `@designcodeio/threeui` connect `Community 3` to `Community 0`, `Community 1`, `Community 6`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.1038961038961039 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._