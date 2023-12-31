/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let x = 4;
let y = 7;

if (x > y) {
  console.log("il numero più grande è", x);
} else if (x < y) {
  console.log("il numero più grande è", y);
} else {
  console.log("i numeri sono  uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let n = 9;
if (n !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let x2 = 10;
if (x2 % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let x3 = 5;
let y3 = 8;

if (x3 === 8 || y3 === 8 || x3 + y3 === 8 || x3 - y3 === 8) {
  console.log("verificato");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 120;
let costShipping = 10;
let totalCost = totalShoppingCart;

if (totalShoppingCart < 50) {
  totalCost += costShipping;
}
console.log("Totale da pagare: ", totalCost);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 120;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let costShipping2 = 10;
let totalCost2 = totalShoppingCart2;

if (totalShoppingCart2 < 50) {
  totalCost2 += costShipping2;
}
console.log("Totale da pagare: ", totalCost2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let z1 = 90;
let z2 = 50;
let z3 = 70;

if (z1 >= z2 && z2 >= z3 && z3 <= z1) {
  console.log(z1, z2, z3);
} else if (z3 >= z2 && z2 >= z1 && z1 <= z3) {
  console.log(z3, z2, z1);
} else z1 >= z3 && z3 >= z2 && z2 <= z1;
{
  console.log(z1, z3, z2);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let doubt = "Ciao";

if (typeof doubt === "number") {
  console.log("È un numero");
} else {
  console.log("Non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let number = 20;

if (number % 2 === 0) {
  console.log("Il numero è pari");
} else console.log("il numero è dispari!");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Minore di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let newArray = [];
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);
newArray.push(6);
newArray.push(7);
newArray.push(8);
newArray.push(9);
newArray.push(10);

console.log(newArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

newArray[9] = 100;
console.log(newArray);
