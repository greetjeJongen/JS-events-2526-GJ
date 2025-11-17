// groot contrast
document.getElementById("contrast").addEventListener("click", () => {
  document.querySelector("html").classList.add("groot-contrast");
})
document.getElementById("standaard").addEventListener("click", () => {
  document.querySelector("html").classList.remove("groot-contrast");
})


// Toon informatie over het veld waarover je hovert
const blokken = document.querySelectorAll("div.groot");
blokken.forEach(blok => {
  blok.addEventListener("mouseenter", (e) => {
    const nummer = e.target.innerHTML;
    const kleur = e.target.style.backgroundColor;
    document.getElementById("information").innerHTML = `Je zit in blok ${nummer}. Die heeft kleur ${kleur}.`;
  })
  blok.addEventListener("mouseleave", (e) => {
    const nummer = e.target.innerHTML;
    document.getElementById("information").innerHTML = `Je ging uit blok ${nummer}`;
  })
});

// LetterTeller
const inputfield = document.getElementById("tekst");
const telLetters = () => {
  const lengte = inputfield.value.length;
  document.querySelector("#letterTeller .result").innerHTML = lengte;
}

inputfield.addEventListener("input", telLetters);


// Oefening ...
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


// Oefening
// Blad - Steen - Schaar
let spelerGewonnen = 0;
let browserGewonnen = 0;

let computerKiestBladSteenSchaar = () => {

  const number = Math.floor(Math.random() * 3) + 1;
  switch (number) {
    case 1:
      return "blad";
    case 2:
      return "steen";
    default: return "schaar";
  }
}


let speelResultaat = (keuze1, keuze2) => (keuze1 === "blad" && keuze2 === "steen")
  || (keuze1 === "steen" && keuze2 === "schaar")
  || (keuze1 === "schaar" && keuze2 === "blad");


let speelBladSteenSchaar = (waarde => {
  let computerGuess = computerKiestBladSteenSchaar()
  console.log(computerGuess);
  let userWaarde = waarde;
  let result = "";
  if (userWaarde === computerGuess) {
    result = "Gelijkspel";
    spelerGewonnen++;
    browserGewonnen++;
  }
  else if (speelResultaat(userWaarde, computerGuess)) {
    result = `Gewonnen. De browser koos voor ${computerGuess}.`;
    spelerGewonnen++;
  }
  else {
    result = `Verloren. De browser koos voor ${computerGuess}.`;
    browserGewonnen++;
  }

  result += ` <br>Tussenstand Speler - Browser: ${spelerGewonnen} - ${browserGewonnen}.`;
  document.getElementById("result").innerHTML = result;
})

let restart = () => {
  spelerGewonnen = 0;
  browserGewonnen = 0;
  document.getElementById("result").innerHTML = "Je kan opnieuw beginnen";
}

let bladButton = document.getElementById("blad").addEventListener("click", () => speelBladSteenSchaar("blad"));
let steenButton = document.getElementById("steen").addEventListener("click", () => speelBladSteenSchaar("steen"));
let schaarButton = document.getElementById("schaar").addEventListener("click", () => speelBladSteenSchaar("schaar"));
document.getElementById("restart").addEventListener("click", restart);




