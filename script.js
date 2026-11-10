let tela = document.querySelector("#tela-de-pintura");
let corAzul = document.querySelector("#pincel-azul");
let corVermelha = document.querySelector("#pincel-vermelho");
let corAmarela = document.querySelector("#pincel-amarelo");
let corPreta = document.querySelector("#pincel-preto");
let corRosa = document.querySelector("#pincel-rosa");
let corRoxa = document.querySelector("#pincel-roxo");
let corVerde = document.querySelector("#pincel-verde");
let corLaranja = document.querySelector("#pincel-laranja");
let corMarrom = document.querySelector("#pincel-marrom");

corAzul.addEventListener("click", azul);
corVermelha.addEventListener("click", vermelho);
corAmarela.addEventListener("click", amarelo);
corPreta.addEventListener("click", preto);
corRosa.addEventListener("click", rosa);
corRoxa.addEventListener("click", roxo);
corVerde.addEventListener("click", verde);
corLaranja.addEventListener("click", laranja);
corMarrom.addEventListener("click", marrom);
let nomeCor = document.querySelector("h3");

function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul";
}

function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = "Vermelho";
}

function amarelo(){
    tela.style.background = "yellow";
    nomeCor.innerHTML = "Amarelo";
}

function preto(){
    tela.style.background = "black";
    nomeCor.innerHTML = "Preto";
}

function rosa(){
    tela.style.background = "rgb(255, 2, 221)";
    nomeCor.innerHTML = "Rosa";
}

function roxo(){
    tela.style.background = "purple";
    nomeCor.innerHTML = "Roxo";
}

function verde(){
    tela.style.background = "green";
    nomeCor.innerHTML = "Verde";
}

function laranja(){
    tela.style.background = "orange";
    nomeCor.innerHTML = "Laranja";
}

function marrom(){
    tela.style.background = "brown";
    nomeCor.innerHTML = "Marrom";
}
