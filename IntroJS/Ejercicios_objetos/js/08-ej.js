// contar propiedades de un objeto


const curso = {
    tema: "cocina",
    duracion: "266hrs",
    inicio: "febrero"
};

const propiedades = Object.keys(curso).length

console.log(propiedades)