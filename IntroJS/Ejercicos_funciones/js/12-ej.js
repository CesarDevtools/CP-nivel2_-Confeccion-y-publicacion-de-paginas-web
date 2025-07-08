// validar longitud de contraseña



function esContraseñaValida(contraseña) {
    return (contraseña.length >= 8) ? "valida" : "muy corta";
}

// Ejemplo de uso:
console.log(esContraseñaValida("abc123"));      
console.log(esContraseñaValida("segura123"));   