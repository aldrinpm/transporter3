---
tags: [home, moc]
cssclasses: []
---

# 🚚 Transporter 3 — Project Memory

> [!info] Knowledge graph snapshot
> 186 nodes · 324 edges · 9 communities — built from commit `efe48ef2` on 2026-10-29 with [Graphify](https://github.com/Graphify-Labs/graphify) (AST-only, 0 LLM tokens).

## 🗺 View the codebase map

| View | How to open |
| --- | --- |
| **Canvas** (one note per symbol, grouped by community) | Open [[Codebase Map/graph.canvas\|Codebase Map → graph.canvas]] |
| **Global graph view** (notes as a force-directed web) | `Ctrl/Cmd+P` → *Graph: Open global graph view* — the 195 amber nodes are the generated map |
| **Interactive graph.html** (click nodes, filter, search; in a browser) | `graphify-out/graph.html` — double-click it or `Start-Process graphify-out\graph.html` |
| **Collapsible file tree** (D3, in a browser) | `graphify-out/GRAPH_TREE.html` |
| **Graph report** | [[graphify-out/GRAPH_REPORT\|GRAPH_REPORT.md]] — god nodes, communities, suggested questions |

## 🧭 Navigation

- **[[Status]]** — current phase, MVP checklist, next steps — **read this first**
- **[[Architecture]]** — how the page is assembled, god nodes, named communities
- **Project charter** — [[docs/01_PROJECT_CHARTER]] (source of truth for scope & principles)
- **[[README]]** — stack, page anatomy, deployment
- **Decisions** — start at [[Decisions/ADR-0001 - Obsidian vault + Graphify|ADR-0001]]; template in `Templates/`

## ⚙️ Keep the map fresh

```powershell
npm run dev                 # local server
graphify update .           # re-extract after code changes (AST-only, no API key)
graphify cluster-only . --no-label   # re-cluster + regenerate report & graph.html
graphify export obsidian --dir "Codebase Map"   # re-emit the 195 notes + canvas
```

I (the agent) keep the graph current per `AGENTS.md`; the map notes below `Codebase Map/` are regenerable — put human edits in vault notes like [[Decisions/ADR-0001 - Obsidian vault + Graphify|the ADRs]] instead.

## 💡 Things the graph is good at answering

- *Why does `react` act as a bridge between 6 communities?* → `graphify query "what uses react everywhere and why?"`
- *How does the hero reach the decode effect?* → `graphify path "App()" "useDecodeOnView()"`
- *What is `SectionKicker()` connected to?* → `graphify explain "SectionKicker()"`
