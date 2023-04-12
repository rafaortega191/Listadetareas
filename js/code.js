const listaTareas = document.getElementById('listaTareas');

        function agregarTarea() {
            const tareaInput = document.getElementById('tareaInput');
            const tarea = tareaInput.value.trim(); // Obtener el valor de la tarea ingresada

            if (tarea === '') {
                alert("Por favor ingresa una tarea válida.");
                return;
            }

            // Crear un nuevo elemento de lista
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.appendChild(document.createTextNode(tarea));

            // Crear un botón de eliminar
            const botonEliminar = document.createElement('button');
            botonEliminar.className = 'btn btn-danger btn-sm float-right';
            botonEliminar.innerHTML = 'Eliminar';
            botonEliminar.onclick = function() {
                li.remove(); // Eliminar la tarea de la lista
            }

            li.appendChild(botonEliminar); // Agregar el botón de eliminar a la tarea

            listaTareas.appendChild(li); // Agregar la tarea a la lista

            tareaInput.value = ''; // Limpiar el input de tarea
        }