# Capítulo 2: Responsive Design

## 2.1. Conceptos iniciales de diseño adaptable

El diseño responsivo es una técnica que permite que las páginas web se adapten a diferentes tamaños de pantalla y dispositivos, mejorando la experiencia del usuario en términos de legibilidad, navegabilidad y usabilidad.

### Principios fundamentales:

1. **Viewport**
   - El viewport es el área visible de una página web para un dispositivo en particular. Para asegurar una correcta adaptación, se debe incluir esta metatag en el documento HTML:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
   - Esta etiqueta establece que el ancho de la página se ajuste al ancho de la pantalla del dispositivo y define un nivel de zoom inicial.

2. **Media Queries**
   - Permiten aplicar estilos condicionales basados en el ancho, la altura, la resolución o el tipo de dispositivo.
   ```css
   @media screen and (max-width: 768px) {
       .contenedor {
           width: 100%;
           padding: 0 15px;
       }
   }
   ```
   - Este ejemplo aplica un estilo para pantallas con un ancho máximo de 768px.

3. **Unidades Relativas**
   - Se recomienda utilizar unidades como `em`, `rem`, `%`, `vw`, y `vh` en lugar de unidades absolutas como `px` para facilitar la adaptabilidad.
   ```css
   .elemento {
       font-size: 1.2rem;
       width: 90%;
       margin: 0 auto;
   }
   ```
   - Las unidades relativas se ajustan dinámicamente en función del contexto o del tamaño de la pantalla.

### Diferencias entre unidades relativas:

- **`em`**: Se basa en el tamaño de la fuente del elemento padre. Por ejemplo, si el tamaño de fuente del padre es de 16px, entonces `1em` equivale a 16px.
  ```css
  .hijo {
      font-size: 2em; /* 2 veces el tamaño de la fuente del padre */
  }
  ```

- **`rem`**: Se basa en el tamaño de la fuente del elemento raíz (generalmente `<html>`). A diferencia de `em`, no depende de los padres inmediatos, lo que la hace más predecible.
  ```css
  .hijo {
      font-size: 2rem; /* 2 veces el tamaño de la fuente del elemento <html> */
  }
  ```

- **`%`**: Se utiliza para definir tamaños relativos al contenedor del elemento, como anchura o altura.
  ```css
  .contenedor {
      width: 50%; /* Mitad del ancho del contenedor padre */
  }
  ```

- **`vw` y `vh`**: Se refieren al porcentaje del ancho y alto de la ventana gráfica (viewport).
  ```css
  .elemento {
      width: 50vw; /* 50% del ancho de la pantalla */
      height: 50vh; /* 50% de la altura de la pantalla */
  }
  ```

**Nota**: Usar unidades relativas garantiza que los elementos se adapten mejor a diferentes dispositivos y resoluciones.

### Breakpoints comunes:

Los breakpoints son puntos de ruptura donde se aplican diferentes estilos para adaptar el diseño a varios dispositivos.
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

---

## 2.2. Elementos esenciales del responsive design

### Imágenes Responsivas
Las imágenes deben adaptarse al ancho del contenedor para evitar desbordamientos.
```css
.imagen-responsiva {
    max-width: 100%;
    height: auto;
}
```
- `max-width: 100%` asegura que la imagen nunca sea más ancha que su contenedor.
- `height: auto` mantiene las proporciones originales de la imagen.

### Sistema de Grid Básico
Un sistema de grid ayuda a organizar el contenido en filas y columnas.
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
- `flex-wrap: wrap` permite que las columnas se apilen cuando el espacio no es suficiente.
- En el breakpoint de 768px, cada columna ocupa el 100% del ancho disponible.

### Menú Responsivo Básico
Un menú debe transformarse para pantallas pequeñas.
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

---

## 2.3. Ejercicio práctico usando float para diseño adaptable

Aunque `float` es una técnica más antigua, entenderla es fundamental para comprender la evolución del diseño responsivo.

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

---

### Consideraciones importantes:

1. El uso de `float` es una técnica más antigua pero útil para entender los fundamentos del diseño responsivo.
2. En proyectos modernos, se prefiere usar Flexbox o Grid por su simplicidad y flexibilidad.
3. El ejemplo incluye un "clearfix" para manejar elementos flotantes correctamente.
4. Los media queries aseguran que el diseño se adapte a diferentes tamaños de pantalla.
5. La navegación se convierte en vertical en pantallas pequeñas para mejorar la usabilidad.
6. El contenido y el sidebar se apilan en móviles, lo que mejora la legibilidad.

Este ejercicio proporciona una base sólida para entender cómo funcionaba el diseño responsivo antes de Flexbox y Grid, y ayuda a apreciar mejor las herramientas modernas que tenemos disponibles ahora.

