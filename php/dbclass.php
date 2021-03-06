
<?php error_reporting( E_ALL ); ?>


<?php
header("Access-Control-Allow-Origin: *");
/****************************************COLLEGAMENTO AL SERVER************************************************/

/*
pattern Singleton
serve per avere la certezza di avere una sola istanza della classe accessibile chiamando un metodo statico che 
se esiste l'istanza perchè già creata la restituisce, se non esiste la crea e la ritorn
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


