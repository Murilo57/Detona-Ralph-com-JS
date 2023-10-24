//Aqui nessa const state sera feito o gerenciamento de estados globais
const state = {
    //Variaveis semanticas para mudança visual dinamica 
    view: {
        squares: document.querySelectorAll(".square"), //Pegando os elementos da classe 'square'
        enemy:   document.querySelector(".enemy"), //Pegando o elemento da classe 'enemy'
        timeLeft: document.querySelector("#time-left"), //Tempo
        score : document.querySelector("#score") //Pontuação
    },
    values: {},
};

//Qual o conceito de um Listener?
//É uma função que fica 'ouvindo' uma ação, onde você associa a um evento e ele fica esperando para executar alguma ação

//Função para pegar um quadrado aleatorio que ira receber o inimigo
function randomSquare() {

    //Função para limpar todos os quadrados que houver a classe "enemy"
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy")
    })

    //Variavel utilizando o metodo 'floor' de arredondamento da classe 'Math' e pegando um numero aleatorio de 1 a 9 com o metodo 'random'
    let randomNumber = Math.floor(Math.random() * 9)

    //Variavel que ira pegar o valor aleatorio e trocar o 
    let randomSquare = state.view.squares[randomNumber]

    //Metodo para adicionar a classe 'enemy' 
    randomSquare.classList.add("enemy")

}

//Função que move a imagem do inimigo de quadrado a outro
function moveEnemy() {
    
}



function addListenerHitBox() {
    //forEach é uma função de loop onde percorre o elemento, parametro (square) passado é onde ira receber o valor do ID
    // state.view.squares.forEach((square) => {
    //     if (square.id === ) {}
    // })
}

//Função de inicio onde sera chamada outras funções ao iniciar o jogo 
function initialize() {

    randomSquare()

}


initialize();
