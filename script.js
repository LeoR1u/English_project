document.addEventListener('DOMContentLoaded', function () {
    const enlaces = document.querySelectorAll('.fixed-header nav ul li a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (event) {
            event.preventDefault();
            const seccionId = this.getAttribute('data-seccion');
            mostrarSeccion(seccionId);
        });
    });

    function mostrarSeccion(seccionId) {
        const secciones = document.querySelectorAll('.seccion');
        secciones.forEach(seccion => {
            if (seccion.id === seccionId) {
                seccion.classList.add('visible');
                seccion.classList.remove('oculto');
            } else {
                seccion.classList.remove('visible');
                seccion.classList.add('oculto');
            }
        });
    }
});

