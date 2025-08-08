# Documentación de Diseño - Cleanseas

## Justificación de Decisiones de Diseño

### Paleta de Colores

#### Colores Principales
- **Azul Primario (#0077be)**: Representa el océano y transmite confianza, profesionalismo y serenidad. Es el color principal de la marca Cleanseas.
- **Azul Secundario (#00a8cc)**: Una variación más clara que aporta dinamismo y modernidad, utilizada para efectos hover y elementos interactivos.
- **Verde Azulado (#20b2aa)**: Evoca la vida marina y los ecosistemas acuáticos, usado como color de acento para destacar información importante.

#### Colores de Soporte
- **Verde (#28a745)**: Para mensajes de éxito y elementos positivos relacionados con la conservación.
- **Amarillo (#ffc107)**: Para advertencias y llamadas de atención sobre temas ambientales.
- **Rojo (#dc3545)**: Para errores y elementos que requieren atención inmediata.

#### Paleta Neutra
- **Blancos y Grises**: Seleccionados cuidadosamente para garantizar suficiente contraste y legibilidad tanto en modo claro como oscuro.

### Justificación de Accesibilidad de Colores

1. **Contraste WCAG AA**: Todos los pares de colores cumplen con un ratio de contraste mínimo de 4.5:1 para texto normal y 3:1 para texto grande.
2. **Daltonismo**: Los colores elegidos son distinguibles para personas con diferentes tipos de daltonismo.
3. **Modo Alto Contraste**: Se incluye soporte para usuarios que prefieren alto contraste.

### Tipografía

#### Fuentes Seleccionadas

**Inter (Primaria)**
- **Justificación**: Fuente sans-serif moderna y altamente legible, especialmente diseñada para interfaces digitales.
- **Características**: Excelente legibilidad en pantallas, buena legibilidad a diferentes tamaños, amplio soporte de caracteres.
- **Uso**: Navegación, texto de interfaz, párrafos, formularios.

**Merriweather (Secundaria)**
- **Justificación**: Fuente serif optimizada para lectura en pantalla, que aporta elegancia y seriedad institucional.
- **Características**: Diseñada específicamente para lectura prolongada en pantallas, muy legible en diferentes tamaños.
- **Uso**: Títulos, encabezados, texto destacado.

#### Escala Tipográfica
- Se implementa una escala tipográfica coherente que va desde 0.75rem hasta 3rem
- Utiliza la proporción áurea para crear jerarquía visual
- Adaptable a diferentes tamaños de pantalla

### Estructura y Layout

#### Sistema de Grid
- **CSS Grid y Flexbox**: Combinación moderna para crear layouts flexibles y responsivos
- **Container System**: Sistema de contenedores con anchos máximos definidos para diferentes breakpoints
- **Spacing System**: Escala de espaciado consistente basada en múltiplos de 0.25rem

#### Principios de Diseño Aplicados

1. **Jerarquía Visual**
   - Uso de tamaños de fuente y pesos para crear clara jerarquía
   - Espaciado consistente para agrupar elementos relacionados
   - Colores estratégicos para dirigir la atención

2. **Proximidad**
   - Elementos relacionados están agrupados visualmente
   - Espaciado mayor entre secciones diferentes
   - Cards y contenedores para agrupar información

3. **Alineación**
   - Grid system consistente
   - Alineación de texto y elementos coherente
   - Uso de márgenes y padding uniformes

4. **Contraste**
   - Contraste de color para legibilidad
   - Contraste de tamaño para jerarquía
   - Contraste de peso de fuente para énfasis

#### Responsividad

**Breakpoints Definidos:**
- Mobile: hasta 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1200px
- Large Desktop: 1201px+

**Estrategia Mobile-First:**
- Diseño base optimizado para móviles
- Progressive enhancement para pantallas más grandes
- Touch-friendly con botones y enlaces de al menos 44px

### Modo Oscuro y Claro

#### Implementación
- **CSS Custom Properties**: Variables para fácil cambio de tema
- **Detección Automática**: Respeta la preferencia del sistema operativo
- **Persistencia**: Guarda la preferencia del usuario en localStorage
- **Transiciones Suaves**: Animaciones para el cambio de tema

#### Consideraciones de Accesibilidad
- Ambos modos cumplen con estándares de contraste WCAG AA
- Iconos claros para identificar el modo actual
- Fácil acceso al toggle de tema en header

### Componentes de UI

#### Botones
- **Diseño**: Bordes redondeados, padding generoso, estados claros
- **Estados**: Normal, hover, focus, disabled
- **Accesibilidad**: Focus visible, aria-labels, tamaño mínimo de 44px

#### Cards
- **Elevación**: Sombras sutiles que aumentan en hover
- **Spacing**: Padding interno consistente
- **Interactividad**: Animaciones suaves en hover

#### Formularios
- **Usabilidad**: Labels claros, validación en tiempo real, mensajes de error específicos
- **Accesibilidad**: Asociación correcta label-input, aria-describedby para errores
- **Visual**: Diseño limpio con estados de focus claros

### Iconografía

#### Emojis como Iconos
- **Justificación**: Universalmente reconocibles, no requieren carga adicional, escalables
- **Consistencia**: Uso coherente a lo largo del sitio
- **Accesibilidad**: Acompañados de texto descriptivo o aria-labels

### Animaciones y Transiciones

#### Principios
- **Sutileza**: Animaciones suaves que mejoran la experiencia sin distraer
- **Funcionalidad**: Cada animación tiene un propósito (feedback, orientación, delight)
- **Rendimiento**: Uso de transform y opacity para animaciones eficientes
- **Accesibilidad**: Respeto por `prefers-reduced-motion`

#### Tipos de Animaciones
- **Hover Effects**: Elevación de cards, cambio de colores
- **Scroll Animations**: Fade in de elementos al entrar en viewport
- **Transitions**: Cambios de estado suaves (tema, navegación móvil)

### Navegación

#### Header Fijo
- **Funcionalidad**: Acceso constante a navegación
- **Visual**: Efecto de sombra al hacer scroll
- **Mobile**: Hamburger menu con overlay

#### Navegación por Anclas
- **Smooth Scroll**: Desplazamiento suave entre secciones
- **Active States**: Indicación visual de sección actual
- **Offset**: Compensación por header fijo

### Optimización para SEO

#### Estructura Semántica
- **HTML5 Semantic Elements**: Header, nav, main, section, article, footer
- **Heading Hierarchy**: Estructura lógica de h1-h6
- **Schema.org**: Markup estructurado para organizaciones

#### Meta Tags
- **Open Graph**: Para redes sociales
- **Twitter Cards**: Para Twitter
- **Description y Keywords**: Optimizados para buscadores

### Accesibilidad Web

#### Cumplimiento WCAG 2.1 AA
- **Contraste**: Ratios de contraste adecuados
- **Navegación por Teclado**: Todos los elementos interactivos accesibles
- **Screen Readers**: Aria-labels, landmarks, estructura semántica
- **Focus Management**: Indicadores de focus visibles

#### Características Específicas
- **Skip Links**: Navegación rápida al contenido principal
- **Alt Text**: Para todas las imágenes (cuando se implementen)
- **Form Labels**: Asociación correcta de etiquetas
- **Error Messages**: Mensajes específicos y útiles

### Rendimiento

#### Optimizaciones Implementadas
- **Critical CSS**: Estilos críticos inline (implementable)
- **Font Loading**: Preconnect a Google Fonts
- **Lazy Loading**: Preparado para imágenes futuras
- **Minificación**: CSS y JS optimizados para producción

#### Métricas Objetivo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Conclusión

El diseño de Cleanseas combina principios modernos de UX/UI con un fuerte enfoque en la accesibilidad y el rendimiento. La paleta de colores oceánicos refuerza la misión de la organización, mientras que la tipografía legible y la estructura clara facilitan la comunicación efectiva del mensaje institucional.
