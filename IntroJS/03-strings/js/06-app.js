// repeat permite repetir una cadena un número específico de veces

const producto = "Monitor 20 Pulgadas";

const texto = "En promoción";
console.log(producto.repeat(3)); // Repite el producto 3 veces

console.log(texto.repeat(2)); // Repite el texto 2 veces

console.log(texto.repeat(0)); // Repite el texto 0 veces, lo que resulta en una cadena vacía
console.log(texto.repeat(2.2)); // Repite el texto 2 veces, ya que el número decimal se redondea hacia abajo


//podemos usar template strings para concatenar cadenas de texto

console.log(`${producto} ${texto}!!!`); // Concatenación usando template strings

// Split

const madrid = "va a ganar el partido de hoy";

// Separar la frase por palabras
console.log(madrid.split(" ")); // Devuelve un array con las palabras separadas

const españa = "equipo, ganador, equipo ganador, escribir"
// usamos el split
console.log(españa.split(",")); // Devuelve un array con las palabras separadas por comas