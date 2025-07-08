// crea un array de objetosç y buscar un elemento


// crea un array de objetos y buscar un elemento

const alumnos = [
    { nombre: "Ana", nota: 18 },
    { nombre: "Luis", nota: 15 },
    { nombre: "Sofía", nota: 20 },
    { nombre: "Pedro", nota: 17 }
];

// Buscar el alumno con la nota más alta
let mejorAlumno = alumnos[0];

for (let alumno of alumnos) {
    if (alumno.nota > mejorAlumno.nota) {
        mejorAlumno = alumno;
    }
}

console.log(`El alumno con la nota más alta es ${mejorAlumno.nombre} con una nota de ${mejorAlumno.nota}`);