// objetos literales (sin clases)
// los objetos son una parte principal de JavaScript
// en lugar de crear variables para cada dato, podemos crear un objeto que los agrupe

let nombreProducto = "Monitor 40 \"";
let precio = 350;
let disponible = true;

//podemos crear un objeto que agrupe la información
const producto = {
    nombre: "Monitor 40 \"",
    precio: 350,
    disponible: true // el ultimo no lleva coma
}

console.log(producto.nombre);

// Que son los objetos?
// Estructuras de datos clave-valor creadar directamente, sin necesidad de crear una clase
// Caracteristicas:
// * No requieren una clase para ser creados
// * son ideales para almacenar datos relacionados
// * Se crean con {} 
//* Muy usados en JSON (JavaScript Object Notation), configuraciones o respuestas de  APIs, etc.


let persona = {
    nombre: "Lucia",
    edad : 30,
    saludar: function(){
        return "Hola";
    }
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.saludar());

// Este objeto lo podemos escribir asi


let persona2 = {
    nombre: "Lucia",
    edad : 31,
    saludar(){
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
};

console.log(persona2.nombre);
console.log(persona2.edad);
console.log(persona2.saludar());