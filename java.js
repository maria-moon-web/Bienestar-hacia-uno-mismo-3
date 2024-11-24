document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (nombre && apellido && email && password) {
        alert('Registro exitoso!');
        this.reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.01)';
    });
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});
