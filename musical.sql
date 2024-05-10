/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80036 (8.0.36)
 Source Host           : localhost:3306
 Source Schema         : musical

 Target Server Type    : MySQL
 Target Server Version : 80036 (8.0.36)
 File Encoding         : 65001

 Date: 28/04/2024 14:29:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for playlist
-- ----------------------------
DROP TABLE IF EXISTS `playlist`;
CREATE TABLE `playlist`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `playlist_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userFK`(`user_id` ASC) USING BTREE,
  CONSTRAINT `userFK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of playlist
-- ----------------------------
INSERT INTO `playlist` VALUES (1, 'west', 12, '2024-03-03 19:51:56');
INSERT INTO `playlist` VALUES (2, 'indo', 12, '2024-03-03 20:50:08');

-- ----------------------------
-- Table structure for playlists_songs
-- ----------------------------
DROP TABLE IF EXISTS `playlists_songs`;
CREATE TABLE `playlists_songs`  (
  `song_id` int NOT NULL,
  `playlist_id` int NOT NULL,
  PRIMARY KEY (`playlist_id`, `song_id`) USING BTREE,
  INDEX `songsFK`(`song_id` ASC) USING BTREE,
  CONSTRAINT `playlistFK` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `songsFK` FOREIGN KEY (`song_id`) REFERENCES `song` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of playlists_songs
-- ----------------------------
INSERT INTO `playlists_songs` VALUES (4, 1);
INSERT INTO `playlists_songs` VALUES (5, 1);
INSERT INTO `playlists_songs` VALUES (5, 2);
INSERT INTO `playlists_songs` VALUES (7, 2);

-- ----------------------------
-- Table structure for song
-- ----------------------------
DROP TABLE IF EXISTS `song`;
CREATE TABLE `song`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `song_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `artist` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `genre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `song_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of song
-- ----------------------------
INSERT INTO `song` VALUES (4, 'Bertaut', 'Nadin Amizah', 'Nadin bertaut.png', 'Alternatif/Indie', NULL, '', '2024-03-03 18:54:51');
INSERT INTO `song` VALUES (5, 'Rayuan Perempuan Gila', 'Nadin Amizah', 'album nadin amizah.jpg', 'Alternatif/Indie', NULL, '', '2024-03-03 20:07:37');
INSERT INTO `song` VALUES (6, 'Until I Found You', 'Stephen Sanchez', 'album until i found you.jpg', 'Musik pop, Pop rok, Singer-Songwriter', NULL, '', '2024-03-17 23:10:09');
INSERT INTO `song` VALUES (7, 'Baby i\'m yours', 'Arctic Monkeys', 'Baby Im yours.jpg', 'Pop Rock', NULL, '', '2024-03-17 23:12:01');
INSERT INTO `song` VALUES (10, 'About You', 'The 1975', 'The 1975 about you.jpg', 'Alternatif/indie', NULL, '', '2024-03-22 17:43:20');
INSERT INTO `song` VALUES (13, 'Cancer', 'My Chemical Romance', 'Album MCR.jpg', 'Emo/Post-Hardcore', NULL, '', '2024-03-22 19:38:38');
INSERT INTO `song` VALUES (14, 'Radio', 'Lana Del Rey', 'Album Lana Del Rey.png', 'Alternatif/Indie, Sadcore', NULL, '', '2024-03-22 19:46:54');
INSERT INTO `song` VALUES (15, 'Do I Wanna Know', 'Arctic Monkeys', 'album arctic monkeys.png', 'alternatif/indie', NULL, '', '2024-03-22 19:48:21');
INSERT INTO `song` VALUES (16, 'Risalah Hati', 'Dewa 19', 'dewa risalah hati.jpg', 'Pop, Indonesian Jazz, Indonesian Rock', NULL, '', '2024-03-22 19:50:36');
INSERT INTO `song` VALUES (17, 'Closure', 'Pamungkas', 'closure pamungkas.jpg', 'alternatif/indie', NULL, '', '2024-03-22 19:53:46');
INSERT INTO `song` VALUES (18, 'August', 'Taylor Swift', 'taylor swift august.jpg', 'Alternatif/Indie, Dream pop, Guitar Pop', NULL, '', '2024-03-22 19:58:16');
INSERT INTO `song` VALUES (19, 'As It Was', 'Harry Styles', 'album harry styles.jpg', 'Synthpop, New wave, Pop', '', '', '2024-03-23 01:12:02');
INSERT INTO `song` VALUES (20, 'Please, Let Me Get What I Want', 'The Smiths', 'the smiths.jpg', 'Alternatif/Indie, Rock, Folk', NULL, '', '2024-03-23 13:01:52');
INSERT INTO `song` VALUES (21, 'The Universal', 'Blur', 'blur the universal.jpg', ' Britpop, Alternatif/Indie, Pop', NULL, '', '2024-03-23 13:14:32');
INSERT INTO `song` VALUES (22, 'Bohemian Rhapsody', 'Queen', 'album queen.jpg', ' Hard rock, Musik rok progresif, Art rock, Alternatif/Indie, Progressive pop, Pop, Rock', NULL, '', '2024-03-23 13:17:07');
INSERT INTO `song` VALUES (23, 'Benci Untuk Mencita', 'Naif', 'album naif.jpg', 'Indonesian Rock', NULL, '', '2024-03-23 13:19:30');
INSERT INTO `song` VALUES (24, 'Cinta Untuknya', 'Naif', 'album naif.jpg', 'Indonesian Rock', NULL, '', '2024-03-28 13:26:46');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (12, 'admin', '$2b$10$fvq9ej.n.f2k4vh/OnS.TuTHVrAyLH79QMAl/HBb6oOC3ZwIT1Py.', 'Admin Username', '2024-03-03 17:53:28');
INSERT INTO `user` VALUES (13, 'admi', '[object Promise]', 'Admin Username', '2024-03-03 18:07:14');

SET FOREIGN_KEY_CHECKS = 1;
