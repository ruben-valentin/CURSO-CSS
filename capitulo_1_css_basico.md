# Capítulo 1: CSS Básico

## 1.1. Introducción a los fundamentos de CSS

CSS (Cascading Style Sheets) es un lenguaje de estilos utilizado para describir la presentación de documentos HTML. Es fundamental para el diseño web moderno y permite controlar:
- El diseño de páginas web
- La adaptación a diferentes dispositivos
- Los colores y tipografías
- Las animaciones y transiciones

### ¿Por qué es importante CSS?
- Separa el contenido (HTML) de la presentación
- Mejora la mantenibilidad del código
- Permite crear diseños responsivos
- Optimiza el tiempo de desarrollo

## 1.2. Estructura básica de CSS

La sintaxis de CSS se compone de:
```css
selector {
    propiedad: valor;
    propiedad2: valor2;
}
```

### Ejemplo práctico:
```css
.mi-elemento {
    color: blue;
    font-size: 16px;
    margin: 20px;
}
```

## 1.3. Cómo utilizar selectores en CSS

Los selectores son patrones que se utilizan para seleccionar elementos HTML que queremos estilizar.

### Tipos de selectores:

1. **Selector de elemento**
```css
p {
    color: red;
}
```

2. **Selector de clase**
```css
.destacado {
    background-color: yellow;
}
```

3. **Selector de ID**
```css
#header {
    height: 80px;
}
```

4. **Selector descendente**
```css
div p {
    margin: 10px;
}
```

5. **Selector de atributo**
```css
input[type="text"] {
    border: 1px solid gray;
}
```

## 1.4. Métodos para vincular CSS a HTML

Existen tres formas principales de incluir CSS en un documento HTML:

### 1. CSS Externo (Recomendado)
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### 2. CSS Interno
```html
<head>
    <style>
        body {
            background-color: #f0f0f0;
        }
    </style>
</head>
```

### 3. CSS en línea
```html
<p style="color: blue; font-size: 16px;">Texto ejemplo</p>
```

## 1.5. Trabajando con colores en CSS

Los colores en CSS se pueden especificar de varias formas:

### Nombres de colores
```css
.elemento {
    color: red;
    background-color: lightblue;
}
```

### Valores hexadecimales
```css
.elemento {
    color: #FF0000; /* rojo */
    background-color: #0000FF; /* azul */
}
```

### RGB y RGBA
```css
.elemento {
    color: rgb(255, 0, 0); /* rojo */
    background-color: rgba(0, 0, 255, 0.5); /* azul semi-transparente */
}
```

### HSL y HSLA
```css
.elemento {
    color: hsl(0, 100%, 50%); /* rojo */
    background-color: hsla(240, 100%, 50%, 0.5); /* azul semi-transparente */
}
```

## 1.6. Propiedades de fondos en CSS

CSS ofrece varias propiedades para controlar los fondos:

### Color de fondo
```css
.elemento {
    background-color: #f0f0f0;
}
```

### Imagen de fondo
```css
.elemento {
    background-image: url('imagen.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
```

### Gradientes
```css
.elemento {
    background: linear-gradient(to right, #ff0000, #00ff00);
}
```

## 1.7. Configuración de bordes en CSS

Los bordes pueden personalizarse en gran medida:

### Bordes básicos
```css
.elemento {
    border: 1px solid black;
}
```

### Bordes por lado
```css
.elemento {
    border-top: 2px dashed red;
    border-right: 3px dotted blue;
    border-bottom: 4px double green;
    border-left: 5px groove yellow;
}
```

### Bordes redondeados
```css
.elemento {
    border-radius: 10px;
    /* O por esquina */
    border-top-left-radius: 5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 20px;
}
```

## 1.8. Gestión de márgenes y espaciado

### Margin (espacio exterior)
```css
.elemento {
    margin: 10px; /* todos los lados */
    margin: 10px 20px; /* vertical horizontal */
    margin: 10px 20px 15px 25px; /* arriba derecha abajo izquierda */
}
```

### Padding (espacio interior)
```css
.elemento {
    padding: 10px; /* todos los lados */
    padding: 10px 20px; /* vertical horizontal */
    padding: 10px 20px 15px 25px; /* arriba derecha abajo izquierda */
}
```

### Ejemplo práctico combinado
```css
.tarjeta {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### HTML de ejemplo para probar los estilos
```html
<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo CSS Básico</title>
    <style>
        /* Aquí puedes probar los ejemplos anteriores */
    </style>
</head>
<body>
    <div class="tarjeta">
        <h2>Título de la tarjeta</h2>
        <p>Contenido de ejemplo para mostrar los estilos CSS aplicados.</p>
    </div>
</body>
</html>
```