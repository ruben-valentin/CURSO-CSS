# Capítulo 4: Proyecto Responsive Web

## 4.1. Introducción y recursos del proyecto responsive

### Descripción del Proyecto
Crearemos una tienda en línea responsive con las siguientes características:
- Header con menú de navegación
- Grid de productos
- Sidebar con filtros
- Footer con información de contacto
- Diseño totalmente responsive

### Recursos Necesarios
- Normalize.css para reset de estilos
- Fuentes de Google: Roboto y Open Sans
- Variables CSS personalizadas
- Sistema de grid responsive

## 4.2. Organización y planeación del proyecto

### Estructura de carpetas
```
ecommerce/
├── css/
│   ├── normalize.css
│   ├── styles.css
│   └── responsive.css
├── images/
│   ├── products/
│   └── icons/
├── js/
│   └── main.js
└── index.html
```

## 4.3. Creación de bases HTML y CSS

### HTML Base (index.html)
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Tienda Online</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header class="header">
        <!-- Header content -->
    </header>

    <div class="container">
        <aside class="filters">
            <!-- Filters content -->
        </aside>
        
        <main class="products">
            <!-- Products grid -->
        </main>
    </div>

    <footer class="footer">
        <!-- Footer content -->
    </footer>
</body>
</html>
```

## 4.4. Definición de estilos globales

```css
:root {
    /* Colores */
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --bg-color: #f4f4f4;
    --white: #ffffff;
    
    /* Espaciado */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    
    /* Breakpoints */
    --mobile: 480px;
    --tablet: 768px;
    --desktop: 1024px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    background-color: var(--bg-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-sm);
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: var(--spacing-md);
}

img {
    max-width: 100%;
    height: auto;
}
```

## 4.5. Configuración de un diseño grid responsive

```css
/* Grid System */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--spacing-md);
    padding: var(--spacing-md);
}

/* Responsive Grid */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
    
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}

@media (max-width: 480px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
```

## 4.6. Diseño de menú, contenido y aside

### HTML del Menú y Header
```html
<header class="header">
    <div class="header-top">
        <div class="logo">
            <h1>Mi Tienda</h1>
        </div>
        <div class="search">
            <input type="text" placeholder="Buscar productos...">
            <button type="submit">Buscar</button>
        </div>
        <div class="cart">
            <span class="cart-icon">🛒</span>
            <span class="cart-count">0</span>
        </div>
    </div>
    
    <nav class="main-nav">
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#categorias">Categorías</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
</header>
```

### Estilos del Header y Menú
```css
.header {
    background-color: var(--primary-color);
    padding: var(--spacing-md) 0;
}

.header-top {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--spacing-sm);
}

.logo h1 {
    color: var(--white);
    font-size: 1.5rem;
}

.search {
    flex: 1;
    max-width: 500px;
    margin: 0 var(--spacing-md);
    display: flex;
}

.search input {
    flex: 1;
    padding: var(--spacing-xs);
    border: none;
    border-radius: 4px 0 0 4px;
}

.search button {
    padding: var(--spacing-xs) var(--spacing-sm);
    background-color: var(--secondary-color);
    color: var(--white);
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
}

.cart {
    position: relative;
    color: var(--white);
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--accent-color);
    color: var(--white);
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.8rem;
}

.main-nav {
    background-color: var(--secondary-color);
    margin-top: var(--spacing-sm);
}

.main-nav ul {
    max-width: 1200px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    padding: 0 var(--spacing-sm);
}

.main-nav a {
    color: var(--white);
    text-decoration: none;
    padding: var(--spacing-sm);
    display: block;
    transition: background-color 0.3s;
}

.main-nav a:hover {
    background-color: rgba(0,0,0,0.1);
}
```

## 4.7. Construcción del menú en HTML

```html
<div class="mobile-menu-toggle">
    <span></span>
    <span></span>
    <span></span>
</div>

<nav class="mobile-nav">
    <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li class="has-submenu">
            <a href="#categorias">Categorías</a>
            <ul class="submenu">
                <li><a href="#electronica">Electrónica</a></li>
                <li><a href="#ropa">Ropa</a></li>
                <li><a href="#hogar">Hogar</a></li>
            </ul>
        </li>
        <li><a href="#ofertas">Ofertas</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>
