const form = document.getElementById('formCita');
const nombreInput = document.getElementById('nombre');
const fechaInput = document.getElementById('fechaCita');
const mensaje = document.getElementById('mensaje');
const tarjeta = document.getElementById('tarjeta');
const contador = document.getElementById('contador');


//evento de envio de formulario

form.addEventListener('submit', (e) => {
    e.preventDefault();


    //obtener valores
    const nombre = nombreInput.ariaValueMax.trim();
    const fechaCita = new Date(fechaInput.value);
    const ahora = new Date();

    if (!nombre) {
        mensaje.textContent = 'El nombre no puede estar vacio.'
        return;
    }


    //mostrar una confirmacion
    mensaje.textContent = `Cita reservada con para ${nombre} el ${fechaCita.toDateString()}`; 

    iniciarContador(fechaCita);
});

//Evento para cambiar el color y tamaño de la tarjeta

tarjeta.addEventListener('mouseover', () => {
    tarjeta.style.backgroundColor = 'lightgreen';
    tarjeta.style.transform = 'scale(1.2)';
});


tarjeta.addEventListener('mouseout' , () => {
    tarjeta.style.backgroundColor = 'lightblue';
    tarjeta.style.transform = 'scale(1)';
});


//Funcion cuenta regresiva

function iniciarContado(fechaObjetivo) {
    clearInterval(countDownInterval);

    countDownInterval = setInterval(() => {

        const ahora = new Date().getTime()
        const distancia = fechaObjetivo.getTime() - ahora;

        //si la fecha ya paso

        if (distancia < 0) {
            clearInterval(countDownInterval);
            contador.textContent = "¡La fecha de la cita ya ha pasado!"
            return;
        }
    

        //calcular dias, horas y segundo

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia %(1000* 60 *60)) / (1000 * 60));
        const segundos = Math.floor((distancia %(1000* 60 *60)) / 1000);

        //mostramos el contador

        contador.textContent = `Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s`;

    }, 1000);

}