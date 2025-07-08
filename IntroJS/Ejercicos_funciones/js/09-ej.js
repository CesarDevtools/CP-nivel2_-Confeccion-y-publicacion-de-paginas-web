//saber si un año es bisiesto

function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

// Ejemplo de uso:
console.log(esBisiesto(2024)); // true
console.log(esBisiesto(1900)); // false
console.log(esBisiesto(2000)); // true