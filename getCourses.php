<html>
<head>
<title>Recuperare i dati da un DB MySQL</title>
</head>
<body>
<?
/* dichiariamo alcune importanti variabili per collegarci al database */
$DBhost = "localhost"
$DBuser = "2870936@localhost";
$DBpass = "durgogovci65";
$DBName = "biggymchiappacatizzone";

/* specifichiamo il nome della nostra tabella */
$table = "corsi";

/* Connettiamoci al database */
mysql_connect($DBhost,$DBuser,$DBpass) or die("Impossibile collegarsi al server");
@mysql_select_db("$DBName") or die("Impossibile connettersi al database $DBName");

/* impostiamo la query e cerchiamo solo le amiche donne...*/
$sqlquery = "SELECT * FROM $table;
$result = mysql_query($sqlquery);
$number = mysql_num_rows($result);

$i = 0;
if ($number < 1) {
  print "<center><p>La ricerca non ha prodotto nessun risultato</p></center>";
}else{
  while ($number > $i) {
    $nome = mysql_result($result,$i,"nome");
    $email = mysql_result($result,$i,"email");
    echo "<p><b>Nome:</b> $nome<br>
    <b>E-Mail:</b> $email</p>";
    $i++;
  }
}
?>
</body>
</html>