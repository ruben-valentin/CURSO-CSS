# Capítulo 6: Proyecto de Maquetación con Flexbox

## 6.1. Recursos y guía del proyecto

### Estructura del Proyecto
```
proyecto-flexbox/
├── css/
│   ├── normalize.css
│   ├── styles.css
│   └── responsive.css
├── images/
│   └── (imágenes del proyecto)
└── index.html
```

### Variables CSS Base
```css
:root {
    /* Colores */
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --text: #333;
    --bg: #f5f6fa;
    --white: #ffffff;
    
    /* Espaciado */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    
    /* Fuentes */
    --font-primary: 'Roboto', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;
}
```

## 6.2. Planificación y estructura del proyecto

### HTML Base (index.html)
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto Flexbox</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <div class="app-container">
        <header class="header">
            <!-- Header content -->
        </header>
        
        <nav class="navigation">
            <!-- Navigation content -->
        </nav>
        
        <main class="main-content">
            <aside class="sidebar">
                <!-- Sidebar content -->
            </aside>
            
            <section class="content">
                <!-- Main content -->
            </section>
        </main>
        
        <footer class="footer">
            <!-- Footer content -->
        </footer>
    </div>
</body>
</html>
```

## 6.3. Construcción del header en HTML y CSS

```html
<header class="header">
    <div class="header-top">
        <div class="logo">
            <h1>FlexProject</h1>
        </div>
        
        <div class="user-menu">
            <div class="notifications">
                <span class="notification-icon">🔔</span>
                <span class="notification-count">3</span>
            </div>
            <div class="user-profile">
                <img src="images/avatar.jpg" alt="User Avatar">
                <span>John Doe</span>
            </div>
        </div>
    </div>
</header>
```

```css
.header {
    background-color: var(--white);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-md);
    max-width: 1200px;
    margin: 0 auto;
}

.logo h1 {
    color: var(--primary);
    font-family: var(--font-primary);
    font-size: 1.5rem;
    margin: 0;
}

.user-menu {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.notifications {
    position: relative;
    cursor: pointer;
}

.notification-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--accent);
    color: var(--white);
    font-size: 0.75rem;
    padding: 2px 6px;
    border-radius: 10px;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.user-profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
```

## 6.4. Desarrollo de una barra de navegación

```html
<nav class="navigation">
    <div class="nav-container">
        <ul class="nav-menu">
            <li class="nav-item active">
                <a href="#dashboard">
                    <span class="nav-icon">📊</span>
                    Dashboard
                </a>
            </li>
            <li class="nav-item">
                <a href="#projects">
                    <span class="nav-icon">📁</span>
                    Proyectos
                </a>
            </li>
            <li class="nav-item">
                <a href="#tasks">
                    <span class="nav-icon">✓</span>
                    Tareas
                </a>
            </li>
            <li class="nav-item">
                <a href="#calendar">
                    <span class="nav-icon">📅</span>
                    Calendario
                </a>
            </li>
        </ul>
        
        <div class="nav-actions">
            <button class="nav-button">
                <span>➕</span>
                Nuevo Proyecto
            </button>
        </div>
    </div>
</nav>
```

```css
.navigation {
    background-color: var(--primary);
    padding: var(--spacing-sm) 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: var(--spacing-md);
}

.nav-item a {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--white);
    text-decoration: none;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 4px;
    transition: background-color 0.3s;
}

.nav-item.active a,
.nav-item a:hover {
    background-color: rgba(255,255,255,0.1);
}

.nav-icon {
    font-size: 1.2rem;
}

