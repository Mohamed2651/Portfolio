document.addEventListener('DOMContentLoaded', () => {

    
    const cards = document.querySelectorAll('.skill-card, .project-card');
    
    // Función optimizada para revisar si un elemento está visible en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Función que agrega la clase 'is-visible' si está en el viewport
    function checkVisibility() {
        cards.forEach(card => {
            if (!card.classList.contains('card-animate')) {
                card.classList.add('card-animate');
            }
            
            if (isElementInViewport(card)) {
                card.classList.add('is-visible');
            }
        });
    }

    // Ejecutar la función al cargar la página (para las cards ya visibles)
    checkVisibility(); 
    
    // Ejecutar la función al hacer scroll (para las cards que entran)
    window.addEventListener('scroll', checkVisibility);

    // 2. Transición del Header
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.98)'; 
        } else {
            header.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
        }
    });

});