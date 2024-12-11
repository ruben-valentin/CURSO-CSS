# Capítulo 2: Responsive Design

## 2.1. Conceptos iniciales de diseño adaptable

El diseño responsivo es una técnica que permite que las páginas web se adapten a diferentes tamaños de pantalla y dispositivos.

### Principios fundamentales:

1. **Viewport**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. **Media Queries**
```css
/* Ejemplo básico de media query */
@media screen and (max-width: 768px) {
    .contenedor {
        width: 100%;
        padding: 0 15px;
    }
}
```

3. **Unidades Relativas**
```css
.elemento {
    /* Usar em, rem, %, vw, vh en lugar de px */
    font-size: 1.2rem;
    width: 90%;
    margin: 0 auto;
}
```

### Breakpoints comunes:
```css
/* Móvil pequeño */
@media (max-width: 320px) { }

/* Móvil */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 1024px) { }

/* Desktop grande */
@media (max-width: 1200px) { }
```

## 2.2. Elementos esenciales del responsive design

### Imágenes Responsivas
```css
.imagen-responsiva {
    max-width: 100%;
    height: auto;
}
```

### Sistema de Grid Básico
```css
.row {
    display: flex;
    flex-wrap: wrap;
}

.columna {
    flex: 1;
    padding: 15px;
}

@media (max-width: 768px) {
    .columna {
        flex: 100%;
    }
}
```

### Menú Responsivo Básico
```html
<nav class="menu-responsivo">
    <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>
</nav>
```

```css
.menu-responsivo ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.menu-responsivo li {
    margin: 0 10px;
}

@media (max-width: 768px) {
    .menu-responsivo ul {
        flex-direction: column;
    }
    
    .menu-responsivo li {
        margin: 10px 0;
    }
}
```

## 2.3. Ejercicio práctico usando float para diseño adaptable

### HTML Base
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout Responsivo con Float</title>
    <style>
        /* Estilos aquí */
    </style>
</head>
<body>
    <div class="contenedor">
        <header class="header">
            <h1>Mi Sitio Web</h1>
        </header>
        
        <nav class="navegacion">
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#acerca">Acerca</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
        
        <main class="contenido">
            <article class="articulo">
                <h2>Artículo Principal</h2>
                <p>Contenido del artículo...</p>
            </article>
            
            <aside class="sidebar">
                <h3>Sidebar</h3>
                <p>Contenido del sidebar...</p>
            </aside>
        </main>
        
        <footer class="footer">
            <p>Pie de página &copy; 2024</p>
        </footer>
    </div>
</body>
</html>
```

### CSS Responsivo con Float
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.contenedor {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
}

.header {
    background: #333;
    color: white;
    padding: 1rem;
    margin-bottom: 1rem;
}

.navegacion ul {
    list-style: none;
    background: #f4f4f4;
    padding: 1rem;
}

.navegacion li {
    float: left;
    margin-right: 1rem;
}

.navegacion a {
    color: #333;
    text-decoration: none;
}

.contenido {
    margin: 1rem 0;
}

.articulo {
    float: left;
    width: 70%;
    padding-right: 1rem;
}

.sidebar {
    float: right;
    width: 30%;
    background: #f4f4f4;
    padding: 1rem;
}

.footer {
    clear: both;
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;
}

/* Clearfix */
.contenido::after {
    content: "";
    display: table;
    clear: both;
}

/* Media Queries */
@media (max-width: 768px) {
    .navegacion li {
        float: none;
        margin: 0.5rem 0;
    }
    
    .articulo,
    .sidebar {
        float: none;
        width: 100%;
        padding: 0;
        margin-bottom: 1rem;
    }
}

/* Ajustes adicionales para móviles */
@media (max-width: 480px) {
    .contenedor {
        padding: 10px;
    }
    
    .header {
        text-align: center;
    }
}
```

### Consideraciones importantes:
1. El uso de `float` es una técnica más antigua pero aún útil para entender los fundamentos del diseño responsivo
2. En proyectos modernos, se prefiere usar Flexbox o Grid
3. El ejemplo incluye un "clearfix" para manejar elementos flotantes
4. Los media queries aseguran que el diseño se adapte a diferentes tamaños de pantalla
5. La navegación se convierte en vertical en pantallas pequeñas
6. El contenido y sidebar se apilan en móviles para mejor legibilidad

Este ejercicio proporciona una base sólida para entender cómo funcionaba el diseño responsivo antes de Flexbox y Grid, y ayuda a apreciar mejor las herramientas modernas que tenemos disponibles ahora.