$(function(){
var xmlUl = document.getElementById('xmlUl');
var xmlBtn = document.getElementById("xmlBtn"); 
xmlBtn.addEventListener('click', function(){
    //step1: create the XMLHttpRequest obj
    var xhr = new XMLHttpRequest() ; 
    //step2: open it
    xhr.open('GET','/xmlData',true) ; 
    //step3: onload: when the response comes back 
    xhr.onload=function(){
        if (xhr.status == 200) {
            var response = xhr.responseXML ; 
            var states = response.getElementsByTagName('state'); 
            for(var i=0; i<states.length; i++){
                var liElement, nameValue, nameElement, imgValue, imgElement ; 
                liElement = document.createElement('LI') ; 
                nameValue = states[i].getElementsByTagName('name')[0].firstChild.nodeValue;
                nameElement=document.createElement('p'); 
                nameElement.appendChild(document.createTextNode(nameValue));
                liElement.appendChild(nameElement) ; 
                imgValue = states[i].getElementsByTagName('img')[0].firstChild.nodeValue;
                imgElement = document.createElement('img') ; 
                imgElement.setAttribute('src', imgValue);
                liElement.appendChild(imgElement) ; 
                xmlUl.appendChild(liElement);
            }
        } 
    }
    //step4: send it!!!!
    xhr.send(null) ; 
});     
});

