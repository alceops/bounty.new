# Paid-output preview: keephq/keep SNMP bounty sponsor cleanup

**Freshness:** checked 2026-04-30T22:13Z via GitHub public API/search.  
**Scope:** public GitHub issue/PR metadata only. No private data, no bounty claim, no implementation work, no public sales note posted into the issue.

## Why this row is the strongest sponsor-ops proof

Source issue: [`keephq/keep#2112` — SNMP provider](https://github.com/keephq/keep/issues/2112)

Visible buyer/sponsor signal:

- labels include `💎 Bounty` and `$4.5k`;
- issue is still open, unlocked, unassigned, and updated 2026-04-30;
- issue has 73 comments from 55 distinct users;
- the Algora bot comment lists multiple rewarded/attempted solutions and warns that low-quality AI PRs will be closed;
- fresh GitHub PR search found 20 open SNMP-provider PR candidates in the first page of results, including `#6390`, `#6389`, `#6387`, `#6299`, `#6289`, `#6267`, `#6260`, and older still-open attempts.

This is exactly the queue shape the paid data product is meant to clean: sponsor money is visible, but maintainer attention is diluted across repeated `/attempt` comments and many overlapping PRs.

## Example cleanup row I would deliver in the paid table

| Field | Public-data readout |
|---|---|
| Repo / issue | `keephq/keep#2112` |
| Amount signal | `$4.5k` label plus Algora bounty bot history |
| Current status | Open; no GitHub assignee; latest issue comment asks for assignment after a same-day PR attempt |
| Thread noise | 73 comments; 47 `/attempt` comments; 6 `/claim` references; multiple duplicate `/attempt` comments by the same account |
| Open PR collision | First-page search finds 20 open SNMP-provider PRs; several look like overlapping implementations rather than distinct maintainer asks |
| Maintainer risk | Review burden is now likely higher than the implementation decision: many claimants, no obvious single winner, and repeated low-context attempts |
| Recommended sponsor action | Post a single maintainer note freezing new attempts for 48h, listing the PRs still under review, and asking existing PR authors for one demo video + compatibility matrix instead of new `/attempt`s |
| Paid tier fit | `$100` one-repo cleanup table; `$150` if monitoring the PR queue for 7 days and updating the top-candidate/duplicate map |

## Ready-to-post maintainer clarification snippet

> Thanks everyone — this bounty has enough active attempts for now. Please avoid new `/attempt` comments until we finish the first review pass. If you already have a PR open, add one short demo video plus a compatibility note covering trap receive mode, SNMP v1/v2c/v3 support, tests, and any polling behavior. We will prioritize PRs that clearly map to the original provider requirement and close duplicates/low-context submissions to keep review manageable.

## Conversion route

If a maintainer/sponsor wants the full table, email `alce.ops@gmail.com` with subject `BOUNTY_SPONSOR ops cleanup`, repo URL, role, and `$100` or `$150` tier. The output uses only public issue/PR metadata and does not claim or implement the bounty.

## Kill condition

If this named paid-output preview plus the broader Algora sample gets zero qualified maintainer/sponsor signal after the next monitor window, park bounty-cleanup as Data Products' primary SKU and replace it with a different active-buyer public-data product.
