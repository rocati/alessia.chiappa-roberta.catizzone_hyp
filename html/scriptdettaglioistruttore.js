//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "selectistruttore.php", //Relative or absolute path to file.php file
        data: {"funzione": "dettaglio","id":id},
        success: function(response) {
            var istruttori=JSON.parse(response);
            var el="";
            var nome="";
            for(var i=0;i<istruttori.length;i++){
                console.log(istruttori[i].nome);
                var idIstruttore=istruttori[i].id;
				el="<img src='../img/istruttori/"+istruttori[i].avater+"'>";
                nome = ""+istruttori[i].nome;
                next=""+istruttori[i+1];
                       
            }
           
            $("#divAvater").html(el);
            $(".nomeIstruttore").html(nome);
            $("#prossimo").html(next);
            
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