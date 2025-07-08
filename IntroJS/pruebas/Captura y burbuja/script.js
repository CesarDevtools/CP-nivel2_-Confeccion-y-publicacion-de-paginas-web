  function logEvent(phase, element) {
      return function() {
        alert(`${phase} - ${element}`);
      };
    }

    // Elementos
    const outer = document.getElementById('outer');
    const middle = document.getElementById('middle');
    const inner = document.getElementById('inner');

    // CAPTURA (tercer parámetro = true)
    outer.addEventListener('click', logEvent('Captura', 'Outer'), true);
    middle.addEventListener('click', logEvent('Captura', 'Middle'), true);
    inner.addEventListener('click', logEvent('Captura', 'Inner'), true);


    //Burbuja
    /*outer.addEventListener('click', logEvent('Captura', 'Outer'));
    middle.addEventListener('click', logEvent('Captura', 'Middle'));
    inner.addEventListener('click', logEvent('Captura', 'Inner'));*/