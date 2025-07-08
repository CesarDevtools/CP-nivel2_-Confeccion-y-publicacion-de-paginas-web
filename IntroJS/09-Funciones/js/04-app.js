//diferencia entre metodos y funciones

const num2 = "20";

console.log(parseInt(num2)); // resultado 20

const num1 = 20;

//una funcion  definida por el usuario


function saludar() {
    console.log("hola")
}

saludar(); // llamada de la funcion


//creamos objeto

//funcion que vive dentro de un objeto
const persona = {
    nombre: "juan",

    saludo: function(){
        console.log("hola" + this.nombre)
    }
}


saludo();
