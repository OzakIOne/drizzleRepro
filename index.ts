import { commentInsertSchema,commentInsertSchemaBroken } from "./sakuga.schema";

const data = {
  postId: 1,
}

// Toggle betwwen these two and see the difference in behavior
// commentInsertSchemaBroken.parse(data);
commentInsertSchema.parse(data);
