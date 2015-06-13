<?php
header("Access-Control-Allow-Origin: *");
/**************************************************************************************************************
 QUERY: INFO RELATIVE ALL'ORARIO DI UN CORSO
 tabelle utilizzate: lezione, corsi
***************************************************************************************************************/


// Get value of clicked button
//$button = $_GET['button'];
 
// creo array per orario corso
$ora = array();

require_once'../php/dbclass.php';

$tipoFunzione=$_POST['funzione'];

if($tipoFunzione=='dettaglio')
{
	$id=$_POST['id'];
    $sql ="SELECT * FROM lezione AS l JOIN corsi AS c  ON l.id_corso=c.idCorso WHERE id_corso=".$id;
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $ora[] = array("id_corso" => $row['id_corso'],"nomeCorso" => $row['nomeCorso'],"ora" => $row['ora'],"giorno" => $row['giorno'],"livello" => $row['livello'],"istruttore" => $row['istruttore'],"sala" => $row['sala'], "descrizione"=> $row['descrizione']);
    }

    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($ora);
}

?>