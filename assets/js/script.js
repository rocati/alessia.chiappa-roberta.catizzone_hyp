$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "getIstruttori.php", //Relative or absolute path to file.php file
        data: {istruttore:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var istruttore=JSON.parse(response);
            var el="";
            for(var i=0;i<istruttori.length;i++){
                console.log(istruttori[i].title);
                
                el+="<div class='course' id='c"+istruttori[i].id+"'><h2>"+istruttori[i].nome+"</h2></div>";             
                
            }
            
            $("datiistruttori").html(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}