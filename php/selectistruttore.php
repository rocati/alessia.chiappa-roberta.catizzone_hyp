<?php
header("Access-Control-Allow-Origin: *");
// Get value of clicked button
//$button = $_GET['button'];
 
// creo array per categoria di corso
$istruttore = array();

require_once'../php/dbclass.php';

$tipoFunzione=$_POST['funzione'];



if($tipoFunzione=='elenco')
{
    $sql ="SELECT id, nome FROM istruttore";
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $istruttore[] = array("id" => $row['id'],"nome" => $row['nome']);
    }


    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($istruttore);
}

if($tipoFunzione=='dettaglio')
{
	$id=$_POST['id'];
    $sql ="SELECT * FROM istruttore WHERE id=".$id;
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $istruttore[] = array("id" => $row['id'],"nome" => $row['nome'],"gallery" => $row['gallery'],"avater" => $row['avater'],"descrizione" => $row['descrizione'],"premio" => $row['premio'],"avater" => $row['avater'],"descrizione" => $row['descrizione'],"precedente" => $row['precedente'],"successivo" => $row['successivo'],"istruttoreMese" => $row['istruttoreMese']);
    }

    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($istruttore);
}

if($tipoFunzione=='corsi')
{
	$id=$_POST['id'];
    $sql ="SELECT id,nome,idCorso,nomeCorso FROM istruttore AS i JOIN corsi AS c ON i.nome=c.istruttore WHERE id=".$id;
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $istruttore[] = array("id" => $row['id'],"nome" => $row['nome'],"idCorso" => $row['idCorso'],"nomeCorso" => $row['nomeCorso']);
    }


    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($istruttore);
}

?>
