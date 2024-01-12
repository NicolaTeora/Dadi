let userDice = Math.floor((Math.random() * 6) + 1);
let computerDice = Math.floor((Math.random() * 6) + 1);
let result = '';

console.log(userDice);
console.log(computerDice);

if (userDice < computerDice) {
    result = 'Computer vince!';
} else if (computerDice < userDice) {
    result = 'Tu hai vinto!';
} else {
    result = 'Pareggio!'
}
    console.log(result);