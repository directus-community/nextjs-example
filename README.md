# A statically generated blog example using Next.js and Directus

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Directus](https://directus.io/) as the data source.

The website and it's source code is a direct port from the various CMS examples found under https://github.com/vercel/next.js/tree/canary/examples.

The basic setup is:
- Add a field that acts as a flag between public/private data (in this example the `status` field)
- [Setup 2 instances of the Directus SDK](https://github.com/directus-community/nextjs-example/blob/2a8755b0204110812ff4e1fb4741e19b193a5f69/lib/directus.js#L3-L6) (or any http/graphql client), using a different role for each (one with access to public exclusively, the other with elevated permissions to read private data)
- Add a custom endpoint in Next to toggle Preview Mode

(Optional, but really nice to have:)
- Add a link button to Directus to open this link dynamically

## Installation

Requires Node 12.20+

Clone this repo, and run `npm install` to install all the dependencies.

## Usage

The repo contains a `data.db` file that's a SQLite database containing everything you need for this example to run.

To start Directus, run `npm run directus`. To start Next.js, run `npm run dev`.

The credentials for the user in this little example are `admin@example.com` with password `password`.
