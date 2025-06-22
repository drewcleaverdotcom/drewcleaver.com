# drewcleaver.com

This repository contains the scaffolding for **drewcleaver.com** built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/).

## Running locally

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

## Newsletter Signup

The homepage includes a newsletter signup form that sends subscribers to Klaviyo.
Create a `.env.local` file with the following variables:

```bash
KLAVIYO_PRIVATE_KEY=your_private_key
KLAVIYO_LIST_ID=your_list_id
```

Restart the development server after adding environment variables.
