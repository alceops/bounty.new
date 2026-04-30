# OSS Bounty Radar — automation agency backlog triage buyer packet (2026-04-30)

This replaces the broad/passive buyer-decision surface with a narrower cash test for **automation agencies, workflow consultants, and plugin builders** who need source-linked OSS backlog intelligence before pitching or scoping client work.

## Buyer segment

- Agencies building n8n, Directus, Formbricks, or self-hosted DevOps integrations.
- Freelancers who sell maintenance, migration, workflow, or plugin retainers and need public proof of repo pain.
- OSS sponsors who want a short queue-cleanup readout before posting bounties.

## Paid offer hypothesis

| Offer | Price hypothesis | Delivery | Decision trigger |
|---|---:|---|---|
| Automation agency shortlist | `$49` one-off | 5-10 public issues across one tool category, each with source URL, owner activity, crowding/duplicate risk, and suggested pitch angle | Buyer needs a fast list of credible outreach/scoping targets |
| Repo backlog triage readout | `$100-$150` one-off | One repo queue map: stale/crowded/unassigned/high-signal issues, unsafe exclusions, and recommended cleanup or bounty actions | Buyer already works around that repo/tool and wants a scoped maintenance lane |
| Monthly radar refresh | `$149/mo` hypothesis | Recurring delta report for one repo/category with newly qualified issues and changed risk | Buyer needs continuous sourcing for a retainer pipeline |

No payment is collected here. A request is a fit check until scope and payment route are agreed outside GitHub.

## Proof rows already shipped

- [n8n bug backlog mini-sample](n8n-bug-backlog-mini-sample-2026-04-30.md) — workflow automation queue slice suitable for agency/plugin backlog scouting.
- [Directus bug backlog mini-sample](directus-bug-backlog-mini-sample-2026-04-30.md) — commercial OSS admin/data-platform queue slice.
- [Formbricks bug backlog mini-sample](formbricks-bug-backlog-mini-sample-2026-04-30.md) — product analytics/support queue slice.
- [Coolify backup queue cleanup sample](coolify-backup-queue-mini-sample-2026-04-30.md) — self-hosted DevOps backup issue slice.

## One-touch request copy

Use this if the buyer wants a concrete first scope:

> I want an OSS Bounty Radar readout for `<repo/org/category>`. I would consider paying `<$49 / $100-$150 / $149 monthly>` if it identifies public issues with source URLs, freshness, crowding/duplicate risk, and a suggested action/pitch angle. Please exclude security/vulnerability issues and anything needing private data.

## Fit-check route

Open a [custom data request](https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-custom-request.yml) with:

1. repo/org/category;
2. target offer tier;
3. what would make the report worth buying;
4. any exclusion rules.

Or email [alce.ops@gmail.com](mailto:alce.ops@gmail.com?subject=Automation%20agency%20OSS%20Bounty%20Radar%20fit%20check) with the same four bullets.

## Safety / ethics

- Public data only: GitHub issues/PRs, public bounty pages, public docs.
- No private contact scraping, credentialed data, captcha bypass, spam, or fake traction.
- Security/vulnerability-labeled issues are excluded by default unless a separate reviewed security/compliance scope exists.
- Opt-out: ask for a repo/org to be removed from future public samples.

## Kill condition

If this narrower automation-agency packet still produces zero buyer/custom-request/email signal after the next distribution check, stop iterating GitHub-only passive pages. Replace it with either a direct one-touch safe outreach to a verified agency route or a different paid data product tied to an active buyer conversation.
