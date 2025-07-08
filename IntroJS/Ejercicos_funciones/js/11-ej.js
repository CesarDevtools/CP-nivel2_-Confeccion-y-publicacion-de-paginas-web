//calcular porcentaje 

function calcularPorcentaje(parte, total) {
    if (total === 0) return 0; // Evita división por cero
    return (parte / total) * 100;
}

// Ejemplo de uso:
console.log(calcularPorcentaje(25, 200)); // 12.5