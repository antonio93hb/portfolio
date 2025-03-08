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
