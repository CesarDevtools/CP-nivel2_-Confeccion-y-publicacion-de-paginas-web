//creamos un array utilizando el constructor new Array

const meses = new Array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul");
//.length devuelve el nuemro total de elementos del array
console.log(meses.length);

//si queremos recorrer el array podems utilizar el bucle "for"
//i es la variable de control que se inicia en 0 (primer indice del array)
//el bucle se ejecuta mientras i sea menor que (i < array.lenght)
// en cada interaccion mostramos el elemento en la posicion i

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

