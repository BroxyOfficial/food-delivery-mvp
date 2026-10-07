# food-delivery-mvp

A robust MVP starter for a food delivery app inspired by Zomato and Swiggy.

## Stack
- Web: Next.js + React + TypeScript
- Mobile: Expo + React Native
- API: NestJS + Prisma + PostgreSQL

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure your database in `.env` for Prisma:
   ```bash
   DATABASE_URL=postgresql://user:password@localhost:5432/food_delivery
   ```

3. Generate and push Prisma schema:
   ```bash
   npm run db:generate
   npm run db:push
   ```

4. Start the API:
   ```bash
   npm run dev:api
   ```

5. Start the web app:
   ```bash
   npm run dev:web
   ```

6. Start the mobile app:
   ```bash
   npm run dev:mobile
   ```

## MVP features included
- Customer landing page
- Restaurant listing screen
- Mobile restaurant cards
- Basic NestJS API
- Prisma models for users, restaurants, menu, cart, orders, and reviews
- Seed script for sample restaurants

## Next build plan
- authentication and profiles
- cart + checkout
- restaurant dashboard
- delivery tracking
- payment integration
- admin panel
