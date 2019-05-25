<?php
include ("config.php");
$id=$_GET["vase_id"];
mysql_query("DELETE FROM clanky WHERE id='$id' LIMIT 1") or die(mysql_error());
?>
<A HREF="index.php">zpet</A>
