<?php
header("Access-Control-Allow-Origin: *");

$con = mysqli_connect("127.0.0.1", "root", "", "feeds") or die ("Could not connect database");

if (!$con) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
