$(function(){
    //get the typed in value 
    var sexInput = $('#sexInput'); 
    var sexBtn = $('#sexBtn') ; 
    var fdUl  = $('#fdUl') ; 
    sexBtn.on('click', function(e){
        var sexVal = sexInput.val() ;
        $.get('/getFriend',{
            sexVal: sexVal
        }, function(data){
            // get data then manipulate the html
            var result = JSON.parse(data) ; 
            result.forEach(function(f){
                // <li> name: f.name - sex: f.sex </li>
                var str = " <li> name: " + f.name +"- sex:" + f.sex+ "</li>" ; 
                fdUl.append(str);
            })
        }) ; 
    }) ; 
}); 