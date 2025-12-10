import { commentInsertSchema,commentInsertSchemaBroken } from "./sakuga.schema";

const data = {
  postId: 1,
}

// commentInsertSchemaBroken.parse(data);
commentInsertSchema.parse(data);
