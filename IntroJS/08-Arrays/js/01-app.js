// como crear arrays

// Forma 1: Usando corchetes []
let numeros = [1, 2, 3, 4];

// Forma 2: Usando el constructor Array
let frutas = new Array("manzana", "pera", "uva");

// Forma 3: Array vacío y luego agregar elementos
let colores = [];
let meses = new Array()
colores.push("rojo");
colores.push("azul");

// Forma 4: Usando Array.of()
let letras = Array.of("a", "b", "c");

// Forma 5: Usando Array.from() (por ejemplo, de un string)
let chars = Array.from("hola");

console.log(numeros);
console.log(frutas);
console.log(colores);
console.log(letras);
console.log(chars);




let varios = Array.of(10, "texto", false, null, { edad: 20 }, [7, 8, 9]);

console.log(varios);




//crear un array que llamaremos deTodo que contiene direntes tipos de datos


const deTodo = [
    42, 
    "hola", 
    true, 
    null, 
    { nombre: "Ana", apellido: "segovia" }, 
    Date(),
    [1, 2, 3]];

console.log(deTodo);





