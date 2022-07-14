/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : vocabulary

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 14/07/2022 17:21:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for phrase
-- ----------------------------
DROP TABLE IF EXISTS `phrase`;
CREATE TABLE `phrase` (
  `id_phrase` int NOT NULL AUTO_INCREMENT,
  `spanish` varchar(255) NOT NULL,
  `english` varchar(255) NOT NULL,
  PRIMARY KEY (`id_phrase`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of phrase
-- ----------------------------
BEGIN;
INSERT INTO `phrase` (`id_phrase`, `spanish`, `english`) VALUES (1, 'Envianos un email', 'Send us a email');
INSERT INTO `phrase` (`id_phrase`, `spanish`, `english`) VALUES (2, 'En inglaterra llueve la mayor parte del tiempo.', 'In England rains most of the time');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for word
-- ----------------------------
DROP TABLE IF EXISTS `word`;
CREATE TABLE `word` (
  `id_word` int unsigned NOT NULL AUTO_INCREMENT,
  `spanish` varchar(100) DEFAULT NULL,
  `english` varchar(100) DEFAULT NULL,
  `idphrase` int NOT NULL,
  PRIMARY KEY (`id_word`),
  KEY `fk_word_phrase_idx` (`idphrase`),
  CONSTRAINT `fk_word_phrase` FOREIGN KEY (`idphrase`) REFERENCES `phrase` (`id_phrase`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of word
-- ----------------------------
BEGIN;
INSERT INTO `word` (`id_word`, `spanish`, `english`, `idphrase`) VALUES (1, 'nos, nosotros', 'us', 1);
INSERT INTO `word` (`id_word`, `spanish`, `english`, `idphrase`) VALUES (2, 'a mayoría, el mayor número, el máximo, mayor parte', 'most', 2);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
