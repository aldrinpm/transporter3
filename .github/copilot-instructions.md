## graphify

For any question about this repo's architecture, structure, components, or how to add/modify/find
code, your first action should be `graphify query "<question>"` when `graphify-out/graph.json`
exists. Use `graphify path "<A>" "<B>"` for relationship questions and `graphify explain "<concept>"`
for focused-concept questions. These return a scoped subgraph, usually much smaller than the full
report or raw grep output.

Triggers: "how do I…", "where is…", "what does … do", "add/modify a <component>",
"explain the architecture", or anything that depends on how files or classes relate.

If `graphify-out/wiki/index.md` exists, use it for broad navigation. Read `graphify-out/GRAPH_REPORT.md`
only for broad architecture review or when query/path/explain do not surface enough context. Only read
source files when (a) modifying/debugging specific code, (b) the graph lacks the needed detail, or
(c) the graph is missing or stale.

Type `/graphify` in Copilot Chat to build or update the graph.

## Project memory — read order (Obsidian vault)

The repo root is an Obsidian vault holding the project memory (rationale: `Decisions/ADR-0001 - Obsidian vault + Graphify.md`). To answer out-of-band questions without re-asking the user, read in this order:

- Code / architecture / relationships: the graphify rules above — `graphify query` / `path` / `explain` first.
- "Where are we" — current phase, done vs pending, priorities, open questions: read `Status.md` first.
- Scope, users, journeys, success metrics, MVP boundaries: `docs/01_PROJECT_CHARTER.md`.
- Stack, build/deploy, page anatomy: `README.md`; hand-written structure tour: `Architecture.md`.
- Rationale for past decisions: `Decisions/ADR-*.md` (decision log).

Keep the memory fresh after meaningful work: update `Status.md` (phase, checklist, priorities), add an ADR for irreversible decisions (`Templates/ADR template.md`), and run `graphify update .` after code changes per the rule above.
