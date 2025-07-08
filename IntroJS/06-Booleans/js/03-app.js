// Existe otra forma de comparar si un valor es verdadero 


const boolean1 = true;
const boolean2 = false;

//Estrutuctura condicional tradicional if/else

if (boolean1) {
    console.log("boolean1 es verdadero");
}
else {
    console.log("boolean1 es falso");
}

// el condigo anterior es facil de leer, pero podemos simplificarlo usando el operador ternario
comsole.log(boolean1 ? "boolean1 es verdadero" : "boolean1 es falso");
// El operador ternario es una forma concisa de escribir una estructura condicional