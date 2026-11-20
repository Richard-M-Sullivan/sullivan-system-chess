# Backend Audit Summary

Scope: `backend/` source, config, Prisma schema, migration, and tests. `dist/`, `README.md`, and `node_modules/` were excluded.

## What it does

- **Framework:** NestJS 12 on Express. One module (`AppModule`), one controller, one service.
- **Routes:**
  - `GET /` returns `"Hello From App Service!"`
  - `GET /goodbye` returns `"Goodbye From App Service!"`
- **Startup:** `src/main.ts` listens on `process.env.PORT` or `3000`.
- **Database:** Prisma 7 with PostgreSQL via `@prisma/adapter-pg`.
  - Schema: `User` (id, unique email, optional name) and `Post` (id, title, optional content, `published`, optional `authorId`), with a 1:n relation.
  - One migration (`20261004213746_init`) creates both tables. It matches the schema.
  - **Nothing in `src/` or `test/` uses Prisma.** No `PrismaService` or `PrismaModule` exists.
- **Tests:** Vitest. One unit spec in `src/`, one e2e spec in `test/`.

## Test and build results (run during audit)

| Check | Result |
|---|---|
| `npx vitest run` (unit) | **FAIL**: expects `'Hello World!'`, receives `'Hello From App Service!'` |
| `npx vitest run --config vitest.config.e2e.ts` | **FAIL**: same mismatch on `GET /` |
| `npx tsc --noEmit -p tsconfig.json` | **FAIL** (exit 1): `prisma.config.ts(12,3)`: `'engine'` does not exist in type `PrismaConfig` |
| `oxlint` | Not run |

## Findings

### High

1. **Both test suites fail.** The assertions in `src/app.controller.spec.ts:19` and `test/app.e2e-spec.ts` still expect the template string `'Hello World!'`. The unit test's title also says "Hello World!".
2. **Type-check error in `prisma.config.ts`.** The `engine: "classic"` key is not in the installed `PrismaConfig` type. Remove it, or verify it against the Prisma 7 docs.
3. **Prisma is installed but not wired in.** No client is instantiated and no service is injected. The generated client at `src/generated/prisma` is not imported anywhere, and no script runs `prisma generate`. A fresh clone cannot use the database until both are added.
4. **Build output is committed.** 42 files under `dist/` are tracked by git. `.gitignore` has no `dist` entry.
5. **`DATABASE_URL` is not loaded at app runtime.** Only `prisma.config.ts` imports `dotenv/config`. `main.ts` and the Nest modules do not load `.env`, and there is no `@nestjs/config`. Once the app queries the database, it will fail unless the variable is exported in the environment.

### Medium

6. **Dependencies don't match the stack.**
   - `@prisma/adapter-better-sqlite3` and its `allowScripts` entry for `better-sqlite3` are unused, since the schema is PostgreSQL. Remove them.
   - `@nestjs/mau` (devDependency) is not imported anywhere and is not a package I recognize. Verify it is intended.
   - `"allowScripts"` in `package.json` is not an npm field, so npm ignores it.
   - `ts-node` and `tsx` overlap with the Nest and Vitest tooling.
7. **Broken script.** `"deploy": "nest deploy"` is not a standard Nest CLI command.
8. **`prisma` is a devDependency.** Running `prisma migrate deploy` in production requires dev dependencies to be installed.
9. **No Node version pin.** There is no `engines` field and no `.nvmrc`.
10. **Schema issues:**
    - `Post.published` is `Boolean?`. A nullable flag with a default of `false` is ambiguous. Make it `Boolean @default(false)`.
    - `Post.authorId` is optional and uses `ON DELETE SET NULL`, so deleting a user leaves orphaned posts. Decide whether posts should be required, or cascade on delete.
    - `Post.authorId` has no index. PostgreSQL does not index foreign keys automatically.
    - No `createdAt` or `updatedAt` timestamps.
    - `email` uniqueness is case-sensitive. Normalize emails in the app layer.
    - The schema still has the Prisma starter comments.
11. **Test config gaps.**
    - `vitest.config.ts` matches `**/*.spec.ts`, so it does not pick up `*.e2e-spec.ts`. E2E tests run only through `test:e2e`. This is fine if intentional.
    - `tsconfig.json` sets `"types": ["vitest/globals", "node"]`, and `tsconfig.build.json` extends it, so test globals leak into the production build's type environment.

### Low

12. **`.gitignore` is sloppy.** `/src/generated/prisma` appears three times. There is no `dist/` or `coverage/` entry. `.env` and `node_modules` are correctly ignored.
13. **`.env` contains a leftover commented Prisma template.** It is git-ignored, so it is not a leak, but it is clutter.
14. **No application hardening yet:**
    - No validation pipe, DTOs, or global exception filter
    - No CORS, helmet, or rate limiting
    - No global prefix or API versioning
    - No health endpoint
    - No auth
    - No config validation
    - No `enableShutdownHooks()` in `main.ts`
15. **Template leftovers.** `AppService` returns hardcoded strings. The spec and e2e tests are unchanged from the Nest starter.
16. **Lint not verified.** `oxlint --type-aware` was not run during this audit.

## Suggested order

1. Fix the test expectations, or the service strings, so the suite passes.
2. Resolve the `prisma.config.ts` type error.
3. Add a `PrismaModule` and `PrismaService`, and a `prisma generate` step to install or build.
4. Add `dist/` and `coverage/` to `.gitignore`, then `git rm -r --cached dist`.
5. Remove unused dependencies and fix the `deploy` script.
6. Tighten the schema (`published`, `authorId` relation and index, timestamps).
