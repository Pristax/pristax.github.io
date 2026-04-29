const interactive = document.querySelector('.interactive');

console.log("JavaScript Running");

window.addEventListener('mousemove', (e) => {
    interactive.style.left = e.clientX + 'px';
    interactive.style.top = e.clientY + 'px';
});