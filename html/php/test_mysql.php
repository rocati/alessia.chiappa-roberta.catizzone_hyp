<?php error_reporting( E_ALL ); ?>


<?php

/*
pattern Singleton
serve per avere la certezza di avere una sola istanza della classe accessibile chiamando un metodo statico che 
se esiste l'istanza xchè già creata la restituisce, altrimenti se non esiste la crea e la ritonra
*/


class DB extends MySQLi {

private static $instance = null; // attributo che memorizza l'istanza

private function __construct($host, $user, $password, $database){ 
         parent::__construct($host, $user, $password, $database);
     }
private function __clone() { } 

 //metodo statico che restituisce l'unica istanza della classe
public static function getDB(){
	//se non esiste la crea
         if (self::$instance == null){
             self::$instance = new self("localhost", "biggymchiappacatizzone","", "my_biggymchiappacatizzone");
         }
         return self::$instance ;
     }

}

?>


<?php


    # extract results mysqli_result::fetch_array
    $query = " SELECT * FROM corsi  ";

	/*
	DB::getDB() ritorna un oggetto db e chiamando il metodo query ti ritorna un oggetto di tipo mysqli_result
	che contiene ovviamente il risultato della query 
	*/

    $result =DB::getDB()->query($query);

    //decommenta e guarda come è fatto questo oggetto
    var_dump($result);

    //se la query ha prodotto dei risultati
    if($result->num_rows >0)
    {
    	/*crea un array associativo
		che sono forse l'unica cosa davvero figa del php
		in pratica sono degli array che si comportano come mappa quindi chiave -> valore ma possono essere trattati pure come array
		*/
        $myArray = array();
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row;
        }
        //idem decommenta e vedi come è fatto
        //print_r($myArray);
        /*
        Array ( [0] => Array ( 
        				[corso] => FitBoxe [descrizione] => descrizione [istruttori] => Rocco [livelli] => B-M-A )
        		 [1] => Array (
        		 		 [corso] => FitBoxe [descrizione] => descrizione [istruttori] => Rocco [livelli] => B-M-A ) 
        	)
        */

		/*
		quindi ora possiamo accedere ai campi prendendoli dall'array tramite la chiave
		IMPORTANTE BEST PACTICE ACCEDI SEMPRE AI CAMPI PER CHIAVE E MAI! MAI!! PER INDICE
		questo perchè se un domani cambia la struttura del database tipo aggiungi una colonna in mezzo a 2 già esistenti 
		non ti si fancula tutto
		*/
		echo "<h1>RISULTATI</h1>";

		//per ogni tupla accedo al campo tramite la sua chiave $row['chiave']
		foreach($myArray as $row) {
		echo "<br>";
   	     echo "<b>CORSO: </b>" . $row['corso'] . "<br>";
   	     echo "<b>DESCRIZIONE: </b>" . $row['descrizione']. "<br>";
   	     echo "<b>ISTRUTTORE: </b>" . $row['istruttori']. "<br>";
   	     echo "<b>LIVELLI: </b>" . $row['livelli']. "<br>";
			}


    }





?>