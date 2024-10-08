const readlineSync = require('readline-sync');

let alunos = [];
let totalAlunos = parseInt(readlineSync.question("Quantos alunos deseja cadastrar? "));

for (let i = 0; i < totalAlunos; i++) {

    let matricula = readlineSync.question(`\nInsira a matricula do aluno ${i + 1}: `);
    let nome = readlineSync.question(`\nInsira o nome do aluno ${i + 1}: `);
    let nota1 = parseFloat(readlineSync.question(`\nInsira a primeira nota do aluno ${i + 1}: `));
    let nota2 = parseFloat(readlineSync.question(`\nInsira a segunda nota do aluno ${i + 1}: `));
    console.log("\n ---------------------");

    let media = (nota1 + nota2) / 2;

    let mensagem;
    if (media > 7) {
        mensagem = "Aluno Aprovado";
    } else if (media === 7) {
        mensagem = "Aluno em Recuperação";
    } else {
        mensagem = "Aluno Reprovado";
    }

    let aluno = {
        matricula: matricula,
        nome: nome,
        nota1: nota1,
        nota2: nota2,
        media: media,
        mensagem: mensagem
    };

    alunos.push(aluno);
}

let somaMedias = 0;

console.log('\n--- Resultados dos Alunos ---');
for (let aluno of alunos) {
    console.log(`Matricula: ${aluno.matricula}, Nome: ${aluno.nome}, Média: ${aluno.media.toFixed(2)}, Situação: ${aluno.mensagem}`);
    somaMedias += aluno.media;
}

let mediaGeral = somaMedias / totalAlunos;

console.log(`\nMedia geral dos alunos: ${mediaGeral.toFixed(2)}`);
