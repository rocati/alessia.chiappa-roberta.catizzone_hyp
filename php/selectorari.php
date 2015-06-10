<?php
// Get value of clicked button
//$button = $_GET['button'];
 
// creo array per categoria di corso
$lezione = array();

require_once'dbclass.php';

//SELEZIONO CORSI ACQUA
$sql = "SELECT nomeCorso, ora,giorno,livello,istruttore,sala FROM lezione lez JOIN corso c ON c.idCorso = lez.id_corso ";
$result =DB::getDB()->query($sql);
while($row = mysqli_fetch_array($result))
{
    $lezione[] = array("nomeCorso" => $row['nomeCorso'],"ora" => $row['ora'],"giorno" => $row['giorno'],"livello" => $row['livello'],"istruttore" => $row['istruttore'],"sala" => $row['sala']);
}


// JSON ENCODE DEPENDING BY BUTTON
  print json_encode($lezione);

?>
