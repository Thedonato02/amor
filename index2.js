const title = document.querySelector('.title');

const text1 = 'Quiero darte gracias por todo lo que has hecho por mi'.split('');
const text2 = 'en todo este tiempo.'.split('');
const text3 = 'Eres una bendicion de Dios'.split('');
const text4 = 'por haber llegado a mi vida.'.split('');
const text5 = 'Así también quiero que sepas'.split('');
const text6 = 'lo importante que eres para mí.'.split('');
const text7 = 'En verdad, el amor que siento por ti es muy inmenso,'.split('');
const text8 = 'que no tiene comparación.'.split('');
const text9 = 'Estare para toda la vida'.split('');
const text10 = 'TE AMO AMOR DE MI VIDA'.split('');
const text11 = 'MI MUJER Y FUTURA ESPOSA ❤️'.split('');
// Función para agregar texto con separ
function addTextToTitle(text) {
  const line = document.createElement('div'); // Crear un div para cada línea
  line.style.marginBottom = '20px'; // Espacio entre líneas
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ') {
      line.innerHTML += `<span>${text[index]}</span>`;
    } else {
      line.innerHTML += `<span style="margin-right: 8px;">&nbsp;</span>`; // Espaciado más natural
    }
  }
  title.appendChild(line); // Agregar la línea al título
}

// Agregar cada frase con separación
addTextToTitle(text1);
addTextToTitle(text2);
addTextToTitle(text3);
addTextToTitle(text4);
addTextToTitle(text5);
addTextToTitle(text6);
addTextToTitle(text7);
addTextToTitle(text8);
addTextToTitle(text9);
andTextToTitle(text10);
andTextToTitle(text11);

// Aplicar animación con retraso aleatorio
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Retraso aleatorio entre 0 y 3 segundos
  element.style.animationDelay = `${randomDelay}s`;
});
