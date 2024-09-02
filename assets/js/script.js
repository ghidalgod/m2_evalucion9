var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
];

document.addEventListener('DOMContentLoaded', function() {
    var btnAgregarTarea = document.getElementById('btnAgregarTarea');
    var btnAgregar = document.getElementById('btnAgregar');
    var formulario = document.getElementById('formulario');
    var cuerpoTabla = document.getElementById('cuerpo-tabla');
    var nuevaTareaInput = document.getElementById('nuevaTarea');

    // Función para agregar una tarea a la tabla
    function agregarTarea(tarea) {
        var fila = document.createElement('tr');
        var celdaTarea = document.createElement('td');
        var celdaFinalizar = document.createElement('td');
        var botonFinalizar = document.createElement('button');

        celdaTarea.textContent = tarea.tarea;
        botonFinalizar.textContent = 'Finalizar';
        botonFinalizar.className = 'btn btn-danger';

        // Evento para eliminar la tarea
        botonFinalizar.addEventListener('click', function() {
            fila.remove();
        });

        celdaFinalizar.appendChild(botonFinalizar);
        fila.appendChild(celdaTarea);
        fila.appendChild(celdaFinalizar);
        cuerpoTabla.appendChild(fila);
    }

    // Agregar las tareas iniciales
    tareas.forEach(function(tarea) {
        agregarTarea(tarea);
    });

    // Evento para mostrar/ocultar el formulario
    btnAgregarTarea.addEventListener('click', function() {
        if (formulario.style.display === 'none' || formulario.style.display === '') {
            formulario.style.display = 'block';
        } else {
            formulario.style.display = 'none';
        }
    });

    // Evento para agregar una nueva tarea
    btnAgregar.addEventListener('click', function() {
        var nuevaTarea = nuevaTareaInput.value.trim();
        if (nuevaTarea !== '') {
            var tarea = { tarea: nuevaTarea };
            agregarTarea(tarea);
            nuevaTareaInput.value = '';
            formulario.style.display = 'none'; // Ocultar el formulario
        }
    });
});
