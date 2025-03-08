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

//Validación de los campos del formulario
document.addEventListener("DOMContentLoaded", function () {
    // Capturamos el formulario y el mensaje
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío por defecto

        // Capturamos los valores de los campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Comprobamos que los campos no estén vacíos
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Por favor, completa todos los campos.";
            formMessage.style.color = "red";
            return;
        }

        // Validación del formato del email usando una expresión regular
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Por favor, introduce un correo electrónico válido.";
            formMessage.style.color = "red";
            return;
        }

        // Si todo está bien, mostramos un mensaje de éxito
        formMessage.textContent = "¡Mensaje enviado con éxito!";
        formMessage.style.color = "green";

        // Limpiamos los campos del formulario
        form.reset();
    });
});
