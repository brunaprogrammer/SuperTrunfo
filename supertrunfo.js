//Cartas:

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
    imagem:"https://static.wikia.nocookie.net/pokedex-br/images/a/a2/Bulbasauro_Pose.png/revision/latest?cb=20151224122219&path-prefix=pt-br",
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
    //exibirOpcoes();
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

//Exibir opções dos atributos:

/*function exibirOpcoes(){

    let opcoes = document.getElementById('opcoes');
    let opcoesTexto = "";

    for(let atributo in cardsP1.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto;

}*/

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

    let divResultado = document.getElementById("resultado");
    
    let atributoSelecionado = obtemAtributoSelecionado();

    if(cardsP1.atributos[atributoSelecionado] > cardsP2.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if( cardsP1.atributos[atributoSelecionado] < cardsP2.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }

    divResultado.innerHTML = htmlResultado;
    exibirCardP2();
}

function exibirCardP2(){

    let divCardP2 = document.getElementById("card-P2");

    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCardP2.style.backgroundImage = `url(${cardsP2.imagem})`;

    let nome = `<p class="carta-subtitle">${cardsP2.nome}</p>`;

    let opcoesTexto = "";
    for(let atributo in cardsP2.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cardsP2.atributos[atributo] + "<br>"
    }

    let html = "<div id='opcoes' class='carta-status --spacing'>";

    divCardP2.innerHTML = moldura + nome + html + opcoesTexto + "</div>";

}

