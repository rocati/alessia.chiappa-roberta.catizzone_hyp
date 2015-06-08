//script che preleva preleva il JSON degli istruttori
$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;
    console.log("test");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://biggymchiappacatizzone.altervista.org/html/selectistruttore.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log("pippo");
            console.log(JSON.parse(response));
            var istruttori=JSON.parse(response);
            var el="";
            for(var i=0;i<istruttori.length;i++){
                console.log(istruttori[i].nome);   
                el+="<li><a href='istruttore_"+istruttori[i].nome+".html'>"+istruttori[i].nome+"</a></li>";                          
            }

            $("#sub-istr").html(el);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}