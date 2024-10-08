const readlineSync = require('readline-sync');

let valorConta = parseFloat(readlineSync.question('Insira o valor total da conta: '));

let valorCarlos = parseInt(valorConta / 3);
let valorAndre = parseInt(valorConta / 3);

let valorFelipe = valorConta - (valorCarlos + valorAndre);

console.log(`\nCarlos irá pagar: R$ ${valorCarlos.toFixed(2)}`);
console.log(`André irá pagar: R$ ${valorAndre.toFixed(2)}`);
console.log(`Felipe irá pagar: R$ ${valorFelipe.toFixed(2)}`);
