// en la consola los numeors se muestran diferente

const num1 = 30
const num2 = "20"



//Crear numeros

const num3 = 30;
const num4 = 20.20;
const num5 = .3020
const num6 = -1;


// otras formas de crear numeros
const num7 = new Number(100);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num7.valueOf()); // Muestra el valor primitivo del objeto Number





// Operaciones con numeros

let resultado


// Suma
resultado = num1 + num2;
console.log(resultado); // Esto mostrará "3020" porque num2 es una cadena

// Resta
resultado = num1 - num3;
console.log(resultado); // Esto mostrará 0 porque num3 es un número y num1 es un número

// Multiplicacion
resultado = num1 * num3;
console.log(resultado); // Esto mostrará 900 porque ambos son números

// Division
resultado = num1 / num3;
console.log(resultado); // Esto mostrará 1 porque ambos son números

// Modulo   
resultado = num1 % num3;
console.log(resultado); // Esto mostrará 0 porque ambos son números

// exponencial
resultado = num1 ** 2;
console.log(resultado); // Esto mostrará 900 porque num1 es 30 y se eleva al cuadrado

