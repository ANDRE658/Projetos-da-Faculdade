let NumeroTurma = document.querySelector ("#NumeroTurma");
let numeroAlunos = document.querySelector ("#numeroAlunos");
let btSeparar = document.querySelector ("#btSeparar");
let h3Resutado = document.querySelector ("#h3Resutado");

function separadorTurma(){
    let turmas = Number(NumeroTurma.value);
    let Alunos = Number(numeroAlunos.value)
    let alunosPorTurma = Math.floor(Alunos/turmas)
    let alunosSemTurma = (Alunos%turmas)

    h3Resutado.innerHTML = "Quantidade de alunos por turma: " + alunosPorTurma + "<br>"
    h3Resutado.innerHTML += "Numeros de alunos sem turma: " + alunosSemTurma
}
btSeparar.onclick = function(){
    separadorTurma()
}