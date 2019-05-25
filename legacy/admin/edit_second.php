<LINK rel="stylesheet" type="text/css" href="styluj_admin.css">

<?php
include ("config.php");

$id=$_GET["vase_id"];
$obsah = empty($_POST['obsah']) ? "" : $_POST['obsah'];
 
mysql_query('UPDATE clanky SET obsah = "'.$obsah.'" WHERE id='.$id); 

?>

<A HREF="index.php">zpet</A>