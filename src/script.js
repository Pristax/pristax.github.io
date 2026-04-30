document.addEventListener("DOMContentLoaded", () => {

    // INTERACTIVE CURSOR
    const interactive = document.querySelector(".interactive");
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        if (interactive) {
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;
            interactive.style.left = (currentX - 400) + "px";
            interactive.style.top = (currentY - 400) + "px";
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // TYPEWRITER LOOP
    const typedElement = document.querySelector(".typed");
    const words = ["for fun.", "to learn."];
    let wordIdx = 0, charIdx = 0, isDel = false;

    function typeLoop() {
        if (!typedElement) return;

        const currentWord = words[wordIdx];
        const currentText = currentWord.substring(0, charIdx);
        typedElement.textContent = currentText;

        if (!isDel) {
            charIdx++;
            if (charIdx > currentWord.length) {
                isDel = true;
                setTimeout(typeLoop, 1000);
                return;
            }
        } else {
            charIdx--;
            if (charIdx < 0) {
                isDel = false;
                wordIdx = (wordIdx + 1) % words.length;
                setTimeout(typeLoop, 400);
                return;
            }
        }
        setTimeout(typeLoop, isDel ? 60 : 120);
    }
    typeLoop();
});