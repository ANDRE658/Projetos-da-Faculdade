let inputMeta = document.querySelector ("#inputMeta");
let metaMin = document.querySelector ("#metaMin");
let VlrVendas = document.querySelector ("#VlrVendas");
let btCalcular = document.querySelector ("#btCalcular");
let h3Resutado = document.querySelector ("#h3Resutado");

function VerificarMetas(){
    let Meta = Number(inputMeta.value);
    let MetaMinima = Number(metaMin.value);
    let vendas = Number(VlrVendas.value);

    if(vendas >= Meta){
        h3Resutado.innerHTML = "Você atingiu a meta!!! PARABÉNS"
    }else if(vendas >= MetaMinima && vendas < Meta){
        h3Resutado.innerHTML = "Você atingiu a meta minima!"
    }else if(vendas<MetaMinima){
        h3Resutado.innerHTML = "Você não atingiu nehuma meta!"
    }
}
btCalcular.onclick = function(){
    VerificarMetas()
}