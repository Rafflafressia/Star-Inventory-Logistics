CREATE TABLE `record`(
    `record_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `ori_price` DOUBLE(8, 2) NOT NULL,
    `new_price` DOUBLE(8, 2) NOT NULL,
    `ori_stock` INT NOT NULL,
    `new_stock` INT NOT NULL,
    `product_id` INT NOT NULL
);
CREATE TABLE `product`(
    `product_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `product_name` VARCHAR(255) NOT NULL,
    `price` DOUBLE(8, 2) NOT NULL,
    `cost` DOUBLE(8, 2) NOT NULL,
    `stock` INT NOT NULL,
    `category_id` INT NOT NULL
);
CREATE TABLE `Category`(
    `category_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category_name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL
);
CREATE TABLE `user`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `position` VARCHAR(20) NOT NULL
);
ALTER TABLE
    `product` ADD CONSTRAINT `product_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `Category`(`category_id`);
ALTER TABLE
    `record` ADD CONSTRAINT `record_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `product`(`product_id`);
ALTER TABLE
    `record` ADD CONSTRAINT `record_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`);