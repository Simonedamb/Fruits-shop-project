/*
  Warnings:

  - The primary key for the `Nutrition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Fruits_id` on the `Nutrition` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Nutrition" DROP CONSTRAINT "Nutrition_Fruits_id_fkey";

-- AlterTable
ALTER TABLE "Nutrition" DROP CONSTRAINT "Nutrition_pkey",
DROP COLUMN "Fruits_id",
ADD COLUMN     "fruitsId" SERIAL NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Nutrition_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_fruitsId_fkey" FOREIGN KEY ("fruitsId") REFERENCES "Fruits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
