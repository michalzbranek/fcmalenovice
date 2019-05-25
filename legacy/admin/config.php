<?php
  define("SQL_HOST","mysql.moxo.cz");
  define("SQL_DBNAME","u188881219_malen");
  define("SQL_USERNAME","u188881219_zbran");
  define("SQL_PASSWORD","stfumiabot268");
  mysql_connect(SQL_HOST, SQL_USERNAME, SQL_PASSWORD);
  mysql_select_db(SQL_DBNAME);
  mysql_query("SET NAMES UTF8");
  mysql_query("SET character_set_results=UTF-8"); 
  mysql_query("SET character_set_connection=UTF-8"); 
  mysql_query("SET character_set_client=UTF-8");
?>
