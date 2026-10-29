---
tags: [status]
---

# Status — Transporter 3

> [!warning] Freshness rule
> **Last updated: 2026-10-29.** Update this note whenever the phase, blockers, or priorities change — it is the shared source of truth so no one (human or agent) has to re-explain where the project stands. Agents: see the read-order in `AGENTS.md`.

## Current phase

**1a — Public landing page: SHIPPED** (`transporter-landing` v0.1.0)

Single-page marketing site for the drive-your-own-vehicle service. Design exploration built on free ThreeUI Community components, re-skinned into the night-drive instrumentation aesthetic. No booking backend yet — the page is forward-compatible (hero card is explicitly-labelled illustrative data).

| Deployment | Where |
| --- | --- |
| **Live** | https://transporter3.pages.dev (Cloudflare Pages, legacy direct-upload project) |
| **Backup** | https://transporter.transporter-landing.workers.dev (Workers deploy kept as fallback) |
| **CI** | push to `main` → `.github/workflows/deploy.yml` → `wrangler pages deploy`, live ~2 min later; needs repo secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`; manual runs via *workflow_dispatch* |

## MVP checklist (per [[docs/01_PROJECT_CHARTER|charter]] §6 "Initial release")

| Charter MVP item | Status |
| --- | --- |
| Responsive public landing page | ✅ Done — this repo |
| Obsidian project memory + code graph | ✅ Done — [[Decisions/ADR-0001 - Obsidian vault + Graphify\|ADR-0001]] |
| Customer booking flow (pickup/destination, waypoints *if confirmed*, date/time, vehicle details, PHP estimate) | ⬜ Not started |
| Map route visualization + route summary | ⬜ Not started |
| Driver authentication + booking acceptance | ⬜ Not started |
| Customer-facing status + ETA after acceptance | ⬜ Not started |
| Booking notifications (channel still to agree) | ⬜ Not started |
| Admin/operations minimum viable controls | ⬜ Not started |
| Automated tests | ⬜ Not started — `?static` settled-render floor exists for future e2e ([[README]]) |
| Observability + security baseline | ⬜ Not started |

Explicitly **not** in MVP (charter §6 "Explicitly not assumed"): native apps, surge/dynamic pricing, wallet/escrow, pre-consent GPS tracking, AI dispatch, guaranteed exact ETA, multi-city rollout.

## Next 3 priorities

1. **Choose backend/data stack + repo layout** for the booking service → write as `ADR-0002` (candidates: Cloudflare Workers + D1/R2, Postgres, Supabase/Firebase; decide auth and where the estimate lives).
2. **Define the booking state machine** from the charter §5 journeys (submitted → priced → accepted → en-route → complete / cancelled, with auditable transitions) and pick the **map provider** (Google / Mapbox / OSRM).
3. **Prototype the customer booking flow**, extracting the PHP estimate as a tested pure function. The published formula must stay consistent with the page (base 120 + distance 560 + time 380 + tolls 180 = ₱1,240, optional stop +120 = ₱1,360).

## Open questions (block pacing / estimation)

- Are intermediate waypoints in the booking flow wanted? (charter says "if product confirms")
- Notification channel for booking/arrival updates — email, SMS, or push?
- Map/routing provider and who pays per-request costs?
- MVP payment posture: deposit, prepay, post-service — or enquiry-only first?
- Driver onboarding + verification requirements list (charter §5 driver journey v1)?

## Machine pointers (avoid re-explaining to any model)

- Agents read `AGENTS.md` → graphify query before grepping, and this file for status/context.
- [[Home]] — vault dashboard & map views · [[Architecture]] — structure tour · `Decisions/ADR-*.md` — rationale.

Related: [[Architecture]] · [[docs/01_PROJECT_CHARTER]] · [[README]]
