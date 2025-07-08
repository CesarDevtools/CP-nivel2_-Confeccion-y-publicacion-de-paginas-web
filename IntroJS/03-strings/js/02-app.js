// veamos algunos metodos

const producto = "Monitor 20 Pulgadas";
const precio = "50 euros";

console.log(producto.length); // longitud del string
console.log(precio.length); // longitud del string


console.log(producto.indexOf("Pulgadas")); // devuelve la posicion del texto buscado
console.log(producto.indexOf("Tablet")); // devuelve -1 si no encuentra el texto buscado


console.log(producto.includes("Pulgadas")); // devuelve true si encuentra el texto buscado
console.log(producto.includes("Tablet")); // devuelve false si no encuentra el texto buscado    