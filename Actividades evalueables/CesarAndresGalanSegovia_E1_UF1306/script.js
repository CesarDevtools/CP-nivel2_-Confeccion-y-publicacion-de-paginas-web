const formulario = document.getElementById('formulario');

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const link = document.getElementById("condiciones-link");
  const cerrar = document.querySelector(".cerrar");

  // Modal de éxito
  const modalExito = document.getElementById("modal-exito");
  const cerrarExito = document.querySelector(".cerrar-exito");

  // Abrir modal de condiciones
  link.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("oculto");
    modal.style.display = "block";
  });

  // Cerrar modal de condiciones
  cerrar.addEventListener("click", function () {
    modal.classList.add("oculto");
    modal.style.display = "none";
  });

  // Cerrar modales al hacer clic fuera del contenido
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("oculto");
      modal.style.display = "none";
    }
    if (e.target === modalExito) {
      modalExito.classList.add("oculto");
      modalExito.classList.remove("show-anim");
      modalExito.style.display = "none";
    }
  });

  // Cerrar modal de éxito con la X
  cerrarExito.addEventListener("click", function () {
    modalExito.classList.add("oculto");
    modalExito.classList.remove("show-anim");
    modalExito.style.display = "none";
  });
});


// Validación y envío simulado
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const personas = document.getElementById('personas').value.trim();
  const fecha = document.getElementById('fecha').value.trim();

  // Validación del nombre: solo letras y espacios
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombre)) {
    alert('Nombre inválido. Solo letras y espacios.');
    return;
  }

  // Validación del email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Email inválido.');
    return;
  }

  // Validación de número de personas: debe ser un número mayor a 0
  if (personas === "" || isNaN(personas) || Number(personas) < 1) {
    alert('El número de personas debe ser mayor o igual a 1.');
    return;
  }

  // Validación de fecha: no puede estar vacía
  if (fecha === "") {
    alert('La fecha es obligatoria.');
    return;
  }

  // Simulación de animación de envío y mostrar modal de éxito
  setTimeout(() => {
    const modalExito = document.getElementById("modal-exito");
    modalExito.classList.remove("oculto");
    modalExito.classList.add("show-anim");
    modalExito.style.display = "block";
    formulario.reset();
  }, 500);
});