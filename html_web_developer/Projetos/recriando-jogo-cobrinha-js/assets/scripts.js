//aqui declaramos as variaveis canvas que pega o elemento em HTML, o context que defini a variavel canvas com a renderização de '2d', sendo que a variavel box defini o "zoom" do canva;

let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 30;

// definição da cobra como um array, pois está irá receber diversos valores ao decorrer do game.

let snake = [];

// definição dos parametros da cobra, já deixando claro que a cobra inicia no ponto [11,11] do canvas como ponto de partida.

snake[0] = {
    x: 11 * box,
    y: 11 * box
};

// definição da direção que iniciará a cobra.

let direction = "down";

/* definição de aleatoriedade da posição dos alimentos, usando da função Math.random. 

Onde é necessário definir qual limite: multiplicando a função com o número limite. E para incluir é necessário adicionar '+1'.
*/

let food = {
    x: Math.floor(Math.random() * 22 +1) * box,
    y: Math.floor(Math.random() * 15 +1) * box
}


/* função para criar abertura, porém ainda não sei como criar um tempo para que
 esta desapareça depois de alguns segundo, para dar inicio ao jogo, pensei em
 criar um botão, mas prefiro esperar mais um pouco, para adquirir os 
 conhecimentos necessários e mais para frente retornar aqui.

    function init(){
        context.fillStyle = "black";
        context.fillRect(0, 0, 26 * box, 26 * box);
        context.strokeText('Snake Game', 250, 250);
        context.font = "30px arial";
        context.strokeStyle = "white";
    }
*/



// aqui está a cor de fundo do canvas

function addBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 26 * box, 26 * box);
}

// funções para desenhar a cobra e a comida no interior do canvas.

function addSnake(){
    for (i = 0; i < snake.length; i++) {
        context.fillStyle= 'lime';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function addFood(){
    context.fillStyle = 'white';
    context.fillRect(food.x, food.y, box, box);
}

// definição de quais teclas poderão mudar o sentido da cobra, usando do keyCode das teclas, quando tecladas.

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

// aqui é o conteúdo que irá rodar no game.

function start(){
    
    addBackground();
    addSnake();
    addFood();

    // cria os limites da tela e como devem agir quando alcança-los, para evitar que a cobra suma da tela.

    if (snake[0].x > 22 *box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 25 * box;
    if (snake[0].y > 16 *box && direction == "down") snake[0].y = -1 * box;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // Definição do fim do jogo para quando a cobra tocar em alguma parte do seu corpo, onde se para o time, surge um alert que quando fechado dá um refresh na página.

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert("GAME OVER");
            document.location.reload();
        }
    }

    // ao declarar as coordenadas assim evita que fiquem fixas em um só lugar, dando a cobra movimentos coordenados sempre para frente conforme sua direção atual.

    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;
    
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    // Definição do que acontece caso a cabeça da cobra alcance o alimento, defini que deve-se acrescentar mais um quadrado ao seu tamanho, aumentando assim gradativamente, conforme vai pegando os alimentos na trajetoria. 

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    // sobre a criação de uma nova cabeça, definição dos parametros.

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    // Isso evita que a nova parte do corpo seja excluida, ou se torne uma especie de "segunda cabeça".

    snake.unshift(newHead);
}

// Definição da velocidade do jogo, quanto maior o valor, mais lento fica.

let game = setInterval (start, 130);