<?php

// creo array corso
$corso = array();

// creo array per tutti i corsi

require_once'dbclass.php';

//SELEZIONO CORSI ACQUA
$sql = "SELECT nomeCorso, categoria FROM corso";
$result =DB::getDB()->query($sql);;
while($row = mysqli_fetch_array($result))
{
    $corso[] = array("nomeCorso" => $row['nomeCorso'],"categoria" => $row['categoria']);
}

// JSON ENCODE DEPENDING BY BUTTON
  print json_encode($corso);

?>