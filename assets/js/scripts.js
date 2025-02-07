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
            const response = await fetch("http://localhost:3000/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.text();
            alert(result);
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            alert("Hubo un problema al enviar el mensaje.");
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


