const title = document.querySelector('.title');
const text1 = 'HOLA MI AMOR ❤️....'.split('');
const text2 = 'QUIERO HACERTE'.split('');
const text3 = 'UNA PREGUNTA...?'.split('');
// Función para agregar texto con separación
function addTextToTitle(text) {
  const line = document.createElement('div'); // Crear un div para cada línea
  line.style.marginBottom = '20px'; // Espacio entre líneas
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ') {
      line.innerHTML += `<span>${text[index]}</span>`;
    } else {
      line.innerHTML += `<span style="margin-right: 20px;">&nbsp;</span>`;
    }
  }
  title.appendChild(line); // Agregar la línea al título
}

// Agregar ambas frases con espacio
addTextToTitle(text1);
addTextToTitle(text2);
addTextToTitle(text3);

// Aplicar animación con retraso aleatorio
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Retraso aleatorio entre 0 y 3 segundos
  element.style.animationDelay = `${randomDelay}s`;
});
