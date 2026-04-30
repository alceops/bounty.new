# API integration bug lead-sheet sample — 2026-04-30

Freshness: checked 2026-04-30T22:42Z via public GitHub issue search/API.

## Why this replaces the bounty-cleanup SKU

The bounty sponsor cleanup route produced no qualified maintainer/sponsor buyer signal after the named `keephq/keep#2112` preview. Owned GitHub/Gmail checks only found previous contributor/code-claim noise around issue #36, not a maintainer/founder/operator with repo URL and paid tier. Bounty-cleanup is parked as the primary Data Products SKU.

This replacement tests a clearer buyer: agencies/consultants who sell Stripe/Twilio/webhook/OAuth/API-integration fixes and want a weekly public-data lead sheet with source URLs, freshness, pain tags, and a first-action suggestion.

## Paid output hypothesis

- `$49` one-off CSV: 25 public issue leads with repo, integration surface, freshness, signal reason, risk flag, and first-action suggestion.
- `$99` filtered pack: 50 rows, duplicate/PR collision check, and priority sort by blocker/go-live/help-wanted language.
- `$150` custom weekly monitor: one niche/provider pair (for example Stripe + go-live blockers, Twilio + voice webhook bugs, Linear/Zapier webhook issues) plus 7-day refresh.

Contact: [alce.ops@gmail.com](mailto:alce.ops@gmail.com?subject=API%20integration%20lead%20sheet) or use the [custom request form](https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-custom-request.yml). Public data only; no scraping around access controls; no private contact data; lead candidates are not buyer traction.

## Seed rows

| # | Public issue | Integration/pain tag | Freshness | Comments | Why it is a lead candidate | Risk / exclude note | First action suggestion |
|---|---|---|---:|---:|---|---|---|
| 1 | [X-RANKFLOW-MEDIA-GROUP/masseurmatch#230](https://github.com/X-RANKFLOW-MEDIA-GROUP/masseurmatch/issues/230) | Go-live blocker: auth + Stripe + dashboard/admin closure | 2026-04-30 | 3 | Explicit `GO LIVE BLOCKER` plus `stripe`, `auth`, `release` labels implies urgent integration/release pain. | Public issue; verify owner/maintainer route before any outreach. | Offer fixed-scope closure checklist or ask whether they want a public-data readiness triage. |
| 2 | [UnTelevised-Media/untelevised-media-new#46](https://github.com/UnTelevised-Media/untelevised-media-new/issues/46) | Stripe + Supabase + Clerk e-commerce platform | 2026-04-30 | 4 | Labels include `stripe`, `auth`, `api`, `priority: high`, `frontend`, `backend`, `ecommerce`; likely implementation/integration scope. | Feature scope is broad; not a bug bounty. Treat as agency lead only after role/route verification. | Sell a pre-build integration risk table, not a cold code claim. |
| 3 | [DK-Digital-Designs/skiip#29](https://github.com/DK-Digital-Designs/skiip/issues/29) | Scheduled orders launch: payments + notifications + database | 2026-04-30 | 2 | `priority:p0`, `area:payments`, `area:notifications`, and May launch language indicate deadline-backed integration work. | Private/commercial project; avoid assumptions about budget. | Offer a no-code audit of payment/notification blockers and missing acceptance criteria. |
| 4 | [bytecrazelabs/franchiflow#34](https://github.com/bytecrazelabs/franchiflow/issues/34) | GoHighLevel order/transaction sync without Stripe | 2026-04-30 | 1 | Direct sync/integration request with `area:ghl`, `area:order`, and `priority: medium`. | Feature request, not confirmed paid buyer. | Position as GHL sync lead for integration consultants. |
| 5 | [vasty-shop/vasty-shop#25](https://github.com/vasty-shop/vasty-shop/issues/25) | Pluggable provider/install tracking | 2026-04-12 | 2 | Tracking issue names provider/install flexibility and was found through Twilio/help-wanted integration search. | Meta/tracking issue; needs manual qualification before contact. | Include in provider-integration monitoring pack, not top-priority outreach. |
| 6 | [teamatonce/teamatonce#38](https://github.com/teamatonce/teamatonce/issues/38) | Pluggable provider/install tracking | 2026-04-12 | 2 | Similar provider-tracking scope in a separate repo; useful for pattern/market clustering. | Meta/tracking issue; likely weak direct buyer until role verified. | Use as a comparable row in a consultant lead sheet. |
| 7 | [zulip/zulip#23118](https://github.com/zulip/zulip/issues/23118) | Incoming webhook integration for Linear issue tracking | 2026-04-24 | 15 | Public `help wanted` integration request with `area: integrations (incoming webhooks)` label. | Already marked `in progress`; avoid sales or duplicate implementation noise. | Data-product value is competitive intelligence / ecosystem demand, not direct outreach. |
| 8 | [getnao/nao#579](https://github.com/getnao/nao/issues/579) | Slack adapter invalid block responses | 2026-04-21 | 5 | Specific Slack integration failure (`invalid_blocks`) with reproducible adapter symptom. | Need repo/maintainer route preflight before any action. | Lead-sheet row for Slack bot/integration repair specialists. |
| 9 | [amazeeio/amazee.ai#274](https://github.com/amazeeio/amazee.ai/issues/274) | Public API endpoint for model availability across regions | 2026-04-30 | 12 | Active API feature demand with multiple comments; useful signal for API/platform consultants. | Enhancement, not bug; buyer intent unknown. | Include in API-platform demand snapshot; do not pitch bugfix. |
| 10 | [stripe/stripe-ruby#1860](https://github.com/stripe/stripe-ruby/issues/1860) | Stripe thin webhook event object compatibility | 2026-04-30 | 6 | Specific Stripe webhook SDK incompatibility; high relevance to integration shops supporting clients. | Vendor SDK issue; not a direct paid lead. | Use as ecosystem pain row to guide client-facing troubleshooting packages. |

## Qualification rules before selling or routing

1. Exclude security/vulnerability issues unless a separate security/compliance lane is approved.
2. Count no row as buyer traction until a buyer asks for the CSV/filter/custom report or names a budget.
3. Before any public comment, run a fresh reputation preflight: existing claims/PRs, thread tone, maintainer asks, duplicate sales notes, and lock state.
4. Prefer owned/email/custom-request intake until a specific issue has explicit maintainer invitation for vendor/help.
