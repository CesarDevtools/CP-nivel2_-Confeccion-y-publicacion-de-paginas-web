
/*

function generarTabla () {
    //obtener los valores de las filas y columnas
    let filas  = parseInt(document.getElementById('filas').value);
    let columnas  = parseInt(document.getElementById('columnas').value);

    //calcular la tabla

    totalNumeros = filas * columnas;

    //inicializar tabla

    let tabla = "<table border='1' cellpadding= '10' cellspacing='0'";

    //bucle para recorrer las filas

    for (let i = 0; i < filas; i++) {
        tabla += "<tr>";
   

    //bucle para recorrer columnas
    for (let j = 0; j < columnas; j++) {
        tabla += "<td>" + totalNumeros + "</td>"
        totalNumeros--;
    }

    tabla += "</tr>x"
 }

    tabla += "</table>"

    document.getElementById('tabla').innerHTML = tabla

}*/



function generarTabla () {
    //obtener los valores de las filas y columnas
    let filas  = parseInt(document.getElementById('filas').value);
    let columnas  = parseInt(document.getElementById('columnas').value);

    //calcular la tabla

     

    //inicializar tabla

    let tabla = "<table border='1' cellpadding= '10' cellspacing='0'";

    //bucle para recorrer las filas

    for (let i = 1; i <= filas; i++) {
        tabla += "<tr>";
   

    //bucle para recorrer columnas
    for (let j = 1; j <= columnas; j++) {
        let producto =  i * j
        tabla += "<td>" + `${i} x ${j} = ${producto}`  + "</td>"
       
    }

    tabla += "</tr>"
 }  

    tabla += "</table>"

    document.getElementById('tabla').innerHTML = tabla

}