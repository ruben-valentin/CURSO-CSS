# Capítulo 9: Proyecto con Grid Layout y Flexbox

## 9.1. Recursos iniciales del proyecto combinado

### Estructura del Proyecto
```
proyecto-final/
├── css/
│   ├── normalize.css
│   ├── variables.css
│   ├── styles.css
│   └── responsive.css
├── js/
│   └── main.js
├── images/
│   ├── gallery/
│   └── icons/
└── index.html
```

### Variables CSS (variables.css)
```css
:root {
    /* Colores */
    --color-primary: #2c3e50;
    --color-secondary: #3498db;
    --color-accent: #e74c3c;
    --color-text: #333;
    --color-bg: #f5f6fa;
    --color-white: #ffffff;
    --color-gray-100: #f8f9fa;
    --color-gray-200: #e9ecef;
    --color-gray-300: #dee2e6;
    
    /* Espaciado */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    
    /* Fuentes */
    --font-primary: 'Roboto', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;
    
    /* Tamaños de fuente */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    
    /* Breakpoints */
    --bp-tablet: 768px;
    --bp-desktop: 1024px;
    --bp-wide: 1280px;
}
```

## 9.2. Diseño y planeación de la estructura

### HTML Base
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de Arte</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <div class="app-container">
        <header class="header">
            <!-- Header content -->
        </header>
        
        <nav class="main-nav">
            <!-- Navigation -->
        </nav>
        
        <main class="main-content">
            <aside class="sidebar">
                <!-- Sidebar content -->
            </aside>
            
            <section class="gallery">
                <!-- Gallery grid -->
            </section>
        </main>
        
        <footer class="footer">
            <!-- Footer content -->
        </footer>
    </div>
</body>
</html>
```

### CSS Base (styles.css)
```css
/* Layout principal usando Grid */
.app-container {
    display: grid;
    grid-template-areas:
        "header"
        "nav"
        "main"
        "footer";
    min-height: 100vh;
}

/* Grid areas */
.header { grid-area: header; }
.main-nav { grid-area: nav; }
.main-content { grid-area: main; }
.footer { grid-area: footer; }

/* Layout para desktop */
@media (min-width: 1024px) {
    .app-container {
        grid-template-areas:
            "header header"
            "nav nav"
            "sidebar main"
            "footer footer";
        grid-template-columns: 250px 1fr;
    }
}

/* Estilos generales */
body {
    font-family: var(--font-primary);
    color: var(--color-text);
    background-color: var(--color-bg);
    line-height: 1.6;
}

img {
    max-width: 100%;
    height: auto;
}
```

## 9.3. Creación de menús en HTML

```html
<nav class="main-nav">
    <div class="nav-container">
        <ul class="menu">
            <li class="menu-item active">
                <a href="#home">
                    <span class="icon">🏠</span>
                    <span class="text">Inicio</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#gallery">
                    <span class="icon">🖼️</span>
                    <span class="text">Galería</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#categories">
                    <span class="icon">📁</span>
                    <span class="text">Categorías</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#contact">
                    <span class="icon">✉️</span>
                    <span class="text">Contacto</span>
                </a>
            </li>
        </ul>
        
        <div class="nav-actions">
            <button class="upload-btn">
                <span class="icon">⬆️</span>
                <span class="text">Subir Imagen</span>
            </button>
        </div>
    </div>
</nav>
```

## 9.4. Montaje del diseño con CSS Grid Layout

```css
/* Estructura principal con Grid */
.main-content {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: var(--space-lg);
    max-width: var(--bp-wide);
    margin: 0 auto;
    padding: var(--space-lg);
}

/* Galería usando Grid */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--space-md);
}

/* Sistema de layout para diferentes vistas */
.layout-grid {
    display: grid;
    gap: var(--space-md);
}

.layout-grid.columns-2 {
    grid-template-columns: repeat(2, 1fr);
}

.layout-grid.columns-3 {
    grid-template-columns: repeat(3, 1fr);
}

.layout-grid.columns-4 {
    grid-template-columns: repeat(4, 1fr);
}

