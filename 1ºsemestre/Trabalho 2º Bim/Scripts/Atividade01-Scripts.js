//Exercício 01--------------------------------------------------------------------------------------
let lado1 = document.querySelector ("#lado1");
let lado2 = document.querySelector ("#lado2");
let BtCalcular = document.querySelector ("#BtCalcular");
let h3Resultado = document.querySelector ("#h3Resultado")

function calcular(){
    let num1 = Number(lado1.value);
    let num2 = Number(lado2.value);

    h3Resultado.innerHTML = "A &aacute;rea do terreno &eacute;: " + (num1 * num2) + " Metros quadrados";
}

BtCalcular.onclick = function() {
    calcular();
}

//Exercício 02---------------------------------------------------------------------------------------

let NumCavalos = document.querySelector ("#NumCavalos");
let btCalFerradura = document.querySelector ("#btCalFerradura");
let h3Result = document.querySelector ("#h3Result");

function CalcularFerradura(){
    Cavalos = Number(NumCavalos.value)

    h3Result.innerHTML = "O n&uacute;mero de ferraduras &agrave; serem compradas &eacute;: " + (Cavalos*4) + " ferraduras"
}
btCalFerradura.onclick = function(){
    CalcularFerradura()
}

//Exercício 03----------------------------------------------------------------------------------------

let numPao = document.querySelector ("#numPao");
let numBroa = document.querySelector ("#numBroa");
let btCalPadaria = document.querySelector ("#btCalPadaria");
let h3InfoPadaria = document.querySelector ("#h3InfoPadaria");

function CalcularRendaPadaria(){
   let QtdPao = Number(numPao.value);
   let QtdBroa = Number(numBroa.value);
   let totVendas = ((QtdPao*0.12) + (QtdBroa*1.5))
    h3InfoPadaria.innerHTML = "Vendas do dia: " + (totVendas).toFixed(2) + "R$" + "<br>" + 
    "Destinado a poupan&ccedil;a: " + ((10/100)*totVendas).toFixed(2) + "R$"
}
btCalPadaria.onclick = function(){
    CalcularRendaPadaria()
}

//Exercício 04-----------------------------------------------------------------------------------------

let inputIdade = document.querySelector ("#inputIdade");
let btCalDia = document.querySelector ("#btCalDia");
let Resutiasdevida = document.querySelector ("#Resutiasdevida");

function CalcularDiasVividos(){
    let idade = Number(inputIdade.value);
    
    Resutiasdevida.innerHTML = "Voc&ecirc; viveu " + (idade*365) + " dias"
}
btCalDia.onclick = function(){
    CalcularDiasVividos()
}

//Exercício 05------------------------------------------------------------------------------------------

let VlrGasosa = document.querySelector ("#VlrGasosa");
let TotalPago = document.querySelector ("#TotalPago");
let btCalLitros = document.querySelector ("#btCalLitros");
let h3ResultadoExe05 = document.querySelector ("#h3ResultadoExe05");

function CalcularLitrosdeGasolina(){
    vlrtot = Number(TotalPago.value).toFixed(2);
    GasolinaVlrL = Number(VlrGasosa.value);

h3ResultadoExe05.innerHTML = vlrtot + "R$, corresponde a " + (vlrtot/GasolinaVlrL).toFixed(1) + " litros de gasolina."
    
}
btCalLitros.onclick = function(){
    CalcularLitrosdeGasolina()
}

//Exercício 06---------------------------------------------------------------------------------------------

let PesodoPrato = document.querySelector ("#PesodoPrato");
let btCalPrato = document.querySelector ("#btCalPrato");
let h3VlrPrato = document.querySelector ("#h3VlrPrato");

function ClacularValorPrato(){
    let quiloPrato = Number(PesodoPrato.value);

    h3VlrPrato.innerHTML = "O valor a ser pago ser&aacute;: " + (quiloPrato*12).toFixed(2) + "R$"
}
btCalPrato.onclick = function(){
    ClacularValorPrato()
}

//Exercício 07---------------------------------------------------------------------------------------------

let diaAtual = document.querySelector ("#diaAtual");
let mêsAtual = document.querySelector ("#mêsAtual");
let CalcularDias = document.querySelector ("#CalcularDias");
let resultExer07 = document.querySelector ("#h3resultExer07");

