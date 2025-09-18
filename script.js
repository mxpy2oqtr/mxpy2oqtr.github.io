// Función para cambiar el color del texto
function cambiarColor() {
    const titulo = document.getElementById('titulo');
    const colores = ['#ff6b6b', '#4ecdc4', '#45b7aa', '#ffa726', '#ab47bc'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    titulo.style.color = colorAleatorio;
}

// Función para aumentar el tamaño del texto
function aumentarTexto() {
    const titulo = document.getElementById('titulo');
    let tamañoActual = parseInt(window.getComputedStyle(titulo).fontSize);
    titulo.style.fontSize = (tamañoActual + 5) + 'px';
}

// Función para resetear todo a los valores originales
function resetearTodo() {
    const titulo = document.getElementById('titulo');
    titulo.style.color = '#ff6b6b';
    titulo.style.fontSize = '2.5em';
}

// Mensaje en consola para verificar que el script funciona
console.log('¡JavaScript está funcionando! Hello, World!');
