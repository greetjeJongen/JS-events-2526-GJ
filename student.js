// Je krijgt hieronder wat code die een cirkel tekent op een canvas. 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Schrijf hieronder nu code die ervoor zorgt dat de cirkel 10 pixels naar rechts beweegt als je op de rechterpijl drukt, naar links met de linkerpijl, naar boven met de bovenpijl en naar beneden met de onderpijl. Gebruik een eventlistener voor het indrukken van de pijltjestoetsen die de te schrijven functie moveCirkel triggert. 
