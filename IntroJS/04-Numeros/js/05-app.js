// mas operaciones

const num1 = "20";
const num2 = "20.2";
const num3 = "uno";
const num4 = 20;


console.log(num1);

// Convertir cadenas a números
console.log(Number.parseInt(num1)); // Convierte a entero
console.log(Number.parseFloat(num2)); // Convierte a flotante
console.log(Number.parseInt(num3)); // NaN (no es un número)

// revisar si es un número entero

console.log(Number.isInteger(num4)); // true
console.log(Number.isInteger(num2)); // false (es un flotante)
console.log(Number.isInteger(num1)); // false (es una cadena)
console.log(Number.isInteger(num3)); // false (no es un número)


// convertir  numero a cadena
console.log(num4.toString()); // Convierte a cadena