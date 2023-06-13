let inputNumber = document.querySelector ("#inputNumber");
let btVerificar = document.querySelector ("#btVerificar");
let h3Result = document.querySelector ("#h3Result");

function btVerificarImPar(){
    let numero = Number(inputNumber.value);
    
    if(numero %2===0){
        h3Result.innerHTML = "O número é PAR"
    }else{
        h3Result.innerHTML = "O número é IMPAR"
    }
}
btVerificar.onclick = function(){
    btVerificarImPar()
}