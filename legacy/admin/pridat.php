<LINK rel="stylesheet" type="text/css" href="styluj_admin.css">

<form method="post" action="pridat.php">
  <fieldset>
        <label for="nadpis">Nadpis:</label>
        <input type="text" name="nadpis"><BR>
        <label for="obsah">Obsah:</label>
        <textarea name="obsah" cols="50" rows="10"></textarea><BR>
        <input id="enter" type="submit" name="enter">
  </fieldset>
</form>

<?php


if ((empty ($_POST)) and (empty ($_POST['nadpis'])) and (empty ($_POST['obsah']))) {

}
else
{
  include ("config.php");

  $nadpis = empty($_POST['nadpis']) ? "" : $_POST['nadpis'];
  $obsah = empty($_POST['obsah']) ? "" : $_POST['obsah'];

  mysql_query('INSERT INTO clanky (nadpis,obsah) VALUES ("'.$nadpis.'","'.$obsah.'")') or die(mysql_error());
}

?>

<A HREF="index.php">zpet</A>
    


