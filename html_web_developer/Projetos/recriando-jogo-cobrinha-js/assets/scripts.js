let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 25;

let snake = [];
snake[0] = {
    x: 10 * box,
    y: 10 * box
};

let direction = "right";

function addBG() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 20 * box, 20 * box);
}

function addSnake (){
    for (i = 0; i < snake.length; i++) {
        context.fillStyle= 'tomato';
        context.fillRect(snake[i].x,snake[i].y, box, box);
    }
}

function start(){
    addBG();
    addSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval (start, 100);

start()