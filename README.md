# Proompter

Store and share prompts for effective use of LLM AI chatbots.

## Getting Started

You will need Next.js version 13+ and Node.js version 18+. Refer to https://nextjs.org/docs/getting-started/installation

Clone the repo and install dependencies.

```bash
npm install
```

Setup your .env file. We are using Google for user auth here. You will need to have a Google account with access to GCP.

You will also need a MongoDB database. Here we have used Mongo Altas.

```bash
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=

MONGODB_URI=

# for prod deployment replace localhost with your URL
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXAUTH_SECRET=
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
