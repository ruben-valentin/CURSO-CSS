# Capítulo 3: Presentación y Recursos

## 3.1. Diseño de estructura para un proyecto

### Estructura de carpetas recomendada:
```
proyecto/
├── css/
│   ├── style.css
│   ├── normalize.css
│   └── responsive.css
├── images/
│   └── (archivos de imagen)
├── js/
│   └── main.js
└── index.html
```

## 3.2. Base HTML y CSS para proyectos web

### HTML Base (index.html)
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto Web</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header class="header">
        <!-- Contenido del header -->
    </header>

    <nav class="nav-main">
        <!-- Menú principal -->
    </nav>

    <div class="container">
        <main class="content">
            <!-- Contenido principal -->
        </main>

        <aside class="sidebar">
            <!-- Barra lateral -->
        </aside>
    </div>

    <footer class="footer">
        <!-- Pie de página -->
    </footer>
</body>
</html>
```

### CSS Base (style.css)
```css
/* Variables globales */
:root {
    --color-primario: #2c3e50;
    --color-secundario: #3498db;
    --color-texto: #333;
    --color-fondo: #f4f4f4;
    --fuente-principal: 'Arial', sans-serif;
    --max-width: 1200px;
}

/* Estilos globales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--fuente-principal);
    color: var(--color-texto);
    line-height: 1.6;
    background-color: var(--color-fondo);
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;
}
```

## 3.3. Cómo aplicar fuentes personalizadas

### Usando Google Fonts
```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>
```

```css
:root {
    --fuente-principal: 'Roboto', sans-serif;
}

/* Diferentes pesos de fuente */
.texto-ligero {
    font-weight: 300;
}

.texto-normal {
    font-weight: 400;
}

.texto-negrita {
    font-weight: 700;
}
```

## 3.4. Estructuración del header en HTML

```html
<header class="header">
    <div class="container header-content">
        <div class="logo">
            <a href="index.html">
                <img src="images/logo.png" alt="Logo de la empresa">
            </a>
        </div>
        
        <div class="header-contact">
            <p>Llámanos: (123) 456-7890</p>
            <p>Email: info@ejemplo.com</p>
        </div>
    </div>
</header>
```

## 3.5. Estilos CSS aplicados al header

```css
.header {
    background-color: var(--color-primario);
    padding: 1rem 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    max-height: 60px;
    width: auto;
}

.header-contact {
    text-align: right;
    color: white;
}

.header-contact p {
    margin: 5px 0;
}
```

## 3.6. Creación del menú principal en HTML

```html
<nav class="nav-main">
    <div class="container">
        <ul class="menu">
            <li><a href="#inicio">Inicio</a></li>
            <li class="has-submenu">
                <a href="#servicios">Servicios</a>
                <ul class="submenu">
                    <li><a href="#servicio1">Servicio 1</a></li>
                    <li><a href="#servicio2">Servicio 2</a></li>
                    <li><a href="#servicio3">Servicio 3</a></li>
                </ul>
            </li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </div>
</nav>
```

## 3.7. Estilización del menú principal en CSS

```css
.nav-main {
    background-color: var(--color-secundario);
}

.menu {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.menu li {
    position: relative;
}

.menu a {
    display: block;
    padding: 15px 20px;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
}

.menu a:hover {
    background-color: rgba(0,0,0,0.1);
}

/* Submenu */
.submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--color-secundario);
    min-width: 200px;
    list-style: none;
    padding: 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.has-submenu:hover .submenu {
    display: block;
}

.submenu a {
    padding: 10px 20px;
}
```

## 3.8. Construcción del aside con HTML

```html
<aside class="sidebar">
    <div class="widget">
        <h3 class="widget-title">Categorías</h3>
        <ul class="widget-content">
            <li><a href="#categoria1">Categoría 1</a></li>
            <li><a href="#categoria2">Categoría 2</a></li>
            <li><a href="#categoria3">Categoría 3</a></li>
        </ul>
    </div>

    <div class="widget">
        <h3 class="widget-title">Posts Recientes</h3>
        <div class="widget-content">
            <article class="post-preview">
                <h4>Título del Post</h4>
                <p>Extracto del post...</p>
                <a href="#leer-mas">Leer más</a>
            </article>
        </div>
    </div>
</aside>
```

## 3.9. Diseño de aside utilizando CSS

```css
.sidebar {
    width: 300px;
    padding-left: 20px;
}

.widget {
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.widget-title {
    margin: 0 0 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--color-secundario);
    color: var(--color-primario);
}

.widget-content ul {
    list-style: none;
    padding: 0;
}

.widget-content li {
    margin-bottom: 10px;
}

.widget-content a {
    color: var(--color-texto);
    text-decoration: none;
    transition: color 0.3s;
}

.widget-content a:hover {
    color: var(--color-secundario);
}

