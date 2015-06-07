<?php

// creo array corso
$corso = array();

// creo array per tutti i corsi

require_once'dbclass.php';

//SELEZIONO CORSI ACQUA
$sql = "SELECT idCorso, nomeCorso, categoria FROM corso ORDER BY nomeCorso";
$result =DB::getDB()->query($sql);
while($row = mysqli_fetch_array($result))
{
    $corso[] = array("idCorso" => $row['idCorso'],"nomeCorso" => $row['nomeCorso'],"categoria" => $row['categoria']);
}

// JSON ENCODE DEPENDING BY BUTTON
  print json_encode($corso);

?>