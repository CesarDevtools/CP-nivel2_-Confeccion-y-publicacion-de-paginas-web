// otra propiedad similar al Object.freeze es Object.seal
// Ambos metodos se usan para restringir cambios, pero de forma diferente

//el seal permite modificar mas no permite agregar ni quitar propiedades nuevas



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

Object.seal(producto)

producto.nombre = "tablet";

delete producto.nombre
console.log(producto);

// para verificar si el objeto esta sealed

console.log("El objeto esta sealed ?", Object.isSealed(producto));