# Capítulo 7: Aprendiendo Grid Layout

## 7.1. Introducción al diseño con Grid Layout

CSS Grid Layout es un sistema bidimensional que permite crear layouts complejos de manera más eficiente.

### Conceptos básicos:
- Grid Container: El elemento padre
- Grid Items: Los elementos hijos
- Grid Lines: Las líneas que dividen la cuadrícula
- Grid Tracks: Filas y columnas
- Grid Areas: Agrupaciones de celdas
- Grid Gaps: Espacios entre celdas

```css
/* Grid Container básico */
.grid-container {
    display: grid;
    /* o display: inline-grid; */
}
```

## 7.2. Configuración del contenedor de grid

### Propiedades principales:
```css
.grid-container {
    display: grid;
    
    /* Definir columnas */
    grid-template-columns: 200px 1fr 2fr;
    
    /* Definir filas */
    grid-template-rows: 100px auto 200px;
    
    /* Usar repeat() */
    grid-template-columns: repeat(3, 1fr);
    
    /* Espaciado */
    gap: 20px;
    /* o específicamente */
    row-gap: 20px;
    column-gap: 10px;
    
    /* Alineación de items */
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
    
    /* Alineación del contenido */
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

### Ejemplo práctico:
```html
<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
</div>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.grid-item {
    background-color: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
}
</style>
```

## 7.3. Uso de espacios en el grid

### Grid Template Areas
```css
.grid-container {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav content sidebar"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.content { grid-area: content; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }
```

### Ejemplo de layout con áreas:
```html
<div class="grid-layout">
    <header class="header">Header</header>
    <nav class="nav">Navigation</nav>
    <main class="content">Main Content</main>
    <aside class="sidebar">Sidebar</aside>
    <footer class="footer">Footer</footer>
</div>

<style>
.grid-layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav content sidebar"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 20px;
    padding: 20px;
}

.grid-layout > * {
    padding: 20px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.content { grid-area: content; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }
</style>
```

## 7.4. Trabajando con elementos del grid

### Propiedades de los Grid Items:
```css
.grid-item {
    /* Posicionamiento específico */
    grid-column: 1 / 3;
    grid-row: 2 / 4;
    
    /* O usando start/end */
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    
    /* Usando span */
    grid-column: span 2;
    grid-row: span 2;
    
    /* Auto-alineación */
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```

### Ejemplo de posicionamiento:
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
}

.item-destacado {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #e74c3c;
}

.item-normal {
    background-color: #3498db;
}

/* Todos los items */
.grid-container > * {
    padding: 20px;
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

## 7.5. Adaptabilidad con media queries en Grid Layout

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

/* Tablets */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .grid-layout {
        grid-template-areas:
            "header header"
            "nav nav"
            "content content"
            "sidebar sidebar"
            "footer footer";
        grid-template-columns: 1fr 1fr;
    }
}

/* Móviles */
@media (max-width: 480px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
    
    .grid-layout {
        grid-template-areas:
            "header"
            "nav"
            "content"
            "sidebar"
            "footer";
        grid-template-columns: 1fr;
    }
}
```
# Capítulo 7: Aprendiendo Grid Layout (Continuación)

## 7.6. Diseño adaptable con Grid Layout sin media queries

### Usando auto-fit y auto-fill
```css
.grid-container {
    display: grid;
    /* auto-fit se ajusta al contenedor */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

/* Alternativa con auto-fill */
.grid-container-fill {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

### Diseño responsivo con Grid Areas dinámicas
```css
.advanced-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    display: grid;
    grid-template-areas:
        "imagen"
        "titulo"
        "descripcion"
        "acciones";
    gap: 10px;
}

@supports (grid-template-rows: masonry) {
    .advanced-grid {
        grid-template-rows: masonry;
    }
}
```

### Ejemplo de galería adaptable
```html
<div class="gallery">
    <div class="gallery-item">
        <img src="imagen1.jpg" alt="Imagen 1">
        <div class="overlay">
            <h3>Título 1</h3>
            <p>Descripción de la imagen</p>
        </div>
    </div>
    <!-- Más items -->
</div>

<style>
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.gallery-item {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
    border-radius: 8px;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    padding: 20px;
    color: white;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-item:hover .overlay {
    transform: translateY(0);
}
</style>
```

## 7.7. Practicando Grid Layout con Grid Garden

### Nivel 1: Conceptos Básicos
```css
/* Regar la zanahoria usando grid-column-start */
#garden {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

#agua {
    grid-column-start: 3;
}
```

### Nivel 2: Grid Lines
```css
/* Usar grid-column-start y grid-column-end */
#agua {
    grid-column-start: 2;
    grid-column-end: 4;
}
```

### Nivel 3: Span
```css
/* Usar la palabra clave span */
#agua {
    grid-column-start: 1;
    grid-column: span 3;
}
```

### Nivel Avanzado: Combinaciones
```css
/* Combinar diferentes propiedades */
#agua {
    grid-area: 1 / 2 / 3 / 4;
}
```

### Ejemplo práctico inspirado en Grid Garden
```html
<div class="garden">
    <div class="plot water">💧</div>
    <div class="plot carrot">🥕</div>
    <div class="plot flower">🌸</div>
    <div class="plot sun">☀️</div>
</div>

<style>
.garden {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
    padding: 20px;
    background-color: #8bc34a;
    border-radius: 8px;
}

.plot {
    background-color: #795548;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}

.water {
    background-color: #2196f3;
    grid-column: span 2;
}

.carrot {
    background-color: #ff9800;
    grid-row: span 2;
}

.flower {
    background-color: #e91e63;
    grid-area: 2 / 3 / 4 / 5;
}

.sun {
    background-color: #ffc107;
    grid-column: 1 / 3;
    grid-row: 4;
}
</style>
```

### Consejos adicionales para Grid Garden:

1. **Números negativos**: Se pueden usar para contar desde el final
```css
.elemento {
    grid-column-start: -1; /* Última línea */
}
```

2. **Orden implícito vs explícito**
```css
.grid-container {
    grid-auto-flow: row | column | dense;
}
```

3. **Alineación en Grid Garden**
```css
.elemento {
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```
