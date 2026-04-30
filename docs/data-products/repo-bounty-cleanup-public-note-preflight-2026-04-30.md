# Repo bounty cleanup public-note preflight — 2026-04-30T17:22Z

**Decision:** do **not** post the prepared `zio/zio` public sales note. Replace the route with owned inbound/custom-request distribution until a maintainer-created meta/queue-cleanup thread appears.

## Live preflight result

| Candidate | Live state | Dedupe result | Reputation/safety decision |
|---|---|---|---|
| `zio/zio#9878` | Open; 47 comments; last updated 2026-04-30T00:58Z; bounty labels include `💎 Bounty` and `$500`. Recent thread has many `/attempt` and PR/status comments. | Search for `"bounty queue cleanup"`, `"public-data note"`, `"7-day public-signal monitor"`, and `Alce` returned no prior Alce cleanup note in `zio/zio`. | **No-send.** Even without a duplicate Alce note, the target issue is a crowded bounty implementation thread; adding a paid cleanup offer there would be noisy and reputation-risky. |
| `zio/zio-schema#480` | Open; 15 comments; assigned to `devsprint`; recent comments are implementer attempts/claims. | No duplicate cleanup note found. | **No-send.** Assigned/reserved issue, not a maintainer queue-cleanup ask. |
| `archestra-ai/archestra#4076` | Open; 20 comments; assigned to `denisfl`; active maintainer/assignee implementation discussion. | No duplicate cleanup note found. | **No-send.** Active assigned work thread; public sales note would be intrusive. |
| `coollabsio/coolify#8042` | Open; 44 comments; several `/attempt`/PR comments; bounty/triage/enhancement labels. | No duplicate cleanup note found. | **No-send.** Crowded bounty thread; previous Coolify route was already downgraded for sender/public-thread risk. |

## Replacement cash route

The Data Products lane should stop treating issue-level bounty threads as safe sales surfaces by default. The next buyer action is an owned inbound request tied to the public CRM:

> Maintainers/founders: if your public bounty queue has duplicate attempts, unclear assignment/payout state, or stale bounty labels, request a one-repo cleanup sample from the OSS Bounty Radar custom request form or issue route. Fixed scope: `$50` diagnostic, `$100` cleanup, `$150` cleanup + 7-day public-signal monitor. Public GitHub data only; no credentials or private repo access.

## Kill/scale rule

- Count only a maintainer/founder/custom-request signal asking for cleanup, CSV/details, repo/niche, or budget.
- Do not post paid notes into crowded implementation bounty threads unless a maintainer explicitly asks for cleanup/queue triage in that thread.
- If the owned inbound route stays quiet next cycle, replace this SKU with a different active buyer channel rather than another passive monitor.
