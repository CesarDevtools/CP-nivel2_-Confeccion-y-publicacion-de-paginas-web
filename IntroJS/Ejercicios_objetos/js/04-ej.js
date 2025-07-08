//Ej 4 combinar objetos con el spread operatos

const persona = {
    nombre: "cesar",
    edad: "25"
}


const contacto = {
    numero: "627780505",
    instagram: "cessar_a"
}

perfilCompleto = {...persona, ...contacto}

console.log(perfilCompleto)