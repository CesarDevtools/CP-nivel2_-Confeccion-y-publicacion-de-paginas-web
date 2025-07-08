// ejercicio01: Cazador de palindromos

let texto1 = "Anita lava la tina";
// convertimos el texto a minúsculas y eliminamos los espacios
let textoLimpio1 = texto1.toLowerCase().replace(/\s+/g, '');
// invertimos el texto 

let textoInvertido1 = textoLimpio1.split('').reverse().join('');
// comparamos el texto limpio con el texto invertido
// verificamos si son iguales
let esPalindromo1 = textoLimpio1 == textoInvertido1;
console.log(`El texto "${texto1}" ${esPalindromo1 ? 'es' : 'no es'} un palíndromo.`);


// ejercicio02: Emoji traductor

let texto2 = "Estoy feliz pero a veces triste";
// reemplazamos palabras por emojis

texto2 = texto2.replaceAll("feliz", "😊").replaceAll("triste", "😢")
console.log(`Texto traducido: ${texto2}`);

// ejercicio03: detector de malas palabras
let texto3 = "Eres un tonto y un feo";
let malasPalabras = ["tonto", "feo"];

//recorremos las malas palabras y las reemplazamos por asteriscos

for (let i = 0; i < malasPalabras.length; i++) {
    let palabra = malasPalabras[i];
    let regex = new RegExp(palabra, 'gi'); // 'gi' para reemplazar todas las ocurrencias sin importar mayúsculas o minúsculas
    texto3 = texto3.replace(regex, '*'.repeat(palabra.length));
}
console.log(`Texto filtrado: ${texto3}`);

// ejercicio04: contador de palabras y letras

let texto4 = "Hola como estas?.";
// eliminamos los signos de puntuación y convertimos a minúsculas
let palabras = texto4.split(/\s+/); // divide el texto en palabras
// contamos las palabras
let contadorPalabras = palabras.length;
// contamos las letras eliminando espacios y caracteres no alfabéticos
let contadorLetras = texto4.replace(/[^a-zA-Z]/g, '').length; // elimina caracteres no alfabéticos y cuenta las letras
console.log(`El texto tiene ${contadorPalabras} palabras y ${contadorLetras} letras.`);




// ejercicio05: generador de hashtags


let texto5 = "Hola mundo, este es un ejemplo de generador de hashtags";

let palabras5 = texto5.split(" ") // dividimos el texto en palabras
console.log("Palabras del texto:", palabras5);

//ponemos en mayúscula la primera letra de cada palabra 
for (let i = 0; i < palabras5.length; i++) {
    let palabra = palabras5[i];
    palabras5[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1);
}


/*incompleto*/





// ejercicio06: reversor de palabras

let texto6 = "JavaSript es divertido"
let palabras6 = texto6.split(" ").reverse().join(" ") 
 console.log(`Texto con palabras invertidas: ${palabras6}`);

