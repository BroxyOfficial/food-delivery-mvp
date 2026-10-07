# food-delivery-mvp

A monorepo starter for a food delivery platform inspired by Zomato/Swiggy.

## Tech stack
- Web: Next.js + Tailwind CSS
- Mobile: Expo + React Native
- API: NestJS + Prisma + PostgreSQL
- Shared: TypeScript utilities, DTOs, and constants

## Apps
- `apps/web`: customer web app and admin dashboard shell
- `apps/mobile`: customer and delivery app shell
- `apps/api`: backend API with a health route

## Quick start

```bash
npm install
npm run dev:web
npm run dev:api
```

## Notes
This repository is intentionally scaffolded as an MVP foundation. It is designed for rapid iteration and extension into restaurant listings, cart/checkout, order tracking, and delivery management.
