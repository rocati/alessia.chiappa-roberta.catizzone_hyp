//script che preleva preleva il JSON dei corsi
$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "server.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log("pippo");
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el="";
            for(var i=0;i<courses.length;i++){
                console.log(courses[i].nomeCorso);

                //el+="<div class='course' id='c"+courses[i].nomeCorso+"'><h2>"+courses[i].nomeCorso+"</h2></div>"; 
                el+="<tr>"+"<td class='tab-livelli-colonna' id=corso><a href='acqua_fitness.html'>"+courses[i].nomeCorso+"</a></td>"                                                

            }

            $("tbody").html(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}
