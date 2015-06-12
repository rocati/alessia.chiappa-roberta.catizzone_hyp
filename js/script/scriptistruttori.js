//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=1;
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://biggymchiappacatizzone.altervista.org/php/selectistruttore.php", //Relative or absolute path to file.php file
        data: {"funzione": "elenco"},
        success: function(response) {
            var istruttori=JSON.parse(response);
            var el="";
            for(var i=0;i<istruttori.length;i++){
                var idIstruttore=istruttori[i].id;
                var url="istruttore.html?id="+idIstruttore;
                el+="<li><a href='"+url+"'>"+istruttori[i].nome+"</a></li>";                          
            }

            $("#sub-istr").html(el);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
}