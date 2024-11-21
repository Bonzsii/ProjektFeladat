
const colors = ['#FF6347', '#32CD32', '#1E90FF', '#FFD700', '#8A2BE2'];

let currentColorIndex = 0;

setInterval(function() {
    
    document.title = "%c" + document.title; 
    document.title = document.title.replace("%c", "color: " + colors[currentColorIndex] + ";");

   
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}, 1000); 