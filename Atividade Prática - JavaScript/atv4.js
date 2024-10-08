const readlineSync = require('readline-sync');

const precoPequena = 10;
const precoMedia = 12;
const precoGrande = 15;

let qtdPequena = parseInt(readlineSync.question('Digite a quantidade de camisetas pequenas vendidas: '));
let qtdMedia = parseInt(readlineSync.question('Digite a quantidade de camisetas médias vendidas: '));
let qtdGrande = parseInt(readlineSync.question('Digite a quantidade de camisetas grandes vendidas: '));

let totalPequenas = qtdPequena * precoPequena;
let totalMedias = qtdMedia * precoMedia;
let totalGrandes = qtdGrande * precoGrande;

let valorTotal = totalPequenas + totalMedias + totalGrandes;

console.log(`\nValor total arrecadado com a venda: R$ ${valorTotal.toFixed(2)}`);
