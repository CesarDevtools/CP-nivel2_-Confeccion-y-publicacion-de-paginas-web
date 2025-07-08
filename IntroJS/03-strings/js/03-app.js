// como concatenar y unir cadenas de texto y variables


const producto = "Monitor 30 Pulgadas";
const precio = "200";

console.log(producto.concat(" En descuento",)); // concatena el texto
console.log(producto.concat(precio)) ; // concatena el texto y la variable

// otras formas de concatenar

console.log("El producto es: " + producto + precio ); // concatenacion con +
console.log(producto + " con descuento de " + precio); // concatenacion con +
console.log(producto, "con un precio de", precio); // concatenacion con coma


//ES6 "SmartScript6" la mejor forma de concatenar variables y texto

console.log(`El producto es: ${producto} y su precio es: ${precio}`); // template literals


