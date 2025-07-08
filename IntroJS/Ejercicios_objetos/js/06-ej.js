//Ej 6 recorrer Object.entries() con for.. of

let pelicula = {
    nombre: "avatar", 
    duracion: "2hrs"
}

// Recorre cada par [clave, valor] del objeto
for (let [nombre, duracion] of Object.entries(pelicula)) {
    console.log(nombre, duracion);
}

