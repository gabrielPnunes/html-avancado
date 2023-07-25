let player = document.getElementById("player");

let xInicial = 0;
let yInicial = 0;

function moverJogadorPara(x, y) {

    let posX = x + "px";
    let posY = y + "px";

    player.style.top = posX;
    player.style.left = posY;

}

setInterval(function () {

    moverJogadorPara(xInicial++ , yInicial++);

}, 10);