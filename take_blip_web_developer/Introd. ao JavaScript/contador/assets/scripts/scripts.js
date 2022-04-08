let count
let currentNumber = document.getElementById(display);
let div = document.getElementById(divCommentary);

function comment (){
    if (count <3){
        document.getElementById("display").style.color = "black";
        document.getElementById("display").style.backgroundColor = "red";
    }
    if (count >3){
        document.getElementById("display").style.color = "black";
        document.getElementById("display").style.backgroundColor = "yellow";
    }
    if (count >7){
        document.getElementById("display").style.color = "black";
        document.getElementById("display").style.backgroundColor = "green";
    }
}

function decrement (){
    count = currentNumber--;
    display.innerHTML = count;
    comment();
}

function increment (){
    count = currentNumber++;
    display.innerHTML = count;
    comment();
}



function test (){
    console.log('hello world');
}

test()