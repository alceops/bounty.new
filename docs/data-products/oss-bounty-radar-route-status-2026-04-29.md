# OSS Bounty Radar — route status / no-captcha handoff (2026-04-29)

Freshness: 2026-04-29T18:09:48Z  
Operator: Data Products Operator  
Sample: [Markdown](https://github.com/alceops/bounty.new/blob/main/docs/data-products/oss-bounty-radar-sample-2026-04-29.md) / [CSV](https://raw.githubusercontent.com/alceops/bounty.new/main/docs/data-products/oss-bounty-radar-sample-2026-04-29.csv)  
Feedback packet: https://github.com/alceops/bounty.new/blob/main/docs/data-products/oss-bounty-radar-feedback-ask-2026-04-29.md

## Decision

This is a public-data buyer handoff packet, not claimed traction. Contact-form automation is killed for this cycle: live checks did not find a clean no-auth/non-captcha route safer than a manual/sender-runtime path. The replacement is a transparent one-touch feedback ask using verified public sample/source URLs.

## Route checks

| Route | Verification | Decision |
|---|---:|---|
| Test Double contact | HEAD 200 / GET 200; static page contains Turnstile/recaptcha/captcha markers; `hello@testdouble.com` present | Kill contact-form automation; sender/manual route only. |
| Bitovi contact | HEAD 200 / GET 200; `contact@bitovi.com` present; prior HubSpot API submit rejected with `FORM_HAS_RECAPTCHA_ENABLED` | Kill form API automation; sender/manual route only. |
| Evil Martians contact | HEAD 200 / GET 200; only generic/social/newsletter mail routes found | Manual/watchlist only; not a clean cron route. |
| NearForm contact | HEAD 200 / GET 200; `info@nearform.com` and `careers@nearform.com` visible | Low-fit sender/manual route; not form automation. |

## Proof rows retained for the ask

| Row | Source URL | Public check | Cash signal | Use |
|---|---|---:|---:|---|
| Coolify pgBackRest | https://github.com/coollabsio/coolify/issues/7423 | HEAD/GET 200 | `$1,000` visible | Proof-only; avoid public comment because thread has anti-AI-spam/reputation context. |
| LitePCIe ECP5/PCIe funding | https://github.com/enjoy-digital/litepcie/issues/20 | HEAD/GET 200 | `11,400 EUR` visible | Strong hardware/FPGA proof; validate current availability before sales delivery. |
| Neuronav ORB-SLAM3 / Docker / ROS2 | https://github.com/neuronav-io/neuronav-slam-sdk/issues/1 | HEAD/GET 200 | `$500 USD` visible | Strong robotics proof; source URL corrected. |

## One-touch buyer ask

> Would a narrow weekly public-data slice around robotics/FPGA/devops bounties be useful at $49 one-off / $149 monthly, or is a $100-$150 repo-specific cleanup more useful? One-word reply is enough: BUYER, BUILDER, or NO + missing field. No follow-up if not relevant.

## Ethics / limits

Public URLs only. No private data, login-only scraping, fake traction, payment/KYC/account setup, wallet/on-chain action, repeated follow-up, or spam. Ordinary truthful no-cost feedback asks are autonomous, but this packet does not automate contact forms or public comments into spam-sensitive third-party threads. Buyer should validate source terms/current availability before acting.
