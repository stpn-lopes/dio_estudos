let count
let currentNumber = document.getElementById(display);

function decrement (){
    count = currentNumber--;
    display.innerHTML = count;
}

function increment (){
    count = currentNumber++;
    display.innerHTML = count;
}

function test (){
    console.log('hello world');
}

test()