.nav-button {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    background-color: var(--secondary);
    color: var(--white);
    border: none;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.nav-button:hover {
    background-color: var(--accent);
}
```

# Capítulo 6: Proyecto de Maquetación con Flexbox (Continuación)

## 6.5. Estructuración del aside y el contenido principal

```html
<main class="main-content">
    <aside class="sidebar">
        <div class="sidebar-header">
            <h2>Proyectos Activos</h2>
            <button class="filter-button">Filtrar</button>
        </div>
        
        <div class="project-list">
            <div class="project-item">
                <div class="project-info">
                    <h3>Rediseño Website</h3>
                    <p>12 tareas pendientes</p>
                </div>
                <div class="project-progress">
                    <div class="progress-bar">
                        <div class="progress" style="width: 75%"></div>
                    </div>
                    <span>75%</span>
                </div>
            </div>
            <!-- Más proyectos -->
        </div>
        
        <div class="sidebar-footer">
            <button class="view-all-button">Ver todos los proyectos</button>
        </div>
    </aside>
    
    <section class="content">
        <div class="content-header">
            <h2>Dashboard</h2>
            <div class="view-options">
                <button class="view-button active">Grid</button>
                <button class="view-button">Lista</button>
            </div>
        </div>
        
        <div class="dashboard-grid">
            <!-- Contenido del dashboard -->
        </div>
    </section>
</main>
```

## 6.6. Diseño del aside en HTML y CSS

```css
.main-content {
    display: flex;
    gap: var(--spacing-lg);
    max-width: 1200px;
    margin: var(--spacing-lg) auto;
    padding: 0 var(--spacing-md);
}

.sidebar {
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md);
    border-bottom: 1px solid #eee;
}

.sidebar-header h2 {
    font-size: 1.2rem;
    margin: 0;
}

.filter-button {
    background: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}

.filter-button:hover {
    background: var(--primary);
    color: var(--white);
}

.project-list {
    flex: 1;
    padding: var(--spacing-md);
    overflow-y: auto;
}

.project-item {
    padding: var(--spacing-sm);
    border-bottom: 1px solid #eee;
}

.project-info h3 {
    margin: 0 0 var(--spacing-xs);
    font-size: 1rem;
}

.project-info p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
}

.project-progress {
    margin-top: var(--spacing-sm);
}

.progress-bar {
    height: 6px;
    background: #eee;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: var(--spacing-xs);
}

.progress {
    height: 100%;
    background: var(--secondary);
    border-radius: 3px;
}

.sidebar-footer {
    padding: var(--spacing-md);
    border-top: 1px solid #eee;
}

.view-all-button {
    width: 100%;
    padding: var(--spacing-sm);
    background: var(--secondary);
    color: var(--white);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.view-all-button:hover {
    background: var(--accent);
}
```

## 6.7. Estilización del contenido principal

```css
.content {
    flex: 1;
    min-width: 0; /* Previene desbordamiento en flex items */
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-lg);
}

.content-header h2 {
    margin: 0;
    font-size: 1.5rem;
}

.view-options {
    display: flex;
    gap: var(--spacing-xs);
}

.view-button {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}

.view-button.active,
.view-button:hover {
    background: var(--primary);
    color: var(--white);
}

.dashboard-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
}

