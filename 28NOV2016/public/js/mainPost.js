$(function(){
    var myForm = $('#myForm') ; 
    var nameInput = $('#nameInput') ; 
    var sexInput = $('#sexInput') ; 
    var fdUl = $('#fdUl') ; 
    myForm.on('submit', function(e){
        //for form and <a> by default jump to other page!!!
        e.preventDefault() ; 
        var nameVal = nameInput.val() ; 
        var sexVal = sexInput.val() ; 
        $.post('/addFriend', {
            name: nameVal,
            sex: sexVal
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
    
}) ; 