//script che preleva preleva il JSON delle location
$(document).ready(ready);

function ready(){
    var id=1;
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://biggymchiappacatizzone.altervista.org/php/selectlocation.php", //Relative or absolute path to file.php file
        data: {"funzione": "dettaglio","id":id},
        success: function(response) {
            var location=JSON.parse(response);
            var ind="";
            var comeRagg="";
            var info="";
            var map="";
            for(var i=0;i<location.length;i++){
                ind="<p>"+location[i].indirizzo+"</p>";
                comeRagg="<p>"+location[i].comeArrivare+"</p>";
                info="<p>"+location[i].contatti+"</p>";
            }
            $("#indirizzo").html(ind);
            $("#comeRagg").html(comeRagg);
            $("#contatti").html(info);
           
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
}