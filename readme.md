# Events

Deze oefening hoort bij het hoofdstuk Events in de JS-cursussite. 

Schrijf je oplossingen in het bestand student.js. Let op: dit bestand is nog niet gelinkt aan `index.html`. Dat moet je zelf in orde brengen. 

## 1. Vergroot het contrast
  Als je op de knop "Vergroot het contrast" klikt, wordt deze pagina als volgt getoond:
- de tekst staat in het zwart
- de font wordt een sans-serif font
- de font wordt vergroot

Gebruik hiervoor de css klasse `.contrast` in `stijl.css`.</p>

Als je op de knop "standaard weergave" klikt, wordt de css klasse terug verwijderd.

## 2. LetterTeller
Toon het aantal karakters dat getypt zijn in het tekstveld. Het aantal wordt aangepast terwijl de gebruiker typt. 
- Gebruik een `input` event.
- Op [Javascript.info](https://javascript.info/form-elements#input-and-textarea) vind je hoe je de tekst die de gebruiker typt kan aanspreken in JS.


## 3. Toon informatie over het veld waarover je hovert
Gegeven zijn een blauw, rood en groen vakje. Zorg ervoor dat, als je over één van de vakjes beweegt met de muis, de volgende tekst verschijnt (ipv "geen informatie beschikbaar"): `Je muis beweegt over vakje 1 en dat heeft kleur "blue".` 

Als je een vakje verlaat en niet over een ander gekleurd vakje gaat, staat er `Je verlaat vakje X` waarbij `X` het nummer is van het laatst bezochte vakje. 

## 4. Verplaats cirkel
Je krijgt wat code gegeven die op een HTML canvas een cirkel kan tekenen met een gegeven grootte en op gegeven (x,y) coördinaten in dit canvas.

Maak een eventlistener die luistert naar het indrukken van de vier pijltjestoetsen en op basis van welke toets er ingedrukt is ofwel de x- ofwel de y-coördinaat van de cirkel aanpast (verhoogt of verlaagt met 10) en daarna de cirkel terug tekent.

## 5. Blad Steen Schaar
Schrijf JS code zodat je het spel blad-steen-schaar kan spelen tegen de browser. Je krijgt alvast HTML met knoppen en een beetje CSS. 
Bekijk [het filmpje](blad-steen-schaar.mp4) met een mogelijk eindresultaat. 

## 6. Hoger Lager
Maak het mogelijk om het spel "Hoger Lager" te spelen. Bepaal zelf de spelregels, bijvoorbeeld
- de computer kiest een random getal tussen 0 en 20 en de gebruiker moet het getal raden. De computer geeft de tips "hoger" en "lager".
- de computer trekt een random speelkaart. De gebruiker moet raden of de volgende kaart die de computer zal trekken hoger of lager zal zijn dan de vorige. Je kan ASCII code gebruiken om de kleur van een kaart voor te stellen.