function CalDiasdoAnoVividos(){
    let dia = Number(diaAtual.value);
    let mês = Number(mêsAtual.value);
    let diaspassados = ((mês-1)*30)+dia


    resultExer07.innerHTML = "J&aacute; se passaram desde o começo do ano " + diaspassados + " dias!"
}
CalcularDias.onclick = function(){
    CalDiasdoAnoVividos()
}

//Exercício 08---------------------------------------------------------------------------------------------

let CamisasP = document.querySelector ("#CamisasP");
let CamisasM = document.querySelector ("#CamisasM");
let CamisasG = document.querySelector ("#CamisasG");
let BtFinalizarCamisas = document.querySelector ("#BtFinalizarCamisas");
let ResumaPedidosCamisas = document.querySelector ("#ResumaPedidosCamisas");

function PedidosCamisas(){
    let camisaP = Number(CamisasP.value);
    let camisaM = Number(CamisasM.value);
    let camisaG = Number(CamisasG.value);

    ResumaPedidosCamisas.innerHTML = "O valor vendido no dia foi: " + ((camisaP*10)+(camisaM*12)+(camisaG*15)).toFixed(2) + "R$"
}
BtFinalizarCamisas.onclick = function(){
    PedidosCamisas()
}

//Exercício 09---------------------------------------------------------------------------------------------

let InputVlrXa = document.querySelector ("#InputVlrXa");
let InputVlrYa = document.querySelector ("#InputVlrYa");
let InputVlrXb = document.querySelector ("#InputVlrXb");
let InputVlrYb = document.querySelector ("#InputVlrYb");
let btCalCartesiano = document.querySelector ("#btCalCartesiano");
let h3ResultadoExe09 = document.querySelector ("#h3ResultadoExe09");
function Exercicio09(){
    let X = Number(InputVlrXa.value);
    let Y = Number(InputVlrYa.value);
    let x = Number(InputVlrXb.value);
    let y = Number(InputVlrYb.value);
    let DistanciaAB = Math.sqrt((Math.pow((x-X), 2))+(Math.pow((y-Y), 2)))

    h3ResultadoExe09.innerHTML = "A dist&acirc;ncia entre o ponto A e o ponto B &eacute;: " + DistanciaAB
}
btCalCartesiano.onclick = function(){
    Exercicio09()
}


//Exercício 10---------------------------------------------------------------------------------------------

let inputDiasSemAcidente = document.querySelector ("#inputDiasSemAcidente");
let CalcularExer10 = document.querySelector ("#CalcularExer10");
let h3ResultadoExe10 = document.querySelector ("#h3ResultadoExe10");

function ConverterDiasemData(){
    let diaSemAcidentes = Number(inputDiasSemAcidente.value);
    let anosSemAcidende = (diaSemAcidentes/365)
    let mêsesSemAcidente = ((diaSemAcidentes%365)/30)
    let diasS = ((diaSemAcidentes%365)%30)

    if(anosSemAcidende >= 1 & mêsesSemAcidente >= 1 & diasS>= 1){
        h3ResultadoExe10.innerHTML = "S&atilde;o "+  Math.trunc(anosSemAcidende) +" anos "+ Math.trunc(mêsesSemAcidente) +" meses "+ Math.trunc(diasS) + " dias sem acidente!"
    }else if(anosSemAcidende >= 1 & mêsesSemAcidente >= 1 & diasS < 1){
        h3ResultadoExe10.innerHTML = "S&atilde;o "+  Math.trunc(anosSemAcidende) +" anos e "+ Math.trunc(mêsesSemAcidente) +" meses sem acidente!"
    }else if(anosSemAcidende >= 1 & mêsesSemAcidente < 1 & diasS>= 1){
        h3ResultadoExe10.innerHTML = "S&atilde;o  "+  Math.trunc(anosSemAcidende) +" anos e "+ Math.trunc(diasS) + " dias sem acidente!"
    }else if(anosSemAcidende < 1 & mêsesSemAcidente >= 1 & diasS>= 1){
        h3ResultadoExe10.innerHTML = "S&atilde;o "+ Math.trunc(mêsesSemAcidente) +" meses "+ Math.trunc(diasS) + " dias sem acidente!"
    }else if(anosSemAcidende >= 1 & mêsesSemAcidente < 1 & diasS < 1){
        h3ResultadoExe10.innerHTML = "S&atilde;o "+  Math.trunc(anosSemAcidende) +" anos sem acidente!"
    }else if(anosSemAcidende < 1 & mêsesSemAcidente >= 1 & diasS < 1){
        h3ResultadoExe10.innerHTML = "S&atilde;o "+ Math.trunc(mêsesSemAcidente) +" meses sem acidente!"
    }else{
        h3ResultadoExe10.innerHTML = "S&atilde;o  " + Math.trunc(diasS) + " dias sem acidente!"
    }
}
CalcularExer10.onclick = function(){
    ConverterDiasemData()
}

