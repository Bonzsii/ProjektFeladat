'use strict'
let add = document.getElementById('gomb');
let list = document.getElementById('lista');

    
add.addEventListener("click", function(){
    let li = document.createElement("li"); 
    li.innerHTML = "Új elem";
    list.appendChild(li); 
})

setInterval()