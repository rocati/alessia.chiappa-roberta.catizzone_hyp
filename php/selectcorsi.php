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
    $sql ="SELECT idCorso, nomeCorso FROM corsi ORDER BY idCorso";
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $corsi[] = array("idCorso" => $row['idCorso'],"nomeCorso" => $row['nomeCorso']);
    }
    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($corsi);
}

/**********************************************************************************************************
				ROBERTA 12062015 aggiunto per footer area link
***********************************************************************************************************/
if($tipoFunzione=='istruttori')
{
	$id=$_POST['id'];
    $sql ="SELECT c.idCorso as idCorso, i.id as idIstruttore, c.nomeCorso as corso, i.nome as istruttore FROM corsi as c join raccordo_ci as racc on c.idCorso = racc.idCorso join istruttore as i on racc.idIstruttore = i.id WHERE c.idCorso=".$id;
    $result =DB::getDB()->query($sql);
    while($row = mysqli_fetch_array($result))
    {
        $corsi[] = array("idCorso" => $row['idCorso'],"idIstruttore" => $row['idIstruttore'],"corso" => $row['corso'],"istruttore" => $row['istruttore']);
    }


    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($corsi);
 }

?>