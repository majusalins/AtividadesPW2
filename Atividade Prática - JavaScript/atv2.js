const readlineSync = require('readline-sync');

let salarioInicial = parseFloat(readlineSync.question("Digite o salario do funcionario: "));

if (isNaN(salarioInicial)) {
    console.log("Insira um valor válido!");
} else {

    let salarioAumento = salarioInicial + (salarioInicial * 0.20);

    let descontoINSS = salarioComAumento * 0.08;

    let salarioFinal = salarioAumento - descontoINSS;

    console.log(`Salário inicial: R$ ${salarioInicial.toFixed(2)}`);
    console.log(`Salário com aumento de 20%: R$ ${salarioAumento.toFixed(2)}`);
    console.log(`Desconto de 8% do INSS: R$ ${descontoINSS.toFixed(2)}`);
    console.log(`Salário final após desconto: R$ ${salarioFinal.toFixed(2)}`);
}
