let inputNum1 = document.querySelector ("#inputNum1");
let inputNum2 = document.querySelector ("#inputNum2");
let btVerificar = document.querySelector ("#btVerificar");
let h3Resultado = document.querySelector ("#h3Resultado");

function VerificarMaior(){
    let num01 = Number(inputNum1.value);
    let num02 = Number(inputNum2.value);
    
    if(num01>num02){
        h3Resultado.innerHTML = "O primeiro número é maior"
    }else if(num02>num01){
        h3Resultado.innerHTML = "O segundo numero é maior"
    }else{
        h3Resultado.innerHTML = "Os números são iguais"
    }
}
btVerificar.onclick = function(){
    VerificarMaior()
}