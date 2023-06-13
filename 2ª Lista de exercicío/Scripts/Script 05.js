let InputName01 = document.querySelector ("#InputName01");
let inputNasc01 = document.querySelector ("#inputNasc01");
let InputName02 = document.querySelector ("#InputName02");
let inputNasc02 = document.querySelector ("#inputNasc02");
let InputName03 = document.querySelector ("#InputName03");
let inputNasc03 = document.querySelector ("#inputNasc03");
let btOrganizar = document.querySelector ("#btOrganizar");
let h3Resut = document.querySelector ("#h3Resut");

function detectarMaisVelho(){
    let nome1 = String(InputName01.value);
    let nome2 = String(InputName02.value);
    let nome3 = String(InputName03.value);
    let nasc1 = Number(inputNasc01.value);
    let nasc2 = Number(inputNasc02.value);
    let nasc3 = Number(inputNasc03.value);
    
    if(nasc1<nasc2 && nasc1<nasc3 & nasc2<nasc3){
        h3Resut.innerHTML = "Mais velho: " + nome1 +"  "+ (2023 - nasc1) + "Anos" + "<br>"+
        "Meio: " + nome2 +"  "+ (2023 - nasc2) + "Anos" + "<br>"+
        "Mais novo: " + nome3 +"  "+ (2023-nasc3) + "Anos" + "<br>"
    }else if(nasc1<nasc2 && nasc1<nasc3 & nasc3<nasc2){
        h3Resut.innerHTML = "Mais velho: " + nome1 +"  "+ (2023 - nasc1) + "Anos" + "<br>"+
        "Meio: " + nome3 +"  "+ (2023 - nasc3) + "Anos" + "<br>"+
        "Mais novo: " + nome2 +"  "+ (2023-nasc2) + "Anos" + "<br>"
    }else if(nasc2< nasc1 && nasc2<nasc3 & nasc1 < nasc3){
        h3Resut.innerHTML = "Mais velho: " + nome2 +"  "+ (2023 - nasc2) + "Anos" + "<br>"+
        "Meio: " + nome1 +"  "+ (2023 - nasc1) + "Anos" + "<br>"+
        "Mais novo: " + nome3 +"  "+ (2023-nasc3) + "Anos" + "<br>"
    }else if(nasc2< nasc1 && nasc2<nasc3 & nasc3 < nasc1){
        h3Resut.innerHTML = "Mais velho: " + nome2 +"  "+ (2023 - nasc2) + "Anos" + "<br>"+
        "Meio: " + nome3 +"  "+ (2023 - nasc3) + "Anos" + "<br>"+
        "Mais novo: " + nome1 +"  "+ (2023-nasc1) + "Anos" + "<br>"
    }else if(nasc3 < nasc1 && nasc3 < nasc2 & nasc1<nasc2){
        h3Resut.innerHTML = "Mais velho: " + nome3 +"  "+ (2023 - nasc3) + "Anos" + "<br>"+
        "Meio: " + nome1 +"  "+ (2023 - nasc1) + "Anos" + "<br>"+
        "Mais novo: " + nome2 +"  "+ (2023-nasc2) + "Anos" + "<br>"
    }else if(nasc3 < nasc1 && nasc3 < nasc2 & nasc2<nasc1){
        h3Resut.innerHTML = "Mais velho: " + nome3 +"  "+ (2023 - nasc3) + "Anos" + "<br>"+
        "Meio: " + nome2 +"  "+ (2023 - nasc2) + "Anos" + "<br>"+
        "Mais novo: " + nome1 +"  "+ (2023-nasc1) + "Anos" + "<br>"
    }else if(nasc1 === nasc2 & nasc1 < nasc3){
        h3Resut.innerHTML = nome1 +" e "+ nome2 + " tem a mesma idade " + (2023-nasc1)+" anos" +"<br>"+
        "O mais novo é " + nome3 +"  "+(2023-nasc3) + " anos"
    }else if(nasc1 === nasc2 & nasc1 > nasc3){
        h3Resut.innerHTML ="O mais velho é " + nome3 +"  "+(2023-nasc3) + " anos"+"<br>"+
        nome1 +" e "+ nome2 + " tem a mesma idade " + (2023-nasc1)+" anos" 
    }else if(nasc2===nasc3 & nasc2<nasc1){
        h3Resut.innerHTML = nome2 +" e "+ nome1 + " tem a mesma idade " + (2023-nasc2)+" anos" +"<br>"+
        "O mais novo é " + nome1 +"  "+(2023-nasc3) + " anos"
    }else if(nasc2===nasc3 & nasc2>nasc1){
        h3Resut.innerHTML ="O mais velho é " + nome1 +"  "+(2023-nasc1) + " anos"+"<br>"+
        nome2 +" e "+ nome3 + " tem a mesma idade " + (2023-nasc2)+" anos" 
    }else if(nasc1===nasc3 & nasc1< nasc2){
        h3Resut.innerHTML = nome1 +" e "+ nome3 + " tem a mesma idade " + (2023-nasc1)+" anos" +"<br>"+
        "O mais novo é " + nome2 +"  "+(2023-nasc2) + " anos"
    }else if(nasc1===nasc3 & nasc2<nasc1){
        h3Resut.innerHTML ="O mais velho é " + nome2 +"  "+(2023-nasc2) + " anos"+"<br>"+
        nome1 +" e "+ nome3 + " tem a mesma idade " + (2023-nasc1)+" anos" 
    }else{
        h3Resut.innerHTML = "Todos tem a mesma idade"}
}
btOrganizar.onclick = function(){
    detectarMaisVelho()
}