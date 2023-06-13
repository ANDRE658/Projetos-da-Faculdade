let notaFinal = document.querySelector("#notaFinal");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarAprovação() {
  let nota = Number(notaFinal.value);

  if (nota < 60 && nota > 40) {
    h3Resultado.innerHTML = "Fazer prova substitutiva";
  } else if (nota >= 60) {
    h3Resultado.innerHTML = "Aprovado";
  } else {
    h3Resultado.innerHTML = "Reprovado";
  }
}

btCalcular.onclick = function() {
  verificarAprovação();
};
