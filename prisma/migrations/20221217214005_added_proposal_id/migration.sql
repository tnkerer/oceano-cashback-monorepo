/*
  Warnings:

  - A unique constraint covering the columns `[proposal]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `proposal` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proposal" ADD COLUMN     "proposal" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_proposal_key" ON "Proposal"("proposal");
