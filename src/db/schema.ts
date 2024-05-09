import { pgTable, text } from 'drizzle-orm/pg-core';

export const testing = pgTable('testing', {
    id: text("id").notNull().primaryKey(),
    name: text("name")
});
// export const users = pgTable("user", {
//     id: text("id").notNull().primaryKey(),
//     name: text("name"),
//     email: text("email").notNull(),
//     emailVerified: timestamp("emailVerified", { mode: "date" }),
//     image: text("image"),
// });