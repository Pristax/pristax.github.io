const interactive = document.querySelector('.interactive');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

// plynulé sledování (smooth efekt)
function animate() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    interactive.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

interactive.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

animate();