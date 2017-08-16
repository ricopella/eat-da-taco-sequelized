DROP DATABASE IF EXISTS `dos_tacos_db`;

CREATE DATABASE `dos_tacos_db`;

USE `dos_tacos_db`;
DROP TABLE IF EXISTS `tacos`;

-- CREATE TABLE `tacos` (
-- 	id INTEGER(10) auto_increment NOT NULL PRIMARY KEY UNIQUE,
--     taco_name VARCHAR(100),
--     devoured BOOLEAN,
--     date TIMESTAMP
--     );
--     
-- SELECT * FROM `tacos`;
-- 

SHOW TABLES;

SELECT * FROM `tacos2s`;

INSERT INTO tacos2s (tacoName, devoured) 
VALUES ("Al Pastor", false);

INSERT INTO tacos2s (tacoName, devoured) 
VALUES ("El Polo", false);

INSERT INTO tacos2s (tacoName, devoured) 
VALUES ("Philly Cheese", false);
