CREATE DATABASE IF NOT EXISTS sts;
USE sts;

CREATE TABLE `sts`.`store_inventory_2023` (
  `id` INT NOT NULL,
  `prodName` VARCHAR(40) NOT NULL,
  `category` VARCHAR(40) NOT NULL,
  `brand` VARCHAR(40) NULL,
  `unit_price` DECIMAL(20) NOT NULL,
  `qty_available` DECIMAL(10) NULL,
  `qty_required` DECIMAL(10) NULL,
  `supplier` VARCHAR(40) NULL,
  `shelf_no` INT NULL,
  `discount_percentage` DECIMAL(10) NULL,
  `last_ordered_date` DATETIME NULL,
  `sales_history` DATETIME NULL,
  `shelf_life` INT NULL,
  `handler` VARCHAR(40) NULL,
  `invoice` BLOB NULL,
  `remarks` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
