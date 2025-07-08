// Ej 2 Agregar un metodo a un objeto


const libro = {
    propiedad:  {
    titulo: "El arbol",
    autor: "Cesar",
    año: "2000"},
    mostrarResumen: function(){
        return `El titulo es: ${this.propiedad.titulo} y el autor es ${this.propiedad.autor}`}
}

console.log(libro.mostrarResumen())