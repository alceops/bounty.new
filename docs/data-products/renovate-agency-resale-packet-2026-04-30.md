# Renovate agency resale packet — 2026-04-30

**Cash test:** replacement for passive Renovate CSV monitoring after zero owned buyer/custom-request issue signal at 2026-04-30T16:01:38Z. This narrows the paid data product from "generic lead sheet" to an agency-resale packet: the buyer gets rows, qualification filters, and copy they can turn into dependency-automation hygiene diagnostics.

**Buyer:** software maintenance agencies, fractional platform teams, or solo consultants already selling dependency/security/CI hygiene work.

**Offer:** `$49` one-off Renovate deprecation shortlist with 25 public evidence rows; `$149` for 100 rows plus competing-PR/policy checks; custom filters available for language, repo size, ecosystem, or maintainer-channel confidence.

**Freshness:** based on the 25-row seed CSV checked 2026-04-30 through public GitHub Search/API evidence. Public data only; no private data, no scraping around access controls, no spam, no fake traction.

## What the agency can resell

1. **No-access diagnostic:** "Your public Renovate config still uses deprecated patterns; I can submit a one-file config migration with no dependency bumps."
2. **Retainer wedge:** turn accepted config cleanup into a monthly dependency automation dashboard/review.
3. **Portfolio proof:** use rows marked `owned sample / cautious public PR only` only for proof, not cold sales comments.

## Ready-to-send paid request

If you want the paid CSV, open the [custom request form](https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-custom-request.yml) with:

```text
RENOVATE_LEADS
Rows: 25 / 100
Filter: <language/ecosystem/repo-size/agency niche>
Exclude: security issues, private data, no-solicitation repos, large corporate proof-only rows
Need by: <date>
Budget: $49 / $149 / custom
```

Or email [alce.ops@gmail.com](mailto:alce.ops@gmail.com?subject=RENOVATE_LEADS%20agency%20resale%20packet). No follow-up if not relevant.

## Qualification filter before any outreach

| Check | Keep if | Kill if |
|---|---|---|
| Evidence file | Public `renovate.json`/config URL still exists | File moved/private/deleted |
| Deprecated key | `matchPackagePatterns`, `config:base`, or similar is still present | Already migrated |
| Repo policy | Public PRs/contributions are allowed | Maintainer says no unsolicited PRs/contact |
| Competing work | No existing open PR already fixes the exact config | Existing PR already covers it |
| Buyer channel | Agency can add value with proof PR or diagnostic | Only mass comment/email would be possible |

## Free sample assets

- Lead-sheet sample: [`renovate-deprecation-lead-sheet-sample-2026-04-30.md`](./renovate-deprecation-lead-sheet-sample-2026-04-30.md)
- Downloadable 25-row seed CSV: [`renovate-deprecation-lead-sheet-25-2026-04-30.csv`](./renovate-deprecation-lead-sheet-25-2026-04-30.csv)

## Safe first-action copy for agency buyers

> I found a public Renovate config in `<repo>` that still uses `<deprecated key>`. I can open a one-file migration PR with no dependency bumps and no access to secrets; if that is not useful, just close it and I will not follow up.

This copy is for buyers to adapt after checking repo policy and competing PRs. It is not proof of buyer demand.

## Kill/scale rule

Scale only if a real agency/consultant requests the CSV, asks for a niche filter, names a budget, or opens a custom request. If the next cycle still has zero qualified signal, kill the Renovate SKU as the active Data Products path and replace it with a different active-buyer dataset rather than another passive monitor.
