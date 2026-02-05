document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTS ---
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const questionText = document.getElementById('question-text');
    const mainImage = document.getElementById('main-image');
    const buttonGroup = document.getElementById('button-group');
    const heartBtn = document.getElementById('heart-btn');
    const secretCard = document.getElementById('secret-card');
    const closeSecret = document.getElementById('close-secret');

    // --- RUNAWAY NO BUTTON ---
    const moveButton = () => {
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        const maxX = containerWidth - btnWidth - 40;
        const maxY = containerHeight - btnHeight - 40;
        const randomX = Math.random() * maxX + 20;
        const randomY = Math.random() * maxY + 20;

        noBtn.style.position = 'fixed';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    };

    noBtn.addEventListener('mouseenter', moveButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });

    // --- YES BUTTON CLICK ---
    yesBtn.addEventListener('click', () => {
        questionText.innerText = "I knew you would be here, Congratulations on being my Valentine for life 🎉";
        buttonGroup.style.display = 'none';
        mainImage.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        
        // REVEAL THE HEART BUTTON
        heartBtn.classList.remove('hidden');

        launchConfetti();
    });

    // --- CONFETTI LOGIC ---
    const launchConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    // --- SECRET HEART LOGIC ---
    heartBtn.addEventListener('click', () => {
        // 1. Show the card
        secretCard.classList.remove('hidden');
        
        // 2. HIDE THE HEART BUTTON (Critical Fix)
        heartBtn.classList.add('hidden');

        // 3. Animate card in
        setTimeout(() => {
            secretCard.classList.add('active');
        }, 10);
    });

    closeSecret.addEventListener('click', () => {
        secretCard.classList.remove('active');
        setTimeout(() => {
            secretCard.classList.add('hidden');
            // Show heart again so they can reopen if they want
            heartBtn.classList.remove('hidden'); 
        }, 400); 
    });
});
