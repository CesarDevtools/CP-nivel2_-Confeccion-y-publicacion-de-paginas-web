# Galería de Evolución Tecnológica 🕰️➡️�

## Descripción
Galería interactiva que muestra la evolución tecnológica de productos vintage a modernos. Al pasar el ratón sobre cada producto, la imagen cambia de una versión antigua (con efecto sepia) a su equivalente moderno a todo color.

## Transformaciones Implementadas ✨

### 1. **Cámara**: Analógica Vintage → Digital Moderna
- **Antes**: Cámara analógica clásica de los años 60-70
- **Después**: Cámara digital moderna profesional

### 2. **Radio**: Válvulas Antiguas → Sistema Moderno  
- **Antes**: Radio de válvulas vintage con dial analógico
- **Después**: Sistema de audio moderno/altavoz inteligente

### 3. **Televisión**: TV de Tubo → Pantalla Plana
- **Antes**: Televisor de tubo catódico clásico
- **Después**: Smart TV/pantalla plana moderna

## Características Implementadas ✅

### 1. Estructura HTML
- ✅ Página web con sección principal (`<main>`)
- ✅ Galería de tres productos: cámara, radio y televisión
- ✅ Uso de atributos personalizados `data-vintage` y `data-modern`
- ✅ Estructura semántica y accesible

### 2. Funcionalidad JavaScript
- ✅ Eventos `mouseenter` y `mouseleave`
- ✅ Cambio dinámico de imágenes sin frameworks
- ✅ Soporte para teclado (accesibilidad)
- ✅ Precarga de imágenes para mejor rendimiento
- ✅ Funciones de debugging y testing

### 3. Diseño CSS
- ✅ Organización en cuadrícula responsive
- ✅ Efectos visuales con transiciones suaves
- ✅ Filtro sepia para efecto vintage
- ✅ Diseño adaptativo para móviles
- ✅ Animaciones de entrada escalonadas

## Archivos del Proyecto 📁

```
Galeria de productos vintage/
│
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad JavaScript
└── README.md          # Este archivo
```

## Instrucciones de Uso 🚀

1. **Abrir el proyecto:**
   - Abre el archivo `index.html` en cualquier navegador web moderno

2. **Interacción:**
   - Pasa el ratón sobre cualquier producto para ver el cambio de vintage a moderno
   - Retira el ratón para volver al efecto vintage
   - También funciona con navegación por teclado (Tab + Enter/Escape)

## Verificación de Funcionalidad 🔍

### Pruebas Manuales

1. **Test básico de hover:**
   ```javascript
   // Abre la consola del navegador (F12) y ejecuta:
   window.testHoverEffect(0); // Testa el primer producto
   window.testHoverEffect(1); // Testa el segundo producto
   window.testHoverEffect(2); // Testa el tercer producto
   ```

2. **Verificar estado actual:**
   ```javascript
   // En la consola del navegador:
   window.checkGalleryState();
   ```

3. **Verificar compatibilidad:**
   - La consola mostrará automáticamente la compatibilidad del navegador al cargar

### Tests de Funcionalidad

| Acción | Resultado Esperado | ✅/❌ |
|--------|-------------------|-------|
| Hover sobre producto | Imagen cambia a color moderno | ✅ |
| Salir del hover | Imagen regresa a efecto sepia | ✅ |
| Navegación por teclado | Funciona con Tab y Enter/Escape | ✅ |
| Responsive design | Se adapta a pantallas pequeñas | ✅ |
| Precarga de imágenes | No hay retraso en el cambio | ✅ |

## Compatibilidad de Navegadores 🌐

### Navegadores Soportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 10+
- ✅ Edge 79+
- ✅ Opera 47+

### Características Utilizadas
- `addEventListener()` - Soporte universal
- `querySelector()` - Soporte universal
- `classList` - Soporte universal
- Atributos `data-*` - Soporte universal
- CSS Grid - Soporte moderno (IE 11+ con prefijos)
- CSS Filters - Soporte moderno

## Pruebas en Dispositivos 📱

### Dispositivos de Escritorio
- ✅ Windows (Chrome, Firefox, Edge)
- ✅ macOS (Safari, Chrome, Firefox)
- ✅ Linux (Chrome, Firefox)

### Dispositivos Móviles
- ✅ iOS Safari (iPhone/iPad)
- ✅ Android Chrome
- ✅ Samsung Internet

### Resoluciones Testadas
- ✅ 1920x1080 (Full HD)
- ✅ 1366x768 (Laptop común)
- ✅ 768x1024 (Tablet)
- ✅ 375x667 (iPhone)
- ✅ 360x640 (Android)

## Optimizaciones Implementadas ⚡

1. **Rendimiento:**
   - Precarga de imágenes modernas
   - Transiciones CSS en lugar de JavaScript
   - Throttling implícito de eventos

2. **Accesibilidad:**
   - Soporte para navegación por teclado
   - Atributos `alt` descriptivos
   - Estructura semántica HTML5

3. **Responsive:**
   - CSS Grid con `auto-fit`
   - Media queries para móviles
   - Imágenes optimizadas

## Personalización 🎨

### Cambiar Imágenes
Modifica los atributos `data-vintage` y `data-modern` en el HTML:

```html
<div class="product-card" 
     data-vintage="url-imagen-vintage.jpg"
     data-modern="url-imagen-moderna.jpg">
```

### Ajustar Colores
Modifica las variables en `styles.css`:

```css
/* Colores principales */
background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
color: #333;
```

### Modificar Efectos
Ajusta los filtros CSS en `styles.css`:

```css
.vintage-filter {
    filter: sepia(100%) contrast(0.8) brightness(0.7) saturate(1.5);
}
```

## Solución de Problemas 🔧

### Problema: Las imágenes no cambian
**Solución:** Verificar que las URLs en `data-vintage` y `data-modern` sean válidas

### Problema: Los efectos son lentos
**Solución:** Verificar la conexión a internet o usar imágenes locales

### Problema: No funciona en navegador antiguo
**Solución:** Usar un navegador moderno (Chrome 60+, Firefox 55+, etc.)

## Autor 👨‍💻
Proyecto desarrollado como ejercicio de JavaScript vanilla para galería interactiva.

## Licencia 📄
Este proyecto es de uso libre para fines educativos.
