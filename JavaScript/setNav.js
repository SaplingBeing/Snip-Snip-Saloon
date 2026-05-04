// Justin D. Grumal 240005134
window.onload=function(){
    var navbar = document.getElementById("navigationBar");
    var footer = document.getElementById("footer");
    var xmlhttp = new XMLHttpRequest();
    var xmlhttp1 = new XMLHttpRequest();
    xmlhttp.open("GET","nav.html",false);
    xmlhttp1.open("GET","footer.html",false);
    xmlhttp.send();
    xmlhttp1.send();
    navbar.innerHTML=(xmlhttp.responseText)
    footer.innerHTML=(xmlhttp1.responseText)
}   