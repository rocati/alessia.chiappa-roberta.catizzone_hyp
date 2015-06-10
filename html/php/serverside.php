<?php
 
// Get value of clicked button
$button = $_GET['button'];
 
// COURSE BY CAT
$acqua = array('AcquaFitness', 'Acqua Spinning', 'Acqua Zumba', 'Nuoto');
$tone = array('Crossfit', 'GAG');
$condizionamento = array('Autodifesa', 'Fit Boxe');
$corpomente = array('Taekwondo', 'Thai Chi Chuan','Yoga');
$funzionali = array('Joy Fit', 'Spinning');
$cardio = array('Aerofight', 'Zumba Step');
 
// ALL COURSES
$tutticorsi = array(
  "acqua" => $acqua,
  "tone" => $tone,
  "condizionamento"=> $condizionamento,
  "corpomente"=> $corpomente,
  "funzionali"=> $funzionali,
  "cardio"=> $cardio
);
 
//JSON ENCODE
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