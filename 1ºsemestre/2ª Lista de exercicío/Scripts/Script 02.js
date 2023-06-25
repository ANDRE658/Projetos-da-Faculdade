let inputQtdPessoas = document.querySelector ("#inputQtdPessoas");
let btCalcular = document.querySelector ("#btCalcular");
let h4Resut = document.querySelector ("#h4Resut");

function calcularReceita(){
    let numPessoas = Number(inputQtdPessoas.value);

    h4Resut.innerHTML = "A quantidade de ovo a ser usada é de: " + (numPessoas * 2) + " unidades"+ "<br>"+
    "A quantidade de queijo a ser usada é de: " + (numPessoas * 50) + "g"
}

btCalcular.onclick = function(){
    calcularReceita()
}