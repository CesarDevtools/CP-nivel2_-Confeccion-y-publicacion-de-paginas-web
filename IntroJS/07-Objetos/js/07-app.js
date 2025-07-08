// los objetos pueden modificar sus valores, veamos como evitarlo




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

// prevenir la modificacion

Object.freeze(producto);


producto.disponible = "false"
console.log(producto);

// como revisar si el objeto esa freezed
console.log("Esta frozen: ", Object.isFrozen(producto));

