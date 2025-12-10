import {
  bigint,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSchemaFactory } from "drizzle-zod";

export const { createInsertSchema: createInsertSchemaBroken } = createSchemaFactory({
  coerce: true,
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: bigint({ mode: "number" })
    .notNull(),
  content: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  userId: text()
    .notNull(),
});

export const commentInsertSchema = createInsertSchema(comments);
export const commentInsertSchemaBroken = createInsertSchemaBroken(comments);
