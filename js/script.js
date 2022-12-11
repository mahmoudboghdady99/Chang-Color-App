var btn =document.querySelector(".btn")
var cont=document.querySelector(".mydiv")

var colors= ["yellow", "green", "red", "royalblue"]
var i = 0;

btn.onclick = function(){
    cont.style.background = colors[i];
    i++;
    if (i==4){
        i=0;
    }
}