/* Media queries para responsividad */
@media (max-width: 1024px) {
    .main-content {
        grid-template-columns: 1fr;
    }
    
    .layout-grid.columns-4 {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .layout-grid.columns-3,
    .layout-grid.columns-4 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .layout-grid.columns-2,
    .layout-grid.columns-3,
    .layout-grid.columns-4 {
        grid-template-columns: 1fr;
    }
}
```

## 9.5. Estilización del header en CSS

```css
.header {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.header-container {
    max-width: var(--bp-wide);
    margin: 0 auto;
    padding: var(--space-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-left {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.logo {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--color-white);
    text-decoration: none;
}

.search-bar {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    padding: var(--space-xs) var(--space-sm);
}

.search-input {
    background: none;
    border: none;
    color: var(--color-white);
    padding: var(--space-xs);
    min-width: 200px;
}

.search-input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.header-right {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.user-menu {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    cursor: pointer;
    transition: opacity 0.3s;
}

.user-menu:hover {
    opacity: 0.8;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}

.user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 9.6. Diseño del sidebar utilizando Grid

```css
.sidebar {
    background-color: var(--color-white);
    border-radius: 8px;
    padding: var(--space-md);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar-section {
    display: grid;
    gap: var(--space-md);
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sidebar-title {
    font-size: var(--text-lg);
    font-weight: 500;
    margin: 0;
}

.filter-group {
    display: grid;
    gap: var(--space-sm);
}

.filter-label {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    cursor: pointer;
}

.filter-checkbox {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid var(--color-gray-300);
    border-radius: 4px;
    position: relative;
    cursor: pointer;
}

.filter-checkbox:checked {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
}

.filter-checkbox:checked::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
}
```

## 9.7. Incorporación del footer al diseño

```css
.footer {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: var(--space-xl) 0;
    margin-top: auto;
}

.footer-container {
    max-width: var(--bp-wide);
    margin: 0 auto;
    padding: 0 var(--space-md);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-xl);
}

.footer-section {
    display: grid;
    gap: var(--space-md);
}

.footer-title {
    font-size: var(--text-lg);
    font-weight: 500;
    margin: 0;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: var(--space-sm);
}

.footer-link {
    color: var(--color-gray-200);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-link:hover {
    color: var(--color-white);
}

.footer-bottom {
    margin-top: var(--space-xl);
    padding-top: var(--space-md);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}

@media (max-width: 768px) {
    .footer-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .footer-container {
        grid-template-columns: 1fr;
    }
}
```

## 9.8. Uso de JavaScript para imágenes dinámicas

```javascript
// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Configuración de la galería
    const gallery = {
        images: [],
        currentLayout: 'grid',
        perPage: 12,
        currentPage: 1
    };

    // Función para cargar imágenes
    async function loadImages() {
        try {
            const response = await fetch('/api/images');
            const data = await response.json();
            gallery.images = data;
            renderGallery();
        } catch (error) {
            console.error('Error cargando imágenes:', error);
        }
    }

    // Función para renderizar la galería
    function renderGallery() {
        const galleryContainer = document.querySelector('.gallery-grid');
        const images = gallery.images.slice(
            (gallery.currentPage - 1) * gallery.perPage,
            gallery.currentPage * gallery.perPage
        );

        galleryContainer.innerHTML = images.map(image => `
            <div class="gallery-item" data-id="${image.id}">
                <div class="gallery-image">
                    <img src="${image.url}" alt="${image.title}">
                    <div class="gallery-overlay">
                        <h3>${image.title}</h3>
                        <p>${image.description}</p>
                        <div class="gallery-actions">
                            <button class="btn-like">❤️ ${image.likes}</button>
                            <button class="btn-share">🔗 Compartir</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Inicializar lazy loading
        initializeLazyLoading();
    }

    // Implementación de lazy loading
    function initializeLazyLoading() {
        const images = document.querySelectorAll('.gallery-image img');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});
```

## 9.9. Organización de imágenes con Flexbox

```css
/* Estilos para la galería usando Flexbox */
.gallery-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.gallery-filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md);
    background-color: var(--color-white);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-buttons {
    display: flex;
    gap: var(--space-sm);
}

.filter-button {
    padding: var(--space-sm) var(--space-md);
    border: none;
    border-radius: 4px;
    background-color: var(--color-gray-100);
    color: var(--color-text);
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-button.active {
    background-color: var(--color-secondary);
    color: var(--color-white);
}

.gallery-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
}

.gallery-item {
    flex: 1 1 300px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.gallery-image {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.gallery-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: var(--space-md);
    color: var(--color-white);
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-item:hover .gallery-image img {
    transform: scale(1.1);
}
```

## 9.10. BONUS - Distribuir imágenes en columnas CSS

```css
/* Implementación de columnas masonry con CSS */
.masonry-layout {
    columns: 4 300px;
    column-gap: var(--space-md);
}

.masonry-item {
    break-inside: avoid;
    margin-bottom: var(--space-md);
}

/* Estilos avanzados para las imágenes */
.image-effects {
    position: relative;
    overflow: hidden;
}

/* Efecto de zoom suave */
.zoom-effect img {
    transition: transform 0.5s ease;
}

.zoom-effect:hover img {
    transform: scale(1.1);
}

/* Efecto de desenfoque */
.blur-effect img {
    transition: filter 0.3s ease;
}

.blur-effect:hover img {
    filter: blur(3px);
}

/* Efecto de color */
.color-effect img {
    transition: filter 0.3s ease;
}

.color-effect:hover img {
    filter: saturate(1.5) contrast(1.2);
}

/* Animaciones de carga */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.gallery-item {
    animation: fadeIn 0.5s ease backwards;
}

/* Ajustes de accesibilidad */
@media (prefers-reduced-motion: reduce) {
    .gallery-item,
    .gallery-image img,
    .gallery-overlay {
        animation: none;
        transition: none;
    }
}

/* Soporte para modo oscuro */
@media (prefers-color-scheme: dark) {
    :root {
        --color-bg: #1a1a1a;
        --color-text: #ffffff;
        --color-gray-100: #2c2c2c;
        --color-gray-200: #333333;
    }
    
    .gallery-item {
        background-color: var(--color-gray-100);
    }
    
    .gallery-overlay {
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    }
}
```

Este completa el curso completo de CSS. El proyecto final ha demostrado:
1. Combinación efectiva de Grid Layout y Flexbox
2. Implementación de diseño responsivo
3. Integración de JavaScript para funcionalidad dinámica
4. Efectos visuales avanzados
5. Consideraciones de accesibilidad y modo oscuro
6. Optimización de rendimiento con lazy loading
7. Técnicas modernas de CSS
