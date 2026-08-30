# Airline Protocol

Professional **Airline Operations Control + Commercial Pilot Operations** platform connected to **MSFS 2020/2024**.

## Monorepo Apps

- `apps/web` — Next.js frontend (Operations UI)
- `apps/api` — NestJS backend API + WebSocket gateway
- `apps/sim-bridge` — Local bridge service scaffold for SimConnect integration

## Packages

- `packages/shared` — Shared types and contracts (events, phases, DTOs)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - run web + api concurrently
- `npm run dev:web` - run frontend
- `npm run dev:api` - run backend
- `npm run build` - build all
- `npm run lint` - lint all

## Notes

This is the initial scaffold focused on architecture, contracts, and operational domain foundations.
