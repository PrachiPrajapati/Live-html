-- dumping structure for product_configurator
CREATE TABLE IF NOT EXISTS `product_configurator` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `base_image_url` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- dumping structure for configurator_product_rel
CREATE TABLE IF NOT EXISTS `configurator_product_rel` (
   `id` BIGINT NOT NULL AUTO_INCREMENT , 
   `pid` INT NOT NULL , 
   `configurator_id` INT NOT NULL , 
   `is_product_template` BOOLEAN NOT NULL , 
   PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- dumping structure for product_part_details
CREATE TABLE IF NOT EXISTS `product_part_details` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `thumb_image_url` varchar(255) NOT NULL DEFAULT '',
  `price` float NOT NULL,
  `sort_order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- dumping structure for product_part_details
CREATE TABLE IF NOT EXISTS `product_gallery` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_part_details_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `base_image_url` varchar(255) NOT NULL,
  `thumb_image_url` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `sort_order` int NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping structure for table product_part_relation
CREATE TABLE IF NOT EXISTS `product_part_relation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_configurator_id` bigint(20) NOT NULL,
  `product_part_details_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;