<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Event App Project Rules & Context (DO NOT FORGET)

## 1. Environment Variables & Database (Mongoose)
- The database connection string must be named `MONGODB_URI` (NOT `MONGO_URI`).
- Always use the cached connection logic in `lib/database/index.ts` to prevent connection exhaustion in serverless environments.

## 2. Authentication (Clerk)
- When integrating Clerk with Shadcn UI, the correct import path is `import { shadcn } from "@clerk/themes"`, NOT `@clerk/ui/themes`.

## 3. Image Uploads (Cloudinary)
- We are using **Cloudinary** (`next-cloudinary`), not UploadThing.
- The `CldUploadWidget` component requires `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` to be present in `.env.local`.

## 4. UI & Styling (Shadcn UI + Tailwind)
- If the `npx shadcn@latest add ...` command fails due to DNS issues (`ui.shadcn.com` unreachable), manually create the components using the underlying Radix UI primitives.
- The project supports dark mode via `next-themes`. When adding custom light backgrounds (like `bg-primary-50` or `bg-gray-50`), always remember to include the corresponding dark variant (e.g., `dark:bg-gray-900`).

## 5. Next.js 15 Specifics
- Page route `params` and `searchParams` are now **Promises**. You MUST `await` them before destructuring (e.g., `const { id } = await params;`).