</nav>
```

## 4.8. Estilos CSS del menú

```css
/* Menú móvil */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    padding: var(--spacing-sm);
}

.mobile-menu-toggle span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--white);
    transition: all 0.3s;
}

.mobile-nav {
    display: none;
}

/* Media queries para el menú responsive */
@media (max-width: 768px) {
    .main-nav {
        display: none;
    }
    
    .mobile-menu-toggle {
        display: flex;
    }
    
    .mobile-nav {
        display: block;
        position: fixed;
        top: 0;
        left: -250px;
        width: 250px;
        height: 100vh;
        background-color: var(--primary-color);
        transition: left 0.3s ease;
        z-index: 1000;
    }
    
    .mobile-nav.active {
        left: 0;
    }
    
    .mobile-nav ul {
        list-style: none;
        padding: 0;
    }
    
    .mobile-nav a {
        display: block;
        padding: var(--spacing-sm);
        color: var(--white);
        text-decoration: none;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .submenu {
        display: none;
        background-color: rgba(0,0,0,0.1);
    }
    
    .has-submenu.active .submenu {
        display: block;
    }
}
```

## 4.9. Estructuración de los productos en HTML

```html
<main class="products">
    <div class="grid">
        <article class="product-card">
            <div class="product-image">
                <img src="images/products/product1.jpg" alt="Producto 1">
                <div class="product-tags">
                    <span class="tag new">Nuevo</span>
                    <span class="tag sale">-20%</span>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">Nombre del Producto</h3>
                <div class="product-price">
                    <span class="current-price">$79.99</span>
                    <span class="original-price">$99.99</span>
                </div>
                <div class="product-rating">
                    <span class="stars">★★★★☆</span>
                    <span class="reviews">(24 reviews)</span>
                </div>
                <button class="add-to-cart">Añadir al carrito</button>
            </div>
        </article>
        <!-- Repetir para más productos -->
    </div>
</main>
```

## 4.10. Estilos CSS para los productos

```css
.product-card {
    background-color: var(--white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.product-image {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.product-card:hover .product-image img {
    transform: scale(1.1);
}

.product-tags {
    position: absolute;
    top: var(--spacing-xs);
    left: var(--spacing-xs);
    display: flex;
    gap: var(--spacing-xs);
}

.tag {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--white);
}

.tag.new {
    background-color: var(--secondary-color);
}

.tag.sale {
    background-color: var(--accent-color);
}

.product-info {
    padding: var(--spacing-sm);
}

.product-title {
    margin: 0 0 var(--spacing-xs);
    font-size: 1.1rem;
    color: var(--text-color);
}

.product-price {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
}

.current-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary-color);
}

.original-price {
    font-size: 0.9rem;
    color: #999;
    text-decoration: line-through;
}

.product-rating {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);
}

.stars {
    color: #ffd700;
}

.reviews {
    font-size: 0.9rem;
    color: #666;
}

