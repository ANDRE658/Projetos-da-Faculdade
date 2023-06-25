let inputSabor1 = document.querySelector ("#inputSabor1");
let inputSabor2 = document.querySelector ("#inputSabor2");
let inputSabor3 = document.querySelector ("#inputSabor3");
let inputSabor4 = document.querySelector ("#inputSabor4");
let numBebidas = document.querySelector ("#numBebidas");
let BtFinalizar = document.querySelector ("#BtFinalizar");
let h3ResuPedido = document.querySelector ("#h3ResuPedido");
let sabores = document.querySelector ("#sabores");

function FecharPedido(){
    let sabor1 = String(inputSabor1.value);
    let sabor2 = String(inputSabor2.value);
    let sabor3 = String(inputSabor3.value);
    let sabor4 = String(inputSabor4.value);
    let numRefri = Number(numBebidas.value);
    h3ResuPedido.innerHTML = "1 pizza 4 sabores : R$57,00" + "<br>" 
    + numRefri + " Refrigernates: " + (numRefri*7) + "R$"
    sabores.innerHTML ="Sabores escolhidos:" + "<br>" + sabor1 + "<br>" + sabor2 + "<br>" + sabor3 + "<br>" + sabor4 + "<br>"
    
}
BtFinalizar.onclick = function(){
    FecharPedido()
}