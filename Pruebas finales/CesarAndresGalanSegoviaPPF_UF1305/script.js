// Variables para la alarma
let alarmHour = null;
let alarmMinute = null;
let alarmSet = false;

// Obtener elementos del DOM
const clock = document.getElementById("clock");
const alarmForm = document.getElementById("alarmForm");
const alarmStatus = document.getElementById("alarmStatus");
const alarmSound = document.getElementById("alarmSound");

// Función que actualiza el reloj cada segundo
function updateClock() {
  const now = new Date(); // Objeto Date para obtener la hora actual
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // Formatear a 2 dígitos
  const hh = h.toString().padStart(2, '0');
  const mm = m.toString().padStart(2, '0');
  const ss = s.toString().padStart(2, '0');

  // Mostrar hora en el DOM
  clock.innerHTML = `${hh}:${mm}:${ss}`;

  // Verificar si coincide con la alarma
  if (alarmSet && h === alarmHour && m === alarmMinute && s === 0) {
    alarmTrigger();
  }
}

// Función que se ejecuta cuando la alarma se activa
function alarmTrigger() {
  
  alarmSound.play();
  alarmSet = false; // Resetear alarma
  alarmStatus.innerText = "Alarma sonó y fue desactivada.";
}

// Manejo del formulario para configurar la alarma
alarmForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir recarga de página

  // Leer y validar la hora y minuto ingresados
  const h = parseInt(document.getElementById("alarmHour").value);
  const m = parseInt(document.getElementById("alarmMinute").value);

  if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59) {
    alert("⛔ Por favor introduce una hora válida.");
    return;
  }

  alarmHour = h;
  alarmMinute = m;
  alarmSet = true;

  alarmStatus.innerText = `Alarma configurada para las ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
});

// Iniciar el reloj
setInterval(updateClock, 1000);
