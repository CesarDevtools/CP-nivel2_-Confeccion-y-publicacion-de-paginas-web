//


const producto = {
    nombre: 'TV 50\"',
    precio: 500,
    disponible: true,
    mostrarInfo: function(){
        return `El producto: ${this.nombre} tiene precio de ${this.precio}`}
};

console.log(producto.mostrarInfo());