//Exercício 11---------------------------------------------------------------------------------------------

let salarioAtual = document.querySelector ("#salarioAtual");
let btCalExe11 = document.querySelector ("#btCalExe11");
let h3Resulexer11 = document.querySelector ("#h3Resulexer11");

function ReajurtarSalario(){
    let Salario = Number(salarioAtual.value).toFixed(2);
    let SalarioReajustado = ((115/100)*Salario).toFixed(2);
    let SalaroLiquido = (SalarioReajustado -((8/100)*SalarioReajustado)).toFixed(2);

    h3Resulexer11.innerHTML = "Sal&aacute;rio sem reajuste: " + Salario +"R$"+ "<br>"+
    "Sal&aacute;rio com reajuste de 15%: " + SalarioReajustado + "R$" + "<br>"+
    "Sal&aacute;ro liquido( Desconto imposto de 8%): " + SalaroLiquido + "R$"
}
btCalExe11.onclick = function(){
    ReajurtarSalario()
}

//Exercício 12---------------------------------------------------------------------------------------------

let NumeroInteiroExe12 = document.querySelector ("#NumeroInteiroExe12");
let btOrganizarNumeros = document.querySelector ("#btOrganizarNumeros");
let h3ResultadoExer12 = document.querySelector ("#h3ResultadoExer12");

function OrganizarNumeros(){
    let NumeroAle = String(NumeroInteiroExe12.value);
    let centena = Math.floor(NumeroAle/100)
    let desena = Math.floor((NumeroAle%100)/10)
    let unidade = (NumeroAle%10)

    h3ResultadoExer12.innerHTML = "Centena: " + centena + "<br>"+
    "Desena: " + desena + "<br>" + 
    "Unidade: " + unidade 
}
btOrganizarNumeros.onclick = function(){
    OrganizarNumeros()
}

//Exercício 13---------------------------------------------------------------------------------------------

let inputRaiopizza = document.querySelector ("#inputRaiopizza");
let btCalAreaPizza = document.querySelector ("#btCalAreaPizza");
let h3ResultadoExer13 = document.querySelector ("#h3ResultadoExer13");

function CalcularAreaPizza(){
    Raio = Number(inputRaiopizza.value);
    Area = (Math.pow(Raio,2)* Math.PI).toFixed(2)

    h3ResultadoExer13.innerHTML = "A &aacute;rea da pizza &eacute; " + Area + "Cm2"
}
btCalAreaPizza.onclick = function(){
    CalcularAreaPizza()
}

//Exercício 14---------------------------------------------------------------------------------------------

let InputVlrPConta = document.querySelector ("#InputVlrPConta");
let btDividirConta = document.querySelector ("#btDividirConta");
let h3ResutadoExer14 = document.querySelector ("#h3ResutadoExer14");

function DividirValorConta(){
    let Conta = Number(InputVlrPConta.value);
    let vlrAndre = Math.floor(Conta/3)
    let vlrFelipe = Math.floor(Conta/3)
    let vlrCarlos = Conta-(vlrAndre+vlrFelipe)

    h3ResutadoExer14.innerHTML = "Valor a ser pago pelo Andr&eacute; será: " + vlrAndre + "R$" + "<br>" +
    "Valor a ser pago pelo Felipe ser&aacute;: " + vlrFelipe + "R$" + "<br>" +
    "Valor a ser pago pelo Carlos ser&aacute;: " + vlrCarlos + "R$"
}
btDividirConta.onclick = function(){
    DividirValorConta()
}