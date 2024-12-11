# Capítulo 8: Proyecto Usando Grid Layout

## 8.1. Inicio y recursos del proyecto con grid

### Estructura del Proyecto
```
calendario-grid/
├── css/
│   ├── normalize.css
│   ├── styles.css
│   └── variables.css
├── js/
│   └── main.js
└── index.html
```

### Variables CSS (variables.css)
```css
:root {
    /* Colores */
    --primary: #2c3e50;
    --secondary: #3498db;
    --success: #2ecc71;
    --warning: #f1c40f;
    --danger: #e74c3c;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    
    /* Espaciado */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* Fuentes */
    --font-primary: 'Roboto', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;
    
    /* Bordes */
    --border-radius: 4px;
    --border-color: var(--gray-300);
}
```

## 8.2. Organización del proyecto paso a paso

### HTML Base
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendario de Tareas</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="calendar-app">
        <header class="app-header">
            <h1>Calendario de Tareas</h1>
            <div class="header-controls">
                <button class="btn btn-primary">Nueva Tarea</button>
                <div class="month-navigation">
                    <button class="btn">←</button>
                    <h2>Diciembre 2024</h2>
                    <button class="btn">→</button>
                </div>
            </div>
        </header>
        
        <main class="calendar-grid">
            <!-- El calendario se generará aquí -->
        </main>
    </div>
</body>
</html>
```

## 8.3. Estructuración de un calendario en HTML

```html
<div class="calendar-grid">
    <div class="calendar-header">
        <div class="weekday">Domingo</div>
        <div class="weekday">Lunes</div>
        <div class="weekday">Martes</div>
        <div class="weekday">Miércoles</div>
        <div class="weekday">Jueves</div>
        <div class="weekday">Viernes</div>
        <div class="weekday">Sábado</div>
    </div>
    
    <div class="calendar-body">
        <div class="calendar-day">
            <span class="day-number">1</span>
            <div class="day-content">
                <div class="task" data-priority="high">
                    <span class="task-time">09:00</span>
                    <p class="task-title">Reunión de equipo</p>
                </div>
                <div class="task" data-priority="medium">
                    <span class="task-time">14:30</span>
                    <p class="task-title">Revisión de proyecto</p>
                </div>
            </div>
        </div>
        <!-- Más días del calendario -->
    </div>
</div>
```

## 8.4. Diseño del contenedor CSS para el calendario

```css
.calendar-app {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-md);
}

.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-xl);
}

.header-controls {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
}

.month-navigation {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.btn {
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: var(--primary);
    color: white;
}

.btn-primary:hover {
    background-color: var(--secondary);
}
```

## 8.5. Definición del grid en CSS

```css
.calendar-grid {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
}

.calendar-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: var(--gray-100);
    border-bottom: 1px solid var(--border-color);
}

.weekday {
    padding: var(--spacing-md);
    text-align: center;
    font-weight: 500;
    color: var(--primary);
}

.calendar-body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1px;
    background-color: var(--border-color);
}

.calendar-day {
    background-color: white;
    padding: var(--spacing-sm);
    min-height: 150px;
    display: grid;
    grid-template-rows: auto 1fr;
}

.day-number {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--gray-500);
    margin-bottom: var(--spacing-sm);
}

.day-content {
    display: grid;
    gap: var(--spacing-xs);
    overflow-y: auto;
}
```

# Capítulo 8: Proyecto Usando Grid Layout (Parte Final)

## 8.6. Estilos avanzados para tareas en el grid

```css
/* Estilos para las tareas */
.task {
    padding: var(--spacing-sm);
    border-radius: var(--border-radius);
    background-color: var(--gray-100);
    cursor: pointer;
    transition: all 0.3s ease;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--spacing-sm);
    align-items: center;
}

/* Diferentes prioridades de tareas */
.task[data-priority="high"] {
    border-left: 3px solid var(--danger);
    background-color: rgba(231, 76, 60, 0.1);
}

