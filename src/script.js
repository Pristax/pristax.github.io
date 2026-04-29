const interactive = document.querySelector('.interactive');

window.addEventListener('mousemove', (e) => {
    interactive.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});