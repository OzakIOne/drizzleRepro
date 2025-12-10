CREATE TABLE "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"postId" bigint NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"userId" text NOT NULL
);
