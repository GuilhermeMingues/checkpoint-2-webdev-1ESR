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

//QUESTÃO 6
let = i;

do {
    console.log(i);
    i--;
} while (i >=1);

console.log("FIM!");

//QUESTÃO 7
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de Idade";
    } else if (idade >= 18 && idade < 60) {
        return "Maior de Idade";
    } else {
        return "Idoso";
    }
}

console.log(verificarIdade(15));
console.log(verificarIdade(25));
console.log(verificar(65));

// QUESTÃO 8
let temSenhaCorreta = true;
let temBiometriaAutenticada = false;

let acessoPermitido = temSenhaCorreta || temBiometriaAutenticada;

console.log("Acesso Permitido:", acessoPermitido);
console.log("Acesso Negado", !acessoPermitido);

//QUESTÃO 9
let tarefas = "Estudar, Trabalhar, Academia, Ler";

let arrayTarefas = tarefas.split(",");
let tarefasFormatadas = arrayTarefas.join(" | ");

let temEstudar = tarefas.includes("Estudar");

console.log("Array:", arrayTarefas);
console.log("Formato:", tarefasFormatadas);
console.log("Contem 'estudar'?", temEstudar);