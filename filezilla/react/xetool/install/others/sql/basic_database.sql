-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: xe_install_db
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api_data`
--

DROP TABLE IF EXISTS `api_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `api_key` varchar(50) NOT NULL,
  `store_version_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_data`
--

LOCK TABLES `api_data` WRITE;
/*!40000 ALTER TABLE `api_data` DISABLE KEYS */;
INSERT INTO `api_data` VALUES (1,'axrLVYU5nsvW5tFZ',1);
/*!40000 ALTER TABLE `api_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_currency`
--

DROP TABLE IF EXISTS `app_currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_currency` (
  `id` tinyint(1) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `symbol` varchar(2) NOT NULL,
  `code` varchar(5) NOT NULL,
  `is_default` enum('1','0') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_currency`
--

LOCK TABLES `app_currency` WRITE;
/*!40000 ALTER TABLE `app_currency` DISABLE KEYS */;
INSERT INTO `app_currency` VALUES (1,'Dollar','$','USD','1'),(2,'Rupees','â‚','INR','0'),(3,'China Yuan','Â¥','CNY','0'),(4,'Australia ','$','AUD','0'),(5,'Euro','â‚','EURO','0');
/*!40000 ALTER TABLE `app_currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_language`
--

DROP TABLE IF EXISTS `app_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_language` (
  `id` int(3) NOT NULL,
  `name` varchar(100) NOT NULL,
  `value` varchar(10) NOT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '0',
  `admin_status` enum('1','0') NOT NULL DEFAULT '0',
  `is_client` enum('1','0') NOT NULL DEFAULT '1',
  `is_admin` enum('1','0') NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_language`
--

LOCK TABLES `app_language` WRITE;
/*!40000 ALTER TABLE `app_language` DISABLE KEYS */;
INSERT INTO `app_language` VALUES (1,'English','en','1','1','1','1'),(2,'German','de','0','0','1','1'),(3,'Hebrew','he','0','0','1','1'),(4,'Spanish','es','0','0','1','1'),(5,'Chinese','zh','0','0','1','1'),(6,'Dutch','nl','0','0','1','1'),(7,'French','fr','0','0','1','1');
/*!40000 ALTER TABLE `app_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_unit`
--

DROP TABLE IF EXISTS `app_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_unit` (
  `id` tinyint(1) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `is_default` enum('1','0') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_unit`
--

LOCK TABLES `app_unit` WRITE;
/*!40000 ALTER TABLE `app_unit` DISABLE KEYS */;
INSERT INTO `app_unit` VALUES (1,'Inch','1'),(2,'Ft','0'),(3,'Cm','0'),(4,'mm','0');
/*!40000 ALTER TABLE `app_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_approval_conversations_rel`
--

DROP TABLE IF EXISTS `artwork_approval_conversations_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artwork_approval_conversations_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artwork_approval_id` int(11) NOT NULL,
  `artwork_id` int(11) NOT NULL,
  `agent_id` int(11) NOT NULL,
  `type` enum('agent','customer') NOT NULL DEFAULT 'customer',
  `message` text NOT NULL,
  `history` enum('true','false') NOT NULL,
  `conversations_status` enum('new','viewed') NOT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_approval_conversations_rel`
--

LOCK TABLES `artwork_approval_conversations_rel` WRITE;
/*!40000 ALTER TABLE `artwork_approval_conversations_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `artwork_approval_conversations_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_approval_rel`
--

DROP TABLE IF EXISTS `artwork_approval_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artwork_approval_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artwork_approval_id` int(11) NOT NULL,
  `modified_date` datetime NOT NULL,
  `completed_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_approval_rel`
--

LOCK TABLES `artwork_approval_rel` WRITE;
/*!40000 ALTER TABLE `artwork_approval_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `artwork_approval_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_job_status`
--

DROP TABLE IF EXISTS `artwork_job_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artwork_job_status` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `color_code` varchar(10) NOT NULL DEFAULT '#000000',
  `sort_order` int(4) NOT NULL,
  `status` enum('true','false') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_job_status`
--

LOCK TABLES `artwork_job_status` WRITE;
/*!40000 ALTER TABLE `artwork_job_status` DISABLE KEYS */;
INSERT INTO `artwork_job_status` VALUES (1,'Pending','#3c91fd',1,'true'),(2,'Submitted','#df5427',2,'true'),(3,'Designed','#2c8998',3,'true'),(4,'Approved','#2c8997',4,'true'),(5,'Change Request','#2c8996',5,'true'),(6,'Rejected','#2c8995',6,'true');
/*!40000 ALTER TABLE `artwork_job_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `back_pattern_cate_printmethod_rel`
--

DROP TABLE IF EXISTS `back_pattern_cate_printmethod_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `back_pattern_cate_printmethod_rel` (
  `print_method_id` int(5) NOT NULL,
  `pattern_category_id` int(5) NOT NULL,
  `is_enable` enum('1','0') NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `back_pattern_cate_printmethod_rel`
--

LOCK TABLES `back_pattern_cate_printmethod_rel` WRITE;
/*!40000 ALTER TABLE `back_pattern_cate_printmethod_rel` DISABLE KEYS */;
INSERT INTO `back_pattern_cate_printmethod_rel` VALUES (6,1,'0'),(3,1,'0'),(4,1,'0'),(5,1,'0'),(1,1,'0');
/*!40000 ALTER TABLE `back_pattern_cate_printmethod_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `background_pattern`
--

DROP TABLE IF EXISTS `background_pattern`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `background_pattern` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(30) DEFAULT NULL,
  `background_pattern_name` varchar(30) NOT NULL,
  `price` float(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `background_pattern`
--

LOCK TABLES `background_pattern` WRITE;
/*!40000 ALTER TABLE `background_pattern` DISABLE KEYS */;
INSERT INTO `background_pattern` VALUES (1,'1.jpg','Background Pattern',1.00),(2,'2.jpg','Background Pattern',1.00),(3,'3.jpg','Background Pattern',1.00),(5,'5.jpg','Background Pattern',1.00),(6,'6.jpg','Background Pattern',1.00),(7,'7.jpg','Background Pattern',1.00),(8,'8.jpg','Background Pattern',1.00),(9,'9.jpg','Background Pattern',1.00);
/*!40000 ALTER TABLE `background_pattern` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `background_pattern_category`
--

DROP TABLE IF EXISTS `background_pattern_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `background_pattern_category` (
  `category_id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `sort_order` int(4) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `background_pattern_category`
--

LOCK TABLES `background_pattern_category` WRITE;
/*!40000 ALTER TABLE `background_pattern_category` DISABLE KEYS */;
INSERT INTO `background_pattern_category` VALUES (1,'Floral',0);
/*!40000 ALTER TABLE `background_pattern_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `background_pattern_category_rel`
--

DROP TABLE IF EXISTS `background_pattern_category_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `background_pattern_category_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `pattern_category_id` int(5) NOT NULL,
  `pattern_id` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `background_pattern_category_rel`
--

LOCK TABLES `background_pattern_category_rel` WRITE;
/*!40000 ALTER TABLE `background_pattern_category_rel` DISABLE KEYS */;
INSERT INTO `background_pattern_category_rel` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,1,8),(9,1,9);
/*!40000 ALTER TABLE `background_pattern_category_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `background_pattern_tags`
--

DROP TABLE IF EXISTS `background_pattern_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `background_pattern_tags` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `background_pattern_tags`
--

LOCK TABLES `background_pattern_tags` WRITE;
/*!40000 ALTER TABLE `background_pattern_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `background_pattern_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `background_pattern_tags_rel`
--

DROP TABLE IF EXISTS `background_pattern_tags_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `background_pattern_tags_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `pattern_id` int(5) NOT NULL,
  `tag_id` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `background_pattern_tags_rel`
--

LOCK TABLES `background_pattern_tags_rel` WRITE;
/*!40000 ALTER TABLE `background_pattern_tags_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `background_pattern_tags_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `capture_image`
--

DROP TABLE IF EXISTS `capture_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `capture_image` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `type` enum('cart','pre-deco','socialShare','userSlot','template','quote','bgpattern') NOT NULL DEFAULT 'cart',
  `state_id` bigint(20) DEFAULT NULL,
  `date_created` datetime NOT NULL,
  PRIMARY KEY (`id`) COMMENT 'primary key'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capture_image`
--

LOCK TABLES `capture_image` WRITE;
/*!40000 ALTER TABLE `capture_image` DISABLE KEYS */;
INSERT INTO `capture_image` VALUES (1,'ci_58b3c2ff6aa0e2.40927745.png','pre-deco',NULL,'2017-02-27 11:41:11'),(2,'ci_58b3c3b74f1ba5.23096654.png','pre-deco',NULL,'2017-02-27 11:44:15'),(3,'ci_58b3c458c5c554.84959939.png','pre-deco',NULL,'2017-02-27 11:46:56');
/*!40000 ALTER TABLE `capture_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checka`
--

DROP TABLE IF EXISTS `checka`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `checka` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checka`
--

LOCK TABLES `checka` WRITE;
/*!40000 ALTER TABLE `checka` DISABLE KEYS */;
/*!40000 ALTER TABLE `checka` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color_price_group`
--

DROP TABLE IF EXISTS `color_price_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `color_price_group` (
  `pk_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `price` float(7,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color_price_group`
--

LOCK TABLES `color_price_group` WRITE;
/*!40000 ALTER TABLE `color_price_group` DISABLE KEYS */;
INSERT INTO `color_price_group` VALUES (2,'Basic',0.00);
/*!40000 ALTER TABLE `color_price_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color_price_group_rel`
--

DROP TABLE IF EXISTS `color_price_group_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `color_price_group_rel` (
  `color_id` int(11) NOT NULL,
  `color_price_group_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color_price_group_rel`
--

LOCK TABLES `color_price_group_rel` WRITE;
/*!40000 ALTER TABLE `color_price_group_rel` DISABLE KEYS */;
INSERT INTO `color_price_group_rel` VALUES (1,1),(5,1);
/*!40000 ALTER TABLE `color_price_group_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configurator_product_rel`
--

DROP TABLE IF EXISTS `configurator_product_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `configurator_product_rel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `configurator_id` int(11) NOT NULL,
  `is_product_template` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configurator_product_rel`
--

LOCK TABLES `configurator_product_rel` WRITE;
/*!40000 ALTER TABLE `configurator_product_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `configurator_product_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `content` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `content_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custom_boundary_unit`
--

DROP TABLE IF EXISTS `custom_boundary_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `custom_boundary_unit` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `price` float(5,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custom_boundary_unit`
--

LOCK TABLES `custom_boundary_unit` WRITE;
/*!40000 ALTER TABLE `custom_boundary_unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `custom_boundary_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custom_maskdata`
--

DROP TABLE IF EXISTS `custom_maskdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `custom_maskdata` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `file_name` varchar(150) NOT NULL,
  `maskheight` float(10,2) NOT NULL,
  `maskwidth` float(10,2) NOT NULL,
  `price` float(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custom_maskdata`
--

LOCK TABLES `custom_maskdata` WRITE;
/*!40000 ALTER TABLE `custom_maskdata` DISABLE KEYS */;
INSERT INTO `custom_maskdata` VALUES (1,'front','front.svg',5.84,5.00,0.00);
/*!40000 ALTER TABLE `custom_maskdata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_order_info`
--

DROP TABLE IF EXISTS `customer_order_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_order_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `refid` int(10) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `product_info` text NOT NULL,
  `order_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_order_info`
--

LOCK TABLES `customer_order_info` WRITE;
/*!40000 ALTER TABLE `customer_order_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_order_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `date_formats`
--

DROP TABLE IF EXISTS `date_formats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `date_formats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_format` varchar(20) NOT NULL,
  `status` enum('Active','In Active') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `date_formats`
--

LOCK TABLES `date_formats` WRITE;
/*!40000 ALTER TABLE `date_formats` DISABLE KEYS */;
INSERT INTO `date_formats` VALUES (1,'m/d/Y','In Active'),(2,'Y/m/d','In Active'),(3,'Y/d/m','In Active'),(4,'F j, Y','In Active'),(5,'j F, Y','In Active');
/*!40000 ALTER TABLE `date_formats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `decorated_product`
--

DROP TABLE IF EXISTS `decorated_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `decorated_product` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `refid` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_price` float(10,2) NOT NULL,
  `custom_price` float(10,2) NOT NULL,
  `print_method_id` int(4) NOT NULL,
  `template_image_json` text NOT NULL,
  `without_prod_img` text NOT NULL,
  `mini_qty` int(11) DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_madified` datetime DEFAULT NULL,
  `boundary_type` varchar(100) NOT NULL DEFAULT 'mask',
  `product_type` varchar(25) NOT NULL DEFAULT 'configurable',
  PRIMARY KEY (`pk_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `decorated_product`
--

LOCK TABLES `decorated_product` WRITE;
/*!40000 ALTER TABLE `decorated_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `decorated_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `des_cat`
--

DROP TABLE IF EXISTS `des_cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `des_cat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0',
  `is_shape` int(1) NOT NULL DEFAULT '0',
  `sort_order` int(4) NOT NULL,
  `is_default` enum('0','1') CHARACTER SET latin1 NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COMMENT='stores the category value for the designs';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `des_cat`
--

LOCK TABLES `des_cat` WRITE;
/*!40000 ALTER TABLE `des_cat` DISABLE KEYS */;
INSERT INTO `des_cat` VALUES (4,'Seasons',0,0,'0'),(3,'Country',0,0,'0'),(5,'Wood Art',0,4,'0'),(6,'event',0,0,'0'),(7,'food-drink',0,0,'0'),(8,'mascot',0,0,'0'),(9,'Military',0,0,'0'),(10,'music',0,0,'0'),(11,'nature',0,0,'0'),(12,'others',0,0,'0'),(13,'religion',0,0,'0'),(14,'school',0,0,'0'),(15,'seasons-holidaye',0,0,'0'),(16,'shape-symbols',0,0,'0'),(17,'Sports-Games',0,0,'0'),(18,'Transportation',0,0,'0'),(19,'american',0,0,'0'),(20,'animal',0,0,'0'),(21,'baby-family',0,0,'0'),(22,'badge',0,0,'0'),(23,'charity',0,0,'0'),(24,'comic',0,0,'0');
/*!40000 ALTER TABLE `des_cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `des_cat_rel`
--

DROP TABLE IF EXISTS `des_cat_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `des_cat_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `design_id` int(5) NOT NULL,
  `category_id` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `des_cat_rel`
--

LOCK TABLES `des_cat_rel` WRITE;
/*!40000 ALTER TABLE `des_cat_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `des_cat_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `des_cat_sub_cat_rel`
--

DROP TABLE IF EXISTS `des_cat_sub_cat_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `des_cat_sub_cat_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `category_id` int(5) NOT NULL,
  `sub_category_id` int(5) NOT NULL,
  `is_default` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=290 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `des_cat_sub_cat_rel`
--

LOCK TABLES `des_cat_sub_cat_rel` WRITE;
/*!40000 ALTER TABLE `des_cat_sub_cat_rel` DISABLE KEYS */;
INSERT INTO `des_cat_sub_cat_rel` VALUES (1,1,1,'0'),(2,1,2,'0'),(3,2,3,'0'),(4,3,4,'0'),(5,3,5,'0'),(6,3,6,'0'),(7,4,7,'0'),(8,4,8,'0'),(9,4,9,'0'),(12,6,12,'0'),(13,6,13,'0'),(14,6,14,'0'),(15,6,15,'0'),(16,6,16,'0'),(17,6,17,'0'),(18,6,18,'0'),(19,6,19,'0'),(20,6,20,'0'),(21,6,21,'0'),(22,6,22,'0'),(23,6,23,'0'),(24,6,24,'0'),(25,6,25,'0'),(26,6,26,'0'),(27,7,27,'0'),(28,7,28,'0'),(29,7,29,'0'),(30,7,30,'0'),(31,7,31,'0'),(32,7,32,'0'),(33,7,33,'0'),(34,7,34,'0'),(35,7,35,'0'),(36,7,36,'0'),(37,7,37,'0'),(38,7,38,'0'),(39,8,39,'0'),(40,8,40,'0'),(41,8,41,'0'),(42,9,42,'0'),(43,9,43,'0'),(44,9,44,'0'),(45,9,45,'0'),(46,9,46,'0'),(47,10,47,'0'),(48,10,48,'0'),(49,10,49,'0'),(50,10,50,'0'),(51,10,51,'0'),(52,10,52,'0'),(53,10,53,'0'),(54,10,54,'0'),(55,10,55,'0'),(56,10,56,'0'),(57,10,57,'0'),(58,10,58,'0'),(59,11,59,'0'),(60,11,60,'0'),(61,11,61,'0'),(62,11,62,'0'),(63,11,63,'0'),(64,11,64,'0'),(65,11,65,'0'),(66,11,66,'0'),(67,11,67,'0'),(68,11,68,'0'),(69,11,69,'0'),(70,11,70,'0'),(71,11,71,'0'),(72,11,72,'0'),(73,11,73,'0'),(74,11,74,'0'),(75,11,75,'0'),(76,11,76,'0'),(77,11,77,'0'),(78,11,78,'0'),(79,11,79,'0'),(80,11,80,'0'),(81,11,81,'0'),(82,11,82,'0'),(83,12,83,'0'),(84,12,84,'0'),(85,13,85,'0'),(86,13,86,'0'),(87,13,87,'0'),(88,13,88,'0'),(89,13,89,'0'),(90,14,27,'0'),(91,14,90,'0'),(92,14,91,'0'),(93,14,92,'0'),(94,14,93,'0'),(95,14,94,'0'),(96,14,95,'0'),(97,14,96,'0'),(98,15,97,'0'),(99,15,98,'0'),(100,15,99,'0'),(101,15,100,'0'),(102,15,101,'0'),(103,15,102,'0'),(104,15,103,'0'),(105,15,104,'0'),(106,15,105,'0'),(107,16,106,'0'),(108,16,39,'0'),(109,16,107,'0'),(110,16,108,'0'),(111,16,109,'0'),(112,16,110,'0'),(113,16,111,'0'),(114,16,112,'0'),(115,16,113,'0'),(116,16,114,'0'),(117,16,115,'0'),(118,16,116,'0'),(119,16,117,'0'),(120,16,118,'0'),(121,16,119,'0'),(122,16,65,'0'),(123,16,44,'0'),(124,16,120,'0'),(125,16,66,'0'),(126,16,121,'0'),(127,16,122,'0'),(128,16,70,'0'),(129,16,123,'0'),(130,16,11,'0'),(131,16,124,'0'),(132,16,72,'0'),(133,16,125,'0'),(134,16,126,'0'),(135,16,127,'0'),(136,16,128,'0'),(137,16,129,'0'),(138,16,130,'0'),(139,16,131,'0'),(140,16,76,'0'),(141,16,132,'0'),(142,16,133,'0'),(143,16,134,'0'),(144,16,135,'0'),(145,16,136,'0'),(146,16,137,'0'),(147,16,138,'0'),(148,16,78,'0'),(149,16,139,'0'),(150,16,140,'0'),(151,16,141,'0'),(152,16,142,'0'),(153,16,143,'0'),(154,16,144,'0'),(155,16,145,'0'),(156,17,146,'0'),(157,17,147,'0'),(158,17,148,'0'),(159,17,149,'0'),(160,17,150,'0'),(161,17,151,'0'),(162,17,152,'0'),(163,17,153,'0'),(164,17,154,'0'),(165,17,155,'0'),(166,17,156,'0'),(167,17,157,'0'),(168,17,158,'0'),(169,17,159,'0'),(170,17,160,'0'),(171,17,161,'0'),(172,17,162,'0'),(173,17,163,'0'),(174,17,164,'0'),(175,17,165,'0'),(176,17,166,'0'),(177,17,167,'0'),(178,17,168,'0'),(179,17,169,'0'),(180,17,170,'0'),(181,17,171,'0'),(182,17,172,'0'),(183,17,173,'0'),(184,17,174,'0'),(185,17,175,'0'),(186,17,176,'0'),(187,18,177,'0'),(188,18,178,'0'),(189,18,179,'0'),(190,18,180,'0'),(191,18,181,'0'),(192,18,182,'0'),(193,18,183,'0'),(194,18,184,'0'),(195,18,185,'0'),(196,18,186,'0'),(197,18,187,'0'),(198,19,188,'0'),(199,19,189,'0'),(200,19,190,'0'),(201,19,191,'0'),(202,20,192,'0'),(203,20,193,'0'),(204,20,194,'0'),(205,20,195,'0'),(206,20,196,'0'),(207,20,197,'0'),(208,20,198,'0'),(209,20,199,'0'),(210,20,200,'0'),(211,20,201,'0'),(212,20,202,'0'),(213,20,203,'0'),(214,20,204,'0'),(215,20,205,'0'),(216,20,206,'0'),(217,20,207,'0'),(218,20,208,'0'),(219,20,209,'0'),(220,20,210,'0'),(221,20,211,'0'),(222,20,212,'0'),(223,20,213,'0'),(224,20,214,'0'),(225,20,215,'0'),(226,20,1,'0'),(227,20,216,'0'),(228,20,217,'0'),(229,20,218,'0'),(230,20,219,'0'),(231,20,220,'0'),(232,20,221,'0'),(233,20,222,'0'),(234,20,223,'0'),(235,20,224,'0'),(236,20,225,'0'),(237,20,226,'0'),(238,21,227,'0'),(239,21,228,'0'),(240,21,229,'0'),(241,21,230,'0'),(242,22,231,'0'),(243,22,232,'0'),(244,23,233,'0'),(245,23,234,'0'),(246,23,235,'0'),(247,23,236,'0'),(248,23,237,'0'),(249,23,238,'0'),(250,23,239,'0'),(251,23,240,'0'),(252,23,241,'0'),(253,24,242,'0'),(254,24,243,'0'),(255,24,244,'0'),(256,3,245,'0'),(257,3,246,'0'),(258,3,247,'0'),(259,3,248,'0'),(260,3,249,'0'),(261,3,250,'0'),(262,3,251,'0'),(263,3,252,'0'),(264,3,253,'0'),(265,3,254,'0'),(266,3,255,'0'),(267,3,256,'0'),(268,3,257,'0'),(269,3,258,'0'),(270,3,259,'0'),(271,3,260,'0'),(272,3,261,'0'),(273,3,262,'0'),(274,3,263,'0'),(275,3,264,'0'),(276,3,265,'0'),(277,3,266,'0'),(278,3,267,'0'),(279,3,268,'0'),(280,3,269,'0'),(281,3,270,'0'),(282,3,271,'0'),(283,3,272,'0'),(284,3,273,'0'),(285,3,274,'0'),(286,3,275,'0'),(287,3,276,'0'),(288,3,277,'0'),(289,3,278,'0');
/*!40000 ALTER TABLE `des_cat_sub_cat_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `des_sub_cat`
--

DROP TABLE IF EXISTS `des_sub_cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `des_sub_cat` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET latin1 NOT NULL DEFAULT 'na',
  `sort_order` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=279 DEFAULT CHARSET=utf8 COMMENT='stores the sub category for categories';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `des_sub_cat`
--

LOCK TABLES `des_sub_cat` WRITE;
/*!40000 ALTER TABLE `des_sub_cat` DISABLE KEYS */;
INSERT INTO `des_sub_cat` VALUES (1,'Lion',0),(2,'Dog',0),(3,'Bike',0),(4,'Malaysia',0),(5,'USA',0),(6,'Thailand',0),(7,'Christmas',0),(8,'Halloween',0),(9,'New Year',0),(11,'Love',10),(12,'baby shower',0),(13,'bachelor party',0),(14,'bar crawl',0),(15,'bbq',0),(16,'birthday',0),(17,'camping',0),(18,'charity',0),(19,'election',0),(20,'formal',0),(21,'graduation',0),(22,'party',0),(23,'prom',0),(24,'summer vacation',0),(25,'wedding',0),(26,'winter vacation',0),(27,'apple',0),(28,'bread',0),(29,'burger',0),(30,'chef',0),(31,'coffee',0),(32,'drinks',0),(33,'fish',0),(34,'food',0),(35,'fruit',0),(36,'meat',0),(37,'pizza',0),(38,'wine',0),(39,'animal',0),(40,'eagle',0),(41,'skull',0),(42,'Airforce',0),(43,'anchors',0),(44,'flag',0),(45,'Marine',0),(46,'Soldier',0),(47,'cellos',0),(48,'Disco',0),(49,'DJ',0),(50,'drums',0),(51,'Guitar',0),(52,'headphones',0),(53,'hip-hop',0),(54,'instruments',0),(55,'musical-notes',0),(56,'radios',0),(57,'rock n roll',0),(58,'trumpets',0),(59,'beach',0),(60,'cloudes',0),(61,'clover',0),(62,'daisy',0),(63,'desert',0),(64,'earth',0),(65,'fire',0),(66,'flower',0),(67,'grass',0),(68,'hiking',0),(69,'leaf',0),(70,'lightning',0),(71,'lotus',0),(72,'moon',0),(73,'Mountain',0),(74,'palm tree',0),(75,'Planet',0),(76,'rose',0),(77,'splash',0),(78,'star',0),(79,'sunset',0),(80,'tornado',0),(81,'tree',0),(82,'Weather',0),(83,'other design',0),(84,'personality',0),(85,'Bibles',0),(86,'Buddhism',0),(87,'Christianity',0),(88,'Hinduism',0),(89,'islam',0),(90,'book',0),(91,'computer',0),(92,'instrument',0),(93,'math',0),(94,'paw',0),(95,'robitics',0),(96,'science',0),(97,'easter',0),(98,'father\\\'s day',0),(99,'fourth of july',0),(100,'holloween',0),(101,'mother\\\'s day',0),(102,'newyear',0),(103,'svg-christmass',0),(104,'thanksgiving',0),(105,'valentine',0),(106,'anchor-shape',0),(107,'arrow',0),(108,'astrology',0),(109,'award',0),(110,'blood',0),(111,'border',0),(112,'bubbles',0),(113,'circle',0),(114,'city',0),(115,'cross',0),(116,'crown',0),(117,'death',0),(118,'decoration',0),(119,'diamond',0),(120,'floral',0),(121,'geometric',0),(122,'heart',0),(123,'line',0),(124,'money',0),(125,'music',0),(126,'old shape svg',0),(127,'outline',0),(128,'oval',0),(129,'peace',0),(130,'rainbow',0),(131,'ribbon',0),(132,'scull',0),(133,'selected shape',0),(134,'shield',0),(135,'sign',0),(136,'smiley face',0),(137,'smoke',0),(138,'square',0),(139,'sun',0),(140,'swirl',0),(141,'target',0),(142,'tribal',0),(143,'tringle',0),(144,'water',0),(145,'wings',0),(146,'badminton',0),(147,'baseball',0),(148,'basketball',0),(149,'Billiards',0),(150,'bowling',0),(151,'boxing',0),(152,'cards',0),(153,'Cheerleading',0),(154,'chess',0),(155,'dance',0),(156,'diving',0),(157,'field hockey',0),(158,'football',0),(159,'golf',0),(160,'gymnastics',0),(161,'hunting',0),(162,'Lacrosse',0),(163,'martial art',0),(164,'paintball',0),(165,'ping pong',0),(166,'poker',0),(167,'racing',0),(168,'rugby',0),(169,'running',0),(170,'sailing',0),(171,'Skateboarding',0),(172,'softball',0),(173,'surfing',0),(174,'tennis',0),(175,'Volleyball',0),(176,'yoga',0),(177,'airplanes',0),(178,'bicycle',0),(179,'buses',0),(180,'car',0),(181,'helicopter',0),(182,'motorcycle',0),(183,'roads',0),(184,'ship',0),(185,'spaceships',0),(186,'taxi',0),(187,'wheels',0),(188,'american design',0),(189,'american eagles',0),(190,'american flag',0),(191,'american politics',0),(192,'Alligators',0),(193,'apes',0),(194,'bat',0),(195,'bear',0),(196,'Beavers',0),(197,'bees',0),(198,'birds',0),(199,'Buffaloes',0),(200,'bull',0),(201,'Butterfly',0),(202,'cats',0),(203,'crabs',0),(204,'deer',0),(205,'dolphins',0),(206,'doves',0),(207,'dragons',0),(208,'elephants',0),(209,'foxes',0),(210,'frog',0),(211,'giraffes',0),(212,'goat',0),(213,'gorillas',0),(214,'Horses',0),(215,'Jaguars',0),(216,'monkeys',0),(217,'owl',0),(218,'pandas',0),(219,'Penguins',0),(220,'pigs',0),(221,'shark',0),(222,'spiders',0),(223,'squirrels',0),(224,'tiger',0),(225,'Turtles',0),(226,'zebra',0),(227,'baby',0),(228,'child',0),(229,'couple love',0),(230,'family',0),(231,'badge',0),(232,'badge-2',0),(233,'angel svg',0),(234,'children',0),(235,'footprint',0),(236,'friends',0),(237,'hands',0),(238,'hearts',0),(239,'puzzle',0),(240,'shoes',0),(241,'silhouettes',0),(242,'effect',0),(243,'face',0),(244,'text',0),(245,'aregentina',0),(246,'australia',0),(247,'belgium',0),(248,'brazil',0),(249,'canada',0),(250,'china',0),(251,'croatia',0),(252,'czech',0),(253,'france',0),(254,'georgia',0),(255,'germany',0),(256,'greece',0),(257,'hong kong',0),(258,'indonesia',0),(259,'ireland',0),(260,'italy',0),(261,'japan',0),(262,'latvia',0),(263,'luxembourg',0),(264,'mexico',0),(265,'netherland',0),(266,'philippines',0),(267,'poland',0),(268,'singapore',0),(269,'slaovakia',0),(270,'spain',0),(271,'switzerland',0),(272,'taiwan',0),(273,'turkey',0),(274,'uae',0),(275,'uk',0),(276,'uruguay',0),(277,'us',0),(278,'vietnam',0);
/*!40000 ALTER TABLE `des_sub_cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `des_sub_cat_rel`
--

DROP TABLE IF EXISTS `des_sub_cat_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `des_sub_cat_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `design_id` int(5) NOT NULL,
  `sub_category_id` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `des_sub_cat_rel`
--

LOCK TABLES `des_sub_cat_rel` WRITE;
/*!40000 ALTER TABLE `des_sub_cat_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `des_sub_cat_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `des_tag_rel`
--

DROP TABLE IF EXISTS `des_tag_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `des_tag_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `design_id` int(5) NOT NULL,
  `tag_id` int(5) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `design_id` (`design_id`),
  KEY `tag_id` (`tag_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2013 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `des_tag_rel`
--

LOCK TABLES `des_tag_rel` WRITE;
/*!40000 ALTER TABLE `des_tag_rel` DISABLE KEYS */;
INSERT INTO `des_tag_rel` VALUES (2,1,1),(3,2,1),(4,3,1),(5,4,1),(12,5,1),(9,6,2),(13,79,3),(14,79,4),(15,80,3),(16,80,4),(17,81,3),(18,81,4),(19,82,3),(20,82,5),(21,83,3),(22,83,5),(23,84,3),(24,84,5),(25,85,3),(26,85,5),(27,86,3),(28,86,6),(29,87,3),(30,87,6),(31,88,3),(32,88,7),(33,89,3),(34,89,7),(35,90,3),(36,90,7),(37,91,3),(38,91,8),(39,92,3),(40,92,8),(41,93,3),(42,93,8),(43,94,3),(44,94,9),(45,95,3),(46,95,9),(47,96,3),(48,96,9),(49,97,3),(50,97,9),(51,98,3),(52,98,10),(53,99,3),(54,99,10),(55,100,3),(56,100,11),(57,101,3),(58,101,11),(59,102,3),(60,102,11),(61,103,3),(62,103,12),(63,104,3),(64,104,12),(65,105,3),(66,105,12),(67,106,3),(68,106,13),(69,107,3),(70,107,14),(71,108,3),(72,108,14),(73,109,3),(74,109,14),(75,110,3),(76,110,15),(77,111,3),(78,111,15),(79,112,3),(80,112,15),(81,113,3),(82,113,16),(83,114,3),(84,114,16),(85,115,3),(86,115,16),(87,116,3),(88,116,16),(89,117,3),(90,117,16),(91,118,3),(92,118,17),(93,119,3),(94,119,17),(95,120,3),(96,120,17),(97,121,3),(98,121,18),(99,122,3),(100,122,18),(101,123,3),(102,123,18),(103,124,19),(104,124,20),(105,125,19),(106,125,20),(107,126,19),(108,126,21),(109,127,19),(110,127,21),(111,128,19),(112,128,21),(113,129,19),(114,129,21),(115,130,19),(116,130,21),(117,131,19),(118,131,21),(119,132,19),(120,132,21),(121,133,19),(122,133,22),(123,134,19),(124,134,22),(125,135,19),(126,135,23),(127,136,19),(128,136,23),(129,137,19),(130,137,24),(131,138,19),(132,138,24),(133,139,19),(134,139,24),(135,140,19),(136,140,25),(137,141,19),(138,141,25),(139,142,19),(140,142,26),(141,143,19),(142,143,26),(143,144,19),(144,144,27),(145,145,19),(146,145,27),(147,146,19),(148,146,27),(149,147,19),(150,147,28),(151,148,19),(152,148,28),(153,149,19),(154,149,28),(155,150,19),(156,150,28),(157,151,19),(158,151,28),(159,152,19),(160,152,29),(161,153,19),(162,153,29),(163,154,19),(164,154,29),(165,155,19),(166,155,30),(167,156,19),(168,156,30),(169,157,19),(170,157,30),(171,158,19),(172,158,31),(173,159,19),(174,159,31),(175,160,19),(176,160,31),(177,161,32),(178,161,1),(179,162,32),(180,162,1),(181,163,32),(182,163,1),(183,164,32),(184,164,1),(185,165,32),(186,165,1),(187,166,32),(188,166,33),(189,167,32),(190,167,33),(191,168,32),(192,168,33),(193,169,32),(194,169,33),(195,170,32),(196,170,33),(197,171,32),(198,171,33),(199,172,32),(200,172,34),(201,173,32),(202,173,34),(203,174,32),(204,174,34),(205,175,32),(206,175,34),(207,176,32),(208,176,34),(209,177,32),(210,177,34),(211,178,35),(212,178,36),(213,179,35),(214,179,36),(215,180,35),(216,180,36),(217,181,35),(218,181,37),(219,182,35),(220,182,37),(221,183,35),(222,183,37),(223,184,35),(224,184,37),(225,185,35),(226,185,37),(227,186,35),(228,186,38),(229,187,35),(230,187,38),(231,188,35),(232,188,38),(233,189,35),(234,189,38),(235,190,35),(236,190,38),(237,191,35),(238,191,38),(239,192,35),(240,192,38),(241,193,35),(242,193,38),(243,194,35),(244,194,38),(245,195,35),(246,195,38),(247,196,35),(248,196,38),(249,197,35),(250,197,38),(251,198,35),(252,198,38),(253,199,35),(254,199,38),(255,200,35),(256,200,39),(257,201,35),(258,201,39),(259,202,35),(260,202,39),(261,203,35),(262,203,40),(263,204,35),(264,204,40),(265,205,41),(266,205,42),(267,206,41),(268,206,42),(269,207,41),(270,207,42),(271,208,41),(272,208,43),(273,209,41),(274,209,43),(275,210,41),(276,210,44),(277,211,41),(278,211,44),(279,212,41),(280,212,44),(281,213,41),(282,213,45),(283,214,41),(284,214,45),(285,215,41),(286,215,45),(287,216,41),(288,216,45),(289,217,41),(290,217,46),(291,218,41),(292,218,46),(293,219,41),(294,219,46),(295,220,41),(296,220,47),(297,221,41),(298,221,47),(299,222,41),(300,222,47),(301,223,41),(302,223,48),(303,224,41),(304,224,48),(305,225,41),(306,225,48),(307,226,41),(308,226,49),(309,227,41),(310,227,49),(311,228,41),(312,228,49),(313,229,41),(314,229,49),(315,230,41),(316,230,50),(317,231,41),(318,231,50),(319,232,41),(320,232,50),(321,233,41),(322,233,51),(323,234,41),(324,234,51),(325,235,41),(326,235,51),(327,236,41),(328,236,52),(329,237,41),(330,237,52),(331,238,41),(332,238,52),(333,239,41),(334,239,53),(335,240,41),(336,240,53),(337,241,54),(338,241,55),(339,242,54),(340,242,55),(341,243,54),(342,243,55),(343,244,54),(344,244,55),(345,245,54),(346,245,55),(347,246,54),(348,246,56),(349,247,54),(350,247,56),(351,248,54),(352,248,57),(353,249,54),(354,249,58),(355,250,54),(356,250,58),(357,251,54),(358,251,59),(359,252,54),(360,252,60),(361,253,54),(362,253,60),(363,254,54),(364,254,61),(365,255,54),(366,255,61),(367,256,54),(368,256,62),(369,257,54),(370,257,63),(371,258,54),(372,258,63),(373,259,54),(374,259,64),(375,260,54),(376,260,65),(377,261,54),(378,261,66),(379,262,54),(380,262,66),(381,263,54),(382,263,67),(383,264,54),(384,264,68),(385,265,54),(386,265,69),(387,266,54),(388,266,70),(389,267,54),(390,267,70),(391,268,54),(392,268,71),(393,269,54),(394,269,72),(395,270,54),(396,270,72),(397,271,54),(398,271,73),(399,272,54),(400,272,73),(401,273,54),(402,273,73),(403,274,54),(404,274,74),(405,275,54),(406,275,75),(407,276,54),(408,276,75),(409,277,54),(410,277,76),(411,278,54),(412,278,76),(413,279,54),(414,279,77),(415,280,54),(416,280,78),(417,281,79),(418,281,80),(419,282,79),(420,282,80),(421,283,79),(422,283,80),(423,284,79),(424,284,80),(425,285,79),(426,285,80),(427,286,79),(428,286,80),(429,287,79),(430,287,80),(431,288,79),(432,288,80),(433,289,79),(434,289,80),(435,290,79),(436,290,80),(437,291,79),(438,291,80),(439,292,79),(440,292,80),(441,293,79),(442,293,80),(443,294,79),(444,294,80),(445,295,79),(446,295,80),(447,296,79),(448,296,80),(449,297,79),(450,297,80),(451,298,79),(452,298,80),(453,299,79),(454,299,80),(455,300,79),(456,300,80),(457,301,79),(458,301,80),(459,302,79),(460,302,80),(461,303,79),(462,303,80),(463,304,79),(464,304,80),(465,305,79),(466,305,80),(467,306,79),(468,306,80),(469,307,79),(470,307,80),(471,308,79),(472,308,80),(473,309,79),(474,309,80),(475,310,79),(476,310,80),(477,311,79),(478,311,81),(479,312,79),(480,312,81),(481,313,79),(482,313,81),(483,314,79),(484,314,81),(485,315,79),(486,315,81),(487,316,79),(488,316,81),(489,317,79),(490,317,81),(491,318,79),(492,318,81),(493,319,79),(494,319,81),(495,320,79),(496,320,81),(497,321,79),(498,321,81),(499,322,79),(500,322,81),(501,323,79),(502,323,81),(503,324,79),(504,324,81),(505,325,79),(506,325,81),(507,326,79),(508,326,81),(509,327,79),(510,327,81),(511,328,79),(512,328,81),(513,329,82),(514,329,83),(515,330,82),(516,330,83),(517,331,82),(518,331,84),(519,332,82),(520,332,84),(521,333,82),(522,333,84),(523,334,82),(524,334,85),(525,335,82),(526,335,85),(527,336,82),(528,336,86),(529,337,82),(530,337,86),(531,338,82),(532,338,87),(533,339,82),(534,339,87),(535,124,88),(536,124,20),(537,125,88),(538,125,20),(539,340,88),(540,340,20),(541,341,88),(542,341,89),(543,342,88),(544,342,89),(545,343,88),(546,343,89),(547,344,88),(548,344,89),(549,345,88),(550,345,90),(551,346,88),(552,346,90),(553,347,88),(554,347,91),(555,348,88),(556,348,91),(557,349,88),(558,349,91),(559,350,88),(560,350,92),(561,351,88),(562,351,92),(563,352,88),(564,352,92),(565,353,88),(566,353,92),(567,354,88),(568,354,93),(569,355,88),(570,355,93),(571,356,88),(572,356,93),(573,357,88),(574,357,93),(575,358,88),(576,358,94),(577,359,88),(578,359,94),(579,360,88),(580,360,95),(581,361,88),(582,361,95),(583,362,88),(584,362,95),(585,363,96),(586,363,97),(587,364,96),(588,364,97),(589,365,96),(590,365,97),(591,366,96),(592,366,98),(593,367,96),(594,367,98),(595,368,96),(596,368,98),(597,369,96),(598,369,99),(599,370,96),(600,370,99),(601,371,96),(602,371,99),(603,372,96),(604,372,100),(605,373,96),(606,373,100),(607,374,96),(608,374,100),(609,375,96),(610,375,101),(611,376,96),(612,376,101),(613,377,96),(614,377,101),(615,378,96),(616,378,102),(617,379,96),(618,379,102),(619,380,96),(620,380,102),(621,381,96),(622,381,103),(623,382,96),(624,382,103),(625,383,96),(626,383,103),(627,384,96),(628,384,104),(629,385,96),(630,385,104),(631,386,96),(632,386,104),(633,387,96),(634,387,104),(635,388,96),(636,388,105),(637,389,96),(638,389,105),(639,390,106),(640,390,107),(641,391,106),(642,391,107),(643,392,106),(644,392,1),(645,393,106),(646,393,1),(647,394,106),(648,394,1),(649,395,106),(650,395,108),(651,396,106),(652,396,108),(653,397,106),(654,397,108),(655,398,106),(656,398,108),(657,399,106),(658,399,108),(659,400,106),(660,400,109),(661,401,106),(662,401,109),(663,402,106),(664,402,109),(665,403,106),(666,403,109),(667,404,106),(668,404,110),(669,405,106),(670,405,110),(671,406,106),(672,406,110),(673,407,106),(674,407,110),(675,408,106),(676,408,111),(677,409,106),(678,409,111),(679,410,106),(680,410,111),(681,411,106),(682,411,111),(683,412,106),(684,412,112),(685,413,106),(686,413,112),(687,414,106),(688,414,112),(689,415,106),(690,415,113),(691,416,106),(692,416,113),(693,417,106),(694,417,113),(695,418,106),(696,418,114),(697,419,106),(698,419,114),(699,420,106),(700,420,114),(701,421,106),(702,421,115),(703,422,106),(704,422,115),(705,423,106),(706,423,116),(707,424,106),(708,424,116),(709,425,106),(710,425,116),(711,426,106),(712,426,117),(713,427,106),(714,427,117),(715,428,106),(716,428,117),(717,429,106),(718,429,117),(719,430,106),(720,430,118),(721,431,106),(722,431,118),(723,432,106),(724,432,118),(725,433,106),(726,433,119),(727,434,106),(728,434,119),(729,435,106),(730,435,119),(731,436,106),(732,436,119),(733,437,106),(734,437,120),(735,438,106),(736,438,120),(737,439,106),(738,439,120),(739,440,106),(740,440,61),(741,441,106),(742,441,38),(743,442,106),(744,442,38),(745,443,106),(746,443,38),(747,444,106),(748,444,121),(749,445,106),(750,445,121),(751,446,106),(752,446,121),(753,447,106),(754,447,121),(755,448,106),(756,448,62),(757,449,106),(758,449,62),(759,450,106),(760,450,62),(761,451,106),(762,451,122),(763,452,106),(764,452,122),(765,453,106),(766,453,122),(767,454,106),(768,454,123),(769,455,106),(770,455,123),(771,456,106),(772,456,123),(773,457,106),(774,457,123),(775,458,106),(776,458,66),(777,459,106),(778,459,66),(779,460,106),(780,460,66),(781,461,106),(782,461,66),(783,462,106),(784,462,124),(785,463,106),(786,463,124),(787,464,106),(788,464,125),(789,465,106),(790,465,125),(791,466,106),(792,466,125),(793,467,106),(794,467,126),(795,468,106),(796,468,126),(797,469,106),(798,469,68),(799,470,106),(800,470,68),(801,471,106),(802,471,41),(803,472,106),(804,472,41),(805,473,106),(806,473,41),(807,474,106),(808,474,127),(809,313,106),(810,313,127),(811,314,106),(812,314,127),(813,475,106),(814,475,127),(815,476,106),(816,476,128),(817,477,106),(818,477,128),(819,478,106),(820,478,128),(821,479,106),(822,479,129),(823,480,106),(824,480,129),(825,481,106),(826,481,130),(827,482,106),(828,482,130),(829,483,106),(830,483,130),(831,484,106),(832,484,131),(833,485,106),(834,485,131),(835,486,106),(836,486,132),(837,487,106),(838,487,132),(839,488,106),(840,488,132),(841,489,106),(842,489,72),(843,490,106),(844,490,72),(845,491,106),(846,491,133),(847,492,106),(848,492,133),(849,493,106),(850,493,133),(851,494,106),(852,494,134),(853,495,106),(854,495,134),(855,496,106),(856,496,135),(857,497,106),(858,497,136),(859,498,106),(860,498,136),(861,499,106),(862,499,136),(863,500,106),(864,500,136),(865,494,106),(866,494,137),(867,501,106),(868,501,137),(869,502,106),(870,502,137),(871,503,106),(872,503,138),(873,504,106),(874,504,138),(875,505,106),(876,505,138),(877,506,106),(878,506,139),(879,507,106),(880,507,139),(881,508,106),(882,508,74),(883,509,106),(884,509,74),(885,510,106),(886,510,140),(887,511,106),(888,511,140),(889,512,106),(890,512,141),(891,513,106),(892,513,141),(893,514,106),(894,514,142),(895,515,106),(896,515,142),(897,516,106),(898,516,143),(899,517,106),(900,517,143),(901,518,106),(902,518,143),(903,519,106),(904,519,144),(905,520,106),(906,520,144),(907,521,106),(908,521,145),(909,522,106),(910,522,146),(911,523,106),(912,523,146),(913,524,106),(914,524,146),(915,525,147),(916,525,148),(917,526,147),(918,526,149),(919,527,147),(920,527,149),(921,528,147),(922,528,150),(923,529,147),(924,529,150),(925,530,147),(926,530,151),(927,531,147),(928,531,151),(929,532,147),(930,532,152),(931,533,147),(932,533,152),(933,534,147),(934,534,153),(935,535,147),(936,535,153),(937,536,147),(938,536,154),(939,537,147),(940,537,154),(941,538,147),(942,538,155),(943,539,147),(944,539,155),(945,540,147),(946,540,155),(947,541,147),(948,541,156),(949,542,147),(950,542,156),(951,543,147),(952,543,157),(953,544,147),(954,544,157),(955,545,147),(956,545,158),(957,546,147),(958,546,158),(959,547,147),(960,547,159),(961,548,147),(962,548,159),(963,549,147),(964,549,160),(965,550,147),(966,550,160),(967,551,147),(968,551,161),(969,552,147),(970,552,161),(971,553,147),(972,553,161),(973,554,147),(974,554,162),(975,555,147),(976,555,162),(977,556,147),(978,556,163),(979,557,147),(980,557,163),(981,558,147),(982,558,164),(983,559,147),(984,559,164),(985,560,147),(986,560,165),(987,561,147),(988,561,165),(989,562,147),(990,562,166),(991,563,147),(992,563,167),(993,564,147),(994,564,167),(995,565,147),(996,565,168),(997,566,147),(998,566,168),(999,567,147),(1000,567,169),(1001,568,147),(1002,568,169),(1003,569,147),(1004,569,169),(1005,570,147),(1006,570,170),(1007,571,147),(1008,571,171),(1009,572,147),(1010,572,171),(1011,573,147),(1012,573,172),(1013,574,147),(1014,574,172),(1015,575,147),(1016,575,173),(1017,576,147),(1018,576,173),(1019,577,147),(1020,577,174),(1021,578,147),(1022,578,174),(1023,579,147),(1024,579,174),(1025,580,147),(1026,580,175),(1027,581,147),(1028,581,175),(1029,582,147),(1030,582,175),(1031,583,147),(1032,583,176),(1033,584,147),(1034,584,177),(1035,585,147),(1036,585,177),(1037,586,147),(1038,586,177),(1039,587,147),(1040,587,178),(1041,588,147),(1042,588,178),(1043,589,147),(1044,589,178),(1045,590,179),(1046,590,180),(1047,591,179),(1048,591,180),(1049,592,179),(1050,592,181),(1051,593,179),(1052,593,181),(1053,594,179),(1054,594,182),(1055,595,179),(1056,595,182),(1057,596,179),(1058,596,183),(1059,597,179),(1060,597,183),(1061,598,179),(1062,598,184),(1063,599,179),(1064,599,185),(1065,600,179),(1066,600,185),(1067,601,179),(1068,601,186),(1069,602,179),(1070,602,187),(1071,603,179),(1072,603,187),(1073,604,179),(1074,604,188),(1075,605,179),(1076,605,188),(1077,606,179),(1078,606,189),(1079,607,179),(1080,607,189),(1081,608,179),(1082,608,190),(1083,609,179),(1084,609,190),(1085,610,179),(1086,610,190),(1087,611,191),(1088,611,192),(1089,612,191),(1090,612,192),(1091,613,191),(1092,613,192),(1093,614,191),(1094,614,193),(1095,615,191),(1096,615,193),(1097,616,191),(1098,616,194),(1099,617,191),(1100,617,194),(1101,618,191),(1102,618,195),(1103,619,1),(1104,619,196),(1105,620,1),(1106,620,196),(1107,621,1),(1108,621,196),(1109,622,1),(1110,622,197),(1111,623,1),(1112,623,197),(1113,624,1),(1114,624,197),(1115,625,1),(1116,625,197),(1117,626,1),(1118,626,198),(1119,627,1),(1120,627,198),(1121,628,1),(1122,628,198),(1123,629,1),(1124,629,198),(1125,630,1),(1126,630,198),(1127,631,1),(1128,631,199),(1129,632,1),(1130,632,199),(1131,633,1),(1132,633,199),(1133,634,1),(1134,634,199),(1135,635,1),(1136,635,199),(1137,636,1),(1138,636,200),(1139,637,1),(1140,637,200),(1141,638,1),(1142,638,200),(1143,639,1),(1144,639,201),(1145,640,1),(1146,640,201),(1147,641,1),(1148,641,202),(1149,642,1),(1150,642,202),(1151,643,1),(1152,643,202),(1153,644,1),(1154,644,202),(1155,645,1),(1156,645,203),(1157,646,1),(1158,646,203),(1159,647,1),(1160,647,204),(1161,648,1),(1162,648,204),(1163,649,1),(1164,649,204),(1165,650,1),(1166,650,205),(1167,651,1),(1168,651,205),(1169,652,1),(1170,652,205),(1171,653,1),(1172,653,206),(1173,654,1),(1174,654,206),(1175,655,1),(1176,655,206),(1177,656,1),(1178,656,206),(1179,657,1),(1180,657,206),(1181,658,1),(1182,658,207),(1183,659,1),(1184,659,207),(1185,660,1),(1186,660,207),(1187,661,1),(1188,661,208),(1189,662,1),(1190,662,208),(1191,663,1),(1192,663,208),(1193,664,1),(1194,664,208),(1195,665,1),(1196,665,209),(1197,666,1),(1198,666,209),(1199,667,1),(1200,667,209),(1201,668,1),(1202,668,210),(1203,669,1),(1204,669,210),(1205,670,1),(1206,670,210),(1207,671,1),(1208,671,211),(1209,672,1),(1210,672,211),(1211,673,1),(1212,673,211),(1213,674,1),(1214,674,212),(1215,675,1),(1216,675,212),(1217,676,1),(1218,676,212),(1219,677,1),(1220,677,212),(1221,678,1),(1222,678,212),(1223,679,1),(1224,679,213),(1225,680,1),(1226,680,213),(1227,681,1),(1228,681,213),(1229,682,1),(1230,682,214),(1231,683,1),(1232,683,214),(1233,684,1),(1234,684,214),(1235,685,1),(1236,685,214),(1237,686,1),(1238,686,214),(1239,687,1),(1240,687,215),(1241,688,1),(1242,688,215),(1243,689,1),(1244,689,216),(1245,690,1),(1246,690,216),(1247,691,1),(1248,691,216),(1249,692,1),(1250,692,217),(1251,693,1),(1252,693,217),(1253,694,1),(1254,694,217),(1255,695,1),(1256,695,218),(1257,696,1),(1258,696,218),(1259,697,1),(1260,697,218),(1261,698,1),(1262,698,218),(1263,699,1),(1264,699,218),(1265,700,1),(1266,700,219),(1267,701,1),(1268,701,219),(1269,702,1),(1270,702,219),(1271,703,1),(1272,703,220),(1273,704,1),(1274,704,220),(1275,705,1),(1276,705,220),(1277,706,1),(1278,706,220),(1279,707,1),(1280,707,221),(1281,708,1),(1282,708,221),(1283,709,1),(1284,709,221),(1285,710,1),(1286,710,222),(1287,711,1),(1288,711,223),(1289,712,1),(1290,712,223),(1291,713,1),(1292,713,224),(1293,714,1),(1294,714,224),(1295,715,1),(1296,715,224),(1297,716,1),(1298,716,225),(1299,717,1),(1300,717,225),(1301,718,1),(1302,718,225),(1303,719,1),(1304,719,226),(1305,720,1),(1306,720,226),(1307,721,1),(1308,721,226),(1309,722,1),(1310,722,227),(1311,723,1),(1312,723,227),(1313,724,1),(1314,724,227),(1315,725,1),(1316,725,228),(1317,726,1),(1318,726,228),(1319,727,1),(1320,727,228),(1321,728,1),(1322,728,229),(1323,729,1),(1324,729,229),(1325,730,1),(1326,730,230),(1327,731,1),(1328,731,230),(1329,732,1),(1330,732,230),(1331,733,1),(1332,733,231),(1333,734,1),(1334,734,231),(1335,735,1),(1336,735,231),(1337,736,232),(1338,736,233),(1339,737,232),(1340,737,233),(1341,738,232),(1342,738,233),(1343,736,232),(1344,736,234),(1345,737,232),(1346,737,234),(1347,738,232),(1348,738,234),(1349,739,232),(1350,739,235),(1351,740,232),(1352,740,235),(1353,741,232),(1354,741,236),(1355,742,232),(1356,742,236),(1357,743,232),(1358,743,236),(1359,744,237),(1360,744,237),(1361,745,237),(1362,745,237),(1363,746,237),(1364,746,237),(1365,747,237),(1366,747,237),(1367,748,237),(1368,748,237),(1369,749,237),(1370,749,238),(1371,750,237),(1372,750,238),(1373,751,237),(1374,751,238),(1375,752,237),(1376,752,238),(1377,753,10),(1378,753,239),(1379,754,10),(1380,754,239),(1381,755,10),(1382,755,239),(1383,756,10),(1384,756,240),(1385,757,10),(1386,757,240),(1387,758,10),(1388,758,240),(1389,759,10),(1390,759,240),(1391,760,10),(1392,760,241),(1393,761,10),(1394,761,241),(1395,762,10),(1396,762,242),(1397,763,10),(1398,763,242),(1399,764,10),(1400,764,243),(1401,765,10),(1402,765,243),(1403,766,10),(1404,766,243),(1405,767,10),(1406,767,244),(1407,768,10),(1408,768,244),(1409,769,10),(1410,769,245),(1411,770,10),(1412,770,245),(1413,771,10),(1414,771,245),(1415,772,10),(1416,772,246),(1417,773,10),(1418,773,246),(1419,774,10),(1420,774,247),(1421,775,10),(1422,775,247),(1423,776,248),(1424,776,249),(1425,777,248),(1426,777,249),(1427,778,248),(1428,778,249),(1429,779,248),(1430,779,249),(1431,780,248),(1432,780,250),(1433,781,248),(1434,781,250),(1435,782,248),(1436,782,250),(1437,783,248),(1438,783,251),(1439,784,248),(1440,784,251),(1441,785,252),(1442,785,253),(1443,786,252),(1444,786,253),(1445,787,252),(1446,787,253),(1447,788,252),(1448,788,253),(1449,789,252),(1450,789,254),(1451,790,252),(1452,790,254),(1453,791,252),(1454,791,255),(1455,792,252),(1456,792,255),(1457,793,252),(1458,793,255),(1459,794,252),(1460,794,255),(1461,795,252),(1462,795,256),(1463,796,252),(1464,796,256),(1465,797,252),(1466,797,256),(1467,798,252),(1468,798,256),(1469,799,252),(1470,799,256),(1471,800,252),(1472,800,256),(1473,801,252),(1474,801,256),(1475,802,252),(1476,802,256),(1477,803,252),(1478,803,256),(1479,804,252),(1480,804,257),(1481,805,252),(1482,805,257),(1483,806,252),(1484,806,257),(1485,807,252),(1486,807,257),(1487,808,252),(1488,808,257),(1489,809,252),(1490,809,257),(1491,810,252),(1492,810,257),(1493,811,252),(1494,811,257),(1495,812,252),(1496,812,257),(1497,813,252),(1498,813,258),(1499,814,252),(1500,814,258),(1501,815,252),(1502,815,258),(1503,816,252),(1504,816,258),(1505,817,252),(1506,817,258),(1507,818,252),(1508,818,258),(1509,819,252),(1510,819,258),(1511,820,252),(1512,820,258),(1513,821,252),(1514,821,259),(1515,822,252),(1516,822,259),(1517,823,252),(1518,823,259),(1519,824,252),(1520,824,259),(1521,825,252),(1522,825,259),(1523,826,252),(1524,826,259),(1525,827,252),(1526,827,259),(1527,828,252),(1528,828,260),(1529,829,252),(1530,829,260),(1531,830,252),(1532,830,260),(1533,831,252),(1534,831,260),(1535,832,252),(1536,832,260),(1537,833,252),(1538,833,260),(1539,834,252),(1540,834,260),(1541,835,252),(1542,835,260),(1543,836,252),(1544,836,261),(1545,837,252),(1546,837,261),(1547,838,252),(1548,838,261),(1549,839,252),(1550,839,261),(1551,840,252),(1552,840,261),(1553,841,252),(1554,841,261),(1555,842,252),(1556,842,261),(1557,843,252),(1558,843,261),(1559,844,252),(1560,844,262),(1561,845,252),(1562,845,262),(1563,846,252),(1564,846,262),(1565,847,252),(1566,847,262),(1567,848,252),(1568,848,262),(1569,849,252),(1570,849,262),(1571,850,252),(1572,850,262),(1573,851,252),(1574,851,262),(1575,852,252),(1576,852,263),(1577,853,252),(1578,853,263),(1579,854,252),(1580,854,263),(1581,855,252),(1582,855,263),(1583,856,252),(1584,856,263),(1585,857,252),(1586,857,263),(1587,858,252),(1588,858,263),(1589,859,252),(1590,859,263),(1591,860,252),(1592,860,263),(1593,861,252),(1594,861,263),(1595,862,252),(1596,862,263),(1597,863,252),(1598,863,263),(1599,864,252),(1600,864,263),(1601,865,252),(1602,865,263),(1603,866,252),(1604,866,263),(1605,867,252),(1606,867,263),(1607,868,252),(1608,868,264),(1609,869,252),(1610,869,264),(1611,870,252),(1612,870,264),(1613,871,252),(1614,871,264),(1615,872,252),(1616,872,264),(1617,873,252),(1618,873,264),(1619,874,252),(1620,874,264),(1621,875,252),(1622,875,264),(1623,876,252),(1624,876,265),(1625,877,252),(1626,877,265),(1627,878,252),(1628,878,265),(1629,879,252),(1630,879,265),(1631,880,252),(1632,880,265),(1633,881,252),(1634,881,265),(1635,882,252),(1636,882,265),(1637,883,252),(1638,883,265),(1639,884,252),(1640,884,266),(1641,885,252),(1642,885,266),(1643,886,252),(1644,886,266),(1645,887,252),(1646,887,266),(1647,888,252),(1648,888,266),(1649,889,252),(1650,889,266),(1651,890,252),(1652,890,266),(1653,891,252),(1654,891,266),(1655,892,252),(1656,892,266),(1657,893,252),(1658,893,267),(1659,894,252),(1660,894,267),(1661,895,252),(1662,895,267),(1663,896,252),(1664,896,267),(1665,897,252),(1666,897,267),(1667,898,252),(1668,898,267),(1669,899,252),(1670,899,267),(1671,900,252),(1672,900,267),(1673,901,252),(1674,901,267),(1675,902,252),(1676,902,267),(1677,903,252),(1678,903,267),(1679,904,252),(1680,904,267),(1681,905,252),(1682,905,267),(1683,906,252),(1684,906,267),(1685,907,252),(1686,907,268),(1687,908,252),(1688,908,268),(1689,909,252),(1690,909,268),(1691,910,252),(1692,910,268),(1693,911,252),(1694,911,268),(1695,912,252),(1696,912,268),(1697,913,252),(1698,913,268),(1699,914,252),(1700,914,268),(1701,915,252),(1702,915,269),(1703,916,252),(1704,916,269),(1705,917,252),(1706,917,269),(1707,918,252),(1708,918,269),(1709,919,252),(1710,919,269),(1711,920,252),(1712,920,269),(1713,921,252),(1714,921,269),(1715,922,252),(1716,922,269),(1717,923,252),(1718,923,270),(1719,924,252),(1720,924,270),(1721,925,252),(1722,925,270),(1723,926,252),(1724,926,270),(1725,927,252),(1726,927,270),(1727,928,252),(1728,928,270),(1729,929,252),(1730,929,270),(1731,930,252),(1732,930,270),(1733,931,252),(1734,931,270),(1735,932,252),(1736,932,271),(1737,933,252),(1738,933,271),(1739,934,252),(1740,934,271),(1741,935,252),(1742,935,271),(1743,936,252),(1744,936,271),(1745,937,252),(1746,937,271),(1747,938,252),(1748,938,271),(1749,939,252),(1750,939,271),(1751,940,252),(1752,940,272),(1753,941,252),(1754,941,272),(1755,942,252),(1756,942,272),(1757,943,252),(1758,943,272),(1759,944,252),(1760,944,272),(1761,945,252),(1762,945,272),(1763,946,252),(1764,946,272),(1765,947,252),(1766,947,272),(1767,948,252),(1768,948,273),(1769,949,252),(1770,949,273),(1771,950,252),(1772,950,273),(1773,951,252),(1774,951,273),(1775,952,252),(1776,952,273),(1777,953,252),(1778,953,273),(1779,954,252),(1780,954,273),(1781,955,252),(1782,955,273),(1783,956,252),(1784,956,274),(1785,957,252),(1786,957,274),(1787,958,252),(1788,958,274),(1789,959,252),(1790,959,274),(1791,960,252),(1792,960,274),(1793,961,252),(1794,961,274),(1795,962,252),(1796,962,274),(1797,963,252),(1798,963,274),(1799,964,252),(1800,964,275),(1801,965,252),(1802,965,275),(1803,966,252),(1804,966,275),(1805,967,252),(1806,967,275),(1807,968,252),(1808,968,275),(1809,969,252),(1810,969,275),(1811,970,252),(1812,970,275),(1813,971,252),(1814,971,275),(1815,972,252),(1816,972,276),(1817,973,252),(1818,973,276),(1819,974,252),(1820,974,276),(1821,975,252),(1822,975,276),(1823,976,252),(1824,976,276),(1825,977,252),(1826,977,276),(1827,978,252),(1828,978,276),(1829,979,252),(1830,979,276),(1831,980,252),(1832,980,277),(1833,981,252),(1834,981,277),(1835,982,252),(1836,982,277),(1837,983,252),(1838,983,277),(1839,984,252),(1840,984,277),(1841,985,252),(1842,985,277),(1843,986,252),(1844,986,277),(1845,987,252),(1846,987,277),(1847,988,252),(1848,988,277),(1849,989,252),(1850,989,278),(1851,990,252),(1852,990,278),(1853,991,252),(1854,991,278),(1855,992,252),(1856,992,278),(1857,993,252),(1858,993,278),(1859,994,252),(1860,994,278),(1861,995,252),(1862,995,278),(1863,996,252),(1864,996,278),(1865,997,252),(1866,997,279),(1867,998,252),(1868,998,279),(1869,999,252),(1870,999,279),(1871,1000,252),(1872,1000,279),(1873,1001,252),(1874,1001,279),(1875,1002,252),(1876,1002,279),(1877,1003,252),(1878,1003,279),(1879,1004,252),(1880,1004,279),(1881,1005,252),(1882,1005,279),(1883,1006,252),(1884,1006,279),(1885,1007,252),(1886,1007,279),(1887,1008,252),(1888,1008,279),(1889,1009,252),(1890,1009,279),(1891,1010,252),(1892,1010,280),(1893,1011,252),(1894,1011,280),(1895,1012,252),(1896,1012,280),(1897,1013,252),(1898,1013,280),(1899,1014,252),(1900,1014,280),(1901,1015,252),(1902,1015,280),(1903,1016,252),(1904,1016,280),(1905,1017,252),(1906,1017,281),(1907,1018,252),(1908,1018,281),(1909,1019,252),(1910,1019,281),(1911,1020,252),(1912,1020,281),(1913,1021,252),(1914,1021,281),(1915,1022,252),(1916,1022,281),(1917,1023,252),(1918,1023,281),(1919,1024,252),(1920,1024,282),(1921,1025,252),(1922,1025,282),(1923,1026,252),(1924,1026,282),(1925,1027,252),(1926,1027,282),(1927,1028,252),(1928,1028,282),(1929,1029,252),(1930,1029,282),(1931,1030,252),(1932,1030,282),(1933,1031,252),(1934,1031,283),(1935,1032,252),(1936,1032,283),(1937,1033,252),(1938,1033,283),(1939,1034,252),(1940,1034,283),(1941,1035,252),(1942,1035,283),(1943,1036,252),(1944,1036,283),(1945,1037,252),(1946,1037,283),(1947,1038,252),(1948,1038,283),(1949,1039,252),(1950,1039,284),(1951,1040,252),(1952,1040,284),(1953,1041,252),(1954,1041,284),(1955,1042,252),(1956,1042,284),(1957,1043,252),(1958,1043,284),(1959,1044,252),(1960,1044,284),(1961,1045,252),(1962,1045,284),(1963,1046,252),(1964,1046,284),(1965,1047,252),(1966,1047,284),(1967,1048,252),(1968,1048,284),(1969,1049,252),(1970,1049,285),(1971,1050,252),(1972,1050,285),(1973,1051,252),(1974,1051,285),(1975,1052,252),(1976,1052,285),(1977,1053,252),(1978,1053,285),(1979,1054,252),(1980,1054,285),(1981,1055,252),(1982,1055,285),(1983,1056,252),(1984,1056,285),(1985,1057,252),(1986,1057,285),(1987,1058,252),(1988,1058,285),(1989,1059,252),(1990,1059,286),(1991,1060,252),(1992,1060,286),(1993,1061,252),(1994,1061,286),(1995,1062,252),(1996,1062,286),(1997,1063,252),(1998,1063,286),(1999,1064,252),(2000,1064,286),(2001,1065,252),(2002,1065,287),(2003,1066,252),(2004,1066,287),(2005,1067,252),(2006,1067,287),(2007,1068,252),(2008,1068,288),(2009,1069,252),(2010,1069,288),(2011,1070,252),(2012,1070,288);
/*!40000 ALTER TABLE `des_tag_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `des_tags`
--

DROP TABLE IF EXISTS `des_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `des_tags` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 NOT NULL DEFAULT 'na',
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=289 DEFAULT CHARSET=utf8 COMMENT='stores the tags for designs';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `des_tags`
--

LOCK TABLES `des_tags` WRITE;
/*!40000 ALTER TABLE `des_tags` DISABLE KEYS */;
INSERT INTO `des_tags` VALUES (1,'animal'),(2,'sports'),(3,'event'),(4,'baby shower'),(5,'bachelor party'),(6,'bar crawl'),(7,'bbq'),(8,'birthday'),(9,'camping'),(10,'charity'),(11,'election'),(12,'formal'),(13,'graduation'),(14,'party'),(15,'prom'),(16,'summer vacation'),(17,'wedding'),(18,'winter vacation'),(19,'food-drink'),(20,'apple'),(21,'bread'),(22,'burger'),(23,'chef'),(24,'coffee'),(25,'drinks'),(26,'fish'),(27,'food'),(28,'fruit'),(29,'meat'),(30,'pizza'),(31,'wine'),(32,'mascot'),(33,'eagle'),(34,'skull'),(35,'Military'),(36,'Airforce'),(37,'anchors'),(38,'flag'),(39,'Marine'),(40,'Soldier'),(41,'music'),(42,'cellos'),(43,'Disco'),(44,'DJ'),(45,'drums'),(46,'Guitar'),(47,'headphones'),(48,'hip-hop'),(49,'instruments'),(50,'musical-notes'),(51,'radios'),(52,'rock n roll'),(53,'trumpets'),(54,'nature'),(55,'beach'),(56,'cloudes'),(57,'clover'),(58,'daisy'),(59,'desert'),(60,'earth'),(61,'fire'),(62,'flower'),(63,'grass'),(64,'hiking'),(65,'leaf'),(66,'lightning'),(67,'lotus'),(68,'moon'),(69,'Mountain'),(70,'palm tree'),(71,'Planet'),(72,'rose'),(73,'splash'),(74,'star'),(75,'sunset'),(76,'tornado'),(77,'tree'),(78,'Weather'),(79,'others'),(80,'other design'),(81,'personality'),(82,'religion'),(83,'Bibles'),(84,'Buddhism'),(85,'Christianity'),(86,'Hinduism'),(87,'islam'),(88,'school'),(89,'book'),(90,'computer'),(91,'instrument'),(92,'math'),(93,'paw'),(94,'robitics'),(95,'science'),(96,'seasons-holidaye'),(97,'easter'),(98,'father\'s day'),(99,'fourth of july'),(100,'holloween'),(101,'mother\'s day'),(102,'newyear'),(103,'svg-christmass'),(104,'thanksgiving'),(105,'valentine'),(106,'shape-symbols'),(107,'anchor-shape'),(108,'arrow'),(109,'astrology'),(110,'award'),(111,'blood'),(112,'border'),(113,'bubbles'),(114,'circle'),(115,'city'),(116,'cross'),(117,'crown'),(118,'death'),(119,'decoration'),(120,'diamond'),(121,'floral'),(122,'geometric'),(123,'heart'),(124,'line'),(125,'love'),(126,'money'),(127,'old shape svg'),(128,'outline'),(129,'oval'),(130,'peace'),(131,'rainbow'),(132,'ribbon'),(133,'scull'),(134,'selected shape'),(135,'shield'),(136,'sign'),(137,'smiley face'),(138,'smoke'),(139,'square'),(140,'sun'),(141,'swirl'),(142,'target'),(143,'tribal'),(144,'tringle'),(145,'water'),(146,'wings'),(147,'Sports-Games'),(148,'badminton'),(149,'baseball'),(150,'basketball'),(151,'Billiards'),(152,'bowling'),(153,'boxing'),(154,'cards'),(155,'Cheerleading'),(156,'chess'),(157,'dance'),(158,'diving'),(159,'field hockey'),(160,'football'),(161,'golf'),(162,'gymnastics'),(163,'hunting'),(164,'Lacrosse'),(165,'martial art'),(166,'paintball'),(167,'ping pong'),(168,'poker'),(169,'racing'),(170,'rugby'),(171,'running'),(172,'sailing'),(173,'Skateboarding'),(174,'softball'),(175,'surfing'),(176,'tennis'),(177,'Volleyball'),(178,'yoga'),(179,'Transportation'),(180,'airplanes'),(181,'bicycle'),(182,'buses'),(183,'car'),(184,'helicopter'),(185,'motorcycle'),(186,'roads'),(187,'ship'),(188,'spaceships'),(189,'taxi'),(190,'wheels'),(191,'american'),(192,'american design'),(193,'american eagles'),(194,'american flag'),(195,'american politics'),(196,'Alligators'),(197,'apes'),(198,'bat'),(199,'bear'),(200,'Beavers'),(201,'bees'),(202,'birds'),(203,'Buffaloes'),(204,'bull'),(205,'Butterfly'),(206,'cats'),(207,'crabs'),(208,'deer'),(209,'dolphins'),(210,'doves'),(211,'dragons'),(212,'elephants'),(213,'foxes'),(214,'frog'),(215,'giraffes'),(216,'goat'),(217,'gorillas'),(218,'Horses'),(219,'Jaguars'),(220,'lion'),(221,'monkeys'),(222,'owl'),(223,'pandas'),(224,'Penguins'),(225,'pigs'),(226,'shark'),(227,'spiders'),(228,'squirrels'),(229,'tiger'),(230,'Turtles'),(231,'zebra'),(232,'baby-family'),(233,'baby'),(234,'child'),(235,'couple love'),(236,'family'),(237,'badge'),(238,'badge-2'),(239,'angel svg'),(240,'children'),(241,'footprint'),(242,'friends'),(243,'hands'),(244,'hearts'),(245,'puzzle'),(246,'shoes'),(247,'silhouettes'),(248,'comic'),(249,'effect'),(250,'face'),(251,'text'),(252,'Country'),(253,'aregentina'),(254,'australia'),(255,'belgium'),(256,'brazil'),(257,'canada'),(258,'china'),(259,'croatia'),(260,'czech'),(261,'france'),(262,'georgia'),(263,'germany'),(264,'greece'),(265,'hong kong'),(266,'indonesia'),(267,'ireland'),(268,'italy'),(269,'japan'),(270,'latvia'),(271,'luxembourg'),(272,'malaysia'),(273,'mexico'),(274,'netherland'),(275,'philippines'),(276,'poland'),(277,'singapore'),(278,'slaovakia'),(279,'spain'),(280,'switzerland'),(281,'taiwan'),(282,'thailand'),(283,'turkey'),(284,'uae'),(285,'uk'),(286,'uruguay'),(287,'us'),(288,'vietnam');
/*!40000 ALTER TABLE `des_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_back_cat_rel`
--

DROP TABLE IF EXISTS `design_back_cat_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_back_cat_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `background_category_id` int(5) NOT NULL,
  `background_id` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_back_cat_rel`
--

LOCK TABLES `design_back_cat_rel` WRITE;
/*!40000 ALTER TABLE `design_back_cat_rel` DISABLE KEYS */;
INSERT INTO `design_back_cat_rel` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,4);
/*!40000 ALTER TABLE `design_back_cat_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_back_cate_printmethod_rel`
--

DROP TABLE IF EXISTS `design_back_cate_printmethod_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_back_cate_printmethod_rel` (
  `print_method_id` int(5) NOT NULL,
  `background_category_id` int(5) NOT NULL,
  `is_enable` enum('1','0') NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_back_cate_printmethod_rel`
--

LOCK TABLES `design_back_cate_printmethod_rel` WRITE;
/*!40000 ALTER TABLE `design_back_cate_printmethod_rel` DISABLE KEYS */;
INSERT INTO `design_back_cate_printmethod_rel` VALUES (6,1,'0'),(6,2,'0'),(3,1,'0'),(3,2,'0'),(4,1,'0'),(4,2,'0'),(5,1,'0'),(5,2,'0'),(1,1,'0'),(1,2,'0');
/*!40000 ALTER TABLE `design_back_cate_printmethod_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_background`
--

DROP TABLE IF EXISTS `design_background`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_background` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(30) DEFAULT NULL,
  `background_design_name` varchar(30) NOT NULL,
  `price` float(10,2) NOT NULL,
  `isScalable` enum('1','0') DEFAULT '1',
  `is_image` enum('0','1') NOT NULL DEFAULT '0',
  `color_value` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_background`
--

LOCK TABLES `design_background` WRITE;
/*!40000 ALTER TABLE `design_background` DISABLE KEYS */;
INSERT INTO `design_background` VALUES (1,'1.png','Black',0.00,'1','0','#000000'),(2,'2.png','Red',0.00,'1','0','#f00909'),(3,'3.png','Green',0.00,'1','0','#0ae755'),(4,'4.jpg','Tie Dye',0.00,'1','1','');
/*!40000 ALTER TABLE `design_background` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_background_category`
--

DROP TABLE IF EXISTS `design_background_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_background_category` (
  `category_id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `sort_order` int(4) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_background_category`
--

LOCK TABLES `design_background_category` WRITE;
/*!40000 ALTER TABLE `design_background_category` DISABLE KEYS */;
INSERT INTO `design_background_category` VALUES (1,'color',0),(2,'image',0);
/*!40000 ALTER TABLE `design_background_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_background_tags`
--

DROP TABLE IF EXISTS `design_background_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_background_tags` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_background_tags`
--

LOCK TABLES `design_background_tags` WRITE;
/*!40000 ALTER TABLE `design_background_tags` DISABLE KEYS */;
INSERT INTO `design_background_tags` VALUES (1,'black'),(2,'red'),(3,'green'),(4,'tie');
/*!40000 ALTER TABLE `design_background_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_background_tags_rel`
--

DROP TABLE IF EXISTS `design_background_tags_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_background_tags_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `background_id` int(5) NOT NULL,
  `tag_id` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_background_tags_rel`
--

LOCK TABLES `design_background_tags_rel` WRITE;
/*!40000 ALTER TABLE `design_background_tags_rel` DISABLE KEYS */;
INSERT INTO `design_background_tags_rel` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4);
/*!40000 ALTER TABLE `design_background_tags_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_category_printmethod_rel`
--

DROP TABLE IF EXISTS `design_category_printmethod_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_category_printmethod_rel` (
  `print_method_id` int(11) NOT NULL,
  `design_category_id` int(11) NOT NULL,
  `is_enable` enum('1','0') NOT NULL,
  KEY `design_category_id` (`design_category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_category_printmethod_rel`
--

LOCK TABLES `design_category_printmethod_rel` WRITE;
/*!40000 ALTER TABLE `design_category_printmethod_rel` DISABLE KEYS */;
INSERT INTO `design_category_printmethod_rel` VALUES (1,24,'0'),(3,24,'0'),(4,24,'0'),(4,12,'0'),(5,24,'0'),(5,12,'0'),(6,5,'0'),(3,12,'0'),(3,11,'0'),(3,10,'0'),(3,9,'0'),(3,8,'0'),(3,7,'0'),(3,6,'0'),(3,3,'0'),(3,13,'0'),(3,14,'0'),(3,23,'0'),(3,22,'0'),(3,21,'0'),(3,20,'0'),(3,19,'0'),(3,18,'0'),(3,17,'0'),(3,16,'0'),(3,15,'0'),(3,4,'0'),(4,11,'0'),(4,10,'0'),(4,9,'0'),(4,8,'0'),(4,7,'0'),(4,6,'0'),(4,3,'0'),(4,13,'0'),(4,14,'0'),(4,23,'0'),(4,22,'0'),(4,21,'0'),(4,20,'0'),(4,19,'0'),(4,18,'0'),(4,17,'0'),(4,16,'0'),(4,15,'0'),(4,4,'0'),(5,11,'0'),(5,10,'0'),(5,9,'0'),(5,8,'0'),(5,7,'0'),(5,6,'0'),(5,3,'0'),(5,13,'0'),(5,14,'0'),(5,23,'0'),(5,22,'0'),(5,21,'0'),(5,20,'0'),(5,19,'0'),(5,18,'0'),(5,17,'0'),(5,16,'0'),(5,15,'0'),(5,4,'0'),(1,12,'0'),(1,11,'0'),(1,10,'0'),(1,9,'0'),(1,8,'0'),(1,7,'0'),(1,6,'0'),(1,3,'0'),(1,13,'0'),(1,14,'0'),(1,23,'0'),(1,22,'0'),(1,21,'0'),(1,20,'0'),(1,19,'0'),(1,18,'0'),(1,17,'0'),(1,16,'0'),(1,15,'0'),(1,4,'0');
/*!40000 ALTER TABLE `design_category_printmethod_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_category_sub_category_rel`
--

DROP TABLE IF EXISTS `design_category_sub_category_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_category_sub_category_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `design_id` int(5) NOT NULL DEFAULT '0',
  `category_id` int(11) NOT NULL DEFAULT '0',
  `sub_category_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `design_id` (`design_id`),
  KEY `category_id` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1122 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_category_sub_category_rel`
--

LOCK TABLES `design_category_sub_category_rel` WRITE;
/*!40000 ALTER TABLE `design_category_sub_category_rel` DISABLE KEYS */;
INSERT INTO `design_category_sub_category_rel` VALUES (15,10,3,5),(14,9,3,5),(13,8,3,5),(12,7,3,5),(16,11,3,5),(17,12,3,5),(18,13,3,5),(19,14,3,5),(20,15,3,5),(21,16,3,5),(22,17,3,6),(23,18,3,6),(24,19,3,6),(25,20,3,6),(26,21,3,6),(27,22,3,6),(28,23,3,6),(29,24,3,6),(30,25,3,6),(31,26,3,6),(32,27,3,4),(33,28,3,4),(34,29,3,4),(35,30,3,4),(36,31,3,4),(37,32,3,4),(38,33,3,4),(39,34,3,4),(40,35,3,4),(41,36,3,4),(42,37,4,9),(43,38,4,9),(44,39,4,9),(45,40,4,9),(46,41,4,9),(47,42,4,9),(48,43,4,9),(49,44,4,9),(50,45,4,9),(51,46,4,9),(52,47,4,8),(53,48,4,8),(54,49,4,8),(55,50,4,7),(56,51,4,7),(57,52,4,7),(58,53,4,7),(59,54,4,7),(60,55,4,7),(61,56,4,7),(62,57,4,7),(63,58,4,7),(64,59,4,7),(65,60,5,0),(66,61,5,0),(67,62,5,0),(68,63,5,0),(69,64,5,0),(70,65,5,0),(71,66,5,0),(72,67,5,0),(73,68,5,0),(74,69,5,0),(75,70,5,0),(76,71,5,0),(77,72,5,0),(78,73,5,0),(79,74,5,0),(80,75,5,0),(81,76,5,0),(82,77,5,0),(83,78,5,0),(84,79,6,12),(85,80,6,12),(86,81,6,12),(87,82,6,13),(88,83,6,13),(89,84,6,13),(90,85,6,13),(91,86,6,14),(92,87,6,14),(93,88,6,15),(94,89,6,15),(95,90,6,15),(96,91,6,16),(97,92,6,16),(98,93,6,16),(99,94,6,17),(100,95,6,17),(101,96,6,17),(102,97,6,17),(103,98,6,18),(104,99,6,18),(105,100,6,19),(106,101,6,19),(107,102,6,19),(108,103,6,20),(109,104,6,20),(110,105,6,20),(111,106,6,21),(112,107,6,22),(113,108,6,22),(114,109,6,22),(115,110,6,23),(116,111,6,23),(117,112,6,23),(118,113,6,24),(119,114,6,24),(120,115,6,24),(121,116,6,24),(122,117,6,24),(123,118,6,25),(124,119,6,25),(125,120,6,25),(126,121,6,26),(127,122,6,26),(128,123,6,26),(129,124,7,27),(130,125,7,27),(131,126,7,28),(132,127,7,28),(133,128,7,28),(134,129,7,28),(135,130,7,28),(136,131,7,28),(137,132,7,28),(138,133,7,29),(139,134,7,29),(140,135,7,30),(141,136,7,30),(142,137,7,31),(143,138,7,31),(144,139,7,31),(145,140,7,32),(146,141,7,32),(147,142,7,33),(148,143,7,33),(149,144,7,34),(150,145,7,34),(151,146,7,34),(152,147,7,35),(153,148,7,35),(154,149,7,35),(155,150,7,35),(156,151,7,35),(157,152,7,36),(158,153,7,36),(159,154,7,36),(160,155,7,37),(161,156,7,37),(162,157,7,37),(163,158,7,38),(164,159,7,38),(165,160,7,38),(166,161,8,39),(167,162,8,39),(168,163,8,39),(169,164,8,39),(170,165,8,39),(171,166,8,40),(172,167,8,40),(173,168,8,40),(174,169,8,40),(175,170,8,40),(176,171,8,40),(177,172,8,41),(178,173,8,41),(179,174,8,41),(180,175,8,41),(181,176,8,41),(182,177,8,41),(183,178,9,42),(184,179,9,42),(185,180,9,42),(186,181,9,43),(187,182,9,43),(188,183,9,43),(189,184,9,43),(190,185,9,43),(191,186,9,44),(192,187,9,44),(193,188,9,44),(194,189,9,44),(195,190,9,44),(196,191,9,44),(197,192,9,44),(198,193,9,44),(199,194,9,44),(200,195,9,44),(201,196,9,44),(202,197,9,44),(203,198,9,44),(204,199,9,44),(205,200,9,45),(206,201,9,45),(207,202,9,45),(208,203,9,46),(209,204,9,46),(210,205,10,47),(211,206,10,47),(212,207,10,47),(213,208,10,48),(214,209,10,48),(215,210,10,49),(216,211,10,49),(217,212,10,49),(218,213,10,50),(219,214,10,50),(220,215,10,50),(221,216,10,50),(222,217,10,51),(223,218,10,51),(224,219,10,51),(225,220,10,52),(226,221,10,52),(227,222,10,52),(228,223,10,53),(229,224,10,53),(230,225,10,53),(231,226,10,54),(232,227,10,54),(233,228,10,54),(234,229,10,54),(235,230,10,55),(236,231,10,55),(237,232,10,55),(238,233,10,56),(239,234,10,56),(240,235,10,56),(241,236,10,57),(242,237,10,57),(243,238,10,57),(244,239,10,58),(245,240,10,58),(246,241,11,59),(247,242,11,59),(248,243,11,59),(249,244,11,59),(250,245,11,59),(251,246,11,60),(252,247,11,60),(253,248,11,61),(254,249,11,62),(255,250,11,62),(256,251,11,63),(257,252,11,64),(258,253,11,64),(259,254,11,65),(260,255,11,65),(261,256,11,66),(262,257,11,67),(263,258,11,67),(264,259,11,68),(265,260,11,69),(266,261,11,70),(267,262,11,70),(268,263,11,71),(269,264,11,72),(270,265,11,73),(271,266,11,74),(272,267,11,74),(273,268,11,75),(274,269,11,76),(275,270,11,76),(276,271,11,77),(277,272,11,77),(278,273,11,77),(279,274,11,78),(280,275,11,79),(281,276,11,79),(282,277,11,80),(283,278,11,80),(284,279,11,81),(285,280,11,82),(286,281,12,83),(287,282,12,83),(288,283,12,83),(289,284,12,83),(290,285,12,83),(291,286,12,83),(292,287,12,83),(293,288,12,83),(294,289,12,83),(295,290,12,83),(296,291,12,83),(297,292,12,83),(298,293,12,83),(299,294,12,83),(300,295,12,83),(301,296,12,83),(302,297,12,83),(303,298,12,83),(304,299,12,83),(305,300,12,83),(306,301,12,83),(307,302,12,83),(308,303,12,83),(309,304,12,83),(310,305,12,83),(311,306,12,83),(312,307,12,83),(313,308,12,83),(314,309,12,83),(315,310,12,83),(316,311,12,84),(317,312,12,84),(318,313,12,84),(319,314,12,84),(320,315,12,84),(321,316,12,84),(322,317,12,84),(323,318,12,84),(324,319,12,84),(325,320,12,84),(326,321,12,84),(327,322,12,84),(328,323,12,84),(329,324,12,84),(330,325,12,84),(331,326,12,84),(332,327,12,84),(333,328,12,84),(334,329,13,85),(335,330,13,85),(336,331,13,86),(337,332,13,86),(338,333,13,86),(339,334,13,87),(340,335,13,87),(341,336,13,88),(342,337,13,88),(343,338,13,89),(344,339,13,89),(345,124,14,27),(346,125,14,27),(347,340,14,27),(348,341,14,90),(349,342,14,90),(350,343,14,90),(351,344,14,90),(352,345,14,91),(353,346,14,91),(354,347,14,92),(355,348,14,92),(356,349,14,92),(357,350,14,93),(358,351,14,93),(359,352,14,93),(360,353,14,93),(361,354,14,94),(362,355,14,94),(363,356,14,94),(364,357,14,94),(365,358,14,95),(366,359,14,95),(367,360,14,96),(368,361,14,96),(369,362,14,96),(370,363,15,97),(371,364,15,97),(372,365,15,97),(373,366,15,98),(374,367,15,98),(375,368,15,98),(376,369,15,99),(377,370,15,99),(378,371,15,99),(379,372,15,100),(380,373,15,100),(381,374,15,100),(382,375,15,101),(383,376,15,101),(384,377,15,101),(385,378,15,102),(386,379,15,102),(387,380,15,102),(388,381,15,103),(389,382,15,103),(390,383,15,103),(391,384,15,104),(392,385,15,104),(393,386,15,104),(394,387,15,104),(395,388,15,105),(396,389,15,105),(397,390,16,106),(398,391,16,106),(399,392,16,39),(400,393,16,39),(401,394,16,39),(402,395,16,107),(403,396,16,107),(404,397,16,107),(405,398,16,107),(406,399,16,107),(407,400,16,108),(408,401,16,108),(409,402,16,108),(410,403,16,108),(411,404,16,109),(412,405,16,109),(413,406,16,109),(414,407,16,109),(415,408,16,110),(416,409,16,110),(417,410,16,110),(418,411,16,110),(419,412,16,111),(420,413,16,111),(421,414,16,111),(422,415,16,112),(423,416,16,112),(424,417,16,112),(425,418,16,113),(426,419,16,113),(427,420,16,113),(428,421,16,114),(429,422,16,114),(430,423,16,115),(431,424,16,115),(432,425,16,115),(433,426,16,116),(434,427,16,116),(435,428,16,116),(436,429,16,116),(437,430,16,117),(438,431,16,117),(439,432,16,117),(440,433,16,118),(441,434,16,118),(442,435,16,118),(443,436,16,118),(444,437,16,119),(445,438,16,119),(446,439,16,119),(447,440,16,65),(448,441,16,44),(449,442,16,44),(450,443,16,44),(451,444,16,120),(452,445,16,120),(453,446,16,120),(454,447,16,120),(455,448,16,66),(456,449,16,66),(457,450,16,66),(458,451,16,121),(459,452,16,121),(460,453,16,121),(461,454,16,122),(462,455,16,122),(463,456,16,122),(464,457,16,122),(465,458,16,70),(466,459,16,70),(467,460,16,70),(468,461,16,70),(469,462,16,123),(470,463,16,123),(471,464,16,11),(472,465,16,11),(473,466,16,11),(474,467,16,124),(475,468,16,124),(476,469,16,72),(477,470,16,72),(478,471,16,125),(479,472,16,125),(480,473,16,125),(481,474,16,126),(482,313,16,126),(483,314,16,126),(484,475,16,126),(485,476,16,127),(486,477,16,127),(487,478,16,127),(488,479,16,128),(489,480,16,128),(490,481,16,129),(491,482,16,129),(492,483,16,129),(493,484,16,130),(494,485,16,130),(495,486,16,131),(496,487,16,131),(497,488,16,131),(498,489,16,76),(499,490,16,76),(500,491,16,132),(501,492,16,132),(502,493,16,132),(503,494,16,133),(504,495,16,133),(505,496,16,134),(506,497,16,135),(507,498,16,135),(508,499,16,135),(509,500,16,135),(510,494,16,136),(511,501,16,136),(512,502,16,136),(513,503,16,137),(514,504,16,137),(515,505,16,137),(516,506,16,138),(517,507,16,138),(518,508,16,78),(519,509,16,78),(520,510,16,139),(521,511,16,139),(522,512,16,140),(523,513,16,140),(524,514,16,141),(525,515,16,141),(526,516,16,142),(527,517,16,142),(528,518,16,142),(529,519,16,143),(530,520,16,143),(531,521,16,144),(532,522,16,145),(533,523,16,145),(534,524,16,145),(535,525,17,146),(536,526,17,147),(537,527,17,147),(538,528,17,148),(539,529,17,148),(540,530,17,149),(541,531,17,149),(542,532,17,150),(543,533,17,150),(544,534,17,151),(545,535,17,151),(546,536,17,152),(547,537,17,152),(548,538,17,153),(549,539,17,153),(550,540,17,153),(551,541,17,154),(552,542,17,154),(553,543,17,155),(554,544,17,155),(555,545,17,156),(556,546,17,156),(557,547,17,157),(558,548,17,157),(559,549,17,158),(560,550,17,158),(561,551,17,159),(562,552,17,159),(563,553,17,159),(564,554,17,160),(565,555,17,160),(566,556,17,161),(567,557,17,161),(568,558,17,162),(569,559,17,162),(570,560,17,163),(571,561,17,163),(572,562,17,164),(573,563,17,165),(574,564,17,165),(575,565,17,166),(576,566,17,166),(577,567,17,167),(578,568,17,167),(579,569,17,167),(580,570,17,168),(581,571,17,169),(582,572,17,169),(583,573,17,170),(584,574,17,170),(585,575,17,171),(586,576,17,171),(587,577,17,172),(588,578,17,172),(589,579,17,172),(590,580,17,173),(591,581,17,173),(592,582,17,173),(593,583,17,174),(594,584,17,175),(595,585,17,175),(596,586,17,175),(597,587,17,176),(598,588,17,176),(599,589,17,176),(600,590,18,177),(601,591,18,177),(602,592,18,178),(603,593,18,178),(604,594,18,179),(605,595,18,179),(606,596,18,180),(607,597,18,180),(608,598,18,181),(609,599,18,182),(610,600,18,182),(611,601,18,183),(612,602,18,184),(613,603,18,184),(614,604,18,185),(615,605,18,185),(616,606,18,186),(617,607,18,186),(618,608,18,187),(619,609,18,187),(620,610,18,187),(621,611,19,188),(622,612,19,188),(623,613,19,188),(624,614,19,189),(625,615,19,189),(626,616,19,190),(627,617,19,190),(628,618,19,191),(629,619,20,192),(630,620,20,192),(631,621,20,192),(632,622,20,193),(633,623,20,193),(634,624,20,193),(635,625,20,193),(636,626,20,194),(637,627,20,194),(638,628,20,194),(639,629,20,194),(640,630,20,194),(641,631,20,195),(642,632,20,195),(643,633,20,195),(644,634,20,195),(645,635,20,195),(646,636,20,196),(647,637,20,196),(648,638,20,196),(649,639,20,197),(650,640,20,197),(651,641,20,198),(652,642,20,198),(653,643,20,198),(654,644,20,198),(655,645,20,199),(656,646,20,199),(657,647,20,200),(658,648,20,200),(659,649,20,200),(660,650,20,201),(661,651,20,201),(662,652,20,201),(663,653,20,202),(664,654,20,202),(665,655,20,202),(666,656,20,202),(667,657,20,202),(668,658,20,203),(669,659,20,203),(670,660,20,203),(671,661,20,204),(672,662,20,204),(673,663,20,204),(674,664,20,204),(675,665,20,205),(676,666,20,205),(677,667,20,205),(678,668,20,206),(679,669,20,206),(680,670,20,206),(681,671,20,207),(682,672,20,207),(683,673,20,207),(684,674,20,208),(685,675,20,208),(686,676,20,208),(687,677,20,208),(688,678,20,208),(689,679,20,209),(690,680,20,209),(691,681,20,209),(692,682,20,210),(693,683,20,210),(694,684,20,210),(695,685,20,210),(696,686,20,210),(697,687,20,211),(698,688,20,211),(699,689,20,212),(700,690,20,212),(701,691,20,212),(702,692,20,213),(703,693,20,213),(704,694,20,213),(705,695,20,214),(706,696,20,214),(707,697,20,214),(708,698,20,214),(709,699,20,214),(710,700,20,215),(711,701,20,215),(712,702,20,215),(713,703,20,1),(714,704,20,1),(715,705,20,1),(716,706,20,1),(717,707,20,216),(718,708,20,216),(719,709,20,216),(720,710,20,217),(721,711,20,218),(722,712,20,218),(723,713,20,219),(724,714,20,219),(725,715,20,219),(726,716,20,220),(727,717,20,220),(728,718,20,220),(729,719,20,221),(730,720,20,221),(731,721,20,221),(732,722,20,222),(733,723,20,222),(734,724,20,222),(735,725,20,223),(736,726,20,223),(737,727,20,223),(738,728,20,224),(739,729,20,224),(740,730,20,225),(741,731,20,225),(742,732,20,225),(743,733,20,226),(744,734,20,226),(745,735,20,226),(746,736,21,227),(747,737,21,227),(748,738,21,227),(749,736,21,228),(750,737,21,228),(751,738,21,228),(752,739,21,229),(753,740,21,229),(754,741,21,230),(755,742,21,230),(756,743,21,230),(757,744,22,231),(758,745,22,231),(759,746,22,231),(760,747,22,231),(761,748,22,231),(762,749,22,232),(763,750,22,232),(764,751,22,232),(765,752,22,232),(766,753,23,233),(767,754,23,233),(768,755,23,233),(769,756,23,234),(770,757,23,234),(771,758,23,234),(772,759,23,234),(773,760,23,235),(774,761,23,235),(775,762,23,236),(776,763,23,236),(777,764,23,237),(778,765,23,237),(779,766,23,237),(780,767,23,238),(781,768,23,238),(782,769,23,239),(783,770,23,239),(784,771,23,239),(785,772,23,240),(786,773,23,240),(787,774,23,241),(788,775,23,241),(789,776,24,242),(790,777,24,242),(791,778,24,242),(792,779,24,242),(793,780,24,243),(794,781,24,243),(795,782,24,243),(796,783,24,244),(797,784,24,244),(798,785,3,245),(799,786,3,245),(800,787,3,245),(801,788,3,245),(802,789,3,246),(803,790,3,246),(804,791,3,247),(805,792,3,247),(806,793,3,247),(807,794,3,247),(808,795,3,248),(809,796,3,248),(810,797,3,248),(811,798,3,248),(812,799,3,248),(813,800,3,248),(814,801,3,248),(815,802,3,248),(816,803,3,248),(817,804,3,249),(818,805,3,249),(819,806,3,249),(820,807,3,249),(821,808,3,249),(822,809,3,249),(823,810,3,249),(824,811,3,249),(825,812,3,249),(826,813,3,250),(827,814,3,250),(828,815,3,250),(829,816,3,250),(830,817,3,250),(831,818,3,250),(832,819,3,250),(833,820,3,250),(834,821,3,251),(835,822,3,251),(836,823,3,251),(837,824,3,251),(838,825,3,251),(839,826,3,251),(840,827,3,251),(841,828,3,252),(842,829,3,252),(843,830,3,252),(844,831,3,252),(845,832,3,252),(846,833,3,252),(847,834,3,252),(848,835,3,252),(849,836,3,253),(850,837,3,253),(851,838,3,253),(852,839,3,253),(853,840,3,253),(854,841,3,253),(855,842,3,253),(856,843,3,253),(857,844,3,254),(858,845,3,254),(859,846,3,254),(860,847,3,254),(861,848,3,254),(862,849,3,254),(863,850,3,254),(864,851,3,254),(865,852,3,255),(866,853,3,255),(867,854,3,255),(868,855,3,255),(869,856,3,255),(870,857,3,255),(871,858,3,255),(872,859,3,255),(873,860,3,255),(874,861,3,255),(875,862,3,255),(876,863,3,255),(877,864,3,255),(878,865,3,255),(879,866,3,255),(880,867,3,255),(881,868,3,256),(882,869,3,256),(883,870,3,256),(884,871,3,256),(885,872,3,256),(886,873,3,256),(887,874,3,256),(888,875,3,256),(889,876,3,257),(890,877,3,257),(891,878,3,257),(892,879,3,257),(893,880,3,257),(894,881,3,257),(895,882,3,257),(896,883,3,257),(897,884,3,258),(898,885,3,258),(899,886,3,258),(900,887,3,258),(901,888,3,258),(902,889,3,258),(903,890,3,258),(904,891,3,258),(905,892,3,258),(906,893,3,259),(907,894,3,259),(908,895,3,259),(909,896,3,259),(910,897,3,259),(911,898,3,259),(912,899,3,259),(913,900,3,259),(914,901,3,259),(915,902,3,259),(916,903,3,259),(917,904,3,259),(918,905,3,259),(919,906,3,259),(920,907,3,260),(921,908,3,260),(922,909,3,260),(923,910,3,260),(924,911,3,260),(925,912,3,260),(926,913,3,260),(927,914,3,260),(928,915,3,261),(929,916,3,261),(930,917,3,261),(931,918,3,261),(932,919,3,261),(933,920,3,261),(934,921,3,261),(935,922,3,261),(936,923,3,262),(937,924,3,262),(938,925,3,262),(939,926,3,262),(940,927,3,262),(941,928,3,262),(942,929,3,262),(943,930,3,262),(944,931,3,262),(945,932,3,263),(946,933,3,263),(947,934,3,263),(948,935,3,263),(949,936,3,263),(950,937,3,263),(951,938,3,263),(952,939,3,263),(953,940,3,4),(954,941,3,4),(955,942,3,4),(956,943,3,4),(957,944,3,4),(958,945,3,4),(959,946,3,4),(960,947,3,4),(961,948,3,264),(962,949,3,264),(963,950,3,264),(964,951,3,264),(965,952,3,264),(966,953,3,264),(967,954,3,264),(968,955,3,264),(969,956,3,265),(970,957,3,265),(971,958,3,265),(972,959,3,265),(973,960,3,265),(974,961,3,265),(975,962,3,265),(976,963,3,265),(977,964,3,266),(978,965,3,266),(979,966,3,266),(980,967,3,266),(981,968,3,266),(982,969,3,266),(983,970,3,266),(984,971,3,266),(985,972,3,267),(986,973,3,267),(987,974,3,267),(988,975,3,267),(989,976,3,267),(990,977,3,267),(991,978,3,267),(992,979,3,267),(993,980,3,268),(994,981,3,268),(995,982,3,268),(996,983,3,268),(997,984,3,268),(998,985,3,268),(999,986,3,268),(1000,987,3,268),(1001,988,3,268),(1002,989,3,269),(1003,990,3,269),(1004,991,3,269),(1005,992,3,269),(1006,993,3,269),(1007,994,3,269),(1008,995,3,269),(1009,996,3,269),(1010,997,3,270),(1011,998,3,270),(1012,999,3,270),(1013,1000,3,270),(1014,1001,3,270),(1015,1002,3,270),(1016,1003,3,270),(1017,1004,3,270),(1018,1005,3,270),(1019,1006,3,270),(1020,1007,3,270),(1021,1008,3,270),(1022,1009,3,270),(1023,1010,3,271),(1024,1011,3,271),(1025,1012,3,271),(1026,1013,3,271),(1027,1014,3,271),(1028,1015,3,271),(1029,1016,3,271),(1030,1017,3,272),(1031,1018,3,272),(1032,1019,3,272),(1033,1020,3,272),(1034,1021,3,272),(1035,1022,3,272),(1036,1023,3,272),(1037,1024,3,6),(1038,1025,3,6),(1039,1026,3,6),(1040,1027,3,6),(1041,1028,3,6),(1042,1029,3,6),(1043,1030,3,6),(1044,1031,3,273),(1045,1032,3,273),(1046,1033,3,273),(1047,1034,3,273),(1048,1035,3,273),(1049,1036,3,273),(1050,1037,3,273),(1051,1038,3,273),(1052,1039,3,274),(1053,1040,3,274),(1054,1041,3,274),(1055,1042,3,274),(1056,1043,3,274),(1057,1044,3,274),(1058,1045,3,274),(1059,1046,3,274),(1060,1047,3,274),(1061,1048,3,274),(1062,1049,3,275),(1063,1050,3,275),(1064,1051,3,275),(1065,1052,3,275),(1066,1053,3,275),(1067,1054,3,275),(1068,1055,3,275),(1069,1056,3,275),(1070,1057,3,275),(1071,1058,3,275),(1072,1059,3,276),(1073,1060,3,276),(1074,1061,3,276),(1075,1062,3,276),(1076,1063,3,276),(1077,1064,3,276),(1078,1065,3,277),(1079,1066,3,277),(1080,1067,3,277),(1081,1068,3,278),(1082,1069,3,278),(1083,1070,3,278),(1084,1071,5,0),(1085,1072,5,0),(1086,1073,5,0),(1087,1074,5,0),(1088,1075,5,0),(1089,1076,5,0),(1090,1077,5,0),(1091,1078,5,0),(1092,1079,4,0),(1093,1080,4,0),(1094,1081,5,0),(1095,1082,4,0),(1096,1083,4,0),(1097,1084,5,0),(1098,1085,5,0),(1099,1086,5,0),(1100,1087,5,0),(1101,1088,5,0),(1102,1089,5,0),(1103,1090,5,0),(1104,1091,5,0),(1105,1092,5,0),(1106,1093,5,0),(1107,1094,5,0),(1109,1095,5,0),(1110,1096,5,0),(1111,1097,5,0),(1112,1098,5,0),(1113,1099,5,0),(1114,1100,5,0),(1115,1101,5,0),(1116,1102,5,0),(1117,1103,5,0),(1118,1104,5,0),(1119,1105,5,0),(1120,1106,5,0),(1121,1107,5,0);
/*!40000 ALTER TABLE `design_category_sub_category_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `design_state`
--

DROP TABLE IF EXISTS `design_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `design_state` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `json_data` longtext NOT NULL,
  `date_created` datetime NOT NULL,
  `status` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_state`
--

LOCK TABLES `design_state` WRITE;
/*!40000 ALTER TABLE `design_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `design_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `designs`
--

DROP TABLE IF EXISTS `designs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `designs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) DEFAULT NULL,
  `design_name` varchar(100) NOT NULL DEFAULT '0',
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `tags` varchar(240) DEFAULT NULL,
  `is_shape` enum('1','0') NOT NULL DEFAULT '0',
  `status` enum('1','0') NOT NULL DEFAULT '1',
  `isScalable` enum('1','0') NOT NULL DEFAULT '1',
  `no_of_colors` tinyint(4) NOT NULL DEFAULT '0',
  `is_svgasfile` enum('1','0') NOT NULL DEFAULT '0',
  `sort_order` int(11) NOT NULL DEFAULT '0',
  `date_modified` datetime DEFAULT NULL,
  `aheight` float(10,2) NOT NULL,
  `awidth` float(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `design_name` (`design_name`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1108 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designs`
--

LOCK TABLES `designs` WRITE;
/*!40000 ALTER TABLE `designs` DISABLE KEYS */;
INSERT INTO `designs` VALUES (7,'7.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(8,'8.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(9,'9.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(10,'10.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(11,'11.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(12,'12.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(13,'13.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(14,'14.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(15,'15.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(16,'16.svg','USA',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(17,'17.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(18,'18.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(19,'19.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(20,'20.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(21,'21.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(22,'22.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(23,'23.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(24,'24.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(25,'25.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(26,'26.svg','Thailand',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(27,'27.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(28,'28.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(29,'29.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(30,'30.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(31,'31.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(32,'32.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(33,'33.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(34,'34.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(35,'35.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(36,'36.svg','Malaysia',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(37,'37.svg','New Year',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(39,'39.svg','New Year',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(40,'40.svg','New Year',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(43,'43.svg','New Year',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(44,'44.svg','New Year',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(45,'45.svg','New Year',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(46,'46.svg','New Year',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(47,'47.svg','Halloween',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(48,'48.svg','Halloween',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(49,'49.svg','Halloween',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(50,'50.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(51,'51.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(52,'52.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(53,'53.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(54,'54.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(55,'55.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(56,'56.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(57,'57.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(58,'58.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(59,'59.svg','Christmas',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1098,'1098.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1099,'1099.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1100,'1100.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1101,'1101.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1102,'1102.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1103,'1103.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1104,'1104.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1105,'1105.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1106,'1106.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1107,'1107.svg','Wood Art',1.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(79,'event/baby shower/baby shower1.svg','baby shower1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(80,'event/baby shower/baby shower2.svg','baby shower2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(81,'event/baby shower/baby shower3.svg','baby shower3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(82,'event/bachelor party/bachelor party10.svg','bachelor party10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(83,'event/bachelor party/bachelor party11.svg','bachelor party11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(84,'event/bachelor party/bachelor party8.svg','bachelor party8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(85,'event/bachelor party/bachelor party9.svg','bachelor party9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(86,'event/bar crawl/bar crawl10.svg','bar crawl10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(87,'event/bar crawl/bar crawl11.svg','bar crawl11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(88,'event/bbq/bbq1.svg','bbq1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(89,'event/bbq/bbq2.svg','bbq2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(90,'event/bbq/bbq3.svg','bbq3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(91,'event/birthday/birthd 1.svg','birthd 1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(92,'event/birthday/birthd 2.svg','birthd 2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(93,'event/birthday/birthd 4.svg','birthd 4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(94,'event/camping/camping1.svg','camping1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(95,'event/camping/camping2.svg','camping2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(96,'event/camping/camping3.svg','camping3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(97,'event/camping/camping4.svg','camping4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(98,'event/charity/charity1.svg','charity1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(99,'event/charity/charity2.svg','charity2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(100,'event/election/election6.svg','election6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(101,'event/election/election7.svg','election7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(102,'event/election/election8.svg','election8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(103,'event/formal/formal6.svg','formal6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(104,'event/formal/formal7.svg','formal7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(105,'event/formal/formal8.svg','formal8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(106,'event/graduation/graduation8.svg','graduation8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(107,'event/party/party6.svg','party6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(108,'event/party/party7.svg','party7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(109,'event/party/party8.svg','party8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(110,'event/prom/prom1.svg','prom1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(111,'event/prom/prom2.svg','prom2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(112,'event/prom/prom3.svg','prom3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(113,'event/summer vacation/summer_vacation1.svg','summer_vacation1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(114,'event/summer vacation/summer_vacation2.svg','summer_vacation2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(115,'event/summer vacation/summer_vacation3.svg','summer_vacation3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(116,'event/summer vacation/summer_vacation4.svg','summer_vacation4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(117,'event/summer vacation/summer_vacation5.svg','summer_vacation5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(118,'event/wedding/wedding1.svg','wedding1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(119,'event/wedding/wedding2.svg','wedding2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(120,'event/wedding/wedding3.svg','wedding3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(121,'event/winter vacation/winter vacation1.svg','winter vacation1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(122,'event/winter vacation/winter vacation2.svg','winter vacation2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(123,'event/winter vacation/winter vacation3.svg','winter vacation3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(124,'food-drink/apple/apple1.svg','apple1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(125,'food-drink/apple/apple2.svg','apple2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(126,'food-drink/bread/bread10.svg','bread10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(127,'food-drink/bread/bread11.svg','bread11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(128,'food-drink/bread/bread6.svg','bread6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(129,'food-drink/bread/bread7.svg','bread7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(130,'food-drink/bread/bread8.svg','bread8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(131,'food-drink/bread/bread9.svg','bread9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(132,'food-drink/bread/desktop.ini','desktop.ini',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(133,'food-drink/burger/burger1.svg','burger1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(134,'food-drink/burger/burger2.svg','burger2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(135,'food-drink/chef/chef1.svg','chef1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(136,'food-drink/chef/chef2.svg','chef2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(137,'food-drink/coffee/coffee10.svg','coffee10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(138,'food-drink/coffee/coffee11.svg','coffee11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(139,'food-drink/coffee/coffee9.svg','coffee9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(140,'food-drink/drinks/drinks13.svg','drinks13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(141,'food-drink/drinks/drinks14.svg','drinks14',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(142,'food-drink/fish/fish12.svg','fish12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(143,'food-drink/fish/fish13.svg','fish13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(144,'food-drink/food/food12.svg','food12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(145,'food-drink/food/food13.svg','food13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(146,'food-drink/food/food14.svg','food14',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(147,'food-drink/fruit/fruit1.svg','fruit1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(148,'food-drink/fruit/fruit2.svg','fruit2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(149,'food-drink/fruit/fruit3.svg','fruit3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(150,'food-drink/fruit/fruit4.svg','fruit4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(151,'food-drink/fruit/fruit5.svg','fruit5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(152,'food-drink/meat/meat1.svg','meat1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(153,'food-drink/meat/meat2.svg','meat2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(154,'food-drink/meat/meat3.svg','meat3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(155,'food-drink/pizza/pizza1.svg','pizza1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(156,'food-drink/pizza/pizza2.svg','pizza2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(157,'food-drink/pizza/pizza3.svg','pizza3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(158,'food-drink/wine/wine1.svg','wine1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(159,'food-drink/wine/wine2.svg','wine2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(160,'food-drink/wine/wine3.svg','wine3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(161,'mascot/animal/animal1.svg','animal1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(162,'mascot/animal/animal2.svg','animal2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(163,'mascot/animal/animal3.svg','animal3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(164,'mascot/animal/animal4.svg','animal4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(165,'mascot/animal/animal5.svg','animal5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(166,'mascot/eagle/eagle.svg','eagle',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(167,'mascot/eagle/eagle2.svg','eagle2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(168,'mascot/eagle/eagle3.svg','eagle3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(169,'mascot/eagle/eagle4.svg','eagle4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(170,'mascot/eagle/eagle5.svg','eagle5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(171,'mascot/eagle/eagle6.svg','eagle6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(172,'mascot/skull/skull-1.svg','skull-1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(173,'mascot/skull/skull-2 (2).svg','skull-2 (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(174,'mascot/skull/skull-2.svg','skull-2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(175,'mascot/skull/skull-3.svg','skull-3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(176,'mascot/skull/skull-5.svg','skull-5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(177,'mascot/skull/skull-6.svg','skull-6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(178,'Military/Airforce/airforce-1.svg','airforce-1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(179,'Military/Airforce/airforce-2.svg','airforce-2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(180,'Military/Airforce/airforce-3.svg','airforce-3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(181,'Military/anchors/anchor1.svg','anchor1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(182,'Military/anchors/anchor2.svg','anchor2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(183,'Military/anchors/anchor3.svg','anchor3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(184,'Military/anchors/anchor4.svg','anchor4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(185,'Military/anchors/anchor5.svg','anchor5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(186,'Military/flag/flag37.svg','flag37',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(187,'Military/flag/flag38.svg','flag38',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(188,'Military/flag/flag39.svg','flag39',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(189,'Military/flag/flag40.svg','flag40',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(190,'Military/flag/flag41.svg','flag41',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(191,'Military/flag/flag42.svg','flag42',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(192,'Military/flag/flag43.svg','flag43',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(193,'Military/flag/flag44.svg','flag44',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(194,'Military/flag/flag45.svg','flag45',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(195,'Military/flag/flag46.svg','flag46',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(196,'Military/flag/flag47.svg','flag47',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(197,'Military/flag/flag48.svg','flag48',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(198,'Military/flag/flag49.svg','flag49',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(199,'Military/flag/flag50.svg','flag50',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(200,'Military/Marine/Marine-6.svg','Marine-6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(201,'Military/Marine/Marine-7.svg','Marine-7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(202,'Military/Marine/Marine-8.svg','Marine-8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(203,'Military/Soldier/soldier-7.svg','soldier-7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(204,'Military/Soldier/soldier-8.svg','soldier-8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(205,'music/cellos/cello10.svg','cello10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(206,'music/cellos/cello8.svg','cello8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(207,'music/cellos/cello9.svg','cello9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(208,'music/Disco/disco-7.svg','disco-7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(209,'music/Disco/disco-8.svg','disco-8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(210,'music/DJ/Dj-10.svg','Dj-10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(211,'music/DJ/Dj-8.svg','Dj-8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(212,'music/DJ/Dj-9.svg','Dj-9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(213,'music/drums/drums10.svg','drums10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(214,'music/drums/drums7.svg','drums7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(215,'music/drums/drums8.svg','drums8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(216,'music/drums/drums9.svg','drums9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(217,'music/Guitar/Guitar-10.svg','Guitar-10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(218,'music/Guitar/Guitar-11.svg','Guitar-11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(219,'music/Guitar/Guitar-9.svg','Guitar-9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(220,'music/headphones/headphone7.svg','headphone7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(221,'music/headphones/headphone8.svg','headphone8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(222,'music/headphones/headphone9.svg','headphone9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(223,'music/hip-hop/hip hop10.svg','hip hop10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(224,'music/hip-hop/hip hop8.svg','hip hop8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(225,'music/hip-hop/hip hop9.svg','hip hop9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(226,'music/instruments/instrument10.svg','instrument10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(227,'music/instruments/instrument11.svg','instrument11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(228,'music/instruments/instrument12.svg','instrument12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(229,'music/instruments/instrument9.svg','instrument9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(230,'music/musical-notes/musical_note10.svg','musical_note10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(231,'music/musical-notes/musical_note8.svg','musical_note8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(232,'music/musical-notes/musical_note9.svg','musical_note9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(233,'music/radios/radio7.svg','radio7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(234,'music/radios/radio8.svg','radio8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(235,'music/radios/radio9.svg','radio9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(236,'music/rock n roll/rock-n-roll10.svg','rock-n-roll10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(237,'music/rock n roll/rock-n-roll8.svg','rock-n-roll8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(238,'music/rock n roll/rock-n-roll9.svg','rock-n-roll9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(239,'music/trumpets/trumpet7.svg','trumpet7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(240,'music/trumpets/trumpet8.svg','trumpet8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(241,'nature/beach/beach26.svg','beach26',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(242,'nature/beach/beach28.svg','beach28',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(243,'nature/beach/beach30.svg','beach30',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(244,'nature/beach/beach31.svg','beach31',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(245,'nature/beach/beach32.svg','beach32',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(246,'nature/cloudes/cloudes7.svg','cloudes7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(247,'nature/cloudes/cloudes8.svg','cloudes8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(248,'nature/clover/clover9.svg','clover9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(249,'nature/daisy/daisy7.svg','daisy7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(250,'nature/daisy/daisy8.svg','daisy8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(251,'nature/desert/desert7.svg','desert7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(252,'nature/earth/earth7.svg','earth7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(253,'nature/earth/earth8.svg','earth8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(254,'nature/fire/fire4.svg','fire4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(255,'nature/fire/fire5.svg','fire5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(256,'nature/flower/flower8.svg','flower8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(257,'nature/grass/grass6.svg','grass6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(258,'nature/grass/grass7.svg','grass7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(259,'nature/hiking/hiking6.svg','hiking6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(260,'nature/leaf/leaf8.svg','leaf8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(261,'nature/lightning/ligting7.svg','ligting7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(262,'nature/lightning/ligting8.svg','ligting8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(263,'nature/lotus/lotus9.svg','lotus9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(264,'nature/moon/moon6.svg','moon6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(265,'nature/Mountain/Mountain-8.svg','Mountain-8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(266,'nature/palm tree/plamtree7.svg','plamtree7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(267,'nature/palm tree/plamtree8.svg','plamtree8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(268,'nature/Planet/Planet-7.svg','Planet-7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(269,'nature/rose/rose7.svg','rose7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(270,'nature/rose/rose8.svg','rose8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(271,'nature/splash/splash13.svg','splash13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(272,'nature/splash/splash15.svg','splash15',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(273,'nature/splash/splash16.svg','splash16',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(274,'nature/star/star1.svg','star1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(275,'nature/sunset/sunset1.svg','sunset1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(276,'nature/sunset/sunset2.svg','sunset2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(277,'nature/tornado/tomado1.svg','tomado1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(278,'nature/tornado/tomado2.svg','tomado2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(279,'nature/tree/tree1.svg','tree1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(280,'nature/Weather/Weather-1.svg','Weather-1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(281,'others/other design/design-1 (130).svg','design-1 (130)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(282,'others/other design/design-1 (131).svg','design-1 (131)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(283,'others/other design/design-1 (132).svg','design-1 (132)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(284,'others/other design/design-1 (133).svg','design-1 (133)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(285,'others/other design/design-1 (134).svg','design-1 (134)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(286,'others/other design/design-1 (135).svg','design-1 (135)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(287,'others/other design/design-1 (136).svg','design-1 (136)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(288,'others/other design/design-1 (137).svg','design-1 (137)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(289,'others/other design/design-1 (159).svg','design-1 (159)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(290,'others/other design/design-1 (160).svg','design-1 (160)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(291,'others/other design/design-1 (161).svg','design-1 (161)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(292,'others/other design/design-1 (162).svg','design-1 (162)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(293,'others/other design/design-1 (163).svg','design-1 (163)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(294,'others/other design/design-1 (164.svg','design-1 (164',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(295,'others/other design/design-1 (165).svg','design-1 (165)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(296,'others/other design/design-1 (166).svg','design-1 (166)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(297,'others/other design/design-1 (167).svg','design-1 (167)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(298,'others/other design/design-1 (168).svg','design-1 (168)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(299,'others/other design/design-1 (169).svg','design-1 (169)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(300,'others/other design/design-1 (170).svg','design-1 (170)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(301,'others/other design/design-1 (56).svg','design-1 (56)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(302,'others/other design/design-1 (57).svg','design-1 (57)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(303,'others/other design/design-1 (58).svg','design-1 (58)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(304,'others/other design/design-1 (59).svg','design-1 (59)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(305,'others/other design/design-1 (60).svg','design-1 (60)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(306,'others/other design/design-1 (61).svg','design-1 (61)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(307,'others/other design/design-1 (62).svg','design-1 (62)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(308,'others/other design/design-1 (63).svg','design-1 (63)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(309,'others/other design/design-1 (96).svg','design-1 (96)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(310,'others/other design/design-1 (97).svg','design-1 (97)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(311,'others/personality/1.svg','1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(312,'others/personality/2.svg','2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(313,'others/personality/26.svg','26',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(314,'others/personality/27.svg','27',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(315,'others/personality/3.svg','3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(316,'others/personality/31.svg','31',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(317,'others/personality/32.svg','32',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(318,'others/personality/33.svg','33',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(319,'others/personality/34.svg','34',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(320,'others/personality/35.svg','35',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(321,'others/personality/36.svg','36',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(322,'others/personality/38.svg','38',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(323,'others/personality/39.svg','39',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(324,'others/personality/4.svg','4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(325,'others/personality/40.svg','40',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(326,'others/personality/41.svg','41',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(327,'others/personality/5.svg','5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(328,'others/personality/6.svg','6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(329,'religion/Bibles/bibles7.svg','bibles7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(330,'religion/Bibles/bibles8.svg','bibles8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(331,'religion/Buddhism/buddhism10.svg','buddhism10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(332,'religion/Buddhism/buddhism8.svg','buddhism8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(333,'religion/Buddhism/buddhism9.svg','buddhism9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(334,'religion/Christianity/christanity11.svg','christanity11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(335,'religion/Christianity/christanity12.svg','christanity12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(336,'religion/Hinduism/hinduism7.svg','hinduism7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(337,'religion/Hinduism/hinduism8.svg','hinduism8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(338,'religion/islam/islam7.svg','islam7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(339,'religion/islam/islam8.svg','islam8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(340,'school/apple/apple3.svg','apple3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(341,'school/book/book1.svg','book1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(342,'school/book/book2.svg','book2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(343,'school/book/book3.svg','book3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(344,'school/book/book4.svg','book4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(345,'school/computer/computer1.svg','computer1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(346,'school/computer/computer2.svg','computer2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(347,'school/instrument/instrument1.svg','instrument1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(348,'school/instrument/instrument2.svg','instrument2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(349,'school/instrument/instrument3.svg','instrument3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(350,'school/math/math1.svg','math1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(351,'school/math/math2.svg','math2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(352,'school/math/math3.svg','math3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(353,'school/math/math4.svg','math4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(354,'school/paw/paw1.svg','paw1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(355,'school/paw/paw2.svg','paw2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(356,'school/paw/paw3.svg','paw3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(357,'school/paw/paw4.svg','paw4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(358,'school/robitics/robitics1.svg','robitics1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(359,'school/robitics/robitics2.svg','robitics2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(360,'school/science/science1.svg','science1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(361,'school/science/science2.svg','science2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(362,'school/science/science3.svg','science3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(363,'seasons-holidaye/easter/Easter-1.svg','Easter-1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(364,'seasons-holidaye/easter/Easter-2.svg','Easter-2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(365,'seasons-holidaye/easter/Easter-3.svg','Easter-3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(366,'seasons-holidaye/father\\\'s day/fathers-day1.svg','fathers-day1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(367,'seasons-holidaye/father\\\'s day/fathers-day2.svg','fathers-day2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(368,'seasons-holidaye/father\\\'s day/fathers-day3.svg','fathers-day3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(369,'seasons-holidaye/fourth of july/fourth of july1.svg','fourth of july1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(370,'seasons-holidaye/fourth of july/fourth of july2.svg','fourth of july2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(371,'seasons-holidaye/fourth of july/fourth of july3.svg','fourth of july3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(372,'seasons-holidaye/holloween/holloween-1.svg','holloween-1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(373,'seasons-holidaye/holloween/holloween-3.svg','holloween-3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(374,'seasons-holidaye/holloween/holloween-4.svg','holloween-4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(375,'seasons-holidaye/mother\\\'s day/mother\\\'s day1.svg','mother\\\'s day1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(376,'seasons-holidaye/mother\\\'s day/mother\\\'s day2.svg','mother\\\'s day2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(377,'seasons-holidaye/mother\\\'s day/mother\\\'s day3.svg','mother\\\'s day3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(378,'seasons-holidaye/newyear/newyear1.svg','newyear1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(379,'seasons-holidaye/newyear/newyear2.svg','newyear2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(380,'seasons-holidaye/newyear/newyear3.svg','newyear3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(381,'seasons-holidaye/svg-christmass/christmass-2.svg','christmass-2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(382,'seasons-holidaye/svg-christmass/christmass-3.svg','christmass-3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(383,'seasons-holidaye/svg-christmass/christmass-4.svg','christmass-4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(384,'seasons-holidaye/thanksgiving/thanksgiving1.svg','thanksgiving1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(385,'seasons-holidaye/thanksgiving/thanksgiving2.svg','thanksgiving2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(386,'seasons-holidaye/thanksgiving/thanksgiving3.svg','thanksgiving3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(387,'seasons-holidaye/thanksgiving/thanksgiving4.svg','thanksgiving4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(388,'seasons-holidaye/valentine/valentine-1.svg','valentine-1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(389,'seasons-holidaye/valentine/valentine-2.svg','valentine-2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(390,'shape-symbols/anchor-shape/anchoe (1).svg','anchoe (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(391,'shape-symbols/anchor-shape/anchoe (2).svg','anchoe (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(392,'shape-symbols/animal/animal (30).svg','animal (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(393,'shape-symbols/animal/animal (31).svg','animal (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(394,'shape-symbols/animal/animal (32).svg','animal (32)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(395,'shape-symbols/arrow/arrow (13).svg','arrow (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(396,'shape-symbols/arrow/arrow (14).svg','arrow (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(397,'shape-symbols/arrow/arrow (15).svg','arrow (15)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(398,'shape-symbols/arrow/arrow (16).svg','arrow (16)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(399,'shape-symbols/arrow/arrow (17).svg','arrow (17)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(400,'shape-symbols/astrology/astrology (22).svg','astrology (22)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(401,'shape-symbols/astrology/astrology (23).svg','astrology (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(402,'shape-symbols/astrology/astrology (24).svg','astrology (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(403,'shape-symbols/astrology/astrology (25).svg','astrology (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(404,'shape-symbols/award/award (6).svg','award (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(405,'shape-symbols/award/award (7).svg','award (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(406,'shape-symbols/award/award (8).svg','award (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(407,'shape-symbols/award/award (9).svg','award (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(408,'shape-symbols/blood/blood (10).svg','blood (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(409,'shape-symbols/blood/blood (7).svg','blood (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(410,'shape-symbols/blood/blood (8).svg','blood (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(411,'shape-symbols/blood/blood (9).svg','blood (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(412,'shape-symbols/border/border (14).svg','border (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(413,'shape-symbols/border/border (15).svg','border (15)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(414,'shape-symbols/border/border (16).svg','border (16)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(415,'shape-symbols/bubbles/bubbles (7).svg','bubbles (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(416,'shape-symbols/bubbles/bubbles (8).svg','bubbles (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(417,'shape-symbols/bubbles/bubbles (9).svg','bubbles (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(418,'shape-symbols/circle/circle (7).svg','circle (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(419,'shape-symbols/circle/circle (8).svg','circle (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(420,'shape-symbols/circle/circle (9).svg','circle (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(421,'shape-symbols/city/city (10).svg','city (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(422,'shape-symbols/city/city (9).svg','city (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(423,'shape-symbols/cross/cross (10).svg','cross (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(424,'shape-symbols/cross/cross (11).svg','cross (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(425,'shape-symbols/cross/cross (12).svg','cross (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(426,'shape-symbols/crown/crown (10).svg','crown (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(427,'shape-symbols/crown/crown (11).svg','crown (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(428,'shape-symbols/crown/crown (12).svg','crown (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(429,'shape-symbols/crown/crown (9).svg','crown (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(430,'shape-symbols/death/death (10).svg','death (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(431,'shape-symbols/death/death (11).svg','death (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(432,'shape-symbols/death/death (12).svg','death (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(433,'shape-symbols/decoration/decoration (14).svg','decoration (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(434,'shape-symbols/decoration/decoration (15).svg','decoration (15)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(435,'shape-symbols/decoration/decoration (16).svg','decoration (16)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(436,'shape-symbols/decoration/decoration (17).svg','decoration (17)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(437,'shape-symbols/diamond/diamond (7).svg','diamond (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(438,'shape-symbols/diamond/diamond (8).svg','diamond (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(439,'shape-symbols/diamond/diamond (9).svg','diamond (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(440,'shape-symbols/fire/fire (7).svg','fire (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(441,'shape-symbols/flag/flag (7).svg','flag (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(442,'shape-symbols/flag/flag (8).svg','flag (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(443,'shape-symbols/flag/flag (9).svg','flag (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(444,'shape-symbols/floral/floral (42).svg','floral (42)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(445,'shape-symbols/floral/floral (43).svg','floral (43)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(446,'shape-symbols/floral/floral (44).svg','floral (44)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(447,'shape-symbols/floral/floral (45).svg','floral (45)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(448,'shape-symbols/flower/flower (11).svg','flower (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(449,'shape-symbols/flower/flower (12).svg','flower (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(450,'shape-symbols/flower/flower (13).svg','flower (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(451,'shape-symbols/geometric/geometric (10).svg','geometric (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(452,'shape-symbols/geometric/geometric (8).svg','geometric (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(453,'shape-symbols/geometric/geometric (9).svg','geometric (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(454,'shape-symbols/heart/heart (10).svg','heart (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(455,'shape-symbols/heart/heart (11).svg','heart (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(456,'shape-symbols/heart/heart (12).svg','heart (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(457,'shape-symbols/heart/heart (13).svg','heart (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(458,'shape-symbols/lightning/lightning (11).svg','lightning (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(459,'shape-symbols/lightning/lightning (12).svg','lightning (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(460,'shape-symbols/lightning/lightning (13).svg','lightning (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(461,'shape-symbols/lightning/lightning (14).svg','lightning (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(462,'shape-symbols/line/line (8).svg','line (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(463,'shape-symbols/line/line (9).svg','line (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(464,'shape-symbols/love/love (1).svg','love (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(465,'shape-symbols/love/love (2).svg','love (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(466,'shape-symbols/love/love (3).svg','love (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(467,'shape-symbols/money/money (1).svg','money (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(468,'shape-symbols/money/money (2).svg','money (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(469,'shape-symbols/moon/moon (1).svg','moon (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(470,'shape-symbols/moon/moon (2).svg','moon (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(471,'shape-symbols/music/music (1).svg','music (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(472,'shape-symbols/music/music (2).svg','music (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(473,'shape-symbols/music/music (3).svg','music (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(474,'shape-symbols/old shape svg/25.svg','25',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(475,'shape-symbols/old shape svg/28.svg','28',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(476,'shape-symbols/outline/outline (10).svg','outline (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(477,'shape-symbols/outline/outline (8).svg','outline (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(478,'shape-symbols/outline/outline (9).svg','outline (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(479,'shape-symbols/oval/oval (7).svg','oval (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(480,'shape-symbols/oval/oval (8).svg','oval (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(481,'shape-symbols/peace/peace (7).svg','peace (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(482,'shape-symbols/peace/peace (8).svg','peace (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(483,'shape-symbols/peace/peace (9).svg','peace (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(484,'shape-symbols/rainbow/rainbow (8).svg','rainbow (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(485,'shape-symbols/rainbow/rainbow (9).svg','rainbow (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(486,'shape-symbols/ribbon/ribbon (7).svg','ribbon (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(487,'shape-symbols/ribbon/ribbon (8).svg','ribbon (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(488,'shape-symbols/ribbon/ribbon (9).svg','ribbon (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(489,'shape-symbols/rose/rose (10).svg','rose (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(490,'shape-symbols/rose/rose (9).svg','rose (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(491,'shape-symbols/scull/scull (10).svg','scull (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(492,'shape-symbols/scull/scull (11).svg','scull (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(493,'shape-symbols/scull/scull (12).svg','scull (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(494,'shape-symbols/selected shape/smily (10).svg','smily (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(495,'shape-symbols/selected shape/smoke (2).svg','smoke (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(496,'shape-symbols/shield/shield (9).svg','shield (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(497,'shape-symbols/sign/sisn (143).svg','sisn (143)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(498,'shape-symbols/sign/sisn (144).svg','sisn (144)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(499,'shape-symbols/sign/sisn (145).svg','sisn (145)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(500,'shape-symbols/sign/sisn (146).svg','sisn (146)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(501,'shape-symbols/smiley face/smily (11).svg','smily (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(502,'shape-symbols/smiley face/smily (9).svg','smily (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(503,'shape-symbols/smoke/smoke (7).svg','smoke (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(504,'shape-symbols/smoke/smoke (8).svg','smoke (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(505,'shape-symbols/smoke/smoke (9).svg','smoke (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(506,'shape-symbols/square/square (7).svg','square (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(507,'shape-symbols/square/square (8).svg','square (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(508,'shape-symbols/star/star (7).svg','star (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(509,'shape-symbols/star/star (8).svg','star (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(510,'shape-symbols/sun/sun (10).svg','sun (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(511,'shape-symbols/sun/sun (9).svg','sun (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(512,'shape-symbols/swirl/swirl (7).svg','swirl (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(513,'shape-symbols/swirl/swirl (8).svg','swirl (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(514,'shape-symbols/target/target (10).svg','target (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(515,'shape-symbols/target/target (9).svg','target (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(516,'shape-symbols/tribal/tribal (13).svg','tribal (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(517,'shape-symbols/tribal/tribal (14).svg','tribal (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(518,'shape-symbols/tribal/tribal (15).svg','tribal (15)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(519,'shape-symbols/tringle/tringle (7).svg','tringle (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(520,'shape-symbols/tringle/tringle (8).svg','tringle (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(521,'shape-symbols/water/water (9).svg','water (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(522,'shape-symbols/wings/wings (11).svg','wings (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(523,'shape-symbols/wings/wings (12).svg','wings (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(524,'shape-symbols/wings/wings (13).svg','wings (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(525,'Sports-Games/badminton/badminton.svg','badminton',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(526,'Sports-Games/baseball/baseball 1.svg','baseball 1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(527,'Sports-Games/baseball/baseball 2.svg','baseball 2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(528,'Sports-Games/basketball/basketball22.svg','basketball22',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(529,'Sports-Games/basketball/basketball23.svg','basketball23',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(530,'Sports-Games/Billiards/billiards13.svg','billiards13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(531,'Sports-Games/Billiards/billiards14.svg','billiards14',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(532,'Sports-Games/bowling/bowling12.svg','bowling12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(533,'Sports-Games/bowling/bowling13.svg','bowling13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(534,'Sports-Games/boxing/boxing10.svg','boxing10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(535,'Sports-Games/boxing/boxing9.svg','boxing9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(536,'Sports-Games/cards/cards10.svg','cards10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(537,'Sports-Games/cards/cards11.svg','cards11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(538,'Sports-Games/Cheerleading/cheerleading1.svg','cheerleading1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(539,'Sports-Games/Cheerleading/cheerleading2.svg','cheerleading2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(540,'Sports-Games/Cheerleading/cheerleading3.svg','cheerleading3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(541,'Sports-Games/chess/chess1.svg','chess1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(542,'Sports-Games/chess/chess2.svg','chess2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(543,'Sports-Games/dance/dance1.svg','dance1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(544,'Sports-Games/dance/dance2.svg','dance2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(545,'Sports-Games/diving/badminton11.svg','badminton11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(546,'Sports-Games/diving/badminton12.svg','badminton12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(547,'Sports-Games/field hockey/fieldhokey1.svg','fieldhokey1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(548,'Sports-Games/field hockey/fieldhokey2.svg','fieldhokey2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(549,'Sports-Games/football/football2.svg','football2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(550,'Sports-Games/football/football3.svg','football3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(551,'Sports-Games/golf/golf1.svg','golf1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(552,'Sports-Games/golf/golf2.svg','golf2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(553,'Sports-Games/golf/golf3.svg','golf3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(554,'Sports-Games/gymnastics/gymnastics1.svg','gymnastics1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(555,'Sports-Games/gymnastics/gymnastics2.svg','gymnastics2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(556,'Sports-Games/hunting/hunting.svg','hunting',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(557,'Sports-Games/hunting/hunting2.svg','hunting2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(558,'Sports-Games/Lacrosse/lacrosse1.svg','lacrosse1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(559,'Sports-Games/Lacrosse/lacrosse2.svg','lacrosse2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(560,'Sports-Games/martial art/martail2.svg','martail2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(561,'Sports-Games/martial art/martail3.svg','martail3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(562,'Sports-Games/paintball/paintball.svg','paintball',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(563,'Sports-Games/ping pong/pingpong1.svg','pingpong1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(564,'Sports-Games/ping pong/pingpong2.svg','pingpong2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(565,'Sports-Games/poker/poker1.svg','poker1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(566,'Sports-Games/poker/poker2.svg','poker2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(567,'Sports-Games/racing/racing1.svg','racing1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(568,'Sports-Games/racing/racing2.svg','racing2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(569,'Sports-Games/racing/racing3.svg','racing3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(570,'Sports-Games/rugby/rugby1.svg','rugby1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(571,'Sports-Games/running/running1.svg','running1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(572,'Sports-Games/running/running2.svg','running2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(573,'Sports-Games/sailing/sailing1.svg','sailing1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(574,'Sports-Games/sailing/sailing2.svg','sailing2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(575,'Sports-Games/Skateboarding/skateboarding1.svg','skateboarding1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(576,'Sports-Games/Skateboarding/skateboarding2.svg','skateboarding2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(577,'Sports-Games/softball/softball1.svg','softball1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(578,'Sports-Games/softball/softball2.svg','softball2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(579,'Sports-Games/softball/softball3.svg','softball3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(580,'Sports-Games/surfing/surfing1.svg','surfing1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(581,'Sports-Games/surfing/surfing2.svg','surfing2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(582,'Sports-Games/surfing/surfing3.svg','surfing3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(583,'Sports-Games/tennis/tennis1.svg','tennis1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(584,'Sports-Games/Volleyball/volleybal2l.svg','volleybal2l',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(585,'Sports-Games/Volleyball/volleybal3l.svg','volleybal3l',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(586,'Sports-Games/Volleyball/volleybal4l.svg','volleybal4l',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(587,'Sports-Games/yoga/yoga.svg','yoga',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(588,'Sports-Games/yoga/yoga2.svg','yoga2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(589,'Sports-Games/yoga/yoga3.svg','yoga3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(590,'Transportation/airplanes/airplanes1.svg','airplanes1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(591,'Transportation/airplanes/airplanes2.svg','airplanes2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(592,'Transportation/bicycle/bicycle1.svg','bicycle1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(593,'Transportation/bicycle/bicycle2.svg','bicycle2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(594,'Transportation/buses/buses1.svg','buses1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(595,'Transportation/buses/buses2.svg','buses2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(596,'Transportation/car/car1.svg','car1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(597,'Transportation/car/car2.svg','car2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(598,'Transportation/helicopter/helicopter1.svg','helicopter1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(599,'Transportation/motorcycle/motorcycle1.svg','motorcycle1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(600,'Transportation/motorcycle/motorcycle2.svg','motorcycle2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(601,'Transportation/roads/roads1.svg','roads1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(602,'Transportation/ship/ship1.svg','ship1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(603,'Transportation/ship/ship2.svg','ship2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(604,'Transportation/spaceships/spaceships1.svg','spaceships1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(605,'Transportation/spaceships/spaceships2.svg','spaceships2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(606,'Transportation/taxi/taxi1.svg','taxi1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(607,'Transportation/taxi/taxi2.svg','taxi2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(608,'Transportation/wheels/wheels1.svg','wheels1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(609,'Transportation/wheels/wheels3.svg','wheels3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(610,'Transportation/wheels/wheels4.svg','wheels4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(611,'american/american design/american d3.svg','american d3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(612,'american/american design/american d5.svg','american d5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(613,'american/american design/american d6.svg','american d6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(614,'american/american eagles/american eag d4.svg','american eag d4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(615,'american/american eagles/american eag d5.svg','american eag d5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(616,'american/american flag/american flag (15).svg','american flag (15)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(617,'american/american flag/american flag (8).svg','american flag (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(618,'american/american politics/american poli3.svg','american poli3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(619,'animal/Alligators/alligators1.svg','alligators1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(620,'animal/Alligators/alligators2.svg','alligators2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(621,'animal/Alligators/alligators3.svg','alligators3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(622,'animal/apes/apes1.svg','apes1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(623,'animal/apes/apes2.svg','apes2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(624,'animal/apes/apes3.svg','apes3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(625,'animal/apes/apes4.svg','apes4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(626,'animal/bat/bat1.svg','bat1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(627,'animal/bat/bat2.svg','bat2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(628,'animal/bat/bat3.svg','bat3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(629,'animal/bat/bat4.svg','bat4',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(630,'animal/bat/bat5.svg','bat5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(631,'animal/bear/bear12.svg','bear12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(632,'animal/bear/bear13.svg','bear13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(633,'animal/bear/bear14.svg','bear14',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(634,'animal/bear/bear15.svg','bear15',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(635,'animal/bear/bear16.svg','bear16',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(636,'animal/Beavers/beavers1.svg','beavers1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(637,'animal/Beavers/beavers2.svg','beavers2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(638,'animal/Beavers/beavers3.svg','beavers3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(639,'animal/bees/bees1.svg','bees1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(640,'animal/bees/bees2.svg','bees2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(641,'animal/birds/birds10.svg','birds10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(642,'animal/birds/birds11.svg','birds11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(643,'animal/birds/birds8.svg','birds8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(644,'animal/birds/birds9.svg','birds9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(645,'animal/Buffaloes/buffaloes (7).svg','buffaloes (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(646,'animal/Buffaloes/buffaloes (8).svg','buffaloes (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(647,'animal/bull/bull10.svg','bull10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(648,'animal/bull/bull7.svg','bull7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(649,'animal/bull/bull9.svg','bull9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(650,'animal/Butterfly/butterfly1 (7).svg','butterfly1 (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(651,'animal/Butterfly/butterfly1 (8).svg','butterfly1 (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(652,'animal/Butterfly/butterfly1 (9).svg','butterfly1 (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(653,'animal/cats/cats-1 (10).svg','cats-1 (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(654,'animal/cats/cats-1 (11).svg','cats-1 (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(655,'animal/cats/cats-1 (12).svg','cats-1 (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(656,'animal/cats/cats-1 (13).svg','cats-1 (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(657,'animal/cats/cats-1 (14).svg','cats-1 (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(658,'animal/crabs/crabs (10).svg','crabs (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(659,'animal/crabs/crabs (11).svg','crabs (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(660,'animal/crabs/crabs (12).svg','crabs (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(661,'animal/deer/deer (1).svg','deer (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(662,'animal/deer/deer (2).svg','deer (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(663,'animal/deer/deer (4).svg','deer (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(664,'animal/deer/deer (5).svg','deer (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(665,'animal/dolphins/dolphins1.svg','dolphins1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(666,'animal/dolphins/dolphins2.svg','dolphins2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(667,'animal/dolphins/dolphins3.svg','dolphins3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(668,'animal/doves/doves1.svg','doves1',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(669,'animal/doves/doves2.svg','doves2',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(670,'animal/doves/doves3.svg','doves3',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(671,'animal/dragons/dragons6.svg','dragons6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(672,'animal/dragons/dragons7.svg','dragons7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(673,'animal/dragons/dragons8.svg','dragons8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(674,'animal/elephants/elephants (1).svg','elephants (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(675,'animal/elephants/elephants (2).svg','elephants (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(676,'animal/elephants/elephants (3).svg','elephants (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(677,'animal/elephants/elephants (4).svg','elephants (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(678,'animal/elephants/elephants (5).svg','elephants (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(679,'animal/foxes/foxes (1).svg','foxes (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(680,'animal/foxes/foxes (2).svg','foxes (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(681,'animal/foxes/foxes (3).svg','foxes (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(682,'animal/frog/frog (1).svg','frog (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(683,'animal/frog/frog (2).svg','frog (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(684,'animal/frog/frog (3).svg','frog (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(685,'animal/frog/frog (4).svg','frog (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(686,'animal/frog/frog (5).svg','frog (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(687,'animal/giraffes/girafes (7).svg','girafes (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(688,'animal/giraffes/girafes (8).svg','girafes (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(689,'animal/goat/goat (7).svg','goat (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(690,'animal/goat/goat (8).svg','goat (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(691,'animal/goat/goat (9).svg','goat (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(692,'animal/gorillas/gorillas (6).svg','gorillas (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(693,'animal/gorillas/gorillas (7).svg','gorillas (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(694,'animal/gorillas/gorillas (8).svg','gorillas (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(695,'animal/Horses/horses (10).svg','horses (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(696,'animal/Horses/horses (11).svg','horses (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(697,'animal/Horses/horses (12).svg','horses (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(698,'animal/Horses/horses (13).svg','horses (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(699,'animal/Horses/horses (14).svg','horses (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(700,'animal/Jaguars/jaguars (1).svg','jaguars (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(701,'animal/Jaguars/jaguars (2).svg','jaguars (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(702,'animal/Jaguars/jaguars (3).svg','jaguars (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(703,'animal/lion/lion (1).svg','lion (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(704,'animal/lion/lion (2).svg','lion (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(705,'animal/lion/lion (4).svg','lion (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(706,'animal/lion/lion (5).svg','lion (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(707,'animal/monkeys/monkeys (10).svg','monkeys (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(708,'animal/monkeys/monkeys (11).svg','monkeys (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(709,'animal/monkeys/monkeys (9).svg','monkeys (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(710,'animal/owl/owl5.svg','owl5',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(711,'animal/pandas/pandas (1).svg','pandas (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(712,'animal/pandas/pandas (2).svg','pandas (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(713,'animal/Penguins/penguins (10).svg','penguins (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(714,'animal/Penguins/penguins (8).svg','penguins (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(715,'animal/Penguins/penguins (9).svg','penguins (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(716,'animal/pigs/pigs (7).svg','pigs (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(717,'animal/pigs/pigs (8).svg','pigs (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(718,'animal/pigs/pigs (9).svg','pigs (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(719,'animal/shark/shark (10).svg','shark (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(720,'animal/shark/shark (8).svg','shark (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(721,'animal/shark/shark (9).svg','shark (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(722,'animal/spiders/spiders (7).svg','spiders (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(723,'animal/spiders/spiders (8).svg','spiders (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(724,'animal/spiders/spiders (9).svg','spiders (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(725,'animal/squirrels/squirrels (7).svg','squirrels (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(726,'animal/squirrels/squirrels (8).svg','squirrels (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(727,'animal/squirrels/squirrels (9).svg','squirrels (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(728,'animal/tiger/tiger (7).svg','tiger (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(729,'animal/tiger/tiger (8).svg','tiger (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(730,'animal/Turtles/turtles (7).svg','turtles (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(731,'animal/Turtles/turtles (8).svg','turtles (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(732,'animal/Turtles/turtles (9).svg','turtles (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(733,'animal/zebra/zebra (10).svg','zebra (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(734,'animal/zebra/zebra (11).svg','zebra (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(735,'animal/zebra/zebra (12).svg','zebra (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(736,'baby-family/baby/child (1).svg','child (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(737,'baby-family/baby/child (2).svg','child (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(738,'baby-family/baby/child (3).svg','child (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(739,'baby-family/couple love/couple love (1).svg','couple love (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(740,'baby-family/couple love/couple love (2).svg','couple love (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(741,'baby-family/family/family (6).svg','family (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(742,'baby-family/family/family (7).svg','family (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(743,'baby-family/family/family (8).svg','family (8)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(744,'badge/badge/badge41.svg','badge41',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(745,'badge/badge/badge42.svg','badge42',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(746,'badge/badge/badge43.svg','badge43',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(747,'badge/badge/badge44.svg','badge44',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(748,'badge/badge/badge45.svg','badge45',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(749,'badge/badge-2/badge92.svg','badge92',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(750,'badge/badge-2/badge93.svg','badge93',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(751,'badge/badge-2/badge94.svg','badge94',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(752,'badge/badge-2/badge95.svg','badge95',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(753,'charity/angel svg/angel7.svg','angel7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(754,'charity/angel svg/angel8.svg','angel8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(755,'charity/angel svg/angel9.svg','angel9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(756,'charity/children/children10.svg','children10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(757,'charity/children/children11.svg','children11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(758,'charity/children/children8.svg','children8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(759,'charity/children/children9.svg','children9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(760,'charity/footprint/footprint10.svg','footprint10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(761,'charity/footprint/footprint11.svg','footprint11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(762,'charity/friends/friends10.svg','friends10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(763,'charity/friends/friends8.svg','friends8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(764,'charity/hands/hands10.svg','hands10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(765,'charity/hands/hands11.svg','hands11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(766,'charity/hands/hands8.svg','hands8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(767,'charity/hearts/heart12.svg','heart12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(768,'charity/hearts/heart13.svg','heart13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(769,'charity/puzzle/puzzle6.svg','puzzle6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(770,'charity/puzzle/puzzle7.svg','puzzle7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(771,'charity/puzzle/puzzle8.svg','puzzle8',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(772,'charity/shoes/shoe6.svg','shoe6',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(773,'charity/shoes/shoe7.svg','shoe7',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(774,'charity/silhouettes/silhouettes10.svg','silhouettes10',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(775,'charity/silhouettes/silhouettes9.svg','silhouettes9',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(776,'comic/effect/effect18.svg','effect18',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(777,'comic/effect/effect19.svg','effect19',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(778,'comic/effect/effect20.svg','effect20',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(779,'comic/effect/effect21.svg','effect21',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(780,'comic/face/face11.svg','face11',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(781,'comic/face/face12.svg','face12',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(782,'comic/face/face13.svg','face13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(783,'comic/text/text13.svg','text13',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(784,'comic/text/text14.svg','text14',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(785,'Country/aregentina/aregentina (21).svg','aregentina (21)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(786,'Country/aregentina/aregentina (22).svg','aregentina (22)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(787,'Country/aregentina/aregentina (23).svg','aregentina (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(788,'Country/aregentina/aregentina (24).svg','aregentina (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(789,'Country/australia/australia (1).svg','australia (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(790,'Country/australia/australia (2).svg','australia (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(791,'Country/belgium/belgium (1).svg','belgium (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(792,'Country/belgium/belgium (2).svg','belgium (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(793,'Country/belgium/belgium (3).svg','belgium (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(794,'Country/belgium/belgium (4).svg','belgium (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(795,'Country/brazil/brazil (1).svg','brazil (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(796,'Country/brazil/brazil (2).svg','brazil (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(797,'Country/brazil/brazil (25).svg','brazil (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(798,'Country/brazil/brazil (26).svg','brazil (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(799,'Country/brazil/brazil (3).svg','brazil (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(800,'Country/brazil/brazil (4).svg','brazil (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(801,'Country/brazil/brazil (5).svg','brazil (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(802,'Country/brazil/brazil (6).svg','brazil (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(803,'Country/brazil/brazil (7).svg','brazil (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(804,'Country/canada/canada (1).svg','canada (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(805,'Country/canada/canada (2).svg','canada (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(806,'Country/canada/canada (27).svg','canada (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(807,'Country/canada/canada (28).svg','canada (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(808,'Country/canada/canada (3).svg','canada (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(809,'Country/canada/canada (4).svg','canada (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(810,'Country/canada/canada (5).svg','canada (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(811,'Country/canada/canada (6).svg','canada (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(812,'Country/canada/canada (7).svg','canada (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(813,'Country/china/china (1).svg','china (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(814,'Country/china/china (2).svg','china (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(815,'Country/china/china (25).svg','china (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(816,'Country/china/china (3).svg','china (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(817,'Country/china/china (4).svg','china (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(818,'Country/china/china (5).svg','china (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(819,'Country/china/china (6).svg','china (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(820,'Country/china/china (7).svg','china (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(821,'Country/croatia/croatia (1).svg','croatia (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(822,'Country/croatia/croatia (2).svg','croatia (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(823,'Country/croatia/croatia (23).svg','croatia (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(824,'Country/croatia/croatia (24).svg','croatia (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(825,'Country/croatia/croatia (3).svg','croatia (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(826,'Country/croatia/croatia (4).svg','croatia (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(827,'Country/croatia/croatia (5).svg','croatia (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(828,'Country/czech/czech (1).svg','czech (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(829,'Country/czech/czech (2).svg','czech (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(830,'Country/czech/czech (22).svg','czech (22)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(831,'Country/czech/czech (3).svg','czech (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(832,'Country/czech/czech (4).svg','czech (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(833,'Country/czech/czech (5).svg','czech (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(834,'Country/czech/czech (6).svg','czech (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(835,'Country/czech/czech (7).svg','czech (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(836,'Country/france/france (1).svg','france (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(837,'Country/france/france (2).svg','france (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(838,'Country/france/france (26).svg','france (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(839,'Country/france/france (27).svg','france (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(840,'Country/france/france (28).svg','france (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(841,'Country/france/france (3).svg','france (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(842,'Country/france/france (4).svg','france (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(843,'Country/france/france (6).svg','france (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(844,'Country/georgia/georgia (1).svg','georgia (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(845,'Country/georgia/georgia (2).svg','georgia (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(846,'Country/georgia/georgia (20).svg','georgia (20)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(847,'Country/georgia/georgia (21).svg','georgia (21)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(848,'Country/georgia/georgia (22).svg','georgia (22)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(849,'Country/georgia/georgia (3).svg','georgia (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(850,'Country/georgia/georgia (4).svg','georgia (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(851,'Country/georgia/georgia (5).svg','georgia (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(852,'Country/germany/germany (46).svg','germany (46)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(853,'Country/germany/germany (47).svg','germany (47)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(854,'Country/germany/germany (48).svg','germany (48)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(855,'Country/germany/germany (49).svg','germany (49)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(856,'Country/germany/germany (50).svg','germany (50)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(857,'Country/germany/germany (51).svg','germany (51)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(858,'Country/germany/germany (52).svg','germany (52)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(859,'Country/germany/germany (53).svg','germany (53)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(860,'Country/germany/germany (54).svg','germany (54)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(861,'Country/germany/germany (55).svg','germany (55)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(862,'Country/germany/germany (56).svg','germany (56)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(863,'Country/germany/germany (57).svg','germany (57)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(864,'Country/germany/germany (58).svg','germany (58)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(865,'Country/germany/germany (59).svg','germany (59)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(866,'Country/germany/germany (60).svg','germany (60)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(867,'Country/germany/germany (61).svg','germany (61)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(868,'Country/greece/greece (23).svg','greece (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(869,'Country/greece/greece (24).svg','greece (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(870,'Country/greece/greece (25).svg','greece (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(871,'Country/greece/greece (26).svg','greece (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(872,'Country/greece/greece (27).svg','greece (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(873,'Country/greece/greece (28).svg','greece (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(874,'Country/greece/greece (29).svg','greece (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(875,'Country/greece/greece (30).svg','greece (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(876,'Country/hong kong/hong_kong (23).svg','hong_kong (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(877,'Country/hong kong/hong_kong (24).svg','hong_kong (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(878,'Country/hong kong/hong_kong (25).svg','hong_kong (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(879,'Country/hong kong/hong_kong (26).svg','hong_kong (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(880,'Country/hong kong/hong_kong (27).svg','hong_kong (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(881,'Country/hong kong/hong_kong (28).svg','hong_kong (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(882,'Country/hong kong/hong_kong (29).svg','hong_kong (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(883,'Country/hong kong/hong_kong (30).svg','hong_kong (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(884,'Country/indonesia/indonesia (25).svg','indonesia (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(885,'Country/indonesia/indonesia (26).svg','indonesia (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(886,'Country/indonesia/indonesia (27).svg','indonesia (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(887,'Country/indonesia/indonesia (28).svg','indonesia (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(888,'Country/indonesia/indonesia (29).svg','indonesia (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(889,'Country/indonesia/indonesia (30).svg','indonesia (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(890,'Country/indonesia/indonesia (31).svg','indonesia (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(891,'Country/indonesia/indonesia (32).svg','indonesia (32)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(892,'Country/indonesia/indonesia (33).svg','indonesia (33)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(893,'Country/ireland/ireland (38).svg','ireland (38)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(894,'Country/ireland/ireland (39).svg','ireland (39)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(895,'Country/ireland/ireland (40).svg','ireland (40)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(896,'Country/ireland/ireland (41).svg','ireland (41)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(897,'Country/ireland/ireland (42).svg','ireland (42)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(898,'Country/ireland/ireland (43).svg','ireland (43)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(899,'Country/ireland/ireland (44).svg','ireland (44)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(900,'Country/ireland/ireland (45).svg','ireland (45)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(901,'Country/ireland/ireland (46).svg','ireland (46)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(902,'Country/ireland/ireland (47).svg','ireland (47)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(903,'Country/ireland/ireland (48).svg','ireland (48)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(904,'Country/ireland/ireland (49).svg','ireland (49)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(905,'Country/ireland/ireland (50).svg','ireland (50)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(906,'Country/ireland/ireland (51).svg','ireland (51)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(907,'Country/italy/italy (24).svg','italy (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(908,'Country/italy/italy (25).svg','italy (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(909,'Country/italy/italy (26).svg','italy (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(910,'Country/italy/italy (27).svg','italy (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(911,'Country/italy/italy (28).svg','italy (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(912,'Country/italy/italy (29).svg','italy (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(913,'Country/italy/italy (30).svg','italy (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(914,'Country/italy/italy (31).svg','italy (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(915,'Country/japan/japan (22).svg','japan (22)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(916,'Country/japan/japan (24).svg','japan (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(917,'Country/japan/japan (25).svg','japan (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(918,'Country/japan/japan (26).svg','japan (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(919,'Country/japan/japan (27).svg','japan (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(920,'Country/japan/japan (28).svg','japan (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(921,'Country/japan/japan (29).svg','japan (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(922,'Country/japan/japan (30).svg','japan (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(923,'Country/latvia/latvia (26).svg','latvia (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(924,'Country/latvia/latvia (27).svg','latvia (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(925,'Country/latvia/latvia (28).svg','latvia (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(926,'Country/latvia/latvia (29).svg','latvia (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(927,'Country/latvia/latvia (30).svg','latvia (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(928,'Country/latvia/latvia (31).svg','latvia (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(929,'Country/latvia/latvia (32).svg','latvia (32)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(930,'Country/latvia/latvia (33).svg','latvia (33)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(931,'Country/latvia/latvia (34).svg','latvia (34)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(932,'Country/luxembourg/luxembourg (24).svg','luxembourg (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(933,'Country/luxembourg/luxembourg (25).svg','luxembourg (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(934,'Country/luxembourg/luxembourg (26).svg','luxembourg (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(935,'Country/luxembourg/luxembourg (27).svg','luxembourg (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(936,'Country/luxembourg/luxembourg (28).svg','luxembourg (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(937,'Country/luxembourg/luxembourg (29).svg','luxembourg (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(938,'Country/luxembourg/luxembourg (30).svg','luxembourg (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(939,'Country/luxembourg/luxembourg (31).svg','luxembourg (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(940,'Country/malaysia/malaysia (10).svg','malaysia (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(941,'Country/malaysia/malaysia (11).svg','malaysia (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(942,'Country/malaysia/malaysia (12).svg','malaysia (12)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(943,'Country/malaysia/malaysia (13).svg','malaysia (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(944,'Country/malaysia/malaysia (14).svg','malaysia (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(945,'Country/malaysia/malaysia (30).svg','malaysia (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(946,'Country/malaysia/malaysia (31).svg','malaysia (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(947,'Country/malaysia/malaysia (9).svg','malaysia (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(948,'Country/mexico/mexico (31).svg','mexico (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(949,'Country/mexico/mexico (32).svg','mexico (32)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(950,'Country/mexico/mexico (33).svg','mexico (33)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(951,'Country/mexico/mexico (34).svg','mexico (34)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(952,'Country/mexico/mexico (35).svg','mexico (35)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(953,'Country/mexico/mexico (36).svg','mexico (36)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(954,'Country/mexico/mexico (37).svg','mexico (37)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(955,'Country/mexico/mexico (38).svg','mexico (38)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(956,'Country/netherland/netherland (24).svg','netherland (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(957,'Country/netherland/netherland (25).svg','netherland (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(958,'Country/netherland/netherland (26).svg','netherland (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(959,'Country/netherland/netherland (27).svg','netherland (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(960,'Country/netherland/netherland (28).svg','netherland (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(961,'Country/netherland/netherland (29).svg','netherland (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(962,'Country/netherland/netherland (30).svg','netherland (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(963,'Country/netherland/netherland (31).svg','netherland (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(964,'Country/philippines/philippines (23).svg','philippines (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(965,'Country/philippines/philippines (24).svg','philippines (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(966,'Country/philippines/philippines (25).svg','philippines (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(967,'Country/philippines/philippines (26).svg','philippines (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(968,'Country/philippines/philippines (27).svg','philippines (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(969,'Country/philippines/philippines (28).svg','philippines (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(970,'Country/philippines/philippines (29).svg','philippines (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(971,'Country/philippines/philippines (30).svg','philippines (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(972,'Country/poland/poland (26).svg','poland (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(973,'Country/poland/poland (27).svg','poland (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(974,'Country/poland/poland (28).svg','poland (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(975,'Country/poland/poland (29).svg','poland (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(976,'Country/poland/poland (30).svg','poland (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(977,'Country/poland/poland (31).svg','poland (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(978,'Country/poland/poland (32).svg','poland (32)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(979,'Country/poland/poland (33).svg','poland (33)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(980,'Country/singapore/singapore (25).svg','singapore (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(981,'Country/singapore/singapore (26).svg','singapore (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(982,'Country/singapore/singapore (27).svg','singapore (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(983,'Country/singapore/singapore (28).svg','singapore (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(984,'Country/singapore/singapore (29).svg','singapore (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(985,'Country/singapore/singapore (30).svg','singapore (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(986,'Country/singapore/singapore (31).svg','singapore (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(987,'Country/singapore/singapore (32).svg','singapore (32)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(988,'Country/singapore/singapore (33).svg','singapore (33)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(989,'Country/slaovakia/slaovakia (1).svg','slaovakia (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(990,'Country/slaovakia/slaovakia (2).svg','slaovakia (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(991,'Country/slaovakia/slaovakia (23).svg','slaovakia (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(992,'Country/slaovakia/slaovakia (3).svg','slaovakia (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(993,'Country/slaovakia/slaovakia (4).svg','slaovakia (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(994,'Country/slaovakia/slaovakia (5).svg','slaovakia (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(995,'Country/slaovakia/slaovakia (6).svg','slaovakia (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(996,'Country/slaovakia/slaovakia (7).svg','slaovakia (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(997,'Country/spain/spain (1).svg','spain (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(998,'Country/spain/spain (2).svg','spain (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(999,'Country/spain/spain (27).svg','spain (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1000,'Country/spain/spain (28).svg','spain (28)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1001,'Country/spain/spain (29).svg','spain (29)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1002,'Country/spain/spain (30).svg','spain (30)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1003,'Country/spain/spain (31).svg','spain (31)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1004,'Country/spain/spain (32).svg','spain (32)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1005,'Country/spain/spain (33).svg','spain (33)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1006,'Country/spain/spain (34).svg','spain (34)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1007,'Country/spain/spain (35).svg','spain (35)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1008,'Country/spain/spain (36).svg','spain (36)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1009,'Country/spain/spain (38).svg','spain (38)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1010,'Country/switzerland/switzerland (1).svg','switzerland (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1011,'Country/switzerland/switzerland (2).svg','switzerland (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1012,'Country/switzerland/switzerland (24).svg','switzerland (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1013,'Country/switzerland/switzerland (3).svg','switzerland (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1014,'Country/switzerland/switzerland (4).svg','switzerland (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1015,'Country/switzerland/switzerland (5).svg','switzerland (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1016,'Country/switzerland/switzerland (6).svg','switzerland (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1017,'Country/taiwan/taiwan (1).svg','taiwan (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1018,'Country/taiwan/taiwan (2).svg','taiwan (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1019,'Country/taiwan/taiwan (3).svg','taiwan (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1020,'Country/taiwan/taiwan (4).svg','taiwan (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1021,'Country/taiwan/taiwan (5).svg','taiwan (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1022,'Country/taiwan/taiwan (6).svg','taiwan (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1023,'Country/taiwan/taiwan (7).svg','taiwan (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1024,'Country/thailand/thailand (1).svg','thailand (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1025,'Country/thailand/thailand (2).svg','thailand (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1026,'Country/thailand/thailand (3).svg','thailand (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1027,'Country/thailand/thailand (4).svg','thailand (4)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1028,'Country/thailand/thailand (5).svg','thailand (5)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1029,'Country/thailand/thailand (6).svg','thailand (6)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1030,'Country/thailand/thailand (7).svg','thailand (7)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1031,'Country/turkey/turkey (20).svg','turkey (20)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1032,'Country/turkey/turkey (21).svg','turkey (21)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1033,'Country/turkey/turkey (22).svg','turkey (22)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1034,'Country/turkey/turkey (23).svg','turkey (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1035,'Country/turkey/turkey (24).svg','turkey (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1036,'Country/turkey/turkey (25).svg','turkey (25)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1037,'Country/turkey/turkey (26).svg','turkey (26)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1038,'Country/turkey/turkey (27).svg','turkey (27)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1039,'Country/uae/uae (16).svg','uae (16)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1040,'Country/uae/uae (17).svg','uae (17)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1041,'Country/uae/uae (18).svg','uae (18)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1042,'Country/uae/uae (19).svg','uae (19)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1043,'Country/uae/uae (2).svg','uae (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1044,'Country/uae/uae (20).svg','uae (20)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1045,'Country/uae/uae (21).svg','uae (21)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1046,'Country/uae/uae (22).svg','uae (22)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1047,'Country/uae/uae (23).svg','uae (23)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1048,'Country/uae/uae (24).svg','uae (24)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1049,'Country/uk/uk (13).svg','uk (13)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1050,'Country/uk/uk (14).svg','uk (14)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1051,'Country/uk/uk (15).svg','uk (15)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1052,'Country/uk/uk (16).svg','uk (16)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1053,'Country/uk/uk (17).svg','uk (17)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1054,'Country/uk/uk (18).svg','uk (18)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1055,'Country/uk/uk (19).svg','uk (19)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1056,'Country/uk/uk (20).svg','uk (20)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1057,'Country/uk/uk (21).svg','uk (21)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1058,'Country/uk/uk (22).svg','uk (22)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1059,'Country/uruguay/uruguay (16).svg','uruguay (16)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1060,'Country/uruguay/uruguay (17).svg','uruguay (17)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1061,'Country/uruguay/uruguay (18).svg','uruguay (18)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1062,'Country/uruguay/uruguay (19).svg','uruguay (19)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1063,'Country/uruguay/uruguay (20).svg','uruguay (20)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1064,'Country/uruguay/uruguay (21).svg','uruguay (21)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1065,'Country/us/us (10).svg','us (10)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1066,'Country/us/us (11).svg','us (11)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1067,'Country/us/us (9).svg','us (9)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1068,'Country/vietnam/vietnam (1).svg','vietnam (1)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1069,'Country/vietnam/vietnam (2).svg','vietnam (2)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00),(1070,'Country/vietnam/vietnam (3).svg','vietnam (3)',0.00,NULL,'0','1','1',0,'0',0,'0000-00-00 00:00:00',0.00,0.00);
/*!40000 ALTER TABLE `designs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discont_range`
--

DROP TABLE IF EXISTS `discont_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discont_range` (
  `pk_id` int(10) NOT NULL AUTO_INCREMENT,
  `discount_id` int(10) NOT NULL,
  `from_range` int(10) NOT NULL,
  `to_range` int(10) NOT NULL,
  `discount_price` float(5,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discont_range`
--

LOCK TABLES `discont_range` WRITE;
/*!40000 ALTER TABLE `discont_range` DISABLE KEYS */;
/*!40000 ALTER TABLE `discont_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discount` (
  `pk_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distress`
--

DROP TABLE IF EXISTS `distress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `distress` (
  `distress_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `file_name` varchar(100) NOT NULL,
  `price` double(12,2) DEFAULT '0.00',
  PRIMARY KEY (`distress_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distress`
--

LOCK TABLES `distress` WRITE;
/*!40000 ALTER TABLE `distress` DISABLE KEYS */;
INSERT INTO `distress` VALUES (12,'ba07715f0fca7e2f10d582d0c89d967a','Distress Effect','ba07715f0fca7e2f10d582d0c89d967a.jpg',0.00),(11,'af8e98224f68783aade3a37a8dc6f967','Distress Effect','af8e98224f68783aade3a37a8dc6f967.jpg',0.00),(13,'e5823fca228c4f9b3ba8b2a2561e4be6','Distress Effect','e5823fca228c4f9b3ba8b2a2561e4be6.jpg',0.00),(14,'0758f326f8bc85bfe10a841e8d1739b6','Distress Effect','0758f326f8bc85bfe10a841e8d1739b6.jpg',0.00),(15,'d3714f73591bcc77b7771b6b24ec40fc','Distress Effect','d3714f73591bcc77b7771b6b24ec40fc.jpg',0.00),(16,'d8a74862ba89aa2d683fd5dc62590716','Distress Effect','d8a74862ba89aa2d683fd5dc62590716.jpg',0.00),(17,'09f9c32ad21e8bdce7e94d60d62e53c0','Distress Effect','09f9c32ad21e8bdce7e94d60d62e53c0.jpg',0.00),(18,'44783771eee790b5dc47dfcd7ae92908','Distress Effect','44783771eee790b5dc47dfcd7ae92908.jpg',0.00),(19,'2a4343877403945fba7d7a53d5021578','Distress Effect','2a4343877403945fba7d7a53d5021578.jpg',0.00),(20,'1d42f94b144f15f9f8a6dac21c5f03ac','Distress Effect','1d42f94b144f15f9f8a6dac21c5f03ac.jpg',0.00);
/*!40000 ALTER TABLE `distress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domain_store_rel`
--

DROP TABLE IF EXISTS `domain_store_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `domain_store_rel` (
  `pk_id` int(2) NOT NULL AUTO_INCREMENT,
  `domain_name` varchar(100) NOT NULL,
  `store_id` tinyint(2) NOT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domain_store_rel`
--

LOCK TABLES `domain_store_rel` WRITE;
/*!40000 ALTER TABLE `domain_store_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `domain_store_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dynamic_columns`
--

DROP TABLE IF EXISTS `dynamic_columns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dynamic_columns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `master_module_id` int(11) NOT NULL,
  `column_name` varchar(104) NOT NULL,
  `label` varchar(100) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `status` enum('0','1') NOT NULL COMMENT '1-Checked, 0-Unchecked',
  `is_required` enum('0','1') NOT NULL COMMENT '1- required, 0- optional',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dynamic_columns`
--

LOCK TABLES `dynamic_columns` WRITE;
/*!40000 ALTER TABLE `dynamic_columns` DISABLE KEYS */;
INSERT INTO `dynamic_columns` VALUES (1,1,'first_name','First Name','fa fa-user','1','1'),(2,1,'last_name','Last Name','fa fa-user','1','1'),(3,1,'email','Email','fa fa-envelope-o','1','1'),(4,1,'contact_no','Contact No','fa fa-phone','1','0'),(5,1,'user_registered','Registered on','fa fa-calendar','1','0'),(6,1,'quote_count','No. Of Quotes','fa fa-quote-left','1','0'),(7,1,'company','Company','fa fa-building-o','1','0'),(8,2,'prefix_quote_id','Id','fa fa-user','1','1'),(9,2,'subject','Subject','fa fa-user','1','1'),(10,2,'customer_name','Customer Name','fa fa-user','1','0'),(11,2,'email','Customer Email','fa fa-envelope-o','1','0'),(12,2,'created_date','Created Date','fa fa-calendar','1','0'),(13,2,'agent_name','Agent Name','fa fa-user','1','1'),(14,2,'status','Status','fa fa-user','1','0');
/*!40000 ALTER TABLE `dynamic_columns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `effect_list`
--

DROP TABLE IF EXISTS `effect_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `effect_list` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(100) NOT NULL,
  `date_modified` date NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `effect_list`
--

LOCK TABLES `effect_list` WRITE;
/*!40000 ALTER TABLE `effect_list` DISABLE KEYS */;
INSERT INTO `effect_list` VALUES (1,'bright','2014-08-18',1),(2,'desaturate','2014-08-18',1),(3,'grayscale','2014-08-18',1),(4,'green','2014-08-18',1),(5,'invert','2014-08-18',1),(6,'noise','2014-08-18',1),(7,'normal','2014-08-18',1),(8,'pixelate','2014-08-18',1),(9,'red','2014-08-18',1),(10,'saturate','2014-08-18',1),(11,'sepia','2014-08-18',1),(12,'sepia2','2014-08-18',1),(13,'yellow','2014-08-18',1);
/*!40000 ALTER TABLE `effect_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `features` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'It indicates whether the feature is ON or OFF.',
  `mandatory_status` tinyint(1) NOT NULL COMMENT 'It indicates whether the feature is mandatory(ON) or can be set to OFF.',
  `product_level_status` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'It indicates wheather a feature can be set to ON/OFF product-wise.',
  `category_level_status` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'It indicates wheather a feature can be set to ON/OFF product-category-wise.',
  `tab_id` int(3) NOT NULL DEFAULT '0' COMMENT 'It indicates the tab of the subtab. Value is 0 for the feature which is not a subtab.',
  `hide_from_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES (1,'Product','product',1,1,0,1,0,0),(2,'Product Canvas','productCanvas',1,1,0,1,0,0),(3,'Cart','cart',1,1,0,1,0,0),(4,'Designs','design',1,0,0,1,2,0),(5,'Plain Text','plainText',1,0,0,1,3,0),(6,'Image Edit','imageEdit',1,1,0,1,0,0),(7,'QR Code','qrCode',1,0,1,1,2,0),(8,'Shapes','shape',1,0,1,1,2,0),(9,'Hand Drawing','handDrawing',1,0,1,1,2,0),(10,'Distress Effect','distressEffect',1,0,1,0,2,0),(11,'Mask','imageMask',1,0,1,1,4,0),(12,'Filter','imageFilter',1,0,1,1,4,0),(13,'Curve Text','curveText',1,0,1,1,3,0),(14,'Text On Path','textOnPath',1,0,1,1,3,0),(15,'Text FX','textFX',1,0,1,1,3,0),(16,'Text Art','textArt',1,0,1,1,3,0),(17,'Word Cloud','wordCloud',1,0,1,1,3,0),(18,'Name & Number','nameNumber',1,0,1,1,5,1),(19,'Social Image','socialImage',1,0,1,1,4,0),(20,'Layers','layers',1,1,0,1,0,0),(21,'My Gallery','myImage',1,0,0,0,2,0),(22,'Reduce Color','reduceColor',1,0,1,1,4,0),(23,'Template','template',1,0,1,1,2,0),(44,'Background','background',1,0,1,1,2,0),(45,'Select Color','selectColor',1,0,1,1,4,0),(46,'Background Pattern','backgroundPattern',1,0,1,1,2,0),(47,'Image Settings','imageSettings',1,0,1,1,0,0),(48,'Variable Printing','variablePrinting',1,0,1,1,0,0),(49,'Variable Data Printing','VDP',1,0,1,1,6,1);
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `font_category`
--

DROP TABLE IF EXISTS `font_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `font_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(20) NOT NULL,
  `sort_order` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `font_category`
--

LOCK TABLES `font_category` WRITE;
/*!40000 ALTER TABLE `font_category` DISABLE KEYS */;
INSERT INTO `font_category` VALUES (7,'Western',0),(8,'Army',0),(9,'Cartoon',0),(10,'Comic',9),(11,'Curley',10),(12,'Disorted',11),(13,'Eroded',12),(14,'Halloween',13),(15,'Old School',14),(16,'Retro',15),(17,'Others',16);
/*!40000 ALTER TABLE `font_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `font_category_printmethod_rel`
--

DROP TABLE IF EXISTS `font_category_printmethod_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `font_category_printmethod_rel` (
  `print_method_id` int(11) NOT NULL,
  `font_category_id` int(11) NOT NULL,
  `is_enable` enum('1','0') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `font_category_printmethod_rel`
--

LOCK TABLES `font_category_printmethod_rel` WRITE;
/*!40000 ALTER TABLE `font_category_printmethod_rel` DISABLE KEYS */;
INSERT INTO `font_category_printmethod_rel` VALUES (1,17,'0'),(1,16,'0'),(3,17,'0'),(3,16,'0'),(1,15,'0'),(3,15,'0'),(4,17,'0'),(4,16,'0'),(4,15,'0'),(5,17,'0'),(5,16,'0'),(5,15,'0'),(6,9,'0'),(6,8,'0'),(6,7,'0'),(1,14,'0'),(1,13,'0'),(1,12,'0'),(1,11,'0'),(1,10,'0'),(1,9,'0'),(1,8,'0'),(1,7,'0'),(3,14,'0'),(3,13,'0'),(3,12,'0'),(3,11,'0'),(3,10,'0'),(3,9,'0'),(3,8,'0'),(3,7,'0'),(4,14,'0'),(4,13,'0'),(4,12,'0'),(4,11,'0'),(4,10,'0'),(4,9,'0'),(4,8,'0'),(4,7,'0'),(5,14,'0'),(5,13,'0'),(5,12,'0'),(5,11,'0'),(5,10,'0'),(5,9,'0'),(5,8,'0'),(5,7,'0'),(6,10,'0'),(6,11,'0'),(6,12,'0'),(6,13,'0'),(6,14,'0'),(6,15,'0'),(6,16,'0'),(6,17,'0');
/*!40000 ALTER TABLE `font_category_printmethod_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `font_category_relation`
--

DROP TABLE IF EXISTS `font_category_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `font_category_relation` (
  `font_id` int(5) NOT NULL,
  `category_id` tinyint(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `font_category_relation`
--

LOCK TABLES `font_category_relation` WRITE;
/*!40000 ALTER TABLE `font_category_relation` DISABLE KEYS */;
INSERT INTO `font_category_relation` VALUES (4,1),(3,2),(9,2),(8,6),(11,6),(12,2),(13,8),(14,8),(15,7),(16,7),(17,7),(18,9),(19,9),(20,9),(21,9),(22,9),(23,9),(24,8),(14,8),(25,8),(26,8),(27,8),(28,9),(21,9),(29,9),(20,9),(30,9),(22,9),(31,9),(23,9),(32,9),(33,9),(18,9),(34,10),(35,10),(36,10),(37,10),(38,10),(39,11),(40,11),(41,11),(42,11),(43,12),(44,12),(45,12),(46,12),(47,12),(48,12),(49,13),(50,13),(51,14),(52,14),(53,14),(54,14),(55,14),(56,14),(57,14),(58,14),(59,15),(60,15),(61,15),(62,16),(63,16),(64,16),(65,16),(66,16),(67,16),(68,16),(69,16),(70,16),(71,16),(72,7),(17,7),(73,7),(16,7),(15,7),(74,7),(75,17),(76,17),(77,17),(78,17),(79,17),(80,17),(81,17);
/*!40000 ALTER TABLE `font_category_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `font_tag_relation`
--

DROP TABLE IF EXISTS `font_tag_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `font_tag_relation` (
  `font_id` int(10) NOT NULL,
  `tag_id` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `font_tag_relation`
--

LOCK TABLES `font_tag_relation` WRITE;
/*!40000 ALTER TABLE `font_tag_relation` DISABLE KEYS */;
INSERT INTO `font_tag_relation` VALUES (1,2),(1,1),(4,4),(4,3),(3,4),(3,3),(9,5),(9,6),(10,7),(11,8),(12,8);
/*!40000 ALTER TABLE `font_tag_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fonts`
--

DROP TABLE IF EXISTS `fonts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fonts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `font_name` varchar(50) DEFAULT NULL,
  `font_label` varchar(100) DEFAULT NULL,
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `orgName` varchar(100) DEFAULT NULL,
  `is_delete` enum('0','1') NOT NULL DEFAULT '0',
  `sort_order` int(30) NOT NULL DEFAULT '0',
  `date_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fonts`
--

LOCK TABLES `fonts` WRITE;
/*!40000 ALTER TABLE `fonts` DISABLE KEYS */;
INSERT INTO `fonts` VALUES (8,'Lintsec','Lintsec',5.00,'Lintsec','1',0,'0000-00-00 00:00:00'),(9,'ChunkFive_Roman','ChunkFive_Roman',6.00,'ChunkFive_Roman','1',0,'0000-00-00 00:00:00'),(12,'ActionIs','ActionIs',7.00,'Action_Is','1',0,'0000-00-00 00:00:00'),(13,'armalite','armalite',1.00,'Armalite Rifle','0',0,NULL),(14,'gunplay rg','gunplay rg',0.00,'Gunplay','0',0,NULL),(15,'SHADSER','SHADSER',0.00,'Shadowed Serif','0',0,NULL),(16,'Saddlebag','Saddlebag',0.00,'Saddlebag','0',0,NULL),(17,'cherif','cherif',0.00,'cherif','0',0,NULL),(18,'Super Mario Bros.','Super Mario Bros.',0.00,'Super Mario Bros.','0',0,NULL),(19,'ICE_AGE','ICE_AGE',1.00,'ice age font','1',0,NULL),(20,'BUMBAZO','BUMBAZO',0.00,'Bumbazoid','0',0,NULL),(21,'Bored_Work_Doodles','Bored_Work_Doodles',0.00,'Bored_Work_Doodles','0',0,NULL),(22,'EYESIS__','EYESIS__',0.00,'Eyesis','0',0,NULL),(23,'GOODDC__','GOODDC__',0.00,'GoodDog Cool','0',0,NULL),(24,'CARGC___','CARGC___',1.00,'CargoCrate','0',0,NULL),(25,'Kroftsmann','Kroftsmann',0.00,'Kroftsmann','0',0,NULL),(26,'LeArchitect','LeArchitect',0.00,'LeArchitect','0',0,NULL),(27,'sprayme','sprayme',1.00,'Spray.ME','0',0,NULL),(28,'actionj','actionj',0.00,'Action Jackson','0',0,NULL),(29,'BradBunR','BradBunR',0.00,'Brady Bunch Remastered','0',0,NULL),(30,'CHLORINR','CHLORINR',0.00,'Chlorinar','0',0,NULL),(31,'German Beauty','German Beauty',0.00,'German Beauty','0',0,NULL),(32,'ICE_AGE','ICE_AGE',0.00,'ice age font','1',0,NULL),(33,'mail ray stuff','mail ray stuff',0.00,'Mail Ray Stuff','0',0,NULL),(34,'BD_Cartoon_Shout','BD_Cartoon_Shout',0.00,'BD Cartoon Shout','1',0,NULL),(35,'Comic_Andy','Comic_Andy',0.00,'comic andy','1',0,NULL),(36,'KA-BLAMO!','KA-BLAMO!',0.00,'KA-BLAMO!','0',0,NULL),(37,'KOMTIT__','KOMTIT__',0.00,'Komika Title','0',0,NULL),(38,'Razing','Razing',0.00,'Razing','0',0,NULL),(39,'Betty Regular','Betty Regular',0.00,'Betty','0',0,NULL),(40,'bsurp___','bsurp___',0.00,'B Surfers','1',0,NULL),(41,'Cirkus','Cirkus',0.00,'Cirkus','1',0,NULL),(42,'rebucked','rebucked',0.00,'ReBucked','0',0,NULL),(43,'BRIMFRG_','BRIMFRG_',0.00,'Brimborion Fou','0',0,NULL),(44,'DaDa Antiquerist','DaDa Antiquerist',0.00,'DaDa Antiquerist ','0',0,NULL),(45,'HACKED','HACKED',0.00,'HACKED','0',0,NULL),(46,'kandinsky','kandinsky',0.00,'kandinsky','1',0,NULL),(47,'RvD_GLUED','RvD_GLUED',0.00,'RvD_GLUED','0',0,NULL),(48,'timesnewarial','timesnewarial',0.00,'Times New Arial','0',0,NULL),(49,'alph','alph',0.00,'Alpha Echo','0',0,NULL),(50,'Tomb_Raider','Tomb_Raider',0.00,'Tomb_Raider','0',0,NULL),(51,'BLOODY','BLOODY',0.00,'Bloody','0',0,NULL),(52,'crimes','crimes',0.00,'True Crimes','0',0,NULL),(53,'Gloop','Gloop',0.00,'Gloop','0',0,NULL),(54,'gooey','gooey',0.00,'Gooey','1',0,NULL),(55,'motrg___','motrg___',0.00,'Motrhead','1',0,NULL),(56,'The Cramps','The Cramps',0.00,'The Cramps','0',0,NULL),(57,'VampyrishABC-Oblique','VampyrishABC-Oblique',0.00,'VampyrishABC-Oblique','0',0,NULL),(58,'ZOMBIE','ZOMBIE',0.00,'Zombie','0',0,NULL),(59,'Fmcoinout','Fmcoinout',0.00,'FM College Team in&out','0',0,NULL),(60,'Freshman','Freshman',0.00,'Freshman','0',0,NULL),(61,'octin college rg','octin college rg',0.00,'Octin College','0',0,NULL),(62,'BEAUTYSC','BEAUTYSC',0.00,'BeautySchoolDropoutII','0',0,NULL),(63,'BIGTOP__','BIGTOP__',0.00,'Big Top','0',0,NULL),(64,'DANCINGD','DANCINGD',0.00,'DancingDonuts','0',0,NULL),(65,'DEBONAIR','DEBONAIR',1.00,'DebonairInline','0',0,NULL),(66,'manbow fill','manbow fill',0.00,'Manbow','1',0,NULL),(67,'manbow solid','manbow solid',0.00,'Manbow','1',0,NULL),(68,'Outstanding','Outstanding',0.00,'Outstanding','1',0,NULL),(69,'RIALTO','RIALTO',0.00,'Rialto','0',0,NULL),(70,'atwriter','atwriter',0.00,'Another Typewriter','0',0,NULL),(71,'NixieOne','NixieOne',0.00,'Nixie One','0',0,NULL),(72,'akaPosse','akaPosse',0.00,'akaPosse','0',0,NULL),(73,'MADFB___','MADFB___',0.00,'Madfont Bars','1',0,NULL),(74,'vanilla whale','vanilla whale',0.00,'Vanilla Whale','0',0,NULL),(75,'AARDC___','AARDC___',0.00,'Aardvark Cafe','1',0,NULL),(76,'african','african',0.00,'African','0',0,NULL),(77,'falsposr','falsposr',0.00,'False Positive Round BRK','0',0,NULL),(78,'FerroRosso','FerroRosso',0.00,'Ferro Rosso','0',0,NULL),(79,'Insanibc','Insanibc',0.00,'Insaniburger with Cheese','0',0,NULL),(80,'woodcutter executive','woodcutter executive',0.00,'woodcutter executive','0',0,NULL),(81,'BEBAS___','BEBAS___',1.00,'Bebas','0',0,NULL);
/*!40000 ALTER TABLE `fonts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `general_setting`
--

DROP TABLE IF EXISTS `general_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `general_setting` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `is_popup_enable` enum('0','1') NOT NULL DEFAULT '0',
  `terms_condition` text NOT NULL,
  `currency` varchar(20) NOT NULL,
  `unit` varchar(20) NOT NULL,
  `is_direct_cart` enum('0','1') NOT NULL DEFAULT '0',
  `max_file_size` float(5,2) NOT NULL DEFAULT '0.00',
  `image_width` float(8,2) NOT NULL DEFAULT '0.00',
  `image_height` float(8,2) NOT NULL DEFAULT '0.00',
  `bounds` text NOT NULL,
  `price_suffix` varchar(30) NOT NULL,
  `price_prefix` varchar(30) NOT NULL,
  `font_size_min` int(5) NOT NULL,
  `font_size_max` int(5) NOT NULL,
  `step` int(5) NOT NULL,
  `notes` text NOT NULL,
  `no_of_chars` int(5) NOT NULL,
  `app_id` varchar(30) NOT NULL,
  `domain_name` varchar(30) NOT NULL,
  `site_url` varchar(30) NOT NULL,
  `is_terms_and_condition_allow` enum('1','0') NOT NULL,
  `img_terms_condition` text NOT NULL,
  `is_email_allowed` enum('1','0') NOT NULL,
  `email` varchar(30) NOT NULL,
  `is_img_quality` enum('0','1') DEFAULT '0',
  `production_hub` enum('true','false') NOT NULL DEFAULT 'true',
  `max_no_of_cart` int(5) NOT NULL DEFAULT '10',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_setting`
--

LOCK TABLES `general_setting` WRITE;
/*!40000 ALTER TABLE `general_setting` DISABLE KEYS */;
INSERT INTO `general_setting` VALUES (1,'1','Please make sure you are uploading high resolution images when customizing your product.  If your artwork does not follow our recommended guidelines, we cannot guarantee the quality of the final printed product. Please make sure to check your design for SPELLING, CLARITY OF THE IMAGES and TEXT PLACEMENT. What you see on the screen is what we will be printing on the product. We are not responsible for the customers supplied artwork, spelling or wrong placement of the text.','$','inch','0',6.00,5000.00,5000.00,'{\"mask\":{\"left\":136,\"top\":36,\"path\":\"M358.901,46.65  c-6.568-6.567-14.52-9.85-23.854-9.85h-156.5c-9.333,0-17.3,3.284-23.899,9.85c-6.566,6.567-9.851,14.5-9.851,23.8V441.6  c0,9.304,3.284,17.22,9.851,23.75c6.6,6.567,14.566,9.854,23.899,9.854h156.5c9.334,0,17.283-3.283,23.854-9.854  c6.6-6.53,9.896-14.446,9.896-23.75V70.45C368.8,61.15,365.5,53.217,358.901,46.65z M227.2,87.5c0,10.467-5.067,15.7-15.2,15.7h-46  c-10.133,0-15.2-5.233-15.2-15.7V70.8c0-7.833,2.767-14.534,8.3-20.1c5.088-5.057,11.121-7.807,18.101-8.25L212,42.4  c10.133,0,15.2,5.233,15.2,15.7V87.5z\",\"width\":\"\",\"height\":\"\"},\"bounds\":{\"boundx\":146.726221434,\"boundy\":99.279911523,\"boundheight\":277.486730721,\"boundwidth\":196.119702668},\"customsize\":{\"left\":0,\"top\":0,\"width\":500,\"height\":500},\"custom_mask\": {\"left\": 136,\"top\": 36,\"path\": \"M358.901,46.65 c-6.568-6.567-14.52-9.85-23.854-9.85h-156.5c-9.333,0-17.3,3.284-23.899,9.85c-6.566,6.567-9.851,14.5-9.851,23.8V441.6  c0,9.304,3.284,17.22,9.851,23.75c6.6,6.567,14.566,9.854,23.899,9.854h156.5c9.334,0,17.283-3.283,23.854-9.854  c6.6-6.53,9.896-14.446,9.896-23.75V70.45C368.8,61.15,365.5,53.217,358.901,46.65z M227.2,87.5c0,10.467-5.067,15.7-15.2,15.7h-46  c-10.133,0-15.2-5.233-15.2-15.7V70.8c0-7.833,2.767-14.534,8.3-20.1c5.088-5.057,11.121-7.807,18.101-8.25L212,42.4  c10.133,0,15.2,5.233,15.2,15.7V87.5z\",\"width\": \"\",\"height\": \"\"},\"mask_height\":\"0.00\",\"mask_width\":\"0.00\",\"mask_price\":\"0.63\",\"scale_ratio\":\"1.00000\",\"side\":\"0\"}','USD','$',8,24,2,'Notes are the first thing we check when we start work on your order. Tell us if you have any question on the printing process, quality or any customization.',100,'','','','1','On uploading one or several images, you agree to terms on using these images. Make use of third party images or infringing somebody else\'s rights in unlawful.','1','','0','true',10);
/*!40000 ALTER TABLE `general_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_tasks`
--

DROP TABLE IF EXISTS `group_tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_group_id` int(11) NOT NULL,
  `task_title` text NOT NULL,
  `assign_to` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_tasks`
--

LOCK TABLES `group_tasks` WRITE;
/*!40000 ALTER TABLE `group_tasks` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_data`
--

DROP TABLE IF EXISTS `image_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `refid` bigint(20) DEFAULT '0',
  `customer_id` int(11) NOT NULL,
  `uid` varchar(70) NOT NULL,
  `image` varchar(50) NOT NULL,
  `thumbnail` varchar(70) NOT NULL,
  `type` varchar(4) NOT NULL,
  `date_created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_data`
--

LOCK TABLES `image_data` WRITE;
/*!40000 ALTER TABLE `image_data` DISABLE KEYS */;
INSERT INTO `image_data` VALUES (1,0,0,'4477df237d7787defa998eda44dd5128','1.jpeg','thumb_1.jpeg','jpeg','2015-09-03 19:19:09'),(2,0,0,'4477df237d7787defa998eda44dd5128','2.jpeg','thumb_2.jpeg','jpeg','2015-09-03 19:19:17'),(3,0,0,'4477df237d7787defa998eda44dd5128','3.png','thumb_3.png','png','2015-09-03 19:20:18'),(4,0,0,'4477df237d7787defa998eda44dd5128','4.png','thumb_4.png','png','2015-09-03 19:23:43'),(5,0,0,'85be118cf4aca54321b6692a491ed7e7','1.jpg','thumb_1.jpg','jpg','2018-10-15 12:06:36');
/*!40000 ALTER TABLE `image_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_edit_select_color`
--

DROP TABLE IF EXISTS `image_edit_select_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image_edit_select_color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `max_number_of_color` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_edit_select_color`
--

LOCK TABLES `image_edit_select_color` WRITE;
/*!40000 ALTER TABLE `image_edit_select_color` DISABLE KEYS */;
/*!40000 ALTER TABLE `image_edit_select_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_num` int(10) NOT NULL,
  `quote_ref_id` varchar(10) DEFAULT NULL,
  `theme_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `brand_name` varchar(20) NOT NULL,
  `logo_file_name` varchar(40) NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `contact_mail` varchar(30) NOT NULL,
  `cust_name` varchar(30) NOT NULL,
  `cust_mail` varchar(30) NOT NULL,
  `address_line_1` varchar(50) NOT NULL,
  `city` varchar(20) NOT NULL,
  `State` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `zip_code` int(10) NOT NULL,
  `notes` text NOT NULL,
  `terms_condition` longtext NOT NULL,
  `currency_code` varchar(5) NOT NULL,
  `language_code` varchar(5) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `production_due_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `default_theme_id` (`theme_id`),
  KEY `default_color_id` (`color_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_expenses`
--

DROP TABLE IF EXISTS `invoice_expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice_expenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text,
  `charge_type` enum('fixed','multiply') NOT NULL,
  `auto_addition` enum('true','false') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_expenses`
--

LOCK TABLES `invoice_expenses` WRITE;
/*!40000 ALTER TABLE `invoice_expenses` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_line_items`
--

DROP TABLE IF EXISTS `invoice_line_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice_line_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_id` int(11) NOT NULL,
  `item_name` text NOT NULL,
  `item_description` longtext NOT NULL,
  `quantity` int(5) NOT NULL,
  `unit_price` double NOT NULL,
  `item_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `invoice_id` (`invoice_id`),
  KEY `item_type_id` (`item_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_line_items`
--

LOCK TABLES `invoice_line_items` WRITE;
/*!40000 ALTER TABLE `invoice_line_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_line_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_settings`
--

DROP TABLE IF EXISTS `invoice_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `default_theme_id` int(11) NOT NULL,
  `default_color_code` varchar(8) NOT NULL,
  `default_tax_apply` int(3) NOT NULL DEFAULT '0',
  `default_shipping` int(3) NOT NULL DEFAULT '0',
  `auto_tax_apply` enum('enabled','disabled') NOT NULL DEFAULT 'disabled',
  `invoice_sender_mail` varchar(30) NOT NULL,
  `brand_name` varchar(20) NOT NULL,
  `logo_file_name` varchar(40) DEFAULT NULL,
  `phone_number` varchar(20) NOT NULL,
  `address_line_1` varchar(50) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `zip_code` int(10) NOT NULL,
  `default_language` varchar(5) NOT NULL,
  `default_currency` varchar(5) NOT NULL,
  `default_notes` text NOT NULL,
  `terms_condition` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `default_theme_id` (`default_theme_id`),
  KEY `default_color_id` (`default_color_code`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_settings`
--

LOCK TABLES `invoice_settings` WRITE;
/*!40000 ALTER TABLE `invoice_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_theme_color`
--

DROP TABLE IF EXISTS `invoice_theme_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice_theme_color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `color_hash` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_theme_color`
--

LOCK TABLES `invoice_theme_color` WRITE;
/*!40000 ALTER TABLE `invoice_theme_color` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_theme_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_themes`
--

DROP TABLE IF EXISTS `invoice_themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice_themes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT 'Name of invoice theme',
  `preview_file_name` varchar(10) NOT NULL,
  `preview_thumb` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='Invoice invoice_themes Data';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_themes`
--

LOCK TABLES `invoice_themes` WRITE;
/*!40000 ALTER TABLE `invoice_themes` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_themes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items_per_module`
--

DROP TABLE IF EXISTS `items_per_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items_per_module` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `value` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items_per_module`
--

LOCK TABLES `items_per_module` WRITE;
/*!40000 ALTER TABLE `items_per_module` DISABLE KEYS */;
INSERT INTO `items_per_module` VALUES (1,'Total',100),(2,'design',50),(3,'plainText',50),(4,'imageEdit',15),(5,'qrCode',10),(6,'shape',55),(7,'handDrawing',50),(8,'curveText',60),(9,'textOnPath',50),(10,'textFX',15),(11,'nameNumber',1),(12,'textArt',15),(13,'wordCloud',10),(14,'VDP',50);
/*!40000 ALTER TABLE `items_per_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itextpattern`
--

DROP TABLE IF EXISTS `itextpattern`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itextpattern` (
  `id` int(11) NOT NULL,
  `json` varchar(4000) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='this table keeps the JSON data for itest style';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itextpattern`
--

LOCK TABLES `itextpattern` WRITE;
/*!40000 ALTER TABLE `itextpattern` DISABLE KEYS */;
/*!40000 ALTER TABLE `itextpattern` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `label` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `color_code` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mask_data`
--

DROP TABLE IF EXISTS `mask_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mask_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `mask_name` varchar(30) NOT NULL,
  `productid` varchar(50) DEFAULT NULL,
  `variantid` varchar(20) DEFAULT NULL,
  `side` varchar(6) NOT NULL,
  `mask_json_data` text,
  `bounds_json_data` varchar(2000) DEFAULT NULL,
  `custom_size_data` varchar(500) DEFAULT NULL,
  `mask_height` float(5,2) NOT NULL DEFAULT '0.00',
  `mask_width` float(5,2) NOT NULL DEFAULT '0.00',
  `mask_price` float(5,2) NOT NULL DEFAULT '0.00',
  `scale_ratio` float(10,5) NOT NULL DEFAULT '0.00000',
  `is_cropMark` enum('1','0') NOT NULL DEFAULT '0',
  `is_safeZone` enum('1','0') NOT NULL DEFAULT '0',
  `cropValue` float(5,2) NOT NULL,
  `safeValue` float(5,2) NOT NULL,
  `scaleRatio_unit` int(10) NOT NULL DEFAULT '1',
  `cust_min_height` float(5,2) NOT NULL DEFAULT '0.00',
  `cust_min_width` float(5,2) NOT NULL DEFAULT '0.00',
  `cust_max_height` float(5,2) NOT NULL DEFAULT '0.00',
  `cust_max_width` float(5,2) NOT NULL DEFAULT '0.00',
  `cust_bound_price` float(5,2) NOT NULL DEFAULT '0.00',
  `mask_id` int(20) NOT NULL,
  `custom_mask` text NOT NULL,
  `custom_mask_min_width` float(7,3) NOT NULL DEFAULT '0.000',
  `custom_mask_min_height` float(7,3) NOT NULL DEFAULT '0.000',
  `custom_mask_max_width` float(7,3) NOT NULL DEFAULT '0.000',
  `custom_mask_max_height` float(7,3) NOT NULL DEFAULT '0.000',
  `custom_boundary_unit` int(5) NOT NULL DEFAULT '0',
  `isBorderEnable` enum('1','0') NOT NULL DEFAULT '0',
  `isSidesAdded` enum('1','0') NOT NULL DEFAULT '0',
  `sidesAllowed` int(5) NOT NULL DEFAULT '0',
  `isDimensionEnable` enum('1','0') NOT NULL,
  `product_image_dimension` text NOT NULL,
  `is_visible` enum('1','0') NOT NULL DEFAULT '1',
  `bound_print_size` text NOT NULL,
  `mask_print_size` longtext NOT NULL,
  `paper_size_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mask_data`
--

LOCK TABLES `mask_data` WRITE;
/*!40000 ALTER TABLE `mask_data` DISABLE KEYS */;
INSERT INTO `mask_data` VALUES (2,'Select Printing Mask','2',NULL,'0','{\"left\":136,\"top\":36,\"path\":\"M358.901,46.65  c-6.568-6.567-14.52-9.85-23.854-9.85h-156.5c-9.333,0-17.3,3.284-23.899,9.85c-6.566,6.567-9.851,14.5-9.851,23.8V441.6  c0,9.304,3.284,17.22,9.851,23.75c6.6,6.567,14.566,9.854,23.899,9.854h156.5c9.334,0,17.283-3.283,23.854-9.854  c6.6-6.53,9.896-14.446,9.896-23.75V70.45C368.8,61.15,365.5,53.217,358.901,46.65z M227.2,87.5c0,10.467-5.067,15.7-15.2,15.7h-46  c-10.133,0-15.2-5.233-15.2-15.7V70.8c0-7.833,2.767-14.534,8.3-20.1c5.088-5.057,11.121-7.807,18.101-8.25L212,42.4  c10.133,0,15.2,5.233,15.2,15.7V87.5z\",\"width\":\"\",\"height\":\"\"}','{\"boundx\":155.726221434,\"boundy\":183.279911523,\"boundheight\":255,\"boundwidth\":180}','{\"left\":0,\"top\":0,\"width\":500,\"height\":500,\"actual_width\":400,\"actual_height\":400}',0.00,0.00,0.00,1.00000,'0','0',0.00,0.00,1,0.00,0.00,0.00,0.00,0.00,0,'{\"left\":136,\"top\":36,\"path\":\"M358.901,46.65 c-6.568-6.567-14.52-9.85-23.854-9.85h-156.5c-9.333,0-17.3,3.284-23.899,9.85c-6.566,6.567-9.851,14.5-9.851,23.8V441.6  c0,9.304,3.284,17.22,9.851,23.75c6.6,6.567,14.566,9.854,23.899,9.854h156.5c9.334,0,17.283-3.283,23.854-9.854  c6.6-6.53,9.896-14.446,9.896-23.75V70.45C368.8,61.15,365.5,53.217,358.901,46.65z M227.2,87.5c0,10.467-5.067,15.7-15.2,15.7h-46  c-10.133,0-15.2-5.233-15.2-15.7V70.8c0-7.833,2.767-14.534,8.3-20.1c5.088-5.057,11.121-7.807,18.101-8.25L212,42.4  c10.133,0,15.2,5.233,15.2,15.7V87.5z\",\"width\":\"\",\"height\":\"\"}',0.000,0.000,0.000,0.000,0,'0','0',0,'0','','1','','',0),(4,'Select Printing Mask','136',NULL,'0','{\"left\":136,\"top\":36,\"path\":\"M358.901,46.65  c-6.568-6.567-14.52-9.85-23.854-9.85h-156.5c-9.333,0-17.3,3.284-23.899,9.85c-6.566,6.567-9.851,14.5-9.851,23.8V441.6  c0,9.304,3.284,17.22,9.851,23.75c6.6,6.567,14.566,9.854,23.899,9.854h156.5c9.334,0,17.283-3.283,23.854-9.854  c6.6-6.53,9.896-14.446,9.896-23.75V70.45C368.8,61.15,365.5,53.217,358.901,46.65z M227.2,87.5c0,10.467-5.067,15.7-15.2,15.7h-46  c-10.133,0-15.2-5.233-15.2-15.7V70.8c0-7.833,2.767-14.534,8.3-20.1c5.088-5.057,11.121-7.807,18.101-8.25L212,42.4  c10.133,0,15.2,5.233,15.2,15.7V87.5z\",\"width\":\"\",\"height\":\"\"}','{\"boundx\":146.726221434,\"boundy\":99.279911523,\"boundheight\":140,\"boundwidth\":200}','{\"left\":0,\"top\":0,\"width\":500,\"height\":500,\"actual_width\":400,\"actual_height\":400}',0.00,0.00,0.00,1.00000,'0','0',0.00,0.00,1,0.00,0.00,0.00,0.00,0.00,0,'{\"left\":136,\"top\":36,\"path\":\"M358.901,46.65 c-6.568-6.567-14.52-9.85-23.854-9.85h-156.5c-9.333,0-17.3,3.284-23.899,9.85c-6.566,6.567-9.851,14.5-9.851,23.8V441.6  c0,9.304,3.284,17.22,9.851,23.75c6.6,6.567,14.566,9.854,23.899,9.854h156.5c9.334,0,17.283-3.283,23.854-9.854  c6.6-6.53,9.896-14.446,9.896-23.75V70.45C368.8,61.15,365.5,53.217,358.901,46.65z M227.2,87.5c0,10.467-5.067,15.7-15.2,15.7h-46  c-10.133,0-15.2-5.233-15.2-15.7V70.8c0-7.833,2.767-14.534,8.3-20.1c5.088-5.057,11.121-7.807,18.101-8.25L212,42.4  c10.133,0,15.2,5.233,15.2,15.7V87.5z\",\"width\":\"\",\"height\":\"\"}',0.000,0.000,0.000,0.000,0,'0','0',0,'0','{\"x\":\"0\",\"y\":\"0\",\"width\":\"500\",\"height\":\"500\"}','1','','',0),(7,'front','27',NULL,'0','{\"left\":-5,\"top\":-10,\"path\":\"M191.8 15.8L197.4 29.3C202.1 39 206.9 45.5 211.8 48.8S223.5 55.099999999999994 232.10000000000002 57.599999999999994C236.70000000000002 58.89999999999999 242.50000000000003 60.39999999999999 249.50000000000003 62.099999999999994C254.50000000000003 63.49999999999999 262.6 63.099999999999994 273.90000000000003 61.099999999999994C286.8 58.699999999999996 295.6 54.99999999999999 300.40000000000003 49.89999999999999C307.20000000000005 42.79999999999999 311.6 37.69999999999999 313.6 34.599999999999994C316.90000000000003 29.499999999999993 317.90000000000003 24.799999999999994 316.6 20.399999999999995L323 24.399999999999995C327.7 27.199999999999996 331 29.099999999999994 333.1 29.899999999999995C334.3 30.399999999999995 339.6 32.8 349.1 37.3C358.20000000000005 41.599999999999994 364.3 44.3 367.40000000000003 45.4C370.50000000000006 46.6 374.50000000000006 48.4 379.40000000000003 51C384.90000000000003 53.9 387.90000000000003 55.4 388.40000000000003 55.7C392.3 57.400000000000006 397.90000000000003 61.300000000000004 405.3 67.3C415 75.3 421.2 82.6 424 89.3C427.6 97.89999999999999 433 114.6 440.2 139.4C447.9 166.1 453.2 186.9 456 201.8C450.4 204 443.3 206.4 434.5 209.10000000000002C417 214.50000000000003 400.3 218.60000000000002 384.5 221.3C378.5 198.60000000000002 374.3 184.5 372 178.8L367.4 213.20000000000002C364.4 239.4 363.09999999999997 260.8 363.5 277.20000000000005C363.9 293.70000000000005 364 311.1 363.6 329.6C363.40000000000003 338.8 363.20000000000005 346.40000000000003 363 352.3L365 409.5C366.3 449.4 366.6 473.8 366 482.8C363.8 484 359.9 485.1 354.5 486.1C343.7 488.1 330.3 488.70000000000005 314.5 487.90000000000003C297.1 487.00000000000006 272 486.8 239.1 487.3C209 487.8 190.2 488.5 182.89999999999998 489.40000000000003C176.29999999999998 490.20000000000005 169.59999999999997 490.3 162.79999999999998 489.70000000000005C155.49999999999997 489.1 150.2 487.80000000000007 146.89999999999998 485.90000000000003C147.09999999999997 460.00000000000006 147.2 433.00000000000006 147.2 404.90000000000003C147.2 348.8 146.79999999999998 315.40000000000003 145.89999999999998 304.80000000000007C144.49999999999997 278.9000000000001 143.29999999999998 257.4000000000001 142.29999999999998 240.40000000000006C140.39999999999998 208.30000000000007 138.39999999999998 188.10000000000008 136.39999999999998 179.80000000000007L131.49999999999997 198.40000000000006C128.29999999999998 212.20000000000007 126.99999999999997 222.30000000000007 127.39999999999998 228.80000000000007C117.49999999999997 226.40000000000006 106.79999999999998 223.50000000000006 95.39999999999998 220.20000000000007C72.59999999999998 213.50000000000009 57.39999999999998 207.70000000000007 49.89999999999998 202.90000000000006C53.89999999999998 187.10000000000005 59.199999999999974 169.50000000000006 65.89999999999998 150.10000000000008C79.19999999999997 111.20000000000007 92.59999999999998 82.60000000000008 105.89999999999998 64.30000000000008L109.39999999999998 60.000000000000085C112.69999999999997 56.70000000000009 116.49999999999997 54.000000000000085 120.89999999999998 51.80000000000008C130.89999999999998 47.10000000000008 143.09999999999997 41.10000000000008 157.7 33.80000000000008C177.6 23.7 188.9 17.8 191.8 15.8Z\",\"width\":406,\"height\":474}','{\"boundx\":146.726221434,\"boundy\":105.279911523,\"boundheight\":277,\"boundwidth\":196}','{\"left\":0,\"top\":0,\"width\":500,\"height\":500,\"actual_width\":400,\"actual_height\":400}',5.84,5.00,0.00,1.00000,'0','0',0.00,0.00,1,0.00,0.00,0.00,0.00,0.00,1,'{\"left\":136,\"top\":36,\"path\":\"M358.901,46.65 c-6.568-6.567-14.52-9.85-23.854-9.85h-156.5c-9.333,0-17.3,3.284-23.899,9.85c-6.566,6.567-9.851,14.5-9.851,23.8V441.6  c0,9.304,3.284,17.22,9.851,23.75c6.6,6.567,14.566,9.854,23.899,9.854h156.5c9.334,0,17.283-3.283,23.854-9.854  c6.6-6.53,9.896-14.446,9.896-23.75V70.45C368.8,61.15,365.5,53.217,358.901,46.65z M227.2,87.5c0,10.467-5.067,15.7-15.2,15.7h-46  c-10.133,0-15.2-5.233-15.2-15.7V70.8c0-7.833,2.767-14.534,8.3-20.1c5.088-5.057,11.121-7.807,18.101-8.25L212,42.4  c10.133,0,15.2,5.233,15.2,15.7V87.5z\",\"width\":\"\",\"height\":\"\"}',0.000,0.000,0.000,0.000,0,'0','0',0,'0','{\"x\":\"0\",\"y\":\"0\",\"width\":\"500\",\"height\":\"500\"}','1','','',4);
/*!40000 ALTER TABLE `mask_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mask_paths`
--

DROP TABLE IF EXISTS `mask_paths`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mask_paths` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(75) DEFAULT NULL,
  `svg_image` varchar(200) DEFAULT NULL,
  `thumb_image` varchar(200) DEFAULT NULL,
  `mask_id` varchar(100) DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `mask_id` (`mask_id`),
  KEY `mask_id_2` (`mask_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mask_paths`
--

LOCK TABLES `mask_paths` WRITE;
/*!40000 ALTER TABLE `mask_paths` DISABLE KEYS */;
INSERT INTO `mask_paths` VALUES (9,'Cloud','1487340859050_0.svg','1487340859050_0.png','1487340859050','2017-02-17 03:14:19','2017-02-17 03:14:19'),(8,'Cloud','1487340822863_0.svg','1487340822863_0.png','1487340822863','2017-02-17 03:13:42','2017-02-17 03:13:42'),(7,'Star','1487340799032_0.svg','1487340799032_0.png','1487340799032','2017-02-17 03:13:19','2017-02-17 03:13:19'),(10,'Cloud','1487340893799_0.svg','1487340893799_0.png','1487340893799','2017-02-17 03:14:53','2017-02-17 03:14:53'),(11,'Cloud','1487340946373_0.svg','1487340946373_0.png','1487340946373','2017-02-17 03:15:46','2017-02-17 03:15:46'),(12,'Cloud','1487340967548_0.svg','1487340967548_0.png','1487340967548','2017-02-17 03:16:07','2017-02-17 03:16:07');
/*!40000 ALTER TABLE `mask_paths` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mask_print_method_rel`
--

DROP TABLE IF EXISTS `mask_print_method_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mask_print_method_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mask_id` int(12) unsigned NOT NULL,
  `print_method_id` int(11) unsigned NOT NULL,
  `price` float(10,2) NOT NULL,
  `percentage` float(10,2) NOT NULL,
  `is_fixed` enum('0','1') NOT NULL DEFAULT '0',
  `mask_range_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mask_print_method_rel`
--

LOCK TABLES `mask_print_method_rel` WRITE;
/*!40000 ALTER TABLE `mask_print_method_rel` DISABLE KEYS */;
INSERT INTO `mask_print_method_rel` VALUES (3,1,6,0.00,0.00,'0',3),(4,1,1,0.00,0.00,'0',1),(5,1,4,0.00,0.00,'0',2);
/*!40000 ALTER TABLE `mask_print_method_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mask_range`
--

DROP TABLE IF EXISTS `mask_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mask_range` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_range` int(10) NOT NULL,
  `to_range` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mask_range`
--

LOCK TABLES `mask_range` WRITE;
/*!40000 ALTER TABLE `mask_range` DISABLE KEYS */;
INSERT INTO `mask_range` VALUES (1,1,1),(2,1,1),(3,1,1);
/*!40000 ALTER TABLE `mask_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_module`
--

DROP TABLE IF EXISTS `master_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `master_module` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module_name` varchar(100) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_module`
--

LOCK TABLES `master_module` WRITE;
/*!40000 ALTER TABLE `master_module` DISABLE KEYS */;
INSERT INTO `master_module` VALUES (1,'Customer list','2019-12-09 14:32:56'),(2,'Quotation list','2019-12-09 14:32:56');
/*!40000 ALTER TABLE `master_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module_price`
--

DROP TABLE IF EXISTS `module_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `module_price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '0',
  `status` enum('true','false') NOT NULL DEFAULT 'true',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module_price`
--

LOCK TABLES `module_price` WRITE;
/*!40000 ALTER TABLE `module_price` DISABLE KEYS */;
INSERT INTO `module_price` VALUES (1,'Designs','true'),(2,'Webfonts','false');
/*!40000 ALTER TABLE `module_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multi_bound_print_profile_rel`
--

DROP TABLE IF EXISTS `multi_bound_print_profile_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multi_bound_print_profile_rel` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(50) NOT NULL DEFAULT '0',
  `side_index` int(10) NOT NULL DEFAULT '0',
  `parent_mask_id` int(10) NOT NULL DEFAULT '0',
  `child_mask_id` int(10) NOT NULL DEFAULT '0',
  `print_profile_id` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multi_bound_print_profile_rel`
--

LOCK TABLES `multi_bound_print_profile_rel` WRITE;
/*!40000 ALTER TABLE `multi_bound_print_profile_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `multi_bound_print_profile_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multiple_boundary`
--

DROP TABLE IF EXISTS `multiple_boundary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multiple_boundary` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(75) NOT NULL,
  `svg_data` longtext NOT NULL,
  `thumb_image` varchar(200) NOT NULL,
  `mask_height` float(5,2) NOT NULL DEFAULT '0.00',
  `mask_width` float(5,2) NOT NULL DEFAULT '0.00',
  `mask_unit` int(4) NOT NULL,
  `date_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `date_modified` timestamp NULL DEFAULT NULL,
  `is_visible` enum('1','0') NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiple_boundary`
--

LOCK TABLES `multiple_boundary` WRITE;
/*!40000 ALTER TABLE `multiple_boundary` DISABLE KEYS */;
/*!40000 ALTER TABLE `multiple_boundary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multiple_boundary_child`
--

DROP TABLE IF EXISTS `multiple_boundary_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multiple_boundary_child` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `parent_mask_id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiple_boundary_child`
--

LOCK TABLES `multiple_boundary_child` WRITE;
/*!40000 ALTER TABLE `multiple_boundary_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `multiple_boundary_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multiple_boundary_rel`
--

DROP TABLE IF EXISTS `multiple_boundary_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multiple_boundary_rel` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(50) NOT NULL,
  `side_index` tinyint(4) NOT NULL,
  `parent_mask_id` int(10) NOT NULL,
  `child_mask_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiple_boundary_rel`
--

LOCK TABLES `multiple_boundary_rel` WRITE;
/*!40000 ALTER TABLE `multiple_boundary_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `multiple_boundary_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multiple_boundary_settings`
--

DROP TABLE IF EXISTS `multiple_boundary_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multiple_boundary_settings` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `boundary_rel_id` int(10) NOT NULL,
  `mask_data` longtext,
  `custom_size_data` text,
  `mask_height` float(5,2) DEFAULT '0.00',
  `mask_width` float(5,2) DEFAULT '0.00',
  `is_cropmark` enum('1','0') NOT NULL DEFAULT '0',
  `is_safezone` enum('1','0') NOT NULL DEFAULT '0',
  `restrict_design` enum('1','0') NOT NULL DEFAULT '0',
  `crop_value` float(5,2) DEFAULT '0.00',
  `safe_value` float(5,2) DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiple_boundary_settings`
--

LOCK TABLES `multiple_boundary_settings` WRITE;
/*!40000 ALTER TABLE `multiple_boundary_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `multiple_boundary_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_artwork_conversation`
--

DROP TABLE IF EXISTS `order_artwork_conversation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_artwork_conversation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `agent_type` enum('admin','customer') NOT NULL,
  `agent_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `status` enum('new','viewed') NOT NULL,
  `created_date` datetime NOT NULL,
  `is_file_uploaded` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_artwork_conversation`
--

LOCK TABLES `order_artwork_conversation` WRITE;
/*!40000 ALTER TABLE `order_artwork_conversation` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_artwork_conversation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_list`
--

DROP TABLE IF EXISTS `order_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_list` (
  `refid` int(11) NOT NULL,
  `orderid` varchar(50) NOT NULL,
  `pid` varchar(20) NOT NULL,
  `order_date` datetime NOT NULL,
  `status` int(5) NOT NULL,
  PRIMARY KEY (`refid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_list`
--

LOCK TABLES `order_list` WRITE;
/*!40000 ALTER TABLE `order_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `palette_category`
--

DROP TABLE IF EXISTS `palette_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `palette_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `is_available` tinyint(1) NOT NULL DEFAULT '1',
  `sort_order` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `palette_category`
--

LOCK TABLES `palette_category` WRITE;
/*!40000 ALTER TABLE `palette_category` DISABLE KEYS */;
INSERT INTO `palette_category` VALUES (3,'Flat',1,0),(4,'Glitter',1,0);
/*!40000 ALTER TABLE `palette_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `palette_category_rel`
--

DROP TABLE IF EXISTS `palette_category_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `palette_category_rel` (
  `palette_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `palette_category_rel`
--

LOCK TABLES `palette_category_rel` WRITE;
/*!40000 ALTER TABLE `palette_category_rel` DISABLE KEYS */;
INSERT INTO `palette_category_rel` VALUES (6,4),(7,3),(8,3),(9,3),(10,3),(11,3),(12,3),(13,3),(14,3),(15,3),(16,4),(17,4),(18,4),(19,4),(20,4),(21,4),(22,3),(23,3),(24,3),(25,3),(26,3),(27,3),(28,3),(29,3),(30,3),(31,4),(32,4),(33,4),(34,4),(35,4),(36,4),(37,4),(38,3),(39,4),(40,4),(41,4),(42,4),(43,4),(44,4),(45,4);
/*!40000 ALTER TABLE `palette_category_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `palette_range_price`
--

DROP TABLE IF EXISTS `palette_range_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `palette_range_price` (
  `order_range_id` int(15) NOT NULL COMMENT 'It relates to printing order range in print_order_range table.',
  `num_palettes` int(5) NOT NULL COMMENT 'It indicates the range of palettes to be printed.',
  `price` double(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `palette_range_price`
--

LOCK TABLES `palette_range_price` WRITE;
/*!40000 ALTER TABLE `palette_range_price` DISABLE KEYS */;
INSERT INTO `palette_range_price` VALUES (1,2,1.00);
/*!40000 ALTER TABLE `palette_range_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `palettes`
--

DROP TABLE IF EXISTS `palettes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `palettes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(100) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `is_pattern` enum('0','1','2','3') DEFAULT '0' COMMENT 'It indicates whether it is a color or pattern or cmyk or pantone.',
  `c` int(20) NOT NULL DEFAULT '0',
  `m` int(20) NOT NULL DEFAULT '0',
  `y` int(20) NOT NULL DEFAULT '0',
  `k` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `palettes`
--

LOCK TABLES `palettes` WRITE;
/*!40000 ALTER TABLE `palettes` DISABLE KEYS */;
INSERT INTO `palettes` VALUES (1,'#c02c2c','red',0.00,'0',0,0,0,0),(41,'p41.png','Pattern',1.00,'1',0,0,0,0),(5,'#29bf4e','test',0.00,'0',0,0,0,0),(9,'#f40505','red',34.00,'0',0,0,0,0),(10,'#000000','Black',5.00,'0',0,0,0,0),(11,'#006400','DarkGreen',4.00,'0',0,0,0,0),(12,'#8b0000','DarkRed',5.00,'0',0,0,0,0),(13,'#008000','Green',6.00,'0',0,0,0,0),(14,'#808080','Grey',7.00,'0',0,0,0,0),(15,'#20b2aa','LightSeaGreen',0.00,'0',0,0,0,0),(17,'#f5fffa','MintCream',0.00,'0',0,0,0,0),(18,'#da70d6','Orchid',0.00,'0',0,0,0,0),(22,'#000000','Black',0.00,'2',45,0,100,100),(23,'#ff5a00','orange',0.00,'2',0,60,100,0),(24,'#ff0000','red',0.00,'2',0,100,100,20),(25,'#a7f700','greenyellow',0.00,'2',3,0,82,0),(26,'#7200b4','dark orchid',0.00,'2',25,76,0,45),(27,'#ff00ff','magenta',0.00,'2',0,100,0,0),(28,'#00ffff','cyan',0.00,'2',100,0,0,0),(29,'#117300','green',0.00,'2',85,0,100,55),(40,'p40.png','Pattern',1.00,'1',0,0,0,0),(39,'p39.png','Pattern',1.00,'1',0,0,0,0),(30,'#0000ff','Blue',0.00,'2',100,100,0,0),(42,'p42.png','Pattern',1.00,'1',0,0,0,0),(43,'p43.png','Pattern',1.00,'1',0,0,0,0),(44,'p44.png','Pattern',1.00,'1',0,0,0,0),(45,'p45.png','Pattern',1.00,'1',0,0,0,0);
/*!40000 ALTER TABLE `palettes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paper_size`
--

DROP TABLE IF EXISTS `paper_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paper_size` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `width` float(10,2) DEFAULT '0.00',
  `height` float(10,2) DEFAULT '0.00',
  `is_user_defined` enum('1','0') NOT NULL DEFAULT '0',
  `is_default` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paper_size`
--

LOCK TABLES `paper_size` WRITE;
/*!40000 ALTER TABLE `paper_size` DISABLE KEYS */;
INSERT INTO `paper_size` VALUES (1,'A1',33.11,23.39,'0','0'),(2,'A2',23.39,16.54,'0','0'),(3,'A3',16.54,11.69,'0','0'),(4,'A4',11.69,8.27,'0','1'),(5,'A5',8.27,5.83,'0','0'),(6,'A6',5.83,4.13,'0','0'),(7,'A7',4.13,2.91,'0','0'),(8,'A8',2.91,2.05,'0','0');
/*!40000 ALTER TABLE `paper_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_mode`
--

DROP TABLE IF EXISTS `payment_mode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_mode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_mode`
--

LOCK TABLES `payment_mode` WRITE;
/*!40000 ALTER TABLE `payment_mode` DISABLE KEYS */;
INSERT INTO `payment_mode` VALUES (1,'Cash'),(2,'Cheque'),(3,'Bank Transfer'),(4,'Credit Card'),(5,'Other');
/*!40000 ALTER TABLE `payment_mode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_status`
--

DROP TABLE IF EXISTS `payment_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_status` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `color_code` varchar(10) NOT NULL DEFAULT '#000000',
  `sort_order` int(4) NOT NULL,
  `status` enum('true','false') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_status`
--

LOCK TABLES `payment_status` WRITE;
/*!40000 ALTER TABLE `payment_status` DISABLE KEYS */;
INSERT INTO `payment_status` VALUES (1,'Pending','#3c91fd',1,'true'),(2,'Paid','#df5427',2,'true'),(3,'Cancelled','#2c8998',3,'true'),(4,'Refunded','#2c8998',4,'true');
/*!40000 ALTER TABLE `payment_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plugins`
--

DROP TABLE IF EXISTS `plugins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plugins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `version` varchar(30) NOT NULL,
  `installed_on` datetime NOT NULL,
  `updated_on` datetime DEFAULT NULL,
  `settings` text NOT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plugins`
--

LOCK TABLES `plugins` WRITE;
/*!40000 ALTER TABLE `plugins` DISABLE KEYS */;
/*!40000 ALTER TABLE `plugins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `po_status`
--

DROP TABLE IF EXISTS `po_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `po_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `color_code` varchar(10) NOT NULL DEFAULT '#000000',
  `sort_order` int(8) NOT NULL,
  `status` enum('true','false') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `po_status`
--

LOCK TABLES `po_status` WRITE;
/*!40000 ALTER TABLE `po_status` DISABLE KEYS */;
INSERT INTO `po_status` VALUES (1,'Order Placed','#3c91fd',1,'true'),(2,'Shipped','#df5427',2,'true'),(3,'Received','#2c8998',3,'true');
/*!40000 ALTER TABLE `po_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `predeco_cat_rel`
--

DROP TABLE IF EXISTS `predeco_cat_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `predeco_cat_rel` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(30) NOT NULL,
  `cat_id` varchar(30) NOT NULL,
  `template_type` enum('0','1') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `predeco_cat_rel`
--

LOCK TABLES `predeco_cat_rel` WRITE;
/*!40000 ALTER TABLE `predeco_cat_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `predeco_cat_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preloaded_items`
--

DROP TABLE IF EXISTS `preloaded_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preloaded_items` (
  `pk_id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `value` tinyint(2) NOT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preloaded_items`
--

LOCK TABLES `preloaded_items` WRITE;
/*!40000 ALTER TABLE `preloaded_items` DISABLE KEYS */;
INSERT INTO `preloaded_items` VALUES (1,'Design',25),(2,'Shape',25),(3,'Product',25),(4,'Web_Font',25),(5,'Product_Variant',25),(6,'TextFx',25),(7,'Distress_Effect',25),(8,'Template',25),(30,'Background',25),(31,'Background_Pattern',25);
/*!40000 ALTER TABLE `preloaded_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preview_image_data`
--

DROP TABLE IF EXISTS `preview_image_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preview_image_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `refid` bigint(20) NOT NULL,
  `side` varchar(10) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `svg` varchar(20) DEFAULT NULL,
  `preview_svg` varchar(200) DEFAULT NULL,
  `product_url` varchar(300) DEFAULT NULL,
  `type` varchar(4) NOT NULL,
  `image_generated` int(2) NOT NULL DEFAULT '0',
  `date_created` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `print_id` int(11) NOT NULL,
  `design_status` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `refid` (`refid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preview_image_data`
--

LOCK TABLES `preview_image_data` WRITE;
/*!40000 ALTER TABLE `preview_image_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `preview_image_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_image_upload_price`
--

DROP TABLE IF EXISTS `print_image_upload_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_image_upload_price` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `print_method_id` int(11) NOT NULL,
  `no_of_allowed` int(5) NOT NULL,
  `image_price` float(5,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_image_upload_price`
--

LOCK TABLES `print_image_upload_price` WRITE;
/*!40000 ALTER TABLE `print_image_upload_price` DISABLE KEYS */;
INSERT INTO `print_image_upload_price` VALUES (8,1,1,0.00),(9,3,1,0.00),(10,4,1,0.00),(11,5,1,0.00),(12,6,1,0.00);
/*!40000 ALTER TABLE `print_image_upload_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method`
--

DROP TABLE IF EXISTS `print_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `is_enable` enum('1','0') NOT NULL DEFAULT '1',
  `file_type` varchar(5) DEFAULT NULL,
  `added_on` datetime NOT NULL,
  `updated_on` datetime DEFAULT NULL,
  `is_delete` enum('1','0') NOT NULL DEFAULT '0',
  `text_fillcolor` varchar(20) DEFAULT NULL,
  `text_strokecolor` varchar(20) DEFAULT NULL,
  `wc_color1` varchar(20) DEFAULT NULL,
  `wc_color2` varchar(20) DEFAULT NULL,
  `wc_color3` varchar(20) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`pk_id`),
  UNIQUE KEY `pk_id` (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method`
--

LOCK TABLES `print_method` WRITE;
/*!40000 ALTER TABLE `print_method` DISABLE KEYS */;
INSERT INTO `print_method` VALUES (1,'DTG','1','png','2015-07-02 06:21:16','2018-09-19 12:56:21','0','#245be1','#d21e1e','#c62cd0','#f62020','#671010','Unlimited color spectrum.\r\nNo minimum order quantity.\r\nRealistic print quality.'),(3,'Screen Print','1','png','2015-09-03 18:35:05','2018-09-19 13:29:45','0','#7200b4','#008000','#0000ff','#f40505','#a7f700','Mandatory minimum order quantity.\r\nPrice per color.\r\nPrintable for mass printing.'),(4,'Heat Transfer','1','png','2018-09-19 14:56:17',NULL,'0','#b01313','#1a0dec','#bd2424','#ff3232','#f63737','Transfer any artwork to garments.\r\nNo minimum quantities.\r\nUnlimited color spectrum.'),(5,'Sublimation','1','png','2018-09-19 17:00:52',NULL,'0','#153dd4','#fd0505','#e100a9','#fb0000','#ff3636','Polyster garments only.\r\nUnlimited color spectrum.\r\nAll over printing capability.'),(6,'Wooden Laser Engrave','1','png','2018-09-19 18:08:37',NULL,'0','#5c1500','#5c1500','#5c1500','#5c1500','#5c1500','Price per added text line.\r\nRealistic preview on stage.');
/*!40000 ALTER TABLE `print_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_color_area_price_rel`
--

DROP TABLE IF EXISTS `print_method_color_area_price_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_color_area_price_rel` (
  `print_method_id` int(10) NOT NULL,
  `print_size_id` int(10) NOT NULL,
  `price` float(10,2) NOT NULL,
  `percentage` float(5,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_color_area_price_rel`
--

LOCK TABLES `print_method_color_area_price_rel` WRITE;
/*!40000 ALTER TABLE `print_method_color_area_price_rel` DISABLE KEYS */;
INSERT INTO `print_method_color_area_price_rel` VALUES (3,8,0.00,3.00),(3,7,0.00,4.00),(3,6,0.00,5.00),(3,5,0.00,6.00),(3,4,0.00,7.00),(3,3,0.00,8.00),(3,2,0.00,9.00),(3,1,0.00,10.00),(1,8,0.00,0.00),(1,7,0.00,0.00),(1,6,0.00,0.00),(1,5,0.00,0.00),(1,4,0.00,0.00),(1,3,0.00,0.00),(1,2,0.00,0.00),(1,1,0.00,0.00);
/*!40000 ALTER TABLE `print_method_color_area_price_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_color_group_rel`
--

DROP TABLE IF EXISTS `print_method_color_group_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_color_group_rel` (
  `print_method_id` int(11) NOT NULL,
  `color_group_id` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_color_group_rel`
--

LOCK TABLES `print_method_color_group_rel` WRITE;
/*!40000 ALTER TABLE `print_method_color_group_rel` DISABLE KEYS */;
INSERT INTO `print_method_color_group_rel` VALUES (1,1),(3,2);
/*!40000 ALTER TABLE `print_method_color_group_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_design_rel`
--

DROP TABLE IF EXISTS `print_method_design_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_design_rel` (
  `print_method_id` int(11) NOT NULL,
  `design_id` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_design_rel`
--

LOCK TABLES `print_method_design_rel` WRITE;
/*!40000 ALTER TABLE `print_method_design_rel` DISABLE KEYS */;
INSERT INTO `print_method_design_rel` VALUES (1,7);
/*!40000 ALTER TABLE `print_method_design_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_extra_side_price`
--

DROP TABLE IF EXISTS `print_method_extra_side_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_extra_side_price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `extra_side_range_id` int(11) NOT NULL,
  `side_name` varchar(50) NOT NULL,
  `side_price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_extra_side_price`
--

LOCK TABLES `print_method_extra_side_price` WRITE;
/*!40000 ALTER TABLE `print_method_extra_side_price` DISABLE KEYS */;
/*!40000 ALTER TABLE `print_method_extra_side_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_extra_side_range`
--

DROP TABLE IF EXISTS `print_method_extra_side_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_extra_side_range` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `print_method_id` int(11) NOT NULL,
  `start_range` int(11) NOT NULL,
  `end_range` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_extra_side_range`
--

LOCK TABLES `print_method_extra_side_range` WRITE;
/*!40000 ALTER TABLE `print_method_extra_side_range` DISABLE KEYS */;
/*!40000 ALTER TABLE `print_method_extra_side_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_feature_rel`
--

DROP TABLE IF EXISTS `print_method_feature_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_feature_rel` (
  `print_method_id` int(11) NOT NULL,
  `feature_id` smallint(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_feature_rel`
--

LOCK TABLES `print_method_feature_rel` WRITE;
/*!40000 ALTER TABLE `print_method_feature_rel` DISABLE KEYS */;
INSERT INTO `print_method_feature_rel` VALUES (1,19),(1,22),(3,46),(3,44),(3,22),(3,19),(3,17),(4,19),(4,22),(4,44),(5,44),(5,22),(5,19),(6,18),(6,19),(6,22),(6,49),(5,49),(4,49),(3,49),(1,49),(1,18),(3,18),(4,18),(5,18);
/*!40000 ALTER TABLE `print_method_feature_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_fonts_rel`
--

DROP TABLE IF EXISTS `print_method_fonts_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_fonts_rel` (
  `print_method_id` int(11) NOT NULL,
  `font_id` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_fonts_rel`
--

LOCK TABLES `print_method_fonts_rel` WRITE;
/*!40000 ALTER TABLE `print_method_fonts_rel` DISABLE KEYS */;
INSERT INTO `print_method_fonts_rel` VALUES (1,12);
/*!40000 ALTER TABLE `print_method_fonts_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_name_number_price`
--

DROP TABLE IF EXISTS `print_method_name_number_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_name_number_price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `print_method_id` int(11) NOT NULL,
  `start_range` int(11) NOT NULL,
  `end_range` int(11) NOT NULL,
  `each_name_price` float(11,2) NOT NULL,
  `each_number_price` float(11,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_name_number_price`
--

LOCK TABLES `print_method_name_number_price` WRITE;
/*!40000 ALTER TABLE `print_method_name_number_price` DISABLE KEYS */;
/*!40000 ALTER TABLE `print_method_name_number_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_palette_category`
--

DROP TABLE IF EXISTS `print_method_palette_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_palette_category` (
  `print_method_id` int(11) NOT NULL,
  `palette_category_id` int(10) NOT NULL,
  `is_enable` enum('1','0') NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_palette_category`
--

LOCK TABLES `print_method_palette_category` WRITE;
/*!40000 ALTER TABLE `print_method_palette_category` DISABLE KEYS */;
INSERT INTO `print_method_palette_category` VALUES (1,4,'0'),(1,3,'0'),(3,4,'0'),(3,3,'0'),(4,4,'0'),(4,3,'0'),(5,3,'0'),(6,4,'0'),(6,3,'0');
/*!40000 ALTER TABLE `print_method_palette_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_palette_rel`
--

DROP TABLE IF EXISTS `print_method_palette_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_palette_rel` (
  `print_method_id` int(11) NOT NULL,
  `palette_id` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_palette_rel`
--

LOCK TABLES `print_method_palette_rel` WRITE;
/*!40000 ALTER TABLE `print_method_palette_rel` DISABLE KEYS */;
INSERT INTO `print_method_palette_rel` VALUES (1,1),(1,5);
/*!40000 ALTER TABLE `print_method_palette_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_quantity_range_rel`
--

DROP TABLE IF EXISTS `print_method_quantity_range_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_quantity_range_rel` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `print_method_id` int(11) NOT NULL,
  `print_quantity_range_id` int(11) NOT NULL,
  `no_of_colors` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `color_price` float(10,2) NOT NULL DEFAULT '0.00',
  `white_base_price` float(10,2) NOT NULL DEFAULT '0.00',
  `color_percentage` float(10,2) NOT NULL DEFAULT '0.00',
  `white_base_percentage` float(5,2) NOT NULL DEFAULT '0.00',
  `is_fixed` enum('0','1') NOT NULL DEFAULT '0',
  `is_check` enum('0','1','2') NOT NULL DEFAULT '0',
  `is_exist` enum('1','0') NOT NULL DEFAULT '1',
  `side_discount_price` float(10,2) NOT NULL DEFAULT '0.00',
  `side_discount_percentage` float(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=188 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_quantity_range_rel`
--

LOCK TABLES `print_method_quantity_range_rel` WRITE;
/*!40000 ALTER TABLE `print_method_quantity_range_rel` DISABLE KEYS */;
INSERT INTO `print_method_quantity_range_rel` VALUES (5,1,1,1,0.00,0.00,0.00,0.00,'0','1','0',0.00,0.00),(169,3,7,9,0.00,0.00,0.25,0.00,'0','0','0',0.00,0.00),(168,3,7,9,0.00,0.00,0.17,0.00,'0','0','0',0.00,0.00),(6,1,1,1,0.00,0.00,0.00,0.00,'0','0','0',0.00,0.00),(167,3,7,9,0.00,0.00,0.00,0.00,'0','2','0',0.00,0.00),(166,3,7,9,0.00,0.00,0.00,18.00,'0','1','0',0.00,0.00),(165,3,6,9,0.00,0.00,0.93,0.00,'0','0','0',0.00,0.00),(164,3,6,9,0.00,0.00,0.84,0.00,'0','0','0',0.00,0.00),(163,3,6,9,0.00,0.00,0.75,0.00,'0','0','0',0.00,0.00),(162,3,6,9,0.00,0.00,0.66,0.00,'0','0','0',0.00,0.00),(161,3,6,9,0.00,0.00,0.57,0.00,'0','0','0',0.00,0.00),(160,3,6,9,0.00,0.00,0.48,0.00,'0','0','0',0.00,0.00),(159,3,6,9,0.00,0.00,0.39,0.00,'0','0','0',0.00,0.00),(158,3,6,9,0.00,0.00,0.30,0.00,'0','0','0',0.00,0.00),(157,3,6,9,0.00,0.00,0.21,0.00,'0','0','0',0.00,0.00),(156,3,6,9,0.00,0.00,0.00,0.00,'0','2','0',0.00,0.00),(155,3,6,9,0.00,0.00,0.00,17.00,'0','1','0',0.00,0.00),(154,3,5,9,0.00,0.00,1.02,0.00,'0','0','0',0.00,0.00),(153,3,5,9,0.00,0.00,0.92,0.00,'0','0','0',0.00,0.00),(152,3,5,9,0.00,0.00,0.82,0.00,'0','0','0',0.00,0.00),(151,3,5,9,0.00,0.00,0.72,0.00,'0','0','0',0.00,0.00),(150,3,5,9,0.00,0.00,0.62,0.00,'0','0','0',0.00,0.00),(149,3,5,9,0.00,0.00,0.52,0.00,'0','0','0',0.00,0.00),(148,3,5,9,0.00,0.00,0.42,0.00,'0','0','0',0.00,0.00),(147,3,5,9,0.00,0.00,0.32,0.00,'0','0','0',0.00,0.00),(146,3,5,9,0.00,0.00,0.22,0.00,'0','0','0',0.00,0.00),(145,3,5,9,0.00,0.00,0.00,0.00,'0','2','0',0.00,0.00),(144,3,5,9,0.00,0.00,0.00,16.00,'0','1','0',0.00,0.00),(143,3,4,9,0.00,0.00,1.08,0.00,'0','0','0',0.00,0.00),(142,3,4,9,0.00,0.00,0.98,0.00,'0','0','0',0.00,0.00),(141,3,4,9,0.00,0.00,0.88,0.00,'0','0','0',0.00,0.00),(140,3,4,9,0.00,0.00,0.78,0.00,'0','0','0',0.00,0.00),(139,3,4,9,0.00,0.00,0.68,0.00,'0','0','0',0.00,0.00),(138,3,4,9,0.00,0.00,0.58,0.00,'0','0','0',0.00,0.00),(137,3,4,9,0.00,0.00,0.48,0.00,'0','0','0',0.00,0.00),(136,3,4,9,0.00,0.00,0.38,0.00,'0','0','0',0.00,0.00),(135,3,4,9,0.00,0.00,0.28,0.00,'0','0','0',0.00,0.00),(134,3,4,9,0.00,0.00,0.00,0.00,'0','2','0',0.00,0.00),(133,3,4,9,0.00,0.00,0.00,15.00,'0','1','0',0.00,0.00),(132,3,3,9,256.00,0.00,0.00,0.00,'1','0','0',0.00,0.00),(131,3,3,9,228.00,0.00,0.00,0.00,'1','0','0',0.00,0.00),(130,3,3,9,198.00,0.00,0.00,0.00,'1','0','0',0.00,0.00),(129,3,3,9,172.00,0.00,0.00,0.00,'1','0','0',0.00,0.00),(128,3,3,9,145.00,0.00,0.00,0.00,'1','0','0',0.00,0.00),(127,3,3,9,118.00,0.00,0.00,0.00,'1','0','0',0.00,0.00),(126,3,3,9,91.00,0.00,0.00,0.00,'1','0','0',0.00,0.00),(125,3,3,9,64.00,0.00,0.00,0.00,'1','0','0',0.00,0.00),(124,3,3,9,45.00,0.00,45.00,0.00,'1','0','0',0.00,0.00),(123,3,3,9,0.00,0.00,0.00,0.00,'0','2','0',0.00,0.00),(122,3,3,9,0.00,0.00,0.00,10.00,'0','1','0',0.00,0.00),(119,4,9,1,0.00,0.00,0.00,0.00,'0','0','1',0.00,0.00),(120,5,10,1,0.00,0.00,0.00,0.00,'0','0','1',0.00,0.00),(121,6,11,1,0.00,0.00,0.00,0.00,'0','0','1',0.00,0.00),(170,3,7,9,0.00,0.00,0.33,0.00,'0','0','0',0.00,0.00),(171,3,7,9,0.00,0.00,0.41,0.00,'0','0','0',0.00,0.00),(172,3,7,9,0.00,0.00,0.49,0.00,'0','0','0',0.00,0.00),(173,3,7,9,0.00,0.00,0.57,0.00,'0','0','0',0.00,0.00),(174,3,7,9,0.00,0.00,0.65,0.00,'0','0','0',0.00,0.00),(175,3,7,9,0.00,0.00,0.73,0.00,'0','0','0',0.00,0.00),(176,3,7,9,0.00,0.00,0.81,0.00,'0','0','0',0.00,0.00),(177,3,8,9,0.00,0.00,0.00,19.00,'0','1','0',0.00,0.00),(178,3,8,9,0.00,0.00,0.00,0.00,'0','2','0',0.00,0.00),(179,3,8,9,0.00,0.00,0.16,0.00,'0','0','0',0.00,0.00),(180,3,8,9,0.00,0.00,0.23,0.00,'0','0','0',0.00,0.00),(181,3,8,9,0.00,0.00,0.30,0.00,'0','0','0',0.00,0.00),(182,3,8,9,0.00,0.00,0.37,0.00,'0','0','0',0.00,0.00),(183,3,8,9,0.00,0.00,0.44,0.00,'0','0','0',0.00,0.00),(184,3,8,9,0.00,0.00,0.51,0.00,'0','0','0',0.00,0.00),(185,3,8,9,0.00,0.00,0.58,0.00,'0','0','0',0.00,0.00),(186,3,8,9,0.00,0.00,0.65,0.00,'0','0','0',0.00,0.00),(187,3,8,9,0.00,0.00,0.72,0.00,'0','0','0',0.00,0.00);
/*!40000 ALTER TABLE `print_method_quantity_range_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_method_setting_rel`
--

DROP TABLE IF EXISTS `print_method_setting_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_method_setting_rel` (
  `print_method_id` int(11) unsigned NOT NULL,
  `print_setting_id` int(11) unsigned NOT NULL,
  `is_delete` enum('1','0') NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_method_setting_rel`
--

LOCK TABLES `print_method_setting_rel` WRITE;
/*!40000 ALTER TABLE `print_method_setting_rel` DISABLE KEYS */;
INSERT INTO `print_method_setting_rel` VALUES (1,1,'0'),(3,3,'0'),(4,4,'0'),(5,5,'0'),(6,6,'0');
/*!40000 ALTER TABLE `print_method_setting_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_order_range`
--

DROP TABLE IF EXISTS `print_order_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_order_range` (
  `id` int(15) NOT NULL AUTO_INCREMENT COMMENT 'It is the range id which related to palette_price table.',
  `lower_limit` int(11) NOT NULL COMMENT 'It is the minimum order limit of a range.',
  `upper_limit` int(11) NOT NULL COMMENT 'It is the upper order limit of a range.',
  `printtype_id` int(11) NOT NULL COMMENT 'It relates to printing type in printing_details table.',
  `whitebase_price` double(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_order_range`
--

LOCK TABLES `print_order_range` WRITE;
/*!40000 ALTER TABLE `print_order_range` DISABLE KEYS */;
INSERT INTO `print_order_range` VALUES (1,50,100,1,1.00);
/*!40000 ALTER TABLE `print_order_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_quantity_range`
--

DROP TABLE IF EXISTS `print_quantity_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_quantity_range` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `from_range` int(1) NOT NULL DEFAULT '1',
  `to_range` int(1) NOT NULL DEFAULT '10',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_quantity_range`
--

LOCK TABLES `print_quantity_range` WRITE;
/*!40000 ALTER TABLE `print_quantity_range` DISABLE KEYS */;
INSERT INTO `print_quantity_range` VALUES (1,0,10),(2,0,10),(3,1,10),(4,201,300),(5,301,500),(6,501,1000),(7,1001,3000),(8,3001,5000),(9,1,10),(10,1,10),(11,1,10);
/*!40000 ALTER TABLE `print_quantity_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_setting`
--

DROP TABLE IF EXISTS `print_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_setting` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `is_min_order` enum('1','0') NOT NULL DEFAULT '1',
  `min_order_quantity` int(20) NOT NULL DEFAULT '1',
  `is_white_base` enum('1','0') NOT NULL DEFAULT '1',
  `white_base_price` float(7,2) NOT NULL DEFAULT '0.00',
  `is_clip_art` enum('1','0') NOT NULL DEFAULT '1',
  `is_font` enum('1','0') NOT NULL DEFAULT '1',
  `is_additional_price` enum('1','0') NOT NULL DEFAULT '1',
  `additional_price` float(7,2) NOT NULL DEFAULT '0.00',
  `is_setup_cost` enum('1','0') NOT NULL DEFAULT '1',
  `setup_cost` float(7,2) NOT NULL DEFAULT '0.00',
  `is_scalling` enum('1','0') NOT NULL DEFAULT '0',
  `scalling_price` float(7,3) NOT NULL DEFAULT '0.000',
  `is_color_price_range` enum('1','0') NOT NULL DEFAULT '0',
  `is_percentage` enum('1','0') NOT NULL DEFAULT '1',
  `is_print_size` enum('1','0') NOT NULL DEFAULT '1',
  `is_used_colors` enum('1','0') NOT NULL DEFAULT '0',
  `is_color_chooser` enum('1','0') NOT NULL DEFAULT '0',
  `is_color_group_price` enum('1','0') NOT NULL DEFAULT '1',
  `is_product_side` enum('1','0') NOT NULL DEFAULT '0',
  `is_single_order` enum('1','0') NOT NULL DEFAULT '0',
  `is_no_of_used_colors` enum('1','0') NOT NULL DEFAULT '0',
  `other_color_group_price` float(7,2) NOT NULL DEFAULT '0.00',
  `is_default` enum('1','0') NOT NULL DEFAULT '0',
  `added_on` datetime NOT NULL,
  `updated_on` datetime DEFAULT NULL,
  `is_delete` enum('1','0') NOT NULL DEFAULT '0',
  `max_palettes` int(11) NOT NULL DEFAULT '3',
  `is_max_palettes` enum('0','1') NOT NULL DEFAULT '0',
  `is_gray_scale` enum('1','0','2') CHARACTER SET latin1 NOT NULL DEFAULT '0',
  `is_qrcode_whitebase` enum('1','0') NOT NULL DEFAULT '0',
  `screen_cost` float(7,2) NOT NULL DEFAULT '0.00',
  `is_forcecolor` enum('1','0') NOT NULL DEFAULT '0',
  `is_palette` enum('1','0') NOT NULL DEFAULT '0',
  `is_color_area_price` enum('0','1') NOT NULL DEFAULT '0',
  `is_print_area_percentage` enum('0','1') NOT NULL DEFAULT '0',
  `is_multiline_text_price` enum('0','1') NOT NULL DEFAULT '0',
  `is_background` enum('1','0') NOT NULL DEFAULT '0',
  `is_image_upload_price` enum('1','0') NOT NULL DEFAULT '0',
  `is_calulate_multiple_side` enum('1','0') NOT NULL DEFAULT '0',
  `image_upload_price` float(7,2) NOT NULL DEFAULT '0.00',
  `is_engrave` tinyint(4) NOT NULL DEFAULT '0',
  `is_browse_allow` enum('1','0') DEFAULT '0',
  `is_terms_and_condition_allow` enum('1','0') DEFAULT '0',
  `terms_condition` text,
  `is_background_pattern` enum('1','0') NOT NULL DEFAULT '0',
  `is_name_number_price` enum('1','0') NOT NULL DEFAULT '0',
  `is_extra_side_price` enum('1','0') NOT NULL DEFAULT '0',
  `is_per_letter_price` enum('1','0') NOT NULL DEFAULT '0',
  `tab_id` varchar(5) DEFAULT NULL,
  `sub_tab_id` varchar(5) DEFAULT NULL,
  `is_mask_area_percentage` enum('0','1') NOT NULL DEFAULT '0',
  `max_no_of_lines` int(4) NOT NULL DEFAULT '1',
  `is_product_with_design` enum('1','0') DEFAULT '0',
  `is_color_separate_print_file` enum('1','0') DEFAULT '0',
  `is_embroidery_preview` enum('1','0') NOT NULL DEFAULT '0',
  `default_panel` int(4) DEFAULT '0',
  `engrave_data` text,
  `is_multiple_print_sheet` enum('1','0') DEFAULT '0',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_setting`
--

LOCK TABLES `print_setting` WRITE;
/*!40000 ALTER TABLE `print_setting` DISABLE KEYS */;
INSERT INTO `print_setting` VALUES (1,'1',1,'1',0.00,'0','0','1',1.00,'1',0.75,'1',0.200,'0','1','1','0','1','1','0','0','0',0.00,'1','2015-07-02 06:21:16',NULL,'0',3,'0','0','0',10.00,'0','0','0','0','0','0','0','0',0.00,0,'1','0',NULL,'0','0','0','0','2','4','0',1,'0','0','0',0,NULL,'0'),(3,'1',25,'1',0.00,'0','0','0',0.00,'1',10.00,'0',0.000,'1','1','0','0','0','1','1','0','0',0.00,'0','2015-09-03 18:35:05',NULL,'0',10,'0','0','0',3.50,'0','0','1','0','0','0','0','0',0.00,0,'0','0',NULL,'0','0','0','0','2','4','0',1,'0','0','0',0,NULL,'0'),(4,'1',1,'1',0.00,'1','0','0',0.00,'1',0.50,'1',0.023,'0','1','1','0','1','1','0','0','0',0.00,'0','2018-09-19 14:56:17',NULL,'0',3,'0','0','0',0.00,'0','0','0','0','0','0','0','0',0.00,0,'0','0',NULL,'0','0','0','0','2','4','0',1,'0','0','0',0,NULL,'0'),(5,'1',5,'1',0.00,'0','0','1',2.83,'1',15.00,'1',0.250,'0','1','0','0','1','1','1','0','0',0.00,'0','2018-09-19 17:00:52',NULL,'0',3,'0','0','0',0.00,'0','0','0','0','0','0','0','0',0.00,0,'0','0',NULL,'0','0','0','0','2','4','0',1,'0','0','0',0,NULL,'0'),(6,'1',5,'1',0.00,'0','0','1',2.00,'0',0.00,'1',0.200,'0','1','0','0','1','1','0','0','0',0.00,'0','2018-09-19 18:08:37',NULL,'0',3,'0','2','0',0.00,'0','0','0','0','1','0','0','0',0.00,1,'0','0',NULL,'0','0','0','0','2','4','0',1,'0','0','0',0,NULL,'0');
/*!40000 ALTER TABLE `print_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_size`
--

DROP TABLE IF EXISTS `print_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_size` (
  `pk_id` smallint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `width` float(10,2) NOT NULL,
  `height` float(10,2) NOT NULL,
  `is_user_defined` enum('1','0') NOT NULL DEFAULT '0',
  `is_default` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_size`
--

LOCK TABLES `print_size` WRITE;
/*!40000 ALTER TABLE `print_size` DISABLE KEYS */;
INSERT INTO `print_size` VALUES (1,'A1',33.11,23.39,'0','0'),(2,'A2',23.39,16.54,'0','0'),(3,'A3',16.54,11.69,'0','0'),(4,'A4',11.69,8.27,'0','1'),(5,'A5',8.27,5.83,'0','0'),(6,'A6',5.83,4.13,'0','0'),(7,'A7',4.13,2.91,'0','0'),(8,'A8',2.91,2.05,'0','0');
/*!40000 ALTER TABLE `print_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_size_method_rel`
--

DROP TABLE IF EXISTS `print_size_method_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_size_method_rel` (
  `print_size_id` int(11) unsigned NOT NULL,
  `print_method_id` int(11) unsigned NOT NULL,
  `price` float(10,2) NOT NULL,
  `percentage` float(10,2) NOT NULL,
  `is_fixed` enum('0','1') NOT NULL DEFAULT '0',
  `is_whitebase` enum('0','1') NOT NULL DEFAULT '0',
  `print_size_range_id` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_size_method_rel`
--

LOCK TABLES `print_size_method_rel` WRITE;
/*!40000 ALTER TABLE `print_size_method_rel` DISABLE KEYS */;
INSERT INTO `print_size_method_rel` VALUES (0,1,0.50,0.00,'1','0',6),(8,1,0.35,0.00,'1','0',6),(7,1,1.00,0.00,'1','0',6),(6,1,2.00,0.00,'1','0',6),(5,1,3.40,0.00,'1','0',6),(4,1,4.05,0.00,'1','0',6),(3,1,5.40,0.00,'1','0',6),(2,1,6.80,0.00,'1','0',6),(1,3,0.00,0.00,'0','0',0),(2,3,0.00,0.00,'0','0',0),(3,3,0.00,0.00,'0','0',0),(4,3,0.00,0.00,'0','0',0),(5,3,0.00,0.00,'0','0',0),(6,3,0.00,0.00,'0','0',0),(7,3,0.00,0.00,'0','0',0),(8,3,0.00,0.00,'0','0',0),(1,1,7.80,0.00,'1','0',6),(0,1,0.60,0.00,'1','0',5),(8,1,1.00,0.00,'1','0',5),(7,1,1.65,0.00,'1','0',5),(6,1,2.65,0.00,'1','0',5),(5,1,4.00,0.00,'1','0',5),(4,1,4.70,0.00,'1','0',5),(3,1,6.05,0.00,'1','0',5),(2,1,7.30,0.00,'1','0',5),(1,1,8.30,0.00,'1','0',5),(0,1,0.70,0.00,'1','0',4),(8,1,1.30,0.00,'1','0',4),(7,1,2.30,0.00,'1','0',4),(6,1,3.30,0.00,'1','0',4),(5,1,4.60,0.00,'1','0',4),(4,1,5.35,0.00,'1','0',4),(3,1,6.70,0.00,'1','0',4),(2,1,8.00,0.00,'1','0',4),(1,1,9.00,0.00,'1','0',4),(0,1,0.80,0.00,'1','0',3),(8,1,1.95,0.00,'1','0',3),(7,1,2.95,0.00,'1','0',3),(6,1,3.95,0.00,'1','0',3),(5,1,5.20,0.00,'1','0',3),(4,1,6.00,0.00,'1','0',3),(3,1,7.25,0.00,'1','0',3),(2,1,8.50,0.00,'1','0',3),(1,1,9.50,0.00,'1','0',3),(0,1,0.90,0.00,'1','0',2),(8,1,2.60,0.00,'1','0',2),(7,1,3.60,0.00,'1','0',2),(6,1,4.60,0.00,'1','0',2),(5,1,5.35,0.00,'1','0',2),(4,1,6.65,0.00,'1','0',2),(3,1,8.00,0.00,'1','0',2),(2,1,9.65,0.00,'1','0',2),(1,1,10.65,0.00,'1','0',2),(0,1,0.00,1.00,'0','0',1),(8,1,3.70,0.00,'0','0',1),(7,1,4.70,0.00,'0','0',1),(6,1,5.70,0.00,'0','0',1),(5,1,6.80,0.00,'0','0',1),(4,1,7.65,0.00,'0','0',1),(3,1,9.00,0.00,'0','0',1),(2,1,10.65,0.00,'0','0',1),(1,1,11.65,0.00,'0','0',1),(0,4,0.00,0.00,'0','0',1),(8,4,0.00,0.00,'0','0',1),(7,4,0.00,0.00,'0','0',1),(6,4,0.00,0.00,'0','0',1),(5,4,0.00,0.00,'0','0',1),(4,4,0.00,0.00,'0','0',1),(3,4,0.00,0.00,'0','0',1),(2,4,0.00,0.00,'0','0',1),(1,4,0.00,0.00,'0','0',1),(1,6,0.00,0.00,'0','0',1),(2,6,0.00,0.00,'0','0',1),(3,6,0.00,0.00,'0','0',1),(4,6,0.00,0.00,'0','0',1),(5,6,0.00,0.00,'0','0',1),(6,6,0.00,0.00,'0','0',1),(7,6,0.00,0.00,'0','0',1),(8,6,0.00,0.00,'0','0',1),(0,6,0.00,0.00,'0','0',1);
/*!40000 ALTER TABLE `print_size_method_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_size_range`
--

DROP TABLE IF EXISTS `print_size_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_size_range` (
  `pk_id` int(10) NOT NULL AUTO_INCREMENT,
  `from_range` int(10) NOT NULL,
  `to_range` int(10) NOT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_size_range`
--

LOCK TABLES `print_size_range` WRITE;
/*!40000 ALTER TABLE `print_size_range` DISABLE KEYS */;
INSERT INTO `print_size_range` VALUES (1,1,1),(2,2,15),(3,16,30),(4,31,50),(5,51,75),(6,76,100);
/*!40000 ALTER TABLE `print_size_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `print_textline_price_rel`
--

DROP TABLE IF EXISTS `print_textline_price_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `print_textline_price_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `print_method_id` int(10) NOT NULL,
  `text_price` float(10,2) NOT NULL,
  `no_of_allowed` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `print_textline_price_rel`
--

LOCK TABLES `print_textline_price_rel` WRITE;
/*!40000 ALTER TABLE `print_textline_price_rel` DISABLE KEYS */;
INSERT INTO `print_textline_price_rel` VALUES (64,1,0.00,1),(40,3,0.00,1),(44,4,0.00,1),(48,5,0.00,1),(61,6,2.75,2),(60,6,2.75,2);
/*!40000 ALTER TABLE `print_textline_price_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `printing_details`
--

DROP TABLE IF EXISTS `printing_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `printing_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `print_type` varchar(100) NOT NULL DEFAULT 'digital_printing',
  `description` varchar(5000) NOT NULL,
  `status` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'It indicates which printing type is active.',
  `additional_price_status` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'It inducates whether a color variant(product) has extra price for the printing type or not.',
  `setup_price` double(10,2) NOT NULL DEFAULT '0.00' COMMENT 'It holds the setup fee/price for a printing type.',
  `palette_setup_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'It indicates whether the printing type has extra price table w.r.t. a palette-range or not.',
  `max_palettes_limit` int(5) NOT NULL DEFAULT '10' COMMENT 'It indicates the maximum number of palettes allowed for printing.',
  `min_quantity` int(11) NOT NULL DEFAULT '1' COMMENT 'It indicates the minimum mandatory limit to order printing.',
  `whitebase_price` double(10,2) NOT NULL DEFAULT '0.00' COMMENT 'Not applicable for Screen-printing. Screen-printing has its own price table(print_order_range)',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `printing_details`
--

LOCK TABLES `printing_details` WRITE;
/*!40000 ALTER TABLE `printing_details` DISABLE KEYS */;
INSERT INTO `printing_details` VALUES (1,'DTG Print','digital_printing','<b>Direct To Garment Print(DTG Print)</b> is an emerging digital print method, perfect for soft-to-the-touch full colour prints. Although less vibrant & durable than their full-colour digital transfer counterparts, direct to garment printing offers a more fashionable, light and \'wearable\' print finish.<br><br>You need to specify price to each size for ease.','true','true',20.00,1,2,1,1.25);
/*!40000 ALTER TABLE `printing_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `printing_dtg_details`
--

DROP TABLE IF EXISTS `printing_dtg_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `printing_dtg_details` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `size` varchar(50) CHARACTER SET latin1 NOT NULL,
  `width` double(5,2) NOT NULL DEFAULT '100.00',
  `height` double(5,2) NOT NULL DEFAULT '100.00',
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `is_default` tinyint(1) NOT NULL DEFAULT '0',
  `screenprint_percentage` double(10,2) NOT NULL DEFAULT '5.00',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='It holds size and price data for DTG print.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `printing_dtg_details`
--

LOCK TABLES `printing_dtg_details` WRITE;
/*!40000 ALTER TABLE `printing_dtg_details` DISABLE KEYS */;
INSERT INTO `printing_dtg_details` VALUES (1,'A1',100.00,100.00,6.00,1,5.00),(2,'A2',100.00,100.00,5.00,1,5.00);
/*!40000 ALTER TABLE `printing_dtg_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `printmethod_additional_prices`
--

DROP TABLE IF EXISTS `printmethod_additional_prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `printmethod_additional_prices` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `productid` varchar(50) NOT NULL,
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `print_method_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `printmethod_additional_prices`
--

LOCK TABLES `printmethod_additional_prices` WRITE;
/*!40000 ALTER TABLE `printmethod_additional_prices` DISABLE KEYS */;
/*!40000 ALTER TABLE `printmethod_additional_prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `printtype_palette_rel`
--

DROP TABLE IF EXISTS `printtype_palette_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `printtype_palette_rel` (
  `print_type_id` int(11) NOT NULL,
  `palette_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `printtype_palette_rel`
--

LOCK TABLES `printtype_palette_rel` WRITE;
/*!40000 ALTER TABLE `printtype_palette_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `printtype_palette_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_3d_template_exist`
--

DROP TABLE IF EXISTS `product_3d_template_exist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_3d_template_exist` (
  `pk_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` varchar(255) NOT NULL DEFAULT '0',
  `is_3d_preview` enum('0','1') NOT NULL DEFAULT '0',
  `date_created` datetime DEFAULT NULL,
  `date_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pk_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_3d_template_exist`
--

LOCK TABLES `product_3d_template_exist` WRITE;
/*!40000 ALTER TABLE `product_3d_template_exist` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_3d_template_exist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_additional_prices`
--

DROP TABLE IF EXISTS `product_additional_prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_additional_prices` (
  `pk_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(50) NOT NULL,
  `variant_id` varchar(50) NOT NULL,
  `print_method_id` int(11) NOT NULL,
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `is_whitebase` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_additional_prices`
--

LOCK TABLES `product_additional_prices` WRITE;
/*!40000 ALTER TABLE `product_additional_prices` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_additional_prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category_printmethod_rel`
--

DROP TABLE IF EXISTS `product_category_printmethod_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_category_printmethod_rel` (
  `print_method_id` int(11) NOT NULL,
  `product_category_id` int(11) NOT NULL,
  `is_enable` enum('1','0') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category_printmethod_rel`
--

LOCK TABLES `product_category_printmethod_rel` WRITE;
/*!40000 ALTER TABLE `product_category_printmethod_rel` DISABLE KEYS */;
INSERT INTO `product_category_printmethod_rel` VALUES (1,3,'0');
/*!40000 ALTER TABLE `product_category_printmethod_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_configurator`
--

DROP TABLE IF EXISTS `product_configurator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_configurator` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `base_image_url` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_configurator`
--

LOCK TABLES `product_configurator` WRITE;
/*!40000 ALTER TABLE `product_configurator` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_configurator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_feature_rel`
--

DROP TABLE IF EXISTS `product_feature_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_feature_rel` (
  `product_id` varchar(50) NOT NULL,
  `feature_id` int(3) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_feature_rel`
--

LOCK TABLES `product_feature_rel` WRITE;
/*!40000 ALTER TABLE `product_feature_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_feature_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_gallery`
--

DROP TABLE IF EXISTS `product_gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_gallery` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_part_details_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `base_image_url` varchar(255) DEFAULT NULL,
  `thumb_image_url` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `sort_order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_gallery`
--

LOCK TABLES `product_gallery` WRITE;
/*!40000 ALTER TABLE `product_gallery` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_part_details`
--

DROP TABLE IF EXISTS `product_part_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_part_details` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `thumb_image_url` varchar(255) NOT NULL DEFAULT '',
  `price` float NOT NULL,
  `sort_order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_part_details`
--

LOCK TABLES `product_part_details` WRITE;
/*!40000 ALTER TABLE `product_part_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_part_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_part_relation`
--

DROP TABLE IF EXISTS `product_part_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_part_relation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_configurator_id` bigint(20) NOT NULL,
  `product_part_details_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_part_relation`
--

LOCK TABLES `product_part_relation` WRITE;
/*!40000 ALTER TABLE `product_part_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_part_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_print_discount_rel`
--

DROP TABLE IF EXISTS `product_print_discount_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_print_discount_rel` (
  `product_id` int(10) NOT NULL,
  `print_id` int(10) NOT NULL,
  `discount_id` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_print_discount_rel`
--

LOCK TABLES `product_print_discount_rel` WRITE;
/*!40000 ALTER TABLE `product_print_discount_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_print_discount_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_printarea_type`
--

DROP TABLE IF EXISTS `product_printarea_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_printarea_type` (
  `productid` varchar(50) NOT NULL,
  `mask` enum('true','false') NOT NULL DEFAULT 'false',
  `bounds` enum('true','false') NOT NULL DEFAULT 'true',
  `custom_size` enum('true','false') NOT NULL DEFAULT 'false',
  `unit_id` int(5) NOT NULL DEFAULT '1' COMMENT 'It indicates the unit of measurement from ''units'' table.',
  `price_per_unit` double(10,2) NOT NULL DEFAULT '0.00' COMMENT 'It holds the price per unit area for user defined size of product.',
  `max_height` double(10,2) NOT NULL DEFAULT '500.00',
  `max_width` double(10,2) NOT NULL DEFAULT '500.00',
  `custom_mask` enum('true','false') NOT NULL DEFAULT 'false',
  `is_print_size` enum('true','false') NOT NULL DEFAULT 'false',
  `is_associate_shape` enum('true','false') DEFAULT 'false',
  PRIMARY KEY (`productid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_printarea_type`
--

LOCK TABLES `product_printarea_type` WRITE;
/*!40000 ALTER TABLE `product_printarea_type` DISABLE KEYS */;
INSERT INTO `product_printarea_type` VALUES ('2','false','true','false',1,0.00,500.00,500.00,'false','false','false'),('136','false','true','false',1,0.00,500.00,500.00,'false','false','false');
/*!40000 ALTER TABLE `product_printarea_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_printmethod_rel`
--

DROP TABLE IF EXISTS `product_printmethod_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_printmethod_rel` (
  `pk_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(50) NOT NULL,
  `print_method_id` int(11) NOT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_printmethod_rel`
--

LOCK TABLES `product_printmethod_rel` WRITE;
/*!40000 ALTER TABLE `product_printmethod_rel` DISABLE KEYS */;
INSERT INTO `product_printmethod_rel` VALUES (1,'2',1);
/*!40000 ALTER TABLE `product_printmethod_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sides_sizes`
--

DROP TABLE IF EXISTS `product_sides_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_sides_sizes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `productid` varchar(50) NOT NULL,
  `side` tinyint(6) NOT NULL DEFAULT '0' COMMENT 'Side of a product irrespective of color-variants',
  `printsize` varchar(50) DEFAULT NULL COMMENT 'DTG size(A3/A4/A5/A6/Custom size) specification',
  `is_transition` enum('0','1') NOT NULL DEFAULT '0',
  `side_name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sides_sizes`
--

LOCK TABLES `product_sides_sizes` WRITE;
/*!40000 ALTER TABLE `product_sides_sizes` DISABLE KEYS */;
INSERT INTO `product_sides_sizes` VALUES (2,'2',0,'A4','0',NULL),(4,'136',0,'A8','0',NULL);
/*!40000 ALTER TABLE `product_sides_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_temp_rel`
--

DROP TABLE IF EXISTS `product_temp_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_temp_rel` (
  `product_id` int(20) NOT NULL,
  `temp_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_temp_rel`
--

LOCK TABLES `product_temp_rel` WRITE;
/*!40000 ALTER TABLE `product_temp_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_temp_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_temp_side`
--

DROP TABLE IF EXISTS `product_temp_side`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_temp_side` (
  `pk_id` int(50) NOT NULL AUTO_INCREMENT,
  `product_temp_id` int(50) NOT NULL,
  `side_name` varchar(200) NOT NULL,
  `sort_order` int(20) NOT NULL,
  `image` varchar(40) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_temp_side`
--

LOCK TABLES `product_temp_side` WRITE;
/*!40000 ALTER TABLE `product_temp_side` DISABLE KEYS */;
INSERT INTO `product_temp_side` VALUES (1,1,'Front',1,'png','2017-02-17 20:38:00',NULL),(2,1,'Back',2,'png','2017-02-17 20:38:00',NULL),(3,1,'Right',3,'png','2017-02-17 20:38:00',NULL),(4,1,'Left',4,'png','2017-02-17 20:38:00',NULL);
/*!40000 ALTER TABLE `product_temp_side` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_template`
--

DROP TABLE IF EXISTS `product_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_template` (
  `pk_id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_modified` datetime DEFAULT NULL,
  `is_default` tinyint(4) NOT NULL DEFAULT '1',
  `is_3d_preview` enum('1','0') NOT NULL DEFAULT '0',
  PRIMARY KEY (`pk_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_template`
--

LOCK TABLES `product_template` WRITE;
/*!40000 ALTER TABLE `product_template` DISABLE KEYS */;
INSERT INTO `product_template` VALUES (1,'Men Tshirt','2017-02-17 20:38:00',NULL,0,'0');
/*!40000 ALTER TABLE `product_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcategory_feature_rel`
--

DROP TABLE IF EXISTS `productcategory_feature_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productcategory_feature_rel` (
  `product_category_id` int(5) NOT NULL,
  `feature_id` int(3) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcategory_feature_rel`
--

LOCK TABLES `productcategory_feature_rel` WRITE;
/*!40000 ALTER TABLE `productcategory_feature_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `productcategory_feature_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `production_hub_setting`
--

DROP TABLE IF EXISTS `production_hub_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `production_hub_setting` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `setting_key` varchar(30) NOT NULL,
  `setting_value` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production_hub_setting`
--

LOCK TABLES `production_hub_setting` WRITE;
/*!40000 ALTER TABLE `production_hub_setting` DISABLE KEYS */;
INSERT INTO `production_hub_setting` VALUES (1,'request_quote','false');
/*!40000 ALTER TABLE `production_hub_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_order`
--

DROP TABLE IF EXISTS `purchase_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_id` int(8) NOT NULL,
  `print_shop_id` int(8) NOT NULL,
  `po_ref_id` varchar(25) NOT NULL,
  `po_note` text NOT NULL,
  `po_status` int(8) NOT NULL,
  `tracking_no` varchar(50) NOT NULL,
  `expected_delivery_date` date NOT NULL,
  `created_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_order`
--

LOCK TABLES `purchase_order` WRITE;
/*!40000 ALTER TABLE `purchase_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_order_details`
--

DROP TABLE IF EXISTS `purchase_order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_order_details` (
  `order_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) DEFAULT NULL,
  `purchase_order_id` int(11) NOT NULL,
  `simple_product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `pid` int(11) NOT NULL,
  `size` varchar(28) NOT NULL,
  `color` varchar(28) NOT NULL,
  `quantity` int(11) NOT NULL,
  `sku` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`order_details_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_order_details`
--

LOCK TABLES `purchase_order_details` WRITE;
/*!40000 ALTER TABLE `purchase_order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotations`
--

DROP TABLE IF EXISTS `quotations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quotations` (
  `quote_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` varchar(50) NOT NULL,
  `agent_id` int(11) DEFAULT '0',
  `shipping_address_id` varchar(50) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `status` varchar(100) NOT NULL,
  `quotation_sent` enum('true','false') NOT NULL DEFAULT 'false',
  `quantity` int(11) NOT NULL DEFAULT '0',
  `quote_price` float NOT NULL DEFAULT '0',
  `is_order` enum('0','1') NOT NULL DEFAULT '0' COMMENT '0 - quotation, 1 - order',
  `created_date` datetime NOT NULL,
  `modified_date` datetime NOT NULL,
  `production_due_date` date DEFAULT NULL,
  `customer_due_date` date DEFAULT NULL,
  PRIMARY KEY (`quote_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotations`
--

LOCK TABLES `quotations` WRITE;
/*!40000 ALTER TABLE `quotations` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotations_artwork_approval_rel`
--

DROP TABLE IF EXISTS `quotations_artwork_approval_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quotations_artwork_approval_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `artwork_status` int(4) DEFAULT '0',
  `description` text NOT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `due_date` date NOT NULL,
  `modified_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotations_artwork_approval_rel`
--

LOCK TABLES `quotations_artwork_approval_rel` WRITE;
/*!40000 ALTER TABLE `quotations_artwork_approval_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotations_artwork_approval_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotations_label_rel`
--

DROP TABLE IF EXISTS `quotations_label_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quotations_label_rel` (
  `quote_id` int(11) NOT NULL,
  `label_id` int(11) NOT NULL,
  `status` enum('false','true') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotations_label_rel`
--

LOCK TABLES `quotations_label_rel` WRITE;
/*!40000 ALTER TABLE `quotations_label_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotations_label_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_artwork_history`
--

DROP TABLE IF EXISTS `quote_artwork_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_artwork_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL DEFAULT '0',
  `message` text,
  `sent_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `converse_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_artwork_history`
--

LOCK TABLES `quote_artwork_history` WRITE;
/*!40000 ALTER TABLE `quote_artwork_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_artwork_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_artwork_rel`
--

DROP TABLE IF EXISTS `quote_artwork_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_artwork_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `history_id` int(11) NOT NULL,
  `artwork_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_artwork_rel`
--

LOCK TABLES `quote_artwork_rel` WRITE;
/*!40000 ALTER TABLE `quote_artwork_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_artwork_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_artworks`
--

DROP TABLE IF EXISTS `quote_artworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_artworks` (
  `artwork_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `artwork_type` enum('designer_tool','upload_artwork') DEFAULT NULL,
  `ref_id` int(11) NOT NULL,
  `status` enum('created','rejected','change_request','approved','send','removed','paid','no_design') NOT NULL DEFAULT 'change_request',
  PRIMARY KEY (`artwork_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_artworks`
--

LOCK TABLES `quote_artworks` WRITE;
/*!40000 ALTER TABLE `quote_artworks` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_artworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_assets`
--

DROP TABLE IF EXISTS `quote_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_assets` (
  `assets_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `asset_path` text NOT NULL,
  PRIMARY KEY (`assets_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_assets`
--

LOCK TABLES `quote_assets` WRITE;
/*!40000 ALTER TABLE `quote_assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_conversations`
--

DROP TABLE IF EXISTS `quote_conversations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_conversations` (
  `converse_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `agent_id` int(11) NOT NULL,
  `type` enum('admin','customer') NOT NULL DEFAULT 'customer',
  `artwork_id` int(11) NOT NULL,
  `notes` text NOT NULL,
  `history` enum('true','false') NOT NULL,
  `conversations_status` enum('new','viewed') NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`converse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_conversations`
--

LOCK TABLES `quote_conversations` WRITE;
/*!40000 ALTER TABLE `quote_conversations` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_conversations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_conversations_assets`
--

DROP TABLE IF EXISTS `quote_conversations_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_conversations_assets` (
  `asset_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `converse_id` int(11) NOT NULL,
  `asset_path` text NOT NULL,
  PRIMARY KEY (`asset_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_conversations_assets`
--

LOCK TABLES `quote_conversations_assets` WRITE;
/*!40000 ALTER TABLE `quote_conversations_assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_conversations_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_expense`
--

DROP TABLE IF EXISTS `quote_expense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_expense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `amount_paid` float NOT NULL,
  `description` text,
  `payment_mode_id` int(11) NOT NULL,
  `payment_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_expense`
--

LOCK TABLES `quote_expense` WRITE;
/*!40000 ALTER TABLE `quote_expense` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_expense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_history`
--

DROP TABLE IF EXISTS `quote_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_history` (
  `history_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `agent_id` int(11) NOT NULL,
  `type` enum('admin','customer') NOT NULL DEFAULT 'customer',
  `action` enum('new_quote','sent','approved','rejected','change_request','conversation','paid','no_design','is_order') NOT NULL,
  `notes` text NOT NULL,
  `history_status` enum('new','viewed') NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`history_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_history`
--

LOCK TABLES `quote_history` WRITE;
/*!40000 ALTER TABLE `quote_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_internal_note`
--

DROP TABLE IF EXISTS `quote_internal_note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_internal_note` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `agent_id` int(11) NOT NULL,
  `type` enum('admin','agent') NOT NULL,
  `notes` text NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_internal_note`
--

LOCK TABLES `quote_internal_note` WRITE;
/*!40000 ALTER TABLE `quote_internal_note` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_internal_note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_payment`
--

DROP TABLE IF EXISTS `quote_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `amount_paid` float NOT NULL,
  `description` text,
  `payment_mode_id` int(11) NOT NULL,
  `payment_date` date NOT NULL,
  `status` int(4) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_payment`
--

LOCK TABLES `quote_payment` WRITE;
/*!40000 ALTER TABLE `quote_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_payment_list`
--

DROP TABLE IF EXISTS `quote_payment_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_payment_list` (
  `payment_list_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_id` int(11) NOT NULL,
  `payment_amount` float NOT NULL,
  `mode` varchar(100) NOT NULL,
  `request_id` int(11) NOT NULL,
  `payment_date` date NOT NULL,
  PRIMARY KEY (`payment_list_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_payment_list`
--

LOCK TABLES `quote_payment_list` WRITE;
/*!40000 ALTER TABLE `quote_payment_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_payment_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_payment_request_list`
--

DROP TABLE IF EXISTS `quote_payment_request_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_payment_request_list` (
  `request_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_id` int(11) NOT NULL,
  `payment_amount` float NOT NULL,
  `request_date` date NOT NULL,
  `payment_date` date NOT NULL,
  PRIMARY KEY (`request_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_payment_request_list`
--

LOCK TABLES `quote_payment_request_list` WRITE;
/*!40000 ALTER TABLE `quote_payment_request_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_payment_request_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_payments`
--

DROP TABLE IF EXISTS `quote_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_payments` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `adv_amount` float NOT NULL,
  `pending_amount` float NOT NULL,
  `total_payment` float NOT NULL,
  `invoice_id` varchar(20) NOT NULL,
  `payment_by` enum('check','cash','DD','online') NOT NULL DEFAULT 'cash',
  `payment_status` enum('pending','paid') NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_payments`
--

LOCK TABLES `quote_payments` WRITE;
/*!40000 ALTER TABLE `quote_payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_price`
--

DROP TABLE IF EXISTS `quote_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_price` (
  `price_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `quote_id` int(11) NOT NULL,
  `unit_price_without_design` float NOT NULL,
  `design_price` float NOT NULL,
  `price_after_design` float NOT NULL,
  `shipping_price` float NOT NULL,
  `optional_price` float NOT NULL,
  `surchage_amount` float NOT NULL,
  `unit_price` float NOT NULL,
  `sub_total_price` float NOT NULL,
  `discount_type` enum('no_discount','price_discount','percentage') NOT NULL DEFAULT 'no_discount',
  `discount_amount` float NOT NULL DEFAULT '0',
  `tax` float DEFAULT NULL,
  `shipping` float DEFAULT NULL,
  `price` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`price_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_price`
--

LOCK TABLES `quote_price` WRITE;
/*!40000 ALTER TABLE `quote_price` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_product`
--

DROP TABLE IF EXISTS `quote_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `pid` varchar(50) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `print_profile` int(11) DEFAULT NULL,
  `size` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `simple_product_id` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `artwork_type` enum('designer_tool','upload_artwork') DEFAULT NULL,
  `product_status` enum('In Stock','Need To Order','Already Ordered') NOT NULL DEFAULT 'Need To Order',
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_product`
--

LOCK TABLES `quote_product` WRITE;
/*!40000 ALTER TABLE `quote_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_product_additional_fee`
--

DROP TABLE IF EXISTS `quote_product_additional_fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_product_additional_fee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `description` varchar(400) NOT NULL,
  `amount` float NOT NULL DEFAULT '0',
  `additional_fee_data` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_product_additional_fee`
--

LOCK TABLES `quote_product_additional_fee` WRITE;
/*!40000 ALTER TABLE `quote_product_additional_fee` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_product_additional_fee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_product_uploaded_artwork`
--

DROP TABLE IF EXISTS `quote_product_uploaded_artwork`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_product_uploaded_artwork` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `sides` int(11) NOT NULL,
  `design_type` enum('preview','printable') NOT NULL,
  `file_name` varchar(50) NOT NULL,
  `artwork_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_product_uploaded_artwork`
--

LOCK TABLES `quote_product_uploaded_artwork` WRITE;
/*!40000 ALTER TABLE `quote_product_uploaded_artwork` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_product_uploaded_artwork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_status`
--

DROP TABLE IF EXISTS `quote_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `color_code` varchar(50) NOT NULL DEFAULT '#FFFFFF',
  `sort_order` int(11) NOT NULL,
  `status` enum('true','false') NOT NULL,
  `kanban_status` set('true','false') NOT NULL DEFAULT 'true',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_status`
--

LOCK TABLES `quote_status` WRITE;
/*!40000 ALTER TABLE `quote_status` DISABLE KEYS */;
INSERT INTO `quote_status` VALUES (1,'New Quote','#2c8998',1,'true','true'),(2,'Viewed','#3c91fd',2,'true','true'),(3,'Sent','#df5427',3,'true','true'),(4,'Approved','#299b05',4,'true','true'),(5,'Rejected','#b71f45',5,'true','true'),(6,'Request For Change','#90e3a3',6,'true','true'),(7,'Paid','#23531c',7,'true','true'),(8,'Ready To Ship','#4ed96b',8,'true','true'),(9,'Shipped','#0c8425',9,'true','true');
/*!40000 ALTER TABLE `quote_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_temp_table`
--

DROP TABLE IF EXISTS `quote_temp_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quote_temp_table` (
  `temp_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_customer_id` int(11) NOT NULL,
  `ref_id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `pvid` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `print_profile` varchar(100) NOT NULL,
  `color` varchar(50) NOT NULL,
  `dimension_height` float DEFAULT '0',
  `dimension_width` float DEFAULT '0',
  `unit_price_without_design` float NOT NULL,
  `design_price` float NOT NULL,
  `price_after_design` float DEFAULT '0',
  `simple_product_id` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL,
  `design_data` longtext NOT NULL,
  `product_data` text NOT NULL,
  `preview_image_id` int(11) NOT NULL,
  `store` int(11) NOT NULL,
  `unit` varchar(50) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0',
  `product_type` varchar(50) NOT NULL,
  PRIMARY KEY (`temp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_temp_table`
--

LOCK TABLES `quote_temp_table` WRITE;
/*!40000 ALTER TABLE `quote_temp_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_temp_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revision`
--

DROP TABLE IF EXISTS `revision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `revision` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `revision_id` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revision`
--

LOCK TABLES `revision` WRITE;
/*!40000 ALTER TABLE `revision` DISABLE KEYS */;
INSERT INTO `revision` VALUES (3,'Update from admin','2019-12-09 14:32:56',1567586395);
/*!40000 ALTER TABLE `revision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_version`
--

DROP TABLE IF EXISTS `schema_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_version` (
  `version` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_version`
--

LOCK TABLES `schema_version` WRITE;
/*!40000 ALTER TABLE `schema_version` DISABLE KEYS */;
INSERT INTO `schema_version` VALUES (70),(70),(70);
/*!40000 ALTER TABLE `schema_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_version_xe`
--

DROP TABLE IF EXISTS `schema_version_xe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_version_xe` (
  `version` bigint(20) NOT NULL,
  `name` text,
  `md5` text,
  `run_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_version_xe`
--

LOCK TABLES `schema_version_xe` WRITE;
/*!40000 ALTER TABLE `schema_version_xe` DISABLE KEYS */;
INSERT INTO `schema_version_xe` VALUES (0,NULL,NULL,'2019-12-09 14:32:53'),(1,'init','53297f4ea7c573b5fa0fef996ed21a99','2019-12-09 09:02:54'),(2,'create-table','0717d873a5db202b51e9f9ee3ebf6da3','2019-12-09 09:02:54'),(3,'alter-table','0f6a90293a73a757c5134446dd8849e7','2019-12-09 09:02:54'),(4,'schema-setup','7c5da2c1cecee09b9d14e02d30ee2ab9','2019-12-09 09:02:54'),(5,'inkxe-basic','b1206de0e23efefb65f3ce8292887db1','2019-12-09 09:02:55'),(6,'milestone-stability','1f77eea7254d4e68d4f09a69e78ed07b','2019-12-09 09:02:55'),(7,'stability-hot-fix','a10f795997bec0b0ed01d69cab69d1e6','2019-12-09 09:02:55'),(8,'alter-table-decorated_product','2f6d4096765c1c36e01282eb24ee4e87','2019-12-09 09:02:55'),(9,'add-column-decorated_product','bdc890fb7cc6b013bd1d57c6ccf717ea','2019-12-09 09:02:55'),(10,'design_background','8dc6db12fe9f268abfd1a0fe8e7cc815','2019-12-09 09:02:55'),(11,'alter-table-print_setting','d9b924fd1e36845f18b4e967b92141df','2019-12-09 09:02:55'),(12,'insert-row-table-features','2e1affbfea39747350498dd8aa69f044','2019-12-09 09:02:55'),(13,'insert-row-table-preloaded_items','e8bf6ab025096265f213dd6573f78f3c','2019-12-09 09:02:55'),(14,'alter-table-mask_data','44b8dbe81ecd2d5340615d4c03b163f9','2019-12-09 09:02:55'),(15,'create-table-design-back-cate-printmethod-rel','304b5dd66f29888d64768e05aef66b13','2019-12-09 09:02:55'),(16,'alter-table-design_background','aa6a964b529699ff1aafd4bc0bb99676','2019-12-09 09:02:55'),(18,'drop-table-design-background','a91106d12c58509f7de9e33a6a94d23f','2019-12-09 09:02:55'),(19,'insert-row-table-design-background','4d8a9763bd735f825db0121fee9abdbf','2019-12-09 09:02:55'),(20,'alter-table-print_setting','1663b4c1518f7a94440361dcad0d77b1','2019-12-09 09:02:55'),(21,'alter-table-mask_data_custom_boundary_unit','4be16539d915a1b16b8f9a1a19f425a1','2019-12-09 09:02:55'),(22,'create-table-custom_boundary_unit','e8161f6325ee2eaf94956b04d18fd5bf','2019-12-09 09:02:55'),(23,'alter-table-general_setting','a920d29dd29e3f382e22ff8247b1ea0b','2019-12-09 09:02:55'),(24,'alter-table-designs-fonts','ed66239d79b68047dbb29fe53bec7411','2019-12-09 09:02:55'),(25,'alter-table-mask_data','96e2921ec45c599acf13c61e46f1ca4f','2019-12-09 09:02:55'),(26,'update-table-general_setting','d4310e769d512db69b7360d94ec7f1f1','2019-12-09 09:02:55'),(27,'update-table-general_setting','78d2f676ced37bf0a453df2bd75c0267','2019-12-09 09:02:55'),(28,'alter-table-custom_maskdata','ee2a7e22928b948ab3782148af951dc6','2019-12-09 09:02:55'),(29,'alter-table-print_setting','4ae7aaee97f933e251489349a7e331d3','2019-12-09 09:02:55'),(30,'create-table-color_swatch','72e5fe0ffe7067ecbd4b0be700c2ba79','2019-12-09 09:02:55'),(31,'add-table-image-edit-select-color','abffc608a7b6f649bc85bd0db4449cdf','2019-12-09 09:02:55'),(32,'clientcustomization510','49a5e636d5963d048fc484da4046df9a','2019-12-09 09:02:55'),(33,'create-table-background_pattern','68d2c9edfc8028c293d9c9ea9a6c134d','2019-12-09 09:02:55'),(34,'create-table-back_pattern_cate_printmethod_rel','b5c5e96ade76a609b58a1d2d44aff62e','2019-12-09 09:02:55'),(35,'alter-table-general_setting','0026bd1542d4df462e0d1e7156d76f7e','2019-12-09 09:02:55'),(36,'alter-table-general_setting','a467e49ee3308bc66862e6ee29e0b455','2019-12-09 09:02:55'),(37,'drop-table-product_category_temp_rel','32ebe851d5113cb8fae5d12738df7476','2019-12-09 09:02:55'),(38,'alter-column-print_setting','769cfde0da8cbbca99e0420eee027356','2019-12-09 09:02:55'),(39,'alter-table-general_setting','b666efcaa21d8dc5eb32de7d2d84831f','2019-12-09 09:02:55'),(40,'update-table-features','fcb75ea04d4f5092a6f6acb3fdefda82','2019-12-09 09:02:55'),(41,'alter-table-mask_data','af024f06c261b5a7d85df4c767fbead7','2019-12-09 09:02:55'),(42,'alter-column-print_setting-image-terms-condition','9a31ef33148bb196e51fca635cf0c88b','2019-12-09 09:02:55'),(43,'insert-row-table-features','0c11eb6a5c4a61672d7239b87118ae61','2019-12-09 09:02:55'),(44,'insert-row-table- preloaded_items','7ac65ee6044ea004d261e01f46917eb4','2019-12-09 09:02:55'),(45,'update-table-features','17bd79b8f94b3cd544fdb0f0c5c9832a','2019-12-09 09:02:55'),(46,'alter-table-general_setting','030414d2914cc78165e0f5853ca79cf0','2019-12-09 09:02:55'),(47,'add-schemaVersion-storeVersionId','68d1501bc5c5d095d6bc15cc183835ce','2019-12-09 09:02:55'),(48,'strcit-mode-scripts','c71e66cf07cc63cc8074ef542a94e7fe','2019-12-09 09:02:55'),(49,'add-table-customer_order_info','5fdb84d3767228610beaf13a69edf222','2019-12-09 09:02:55'),(50,'add-table-social-sites-and-settings','147098cce80be913752e6b3d831fd58b','2019-12-09 09:02:55'),(51,'table-structure-multiple-boundary','4119999238481d114f33e6a549b18431','2019-12-09 09:02:55'),(52,'api-security-capture-image-alter-mul-bound','eb9b68b14e051369a013d716549dc368','2019-12-09 09:02:55'),(53,'alter-mask-data-table','cc5201c24fa1eaef3681508303504dfe','2019-12-09 09:02:55'),(54,'strcit-mode-scripts','e44e4d33524b1b5d5ce56722e354d6e0','2019-12-09 09:02:55'),(55,'alter-table-general-setting','1da05bf6d2c3c1bd1478ea646ae9af5d','2019-12-09 09:02:55'),(56,'add-table-store-attributes','9c91363fc7b20aae8b17fa9763933a34','2019-12-09 09:02:55'),(57,'update-feature-column-values','f15e97ed60a361c2bee317e32d97d4c8','2019-12-09 09:02:55'),(58,'sprint-5','849039091ef69daf0f77a7757c31a094','2019-12-09 09:02:55'),(59,'sprint-6','3f87d3fbea790bc301d017979ea96120','2019-12-09 09:02:55'),(60,'sprint-7','73be92b966072d18ff7207960d872af9','2019-12-09 09:02:55'),(61,'sprint-8','494619d8b45fe51172d46794a9d4ccc6','2019-12-09 09:02:55'),(62,'sprint-12','eb38cc768216e2b6f113d0e1e7c57671','2019-12-09 09:02:55'),(63,'sprint-14','4337fc99fa5219bb09e6536c5282e61c','2019-12-09 09:02:55'),(64,'sprint-16','5ff588d461b553d8b4bc35cca7061891','2019-12-09 09:02:55'),(65,'sprint-18','74ad2917664e012d7d2f1061c7e45a2c','2019-12-09 09:02:55'),(66,'sprint-20','4339dc9cdc12eb1c82ffe2b96632ca56','2019-12-09 09:02:55'),(67,'v8','174447af65bc4e93ec323994c1b9b5c3','2019-12-09 09:02:56'),(68,'release-830-sprint-5','4dd63386de579bdcee00ed394d92ad6b','2019-12-09 09:02:56'),(69,'release-850-sprint-1','fbaf05e6b8ad04e2a548fa022372770f','2019-12-09 09:02:56'),(70,'release-850-sprint-2','09601ded4288afa879044d22ae56ca41','2019-12-09 09:02:56'),(71,'release-850-sprint-3','e1d0b5b2da88df36fb4b3b846989e4f4','2019-12-09 09:02:57'),(72,'release-850-sprint-4','4d44c9b8e9410cbbab4e9332366bf4be','2019-12-09 09:02:57'),(73,'release-850-sprint-5','0fec1896fa1de2dd1f6d7a1744b17f90','2019-12-09 09:02:57'),(74,'hotfix851','c4ab1a464f9618db086af1adb2483e84','2019-12-09 09:02:57'),(75,'hotfix852','4917c9784b191388600c090dbab46175','2019-12-09 09:02:57'),(76,'release-860-sprint-1','331f9e294fb3c8eefae5165a36dbef4c','2019-12-09 09:02:57'),(77,'release-860-sprint-2','383ee747e3dba572f46df614304f4d51','2019-12-09 09:02:57'),(78,'release-860-sprint4','e8c5deda311072e270c7767c12572a5b','2019-12-09 09:02:57');
/*!40000 ALTER TABLE `schema_version_xe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings_config`
--

DROP TABLE IF EXISTS `settings_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings_config` (
  `id` int(1) unsigned NOT NULL,
  `items_per_page` int(3) unsigned NOT NULL DEFAULT '10',
  `price_per_unit` double(10,2) NOT NULL DEFAULT '0.00' COMMENT 'It holds the price per unit area of product.',
  `price_per_unit_calculation` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'It indicates whether price is to be calculated per unit area or according to size(A3/A4 etc).',
  `is_whitebase` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'It indicates whether whitebase printing is available or not.',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings_config`
--

LOCK TABLES `settings_config` WRITE;
/*!40000 ALTER TABLE `settings_config` DISABLE KEYS */;
INSERT INTO `settings_config` VALUES (1,30,4.00,0,1);
/*!40000 ALTER TABLE `settings_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shape_cat`
--

DROP TABLE IF EXISTS `shape_cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shape_cat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) NOT NULL DEFAULT '0',
  `status` int(1) NOT NULL DEFAULT '1',
  `sort_order` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shape_cat`
--

LOCK TABLES `shape_cat` WRITE;
/*!40000 ALTER TABLE `shape_cat` DISABLE KEYS */;
INSERT INTO `shape_cat` VALUES (6,'Primitives',1,0);
/*!40000 ALTER TABLE `shape_cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shape_cat_rel`
--

DROP TABLE IF EXISTS `shape_cat_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shape_cat_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `shape_id` int(5) NOT NULL DEFAULT '0',
  `category_id` int(5) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shape_cat_rel`
--

LOCK TABLES `shape_cat_rel` WRITE;
/*!40000 ALTER TABLE `shape_cat_rel` DISABLE KEYS */;
INSERT INTO `shape_cat_rel` VALUES (6,2,0),(7,2,0),(14,3,0),(15,3,0),(16,3,0),(17,3,0),(19,10,3),(22,14,5),(23,14,5),(24,13,5),(25,17,5),(26,15,6),(27,16,6),(28,17,6),(29,18,6),(30,19,6),(31,20,6),(32,21,6),(33,22,6),(34,23,6),(35,24,6),(36,25,6),(37,26,6),(38,27,6),(39,28,6),(40,29,6),(41,30,6),(42,31,6),(43,32,6),(44,33,6),(45,34,6),(46,35,6),(47,36,6),(48,37,6);
/*!40000 ALTER TABLE `shape_cat_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shape_tag_rel`
--

DROP TABLE IF EXISTS `shape_tag_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shape_tag_rel` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `shape_id` int(5) NOT NULL DEFAULT '0',
  `tag_id` int(5) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shape_tag_rel`
--

LOCK TABLES `shape_tag_rel` WRITE;
/*!40000 ALTER TABLE `shape_tag_rel` DISABLE KEYS */;
INSERT INTO `shape_tag_rel` VALUES (1,1,1),(2,1,2),(10,2,3),(11,2,4),(18,3,3),(19,3,4),(20,3,3),(21,3,4),(24,5,1),(25,6,1),(26,7,1),(27,8,1),(28,9,1),(30,11,1),(32,12,1),(33,10,1),(35,14,1),(36,14,1),(37,13,1);
/*!40000 ALTER TABLE `shape_tag_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shape_tags`
--

DROP TABLE IF EXISTS `shape_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shape_tags` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT 'na',
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shape_tags`
--

LOCK TABLES `shape_tags` WRITE;
/*!40000 ALTER TABLE `shape_tags` DISABLE KEYS */;
INSERT INTO `shape_tags` VALUES (1,'test',1),(2,'test3',1),(3,'fgfh',1),(4,'huu',1),(5,'test7',1);
/*!40000 ALTER TABLE `shape_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shapes`
--

DROP TABLE IF EXISTS `shapes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shapes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(50) NOT NULL DEFAULT 'na',
  `shape_name` varchar(100) NOT NULL DEFAULT 'na',
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `status` int(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shapes`
--

LOCK TABLES `shapes` WRITE;
/*!40000 ALTER TABLE `shapes` DISABLE KEYS */;
INSERT INTO `shapes` VALUES (15,'s_15','Shapes',0.00,1),(16,'s_16','Shapes',0.00,1),(17,'s_17','Shapes',0.00,1),(18,'s_18','Shapes',0.00,1),(19,'s_19','Shapes',0.00,1),(20,'s_20','Shapes',0.00,1),(21,'s_21','Shapes',0.00,1),(22,'s_22','Shapes',0.00,1),(23,'s_23','Shapes',0.00,1),(24,'s_24','Shapes',0.00,1),(25,'s_25','Shapes',0.00,1),(26,'s_26','Shapes',0.00,1),(27,'s_27','Shapes',0.00,1),(28,'s_28','Shapes',0.00,1),(29,'s_29','Shapes',0.00,1),(30,'s_30','Shapes',0.00,1),(31,'s_31','Shapes',0.00,1),(32,'s_32','Shapes',0.00,1),(33,'s_33','Shapes',0.00,1),(34,'s_34','Shapes',0.00,1),(35,'s_35','Shapes',0.00,1),(36,'s_36','Shapes',0.00,1),(37,'s_37','Shapes',0.00,1);
/*!40000 ALTER TABLE `shapes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping_record`
--

DROP TABLE IF EXISTS `shipping_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipping_record` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `quote_id` int(8) NOT NULL,
  `carrier` varchar(100) NOT NULL,
  `deliver_by` enum('pickup','shipping') NOT NULL DEFAULT 'shipping',
  `shipping_method` varchar(100) DEFAULT NULL COMMENT 'if deliver_by is shipping',
  `ship_price` float(10,2) NOT NULL,
  `ship_date` datetime NOT NULL,
  `tracking_no` varchar(100) DEFAULT NULL COMMENT 'if deliver_by is shipping',
  `tracking_url` varchar(100) DEFAULT NULL COMMENT 'if deliver_by is shipping',
  `dimension_l` float(10,2) NOT NULL,
  `dimension_w` float(10,2) NOT NULL,
  `dimension_h` float(10,2) NOT NULL,
  `dimension_unit` varchar(20) NOT NULL,
  `weight` float(10,2) NOT NULL,
  `weight_unit` varchar(20) NOT NULL,
  `printshop_id` int(8) NOT NULL,
  `created_date` datetime NOT NULL,
  `modified_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pk_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping_record`
--

LOCK TABLES `shipping_record` WRITE;
/*!40000 ALTER TABLE `shipping_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipping_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size_variant_additional_price`
--

DROP TABLE IF EXISTS `size_variant_additional_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `size_variant_additional_price` (
  `pk_id` int(10) NOT NULL AUTO_INCREMENT,
  `product_id` int(10) NOT NULL,
  `print_method_id` int(10) NOT NULL,
  `xe_size_id` int(10) NOT NULL,
  `percentage` float(5,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size_variant_additional_price`
--

LOCK TABLES `size_variant_additional_price` WRITE;
/*!40000 ALTER TABLE `size_variant_additional_price` DISABLE KEYS */;
/*!40000 ALTER TABLE `size_variant_additional_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_site_values`
--

DROP TABLE IF EXISTS `social_site_values`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social_site_values` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `site_id` int(5) NOT NULL,
  `key_index` varchar(60) NOT NULL,
  `key_value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_site_values`
--

LOCK TABLES `social_site_values` WRITE;
/*!40000 ALTER TABLE `social_site_values` DISABLE KEYS */;
INSERT INTO `social_site_values` VALUES (1,1,'client_id',NULL);
/*!40000 ALTER TABLE `social_site_values` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_sites`
--

DROP TABLE IF EXISTS `social_sites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social_sites` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_sites`
--

LOCK TABLES `social_sites` WRITE;
/*!40000 ALTER TABLE `social_sites` DISABLE KEYS */;
INSERT INTO `social_sites` VALUES (1,'Instagram');
/*!40000 ALTER TABLE `social_sites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_address_details`
--

DROP TABLE IF EXISTS `store_address_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_address_details` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `country_code` varchar(8) NOT NULL,
  `state_code` varchar(8) NOT NULL,
  `city` varchar(28) NOT NULL,
  `postcode` varchar(28) NOT NULL,
  `address_1` text NOT NULL,
  `address_2` text,
  `isdefault` enum('0','1') NOT NULL COMMENT '0->Disable 1->Enable',
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_address_details`
--

LOCK TABLES `store_address_details` WRITE;
/*!40000 ALTER TABLE `store_address_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_address_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_attributes`
--

DROP TABLE IF EXISTS `store_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_attributes` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `attr_key` varchar(20) NOT NULL,
  `attr_value` varchar(40) NOT NULL,
  `attr_sort_order` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_attributes`
--

LOCK TABLES `store_attributes` WRITE;
/*!40000 ALTER TABLE `store_attributes` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `svg_data`
--

DROP TABLE IF EXISTS `svg_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `svg_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerid` int(11) NOT NULL,
  `svg` varchar(50) NOT NULL,
  `date_created` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `svg_data`
--

LOCK TABLES `svg_data` WRITE;
/*!40000 ALTER TABLE `svg_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `svg_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `swatches`
--

DROP TABLE IF EXISTS `swatches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `swatches` (
  `pk_id` int(10) NOT NULL AUTO_INCREMENT,
  `attribute_id` bigint(10) NOT NULL DEFAULT '0',
  `hex_code` varchar(20) DEFAULT NULL,
  `image_name` varchar(35) DEFAULT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `swatches`
--

LOCK TABLES `swatches` WRITE;
/*!40000 ALTER TABLE `swatches` DISABLE KEYS */;
INSERT INTO `swatches` VALUES (1,8,'#0e3cc9',NULL),(2,7,'#14c939',NULL),(3,6,'#ec0606',NULL);
/*!40000 ALTER TABLE `swatches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sync_order`
--

DROP TABLE IF EXISTS `sync_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sync_order` (
  `pk_id` int(10) NOT NULL AUTO_INCREMENT,
  `order_status` enum('0','1') NOT NULL DEFAULT '0' COMMENT '0=>pending, 1=>printed',
  `orderId` varchar(10) NOT NULL,
  `fileName` varchar(80) DEFAULT NULL,
  `last_sync_on` datetime DEFAULT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0' COMMENT '0=>failed, 1=>successful',
  `order_artwork_status` enum('pending','change','approved') NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sync_order`
--

LOCK TABLES `sync_order` WRITE;
/*!40000 ALTER TABLE `sync_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `sync_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabs`
--

DROP TABLE IF EXISTS `tabs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tabs` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `symbol` varchar(20) NOT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'It indicates whether the tab is default or not.',
  `default_subtab_id` int(3) NOT NULL DEFAULT '0' COMMENT 'It specifies the deafault subtab of a tab. Value is 0 if the tab doesn''t contain any subtab.',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `is_admin_display` tinyint(1) NOT NULL DEFAULT '1',
  `allow_default` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabs`
--

LOCK TABLES `tabs` WRITE;
/*!40000 ALTER TABLE `tabs` DISABLE KEYS */;
INSERT INTO `tabs` VALUES (1,'Product','P',0,0,1,0,1),(2,'Graphics','D',1,4,1,1,1),(3,'Text','T',0,5,1,1,1),(4,'Images','I',0,0,1,1,0),(5,'Name & Number','N',0,0,1,1,1),(6,'Variable Data Printing','VDP',0,0,1,1,1);
/*!40000 ALTER TABLE `tabs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'jjkk'),(2,'khk'),(3,'hhh'),(4,'jhj'),(5,'test4'),(6,'test1'),(7,'test8'),(8,'test');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_group`
--

DROP TABLE IF EXISTS `task_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_group`
--

LOCK TABLES `task_group` WRITE;
/*!40000 ALTER TABLE `task_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_quote_rel`
--

DROP TABLE IF EXISTS `task_quote_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_quote_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_id` int(11) NOT NULL,
  `quote_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_quote_rel`
--

LOCK TABLES `task_quote_rel` WRITE;
/*!40000 ALTER TABLE `task_quote_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_quote_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_status`
--

DROP TABLE IF EXISTS `task_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_status` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `color_code` varchar(10) DEFAULT '#FFFFFF',
  `sort_order` int(5) NOT NULL,
  `is_fixed` enum('true','false') NOT NULL,
  `kanban_status` enum('true','false') NOT NULL DEFAULT 'true' COMMENT 'true- enable, false-disable',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_status`
--

LOCK TABLES `task_status` WRITE;
/*!40000 ALTER TABLE `task_status` DISABLE KEYS */;
INSERT INTO `task_status` VALUES (1,'Yet To Start','#2c8998',1,'true','true'),(2,'In Progress','#3c91fd',2,'true','true'),(3,'Ready To Print','#2c8998',3,'false','true'),(4,'Art Separation','#3c91fd',4,'false','true'),(5,'Packaging','#df5427',5,'false','true'),(6,'Burn Screens','#df5434',6,'false','true'),(7,'Printing','#dg5934',7,'false','true'),(8,'Quality Check','#df5234',8,'false','true'),(9,'Completed','#df7464',9,'true','true');
/*!40000 ALTER TABLE `task_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_ref_id` varchar(25) NOT NULL,
  `assign_to` int(11) NOT NULL DEFAULT '0',
  `task_title` text NOT NULL,
  `task_due_date` date NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0' COMMENT '1 - Complete, 0 - Incomplete',
  `created_date` datetime NOT NULL,
  `modified_date` datetime NOT NULL,
  `task_status_id` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_category`
--

DROP TABLE IF EXISTS `template_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sort_order` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_category`
--

LOCK TABLES `template_category` WRITE;
/*!40000 ALTER TABLE `template_category` DISABLE KEYS */;
INSERT INTO `template_category` VALUES (1,'Birthday',0),(2,'Holiday',0),(3,'Friendship Day',0),(4,'Funny Tshirts',0),(5,'Social Media',0),(6,'Children',0);
/*!40000 ALTER TABLE `template_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_category_printmethod_rel`
--

DROP TABLE IF EXISTS `template_category_printmethod_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_category_printmethod_rel` (
  `print_method_id` int(11) NOT NULL,
  `temp_category_id` int(11) NOT NULL,
  `is_enable` enum('1','0') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_category_printmethod_rel`
--

LOCK TABLES `template_category_printmethod_rel` WRITE;
/*!40000 ALTER TABLE `template_category_printmethod_rel` DISABLE KEYS */;
INSERT INTO `template_category_printmethod_rel` VALUES (1,1,'0'),(1,6,'0'),(1,3,'0'),(1,4,'0'),(1,2,'0'),(1,5,'0'),(3,1,'0'),(3,6,'0'),(3,3,'0'),(3,4,'0'),(3,2,'0'),(3,5,'0'),(4,1,'0'),(4,6,'0'),(4,3,'0'),(4,4,'0'),(4,2,'0'),(4,5,'0'),(5,1,'0'),(5,6,'0'),(5,3,'0'),(5,4,'0'),(5,2,'0'),(5,5,'0'),(6,1,'0'),(6,6,'0'),(6,3,'0'),(6,4,'0'),(6,2,'0'),(6,5,'0');
/*!40000 ALTER TABLE `template_category_printmethod_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_printmethod_rel`
--

DROP TABLE IF EXISTS `template_printmethod_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_printmethod_rel` (
  `print_method_id` int(5) NOT NULL,
  `template_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_printmethod_rel`
--

LOCK TABLES `template_printmethod_rel` WRITE;
/*!40000 ALTER TABLE `template_printmethod_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `template_printmethod_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_product_rel`
--

DROP TABLE IF EXISTS `template_product_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_product_rel` (
  `template_id` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_product_rel`
--

LOCK TABLES `template_product_rel` WRITE;
/*!40000 ALTER TABLE `template_product_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `template_product_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_state`
--

DROP TABLE IF EXISTS `template_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `json_data` longtext NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `template_image` varchar(100) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `sub_id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `pvid` int(11) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` text,
  `used_color` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_state`
--

LOCK TABLES `template_state` WRITE;
/*!40000 ALTER TABLE `template_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `template_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_state_rel`
--

DROP TABLE IF EXISTS `template_state_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_state_rel` (
  `pk_id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id` int(11) DEFAULT NULL,
  `temp_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_state_rel`
--

LOCK TABLES `template_state_rel` WRITE;
/*!40000 ALTER TABLE `template_state_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `template_state_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_subcategory`
--

DROP TABLE IF EXISTS `template_subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_subcategory` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `cat_id` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_subcategory`
--

LOCK TABLES `template_subcategory` WRITE;
/*!40000 ALTER TABLE `template_subcategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `template_subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_tags`
--

DROP TABLE IF EXISTS `template_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_tags` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_tags`
--

LOCK TABLES `template_tags` WRITE;
/*!40000 ALTER TABLE `template_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `template_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_tags_rel`
--

DROP TABLE IF EXISTS `template_tags_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `template_tags_rel` (
  `template_id` int(5) NOT NULL,
  `tag_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_tags_rel`
--

LOCK TABLES `template_tags_rel` WRITE;
/*!40000 ALTER TABLE `template_tags_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `template_tags_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `textart`
--

DROP TABLE IF EXISTS `textart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `textart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `textArtfontList` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `textart`
--

LOCK TABLES `textart` WRITE;
/*!40000 ALTER TABLE `textart` DISABLE KEYS */;
/*!40000 ALTER TABLE `textart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `textfx_charecters`
--

DROP TABLE IF EXISTS `textfx_charecters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `textfx_charecters` (
  `pk_id` int(10) NOT NULL AUTO_INCREMENT,
  `textfx_style_id` smallint(10) NOT NULL,
  `alphabate` varchar(50) NOT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `textfx_charecters`
--

LOCK TABLES `textfx_charecters` WRITE;
/*!40000 ALTER TABLE `textfx_charecters` DISABLE KEYS */;
INSERT INTO `textfx_charecters` VALUES (1,1,'a'),(2,1,'h'),(3,1,'f'),(4,1,'c'),(5,1,'j'),(6,1,'g'),(7,1,'b'),(8,1,'e'),(9,1,'k'),(10,1,'d'),(11,1,'i'),(12,1,'l'),(13,2,'a'),(14,2,'c'),(15,2,'d'),(16,2,'e'),(17,2,'f'),(18,2,'g'),(19,2,'h'),(20,2,'i'),(21,2,'j'),(22,2,'k'),(23,2,'m'),(24,2,'n'),(25,2,'o'),(26,2,'p'),(27,2,'q'),(28,2,'r'),(29,2,'s'),(30,2,'t'),(31,2,'u'),(32,2,'l'),(33,2,'b'),(34,2,'v'),(35,2,'w'),(36,2,'x'),(37,2,'y'),(38,2,'z'),(45,9,'a'),(46,9,'j'),(47,9,'t'),(48,9,'p'),(49,9,'c'),(50,9,'w'),(51,9,'i'),(52,9,'v'),(53,9,'n'),(54,9,'x'),(55,9,'b'),(56,9,'m'),(57,9,'y'),(58,9,'g'),(59,9,'h'),(60,9,'l'),(61,9,'r'),(62,9,'d'),(63,9,'s'),(64,9,'u'),(65,9,'k'),(66,9,'f'),(67,9,'o'),(68,9,'e'),(69,9,'q'),(70,9,'z');
/*!40000 ALTER TABLE `textfx_charecters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `textfx_style`
--

DROP TABLE IF EXISTS `textfx_style`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `textfx_style` (
  `pk_id` smallint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `price` float(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `textfx_style`
--

LOCK TABLES `textfx_style` WRITE;
/*!40000 ALTER TABLE `textfx_style` DISABLE KEYS */;
INSERT INTO `textfx_style` VALUES (1,'style1',0.00),(2,'style2',0.00),(9,'style3',0.00);
/*!40000 ALTER TABLE `textfx_style` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `textonpath`
--

DROP TABLE IF EXISTS `textonpath`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `textonpath` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(75) DEFAULT NULL,
  `svg_image` varchar(200) DEFAULT NULL,
  `thumb_image` varchar(200) DEFAULT NULL,
  `price` double(12,2) NOT NULL,
  `textonpath_id` varchar(100) DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `textonpath`
--

LOCK TABLES `textonpath` WRITE;
/*!40000 ALTER TABLE `textonpath` DISABLE KEYS */;
/*!40000 ALTER TABLE `textonpath` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theme_color`
--

DROP TABLE IF EXISTS `theme_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `theme_color` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `theme_type` enum('default','custom') NOT NULL,
  `status` enum('0','1') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theme_color`
--

LOCK TABLES `theme_color` WRITE;
/*!40000 ALTER TABLE `theme_color` DISABLE KEYS */;
INSERT INTO `theme_color` VALUES (1,'#01b61b','default','1'),(2,'','custom','0');
/*!40000 ALTER TABLE `theme_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `translate`
--

DROP TABLE IF EXISTS `translate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `translate` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `content_id` int(10) DEFAULT NULL,
  `translate_text` varchar(100) DEFAULT NULL,
  `language_id` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `translate`
--

LOCK TABLES `translate` WRITE;
/*!40000 ALTER TABLE `translate` DISABLE KEYS */;
/*!40000 ALTER TABLE `translate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `units`
--

DROP TABLE IF EXISTS `units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `units` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `view_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `units`
--

LOCK TABLES `units` WRITE;
/*!40000 ALTER TABLE `units` DISABLE KEYS */;
/*!40000 ALTER TABLE `units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload_space_details`
--

DROP TABLE IF EXISTS `upload_space_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload_space_details` (
  `customer_id` int(11) NOT NULL,
  `max_size` double(5,2) NOT NULL,
  `date_modified` date NOT NULL,
  `payment` varchar(100) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload_space_details`
--

LOCK TABLES `upload_space_details` WRITE;
/*!40000 ALTER TABLE `upload_space_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload_space_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `resetPasswordKey` varchar(50) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `userType` enum('0','1') NOT NULL DEFAULT '0',
  `token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_department`
--

DROP TABLE IF EXISTS `user_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1' COMMENT '1 - Active, 0 - Inactive',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_department`
--

LOCK TABLES `user_department` WRITE;
/*!40000 ALTER TABLE `user_department` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_department_rel`
--

DROP TABLE IF EXISTS `user_department_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_department_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_department_rel`
--

LOCK TABLES `user_department_rel` WRITE;
/*!40000 ALTER TABLE `user_department_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_department_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_privilege_rel`
--

DROP TABLE IF EXISTS `user_privilege_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_privilege_rel` (
  `u_id` int(10) NOT NULL,
  `p_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_privilege_rel`
--

LOCK TABLES `user_privilege_rel` WRITE;
/*!40000 ALTER TABLE `user_privilege_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_privilege_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_privileges`
--

DROP TABLE IF EXISTS `user_privileges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_privileges` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `privilege` varchar(30) NOT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_privileges`
--

LOCK TABLES `user_privileges` WRITE;
/*!40000 ALTER TABLE `user_privileges` DISABLE KEYS */;
INSERT INTO `user_privileges` VALUES (1,'Products','0'),(2,'Orders','0'),(3,'Graphics','0'),(4,'Color Palettes','0'),(5,'Text','0'),(6,'Settings','0'),(7,'Print Profile','0'),(8,'Production Hub','0'),(9,'Customers','0');
/*!40000 ALTER TABLE `user_privileges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_slot`
--

DROP TABLE IF EXISTS `user_slot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_slot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slot_id` int(11) DEFAULT '0',
  `user_id` varchar(50) DEFAULT NULL,
  `json_data` longtext,
  `status` enum('0','1') DEFAULT '0',
  `date_created` timestamp NULL DEFAULT NULL,
  `date_midified` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `slot_image` varchar(20) DEFAULT '0.svg',
  `uid` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_slot`
--

LOCK TABLES `user_slot` WRITE;
/*!40000 ALTER TABLE `user_slot` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variant_additional_prices`
--

DROP TABLE IF EXISTS `variant_additional_prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `variant_additional_prices` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `productid` varchar(50) NOT NULL,
  `variantid` varchar(50) NOT NULL,
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `print_type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variant_additional_prices`
--

LOCK TABLES `variant_additional_prices` WRITE;
/*!40000 ALTER TABLE `variant_additional_prices` DISABLE KEYS */;
/*!40000 ALTER TABLE `variant_additional_prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_info`
--

DROP TABLE IF EXISTS `vendor_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendor_info` (
  `vendor_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `vendor_fax` varchar(20) NOT NULL,
  `vendor_account_number` varchar(30) NOT NULL,
  `country_code` varchar(28) NOT NULL,
  `state_code` varchar(28) NOT NULL,
  `billing_city` varchar(50) NOT NULL,
  `billing_postcode` varchar(15) NOT NULL,
  `billing_address_1` text NOT NULL,
  `billing_address2` text NOT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_info`
--

LOCK TABLES `vendor_info` WRITE;
/*!40000 ALTER TABLE `vendor_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `version_manage`
--

DROP TABLE IF EXISTS `version_manage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `version_manage` (
  `pk_id` int(4) NOT NULL AUTO_INCREMENT,
  `current_version` varchar(10) NOT NULL,
  `schema_version` int(11) NOT NULL DEFAULT '19',
  `version_description` text NOT NULL,
  `installed_on` date DEFAULT NULL,
  `updated_on` date DEFAULT NULL,
  PRIMARY KEY (`pk_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `version_manage`
--

LOCK TABLES `version_manage` WRITE;
/*!40000 ALTER TABLE `version_manage` DISABLE KEYS */;
INSERT INTO `version_manage` VALUES (1,'v8.6.2',70,'ce00848 Merge pull request #6824 from riaxe/develop','2019-12-09','2019-12-09');
/*!40000 ALTER TABLE `version_manage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wordcloud`
--

DROP TABLE IF EXISTS `wordcloud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wordcloud` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `file_name` varchar(50) DEFAULT NULL,
  `price` double(12,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wordcloud`
--

LOCK TABLES `wordcloud` WRITE;
/*!40000 ALTER TABLE `wordcloud` DISABLE KEYS */;
INSERT INTO `wordcloud` VALUES (14,'Word Cloud','w_14.png',0.00),(13,'Word Cloud','w_13.png',0.00),(12,'Word Cloud','w_12.png',0.00),(15,'Word Cloud','w_15.png',0.00),(16,'Word Cloud','w_16.png',0.00);
/*!40000 ALTER TABLE `wordcloud` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-09 20:05:12