.add-to-cart {
    width: 100%;
    padding: var(--spacing-xs) var(--spacing-sm);
    background-color: var(--secondary-color);
    color: var(--white);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-to-cart:hover {
    background-color: var(--primary-color);
}
```

## 4.11. Diseño del aside en HTML

```html
<aside class="filters">
    <div class="filter-section">
        <h3>Categorías</h3>
        <ul class="filter-list">
            <li>
                <label>
                    <input type="checkbox" name="category" value="electronics">
                    Electrónica
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" name="category" value="clothing">
                    Ropa
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" name="category" value="home">
                    Hogar
                </label>
            </li>
        </ul>
    </div>

    <div class="filter-section">
        <h3>Precio</h3>
        <div class="price-range">
            <input type="range" min="0" max="1000" step="10" value="500">
            <div class="price-inputs">
                <input type="number" placeholder="Min" min="0">
                <span>-</span>
                <input type="number" placeholder="Max" min="0">
            </div>
        </div>
    </div>

    <div class="filter-section">
        <h3>Valoración</h3>
        <div class="rating-filter">
            <label>
                <input type="radio" name="rating" value="4">
                <span class="stars">★★★★★</span>
                <span>y más</span>
            </label>
            <label>
                <input type="radio" name="rating" value="3">
                <span class="stars">★★★★☆</span>
                <span>y más</span>
            </label>
        </div>
    </div>
</aside>
```
## 4.12. Estilos CSS para el aside

```css
.filters {
    background-color: var(--white);
    padding: var(--spacing-md);
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.filter-section {
    margin-bottom: var(--spacing-lg);
}

.filter-section:last-child {
    margin-bottom: 0;
}

.filter-section h3 {
    margin-bottom: var(--spacing-sm);
    color: var(--primary-color);
    font-size: 1.1rem;
}

.filter-list {
    list-style: none;
    padding: 0;
}

.filter-list li {
    margin-bottom: var(--spacing-xs);
}

.filter-list label {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    cursor: pointer;
}

.filter-list input[type="checkbox"] {
    accent-color: var(--secondary-color);
}

/* Estilos para el rango de precios */
.price-range {
    margin-top: var(--spacing-sm);
}

.price-range input[type="range"] {
    width: 100%;
    margin-bottom: var(--spacing-sm);
}

.price-inputs {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
}

.price-inputs input {
    width: 80px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* Estilos para el filtro de valoración */
.rating-filter label {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
    cursor: pointer;
}

.rating-filter .stars {
    color: #ffd700;
}

/* Responsive del aside */
@media (max-width: 768px) {
    .filters {
        position: fixed;
        top: 0;
        left: -300px;
        width: 300px;
        height: 100vh;
        z-index: 1000;
        transition: left 0.3s ease;
        overflow-y: auto;
    }

    .filters.active {
        left: 0;
    }
}
```

## 4.13. Construcción del footer en HTML

```html
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Sobre Nosotros</h4>
            <p>Somos tu tienda online de confianza con los mejores productos y precios del mercado.</p>
            <div class="social-links">
                <a href="#" class="social-link">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>

        <div class="footer-section">
            <h4>Enlaces Útiles</h4>
            <ul>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#terms">Términos y Condiciones</a></li>
                <li><a href="#privacy">Política de Privacidad</a></li>
                <li><a href="#shipping">Información de Envío</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h4>Contacto</h4>
            <address>
                <p><i class="fas fa-map-marker-alt"></i> Calle Principal 123</p>
                <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                <p><i class="fas fa-envelope"></i> info@mitienda.com</p>
            </address>
        </div>

        <div class="footer-section">
            <h4>Newsletter</h4>
            <form class="newsletter-form">
                <input type="email" placeholder="Tu email">
                <button type="submit">Suscribir</button>
            </form>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Mi Tienda Online. Todos los derechos reservados.</p>
    </div>
</footer>
```

## 4.14. Estilos CSS del footer

```css
.footer {
    background-color: var(--primary-color);
    color: var(--white);
    padding: var(--spacing-lg) 0 0;
    margin-top: var(--spacing-lg);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-sm);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
}

.footer-section h4 {
    margin-bottom: var(--spacing-md);
    font-size: 1.2rem;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: var(--spacing-xs);
}

.footer-section a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: var(--secondary-color);
}

.social-links {
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-sm);
}

.social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
}

.social-link:hover {
    background-color: var(--secondary-color);
}

.newsletter-form {
    display: flex;
    gap: var(--spacing-xs);
}

.newsletter-form input {
    flex: 1;
    padding: var(--spacing-xs);
    border: none;
    border-radius: 4px;
}

.newsletter-form button {
    padding: var(--spacing-xs) var(--spacing-sm);
    background-color: var(--secondary-color);
    color: var(--white);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.newsletter-form button:hover {
    background-color: var(--accent-color);
}

.footer-bottom {
    margin-top: var(--spacing-lg);
    padding: var(--spacing-sm);
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* Responsive Footer */
@media (max-width: 1024px) {
    .footer-content {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
    }
}
```

## 4.15. BONUS - Añadiendo efectos a las imágenes

```css
/* Efecto Zoom */
.product-card .product-image {
    overflow: hidden;
}

.product-card .product-image img {
    transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.1);
}

/* Efecto Overlay */
.product-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0);
    transition: background 0.3s;
}

.product-card:hover .product-image::after {
    background: rgba(0,0,0,0.1);
}

/* Efecto Quick View */
.quick-view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    padding: var(--spacing-sm) var(--spacing-md);
    background-color: var(--white);
    color: var(--primary-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s;
    z-index: 1;
}

.product-card:hover .quick-view {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
}
```

