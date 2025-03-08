document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave en los enlaces del menú
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });

    // Efecto de zoom en las tarjetas de proyectos
    document.querySelectorAll(".proyecto").forEach(proyecto => {
        proyecto.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });

        proyecto.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Detectar cuando las secciones entran en pantalla
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1 // Cuando el 10% de la sección está visible
    });

    sections.forEach(section => {
        observer.observe(section);
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
