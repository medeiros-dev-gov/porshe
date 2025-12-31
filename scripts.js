/* ===============================
   ELEMENTOS DO SLIDER
=============================== */
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.indicators li');
const number = document.querySelector('.number');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slider = document.querySelector('.slider');

let index = 0;

/* ===============================
   FUNÇÃO PRINCIPAL
=============================== */
function showSlide(i) {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    items[i].classList.add('active');
    dots[i].classList.add('active');
    number.textContent = String(i + 1).padStart(2, '0');
}

/* ===============================
   ANIMAÇÃO DAS SETAS
=============================== */
function animateArrows() {
    slider.classList.add('animating');
    setTimeout(() => slider.classList.remove('animating'), 250);
}

/* ===============================
   BOTÕES
=============================== */
next.onclick = () => {
    animateArrows();
    index = (index + 1) % items.length;
    showSlide(index);
};

prev.onclick = () => {
    animateArrows();
    index = (index - 1 + items.length) % items.length;
    showSlide(index);
};

/* ===============================
   MENU MOBILE
=============================== */
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.onclick = () => {
    menu.classList.toggle('show');
};

/* ===============================
   SWIPE MOBILE
=============================== */
let startX = 0;

slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
}, { passive: true });

slider.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
        diff > 0 ? next.click() : prev.click();
    }
});
