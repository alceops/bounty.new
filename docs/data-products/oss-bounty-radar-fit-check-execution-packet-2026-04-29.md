# OSS Bounty Radar — fit-check execution packet

Freshness: 2026-04-29T22:04:28Z  
Operator: Data Products Operator  
Source type: public GitHub/contact URLs and owned repository assets only.

## Cash-forward action

ALC-109 asked to convert the buyer-route packet into one safe fit-check signal or a stronger replacement. Live preflight found no configured email sender (`himalaya` is not installed) and kept automated third-party form posting killed because the current candidate routes either have captcha/reputation risk or are generic manual-only pages.

So this cycle produced the safer buyer-ready execution packet instead of fabricating outreach: a one-page handoff with verified proof URLs, route decisions, and exact one-touch copy for a future manual/sender fit check. This preserves the cash path while avoiding spam, captcha bypass, payment/KYC/account setup, and fake traction.

## Keep these proof rows in any buyer pitch

| Proof row | Public source | Live evidence | Use |
|---|---|---|---|
| Coolify pgBackRest | https://github.com/coollabsio/coolify/issues/7423 | HEAD 200; GET 200 contains `$1,000` | Premium DevOps/self-hosted proof only; do **not** public-comment there because thread context is reputation-sensitive. |
| LitePCIe ECP5/PCIe funding | https://github.com/enjoy-digital/litepcie/issues/20 | HEAD 200; GET 200 contains `11,400 EUR` | Premium FPGA/hardware proof; validate current availability before paid delivery. |
| Neuronav ORB-SLAM3 / Docker / ROS2 | https://github.com/neuronav-io/neuronav-slam-sdk/issues/1 | HEAD 200; GET 200 contains `$500 USD` | Premium robotics proof; use corrected owner/repo URL only. |
| Public sample CSV | https://raw.githubusercontent.com/alceops/bounty.new/main/docs/data-products/oss-bounty-radar-sample-2026-04-29.csv | HEAD 200; GET 200 contains Coolify, LitePCIe, Neuronav, `$1,000`, `11,400 EUR`, `$500 USD` | Attachment/link for fit checks. |

## Route decision table

| Route | Live check | Decision |
|---|---|---|
| Evil Martians contact page — https://evilmartians.com/contact-us | HEAD 200; GET 200, static HTML contains `contact`; no static captcha marker observed in this check | Best manual/sender candidate for exactly one no-follow-up fit check if a sender/manual runtime is available. Do not automate submit without a live human preflight. |
| Test Double contact page — https://testdouble.com/contact | HEAD 200; GET 200 contains `captcha`, `recaptcha`, and `turnstile` markers | Killed for automated cron fit-check. Manual only, if ever used. |
| Bitovi contact page — https://www.bitovi.com/contact | HEAD 200; GET 200 contains contact page markers; prior HubSpot API submit rejected with `FORM_HAS_RECAPTCHA_ENABLED` | Killed for automated cron fit-check. Manual only. |
| NearForm contact page — https://www.nearform.com/contact/ | HEAD 200; GET 200 after redirect to `nearform.com/contact/` | Generic route; keep as watchlist, not first fit-check target. |
| Owned GitHub signal form | Public new-issue route exists but anonymous creation can redirect to GitHub login | Keep live, but prior owned-only prompts produced no valid buyer signal, so do not count as traction. |

## Exact one-touch copy for a manual/sender run

Subject: Public OSS bounty queue cleanup fit check

Body:

> We are testing a public-data-only OSS Bounty Radar for teams that triage bounty/reward queues. The useful part may be a repo-specific cleanup: duplicate/crowding risk, current payout clarity, assignment/reservation status, stale/fresh status, and a recommended maintainer action.
>
> Public sample CSV: https://raw.githubusercontent.com/alceops/bounty.new/main/docs/data-products/oss-bounty-radar-sample-2026-04-29.csv
>
> Would this save enough maintainer/agency time to justify a `$100-$150` one-repo cleanup or a `$49` one-off shortlist? If not, what one field/filter is missing? No follow-up needed if not relevant.

## Kill / replace decision

Killed for this cycle:

- Automated contact-form execution for Test Double/Bitovi because of captcha/runtime risk.
- Public comments on bounty issue threads as a sales route because they are spam/reputation-sensitive.
- Another owned-only issue prompt as the active route because prior owned prompts attracted non-buyer builder replies or zero valid signals.

Replacement:

- Publish this execution packet as the current buyer-ready handoff.
- Next safe action: either use a confirmed sender/manual route for exactly one no-follow-up fit check to the best route above, or replace with a new buyer route after fresh public URL and reputation preflight.

## Safety / ethics

All evidence is public URL verification. No private data, scraping around access controls, fake traction, deception, repeated follow-up, payment setup, KYC/account setup, wallet/on-chain action, or spend. Ordinary truthful no-cost fit checks remain autonomous only when legal, ToS-safe, non-spammy, and reputation-safe; spend/payment/KYC/account/legal identity/wallet/on-chain or material risk still requires Corey routing.
