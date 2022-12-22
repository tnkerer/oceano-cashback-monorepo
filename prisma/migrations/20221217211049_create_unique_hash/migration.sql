/*
  Warnings:

  - Added the required column `uniqueHash` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proposal" ADD COLUMN     "uniqueHash" TEXT NOT NULL;
