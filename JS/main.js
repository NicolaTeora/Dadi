// dichiaro le variabili
let userDice = Math.floor((Math.random() * 6) + 1);
let computerDice = Math.floor((Math.random() * 6) + 1);
let result = '';

console.log(userDice);
console.log(computerDice);

//faccio i confronti tra i risultati
if (userDice < computerDice) {
    result = 'Computer vince!';
} else if (computerDice < userDice) {
    result = 'Tu hai vinto!';
} else {
    result = 'Pareggio!'
};
    console.log(result);