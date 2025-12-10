ALTER TABLE "comments" ALTER COLUMN "postId" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN "id";--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN "createdAt";