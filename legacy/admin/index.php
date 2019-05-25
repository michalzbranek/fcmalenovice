<LINK rel="stylesheet" type="text/css" href="styluj_admin.css">

<?php
session_start();
if ($_SESSION["logged"]==true)

{

$akce = empty($_GET['akce']) ? null : (string)$_GET['akce'];
	 
	 
	    switch ($akce) {
	            case "pridat":
	                require_once 'pridat.php';
	                break;
	            case "zobraz":
	                require_once 'zobraz.php';
	                break;
	            case "odhlasit":
	                require_once 'odhlasit.php';
	                break;
	            default:
                if($akce == "")
	{
	                    require_once 'uvod.php';
	                    } else {
	                    echo 'stranka nenalezena!';
	                }
	        }
}

else

{
?>

<form method="post" action="prihlas.php">
  <fieldset>
    <legend>Login:</legend>
    <label for="jmeno">Name:</label>
    <input type="text" name="jmeno"><BR>
    <label for="heslo">Password:</label>
    <input type="password" name="heslo"><BR>
    <input id="enter" type="submit" name="enter">
  </fieldset>
</form>
<?php
}
?>