// Archivo JavaScript principal
/* Contenido de js/main.js */
// Contenido de js/main.js

// Definimos toggleTheme fuera para que sea global
function toggleTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', function() {
    // Recuperar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        toggleTheme(savedTheme);
    }

    // Menú móvil
    const menuItems = document.querySelectorAll('.has-submenu');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const submenu = item.querySelector('.submenu');
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                e.preventDefault();
            }
        });
    });
});