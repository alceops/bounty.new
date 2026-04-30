# Algora-style bounty sponsor ops sample

**Freshness:** checked 2026-04-30T21:26:48Z with GitHub public search/API.  
**Scope:** public GitHub issue metadata only. No private data, no account/KYC/payment setup, no wallet/on-chain action, no bounty claim, no thread posting.

## Why this replaces the Ubiquity thread route

The prior Ubiquity #997 route was killed because the issue thread is crowded, implementation-focused, and assignment-sensitive. This replacement keeps the same paid-bounty-queue pain but moves the cash test to **maintainers/sponsors who already publish dollar-priced bounty labels across GitHub** instead of commenting in one noisy implementation issue.

## Buyer hypothesis

Teams using Algora-style bounty labels have an explicit budget signal (`💎 Bounty`, `💰 Rewarded`, or dollar labels) and a recurring operator problem: crowded bounty threads, reserved/interview labels, duplicate claims, stale handoffs, and unclear next maintainer action.

Offer: `$100` public-data cleanup table for one repo queue, or `$150` table plus 7-day monitor. Deliverable is a sponsor/maintainer-facing report with:

- top open bounty rows by update recency and comment load;
- amount/reservation/noise flags;
- recommended maintainer action;
- ready-to-post contributor-facing clarification when useful;
- no implementation work and no bounty claim.

## Seed sample

Download the 17-row seed CSV: [`algora-bounty-ops-sample-2026-04-30.csv`](algora-bounty-ops-sample-2026-04-30.csv)

Representative rows:

| Repo | Issue | Amount signal | Comments | Queue signal | Why it fits |
|---|---:|---:|---:|---|---|
| `keephq/keep` | [#2112](https://github.com/keephq/keep/issues/2112) | `$4.5k` | 73 | crowded | high-dollar provider bounty with heavy thread load |
| `tscircuit/schematic-trace-solver` | [#29](https://github.com/tscircuit/schematic-trace-solver/issues/29) | `$100` | 48 | crowded | bounty label plus many comments/coordination risk |
| `archestra-ai/archestra` | [#3854](https://github.com/archestra-ai/archestra/issues/3854) | `$250` | 7 | active | explicit bounty amount plus reservation label |
| `coollabsio/coolify` | [#8042](https://github.com/coollabsio/coolify/issues/8042) | `$50` | 44 | crowded | public bounty/triage labels with thread noise |

## No-send rule

Do not post sales notes into these bounty issues without a fresh reputation preflight. The safe first route is owned/email only:

- email `alce.ops@gmail.com` with subject `BOUNTY_SPONSOR ops cleanup`, repo URL, role, and `$100` or `$150` tier;
- or use the custom request issue form in this repo.

## Named paid-output preview

To make the cash offer concrete, the current top row now has a one-repo preview: [`keephq/keep#2112` SNMP bounty sponsor cleanup](keephq-snmp-sponsor-cleanup-preview-2026-04-30.md). It shows the exact public-data fields a `$100` sponsor cleanup table would include: bounty amount, thread-noise count, open-PR collision map, maintainer risk, recommended sponsor action, and a ready-to-post clarification snippet.

## Kill condition

If this sponsor-ops sample plus the named `keephq/keep#2112` paid-output preview get zero qualified maintainer/sponsor signal after one monitor window, park the bounty-cleanup SKU and switch Data Products to a different active-buyer public-data product rather than creating another passive monitor.
