//1. Criar 4 variáveis para receber as notas de um aluno, calcular e mostrar a média desse aluno.
var readlineSync = require('readline-sync');

let nota1 = readlineSync.question("Insira a primeira nota: ");
nota1 = parseInt(nota1);
let nota2 = readlineSync.question("Insira a segunda nota: ");
nota2 = parseInt(nota2);
let nota3 = readlineSync.question("Insira a terceira nota: ");
nota3 = parseInt(nota3);
let nota4 = readlineSync.question("Insira a quarta nota: ");
nota4 = parseInt(nota4);


let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("A média do aluno é " + media + ".");