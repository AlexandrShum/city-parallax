function updateMovement(x, y) {
  document.documentElement.style.setProperty('--move-x', `${x}deg`);
  document.documentElement.style.setProperty('--move-y', `${y}deg`);
}

document.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * -0.003;
  const moveY = (e.clientY - window.innerHeight / 2) * -0.006;
  updateMovement(moveX, moveY);
});

let touchStartX = null;
let touchStartY = null;

document.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) { // Один палец
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

document.addEventListener("touchmove", (e) => {
  if (e.touches.length === 1 && touchStartX !== null && touchStartY !== null) {
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    const deltaX = touchX - window.innerWidth / 2;
    const deltaY = touchY - window.innerHeight / 2;

    const moveX = deltaX * -0.003;
    const moveY = deltaY * -0.006;

    updateMovement(moveX, moveY);
  }
}, { passive: true });
