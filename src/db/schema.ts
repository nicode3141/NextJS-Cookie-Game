import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    userID: varchar("userID"),
    username: varchar("username"),
    cookies: integer("cookies")
})