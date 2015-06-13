<?php
header("Access-Control-Allow-Origin: *");
// Get value of clicked button
//$button = $_GET['button'];
 
// creo array per categoria di corso
$lezione = array();

require_once'dbclass.php';

$sql = "SELECT * FROM lezione AS l JOIN corsi AS c  ON l.id_corso=c.idCorso";
$result =DB::getDB()->query($sql);
while($row = mysqli_fetch_array($result))
{
    $lezione[] = array("nomeCorso" => $row['nomeCorso'],"ora" => $row['ora'],"giorno" => $row['giorno'],"livello" => $row['livello'],"istruttore" => $row['istruttore'],"sala" => $row['sala']);
}


// JSON ENCODE DEPENDING BY BUTTON
  print json_encode($lezione);

?>
