//añadir elementos usando el spread operator

// creamos el carrito vacio

const carrito = [];
console.log("Carro vacio", carrito)


const producto1 = {
    nombre: "monitor 40\"",
    precio: 600
};

//Segundo producto

const producto2 = {
    nombre: "monitor 60\"",
    precio: 950
};

//definimos un 3er producto 

const producto3 = {
    nombre: "movil",
    precio: 700
};

//cuarto producto

const producto4 = {
    nombre: "movil XL",
    precio: 1100
};


// Creamos un nuevo array llamado  "resultado" que ontiene el producto 1

let resultado = [...carrito, producto1];

console.log(resultado);


//añadimos el producto 2 al final de resultado

resultado = [...resultado, producto2];
console.log("Resultado 1", resultado);

//producto3

resultado = [...resultado, producto3];
console.log(resultado);

//tambien podemos agregar un elemento al inicio del array

resultado = [producto4, ...resultado];
console.log("resultado2", resultado);