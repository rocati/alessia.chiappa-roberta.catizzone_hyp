//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://biggymchiappacatizzone.altervista.org/php/selectcorsi.php", //Relative or absolute path to file.php file
        data: {"funzione": "istruttori","id":id},
        success: function(response) {
            var corsi=JSON.parse(response);
            var el="";
                        
            for(var i=0;i<corsi.length;i++){
              var url="http://biggymchiappacatizzone.altervista.org/html/istruttore.html?id="+corsi[i].idIstruttore;
               el+="<a href='"+url+"' id='area-link'>"+corsi[i].istruttore+"</a><br><br>";
        	}
           
           $(".campoistruttori").html(el);
           
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