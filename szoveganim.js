const colors = ['red', 'blue', 'green', 'orange', 'purple'];

         
    setInterval(() => {
          
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
    
        document.getElementById('tit').style.color = randomColor;
    }, 1000);