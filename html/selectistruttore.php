<?php
// Get value of clicked button
//$button = $_GET['button'];
 
// creo array per categoria di corso
$istruttore = array();

require_once'dbclass.php';


//SELEZIONO CORSI ACQUA
/*$sql = $query = "INSERT INTO istruttore VALUES ('$_REQUEST[id]', '$_REQUEST[nome]',
'$_REQUEST[descrizione]'); "; 

$result=mysql_query($sql);
echo "<p>L'inserimento dovrebbe essere avvenuto...</p>
 <p>Torna alla pagina di visualizzazione della tabella per controllare</p>";*/
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
        $istruttore[] = array("id" => $row['id'],"nome" => $row['nome'],"avater" => $row['avater']);
    }

    // JSON ENCODE DEPENDING BY BUTTON
     print json_encode($istruttore);
}

?>
