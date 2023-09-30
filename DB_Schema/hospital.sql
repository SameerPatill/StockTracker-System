CREATE DATABASE IF NOT EXISTS stock_tracker;
USE stock_tracker;

CREATE TABLE `stock_tracker`.`hospital_inventory_2023` (
  `id` INT NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `category` VARCHAR(40) NOT NULL,
  `department` VARCHAR(40) NOT NULL,
  `quantityAvailable` DECIMAL(20) NULL,  
  `quantityRequired` DECIMAL(20) NULL,
  `minLevel` DECIMAL(10) NULL,
  `maxLevel` DECIMAL(10) NULL,
  `unitOfMeasure` VARCHAR(10) NULL,
  `costPerUnit` DECIMAL(20) NOT NULL,
  `supplier` VARCHAR(40) NULL,
  `expiry` DATETIME NOT NULL,
  `lastOrderedDate` DATETIME NULL,
  `lastReceivedDate` DATETIME NULL,
  `usageHistory` DATETIME NULL,
  `usageQty` INT NULL,
  `handler` VARCHAR(40) NULL,
  `invoice` BLOB NULL,
  `remarks` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
