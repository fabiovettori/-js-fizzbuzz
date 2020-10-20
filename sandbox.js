// FizzBizz Test JS
// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

// variabili da sostituire
var multiploA;
var multiploB;
var multiploC;

// numeri corrispondenti (#rif.)
var numeroA = 3;
var numeroB = 5;
var numeroC = 15;

// numero campioni da includere
var campioneNumeri = 100;

// analisi: stampo tutti i numeri del campione, quando incontro uno dei numeri #rif. li vado a sostituire utilizzando una condizione opportuna.
for (var i = 0; i < (campioneNumeri + 1); i++) {
    // console.log(i);
    if (i % numeroA == 0 && i !== 0 && i % numeroB !== 0) {
        var multiploA = i;
        multiploA = 'Fizz';
        console.log(multiploA);
    } else if (i % numeroB == 0 && i !== 0 && i % numeroA !== 0){
        var multiploB = i;
        multiploB = 'Buzz';
        console.log(multiploB);
    } else if (i % numeroA == 0 && i !== 0 && i % numeroB == 0){
        var multiploC = i;
        multiploC = 'FizzBuzz';
        console.log(multiploC);
    } else {
        console.log(i);
    }

}
