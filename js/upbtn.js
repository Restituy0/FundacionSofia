// Mostrar botón cuando el usuario hace scroll hacia abajo
window.onscroll = function () { mostrarBoton() };

function mostrarBoton() {
    let boton = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}

// Función para volver arriba suavemente
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}