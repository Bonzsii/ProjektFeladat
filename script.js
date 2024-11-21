let timeLeft = 10;
        const szamlalo = document.getElementById('countdown');
        const uzenet = document.getElementById('message');

        const interval = setInterval(() => {
            timeLeft--;
            szamlalo.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(interval);
                szamlalo.style.display = 'none';
                uzenet.style.display = 'block';
            }
        }, 1000); 


<<<<<<< HEAD
        document.addEventListener('DOMContentLoaded', function() {

            setTimeout(function() {
               
                let animMessage = document.createElement("p");
                
             
                animMessage.textContent = "Kezdődik a varázslat!";
                
           
        document.body.appendChild(animMessage);
            animMessage.style.position = "absolute";
            animMessage.style.top = "50%";
            animMessage.style.left = "50%";
            animMessage.style.transform = "translate(-50%, -50%)";
            animMessage.style.fontSize = "40px";
            animMessage.style.color = "darkblue"; 
            animMessage.style.fontWeight = "bold";
    }, 3000)
});
=======
        
>>>>>>> 8b0c7c3a398e97886c53df0e914b354ee90eabba
