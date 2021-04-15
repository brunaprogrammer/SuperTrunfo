let card1 = {
    nome: "Pikachu",
    imagem:"https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png",
    atributos: {
        força: 60,
        ataque: 75,
        defesa: 50,
    }
}

let card2 = {
    nome: "Squirtle",
    imagem:"https://static.wikia.nocookie.net/pokepedia/images/e/e3/Squirtle.png/revision/latest/scale-to-width-down/278?cb=20161021203229&path-prefix=pt",
    atributos: {
        força: 65,
        ataque: 70,
        defesa: 65,
    }
}

let card3 = {
    nome: "Charmander",
    imagem:"https://i.pinimg.com/originals/d0/43/da/d043da3201ebfc6ec67d3b30f25e4db7.jpg",
    atributos: {
        força: 60,
        ataque: 65,
        defesa: 70,
    }
}

let card4 = {
    nome: "Bulbasaur",
    imagem:"https://pm1.narvii.com/6341/1479cf12930af330a7da766324dd7647a42f60c6_hq.jpg",
    atributos: {
        força: 65,
        ataque: 65,
        defesa: 65,
    }
}

let cards = [card1, card2, card3, card4];

let cardsP1;
let cardsP2;


let pontosP1 = 0;
let pontosP2 = 0;

atualizarPlacar();
atualizarCartas();

function atualizarCartas(){

    let divQuantidadeCartas = document.getElementById("quantidade-cartas");
    let html = "Quantidade de cartas no jogo " + cards.length;

    divQuantidadeCartas.innerHTML = html;
}

function atualizarPlacar(){

    let divPlacar = document.getElementById("placar");
    let html = "Jogador " + pontosP1 + "/" + pontosP2 + " Máquina";

    divPlacar.innerHTML = html;
}

//Sorteio de cartas:

function sortearCard (){
    
    let numeroCardsP2 = parseInt(Math.random() * cards.length);
    cardsP2 = cards[numeroCardsP2];
    cards.splice(numeroCardsP2, 1);

    atualizarCartas()
    let numeroCardsP1 = parseInt(Math.random() * cards.length);
   
    cardsP1 = cards[numeroCardsP1];
    cards.splice(numeroCardsP1, 1);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
   
    exibirCardP1()

}

//Exibir carta p1:

function exibirCardP1 () {

    let divCardP1 = document.getElementById('card-P1');

    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCardP1.style.backgroundImage = `url(${cardsP1.imagem})`;

    let nome = `<p class="carta-subtitle">${cardsP1.nome}</p>`;

    let opcoesTexto = "";
    for(let atributo in cardsP1.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cardsP1.atributos[atributo] + "<br>"
    }

    let html = "<div id='opcoes' class='carta-status'>";

    divCardP1.innerHTML = moldura + nome + html + opcoesTexto + "</div>";

}

//Pegar a opção selecionada:

function obtemAtributoSelecionado(){

    let radioatributo = document.getElementsByName('atributo');

    for(let i = 0; i < radioatributo.length; i++){
        if(radioatributo[i].checked){
            return radioatributo[i].value;
        }
    }

    return -1;

}

//Jogar:

function jogar(){

    let divResultado = document.getElementById("resultado");
    
    let atributoSelecionado = obtemAtributoSelecionado();

    if(atributoSelecionado == -1)return;

    if(cardsP1.atributos[atributoSelecionado] > cardsP2.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
        pontosP1++
    } else if( cardsP1.atributos[atributoSelecionado] < cardsP2.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
        pontosP2++
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }

    if(cards.length == 0){

        if(pontosP1 > pontosP2){
            htmlResultado = "<p class='resultado-final'>Venceu</p>"
        } else if(pontosP2 > pontosP1){
            htmlResultado = "<p class='resultado-final'>Perdeu</p>";
        } else {
            htmlResultado = "<p class='resultado-final'>Empatou</p>";
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;


    atualizarPlacar();
    exibirCardP2();
    atualizarCartas();
}

function exibirCardP2(){

    let divCardP2 = document.getElementById("card-P2");

    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCardP2.style.backgroundImage = `url(${cardsP2.imagem})`;

    let nome = `<p class="carta-subtitle">${cardsP2.nome}</p>`;

    let opcoesTexto = "";
    for(let atributo in cardsP2.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cardsP2.atributos[atributo] + "<br>" + "<br>"
    }

    let html = "<div id='opcoes' class='carta-status --spacing'>";

    divCardP2.innerHTML = moldura + nome + html + opcoesTexto + "</div>";

}

function proximaRodada(){

    let divCards = document.getElementById("cartas");
    divCards.innerHTML = `<div id="card-P1" class="carta"></div> <div id="card-P2" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
}

