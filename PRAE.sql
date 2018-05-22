-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: PRAE
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO,POSTGRESQL' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table "categorias"
--

DROP TABLE IF EXISTS "categorias";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "categorias" (
  "id" bigint NOT NULL,
  "nome" text NOT NULL,
  "responsavel" text,
  "email" text,
  "fone" varchar(255) DEFAULT NULL,
  "rua" text NOT NULL,
  "numero" text NOT NULL,
  "bairro" text NOT NULL,
  "created_at" timestamp NULL DEFAULT NULL,
  "updated_at" timestamp NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "categorias"
--
BEGIN;
LOCK TABLE "categorias";
/*!40000 ALTER TABLE "categorias" DISABLE KEYS */;
INSERT INTO "categorias" VALUES (1,'Auxilio Moradia','COORDENADORIA DE ASSISTÊNCIA ESTUDANTIL','prae@ufc.br','Benfica','Rua Paulino Nogueira','315 - Bloco III - 1° Andar','Benfica','2018-03-22 19:23:34','2018-03-28 19:47:34'),(2,'Categoria 2','---','---','---','---','---','---','2018-04-11 21:49:19','2018-04-11 21:49:19');
COMMIT;
/*!40000 ALTER TABLE "categorias" ENABLE KEYS */;

--
-- Table structure for table "descricoes"
--

DROP TABLE IF EXISTS "descricoes";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "descricoes" (
  "id" bigint NOT NULL,
  "titulo" text NOT NULL,
  "texto" text NOT NULL,
  "categoria_id" bigint NOT NULL,
  "created_at" timestamp NULL DEFAULT NULL,
  "updated_at" timestamp NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "descricoes"
--

BEGIN;
LOCK TABLE "descricoes";
/*!40000 ALTER TABLE "descricoes" DISABLE KEYS */;
INSERT INTO "descricoes" VALUES (1,'Auxílio Moradia','O Programa Auxílio Moradia tem por objetivo viabilizar a permanência de estudantes matriculados nos Cursos de Graduação dos Campi da Universidade Federal do Ceará (UFC) em Sobral, Cariri e Quixadá, em comprovada situação de vulnerabilidade econômica, assegurando-lhes auxílio institucional para complementação de despesas com moradia e alimentação durante todo o período do curso ou enquanto persistir a mesma situação.\r\n\r\nImportante! A vinculação dos estudantes ao Programa Auxílio Moradia não os impede de receber, por mérito, qualquer uma das bolsas dos diversos programas da UFC, de agências de fomento ou de empresas.',1,'2018-03-22 21:06:07','2018-03-28 19:47:13');
COMMIT;
/*!40000 ALTER TABLE "descricoes" ENABLE KEYS */;

--
-- Table structure for table "documentos"
--

DROP TABLE IF EXISTS "documentos";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "documentos" (
  "id" bigint NOT NULL,
  "categoria_id" bigint NOT NULL,
  "rota" text NOT NULL,
  "nome" text NOT NULL,
  "created_at" timestamp NULL DEFAULT NULL,
  "updated_at" timestamp NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "documentos"
--

BEGIN;
LOCK TABLE "documentos";
/*!40000 ALTER TABLE "documentos" DISABLE KEYS */;
INSERT INTO "documentos" VALUES (7,1,'1/Exemplo','Exemplo','2018-04-10 21:36:24','2018-04-10 21:36:24'),(8,1,'1/Relatorio','Relatorio','2018-04-10 21:37:27','2018-04-10 21:37:27');
COMMIT;
/*!40000 ALTER TABLE "documentos" ENABLE KEYS */;

--
-- Table structure for table "migrations"
--

DROP TABLE IF EXISTS "migrations";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "migrations" (
  "id" bigint NOT NULL,
  "migration" varchar(255) NOT NULL,
  "batch" integer NOT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "migrations"
--

BEGIN;
LOCK TABLE "migrations";
/*!40000 ALTER TABLE "migrations" DISABLE KEYS */;
INSERT INTO "migrations" VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2018_03_15_194109_create_categorias_table',1),(4,'2018_03_20_183411_create_descricoes_table',1),(5,'2018_03_20_183457_create_documentos_table',1);
COMMIT;
/*!40000 ALTER TABLE "migrations" ENABLE KEYS */;

--
-- Table structure for table "password_resets"
--

DROP TABLE IF EXISTS "password_resets";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "password_resets" (
  "email" varchar(255) NOT NULL,
  "token" varchar(255) NOT NULL,
  "created_at" timestamp NULL DEFAULT NULL,
  CONSTRAINT "password_resets_email_index" UNIQUE ("email")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "password_resets"
--

/*LOCK TABLE "password_resets";*/
/*!40000 ALTER TABLE "password_resets" DISABLE KEYS */;
/*!40000 ALTER TABLE "password_resets" ENABLE KEYS */;

--
-- Table structure for table "usuarios"
--

DROP TABLE IF EXISTS "usuarios";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "usuarios" (
  "id" bigint NOT NULL,
  "nome" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL,
  "usuario" varchar(255) NOT NULL,
  "senha" varchar(255)NOT NULL,
  "remember_token" varchar(100) DEFAULT NULL,
  "created_at" timestamp NULL DEFAULT NULL,
  "updated_at" timestamp NULL DEFAULT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "usuarios_email_unique" UNIQUE ("email")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "usuarios"
--

BEGIN;
LOCK TABLE "usuarios";
/*!40000 ALTER TABLE "usuarios" DISABLE KEYS */;
INSERT INTO "usuarios" VALUES (1,'admin','admin@admin','admin','$2y$10$/FzOcCGm4TtleSbiFFc.euHN5.hXBwVe2N7dcUqOY5j5TrZch3586','8A8tp6CWNt3HpzKugJwMFxW0aj0KkE4aQfc6ADiGwd7Hh4kNuQuUm7g3vA5h','2018-03-20 22:34:17','2018-03-20 22:34:17'),(3,'Usuario 22','user2@user2','User2','$2y$10$SQFtaVA8tfV99eyOIvorK.Du/aCY0nagPqQgwOm6mS/wADeDEwn.q',NULL,'2018-03-27 22:19:02','2018-03-27 22:49:32');
COMMIT;
/*!40000 ALTER TABLE "usuarios" ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-26 14:27:30
