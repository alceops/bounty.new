<br />
<br />
<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>
<br />
<br />

# bounty.new

A modern bounty platform for developers and creators.

## Public data products preview

We are testing a public-data-only **OSS Bounty Radar** for teams that want cleaner bounty/reward queues without sorting through stale, token-paid, claim-ticket, or PR-submission noise.

- Latest premium wedge: [robotics / FPGA / self-hosted DevOps shortlist](docs/data-products/oss-bounty-radar-premium-wedge-2026-04-29.md)
- Free sample Markdown: [OSS Bounty Radar sample](docs/data-products/oss-bounty-radar-sample-2026-04-29.md)
- Free sample CSV: [OSS Bounty Radar sample CSV](docs/data-products/oss-bounty-radar-sample-2026-04-29.csv)
- Route/validation notes: [feedback packet](docs/data-products/oss-bounty-radar-feedback-ask-2026-04-29.md)
- Queue-cleanup SKU: [repo bounty queue cleanup offer](docs/data-products/oss-bounty-radar-queue-cleanup-sku-2026-04-29.md)
- Buyer-route packet: [verified public-data fit-check handoff](docs/data-products/oss-bounty-radar-buyer-route-packet-2026-04-29.md)
- Fit-check execution packet: [manual/sender-ready route handoff](docs/data-products/oss-bounty-radar-fit-check-execution-packet-2026-04-29.md)
- Latest route monitor/replacement: [Evil Martians passive monitor + corrected proof/route packet](docs/data-products/oss-bounty-radar-route-monitor-replacement-2026-04-29.md)

Price hypothesis: `$49` one-off shortlist, `$149/mo` refresh, or `$100-$150` repo-specific queue cleanup. If useful, open the [OSS Bounty Radar signal issue form](https://github.com/alceops/bounty.new/issues/new?template=oss-bounty-radar-signal.yml) with `BUYER`, `BUILDER`, or `NO` plus one missing field/filter. No private data, no scraping around access controls, and no follow-up if not relevant.

<!-- 
## What is bounty.new?

bounty.new connects talented developers with rewarding opportunities through structured bounties. Post tasks, complete challenges, earn rewards.

**For Contributors**

- Browse available bounties
- Submit quality work
- Get paid for your skills
- Build your reputation

**For Project Owners**

- Post bounty tasks
- Access skilled developers
- Get quality work done
- Pay only for results

## Tech Stack

**Frontend**

- Next.js 14 with App Router
- React with TypeScript
- TailwindCSS
- shadcn/ui components

**Backend**

- Next.js API routes
- tRPC for type-safe APIs
- PostgreSQL with Drizzle ORM
- Better Auth with GitHub OAuth

**Development**

- Bun runtime
- Turborepo monorepo
- TypeScript throughout

**Frontend**

- Blog powered by [Marble](https://marblecms.com?utm_source=bountydotnew), Headless CMS.
- Analytics by [Databuddy](https://www.databuddy.cc?utm_source=bountydotnew), 100% Anonymized and Non-invasive.

## Quick Start

**Prerequisites**

- Bun v1.0+
- PostgreSQL v14+
- Node.js v18+

**Setup**

```bash
# Clone and install
git clone https://github.com/ripgrim/bounty.new.git
cd bounty.new
bun install

# Grab a DB string from https://neon.new :3
# URL-encode the username or password portion of your DATABASE_URL if they contain any special characters.

# Configure environment (edit .env)
DATABASE_URL="postgresql://username:password@localhost:5432/bounty_new"
BETTER_AUTH_SECRET="your-secret-key"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
NEXT_PUBLIC_MARBLE_API_URL="https://api.marblecms.com"
MARBLE_WORKSPACE_KEY="your-workspace-key"

# Initialize database and start
bun db:push
bun dev
```

**Access**

- Everything: http://localhost:3000

## Project Structure

## GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create new OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Secret to your `.env` file

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `bun test`
5. Submit a pull request

**Guidelines**

- Follow TypeScript best practices
- Write tests for new features
- Keep components focused
- Use semantic commits

## Deployment

**Vercel**

1. Connect GitHub repository
2. Configure environment variables
3. Deploy on push to main

**Self-hosting**

1. Build: `bun build`
2. Setup PostgreSQL
3. Configure environment
4. Start: `bun start` -->

## Links

- [Issues](https://github.com/ripgrim/bounty.new/issues)
- [Discussions](https://github.com/ripgrim/bounty.new/discussions)
- [License](LICENSE)

---

Ready to earn? Start contributing to bounty.new.
