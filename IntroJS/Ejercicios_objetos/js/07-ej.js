//añadir y eliminar propiedades

const carro = {
    color: "azul",
    disponibilidad: "si"
};

carro.marca = "toyota";

delete carro.disponibilidad;

console.log(carro)