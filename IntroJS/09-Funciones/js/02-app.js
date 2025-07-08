//se puede invocar una fncion declara, antes de su definicion, gracias al hoisting 

sumar4();

//Esta es una funcion declara

function sumar4() {
    console.log(2 + 2)
}


// Esto provocara un error; ReferenceError: Cannot acces 'sumar2' before initialization
sumar2(); // error aqui


//esta es una funcion expresada
const sumar2 = function() {
    console.log(3 + 3);
}


//Esto es porque js se ejecuta en 2 etapas (hoisting)
// en la primera etapa, determina todas las funciones y las variables
// a esta etapa se le llama creacion

// la segunda es la etapa que ejecuta el codigo, se le llama de ejecucion 



/**
 * El flujo de ejecucion de js es el orden en el que el motor de js  procesa el codigo
 * los conceptos claves para entender el flujo de ejecucion son los siguientes
 * 
 * 
 * 1. Ejecucion sincrona:
 * - Js es un lenguaje de programacion single-threaded, lo que significa que ejecuta una tarea a la vez en un solo hilo
 * -las instrucciones, se ejecutan de arriba hacia abajo, una a la vez, en el orden en que aparecen en el codigo
 * 
 * 2. fases del flujo de ejecucion: 
 *  
 * Fase de creacion(hoisting): 
 * - Durante esta fase, el motor Js escaneara el codigo y realizara el hoisting  (elevacion) de las declaraciones y funciones
 * 
 * - las declaraciones de variables con var se elevan al inicio de su ambito (scope) pero no se inicializan.
 *  - las declaraciones de variables con let y const tambien se elevan pero no se incializan y permanecen en una zona muerta temporal TDZ
 * 
 * - fase de ejecucion:
 *  En esta parte el motor JS escuta el codigo linea por linea, asignando valores a las variables y ejecutando las funciones
 * 
 * 
 * pilas y colas: 
 *  - pila de ejecucion (call stack):
 *      -la pila de ejecucion maneja el seguimiento de las funciones que esta invocando. cuando se llama la funcion 
 *      se añade un marco de pila (stack frame) a la pila. cuando la funcion termina, se elimina el marco.
 * 
 * 
 * cola de ejecucion 
 */
