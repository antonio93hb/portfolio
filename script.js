document.addEventListener("DOMContentLoaded", function () {
    // Agrega un efecto de scroll suave cuando se hace clic en los enlaces del menú
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const targetId = this.getAttribute("href").substring(1); // Obtiene el ID de la sección de destino
            const targetSection = document.getElementById(targetId); // Encuentra la sección en el documento
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20, // Desplaza la página hasta la sección deseada
                    behavior: "smooth" // Aplica un efecto de desplazamiento suave
                });
            }
        });
    });

    // Agrega un efecto de zoom a las tarjetas de proyectos cuando el mouse pasa sobre ellas
    document.querySelectorAll(".proyecto").forEach(proyecto => {
        proyecto.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)"; // Aumenta el tamaño de la tarjeta ligeramente
            this.style.transition = "transform 0.3s ease"; // Aplica una transición suave
        });

        proyecto.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)"; // Restaura el tamaño original cuando el mouse se retira
        });
    });
});
