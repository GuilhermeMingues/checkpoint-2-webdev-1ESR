// QUESTÃO 1
let tarefaConcluida = true;

if (tarefaConcluida === true) {
    console.log("A tarefa está concluída!");
} else {
    console.log("A tarefa não foi concluída");
}

// QUESTÃO 2 
let prioridade = 2 

if (prioridade === 1) {
    console.log("Prioridade Baixa");
}   else if (prioridade === 2) {
    console.log("Prioridade Média");
}   else if (prioridade ===3) {
    console.log("Prioridade Alta");
}   else {
    console.log("Prioridade inválida");
}

//QUESTÃO 3
let = diaSemana = new Date().getDay();

switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terça-Feira");
        break;
    case 3:
        console.log("Quarta-Feira");
        break;
    case 4:
        console.log("Quinta-Feira");
        break;
    case 5:
        console.log("Sexta-Feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia Inválido");
}

// QUESTÃO 4
for (let i = 0; i <=9; i++); {
    console.log(i);
}

//QUESTÃO 5

let = i;
let = soma = 0;

while (i <= 5) {
    soma += i;
    i++;
}

console.log("Soma total:", soma);