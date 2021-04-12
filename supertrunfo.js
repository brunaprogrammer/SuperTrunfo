//Cartas:

let card1 = {
    nome: "Pikachu",
    atributos: {
        força: 60,
        ataque: 75,
        defesa: 50,
    }
}

let card2 = {
    nome: "Squirtle",
    atributos: {
        força: 65,
        ataque: 70,
        defesa: 65,
    }
}

let card3 = {
    nome: "Charmander",
    atributos: {
        força: 60,
        ataque: 65,
        defesa: 70,
    }
}

let card4 = {
    nome: "Bulbasaur",
    atributos: {
        força: 65,
        ataque: 65,
        defesa: 65,
    }
}

let cards = [card1, card2, card3, card4];

let cardsP1;

let cardsP2;

//Sorteio de cartas:

function sortearCard (){
    
    let numeroCardsP2 = parseInt(Math.random() * 4);
    cardsP2 = cards[numeroCardsP2];

    let numeroCardsP1 = parseInt(Math.random() * 4);
    while(numeroCardsP1 == numeroCardsP2){
       numeroCardsP1 = parseInt(Math.random() * 4);
    }
    cardsP1 = cards[numeroCardsP1];
    console.log(cardsP1);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    exibirOpcoes();

}

//Exibir opções dos atributos:

function exibirOpcoes(){

    let opcoes = document.getElementById('opcoes');
    let opcoesTexto = "";

    for(let atributo in cardsP1.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto;

}

//Pegar a opção selecionada:

function obtemAtributoSelecionado(){

    let radioatributo = document.getElementsByName('atributo');

    for(let i = 0; i < radioatributo.length; i++){
        if(radioatributo[i].checked){
            return radioatributo[i].value;
        }
    }
}

//Jogar:

function jogar(){

    let atributoSelecionado = obtemAtributoSelecionado();

    if(cardsP1.atributos[atributoSelecionado] > cardsP2.atributos[atributoSelecionado]){
        alert("Você venceu!");
    } else if( cardsP1.atributos[atributoSelecionado] < cardsP2.atributos[atributoSelecionado]){
        alert("Você perdeu!")
    } else {
        alert("Empate")
    }
}

