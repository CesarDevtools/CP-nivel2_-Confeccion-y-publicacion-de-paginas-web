// declaracion de variables

const numero1 = 20; // numero (tipo number)
const numero2 = '20'; // string (tipo string) que contiene un número
const numero3 = 30; // numero (tipo number)


// revisar si los números son iguales sin tener en cuenta el tipo de dato
console.log("n1 == n2", numero1 == numero2); // true

// revisar si los números son iguales teniendo en cuenta el tipo de dato
console.log("n1 === n2", numero1 === numero2); // false

// revisar si los números son diferentes sin tener en cuenta el tipo de dato
console.log("n1 != n2", numero1 != numero2); // false

// revisar si los números son diferentes teniendo en cuenta el tipo de dato
console.log("n1 !== n2", numero1 !== numero2); // true


// revisar el tipo de dato de las variables

console.log("typeof n1", typeof numero1); // number
console.log("typeof n2", typeof numero2); // string

