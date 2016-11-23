$(function(){
    var $h1 = $('h1') ; 
    var $zip = $('input[name="zip"]') ; 
    $('form').on('submit', function(event){
        //I want to stay on this page! normally for form validation and ajax call
      event.preventDefault() ; 
        var zipcode = $.trim($zip.val()) ; 
        $h1.text("loading") ; 
        $.ajax({
            url: "/temp/" + zipcode,
            type: "GET", 
            dataType:"json",
            timeout: 2000,
            success: function(data){
                var temperature = data.temperature ;
                $h1.text("it is" + temperature + "degree in " + zipcode + "area."); 
            },
            fail: function(){
                $h1.html('error!!!') ; 
            }
        })
    })
});