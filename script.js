document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los enlaces del menú (y del footer)
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            const hrefValue = anchor.getAttribute("href");

            // Si el enlace empieza con "#", es un enlace interno
            if (hrefValue.startsWith("#")) {
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
                // Quitamos el "#" para obtener el ID de la sección
                const targetId = hrefValue.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 20,
                        behavior: "smooth"
                    });
                }
            }
            // Si NO empieza con "#", dejamos que se abra con normalidad (enlaces externos)
        });
    });

    // Efecto de zoom a las tarjetas de proyectos
    document.querySelectorAll(".proyecto").forEach(proyecto => {
        proyecto.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });

        proyecto.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});

//Validación de los campos del formulario
document.addEventListener("DOMContentLoaded", function () {
    // Capturamos el formulario y el mensaje
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit",async function(event) {
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

        //  Detectar si está en local
        if (window.location.hostname === "localhost" || window.location.protocol === "file:") {
            formMessage.textContent = "Mensaje de prueba enviado (sin enviar a Formspree).";
            formMessage.style.color = "blue";
                    
            setTimeout(() => {
                window.location.href = "thanks.html";
            }, 2000);
            form.reset();
            return;
        }
        
        // 🔥 Solo enviará el formulario si NO está en local
        try {
            // Enviar el formulario manualmente mediante fetch()
            const response = await fetch("https://formspree.io/f/mzzepory", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                formMessage.textContent = "¡Mensaje enviado con éxito!";
                formMessage.style.color = "green";
                
                // 🔥 Redirigir manualmente después de 1 segundos
                setTimeout(() => {
                    window.location.href = "https://antonio93hb.github.io/portfolio/thanks.html";
                }, 1000);
                
                form.reset();
            } else {
                formMessage.textContent = "Hubo un error al enviar el mensaje.";
                formMessage.style.color = "red";
            }
        } catch (error) {
            formMessage.textContent = "Error de red. Inténtalo de nuevo.";
            formMessage.style.color = "red";
        }
    });
});
