<?php

//crear variables de entorno
$servername = "localhost";
$username = "basico";
$password = "Año2023f3rn4nd0";

//crear conexion a la base de datos
$iden = mysqli_connect($servername, $username, $password);

//chequear conexion
IF(!$iden)
{ 
	die("Error: No se pudo conectar"); 
}	
IF(!mysqli_select_db($iden, 'sistema')) 
{
	die("Error: No existe la base de datos");
}
?>
