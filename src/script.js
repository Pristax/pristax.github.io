document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');

    if (!interBubble) return; // pojistka kdyby element neexistoval

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        // plynulé následování kurzoru (smooth efekt)
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;

        interBubble.style.transform =
            `translate(${curX}px, ${curY}px)`;

        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (e) => {
        tgX = e.clientX;
        tgY = e.clientY;
    });

    move();
});

console.log("JS běží");