.dashboard-card {
    flex: 1 1 300px;
    background: var(--white);
    border-radius: 8px;
    padding: var(--spacing-md);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## 6.8. Creación del footer con HTML y CSS

```html
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Estadísticas Rápidas</h4>
            <ul class="stats-list">
                <li>
                    <span class="stat-label">Proyectos Activos</span>
                    <span class="stat-value">12</span>
                </li>
                <li>
                    <span class="stat-label">Tareas Completadas</span>
                    <span class="stat-value">234</span>
                </li>
                <li>
                    <span class="stat-label">Tiempo Total</span>
                    <span class="stat-value">1,234h</span>
                </li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul class="quick-links">
                <li><a href="#help">Centro de Ayuda</a></li>
                <li><a href="#docs">Documentación</a></li>
                <li><a href="#support">Soporte</a></li>
            </ul>
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
        <p>&copy; 2024 FlexProject. Todos los derechos reservados.</p>
    </div>
</footer>
```

```css
.footer {
    background: var(--primary);
    color: var(--white);
    padding: var(--spacing-lg) 0 0;
    margin-top: var(--spacing-lg);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
    gap: var(--spacing-lg);
}

.footer-section {
    flex: 1;
}

.footer-section h4 {
    margin: 0 0 var(--spacing-md);
    font-size: 1.1rem;
}

.stats-list,
.quick-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.stats-list li {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-sm);
}

.quick-links li {
    margin-bottom: var(--spacing-sm);
}

.quick-links a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s;
}

.quick-links a:hover {
    color: var(--secondary);
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
    background: var(--secondary);
    color: var(--white);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.newsletter-form button:hover {
    background: var(--accent);
}

.footer-bottom {
    text-align: center;
    padding: var(--spacing-md);
    margin-top: var(--spacing-lg);
    border-top: 1px solid rgba(255,255,255,0.1);
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
    }
    
    .footer-section {
        text-align: center;
    }
    
    .newsletter-form {
        max-width: 400px;
        margin: 0 auto;
    }
}
```
# Capítulo 6: Proyecto de Maquetación con Flexbox (BONUS)

## 6.9. BONUS - Tarjetas animadas tipo Flip Card

### HTML para las Flip Cards
```html
<div class="flip-cards-container">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="project-image.jpg" alt="Proyecto">
                <h3>Nombre del Proyecto</h3>
                <p>Breve descripción del proyecto</p>
            </div>
            <div class="flip-card-back">
                <h3>Detalles del Proyecto</h3>
                <div class="project-stats">
                    <div class="stat">
                        <span class="stat-value">85%</span>
                        <span class="stat-label">Completado</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">12</span>
                        <span class="stat-label">Tareas</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">5</span>
                        <span class="stat-label">Miembros</span>
                    </div>
                </div>
                <div class="project-actions">
                    <button class="action-button">Ver Detalles</button>
                    <button class="action-button">Editar</button>
                </div>
            </div>
        </div>
    </div>
</div>
```

### CSS para las Flip Cards
```css
.flip-cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg);
}

.flip-card {
    flex: 1 1 300px;
    height: 400px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    cursor: pointer;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.flip-card-front {
    background-color: var(--white);
    display: flex;
    flex-direction: column;
}

.flip-card-front img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.flip-card-front h3 {
    margin: var(--spacing-sm) 0;
    color: var(--primary);
}

.flip-card-front p {
    padding: 0 var(--spacing-sm);
    color: var(--text);
    line-height: 1.5;
}

.flip-card-back {
    background-color: var(--primary);
    color: var(--white);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    padding: var(--spacing-lg);
}

.project-stats {
    display: flex;
    justify-content: space-around;
    margin: var(--spacing-lg) 0;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: var(--spacing-xs);
}

.stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
}

.project-actions {
    margin-top: auto;
    display: flex;
    gap: var(--spacing-sm);
}

.action-button {
    flex: 1;
    padding: var(--spacing-sm);
    border: 2px solid var(--white);
    background: transparent;
    color: var(--white);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}

.action-button:hover {
    background: var(--white);
    color: var(--primary);
}

/* Animaciones adicionales */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.flip-card-back .project-stats,
.flip-card-back .project-actions {
    animation: fadeIn 0.5s ease-out backwards;
}

.flip-card-back .project-stats {
    animation-delay: 0.3s;
}

.flip-card-back .project-actions {
    animation-delay: 0.5s;
}

/* Responsive */
@media (max-width: 768px) {
    .flip-card {
        flex: 1 1 100%;
        max-width: 400px;
        margin: 0 auto;
    }
}

/* Efectos de hover adicionales */
.flip-card:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
}

.flip-card-front img {
    transition: transform 0.5s ease;
}

.flip-card:hover .flip-card-front img {
    transform: scale(1.1);
}

/* Accesibilidad */
.flip-card:focus-within .flip-card-inner {
    transform: rotateY(180deg);
}

@media (prefers-reduced-motion: reduce) {
    .flip-card-inner,
    .flip-card:hover .flip-card-inner {
        transition: none;
        transform: none;
    }
    
    .flip-card-back {
        display: none;
    }
    
    .flip-card:hover .flip-card-back,
    .flip-card:focus-within .flip-card-back {
        display: flex;
    }
}
```


Este proyecto ha demostrado cómo:
1. Implementar un diseño complejo usando Flexbox
2. Crear componentes reutilizables
3. Manejar la responsividad
4. Agregar animaciones y efectos interactivos
5. Considerar la accesibilidad

Las flip cards son un excelente ejemplo de cómo combinar CSS moderno con interactividad para crear una experiencia de usuario atractiva y funcional.