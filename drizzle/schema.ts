import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(), openId: varchar("openId", { length: 64 }).notNull().unique(), name: text("name"), email: varchar("email", { length: 320 }), loginMethod: varchar("loginMethod", { length: 64 }), role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(), createdAt: timestamp("createdAt").defaultNow().notNull(), updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(), lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const enquiries = mysqlTable("enquiries", {
  id: int("id").autoincrement().primaryKey(), name: varchar("name", { length: 160 }).notNull(), businessName: varchar("businessName", { length: 200 }), email: varchar("email", { length: 320 }).notNull(), phone: varchar("phone", { length: 80 }), websiteUrl: varchar("websiteUrl", { length: 500 }), websiteType: varchar("websiteType", { length: 120 }), services: text("services"), projectDescription: text("projectDescription").notNull(), budget: varchar("budget", { length: 120 }), completionDate: varchar("completionDate", { length: 120 }), preferredContact: varchar("preferredContact", { length: 80 }), country: varchar("country", { length: 120 }), status: mysqlEnum("status", ["new", "contacted", "qualified", "proposal", "won", "lost"]).default("new").notNull(), createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const newsletterSubscribers = mysqlTable("newsletterSubscribers", {
  id: int("id").autoincrement().primaryKey(), email: varchar("email", { length: 320 }).notNull().unique(), createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Enquiry = typeof enquiries.$inferSelect;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
