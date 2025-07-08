//funciones que retornan valores

//declarams una funcion "sumar()" que recibe los parametros


function sumar(a, b) {
    //mostramos un mensaje para informar que estamos dentro de la funcion
    console.log("sumar a + b");


// usamos la palabra clave "return" para devolver el resultado
return a + b;

};

//llamamos la funcion con dos valores 1 y 2
//el resultado de la suma se guarda en la variable resultado
const resultado = sumar(1,2);

//mostramos el reultado en la consola
console.log(resultado);  // salida 3
let total = 0;



//declaramos una funcion que agrega el precio al carrito


function agregarPrecio (precio) {
//sumar el precio al total y lo devuelve
    return total+= precio;
};

//declarar una funcion que calcule el IGIC

function calculaImpuesto(total) {
    //calcula el impuesto y lo devuelve
    return total * 1.05;
}
 

//agregar 3 producos al carrito

total = agregarPrecio(200);
total = agregarPrecio(300);
total = agregarPrecio(500);

console.log(total);

//mostrar el total acumulado
console.log(total);

//calcular el total del impuesto
const totalPagar = calculaImpuesto(total);

//mostrar el total a pagar con impuesto

console.log(`el total a pagar es de ${totalPagar}`)