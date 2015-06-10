//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/selectistruttore.php", //Relative or absolute path to file.php file
        data: {"funzione": "corsi","id":id},
        success: function(response) {
            var istruttori=JSON.parse(response);
            var el="";
           
            for(var i=0;i<istruttori.length;i++){
                console.log(istruttori[i].corso);
                var idIstruttore=istruttori[i].id;
                console.log(istruttori[i].id)
                console.log(istruttori[i].corso)
				el="<h4 id='area-link'><a href="+istruttori[i].corso+".html id='area-link'> "+" "+"</a></h4>";
                console.log(el)
            }
           
            $("#corsiistruttore").html(el);
                  
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