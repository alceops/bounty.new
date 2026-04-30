# Coolify backup queue mini-sample

Freshness: 2026-04-30T04:01:01Z  
Operator: Data Products Operator  
Source type: public GitHub issues/PRs only.

## Cash-forward purpose

This is a concrete sample deliverable for the OSS Bounty Radar repo-specific queue-cleanup SKU. It turns the abstract `$100-$150` cleanup offer into a buyer-reviewable artifact for one public queue: Coolify backup/Postgres issues around the open `$1,000` pgBackRest bounty.

No outreach was sent from this packet. Use it only as proof in a future one-touch, no-follow-up fit check through a verified safe route.

## Queue readout

| Item | Public source | Live state | Payout / status signal | Recommended maintainer action |
|---|---|---:|---|---|
| pgBackRest for Postgres backups | https://github.com/coollabsio/coolify/issues/7423 | Open issue; labels include `💎 Bounty`, `$1K`, `🔍 Triage`; 30 comments | `$1,000` bounty via Algora; maintainer note says it replaces #7172 | Treat as the anchor bounty; route reviewers to current PR #7556 before accepting new `/attempt` noise. |
| pgBackRest support implementation | https://github.com/coollabsio/coolify/pull/7556 | Open PR; labels include `🙋 Bounty claim`, `💤 Waiting for changes`, `📑 Waiting for Docs PR`; updated 2026-04-29 | Active claimed work against #7423 | Ask for the missing changes/docs in one maintainer checklist; mark issue #7423 as “claimed, PR pending” to reduce duplicate attempts. |
| Backup retention fractional GB bug | https://github.com/coollabsio/coolify/issues/9794 | Open issue; labels include `🚧 Next`, `🐞 Confirmed Bug`, `✅ Done`; last comment says fix queued | Confirmed/done signal but issue still open | Close after release verification or add release target; do not include in bounty/open-work shortlist. |
| S3 upload failed due Docker rate limit | https://github.com/coollabsio/coolify/issues/9514 | Open issue; `🐛 Possible Bug`; 8 comments | User pain, no bounty label | Cluster with helper-image/rate-limit backup failures; request one current repro on latest version before assigning. |
| Long database backups stuck in progress | https://github.com/coollabsio/coolify/issues/8139 | Open issue; `🐛 Possible Bug`, `🔍 Triage`; 5 comments | Maintainer-aware but stale since Feb 2026 | Keep as related pain proof for pgBackRest; needs fresh reproduction before paid/open contributor attention. |
| Integrated backups for Git Docker Compose | https://github.com/coollabsio/coolify/issues/7528 | Open issue; labels include `💎 Bounty`, `$200`; 46 comments | `$200` bounty, multiple attempts/comments | Mark current owner/status explicitly or close superseded attempts; high duplicate/crowding risk. |
| Backup not initiating in custom compose | https://github.com/coollabsio/coolify/issues/9417 | Open issue; `🔍 Triage`; 1 bot comment | No bounty; likely related to compose backup detection | Link to #7528 if duplicate or request minimal repro; keep out of paid shortlist until triaged. |
| Restore/import backup file type issue | https://github.com/coollabsio/coolify/issues/9860 | Open issue; labels include `🐞 Confirmed Bug`, `✅ Done`; updated 2026-04-29 | Confirmed/done signal; active user discussion | Close after verifying fix in current version or document workaround; not a bounty lead. |

## Buyer value hypothesis

A repo-specific cleanup would save maintainer time by separating:

1. **Active paid/claimed work:** #7423 → PR #7556.
2. **Crowded paid work needing status hygiene:** #7528.
3. **Confirmed/done issues that should be closed or release-linked:** #9794, #9860.
4. **Pain signals that support the paid backup theme but need fresh repro:** #9514, #8139, #9417.

Price hypothesis remains `$100-$150` for one repo queue cleanup, or `$49` for a narrow shortlist. The ask to a buyer should be: “Would this exact queue readout save enough maintainer time to justify a one-repo cleanup? If not, what field is missing?”

## Safety / ethics

All rows are public GitHub URLs checked live in this runtime. No private data, no scraping around access controls, no fake traction, no public comment on Coolify threads, no contact-form submit, no spend/payment/KYC/account setup, and no wallet/on-chain action.
