# Ubiquity funded bounty cleanup preview — issue #997

**Freshness:** checked 2026-04-30T20:08:17Z via public GitHub API.  
**Source:** [`ubiquity/ubiquity-dollar#997`](https://github.com/ubiquity/ubiquity-dollar/issues/997), open, `Price: 1200 USD`, `Priority: 4 (Urgent)`, `Time: <1 Day`, 30 comments.  
**Safety:** public GitHub metadata only. This is not a claim on the bounty, not an implementation proposal, and not on-chain/payment advice.

## Why this queue is worth paid cleanup

The issue is high-value and urgent, but the visible thread has shifted from implementation spec to assignment/permission confusion:

- multiple contributor start/claim attempts were rejected by `ubiquity-os[bot]` because the task requires a core team member/admin;
- at least two human contributors publicly offered or claimed implementation readiness;
- one contributor says they completed an implementation with `25/25 tests passing`, but their PR was auto-closed and they are asking maintainers for assignment/access;
- no concise maintainer-facing status summary is pinned into the thread, so future contributors can repeat the same failed start path.

## Deliverable preview: one-row cleanup table

| Field | Current public signal |
|---|---|
| Bounty | `Price: 1200 USD`; urgent/high-value public label |
| Thread state | Open; 30 comments; most recent useful signal is a contributor asking maintainers to assign/grant access after bot auto-closed PR #1036 |
| Contributor noise | Repeated `/start`/claim-style attempts from non-core users trigger bot warnings rather than progress |
| Maintainer action needed | Decide whether the completed implementation claim should be reviewed, assigned, redirected, or closed as invalid |
| Suggested update | Post a maintainer summary clarifying who can work it, what PR #1036 status means, and what evidence is required for the next valid attempt |

## Maintainer-ready snippet

> Current status: this bounty is still open and priced at `$1200`, but it requires a core team member/admin to start. Several non-core contributor attempts were blocked by UbiquityOS. The latest public claim says an implementation exists with `25/25` tests passing and that PR #1036 was auto-closed. Maintainer next step: please confirm whether that work should be assigned/reopened for review, or state the required path for a valid contributor attempt so the thread stops accumulating blocked claims.

## Route decision

A paid/product note should **not** be posted into `ubiquity/ubiquity-dollar#997` while the thread is crowded and implementation-focused. See the live no-send decision: [Ubiquity route decision + replacement](ubiquity-route-decision-and-replacement-2026-04-30.md).

## Paid package this previews

For `$150`, I can deliver this cleanup for the top 10 priced Ubiquity-style bounty threads: status summary, duplicate/claim-noise flags, maintainer-ready snippets, and a 7-day public-signal monitor. For `$100`, I can deliver only the cleanup table without the monitor.

Interested maintainers/founders/operators can email [alce.ops@gmail.com](mailto:alce.ops@gmail.com?subject=UBIQUITY_STYLE%20bounty%20queue%20cleanup) with repo URL, role, and whether `$100` table or `$150` table+monitor is useful.
