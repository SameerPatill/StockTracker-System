CREATE DATABASE IF NOT EXISTS sts;
USE sts;

CREATE TABLE `sts`.`hospital_inventory_2023` (
  `id` INT NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `category` VARCHAR(40) NOT NULL,
  `department` VARCHAR(40) NULL,
  `quantity_available` DECIMAL(20) NULL,  
  `quantity_required` DECIMAL(20) NULL,
  `min_level` DECIMAL(10) NULL,
  `max_level` DECIMAL(10) NULL,
  `cost_per_unit` DECIMAL(20) NULL,
  `supplier` VARCHAR(40) NULL,
  `expiry` DATETIME NULL,
  `last_ordered_date` DATETIME NULL,
  `handler` VARCHAR(40) NULL,
  `invoice` BLOB NULL,
  `remarks` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
