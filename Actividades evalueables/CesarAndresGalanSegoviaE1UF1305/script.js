function verificarStock() {
  const input = document.getElementById("stockInput").value;
  const messageElement = document.getElementsByName("stockMessage")[0]; 

  const stock = parseInt(input);

  if (isNaN(stock) || stock < 0 || !Number.isInteger(stock)) {
    const mensajeError = "Ingresa una cantidad válida";
    messageElement.innerHTML = mensajeError;
    alert(mensajeError); // <- mostrar mensaje en alerta
    return false;
  }

  let mensaje = "";

  if (stock === 0) {
    mensaje = "Sin stock";
  } else if (stock >= 1 && stock <= 10) {
    mensaje = "Crítico";
  } else if (stock >= 11 && stock <= 29) {
    mensaje = "Bajo";
  } else if (stock >= 30 && stock <= 79) {
    mensaje = "Normal";
  } else {
    mensaje = "Máximo stock";
  }

  messageElement.innerHTML = mensaje;
  return false; // Prevenir recarga del formulario
}
