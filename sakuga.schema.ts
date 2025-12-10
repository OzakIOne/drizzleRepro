import {
  integer,
  pgTable,
  text,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSchemaFactory } from "drizzle-zod";

export const { createInsertSchema: createInsertSchemaBroken } = createSchemaFactory({
  coerce: true,
});

export const comments = pgTable("comments", {
  postId: integer().notNull(),
  content: text().notNull(),
  userId: text().notNull(),
});

export const commentInsertSchema = createInsertSchema(comments);
export const commentInsertSchemaBroken = createInsertSchemaBroken(comments);
