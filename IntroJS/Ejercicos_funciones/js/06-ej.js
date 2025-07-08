// función que pone la primera letra en mayúscula
function capitalizar(palabra) {
    if (!palabra) return "";
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

// Ejemplo de uso:
console.log(capitalizar("javascript")); // Javascript