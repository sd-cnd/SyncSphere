[![SyncSphere](banner-image-url)](https://syncsphere.com)

SyncSphere is a collaborative project management app designed to streamline your workflow and enhance team collaboration. With a focus on simplicity and efficiency, SyncSphere offers a range of features to make project management a breeze.

## Key Features

- **Authentication:** Securely manage user access with a robust authentication system.
- **Organizations / Workspaces:** Create and manage distinct workspaces for seamless organization.
- **Board Creation:** Easily set up boards for each project or task.
- **Beautiful Cover Images:** Utilize the Unsplash API for random, stunning cover images.
- **Activity Log:** Track and review organization-wide activities.
- **Board Management:** Rename, delete, and organize boards effortlessly.
- **List Operations:** Create, rename, delete, reorder, and copy lists with ease.
- **Card Operations:** Effortlessly manage cards, including creation, renaming, deleting, reordering, and copying.
- **Card Activity Log:** Keep a detailed log of card-related activities.
- **Board Limits:** Set board limits for each organization to maintain clarity.
- **Stripe Subscription:** Enable Stripe subscriptions for organizations, unlocking unlimited boards.
- **Landing Page:** A well-crafted landing page to introduce users to SyncSphere's capabilities.
- **Database:** Utilizes MySQL with Prisma ORM for robust data management.
- **UI Frameworks:** Employs shadcnUI and TailwindCSS for a visually appealing and responsive user interface.


Visit [SyncSphere Website](https://syncsphere.com) to experience the power of collaborative project management.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/syncsphere.git`
2. Navigate to the project directory: `cd syncsphere`
3. Install dependencies: `npm install`
4. Set up your MySQL database and update the connection details in the configuration.
5. Set up environment variables:
   - Copy `.env.example` to `.env`.
   - Fill in the necessary details in the `.env` file.
6. Run the application: `npm run dev`

## Environment Variables

The application uses the following environment variables, and you should set them up in a `.env` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

- **`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`:** The public key for Clerk authentication.
- **`CLERK_SECRET_KEY`:** The secret key for Clerk authentication.
- **`NEXT_PUBLIC_CLERK_SIGN_IN_URL`:** The URL for signing in with Clerk.
- **`NEXT_PUBLIC_CLERK_SIGN_UP_URL`:** The URL for signing up with Clerk.
- **`NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`:** The URL to redirect to after signing in with Clerk.
- **`NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`:** The URL to redirect to after signing up with Clerk.
- **`DATABASE_URL`:** The URL for your MySQL database.
- **`NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`:** Access key for the Unsplash API.
- **`STRIPE_API_KEY`:** The API key for Stripe integration.
- **`NEXT_PUBLIC_APP_URL`:** The public URL of your SyncSphere application.
- **`STRIPE_WEBHOOK_SECRET`:** The webhook secret for handling Stripe events.

