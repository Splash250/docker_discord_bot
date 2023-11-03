CREATE TABLE `my_discord_bot`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `user_id` VARCHAR(32) NOT NULL, 
  `user_name` VARCHAR(64) NOT NULL, 
  PRIMARY KEY (`id`), 
  UNIQUE `user_id_index` (`user_id`)
) ENGINE = InnoDB;