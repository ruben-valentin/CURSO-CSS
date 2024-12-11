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

### 1. Selectores simples
Son los más básicos y se utilizan para seleccionar elementos individuales o por características específicas.

- **Selector de tipo**: Selecciona todos los elementos de un tipo específico.
  ```css
  p {
      color: blue;
  }
  ```
  Aplica el estilo a todos los elementos `<p>`.

- **Selector de clase**: Selecciona elementos basados en su atributo `class`.
  ```css
  .mi-clase {
      font-size: 16px;
  }
  ```
  Aplica el estilo a todos los elementos con `class="mi-clase"`.

- **Selector de ID**: Selecciona un elemento único basado en su atributo `id`.
  ```css
  #mi-id {
      background-color: yellow;
  }
  ```
  Aplica el estilo al elemento con `id="mi-id"`.

- **Selector universal**: Selecciona todos los elementos.
  ```css
  * {
      margin: 0;
      padding: 0;
  }
  ```

### 2. Selectores de atributos
Permiten seleccionar elementos según los atributos y sus valores.

- Seleccionar elementos que tienen un atributo específico:
  ```css
  [type] {
      border: 1px solid black;
  }
  ```
  Aplica el estilo a todos los elementos con el atributo `type`.

- Seleccionar elementos con un atributo y un valor exacto:
  ```css
  [type="text"] {
      color: red;
  }
  ```
  Solo selecciona elementos donde `type="text"`.

- Seleccionar elementos cuyo valor de atributo contiene una palabra específica:
  ```css
  [class~="highlight"] {
      background-color: yellow;
  }
  ```
  Aplica el estilo a los elementos cuya clase incluye la palabra "highlight".

- Seleccionar elementos con un valor de atributo que comienza con un prefijo específico:
  ```css
  [href^="https"] {
      color: green;
  }
  ```
  Selecciona enlaces que comienzan con "https".

- Seleccionar elementos con un valor de atributo que termina con un sufijo específico:
  ```css
  [href$=".pdf"] {
      color: orange;
  }
  ```
  Selecciona enlaces que terminan en ".pdf".

- Seleccionar elementos con un valor de atributo que contiene una cadena específica:
  ```css
  [href*="example"] {
      text-decoration: underline;
  }
  ```
  Selecciona enlaces que contienen "example" en su valor.

### 3. Selectores de grupo
Permiten aplicar un mismo estilo a varios elementos seleccionados.

```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```
Aplica el estilo a los elementos `<h1>`, `<h2>` y `<h3>`.

### 4. Selectores combinadores
Permiten seleccionar elementos basándose en su relación con otros elementos.

- **Selector descendiente**:
  ```css
  div p {
      color: blue;
  }
  ```
  Selecciona todos los `<p>` dentro de un `<div>`.

- **Selector hijo directo**:
  ```css
  div > p {
      color: red;
  }
  ```
  Selecciona solo los `<p>` que son hijos directos de un `<div>`.

- **Selector adyacente**:
  ```css
  h1 + p {
      font-style: italic;
  }
  ```
  Selecciona el primer `<p>` que sigue inmediatamente a un `<h1>`.

- **Selector de hermanos generales**:
  ```css
  h1 ~ p {
      color: gray;
  }
  ```
  Selecciona todos los `<p>` que son hermanos de un `<h1>`.

### 5. Selectores pseudo-clase
Se utilizan para seleccionar elementos en un estado o posición específico.

- **Estados del enlace**:
  ```css
  a:link {
      color: blue;
  }
  a:visited {
      color: purple;
  }
  ```

- **Interactivos**:
  ```css
  button:hover {
      background-color: green;
  }
  button:active {
      background-color: red;
  }
  ```

- **Estructurales**:
  ```css
  tr:nth-child(odd) {
      background-color: #f2f2f2;
  }
  tr:nth-child(even) {
      background-color: #ffffff;
  }
  ```

### 6. Selectores pseudo-elemento
Seleccionan partes específicas de un elemento.

- Seleccionar la primera letra de un párrafo:
  ```css
  p::first-letter {
      font-size: 2em;
      color: red;
  }
  ```

- Seleccionar el contenido antes o después de un elemento:
  ```css
  h1::before {
      content: "¡Atención!";
      color: orange;
  }
  ```

### 7. Selectores avanzados (niveles más complejos)
- **Selector de elementos negados**:
  ```css
  :not(.excluido) {
      color: blue;
  }
  ```
  Selecciona todos los elementos que no tienen la clase `excluido`.

---


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