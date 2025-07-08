

let carro = [
    {nombre: 'hoja' , precio: 100},
    {nombre: 'lapiz' , precio: 200}
]


const meses = ['enero', 'febrero' , 'marzo']

console.log(meses)

const meses1 = [...meses , 'abril']

console.log(meses1)

const meses2 = ['diciembre' , ...meses1]

console.log(meses2)

const mesesObjeto = [...meses2 , carro[0

] ]

console.log(mesesObjeto)