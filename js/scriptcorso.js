/********************************* RINOMINARE COME SCRIPTCORSI.JS **********************************
							script che popola la pagina di tutti i corsi
****************************************************************************************************/
//script che preleva preleva il JSON dei corsi
$(document).ready(ready);
function ready(){
var button = $('#btn btn-danger').val();
 console.log("I'm ready!");
    console.log(button);
    var id=1;
    console.log("test");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://biggymchiappacatizzone.altervista.org/php/selectcorso.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log("pippo");
 
            
            var courses=JSON.parse(response);
            var el1="";
            var el2="";
            var el3="";
            var el4="";
            
            for(var i=0;i<4;i++){
                console.log(courses[i].idCorso);
                //el+="<div class='course' id='c"+courses[i].nomeCorso+"'><h2>"+courses[i].nomeCorso+"</h2></div>"; 
                //el+="<h3>"+courses[i].nomeCorso+"</h3>"; 
                el1+= "<div id="+courses[i].idCorso+">"+
                        "<a href=#>"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg'>"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }
            for(i;i<8;i++){
                console.log(courses[i].nomeCorso); 
                el2+= "<div id="+courses[i].id+">"+
                        "<a href=#>"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }
            for(i;i<12;i++){
                console.log(courses[i].nomeCorso); 
                el3+= "<div id="+courses[i].id+">"+
                        "<a href=#>"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                           "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }
            for(;i<16;i++){
                console.log(courses[i].nomeCorso);
                el4+= "<div id="+courses[i].id+">"+
                        "<a href=#>"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }


            

            $("#colonna1").html(el1);
            $("#colonna2").html(el2);
            $("#colonna3").html(el3);
            $("#colonna4").html(el4);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}


