// Capturar el formulario
const formulario = document.getElementById('miFormulario');

// Capturar los campos de resultado
const resultado = document.getElementById('resultado');
const resNombre = document.getElementById('res-nombre');
const resApellidos = document.getElementById('res-apellidos');
const resEdad = document.getElementById('res-edad');
const cerrarBtn = document.getElementById('cerrar');

// Capturar el evento submit del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const edad = document.getElementById('edad').value;

    // Validación de los campos
    if (nombre === '' || apellidos === '') {
        alert('Por favor, completa los campos de nombre y apellidos.');
        return;
    }

    if (isNaN(edad) || edad <= 0) {
        alert('Por favor, ingresa una edad válida (mayor a 0).');
        return;
    }

    // Mostrar los resultados
    resNombre.textContent = nombre;
    resApellidos.textContent = apellidos;
    resEdad.textContent = edad;

    // Mostrar la caja de resultados
    resultado.classList.remove('resultado-oculto');

    // Limpiar el formulario
    formulario.reset();

    // Colocar el foco en el primer campo
    document.getElementById('nombre').focus();
});

// Capturar el evento click del botón "Cerrar"
cerrarBtn.addEventListener('click', function() {
    // Ocultar la caja de resultados
    resultado.classList.add('resultado-oculto');
    
    // Limpiar el formulario
    formulario.reset();
    
    // Colocar el foco en el primer campo
    document.getElementById('nombre').focus();
});