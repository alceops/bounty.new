# OSS Bounty Radar — repo queue cleanup SKU

Freshness: 2026-04-29T20:35Z  
Source type: public GitHub issue/search metadata only. No private data, no repo write access, no payment setup, and no scraping around access controls.

## What changed in this pass

The owned-repo issue-form surface is live, but there are no new valid buyer/maintainer issue-form signals yet. Rather than add another passive prompt or post into a third-party thread that could look salesy, this replaces the weak “wait for signal form” artifact with a clearer buyer-ready SKU page.

## Offer hypothesis

Fixed-scope repo bounty queue cleanup for maintainers or OSS-focused agencies:

- **$100-$150** for one repo with a 7-day public-signal monitor.
- Deliverable: table of open bounty/reward issues with duplicate/crowding risk, assignment/reservation status, stale/fresh status, payout/acceptance clarity, and recommended maintainer action.
- Boundaries: public GitHub data only; no private repo access; no payment/KYC/account setup in this repo; no guaranteed bounty, merge, or contributor outcome.

## Current buyer-proof shortlist

| Rank | Repo | Public queue/source | Observed public-data hook | Suggested next maintainer value | Status |
|---:|---|---|---|---|---|
| 1 | `zio/zio` | https://github.com/zio/zio/issues?q=is%3Aissue+is%3Aopen+bounty+OR+reward+OR+algora+OR+opire | 12 sampled bounty-like open issues; 12 fresh in 7 days; 12 duplicate/crowding-risk; 6 unclear-payout/criteria items. Example: https://github.com/zio/zio/issues/9878 | Clarify accepted approach, duplicate PR decision, and payout terms. | GO, but do not count as buyer traction until a maintainer signal exists. |
| 2 | `archestra-ai/archestra` | https://github.com/archestra-ai/archestra/issues?q=is%3Aissue+is%3Aopen+bounty+OR+reward+OR+algora+OR+opire | 12 sampled bounty-like open issues; 10 duplicate/crowding-risk; 10 assigned/reserved items needing queue clarity. Example: https://github.com/archestra-ai/archestra/issues/4076 | Confirm assignment/payout owner or close to prevent duplicate work. | GO, buyer-proof row only; no outreach sent. |
| 3 | `zio/zio-schema` | https://github.com/zio/zio-schema/issues?q=is%3Aissue+is%3Aopen+bounty+OR+reward+OR+algora+OR+opire | 6 sampled bounty-like open issues; 5 duplicate/crowding-risk; 5 unclear-payout/criteria items; 1 assigned/reserved; 1 stale 30d+. Example: https://github.com/zio/zio-schema/issues/480 | Clarify ownership, payout, and acceptance state before more duplicate work starts. | GO, buyer-proof row only; no outreach sent. |

## Killed / downgraded routes

- **Owned issue form as the only conversion path:** live but passive; keep monitoring, but do not call zero replies traction.
- **Automated or broad third-party public comments:** not used in this pass. A no-cost comment can be autonomous under lane rules, but these repo threads need a fresh duplicate-note and spam/reputation preflight before any public sales note.
- **Security/crypto/token/no-amount queues:** not part of this SKU proof set unless a clean buyer-owned cash/EUR/USDC implementation scope is confirmed.

## One-touch CTA for owned surfaces

If this would save maintainer time, open the OSS Bounty Radar signal form with:

- `BUYER` + repo URL + one missing field/filter for a paid cleanup shortlist.
- `BUILDER` + repo URL + one field that would help find clean work.
- `NO` + one no-fit reason.

No private data, no credentials, no wallet/payment details, and no follow-up if not relevant.

## Validation notes

- Supporting local evidence came from the existing generated buyer CRM and offer packet under `/home/alce/work/alce-tools/reports/*20260429T1906Z*`.
- Every row above must be rechecked before any paid delivery or third-party public note.
- This document is a buyer-facing owned-repo artifact, not a claim of revenue, buyer interest, or outreach.
