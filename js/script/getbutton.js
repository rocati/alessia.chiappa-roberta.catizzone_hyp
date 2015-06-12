$(document).ready(ready);
function ready(){
    console.log("I'm ready!");
    var id=1;
    console.log("test");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/selectcorso.php", //Relative or absolute path to file.php file
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
                el1+= "<div id="+courses[i].idCorso+">"+
                         "<a href='http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+courses[i].idCorso+"' >"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg'>"+
                            "</div>"+
                        "</a>"+
                    "</div>";
    
            }
            for(i;i<8;i++){
                console.log(courses[i].nomeCorso); 
                el2+= "<div id="+courses[i].idCorso+">"+
                 "<a href='http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+courses[i].idCorso+"' >"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }
            for(i;i<12;i++){
                console.log(courses[i].nomeCorso); 
                el3+= "<div id="+courses[i].idCorso+">"+
                        "<a href='http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+courses[i].idCorso+"' >"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                           "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }
            for(;i<16;i++){
                console.log(courses[i].nomeCorso);
                el4+= "<div id="+courses[i].idCorso+">"+
                        "<a href='http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+courses[i].idCorso+"' >"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }

            var c1 = $("#colonna1").html(el1);
            var c2 = $("#colonna2").html(el2);
            var c3 = $("#colonna3").html(el3);
            var c4 = $("#colonna4").html(el4);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
    $("#btn-tuttic").click(function(){
            $("#1").show(1000);
            $("#2").show(1000);
            $("#3").show(1000);
            $("#4").show(1000);
            $("#5").show(1000);
            $("#6").show(1000);
            $("#7").show(1000);
            $("#8").show(1000);
            $("#9").show(1000);
            $("#10").show(1000);
            $("#11").show(1000);
            $("#12").show(1000);
            $("#13").show(1000);
            $("#14").show(1000);
            $("#15").show(1000);
            $("#16").show(1000);
                
    });
       
      
    $("#btn-acqua").click(function(){
        $("#16").hide(1000);
        $("#11").hide(1000);
        $("#14").hide(1000);
        $("#8").hide(1000);
        $("#12").hide(1000);
        $("#5").hide(1000);
        $("#4").show(1000);
        $("#1").show(1000);
        $("#2").show(1000);
        $("#6").hide(1000);
        $("#15").hide(1000);
        $("#3").show(1000);
        $("#7").hide(1000);
        $("#10").hide(1000);
        $("#13").hide(1000);
        $("#9").hide(1000);
    });
    $("#btn-tone").click(function(){
        $("#16").hide(1000);
        $("#11").hide(1000);
        $("#14").hide(1000);
        $("#8").hide(1000);
        $("#12").hide(1000);
        $("#5").hide(1000);
        $("#4").show(1000);
        $("#1").show(1000);
        $("#2").show(1000);
        $("#6").hide(1000);
        $("#15").hide(1000);
        $("#3").show(1000);
        $("#7").hide(1000);
        $("#10").hide(1000);
        $("#13").hide(1000);
        $("#9").hide(1000);
    });
    $("#btn-funz").click(function(){
        $("#16").hide(1000);
        $("#11").hide(1000);
        $("#14").hide(1000);
        $("#8").hide(1000);
        $("#12").show(1000);
        $("#5").hide(1000);
        $("#4").hide(1000);
        $("#1").hide(1000);
        $("#2").hide(1000);
        $("#6").hide(1000);
        $("#15").hide(1000);
        $("#3").hide(1000);
        $("#7").hide(1000);
        $("#10").hide(1000);
        $("#13").show(1000);
        $("#9").hide(1000);
    });
    $("#btn-cond").click(function(){
        $("#16").hide(1000);
        $("#11").hide(1000);
        $("#14").hide(1000);
        $("#8").show(1000);
        $("#12").hide(1000);
        $("#5").hide(1000);
        $("#4").hide(1000);
        $("#1").hide(1000);
        $("#2").hide(1000);
        $("#6").hide(1000);
        $("#15").hide(1000);
        $("#3").hide(1000);
        $("#7").show(1000);
        $("#10").hide(1000);
        $("#13").hide(1000);
        $("#9").hide(1000);
    });
    $("#btn-tone").click(function(){
        $("#16").hide(1000);
        $("#11").hide(1000);
        $("#14").hide(1000);
        $("#8").hide(1000);
        $("#12").hide(1000);
        $("#5").show(1000);
        $("#4").hide(1000);
        $("#1").hide(1000);
        $("#2").hide(1000);
        $("#6").show(1000);
        $("#15").hide(1000);
        $("#3").hide(1000);
        $("#7").hide(1000);
        $("#10").hide(1000);
        $("#13").hide(1000);
        $("#9").hide(1000);
    });
    $("#btn-cardio").click(function(){
        $("#16").hide(1000);
        $("#11").hide(1000);
        $("#14").show(1000);
        $("#8").hide(1000);
        $("#12").hide(1000);
        $("#5").hide(1000);
        $("#4").hide(1000);
        $("#1").hide(1000);
        $("#2").hide(1000);
        $("#6").hide(1000);
        $("#15").show(1000);
        $("#3").hide(1000);
        $("#7").hide(1000);
        $("#10").hide(1000);
        $("#13").hide(1000);
        $("#9").hide(1000);
    });
     $("#btn-corpo").click(function(){
        $("#16").hide(1000);
        $("#11").show(1000);
        $("#14").hide(1000);
        $("#8").hide(1000);
        $("#12").hide(1000);
        $("#5").hide(1000);
        $("#4").hide(1000);
        $("#1").hide(1000);
        $("#2").hide(1000);
        $("#6").hide(1000);
        $("#15").hide(1000);
        $("#3").hide(1000);
        $("#7").hide(1000);
        $("#10").show(1000);
        $("#13").hide(1000);
        $("#9").show(1000);
    });

        
    
           
    
    /*

    $("button").click(function() {
        alert(this.id); // or alert($(this).attr('id'));
        console.log(this.id);
        var $btn = this.id;
        console.log($btn);
        $("#colonna1").hide(200);
        $("#colonna2").hide(200);
        $("#colonna3").hide(200);
        $("#colonna4").hide(200);
        $.ajax({
            method: "POST",
            //dataType: "json", //type of data
            crossDomain: true, //localhost purposes
            url: "selectcorso.php", //Relative or absolute path to file.php file
            data: {course:id},
            success: function(response) {
                var courses=JSON.parse(response);
                var el1="";
                var el2="";
                var el3="";
                var el4="";
            
               if($btn==="btn-acqua"){
                    $("#tone").hide(200);
                    console.log("IF ACQUA");
                        console.log("LUNGHEZZA ARRAY"+courses.length);
                        for(var i=0;i<courses.length;i++){
                            if(courses[i].categoria == 'acqua'){
                                console.log("CATEGORIA ACQUA"+i);
                                console.log(courses[i].nomeCorso);
                                el1+= "<div id="+courses[i].idCorso+">"+
                                        "<a href=#>"+
                                            "<div class='thumbnail' id='cat-sub'>"+
                                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg'>"+
                                            "</div>"+
                                        "</a>"+
                                    "</div>";
                            }
                        }

                    console.log("ELEMENTO"+el1);
                    $("#categ").html(el1);

                   // console.log("ELEMENTO:"+el1);
                }console.log("END IF ACQUA");
                
                if($btn==="btn-tone"){
                    $("#acqua").hide(200);
                    console.log("IF TONE");
                    console.log("LUNGHEZZA ARRAY"+courses.length);
                    for(var i=0;i<courses.length;i++){
                        if(courses[i].categoria == 'tone'){
                        console.log("CATEGORIA TONE"+i);
                        console.log(courses[i].nomeCorso);
                        el1+= "<div id="+courses[i].idCorso+">"+
                                "<a href=#>"+
                                    "<div class='thumbnail' id='cat-sub'>"+
                                    "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                                    "<img src='../img/corsi/"+courses[i].idCorso+".jpg'>"+
                                    "</div>"+
                                "</a>"+
                            "</div>";
                        }
                    }

                    console.log("ELEMENTO"+el1);
                    $("#tone").html(el1);

                   // console.log("ELEMENTO:"+el1);
                }console.log("END IF TONE");

            },
            error: function(request,error) 
            {
                console.log("Error");
            }


        
        });
    });*/
}
                      