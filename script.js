const fortunes = [
    "Your fortune: A little date is coming your way… 🤍"
];

let lastFortune = -1;

function crackCookie() {
    const cookie = document.getElementById("cookie");
    const fortuneText = document.getElementById("fortuneText");
    const tryAgainBtn = document.getElementById("tryAgain");
    
    cookie.style.animation = "crackAnimation 0.5s ease-out";
    
    setTimeout(() => {
        cookie.style.display = "none";
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * fortunes.length);
        } while (randomIndex === lastFortune && fortunes.length > 1);
        
        lastFortune = randomIndex;
        
        fortuneText.classList.remove("hidden");
        fortuneText.innerHTML = fortunes[randomIndex];
        fortuneText.style.animation = "fadeIn 0.5s ease";
        
        tryAgainBtn.classList.remove("hidden");
        tryAgainBtn.style.animation = "fadeIn 0.5s ease 0.3s both";
        
        createSparkles();
    }, 500);
}

function resetCookie() {
    const cookie = document.getElementById("cookie");
    const fortuneText = document.getElementById("fortuneText");
    const tryAgainBtn = document.getElementById("tryAgain");
    
    cookie.style.animation = "";
    fortuneText.style.animation = "";
    tryAgainBtn.style.animation = "";
    
    fortuneText.classList.add("hidden");
    tryAgainBtn.classList.add("hidden");
    
    cookie.style.display = "inline-block";
    cookie.style.animation = "bounceIn 0.5s ease-out";
}

function createSparkles() {
    const container = document.querySelector('.fortune-container');
    
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '1.2rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = `sparkleFloat 1s ease-out forwards`;
        sparkle.style.animationDelay = `${i * 0.1}s`;
        
        container.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1500);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes crackAnimation {
        0% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(-10deg) scale(1.1); }
        50% { transform: rotate(10deg) scale(1.2); }
        75% { transform: rotate(-5deg) scale(0.9); }
        100% { transform: rotate(0deg) scale(0); opacity: 0; }
    }
    
    @keyframes bounceIn {
        0% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes sparkleFloat {
        0% { 
            transform: translateY(0) scale(0);
            opacity: 1;
        }
        100% { 
            transform: translateY(-30px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);