let num1 = 10
let num2 = 3 

let divResult = num1 / num2
let expr = (num2 / num1) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(1)     // toFixed(1) επιστρεφει με ενα δεκαδικο
let intResult = Math.floor(num1 / num2)     //Στρογγυλοποιεί προς τα κάτω στον πλησιέστερο ακέραιο.Math.floor(3.333333...) = 3.
let upperInt = Math.ceil(num1/num2)         //Στρογγυλοποιεί προς τα πάνω στον πλησιέστερο ακέραιο.Math.ceil(3.333333...) = 4.
let roundResult = Math.round(num1 / num2)   //Στρογγυλοποιεί στον πλησιέστερο ακέραιο.Ανάλογα το δεκαδικό μέρος είναι < 0.5, η ≥ 0.5


let modResult = num1 % num2  //Το modulo διατηρεί το πρόσημο του Διαιρετέου

console.log(divResult, expr, fixedDiv, intResult, upperInt, roundResult, modResult)