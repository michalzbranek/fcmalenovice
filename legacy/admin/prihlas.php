<?php
if (($_POST["jmeno"]=="zbrana") and ($_POST["heslo"]=="zbrana"))
  {
  session_start();
  session_register("logged");
  $_SESSION["logged"]=true;
  include ("config.php");
  header("Location: /admin/index.php");
  }
  
  else
  
  {
  header("Location: /admin/index.php");
  }


?>