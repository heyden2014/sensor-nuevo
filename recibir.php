<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$temperatura=$data->temperatura;
$humedad=$data->humedad;

//echo "\nTemperatura: ".$temperatura."\n";
//echo "Humedad: ".$humedad;

$datos=[
    "temperatura" => $temperatura,
    "humedad" => $humedad];

echo json_encode($datos);

// Ejemplo para guardar en archivo
//file_put_contents("datos.txt", "Temp: $temperatura - Hum: $humedad\n", FILE_APPEND);
?>