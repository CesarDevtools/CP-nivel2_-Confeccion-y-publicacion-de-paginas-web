/**
 * Galería Interactiva de Productos Vintage
 * 
 * Este script implementa la funcionalidad de cambio de imágenes
 * de vintage (sepia) a moderno (color) usando eventos de mouse.
 * 
 * Funcionalidades:
 * - mouseenter: Cambia a imagen moderna
 * - mouseleave: Regresa a imagen vintage
 * - Usa atributos data-* para almacenar URLs de imágenes
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar todas las tarjetas de productos
    const productCards = document.querySelectorAll('.product-card');
    
    // Función para precargar imágenes y mejorar la experiencia del usuario
    function preloadImages() {
        productCards.forEach(card => {
            const modernUrl = card.getAttribute('data-modern');
            if (modernUrl) {
                const img = new Image();
                img.src = modernUrl;
            }
        });
    }
    
    // Función para cambiar a imagen moderna
    function changeToModern(card) {
        const image = card.querySelector('.product-image');
        const modernUrl = card.getAttribute('data-modern');
        
        if (modernUrl && image) {
            // Cambiar la imagen
            image.src = modernUrl;
            
            // Cambiar las clases de filtro
            image.classList.remove('vintage-filter');
            image.classList.add('modern-filter');
            
            // Añadir efecto visual adicional
            card.style.transform = 'translateY(-10px) scale(1.02)';
            
            // Log para debugging (se puede quitar en producción)
            console.log('Producto evolucionado a versión moderna:', modernUrl);
        }
    }
    
    // Función para cambiar a imagen vintage
    function changeToVintage(card) {
        const image = card.querySelector('.product-image');
        const vintageUrl = card.getAttribute('data-vintage');
        
        if (vintageUrl && image) {
            // Cambiar la imagen
            image.src = vintageUrl;
            
            // Cambiar las clases de filtro
            image.classList.remove('modern-filter');
            image.classList.add('vintage-filter');
            
            // Resetear el efecto visual
            card.style.transform = '';
            
            // Log para debugging (se puede quitar en producción)
            console.log('Producto regresado a versión vintage:', vintageUrl);
        }
    }
    
    // Función para manejar errores de carga de imágenes
    function handleImageError(image) {
        console.error('Error al cargar la imagen:', image.src);
        image.alt = 'Error al cargar la imagen';
        image.style.backgroundColor = '#f0f0f0';
    }
    
    // Aplicar eventos a cada tarjeta de producto
    productCards.forEach((card, index) => {
        const image = card.querySelector('.product-image');
        
        // Evento mouseenter: cambiar a imagen moderna
        card.addEventListener('mouseenter', function() {
            changeToModern(card);
        });
        
        // Evento mouseleave: regresar a imagen vintage
        card.addEventListener('mouseleave', function() {
            changeToVintage(card);
        });
        
        // Manejar errores de carga de imágenes
        if (image) {
            image.addEventListener('error', function() {
                handleImageError(image);
            });
            
            // Añadir atributo de accesibilidad
            image.setAttribute('tabindex', '0');
            
            // Soporte para teclado (accesibilidad)
            image.addEventListener('focus', function() {
                changeToModern(card);
            });
            
            image.addEventListener('blur', function() {
                changeToVintage(card);
            });
        }
        
        // Añadir identificador único para cada tarjeta
        card.setAttribute('data-product-id', `product-${index + 1}`);
        
        // Log de inicialización
        console.log(`Producto ${index + 1} inicializado:`, {
            vintage: card.getAttribute('data-vintage'),
            modern: card.getAttribute('data-modern')
        });
    });
    
    // Precargar imágenes para mejor rendimiento
    preloadImages();
    
    // Función de verificación del estado (útil para testing)
    window.checkGalleryState = function() {
        const state = {
            totalProducts: productCards.length,
            products: []
        };
        
        productCards.forEach((card, index) => {
            const image = card.querySelector('.product-image');
            state.products.push({
                id: `product-${index + 1}`,
                currentSrc: image.src,
                isVintage: image.classList.contains('vintage-filter'),
                isModern: image.classList.contains('modern-filter'),
                vintageUrl: card.getAttribute('data-vintage'),
                modernUrl: card.getAttribute('data-modern')
            });
        });
        
        return state;
    };
    
    // Log de inicialización completa
    console.log('Galería de productos vintage inicializada correctamente');
    console.log(`Total de productos: ${productCards.length}`);
    console.log('Usa window.checkGalleryState() para verificar el estado actual');
    
    // Función para testing manual
    window.testHoverEffect = function(productIndex) {
        if (productIndex >= 0 && productIndex < productCards.length) {
            const card = productCards[productIndex];
            
            console.log(`Testing hover effect en producto ${productIndex + 1}`);
            
            // Simular mouseenter
            card.dispatchEvent(new Event('mouseenter'));
            
            setTimeout(() => {
                // Simular mouseleave después de 2 segundos
                card.dispatchEvent(new Event('mouseleave'));
                console.log(`Test completado para producto ${productIndex + 1}`);
            }, 2000);
        } else {
            console.error('Índice de producto inválido. Usa 0, 1, o 2');
        }
    };
});

// Función global para debugging en diferentes navegadores
window.addEventListener('load', function() {
    console.log('Página completamente cargada');
    console.log('Navegador:', navigator.userAgent);
    console.log('Tamaño de pantalla:', window.innerWidth + 'x' + window.innerHeight);
});

// Función para verificar compatibilidad
function checkBrowserCompatibility() {
    const features = {
        addEventListener: !!document.addEventListener,
        querySelector: !!document.querySelector,
        classList: !!document.documentElement.classList,
        dataset: !!document.documentElement.dataset
    };
    
    console.log('Compatibilidad del navegador:', features);
    
    const incompatible = Object.keys(features).filter(feature => !features[feature]);
    
    if (incompatible.length > 0) {
        console.warn('Características no compatibles:', incompatible);
        return false;
    }
    
    return true;
}

// Verificar compatibilidad al cargar
checkBrowserCompatibility();
