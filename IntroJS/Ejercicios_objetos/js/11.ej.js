const productos = [
    { nombre: "Laptop", stock: 15 },
    { nombre: "Auriculares", stock: 30 },
    { nombre: "Teclado", stock: 20 },
    { nombre: "Mouse", stock: 2 },
    { nombre: "Monitor", stock: 10 },
    { nombre: "Impresora", stock: 8 },
    { nombre: "Tablet", stock: 3 },
    { nombre: "Cámara", stock: 7 }
];

function productosConStockBajo(lista) {
    return  productos.stock < 5;
}