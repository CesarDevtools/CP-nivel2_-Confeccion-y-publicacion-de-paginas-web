// 3 metodos mas 
// Replace

const producto = "Monitor 20 Pulgadas";


// Reemplaza una palabra por otra
console.log(producto.replace("20", "40")); // Reemplaza "20" por "40"

console.log(producto.replace(" Pulgadas", '"'));  

// replace solo cambia el contenido de la primera coincidencia, pero no modifica la variable permanentemente


//slice te permite extraer una parte de la cadena
console.log(producto.slice(0, 7)); // Extrae desde el índice 0 hasta el 7 (sin incluir el 7)

// slice desde una posición hasta el final

console.log(producto.slice(8)); // Extrae desde el índice 8 hasta el final

// Slice posicion de comienzo es mayor que la de fin, entonces devuelve una cadena vacía
console.log(producto.slice(8, 0)); // Devuelve una cadena vacía porque el inicio es mayor que el fin


// substring que invierte los numeros si el inicio es mayor que el fin

console.log(producto.substring(2, 1)); // Devuelve "o" porque invierte los números y extrae desde el índice 1 hasta el 2
console.log(producto.substring(0, 10)); // Devuelve "Monitor 20" porque extrae desde el índice 0 hasta el 10

