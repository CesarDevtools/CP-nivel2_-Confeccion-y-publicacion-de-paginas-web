  const menuBtn = document.getElementById('menuBtn');
  const menuContent = document.getElementById('menuContent');
  const submenuBtn = document.querySelector('.submenu-btn');
  const submenuContent = document.querySelector('.submenu-content');

  // Mostrar u ocultar el menú principal
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuContent.classList.toggle('show');
    submenuContent.classList.remove('show'); // Cierra submenús si están abiertos
  });

  // Mostrar/ocultar submenú al hacer clic
  submenuBtn.addEventListener('click', (e) => {
    e.preventDefault();      // Previene navegación si es necesario
    e.stopPropagation();     // Evita que el clic cierre todo el menú
    submenuContent.classList.toggle('show');
  });

  // Evitar cierre del menú si haces clic dentro del menú
  menuContent.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Cerrar el menú si haces clic fuera
  document.addEventListener('click', () => {
    menuContent.classList.remove('show');
    submenuContent.classList.remove('show');
  });