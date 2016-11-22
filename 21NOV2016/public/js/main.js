$(function(){
    var sexInput = $('#sexInput') ; 
    var sexBtn = $('#sexBtn') ; 
    var fdUl = $('#fdUl') ; 
    sexBtn.on('click', function(){
        var sexVal = sexInput.val() ; 
        $.get('/getData',{sex:sexVal }, function(data){
            var data = JSON.parse(data) ;
            data.forEach(function(d){
                var li = "<li>name: " +d.name + "- sex:" + d.sex + "</li>" ;
                fdUl.append(li) ; 
            })
        },"text" ) ; 
    }); 
})