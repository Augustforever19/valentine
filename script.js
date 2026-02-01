const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const title = document.getElementById("title");
const buttons = document.getElementById("buttons");
const celebration = document.getElementById("celebration");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (buttons.offsetWidth - noBtn.offsetWidth);
  const y = Math.random() * (buttons.offsetHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";
});

yesBtn.addEventListener("click", () => {
  title.textContent = "Nandini, will you be my Valentine? YAY! ";
  buttons.classList.add("hidden");
  celebration.classList.remove("hidden");
  startConfetti();
});

let confettiPieces = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 80%, 70%)`
    });
  }
  requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(p => {
    p.y += p.speed;
    if (p.y > canvas.height) p.y = -10;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  requestAnimationFrame(updateConfetti);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
