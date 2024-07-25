


const criar = ()=>{

}

while(true){
    jogo.nome = prompt ("qual é o nome do jogo?");
    if(jogo.nome == ""){
        console.log( "o nome não pode ser vazio")
    } else {
        break
    }
}

while (true) {
    jogo.ano = Number(prompt("Qual é o ano do jogo?"));
    if(jogo.ano<1958 || jogo.ano > 2024 || isNaN (jogo.ano)){ 
    console.log ("o ano é inválido ");
    }else{
        break
    }
}

while (true) {
    if(jogo.duracao<=0|| isNaN (jogo.duracao)){ 
    jogo.duracao = Number(prompt("Qual é a duração do jogo?"));
    console.log ("o duracao é inválido ");
    }else{
        break
    }
}
while (true) {
    if(jogo.preco<=0|| isNaN (jogo.preco)){ 
    jogo.preco = Number(prompt("Qual é o preço do jogo?"));
    console.log ("o preco é inválido ");
    }else{
        break
    }
}
while (true) {
    if(jogo.estudio<=0|| isNaN (jogo.estudio)){ 
    jogo.estudio = Number(prompt("Qual é o estudio do jogo?"));
    console.log ("o estudio é inválido ");
    }else{
        break
    }
}