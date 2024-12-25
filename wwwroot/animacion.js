window.showGifAtPosition = (x, y) => {
    // Crear un div para la animación
    const animDiv = document.createElement("div");
    animDiv.style.position = "absolute";
    animDiv.style.top = `${y}px`;
    animDiv.style.left = `${x}px`;
    animDiv.style.transform = "translate(-50%, -50%)"; // Centra el GIF
    animDiv.style.zIndex = "1000";
    animDiv.style.transition = "opacity 1s"; // Desvanecimiento

    // Agregar la imagen del GIF
    const gifImg = document.createElement("img");
    gifImg.src = "FiUUPum.gif"; // Ruta a tu gif
    gifImg.alt = "Fuegos Artificiales";
    gifImg.style.width = "100px"; // Ajusta el tamaño según sea necesario
    gifImg.style.height = "auto";

    animDiv.appendChild(gifImg);
    document.body.appendChild(animDiv);

    // Hacer que desaparezca después de 3 segundos
    setTimeout(() => {
        animDiv.style.opacity = "0"; // Desvanecer
        setTimeout(() => {
            animDiv.remove(); // Eliminar el elemento después del desvanecimiento
        }, 1000); // Esperar a que termine la animación de desvanecimiento
    }, 3000); // 3 segundos

    window.showElement = (element) => {
        element.style.display = "block";
    };
    
    window.hideElement = (element) => {
        element.style.display = "none";
    };
    
};