.post-preview {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.post-preview:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}
```


## 3.10. Creación del contenido principal en HTML

```html
<main class="content">
    <article class="post">
        <header class="post-header">
            <h2 class="post-title">Título del Artículo Principal</h2>
            <div class="post-meta">
                <span class="post-date">Publicado el 11 Dic, 2024</span>
                <span class="post-author">por Admin</span>
            </div>
        </header>

        <div class="post-content">
            <img src="images/post-image.jpg" alt="Imagen del post" class="post-image">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <h3>Subtítulo del artículo</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <blockquote>
                Esta es una cita importante que queremos destacar en nuestro artículo.
            </blockquote>
            
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <footer class="post-footer">
            <div class="post-tags">
                <span>Tags:</span>
                <a href="#tag1">CSS</a>
                <a href="#tag2">Diseño</a>
                <a href="#tag3">Web</a>
            </div>
            
            <div class="post-share">
                <span>Compartir:</span>
                <a href="#" class="share-facebook">Facebook</a>
                <a href="#" class="share-twitter">Twitter</a>
            </div>
        </footer>
    </article>
</main>
```

## 3.11. Estilos CSS para el contenido principal

```css
.content {
    flex: 1;
    max-width: 800px;
}

.post {
    background-color: white;
    border-radius: 5px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.post-header {
    margin-bottom: 20px;
}

.post-title {
    color: var(--color-primario);
    margin: 0 0 10px;
}

.post-meta {
    color: #666;
    font-size: 0.9em;
}

.post-meta span {
    margin-right: 15px;
}

.post-image {
    width: 100%;
    height: auto;
    margin: 20px 0;
    border-radius: 5px;
}

.post-content {
    line-height: 1.8;
}

.post-content h3 {
    color: var(--color-primario);
    margin: 25px 0 15px;
}

.post-content p {
    margin-bottom: 15px;
}

.post-content blockquote {
    border-left: 4px solid var(--color-secundario);
    padding: 15px;
    margin: 20px 0;
    background-color: #f9f9f9;
    font-style: italic;
}

.post-footer {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post-tags a,
.post-share a {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 3px;
    text-decoration: none;
    font-size: 0.9em;
}

.post-tags a {
    background-color: #f0f0f0;
    color: var(--color-texto);
}

.post-share a {
    color: white;
}

.share-facebook {
    background-color: #3b5998;
}

.share-twitter {
    background-color: #1da1f2;
}
```

## 3.12. Estructuración del footer con HTML

```html
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-column">
                <h4>Sobre Nosotros</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <div class="footer-column">
                <h4>Enlaces Rápidos</h4>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
            
            <div class="footer-column">
                <h4>Contacto</h4>
                <address>
                    <p>Calle Principal 123</p>
                    <p>Ciudad, País</p>
                    <p>Email: info@ejemplo.com</p>
                    <p>Tel: (123) 456-7890</p>
                </address>
            </div>
            
            <div class="footer-column">
                <h4>Síguenos</h4>
                <div class="social-links">
                    <a href="#" class="social-link facebook">Facebook</a>
                    <a href="#" class="social-link twitter">Twitter</a>
                    <a href="#" class="social-link instagram">Instagram</a>
                    <a href="#" class="social-link linkedin">LinkedIn</a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>
```

## 3.13. Aplicación de estilos CSS al footer

```css
.footer {
    background-color: var(--color-primario);
    color: white;
    padding: 50px 0 20px;
    margin-top: 50px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 30px;
}

.footer-column h4 {
    color: white;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--color-secundario);
}

.footer-column ul {
    list-style: none;
    padding: 0;
}

.footer-column ul li {
    margin-bottom: 10px;
}

.footer-column a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-column a:hover {
    color: var(--color-secundario);
}

.social-links {
    display: flex;
    gap: 10px;
}

.social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.1);
    transition: background-color 0.3s;
}

.social-link:hover {
    background-color: var(--color-secundario);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* Responsive Footer */
@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .footer-grid {
        grid-template-columns: 1fr;
    }
}
```

## 3.14. BONUS - Implementación de temas personalizados

```css
/* Sistema de temas */
:root {
    /* Tema claro (default) */
    --color-primario: #2c3e50;
    --color-secundario: #3498db;
    --color-texto: #333;
    --color-fondo: #f4f4f4;
    --color-card: #ffffff;
}

/* Tema oscuro */
[data-theme="dark"] {
    --color-primario: #1a1a1a;
    --color-secundario: #2980b9;
    --color-texto: #f4f4f4;
    --color-fondo: #121212;
    --color-card: #1e1e1e;
}

/* Tema alto contraste */
[data-theme="high-contrast"] {
    --color-primario: #000000;
    --color-secundario: #ffffff;
    --color-texto: #ffffff;
    --color-fondo: #000000;
    --color-card: #1a1a1a;
}

/* JavaScript para cambiar temas */
const toggleTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
}
```

