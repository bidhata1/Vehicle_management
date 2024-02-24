/*
  Warnings:

  - You are about to drop the column `status` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `current_status` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "status",
ADD COLUMN     "current_status" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;
