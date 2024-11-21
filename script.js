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
