# Capítulo 5: Aprendiendo Flexbox

## 5.1. Fundamentos de Flexbox: ¿qué es y cómo funciona?

Flexbox es un modelo de diseño unidimensional que permite crear layouts flexibles y responsivos. Flexbox se centra en distribuir el espacio entre los elementos de un contenedor, incluso si su tamaño es dinámico.

### Conceptos básicos:

1. **Contenedor Flex**: Es el elemento padre que contiene los elementos flexibles.
2. **Items Flex**: Son los elementos hijos dentro del contenedor.
3. **Eje principal**: La dirección definida para la distribución de los items (puede ser horizontal o vertical).
4. **Eje cruzado**: La dirección perpendicular al eje principal.

```css
/* Contenedor Flex básico */
.contenedor {
    display: flex;
    /* o display: inline-flex; */
}
```

- **`display: flex`** convierte a un elemento en un contenedor flex.
- **`inline-flex`** hace que el contenedor flex actúe como un elemento inline.

---

## 5.2. Configuración del contenedor flex

El contenedor flex es el elemento padre que controla la distribución de los items. Sus propiedades principales son:

```css
.contenedor-flex {
    /* Dirección de los elementos */
    flex-direction: row | row-reverse | column | column-reverse;
    
    /* Envolver elementos */
    flex-wrap: nowrap | wrap | wrap-reverse;
    
    /* Atajo para flex-direction y flex-wrap */
    flex-flow: row nowrap;
    
    /* Alineación en el eje principal */
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    
    /* Alineación en el eje cruzado */
    align-items: stretch | flex-start | flex-end | center | baseline;
    
    /* Alineación de múltiples líneas */
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### Explicaciones detalladas:

1. **`flex-direction`**
   - Define la dirección del eje principal:
     - `row`: Dirección horizontal de izquierda a derecha (predeterminado).
     - `column`: Dirección vertical de arriba a abajo.
     - `row-reverse` o `column-reverse`: Dirección inversa.

2. **`flex-wrap`**
   - Controla si los items deben envolverse en caso de que el espacio sea insuficiente:
     - `nowrap`: Sin envoltura (predeterminado).
     - `wrap`: Los items se envuelven a una nueva línea.
     - `wrap-reverse`: Envoltura inversa.

3. **`justify-content`**
   - Controla la distribución de los items a lo largo del eje principal:
     - `flex-start`: Los items se alinean al inicio.
     - `center`: Los items se centran.
     - `space-between`: Espaciado uniforme entre los items.

4. **`align-items`**
   - Alinea los items en el eje cruzado (perpendicular):
     - `stretch`: Los items se estiran para llenar el contenedor.
     - `center`: Los items se centran en el eje cruzado.

### Ejemplo práctico:

```html
<div class="contenedor-flex">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

<style>
.contenedor-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}

