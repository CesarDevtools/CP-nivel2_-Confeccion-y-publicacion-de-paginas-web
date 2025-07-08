// El Object.keys, Object.values y el Object.entries
// Esto nos permite acceder a las propiedades 

const producto = {
    nombre: 'TV 50\"',
    precio: 500,
    disponible: true,
};


// nos devuelve un array con los nombres (claves) de las propiedades del objeto
console.log(Object.keys(producto));



// nos devuelve un arrat con valores de las propiedades
console.log(Object.values(producto))


// nos devuelve un array de arrays, cada subarray contiene un par [clave, valores]
console.log(Object.entries(producto))
// Muy util para recorrer un objeto con metodos como foreach o for .... of