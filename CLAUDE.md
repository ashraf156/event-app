# Claude / AI Assistant Guide for Event App

This document serves as a reference for AI agents working on this repository to avoid repeating past mistakes and to adhere to project conventions.

## Architecture & Stack
- **Framework**: Next.js 15 (App Router). *Note: `params` and `searchParams` are Promises.*
- **Database**: MongoDB via Mongoose.
- **Auth**: Clerk (webhooks sync users to MongoDB).
- **Styling**: Tailwind CSS + shadcn/ui + Radix UI. Dark mode via `next-themes`.
- **Forms**: React Hook Form + Zod.
- **Image Hosting**: Cloudinary (`next-cloudinary`).

## Common Gotchas & Past Mistakes to Avoid
1. **Mongoose Environment Variable**: Do not use `MONGO_URI`. The project strictly uses `MONGODB_URI` in `lib/database/index.ts`.
2. **Clerk Themes**: To style the Clerk provider with shadcn, import from `@clerk/themes` (e.g., `import { shadcn } from "@clerk/themes"`). The package `@clerk/ui/themes` does not exist.
3. **Shadcn CLI Failures**: If `npx shadcn@latest add [component]` fails with DNS issues (ENOTFOUND ui.shadcn.com), do not get stuck. Either retry or manually create the component relying on the underlying `@radix-ui` dependencies.
4. **Dark Mode Classes**: We use explicit colors like `bg-gray-50`. Always pair them with dark variants (`dark:bg-gray-900`) so the UI doesn't break when toggling the theme.
5. **Uploads**: Do not suggest UploadThing. We have fully migrated to Cloudinary.

## Commands
- **Dev**: `npm run dev`
- **Install**: `npm install`
- **Lint**: `npm run lint`
