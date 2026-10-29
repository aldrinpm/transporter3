---
tags: [adr, decisions, accepted]
---

# ADR-0001 — Obsidian vault + Graphify as project memory

- **Status:** Accepted
- **Date:** 2026-10-29
- **Deciders:** Aldrin + agent session
- **Closes:** Project Charter MVP bullet "Obsidian project memory" (`[[docs/01_PROJECT_CHARTER|01_PROJECT_CHARTER]]` §6)

## Context

The charter requires project memory, but the repo had none: just `README.md` and `docs/01_PROJECT_CHARTER.md`. Understanding layout meant grepping `src/`. The team uses Obsidian for notes and AI coding agents (OpenCode) that re-explain the codebase every session.

## Decision

1. **The repo root is an Obsidian vault** (`.obsidian/` committed, workspace state ignored).
   - Human memory notes live at the root: `Home.md`, `Architecture.md`, `Decisions/ADR-*.md`, `Templates/`.
   - Obsidian's global graph view doubles as a project-map view.
2. **Graphify** (GitHub `Graphify-Labs/graphify`, PyPI pkg `graphifyy`, CLI `graphify`) is the machine memory:
   - `graphify extract . --code-only` — deterministic tree-sitter AST graph of the TS codebase, fully local, no API key, 0 LLM tokens.
   - Output in `graphify-out/`: `graph.json` (queryable), `GRAPH_REPORT.md`, `graph.html` (interactive browser map), `GRAPH_TREE.html` (D3 file tree).
   - `graphify opencode install --project` registers the `/graphify` skill + AGENTS.md instructions + OpenCode plugin hook (and a matching skill for Claude-based assistants under the same layout).
   - `graphify export obsidian --dir "Codebase Map"` emits 195 linked per-symbol notes + `graph.canvas` — machine notes, regenerable.

## Consequences

- ✅ Agents answer codebase questions by querying graph.json (`graphify query/path/explain`) before grepping — cheaper and grounded (rule enforced via `AGENTS.md`).
- ✅ Every edge is auditable: `EXTRACTED` vs `INFERRED`; import cycles and god nodes surface automatically in the report.
- ⚠ `graphify-out/` and `Codebase Map/` are **generated artifacts, committed** — expect whole-file rewrite diffs on `graph.json` in PRs; don't review them line-by-line.
- ⚠ Update discipline: after code changes run `graphify update .`; the stale-graph guard is the "built from commit" line in `GRAPH_REPORT.md` / `Home.md`.
- ⚠ Community numbering from the Leiden/Louvain clustering reshuffles on re-clustering → `Architecture.md` community names must be re-derived by hand.

## Alternatives considered

- *Separate vault folder (e.g. `vault/`)* — rejected: splits Obsidian graph view from the map notes and complicates links into `src/` history.
- *Vector-store code memory (embeddings)* — rejected: non-deterministic, needs API keys, no path queries; graphify's AST graph is free and explainable.
- *MkDocs/docs-site only* — rejected: no graph structure, not a personal knowledge workflow.
