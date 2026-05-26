# template-sveltekit-hono

A monorepo template for SvelteKit frontend + Hono API projects.

## Structure

```
packages/
  client/   — SvelteKit frontend
  server/   — Hono API
```

## Setup

```bash
# Clone and install
bun install

# Copy env files
cp packages/server/.env.example packages/server/.env

# Start dev servers
bun run dev
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start client and server in parallel |
| `bun run check` | tsc + knip + eslint + bun audit |
| `bun run test` | Vitest with coverage |
| `bun run ci` | check + test (same as CI) |

## Architecture

- **Client** (`packages/client`) — SvelteKit app. Server-side data fetching via `+page.server.ts`. Styles via CUBE CSS + Open Props.
- **Server** (`packages/server`) — Hono API. One router per domain boundary. Thin handlers, business logic in `src/lib/`. Inputs validated with Zod. Structured logging with pino.

## Gotchas

- Secrets go in `packages/server/.env` — never commit it. See `.env.example`.
- Run `bun outdated` and update patch/minor before starting new feature work.
- Major dep updates require manual review — check changelogs.
