// ainda procurando uma forma lógica de usar as funções incrementar e decrementar de forma a usar o display especifico do contador que se deseja, porém ainda não encontrei uma solução para isto.

let counter
let display = spanDisplay

function spanDisplay (element){
    let display = element;
}

function decrementer (element){
    counter = display --;
    spanDisplay.innerHTML = counter;
}

function incrementer (element){
    counter = display --;
    spanDisplay.innerHTML = counter;
}