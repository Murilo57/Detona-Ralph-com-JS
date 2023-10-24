//Const para gerenciamento de estados globais
const state = {
    //Variaveis semanticas para mudança visual 
    view: {
        squares: document.querySelectorAll(".square"), //Pegando os elementos da classe 'square'
        enemy:   document.querySelector(".enemy"), //Pegando o elemento da classe 'enemy'
        timeLeft: document.querySelector("#time-left"), //Tempo
        score : document.querySelector("#score") //Pontuação
    },
    //Variaveis para armazenar valores 
    values: {
        timerId: null, //Id dinamico que ser trocado na função moveEnemy()
        gameVelocity: 600, //valor definido de intervalo da setInterval da função moveEnemy
        hitPosition: 0, //Variavel recebe a posição do Ralph
        result: 0, //Resultado que ira receber o valor do score(pontos) na função addListenerHitBox
        currentTime: 60, //Variavel para decrementar o tempo
    },
    //Variavel de ação ao invés de uma função
    actions: {
        countDownTimerId: setInterval(countDown, 1000), //Variavel para atualizar o countDown a cada 1 segundo
    }
};

//Função para decrementar o tempo
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0) {
        //Reseta os valores de tempo e pontos
        clearInterval(state.actions.countDownTimerId) 
        clearInterval(state.values.timerId)
        alert("Game Over! O seu resultado foi: "+ state.values.result)
    }
}

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

    state.values.hitPosition = randomSquare.id

}

//Função que move a imagem do inimigo de quadrado a outro
function moveEnemy() {
        //setInterval é uma função de intervalo, estou chamando a função randomSquare no parametro pra ele trocar o Ralph de lugar de 1 em 1 segundo
        state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
}

//Função para se o click for em cima do inimigo ele ira somar 1 ponto 
function addListenerHitBox() {
    //forEach é uma função de loop onde percorre o elemento, parametro (square) passado é onde ira receber o valor do ID
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition) {
                state.values.result++
                state.view.score.textContent = state.values.result
                state.values.hitPosition = null
            }
        })
    })
}

//Função de inicio onde sera chamada outras funções ao iniciar o jogo 
function initialize() {
    moveEnemy() //Função que troca o inimigo de lugar
    addListenerHitBox(); //Função de click para somar os pontos se o Ralph estiver no quadrado
}

initialize();
