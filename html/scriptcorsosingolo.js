//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "selectcorsosingolo.php", //Relative or absolute path to file.php file
        data: {"funzione": "dettaglio","id":id},
        success: function(response) {
            var corsosingolo=JSON.parse(response);
            var el="";
            var nome="";
            var descr="";
            var tipo="";
            for(var i=0;i<corsosingolo.length;i++){
                var idCorso=corsosingolo[i].id;
				el="<img src='../img/corsi/"+corsosingolo[i].id+"'>";
                nome = ""+corsosingolo[i].nomeCorso;
                descr = ""+corsosingolo[i].descrizione;
                tipo = ""+corsosingolo[i].tipo;
                }
           
            $("#divImm").html(el);
            $(".nomeCorso").html(nome);
            $("#descrizione").html(descr);
            $("#tipologia").html(tipo); 
     
            
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