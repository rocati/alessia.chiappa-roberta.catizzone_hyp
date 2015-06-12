<?php

// creo array corsi
$corsi = array();

// creo array per tutti i corsi

require_once'dbclass.php';
$tipoFunzione=$_POST['funzione'];

if($tipoFunzione=='dettaglio')
{
	$id=$_POST['id'];
    $sql ="SELECT * FROM istruttore AS i JOIN corsi AS c ON i.nome=c.istruttore WHERE idCorso=".$id;
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $corsi[] = array("idCorso" => $row['idCorso'],"nomeCorso" => $row['nomeCorso'],"categoria" => $row['categoria'],"descrizione" => $row['descrizione'],"tipologia" => $row['tipologia'],"istruttore" => $row['istruttore'],"immPagina" => $row['immPagina'],"id" => $row['id']);
    }

    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($corsi);
}

if($tipoFunzione=='elenco')
{
    $sql ="SELECT idCorso, nomeCorso FROM corsi";
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $corsi[] = array("idCorso" => $row['idCorso'],"nomeCorso" => $row['nomeCorso']);
    }
    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($corsi);
}

?>