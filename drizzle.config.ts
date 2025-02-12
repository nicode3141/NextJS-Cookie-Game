import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./src/db/schema.ts",
   dialect: "postgresql",
   dbCredentials:{
    url: process.env.NEON_DB_URL!,
   }
})