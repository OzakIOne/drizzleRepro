import { commentInsertSchema,commentInsertSchemaBroken } from "./sakuga.schema";

const wrongData = {
  postId: 1,
}

const res1 = commentInsertSchema.safeParse(wrongData);
console.log(res1)
/*
ZodError: [
  {
    "expected": "string",
    "code": "invalid_type",
    "path": [
      "content"
    ],
    "message": "Invalid input: expected string, received undefined"
  },
  {
    "expected": "string",
    "code": "invalid_type",
    "path": [
      "userId"
    ],
    "message": "Invalid input: expected string, received undefined"
  }
]
      at new ZodError (/home/ozaki/dev/drizzleRepro/node_modules/zod/v4/core/core.js:39:39)
      at <anonymous> (/home/ozaki/dev/drizzleRepro/node_modules/zod/v4/core/parse.js:40:20)
      at /home/ozaki/dev/drizzleRepro/index.ts:8:34
      at loadAndEvaluateModule (2:1)
,
}
 */


const res2 = commentInsertSchemaBroken.safeParse(wrongData);
console.log(res2)
/*
{
  success: true,
  data: {
    postId: 1,
    content: "undefined",
    userId: "undefined",
  },
}
*/


const trueData = {
  postId: 1,
  content: "This is a comment",
  userId: "user123",
}

const res3 = commentInsertSchema.safeParse(trueData);
console.log(res3)
/*
{
  success: true,
  data: {
    postId: 1,
    content: "This is a comment",
    userId: "user123",
  },
}
*/

const res4 = commentInsertSchemaBroken.safeParse(trueData);
console.log(res4)
/*
{
  success: true,
  data: {
    postId: 1,
    content: "This is a comment",
    userId: "user123",
  },
}
*/
