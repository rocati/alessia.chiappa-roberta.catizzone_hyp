      //script che preleva preleva il JSON dei corsi
$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: 'http://biggymchiappacatizzone.altervista.org/html/selectorari.php', //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log("pippo");
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el="";
            for(var i=0;i<courses.length;i++){
				console.log(courses[i].ora);
				
				if(courses[i].livello=="BASIC"){

                el+=  "<tr class='success'>"+
                        "<td class='tab-livelli-colonna' id=corso><a href='acqua_fitness.html'>"+courses[i].nomeCorso+"</a></td>"+
                        "<td>"+courses[i].ora+"</td>"+
                        "<td>"+courses[i].giorno+"</td>"+
                        "<td>"+courses[i].livello+"</td>"+
                        "<td>"+courses[i].istruttore+"</td>"+
                        "<td>"+courses[i].sala+"</td>"+
                      "</tr>" 
				}
				else{
					if(courses[i].livello=="MEDIUM"){

					el+=  "<tr class='warning'>"+
							"<td class='tab-livelli-colonna' id=corso><a href='acqua_fitness.html'>"+courses[i].nomeCorso+"</a></td>"+
							"<td>"+courses[i].ora+"</td>"+
							"<td>"+courses[i].giorno+"</td>"+
							"<td>"+courses[i].livello+"</td>"+
							"<td>"+courses[i].istruttore+"</td>"+
							"<td>"+courses[i].sala+"</td>"+
						  "</tr>" 
					}
					else{
							 el+=  "<tr class='danger'>"+
							"<td class='tab-livelli-colonna' id=corso><a href='acqua_fitness.html'>"+courses[i].nomeCorso+"</a></td>"+
							"<td>"+courses[i].ora+"</td>"+
							"<td>"+courses[i].giorno+"</td>"+
							"<td>"+courses[i].livello+"</td>"+
							"<td>"+courses[i].istruttore+"</td>"+
							"<td>"+courses[i].sala+"</td>"+
						  "</tr>" 
						
					}
					
				}


            }

            $("tbody").html(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}