// otra forma mas moderna 
// Definimos dos objetos


const producto = {
    nombre: 'TV 50\"',
    precio: 500,
    disponible: true,
  
};

const medida = {
    peso: "2.5kg",
    medida: "1.5mt"
}

// spread operator: forma de combinar objetos y arreglo en JS 
// Crear un objeto que une las propiedades de producto y medida

const resultado = {...producto, ...medida};
console.log(resultado);

//Imprimimos el objeto para verificar que no ha cambiado


