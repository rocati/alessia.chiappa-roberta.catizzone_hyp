      //script che preleva preleva il JSON dei corsi
$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "selectorari.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log("pippo");
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el="";
            for(var i=0;i<courses.length;i++){
                console.log(courses[i].ora);   
                
                el+=  "<tr>"+
                        "<td class='tab-livelli-colonna' id=corso><a href='acqua_fitness.html'>"+courses[i].nomeCorso+"</a></td>"+
                        "<td class='success'>"+courses[i].ora+"</td>"+
                        "<td class='warning'>"+courses[i].giorno+"</td>"+
                        "<td class='danger'>"+courses[i].livello+"</td>"+
                        "<td class='danger'>"+courses[i].istruttore+"</td>"+
                        "<td class='danger'>"+courses[i].sala+"</td>"+
                      "</tr>"  

            }

            $("tbody").html(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}