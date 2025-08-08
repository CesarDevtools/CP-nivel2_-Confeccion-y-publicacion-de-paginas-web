// Efecto Parallax para el header
document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const header = document.querySelector('.parallax-header');
    
    // Verificamos si los elementos existen
    if (!parallaxBg || !header) return;
    
    // Función para aplicar el efecto parallax
    function applyParallax() {
        const scrolled = window.pageYOffset;
        const headerHeight = header.offsetHeight;
        
        // Solo aplicamos el efecto mientras el header es visible
        if (scrolled < headerHeight) {
            // Velocidad del parallax (0.5 = mitad de velocidad del scroll)
            const parallaxSpeed = 0.5;
            const yPos = scrolled * parallaxSpeed;
            
            parallaxBg.style.transform = `translateY(${yPos}px)`;
        }
    }
    
    // Optimización con requestAnimationFrame
    let ticking = false;
    
    function updateParallax() {
        applyParallax();
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Event listeners
    window.addEventListener('scroll', requestTick);
    window.addEventListener('resize', applyParallax);
    
    // Aplicar efecto inicial
    applyParallax();
    
    // Efecto adicional para dispositivos móviles
    if (window.innerWidth <= 768) {
        // En móviles, reducimos la intensidad del parallax
        const mobileParallaxSpeed = 0.3;
        
        function mobileParallax() {
            const scrolled = window.pageYOffset;
            const yPos = scrolled * mobileParallaxSpeed;
            parallaxBg.style.transform = `translateY(${yPos}px)`;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(mobileParallax);
                ticking = true;
            }
        });
    }
});

// Efecto de aparición gradual al hacer scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = 150;
        
        if (sectionTop < window.innerHeight - sectionVisible) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// CSS inicial para las secciones (se aplica via JavaScript)
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
    });
});