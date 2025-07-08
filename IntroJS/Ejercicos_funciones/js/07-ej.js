// función que calcula el factorial de un número usando recursividad
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Ejemplo de uso:
console.log(factorial(5)); // 120