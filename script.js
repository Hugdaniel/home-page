/**
 * Inicialización de Íconos y Comportamientos Interactivos
 */
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Renderizado de Íconos Vectoriales con Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons({
      attrs: {
        'stroke-width': 1.75, // Trazo fino y minimalista
        'width': 18,
        'height': 18
      }
    });
  }

  // 2. Efecto de compresión en el Header al hacer Scroll
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '8px 20px';
      header.style.background = 'rgba(255, 255, 255, 0.65)';
    } else {
      header.style.padding = '12px 24px';
      header.style.background = 'rgba(255, 255, 255, 0.45)';
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Inicialización de íconos Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons({
      attrs: {
        'stroke-width': 1.75
      }
    });
  }

  // 2. Efecto de Luz Siguiendo al Cursor
  const glow = document.getElementById('mouse-glow');

  window.addEventListener('mousemove', (e) => {
    // Usamos requestAnimationFrame para máxima fluidez a 60fps/120fps
    requestAnimationFrame(() => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });
  });

});