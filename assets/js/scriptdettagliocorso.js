//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://biggymchiappacatizzone.altervista.org/php/selectcorsonew.php", //Relative or absolute path to file.php file
        data: {"funzione": "dettagliocorsi","id":id},
        success: function(response) {
            var corsi=JSON.parse(response);
            var el="";
            var nome="";
            var descr="";
            var categ ="";         
            
            for(var i=0;i<corsi.length;i++){
                var idCorsi=corsi[i].id;
				el="";
                nome = ""+corsi[i].nome;
                console.log(nome);
                //descr =""+corsi[i].descrizione;
                //categ =""+corsi[i].tipologia;        
                }
           
            $("#nomecorso").html(el);
            //$(".nomeIstruttore").html(nome);
            //$("#biografia").html(descr);
 
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
}

  function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}