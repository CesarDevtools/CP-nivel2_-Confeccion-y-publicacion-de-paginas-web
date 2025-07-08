// crear una funcion que reciba un objeto y devuelva un resumen

// crear una funcion que reciba un objeto y devuelva un resumen




function resumen(obj) {
    let resultado = "";
    for (let [clave, valor] of Object.entries(obj)) {
        resultado += `${clave}: ${valor}\n`;
    }
    return resultado;
}

// Ejemplo de uso:
const persona = { nombre: "Ana", edad: 25, ciudad: "Lima" };
console.log(resumen(persona));