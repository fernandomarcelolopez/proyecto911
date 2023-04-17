<?php
$nombre=$_GET['username'];
$clave=$_GET['password'];

IF ($nombre=="flopez" and $clave=="fer123")
    {
        $respuesta = array("respcode"=>"200", "conexion"=>"001", "username"=> $nombre , "password"=>$clave);
        $resp=json_encode($respuesta);
        echo $resp;
    }
else {
    $respuesta = array("respcode"=>"400", "razon"=>"password incorrecta");
    $resp=json_encode($respuesta);
    echo $resp;
}
?>