-- AlterTable
ALTER TABLE "auth"."User" ADD COLUMN     "avatar" TEXT;

-- CreateTable
CREATE TABLE "auth"."EmailCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "EmailCode_pkey" PRIMARY KEY ("id")
);
