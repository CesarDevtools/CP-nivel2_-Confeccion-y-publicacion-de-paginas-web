//  creamos el carrito



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

//agregamos un producto usando .push esto lo agrega al final

carrito.push(producto1);

carrito.push(producto2);

carrito.push(producto3);

carrito.push(producto4);

console.log(carrito);

//existen varios metodos de eliminar elementos del array

//con .pop()

carrito.pop();
console.log(carrito);


//eliminamos el primero con shift

carrito.shift();
console.log(carrito);

//volvemos a agregar producto4

carrito.push(producto4)
console.log(carrito);

//eliminamos un elemento desde la posicion 1 (indice 1) con splice()
//sintaxis: array.spice(inicio, cantidadEliminar)
carrito.splice(1, 1)
console.log(carrito)