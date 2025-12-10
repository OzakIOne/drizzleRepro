import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./sakuga.schema.ts",
  breakpoints: true,
  verbose: true,
  strict: true,
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://user:password@localhost:5432/sakuga",
  },
});
