// variables
/* 3 formas de escribir variables*/

var nombre = "Juan"; // variable global
nombre = "Pedro"; // se puede cambiar
console.log(nombre); // Pedro


let edad = 30; // variable local, se puede cambiar
const PI = 3.14; // constante, no se puede cambiar


// Es de tipo dinamico

var precio = 200;
console.log(precio); // 200


var disponible;
disponible = true; // se puede declarar sin asignar valor
console.log(disponible); // true


var categoria = "Ordenadores",
    marca = "Apple",
    calidifcacion = 5;

    console.log(categoria, marca, calidifcacion); // Ordenadores Apple 5

    //estilos para crear variables

var nombreCompleto = "Juan Perez"; // camelCase
var nombre_completo = "Juan Perez"; // snake_case
var NombreCompleto = "Juan Perez"; // PascalCase


// JS es case sensitive
var nombreCompleto = "Juan Perez";
var NombreCompleto = "Juan"; // diferente a la anterior
console.log(nombreCompleto); // Juan Perez
console.log(NombreCompleto); // Juan Perez

    