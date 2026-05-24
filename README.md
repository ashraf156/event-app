# Event App 

A modern, full-stack event management and ticketing platform built with Next.js 15. This application allows users to discover, create, and manage events, as well as purchase tickets.

## 🚀 Features

- **Authentication & Authorization**: Secure user authentication powered by [Clerk](https://clerk.com/), including profile management and webhook synchronization with MongoDB.
- **Event Management (CRUD)**: Users can create, read, update, and delete their own events.
- **Image Uploads**: Seamless integration with [Cloudinary](https://cloudinary.com/) for fast, optimized event image uploads.
- **Modern UI/UX**: Built with Tailwind CSS and [shadcn/ui](https://ui.shadcn.com/) for a beautiful, responsive, and accessible interface.
- **Dark Mode**: Fully supported system and manual dark mode toggling using `next-themes`.
- **Form Validation**: Robust client and server-side validation using React Hook Form and Zod.
- **Database**: Flexible schema design with MongoDB and Mongoose.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui & Radix UI
- **Database**: MongoDB & Mongoose
- **Authentication**: Clerk
- **Forms**: React Hook Form & Zod
- **Image Hosting**: Cloudinary

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd event-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env.local` file in the root directory and add the following keys:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # Cloudinary Image Uploads
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `/app`: Next.js App Router pages and layouts (`(auth)` and `(root)` route groups).
- `/components`: Reusable UI components (shared and shadcn/ui components).
- `/lib`: Utility functions, database configuration, and Server Actions (`actions` folder).
- `/lib/database/models`: Mongoose schemas (User, Event, Category, Order).
- `/public`: Static assets like images and fonts.

## 📝 License

This project is licensed under the MIT License.
