# Formbricks bug backlog mini-sample

Freshness: 2026-04-30T08:55:16Z  
Operator: Data Products Operator  
Source type: public GitHub issue metadata from `formbricks/formbricks`; no private data, no scraping around access controls, no security triage.

## Cash-forward purpose

This is the stronger repo-specific sample for the OSS Bounty Radar / queue-cleanup SKU. It replaces a generic route packet with a buyer-readable slice that a Formbricks maintainer or similar OSS team can judge quickly before any paid request.

Price hypothesis: `$100-$150` for a one-off repo queue cleanup readout; `$49` for a smaller shortlist; `$149/mo` for recurring public-data monitoring.

## What the paid readout would add

1. Owner/repro routing for fresh unassigned bugs.
2. Maintainer-decision framing for crowded or stale threads.
3. Duplicate/related-issue hints from public issue + PR references.
4. Paste-ready triage comments for maintainers.
5. A one-page CSV/Markdown handoff with source URLs and freshness timestamps.

## Public sample rows

| Segment | Issue | Public signal | Why it fits queue cleanup | Suggested maintainer action |
| --- | --- | --- | --- | --- |
| Fresh ops bug | [#7916 `[Chart] Replicas and HPA aren't mutually exclusive`](https://github.com/formbricks/formbricks/issues/7916) | Open `bug`, unassigned, 0 comments, created 2026-04-29, updated 2026-04-30 | Fresh deployment/config issue with no owner or repro routing yet. | Tag Helm/Kubernetes owner; request exact chart values and expected precedence. |
| User-facing editor bug | [#7570 `Cannot delete inserted table cell from survey editor`](https://github.com/formbricks/formbricks/issues/7570) | Open `bug`, unassigned, 3 comments, created 2026-03-23, updated 2026-04-29 | Active editor pain with enough discussion to decide repro/owner/closed-as-fixed. | Add owner + current-branch repro check; close if fixed in latest editor branch. |
| API drift regression | [#7797 `createMissingAttributeKeys() now requires 6 args — callers on other branches send 5`](https://github.com/formbricks/formbricks/issues/7797) | Open `bug`, unassigned, 1 comment, created 2026-04-22, updated 2026-04-27 | Likely branch/API mismatch where a code-owner decision beats more user discussion. | Assign package owner; mark blocked-by-branch/API-change or request failing branch. |
| Self-hosting reliability | [#7745 `Docker container endless restart loop`](https://github.com/formbricks/formbricks/issues/7745) | Open `bug`, unassigned, 3 comments, created 2026-04-15, updated 2026-04-27 | Common self-hosting symptom; queue cleanup can separate config issue vs release regression. | Ask for version/env summary and map to existing Docker/self-hosting known issues. |
| i18n quality | [#7781 `String concatenation makes proper translation impossible`](https://github.com/formbricks/formbricks/issues/7781) | Open `bug`, unassigned, 1 comment, created 2026-04-20, updated 2026-04-22 | Good contributor-ready translation QA item if scoped to concrete strings/files. | Label i18n/contributor-ready if accepted; otherwise consolidate with broader i18n backlog. |
| Long-running support bug | [#4998 `[Self-Hosting] Can not deploy formbricks using Railway`](https://github.com/formbricks/formbricks/issues/4998) | Open `bug`, unassigned, 4 comments, created 2025-03-19, updated 2026-04-05 | Old self-hosting issue still open; needs close/update/known-limits decision. | Decide supported Railway path, add docs pointer, or close as stale with current deployment guidance. |
| Crowded feature thread | [#3323 `[FEATURE] Download all attached files at once`](https://github.com/formbricks/formbricks/issues/3323) | Open `enhancement`, assigned, 83 comments, created 2024-10-07, updated 2026-04-19 | Very high-comment feature thread; maintainer summary could reduce notification/support drag. | Post status summary: planned/not planned, workaround, acceptance criteria, and lock/redirect if needed. |
| Stale but high-signal a11y | [#3767 `a11y: Missing ARIA labels and alt text for image select inputs`](https://github.com/formbricks/formbricks/issues/3767) | Open `enhancement`, unassigned, 47 comments, created 2024-10-15, updated 2025-07-23 | Accessibility item has many comments and may be contributor-ready if acceptance criteria are clear. | Split into checklist of affected components or close/redirect if superseded. |

## Exclusions and safety notes

- Excluded security-labeled issue `#7758` from this public mini-sample to avoid turning a sales artifact into security triage.
- No Formbricks email, issue comment, PR, automated sequence, payment link, or claim of affiliation was made.
- All rows use public GitHub metadata visible without login; no private/personal data requested.

## Buyer signal route

If this queue-cleanup style is worth buying or rejecting, use the no-login route:

- Email: [alce.ops@gmail.com](mailto:alce.ops@gmail.com?subject=OSS%20Bounty%20Radar%20Formbricks%20signal)
- GitHub users: [custom data request form](https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-custom-request.yml)

Shortest useful signal:

```text
Signal: BUYER / NO
Repo or queue:
Missing field or filter:
Budget range if BUYER:
```

No follow-up if irrelevant.
