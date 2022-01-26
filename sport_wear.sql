CREATE DATABASE  IF NOT EXISTS `sport_wear` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sport_wear`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sport_wear
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito_de_compras`
--

DROP TABLE IF EXISTS `carrito_de_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito_de_compras` (
  `idcarrito_de_compras` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `usuario_id` int NOT NULL,
  `producto_talle_id` int NOT NULL,
  `sum_precio` decimal(10,0) NOT NULL,
  PRIMARY KEY (`idcarrito_de_compras`),
  KEY `fk_carrito_usuario_idx` (`usuario_id`),
  KEY `fk_carrito_produtalle_id_idx` (`producto_talle_id`),
  CONSTRAINT `fk_carrito_produtalle_id` FOREIGN KEY (`producto_talle_id`) REFERENCES `producto_talle` (`idproducto_talle`),
  CONSTRAINT `fk_carrito_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito_de_compras`
--

LOCK TABLES `carrito_de_compras` WRITE;
/*!40000 ALTER TABLE `carrito_de_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito_de_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `idlogin` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`idlogin`),
  KEY `fk_login_usuario_id_idx` (`usuario_id`),
  CONSTRAINT `fk_login_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `idmarca` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `marca_tipocalzado_id` int NOT NULL,
  `producto_id` int NOT NULL,
  PRIMARY KEY (`idmarca`),
  KEY `fk_marca_marcatipo_id_idx` (`marca_tipocalzado_id`),
  CONSTRAINT `fk_marca_marcatipo_id` FOREIGN KEY (`marca_tipocalzado_id`) REFERENCES `marca_tipocalzado` (`tipo_calzado_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca_tipocalzado`
--

DROP TABLE IF EXISTS `marca_tipocalzado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca_tipocalzado` (
  `idmarca_tipocalzado` int NOT NULL,
  `tipo_calzado_id` int NOT NULL,
  `nombre_marca_id` int NOT NULL,
  PRIMARY KEY (`idmarca_tipocalzado`),
  KEY `fk_marcatipocalzado_tipocalzado_id_idx` (`tipo_calzado_id`),
  KEY `fk_marcatipocalzado_marca_id_idx` (`nombre_marca_id`),
  CONSTRAINT `fk_marcatipocalzado_marca_id` FOREIGN KEY (`nombre_marca_id`) REFERENCES `marca` (`idmarca`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_marcatipocalzado_tipocalzado_id` FOREIGN KEY (`tipo_calzado_id`) REFERENCES `tipo_calzado` (`idtipo_calzado`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca_tipocalzado`
--

LOCK TABLES `marca_tipocalzado` WRITE;
/*!40000 ALTER TABLE `marca_tipocalzado` DISABLE KEYS */;
/*!40000 ALTER TABLE `marca_tipocalzado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `color` varchar(25) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `image` varchar(100) NOT NULL,
  `tipo_calzado_id` int NOT NULL,
  `marca_tipocalzado_id` int NOT NULL,
  `marca_id` int NOT NULL,
  `producto_talle_id` int NOT NULL,
  PRIMARY KEY (`idproducto`),
  KEY `fk_producto_tipocalzado_id_idx` (`tipo_calzado_id`),
  KEY `fk_producto_marca_id_idx` (`marca_id`),
  KEY `fk_producto_marcatipo_id_idx` (`marca_tipocalzado_id`),
  KEY `fk_producto_produtalle_id_idx` (`producto_talle_id`),
  CONSTRAINT `fk_prodcuto_marca_id` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`idmarca`),
  CONSTRAINT `fk_producto_produtalle_id` FOREIGN KEY (`producto_talle_id`) REFERENCES `producto_talle` (`idproducto_talle`),
  CONSTRAINT `fk_producto_tipocalzado_id` FOREIGN KEY (`tipo_calzado_id`) REFERENCES `tipo_calzado` (`marca_tipocalzado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_talle`
--

DROP TABLE IF EXISTS `producto_talle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_talle` (
  `idproducto_talle` int NOT NULL AUTO_INCREMENT,
  `producto_id` int NOT NULL,
  `talle_id` int NOT NULL,
  PRIMARY KEY (`idproducto_talle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_talle`
--

LOCK TABLES `producto_talle` WRITE;
/*!40000 ALTER TABLE `producto_talle` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_talle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talle`
--

DROP TABLE IF EXISTS `talle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talle` (
  `idtalle` int NOT NULL AUTO_INCREMENT,
  `talle` varchar(2) NOT NULL,
  `producto_talle_id` int NOT NULL,
  PRIMARY KEY (`idtalle`),
  KEY `fk_talle_productotalle_id_idx` (`producto_talle_id`),
  CONSTRAINT `fk_talle_productotalle_id` FOREIGN KEY (`producto_talle_id`) REFERENCES `producto_talle` (`idproducto_talle`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talle`
--

LOCK TABLES `talle` WRITE;
/*!40000 ALTER TABLE `talle` DISABLE KEYS */;
/*!40000 ALTER TABLE `talle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_calzado`
--

DROP TABLE IF EXISTS `tipo_calzado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_calzado` (
  `idtipo_calzado` int NOT NULL AUTO_INCREMENT,
  `tipo_de_calzado` varchar(45) NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  `genero` varchar(9) NOT NULL,
  `marca_tipocalzado_id` int NOT NULL,
  PRIMARY KEY (`idtipo_calzado`),
  KEY `fk_tipocalzado_marcatipo_id_idx` (`marca_tipocalzado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_calzado`
--

LOCK TABLES `tipo_calzado` WRITE;
/*!40000 ALTER TABLE `tipo_calzado` DISABLE KEYS */;
INSERT INTO `tipo_calzado` VALUES (1,'Deportivo','Calzado para realizar todo tipo de deportes, para mayor especificación mirar el modelo de cada calzado','masculino',1),(2,'Casual','Calzado no específico para realizar deportes sino calzado urbano para mayor comodidad en la actividad diaria','masculino',1),(3,'Trekking','Calzado para realizar caminatas y actividades outdoor y de montaña,','masculino',1),(4,'Fulbol','Calzado para la practica de fútbol al aire libre e indoor','masculino',1),(5,'Deportivo','Calzado para realizar todo tipo de deportes, para mayor especificación mirar el modelo de cada calzado','femenino',1),(6,'Casual','Calzado no específico para realizar deportes sino calzado urbano para mayor comodidad en la actividad diaria','femenino',1),(7,'Trekking','Calzado para realizar caminatas y actividades outdoor y de montaña,','femenino',1),(8,'Fulbol','Calzado para la practica de fútbol al aire libre e indoor','femenino',1);
/*!40000 ALTER TABLE `tipo_calzado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `profile_image` varchar(100) DEFAULT NULL,
  `carrito_id` int NOT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'juan','perez','juan@gmail.com','juan','asdkljflasdkj',1,1),(2,'jose','gomez','jose@gmail.com','jose','asdfjhaskdjjkklj',1,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 18:48:04
