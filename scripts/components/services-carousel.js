const carousel = document.querySelector(".servicios-grid");
const cards = [...carousel.children];

// Clonamos una vez para hacer el loop
cards.forEach((card) => {
  carousel.appendChild(card.cloneNode(true));
});

// Calculamos el ancho exacto de todas las cards originales
let cardStyle = getComputedStyle(cards[0]);
let cardWidth = cards[0].offsetWidth + parseFloat(cardStyle.marginRight);
let totalWidth = cardWidth * cards.length;

let scrollSpeed = 0.5;
let scrollPos = 0;

function animate() {
  scrollPos += scrollSpeed;
  if (scrollPos >= totalWidth) {
    scrollPos = 0; // reinicio exacto
  }
  carousel.style.transform = `translateX(${-scrollPos}px)`;
  requestAnimationFrame(animate);
}

animate();
