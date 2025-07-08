// --var-- era la forma de definir variables en JS
// ahora se recomienda usar let y const

let producto = "Monitor 20 pulgadas";
console.log(producto);

// a pesar de que la variable es tipo string podemos cambiar su valor

producto = 20;
producto = true;
producto = null; // null es un valor que indica que no hay nada, diferente a undefined que es una variable que no ha sido inicializada

console.log(producto);

//puede ser reasignada
// ** No puede ser redeclarada en el mismo bloque **
//  tiene alcande de bloque ({}), como instrucción if, for, etc.

let nombre = "Juan";
// let nombre = "Pedro"; // Esto causaría un error porque ya fue declarada
// nombre = "Pedro"; // Esto es correcto, reasignación de valor

const persona = {nombre: "pedro"} // const se usa para declarar constantes, no se puede cambiar su valor

persona.nombre = "Juan"; // pero si se puede cambiar una propiedad de un objeto declarado con const
console.log(persona);