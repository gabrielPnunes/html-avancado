let tela = document.getElementById("tela");
let context = tela.getContext("2d");

let circulo = {

    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0,
}

function desenharCirculo(c) {

    context.beginPath();
    context.rect(0, 0 ,500, 500);
    context.fillStyle = "aqua";
    context.fill();

    context.beginPath();
    context.strokeStyle = "aquamarine";
    context.fillStyle = "blueviolet";
    context.arc(c.x, c.y, c.raio, c.inicio, c.fim);

    context.fill();
    context.stroke();
}

setInterval(function () {

    if(circulo.fim < 2* Math.PI){
        circulo.fim += 0.3;
        circulo.x += 5;
    }

    desenharCirculo(circulo)

},30);