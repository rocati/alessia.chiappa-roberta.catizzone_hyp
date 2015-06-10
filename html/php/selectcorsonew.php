<?php
// Get value of clicked button
//$button = $_GET['button'];
 
// creo array per categoria di corso
$corso = array();

require_once'../php/dbclass.php'; //BISOGNA MODIFICARE PATH

$tipoFunzione = $_POST['funzionecorsi'];



if($tipoFunzione=='elencocorso')
{
    $sql ="SELECT id, nome FROM corso";
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $corso[] = array("id" => $row['id'],"nome" => $row['nome']);
    }

    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($corso);
}

if($tipoFunzione=='dettagliocorso')
{
	$id=$_POST['id'];
    $sql ="SELECT * FROM corso_singolo WHERE id=".$id; //id nome descrizione categoria 
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $corso[] = array("id" => $row['id'],"nome" => $row['nome'],"descrizione" => $row['descrizione'],"tipologia" => $row['tipologia']);
    }

    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($corso);
}
//********************* ROBERTA 09.06.2015 23.47 ****************************
/*if($tipoFunzione=='corsi')
{
    $sql ="SELECT * FROM corso_istruttore WHERE id=".$id;
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $istruttore[] = array("id" => $row['id'],"corso" => $row['corso']);
    }


    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($istruttore);
}*/
//********************* ROBERTA 09.06.2015 23.47 ****************************

?>