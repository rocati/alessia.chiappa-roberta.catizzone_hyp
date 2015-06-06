<?php
// Get value of clicked button
$button = $_GET['button'];
 
// creo array per categoria di corso
$acqua = array();
$tone = array('Crossfit','GAG');
$condizionamento = array();
$corpomente = array();
$funzionali = array();
$cardio = array();

$strJSon = "{\"corsi\":";
// creo array per tutti i corsi
$tutticorsi = array(
  "acqua" => $acqua,
  "tone" => $tone,
  "condizionamento"=> $condizionamento,
  "corpomente"=> $corpomente,
  "funzionali"=> $funzionali,
  "cardio"=> $cardio
);
require_once'../php/dbclass.php';

//SELEZIONO CORSI ACQUA
$sql = "SELECT nomeCorso FROM corso WHERE categoria = 'acqua'";
$result =DB::getDB()->query($sql);;
while($row = mysqli_fetch_array($result))
{
    $acqua[] = array("nomeCorso" => $row['nomeCorso']);
}

/*
if (count($acqua) > 0) {
    $strJSon = "{\"corsi\":" . json_encode($acqua) . "}";
}
echo "<br>";
echo json_encode($acqua) . "<br>";
echo $strJSon . "<br>";
var_dump($acqua). "<br>";*/

// JSON ENCODE DEPENDING BY BUTTON
if ($button == "acqua") {
  print json_encode($acqua);
}
else if ($button == "tone") {
  print json_encode($tone);
}
else if ($button == "condizionamento") {
  print json_encode($condizionamento);
}
else if ($button == "corpomente") {
  print json_encode($corpomente);
}
else if ($button == "funzionali") {
  print json_encode($funzionali);
}
else if ($button == "cardio") {
  print json_encode($cardio);
}
else {
  print json_encode($tutticorsi);
}
 
?>