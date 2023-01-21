/*
  Warnings:

  - You are about to drop the column `checked` on the `example` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `example` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `example` DROP COLUMN `checked`,
    DROP COLUMN `name`;

-- CreateTable
CREATE TABLE `Item` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `checked` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
