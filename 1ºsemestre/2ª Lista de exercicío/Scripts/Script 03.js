let PriNum = document.querySelector ("#PriNum");
let SegNum = document.querySelector ("#SegNum");
let btExecut = document.querySelector ("#btExecut");
let h3result = document.querySelector ("#h3result");

function CalcularPrincipaisOpereções(){
    let num1 = Number(PriNum.value);
    let num2 = Number(SegNum.value);

    h3result.innerHTML = "Soma: " + (num1 + num2) + "<br>" +
    "Subtração: " + (num1 - num2)+ "<br>" + 
    "Mutiplicação: " + (num1 * num2)+ "<br>" + 
    "Divisão: " + (num1/num2) 
 }

 btExecut.onclick = function() {
    CalcularPrincipaisOpereções()
 }