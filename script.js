document.addEventListener('DOMContentLoaded', () => {
    // --- EXISTING LOGIC (PRESERVED) ---
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const questionText = document.getElementById('question-text');
    const mainImage = document.getElementById('main-image');
    const buttonGroup = document.getElementById('button-group');

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

    yesBtn.addEventListener('click', () => {
        questionText.innerText = "Nandini, will you be my Valentine? YAY! 🎉";
        buttonGroup.style.display = 'none';
        mainImage.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        launchConfetti();
    });

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

    // --- NEW LOGIC: SECRET HEART BUTTON ---
    const heartBtn = document.getElementById('heart-btn');
    const secretCard = document.getElementById('secret-card');
    const closeSecret = document.getElementById('close-secret');

    // Show the card when heart is clicked
    heartBtn.addEventListener('click', () => {
        secretCard.classList.remove('hidden');
        // Small delay to allow CSS transition to render the scale up
        setTimeout(() => {
            secretCard.classList.add('active');
        }, 10);
    });

    // Close the card
    closeSecret.addEventListener('click', () => {
        secretCard.classList.remove('active');
        setTimeout(() => {
            secretCard.classList.add('hidden');
        }, 400); // Wait for transition to finish
    });
});