.item {
    padding: 20px;
    background-color: #3498db;
    color: white;
    border-radius: 4px;
}
</style>
```

---

## 5.3. Gestión de elementos flexibles

### Propiedades principales de los items flex

Los elementos hijos dentro de un contenedor flex (items flex) pueden tener las siguientes propiedades:

```css
.item-flex {
    /* Orden de aparición */
    order: 0;
    
    /* Capacidad de crecer */
    flex-grow: 0;
    
    /* Capacidad de encogerse */
    flex-shrink: 1;
    
    /* Tamaño base */
    flex-basis: auto;
    
    /* Atajo para grow, shrink y basis */
    flex: 0 1 auto;
    
    /* Auto-alineación */
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

### Explicaciones detalladas:

1. **`order`**: Cambia el orden visual de los items sin modificar el HTML.
   ```css
   .item1 {
       order: 1; /* Este item aparecerá después de otros con order 0 */
   }
   ```

2. **`flex-grow`**: Define cuánto puede crecer un item para llenar el espacio disponible.
   ```css
   .item {
       flex-grow: 2; /* Crecerá dos veces más que otros items */
   }
   ```

3. **`flex-shrink`**: Determina si un item puede encogerse cuando el espacio es limitado.
   ```css
   .item {
       flex-shrink: 0; /* Este item no se encogerá */
   }
   ```

4. **`flex-basis`**: Define el tamaño inicial del item antes de aplicar `grow` o `shrink`.
   ```css
   .item {
       flex-basis: 100px; /* Tamaño base fijo de 100px */
   }
   ```

### Ejemplo práctico:

```html
<div class="contenedor">
    <div class="item" style="flex: 2;">Item 1</div>
    <div class="item" style="flex: 1;">Item 2</div>
    <div class="item" style="flex: 0 0 200px;">Item Fijo</div>
</div>

<style>
.contenedor {
    display: flex;
    gap: 10px;
}

.item {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
}
</style>
```

---

## 5.4. Usar media queries con Flexbox

```css
/* Layout básico */
.contenedor {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.sidebar {
    flex: 1;
    min-width: 200px;
}

.contenido {
    flex: 3;
    min-width: 400px;
}

/* Responsive */
@media (max-width: 768px) {
    .contenedor {
        flex-direction: column;
    }
    
    .sidebar,
    .contenido {
        flex: 1 1 100%;
        min-width: 0;
    }
}
```

Este ejemplo demuestra cómo ajustar un layout según el tamaño de la pantalla usando Flexbox y media queries.

---

## 5.5. Diseño de una galería con Flexbox

```html
<div class="galeria">
    <div class="imagen-item">
        <img src="imagen1.jpg" alt="Imagen 1">
        <div class="overlay">
            <h3>Título Imagen</h3>
            <p>Descripción de la imagen</p>
        </div>
    </div>
    <!-- Más items de galería -->
</div>

<style>
.galeria {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.imagen-item {
    flex: 1 1 300px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.imagen-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.overlay {
    position: absolute;
    bottom: -100%;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 20px;
    transition: bottom 0.3s;
}

.imagen-item:hover img {
    transform: scale(1.1);
}

.imagen-item:hover .overlay {
    bottom: 0;
}
</style>
```

Este ejemplo muestra cómo crear una galería responsiva y atractiva usando Flexbox.

## 5.6. Creación de layouts con Flexbox

### Layout de Aplicación Común

El siguiente ejemplo demuestra cómo Flexbox puede usarse para estructurar una aplicación web con un header, un footer, una barra lateral, un área de navegación y contenido principal.

```html
<div class="app-layout">
    <header class="app-header">Header</header>
    <div class="app-main">
        <nav class="app-nav">Navegación</nav>
        <main class="app-content">Contenido Principal</main>
        <aside class="app-sidebar">Sidebar</aside>
    </div>
    <footer class="app-footer">Footer</footer>
</div>

<style>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.app-header,
.app-footer {
    flex: 0 0 auto;
    padding: 20px;
    background: #333;
    color: white;
}

.app-main {
    flex: 1;
    display: flex;
    gap: 20px;
    padding: 20px;
}

.app-nav {
    flex: 0 0 200px;
    background: #f0f0f0;
}

.app-content {
    flex: 1;
    background: white;
}

.app-sidebar {
    flex: 0 0 250px;
    background: #f0f0f0;
}

@media (max-width: 768px) {
    .app-main {
        flex-direction: column;
    }
    
    .app-nav,
    .app-sidebar {
        flex: 0 0 auto;
    }
}
</style>
```

#### Explicación

1. **Estructura principal:** La aplicación se divide en `header`, `main` y `footer`.
2. **Distribución del contenido:**
   - `app-header` y `app-footer` tienen un tamaño fijo con `flex: 0 0 auto`.
   - `app-main` utiliza `flex: 1` para ocupar el espacio restante.
   - Dentro de `app-main`, la navegación, el contenido y la barra lateral se distribuyen usando `flex`.
3. **Responsividad:** Con media queries, el diseño cambia a una distribución vertical en dispositivos pequeños.

---

## 5.7. Aprendiendo Flexbox con el juego Froggy

Flexbox Froggy es un juego interactivo que enseña las propiedades de Flexbox de manera divertida. Algunos ejemplos de los desafíos incluyen:

```css
/* Nivel básico - Centrar una rana */
#estanque {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Nivel intermedio - Distribuir ranas */
#estanque {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

/* Nivel avanzado - Ordenar ranas */
#estanque {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-end;
}
```

#### Explicación de conceptos aplicados:
- `justify-content`: Controla la distribución de los items en el eje principal.
- `align-items`: Alinea los items en el eje cruzado.
- `flex-direction`: Cambia la dirección del eje principal.

---

## 5.8. Flexbox Defense: un enfoque lúdico

Flexbox Defense es otro juego educativo que ayuda a reforzar las habilidades en Flexbox a través de un entorno interactivo.

```css
/* Posicionamiento de torres */
.torres-defensa {
    display: flex;
    justify-content: space-around;
}

/* Alineación específica */
.torre {
    align-self: flex-start; /* Superior */
    align-self: center;     /* Medio */
    align-self: flex-end;   /* Inferior */
}
```

#### Explicación
- `justify-content: space-around`: Asegura que haya un espaciado igual entre los items.
- `align-self`: Alinea un item de forma individual en el eje cruzado, sobrescribiendo `align-items`.

---

## 5.9. Ejemplos prácticos y casos de uso de Flexbox

### Layout de Card con Flexbox

Un diseño común para tarjetas que aprovecha Flexbox para alinear los elementos internos de forma efectiva.

```html
<div class="card">
    <div class="card-header">
        <img src="avatar.jpg" alt="Avatar">
        <div class="user-info">
            <h3>Nombre Usuario</h3>
            <span>@usuario</span>
        </div>
    </div>
    <div class="card-body">
        <p>Contenido de la tarjeta...</p>
    </div>
    <div class="card-footer">
        <button>Me gusta</button>
        <button>Compartir</button>
    </div>
</div>

<style>
.card {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    background: #fff;
}

.card-header {
    display: flex;
    align-items: center;
    padding: 16px;
}

.card-header img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px;
}

.card-body {
    flex: 1;
    padding: 16px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-top: 1px solid #eee;
}
</style>
```

#### Explicación
- **`flex-direction: column`**: Coloca los elementos de la tarjeta verticalmente.
- **`align-items: center`**: Centra los elementos del encabezado.
- **`justify-content: space-between`**: Distribuye los botones en el pie de la tarjeta.

---

## 5.10. Diseño de navegación con Flexbox

Flexbox permite crear diseños de navegación flexibles y responsivos. A continuación se muestra un ejemplo completo que incluye elementos como logotipos, menús y botones de autenticación.

```html
<nav class="navbar">
    <div class="nav-brand">Logo</div>
    <ul class="nav-menu">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
    </ul>
    <div class="nav-auth">
        <button>Login</button>
        <button>Registro</button>
    </div>
</nav>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-auth {
    display: flex;
    gap: 1rem;
}

@media (max-width: 768px) {
    .navbar {
        flex-wrap: wrap;
    }

    .nav-menu {
        order: 3;
        flex-basis: 100%;
        flex-direction: column;
        align-items: center;
        display: none;
    }

    .nav-menu.active {
        display: flex;
    }
}
</style>
```

### Explicación
- **Distribución principal:** `justify-content: space-between` separa los elementos principales: logotipo, menú y botones de autenticación.
- **Responsividad:** Con media queries, el menú cambia a una distribución vertical y se oculta inicialmente.
- **Estilo adicional:** Se puede añadir un botón de hamburguesa para alternar la clase `active` en el menú.

---

## 5.11. Tarjetas y sus aplicaciones con Flexbox

Flexbox facilita el diseño de tarjetas responsivas y organizadas. Este ejemplo utiliza un grid de tarjetas.

### Grid de Tarjetas Responsivo

```html
<div class="cards-grid">
    <div class="card">
        <img src="imagen1.jpg" alt="Imagen 1">
        <div class="card-content">
            <h3>Título 1</h3>
            <p>Descripción...</p>
            <button>Más info</button>
        </div>
    </div>
    <!-- Más tarjetas -->
</div>

<style>
.cards-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.card {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 16px;
}

.card-content button {
    margin-top: auto;
}
</style>
```

### Explicación
- **`flex-wrap`:** Permite que las tarjetas se ajusten a nuevas filas si el espacio es insuficiente.
- **`flex: 1 1 300px`:** Cada tarjeta ocupa un mínimo de 300px pero puede crecer para llenar el espacio.
- **`margin-top: auto`:** Mantiene el botón al final del contenido de la tarjeta.

---

## 5.12. Integración de multimedia con Flexbox

Flexbox también es ideal para diseños multimedia. A continuación se muestra una galería responsiva y un "Hero" con video de fondo.

### Galería de Medios

```css
/* Galería de medios responsiva */
.media-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.media-item {
    flex: 1 1 300px;
    position: relative;
    aspect-ratio: 16/9;
}

.media-item img,
.media-item video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Hero con Video

```css
/* Hero section con video de fondo */
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
}

.hero video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.hero-content {
    color: white;
    text-align: center;
    z-index: 1;
}
```

### Explicación
- **Galería:** Cada elemento ajusta su proporción con `aspect-ratio`, garantizando un diseño uniforme.
- **Hero:** El video de fondo ocupa todo el área del contenedor y los elementos principales se centran.

---

## 5.13. Uso de Flexbox en formularios

Los formularios con Flexbox son eficientes y responsivos. A continuación un ejemplo:

```html
<form class="flex-form">
    <div class="form-row">
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email">
        </div>
    </div>
    
    <div class="form-group">
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje"></textarea>
    </div>
    
    <div class="form-actions">
        <button type="reset">Cancelar</button>
        <button type="submit">Enviar</button>
    </div>
</form>

<style>
.flex-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.form-row {
    display: flex;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

@media (max-width: 480px) {
    .form-row {
        flex-direction: column;
    }
}
</style>
```

### Explicación
- **`flex: 1`:** Los inputs dentro de una fila se expanden equitativamente.
- **`flex-direction: column`:** Facilita el apilado de elementos en pantallas pequeñas.
- **Responsividad:** Los elementos se reorganizan verticalmente en dispositivos móviles.

---


