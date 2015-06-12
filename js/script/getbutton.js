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
            
            for(var i=0;i<courses.length;i++){
            if(courses[i].idCorso==1||courses[i].idCorso==5||courses[i].idCorso==9||courses[i].idCorso==13){
                console.log(courses[i].idCorso);
                el1+= "<div id="+courses[i].idCorso+">"+
                         "<a href='http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+courses[i].idCorso+"' >"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg'>"+
                            "</div>"+
                        "</a>"+
                    "</div>";
    
            }}
            for(i=0;i<courses.length;i++){
            if(courses[i].idCorso==2||courses[i].idCorso==6||courses[i].idCorso==10||courses[i].idCorso==14){
                console.log(courses[i].nomeCorso); 
                el2+= "<div id="+courses[i].idCorso+">"+
                 "<a href='http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+courses[i].idCorso+"' >"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }}
            
            for(i=0;i<courses.length;i++){
            if(courses[i].idCorso==3||courses[i].idCorso==7||courses[i].idCorso==11||courses[i].idCorso==15){
                console.log(courses[i].nomeCorso); 
                el3+= "<div id="+courses[i].idCorso+">"+
                        "<a href='http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+courses[i].idCorso+"' >"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                           "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }}
            for(i=0;i<courses.length;i++){
            if(courses[i].idCorso==4||courses[i].idCorso==8||courses[i].idCorso==12||courses[i].idCorso==16){
                console.log(courses[i].nomeCorso);
                el4+= "<div id="+courses[i].idCorso+">"+
                        "<a href='http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+courses[i].idCorso+"' >"+
                            "<div class='thumbnail' id='cat-sub'>"+
                            "<h4 class='tutti-corsi'>"+courses[i].nomeCorso+"</h4>"+
                            "<img src='../img/corsi/"+courses[i].idCorso+".jpg' >"+
                            "</div>"+
                        "</a>"+
                    "</div>";
            }}

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
        $("#10").show(1000);
        $("#1").show(1000);
        $("#2").show(1000);
        $("#6").hide(1000);
        $("#15").hide(1000);
        $("#3").show(1000);
        $("#7").hide(1000);
        $("#4").hide(1000);
        $("#13").hide(1000);
        $("#9").hide(1000);
    });
    $("#btn-tone").click(function(){
        $("#16").hide(1000);
        $("#11").hide(1000);
        $("#14").hide(1000);
        $("#1").hide(1000);
        $("#12").hide(1000);
        $("#5").hide(1000);
        $("#6").show(1000);
        $("#8").show(1000);
        $("#2").hide(1000);
        $("#4").hide(1000);
        $("#15").hide(1000);
        $("#3").hide(1000);
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
        $("#9").show(1000);
        $("#13").hide(1000);
    });
    $("#btn-cond").click(function(){
        $("#16").hide(1000);
        $("#11").hide(1000);
        $("#14").hide(1000);
        $("#5").show(1000);
        $("#12").hide(1000);
        $("#8").hide(1000);
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
    $("#btn-cardio").click(function(){
        $("#15").hide(1000);
        $("#11").hide(1000);
        $("#4").show(1000);
        $("#8").hide(1000);
        $("#12").hide(1000);
        $("#5").hide(1000);
        $("#14").hide(1000);
        $("#1").hide(1000);
        $("#2").hide(1000);
        $("#6").hide(1000);
        $("#16").show(1000);
        $("#3").hide(1000);
        $("#7").hide(1000);
        $("#10").hide(1000);
        $("#13").hide(1000);
        $("#9").hide(1000);
    });
     $("#btn-corpo").click(function(){
        $("#16").hide(1000);
        $("#11").show(1000);
        $("#9").hide(1000);
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
        $("#13").show(1000);
        $("#10").hide(1000);
        $("#14").show(1000);
    });
}
                      