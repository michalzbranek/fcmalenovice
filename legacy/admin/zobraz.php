<LINK rel="stylesheet" type="text/css" href="styluj_admin.css">

<?php
include ("config.php");
$vysledek=mysql_query("select * from clanky");
?>

<TABLE>
<TR>
<th>nadpis</th>
<th>obsah</th>
<th>delete</th>
<th>edit</th>
</TR>
<?php

while ($clanky=MySQL_Fetch_Array($vysledek))
{
  $id=$clanky["id"];

  ?>

  <TR>
  <TD><?php echo $clanky["nadpis"] ?></TD>
  <TD><?php echo $clanky["obsah"] ?></TD>
  <TD><A HREF="delete.php?vase_id=<?php echo $id ?>">smazani clanku</A></TD>
  <TD><A HREF="edit.php?vase_id=<?php echo $id ?>">editace clanku</A></TD>
  </TR>

  <?php
}     
?>
</TABLE>
<A HREF="index.php">zpet</A>