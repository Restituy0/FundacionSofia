document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario ya ha visto la advertencia en esta sesión
    if (!sessionStorage.getItem("advertenciaVista")) {
        // Crear el elemento modal
        const modal = document.createElement("div");
        modal.classList.add("modal-advertencia");

        // Contenido del modal
        const modalContent = `
            <div class="modal-content">
                <h2>ADVERTENCIA</h2>
                <p>Actualmente esta es una página en construcción. El diseño presente y las funcionalidades están sujetas a cambios.</p>
            </div>
        `;
        modal.innerHTML = modalContent;
        document.body.appendChild(modal);

        // Marcar advertencia como vista en sessionStorage
        sessionStorage.setItem("advertenciaVista", "true");

        // Cerrar el modal después de 5 segundos
        setTimeout(() => {
            modal.style.display = "none";
        }, 5000);
    }
});
