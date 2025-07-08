// El tipo boolean tiene solo dos valores: true o false
// ejemplo: true, false booleans directos

let nameFieldChecked = true; // si, el campo name está marcado (verdadero)
let ageFieldChecked = false; // no, el campo age no está marcado (falso)


// los valore booleanos tambien son el resultado de una comparación

let edad1 = 25;
let edad2 = 45;

let isGreater = edad2 > edad1; // true, porque 45 es mayor que 25
//alert(isGreater); // muestra true

let boolean1 = true; // valor booleano literal
let boolean2 = false; // otro valor booleano literal

console.log(boolean1); // muestra true
console.log(boolean2); // muestra false
console.log(typeof boolean1); // muestra "boolean"
console.log(typeof boolean2); // muestra "boolean"

// tambien podemos crear boolean como objeto

const boolean3 = new Boolean(true); // objeto booleano con valor true
console.log(boolean3); // muestra Boolean { true }. no es un valor booleano primitivo
console.log(typeof boolean3); // muestra "object"

