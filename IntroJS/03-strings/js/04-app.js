// metodos de string


const producto = "       Monitor 30 Pulgadas    ";

console.log(producto); // imprime el texto
console.log(producto.length); // longitud de la cadena



//Eliminar espacios al inicio 

console.log(producto.trimStart()); // elimina los espacios al inicio
console.log(producto.trimEnd());  // elimina los espacios al final
console.log(producto.trim()); // elimina los espacios al inicio y al final


// los metodos en JS se pueden encadenar

console.log(producto.trim().length); // elimina los espacios al inicio y al final y muestra la longitud de la cadena