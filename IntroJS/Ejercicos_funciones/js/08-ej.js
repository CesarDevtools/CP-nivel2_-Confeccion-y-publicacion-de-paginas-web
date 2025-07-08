// contador de palabras

function contarPalabras(texto) {
    // Elimina espacios extra al inicio y final, y divide por espacios
    let palabras = texto.trim().split(/\s+/);
    return palabras.filter(p => p.length > 0).length;
}

// Ejemplo de uso:
console.log(contarPalabras("Hola, ¿cómo estás?")); // 3