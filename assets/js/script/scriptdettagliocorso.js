//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/selectcorsonew.php", //Relative or absolute path to file.php file
        data: {"funzione": "dettaglio","id":id},
        success: function(response) {
            var istruttori=JSON.parse(response);
            var el="";
            var nome="";
            var descr="";
            var premio="";
            var video="";
            var pre="";
            var post=""; 
            var titolo="";
            
            for(var i=0;i<istruttori.length;i++){
                var idIstruttore=istruttori[i].idCorso;
                nome = ""+istruttori[i].nomeCorso+"";
                console.log(nome);
                
                }
           $(".nomecorso").html(nome);
            
                   
  
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