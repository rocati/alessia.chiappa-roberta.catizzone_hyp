//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/selectcorsi.php", //Relative or absolute path to file.php file
        data: {"funzione": "dettaglio","id":id},
        success: function(response) {
            var corsi=JSON.parse(response);
            var el="";
            var nome="";
            var descr="";
            var tipo="";
            var istruttore="";
            var istruttore2="";
            var linkIstr="";
            var orario="";
            var cat=""; 
            var titolo="";
            
            for(var i=0;i<corsi.length;i++){
                var idCorso=corsi[i].idCorso;
				el="<img src='../img/corsi/c/"+corsi[i].immPagina+"' width='100%'>";
                nome = ""+corsi[i].nomeCorso;
                cat=""+corsi[i].categoria;
                descr =""+corsi[i].descrizione;
                tipo =""+corsi[i].tipologia;
                istruttore=""+corsi[i].istruttore;
                titolo="Big Gym -"+nome;
                orario="http://biggymchiappacatizzone.altervista.org/html/orario_corso.html?id="+corsi[i].idCorso;
                linkIstr="http://biggymchiappacatizzone.altervista.org/html/istruttore.html?id="+corsi[i].id;
              }  
           
            $("#divImm").html(el);
            $(".nomeCorso").html(nome);
            $("#categoria").html(cat); 
            $("#descrizione").html(descr);
            $("#tipologia").html(tipo); 
            $(".istruttore").html(istruttore);
            $("#linkIstr").attr("href", linkIstr);
            $("#orario").attr("href", orario);
            $("#titolo").html(titolo);
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