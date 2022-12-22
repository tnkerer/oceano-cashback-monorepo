/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('CORE', 'TREASURY', 'URGENT', 'XDC_COMMUNITY');

-- CreateEnum
CREATE TYPE "Options" AS ENUM ('YES', 'NO', 'ABSTAIN');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Proposal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tags" "Tags"[],
    "description" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "opens" TEXT NOT NULL,
    "closes" TEXT NOT NULL,
    "toll" DOUBLE PRECISION NOT NULL,
    "urls" TEXT[],
    "files" TEXT[],
    "options" "Options"[],
    "burnPercentage" DOUBLE PRECISION NOT NULL,
    "burnAddress" TEXT NOT NULL,
    "communityPercentage" DOUBLE PRECISION NOT NULL,
    "communityAddress" TEXT NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_title_key" ON "Proposal"("title");
