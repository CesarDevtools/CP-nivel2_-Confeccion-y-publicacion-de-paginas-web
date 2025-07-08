//como hacer un destructuring de un objeto dentro de otro

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



// Destructuring del objeto

const { nombre, precio, informacion: { peso, medida, marca } } = producto;
console.log(nombre); // TV 50"
console.log(precio); // 500
console.log(peso); // 10kg
console.log(medida); // 50 pulgadas
console.log(marca); // Samsung