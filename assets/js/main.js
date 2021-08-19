/* Vergleiche die Spielerwerte mit if, else if Statements. Wer die meisten Punkte bekommt gewinnt.
Gib die Punkte und den Gewinner im HTML aus. 
Vergiss nicht Unentschieden (draw) zu behandeln.  */

function playGame() {
    let sizeJohn = document.getElementById("sizeJohn").value
    let ageJohn = document.getElementById("ageJohn").value
    let sizeMeike = document.getElementById("sizeMeike").value
    let ageMeike = document.getElementById("ageMeike").value
    let pointsJohn = (ageJohn * 5 + sizeJohn)
    let pointsMeike = (ageMeike * 5 + sizeMeike)
    console.log(pointsJohn)
    console.log(pointsMeike)



    document.getElementById("pointsJohn").innerHTML = pointsJohn
    document.getElementById("pointsMeike").innerHTML = pointsMeike

    if (pointsJohn > pointsMeike) {
        document.getElementById("resultGame").innerHTML = "John hat gewonnen!";
    } else if (pointsMeike > pointsJohn) {
        document.getElementById("resultGame").innerHTML = "Meike hat gewonnen";
    } else {
        document.getElementById("resultGame").innerHTML = "Unentschieden"
    }
}


/* 
Aufgabenstellung

Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten. Wenn die Zahl größer als 27 ist, gib 2 mal die absolute Differenz zurück.

Teste die Nummern: 35, 74, 123.

Assets:
if
else 
return
 */
// calcDifference wegen return
function checkDifference() {
    let resultNum = document.getElementById("numDiff").value
    let subNum = 27
    let difference = (resultNum - subNum)
    console.log(difference)


    if (difference > subNum) {
        // difference = difference * 2
        if (difference > 0) {
            difference *= 2
        } else {
            difference *= -2
        }
    }
    document.getElementById("resultDiff").innerHTML = difference;
    // return difference 
}

// function checkDifference() {
//     let difference = calcDifference();

// Ich habe das nur gemacht wegen return, return gibt ein Funktionsergebnis zurück
// }



/* 
Aufgabenstellung

Schreibe eine Funktion mit zwei Parametern (Zahlen).
Sie soll die Summe dieser Zahlen berechnen.
Wenn beide Parameter gleich sind, soll sie die (Summe * 5) ausgeben.

Assets:
if else
function 
logical operators  == 
*/


function sumValues() {
    let num1 = Number(document.getElementById("numSum1").value)
    let num2 = Number(document.getElementById("numSum2").value)
    let calcSum = num1 + num2;
    console.log(calcSum)

    if (num1 == num2) {
        calcSum *= 5
        console.log(calcSum)
    }
    
    document.getElementById("resultSum").innerHTML = calcSum;
}