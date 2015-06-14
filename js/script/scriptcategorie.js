//script che preleva preleva il JSON dei corsi
$(document).ready(ready);
function ready(){
 console.log("I'm ready!");
    var id=1;
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "biggymchiappacatizzone.altervista.org/php/selectcategoria.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
                       
            var categorie=JSON.parse(response);
            var el1="";
            var el2="";
            var el3="";
            
            for(var i=0;i<2;i++){
                console.log(categorie[i].idCategoria);
                el1+= "<div id="+categorie[i].idCategoria+">"+
                        "<a href=#>"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+categorie[i].nomeCategoria+"</h4>"+
                            "<img src='../img/categorie/"+categorie[i].idCategoria+".jpg'>"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }
            for(i;i<4;i++){
                console.log(categorie[i].idCategoria); 
                el2+= "<div id="+categorie[i].idCategoria+">"+
                        "<a href=#>"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+categorie[i].nomeCategoria+"</h4>"+
                            "<img src='../img/categorie/"+categorie[i].idCategoria+".jpg'>"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }
            for(i;i<6;i++){
                console.log(categorie[i].idCategoria); 
                el3+= "<div id="+categorie[i].idCategoria+">"+
                        "<a href=#>"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+categorie[i].nomeCategoria+"</h4>"+
                            "<img src='../img/categorie/"+categorie[i].idCategoria+".jpg'>"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }            

            $("#colonna1").html(el1);
            $("#colonna2").html(el2);
            $("#colonna3").html(el3);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}


