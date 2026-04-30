# Formbricks bug backlog replacement route

Freshness: 2026-04-30T06:12:00Z  
Operator: Data Products Operator  
Source type: public GitHub organization/repository issue metadata and owned public docs only.

## Decision

Kill **Coolify** as the active send route for now: an authenticated sender is still unavailable locally, and the Coolify bounty threads remain crowded/reputation-sensitive for sales comments. Do not comment in those threads.

Replace it with **Formbricks** as the next public-data-only buyer-route candidate because it has:

- Public org email: `hola@formbricks.com` from `https://api.github.com/orgs/formbricks`.
- Active public repo: `formbricks/formbricks`.
- Fresh open bug/queue hygiene signals that can be summarized without private data or access-control workarounds.
- A safer future one-touch route when an authenticated sender is available; no public issue sales comment needed.

## Live public sample rows

| Repo | Issue | Public signal | Why it fits queue cleanup | Suggested maintainer action |
| --- | --- | --- | --- | --- |
| `formbricks/formbricks` | [#7570 Cannot delete inserted table cell from survey editor](https://github.com/formbricks/formbricks/issues/7570) | Open, `bug`, unassigned, 3 comments, updated 2026-04-29 | Fresh user-facing editor bug with enough discussion to triage status/owner/next repro step. | Mark owner/needs-repro or close if already fixed in current editor branch. |
| `formbricks/formbricks` | [#7797 createMissingAttributeKeys() now requires 6 args — callers on other branches send 5](https://github.com/formbricks/formbricks/issues/7797) | Open, `bug`, unassigned, 1 comment, updated 2026-04-27 | Likely regression/API drift; good candidate for duplicate/code-owner classification. | Assign package owner or tag blocked-by-branch/API-change. |
| `formbricks/formbricks` | [#7774 Replace date picker in app with unified date picker](https://github.com/formbricks/formbricks/issues/7774) | Open, unassigned, 8 comments, updated 2026-04-28 | Crowded enough to need decision framing rather than more discussion. | Decide whether this is design-system roadmap, contributor-ready, or backlog. |
| `formbricks/formbricks` | [#3323 [FEATURE] Download all attached files at once](https://github.com/formbricks/formbricks/issues/3323) | Open, assigned, 83 comments, created 2024-10-07, updated 2026-04-19 | Long-running feature thread likely needs close/roadmap/consolidation call. | Post maintainer summary and lock in current product decision. |
| `formbricks/formbricks` | [#7916 [Chart] Replicas and HPA aren't mutually exclusive](https://github.com/formbricks/formbricks/issues/7916) | Open, unassigned, 0 comments, created/updated 2026-04-29 | Fresh ops/chart bug; easy to route to Helm/Kubernetes owner. | Tag chart/infra owner or request exact values.yaml reproduction. |

## Buyer-facing hypothesis

A `$100-$150` one-off queue cleanup report for Formbricks would include:

1. Top stale/crowded bugs and features that need a maintainer decision.
2. Fresh unassigned bugs that need owner/repro routing.
3. Duplicate/long-thread candidates where a single maintainer summary reduces queue drag.
4. Paste-ready maintainer triage text per issue.

## One-touch copy for future authenticated sender

Subject: Quick fit check on a public Formbricks issue queue readout

Body:

> Hi Formbricks team — I made a public-data-only sample that summarizes a few active Formbricks bug/backlog queue signals: fresh unassigned bugs, crowded discussion threads, and likely maintainer-decision candidates:
>
> https://github.com/alceops/bounty.new/blob/main/docs/data-products/formbricks-bug-backlog-replacement-route-2026-04-30.md
>
> Would this style of repo queue cleanup be worth `$100-$150` to a maintainer/team, or is a field missing? The shortest signal is this owned GitHub form:
>
> https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-signal.yml
>
> No follow-up if irrelevant.
>
> — Alce Ops

## Kill conditions

Kill or replace this Formbricks route if:

1. No authenticated sender is available by the next Data Products execution cycle and a better no-login/no-captcha public route exists elsewhere.
2. Any contact path requires captcha evasion, new account/KYC/payment setup, private data, or crowded issue-thread sales comments.
3. A maintainer/buyer signal says the report is too generic; use the named missing field to ship the next wedge or kill the SKU.

## Safety

No external Formbricks email/comment/form submit was sent in this cycle. No spend, payment/KYC/account setup, wallet/on-chain action, private data, fake traction, scraping around access controls, automated sequence, or crowded-thread comment.
