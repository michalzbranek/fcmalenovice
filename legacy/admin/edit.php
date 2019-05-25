<LINK rel="stylesheet" type="text/css" href="styluj_admin.css">

<?php
include ("config.php");
$id=$_GET["vase_id"];
$vysledek=mysql_query("SELECT * FROM clanky WHERE id='$id'") or die(mysql_error());
$clanky=MySQL_Fetch_Array($vysledek);
$_obsah=$clanky['obsah'];
?>

<form method="post" action="edit_second.php?vase_id=<?php echo $id ?>">
  <fieldset>
        <label for="obsah">Obsah:</label>
        <textarea name="obsah" cols="50" rows="10"><?php echo $_obsah ?></textarea><BR>
        <input type="submit" name="enter">
  </fieldset>
</form>


