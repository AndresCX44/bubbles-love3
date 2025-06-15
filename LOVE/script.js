const message = [
    "Me gustas muchisimo",
    "Gracias por ser la luz que ilumina mi vida",
    "Me encanta tus ojos",
    "Eres la persona que me hace sentir feliz",
    "Te amo muchisimo",
    "Mi corazon es tuyo",
    "Te adoro muchisimo",
    "Simplemente te amo",
    "Siempre pienso en ti",
];

let bubbleInterval;

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = message[Math.floor(Math.random() * message.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newleft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newleft}px`;
        }

        if (rect.bottom > window.innerHeight) {
            const newtop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newtop}px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);
    
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

// Evento para el botón
document.getElementById('loveButton').addEventListener('click', function() {
    // Crear primera burbuja inmediatamente
    createTextBubble();
    
    // Iniciar intervalo para crear burbujas cada 500ms
    bubbleInterval = setInterval(createTextBubble, 500);
    
    // Opcional: detener después de cierto tiempo
    setTimeout(() => {
        clearInterval(bubbleInterval);
    }, 10000);
})