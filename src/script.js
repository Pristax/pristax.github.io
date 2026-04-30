document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // INTERACTIVE CURSOR
    // =========================

    const interactive = document.querySelector(".interactive");

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        if (interactive) {
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;

            interactive.style.left = (currentX - 400) + "px";
            interactive.style.top = (currentY - 400) + "px";
        }

        requestAnimationFrame(animate);
    }

    animate();

    // =========================
    // TYPEWRITER LOOP
    // =========================

    const typed = document.querySelector(".typed");

    const words = ["for fun.", "to learn."];
    let wordIndex = 0;

    let i = 0;
    let deleting = false;

    function typeLoop() {
        if (!typed) return;

        const currentWord = words[wordIndex];

        if (!deleting) {
            typed.textContent = currentWord.substring(0, i);
            i++;

            if (i > currentWord.length) {
                deleting = true;
                setTimeout(typeLoop, 1000);
                return;
            }

        } else {
            typed.textContent = currentWord.substring(0, i);
            i--;

            if (i < 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length; // přepne slovo
                setTimeout(typeLoop, 400);
                return;
            }
        }

        setTimeout(typeLoop, deleting ? 60 : 120);
    }

    typeLoop();

});