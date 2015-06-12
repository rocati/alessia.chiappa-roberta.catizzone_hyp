<?php

// creo array location
$location = array();

// creo array per tutte le location

require_once'dbclass.php';

$sql = "SELECT idLocation, indirizzo,comeArrivare, contatti FROM location";
$result =DB::getDB()->query($sql);
while($row = mysqli_fetch_array($result))
{
    $location[] = array("idLocation" => $row['idLocation'],"indirizzo" => $row['indirizzo'],"comeArrivare" => $row['comeArrivare'],"contatti" => $row['contatti']);
}

// JSON ENCODE DEPENDING BY BUTTON
  print json_encode($location);

?>