# Next.js Postgres Docker

This is a Next.js application using Docker for containerization and pnpm for package management. It includes PostgreSQL integration using Prisma ORM.

## Prerequisites

- Docker installed on your machine
- pnpm installed globally (`npm install -g pnpm`)

## Getting Started

To get a local copy of this project up and running, follow these simple steps:

1. Clone the repository:

```bash
git clone https://github.com/henzogomes/nextjs-postgres-docker.git
```

2. Navigate into the project directory:

```bash
cd nextjs-postgres-docker
```

3. Install dependencies using pnpm:

```bash
pnpm install
```

## Running the Application

To run the Next.js application with Docker, execute the following command:

```bash
docker-compose up
```

This command will build the Docker containers.

## Start the Next.js development server

```bash
pnpm dev
```

## Scripts

- `dev`: Start the Next.js development server.
- `build`: Build the Next.js application for production.
- `start`: Start the Next.js application in production mode.
- `lint`: Run ESLint for code linting.
- `db:migrate`: Run database migrations to update the database schema.
- `db:migrate:undo`: Rollback the last database migration.
- `db:migrate:make`: Create a new database migration file.

## Dependencies

- [@prisma/client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client): Prisma Client for database access.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [knex](https://knexjs.org/): SQL query builder for Node.js.
- [next](https://nextjs.org/): React framework for server-rendered applications.
- [pg](https://node-postgres.com/): PostgreSQL client for Node.js.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): React package for working with the DOM.
- [ts-node](https://github.com/TypeStrong/ts-node): TypeScript execution environment and REPL for Node.js.

## Dev Dependencies

- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js.
- [@types/react](https://www.npmjs.com/package/@types/react): TypeScript definitions for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): TypeScript definitions for React DOM.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): PostCSS plugin to parse CSS and add vendor prefixes.
- [eslint](https://eslint.org/): JavaScript linter.
- [eslint-config-next](https://github.com/vercel/eslint-config-next): ESLint configuration for Next.js projects.
- [postcss](https://postcss.org/): CSS post-processor.
- [prisma](https://www.prisma.io/): Modern database access toolkit for TypeScript.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
- [typescript](https://www.typescriptlang.org/): JavaScript superset that adds static types to the language.
