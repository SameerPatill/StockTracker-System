CREATE DATABASE IF NOT EXISTS stock_tracker;
USE stock_tracker;

CREATE TABLE `stock_tracker`.`store_inventory_2023` (
  `id` INT NOT NULL,
  `prodName` VARCHAR(40) NOT NULL,
  `category` VARCHAR(40) NOT NULL,
  `brand` VARCHAR(40) NULL,
  `unitPrice` DECIMAL(20) NOT NULL,
  `qtyAvailable` DECIMAL(10) NULL,
  `qtyRequired` DECIMAL(10) NULL,
  `supplier` VARCHAR(40) NULL,
  `shelfNo` INT NULL,
  `discountPercentage` DECIMAL(10) NULL,
  `lastOrderedDate` DATETIME NULL,
  `lastReceivedDate` DATETIME NULL,
  `salesHistory` DATETIME NULL,
  `usageHistory` DATETIME NULL,
  `usageQty` INT NULL,
  `shelfLife` INT NULL,
  `handler` VARCHAR(40) NULL,
  `invoice` BLOB NULL,
  `remarks` VARCHAR(40) NULL,
  PRIMARY KEY (`id`));
