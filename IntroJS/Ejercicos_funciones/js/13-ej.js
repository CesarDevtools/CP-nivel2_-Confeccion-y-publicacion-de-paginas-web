//buscar palabra en una frase

function buscarPalabra(frase, palabra) {
    return frase.toLowerCase().includes(palabra.toLowerCase());
};



console.log(buscarPalabra("hola como estas", "estas"))