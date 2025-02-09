http = "https://0p1x36b4-3000.uks1.devtunnels.ms/"
// http = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (!form) {
        console.error("Error: No se encontró el formulario con ID 'contactForm'");
        return;
    }

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(http + "send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.text();
            alert(result);
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            alert("No se pudo enviar el mensaje. Inténtelo de nuevo más tarde.");
        }
    });
});

document.getElementById('laraMobile').addEventListener('click', function() {
    window.open('https://github.com/Gonzalo689/LaraMobile/tree/master', '_blank');
});
document.getElementById('eventosEmerita').addEventListener('click', function() {
    window.open('https://github.com/Gonzalo689/Proyecto_-Eventos-Emerita', '_blank');
});

document.getElementById('portafolioLink').addEventListener('click', function() {
    window.open('https://github.com/Gonzalo689/Portafolio', '_blank');
});


