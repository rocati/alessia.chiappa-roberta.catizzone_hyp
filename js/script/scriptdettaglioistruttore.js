//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://biggymchiappacatizzone.altervista.org/php/selectistruttore.php", //Relative or absolute path to file.php file
        data: {"funzione": "dettaglio","id":id},
        success: function(response) {
            var istruttori=JSON.parse(response);
            var el="";
            var nome="";
            var descr="";
            var premio="";
            var video="";
            var pre="";
            var post=""; 
            var titolo="";
            var mese="";
            for(var i=0;i<istruttori.length;i++){
                var idIstruttore=istruttori[i].id;
				el="<img src='../img/istruttori/"+istruttori[i].avater+"'>";
                nome = ""+istruttori[i].nome;
                descr =""+istruttori[i].descrizione;
                premio =""+istruttori[i].premio;
                video= "<iframe width='100%' height='315' src='"+istruttori[i].gallery+"' frameborder='0' allowfullscreen></iframe>";
                pre="http://biggymchiappacatizzone.altervista.org/html/istruttore.html?id="+istruttori[i].precedente+"";
                post="http://biggymchiappacatizzone.altervista.org/html/istruttore.html?id="+istruttori[i].successivo+"";
                titolo="Big Gym - "+istruttori[i].nome;
                mese=istruttori[i].istruttoreMese;
                if(mese==1){
                	$("#mese").show();
                }
                else{
                	$("#mese").hide();
                }
                }
           
            $("#divAvater").html(el);
            $(".nomeIstruttore").html(nome);
            $("#biografia").html(descr);
            $("#premio").html(premio); 
            $("#gallery").html(video);             
            $('#istruttoreprecedente').click(function(){
               window.location.href=pre;
            })
            $('#istruttoresuccessivo').click(function(){
               window.location.href=post;
            })
            $("#titolo").html(titolo);
            
     
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
}

  function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}