var verifying = document.getElementById("load");
var numbox = document.getElementById("nmb");


numbox.textContent = Math.floor(Math.random() * 999999999) + 1;
function ret(){

    setTimeout(verifying.textContent = "verifying number", 200) ;
    setTimeout("alert('invalid phone number')", 1400); 
}
