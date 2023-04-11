function onglet(event, name){
    var btn = document.getElementsByClassName('btn');
    var cont = document.getElementsByClassName('contenue');

    for(i=0; i < cont.length ; i++){
        cont[i].style.display = 'none';
    }
for(i=0; i < btn.length ; i++){
    btn[i].className = btn[i].className.replace("active", "");
}
document.getElementById(name).style.display = "block"; 
evt.currentTarget.className += "active";
}
const humbtn = document.querySelector(".btn23");
const navigation = document.querySelector("nav");

humbtn.addEventListener("click", togglenav);

function togglenav(){
    humbtn.classList.toggle("active");
    navigation.classList.toggle("active");
}