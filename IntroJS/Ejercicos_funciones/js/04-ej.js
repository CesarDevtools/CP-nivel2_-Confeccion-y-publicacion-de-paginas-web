// convertir centimetros a pulgadas

let centimetros = 20;



function conversor(centimetros) {
    let numero = centimetros / 2.54 ;
    let numeroF = numero.toFixed(2);
    return numeroF;
}


console.log(conversor(centimetros))