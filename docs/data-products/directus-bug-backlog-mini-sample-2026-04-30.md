# Directus bug backlog mini-sample — OSS Bounty Radar

Generated: 2026-04-30T10:51:05Z  
Source: public GitHub issues from `directus/directus`, filtered to open issues with label `Bug`; security/vulnerability-labeled issues excluded.  
Purpose: show the paid queue-cleanup readout format for a mature commercial OSS project with a long-lived bug backlog.

## Why this repo is a better replacement route

The current n8n route has not produced an owned buyer/custom-request signal yet. Directus is a higher-fit Data Products sample because its public queue has many older bugs already categorized by product area (`Studio`, `Engine`, `Data Modeling`, `Validation`, `UX / DX`). That makes the sellable deliverable clearer: a maintainer-ready stale-bug shortlist with recommended close/confirm/escalate actions.

Price hypothesis remains: `$49` one-off shortlist, `$100-$150` repo-specific cleanup packet, or `$149/mo` refresh.

## Public-data sample rows

| Issue | Public labels | Last public update | Comments | Queue-cleanup readout |
|---|---:|---:|---:|---|
| [#24789 — Way to get rid of dangling relation entries](https://github.com/directus/directus/issues/24789) | Bug, Studio, Engine, CRUD | 2025-07-17 | 1 | Cross-area data integrity item. Confirm whether latest relation cleanup behavior still reproduces; if not, close with version note. |
| [#24608 — Validation bypass allows adding more items after save when variant is 'row'](https://github.com/directus/directus/issues/24608) | Bug, Validation, Engine | 2025-07-17 | 1 | Potential validation/regression item. Ask for current reproduction on latest release and mark stale if no response. |
| [#24669 — Error on migrate schema from SQLite to PostgreSQL, again](https://github.com/directus/directus/issues/24669) | Bug, Data Modeling, Engine | 2025-07-17 | 2 | Migration-path issue; likely needs environment/version details before engineering action. |
| [#24857 — Translation files generate a `< at 1:1` error](https://github.com/directus/directus/issues/24857) | Bug, Data Modeling, Studio | 2025-07-17 | 3 | Repro specificity appears high enough to route to Studio/Data Modeling owner for confirm-or-close. |
| [#25217 — Confirmation modal in Visual Editor does not always close on Escape](https://github.com/directus/directus/issues/25217) | Bug, Studio | 2025-07-17 | 1 | UX bug with likely small surface area; verify on current visual editor before keeping open. |
| [#25070 — Time formatting is broken in hu-HU locale](https://github.com/directus/directus/issues/25070) | Bug, Studio, UX / DX | 2025-07-17 | 1 | Locale-specific bug; good candidate for reproducible minimal case or close-if-fixed check. |
| [#25222 — "Create New" in Many-To-Many relationship overwrites existing item](https://github.com/directus/directus/issues/25222) | Bug, Studio, Engine | 2025-07-17 | 3 | Potential data-loss perception; prioritize current-version reproduction before stale closure. |
| [#25427 — Builder (M2A): Launch-icon opens empty form instead of related item](https://github.com/directus/directus/issues/25427) | Bug, UX / DX | 2025-07-17 | 1 | Targeted UI flow. Confirm current route behavior and link duplicate/related M2A items if present. |

## Paid deliverable this sample is designed to sell

For a buyer/maintainer, the paid version would add:

1. a 25-50 issue dedupe/staleness table grouped by owner label;
2. suggested maintainer comments for close/needs-repro/confirm/escalate;
3. duplicate and related-PR links from public GitHub search;
4. a 7-day refresh pass so newly answered issues are moved out of the queue.

## Conversion route

If this exact format is useful, open the [custom data request form](https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-custom-request.yml) with `Directus`, `n8n`, `Formbricks`, or another public repo. For a lower-friction signal, email [alce.ops@gmail.com](mailto:alce.ops@gmail.com?subject=OSS%20Bounty%20Radar%20Directus%20sample) or use the [OSS Bounty Radar signal form](https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-signal.yml).

## Safety notes

- Uses only public GitHub issue metadata.
- Does not claim Directus requested, endorsed, or paid for this sample.
- Excludes security/vulnerability-labeled issues by default.
- No scraping around access controls, no private data, no fake traction.
