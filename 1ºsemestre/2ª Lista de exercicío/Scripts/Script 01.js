let inputdólar = document.querySelector ("#inputdólar");
let resultado  = document.querySelector ("#resultado");
let btExecultar = document.querySelector("#btExecultar");

function calcularReajuste(){
    let cotação = Number(inputdólar.value);

    resultado.innerHTML = "Cotação altual, com reajuste de 1% &eacute; de: " + ((1/100*cotação)+cotação) + "$" +
    "<br>" + "Cotação altual, com reajuste de 2% &eacute; de: " + ((2/100*cotação)+cotação) + "$"+
    "<br>" + "Cotação altual, com reajuste de 5% &eacute; de: " + ((5/100*cotação)+cotação) + "$"+
    "<br>" + "Cotação altual, com reajuste de 10% &eacute; de: " + ((10/100*cotação)+cotação) + "$";
}

btExecultar.onclick = function(){
    calcularReajuste()
}