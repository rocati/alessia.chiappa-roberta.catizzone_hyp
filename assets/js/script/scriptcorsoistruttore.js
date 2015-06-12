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
            var el1="";
           
            for(var i=0;i<istruttori.length;i++){
            	var url="http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+istruttori[i].idCorso;
				el+="<a href='"+url+"'  id='area-link'>"+istruttori[i].nomeCorso+"</a><br><br>";
               
            }
           el1="<h3 id='area-link'>I corsi di "+istruttori[1].nome+"</h3></h3>";
           
           $("#titoloArea").html(el1);
           $(".corsistruttore").html(el);
                  
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