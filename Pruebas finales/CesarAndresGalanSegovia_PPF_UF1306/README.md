# Integración de Efecto Parallax - Senderos Naturales

## Descripción del Proyecto
Este proyecto consiste en la integración de un **efecto parallax** a una página web existente de temática natural sobre senderos. Se ha aplicado el efecto específicamente al header de la página para crear una experiencia visual más atractiva y moderna.

## Cambios Realizados

### 1. Estructura HTML Modificada
**Archivo:** `parallax-page.html`

#### Cambios principales:
- **Header original** → **Header con estructura parallax**
  ```html
  <!-- Antes: header simple -->
  <header class="header">
    <h1>Senderos Naturales</h1>
  </header>
  
  <!-- Después: header con parallax -->
  <header class="parallax-header">
    <div class="parallax-bg"></div>
    <div class="header-content">
      <h1>Descubre los Senderos</h1>
      <p>Explora la naturaleza en su máximo esplendor</p>
    </div>
  </header>
  ```

- **Nuevo elemento** `.parallax-bg` para manejar la imagen de fondo con efecto parallax
- **Contenedor** `.header-content` para el texto superpuesto con mejor legibilidad
- **Script JavaScript** agregado para controlar el efecto parallax

### 2. Estilos CSS Implementados
**Archivo:** `parallax-styles.css`

#### Nuevas clases y efectos:

**`.parallax-header`**
- Altura completa de viewport (100vh)
- Posicionamiento relativo para contener elementos absolutos
- Overflow hidden para el efecto parallax

**`.parallax-bg`**
- Imagen de fondo de alta calidad (sendero de montaña)
- `background-attachment: fixed` para efecto parallax en escritorio
- Dimensiones ampliadas (120% altura) para evitar espacios vacíos
- `will-change: transform` para optimización de rendimiento

**`.header-content`**
- Fondo semitransparente con `backdrop-filter: blur(10px)`
- Sombreado de texto personalizado con colores naturales:
  ```css
  text-shadow: 
    3px 3px 6px rgba(0, 0, 0, 0.8),
    0 0 30px rgba(46, 125, 50, 0.5),
    0 0 50px rgba(139, 195, 74, 0.3);
  ```
- Animaciones de aparición (`fadeInUp`)

### 3. JavaScript para Efecto Parallax
**Archivo:** `parallax-script.js`

#### Funcionalidades implementadas:

**Efecto parallax principal:**
```javascript
function applyParallax() {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    const yPos = scrolled * parallaxSpeed;
    parallaxBg.style.transform = `translateY(${yPos}px)`;
}
```

**Optimizaciones:**
- **RequestAnimationFrame** para mejor rendimiento
- **Throttling** para evitar cálculos excesivos
- **Detección de viewport** para aplicar solo cuando es visible

### 4. Mejoras de Diseño

#### Optimizaciones implementadas:
- **Altura completa** de viewport para máximo impacto visual
- **Posicionamiento absoluto** optimizado para el efecto parallax
- **Animaciones suaves** con transiciones CSS

## Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript Vanilla** - Efecto parallax sin librerías

### Técnicas Avanzadas
- **CSS Transforms** - Para el movimiento parallax
- **RequestAnimationFrame** - Animaciones suaves
- **Backdrop Filter** - Efectos de desenfoque modernos

## Problemas Resueltos

### 1. Rendimiento de Animaciones
**Problema:** Las animaciones parallax pueden causar lag en el navegador
**Solución:** 
- Throttling con `requestAnimationFrame`
- `will-change: transform` para optimización GPU

### 2. Legibilidad del Texto
**Problema:** Texto difícil de leer sobre imagen de fondo
**Solución:** 
- Fondo semitransparente con blur
- Sombreado de texto multicapa
- Contraste mejorado con colores naturales

## Estructura Final de Archivos

```
├── parallax-page.html          # Página principal modificada
├── parallax-styles.css         # Estilos con efecto parallax
├── parallax-script.js          # JavaScript para el efecto
└── README.md                   # Este documento
```

## Instrucciones de Uso

1. Abrir `parallax-page.html` en cualquier navegador moderno
2. Hacer scroll para ver el efecto parallax en acción
3. Disfrutar de la experiencia visual mejorada

## Resultado Final

La página web original ha sido transformada de una presentación estática a una experiencia interactiva moderna con:

✅ **Efecto parallax suave** en el header  
✅ **Imagen de alta calidad** de temática natural  
✅ **Diseño optimizado** para navegadores modernos  
✅ **Animaciones optimizadas** para mejor rendimiento  
✅ **Experiencia visual mejorada** con efectos modernos  

---
*Proyecto desarrollado como ejercicio de integración de efectos parallax en páginas web existentes.*
