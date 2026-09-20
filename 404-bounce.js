document.addEventListener('DOMContentLoaded', () => {
  const elem = document.getElementById('bouncing-404');
  if (!elem) return;

  // Coordenadas iniciales
  let posX = Math.random() * (window.innerWidth - 200);
  let posY = Math.random() * (window.innerHeight - 100);

  // Velocidad del rebote
  let speedX = 2.2;
  let speedY = 1.8;

  const colors = [
    'linear-gradient(135deg, #ffffff 20%, #38bdf8 100%)',
    'linear-gradient(135deg, #ffffff 20%, #818cf8 100%)',
    'linear-gradient(135deg, #ffffff 20%, #34d399 100%)',
    'linear-gradient(135deg, #ffffff 20%, #f472b6 100%)',
    'linear-gradient(135deg, #ffffff 20%, #fbbf24 100%)'
  ];

  let currentColorIndex = 0;

  function updateBounce() {
    const rect = elem.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    posX += speedX;
    posY += speedY;

    let hit = false;

    if (posX + rect.width >= screenWidth) {
      posX = screenWidth - rect.width;
      speedX *= -1;
      hit = true;
    } else if (posX <= 0) {
      posX = 0;
      speedX *= -1;
      hit = true;
    }

    if (posY + rect.height >= screenHeight) {
      posY = screenHeight - rect.height;
      speedY *= -1;
      hit = true;
    } else if (posY <= 0) {
      posY = 0;
      speedY *= -1;
      hit = true;
    }

    if (hit) {
      currentColorIndex = (currentColorIndex + 1) % colors.length;
      elem.style.background = colors[currentColorIndex];
      elem.style.backgroundClip = 'text';
      elem.style.webkitBackgroundClip = 'text';
    }

    elem.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

    requestAnimationFrame(updateBounce);
  }

  window.addEventListener('resize', () => {
    posX = Math.min(posX, window.innerWidth - elem.offsetWidth);
    posY = Math.min(posY, window.innerHeight - elem.offsetHeight);
  });

  requestAnimationFrame(updateBounce);
});