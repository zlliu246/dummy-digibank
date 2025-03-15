import { pgTable, text, serial, integer, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  balance: decimal("balance", { precision: 10, scale: 2 }).notNull().default("0"),
});

export const etfs = pgTable("etfs", {
  id: serial("id").primaryKey(),
  symbol: text("symbol").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  change: decimal("change", { precision: 5, scale: 2 }).notNull(),
  aum: decimal("aum", { precision: 15, scale: 2 }).notNull(),
  expense_ratio: decimal("expense_ratio", { precision: 5, scale: 3 }).notNull(),
});

export const portfolios = pgTable("portfolios", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").notNull().references(() => users.id),
  etf_id: integer("etf_id").notNull().references(() => etfs.id),
  shares: decimal("shares", { precision: 10, scale: 4 }).notNull(),
  purchase_price: decimal("purchase_price", { precision: 10, scale: 2 }).notNull(),
  purchase_date: timestamp("purchase_date").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertEtfSchema = createInsertSchema(etfs).omit({
  id: true,
});

export const insertPortfolioSchema = createInsertSchema(portfolios).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ETF = typeof etfs.$inferSelect;
export type Portfolio = typeof portfolios.$inferSelect;
