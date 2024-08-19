-- DropForeignKey
ALTER TABLE `notifi` DROP FOREIGN KEY `Notifi_departmentId_fkey`;

-- AlterTable
ALTER TABLE `notifi` MODIFY `departmentId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Notifi` ADD CONSTRAINT `Notifi_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
