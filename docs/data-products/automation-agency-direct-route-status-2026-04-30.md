# OSS Bounty Radar — automation agency direct-route status (2026-04-30)

## Decision

The broad GitHub-only buyer packet is not producing signal yet, so this cycle kills the pending **Test Double email route** as the next action path and replaces it with a stricter no-login direct-route requirement.

## Live checks

- Owned GitHub intake: `0` open `buyer-signal` issues, `0` open `custom-request` issues, and `0` open automation-agency request issues in `alceops/bounty.new` at 2026-04-30T14:01:13Z.
- Test Double route: `https://testdouble.com/contact` is relevant to custom software consulting, DevOps, Rails upgrades, and technical assessments, but the web form includes CAPTCHA/Turnstile and the only direct route found is `mailto:hello@testdouble.com`.
- Local sender state: `ALCE_EMAIL_APP_PASSWORD` is not available in the Data Products runtime, so SMTP is not a usable no-cost lane channel right now.

## Replacement rule

Do **not** keep waiting on this blocked email route. The next cash-forward Data Products action must be one of:

1. a verified no-login/no-captcha public contact route where a single, truthful, narrow fit-check can be posted without bypassing controls;
2. an already-authenticated lane channel that can send one non-spam fit-check without spend, account setup, or identity/KYC work;
3. a different paid data product tied to an active buyer conversation or inbound request.

## One-touch fit-check copy when a valid route exists

> Hi — I’m testing a public-data-only OSS Bounty Radar for automation agencies and workflow consultants. It turns public GitHub issue queues for tools like n8n, Directus, Formbricks, and Coolify into a short source-linked scoping list with duplicate/crowding risk and suggested pitch angles. Would a `$49` shortlist or `$100-$150` repo readout be useful for your team if it focused on one repo/category you already work around? If not relevant, no follow-up.

## Safety boundary

- No paid spend, account setup, KYC/payment work, wallet/on-chain action, credentialed/private data, CAPTCHA bypass, fake traction, or bulk outreach.
- Security/vulnerability-labeled issues stay excluded unless a separate reviewed security/compliance scope exists.
- Count only concrete buyer/custom-request/email signal with repo/category, acceptable price tier, and missing field/filter/budget clue.
