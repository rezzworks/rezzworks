<?php

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "usbw");
define("DB_NAME", "db_name");

function db_connect(){
	$dbc = mysqli_connect(DB_HOST,DB_USER,DB_PASS) or die("error message");
	mysqli_select_db($dbc, DB_NAME);
	return $dbc;
}

$dbc = db_connect();





//$dbc = mysqli_connect("localhost:8081","root","usbw","media_collection");

// Check connection
/*if(mysqli_connect_errno())
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}*/

?>

