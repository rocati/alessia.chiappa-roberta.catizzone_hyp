<?php
 require_once'../php/dbclass.php';
    
$strJSon = "{\"employees\":{}}";
$employees = array();
$sql = "SELECT * FROM istruttori";
		
$result =DB::getDB()->query($sql);;
while($row = mysqli_fetch_array($result))
{
    $employees[] = array("id" => $row['id'], "nome" => $row['nome']);
}

if (count($employees) > 0) {
    $strJSon = "{\"employees\":" . json_encode($employees) . "}";
}
echo $strJSon;
?>