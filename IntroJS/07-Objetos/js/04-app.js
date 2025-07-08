// un objeto puede contener cualquier tipo de dato, incluso otros objetos
// incluso otro objeto, eso se conoce como un objeto anidado

const producto = {
    nombre: 'TV 50\"',
    precio: 500,
    disponible: true,
    informacion: {
        peso: '10kg',
        medida: '50 pulgadas',
        marca: 'Samsung'
    }
};


console.log("Este es el objeto", producto);
// Acceder a las propiedades del objeto
console.log(producto.informacion.medida); // 50 pulgadas
