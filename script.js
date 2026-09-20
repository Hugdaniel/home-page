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

// 3. Acordeón Interactivo de FAQ
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Cerrar las demás preguntas para un comportamiento acordeón impecable
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Si no estaba activa, la abrimos
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Envío del Formulario de Cotización a WhatsApp
const quoteForm = document.getElementById('quote-form');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const phoneNumber = "5491137878083"; // Reemplazá con tu número de WhatsApp

      const name = document.getElementById('quote-name').value.trim();
      const service = document.getElementById('quote-service').value;
      const message = document.getElementById('quote-message').value.trim();

      // Armamos el texto sin emojis complejos para evitar errores de codificación
      let text = `¡Hola Visión Design! Estuve viendo la web y quiero consultar sobre un proyecto:\n\n`;
      text += `- *Nombre:* ${name}\n`;
      text += `- *Solución:* ${service}\n`;
      
      if (message) {
        text += `- *Detalles:* ${message}\n`;
      }

      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    });
  }

  // =================================================================
// DETECTOR TÁCTIL (TOUCH RIPPLE EFFECT)
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Elementos que reaccionarán al toque
  const touchElements = document.querySelectorAll('.glass-panel, .btn-cta-wa, .btn-demo, .service-card, .faq-item, .social-icon, .btn-submit-quote');

  touchElements.forEach(element => {
    element.addEventListener('touchstart', function (e) {
      const touch = e.touches[0];
      const rect = element.getBoundingClientRect();
      
      // Crear el círculo de luz
      const ripple = document.createElement('span');
      ripple.classList.add('touch-ripple');
      
      // Tamaño dinámico según la tarjeta o botón
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      
      // Posición basada en el toque del usuario
      ripple.style.left = `${touch.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${touch.clientY - rect.top - size / 2}px`;
      
      element.appendChild(ripple);

      // Eliminar el elemento una vez completada la animación
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }, { passive: true });
  });
});

