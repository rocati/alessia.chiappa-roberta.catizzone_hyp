//script che preleva preleva il JSON degli orari dei corsi
$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    //var id=1;
	var id=getURLParameter("id");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: 'http://biggymchiappacatizzone.altervista.org/php/selectorariocorso.php', //Relative or absolute path to file.php file
        data: {"funzione": "dettaglio","id":id},
        success: function(response) {
            console.log(JSON.parse(response));
            console.log(id);
            var ora=JSON.parse(response);
            var el="";
            var nome="";
            var titolo="";
            var descr="";
            var linkCorso="";
            var nomeLink="";
            
            for(var i=0;i<ora.length;i++){
				nome=ora[i].nomeCorso;
				titolo="Big Gym - "+nome;
                descr=ora[i].descrizione;
                nomeLink="Scopri "+ ora[i].nomeCorso;
                linkCorso="http://biggymchiappacatizzone.altervista.org/html/corso.html?id="+ora[i].id_corso;
                console.log(id);
                el+=  "<tr>"+
                        "<td>"+ora[i].ora+"</td>"+
                        "<td>"+ora[i].giorno+"</td>"+
                        "<td>"+ora[i].livello+"</td>"+
                        "<td>"+ora[i].istruttore+"</td>"+
                        "<td>"+ora[i].sala+"</td>"+
                      "</tr>" 
                 }
                      
            $("tbody").html(el);
            $(".nomeCorso").html(nome);
            $("#titolo").html(titolo);
            $("#descrizione").html(descr);
            $(".nomeLink").html(nomeLink);
            $("#linkCorso").attr("href", linkCorso);
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