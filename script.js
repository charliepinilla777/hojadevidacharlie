// Configura las barras de progreso utilizando una variable CSS
document.querySelectorAll(".progress-bar").forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    bar.style.setProperty("--progress-width", `${percent}%`);
    bar.style.width = `${percent}%`;
});

// Agrega la funcionalidad de acordeón
document.querySelectorAll(".experiencia-item, .Formacion-academica-item, .Formacion-Complementaria-item").forEach(item => {
    item.addEventListener("click", () => {
        const details = item.querySelector(".details");
        if (details) {
            details.classList.toggle("visible");
        }
    });
});

// Alterna la visibilidad de los detalles
function toggleDetails(element) {
    const details = element.querySelector(".details");
    if (details) {
        details.classList.toggle("visible");
    }
}
