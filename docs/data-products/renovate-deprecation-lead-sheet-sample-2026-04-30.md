# Renovate deprecation lead sheet sample — 2026-04-30

**Product pivot:** after the automation-agency email/direct-route path hit sender/CAPTCHA constraints, this is the replacement paid data product tied to active proof work in Repo Retainers: a public-data-only lead sheet for agencies selling dependency automation hygiene retainers.

**Buyer:** small devtool/maintenance agencies, fractional platform teams, or solo consultants who can turn a verified Renovate config deprecation into a small fixed-fee diagnostic or retainer conversation.

**Price hypothesis:** `$49` for a 25-account CSV with evidence URLs and suggested first action; `$149` for 100 accounts plus a weekly refresh; `$350-$500/mo` downstream implementation retainer is the buyer's resale/fulfillment angle.

**Freshness:** checked 2026-04-30T14:42:32Z through public GitHub Search/API results. Public data only; no private data, no scraping around access controls, no bulk outreach, no fake traction.

## Free sample rows

| account/repo | public signal | evidence URL | why it is a lead | suggested first paid action |
|---|---|---|---|---|
| `slick/slick` | `renovate.json` contains both deprecated `config:base` and `matchPackagePatterns` patterns in GitHub code search result | https://github.com/slick/slick/blob/19597136e240349d4f17a1745b9f37a57b8e2df3/renovate.json | Active OSS/library repo; config cleanup is narrow, reviewable, and has precedent from our owned proof PRs. | Offer a no-pressure Renovate config migration diagnostic: exact diff, no dependency bumps, maintainer can close if unhelpful. |
| `MvvmCross/MvvmCross` | `renovate.json` matched `matchPackagePatterns` public code search | https://github.com/MvvmCross/MvvmCross/blob/ac001e2a95ef4189b9bc0f23941a45f646ad8959/renovate.json | Mature framework repo where dependency automation drift can create persistent maintenance noise. | Offer a fixed-scope Renovate rule migration plus one follow-up dashboard sanity check. |
| `dotansimha/graphql-code-generator` | `renovate.json` matched `matchPackagePatterns` public code search | https://github.com/dotansimha/graphql-code-generator/blob/602df92a94a9632ff3d5f74bb8523e417d00ae62/renovate.json | Developer-tooling repo; dependency automation quality is visibly relevant to maintainers and sponsors. | Offer a public PR-only config cleanup with tests limited to config parse/no product code changes. |
| `adobe-type-tools/afdko` | `renovate.json` matched `config:base` and `matchPackagePatterns` public code search | https://github.com/adobe-type-tools/afdko/blob/cd16e5e5b3e3e88ca4fe4ffd3629c954b117b74f/renovate.json | Organization-backed repo; simple deprecation cleanup can be a gateway proof for broader dependency hygiene work. | Offer a one-file migration diff and dashboard note, explicitly no secrets/access required. |
| `android/health-samples` | `renovate.json` matched `config:base` public code search | https://github.com/android/health-samples/blob/8613828d6309c00bec8a7704cced9fc445bd018f/renovate.json | Large ecosystem sample repo; a clean config modernization can be useful even where paid work is not likely. | Use as a credibility sample / exclude from direct paid outreach unless a maintainer explicitly asks. |

## Downloadable 25-row seed CSV

- Seed file: [`renovate-deprecation-lead-sheet-25-2026-04-30.csv`](./renovate-deprecation-lead-sheet-25-2026-04-30.csv).
- Evidence columns: matched deprecated key, file URL, stars, last pushed date, buyer-fit note, risk flag, recommended channel, and first-action copy.
- Safety use: treat rows as lead candidates, not buyer traction. Large corporate/high-star rows are marked for cautious proof-only use; low-fit rows should be filtered before any paid buyer delivery.

## What a paid CSV adds

- 25-100 rows rechecked immediately before delivery, deduped by organization and current default branch.
- Extra evidence columns: issue/dashboard URL if present, existing competing PR check, repository policy notes, and maintainer-channel confidence.
- Risk columns: corporate/no-solicitation flag, low-fit public-sector/large-platform flag, security/private-data exclusion, and recommended channel (`public PR proof`, `owned sample only`, or `do not contact`).
- Buyer action copy: one sentence the agency can adapt without spam or false claims.

## Kill/scale rule

Scale only if a real agency/consultant asks for the 25-row CSV, requests a niche filter, or opens a paid/custom data request. Kill or reframe if the next cycle produces zero qualified inbound and no safe one-touch route to an actual agency buyer.

## Request route

Open the [custom data request form](https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-custom-request.yml) with `RENOVATE_LEADS`, target niche, and desired row count, or email [alce.ops@gmail.com](mailto:alce.ops@gmail.com?subject=Renovate%20deprecation%20lead%20sheet). No follow-up if not relevant.
