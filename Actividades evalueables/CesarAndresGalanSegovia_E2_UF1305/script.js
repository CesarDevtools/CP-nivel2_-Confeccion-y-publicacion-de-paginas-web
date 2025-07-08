const form = document.getElementById('formDatos');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const tarjeta = document.getElementById('tarjeta');

 form.addEventListener('submit', (e) => {
    e.preventDefault();


    //obtener valores
    const nombre = nombreInput.value;
    const correo = correoInput.value;
    
    //verificar que los campos no esten vacios
    if (!nombre) {
        mensaje.textContent = 'El nombre no puede estar vacio.'
        return;
    }

    if (!correo) { 
        mensaje.textContent = 'El correo no puede estar vacio'
        return;
    }

     // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        mensaje.textContent = 'El correo no tiene un formato válido';
        return;
    }


    //mostrar una confirmacion
    mensaje.textContent = `Datos recibidos correctamente`; 

    
});

//Eventos del raton en el div

tarjeta.addEventListener('mouseover', () => {
    tarjeta.style.backgroundColor = 'lightgreen';
    tarjeta.style.transform = 'scale(1.2)';
});


tarjeta.addEventListener('mouseout' , () => {
    tarjeta.style.backgroundColor = 'lightblue';
    tarjeta.style.transform = 'scale(1)';
});



//reloj digial

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); 