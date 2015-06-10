<?php

// creo array corso singolo
$corsosingolo = array();

// creo array per tutte i corsi singoli

require_once'dbclass.php';

$sql = "SELECT id, nomeCorso, categoria, descrizione, tipologia, imm FROM corsosingolo ORDER BY id";
$result =DB::getDB()->query($sql);
while($row = mysqli_fetch_array($result))
{
    $categoria[] = array("id" => $row['id'],"nomeCorso" => $row['nomeCorso'],"categoria" => $row['categoria'],"descrizione" => $row['descrizione'],"tipologia" => $row['tipologia'],"imm" => $row['imm']);
}

// JSON ENCODE DEPENDING BY BUTTON
  print json_encode($categoria);

?>