.task[data-priority="medium"] {
    border-left: 3px solid var(--warning);
    background-color: rgba(241, 196, 15, 0.1);
}

.task[data-priority="low"] {
    border-left: 3px solid var(--success);
    background-color: rgba(46, 204, 113, 0.1);
}

.task-time {
    font-size: 0.8rem;
    color: var(--gray-500);
    font-weight: 500;
}

.task-title {
    margin: 0;
    font-size: 0.9rem;
    color: var(--primary);
}

/* Estados hover y activo de las tareas */
.task:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.task:active {
    transform: translateY(0);
}

/* Indicadores de estado */
.task::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: currentColor;
    margin-right: var(--spacing-sm);
}

/* Estilos para días especiales */
.calendar-day.today {
    background-color: var(--gray-100);
    border: 2px solid var(--secondary);
}

.calendar-day.weekend {
    background-color: var(--gray-50);
}

.calendar-day.other-month {
    opacity: 0.5;
}
```

## 8.7. BONUS - Animaciones al pasar sobre las tareas

### Animaciones CSS
```css
/* Animación de entrada para las tareas */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animación de destello */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

/* Animación de progreso */
@keyframes progress {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

/* Aplicando las animaciones */
.task {
    animation: slideIn 0.3s ease-out;
    position: relative;
    overflow: hidden;
}

.task:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: currentColor;
    animation: progress 0.3s ease-out forwards;
}

.today .task {
    animation: pulse 1s ease-in-out;
}

/* Detalles expandibles de tareas */
.task-details {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease-out;
}

.task:hover .task-details {
    grid-template-rows: 1fr;
}

.task-details-content {
    overflow: hidden;
    padding-top: var(--spacing-sm);
    margin-top: var(--spacing-sm);
    border-top: 1px solid var(--gray-300);
}
```

### Implementación completa del calendario
```html
<div class="calendar-grid">
    <div class="calendar-header">
        <!-- Días de la semana -->
    </div>
    
    <div class="calendar-body">
        <div class="calendar-day today">
            <span class="day-number">11</span>
            <div class="day-content">
                <div class="task" data-priority="high">
                    <span class="task-time">09:00</span>
                    <div class="task-content">
                        <p class="task-title">Reunión importante</p>
                        <div class="task-details">
                            <div class="task-details-content">
                                <p>Participantes: 5</p>
                                <p>Sala: Virtual</p>
                                <div class="task-actions">
                                    <button class="btn btn-small">Editar</button>
                                    <button class="btn btn-small btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="task" data-priority="medium">
                    <span class="task-time">14:30</span>
                    <div class="task-content">
                        <p class="task-title">Revisión de código</p>
                        <div class="task-details">
                            <div class="task-details-content">
                                <p>Proyecto: Sistema de calendario</p>
                                <div class="task-actions">
                                    <button class="btn btn-small">Ver detalles</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Más días -->
    </div>
</div>

<style>
/* Estilos adicionales para botones pequeños */
.btn-small {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 0.8rem;
}

.btn-danger {
    background-color: var(--danger);
    color: white;
}

.task-actions {
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-sm);
}

/* Soporte para modo oscuro */
@media (prefers-color-scheme: dark) {
    :root {
        --primary: #3498db;
        --gray-100: #2c3e50;
        --gray-200: #34495e;
        --text-color: #ecf0f1;
    }
    
    .calendar-day {
        background-color: var(--gray-200);
    }
    
    .task {
        background-color: var(--gray-100);
        color: var(--text-color);
    }
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
    .task,
    .task:hover {
        animation: none;
        transform: none;
    }
}
</style>
```

Este completa el Capítulo 8 sobre el Proyecto usando Grid Layout. El proyecto demuestra:
1. Uso avanzado de CSS Grid para layouts complejos
2. Implementación de animaciones y transiciones
3. Manejo de estados y eventos de usuario
4. Consideraciones de accesibilidad
5. Soporte para modo oscuro
6. Diseño responsivo

