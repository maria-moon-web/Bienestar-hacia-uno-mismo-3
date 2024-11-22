
// Cambiar el color de los enlaces de navegación cuando el mouse pasa por encima
document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'red'; // Cambia el color a rojo
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; // Restaura el color original
    });
});

// Mostrar y ocultar contenido del pie de página cuando se hace clic en un enlace
const footerContent = document.querySelector('.footer-content');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Mostrar/Ocultar Footer';
document.body.insertBefore(toggleButton, footerContent); // Coloca el botón antes del pie de página

toggleButton.addEventListener('click', () => {
    footerContent.style.display = (footerContent.style.display === 'none') ? 'block' : 'none';
});
