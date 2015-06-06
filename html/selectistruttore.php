<?php
// Get value of clicked button
//$button = $_GET['button'];
 
// creo array per categoria di corso
$istruttore = array();

require_once'dbclass.php';

//SELEZIONO CORSI ACQUA
$sql = "SELECT nome FROM istruttore ";
$result =DB::getDB()->query($sql);
while($row = mysqli_fetch_array($result))
{
    $istruttore[] = array("nome" => $row['nome']);
}


// JSON ENCODE DEPENDING BY BUTTON
  print json_encode($istruttore);

?>
