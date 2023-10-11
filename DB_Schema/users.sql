CREATE DATABASE IF NOT EXISTS sts;
USE sts;

CREATE TABLE `sts`.`users` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NOT NULL,
  `inventory_type` VARCHAR(40) NULL,
  PRIMARY KEY (`id`));