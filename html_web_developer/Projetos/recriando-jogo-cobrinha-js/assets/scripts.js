let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 30;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
};

let direction = "down";

let food = {
    x: Math.floor(Math.random() * 15 +1) * box,
    y: Math.floor(Math.random() * 15 +1) * box
}

function init(){
    context.fillStyle = "black";
    context.fillRect(0, 0, 26 * box, 26 * box);
    context.strokeText('Snake Game', 250, 250);
    context.font = "30px arial";
    context.strokeStyle = "white";
}

function addBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 26 * box, 26 * box);
}

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

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function start(){
    addBackground();
    addSnake();
    addFood();

    if (snake[0].x > 22 *box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 25 * box;
    if (snake[0].y > 16 *box && direction == "down") snake[0].y = -1 * box;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert("GAME OVER");
            document.location.reload();
        }
    }

    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;
    
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval (start, 200);