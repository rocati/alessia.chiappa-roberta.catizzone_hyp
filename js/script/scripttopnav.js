//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=1;
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://biggymchiappacatizzone.altervista.org/php/selectcorsi.php", //Relative or absolute path to file.php file
        data: {"funzione": "elenco"},
        success: function(response) {
            var corsi=JSON.parse(response);
            var el="";
            var el1="";
            var el2="";
            var el3="";
            for(var i=0;i<corsi.length;i++){
                var idCorso=corsi[i].idCorso;
                var url="http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+idCorso;
                el+="<a href='"+url+"'>"+corsi[i].nomeCorso+"</a>";
                el3+="<option>"+corsi[i].nomeCorso+"</option>";
                
            }
			el1+="<a href='../html/tutti_corsi.html'>Tutti i Corsi (A-Z)</a>";
            el2+="<a href='../html/tutti_corsi_livello.html'>Tutti i Corsi (Livelli)</a>";
            $("#tutticorsi").html(el1);
            $("#tuttilivello").html(el2);
            $("#eleconcorsi").html(el);
            $("#elenco").html(el3);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
}