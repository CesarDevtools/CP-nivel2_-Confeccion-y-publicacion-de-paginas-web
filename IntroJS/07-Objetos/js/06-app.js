// si recuerdas una variable defina con "const" no se le puede reasignar
// const producto = "Monitor";
//producto = "tablet";
//console.log(producto);


// En el caso de los objetos es diferente ya que se pueden reescribir

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

console.log(producto);

producto.disponible = "false"

console.log(producto)