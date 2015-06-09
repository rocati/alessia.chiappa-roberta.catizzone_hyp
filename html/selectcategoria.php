<?php

// creo array categoria
$categoria = array();

// creo array per tutte le categorie

require_once'dbclass.php';

$sql = "SELECT idCategoria, nomeCategoria FROM categoria ORDER BY idCategoria";
$result =DB::getDB()->query($sql);
while($row = mysqli_fetch_array($result))
{
    $categoria[] = array("idCategoria" => $row['idCategoria'],"nomeCategoria" => $row['nomeCategoria']);
}

// JSON ENCODE DEPENDING BY BUTTON
  print json_encode($corso);

?>