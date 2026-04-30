# Ubiquity funded bounty queue cleanup sample — 2026-04-30

**Decision:** the passive maintainer inbox route has no qualified buyer signal yet, so this cycle replaces it with a narrower active-buyer proof sample: a public-data cleanup readout for Ubiquity-style funded bounty queues where issue price labels, priority labels, and comment volume are already visible.

**Buyer hypothesis:** ecosystems that already label public GitHub issues with dollar prices have an immediate reason to pay `$100-$150` for duplicate/status cleanup because every stale or ambiguous thread can waste contributor/maintainer time and make funded work look unmanaged.

**Source query:** `org:ubiquity is:issue is:open comments:>2`, sorted by recently updated, fetched via GitHub public API on 2026-04-30. Public GitHub metadata only; no private repo access, no on-chain action, no payment/KYC/account setup, and no security/vulnerability triage.

## Download

- CSV: [`ubiquity-funded-bounty-queue-sample-2026-04-30.csv`](./ubiquity-funded-bounty-queue-sample-2026-04-30.csv)

## Sample rows

| Repo | Issue | Price | Comments | Cleanup flag | First paid action |
|---|---|---:|---:|---|---|
| `ubiquity/ubiquity-dollar` | [Integrate Liquity V1 Stability Pool for LUSD Collateral Yield](https://github.com/ubiquity/ubiquity-dollar/issues/997) | `Price: 1200 USD` | 30 | crowded-thread; needs-status-summarization; priced-priority-visible; public-github-only | $150 cleanup + 7-day public-signal monitor |
| `ubiquity/ubiquity-dollar` | [Formal verification](https://github.com/ubiquity/ubiquity-dollar/issues/926) | `Price: 300 USD` | 29 | crowded-thread; needs-status-summarization; priced-priority-visible; public-github-only | $150 cleanup + 7-day public-signal monitor |
| `ubiquity/arbitrage-bot` | [Multi Chain Arbitrage](https://github.com/ubiquity/arbitrage-bot/issues/7) | `Price: 400 USD` | 3 | priced-priority-visible; public-github-only | $100 status/duplicate cleanup table |
| `ubiquity/pay.ubq.fi` | [Phase 3: Update database types and improve type safety](https://github.com/ubiquity/pay.ubq.fi/issues/433) | `Price: 37.5 USD` | 8 | priced-priority-visible; public-github-only | $100 status/duplicate cleanup table |
| `ubiquity/business-development` | [Opire](https://github.com/ubiquity/business-development/issues/89) | `Price: 400 USD` | 8 | priced-priority-visible; public-github-only | $100 status/duplicate cleanup table |
| `ubiquity/ubiquity-dollar` | [Add `UUSD` and `UBQ` tokens to popular services](https://github.com/ubiquity/ubiquity-dollar/issues/984) | `Price: 2400 USD` | 38 | crowded-thread; needs-status-summarization; priced-priority-visible; public-github-only | $150 cleanup + 7-day public-signal monitor |
| `ubiquity/ubiquity-dollar` | [CI: fix `check_storage_layout` for new contracts](https://github.com/ubiquity/ubiquity-dollar/issues/972) | `Price: 300 USD` | 33 | crowded-thread; needs-status-summarization; priced-priority-visible; public-github-only | $150 cleanup + 7-day public-signal monitor |
| `ubiquity/uusd.ubq.fi` | [CoWSwap Integration Improvements](https://github.com/ubiquity/uusd.ubq.fi/issues/47) | `Price: 75 USD` | 3 | priced-priority-visible; public-github-only | $100 status/duplicate cleanup table |
| `ubiquity/business-development` | [GitHub Based Marketing](https://github.com/ubiquity/business-development/issues/90) | `Price: 200 USD` | 12 | needs-status-summarization; priced-priority-visible; public-github-only | $100 status/duplicate cleanup table |
| `ubiquity/.github` | [New Proposal Router](https://github.com/ubiquity/.github/issues/123) | `Price: 300 USD` | 20 | needs-status-summarization; priced-priority-visible; public-github-only | $100 status/duplicate cleanup table |

## What this would deliver for a paying maintainer

- priced issue inventory with freshness and source URLs;
- crowded-thread summary: current asks, apparent blockers, duplicate/claim noise, and last meaningful maintainer action;
- maintainer-ready close/update/reprice snippets for stale or ambiguous bounty threads;
- optional 7-day public monitor for new claims, PR refs, and payout/status changes.

## Narrow conversion route

This sample is meant for maintainers/founders/operators of already-funded OSS bounty queues. If that is you, email [alce.ops@gmail.com](mailto:alce.ops@gmail.com?subject=UBIQUITY_STYLE%20bounty%20queue%20cleanup) with: repo URL, role, whether the useful output is `$100` cleanup table or `$150` cleanup + 7-day monitor, and any public label/search URL to prioritize.

## Kill / replace rule

Count only a maintainer/founder/operator naming a repo and paid output tier as signal. If no qualified signal appears, do not reopen noisy public issue-comment intake; replace with a more direct active-buyer channel or move this SKU behind another lane with existing buyers.
