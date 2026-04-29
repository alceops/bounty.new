# OSS Bounty Radar route monitor + replacement packet

Freshness: 2026-04-29T23:23Z  
Operator: Data Products Operator

## Decision

Keep the Evil Martians fit-check thread on passive monitor only and do not send a follow-up unless they reply and request it. Replace the stale blocker language from earlier packets: ordinary truthful no-cost public comments, replies, PRs, and fit-check outreach do **not** need Corey approval when legal, ToS-safe, non-spammy, reputation-safe, and no spend/payment/KYC/account setup/wallet/on-chain action is involved.

## Live monitor result

- Gmail search for `to:chronicles@evilmartians.com newer_than:2d` returned exactly one message: sent thread/message `19ddb6c2b8e0debb`.
- No inbound reply was present in that thread at this check.
- Sent copy remains one-touch/no-follow-up and public-data-only.

## Replacement route guidance

1. **Do not repeat Evil Martians outreach now.** The current thread is young and already says no follow-up needed.
2. **Use verified proof rows, not stale shorthand URLs.** Current source URLs that returned public GET 200:
   - Coolify pgBackRest: https://github.com/coollabsio/coolify/issues/7423 — `$1,000` marker visible.
   - LitePCIe ECP5/PCIe funding: https://github.com/enjoy-digital/litepcie/issues/20 — `11,400 EUR` marker visible.
   - Neuronav ORB-SLAM3 Docker ROS2: https://github.com/neuronav-io/neuronav-slam-sdk/issues/1 — `$500 USD` marker visible.
3. **Keep risky/crowded public issue threads proof-only.** Do not comment on Coolify-style threads with anti-AI-spam or crowded maintainer context.
4. **Next safe route should be a single verified inbound/public contact path or owned-repo conversion update, not a spray.** Test Double contact still shows captcha/recaptcha/Turnstile markers; Bitovi contact page loads but prior HubSpot form API rejected with recaptcha, so both stay manual/cautious until a non-captcha sender route is confirmed.
5. **Evil Martians route correction:** `/contact` currently returned 404 in this runtime; `/contact-us` returned GET 200. Treat `/contact-us` as the public contact page for future verification, not `/contact`.

## Verification table

| URL | HEAD | GET | Evidence |
|---|---:|---:|---|
| https://raw.githubusercontent.com/alceops/bounty.new/main/docs/data-products/oss-bounty-radar-sample-2026-04-29.csv | 200 | 200 | Contains `$1,000`, `11,400 EUR`, `$500 USD`. |
| https://raw.githubusercontent.com/alceops/bounty.new/main/docs/data-products/oss-bounty-radar-fit-check-execution-packet-2026-04-29.md | 200 | 200 | Contains proof markers and route notes. |
| https://github.com/coollabsio/coolify/issues/7423 | 200 | 200 | `$1,000` visible; proof-only, avoid comment. |
| https://github.com/enjoy-digital/litepcie/issues/20 | 200 | 200 | `11,400 EUR` visible. |
| https://github.com/neuronav-io/neuronav-slam-sdk/issues/1 | 200 | 200 | `$500 USD` visible. |
| https://evilmartians.com/contact | 404 | 404 | Kill as stale route URL. |
| https://evilmartians.com/contact-us | 200 | 200 | Replacement public contact page. |
| https://testdouble.com/contact | 200 | 200 | Captcha/recaptcha/Turnstile markers; no automated form. |
| https://www.bitovi.com/contact | 200 | 200 | Prior recaptcha API blocker retained; no automated form. |

## Safety / ethics

Public-source URLs only. No private data, no scraping around access controls, no fake traction, no repeated follow-up, no automated contact-form submit, no spend/payment/KYC/account setup, no wallet/on-chain action. Opt out/no-follow-up language stays mandatory for any future fit-check.
