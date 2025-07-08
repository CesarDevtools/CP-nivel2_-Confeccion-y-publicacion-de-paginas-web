// creamos un array llamado carrito que simule una lista de productos

const carrito = []

//mostrar el estado inicial del carrito

console.log("Carrito inicial", carrito);

//definimos un producto como un objeto de propiedares

const producto1 = {
    nombre: "monitor 40\"",
    precio: 600
};

//Segundo producto

const producto2 = {
    nombre: "monitor 60\"",
    precio: 950
};

//los agregamos al carro al final del arra con el metodo .push()

carrito.push(producto1);
carrito.push(producto2);

console.log("carrito final", carrito);
console.table(carrito);



//definimos un 3er producto 

const producto3 = {
    nombre: "movil",
    precio: 700
};

//usamos .unshift() para agregarlo al principio del array

carrito.unshift(producto3)

console.table(carrito)