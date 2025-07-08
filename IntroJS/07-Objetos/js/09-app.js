// Vamos a ver como unir dos objetos, es muy comun al trabajar con BBDD





const producto = {
    nombre: 'TV 50\"',
    precio: 500,
    disponible: true,
};


const medida = {
    peso: "2.5kg",
    medida: "1.5mt"
}


//para unirlos es con el metodo assing()

const resultado = Object.assign(producto, medida);
//console.log(resultado);

console.log(producto);