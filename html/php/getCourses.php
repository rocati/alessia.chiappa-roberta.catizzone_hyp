<!--pagina php che preleva i dati degli istruttori e li trasformo in Json con la funzione json_encode-->
<?php
//mi collego alla classe che effettua collegamento al db
require_once'../php/dbclass.php';
//creo oggetto Json vuoto
$strJSon = "{\"istruttori\":{}}";

//select 
$sql = "SELECT * FROM istruttori";
$result =DB::getDB()->query($sql);
if($result->num_roxs>0){
//creo array
$istruttori = array();
while($row = mysqli_fetch_array($result))
{
    $istruttori[] = array('utf8_encode',$row);
}
echo json_encode($istruttori);
}
$result->close();

?>